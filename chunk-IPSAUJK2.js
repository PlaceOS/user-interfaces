import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-O5QLVSJE.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  DomSanitizer,
  ElementRef,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Location,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Pipe,
  Renderer2,
  RuntimeError,
  SecurityContext,
  Self,
  Service,
  SkipSelf,
  Subject,
  Subscription,
  Title,
  Version,
  afterNextRender,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  defer,
  effect,
  filter,
  first,
  firstValueFrom,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  from,
  getDOM,
  inject,
  input,
  isPromise,
  isSubscribable,
  lastValueFrom,
  makeEnvironmentProviders,
  map,
  of,
  provideAppInitializer,
  retry,
  setClassMetadata,
  signal,
  switchMap,
  take,
  timer,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵControlFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-DCEVYHNT.js";
import {
  __export,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/common/src/lib/async-handler.class.ts
var AsyncHandler = class _AsyncHandler {
  constructor() {
    this._timers = {};
    this._intervals = {};
    this._subscriptions = {};
    this._initialised = new BehaviorSubject(false);
    this.initialised = this._initialised.asObservable();
  }
  /** Whether the object has been initialised */
  get is_initialised() {
    return this._initialised.getValue();
  }
  ngOnDestroy() {
    this.destroy();
  }
  destroy() {
    for (const key in this._timers) {
      if (key in this._timers)
        this.clearTimeout(key);
    }
    for (const key in this._intervals) {
      if (key in this._intervals)
        this.clearInterval(key);
    }
    for (const key in this._subscriptions) {
      if (key in this._subscriptions)
        this.unsub(key);
    }
  }
  /**
   * Creates a named timer
   * @param name Name of the timer
   * @param fn Callback function for the timer
   * @param delay Callback delay
   */
  timeout(name, fn, delay2 = 300) {
    if (name && fn && fn instanceof Function) {
      this.clearTimeout(name);
      this._timers[name] = setTimeout(() => {
        delete this._timers[name];
        fn();
      }, delay2);
    } else {
      throw new Error(name ? "Cannot create a timeout without a callback" : "Cannot create named timeout without a name");
    }
  }
  /**
   * Clears the named timer
   * @param name Timer name
   */
  clearTimeout(name) {
    if (this._timers[name]) {
      clearTimeout(this._timers[name]);
      delete this._timers[name];
    }
  }
  /**
   * Creates a named interval
   * @param name Name of the interval
   * @param fn Callback function for the interval
   * @param delay Callback delay
   */
  interval(name, fn, delay2 = 300) {
    if (name && fn && fn instanceof Function) {
      this.clearInterval(name);
      this._intervals[name] = setInterval(() => fn(), delay2);
    } else {
      throw new Error(name ? "Cannot create a interval without a callback" : "Cannot create named interval without a name");
    }
  }
  /**
   * Clears the named interval
   * @param name Timer name
   */
  clearInterval(name) {
    if (this._intervals[name]) {
      clearInterval(this._intervals[name]);
      delete this._intervals[name];
    }
  }
  /**
   * Store named subscription
   * @param name Name of the subscription
   * @param unsub Unsubscribe callback or Subscription object
   */
  subscription(name, unsub) {
    this.unsub(name);
    this._subscriptions[name] = unsub;
  }
  hasSubscription(name) {
    return this._subscriptions[name] instanceof Subscription || !!this._subscriptions[name];
  }
  /**
   * Call unsubscribe callback with the given name
   * @param name
   */
  unsub(name) {
    if (!(name in this._subscriptions) || !this._subscriptions[name]) {
      return;
    }
    "unsubscribe" in this._subscriptions[name] ? this._subscriptions[name].unsubscribe() : this._subscriptions[name]();
    this._subscriptions[name] = null;
  }
  /** Unsubscribe to the items with names containing the given string */
  unsubWith(contains) {
    const subs = Object.keys(this._subscriptions).filter((k) => k.includes(contains));
    subs.forEach((k) => this.unsub(k));
  }
  static {
    this.\u0275fac = function AsyncHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsyncHandler)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AsyncHandler, factory: _AsyncHandler.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

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
  const query8 = url.split("?")[1] ?? "";
  for (const [key, value] of new URLSearchParams(query8)) {
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
      clearTimeout(timer2);
      reject(new DOMException("The request was aborted.", "AbortError"));
    };
    const timer2 = setTimeout(() => {
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
async function call(operation2, input2, options = {}) {
  const client = options.client ?? configured_client;
  assert(client !== null, "configure() ran before this call, or the options have a client");
  const result = await request(client, operation2, input2, options);
  return result;
}
async function request(client, operation2, input2, options) {
  const started_ms = Date.now();
  const sent = await send(client, operation2, input2, options);
  logOutcome(client, operation2, sent, Date.now() - started_ms);
  if (!sent.ok || !paged(operation2))
    return sent;
  const reply = sent.value;
  const next = (next_options = {}) => nextPage(client, operation2, input2, reply.headers, __spreadValues(__spreadValues({}, options), next_options));
  return { ok: true, value: __spreadProps(__spreadValues({}, reply), { next }) };
}
function logOutcome(client, operation2, result, duration_ms) {
  if (client.log === null)
    return;
  const log5 = scopedLog("http", { sink: client.log });
  const call_data = { name: operation2.name, method: operation2.method, duration_ms };
  if (result.ok) {
    const status2 = result.value.status;
    log5.debug(`${operation2.name}: ${status2} in ${duration_ms} ms`, __spreadProps(__spreadValues({}, call_data), { status: status2 }));
    return;
  }
  const error = result.error;
  const status = error.kind === "http" ? ` ${error.status}` : "";
  const message2 = `${operation2.name}: ${error.kind}${status} in ${duration_ms} ms`;
  if (error.kind === "aborted")
    log5.debug(message2, __spreadProps(__spreadValues({}, call_data), { error }));
  else if (error.kind === "http")
    log5.warn(message2, __spreadProps(__spreadValues({}, call_data), { error }));
  else
    log5.error(message2, __spreadProps(__spreadValues({}, call_data), { error }));
}
function paged(operation2) {
  const node = operation2.params.node;
  return node.kind === "object" && node.keys.has("offset");
}
function nextPage(client, operation2, input2, headers, options) {
  assert(isRecord(input2), "the input is an object");
  const next_offset = pageInfo(headers).next_offset;
  if (next_offset === null)
    return null;
  const offset = typeof input2["offset"] === "number" ? input2["offset"] : 0;
  if (next_offset <= offset)
    return null;
  return request(options.client ?? client, operation2, __spreadProps(__spreadValues({}, input2), { offset: next_offset }), options);
}
async function send(client, operation2, input2, options) {
  assert(isRecord(input2), "the input is an object");
  const _a = input2, { body } = _a, params = __objRest(_a, ["body"]);
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
    const answered = await waitWithin(() => Promise.resolve(mock({ name: operation2.name, input: input2 })), deadline_ms, signal2);
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
    const log5 = scopedLog("http", { sink: client.log });
    log5.info(`${operation2.name}: ${status}, renewing the credential`);
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
  const query8 = new URLSearchParams();
  for (const field of node.fields) {
    if (operation2.path_keys.includes(field.key))
      continue;
    const value = params[field.key];
    if (value === void 0 || value === null)
      continue;
    const name = operation2.wire_names?.[field.key] ?? field.key;
    if (Array.isArray(value)) {
      const items = value;
      query8.append(name, items.map(queryScalar).join(","));
    } else {
      query8.append(name, queryScalar(value));
    }
  }
  const query_text = query8.toString();
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
  let timer2;
  let onAbort;
  const stopped = new Promise((resolve) => {
    timer2 = setTimeout(() => resolve({ ok: false, error: "timeout" }), remaining_ms);
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
    clearTimeout(timer2);
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
      const token2 = await auth.token();
      return token2 === null ? null : { kind: "bearer", token: token2 };
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
      const timer2 = setTimeout(callback, milliseconds);
      return () => clearTimeout(timer2);
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
  const log5 = scopedLog("realtime", { sink: config.log ?? null });
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
    log5.info("stopped");
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
    const limit2 = call2 ? PENDING_MAX : BINDING_REQUESTS_MAX;
    const count = call2 ? calls_pending : pending.size - calls_pending;
    if (count >= limit2) {
      return Promise.resolve(failure({ kind: "too_many_requests", pending_max: limit2 }));
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
    log5.debug("connecting", { attempt });
    if (renew_before_connect && config.auth.kind === "credential" && last_credential !== null) {
      log5.info("asking the auth for a new credential, after failures to connect");
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
      log5.warn("no credential to connect with");
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
      log5.warn("the socket did not open in time", { timeout_ms: CONNECT_TIMEOUT_MS });
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
    log5.info("connected", { bindings: bindings.size, debuggers: debuggers.size });
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
      log5.warn("the inbox is full: connecting again", { inbox_max: INBOX_MAX });
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
          log5.warn("the server refused a request", { id: message2.id, error });
          settle(message2.id, failure(error));
          break;
        }
        case "notify":
          if (message2.meta !== null) {
            const { sys, mod, index, name } = message2.meta;
            log5.debug(`${sys} ${mod}_${index} ${name} changed`, {
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
          log5.debug(`log of ${mod}`, { sys, mod, level: message2.level, message: text });
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
    for (const [entry, log6] of logs) {
      for (const holder of [...entry.holders])
        holder.listener(log6);
    }
  }
  function onDisconnect() {
    socket = null;
    if (inbox.length > 0)
      drain();
    log5.warn("the socket closed", { was_open: status.kind === "open" });
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
      log5.error("stopped after the maximum number of attempts", { attempts: attempt });
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
    log5.info("connecting again after a wait", { attempt, delay_ms });
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
        log5.warn("no message from the server: connecting again", { stale_ms: STALE_MS });
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
    let token2 = null;
    switch (credential.kind) {
      case "none":
        break;
      case "bearer":
        token2 = ["bearer_token", credential.token];
        break;
      case "api_key":
        token2 = ["api-key", credential.key];
        break;
      default:
        unreachable(credential);
    }
    if (token2 !== null) {
      const [name, token_value] = token2;
      const page_host = new URL(environment.currentUrl()).hostname;
      if (environment.token_transport === "query" || url.hostname !== page_host) {
        log5.debug("the token goes in the query of the socket");
        url.searchParams.set(name, token_value);
      } else {
        assert(/^[^;\s]+$/.test(token_value), "the token has no semicolons or spaces");
        const secure_flag = secure ? "; secure" : "";
        log5.debug("the token goes in a cookie of the socket path");
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
      const timer2 = setTimeout(callback, milliseconds);
      return () => clearTimeout(timer2);
    }
  };
}
function createSocket2(_url, handlers2) {
  let open = true;
  const bound = /* @__PURE__ */ new Map();
  const outbox = [];
  let timer2 = null;
  const flush = () => {
    timer2 = null;
    for (const work of outbox.splice(0, outbox.length))
      if (open)
        work();
  };
  const later = (work) => {
    assert(outbox.length < MOCK_MESSAGES_MAX, "fewer messages wait in the mock socket");
    outbox.push(work);
    timer2 ??= setTimeout(flush, 0);
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
        const notify3 = (value) => reply({ id: request2.id, type: "notify", value: value ?? null, meta });
        bound.get(key)?.();
        const listeners = state2.listeners.get(request2.name) ?? /* @__PURE__ */ new Set();
        listeners.add(notify3);
        state2.listeners.set(request2.name, listeners);
        bound.set(key, () => {
          listeners.delete(notify3);
          if (listeners.size === 0)
            state2.listeners.delete(request2.name);
        });
        reply({ id: request2.id, type: "success" });
        notify3(state2.values.get(request2.name));
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
      if (timer2 !== null)
        clearTimeout(timer2);
      timer2 = null;
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

// node_modules/@placeos/ts-client/dist/generated/operations/systems.js
var systems_exports = {};
__export(systems_exports, {
  addModule: () => addModule,
  create: () => create,
  destroy: () => destroy,
  execute: () => execute2,
  findByEmail: () => findByEmail,
  functions: () => functions,
  metadata: () => metadata,
  query: () => query,
  removeModule: () => removeModule,
  settings: () => settings,
  show: () => show,
  start: () => start,
  state: () => state,
  stateLookup: () => stateLookup,
  stop: () => stop,
  sysZones: () => sysZones,
  types: () => types,
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
var AssetSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  identifier: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  serial_number: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  other_data: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  barcode: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  client_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  map_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  accessible: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  place_groups: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  assigned_to: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  assigned_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  features: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  images: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  notes: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  security_system_groups: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(/* @__PURE__ */ string())
  ),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  asset_type_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  purchase_order_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Asset = AssetSchema;
var AssetCategorySchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  hidden: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  parent_category_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var AssetCategory = AssetCategorySchema;
var AssetTypeSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  brand: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  model_number: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  images: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  category_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  asset_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var AssetType = AssetTypeSchema;
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
var SystemsFunctionDetailsSchema = /* @__PURE__ */ object({
  arity: /* @__PURE__ */ integer("Int32"),
  params: /* @__PURE__ */ record(/* @__PURE__ */ json()),
  order: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["arity", "params", "order"]);
var SystemsFunctionDetails = SystemsFunctionDetailsSchema;
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

// node_modules/@placeos/ts-client/dist/generated/operations/systems.js
function addModule(input2, options) {
  return call(ADD_MODULE, input2, options);
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
function create(input2, options) {
  return call(CREATE, input2, options);
}
var CREATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: ControlSystem,
  response: ControlSystem,
  name: "systems.create"
});
function destroy(input2, options) {
  return call(DESTROY, input2, options);
}
var DESTROY = /* @__PURE__ */ operation({
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
function execute2(input2, options) {
  return call(EXECUTE, input2, options);
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
function findByEmail(input2, options) {
  return call(FIND_BY_EMAIL, input2, options);
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
function functions(input2, options) {
  return call(FUNCTIONS, input2, options);
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
function metadata(input2, options) {
  return call(METADATA, input2, options);
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
function query(input2 = {}, options) {
  return call(QUERY, input2, options);
}
var QUERY = /* @__PURE__ */ operation({
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
function removeModule(input2, options) {
  return call(REMOVE_MODULE, input2, options);
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
function settings(input2, options) {
  return call(SETTINGS, input2, options);
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
function show(input2, options) {
  return call(SHOW, input2, options);
}
var SHOW = /* @__PURE__ */ operation({
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
function start(input2, options) {
  return call(START, input2, options);
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
function state(input2, options) {
  return call(STATE, input2, options);
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
function stateLookup(input2, options) {
  return call(STATE_LOOKUP, input2, options);
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
function stop(input2, options) {
  return call(STOP, input2, options);
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
function sysZones(input2, options) {
  return call(SYS_ZONES, input2, options);
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
function types(input2, options) {
  return call(TYPES, input2, options);
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
function update(input2, options) {
  return call(UPDATE, input2, options);
}
var UPDATE = /* @__PURE__ */ operation({
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

// node_modules/@placeos/ts-client/dist/generated/operations/asset-categories.js
var asset_categories_exports = {};
__export(asset_categories_exports, {
  create: () => create2,
  destroy: () => destroy2,
  query: () => query2,
  show: () => show2,
  update: () => update2
});
function create2(input2, options) {
  return call(CREATE2, input2, options);
}
var CREATE2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/asset_categories",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: AssetCategory,
  response: AssetCategory,
  name: "asset_categories.create"
});
function destroy2(input2, options) {
  return call(DESTROY2, input2, options);
}
var DESTROY2 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/asset_categories/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "asset_categories.destroy"
});
function query2(input2 = {}, options) {
  return call(QUERY2, input2, options);
}
var QUERY2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/asset_categories",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * true returns only hidden categories, false only non-hidden categories; omit to return all
     * categories
     */
    hidden: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
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
  response: /* @__PURE__ */ array(AssetCategory),
  name: "asset_categories.query"
});
function show2(input2, options) {
  return call(SHOW2, input2, options);
}
var SHOW2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/asset_categories/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: AssetCategory,
  name: "asset_categories.show"
});
function update2(input2, options) {
  return call(UPDATE2, input2, options);
}
var UPDATE2 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/asset_categories/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: AssetCategory,
  response: AssetCategory,
  name: "asset_categories.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/asset-types.js
var asset_types_exports = {};
__export(asset_types_exports, {
  create: () => create3,
  destroy: () => destroy3,
  query: () => query3,
  show: () => show3,
  update: () => update3
});
function create3(input2, options) {
  return call(CREATE3, input2, options);
}
var CREATE3 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/asset_types",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: AssetType,
  response: AssetType,
  name: "asset_types.create"
});
function destroy3(input2, options) {
  return call(DESTROY3, input2, options);
}
var DESTROY3 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/asset_types/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "asset_types.destroy"
});
function query3(input2 = {}, options) {
  return call(QUERY3, input2, options);
}
var QUERY3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/asset_types",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** only return asset types with exactly this brand */
    brand: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return asset types with exactly this model number */
    model_number: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return asset types in this asset category id */
    category_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * limits asset_count to assets whose zone_id is this zone id; does not filter the asset
     * types
     * returned
     */
    zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
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
  response: /* @__PURE__ */ array(AssetType),
  name: "asset_types.query"
});
function show3(input2, options) {
  return call(SHOW3, input2, options);
}
var SHOW3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/asset_types/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: AssetType,
  name: "asset_types.show"
});
function update3(input2, options) {
  return call(UPDATE3, input2, options);
}
var UPDATE3 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/asset_types/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: AssetType,
  response: AssetType,
  name: "asset_types.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/assets.js
var assets_exports = {};
__export(assets_exports, {
  bulkCreate: () => bulkCreate,
  bulkDestroy: () => bulkDestroy,
  bulkUpdate: () => bulkUpdate,
  create: () => create4,
  destroy: () => destroy4,
  query: () => query4,
  show: () => show4,
  update: () => update4
});
function bulkCreate(input2, options) {
  return call(BULK_CREATE, input2, options);
}
var BULK_CREATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/assets/bulk",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: /* @__PURE__ */ array(Asset),
  response: /* @__PURE__ */ array(Asset),
  name: "assets.bulkCreate"
});
function bulkDestroy(input2, options) {
  return call(BULK_DESTROY, input2, options);
}
var BULK_DESTROY = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/assets/bulk",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  response: "text",
  name: "assets.bulkDestroy"
});
function bulkUpdate(input2, options) {
  return call(BULK_UPDATE, input2, options);
}
var BULK_UPDATE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/assets/bulk",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: /* @__PURE__ */ array(Asset),
  response: /* @__PURE__ */ array(Asset),
  name: "assets.bulkUpdate"
});
function create4(input2, options) {
  return call(CREATE4, input2, options);
}
var CREATE4 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/assets",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Asset,
  response: Asset,
  name: "assets.create"
});
function destroy4(input2, options) {
  return call(DESTROY4, input2, options);
}
var DESTROY4 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/assets/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "assets.destroy"
});
function query4(input2 = {}, options) {
  return call(QUERY4, input2, options);
}
var QUERY4 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/assets",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** only return assets whose zone_id field is this zone id */
    zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * comma separated zone ids; only return assets whose zones list contains every one of them
     */
    zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** only return assets of this asset type id */
    type_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return assets acquired on this asset purchase order id */
    order_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return assets with exactly this barcode */
    barcode: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return assets with exactly this serial number */
    serial_number: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** true returns only bookable assets, false only non-bookable assets; omit for both */
    bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** true returns only accessible assets, false only non-accessible assets; omit for both */
    accessible: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** comma separated features; returns assets that have any of these features */
    features: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
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
  response: /* @__PURE__ */ array(Asset),
  name: "assets.query"
});
function show4(input2, options) {
  return call(SHOW4, input2, options);
}
var SHOW4 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/assets/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Asset,
  name: "assets.show"
});
function update4(input2, options) {
  return call(UPDATE4, input2, options);
}
var UPDATE4 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/assets/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Asset,
  response: Asset,
  name: "assets.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/groups.js
var groups_exports = {};
__export(groups_exports, {
  create: () => create5,
  current: () => current,
  destroy: () => destroy5,
  features: () => features,
  query: () => query5,
  show: () => show5,
  syncAdGroups: () => syncAdGroups,
  update: () => update5
});
function create5(input2, options) {
  return call(CREATE5, input2, options);
}
var CREATE5 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/groups",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Group,
  response: Group,
  name: "groups.create"
});
function current(input2 = {}, options) {
  return call(CURRENT, input2, options);
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
function destroy5(input2, options) {
  return call(DESTROY5, input2, options);
}
var DESTROY5 = /* @__PURE__ */ operation({
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
function features(input2, options) {
  return call(FEATURES, input2, options);
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
function query5(input2 = {}, options) {
  return call(QUERY5, input2, options);
}
var QUERY5 = /* @__PURE__ */ operation({
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
function show5(input2, options) {
  return call(SHOW5, input2, options);
}
var SHOW5 = /* @__PURE__ */ operation({
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
function syncAdGroups(input2, options) {
  return call(SYNC_AD_GROUPS, input2, options);
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
function update5(input2, options) {
  return call(UPDATE5, input2, options);
}
var UPDATE5 = /* @__PURE__ */ operation({
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

// node_modules/@placeos/ts-client/dist/generated/operations/metadata.js
var metadata_exports = {};
__export(metadata_exports, {
  bulkFetch: () => bulkFetch,
  childrenMetadata: () => childrenMetadata,
  destroy: () => destroy6,
  history: () => history2,
  merge: () => merge,
  rename: () => rename,
  show: () => show6,
  update: () => update6
});
function bulkFetch(input2, options) {
  return call(BULK_FETCH, input2, options);
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
function childrenMetadata(input2, options) {
  return call(CHILDREN_METADATA, input2, options);
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
function destroy6(input2, options) {
  return call(DESTROY6, input2, options);
}
var DESTROY6 = /* @__PURE__ */ operation({
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
function history2(input2, options) {
  return call(HISTORY, input2, options);
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
function merge(input2, options) {
  return call(MERGE, input2, options);
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
function rename(input2, options) {
  return call(RENAME, input2, options);
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
function show6(input2, options) {
  return call(SHOW6, input2, options);
}
var SHOW6 = /* @__PURE__ */ operation({
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
function update6(input2, options) {
  return call(UPDATE6, input2, options);
}
var UPDATE6 = /* @__PURE__ */ operation({
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

// node_modules/@placeos/ts-client/dist/generated/operations/users.js
var users_exports = {};
__export(users_exports, {
  create: () => create6,
  current: () => current2,
  deleteResourceToken: () => deleteResourceToken,
  destroy: () => destroy7,
  groups: () => groups,
  metadata: () => metadata2,
  query: () => query6,
  resourceToken: () => resourceToken,
  revive: () => revive,
  search: () => search,
  show: () => show7,
  update: () => update7,
  userResourceToken: () => userResourceToken
});
function create6(input2, options) {
  return call(CREATE6, input2, options);
}
var CREATE6 = /* @__PURE__ */ operation({
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
function current2(input2 = {}, options) {
  return call(CURRENT2, input2, options);
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
function deleteResourceToken(input2, options) {
  return call(DELETE_RESOURCE_TOKEN, input2, options);
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
function destroy7(input2, options) {
  return call(DESTROY7, input2, options);
}
var DESTROY7 = /* @__PURE__ */ operation({
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
function groups(input2, options) {
  return call(GROUPS, input2, options);
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
function metadata2(input2, options) {
  return call(METADATA2, input2, options);
}
var METADATA2 = /* @__PURE__ */ operation({
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
function query6(input2 = {}, options) {
  return call(QUERY6, input2, options);
}
var QUERY6 = /* @__PURE__ */ operation({
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
function resourceToken(input2 = {}, options) {
  return call(RESOURCE_TOKEN, input2, options);
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
function revive(input2, options) {
  return call(REVIVE, input2, options);
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
function search(input2, options) {
  return call(SEARCH, input2, options);
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
function show7(input2, options) {
  return call(SHOW7, input2, options);
}
var SHOW7 = /* @__PURE__ */ operation({
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
function update7(input2, options) {
  return call(UPDATE7, input2, options);
}
var UPDATE7 = /* @__PURE__ */ operation({
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
function userResourceToken(input2, options) {
  return call(USER_RESOURCE_TOKEN, input2, options);
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

// node_modules/@placeos/ts-client/dist/generated/operations/zones.js
var zones_exports = {};
__export(zones_exports, {
  create: () => create7,
  destroy: () => destroy8,
  metadata: () => metadata3,
  query: () => query7,
  show: () => show8,
  tags: () => tags,
  triggerInstances: () => triggerInstances,
  update: () => update8,
  zoneExecute: () => zoneExecute
});
function create7(input2, options) {
  return call(CREATE7, input2, options);
}
var CREATE7 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Zone,
  response: Zone,
  name: "zones.create"
});
function destroy8(input2, options) {
  return call(DESTROY8, input2, options);
}
var DESTROY8 = /* @__PURE__ */ operation({
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
function metadata3(input2, options) {
  return call(METADATA3, input2, options);
}
var METADATA3 = /* @__PURE__ */ operation({
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
function query7(input2 = {}, options) {
  return call(QUERY7, input2, options);
}
var QUERY7 = /* @__PURE__ */ operation({
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
function show8(input2, options) {
  return call(SHOW8, input2, options);
}
var SHOW8 = /* @__PURE__ */ operation({
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
function tags(input2 = {}, options) {
  return call(TAGS, input2, options);
}
var TAGS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/tags",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "zones.tags"
});
function triggerInstances(input2, options) {
  return call(TRIGGER_INSTANCES, input2, options);
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
function update8(input2, options) {
  return call(UPDATE8, input2, options);
}
var UPDATE8 = /* @__PURE__ */ operation({
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
function zoneExecute(input2, options) {
  return call(ZONE_EXECUTE, input2, options);
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
      clearTimeout(timer2);
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
    const timer2 = setTimeout(() => finish({ ok: false, error: "timeout" }), timeout_ms);
    frame.addEventListener("error", () => finish({ ok: false, error: "frame_error" }));
    window.addEventListener("message", onMessage);
    frame.src = url;
    document.body.appendChild(frame);
  });
}

// node_modules/@placeos/ts-client/dist/auth/hash.js
var HASH_INPUT_BYTES_MAX = 64 * 1024;
function md5Hex(text) {
  const input2 = new TextEncoder().encode(text);
  assert(input2.length <= HASH_INPUT_BYTES_MAX, "the hash input is less than HASH_INPUT_BYTES_MAX");
  const blocks = padBlocks(input2, "little");
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
function sha256(input2) {
  assert(input2.length <= HASH_INPUT_BYTES_MAX, "the hash input is less than HASH_INPUT_BYTES_MAX");
  const blocks = padBlocks(input2, "big");
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
function padBlocks(input2, endian) {
  const block_count = Math.ceil((input2.length + 9) / 64);
  const blocks = new Uint8Array(block_count * 64);
  blocks.set(input2);
  blocks[input2.length] = 128;
  const bit_length = input2.length * 8;
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
  const log5 = scopedLog("auth", { sink: config.log ?? null });
  let authority2 = null;
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
    credential: currentCredential2,
    status: () => status,
    subscribe,
    authority: () => authority2,
    reloadAuthority: loadAuthority,
    handleRedirect,
    useToken,
    useRefreshToken,
    useApiKey,
    invalidateToken: invalidateToken2,
    logout,
    isTrusted,
    isFixedDevice: isFixedDevice2
  };
  return session;
  async function start2() {
    if (removeForegroundListener === null) {
      removeForegroundListener = environment.onForeground(onForeground);
    }
    if (status.kind === "stopped")
      setStatus({ kind: "loading" });
    log5.info("start", { fixed_device: isFixedDevice2(), trusted: isTrusted() });
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
    if (authority2 === null) {
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
        log5.debug("logging in with the password grant");
        const result = await requestTokens(attempt_epoch, __spreadValues({
          grant_type: "password",
          client_id,
          redirect_uri: config.redirect_uri,
          scope: config.scope,
          username: grant.username,
          password: grant.password,
          authority: authority2?.id ?? ""
        }, grant.client_secret === void 0 ? {} : { client_secret: grant.client_secret }));
        return result.ok ? signedIn(result.value) : failed(result.error);
      }
      case "entra": {
        log5.debug("exchanging the Entra token");
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
      log5.debug("using the parameters of a deep link");
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
    const current3 = authority2;
    assert(current3 !== null, "the authority is loaded");
    if (current3.session) {
      const url = createAuthorizeUrl();
      if (config.use_frame !== true)
        return redirect(url);
      log5.debug("authorizing in a hidden frame");
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
      log5.info("no session: the application shows its login");
      return failed({ kind: "login_required" });
    }
    return redirect(loginUrl(current3));
  }
  async function tokenFromKnownCredentials(attempt_epoch) {
    const current3 = currentCredential2();
    if (current3 !== null) {
      log5.debug("a valid credential is found", { credential: current3.kind });
      return signedIn(current3);
    }
    if (pending_code !== null) {
      log5.debug("exchanging the code of the redirect");
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
      log5.debug("refreshing the access token");
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
        const current4 = currentCredential2();
        if (current4 !== null)
          return signedIn(current4);
        return failed({ kind: "logged_out" });
      }
      if (!isRefusal(result.error))
        return failed(result.error);
      log5.warn("the server refused the refresh token");
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
      log5.error("the token request failed", { grant, error: fetched.error.kind });
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
      log5.warn("the server refused the token request", {
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
    log5.info("got new tokens", { grant, expires_in_seconds: expires_in });
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
  function currentCredential2() {
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
    const current3 = currentCredential2();
    if (current3 !== null)
      return current3;
    const result = await authorize();
    return result.ok ? result.value : null;
  }
  function rejected(status2, used) {
    const current3 = currentCredential2();
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
    log5.warn("the server refused the credential", { status: status2 });
    invalidateToken2();
    if (status2 === 511) {
      if (handle_login && authority2 !== null)
        redirect(loginUrl(authority2));
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
    if (authority2 === null && status.kind !== "redirecting")
      setStatus({ kind: "loading" });
    log5.debug("loading the authority");
    let reason = "";
    for (let attempt = 0; attempt < AUTHORITY_ATTEMPTS_MAX; attempt += 1) {
      if (attempt > 0) {
        log5.warn("the authority did not load: trying again", { attempt, reason });
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
      authority2 = parsed.value;
      const { id, name, version, domain, session: session2, production } = parsed.value;
      log5.group("the authority is loaded", { id });
      log5.print(`name: ${name}`);
      log5.print(`version: ${version ?? "unknown"}`);
      log5.print(`domain: ${domain}`);
      log5.print(`session: ${session2}`);
      log5.print(`production: ${production ?? "unknown"}`);
      log5.groupEnd();
      return { ok: true, value: parsed.value };
    }
    log5.error("the authority is unavailable", { attempts: AUTHORITY_ATTEMPTS_MAX, reason });
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
      log5.warn("the state of the login parameters is not the nonce of this client");
      return { kind: "state_mismatch" };
    }
    storage.remove(storageKey("nonce"));
    const denial = params.get("error");
    if (denial !== void 0) {
      const description = params.get("error_description") ?? null;
      log5.warn("the server refused the login", { error: denial, description });
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
    log5.debug("got the login parameters", {
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
    const nonce = randomString3(NONCE_LENGTH);
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
      const verifier = randomString3(VERIFIER_LENGTH);
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
    log5.info("redirecting", { path: new URL(url, "http://base.invalid").pathname });
    setStatus({ kind: "redirecting", url });
    environment.navigate(url);
    return { ok: false, error: { kind: "redirecting", url } };
  }
  function signedIn(credential) {
    assert(credential.kind !== "none", "a session credential is a token or a key");
    if (status.kind !== "signed_in")
      log5.info("signed in", { credential: credential.kind });
    setStatus({ kind: "signed_in", credential: credential.kind });
    return { ok: true, value: credential };
  }
  function failed(error) {
    log5.warn("not signed in", { error });
    if (status.kind !== "redirecting")
      setStatus({ kind: "signed_out", error });
    return { ok: false, error };
  }
  async function handleRedirect(url) {
    const params = urlParams(url);
    if (!hasLoginParams(params))
      return { ok: false, error: { kind: "redirect_invalid" } };
    log5.debug("got a deep link");
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
    if (authority2 === null)
      return;
    if (authority2.session)
      return;
    if (currentCredential2() !== null)
      return;
    log5.debug("the application is in the foreground without a session");
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
  function useToken(token2, expires_at_ms) {
    assert(token2.length > 0, "the token is not empty");
    const expires_at = expires_at_ms ?? environment.now() + TOKEN_LIFETIME_DEFAULT_SECONDS * 1e3;
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { access_token: token2, expires_at_ms: expires_at }));
    halted = null;
    log5.info("using a token of the application");
    setStatus({ kind: "signed_in", credential: "bearer" });
  }
  function useRefreshToken(refresh_token) {
    assert(refresh_token.length > 0, "the refresh token is not empty");
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { refresh_token }));
    halted = null;
    log5.info("using a refresh token of the application");
  }
  function useApiKey(key, options = {}) {
    assert(key.length > 0, "the API key is not empty");
    storage.set(storageKey("x-api-key"), key);
    storage.set(storageKey("trusted"), String(options.trusted ?? true));
    halted = null;
    log5.info("using an API key of the application");
    setStatus({ kind: "signed_in", credential: "api_key" });
  }
  function invalidateToken2() {
    log5.debug("invalidating the access token");
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { access_token: null, expires_at_ms: 0 }));
  }
  async function logout() {
    const url = authority2 === null ? serverUrl(LOGOUT_PATH_DEFAULT) : serverUrl(authority2.logout_url);
    log5.info("logging out");
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
      log5.warn("the logout page is not an http or https URL");
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
  function isFixedDevice2() {
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
  function randomString3(length) {
    const limit2 = 256 - 256 % NONCE_ALPHABET.length;
    const bytes = new Uint8Array(length * 2);
    let text = "";
    for (let round = 0; round < RANDOM_ROUNDS_MAX && text.length < length; round += 1) {
      environment.randomValues(bytes);
      for (const byte of bytes) {
        if (byte < limit2 && text.length < length) {
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

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
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

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/add.js
function add(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const _date = toDate(date, options?.in);
  const dateWithMonths = months || years ? addMonths(_date, months + years * 12) : _date;
  const dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1e3;
  return constructFrom(options?.in || date, +dateWithDays + msToAdd);
}

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}

// node_modules/date-fns/addHours.js
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
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

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize2 = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize2);
}

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
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

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
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

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
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

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
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
var formatDistance = (token2, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token2];
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
var formatRelative = (token2, _date, _baseDate, _options) => formatRelativeLocale[token2];

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

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
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
  y(date, token2) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token2 === "yy" ? year % 100 : year, token2.length);
  },
  // Month
  M(date, token2) {
    const month = date.getMonth();
    return token2 === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token2) {
    return addLeadingZeros(date.getDate(), token2.length);
  },
  // AM or PM
  a(date, token2) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token2) {
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
  h(date, token2) {
    return addLeadingZeros(date.getHours() % 12 || 12, token2.length);
  },
  // Hour [0-23]
  H(date, token2) {
    return addLeadingZeros(date.getHours(), token2.length);
  },
  // Minute
  m(date, token2) {
    return addLeadingZeros(date.getMinutes(), token2.length);
  },
  // Second
  s(date, token2) {
    return addLeadingZeros(date.getSeconds(), token2.length);
  },
  // Fraction of second
  S(date, token2) {
    const numberOfDigits = token2.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token2.length);
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
  G: function(date, token2, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token2) {
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
  y: function(date, token2, localize2) {
    if (token2 === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token2);
  },
  // Local week-numbering year
  Y: function(date, token2, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token2 === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token2 === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token2.length);
  },
  // ISO week-numbering year
  R: function(date, token2) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token2.length);
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
  u: function(date, token2) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token2.length);
  },
  // Quarter
  Q: function(date, token2, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token2) {
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
  q: function(date, token2, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token2) {
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
  M: function(date, token2, localize2) {
    const month = date.getMonth();
    switch (token2) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token2);
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
  L: function(date, token2, localize2) {
    const month = date.getMonth();
    switch (token2) {
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
  w: function(date, token2, localize2, options) {
    const week = getWeek(date, options);
    if (token2 === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token2.length);
  },
  // ISO week of year
  I: function(date, token2, localize2) {
    const isoWeek = getISOWeek(date);
    if (token2 === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token2.length);
  },
  // Day of the month
  d: function(date, token2, localize2) {
    if (token2 === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token2);
  },
  // Day of year
  D: function(date, token2, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token2 === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token2.length);
  },
  // Day of week
  E: function(date, token2, localize2) {
    const dayOfWeek = date.getDay();
    switch (token2) {
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
  e: function(date, token2, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token2) {
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
  c: function(date, token2, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token2) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token2.length);
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
  i: function(date, token2, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token2) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token2.length);
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
  a: function(date, token2, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token2) {
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
  b: function(date, token2, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token2) {
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
  B: function(date, token2, localize2) {
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
    switch (token2) {
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
  h: function(date, token2, localize2) {
    if (token2 === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token2);
  },
  // Hour [0-23]
  H: function(date, token2, localize2) {
    if (token2 === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token2);
  },
  // Hour [0-11]
  K: function(date, token2, localize2) {
    const hours = date.getHours() % 12;
    if (token2 === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token2.length);
  },
  // Hour [1-24]
  k: function(date, token2, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token2 === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token2.length);
  },
  // Minute
  m: function(date, token2, localize2) {
    if (token2 === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token2);
  },
  // Second
  s: function(date, token2, localize2) {
    if (token2 === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token2);
  },
  // Fraction of second
  S: function(date, token2) {
    return lightFormatters.S(date, token2);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token2, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token2) {
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
  x: function(date, token2, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token2) {
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
  O: function(date, token2, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token2) {
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
  z: function(date, token2, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token2) {
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
  t: function(date, token2, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token2.length);
  },
  // Milliseconds timestamp
  T: function(date, token2, _localize) {
    return addLeadingZeros(+date, token2.length);
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
function isProtectedDayOfYearToken(token2) {
  return dayOfYearTokenRE.test(token2);
}
function isProtectedWeekYearToken(token2) {
  return weekYearTokenRE.test(token2);
}
function warnOrThrowProtectedError(token2, format3, input2) {
  const _message = message(token2, format3, input2);
  console.warn(_message);
  if (throwTokens.includes(token2)) throw new RangeError(_message);
}
function message(token2, format3, input2) {
  const subject = token2[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token2.toLowerCase()}\` instead of \`${token2}\` (in \`${format3}\`) for formatting ${subject} to the input \`${input2}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
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
    const token2 = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token2) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token2)) {
      warnOrThrowProtectedError(token2, formatStr, String(date));
    }
    const formatter = formatters[token2[0]];
    return formatter(originalDate, token2, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input2) {
  const matched = input2.match(escapedStringRegExp);
  if (!matched) {
    return input2;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
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
    const token2 = `x${unit.replace(/(^.)/, (m) => m.toUpperCase())}`;
    const value = duration[unit];
    if (value !== void 0 && (zero || duration[unit])) {
      return acc.concat(locale.formatDistance(token2, value));
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

// node_modules/date-fns/getUnixTime.js
function getUnixTime(date) {
  return Math.trunc(+toDate(date) / 1e3);
}

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// node_modules/date-fns/isBefore.js
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
}

// node_modules/date-fns/startOfMinute.js
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}

// node_modules/date-fns/roundToNearestMinutes.js
function roundToNearestMinutes(date, options) {
  const nearestTo = options?.nearestTo ?? 1;
  if (nearestTo < 1 || nearestTo > 30) return constructFrom(date, NaN);
  const date_ = toDate(date, options?.in);
  const fractionalSeconds = date_.getSeconds() / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1e3 / 60;
  const minutes = date_.getMinutes() + fractionalSeconds + fractionalMilliseconds;
  const method = options?.roundingMethod ?? "round";
  const roundingMethod = getRoundingMethod(method);
  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  date_.setMinutes(roundedMinutes, 0, 0);
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
  let token2 = patterns.timezoneZ.exec(timezoneString);
  if (token2) {
    return 0;
  }
  let hours;
  let absoluteOffset;
  token2 = patterns.timezoneHH.exec(timezoneString);
  if (token2) {
    hours = parseInt(token2[1], 10);
    if (!validateTimezone(hours)) {
      return NaN;
    }
    return -(hours * MILLISECONDS_IN_HOUR);
  }
  token2 = patterns.timezoneHHMM.exec(timezoneString);
  if (token2) {
    hours = parseInt(token2[2], 10);
    const minutes = parseInt(token2[3], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
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
    const token2 = patterns2.timeZone.exec(timeString);
    if (token2) {
      dateStrings.time = timeString.replace(token2[1], "");
      dateStrings.timeZone = token2[1].trim();
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
    let token2 = patterns2.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token2) {
      const yearString = token2[1];
      return {
        year: parseInt(yearString, 10),
        restDateString: dateString.slice(yearString.length)
      };
    }
    token2 = patterns2.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token2) {
      const centuryString = token2[1];
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
  let token2 = patterns2.MM.exec(dateString);
  if (token2) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token2[1], 10) - 1;
    if (!validateDate(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token2 = patterns2.DDD.exec(dateString);
  if (token2) {
    date = /* @__PURE__ */ new Date(0);
    const dayOfYear = parseInt(token2[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token2 = patterns2.MMDD.exec(dateString);
  if (token2) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token2[1], 10) - 1;
    const day = parseInt(token2[2], 10);
    if (!validateDate(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token2 = patterns2.Www.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    if (!validateWeekDate(week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token2 = patterns2.WwwD.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    const dayOfWeek = parseInt(token2[2], 10) - 1;
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
  let token2 = patterns2.HH.exec(timeString);
  if (token2) {
    hours = parseFloat(token2[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2;
  }
  token2 = patterns2.HHMM.exec(timeString);
  if (token2) {
    hours = parseInt(token2[1], 10);
    minutes = parseFloat(token2[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE3;
  }
  token2 = patterns2.HHMMSS.exec(timeString);
  if (token2) {
    hours = parseInt(token2[1], 10);
    minutes = parseInt(token2[2], 10);
    const seconds = parseFloat(token2[3].replace(",", "."));
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

// libs/common/src/lib/locale.service.ts
var _service;
function setTranslationService(service) {
  _service = service;
}
function i18nAvailable() {
  return !!_service;
}
function i18n(key, args = {}, plural = 0) {
  if (!_service)
    return key;
  return _service.get(key, args, plural);
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

// libs/common/src/lib/notifications.ts
var _service2 = null;
var _loader = null;
var _loading = null;
var _disable_logging = false;
var _filter = null;
function setNotifyOutlet(outlet, disable_logging = false) {
  _service2 = typeof outlet === "function" ? null : outlet;
  _loader = typeof outlet === "function" ? outlet : null;
  _loading = null;
  _disable_logging = disable_logging;
}
function lazySnackbar() {
  const injector = inject(EnvironmentInjector);
  return () => import("./snack-bar-UDVQBOQM.js").then(({ MatSnackBar }) => injector.get(MatSnackBar));
}
function notify(type, message2, action = "OK", on_action, config = {}) {
  if (!_service2 && !_loader) {
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
  if (_service2)
    return open(_service2);
  const loading = _loading ??= _loader();
  loading.then((snackbar) => {
    if (_loading !== loading)
      return;
    _service2 = snackbar;
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
function localToTimezone(date, tz = LOCAL_TIMEZONE) {
  const offset_diff = getTimezoneOffset(tz) - getTimezoneOffset(LOCAL_TIMEZONE);
  return addMilliseconds(date, offset_diff).valueOf();
}
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
function sameDayInTimezone(date, from_tz, to_tz) {
  const day = toZonedTime(date, from_tz || LOCAL_TIMEZONE);
  const noon = set(day, {
    hours: 12,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });
  return fromZonedTime(noon, to_tz || LOCAL_TIMEZONE).valueOf();
}

// libs/common/src/lib/general.ts
var _user_date_change = false;
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
function toggleListItem(list, item) {
  return list.includes(item) ? list.filter((_) => _ !== item) : [...list, item];
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
function flatten(an_array) {
  return an_array.flat(Infinity);
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
function isMobileSafari2() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function calculateDistance(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);
  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return radius * c;
}
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
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
    const timer2 = setTimeout(() => {
      on_timeout?.();
      reject(new Error(message2));
    }, timeout_ms);
    promise.then((value) => {
      clearTimeout(timer2);
      resolve(value);
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}
function getAllDayTimeRange(date, timezone = "", start2, end) {
  const day_start = startOfDayInTimezone(date, timezone);
  if (start2 == null || end == null) {
    const period_end2 = endOfDayInTimezone(day_start, timezone);
    return {
      date: day_start,
      duration: Math.max(0, differenceInMinutes(period_end2, day_start)),
      date_end: period_end2
    };
  }
  const range_start = Math.max(0, Math.min(23, start2));
  const range_end = Math.max(range_start + 1, Math.min(24, end));
  const period_end = addHours(day_start, range_end).valueOf();
  const period_start = addHours(day_start, range_start).valueOf();
  return {
    date: period_start,
    duration: Math.max(0, differenceInMinutes(period_end, period_start)),
    date_end: period_end
  };
}
function getNextBookableTime(bookable_hours, now = Date.now(), timezone = "", min_duration = 0) {
  if (!bookable_hours)
    return void 0;
  const { start: start2, end } = bookable_hours;
  if (start2 == null || end == null)
    return void 0;
  const start_minutes = start2 * 60;
  const end_minutes = end * 60;
  const effective_end = min_duration > 0 ? end_minutes - min_duration : end_minutes;
  const time = timezone ? toZonedTime(now, timezone) : new Date(now);
  const current_minutes = time.getHours() * 60 + time.getMinutes();
  const within_window = current_minutes >= start_minutes && (current_minutes < effective_end || min_duration > 0 && current_minutes === effective_end);
  if (within_window) {
    return roundToNearestMinutes(now, {
      nearestTo: 5,
      roundingMethod: "ceil"
    }).valueOf();
  }
  const base_day = current_minutes < start_minutes ? startOfDay(time) : addDays(startOfDay(time), 1);
  const wall_clock_ms = base_day.getTime() + start_minutes * 60 * 1e3;
  return timezone ? fromZonedTime(wall_clock_ms, timezone).valueOf() : wall_clock_ms;
}
function alignDateToBookableHours(date, bookable_hours, fallback_date, timezone = "", min_duration = 0) {
  if (!date || !bookable_hours)
    return date;
  const { start: start2, end } = bookable_hours;
  if (start2 == null || end == null)
    return date;
  const start_minutes = start2 * 60;
  const end_minutes = end * 60;
  const effective_end = min_duration > 0 ? end_minutes - min_duration : end_minutes;
  const base_date = new Date(date);
  const reference = timezone ? toZonedTime(fallback_date || date, timezone) : new Date(fallback_date || date);
  let adjusted_date = set(base_date, {
    hours: reference.getHours(),
    minutes: reference.getMinutes(),
    seconds: reference.getSeconds(),
    milliseconds: reference.getMilliseconds()
  }).valueOf();
  const adjusted_time = timezone ? toZonedTime(adjusted_date, timezone) : new Date(adjusted_date);
  const adjusted_minutes = adjusted_time.getHours() * 60 + adjusted_time.getMinutes();
  const within_window = adjusted_minutes >= start_minutes && (adjusted_minutes < effective_end || min_duration > 0 && adjusted_minutes === effective_end);
  if (within_window) {
    return adjusted_date;
  }
  if (adjusted_minutes >= effective_end && adjusted_date <= Date.now()) {
    return getNextBookableTime(bookable_hours, adjusted_date, timezone, min_duration) || adjusted_date;
  }
  adjusted_date = set(base_date, {
    hours: start2,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }).valueOf();
  return adjusted_date;
}
function isWithinBookableHours(date, bookable_hours, timezone = "") {
  if (!bookable_hours)
    return true;
  const { start: start2, end } = bookable_hours;
  if (start2 == null || end == null)
    return true;
  const time = timezone ? toZonedTime(date, timezone) : new Date(date);
  const minutes = time.getHours() * 60 + time.getMinutes();
  return minutes >= start2 * 60 && minutes < end * 60;
}
function guardModelUndefinedWrites(model, defaults) {
  const sanitize = (value) => {
    for (const key of Object.keys(defaults)) {
      const default_value = defaults[key];
      const current_value = value[key];
      if (current_value === void 0 || current_value === null && default_value !== null) {
        value[key] = default_value;
      }
    }
    return value;
  };
  const set2 = model.set.bind(model);
  const update9 = model.update.bind(model);
  model.set = (value) => set2(sanitize(__spreadValues({}, value)));
  model.update = (fn) => update9((current3) => sanitize(__spreadValues({}, fn(current3))));
}
function onFieldChange(model, select, handler, injector) {
  let previous = select(untracked(model));
  const body = () => {
    const current3 = select(model());
    if (Object.is(current3, previous))
      return;
    const prior = previous;
    previous = current3;
    handler(current3, prior);
  };
  try {
    const ref = injector ? effect(body, { injector }) : effect(body);
    return { destroy: () => ref.destroy() };
  } catch {
    return { destroy: () => {
    } };
  }
}
function getInvalidSignalFields(form, model, mappings = {}) {
  const value = untracked(model);
  const invalid = [];
  for (const key of Object.keys(value || {})) {
    const field = form?.[key];
    try {
      if (typeof field === "function" && field()?.invalid?.()) {
        invalid.push(key);
      }
    } catch {
    }
  }
  return invalid.map((field) => mappings[field] || field);
}
function setupFormTimeSync(model, options = {}, injector) {
  let min_duration = options.min_duration ?? 30;
  let max_duration = options.max_duration ?? 0;
  let default_duration = options.default_duration ?? 60;
  let custom_duration_options = [
    ...new Set((options.custom_duration_options || []).map((_) => Math.round(+_ || 0)).filter((_) => _ > 0))
  ].sort((a, b) => a - b);
  let bookable_hours = options.bookable_hours ?? null;
  let timezone = options.timezone ?? "";
  let all_day_start = options.all_day_start;
  let all_day_end = options.all_day_end;
  const round_to = options.round_to ?? 5;
  const on_change = options.on_time_change;
  const snap = () => untracked(model);
  const finiteNumber = (value) => {
    const number2 = Number(value);
    return Number.isFinite(number2) ? number2 : void 0;
  };
  const sameValue = (a, b) => Object.is(a, b);
  const normaliseTimeValue = (value) => finiteNumber(value) ?? 0;
  const prev = {
    date: finiteNumber(snap().date),
    duration: finiteNumber(snap().duration),
    date_end: finiteNumber(snap().date_end),
    all_day: snap().all_day
  };
  let timed_window;
  const refreshPrev = () => {
    const s = snap();
    prev.date = finiteNumber(s.date);
    prev.duration = finiteNumber(s.duration);
    prev.date_end = finiteNumber(s.date_end);
    prev.all_day = s.all_day;
  };
  const MAX_SYNC_PATCHES = 12;
  let sync_patches = 0;
  let reset_scheduled = false;
  const applyPatch = (patch) => {
    const current3 = snap();
    const safe_patch = __spreadValues({}, patch);
    for (const key of ["date", "duration", "date_end"]) {
      if (key in safe_patch) {
        safe_patch[key] = normaliseTimeValue(safe_patch[key]);
      }
    }
    const keys = Object.keys(safe_patch);
    if (keys.every((key) => sameValue(current3[key], safe_patch[key]))) {
      refreshPrev();
      return false;
    }
    if (sync_patches >= MAX_SYNC_PATCHES) {
      console.warn("setupFormTimeSync: aborting runaway time-sync corrections", safe_patch);
      refreshPrev();
      return false;
    }
    sync_patches++;
    if (!reset_scheduled) {
      reset_scheduled = true;
      setTimeout(() => {
        sync_patches = 0;
        reset_scheduled = false;
      });
    }
    model.update((value) => __spreadValues(__spreadValues({}, value), safe_patch));
    refreshPrev();
    return true;
  };
  const effective_min_duration = () => Math.min(min_duration, ...custom_duration_options);
  const is_custom_duration = (dur) => custom_duration_options.includes(Math.round(+dur || 0));
  const roundCeil = (date) => roundToNearestMinutes(date, {
    nearestTo: round_to,
    roundingMethod: "ceil"
  }).valueOf();
  const bookableWindowRemaining = (start2) => {
    start2 = normaliseTimeValue(start2);
    if (!bookable_hours || !start2 || snap().id)
      return Number.POSITIVE_INFINITY;
    const time = timezone ? toZonedTime(start2, timezone) : new Date(start2);
    const start_minutes = time.getHours() * 60 + time.getMinutes();
    const end_minutes = bookable_hours.end * 60;
    const remaining = Math.max(0, end_minutes - start_minutes);
    return Math.floor(remaining / round_to) * round_to;
  };
  const clampDuration = (dur, start2) => {
    dur = normaliseTimeValue(dur);
    start2 = normaliseTimeValue(start2);
    if (is_custom_duration(dur)) {
      const window3 = bookableWindowRemaining(start2);
      if (window3 <= 0)
        return dur;
      return Math.min(dur, window3);
    }
    let clamped = Math.max(dur, min_duration);
    if (max_duration > 0)
      clamped = Math.min(clamped, max_duration);
    const window2 = bookableWindowRemaining(start2);
    if (window2 > 0)
      clamped = Math.min(clamped, window2);
    return clamped;
  };
  const alignToBookableHours = (date, preserve_calendar_day = false) => {
    date = normaliseTimeValue(date);
    if (!bookable_hours || !date || snap().id)
      return date;
    if (preserve_calendar_day) {
      return alignDateToBookableHours(date, bookable_hours, date, timezone, effective_min_duration());
    }
    const next = getNextBookableTime(bookable_hours, date, timezone, effective_min_duration());
    if (next && next !== date) {
      if (_user_date_change) {
        notifyWarn(i18n("COMMON.BOOKABLE_HOURS_ERROR"));
        _user_date_change = false;
      }
      return next;
    }
    return alignDateToBookableHours(date, bookable_hours, date, timezone, effective_min_duration());
  };
  const isMultiday = (date, date_end) => {
    date = normaliseTimeValue(date);
    date_end = normaliseTimeValue(date_end);
    if (!date || !date_end)
      return false;
    const d = timezone ? toZonedTime(date, timezone) : new Date(date);
    const e = timezone ? toZonedTime(date_end, timezone) : new Date(date_end);
    return !isSameDay(d, e);
  };
  const alignEndToBookableHours = (date_end) => {
    date_end = normaliseTimeValue(date_end);
    if (!bookable_hours || !date_end || snap().id)
      return date_end;
    const time = timezone ? toZonedTime(date_end, timezone) : new Date(date_end);
    const end_minutes = time.getHours() * 60 + time.getMinutes();
    const bh_start_minutes = bookable_hours.start * 60;
    const bh_end_minutes = bookable_hours.end * 60;
    if (end_minutes >= bh_start_minutes && end_minutes <= bh_end_minutes) {
      return date_end;
    }
    if (end_minutes > bh_end_minutes) {
      const snapped2 = set(time, {
        hours: bookable_hours.end,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      });
      return timezone ? fromZonedTime(snapped2, timezone).valueOf() : snapped2.valueOf();
    }
    const snapped = set(time, {
      hours: bookable_hours.start,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    return timezone ? fromZonedTime(snapped, timezone).valueOf() : snapped.valueOf();
  };
  const subscriptions = [];
  const fieldEffect = (select, handler) => {
    const body = () => {
      const current3 = select(model());
      if (sameValue(current3, select(prev)))
        return;
      try {
        handler();
      } finally {
        refreshPrev();
      }
    };
    try {
      const ref = injector ? effect(body, { injector }) : effect(body);
      subscriptions.push({
        unsubscribe: () => ref.destroy()
      });
    } catch {
    }
  };
  fieldEffect((v) => v.duration, () => {
    const s = snap();
    if (s.all_day)
      return;
    const dur = normaliseTimeValue(s.duration);
    const date = normaliseTimeValue(s.date);
    if (!date)
      return;
    const new_end = roundCeil(addMinutes(date, dur));
    const multiday = isMultiday(date, new_end);
    if (multiday) {
      const aligned_end = alignEndToBookableHours(new_end);
      const actual_dur = differenceInMinutes(aligned_end, date);
      const patch = {
        date_end: aligned_end
      };
      if (actual_dur !== dur)
        patch.duration = actual_dur;
      applyPatch(patch);
    } else {
      const clamped = clampDuration(dur, date);
      const clamped_end = roundCeil(addMinutes(date, clamped));
      const patch = {
        date_end: clamped_end
      };
      if (clamped !== dur)
        patch.duration = clamped;
      applyPatch(patch);
    }
    on_change?.();
  });
  fieldEffect((v) => v.date_end, () => {
    const s = snap();
    if (s.all_day)
      return;
    const end = normaliseTimeValue(s.date_end);
    const date = normaliseTimeValue(s.date);
    if (!date || !end)
      return;
    const raw = differenceInMinutes(end, date);
    const multiday = isMultiday(date, end);
    if (multiday) {
      const aligned_end = alignEndToBookableHours(end);
      const actual_dur = differenceInMinutes(aligned_end, date);
      if (aligned_end !== end) {
        applyPatch({
          date_end: aligned_end,
          duration: actual_dur
        });
      } else {
        applyPatch({ duration: raw });
      }
    } else {
      const clamped = clampDuration(raw, date);
      if (clamped !== raw) {
        applyPatch({
          date_end: roundCeil(addMinutes(date, clamped)),
          duration: clamped
        });
      } else {
        applyPatch({ duration: raw });
      }
    }
    on_change?.();
  });
  fieldEffect((v) => v.date, () => {
    const date = normaliseTimeValue(snap().date);
    const last_date = normaliseTimeValue(prev.date);
    const previous_time = timezone ? toZonedTime(last_date, timezone) : new Date(last_date);
    const next_time = timezone ? toZonedTime(date, timezone) : new Date(date);
    const calendar_day_changed = !!last_date && !!date && !isSameDay(previous_time, next_time);
    const aligned = alignToBookableHours(date, calendar_day_changed);
    let effective = aligned !== date ? aligned : date;
    const is_all_day = snap().all_day;
    const has_id = !!snap().id;
    if (is_all_day && effective < Date.now() && !has_id) {
      const snapped = roundCeil(Date.now());
      effective = alignToBookableHours(snapped) || snapped;
    }
    if (is_all_day) {
      applyPatch(getAllDayTimeRange(effective, timezone, all_day_start, all_day_end));
      on_change?.();
      return;
    }
    const expected_end = roundCeil(addMinutes(effective, normaliseTimeValue(snap().duration)));
    const multiday = isMultiday(effective, expected_end);
    if (multiday) {
      const current_end = normaliseTimeValue(snap().date_end);
      if (current_end <= effective) {
        const new_end = alignEndToBookableHours(expected_end) || expected_end;
        applyPatch({
          date_end: new_end,
          duration: differenceInMinutes(new_end, effective)
        });
      } else {
        const aligned_end = alignEndToBookableHours(current_end);
        if (aligned_end !== current_end) {
          applyPatch({
            date_end: aligned_end,
            duration: differenceInMinutes(aligned_end, effective)
          });
        } else {
          applyPatch({
            duration: differenceInMinutes(current_end, effective)
          });
        }
      }
    } else {
      const duration = normaliseTimeValue(snap().duration);
      const capped = clampDuration(duration, effective);
      const capped_end = capped === duration ? expected_end : roundCeil(addMinutes(effective, capped));
      const patch = {
        date_end: capped_end
      };
      if (capped !== duration)
        patch.duration = capped;
      applyPatch(patch);
    }
    if (effective < Date.now() && !has_id) {
      const snapped = roundCeil(Date.now());
      applyPatch({
        date: alignToBookableHours(snapped) || snapped
      });
    } else if (aligned !== date) {
      applyPatch({ date: aligned });
    }
    on_change?.();
  });
  fieldEffect((v) => v.all_day, () => {
    const all_day = snap().all_day;
    if (all_day) {
      timed_window = {
        date: normaliseTimeValue(snap().date),
        duration: normaliseTimeValue(snap().duration),
        date_end: normaliseTimeValue(snap().date_end)
      };
      applyPatch(getAllDayTimeRange(normaliseTimeValue(snap().date), timezone, all_day_start, all_day_end));
    } else if (timed_window && !isMultiday(timed_window.date, normaliseTimeValue(snap().date))) {
      applyPatch(timed_window);
      timed_window = void 0;
    } else {
      timed_window = void 0;
      const date = normaliseTimeValue(snap().date);
      const duration = normaliseTimeValue(snap().duration);
      const date_end = normaliseTimeValue(snap().date_end);
      const explicit_window = !sameValue(duration, normaliseTimeValue(prev.duration)) || !sameValue(date_end, normaliseTimeValue(prev.date_end));
      if (explicit_window)
        return;
      const dur = clampDuration(default_duration, date);
      applyPatch({
        duration: dur,
        date_end: roundCeil(addMinutes(date, dur))
      });
    }
    on_change?.();
  });
  const handle = {
    subscriptions,
    updateOptions(patch) {
      if (patch.min_duration != null)
        min_duration = patch.min_duration;
      if (patch.max_duration != null)
        max_duration = patch.max_duration;
      if (patch.default_duration != null)
        default_duration = patch.default_duration;
      if (patch.custom_duration_options != null) {
        custom_duration_options = [
          ...new Set((patch.custom_duration_options || []).map((_) => Math.round(+_ || 0)).filter((_) => _ > 0))
        ].sort((a, b) => a - b);
      }
      if (patch.bookable_hours !== void 0)
        bookable_hours = patch.bookable_hours ?? null;
      if (patch.timezone != null)
        timezone = patch.timezone;
      if (patch.all_day_start !== void 0)
        all_day_start = patch.all_day_start;
      if (patch.all_day_end !== void 0)
        all_day_end = patch.all_day_end;
      if (snap().all_day && snap().date) {
        applyPatch(getAllDayTimeRange(normaliseTimeValue(snap().date), timezone, all_day_start, all_day_end));
        on_change?.();
        return;
      }
      if (!snap().all_day) {
        const date = normaliseTimeValue(snap().date);
        const date_end = normaliseTimeValue(snap().date_end);
        const multiday = isMultiday(date, date_end);
        if (!multiday) {
          const current3 = normaliseTimeValue(snap().duration);
          const clamped = clampDuration(current3, date);
          if (clamped !== current3) {
            applyPatch({
              duration: clamped,
              date_end: roundCeil(addMinutes(date, clamped))
            });
            on_change?.();
          }
        }
      }
      if (bookable_hours && !snap().all_day) {
        const date = normaliseTimeValue(snap().date);
        const date_end = normaliseTimeValue(snap().date_end);
        const multiday = isMultiday(date, date_end);
        const aligned = alignToBookableHours(date);
        if (aligned !== date) {
          if (multiday) {
            const aligned_end = alignEndToBookableHours(date_end);
            applyPatch({
              date: aligned,
              date_end: aligned_end,
              duration: differenceInMinutes(aligned_end, aligned)
            });
          } else {
            applyPatch({
              date: aligned,
              date_end: roundCeil(addMinutes(aligned, normaliseTimeValue(snap().duration)))
            });
          }
          on_change?.();
        } else if (multiday) {
          const aligned_end = alignEndToBookableHours(date_end);
          if (aligned_end !== date_end) {
            applyPatch({
              date_end: aligned_end,
              duration: differenceInMinutes(aligned_end, date)
            });
            on_change?.();
          }
        }
      }
    }
  };
  return handle;
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

// libs/common/src/lib/hotkeys.service.ts
var INVALID_STANDALONE_KEYS = [
  "control",
  "shift",
  "alt",
  "meta",
  "os"
];
var HotkeysService = class _HotkeysService {
  constructor() {
    this.keydown_states = {};
    this.keydown_callbacks = {};
    this.combo_end = [];
    this.registered_combos = [];
    this.counter = 0;
    window.addEventListener("keydown", (event) => {
      if (document.getSelection()?.type === "Range" || this.isEditableElementFocused()) {
        return;
      }
      const code = this.mapKey((event.code || "").toLowerCase());
      if (this.last_down !== code) {
        if (!this.keydown_states[code]) {
          this.keydown_states[code] = signal(null);
        }
        this.keydown_states[code].set(++this.counter);
        this._handleKeyPress(code, this.counter);
        if (this.combo_end.indexOf(code) >= 0) {
          event.preventDefault();
        }
        this.last_down = code;
      }
    });
    window.addEventListener("keyup", (event) => {
      const code = this.mapKey((event.code || "").toLowerCase());
      this.keydown_states[code]?.set(null);
      if (this.last_down === code) {
        this.last_down = null;
      }
    });
  }
  /**
   * Listen to the given key combination
   * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
   * @param next Callback for combination presses
   */
  listen(combo, next) {
    combo = combo instanceof Array ? combo : combo.split("+");
    const combination = combo.map((i) => this.mapKey(i.toLowerCase()));
    if (combination.length > 0 && this.validCombination(combination)) {
      this.registered_combos.push(combination);
      const last_key = combination[combination.length - 1];
      if (!this.keydown_states[last_key]) {
        this.keydown_states[last_key] = signal(null);
      }
      this.updateCombinationEndList();
      const callback = (count) => {
        if (count) {
          const presses = [];
          if (combination.length > 0) {
            for (const key of combination) {
              const state2 = this.keydown_states[key];
              presses.push(state2 ? state2() || -1 : -1);
            }
            for (let i = 0; i < combination.length - 1; i++) {
              if (presses[i] > presses[i + 1]) {
                return;
              }
            }
          }
          const total = presses.reduce((a, v) => a + (v > 0 ? 1 : -1), 0);
          if (total >= combination.length) {
            next();
          }
        }
      };
      this.keydown_callbacks[last_key] ||= /* @__PURE__ */ new Set();
      this.keydown_callbacks[last_key].add(callback);
      return {
        unsubscribe: () => this.keydown_callbacks[last_key]?.delete(callback)
      };
    }
    return null;
  }
  _handleKeyPress(code, count) {
    for (const callback of this.keydown_callbacks[code] || []) {
      callback(count);
    }
  }
  /** Check if keyboard input should remain with the focused editor. */
  isEditableElementFocused() {
    const active = document.activeElement;
    if (!active)
      return false;
    const tag_name = active.tagName.toLowerCase();
    return tag_name === "input" || tag_name === "textarea" || active.getAttribute("contenteditable") === "true" || !!active.closest(".monaco-editor");
  }
  /**
   * Map key codes with multiple versions to simple form
   * @param code Code to transform
   */
  mapKey(code) {
    if (code.indexOf("alt") >= 0 || code.indexOf("shift") >= 0 || code.indexOf("control") >= 0) {
      return code.replace("left", "").replace("right", "");
    }
    return code;
  }
  /**
   * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
   */
  updateCombinationEndList() {
    const key_list = [];
    for (const combo of this.registered_combos) {
      this.combo_end.push(combo[combo.length - 1]);
    }
    this.combo_end = unique(key_list);
  }
  /**
   * Checks if the given hotkey combination is allowed and valid
   * @param combo Array of key codes
   */
  validCombination(combo) {
    let non_meta = 0;
    for (const key of combo) {
      if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
        non_meta++;
      }
    }
    return non_meta > 0;
  }
  static {
    this.\u0275fac = function HotkeysService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HotkeysService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HotkeysService, factory: _HotkeysService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotkeysService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  _document = inject(DOCUMENT);
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static \u0275fac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Clipboard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Clipboard,
    factory: _Clipboard.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Service
  }], null, null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  _clipboard = inject(Clipboard);
  _ngZone = inject(NgZone);
  text = "";
  attempts = 1;
  copied = new EventEmitter();
  _pending = /* @__PURE__ */ new Set();
  _destroyed = false;
  _currentTimeout;
  constructor() {
    const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  copy(attempts = this.attempts) {
    attempts = Math.min(attempts, 50);
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static \u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCopyToClipboard)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static \u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClipboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ClipboardModule,
    imports: [CdkCopyToClipboard],
    exports: [CdkCopyToClipboard]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// libs/common/src/lib/native-app.ts
var DOMAIN_STORAGE_KEY = "PlaceOS.native.domain";
var EMAIL_STORAGE_KEY = "PlaceOS.native.email";
var API_KEY_STORAGE_KEY = "PlaceOS.native.api_key";
var SYSTEM_ID_STORAGE_KEY = "PlaceOS.native.system_id";
var MANAGED_CONFIG_STORAGE_KEY = "PlaceOS.native.managed_config";
var APP_ID_STORAGE_KEY = "PlaceOS.native.app_id";
var LAST_AUTH_URL_STORAGE_KEY = "PlaceOS.native.last_auth_url";
var CONSUMED_AUTH_URL_STORAGE_KEY = "PlaceOS.native.consumed_auth_url";
var PKCE_STORAGE_KEY = "PlaceOS.native.pkce";
var AUTH_ERROR_STORAGE_KEY = "PlaceOS.native.auth_error";
var LOOKUP_HOST = "au.placeos.run";
var NATIVE_CALL_TIMEOUT_MS = 10 * 1e3;
var NATIVE_APP_IDS = {
  workplace: "com.placeos.workplace",
  staff: "com.placeos.workplace",
  control: "com.placeos.control",
  bookings: "com.placeos.booking.panel",
  "booking panel": "com.placeos.booking.panel"
};
var _native_url_listener = null;
function boundedNativeCall(promise) {
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => reject(new Error("Native plugin call timed out.")), NATIVE_CALL_TIMEOUT_MS);
    promise.then((value) => {
      clearTimeout(timer2);
      resolve(value);
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}
function capacitor() {
  return window.Capacitor || null;
}
function nativePluginProxy(name) {
  const cap = capacitor();
  if (cap?.Plugins?.[name])
    return cap.Plugins[name];
  try {
    return cap?.registerPlugin?.(name) || null;
  } catch {
    return null;
  }
}
function listenToNativeEvent(plugin_name, event_name, listener) {
  const proxy = nativePluginProxy(plugin_name);
  if (proxy?.addListener) {
    return boundedNativeCall(Promise.resolve(proxy.addListener(event_name, listener)));
  }
  const cap = capacitor();
  if (cap?.addListener) {
    return boundedNativeCall(Promise.resolve(cap.addListener(plugin_name, event_name, listener)));
  }
  return null;
}
function callNativeMethod(plugin_name, method_name, options) {
  const proxy = nativePluginProxy(plugin_name);
  if (typeof proxy?.[method_name] === "function") {
    return boundedNativeCall(Promise.resolve(proxy[method_name](options)));
  }
  const cap = capacitor();
  if (cap?.nativePromise) {
    return boundedNativeCall(cap.nativePromise(plugin_name, method_name, options));
  }
  return null;
}
function isNativeApp() {
  return !!capacitor()?.isNativePlatform?.();
}
async function getNativeAppId(app_name) {
  const normalised_name = `${app_name || ""}`.trim().toLowerCase();
  const app_id = NATIVE_APP_IDS[normalised_name];
  if (app_id) {
    localStorage.setItem(APP_ID_STORAGE_KEY, app_id);
    return app_id;
  }
  const cached_app_id = localStorage.getItem(APP_ID_STORAGE_KEY);
  if (!cached_app_id) {
    throw new Error(`Unsupported native app: ${app_name || "unknown"}.`);
  }
  return cached_app_id;
}
async function getNativeRedirectUri(app_name, domain) {
  const app_id = await getNativeAppId(app_name);
  const host = `${domain || ""}`.trim();
  return host ? `${app_id}://${host}/oauth-resp` : `${app_id}://oauth-resp`;
}
async function isNativeAuthRedirect(url) {
  const app_id = await getNativeAppId();
  const callback_url = new URL(url);
  return callback_url.protocol === `${app_id}:` && (callback_url.pathname === "/oauth-resp" || callback_url.hostname === "oauth-resp" && !callback_url.pathname.replace(/^\/+/, ""));
}
async function bindNativeAuthRedirects(listener) {
  if (!isNativeApp() || _native_url_listener)
    return;
  const handle = listenToNativeEvent("App", "appUrlOpen", async ({ url }) => {
    try {
      if (!url)
        return;
      console.warn(`[AUTH] App opened with URL: ${url.split(/[?#]/)[0]}`);
      if (!await isNativeAuthRedirect(url)) {
        console.warn("[AUTH] URL is not an auth redirect.");
        return;
      }
      localStorage.setItem(LAST_AUTH_URL_STORAGE_KEY, url);
      listener(url);
    } catch (error) {
      console.warn("[AUTH] Error handling app URL.", error);
    }
  });
  if (!handle) {
    console.warn("[AUTH] Capacitor App plugin is unavailable.");
    return;
  }
  _native_url_listener = handle;
  await handle.catch((error) => {
    _native_url_listener = null;
    console.warn("[AUTH] Failed to listen for app URLs.", error);
  });
}
function markNativeAuthRedirectConsumed(url) {
  localStorage.setItem(CONSUMED_AUTH_URL_STORAGE_KEY, url);
  localStorage.removeItem(LAST_AUTH_URL_STORAGE_KEY);
}
async function consumeNativeAuthRedirect() {
  if (!isNativeApp())
    return null;
  const launch_url = await callNativeMethod("App", "getLaunchUrl")?.catch(() => null);
  const url = launch_url?.url || localStorage.getItem(LAST_AUTH_URL_STORAGE_KEY) || "";
  if (!url)
    return null;
  const is_redirect = await isNativeAuthRedirect(url).catch((error) => {
    console.warn("[AUTH] Error checking launch URL.", error);
    return false;
  });
  if (!is_redirect)
    return null;
  if (url === localStorage.getItem(CONSUMED_AUTH_URL_STORAGE_KEY)) {
    console.warn("[AUTH] Launch URL already consumed.");
    return null;
  }
  console.warn("[AUTH] Consuming auth redirect from launch URL.");
  return url;
}
function storeNativePkceVerifier(key, verifier) {
  sessionStorage.setItem(key, verifier);
  localStorage.setItem(PKCE_STORAGE_KEY, JSON.stringify({ key, verifier }));
}
function restoreNativePkceVerifier() {
  const raw = localStorage.getItem(PKCE_STORAGE_KEY);
  if (!raw)
    return;
  try {
    const parsed = JSON.parse(raw);
    const verifier = parsed?.verifier;
    let key = parsed?.key;
    if (typeof key !== "string" || typeof verifier !== "string")
      return;
    if (key.endsWith("_challenge")) {
      key = `${key.slice(0, -"_challenge".length)}_code_verifier`;
    }
    if (key && verifier && !sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, verifier);
    }
  } catch {
    localStorage.removeItem(PKCE_STORAGE_KEY);
  }
}
function clearNativePkceVerifier() {
  localStorage.removeItem(PKCE_STORAGE_KEY);
}
function setNativeAuthError(message2) {
  localStorage.setItem(AUTH_ERROR_STORAGE_KEY, message2);
}
function consumeNativeAuthError() {
  const message2 = localStorage.getItem(AUTH_ERROR_STORAGE_KEY) || "";
  localStorage.removeItem(AUTH_ERROR_STORAGE_KEY);
  return message2;
}
async function hideNativeStatusBar() {
  if (!isNativeApp())
    return;
  await callNativeMethod("StatusBar", "setOverlaysWebView", {
    overlay: true
  })?.catch(() => null);
  await callNativeMethod("StatusBar", "hide", { animation: "NONE" })?.catch(() => null);
}
async function closeNativeBrowser() {
  await callNativeMethod("Browser", "close")?.catch(() => null);
}
async function openNativeBrowser(url) {
  const opened = callNativeMethod("Browser", "open", { url });
  if (!opened) {
    location.assign(url);
    return;
  }
  await opened.catch(() => location.assign(url));
}
function getNativeDomain() {
  return localStorage.getItem(DOMAIN_STORAGE_KEY);
}
function getNativeEmail() {
  return localStorage.getItem(EMAIL_STORAGE_KEY);
}
function setNativeDomain(domain) {
  localStorage.setItem(DOMAIN_STORAGE_KEY, domain.trim());
}
function setNativeEmail(email) {
  localStorage.setItem(EMAIL_STORAGE_KEY, email.trim());
}
function clearNativeDomain() {
  localStorage.removeItem(DOMAIN_STORAGE_KEY);
}
function getNativeApiKey() {
  return localStorage.getItem(API_KEY_STORAGE_KEY);
}
function setNativeApiKey(api_key) {
  const value = `${api_key || ""}`.trim();
  if (!value)
    return clearNativeApiKey();
  localStorage.setItem(API_KEY_STORAGE_KEY, value);
}
function clearNativeApiKey() {
  localStorage.removeItem(API_KEY_STORAGE_KEY);
}
function normaliseNativeDomain(address) {
  let value = `${address || ""}`.trim();
  if (!value)
    return "";
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value))
    value = `https://${value}`;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:")
      return "";
    if (!url.hostname)
      return "";
    return url.port ? `${url.hostname}:${url.port}` : url.hostname;
  } catch {
    return "";
  }
}
async function readManagedValue(method_name, key) {
  const result = callNativeMethod("ManagedConfigurations", method_name, {
    key
  });
  if (!result)
    return null;
  const { value } = await result.catch(() => ({ value: null }));
  return value ?? null;
}
async function loadNativeManagedConfig() {
  if (!isNativeApp())
    return null;
  const [domain_name, api_key, system_id, restart_time, restart_enabled, skip_setup] = await Promise.all([
    readManagedValue("getString", "domainName"),
    readManagedValue("getString", "apiKey"),
    readManagedValue("getString", "systemId"),
    readManagedValue("getNumber", "restartTime"),
    readManagedValue("getBoolean", "restartEnabled"),
    readManagedValue("getBoolean", "skipInteractiveSetup")
  ]);
  const domain = normaliseNativeDomain(`${domain_name || ""}`);
  if (!domain && !api_key && !system_id)
    return null;
  return {
    domain,
    api_key: `${api_key || ""}`.trim(),
    system_id: `${system_id || ""}`.trim(),
    restart_enabled: restart_enabled !== false,
    restart_time: Math.min(23, Math.max(0, Math.round(restart_time || 0))),
    skip_interactive_setup: skip_setup === true
  };
}
function applyNativeManagedConfig(config) {
  const fingerprint = JSON.stringify([
    config.domain,
    config.api_key,
    config.system_id
  ]);
  if (localStorage.getItem(MANAGED_CONFIG_STORAGE_KEY) === fingerprint) {
    return false;
  }
  if (config.domain) {
    setNativeDomain(config.domain);
    setNativeApiKey(config.api_key);
  }
  if (config.system_id) {
    localStorage.setItem(SYSTEM_ID_STORAGE_KEY, config.system_id);
  } else {
    localStorage.removeItem(SYSTEM_ID_STORAGE_KEY);
  }
  localStorage.setItem(MANAGED_CONFIG_STORAGE_KEY, fingerprint);
  return true;
}
function getNativeSystemId() {
  return localStorage.getItem(SYSTEM_ID_STORAGE_KEY) || "";
}
var _managed_config_sync = null;
function syncNativeManagedConfig() {
  if (!_managed_config_sync) {
    _managed_config_sync = loadNativeManagedConfig().then((config) => ({
      config,
      changed: config ? applyNativeManagedConfig(config) : false
    })).catch(() => ({ config: null, changed: false }));
  }
  return _managed_config_sync;
}
var _restart_timer = null;
function scheduleNativeRestart(hour) {
  if (!isNativeApp() || _restart_timer)
    return;
  const next = /* @__PURE__ */ new Date();
  next.setHours(hour, 0, 0, 0);
  if (next.valueOf() <= Date.now())
    next.setDate(next.getDate() + 1);
  _restart_timer = setTimeout(() => location.reload(), next.valueOf() - Date.now());
}
var DEFAULT_INTUNE_SCOPES = ["User.Read"];
async function getIntuneAccount() {
  if (!isNativeApp())
    return null;
  const result = await callNativeMethod("IntuneMAM", "enrolledAccount")?.catch(() => null);
  return result?.accountId ? result : null;
}
async function getIntuneToken(account, scopes = DEFAULT_INTUNE_SCOPES) {
  const result = await callNativeMethod("IntuneMAM", "acquireTokenSilent", {
    scopes,
    accountId: account.accountId
  })?.catch(() => null);
  return `${result?.accessToken || ""}`.trim();
}
async function lookupNativeDomainByEmail(email) {
  const controller = new AbortController();
  const timer2 = setTimeout(() => controller.abort(), NATIVE_CALL_TIMEOUT_MS);
  const response = await fetch(`https://${LOOKUP_HOST}/api/engine/v2/domains/lookup/${encodeURIComponent(email)}`, { signal: controller.signal }).finally(() => clearTimeout(timer2));
  if (!response.ok) {
    throw new Error("Unable to lookup domain.");
  }
  const text = (await response.text()).trim();
  const domain = text.startsWith('"') ? JSON.parse(text) : text;
  if (!domain) {
    throw new Error("No domain found for this email.");
  }
  return `${domain}`.trim();
}

// libs/common/src/lib/settings.ts
var space_display = {
  show_images: false
};
var explore = {
  colors: {
    "space-free": "#43a047",
    "space-pending": "#ffb300",
    "space-busy": "#e53935",
    "space-not-bookable": "#ccc",
    "space-unknown": "#000",
    // 'desk-available': '#43a047',
    // 'desk-available-stroke': '#1b5e20',
    // 'desk-unavailable': '#e53935',
    // 'desk-unavailable-stroke': '#b71c1c',
    // 'desk-reserved': '#ffb300',
    // 'desk-reserved-stroke': '#ff6f00',
    // 'desk-not-bookable': '#fff',
    // 'desk-not-bookable-stroke': '#ccc',
    "zone-low": "#43a047",
    "zone-medium": "#ffb300",
    "zone-high": "#e53935"
  }
};
var app = {
  name: "Workplace",
  short_name: "WorkMate Outlook",
  features: [
    "spaces",
    "desks",
    "explore",
    "parking",
    "parking-requests",
    "help",
    "schedule"
  ],
  space_display,
  explore,
  desks: {
    use_assets: false
  }
};
var DEFAULT_SETTINGS = {
  debug: true,
  composer: {
    domain: "",
    route: "/staff",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  app
};

// libs/common/src/lib/place-client.ts
var MOCK_AUTHORITY = {
  id: "mock-authority",
  name: "localhost:4200",
  description: "",
  domain: "localhost:4200",
  login_url: "/login?continue={{url}}",
  logout_url: "/logout",
  session: true,
  production: false,
  config: {},
  version: "2.0.0",
  metrics: null,
  sentry_dsn: null,
  email_domains: []
};
var RECOVERY_DELAY_MS = 3e4;
var _client = null;
var _online = signal(
  false,
  ...ngDevMode ? [{ debugName: "_online" }] : (
    /* istanbul ignore next */
    []
  )
);
var _online_waiters = [];
var _markStarted = () => {
};
var _started = new Promise((resolve) => _markStarted = resolve);
function setOnline(online) {
  _online.set(online);
  if (!online)
    return;
  const waiters = _online_waiters;
  _online_waiters = [];
  for (const resolve of waiters)
    resolve();
}
var AUTH_LOG_FIELDS = /* @__PURE__ */ new Set([
  "attempt",
  "attempts",
  "credential",
  "expires_in_seconds",
  "fixed_device",
  "grant",
  "reason",
  "status",
  "trusted"
]);
function privateLog(entry) {
  const auth = entry.scope === "auth";
  consoleLog(__spreadProps(__spreadValues({}, entry), {
    args: entry.args.map((arg) => privateArg(arg, auth))
  }));
}
function privateArg(arg, auth) {
  if (typeof arg !== "object" || arg === null)
    return arg;
  const safe = Object.fromEntries(Object.entries(arg).filter(([key]) => !auth && key !== "error" || AUTH_LOG_FIELDS.has(key)));
  if (!("error" in arg))
    return safe;
  const error = arg.error;
  if (typeof error !== "object" || error === null)
    return safe;
  const kind = "kind" in error ? error.kind : void 0;
  const status = "status" in error ? error.status : void 0;
  return __spreadProps(__spreadValues({}, safe), { error: { kind, status } });
}
function retirable(environment) {
  let retired = false;
  const guard = (store) => ({
    get: (key) => store.get(key),
    keys: () => store.keys(),
    set: (key, value) => {
      if (!retired)
        store.set(key, value);
    },
    remove: (key) => {
      if (!retired)
        store.remove(key);
    }
  });
  return {
    environment: __spreadProps(__spreadValues({}, environment), {
      fetch: (url, init) => retired ? Promise.reject(new Error("The login session was replaced.")) : environment.fetch(url, init),
      storage: guard(environment.storage),
      session_storage: guard(environment.session_storage),
      navigate: (url) => {
        if (!retired)
          environment.navigate(url);
      },
      replaceUrl: (url) => {
        if (!retired)
          environment.replaceUrl(url);
      }
    }),
    retire: () => retired = true
  };
}
function removeEmptyDeviceFlags(client_id, storage) {
  for (const name of ["trust", "trusted", "fixed_device"]) {
    const key = `${client_id}_${name}`;
    if (storage.get(key) === "")
      storage.remove(key);
  }
}
function startPlaceClient(options) {
  _client?.stop();
  setOnline(false);
  const { base_url, mock, headers } = options;
  if (mock) {
    configure({
      base_url,
      auth: { kind: "none" },
      headers,
      fetch: mockFetch,
      missing_fields: "zero",
      log: privateLog
    });
    _client = {
      session: null,
      mock,
      base_url,
      headers,
      realtime: null,
      stop: () => _client?.realtime?.stop()
    };
    setOnline(true);
    _markStarted();
    return _client;
  }
  const { environment, retire } = retirable(options.auth.environment ?? browserEnvironment());
  const session = createAuthSession(__spreadProps(__spreadValues({}, options.auth), {
    environment,
    base_url,
    headers,
    log: privateLog
  }));
  removeEmptyDeviceFlags(session.client_id, environment.storage);
  const all_headers = __spreadProps(__spreadValues({}, headers), { "X-App-Id": session.client_id });
  configure({
    base_url,
    auth: session.client_auth,
    headers: all_headers,
    log: privateLog
  });
  let retry2;
  const client = {
    session,
    mock,
    base_url,
    headers: all_headers,
    realtime: null,
    stop: () => {
      remove_listener();
      clearTimeout(retry2);
      session.stop();
      retire();
      client.realtime?.stop();
    }
  };
  const remove_listener = session.subscribe((status) => {
    if (status.kind === "loading")
      return;
    const has_authority = session.authority() !== null;
    setOnline(has_authority);
    if (has_authority) {
      clearTimeout(retry2);
      retry2 = void 0;
      return;
    }
    const unavailable = status.kind === "signed_out" && status.error?.kind === "authority_unavailable";
    if (!unavailable || retry2 !== void 0)
      return;
    retry2 = setTimeout(() => {
      retry2 = void 0;
      if (session.authority() === null)
        void session.start();
    }, RECOVERY_DELAY_MS);
  });
  _client = client;
  _markStarted();
  return client;
}
function stopPlaceClient() {
  _client?.stop();
  _client = null;
  setOnline(false);
}
function placeClientStarted() {
  return _started;
}
function placeSession() {
  return _client?.session ?? null;
}
function placeRealtime() {
  const client = _client;
  if (!client)
    throw new Error("Call setupPlace before realtime calls.");
  if (client.realtime)
    return client.realtime;
  const realtime = client.session ? createRealtime({
    base_url: client.base_url,
    auth: client.session.client_auth,
    fixed_device: client.session.isFixedDevice(),
    log: privateLog
  }) : createRealtime({
    base_url: client.base_url,
    auth: { kind: "none" },
    environment: mockRealtimeEnvironment(),
    log: privateLog
  });
  let restart;
  realtime.subscribe((status) => {
    if (status.kind !== "failed" || restart !== void 0)
      return;
    restart = setTimeout(() => {
      restart = void 0;
      if (_client === client)
        realtime.start();
    }, RECOVERY_DELAY_MS);
  });
  client.realtime = realtime;
  return realtime;
}
function realtimeConnected() {
  return _client?.realtime?.status().kind === "open";
}
function isMock() {
  return _client?.mock ?? false;
}
function authority() {
  if (_client?.mock)
    return MOCK_AUTHORITY;
  return _client?.session?.authority() ?? void 0;
}
function isOnline() {
  return _online();
}
function onlineState() {
  return _online.asReadonly();
}
function waitForOnline() {
  if (_online())
    return Promise.resolve();
  return new Promise((resolve) => _online_waiters.push(resolve));
}
function currentCredential() {
  return _client?.session?.credential() ?? null;
}
function token() {
  if (_client?.mock)
    return "mock-token";
  const credential = currentCredential();
  if (credential?.kind === "bearer")
    return credential.token;
  if (credential?.kind === "api_key")
    return "x-api-key";
  return "";
}
function apiKey() {
  const credential = currentCredential();
  return credential?.kind === "api_key" ? credential.key : "";
}
function clientId() {
  return _client?.session?.client_id ?? "";
}
function apiOrigin() {
  return _client?.base_url || location.origin;
}
function isFixedDevice() {
  return _client?.session?.isFixedDevice() ?? false;
}
function setToken(token2, expires_at_ms) {
  _client?.session?.useToken(token2, expires_at_ms);
}
function setApiKey(key) {
  _client?.session?.useApiKey(key);
}
function invalidateToken() {
  _client?.session?.invalidateToken();
}
async function authorise() {
  const session = _client?.session;
  if (!session)
    return token();
  const result = await session.authorize();
  if (result.ok === false)
    throw result.error;
  return token();
}
async function placeFetch(path, init = {}) {
  const origin = new URL(apiOrigin()).origin;
  const url = new URL(path, `${origin}/`);
  if (url.origin !== origin) {
    throw new Error(`placeFetch sends only to the API server: ${url.origin}`);
  }
  const auth = _client?.session?.client_auth;
  const send2 = async (credential2) => {
    const headers = new Headers(init.headers);
    for (const [key, value] of Object.entries(_client?.headers ?? {})) {
      if (!headers.has(key))
        headers.set(key, value);
    }
    if (credential2?.kind === "bearer") {
      headers.set("Authorization", `Bearer ${credential2.token}`);
    } else if (credential2?.kind === "api_key") {
      headers.set("X-API-Key", credential2.key);
    }
    const request2 = __spreadValues(__spreadProps(__spreadValues({}, init), {
      headers
    }), credential2?.kind === "api_key" ? { redirect: "error" } : {});
    return _client?.mock ? mockFetch(url.href, request2) : fetch(url.href, request2);
  };
  if (auth?.kind !== "credential")
    return send2(null);
  const credential = await auth.credential();
  const response = await send2(credential);
  if (!credential)
    return response;
  if (response.status !== 401 && response.status !== 511)
    return response;
  const status = response.status === 511 ? 511 : 401;
  if (!await auth.rejected(status, credential))
    return response;
  return send2(await auth.credential());
}
async function placeFetchJson(path, init = {}) {
  const response = await placeFetch(path, __spreadProps(__spreadValues({}, init), {
    headers: __spreadValues({ "Content-Type": "application/json" }, init.headers)
  }));
  const text = await response.text();
  if (!response.ok) {
    throw Object.assign(new Error(text || response.statusText), {
      status: response.status
    });
  }
  return text ? JSON.parse(text) : null;
}

// libs/common/src/lib/public-mode.ts
function isPublicMode() {
  if (typeof window === "undefined")
    return false;
  const flag = window.PLACEOS_PUBLIC_MODE;
  return !!flag;
}

// libs/common/src/lib/types/asset-request.class.ts
function deliverAtTime(request2) {
  let date = request2.event?.date || request2._time;
  if (request2.deliver_time) {
    date = set(date, {
      hours: Math.floor(request2.deliver_time),
      minutes: request2.deliver_time % 1 * 60
    }).valueOf();
  }
  if (request2.deliver_day_offset > 0 || request2.event?.all_day) {
    date = addDays(startOfDay(date), request2.deliver_day_offset).valueOf();
  }
  return addMinutes(date, request2.deliver_offset).valueOf();
}
var AssetRequest = class {
  get deliver_at() {
    return deliverAtTime(this);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
    this[`${this.event_id}_status`] = value;
  }
  constructor(data = {}) {
    this.conflict = false;
    this._changed = false;
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.event_id = data.event_id || data.parent_id || "";
    this.items = data.items || data.asset_ids?.map((_) => ({ id: _, quantity: 1 })) || [];
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this._status = data[`${this.event_id}_status`] || data.status || (data.extension_data || {})[`${this.event_id}_status`] || data.extension_data?.status || "in_storage";
    this.event = data.event || data || null;
    const booking = this.event?.linked_bookings?.find((_) => _.extension_data.request_id === this.id);
    this._booking = booking || data.booking || null;
    this._changed = !!data._changed || !booking;
    this.notes = data.notes || data.description || "";
    this.deliver_time = data.deliver_time || data.extension_data?.deliver_time || void 0;
    this.deliver_offset = data.deliver_offset || data.extension_data?.deliver_offset || 0;
    this.deliver_day_offset = data.deliver_day_offset || data.extension_data?.deliver_day_offset || 0;
    this.deliver_at_time = deliverAtTime(this);
    this.conflict = !!data.conflict;
    this.ref_id = `${this.deliver_at_time}|${this.items.map((_) => `${_.id}:${_.quantity}`).join("|")}`;
  }
  toJSON() {
    const blob = __spreadValues({}, this);
    delete blob.event;
    delete blob._changed;
    delete blob._status;
    delete blob._time;
    delete blob.deliver_at_time;
    delete blob.deliver_at;
    blob.items = blob.items.map((_) => ({
      id: _.id,
      category_id: _.category_id,
      quantity: _.quantity,
      name: _.name,
      item_ids: _.item_ids
    }));
    return blob;
  }
};

// libs/common/src/lib/types/catering.class.ts
function cloneOption(option = {}) {
  return {
    id: option.id || "",
    name: option.name || "",
    group: option.group || "",
    multiple: !!option.multiple,
    unit_price: option.unit_price || 0,
    active: option.active
  };
}
function deliverAtTime2(order) {
  let date = order.event?.date || order.event?.event_start * 1e3 || order._time;
  if (order.deliver_day_offset > 0 || order.event?.all_day) {
    date = addDays(startOfDay(date), order.deliver_day_offset).valueOf();
  }
  if (order.deliver_time) {
    date = set(date, {
      hours: Math.floor(order.deliver_time),
      minutes: order.deliver_time % 1 * 60
    }).valueOf();
  }
  return addMinutes(date, order.deliver_offset).valueOf();
}
var CateringItem = class {
  get option_list() {
    const active_options = this.options.filter((_) => _.active === true);
    return active_options.length ? active_options : this._option_list;
  }
  /** String list of selected option ids */
  get options_string() {
    return this.option_list.map((_) => _.id || "").sort((a, b) => a.localeCompare(b)).join(",");
  }
  get custom_id() {
    const options = this.option_list.map((_) => _.id).sort((a, b) => a.localeCompare(b)).join("+");
    return `${this.id}[${options}]${!this.in_order ? "menu" : ""}`;
  }
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || data.id || "";
    this.category = data.category || "";
    this.caterer = data.caterer || "";
    this.unit_price = data.unit_price || 0;
    this.description = data.description || "";
    this.quantity = data.quantity || 0;
    this.discount_cap = data.discount_cap || 0;
    this.accept_points = !!data.accept_points;
    this.tags = [
      ...(data.tags instanceof Array ? data.tags : null) || []
    ];
    this.images = [...data.images || []];
    this.options = (data.options || []).map((_) => cloneOption(_));
    const has_options = this.options.some((_) => _.active === true);
    this._option_list = (has_options ? this.options.filter((_) => _.active === true) : (data.option_list || []).map((_) => cloneOption(_))) || [];
    this.hide_for_zones = [...data.hide_for_zones || []];
    this.unit_price_with_options = this.unit_price + this.option_list.map((i) => i.unit_price || 0).reduce((c, a) => c + a, 0);
    this.total_cost = this.unit_price_with_options * this.quantity;
    this.in_order = data.in_order ?? false;
  }
};
var CateringOrder = class {
  get deliver_at() {
    return deliverAtTime2(this);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
    this[`${this.event_id}_status`] = value;
  }
  constructor(data = {}) {
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.system_id = data.system_id || "";
    this.event_id = data.event_id || data.event?.id || "";
    this.caterer = data.caterer || "";
    this.items = (data.items || []).map((i) => i instanceof CateringItem ? i : new CateringItem(i));
    this.items = this.items.filter((i) => i.quantity > 0 && this.caterer === i.caterer);
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this.total_cost = this.items.reduce((amount, item) => amount + (item.total_cost || 0), 0);
    this.charge_code = data.charge_code || "";
    this.status = data[`${this.event_id}_status`] || data.status || "accepted";
    this.invoice_number = data.invoice_number || "";
    this.event = data.event || null;
    this.notes = data.notes || "";
    this.deliver_time = data.deliver_time || void 0;
    this.deliver_offset = data.deliver_offset || 0;
    this.deliver_day_offset = data.deliver_day_offset || 0;
    this.deliver_at_time = deliverAtTime2(this);
  }
  toJSON() {
    const obj = cleanObject(__spreadValues({}, this), ["", null, void 0]);
    obj.status = obj._status;
    delete obj.event;
    delete obj._status;
    delete obj._time;
    return obj;
  }
};

// libs/common/src/lib/types/org.classes.ts
var Organisation = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.name = raw_data.name || "";
    this.description = raw_data.description || "";
    this.tags = [...raw_data.tags || []];
    this.count = raw_data.count || 0;
    this.children_count = raw_data.children_count || 0;
    this.capacity = raw_data.capacity || 0;
    this.bindings = raw_data.bindings || {};
    this._settings = raw_data.settings || {};
  }
  /**
   * Get a custom organisation setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  setting(key) {
    const keys = key.split(".");
    const value = getItemWithKeys(keys, this._settings);
    return value;
  }
};
var BuildingLevel = class {
  constructor(_data = {}) {
    this.settings = {};
    this.id = _data.id || "";
    this.parent_id = _data.parent_id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.map_id = _data.map_id || "";
    this.capacity = _data.capacity || 0;
    this.location = _data.location || "";
    this.locations = _data.locations || [];
    this.tags = [..._data.tags || []];
    this.images = [..._data.images || []];
    this.code = _data.code || "";
    const parts = this.display_name.split(" ");
    this.number = ((parts.length >= 2 ? parts[parts.length - 1] : this.display_name[0])?.toUpperCase() || "").substring(0, 2);
  }
};
var Building = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.parent_id = raw_data.parent_id || "";
    this.name = raw_data.name || "";
    const settings2 = raw_data.settings || {};
    this.display_name = raw_data.display_name;
    this.images = this.images || [];
    const disc_info = settings2.discovery_info || settings2;
    this.zone_id = raw_data.zone_id || raw_data.zone;
    this.extras = (raw_data.extras || disc_info.extras || []).map((i) => ({
      id: i.extra_id || i.id,
      name: i.extra_name || i.name
    }));
    this.loan_items = (raw_data.loan_items || disc_info.loan_items || []).map((i) => ({
      id: i.extra_id || i.id,
      name: i.extra_name || i.name
    }));
    this.levels = (raw_data.levels || disc_info.levels || []).map((i) => new BuildingLevel(__spreadProps(__spreadValues({}, i), { building_id: this.id })));
    this._roles = raw_data.roles || disc_info.roles || {};
    this._lockers = raw_data.lockers || raw_data.locker_structure || disc_info.locker_structure || {};
    this._systems = raw_data.systems || disc_info.systems || {};
    this._phone_numbers = raw_data.phone_numbers || disc_info.phone_numbers || {};
    this.location = raw_data.location || disc_info.location || "0,0";
    this.room_configurations = raw_data.room_configurations || disc_info.room_configurations || [];
    this.attributes = raw_data.attributes || disc_info.attributes || [];
    const searchables = [];
    if (raw_data.neighbourhoods) {
      for (const lvl in raw_data.neighbourhoods) {
        if (lvl in raw_data.neighbourhoods) {
          const lvl_features = raw_data.neighbourhoods[lvl] || {};
          for (const feature in lvl_features) {
            if (feature in lvl_features) {
              searchables.push({
                id: lvl_features[feature],
                name: feature,
                level_id: lvl
              });
            }
          }
        }
      }
    }
    this.bindings = raw_data.bindings || {};
    this.searchables = searchables;
    this.map_id = raw_data.map_id || "";
    this.timezone = raw_data.timezone || disc_info.timezone || settings2.timezone || "";
    this.catering_hours = raw_data.catering_hours || disc_info.catering_hours || settings2.catering_hours || { start: 7, end: 20 };
    this.visitor_space = raw_data.visitor_space || disc_info.visitor_space || settings2.visitor_space || "";
    this.holding_bay = raw_data.holding_bay || disc_info.holding_bay || settings2.holding_bay || "";
    this.code = raw_data.code || disc_info.code || settings2.code || "";
    this.address = raw_data.address || disc_info.address || settings2.address || "";
    this.orientations = raw_data.orientations || disc_info.orientations || settings2.orientations || {};
    this.booking_details = raw_data.booking_details || disc_info.booking_details || settings2.booking_details || null;
    this.catering_restricted_from = raw_data.catering_restricted_from || disc_info.catering_restricted_from || settings2.catering_restricted_from || -1440;
    this.currency = raw_data.currency || disc_info.currency || settings2.currency || "USD";
  }
  /**
   * Get list of users with the associated role
   * @param name Role to find users for
   */
  role(name) {
    return [...this._roles[name] || []];
  }
  /**
   * Get list of the names of available user role lists
   */
  get role_names() {
    return Object.keys(this._roles).filter((i) => i in this._roles);
  }
  /** Map of the locker ID arrays */
  get lockers() {
    return __spreadValues({}, this._lockers || {});
  }
  /** Map of important system ids for the building */
  get systems() {
    return __spreadValues({}, this._systems || {});
  }
  /** Map of important phone numbers for the building */
  get phone_numbers() {
    return __spreadValues({}, this._phone_numbers || {});
  }
  /**
   * Get search map feature for the given level ID
   * @param level_id ID of level to grab features for
   */
  featuresForLevel(level_id) {
    return (this.searchables || []).filter((i) => i.level_id === level_id);
  }
};
var Region = class {
  constructor(_data) {
    this.id = _data.id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.timezone = _data.timezone || "";
    this.images = [..._data.images || []];
    this.bindings = _data.bindings || {};
    this.address = _data.address || "";
  }
};

// libs/common/src/lib/types/space.class.ts
var Space = class {
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.display_name = data.display_name || "";
    this.email = (data.email || "").toLowerCase();
    this.capacity = data.capacity || -1;
    this.feature_list = data.feature_list || data.features || [];
    this.bookable = !!data.bookable;
    this.zones = data.zones || [];
    this.support_url = data.support_url || "";
    this.camera_url = data.camera_url || "";
    this.camera_snapshot_urls = Array.isArray(data.camera_snapshot_urls) ? data.camera_snapshot_urls.filter(Boolean) : data.camera_snapshot_url ? [data.camera_snapshot_url] : [];
    this.camera_snapshot_url = data.camera_snapshot_url || this.camera_snapshot_urls[0] || "";
    this.room_booking_url = data.room_booking_url || "";
    this.map_id = data.map_id || "";
    this.images = data.images || [];
    this.features = data.features || [];
    this.response_status = data.response_status || "tentative";
    this.level = data.level || new BuildingLevel();
    this.availability = data.availability || [];
    this.approval = data.approval ?? false;
    this.created_at = data.created_at ?? getUnixTime(Date.now());
  }
  inUseAt(start2, duration) {
    const end = start2 + duration * 60 * 1e3;
    return this.availability.filter((i) => i.date == start2 && i.date + i.duration * 60 * 1e3 == end && i.status !== "free").length > 0;
  }
};

// libs/common/src/lib/types/user.class.ts
var USER_DOMAIN = "@dev.place.tech";
function setInternalUserDomain(domain) {
  USER_DOMAIN = domain;
}
var User = class {
  constructor(data = {}) {
    this.id = data.id || data.email || `USER::${randomString(8)}`;
    this.name = data.name || "";
    this.email = data.email || "";
    this.first_name = data.first_name || data.name || "";
    this.last_name = data.last_name || "";
    this.phone = data.phone || "";
    this.organisation = data.organisation || "";
    this.notes = data.notes || "";
    this.photo = data.photo || data.image || (data.photo_upload_id ? `/api/engine/v2/uploads/${encodeURIComponent(data.photo_upload_id)}/url` : "") || "";
    this.photo_upload_id = data.photo_upload_id || "";
    this.username = data.username || "";
    this.organizer = !!data.organizer;
    this.checked_in = !!data.checked_in;
    this.required = data.required ?? true;
    this.resource = data.resource ?? false;
    this.locatable = data.locatable ?? false;
    this.response_status = data.response_status || "";
    const groups2 = [...data.groups || []];
    this.department = data.department ?? "";
    if (data.sys_admin)
      groups2.push("placeos_admin");
    if (data.support)
      groups2.push("placeos_support");
    if (data.department)
      groups2.push(data.department);
    this.groups = unique(groups2);
    this.extension_data = data.extension_data || {};
    this.extension_data.assistance_required = data.assistance_required || this.extension_data.assistance_required;
    this.is_external = !this.email?.endsWith(`${USER_DOMAIN}`);
    this.visit_expected = data.visit_expected ?? true;
    this.assistance_required = !!this.extension_data?.assistance_required;
    for (const key in data) {
      if (!(key in this))
        this.extension_data[key] = data[key];
    }
  }
};
var GuestUser = class extends User {
  constructor(data = {}) {
    super(data);
    this.preferred_beverage = data.preferred_beverage || "";
    this.accepted_terms_conditions = data.accepted_terms_conditions || false;
    this.attachments = data.extension_data?.attachments || data.attachments || [];
    this.status = data.booking?.approved ? "approved" : data.booking?.rejected ? "declined" : data.extension_data?.status || data.status || "pending";
    this.booking = data.booking;
    this.extension_data.event = data.event_metadata;
  }
};
var StaffUser = class extends User {
  get location() {
    return this.location_time(Date.now());
  }
  work_preference(datetime) {
    if (!datetime)
      datetime = Date.now();
    const date = new Date(datetime);
    const day = date.getDay();
    const date_string = format(date, "yyyy-MM-dd");
    if (this.work_overrides[date_string]?.blocks?.length) {
      for (const block of this.work_overrides[date_string].blocks) {
        const start2 = block.start_time;
        const end = block.end_time;
        if (start2 <= date.getHours() + date.getMinutes() / 60 && end >= date.getHours() + date.getMinutes() / 60) {
          return block;
        }
      }
    }
    for (const pref of this.work_preferences) {
      if (pref.day_of_week === day && pref.blocks?.length) {
        for (const block of pref.blocks) {
          if (block.start_time <= date.getHours() + date.getMinutes() / 60 && block.end_time >= date.getHours() + date.getMinutes() / 60) {
            return block;
          }
        }
      }
    }
  }
  location_time(datetime = Date.now()) {
    return this.work_preference(datetime)?.location || "ooo";
  }
  get location_name() {
    return this.location_name_time();
  }
  location_name_time(datetime = Date.now()) {
    if (!datetime)
      datetime = Date.now();
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    if (location2.includes("w") && !in_hours) {
      return i18n("COMMON.WORK_HOURS_OUTSIDE");
    }
    switch (location2) {
      case "wfh":
        return i18n("COMMON.WORK_HOURS_HOME");
      case "wfo":
        return i18n("COMMON.WORK_HOURS_OFFICE");
      case "ooo":
        return i18n("COMMON.WORK_HOURS_OUT");
      case "aol":
        return i18n("COMMON.AOL");
      case "sick":
        return i18n("COMMON.WORK_HOURS_SICK");
      default:
        return i18n("COMMON.UNKNOWN");
    }
  }
  outsideHours(datetime = Date.now()) {
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    return location2.includes("w") && !in_hours;
  }
  get in_hours() {
    return this.in_hours_time(Date.now());
  }
  location_icon(datetime) {
    if (!datetime)
      datetime = Date.now();
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    if (location2 === "wfh" && in_hours)
      return "home";
    if (location2 === "wfo" && in_hours)
      return "business";
    if (location2 === "sick")
      return "sick";
    return "event_busy";
  }
  in_hours_time(datetime = Date.now()) {
    const block = this.work_preference(datetime);
    return !!block;
  }
  constructor(data = {}) {
    super(data);
    this.card_number = data.card_number || "";
    this.staff_id = data.staff_id || "";
    this.is_logged_in = !!data.is_logged_in;
    this.work_preferences = (data.work_preferences || []).map(copyWorktimePreference);
    this.work_overrides = Object.fromEntries(Object.entries(data.work_overrides || {}).map(([date, pref]) => [
      date,
      copyWorktimePreference(pref)
    ]));
  }
};
function copyWorktimePreference(pref) {
  return { day_of_week: pref.day_of_week, blocks: [...pref.blocks || []] };
}
var EMPTY_USER = {
  name: "<empty>",
  email: "<empty>@app.user"
};
function isEmptyUser(user) {
  return !user || !user.email || user.email === EMPTY_USER.email;
}

// libs/common/src/lib/types/event.class.ts
var _default_user = EMPTY_USER;
function setDefaultCreator(user) {
  if (user)
    _default_user = user;
}
var DAYS_OF_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
function toVisitorInternalOrExternal(value) {
  return value === "external" ? "external" : "internal";
}
function readAttendeeFlags(data) {
  const flags = {};
  if ("international" in data)
    flags.international = !!data.international;
  if ("visitor_internal_or_external" in data)
    flags.visitor_internal_or_external = toVisitorInternalOrExternal(data.visitor_internal_or_external);
  return flags;
}
function eventStatus(details) {
  if (details.status === "cancelled")
    return "declined";
  if (details.resources?.length) {
    if (details.resources.every((i) => i.response_status === "accepted" || i.response_status === "confirmed" || details.approved)) {
      return "approved";
    } else if (details.resources.some((i) => i.response_status === "tentative" || i.response_status === "needsAction")) {
      return "tentative";
    }
    return "declined";
  }
  return "approved";
}
function parseRecurrence(data) {
  const start2 = data.start || data.range_start * 1e3;
  let end = data.end || (data.range_end ? data.range_end * 1e3 : void 0);
  if (!end && data.occurrences > 1) {
    switch (data.pattern) {
      case "daily":
        end = addDays(start2 || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
      case "weekly":
        end = addWeeks(start2 || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
      case "month_day":
      case "monthly":
        end = addMonths(start2 || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        end = addDays(end, 7).valueOf();
        break;
      case "yearly":
        end = addYears(start2 || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
    }
  }
  return {
    range_start: getUnixTime(startOfDay(start2)),
    range_end: getUnixTime(endOfDay(end)),
    interval: data.interval,
    pattern: data.pattern,
    nth_of_month: data.nth_of_month,
    days_of_week: data.days_of_week?.map((_) => typeof _ === "number" ? DAYS_OF_WEEK[_] : _) || []
  };
}
var CalendarEvent = class _CalendarEvent {
  get images() {
    return this.extension_data.images || [];
  }
  get is_all_day() {
    return this.all_day || this.duration >= 12 * 60;
  }
  get view_access() {
    return this.extension_data.view_access || "OPEN";
  }
  /** Get field from extension data */
  ext(key) {
    return this.extension_data[key];
  }
  constructor(data = {}) {
    this._valid_asset_cache = [];
    this._valid_cache_expiry = 0;
    const custom_all_day = !!(data.extension_data?.custom_all_day || data.custom_all_day);
    this.id = data.event_id || data.id || "";
    this.event_start = data.event_start || getUnixTime(data.date || roundToNearestMinutes(addMinutes(/* @__PURE__ */ new Date(), 3), {
      nearestTo: 5
    }));
    this.event_end = data.event_end || getUnixTime(data.date_end || 0) || getUnixTime(addMinutes(this.event_start * 1e3, data.duration || 30));
    this.calendar = data.calendar || "";
    this.creator = (data.creator || _default_user.email)?.toLowerCase() || "";
    this.host = (data.host || data.host_email || this.creator || _default_user.email || "").toLowerCase();
    const attendees = data.attendees || [];
    const system_email = (data.system?.email || "").toLowerCase();
    const is_system_resource = (user) => !!user.resource || !!system_email && user.email?.toLowerCase() === system_email;
    this.attendees = attendees.filter((user) => !is_system_resource(user)).map((u) => new User(u));
    this.resources = unique(data.resources || attendees.filter((user) => is_system_resource(user)).map((s) => new Space(s)), "email") || [];
    this.title = data.title;
    this.body = (data.body || "").replace(/&lt;&lt;&lt;.*&gt;&gt;&gt;/g, "");
    this.is_system_event = (data.body || this.body).includes("main_event_id");
    this.private = !!data.private;
    this.all_day = !!data.all_day || custom_all_day;
    this.timezone = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.date = this.event_start * 1e3 || this.date;
    this.date_end = this.event_end * 1e3 || this.date_end;
    this.duration = differenceInMinutes(this.date_end, this.date);
    if (this.all_day) {
      if (!data.duration && !data.date_end && !data.event_end) {
        this.date = startOfDayInTimezone(this.date, this.timezone);
        this.duration = 24 * 60 - 1;
        this.date_end = endOfDayInTimezone(this.date, this.timezone);
      } else if (this.duration % (24 * 60) === 0) {
        this.date = startOfDayInTimezone(this.date, this.timezone);
        this.duration = Math.max(1, this.duration - 1);
        this.date_end = endOfDayInTimezone(addMinutes(this.date, this.duration), this.timezone);
      }
    }
    const matches = this.body.match(/\[ID\|([^\]]+)\]/);
    const associated_id = matches ? matches[1] : null;
    this.meeting_url = data.meeting_url || data.online_meeting_url || "";
    this.meeting_id = associated_id || data.meeting_id || data.online_meeting_id || "";
    this.meeting_provider = data.meeting_provider || data.online_meeting_provider || "";
    this.recurring = !!data.recurring;
    this.recurring_event_id = data.recurring_event_id || "";
    this.organiser = this.attendees.find((user) => user.email === this.host);
    this.from_bookings = data.from_bookings ?? false;
    this.master = data.master ? new _CalendarEvent(data.master) : null;
    this.mailbox = data.mailbox || "";
    this.ical_uid = data.ical_uid;
    this.linked_bookings = data.linked_bookings || [];
    this.update_master = data.update_master ?? false;
    if (data.recurring) {
      this.recurrence = {
        start: data.recurrence?.start || this.event_start * 1e3 || new Date(data.recurrence.range_start * 1e3).valueOf(),
        end: data.recurrence.end || new Date(data.recurrence.range_end * 1e3).valueOf(),
        interval: data.recurrence.interval,
        pattern: data.recurrence.pattern,
        occurrences: data.recurrence.occurrences,
        days_of_week: data.recurrence.days_of_week?.map((_) => typeof _ === "number" ? _ : DAYS_OF_WEEK.indexOf(_)) || [],
        nth_of_month: data.recurrence.nth_of_month
      };
    } else {
      this.recurrence = {};
    }
    const system = data.system;
    if (system?.email && !this.resources.find((_) => _.email.toLowerCase() === system.email.toLowerCase())) {
      this.resources.push(new Space(__spreadProps(__spreadValues({}, system), {
        response_status: data.status || "needsAction"
      })));
    }
    this.system = system || this.resources[0] || null;
    if (!system && data.system_id) {
      this.system = { id: data.system_id };
    }
    this.old_system = data.old_system || data.system;
    this.attachments = data.attachments || [];
    this.extension_data = data.extension_data || {};
    this.deleted = !!data.deleted;
    this.status = eventStatus(__spreadValues(__spreadValues({}, data), this)) || "none";
    this.location = data.location || this.space?.display_name || this.space?.name || "";
    this.setup_time = data.setup_time || 0;
    this.breakdown_time = data.breakdown_time || 0;
    this.visibility = data.visibility || "normal";
    this.type = this.deleted || this.status === "declined" ? "cancelled" : this.attendees.find((_) => _.is_external) ? "external" : "internal";
    for (const key in data) {
      if (!(key in this)) {
        this.extension_data[key] = data[key] || this.extension_data[key];
      }
    }
    const simple_event = {
      date: this.date,
      duration: this.duration,
      date_end: this.date_end,
      all_day: this.all_day,
      space: this.space,
      organiser: this.organiser
    };
    this.extension_data.catering = (this.extension_data.catering || []).map((i) => new CateringOrder(__spreadProps(__spreadValues({}, i), { event: simple_event })));
    const linked_assets = this.linked_bookings.filter((_) => _.booking_type === "asset-request").map((_) => _.extension_data?.request).filter((_) => !!_);
    const asset_requests = (linked_assets.length ? linked_assets : this.extension_data.assets) || [];
    this.extension_data.images = this.extension_data.images || data.images || [];
    this.extension_data.view_access = this.extension_data.view_access || data.view_access || data.permission?.toUpperCase() || "OPEN";
    this.permission = data.view_access || data.permission || this.extension_data.view_access;
    if (this.extension_data.permission) {
      this.extension_data.permission = this.permission;
    }
    this.extension_data.assets = asset_requests.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: simple_event })));
  }
  /** List of external attendees associated with the event */
  get guests() {
    return this.attendees.filter((f) => !!f.is_external);
  }
  /** Primary space associated with the booking */
  get space() {
    return this.resources[0] || null;
  }
  get is_today() {
    return isSameDay(this.date, Date.now());
  }
  get valid_catering() {
    return (this.ext("catering") || []).filter((order) => order.deliver_at < this.date_end);
  }
  get valid_assets() {
    if (this._valid_cache_expiry > Date.now() && this._valid_asset_cache.length) {
      return this._valid_asset_cache;
    }
    const list = this.linked_bookings;
    this._valid_asset_cache = (this.ext("assets") || []).map((request2) => new AssetRequest(__spreadProps(__spreadValues({}, request2), { event: this }))).filter((request2) => request2.deliver_at < this.date_end).map((request2) => {
      const booking = list.find((_) => _.extension_data.request_id === request2.id);
      if (booking) {
        request2.state = booking.approved ? "approved" : booking.rejected ? "rejected" : "pending";
      }
      return request2;
    });
    this._valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
    return this._valid_asset_cache;
  }
  /**
   * Convert class data to simple JSON object
   */
  toJSON() {
    const obj = __spreadValues({}, this);
    const is_full_day_period = this.all_day && getUnixTime(this.date) === getUnixTime(startOfDayInTimezone(this.date, this.timezone)) && getUnixTime(this.date_end) === getUnixTime(endOfDayInTimezone(this.date_end, this.timezone));
    const is_custom_all_day = this.all_day && !is_full_day_period;
    const date = is_full_day_period ? startOfDayInTimezone(this.date, this.timezone) : this.date;
    const end = is_full_day_period ? endOfDayInTimezone(this.date_end, this.timezone) + 1 : this.date_end;
    obj.event_start = getUnixTime(date);
    obj.event_end = getUnixTime(end);
    const attendees = this.attendees;
    this.recurring = this.recurrence?.pattern && this.recurrence._pattern !== "none";
    if (this.recurring) {
      obj.recurrence = parseRecurrence(__spreadProps(__spreadValues({}, this.recurrence), {
        start: this.recurrence.start || this.date
      }));
      delete obj.recurrence.start;
      delete obj.recurrence.end;
    }
    obj.recurrence = obj.recurrence ? Object.keys(obj.recurrence).length ? obj.recurrence : null : null;
    obj.attendees = unique([
      ...attendees,
      ...this.resources.map((_) => __spreadProps(__spreadValues({}, _), { resource: true }))
    ], "email");
    if (this.all_day) {
      obj.setup_time = 0;
      obj.breakdown_time = 0;
      obj.extension_data.all_day_date = format(date, "yyyy-MM-dd");
    }
    if (is_custom_all_day) {
      obj.all_day = false;
      obj.extension_data.custom_all_day = true;
    } else {
      if (this.id) {
        obj.extension_data.custom_all_day = false;
      } else {
        delete obj.extension_data.custom_all_day;
      }
    }
    obj.extension_data.catering = obj.extension_data.catering.map((i) => new CateringOrder(__spreadProps(__spreadValues({}, i), { event: null })));
    obj.extension_data.assets = obj.extension_data.assets.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: null })));
    obj.system_id = this.system?.id;
    obj.online_meeting_provider = this.meeting_provider;
    for (const key of [
      "catering",
      "date",
      "date_end",
      "duration",
      "status",
      "linked_bookings",
      "_valid_asset_cache",
      "_valid_cache_expiry",
      "type"
    ]) {
      if (key in obj)
        delete obj[key];
    }
    if (!obj.update_master)
      delete obj.recurring_event_id;
    removeEmptyFields(obj);
    return obj;
  }
  /** Status of the booking */
  get state() {
    const now = /* @__PURE__ */ new Date();
    const date = this.date;
    if (isBefore(now, add(date, { minutes: -15 })))
      return "future";
    if (isBefore(now, date))
      return "upcoming";
    if (isBefore(now, add(date, { minutes: 15 })))
      return "started";
    if (isBefore(now, add(date, { minutes: this.duration })))
      return "in_progress";
    return "done";
  }
  get can_check_in() {
    const now = /* @__PURE__ */ new Date();
    return this.is_today || isAfter(now, addMinutes(this.date, -5)) && isBefore(now, addMinutes(this.date, this.duration));
  }
};

// libs/common/src/lib/user-state.ts
var GroupPermission;
(function(GroupPermission2) {
  GroupPermission2[GroupPermission2["Read"] = 1] = "Read";
  GroupPermission2[GroupPermission2["Create"] = 2] = "Create";
  GroupPermission2[GroupPermission2["Update"] = 4] = "Update";
  GroupPermission2[GroupPermission2["Delete"] = 8] = "Delete";
  GroupPermission2[GroupPermission2["Operate"] = 16] = "Operate";
  GroupPermission2[GroupPermission2["Approve"] = 32] = "Approve";
  GroupPermission2[GroupPermission2["Manage"] = 64] = "Manage";
  GroupPermission2[GroupPermission2["Share"] = 128] = "Share";
})(GroupPermission || (GroupPermission = {}));
var ALL_PERMISSIONS = [
  GroupPermission.Read,
  GroupPermission.Create,
  GroupPermission.Update,
  GroupPermission.Delete,
  GroupPermission.Operate,
  GroupPermission.Approve,
  GroupPermission.Manage,
  GroupPermission.Share
];
var _current_user = new BehaviorSubject(EMPTY_USER);
var _change = new BehaviorSubject(0);
var current_user = _current_user.asObservable();
var user_groups = signal(
  [],
  ...ngDevMode ? [{ debugName: "user_groups" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_groups_loaded = signal(
  false,
  ...ngDevMode ? [{ debugName: "user_groups_loaded" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_groups_failed = signal(
  false,
  ...ngDevMode ? [{ debugName: "user_groups_failed" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_signal = signal(
  EMPTY_USER,
  ...ngDevMode ? [{ debugName: "user_signal" }] : (
    /* istanbul ignore next */
    []
  )
);
_current_user.subscribe((u) => user_signal.set(u));
function sameGroups(a, b) {
  if (a.length !== b.length)
    return false;
  const set2 = new Set(a);
  return b.every((group) => set2.has(group));
}
var user_group_names = computed(() => user_signal().groups || [], __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "user_group_names" } : (
  /* istanbul ignore next */
  {}
)), { equal: sameGroups }));
var PERMISSION_VALUES = [
  ["read", GroupPermission.Read],
  ["create", GroupPermission.Create],
  ["update", GroupPermission.Update],
  ["delete", GroupPermission.Delete],
  ["operate", GroupPermission.Operate],
  ["approve", GroupPermission.Approve],
  ["manage", GroupPermission.Manage],
  ["share", GroupPermission.Share]
];
function isTestRuntime() {
  return typeof jest !== "undefined" || typeof vi !== "undefined";
}
var USER_CACHE_KEY = "PLACEOS.user";
var MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1e3;
function tokenID() {
  const value = token() || "";
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = hash * 31 + value.charCodeAt(i) | 0;
  }
  return `${hash}`;
}
function cachedUserData() {
  try {
    const cache = JSON.parse(localStorage.getItem(USER_CACHE_KEY) || "null");
    if (!cache?.cached_at || cache.token_id !== tokenID() || cache.cached_at + MAX_CACHE_AGE < Date.now()) {
      localStorage.removeItem(USER_CACHE_KEY);
      return null;
    }
    return cache;
  } catch {
    localStorage.removeItem(USER_CACHE_KEY);
    return null;
  }
}
function storeUserData() {
  const user = currentUser();
  if (isEmptyUser(user) || isPublicMode())
    return;
  try {
    const cache = {
      cached_at: Date.now(),
      token_id: tokenID(),
      user: __spreadValues({}, user)
    };
    localStorage.setItem(USER_CACHE_KEY, JSON.stringify(cache));
  } catch {
  }
}
function applyCachedUserData() {
  const cache = cachedUserData();
  if (!cache)
    return false;
  const user = new StaffUser(cache.user);
  _current_user.next(user);
  setDefaultCreator(user);
  return true;
}
var user_permissions = computed(
  () => {
    const permissions = {
      read: [],
      create: [],
      update: [],
      delete: [],
      operate: [],
      approve: [],
      manage: [],
      share: []
    };
    const permission_sets = PERMISSION_VALUES.reduce((sets, [permission_name]) => {
      sets[permission_name] = /* @__PURE__ */ new Set();
      return sets;
    }, {});
    for (const { group, permissions: group_permissions } of user_groups()) {
      for (const subsystem of group.subsystems || []) {
        for (const [permission_name, permission_value] of PERMISSION_VALUES) {
          if (group_permissions & permission_value) {
            permission_sets[permission_name].add(subsystem);
          }
        }
      }
    }
    for (const [permission_name] of PERMISSION_VALUES) {
      permissions[permission_name] = [
        ...permission_sets[permission_name]
      ].sort();
    }
    return permissions;
  },
  ...ngDevMode ? [{ debugName: "user_permissions" }] : (
    /* istanbul ignore next */
    []
  )
);
function setPublicUser() {
  const generic_user = new StaffUser({
    id: "public-user",
    name: "Public User",
    email: "public.user@placeos.example"
  });
  _current_user.next(generic_user);
  return generic_user;
}
async function loadUserGroups() {
  user_groups_loaded.set(false);
  user_groups_failed.set(false);
  if (isPublicMode()) {
    user_groups.set([]);
    user_groups_loaded.set(true);
    return;
  }
  try {
    const groups2 = await groups_exports.current({}).then(orThrow);
    user_groups.set(groups2);
    console.log("Permissions:", user_permissions());
  } catch (error) {
    console.warn("Failed to load user groups.", loadError(error));
    user_groups.set([]);
    user_groups_failed.set(true);
  } finally {
    user_groups_loaded.set(true);
  }
}
function initialiseUser() {
  const is_public_mode = isPublicMode();
  if (!is_public_mode)
    applyCachedUserData();
  const ready = placeClientStarted();
  const user_request = combineLatest([
    defer(() => ready.then(() => users_exports.current().then(orThrow))),
    _change
  ]).pipe(map(([i]) => new StaffUser(i)));
  if (is_public_mode) {
    user_request.pipe(catchError((error) => {
      console.warn("User loading failed in public mode, using local public user data.", loadError(error));
      return of(setPublicUser());
    })).subscribe((user) => _current_user.next(user));
    return;
  }
  user_request.pipe(retry({
    count: 10,
    delay: (error, count) => {
      const delay_ms = Math.min(1e3 * Math.pow(2, count), 3e4);
      console.warn(`User loading failed, retrying in ${delay_ms}ms (attempt ${count}/10)`, loadError(error));
      return timer(delay_ms);
    }
  })).subscribe({
    next: (user) => applyUser(user),
    error: (error) => console.error("User loading failed after 10 retries.", loadError(error))
  });
}
function loadError(error) {
  if (!(error instanceof CallFailed))
    return error;
  return { kind: error.error.kind, status: error.status };
}
function applyUser(user) {
  _current_user.next(user);
  setDefaultCreator(user);
  storeUserData();
  return loadUserGroups();
}
function reloadUserData() {
  setTimeout(async () => {
    try {
      const p_user = await users_exports.current().then(orThrow);
      applyUser(new StaffUser(p_user));
    } catch (error) {
      if (isPublicMode()) {
        console.warn("User reload failed in public mode, using local public user data.", loadError(error));
        setPublicUser();
        return;
      }
      if (error instanceof CallFailed) {
        const { kind } = error.error;
        throw new Error(`User reload failed: ${kind} ${error.status}`);
      }
      throw error;
    }
  }, 300);
}
function currentUser() {
  return _current_user.getValue() || EMPTY_USER;
}
function currentUserCanApprove() {
  const groups2 = currentUser()?.groups || [];
  return groups2.includes("placeos_admin") || groups2.includes("placeos_support");
}
function currentUserIsLoaded() {
  if (!isEmptyUser(currentUser()))
    return true;
  return isTestRuntime();
}
function currentUserLoaded() {
  const user = currentUser();
  if (currentUserIsLoaded())
    return Promise.resolve(user);
  return waitForCurrentUser();
}
function waitForCurrentUser() {
  return firstValueFrom(_current_user.pipe(first((user) => !isEmptyUser(user))));
}
function userSignal() {
  return user_signal;
}
function hasPermission(subsystem, permissions) {
  if (user_signal().groups?.includes("placeos_admin"))
    return true;
  return (getPermissionMask(subsystem) & permissions) === permissions;
}
function getPermissionMask(subsystem) {
  let permissions = 0;
  for (const { group, permissions: group_permissions } of user_groups()) {
    if (group.subsystems?.includes(subsystem)) {
      permissions |= group_permissions;
    }
  }
  return permissions;
}
setTimeout(() => {
  if (!isTestRuntime())
    initialiseUser();
}, 50);

// libs/common/src/lib/constants.ts
var SETTING_KEYS = {
  FAVORITE_ROOMS: "favourite_rooms",
  FAVORITE_DESKS: "favourite_desks",
  FAVORITE_PARKING_SPACES: "favourite_parking",
  FAVORITE_LOCKERS: "favourite_lockers",
  FAVORITE_CATERING: "favourite_menu_items",
  FAVORITE_TEAM_MEMBERS: "favourite_team_members",
  TEAM_MEMBERS: "team_members"
};
var SECONDS = 1e3;
var MINUTES = 60 * SECONDS;

// libs/common/src/lib/json.ts
function toJsonValue(value) {
  const text = JSON.stringify(value);
  return text === void 0 ? null : JSON.parse(text);
}
function isJsonRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isJsonArray(value) {
  return Array.isArray(value);
}
function jsonRecord(value) {
  return isJsonRecord(value) ? value : {};
}
function jsonRecords(value) {
  return isJsonArray(value) ? value.filter(isJsonRecord) : [];
}
function jsonText(value) {
  return typeof value === "string" ? value : "";
}
function jsonStrings(value) {
  return isJsonArray(value) ? value.filter((_) => typeof _ === "string") : [];
}

// libs/common/src/lib/google-analytics.service.ts
var GoogleAnalyticsService = class _GoogleAnalyticsService {
  constructor() {
    this.enabled = true;
    this.app_name = "GA_APP";
    this._ga4 = false;
    this.timers = {};
  }
  init(tracking_id = "") {
    if (!this.enabled)
      return;
    this._ga4 = !!tracking_id?.startsWith("G-");
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      if (this._ga4) {
        window.gtag("js", /* @__PURE__ */ new Date());
      } else {
        window.dataLayer.push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
      }
      const script = document.createElement("script");
      script.async = true;
      script.src = this._ga4 ? `https://www.googletagmanager.com/gtag/js?id=${tracking_id}` : `https://www.googletagmanager.com/gtm.js?id=${tracking_id}`;
      const first_script = document.getElementsByTagName("script")[0];
      if (first_script?.parentNode) {
        first_script.parentNode.insertBefore(script, first_script);
      } else {
        document.head.appendChild(script);
      }
      log2("Analytics", "Service", "Injected Google Analytics into page");
    }
    this.service = window.gtag;
  }
  push(obj) {
    window.dataLayer.push(obj);
  }
  /**
   * Initialise Google Analytics
   * @param tracking_id GA Tracking ID
   */
  load(tracking_id) {
    if (!this.enabled) {
      throw new Error("Google Analytics needs to be enabled before being initialised");
    }
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    log2("Analytics", "Service", `Setup with tracking ID: ${tracking_id}`);
    if (this._ga4) {
      this.service("config", tracking_id, { send_page_view: false });
      return;
    }
    this.page("");
  }
  /**
   * Set User ID for the Google Analytics session
   * @param id Identifier of the User
   */
  setUser(id) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`user|${id}`, () => {
        log2("Analytics", "Service", `Set user ID: ${id}`);
        if (this._ga4) {
          this.service("set", { user_id: id });
        } else {
          this.service("set", "userId", id);
        }
        this.event("authentication", this._ga4 ? "user_id_available" : "user-id available");
      }, 100);
    }
  }
  send(type, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`end|${type}`, () => {
        if (this._ga4) {
          this.service("event", type, value);
          return;
        }
        this.push(__spreadProps(__spreadValues({}, value), {
          event: "event"
        }));
      });
    }
  }
  /**
   * Post event to Google Analytics API
   * @param category Event Category
   * @param action Event action; use a valid GA4 event name for GA4 tracking IDs
   * @param label Event Label
   * @param value Event Value
   */
  event(category, action, label, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`event|${category}|${action}|${label}|${value}`, () => {
        const l = label ? ", " + label : "";
        log2("Analytics", "Service", `Event: ${category}, ${action}${l}${value ? ", " + value : ""}`);
        if (this._ga4) {
          this.service("event", action, {
            event_category: category,
            event_label: label,
            value
          });
          return;
        }
        this.push({
          event: "event",
          category,
          action,
          label
        });
      }, 100);
    }
  }
  /**
   * Post screen change event to Google Analytics API
   * @param name
   * @param app_name
   */
  screen(name, app_name) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (name && this.enabled) {
      this.timeout(`event|${name}|${app_name || this.app_name}`, () => {
        log2("Analytics", "Service", `Screen: ${name}${app_name ? ", " + app_name : ""}`);
        if (this._ga4) {
          this.service("event", "screen_view", {
            app_name: app_name || this.app_name,
            screen_name: name
          });
          return;
        }
        this.push({
          event: "screenview",
          appName: app_name || this.app_name,
          screenName: name
        });
      }, 100);
    }
  }
  /**
   * Post routing event to Google Analytics API.
   * The query string and fragment are removed, as they can hold personal
   * data such as an email address.
   * @param route Activated route
   * @param origin Add origin to routh path
   */
  page(route, origin = false) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    route = route.split(/[?#]/)[0];
    if (this.enabled) {
      this.timeout(`page|${route}`, () => {
        log2("Analytics", "Service", `Page: ${route}`);
        if (this._ga4) {
          const path = route || location.pathname;
          this.service("event", "page_view", {
            page_title: document.title,
            page_path: path,
            // Hash-routed SPAs hide the route in the URL
            // fragment, which GA4 strips when deriving the
            // page path. Send a full URL on the route so
            // each page has a distinct, reportable path.
            page_location: `${location.origin}${path}`
          });
          return;
        }
        this.push({
          event: "pageview",
          url: `${origin ? location.origin : ""}${route}`
        });
      }, 100);
    }
  }
  /**
   * Post timing event to Google Analytics API
   * @param category
   * @param variable
   * @param value
   * @param label
   */
  timing(category, variable, value, label) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`page|${category}|${variable}|${value}|${label}`, () => {
        log2("Analytics", "Service", `Timing: ${category}, ${variable}, ${value}${label ? ", " + label : ""}`);
        if (this._ga4) {
          this.service("event", "timing_complete", {
            event_category: category,
            name: variable,
            value: Number(value) || 0,
            event_label: label
          });
          return;
        }
        this.push({
          event: "timing",
          category,
          variable,
          value,
          label
        });
      }, 100);
    }
  }
  /**
   * Creates a timeout for the given name used for preventing duplicate events in quick succession
   * @param name Name of timer
   * @param fn Timer callback
   * @param delay Timer delay
   */
  timeout(name, fn, delay2 = 300) {
    if (this.timers[name]) {
      clearTimeout(this.timers[name]);
      delete this.timers[name];
    }
    this.timers[name] = setTimeout(() => {
      if (fn instanceof Function) {
        fn();
      }
      delete this.timers[name];
    }, delay2);
  }
  static {
    this.\u0275fac = function GoogleAnalyticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleAnalyticsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleAnalyticsService, factory: _GoogleAnalyticsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/common/src/lib/version.ts
var VERSION = {
  "dirty": false,
  "raw": "19144e9",
  "hash": "19144e9",
  "distance": null,
  "tag": null,
  "semver": null,
  "suffix": "19144e9",
  "semverString": null,
  "version": "1.12.0",
  "time": 1795435267800
};

// libs/common/src/lib/settings.service.ts
var _service3;
var _setting_signals = {};
var DEBUG_OVERRIDES_KEY = "PLACEOS.setting_overrides";
var LEGACY_USER_SETTING_KEYS = {
  favourite_spaces: SETTING_KEYS.FAVORITE_ROOMS,
  favourite_parking_spaces: SETTING_KEYS.FAVORITE_PARKING_SPACES
};
function cssVariableRule(selector, variables = {}) {
  let rule = `${selector} { `;
  for (const key in variables) {
    rule += `--${key}: ${variables[key]}; `;
  }
  return `${rule}}`;
}
function withLegacyUserSettings(details) {
  const result = __spreadValues({}, details);
  for (const [old_key, key] of Object.entries(LEGACY_USER_SETTING_KEYS)) {
    result[key] ??= details[old_key];
  }
  return result;
}
function appDebugOverridesKey() {
  const app2 = location.pathname.replace(/[\\/]/g, "").trim() || "PlaceOS";
  return `${DEBUG_OVERRIDES_KEY}.${app2}`;
}
function readDebugOverrides(storage_key) {
  try {
    const overrides = JSON.parse(localStorage.getItem(storage_key) || "{}");
    for (const key in overrides) {
      if (!key.startsWith("app."))
        delete overrides[key];
    }
    return overrides;
  } catch {
    return {};
  }
}
function writeDebugOverrides(storage_key, overrides) {
  if (Object.keys(overrides).length) {
    localStorage.setItem(storage_key, JSON.stringify(overrides));
  } else
    localStorage.removeItem(storage_key);
}
function setting(key) {
  return _service3 ? _service3.get(key) : void 0;
}
function appDetails() {
  return {
    app_name: setting("app.name") || setting("app.short_name") || "PlaceOS",
    app_version: VERSION.raw || VERSION.version || VERSION.hash
  };
}
function settingSignal(key, default_value = void 0, root = false) {
  const full_key = root ? key : `app.${key}`;
  if (!_setting_signals[full_key]) {
    _setting_signals[full_key] = signal(setting(full_key) ?? default_value);
  }
  return _setting_signals[full_key];
}
var active_theme = computed(
  () => settingSignal("allow_dark_mode", false)() ? settingSignal("theme", "light", true)() : "light",
  ...ngDevMode ? [{ debugName: "active_theme" }] : (
    /* istanbul ignore next */
    []
  )
);
var themed_logo = computed(
  () => {
    const logo = settingSignal(active_theme() === "dark" ? "logo_dark" : "logo_light")();
    return typeof logo === "string" ? logo : logo?.src || "";
  },
  ...ngDevMode ? [{ debugName: "themed_logo" }] : (
    /* istanbul ignore next */
    []
  )
);
var SettingsService = class _SettingsService extends AsyncHandler {
  /**
   * @hidden
   */
  setOverrides(value) {
    this._overrides.set(value);
    this._refreshSettings();
  }
  /** Set a local debug override for an `app.*` setting. `undefined` clears the key. */
  /**
   * Set a local debug override for an `app.*` setting in this app only.
   * `undefined` clears the key, also from the overrides for all apps.
   */
  setDebugOverride(key, value) {
    if (!key.startsWith("app."))
      return;
    const app_overrides = __spreadValues({}, this._app_debug_overrides);
    const shared = readDebugOverrides(DEBUG_OVERRIDES_KEY);
    if (value === void 0) {
      delete app_overrides[key];
      delete shared[key];
      writeDebugOverrides(DEBUG_OVERRIDES_KEY, shared);
    } else
      app_overrides[key] = value;
    this._app_debug_overrides = app_overrides;
    writeDebugOverrides(appDebugOverridesKey(), app_overrides);
    this._debug_overrides.set(__spreadValues(__spreadValues({}, shared), app_overrides));
    this._refreshSettings();
  }
  /** Remove the debug overrides for this app and for all apps */
  clearDebugOverrides() {
    this._app_debug_overrides = {};
    this._debug_overrides.set({});
    localStorage.removeItem(DEBUG_OVERRIDES_KEY);
    localStorage.removeItem(appDebugOverridesKey());
    this._refreshSettings();
  }
  _refreshSettings() {
    this._applyCssVariables();
    this._updateSignals();
    this._applyTheme();
    this._setFontSize();
    this._setPrintFontSize();
  }
  get theme() {
    const allow_dark_mode = this.get("app.allow_dark_mode");
    return allow_dark_mode ? this.get("theme") : "light";
  }
  /** Get signal for key */
  listen(name) {
    if (!this._subjects[name])
      this._subjects[name] = signal(null);
    return this._subjects[name];
  }
  /** Update observable value for key */
  post(name, value) {
    if (!this._subjects[name])
      this._subjects[name] = signal(null);
    this._subjects[name].set(value);
  }
  value(name) {
    return !this._subjects[name] ? null : this._subjects[name]();
  }
  signal(name, default_value, root) {
    return settingSignal(name, default_value, root);
  }
  /** Page title */
  get title() {
    return this._title.getTitle();
  }
  set title(value) {
    this._title.setTitle(`${value} | ${this.get("app.name") || this._app_name}`);
    const tracking_id = this.get("app.analytics.tracking_id");
    if (!tracking_id || this.get("app.analytics.enabled") === false)
      return;
    this._analytics?.send("pagename", { title: value });
  }
  constructor() {
    super();
    this._title = inject(Title);
    this._analytics = inject(GoogleAnalyticsService, { optional: true });
    this._app_name = "PlaceOS";
    this._overrides = signal(
      [],
      ...ngDevMode ? [{ debugName: "_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.overrides = this._overrides.asReadonly();
    this._user_settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "_user_settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._app_debug_overrides = readDebugOverrides(appDebugOverridesKey());
    this._debug_overrides = signal(
      __spreadValues(__spreadValues({}, readDebugOverrides(DEBUG_OVERRIDES_KEY)), this._app_debug_overrides),
      ...ngDevMode ? [{ debugName: "_debug_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_overrides = this._debug_overrides.asReadonly();
    this._subjects = {};
    this._pending_settings = {};
    this.theme_signal = active_theme;
    this.time_format_signal = computed(
      () => this.signal("use_24_hour_time", false)() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    _service3 = this;
    const now = /* @__PURE__ */ new Date();
    const time = new Date(VERSION.time);
    const built = isSameDay(now, time) ? `Today at ${format(time, "h:mma")}` : format(time, "do MMM yyyy, h:mma");
    log2("CORE", `${VERSION.semver}`, null, "debug", true);
    log2("APP", `${VERSION.hash} | Built: ${built}`, null, "debug", true);
    this.init();
  }
  /**
   * Initialise the settings
   */
  async init() {
    if (this.get("debug"))
      window.debug = true;
    if (this.get("app")?.name) {
      this._app_name = this.get("app").name;
    }
    this._app_name = location.pathname.replace(/[\\/]/g, "").trim() || this._app_name;
    setAppName(this._app_name.split("-").join("_").toUpperCase());
    log2("Settings", "Successfully loaded settings");
    this._initialised.next(true);
    if (window.debug) {
      if (!window.app)
        window.app = {};
      window.app.settings = this;
      window.setting = (key) => this.get(key);
    }
    const user = await this._currentUser();
    const data = await metadata_exports.show({ id: user.id, name: "settings" }).then(orThrow).then((data2) => data2["settings"]).catch((error) => {
      log2("Settings", "Unable to load user settings", error, "warn");
      return null;
    });
    const details = data?.details;
    this._user_settings.set(withLegacyUserSettings(details && typeof details === "object" && !Array.isArray(details) ? details : {}));
    this._updateSignals();
    this.timeout("init", () => {
      this._initDarkMode();
      this._applyTheme();
      this._setFontSize();
      this._setPrintFontSize();
    }, 1e3);
  }
  /** Whether settings service has initialised */
  get app_name() {
    return this._app_name.replace(/ /g, "-");
  }
  get time_format() {
    return this.get("app.use_24_hour_time") ? "HH:mm" : "h:mm a";
  }
  /**
   * Get a setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  get(key) {
    const debug_overrides = this._debug_overrides();
    if (key in debug_overrides)
      return debug_overrides[key];
    const keys = key.split(".");
    if (keys[0] !== "app") {
      return getItemWithKeys(keys, this._pending_settings) ?? getItemWithKeys(keys, this._user_settings()) ?? getItemWithKeys(keys, DEFAULT_SETTINGS);
    }
    const override_settings = [...this._overrides()];
    for (const override of override_settings) {
      const value = getItemWithKeys(keys.slice(1), override);
      if (value != null) {
        return value;
      }
    }
    return getItemWithKeys(keys, DEFAULT_SETTINGS);
  }
  saveUserSetting(name, value) {
    this._pending_settings[name] = value;
    this._updateSignals();
    if (name === "dark_mode")
      this.setTheme(value ? "dark" : "");
    if (name === "font_size")
      this._setFontSize();
    this.timeout("save_settings", () => this._savePendingChanges(), 2400);
  }
  async updateLocatable(locatable) {
    await users_exports.update({ id: currentUser().id, body: { locatable } }).then(orThrow);
    reloadUserData();
  }
  overrideCssVariable(key, value, important = false) {
    let element = document.getElementById(`css-var-overrides+${key}`);
    if (!element) {
      element = document.createElement("style");
      element.id = `css-var-overrides+${key}`;
      document.head.appendChild(element);
    }
    element.innerText = `html, body { --${key}: ${value} ${important ? "!important" : ""}}`;
  }
  setTheme(theme) {
    const current_theme = this.theme;
    if (current_theme === theme)
      return;
    this.saveUserSetting("theme", theme);
    this._applyTheme();
  }
  /**
   * Apply the colour overrides from `app.css_variables` and, for the dark
   * theme, from `app.css_variables_dark`. The dark rule has the theme class,
   * so it wins over the `.theme-dark` defaults of the stylesheet.
   */
  _applyCssVariables() {
    const css_string = [
      cssVariableRule("body", this.get("app.css_variables") || {}),
      cssVariableRule("body.theme-dark", this.get("app.css_variables_dark") || {})
    ].join(" ");
    let element = document.getElementById("css-var-overrides");
    if (!element) {
      element = document.createElement("style");
      element.id = "css-var-overrides";
      document.head.appendChild(element);
    }
    element.innerText = css_string;
  }
  async _savePendingChanges() {
    const user = currentUser();
    if (!user?.id || !Object.keys(this._pending_settings).length)
      return;
    this._updateSignals();
    await metadata_exports.update({
      id: user.id,
      body: {
        name: "settings",
        description: "",
        details: toJsonValue(__spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings))
      }
    }).then(orThrow);
    this._user_settings.set(__spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings));
    this._pending_settings = {};
  }
  _setFontSize() {
    if (!this.get("font_size"))
      return;
    this.overrideCssVariable("font-size", `${this.get("font_size")}px`);
  }
  _applyTheme() {
    const allow_dark_mode = this.get("app.allow_dark_mode");
    this._clearTheme();
    if (!allow_dark_mode)
      return;
    document.body.classList.add(`theme-${this.theme}`);
  }
  _clearTheme() {
    const class_list = document.body.classList.value.split(" ");
    for (const item of class_list) {
      if (item.startsWith("theme-")) {
        document.body.classList.remove(item);
      }
    }
  }
  _setPrintFontSize() {
    let print_style_el = document.getElementById("placeos-print-block");
    if (!print_style_el) {
      print_style_el = document.createElement("style");
      print_style_el.id = "placeos-print-block";
      document.head.appendChild(print_style_el);
    }
    print_style_el.innerText = `@media print { html, body { font-size: ${this.get("app.print_font_size") || "4mm"}; } }`;
  }
  _initDarkMode() {
    if (this.theme)
      return;
    const os_dark = window?.matchMedia ? window?.matchMedia("(prefers-color-scheme: dark)")?.matches : false;
    this.setTheme(os_dark ? "dark" : "");
  }
  _updateSignals() {
    for (const key in _setting_signals) {
      _setting_signals[key].update((old) => this.get(key) ?? old);
    }
  }
  _currentUser() {
    return new Promise((resolve) => {
      const check = () => {
        const user = currentUser();
        if (user?.id)
          return resolve(user);
        this.timeout("current_user", check, 100);
      };
      check();
    });
  }
  static {
    this.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/application.ts
var _timer;
var _initial_check;
var _version_subscription;
var _unrecoverable_subscription;
var _new_version = false;
var _auto_reload = false;
var _reload_gate = null;
var _reload_timer;
var _reload_deferred_since = 0;
var _init_reload = null;
var _init_reload_timer;
var _last_update_check = 0;
var _update_interval = 0;
var INIT_RELOAD_KEY = "PlaceOS.initialisation_reloads";
var INIT_RELOAD_WINDOW_MS = 5 * MINUTES;
var INIT_RELOAD_LIMIT = 3;
var INITIALISATION_FAILURE = signal(
  "",
  ...ngDevMode ? [{ debugName: "INITIALISATION_FAILURE" }] : (
    /* istanbul ignore next */
    []
  )
);
var INITIALISATION_COMPLETE = signal(
  false,
  ...ngDevMode ? [{ debugName: "INITIALISATION_COMPLETE" }] : (
    /* istanbul ignore next */
    []
  )
);
var RELOAD_RETRY_MS = 5 * SECONDS;
var MAX_RELOAD_DEFERRAL_MS = 10 * MINUTES;
var SERVICE_WORKER_UPDATE = signal(
  null,
  ...ngDevMode ? [{ debugName: "SERVICE_WORKER_UPDATE" }] : (
    /* istanbul ignore next */
    []
  )
);
function hasNewVersion() {
  return _new_version;
}
function serviceWorkerUpdate() {
  return SERVICE_WORKER_UPDATE.asReadonly();
}
function backendReachable() {
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return false;
  }
  return isOnline();
}
function canReloadNow() {
  if (!backendReachable())
    return false;
  try {
    return _reload_gate ? _reload_gate() : true;
  } catch (error) {
    log2("CACHE", "Reload gate failed.", error, "warn");
    return true;
  }
}
function reloadApp() {
  if (_reload_timer)
    clearTimeout(_reload_timer);
  _reload_timer = void 0;
  if (!_reload_deferred_since)
    _reload_deferred_since = Date.now();
  const waited = Date.now() - _reload_deferred_since;
  if (canReloadNow() || waited >= MAX_RELOAD_DEFERRAL_MS) {
    location.reload();
    return;
  }
  _reload_timer = setTimeout(reloadApp, RELOAD_RETRY_MS);
}
function reloadForNewVersion() {
  reloadApp();
}
function initialisationFailure() {
  return INITIALISATION_FAILURE.asReadonly();
}
function initialisationComplete() {
  return INITIALISATION_COMPLETE.asReadonly();
}
function failInitialisation(message2) {
  INITIALISATION_COMPLETE.set(false);
  INITIALISATION_FAILURE.set(message2);
}
function recentInitReloads(now = Date.now()) {
  try {
    const stored = JSON.parse(sessionStorage.getItem(INIT_RELOAD_KEY) || "[]");
    return stored instanceof Array ? stored.filter((at) => typeof at === "number" && now - at >= 0 && now - at < INIT_RELOAD_WINDOW_MS) : [];
  } catch {
    return [];
  }
}
function storeInitReloads(at) {
  try {
    sessionStorage.setItem(INIT_RELOAD_KEY, JSON.stringify(at));
  } catch {
  }
}
function markInitialisationComplete() {
  try {
    sessionStorage.removeItem(INIT_RELOAD_KEY);
  } catch {
  }
  cancelInitReload();
  INITIALISATION_FAILURE.set("");
  INITIALISATION_COMPLETE.set(true);
}
function cancelInitReload() {
  if (_init_reload_timer)
    clearTimeout(_init_reload_timer);
  _init_reload_timer = void 0;
}
function retryInitialisation() {
  try {
    sessionStorage.removeItem(INIT_RELOAD_KEY);
  } catch {
  }
  INITIALISATION_FAILURE.set("");
  INITIALISATION_COMPLETE.set(false);
  location.reload();
}
function requestInitReload() {
  if (!backendReachable()) {
    if (_init_reload_timer)
      return;
    log2("APP", "Initialisation failed while offline; restarting once online.", void 0, "warn");
    _init_reload_timer = setTimeout(() => {
      _init_reload_timer = void 0;
      requestInitReload();
    }, RELOAD_RETRY_MS);
    return;
  }
  cancelInitReload();
  if (_init_reload) {
    _init_reload();
    return;
  }
  const now = Date.now();
  const reloads = recentInitReloads(now);
  if (reloads.length >= INIT_RELOAD_LIMIT) {
    failInitialisation("The application could not finish starting. Check the connection, then try again.");
    return;
  }
  storeInitReloads([...reloads, now]);
  location.reload();
}
function stopUpdateChecks() {
  if (_timer)
    clearInterval(_timer);
  if (_initial_check)
    clearTimeout(_initial_check);
  _timer = void 0;
  _initial_check = void 0;
}
function cacheOptions(options = {}) {
  return typeof options === "number" ? { interval: options } : options;
}
function handleNewVersion() {
  if (_new_version)
    return;
  _new_version = true;
  stopUpdateChecks();
  if (_auto_reload)
    return reloadApp();
  SERVICE_WORKER_UPDATE.set({
    message: "New application version available",
    details: "Refresh to use the latest version.",
    action: "Refresh"
  });
}
function logVersionUpdate(event) {
  switch (event.type) {
    case "VERSION_DETECTED":
      log2("CACHE", `Downloading application version ${event.version.hash}.`);
      return;
    case "VERSION_INSTALLATION_FAILED":
      log2("CACHE", `Failed to install application version ${event.version.hash}.`, event.error, "warn");
      return;
    case "VERSION_READY":
      log2("CACHE", `Application version ${event.latestVersion.hash} is ready.`, { current_version: event.currentVersion.hash });
      return;
    case "NO_NEW_VERSION_DETECTED":
      log2("CACHE", `Application version ${event.version.hash} is up to date.`);
  }
}
function setupCache(cache, options = {}) {
  const { auto_reload = false, interval = 5 * MINUTES } = cacheOptions(options);
  _auto_reload = auto_reload;
  _update_interval = Math.max(interval, 1 * MINUTES);
  log2("CACHE", `Service worker is ${cache.isEnabled ? "enabled" : "disabled"}.`);
  if (cache.isEnabled) {
    if (!_version_subscription) {
      _version_subscription = cache.versionUpdates.subscribe((event) => {
        logVersionUpdate(event);
        if (event.type !== "VERSION_READY" || _new_version)
          return;
        handleNewVersion();
      });
    }
    if (!_unrecoverable_subscription) {
      _unrecoverable_subscription = cache.unrecoverable.subscribe((event) => {
        log2("CACHE", `Application cache is unrecoverable: ${event.reason}`, void 0, "error");
        _new_version = true;
        stopUpdateChecks();
        if (_auto_reload)
          return reloadApp();
        SERVICE_WORKER_UPDATE.set({
          message: "Application update failed to load",
          details: "Reload the app to recover.",
          action: "Reload"
        });
      });
    }
    if (_new_version) {
      if (_auto_reload)
        reloadApp();
      return;
    }
    stopUpdateChecks();
    _initial_check = setTimeout(() => {
      log2("CACHE", `Checking for updates...`);
      checkForUpdate(cache);
    }, 2 * SECONDS);
    _timer = setInterval(() => {
      log2("CACHE", `Checking for updates...`);
      checkForUpdate(cache);
    }, Math.max(interval, 1 * MINUTES));
  }
}
async function checkForUpdate(cache) {
  _last_update_check = Date.now();
  try {
    if (cache.isEnabled && await cache.checkForUpdate()) {
      log2("CACHE", `Application update detected.`);
    }
  } catch (error) {
    log2("CACHE", `Failed to check for application updates.`, error, "warn");
  }
}

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  messages;
  notificationClicks;
  notificationCloses;
  pushSubscriptionChanges;
  subscription;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message2) => message2.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message2) => message2.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message2) => message2.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message2) => message2.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input2) {
    return atob(input2);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  versionUpdates;
  unrecoverable;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory() {
  const opts = inject(SwRegistrationOptions);
  const injector = inject(Injector);
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  enabled;
  updateViaCache;
  type;
  scope;
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// libs/common/src/lib/fixed-device-helpers.ts
var log3 = scoped_log("FIXED_DEV");
var _wake_lock = null;
async function requestScreenWakeLock() {
  try {
    if (!isFixedDevice())
      return;
    if (_wake_lock)
      await _wake_lock.release();
    if (document.visibilityState === "visible") {
      _wake_lock = await navigator.wakeLock.request("screen");
    } else {
      setTimeout(() => requestScreenWakeLock(), 1e3);
    }
  } catch (e) {
    log3.error("Failed to acquire screen wake lock.", e);
  }
}
document.addEventListener("visibilitychange", async () => {
  if (_wake_lock !== null && document.visibilityState === "visible") {
    _wake_lock = await navigator.wakeLock.request("screen");
  }
});

// libs/common/src/lib/mapspeople.service.ts
var MapService;
(function(MapService2) {
  MapService2[MapService2["GoogleMaps"] = 0] = "GoogleMaps";
  MapService2[MapService2["Mapbox"] = 1] = "Mapbox";
})(MapService || (MapService = {}));
var MapsPeopleService = class _MapsPeopleService extends AsyncHandler {
  get map_keys() {
    return this._settings.get("app.maps_people.keys") || {};
  }
  get use_service() {
    return this._settings.get("app.maps_people.use_zones") || [];
  }
  get map_service() {
    return this._map_service();
  }
  get map_token() {
    return this._map_token();
  }
  get is_ready() {
    return this._ready();
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._map_service = signal(
      null,
      ...ngDevMode ? [{ debugName: "_map_service" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._map_token = signal(
      "",
      ...ngDevMode ? [{ debugName: "_map_token" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._injected = {};
    this._custom_zone = signal(
      "",
      ...ngDevMode ? [{ debugName: "_custom_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available = computed(
      () => {
        const bld = this._org.active_building();
        const zone = this._custom_zone();
        if (!this._org.initialised() || !bld?.id)
          return false;
        return !!this.map_keys.mapsindoors && (this.use_service.includes(zone || bld.id) || this.use_service.includes("*"));
      },
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      if (!this.available())
        return;
      this._injectMapsApiKeys();
    });
  }
  setCustomZone(zone_id) {
    this._custom_zone.set(zone_id);
  }
  _injectMapsApiKeys() {
    log2("MapsPeople", "Initializing Maps API Keys");
    this._ready.set(false);
    const { mapsindoors, google, mapbox } = this.map_keys;
    if (!mapsindoors)
      return;
    if (mapsindoors && !this._injected.mapsindoors) {
      const script = document.createElement("script");
      script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.35.0/mapsindoors-4.35.0.js.gz?apikey=${mapsindoors}`;
      document.body.appendChild(script);
      this._injected.mapsindoors = true;
    }
    if (google && mapbox) {
      log2("MapsPeople", "Both Google and Mapbox keys provided", void 0, "error");
      return;
    }
    if (google && !this._injected.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google}`;
      document.body.appendChild(script);
      this._map_service.set(MapService.GoogleMaps);
      this._injected.google = true;
    } else if (mapbox && !this._injected.mapbox) {
      const script = document.createElement("script");
      script.src = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js`;
      document.body.appendChild(script);
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css`;
      document.head.appendChild(styles);
      this._map_service.set(MapService.Mapbox);
      this._map_token.set(mapbox);
      this._injected.mapbox = true;
    }
    if (google || mapbox) {
      log2("MapsPeople", `Initialized Maps API Keys for ${google ? "Google Maps" : "Mapbox"}`);
      this.timeout("ready", () => this._ready.set(true), 300);
    }
  }
  static {
    this.\u0275fac = function MapsPeopleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapsPeopleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapsPeopleService, factory: _MapsPeopleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsPeopleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/placeos.ts
var NATIVE_CREDENTIAL_FETCH_KEY = "__placeos_native_credential_fetch__";
var PLACE_SETUP_TIMEOUT = 10 * 1e3;
function randomString2(length = 43) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (value) => chars[value % chars.length]).join("");
}
async function sha256Base64Url(value) {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  const bytes = Array.from(new Uint8Array(buffer), (byte) => String.fromCharCode(byte)).join("");
  return btoa(bytes).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function requestOrigin(input2) {
  const request_url = typeof input2 === "string" ? input2 : input2 instanceof URL ? input2.toString() : input2?.url;
  return request_url ? new URL(request_url, location.href).origin : "";
}
function setupNativeCredentialedFetch(urls) {
  if (typeof window.fetch !== "function")
    return;
  const window_state = window;
  const origins = urls.map((url) => new URL(url, location.href).origin);
  if (window_state[NATIVE_CREDENTIAL_FETCH_KEY]) {
    for (const origin of origins) {
      window_state[NATIVE_CREDENTIAL_FETCH_KEY].origins.add(origin);
    }
    return;
  }
  const state2 = {
    origins: new Set(origins),
    fetch: window.fetch.bind(window)
  };
  window_state[NATIVE_CREDENTIAL_FETCH_KEY] = state2;
  window.fetch = (input2, init) => {
    if (!state2.origins.has(requestOrigin(input2))) {
      return state2.fetch(input2, init);
    }
    return state2.fetch(input2, __spreadProps(__spreadValues({}, init), { credentials: "include" }));
  };
}
async function createNativeAuthUrl(settings2, client_id) {
  const protocol = settings2.protocol || location.protocol;
  const host = settings2.domain || location.hostname;
  const port = settings2.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const url = settings2.use_domain ? `${protocol}//${host_with_port}` : location.origin;
  const redirect_uri = await getNativeRedirectUri(settings2.app_name, settings2.domain);
  const nonce = randomString2(16);
  const verifier = randomString2();
  const challenge = await sha256Base64Url(verifier);
  localStorage.setItem(`${client_id}_nonce`, nonce);
  storeNativePkceVerifier(`${client_id}_code_verifier`, verifier);
  return `${url}/auth/oauth/authorize?response_type=code&client_id=${encodeURIComponent(client_id)}&state=${encodeURIComponent(nonce)}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent("public")}&code_challenge_method=S256&code_challenge=${encodeURIComponent(challenge)}`;
}
function mockModeRequested() {
  return !location.href.includes("mock=false") && (localStorage.getItem("mock") === "true" || location.href.includes("mock=true") || location.origin.includes("demo.place.tech"));
}
var PASTED_TOKEN_KEY = "PLACEOS.pasted_token";
function pastedTokenKey(client_id) {
  return `${PASTED_TOKEN_KEY}.${client_id}`;
}
function usePastedToken(session) {
  const key = pastedTokenKey(session.client_id);
  const raw = sessionStorage.getItem(key);
  if (!raw)
    return;
  sessionStorage.removeItem(key);
  let pasted;
  try {
    pasted = JSON.parse(raw);
  } catch {
    return;
  }
  const { token: token2, refresh_token, expires_at } = pasted;
  if (typeof token2 !== "string" || !token2 || typeof expires_at !== "number") {
    return;
  }
  const refresh_key = `${session.client_id}_refresh_token`;
  for (const storage of [localStorage, sessionStorage]) {
    storage.removeItem(refresh_key);
  }
  if (typeof refresh_token === "string" && refresh_token) {
    session.useRefreshToken(refresh_token);
  }
  session.useToken(token2, expires_at);
}
function useDeviceApiKey(session, storage, api_key) {
  if (api_key === void 0)
    return;
  removeApiKeyFromUrl();
  if (api_key)
    return session.useApiKey(api_key);
  const key = `${session.client_id}_x-api-key`;
  if (api_key === "" && storage.getItem(key)) {
    storage.removeItem(key);
    session.invalidateToken();
  }
}
function removeApiKeyFromUrl() {
  if (!location.href.includes("x-api-key"))
    return;
  const without = (part) => {
    const params = new URLSearchParams(part);
    params.delete("x-api-key");
    return params.toString();
  };
  const url = new URL(location.href);
  url.searchParams.delete("x-api-key");
  const hash = url.hash.slice(1);
  const query_start = hash.indexOf("?");
  let route = query_start >= 0 ? hash.slice(0, query_start) : hash;
  if (route.includes("="))
    route = without(route);
  const query8 = query_start >= 0 ? without(hash.slice(query_start + 1)) : "";
  url.hash = query8 ? `${route}?${query8}` : route;
  if (url.href !== location.href) {
    history.replaceState(history.state, "", url);
  }
}
async function setupPlace(settings2, timeout_ms = PLACE_SETUP_TIMEOUT, options = {}) {
  const protocol = settings2.protocol || location.protocol;
  const host = settings2.domain || location.hostname;
  const port = settings2.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const native = isNativeApp();
  const base_url = settings2.use_domain ? `${native ? "https:" : protocol}//${host_with_port}` : "";
  const route = (location.pathname + "/").replace("//", "/");
  const mock = settings2.mock || location.href.includes("mock=true") || localStorage.getItem("mock") === "true";
  const grant = options.entra_token ? { kind: "entra", entraToken: options.entra_token } : { kind: "code" };
  if (native) {
    localStorage.setItem("trust", "true");
    const url = base_url || location.origin;
    setupNativeCredentialedFetch([
      `${url}/auth/oauth/authorize`,
      `${url}/auth/oauth/token`
    ]);
  }
  if (localStorage) {
    localStorage.setItem("mock", `${!!mock && !location.href.includes("mock=false")}`);
  }
  if (mock) {
    notifyInfo("Application in mock mode.");
  }
  const storage_kind = native ? "local" : settings2.storage || "local";
  const storage = storage_kind === "session" ? sessionStorage : localStorage;
  const { session } = startPlaceClient({
    base_url,
    mock,
    // Identify the app and build on every API request
    headers: {
      "X-App-Name": settings2.app_name || location.pathname.split("/").find(Boolean) || "PlaceOS",
      "X-App-Date": new Date(VERSION.time).toISOString(),
      "X-App-Build": VERSION.hash
    },
    auth: {
      redirect_uri: native ? await getNativeRedirectUri(settings2.app_name, settings2.domain) : `${location.origin}${route}oauth-resp.html`,
      scope: "public",
      grant,
      handle_login: native ? false : !settings2.local_login,
      use_frame: !native,
      environment: browserEnvironment(storage_kind)
    }
  });
  if (session) {
    if (options.trusted) {
      storage.setItem(`${session.client_id}_trusted`, "true");
    }
    usePastedToken(session);
    useDeviceApiKey(session, storage, options.api_key);
  }
  const setup_promise = session ? session.start().then((result) => {
    if (result.ok !== false)
      return;
    const { error } = result;
    log2("APP", `Login did not complete: ${error.kind}`, void 0, "warn");
    if (error.kind === "authority_unavailable" || error.kind === "authority_invalid") {
      throw new Error(`PlaceOS authority failed: ${error.kind}`);
    }
  }) : Promise.resolve();
  if (timeout_ms <= 0)
    return setup_promise;
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => reject(new Error("PlaceOS setup timed out.")), timeout_ms);
    setup_promise.then(() => {
      clearTimeout(timer2);
      resolve();
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}

// libs/common/src/lib/console-capture.ts
var CAPTURED_CONSOLE_METHODS = [
  "log",
  "debug",
  "info",
  "warn",
  "error"
];
var _listeners = /* @__PURE__ */ new Set();
var _wrappers = /* @__PURE__ */ new Map();
var _dispatching = false;
function listenToConsole(listener) {
  patchConsole();
  _listeners.add(listener);
  return () => _listeners.delete(listener);
}
function patchConsole() {
  for (const method of CAPTURED_CONSOLE_METHODS) {
    if (console[method] === _wrappers.get(method))
      continue;
    const original = console[method];
    const wrapper = (...args) => {
      if (_dispatching)
        return original.apply(console, args);
      _dispatching = true;
      try {
        notify2(method, args);
        original.apply(console, args);
      } finally {
        _dispatching = false;
      }
    };
    _wrappers.set(method, wrapper);
    console[method] = wrapper;
  }
}
function notify2(method, args) {
  for (const listener of _listeners) {
    try {
      listener(method, args);
    } catch {
    }
  }
}

// libs/common/src/lib/device-id.ts
var DEVICE_ID_KEY = "PLACEOS.DEVICE_ID";
var _device_id = "";
function newDeviceId() {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
  return `DEV-${hex.join("").toUpperCase()}`;
}
function deviceId() {
  if (_device_id)
    return _device_id;
  try {
    _device_id = localStorage.getItem(DEVICE_ID_KEY) || "";
  } catch {
  }
  if (!_device_id) {
    _device_id = newDeviceId();
    try {
      localStorage.setItem(DEVICE_ID_KEY, _device_id);
    } catch {
    }
  }
  return _device_id;
}

// libs/common/src/lib/sentry-rates.ts
var DEFAULT_SENTRY_RATES = {
  traces: 1,
  replays_session: 0,
  replays_on_error: 1
};

// libs/common/src/lib/sentry.ts
var DEFAULT_SENTRY_DSN = "https://0498d2da2a46bfbe89599f3bfbec7c4b@o437082.ingest.us.sentry.io/4506817038909440";
var PII_KEYS = ["forwarded", "-ip", "remote-", "via", "-user"];
var _started2 = false;
var _sentry_handler = null;
var _early_errors = [];
var _trace_service = null;
var SECRET_PARAM = /((?:[?&#;](?:x-api-key|api-key|api_key|bearer_token|access_token|refresh_token|jwt|token|code)|(?:^|[\s"',[])(?:api-key|bearer_token))=)[^&#;\s"'\\]+/gi;
var MAX_SCRUB_DEPTH = 20;
var SDK_METADATA_KEY = "sdkProcessingMetadata";
function scrubSecrets(value, depth = 0) {
  if (typeof value === "string") {
    return value.replace(SECRET_PARAM, "$1[Filtered]");
  }
  if (!value || typeof value !== "object" || depth > MAX_SCRUB_DEPTH) {
    return value;
  }
  const record2 = value;
  for (const key of Object.keys(record2)) {
    if (depth === 0 && key === SDK_METADATA_KEY)
      continue;
    const scrubbed = scrubSecrets(record2[key], depth + 1);
    if (scrubbed !== record2[key])
      record2[key] = scrubbed;
  }
  return value;
}
function scrubEvent(event) {
  try {
    return scrubSecrets(event);
  } catch {
    return null;
  }
}
function scrubEnvelope(envelope) {
  for (const item of envelope[1]) {
    const payload = item[1];
    if (payload instanceof Uint8Array)
      continue;
    if (typeof payload !== "string") {
      scrubSecrets(payload);
      continue;
    }
    const scrubbed = scrubSecrets(payload);
    if (scrubbed === payload)
      continue;
    item[1] = scrubbed;
    if (item[0].length !== void 0) {
      item[0].length = new TextEncoder().encode(scrubbed).length;
    }
  }
  return envelope;
}
var TRACE_PROPAGATION_TARGET = /^\/api\/(?!engine\/v2\/(?:uploads(?:\/|$)|signage\/media\/[^/]+\/))/;
var IGNORED_ERRORS = [
  /^Non-Error promise rejection captured with value: unknown action: (?:getLibItems|setLibItem|removeLibItem)$/,
  /^Non-Error promise rejection captured with value: cannot communicate with background$/
];
function sampleRate(value, fallback) {
  return typeof value === "number" ? value : fallback;
}
async function initSentry(dsn, router, rates = {}) {
  if (!dsn || _started2)
    return;
  _started2 = true;
  const replays_session = sampleRate(rates.replays_session, DEFAULT_SENTRY_RATES.replays_session);
  const replays_on_error = sampleRate(rates.replays_on_error, DEFAULT_SENTRY_RATES.replays_on_error);
  const use_replay = replays_session > 0 || replays_on_error > 0;
  try {
    const Sentry = await import("./sentry-sdk-VBMPN2I2.js");
    Sentry.init(__spreadProps(__spreadValues({
      dsn,
      release: VERSION.hash,
      // Separates UAT and production domains that share a DSN
      environment: location.hostname,
      integrations: [
        Sentry.browserTracingIntegration(),
        // Replay masks all text and inputs, and blocks media, by
        // default. Without compression, `scrubEnvelope` can read the
        // recordings.
        ...use_replay ? [Sentry.replayIntegration({ useCompression: false })] : []
      ],
      tracesSampleRate: sampleRate(rates.traces, DEFAULT_SENTRY_RATES.traces),
      replaysSessionSampleRate: replays_session,
      replaysOnErrorSampleRate: replays_on_error
    }, use_replay && {
      transport: (options) => {
        const transport = Sentry.makeFetchTransport(options);
        return __spreadProps(__spreadValues({}, transport), {
          send: (envelope) => transport.send(scrubEnvelope(envelope))
        });
      }
    }), {
      // Sentry checks the path of same-origin requests against these.
      tracePropagationTargets: [TRACE_PROPAGATION_TARGET],
      ignoreErrors: IGNORED_ERRORS,
      // Sentry 11 collects more by default. These are the Sentry 10
      // defaults, which send no bodies, cookies or user details.
      dataCollection: {
        userInfo: false,
        cookies: false,
        httpHeaders: { deny: PII_KEYS },
        httpBodies: [],
        urlQueryParams: { deny: PII_KEYS }
      },
      beforeSend: scrubEvent,
      // Sentry streams spans, so spans do not go through `beforeSend`
      beforeSendSpan: (span) => scrubSecrets(span)
    }));
    _trace_service = new Sentry.TraceService(router);
    _sentry_handler = Sentry.createErrorHandler({
      showDialog: false,
      logErrors: false
    });
    for (const error of _early_errors.splice(0)) {
      _sentry_handler.handleError(error);
    }
  } catch (error) {
    log2("APP", "Failed to load Sentry.", error, "warn");
  }
}
function initSentryFromSettings() {
  const router = inject(Router);
  const dsn = settingSignal("sentry_dsn", DEFAULT_SENTRY_DSN);
  const traces = settingSignal("sentry_traces_sample_rate");
  const replays_session = settingSignal("sentry_replays_session_sample_rate");
  const replays_on_error = settingSignal("sentry_replays_on_error_sample_rate");
  const watcher = effect(
    () => {
      const value = dsn();
      if (!value)
        return;
      watcher.destroy();
      void initSentry(value, router, untracked(() => ({
        traces: traces(),
        replays_session: replays_session(),
        replays_on_error: replays_on_error()
      })));
    },
    ...ngDevMode ? [{ debugName: "watcher" }] : (
      /* istanbul ignore next */
      []
    )
  );
}

// libs/common/src/lib/log-format.ts
var MAX_LOG_MESSAGE = 2e3;
var MAX_ARGS = 20;
var MAX_DEPTH = 4;
var FORMAT_DIRECTIVE = /%[sdifoOc%]/g;
var ANSI_CODE = /\u001b\[[0-9;?]*[ -/]*[@-~]/g;
function formatLogArgs(all_args) {
  try {
    const args = all_args.slice(0, MAX_ARGS);
    const parts = [];
    let next = 0;
    if (typeof args[0] === "string") {
      next = 1;
      parts.push(args[0].slice(0, MAX_LOG_MESSAGE).replace(FORMAT_DIRECTIVE, (directive) => {
        if (directive === "%%")
          return "%";
        if (next >= args.length)
          return directive;
        const arg = args[next++];
        if (directive === "%c")
          return "";
        if (directive === "%d" || directive === "%i") {
          return numberText(arg, (_) => parseInt(_, 10));
        }
        if (directive === "%f") {
          return numberText(arg, parseFloat);
        }
        return argText(arg);
      }));
    }
    for (let i = next; i < args.length; i++)
      parts.push(argText(args[i]));
    return ownCopy(limitText(scrubSecrets(parts.join(" ").replace(ANSI_CODE, ""))));
  } catch {
    return "[Log entry that cannot be read]";
  }
}
function numberText(value, parse) {
  return typeof value === "symbol" ? "NaN" : `${parse(String(value))}`;
}
function ownCopy(text) {
  return (" " + text).slice(1);
}
function limitText(text) {
  return text.length > MAX_LOG_MESSAGE ? `${text.slice(0, MAX_LOG_MESSAGE - 1)}\u2026` : text;
}
function argText(value) {
  if (typeof value === "string")
    return value.slice(0, MAX_LOG_MESSAGE);
  if (value instanceof Error)
    return errorText(value);
  if (value && typeof value === "object")
    return boundedJson(value);
  if (typeof value === "function")
    return `[Function ${value.name || "anonymous"}]`;
  return String(value);
}
function errorText(error) {
  const head = `${error.name}: ${error.message}`;
  const stack = typeof error.stack === "string" ? error.stack : "";
  if (!stack)
    return head;
  return stack.startsWith(head) ? stack : `${head}
${stack}`;
}
function boundedJson(root) {
  let out = "";
  const parents = /* @__PURE__ */ new Set();
  const write = (text) => {
    out += text;
    return out.length < MAX_LOG_MESSAGE;
  };
  const visit = (value, depth) => {
    if (typeof value === "string") {
      return write(JSON.stringify(value.slice(0, MAX_LOG_MESSAGE).replace(ANSI_CODE, "")));
    }
    if (!value || typeof value !== "object") {
      return write(typeof value === "function" ? "[Function]" : String(value));
    }
    if (value instanceof Error)
      return write(JSON.stringify(errorText(value)));
    if (value instanceof Date) {
      return write(isNaN(value.getTime()) ? "Invalid Date" : value.toISOString());
    }
    if (parents.has(value))
      return write("[Circular]");
    const list = Array.isArray(value) ? value : null;
    if (depth >= MAX_DEPTH)
      return write(list ? "[Array]" : "[Object]");
    parents.add(value);
    const keys = list ? [] : Object.keys(value);
    const count = list ? list.length : keys.length;
    let open = write(list ? "[" : "{");
    for (let i = 0; open && i < count; i++) {
      if (i > 0 && !write(","))
        open = false;
      else if (!list && !write(`${JSON.stringify(keys[i])}:`))
        open = false;
      else {
        let item;
        try {
          item = list ? list[i] : value[keys[i]];
        } catch {
          item = "[Unreadable]";
        }
        open = visit(item, depth + 1);
      }
    }
    parents.delete(value);
    return open && write(list ? "]" : "}");
  };
  visit(root, 0);
  return out.slice(0, MAX_LOG_MESSAGE);
}

// libs/common/src/lib/realtime.ts
var ModuleCallFailed = class extends Error {
  constructor(error, target) {
    super(error.kind === "server" && error.message ? error.message : `${target}: ${error.kind}`);
    this.error = error;
    this.name = "ModuleCallFailed";
  }
};
function getModule(sys, mod, index) {
  const slug = index === void 0 && /_\d+$/.test(mod) ? splitModuleSlug(mod) : { mod, index: index ?? 1 };
  const target = (name) => ({
    sys,
    mod: slug.mod,
    index: slug.index,
    name
  });
  const label = `${sys} ${slug.mod}_${slug.index}`;
  return {
    sys,
    mod: slug.mod,
    index: slug.index,
    async execute(method, args = [], options) {
      const result = await placeRealtime().exec(target(method), args, options);
      if (result.ok === false) {
        throw new ModuleCallFailed(result.error, `${label}.${method}`);
      }
      return result.value;
    },
    variable(name) {
      const subscribe = (listener) => placeRealtime().bind(target(name), (state2) => {
        if (state2.kind === "value")
          listener(state2.value);
      });
      return {
        value() {
          const state2 = placeRealtime().value(target(name));
          return state2.kind === "value" ? state2.value : void 0;
        },
        subscribe,
        listen: () => new Observable((observer) => subscribe((value) => observer.next(value)))
      };
    }
  };
}

// libs/common/src/lib/uploads.service.ts
var UploadFailedError = class extends Error {
  constructor(message2, details) {
    super(message2);
    this.details = details;
    this.name = "UploadFailedError";
  }
};
var loadCloudUploads = () => import("./index.es-LX6NVZBS.js");
var UPLOAD_RETRY_ATTEMPTS = 3;
function uploadStateError(state2) {
  return state2?.error || "Upload failed";
}
function uploadFailure(details) {
  if (details instanceof Error)
    return details;
  return new UploadFailedError(details?.error || "Upload failed", details);
}
var UploadsService = class _UploadsService extends AsyncHandler {
  constructor() {
    super();
    this._upload_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_upload_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.upload_list = this._upload_list.asReadonly();
    this._uploads_setup = null;
    this._uploads_use_api_key = false;
    this._token_refresh = null;
    if (localStorage) {
      this._upload_list.set(JSON.parse(localStorage.getItem("BACKOFFICE.uploads") || "[]"));
    }
  }
  init(tries = 1) {
    this.timeout("init_uploads", () => {
      this._initUploads().catch(() => this.timeout("init_uploads", () => this.init(tries += 1), 1e3 * tries));
    });
  }
  clearList() {
    const in_progress_list = this._upload_list().filter((file) => file.progress < 100 && !file.error);
    this._upload_list.set(in_progress_list);
  }
  uploadFile(file, pub = false, permissions = "none") {
    return new Promise((resolve, reject) => {
      let resolved = false;
      const update_fn = (details) => {
        if (!resolved) {
          resolve(details.upload_id || details.upload?.id || details.id);
          resolved = true;
        }
        this._upload_list.set([
          ...this._upload_list().filter((_) => _.id !== details.id),
          details
        ]);
      };
      this._uploadFile(file, pub, permissions, {
        next: update_fn,
        error: (details) => {
          if (details?.id)
            update_fn(details);
          if (!resolved)
            reject(uploadFailure(details));
        },
        complete: () => this._updateUploadHistory()
      });
    });
  }
  async uploadFileToCompletion(file, pub = false, permissions = "none", on_progress) {
    const details = await this._uploadFileToDetails(file, pub, permissions, on_progress);
    const upload_id = details.upload_id || details.upload?.id || details.id;
    if (!upload_id)
      throw new Error("Failed to get uploaded file ID");
    return upload_id;
  }
  uploadFileWithProgress(file, pub = false, permissions = "none") {
    const progress = signal(
      null,
      ...ngDevMode ? [{ debugName: "progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._uploadFile(file, pub, permissions, {
      next: (details) => progress.set(__spreadValues({}, details)),
      error: (details) => progress.set(details),
      complete: () => this._updateUploadHistory()
    });
    return progress;
  }
  _updateUploadHistory() {
    const done_list = this._upload_list().filter((file) => file.progress >= 100);
    done_list.forEach((i) => delete i.upload);
    if (localStorage) {
      localStorage.setItem("PLACEOS.uploads", JSON.stringify(done_list));
    }
  }
  /**
   * Set up the upload manager, once for each auth mode. Setting it up
   * again ends the hash workers, which leaves any upload being hashed
   * waiting forever. The credential is read on each request, so a
   * refreshed token needs no new setup. A change between API key and
   * token auth does, as the manager picks the header at setup.
   */
  _initUploads() {
    const use_api_key = !!apiKey();
    if (use_api_key !== this._uploads_use_api_key) {
      this._uploads_setup = null;
      this._uploads_use_api_key = use_api_key;
    }
    this._uploads_setup ||= this._setupUploads(use_api_key).catch((error) => {
      this._uploads_setup = null;
      throw error;
    });
    return this._uploads_setup;
  }
  async _setupUploads(use_api_key) {
    const { initUploads } = await loadCloudUploads();
    initUploads(__spreadProps(__spreadValues({
      auto_start: true
    }, use_api_key ? { api_key: () => apiKey() } : { token: () => token() }), {
      endpoint: "/api/engine/v2/uploads",
      worker_url: "assets/md5_worker.js",
      // Drop each upload from the manager once it completes. It keeps
      // the File otherwise, so every file uploaded stays in memory for
      // the rest of the session. The upload list here keeps no File.
      auto_remove: true
    }));
  }
  _updateUploadToken() {
    this._token_refresh ||= (async () => {
      if (!apiKey() && !token())
        await authorise();
      await this._initUploads();
    })().finally(() => this._token_refresh = null);
    return this._token_refresh;
  }
  /**
   * Upload the given file to the cloud
   * @param file File to upload
   */
  _uploadFile(file, pub = false, permissions = "none", observer) {
    this._updateUploadToken().then(() => loadCloudUploads()).then(async ({ humanReadableByteCount, uploadFile }) => {
      const upload = await uploadFile(file, {
        permissions,
        public: pub
      });
      const upload_details = {
        id: upload?.id || `upi-${randomString(8)}`,
        name: file.name,
        progress: 0,
        link: "",
        formatted_size: humanReadableByteCount(file.size),
        size: file.size,
        upload
      };
      let attempts = 0;
      let settled = false;
      let subscription;
      const stop2 = () => {
        settled = true;
        Promise.resolve().then(() => subscription?.unsubscribe());
      };
      subscription = upload.state.subscribe(async (state2) => {
        if (settled)
          return;
        upload_details.upload_id = upload.id;
        if (upload.access_url || state2.progress >= 100) {
          const local_url = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_details.upload_id || upload.id)}/url`;
          upload_details.link = local_url;
        }
        upload_details.progress = state2.progress;
        observer.next(upload_details);
        if (state2.status === "FAILED") {
          if (attempts < UPLOAD_RETRY_ATTEMPTS) {
            attempts += 1;
            await this._updateUploadToken();
            if (settled)
              return;
            upload.resume();
            return;
          }
          stop2();
          upload.remove();
          observer.error(__spreadProps(__spreadValues({}, upload_details), {
            error: uploadStateError(state2)
          }));
          return;
        }
        if (state2.status === "COMPLETED") {
          stop2();
          observer.complete();
        }
      });
      observer.next(upload_details);
    }).catch((upload_error) => observer.error(upload_error));
  }
  _uploadFileToDetails(file, pub = false, permissions = "none", on_progress) {
    return new Promise((resolve, reject) => {
      let last_details;
      this._uploadFile(file, pub, permissions, {
        next: (details) => {
          last_details = details;
          on_progress?.(details.progress);
        },
        error: (details) => reject(uploadFailure(details)),
        complete: () => {
          this._updateUploadHistory();
          resolve(last_details);
        }
      });
    });
  }
  static {
    this.\u0275fac = function UploadsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UploadsService, factory: _UploadsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/remote-debug.ts
var REMOTE_LOG_LEVELS = ["debug", "info", "warn", "error"];
var REMOTE_DEBUG_COMMANDS = [
  "status",
  "settings",
  "storage",
  "navigate",
  "reload",
  "clear_cache",
  "snapshot",
  "animation"
];
var SCREEN_CAPTURE = new InjectionToken("SCREEN_CAPTURE", { providedIn: "root", factory: () => () => import("./screen-capture-MD5626PQ.js") });
var REMOTE_DEBUG_UPLOAD = new InjectionToken("REMOTE_DEBUG_UPLOAD", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return async (file) => isMock() ? URL.createObjectURL(file) : injector.get(UploadsService).uploadFileToCompletion(file, false, "support");
  }
});
var REMOTE_DEBUG_BINDING = "remote_debug";
var REMOTE_DEBUG_MODULE = "RemoteDebug";
var REMOTE_DEBUG_MEMORY_BYTES = 32 * 1024 * 1024;
var MAX_REMOTE_LOG_ENTRIES = 8e3;
var MAX_REMOTE_LOG_BUFFER_BYTES = 8 * 1024 * 1024;
var MAX_REMOTE_LOG_HISTORY = 1e3;
var MAX_REMOTE_LOG_QUEUE_BYTES = 2 * 1024 * 1024;
var LOG_ENTRY_BYTES = 64;
var MAX_REMOTE_LOG_BATCH = 100;
var MAX_REMOTE_DEBUG_COMMANDS = 20;
var MAX_SETTINGS_KEYS = 50;
var MAX_RESULT_LENGTH = 1e5;
var SECRET_FIELD = /token|secret|password|api[_-]?key|credential|(^|[._])keys([._]|$)/i;
var MAX_HANDLED_COMMANDS = 50;
var HANDLED_COMMANDS_KEY = "PLACEOS.remote_debug.handled_commands";
var UPLOAD_TIMEOUT_MS = 2 * 60 * 1e3;
var SNAPSHOT_WIDTH = { default: 1280, max: 1920 };
var ANIMATION_WIDTH = { default: 640, max: 960 };
var ANIMATION_DURATION = { default: 5e3, max: 1e4 };
var ANIMATION_FPS = { default: 2, max: 5 };
var SEND_INTERVAL_MS = 1e3;
var CALL_TIMEOUT_MS = 30 * 1e3;
var BINDING_RETRY_MS = 60 * 1e3;
var REGISTER_SPREAD_MS = 60 * 1e3;
var DEFAULT_DURATION_MS = 15 * 60 * 1e3;
var MAX_DURATION_MS = 60 * 60 * 1e3;
var LOG_TAG = "RemoteDebug";
var CONSOLE_LEVEL = {
  debug: "debug",
  log: "info",
  info: "info",
  warn: "warn",
  error: "error"
};
function remoteDebugDeviceBinding(device_id) {
  return `device:${device_id}`;
}
var REMOTE_DEBUG_HEARTBEAT_MS = 15 * 60 * 1e3;
var REMOTE_DEBUG_ONLINE_MS = 2 * REMOTE_DEBUG_HEARTBEAT_MS + 5 * 60 * 1e3;
function remoteDebugLogsBinding(device_id) {
  return `logs:${device_id}`;
}
function remoteDebugResultsBinding(device_id) {
  return `results:${device_id}`;
}
async function readRemoteDebugModule(org_id) {
  if (!org_id)
    return void 0;
  const bindings = await metadata_exports.show({ id: org_id, name: "bindings" }).then(orThrow).then((_) => jsonRecord(_?.["bindings"]?.details)).catch(() => null);
  if (!bindings)
    return void 0;
  const binding = bindings[REMOTE_DEBUG_BINDING];
  const { id, module } = typeof binding === "string" ? { id: binding } : binding ?? {};
  if (typeof id !== "string" || !id)
    return null;
  return getModule(id, typeof module === "string" && module ? module : REMOTE_DEBUG_MODULE);
}
function remoteDebugOrgId(org) {
  return org.organisation?.id || `${authority()?.config?.["org_zone"] ?? ""}`;
}
function isRemoteLogRequest(value) {
  if (!value || typeof value !== "object")
    return false;
  const request2 = value;
  return typeof request2.id === "string" && !!request2.id && REMOTE_LOG_LEVELS.includes(request2.level);
}
function isRemoteDebugCommand(value) {
  if (!value || typeof value !== "object")
    return false;
  const command = value;
  if (typeof command["id"] !== "string" || !command["id"])
    return false;
  switch (command["type"]) {
    case "settings":
      return Array.isArray(command["keys"]) && command["keys"].every((_) => typeof _ === "string");
    case "navigate":
      return typeof command["path"] === "string" && command["path"].startsWith("/");
    case "snapshot":
      return optionalNumber(command["width"]);
    case "animation":
      return optionalNumber(command["width"]) && optionalNumber(command["duration"]) && optionalNumber(command["fps"]) && (command["format"] === void 0 || command["format"] === "webp" || command["format"] === "gif");
    default:
      return REMOTE_DEBUG_COMMANDS.includes(command["type"]);
  }
}
function isAtLogLevel(level, minimum) {
  return REMOTE_LOG_LEVELS.indexOf(level) >= REMOTE_LOG_LEVELS.indexOf(minimum);
}
var RemoteDebugService = class _RemoteDebugService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._loadCapture = inject(SCREEN_CAPTURE);
    this._upload = inject(REMOTE_DEBUG_UPLOAD);
    this._started_at = Date.now();
    this._buffer = new BoundedEntries(MAX_REMOTE_LOG_ENTRIES, MAX_REMOTE_LOG_BUFFER_BYTES);
    this._queue = new BoundedEntries(MAX_REMOTE_LOG_HISTORY, MAX_REMOTE_LOG_QUEUE_BYTES);
    this._seq = 0;
    this._log_counts = {
      debug: 0,
      info: 0,
      warn: 0,
      error: 0
    };
    this._last_error = null;
    this._capturing = false;
    this._module = null;
    this._module_key = null;
    this._request = null;
    this._ended_id = "";
    this._sending = false;
    this._commands = [];
    this._running_commands = false;
    this._run_again = false;
    this._handled = [];
    this.device_id = deviceId();
    this._startCapture();
    effect(() => {
      if (!this._org.initialised())
        return;
      untracked(() => this._loadBinding());
    });
  }
  /** Entries that the device keeps now, oldest first */
  get entries() {
    return this._buffer.list;
  }
  /** Log request that is active now. `null` when there is none */
  get request() {
    return this._request;
  }
  destroy() {
    this._endRequest();
    super.destroy();
  }
  /**
   * Read the `remote_debug` binding of the organisation zone. The service
   * reads it itself, as some apps do not load zone bindings
   * (`dont_load_metadata`). Capture continues until a read shows that
   * there is no binding. When there is no organisation zone yet, or the
   * read fails, for example after an offline start, the device tries again
   * each minute until a read succeeds.
   */
  async _loadBinding() {
    this.clearTimeout("binding");
    const org_id = remoteDebugOrgId(this._org);
    const mod = await readRemoteDebugModule(org_id);
    if (mod === void 0) {
      log2(LOG_TAG, `Failed to read the bindings of "${org_id}"`);
      this.timeout("binding", () => this._loadBinding(), BINDING_RETRY_MS);
      return;
    }
    this._connect(mod);
  }
  /** Listen to the driver of the binding. `null` stops remote debugging */
  _connect(mod) {
    const key = mod ? `${mod.sys}/${mod.mod}_${mod.index}` : "";
    if (key === this._module_key)
      return;
    this._endRequest();
    this.unsub("state");
    this.clearTimeout("register");
    this._module = mod;
    this._module_key = key;
    this._commands = [];
    if (!mod) {
      this._stopCapture();
      return;
    }
    this._startCapture();
    log2(LOG_TAG, `Listening for debug requests for ${this.device_id}`);
    this.subscription("state", mod.variable(remoteDebugDeviceBinding(this.device_id)).subscribe((value) => this._applyState(value)));
    this._startRegister();
  }
  /**
   * Register a fixed device with the driver, so the admin views list it
   * before it gets a request. The first call is after a random wait of
   * `REGISTER_SPREAD_MS` maximum, then one call each
   * `REMOTE_DEBUG_HEARTBEAT_MS`. Devices that are not fixed, such as
   * staff browsers, do not register. They check again after each random
   * wait, because the bootstrap screen can make a device fixed without a
   * reload.
   */
  _startRegister() {
    this.timeout("register", () => this._register(), Math.random() * REGISTER_SPREAD_MS);
  }
  /**
   * Register, then wait for the next heartbeat. A call while the websocket is down
   * waits, and the waiting calls all go when the socket opens again,
   * so a device that is not connected does not call. It tries
   * again after a new random wait, so devices that reconnect together
   * spread their calls. A device that is not fixed also tries again.
   */
  _register() {
    const mod = this._module;
    if (!mod)
      return;
    if (!realtimeConnected() || !isFixedDevice()) {
      this._startRegister();
      return;
    }
    this._call(mod, "register", [this._deviceDetails()]).catch((error) => log2(LOG_TAG, "Failed to register", error, "warn"));
    this.timeout("register", () => this._register(), REMOTE_DEBUG_HEARTBEAT_MS);
  }
  _applyState(value) {
    const state2 = value && typeof value === "object" ? value : {};
    this._applyRequest(state2.logs);
    this._commands = Array.isArray(state2.commands) ? state2.commands.slice(0, MAX_REMOTE_DEBUG_COMMANDS).filter(isRemoteDebugCommand) : [];
    this._runCommands();
  }
  _startCapture() {
    if (this._capturing)
      return;
    this._capturing = true;
    this.subscription("console", listenToConsole((method, args) => this._add(CONSOLE_LEVEL[method], "console", formatLogArgs(args))));
    const onError = (event) => {
      const where = event.filename ? ` (${event.filename}:${event.lineno}:${event.colno})` : "";
      this._add("error", "error", formatLogArgs([event.error ?? `${event.message}${where}`]));
    };
    const onRejection = (event) => this._add("error", "rejection", formatLogArgs(["Unhandled rejection:", event.reason]));
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    this.subscription("errors", () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    });
  }
  _stopCapture() {
    this._capturing = false;
    this.unsub("console");
    this.unsub("errors");
    this._buffer.set([]);
    this._last_error = null;
  }
  _add(level, source, message2) {
    if (message2.includes(`[${LOG_TAG}]`) || this._isOwnCallLine(message2)) {
      return;
    }
    const entry = {
      seq: ++this._seq,
      timestamp: Date.now(),
      level,
      source,
      message: message2
    };
    this._log_counts[level]++;
    if (level === "error")
      this._last_error = entry;
    this._buffer.push(entry);
    if (this._request && isAtLogLevel(level, this._request.level)) {
      this._queue.push(entry);
    }
  }
  /**
   * Whether a line is a ts-client debug line about a change of a binding of
   * the driver, such as `[PlaceOS][WS] sys-1 RemoteDebug_1 logs:<id>
   * changed`. These lines show only with `window.debug`. A `logs:<id>`
   * change of this device comes from its own `post_logs` call, so if the
   * device sent them, each call would cause the next one. ts-client does not
   * log the calls themselves.
   */
  _isOwnCallLine(message2) {
    const mod = this._module;
    if (!mod)
      return false;
    return message2.startsWith(`[PlaceOS][WS] ${mod.sys} ${mod.mod}_${mod.index} `);
  }
  /** Call a method of the driver */
  async _call(mod, method, args) {
    return mod.execute(method, args, { timeout_ms: CALL_TIMEOUT_MS });
  }
  /**
   * Apply the log request of the binding. A new request ID queues the
   * buffered entries. The same ID with a new level or duration changes the
   * level and starts the duration again. Other values end the request.
   */
  _applyRequest(value) {
    if (!isRemoteLogRequest(value))
      return this._endRequest();
    if (value.id === this._ended_id)
      return;
    const active = this._request;
    if (active?.id === value.id && active.level === value.level && active.duration === value.duration) {
      return;
    }
    const level = value.level;
    if (value.id !== this._request?.id) {
      const history3 = clamp(value.history, MAX_REMOTE_LOG_HISTORY);
      const before = typeof value.before === "number" ? value.before : Infinity;
      const matching = this._buffer.list.filter((_) => _.seq < before && isAtLogLevel(_.level, level));
      this._queue.set(history3 ? matching.slice(-history3) : []);
      log2(LOG_TAG, `Sending logs for request ${value.id}`);
    } else {
      this._queue.set(this._queue.list.filter((_) => isAtLogLevel(_.level, level)));
    }
    this._request = value;
    setDebugLogging(level === "debug");
    this.timeout("request_end", () => this._endRequest(), clamp(value.duration ?? DEFAULT_DURATION_MS, MAX_DURATION_MS));
    if (!this._intervals["send"]) {
      this.interval("send", () => this._send(), SEND_INTERVAL_MS);
    }
    this._send();
  }
  _endRequest() {
    if (!this._request)
      return;
    log2(LOG_TAG, `Log request ${this._request.id} ended`);
    this._ended_id = this._request.id;
    this._request = null;
    this._queue.set([]);
    setDebugLogging(false);
    this.clearTimeout("request_end");
    this.clearInterval("send");
  }
  /**
   * Send the next batch of queued entries. One call runs at a time. Entries
   * leave the queue only when the call succeeds, so a failed batch is sent
   * again. The queue keeps `MAX_REMOTE_LOG_HISTORY` entries and
   * `MAX_REMOTE_LOG_QUEUE_BYTES` maximum.
   */
  async _send() {
    const request2 = this._request;
    const mod = this._module;
    const queue = this._queue.list;
    if (this._sending || !request2 || !mod || !queue.length)
      return;
    const batch = queue.slice(0, MAX_REMOTE_LOG_BATCH);
    const last_seq = batch[batch.length - 1].seq;
    this._sending = true;
    try {
      await this._call(mod, "post_logs", [
        this.device_id,
        request2.id,
        batch,
        this._deviceDetails()
      ]);
      if (this._request?.id === request2.id) {
        this._queue.set(this._queue.list.filter((_) => _.seq > last_seq));
      }
    } catch (error) {
      log2(LOG_TAG, "Failed to send logs", error, "warn");
    } finally {
      this._sending = false;
    }
  }
  /**
   * Run the commands that the device did not handle yet, one at a time and
   * oldest first. The command ID is saved before the command runs, so a
   * reload does not run it again. A failed `command_result` call is not
   * sent again.
   */
  async _runCommands() {
    if (this._running_commands) {
      this._run_again = true;
      return;
    }
    this._running_commands = true;
    this._run_again = false;
    let reloading = false;
    try {
      for (let i = 0; i < MAX_REMOTE_DEBUG_COMMANDS; i++) {
        const stored = readHandledCommands();
        const command = this._commands.find((_) => !stored.includes(_.id) && !this._handled.includes(_.id));
        const mod = this._module;
        if (!command || !mod)
          break;
        this._handled = [...this._handled, command.id].slice(-MAX_HANDLED_COMMANDS);
        const saved = saveHandledCommands([...stored, command.id]);
        log2(LOG_TAG, `Running command ${command.type}`, command.id);
        const result = await this._runCommand(command, saved);
        await this._call(mod, "command_result", [
          this.device_id,
          command.id,
          result,
          this._deviceDetails()
        ]).catch((error) => log2(LOG_TAG, "Failed to send result", error, "warn"));
        if (result.ok && isReloadCommand(command)) {
          reloading = true;
          location.reload();
          return;
        }
      }
    } finally {
      this._running_commands = false;
      if (this._run_again && !reloading)
        this._runCommands();
    }
  }
  /**
   * Result of a command. `reload` and `clear_cache` run only when the
   * device saved the command ID, so a device without storage does not
   * reload again and again.
   */
  async _runCommand(command, saved) {
    if (isReloadCommand(command) && !saved) {
      return { ok: false, error: "Local storage is not available" };
    }
    try {
      const data = await this._commandData(command);
      const json2 = scrubSecrets(JSON.stringify(data ?? null, (key, value) => key && SECRET_FIELD.test(key) && value !== null && typeof value !== "boolean" ? "[Filtered]" : value));
      if (json2.length > MAX_RESULT_LENGTH) {
        return { ok: false, error: "Result is too large" };
      }
      return { ok: true, data: JSON.parse(json2) };
    } catch (error) {
      return { ok: false, error: formatLogArgs([error]) };
    }
  }
  async _commandData(command) {
    switch (command.type) {
      case "status":
        return this._status();
      case "settings":
        return Object.fromEntries(command.keys.slice(0, MAX_SETTINGS_KEYS).map((key) => [key, this._settings.get(key) ?? null]));
      case "storage":
        return storageItems();
      case "navigate": {
        const done = await this._router.navigateByUrl(command.path);
        if (!done)
          throw new Error(`Cannot open ${command.path}`);
        return { url: this._router.url };
      }
      case "reload":
        return null;
      case "clear_cache":
        return clearCaches();
      case "snapshot":
      case "animation":
        return this._captureMedia(command);
    }
  }
  /** Capture the screen, then upload the file. See `REMOTE_DEBUG_UPLOAD` */
  async _captureMedia(command) {
    const capture = await this._loadCapture();
    const media = command.type === "snapshot" ? await capture.captureSnapshot(limit(command.width, SNAPSHOT_WIDTH)) : await capture.captureAnimation({
      width: limit(command.width, ANIMATION_WIDTH),
      duration: limit(command.duration, ANIMATION_DURATION),
      fps: limit(command.fps, ANIMATION_FPS),
      format: command.format ?? "webp"
    });
    if (media.bytes.length > capture.MAX_MEDIA_BYTES) {
      throw new Error("The file is too large. Use a smaller width");
    }
    const extension = media.mime.split("/")[1];
    const file = new File([media.bytes], `remote-debug-${this.device_id}-${command.id}.${extension}`, { type: media.mime });
    const upload_id = await withTimeout(this._upload(file), UPLOAD_TIMEOUT_MS, "The upload did not finish in time");
    return {
      mime: media.mime,
      width: media.width,
      height: media.height,
      frames: media.frames,
      duration: media.duration,
      bytes: media.bytes.length,
      upload_id
    };
  }
  async _status() {
    const memory = performance.memory;
    const storage = await navigator.storage?.estimate().catch(() => null);
    const user = currentUser();
    return {
      device: this._deviceDetails(),
      device_time: Date.now(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      online: navigator.onLine,
      websocket: realtimeConnected(),
      visible: document.visibilityState === "visible",
      native: isNativeApp(),
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        pixel_ratio: window.devicePixelRatio
      },
      memory: memory ? {
        used: memory.usedJSHeapSize,
        limit: memory.jsHeapSizeLimit
      } : null,
      storage: storage ? { usage: storage.usage ?? 0, quota: storage.quota ?? 0 } : null,
      service_worker: {
        active: !!navigator.serviceWorker?.controller,
        new_version: hasNewVersion()
      },
      user: user?.id ? { id: user.id, email: user.email } : null,
      building_id: this._org.building?.id ?? "",
      setting_overrides: Object.keys(this._settings.debug_overrides()),
      log_counts: __spreadValues({}, this._log_counts),
      last_error: this._last_error,
      buffered: this._buffer.list.length,
      log_request: this._request?.id ?? null
    };
  }
  _deviceDetails() {
    return {
      id: this.device_id,
      // The short name of most fixed device apps is PlaceOS
      app: `${this._settings.get("app.name") || appName()}`,
      version: `${VERSION.version ?? ""}`,
      build: `${VERSION.hash ?? ""}`,
      url: scrubSecrets(location.href),
      user_agent: navigator.userAgent,
      started_at: this._started_at
    };
  }
  static {
    this.\u0275fac = function RemoteDebugService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteDebugService, factory: _RemoteDebugService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteDebugService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();
var BoundedEntries = class {
  constructor(_max_count, _max_bytes) {
    this._max_count = _max_count;
    this._max_bytes = _max_bytes;
    this._entries = [];
    this._bytes = 0;
  }
  get list() {
    return this._entries;
  }
  push(entry) {
    this._entries.push(entry);
    this._bytes += entryBytes(entry);
    this._trim();
  }
  set(entries) {
    this._entries = [...entries];
    this._bytes = this._entries.reduce((sum, _) => sum + entryBytes(_), 0);
    this._trim();
  }
  /** Each step removes one entry, so the loop ends when the list is empty */
  _trim() {
    while (this._entries.length > this._max_count || this._bytes > this._max_bytes) {
      const removed = this._entries.shift();
      if (!removed)
        break;
      this._bytes -= entryBytes(removed);
    }
  }
};
function entryBytes(entry) {
  return entry.message.length * 2 + LOG_ENTRY_BYTES;
}
function isReloadCommand(command) {
  return command.type === "reload" || command.type === "clear_cache";
}
function storageItems() {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === null)
      continue;
    items.push({ key, length: localStorage.getItem(key)?.length ?? 0 });
  }
  return items.sort((a, b) => a.key.localeCompare(b.key));
}
async function clearCaches() {
  const names = await globalThis.caches?.keys() ?? [];
  await Promise.all(names.map((name) => caches.delete(name)));
  const workers = await navigator.serviceWorker?.getRegistrations() ?? [];
  await Promise.all(workers.map((worker) => worker.unregister()));
  return { caches: names.length, workers: workers.length };
}
function readHandledCommands() {
  try {
    const list = JSON.parse(localStorage.getItem(HANDLED_COMMANDS_KEY) || "[]");
    return Array.isArray(list) ? list.filter((_) => typeof _ === "string") : [];
  } catch {
    return [];
  }
}
function saveHandledCommands(ids) {
  try {
    localStorage.setItem(HANDLED_COMMANDS_KEY, JSON.stringify(ids.slice(-MAX_HANDLED_COMMANDS)));
    return true;
  } catch {
    return false;
  }
}
function optionalNumber(value) {
  return value === void 0 || typeof value === "number" && isFinite(value);
}
function limit(value, range) {
  if (typeof value !== "number" || !isFinite(value))
    return range.default;
  return Math.min(Math.max(value, 1), range.max);
}
function clamp(value, max) {
  if (typeof value !== "number" || isNaN(value))
    return max;
  return Math.min(Math.max(Math.floor(value), 0), max);
}

// libs/common/src/lib/teams-host.ts
var TEAMS_HOST_PARAM = "host";
var AUTH_STORE_KEY = "PLACEOS.teams_auth";
var INIT_TIMEOUT_MS = 5e3;
var SSO_TIMEOUT_MS = 1e4;
var MAX_SIGN_IN_ATTEMPTS = 5;
var EXPIRY_MARGIN_MS = 5 * 60 * 1e3;
var _teams = null;
var _sso_paused = false;
var _sign_in_resolve = null;
var SIGN_IN_REQUIRED = signal(
  false,
  ...ngDevMode ? [{ debugName: "SIGN_IN_REQUIRED" }] : (
    /* istanbul ignore next */
    []
  )
);
function teamsHostMode(search2 = location.search, storage = sessionStorage) {
  const host = new URLSearchParams(search2).get(TEAMS_HOST_PARAM);
  if (host === "teams-auth" || storage.getItem(AUTH_STORE_KEY) === "true") {
    return "auth";
  }
  return host === "teams" ? "tab" : null;
}
async function startTeamsHost(mode = teamsHostMode()) {
  if (!mode)
    return null;
  if (mode === "auth")
    sessionStorage.setItem(AUTH_STORE_KEY, "true");
  try {
    const teams = await import("./src-BNAR4FSM.js");
    await withTimeout(teams.app.initialize(), INIT_TIMEOUT_MS, "Microsoft Teams host did not respond.");
    _teams = teams;
    log2("Teams", `Connected to host as ${mode}.`);
    return mode;
  } catch (error) {
    log2("Teams", "Host is not available.", error, "warn");
    return null;
  }
}
async function finishTeamsSignIn(mode) {
  if (!_teams)
    throw new Error("Call startTeamsHost() first.");
  if (mode === "auth") {
    const place_token = token();
    if (place_token) {
      sessionStorage.removeItem(AUTH_STORE_KEY);
      _teams.authentication.notifySuccess(place_token);
    }
    return false;
  }
  if (token())
    return true;
  const session = placeSession();
  if (session?.status().kind === "loading")
    await session.authorize();
  if (token())
    return true;
  _sso_paused = true;
  const signed_in = await signInTeamsTab(_teams).finally(() => _sso_paused = false);
  if (signed_in)
    return true;
  failInitialisation("Sign in did not finish. Select Try again to sign in.");
  return false;
}
async function teamsEntraToken() {
  if (!_teams || _sso_paused)
    return null;
  return withTimeout(_teams.authentication.getAuthToken(), SSO_TIMEOUT_MS, "Microsoft single sign-on timed out.").catch((error) => {
    log2("Teams", "SSO failed.", error, "warn");
    return null;
  });
}
async function signInTeamsTab(teams) {
  const url = `${location.origin}${location.pathname}?${TEAMS_HOST_PARAM}=teams-auth`;
  for (let attempt = 0; attempt < MAX_SIGN_IN_ATTEMPTS; attempt++) {
    if (attempt > 0) {
      await new Promise((resolve) => {
        _sign_in_resolve = resolve;
        SIGN_IN_REQUIRED.set(true);
      });
    }
    const place_token = await teams.authentication.authenticate({ url, width: 600, height: 600 }).catch((error) => {
      log2("Teams", "Sign-in window failed.", error, "warn");
      return "";
    });
    if (place_token) {
      setToken(place_token, tokenExpiry(place_token));
      return true;
    }
  }
  return false;
}
function tokenExpiry(jwt) {
  try {
    const payload = jwt.split(".")[1];
    if (!payload)
      return void 0;
    const claims = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof claims.exp === "number" ? claims.exp * 1e3 - EXPIRY_MARGIN_MS : void 0;
  } catch {
    return void 0;
  }
}

// libs/common/src/lib/placeos.service.ts
var START_QUERY = location.search;
var AUTHORITY_WAIT_MS = 10 * 1e3;
var LOADING_MESSAGE = signal(
  "Loading...",
  ...ngDevMode ? [{ debugName: "LOADING_MESSAGE" }] : (
    /* istanbul ignore next */
    []
  )
);
var NEEDS_DOMAIN = signal(
  false,
  ...ngDevMode ? [{ debugName: "NEEDS_DOMAIN" }] : (
    /* istanbul ignore next */
    []
  )
);
var DOMAIN_ERROR = signal(
  "",
  ...ngDevMode ? [{ debugName: "DOMAIN_ERROR" }] : (
    /* istanbul ignore next */
    []
  )
);
var AUTO_CONFIRM_DOMAIN = signal(
  false,
  ...ngDevMode ? [{ debugName: "AUTO_CONFIRM_DOMAIN" }] : (
    /* istanbul ignore next */
    []
  )
);
function getLoadingMessage() {
  return LOADING_MESSAGE;
}
function setLoadingMessage(message2) {
  LOADING_MESSAGE.set(message2);
}
function needsNativeDomain() {
  return NEEDS_DOMAIN;
}
function nativeDomainError() {
  return DOMAIN_ERROR;
}
function autoConfirmNativeDomain() {
  return AUTO_CONFIRM_DOMAIN;
}
var _mocks = null;
var PlaceOS_Service = class _PlaceOS_Service extends AsyncHandler {
  constructor() {
    super();
    this._analytics = inject(GoogleAnalyticsService, { optional: true });
    this._locale = inject(LocaleService, { optional: true });
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._cache = inject(SwUpdate);
    this._snackbar = lazySnackbar();
    this._hotkey = inject(HotkeysService);
    this._clipboard = inject(Clipboard);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._location = inject(Location);
    this._maps = inject(MapsPeopleService);
    this._error_handler = inject(ErrorHandler);
    this._remote_debug = inject(RemoteDebugService);
    this._zone = "";
    this._region = "";
    this._initial_token = "";
    this._domain_resolve = null;
    initSentryFromSettings();
  }
  async _handleNativeAuthRedirect(url) {
    const callback_url = new URL(url);
    const params = callback_url.searchParams;
    await closeNativeBrowser();
    markNativeAuthRedirectConsumed(url);
    const error = params.get("error");
    if (error || !params.get("code")) {
      const message2 = params.get("error_description") || error || "Sign in failed. Please try again.";
      console.warn("[AUTH] Native sign in failed.", message2);
      setNativeAuthError(message2);
      location.replace(`${location.origin}${location.pathname}`);
      return;
    }
    sessionStorage.setItem("ENGINE.auth.params", JSON.stringify({
      code: params.get("code"),
      state: params.get("state")
    }));
    console.warn("[AUTH] Reloading webview with auth code...");
    location.replace(`${location.origin}${location.pathname}?${params.toString()}`);
  }
  get debug() {
    return window.debug && this._settings.get("app.allow_debugging") === true;
  }
  get has_chat() {
    return this._settings.get("app.chat.enabled");
  }
  get has_uploads() {
    return this._settings.get("app.has_uploads") || false;
  }
  set mocks(value) {
    _mocks = value;
  }
  setInitialToken(token2) {
    this._initial_token = token2 || "";
  }
  /** Called by the native domain overlay once the user has set a domain. */
  onNativeDomainSet() {
    NEEDS_DOMAIN.set(false);
    DOMAIN_ERROR.set("");
    AUTO_CONFIRM_DOMAIN.set(false);
    this._domain_resolve?.();
    this._domain_resolve = null;
  }
  async init(options = {}) {
    if (isNativeApp()) {
      hideNativeStatusBar();
      restoreNativePkceVerifier();
      await bindNativeAuthRedirects((url) => {
        this._handleNativeAuthRedirect(url).catch((error) => console.warn("[AUTH] Error handling redirect.", error));
      });
      const launch_url = await consumeNativeAuthRedirect();
      if (launch_url) {
        await this._handleNativeAuthRedirect(launch_url);
        return;
      }
    }
    setupCache(this._cache);
    log2("APP", "MOCKS:", _mocks);
    if (_mocks) {
      if (mockModeRequested()) {
        setLoadingMessage("Initializing mocks...");
        await _mocks();
      }
      this._hotkey.listen(["Control", "Alt", "Shift", "KeyM"], () => {
        localStorage.setItem("mock", `${localStorage.getItem("mock") !== "true"}`);
        location.reload();
      });
    } else {
      localStorage.removeItem("mock");
    }
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyD"], () => {
      this._settings.saveUserSetting("dark_mode", !this._settings.get("dark_mode"));
      notifySuccess("Toggled dark mode.");
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyC"], () => {
      this._clipboard.copy(token());
      notifySuccess("Successfully copied token.");
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyV"], () => {
      navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyF"], () => {
      navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
    });
    window.pasteToken = (t) => this._pasteToken(t);
    setLoadingMessage("Checking params...");
    this._route.queryParamMap.subscribe((params) => {
      if (params.has("hide_nav"))
        localStorage.setItem("PlaceOS.hide_nav", "true");
      if (params.has("lang")) {
        const locale = params.get("lang");
        this._locale?.setLocale(locale);
        localStorage.setItem("PLACEOS.locale", locale);
      }
      if (params.has("x-api-key") && !isNativeApp()) {
        setApiKey(params.get("x-api-key"));
      }
      if (params.has("region_id")) {
        this._region = params.get("region_id");
      }
      if (params.has("building_id")) {
        this._zone = params.get("building_id");
      }
      if (this._region || this._zone)
        this._setZones();
    });
    setLoadingMessage("Initializing settings...");
    setNotifyOutlet(this._snackbar);
    setTranslationService(this._locale);
    await firstTruthyValueFrom(this._settings.initialised);
    setAppName(this._settings.get("app.short_name"));
    const settings2 = this._settings.get("composer") || {};
    settings2.app_name = this._settings.get("app.name") || this._settings.get("app.short_name");
    settings2.mock = !!this._settings.get("mock") || _mocks && location.origin.includes("demo.place.tech");
    if (START_QUERY) {
      const query8 = Object.fromEntries(new URLSearchParams(START_QUERY));
      const url = this._router.parseUrl(this._location.path() || "/");
      url.queryParams = __spreadValues(__spreadValues({}, query8), url.queryParams);
      if (isNativeApp())
        delete url.queryParams["x-api-key"];
      this._router.navigateByUrl(url, { replaceUrl: true });
    }
    let confirm_managed = false;
    if (isNativeApp()) {
      setLoadingMessage("Checking managed configuration...");
      const { config: managed, changed } = await syncNativeManagedConfig();
      if (managed) {
        if (options.allow_mdm_restart && managed.restart_enabled) {
          scheduleNativeRestart(managed.restart_time);
        }
        confirm_managed = changed && !!managed.domain && !managed.skip_interactive_setup;
        AUTO_CONFIRM_DOMAIN.set(confirm_managed && !!options.allow_mdm_restart && !!managed.api_key && !!managed.system_id);
      }
    }
    let intune_token = "";
    if (isNativeApp()) {
      setLoadingMessage("Checking managed account...");
      const account = await getIntuneAccount();
      if (account) {
        intune_token = await getIntuneToken(account, this._settings.get("app.intune.scopes") || void 0);
        const email = `${account.username || ""}`.trim();
        if (email && !getNativeDomain()) {
          const domain = await lookupNativeDomainByEmail(email).catch(() => "");
          if (domain) {
            setNativeDomain(domain);
            setNativeEmail(email);
          }
        }
      }
    }
    while (isNativeApp()) {
      let domain = getNativeDomain();
      while (!domain || confirm_managed) {
        confirm_managed = false;
        setLoadingMessage("Waiting for server configuration...");
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
        domain = getNativeDomain();
      }
      settings2.domain = domain;
      settings2.protocol = "https:";
      settings2.use_domain = true;
      setLoadingMessage("Authenticating...");
      const auth_error = await setupPlace(settings2, void 0, {
        api_key: getNativeApiKey() || ""
      }).then(() => null).catch((_) => _);
      if (!auth_error) {
        if (intune_token)
          setToken(intune_token);
        break;
      }
      log2("APP", "Auth failed, resetting domain.", auth_error, "warn");
      stopPlaceClient();
      clearNativeDomain();
      clearNativeApiKey();
      DOMAIN_ERROR.set(`Unable to connect to "${domain}". The server may be unavailable, or the email address may be for a different server. Try again.`);
    }
    if (isNativeApp() && !token()) {
      const boot_params = new URLSearchParams(START_QUERY);
      if (boot_params.has("code")) {
        console.warn("[AUTH] Auth code was present on load but the token exchange did not complete.");
      }
    }
    const has_refresh_token = !!localStorage.getItem(`${clientId()}_refresh_token`);
    if (isNativeApp() && !token() && !has_refresh_token && authority()) {
      const auth_error = consumeNativeAuthError();
      if (auth_error) {
        setLoadingMessage("Waiting for sign in...");
        DOMAIN_ERROR.set(auth_error);
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
      }
      setLoadingMessage("Opening sign in...");
      const auth_url = await createNativeAuthUrl(settings2, clientId());
      console.warn(`[AUTH] Opening sign in: ${auth_url.split("?")[0]}`);
      await openNativeBrowser(auth_url);
      return;
    }
    if (!isNativeApp()) {
      const teams_mode = await startTeamsHost();
      if (teams_mode)
        settings2.local_login = teams_mode === "tab";
      setLoadingMessage("Authenticating...");
      await setupPlace(settings2, AUTHORITY_WAIT_MS, {
        // A Teams tab signs in with the SSO token of the host
        entra_token: teams_mode === "tab" ? teamsEntraToken : void 0,
        // Keep the tokens of the tab and the sign-in window over a
        // reload
        trusted: !!teams_mode
      }).catch((_) => console.error(_));
      if (teams_mode) {
        setLoadingMessage("Waiting for Microsoft sign in...");
        if (!await finishTeamsSignIn(teams_mode))
          return;
      }
    }
    if (this._initial_token)
      setToken(this._initial_token);
    try {
      await withTimeout(this._org.waitUntilInitialised(), 5e4, "Organisation loading timed out.");
    } catch (error) {
      this._error_handler.handleError(error);
      requestInitReload();
      return;
    }
    if (this._locale) {
      this._locale.zone_id = this._org.organisation.id;
      this._locale.init();
    }
    setupCache(this._cache, this._settings.get("service_worker") || {});
    try {
      await withTimeout(waitForCurrentUser(), 3e4, "Current user loading timed out.");
    } catch (error) {
      this._error_handler.handleError(error);
      this.onInitError();
      return;
    }
    clearNativePkceVerifier();
    this._initLocale();
    setInternalUserDomain(this._settings.get("app.internal_user_domain") || `@${currentUser()?.email?.split("@")[1]}`);
    this._initAnalytics();
    try {
      this._initFixedDevice();
    } catch {
      log2("APP", "Failed to initialise background services.", void 0, "warn");
    }
    this._setZones();
    if (this._locale) {
      await Promise.race([
        this._locale.loaded(),
        new Promise((resolve) => setTimeout(resolve, 5e3))
      ]);
    }
    markInitialisationComplete();
  }
  onInitError() {
    if (isMock() || currentUser()?.is_logged_in)
      return;
    if (isNativeApp() && getNativeApiKey()) {
      clearNativeApiKey();
      clearNativeDomain();
      localStorage.removeItem(`${clientId()}_x-api-key`);
      invalidateToken();
    } else if (!token())
      invalidateToken();
    requestInitReload();
  }
  _initAnalytics() {
    const tracking_id = this._settings.get("app.analytics.tracking_id");
    if (!this._analytics)
      return;
    this._analytics.enabled = this._settings.get("app.analytics.enabled") !== false;
    if (!tracking_id || !this._analytics.enabled)
      return;
    setLoadingMessage("Initialising analytics...");
    try {
      this._analytics.init(tracking_id);
      this._analytics.load(tracking_id);
      this._analytics.setUser(currentUser().id);
    } catch (error) {
      log2("APP", "Failed to initialise analytics.", error, "warn");
      return;
    }
    if (!tracking_id.startsWith("G-"))
      return;
    if (this._router.navigated)
      this._analytics.page(this._router.url);
    this.subscription("analytics-router", this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => this._analytics.page(event.urlAfterRedirects)));
  }
  _initLocale() {
    setLoadingMessage("Loading locales...");
    try {
      let locale = localStorage.getItem("PLACEOS.locale");
      const locales = this._settings.get("app.locales") || [];
      if (locale) {
        this._locale?.setLocale(locale);
      } else {
        const list = navigator.languages;
        for (const lang of list) {
          locale = locales.find((_) => _.id === lang);
          if (!locale)
            locale = locales.find((_) => lang.includes(_.id));
          if (locale) {
            this._locale?.setLocale(lang);
            localStorage.setItem("PLACEOS.locale", lang);
            break;
          }
        }
      }
    } catch {
      log2("APP", "Failed to initialise locale service.", void 0, "warn");
    }
  }
  /**
   * Uses a token from the clipboard, such as one copied from another app,
   * as `access` or `access|refresh`. The token can be for another account,
   * so the app reloads and the login uses it one time (see
   * `pastedTokenKey`).
   */
  _pasteToken(tkn) {
    const [token2, refresh_token] = tkn.split("|").map((_) => _.trim());
    if (!token2)
      return;
    sessionStorage.setItem(pastedTokenKey(clientId()), JSON.stringify({
      token: token2,
      refresh_token: refresh_token || null,
      expires_at: addHours(/* @__PURE__ */ new Date(), 6).valueOf()
    }));
    notifySuccess("Successfully pasted token.");
    setTimeout(() => location.reload(), 2e3);
  }
  _checkReload() {
    if (!hasNewVersion())
      return;
    setLoadingMessage("Checking for updates...");
    reloadForNewVersion();
  }
  async _initFixedDevice() {
    if (!isFixedDevice())
      return;
    setLoadingMessage("Initialising as fixed device...");
    this.interval("auto-update-version", () => this._checkReload(), 15 * 1e3);
    await requestScreenWakeLock();
  }
  _setZones() {
    if (this._region || this._zone) {
      this._org.skipAutoSelection();
    }
    this.timeout("set_building+region", async () => {
      const building_list = this._org.building_list();
      let bld = building_list.find((b) => b.id === this._zone);
      const target_region_id = this._region || bld?.parent_id;
      const region = this._org.regions.find((b) => b.id === target_region_id);
      if (region)
        await this._org.setRegion(region);
      if (!bld && this._zone) {
        const building_list2 = this._org.building_list();
        bld = building_list2.find((b) => b.id === this._zone);
      }
      if (bld)
        this._org.setBuilding(bld, true);
    }, 1e3);
  }
  static {
    this.\u0275fac = function PlaceOS_Service_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceOS_Service)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceOS_Service, factory: _PlaceOS_Service.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceOS_Service, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/signal.utilities.ts
function firstValueWhere(value, predicate = (_) => !!_, injector) {
  const current3 = untracked(value);
  if (predicate(current3))
    return Promise.resolve(current3);
  return new Promise((resolve) => {
    let ref;
    ref = untracked(() => effect(() => {
      const current4 = value();
      if (!predicate(current4))
        return;
      ref.destroy();
      resolve(current4);
    }, { injector }));
  });
}

// libs/common/src/lib/org/organisation.service.ts
var log4 = scoped_log("ORG");
var ORG_CACHE_PREFIX = "PLACEOS.org";
var ZONE_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.zones`;
var AUTHORITY_CACHE_KEY = `${ORG_CACHE_PREFIX}.authority`;
var OFFLINE_BOOT_DELAY = 10 * 1e3;
var ZONE_LOAD_TIMEOUT = 30 * 1e3;
var GEOLOCATION_TIMEOUT = 10 * 1e3;
var METADATA_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.metadata`;
var MAX_CACHE_AGE2 = 7 * 24 * 60 * 60 * 1e3;
function cachedAuthority() {
  const auth = authority();
  if (auth?.id) {
    const details = {
      id: auth.id,
      metadata_cache_id: `${auth.config?.["metadata_cache_id"] || ""}`
    };
    try {
      localStorage.setItem(AUTHORITY_CACHE_KEY, JSON.stringify(details));
    } catch {
    }
    return details;
  }
  try {
    return JSON.parse(localStorage.getItem(AUTHORITY_CACHE_KEY) || "null");
  } catch {
    return null;
  }
}
var OrganisationService = class _OrganisationService {
  get _refreshing() {
    return this.refreshing();
  }
  /** Mapping of organisation settings overrides */
  get settings() {
    return this._settings;
  }
  /** Mapping of regions to settings overrides */
  get region_settings() {
    return this._region_settings;
  }
  /** Mapping of buildings to settings overrides */
  get building_settings() {
    return this._building_settings;
  }
  /** Mapping region settings overrides */
  regionSettings(id = "") {
    const region = this._active_region();
    if (!id && region)
      id = region?.id;
    return this._region_settings ? this._region_settings[id] || {} : {};
  }
  /** Mapping building settings overrides */
  buildingSettings(bld_id = "") {
    if (!bld_id && this.building) {
      bld_id = this.building?.id || this.buildings[0]?.id;
    }
    return this._building_settings ? this._building_settings[bld_id] || {} : {};
  }
  /** Organisation data for the application */
  get organisation() {
    return this._organisation;
  }
  /** List of available regions */
  get regions() {
    return this._region_list();
  }
  /** Currently active region */
  get region() {
    return this._active_region();
  }
  set region(item) {
    this.setRegion(item);
  }
  /** Prevent automatic building/region selection from overriding externally set values */
  skipAutoSelection() {
    this._skip_auto_selection = true;
  }
  async setRegion(item) {
    const active_region = this._active_region();
    if (!item || active_region?.id === item?.id)
      return;
    this._active_region.set(item);
    await this.loadRegionData(item);
    this._setBuildingFromTimezone();
    if (!this._skip_auto_selection && this.building?.parent_id !== item.id && this.buildingsForRegion(item).length) {
      this.building = this.buildingsForRegion(item)[0];
    } else
      this._updateSettingOverrides();
    localStorage.setItem("PLACEOS.region", item.id);
  }
  /** List of available buildings */
  get buildings() {
    return this._building_list() || [];
  }
  /** Currently active building */
  get building() {
    return this._active_building();
  }
  set building(bld) {
    this.setBuilding(bld);
  }
  setBuilding(bld, save = false) {
    if (!(bld instanceof Object))
      return;
    this._active_building.set(bld);
    if (!this._service.get("dont_load_metadata")) {
      this.loadBuildingData(bld).then(() => this._updateSettingOverrides());
    }
    if (this.regions.length && this.region?.id !== bld.parent_id) {
      this.region = this.regions.find((_) => _.id === this.building.parent_id);
    }
    if (save)
      localStorage.setItem("PLACEOS.building", bld.id);
  }
  get timezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get currency_code() {
    return this._service.get("app.currency") || this.building?.currency || "USD";
  }
  /** Get binding value from the building/organisation */
  binding(name) {
    return this.building?.bindings[name] || this._organisation?.bindings[name];
  }
  module(name, default_mod_id = "System") {
    const binding = this.binding(name);
    const system_id = binding instanceof Object ? binding.id || binding.system_id : binding;
    const mod_id = (binding instanceof Object ? binding.mod || binding.module : "") || default_mod_id;
    return !system_id || !mod_id ? null : getModule(system_id, mod_id);
  }
  /** Get building by id */
  find(id) {
    return this._buildings_by_id().get(id);
  }
  /** List of available levels */
  get levels() {
    return this._level_list();
  }
  set limit_init(state2) {
    this._limited_init.set(state2);
  }
  constructor() {
    this._service = inject(SettingsService);
    this._router = inject(Router);
    this._injector = inject(Injector);
    this._initialised = signal(
      false,
      ...ngDevMode ? [{ debugName: "_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initialised = this._initialised.asReadonly();
    this._region_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_region_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_region = signal(
      new Region({ name: "Unknown" }),
      ...ngDevMode ? [{ debugName: "_active_region" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._building_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_building_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_building = signal(
      new Building({ name: "Unknown" }),
      ...ngDevMode ? [{ debugName: "_active_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_level_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._regions_by_id = computed(
      () => new Map(this._region_list().map((region) => [
        region.id,
        region
      ])),
      ...ngDevMode ? [{ debugName: "_regions_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._buildings_by_id = computed(
      () => new Map(this._building_list().map((building) => [
        building.id,
        building
      ])),
      ...ngDevMode ? [{ debugName: "_buildings_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._levels_by_id = computed(
      () => new Map(this._level_list().map((level) => [
        level.id,
        level
      ])),
      ...ngDevMode ? [{ debugName: "_levels_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_data = {};
    this._served_cache = false;
    this._refresh_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "_refresh_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refreshing = computed(
      () => this._refresh_count() > 0,
      ...ngDevMode ? [{ debugName: "refreshing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_buildings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_loaded_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._limited_init = signal(
      false,
      ...ngDevMode ? [{ debugName: "_limited_init" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.app_key = `${(this._service.app_name || "workplace").toLowerCase()}_app`;
    this.region_list = this._region_list.asReadonly();
    this.building_list = this._building_list.asReadonly();
    this.level_list = this._level_list.asReadonly();
    this.active_region = this._active_region.asReadonly();
    this.active_building = this._active_building.asReadonly();
    this.active_building_loaded = computed(
      () => {
        if (this._service.get("dont_load_metadata"))
          return true;
        const id = this._active_building()?.id;
        return !id || this._loaded_buildings().includes(id);
      },
      ...ngDevMode ? [{ debugName: "active_building_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_buildings = computed(
      () => {
        const region = this._active_region();
        return region ? this.buildingsForRegion(region) : this.buildings;
      },
      ...ngDevMode ? [{ debugName: "active_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_levels = computed(
      () => {
        const building = this._active_building();
        return building ? this.levelsForBuilding(building) : [];
      },
      ...ngDevMode ? [{ debugName: "active_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._organisation = new Organisation();
    this._settings = [];
    this._region_settings = {};
    this._building_settings = {};
    this._skip_auto_selection = false;
    this._init_timer = null;
    this._zone_load_timer = null;
    this._override_timer = null;
    this._destroyed = false;
    const online_state = onlineState();
    const online = waitForOnline();
    const start2 = Promise.race([
      online,
      new Promise((resolve) => setTimeout(resolve, OFFLINE_BOOT_DELAY))
    ]);
    start2.then(() => this._scheduleInit());
    let was_online = online_state();
    effect(() => {
      const is_online = online_state();
      if (is_online && !was_online)
        untracked(() => this._scheduleInit());
      was_online = is_online;
    });
    effect(() => {
      this._active_region();
      const building = this._active_building();
      if (building)
        this._updateSettingOverrides();
    });
  }
  _scheduleInit() {
    if (this._init_timer)
      clearTimeout(this._init_timer);
    this._init_timer = setTimeout(() => {
      this._init_timer = null;
      if (!this._initialised()) {
        this._startZoneLoadTimer();
        this.init();
      }
    }, 1e3);
  }
  _startZoneLoadTimer() {
    if (this._zone_load_timer)
      return;
    this._zone_load_timer = setTimeout(() => {
      this._zone_load_timer = null;
      if (!this._initialised())
        requestInitReload();
    }, ZONE_LOAD_TIMEOUT);
  }
  _completeInit() {
    if (this._zone_load_timer)
      clearTimeout(this._zone_load_timer);
    this._zone_load_timer = null;
    this._initialised.set(true);
  }
  /** Resolve once the organisation data has finished initialising */
  async waitUntilInitialised() {
    await firstValueWhere(this.initialised, (state2) => state2, this._injector);
  }
  /**
   * Get level with a matching ID
   * @param id_list List of IDs to find a match
   */
  levelWithID(id_list) {
    for (const id of id_list || []) {
      const level = this._levels_by_id().get(id);
      if (level)
        return level;
    }
    return void 0;
  }
  /** Get the organisation location represented by a list of zone IDs. */
  locationWithID(id_list) {
    const level = this.levelWithID(id_list);
    const building = this._buildingWithID(id_list) || this._buildings_by_id().get(level?.parent_id);
    const region = this._regions_by_id().get(building?.parent_id);
    const label = [region, building, level].map((_) => _?.display_name || _?.name).filter((_) => !!_).join(" / ");
    return { level, building, region, label };
  }
  /** Load and return every building represented by the zone ID lists. */
  async loadBuildingsForZones(zone_lists) {
    const find_buildings = () => unique(zone_lists.map((zones) => this._buildingWithID(zones)).filter((building) => !!building), "id");
    let buildings = find_buildings();
    const has_missing_building = () => zone_lists.some((zones) => !this._buildingWithID(zones));
    if (has_missing_building()) {
      await this._loadAllBuildings();
      buildings = find_buildings();
    }
    return buildings;
  }
  /**
   * Get list of levels for the given building
   * @param bld Building to list levels for
   */
  levelsForBuilding(bld = this.building) {
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && lvl.parent_id === bld?.id));
  }
  /**
   * Get list of buildings for the given region
   * @param region Region to list buildings for
   */
  buildingsForRegion(region = this.region) {
    return this.buildings.filter((bld) => bld.parent_id === region?.id);
  }
  /**
   * Get list of levels for the given region
   * @param region Region to list levels for
   */
  levelsForRegion(region = this.region) {
    const building_ids = new Set(this.buildingsForRegion(region).map(({ id }) => id));
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && building_ids.has(lvl.parent_id)));
  }
  /** Get the first building represented by a list of zone IDs. */
  _buildingWithID(id_list) {
    for (const id of id_list || []) {
      const building = this._buildings_by_id().get(id);
      if (building)
        return building;
    }
    return void 0;
  }
  addZone(zone) {
    if (zone.tags.includes("region")) {
      const region = new Region(zone);
      const regions = this._region_list().filter((_) => _.id !== region.id);
      regions.push(region);
      this._region_list.set(regions);
    } else if (zone.tags.includes("building")) {
      const bld = new Building(zone);
      let buildings = this._building_list().filter((_) => _.id !== bld.id);
      buildings.push(bld);
      buildings = buildings.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      this._building_list.set(buildings);
    } else if (zone.tags.includes("level")) {
      const lvl = new BuildingLevel(zone);
      let levels = this._level_list().filter((_) => _.id !== lvl.id);
      levels.push(lvl);
      levels = this._sortLevels(levels);
      this._level_list.set(levels);
    } else {
      console.warn("Unable to add zone as it is missing the required tag.", zone.id);
    }
  }
  _sortLevels(levels) {
    return [...levels].sort((a, b) => (a.parent_id || "").localeCompare(b.parent_id || "") || Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || "") || (a.display_name || "").localeCompare(b.display_name || ""));
  }
  removeZone(zone) {
    if (zone.tags.includes("region")) {
      const regions = this._region_list().filter((_) => _.id !== zone.id);
      this._region_list.set(regions);
    } else if (zone.tags.includes("building")) {
      const buildings = this._building_list().filter((_) => _.id !== zone.id);
      this._building_list.set(buildings);
    } else if (zone.tags.includes("level")) {
      const levels = this._level_list().filter((_) => _.id !== zone.id);
      this._level_list.set(levels);
    } else {
      console.warn("Unable to remove zone as it is missing the required tag.", zone.id);
    }
  }
  /** Clear cached org data and reload it from PlaceOS. Exposed via window.app.org in debug mode. */
  async reloadMetadata() {
    this._clearCache();
    this._loaded_data = {};
    this._loaded_buildings.set([]);
    await this.load();
  }
  async init(tries = 0) {
    if (this._limited_init()) {
      this._completeInit();
      return;
    }
    this._initialised.set(false);
    if (isPublicMode()) {
      await this.load().catch((err) => {
        console.warn("Organisation loading failed in public mode, using local public organisation data.", err);
        this._setPublicData();
      });
    } else {
      try {
        await this.load();
      } catch (err) {
        if (isOnline() && navigator.onLine !== false) {
          notifyError("Error loading organisation data. Retrying...");
        } else {
          log4.warn("Unable to load organisation data while offline. Retrying...", err);
        }
        setTimeout(() => this.init(tries), Math.min(1e4, 300 * ++tries));
        return;
      }
    }
    if (window.debug) {
      if (!window.app)
        window.app = {};
      window.app.org = this;
      window.org = this;
    }
    this._completeInit();
    if (this._served_cache) {
      log4("Loaded from cache, refreshing organisation data...");
      this._served_cache = false;
      this._loaded_data = {};
      this._refresh(() => this.load());
    }
  }
  /**
   * Run a load straight against the API, ignoring any cached data, so the
   * displayed data is replaced with the latest. Runs in the background.
   */
  async _refresh(load) {
    this._refresh_count.update((count) => count + 1);
    await load().catch((err) => console.warn("Failed to refresh organisation data.", err));
    this._refresh_count.update((count) => count - 1);
  }
  _setPublicData() {
    const region_id = localStorage.getItem("PLACEOS.region") || "public";
    const building_id = localStorage.getItem("KIOSK.building") || localStorage.getItem("PLACEOS.building") || "public-building";
    const level_id = localStorage.getItem("KIOSK.level") || "public-level";
    const organisation = new Organisation({
      id: "public-org",
      name: "Public Organisation",
      tags: ["org"]
    });
    const region = new Region({
      id: region_id,
      name: "Public Region",
      display_name: "Public Region"
    });
    const building = new Building({
      id: building_id,
      parent_id: region.id,
      name: "Public Building",
      display_name: "Public Building"
    });
    const level = new BuildingLevel({
      id: level_id,
      parent_id: building.id,
      name: "Public Level",
      display_name: "Public Level"
    });
    this._organisation = organisation;
    this._region_list.set([region]);
    this._building_list.set([building]);
    this._level_list.set([level]);
    this._active_region.set(region);
    this._active_building.set(building);
    this._updateSettingOverrides();
  }
  /**
   * Initialise service data. When this is a background refresh, loading
   * messages and the default region/building selection are skipped so the
   * user's current view and selection are left alone.
   */
  async load() {
    const refreshing = this._refreshing;
    const loadingMessage = (message2) => refreshing ? null : setLoadingMessage(message2);
    loadingMessage("Loading organisation data...");
    await this.loadOrganisation();
    loadingMessage("Loading region data...");
    await this.loadRegions();
    if (!this._region_list().length) {
      loadingMessage("Loading building data...");
      const list = await this.loadBuildings();
      this._building_list.set(list);
    } else {
      loadingMessage("Loading region buildings data...");
      for (const region of this._region_list()) {
        const blds = await this.loadBuildings(region.id);
        if (blds.length) {
          this._building_list.set(blds);
          break;
        }
      }
    }
    loadingMessage("Loading zone settings...");
    await this.loadSettings();
    if (!this._building_list()?.length) {
      log4("Unable to find any building zones");
    }
    loadingMessage("Loading active building levels...");
    await this.loadLevels();
    if (refreshing) {
      if (this.region?.id)
        await this.loadRegionData(this.region);
      if (this.building?.id && !this._service.get("dont_load_metadata")) {
        await this.loadBuildingData(this.building);
      }
    }
    this._updateSettingOverrides();
  }
  /**
   * Load organisation data for application
   */
  async loadOrganisation() {
    const org_list = await this._queryZones({
      tags: ["org"],
      include_children_count: true
    });
    if (org_list.length) {
      const auth = authority();
      const org = org_list.find((list) => isMock() || list.id === auth?.config?.org_zone) || org_list[0];
      const load_metadata = !this._service.get("dont_load_metadata");
      const bindings = load_metadata ? (await this._bulkMetadataDetails("bindings", [org.id]))[org.id] : {};
      this._organisation = new Organisation(__spreadProps(__spreadValues({}, org), { bindings }));
    } else {
      log4("Unable to find organisation");
      this._router.navigate(["/misconfigured"]);
    }
  }
  /**
   * Load region data for the organisation
   */
  async loadRegions() {
    const list = (await this._queryZones({
      tags: ["region"],
      parent_id: this._organisation?.id ? [this._organisation.id] : void 0,
      limit: 200
    }).catch(() => [])).map((_) => new Region(_));
    this._region_list.set(list);
  }
  async loadRegionData(region) {
    if (this._loaded_data[region.id] && !this._refreshing)
      return;
    const load_metadata = !this._service.get("dont_load_metadata");
    const from_cache = this._zoneDataCached(region.id);
    const [settings2, bindings, buildings] = await Promise.all([
      load_metadata ? this._bulkMetadataDetails(this.app_key, [region.id]).then((_) => _[region.id]) : {},
      load_metadata ? this._bulkMetadataDetails("bindings", [region.id]).then((_) => _[region.id]) : {},
      this.loadBuildings(region.id)
    ]);
    const building_list = unique([...this._building_list(), ...buildings], "id");
    this._building_list.set(building_list);
    this._loaded_data[region.id] = true;
    region.bindings = bindings;
    this._region_settings[region.id] = settings2;
    if (from_cache)
      this._refresh(() => this.loadRegionData(region));
  }
  /**
   * Load buildings data for the organisation
   */
  async loadBuildings(parent_id = this._organisation?.id) {
    const building_list = (await this._queryZones({
      tags: ["building"],
      parent_id: parent_id ? [parent_id] : void 0,
      limit: 500
    })).map((_) => new Building(_));
    return building_list;
  }
  async loadBuildingData(bld) {
    if (!bld || this._loaded_data[bld.id] && !this._refreshing)
      return;
    const from_cache = this._zoneDataCached(bld.id);
    const [settings2, bindings, booking_rules, driver_settings] = await Promise.all([
      this._bulkMetadataDetails(this.app_key, [bld.id]).then((_) => _[bld.id]),
      this._bulkMetadataDetails("bindings", [bld.id]).then((_) => _[bld.id]),
      this._bulkMetadataDetails("booking_rules", [bld.id]).then((_) => _[bld.id])
      // lastValueFrom(
      //     (this.app_key.includes('concierge')
      //         ? querySettings({ parent_id: bld.id })
      //         : of({ data: {} as any })
      //     ).pipe(
      //         catchError(() => of({ data: {} as any })),
      //         map((_) => {
      //             try {
      //                 return parseYAML(
      //                     _?.data.find(
      //                         (_) =>
      //                             _.encryption_level ===
      //                             EncryptionLevel.None,
      //                     ) || { settings_string: '' },
      //                 );
      //             } catch {
      //                 return {};
      //             }
      //         }),
      //     ),
      // ),
    ]);
    this._building_settings[bld.id] = __spreadValues(__spreadValues({}, driver_settings || {}), settings2 || {});
    bld.bindings = bindings;
    bld.booking_rules = booking_rules;
    this._loaded_data[bld.id] = true;
    this._loaded_buildings.update((ids) => ids.includes(bld.id) ? ids : [...ids, bld.id]);
    this._updateSettingOverrides();
    if (from_cache)
      this._refresh(() => this.loadBuildingData(bld));
  }
  /**
   * Whether the zone's settings metadata would be loaded from the cache.
   * Always false while refreshing, so a refresh never schedules another one.
   */
  _zoneDataCached(id) {
    return !!this._getCachedItem(this._metadataCacheKey(this.app_key, [id]));
  }
  /**
   * Load levels data for the buildings
   */
  async loadLevels() {
    let level_list = await this._queryZones({
      tags: ["level"],
      limit: 2500
    });
    level_list = level_list.filter((_) => _.parent_id);
    if (!level_list?.length) {
      this._router.navigate(["/misconfigured"]);
    }
    let levels = level_list.map((lvl) => new BuildingLevel(lvl));
    levels = levels.sort((a, b) => Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || ""));
    this._level_list.set(levels);
  }
  async loadSettings() {
    if (!this._organisation)
      return;
    const org_id = this._organisation?.id;
    const app_settings = (await this._bulkMetadataDetails(this.app_key, [org_id]))[org_id];
    const global_settings = (await this._bulkMetadataDetails("settings", [org_id]))[org_id];
    if (this._destroyed)
      return;
    this._settings = [global_settings, app_settings];
    if (this._override_timer) {
      clearTimeout(this._override_timer);
      this._override_timer = null;
    }
    this._service.setOverrides([...this._settings]);
    if (!this._refreshing)
      await this._setDefaultBuilding();
    this._updateSettingOverrides();
  }
  /** Select the building physically closest to the user's current location */
  async _setBuildingFromGeolocation() {
    return new Promise((resolve) => {
      let settled = false;
      const finish = (building) => {
        if (settled)
          return;
        settled = true;
        clearTimeout(timer2);
        resolve(building);
      };
      const timer2 = setTimeout(() => finish(null), GEOLOCATION_TIMEOUT);
      navigator.geolocation.getCurrentPosition((position) => {
        if (settled)
          return;
        const { latitude, longitude } = position.coords;
        const closest = this._closestBuilding(latitude, longitude);
        if (closest)
          this.building = closest;
        finish(closest);
      }, () => finish(null), { timeout: GEOLOCATION_TIMEOUT });
    });
  }
  /** Find the building nearest to the given coordinates */
  _closestBuilding(latitude, longitude) {
    let closest = null;
    let closest_distance = Infinity;
    for (const bld of this.buildings) {
      if (!bld.location || bld.location === "0,0")
        continue;
      const [lat, long] = bld.location.split(",").map(Number);
      const distance = Math.hypot(latitude - lat, longitude - long);
      if (distance < closest_distance) {
        closest = bld;
        closest_distance = distance;
      }
    }
    return closest;
  }
  /** Find a building by id, loading every region's buildings if not already present */
  async _findBuilding(id) {
    const loaded = this.buildings.find((bld) => bld.id === id);
    if (loaded)
      return loaded;
    await this._loadAllBuildings();
    return this.buildings.find((bld) => bld.id === id) || null;
  }
  /** Load the buildings for every region into the building list */
  async _loadAllBuildings() {
    const lists = await Promise.all(this.regions.map((region) => this.loadBuildings(region.id)));
    this._building_list.set(unique([...this._building_list(), ...lists.flat()], "id"));
  }
  async _setDefaultBuilding() {
    log4("No building set yet, applying defaults...");
    const region_id = localStorage.getItem(`PLACEOS.region`);
    const building_id = sessionStorage.getItem(`PLACEOS.building`) || localStorage.getItem(`PLACEOS.building`);
    const default_id = this._service.get("app.default_building");
    if (!this.buildings.length && !region_id)
      return;
    await (region_id ? this.setRegion(this._region_list().find((_) => _.id === region_id)) : this._setRegionFromTimezone());
    if (!this.buildings.length)
      return;
    const previous = this.buildings.find((_) => _.id === building_id);
    if (previous) {
      log4("Defaulting building to previously selected building.");
      this.building = previous;
      return;
    }
    if (default_id) {
      const configured = await this._findBuilding(default_id);
      if (configured) {
        log4("Applied default building from app settings.");
        const region = this.regions.find((_) => _.id === configured.parent_id);
        if (region)
          await this.setRegion(region);
        this.building = configured;
        return;
      }
      log4(`Configured default building "${default_id}" was not found.`);
    }
    const use_location = !!this._service.get("app.use_geolocation");
    if (use_location && "geolocation" in navigator) {
      const closest = await this._setBuildingFromGeolocation();
      if (closest) {
        log4("Applied default building from user location.");
        return;
      }
    }
    this._setBuildingFromTimezone();
    if (this.building?.id)
      return;
    log4("No default building matched, initialising to first building.");
    this.building = this.buildings[0];
  }
  async _setRegionFromTimezone() {
    const region = this._matchByTimezone(this.regions);
    if (region)
      await this.setRegion(region);
  }
  _setBuildingFromTimezone() {
    if (this._skip_auto_selection)
      return;
    const bld_list = this.buildings.filter((bld) => !this.region || bld.parent_id === this.region?.id);
    const building = this._matchByTimezone(bld_list);
    if (building) {
      this.building = building;
      log4("Applied default building from user's timezone.");
    }
  }
  /** Match the item whose timezone equals the user's, else one in the same region */
  _matchByTimezone(list) {
    const timezone = this.timezone;
    const exact = list.find((_) => _.timezone === timezone);
    if (exact)
      return exact;
    const tz_start = timezone.split("/")[0];
    return list.find((_) => _.timezone?.startsWith(tz_start));
  }
  /** Stop settings overrides so a late load cannot apply them after teardown */
  ngOnDestroy() {
    this._destroyed = true;
    if (this._override_timer)
      clearTimeout(this._override_timer);
    this._override_timer = null;
  }
  _updateSettingOverrides() {
    if (this._override_timer)
      clearTimeout(this._override_timer);
    if (this._destroyed)
      return;
    this._override_timer = setTimeout(() => this._service.setOverrides([
      this.buildingSettings(this.building?.id),
      this.regionSettings(this.region?.id),
      ...this._settings
    ]), 300);
  }
  async _bulkMetadataDetails(name, ids) {
    const parent_ids = ids.filter(Boolean);
    if (!parent_ids.length)
      return {};
    const cache_key = this._metadataCacheKey(name, ids);
    const cached_metadata = this._getCachedItem(cache_key);
    if (cached_metadata)
      return cached_metadata;
    const metadata4 = await metadata_exports.bulkFetch({ name, parent_ids }).then(orThrow).catch((err) => err?.status === 404 ? this._individualMetadata(name, ids) : {});
    const metadata_details = ids.reduce((map2, id) => {
      map2[id] = metadata4[id]?.details || {};
      return map2;
    }, {});
    this._setCachedItem(cache_key, metadata_details);
    return metadata_details;
  }
  /** Fallback for backends without the bulk metadata endpoint (404) */
  async _individualMetadata(name, ids) {
    const items = await Promise.all(ids.filter(Boolean).map((id) => metadata_exports.show({ id, name }).then(orThrow).then((data) => data[name]).then((item) => [id, item], () => [id, null])));
    const metadata4 = {};
    for (const [id, item] of items) {
      if (item)
        metadata4[id] = item;
    }
    return metadata4;
  }
  async _queryZones(params) {
    const cache_key = this._zoneCacheKey(params);
    const cached_zones = this._getCachedItem(cache_key);
    if (cached_zones)
      return cached_zones;
    const zones = [
      ...(await zones_exports.query(params).then(orThrowPage)).data || []
    ];
    this._setCachedItem(cache_key, zones);
    return zones;
  }
  _metadataCacheKey(name, ids) {
    const auth = cachedAuthority();
    const parent_ids = ids.filter(Boolean).sort().join(",");
    return `${METADATA_CACHE_PREFIX}.${auth?.id || "default"}.${name}.${parent_ids}`;
  }
  /**
   * Cache key of a zone query. A list filter, such as `tags`, is a comma
   * separated string, as in 6.x, so the keys of 6.x caches still match.
   */
  _zoneCacheKey(params) {
    const auth = cachedAuthority();
    const sorted_params = Object.keys(params).sort().reduce((cache_params, key) => {
      const value = params[key];
      cache_params[key] = Array.isArray(value) ? value.join(",") : value;
      return cache_params;
    }, {});
    return `${ZONE_CACHE_PREFIX}.${auth?.id || "default"}.${JSON.stringify(sorted_params)}`;
  }
  _getCachedItem(cache_key) {
    if (this._refreshing)
      return null;
    try {
      const cached_item = JSON.parse(localStorage.getItem(cache_key) || "null");
      if (!cached_item)
        return null;
      if (cached_item.metadata_cache_id !== this._metadataCacheID() || cached_item.cached_at + MAX_CACHE_AGE2 < Date.now()) {
        localStorage.removeItem(cache_key);
        return null;
      }
      this._served_cache = true;
      return cached_item.data;
    } catch {
      localStorage.removeItem(cache_key);
      return null;
    }
  }
  _setCachedItem(cache_key, data) {
    const cached_item = {
      cached_at: Date.now(),
      metadata_cache_id: this._metadataCacheID(),
      data
    };
    const value = JSON.stringify(cached_item);
    try {
      localStorage.setItem(cache_key, value);
    } catch {
      this._clearCache();
      try {
        localStorage.setItem(cache_key, value);
      } catch {
      }
    }
  }
  _metadataCacheID() {
    return `${cachedAuthority()?.metadata_cache_id || ""}`;
  }
  _clearCache() {
    for (const store of [localStorage, sessionStorage]) {
      for (let i = store.length - 1; i >= 0; i--) {
        const key = store.key(i);
        if (key?.startsWith(ORG_CACHE_PREFIX))
          store.removeItem(key);
      }
    }
  }
  static {
    this.\u0275fac = function OrganisationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganisationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganisationService, factory: _OrganisationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/api.ts
var IGNORE_VALUES = [void 0, null, ""];
function toQueryString(map2) {
  let str = "";
  if (map2) {
    for (const key in map2) {
      if (key in map2 && !IGNORE_VALUES.includes(map2[key])) {
        str += `${str ? "&" : ""}${key}=${encodeURIComponent(map2[key])}`;
      }
    }
  }
  return str;
}

// libs/common/src/lib/types.ts
var MAP_FEATURE_DATA = new InjectionToken("Data for Map Features");

// libs/common/src/lib/console-history.service.ts
var MAX_HISTORY = 2e4;
var ConsoleHistoryService = class _ConsoleHistoryService {
  constructor() {
    this._history = signal(
      [],
      ...ngDevMode ? [{ debugName: "_history" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._unlisten = listenToConsole((method, args) => untracked(() => this._record(method, args)));
    this.history = this._history.asReadonly();
  }
  ngOnDestroy() {
    this._unlisten();
  }
  _record(method, args) {
    const data = [...args];
    if (typeof data[0] === "string") {
      data[0] = data[0].replace(/%c/g, "");
    }
    const event = {
      id: `console-${randomInt(9999999999)}`,
      type: "console",
      subtype: method,
      timestamp: Date.now(),
      data: data.filter((_) => typeof _ !== "string" || !_.startsWith("color:"))
    };
    this._history.update((history3) => [...history3, event].slice(-MAX_HISTORY));
  }
  static {
    this.\u0275fac = function ConsoleHistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsoleHistoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsoleHistoryService, factory: _ConsoleHistoryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleHistoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
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
var VERSION2 = /* @__PURE__ */ new Version("22.1.5");
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
  const versionSubDomain = VERSION2.major !== "0" ? `v${VERSION2.major}.` : "";
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
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      this._onChange?.();
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input2) {
    return input2 != null;
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
  normalizeInput = (input2) => toFloat(input2);
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
  normalizeInput = (input2) => toFloat(input2);
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
  createValidator = (input2) => requiredValidator;
  enabled(input2) {
    return input2;
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
  createValidator = (input2) => requiredTrueValidator;
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
  createValidator = (input2) => emailValidator;
  enabled(input2) {
    return input2;
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
  normalizeInput = (input2) => toInteger(input2);
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
  normalizeInput = (input2) => toInteger(input2);
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
  normalizeInput = (input2) => input2;
  createValidator = (input2) => patternValidator(input2);
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

// libs/common/src/lib/booking-rules.ts
var MINUTE = 1;
var HOUR = 60;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 30 * DAY;
var DURATION_MAP = {
  month: MONTH,
  months: MONTH,
  week: WEEK,
  weeks: WEEK,
  day: DAY,
  days: DAY,
  hour: HOUR,
  hours: HOUR,
  minute: MINUTE,
  minutes: MINUTE
};
var DEFAULT_RULES = {
  auto_approve: true,
  hidden: false
};
function stringToMinutes(str) {
  const parts = (str || "").split(" ");
  return parts.length > 1 ? +parts[0] * DURATION_MAP[parts[1].toLowerCase()] : 0;
}
function addToDate(add2, date = /* @__PURE__ */ new Date()) {
  return addMinutes(date, stringToMinutes(add2));
}
function filterResourcesFromRules(resources, details, ruleset_list) {
  return resources.filter((_) => !rulesForResource(__spreadProps(__spreadValues({}, details), { resource: _ }), ruleset_list)?.hidden);
}
function rulesForResource(details, ruleset_list) {
  if (!(ruleset_list instanceof Array))
    return DEFAULT_RULES;
  for (const ruleset of ruleset_list) {
    if (ruleset.zone === "*" || ruleset.zone === details.resource.zone?.id || details.resource.zones?.includes(ruleset.zone)) {
      if (checkRulesMatch(details, ruleset)) {
        if (window.debug_booking_rules) {
          console.log("Matched Ruleset:", details.resource.id, details, ruleset);
        }
        return ruleset.rules;
      }
    }
  }
  if (window.debug_booking_rules) {
    console.log("No Matched Ruleset:", details.resource.id, details, DEFAULT_RULES);
  }
  return DEFAULT_RULES;
}
function checkRulesMatch({ date, duration, host, resource }, ruleset) {
  const date_obj = new Date(date);
  let matches = 0;
  const { conditions } = ruleset;
  if (!conditions)
    return true;
  if (conditions.groups instanceof Array && conditions.groups.every((_) => host?.groups?.includes(_)))
    matches += 1;
  if (conditions.is_before && isBefore(addMinutes(date, duration), addToDate(conditions.is_before)))
    matches += 1;
  if (conditions.is_after && isAfter(date, addToDate(conditions.is_after)))
    matches += 1;
  if (conditions.min_length && conditions.min_length <= duration)
    matches += 1;
  if (conditions.is_between && date_obj.getHours() + date_obj.getMinutes() / 60 >= conditions.is_between[0] && date_obj.getHours() + date_obj.getMinutes() / 60 < conditions.is_between[1])
    matches += 1;
  if (conditions.is_period && date >= conditions.is_period[0] && date < conditions.is_period[1])
    matches += 1;
  if (conditions.max_length && conditions.max_length >= duration)
    matches += 1;
  if (conditions.resource_ids && [resource.id, resource.map_id, resource.place_id].some((id) => id && conditions.resource_ids.includes(id)))
    matches += 1;
  if (conditions.tags && conditions.tags.every((tag) => (resource.tags || []).find((t) => t === tag)))
    matches += 1;
  if (conditions.locations && conditions.locations.includes(resource.name))
    matches += 1;
  return matches >= Object.keys(conditions).length;
}

// libs/common/src/lib/external-catering.service.ts
var EXTERNAL_CATERING_BINDING = "catering";
var ExternalCateringService = class _ExternalCateringService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
  }
  /** Whether the external backend should be used instead of native catering */
  get enabled() {
    return this._settings.get("app.catering.backend") === "external";
  }
  _module() {
    const mod = this._org.module(EXTERNAL_CATERING_BINDING, "Catering");
    if (!mod) {
      throw new Error("External catering enabled but no `catering` module binding is configured");
    }
    return mod;
  }
  /** Load the full catering menu from the external catering driver, mapped to native `CateringItem`s */
  async loadMenu() {
    const mod = this._module();
    const items = [];
    let page = 1;
    while (page <= 50) {
      const response = await mod.execute("products", [page]).catch(() => null);
      const products = response?.items || [];
      for (const product of products) {
        if (product.status && product.status !== "active")
          continue;
        items.push(toCateringItem(product));
      }
      if (!response?.next_page || !products.length)
        break;
      page += 1;
    }
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }
  /**
   * Place each catering order in the event against the external catering platform.
   *
   * Returns a external reference per placed order (aligned to the filtered list
   * of orders that had items) so the caller can store local booking records
   * that point back at the external order.
   */
  async placeOrders(event, orders) {
    const valid = (orders || []).filter((order) => order.items.length);
    if (!valid.length)
      return [];
    const mod = this._module();
    const user = currentUser();
    const customer = await mod.execute("match_or_create_customer", [
      {
        email: user?.email || "",
        first_name: user?.first_name || user?.name || "",
        last_name: user?.last_name || ""
      }
    ]);
    const customer_name = [customer?.first_name, customer?.last_name].filter((_) => !!_).join(" ").trim() || customer?.email || user?.name || "";
    const delivery_address = event.space?.display_name || event.space?.name || this._org.building?.display_name || this._org.building?.name || "";
    const placed = [];
    for (const order of valid) {
      const order_items = order.items.map((item) => ({
        product_name: item.name,
        price: centsToCurrency(item.unit_price_with_options),
        quantity: item.quantity
      }));
      const response = await mod.execute("create_external_order", [
        event.id,
        // purchase_order_number
        customer_name,
        // customer_name
        delivery_address,
        // delivery_address
        format(order.deliver_at, "yyyy-MM-dd'T'HH:mm:ss"),
        // delivery_datetime
        centsToCurrency(order.total_cost),
        // grand_total
        order_items,
        // order_items
        "",
        // company_name
        "",
        // phone_number
        event.attendees?.length || 0,
        // number_of_guests
        0,
        // delivery_fee
        0,
        // discount
        order.notes || ""
        // delivery_instruction
      ]);
      placed.push({
        order,
        reference: {
          customer_uuid: customer?.uuid || "",
          customer_name,
          purchase_order_number: event.id,
          response
        }
      });
    }
    return placed;
  }
  static {
    this.\u0275fac = function ExternalCateringService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalCateringService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExternalCateringService, factory: _ExternalCateringService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalCateringService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function toCateringItem(product) {
  return new CateringItem({
    id: product.uuid,
    name: product.name,
    category: product.product_categories?.[0]?.name || "",
    caterer: product.supplier?.name || "",
    description: product.description || "",
    unit_price: Math.round((product.price || 0) * 100),
    images: (product.product_images || []).map((image) => image.medium_image_url || image.file_url || "").filter((_) => !!_),
    tags: (product.dietaries || []).map((diet) => diet.name)
  });
}
function centsToCurrency(cents) {
  return Math.round(cents) / 100;
}

// libs/common/src/lib/lazy-route-reload.ts
var LAZY_ROUTE_RELOAD_KEY = "placeos.lazy_route_reload";
var RELOAD_THROTTLE = 30 * 1e3;
var LAZY_ROUTE_ERROR_PATTERNS = [
  /ChunkLoadError/i,
  /Loading chunk [\w-]+ failed/i,
  /Failed to fetch dynamically imported module/i,
  /Importing a module script failed/i,
  /error loading dynamically imported module/i
];
function isLazyRouteLoadError(error) {
  const message2 = getLazyRouteErrorMessage(error);
  return LAZY_ROUTE_ERROR_PATTERNS.some((pattern) => pattern.test(message2));
}
function reloadOnChunkLoadError(error, context = {}) {
  if (!isLazyRouteLoadError(error))
    throw error;
  const online = context.online ?? (typeof navigator !== "undefined" ? navigator.onLine : true);
  if (!online)
    throw error;
  const storage = context.storage ?? sessionStorage;
  const location_ref = context.location ?? location;
  const now = context.now ?? Date.now();
  const signature = `${location_ref.pathname}${location_ref.search}${location_ref.hash}:${getLazyRouteErrorMessage(error)}`;
  const reload_state = parseReloadState(storage.getItem(LAZY_ROUTE_RELOAD_KEY));
  if (reload_state?.signature === signature && now - reload_state.timestamp < RELOAD_THROTTLE) {
    throw error;
  }
  storage.setItem(LAZY_ROUTE_RELOAD_KEY, JSON.stringify({ signature, timestamp: now }));
  log2("ROUTER", "Lazy route load failed. Reloading application...", error, "warn", true);
  location_ref.reload();
}
function getLazyRouteErrorMessage(error) {
  if (typeof error === "string")
    return error;
  if (error instanceof Error) {
    return `${error.name}: ${error.message}`;
  }
  if (error && typeof error === "object") {
    const name = "name" in error ? `${error.name || ""}` : "";
    const message2 = "message" in error ? `${error.message || ""}` : "";
    return `${name}: ${message2}`.trim();
  }
  return `${error || ""}`;
}
function parseReloadState(state2) {
  if (!state2)
    return null;
  try {
    const parsed_state = JSON.parse(state2);
    if (typeof parsed_state?.signature === "string" && typeof parsed_state?.timestamp === "number") {
      return parsed_state;
    }
  } catch {
  }
  return null;
}

// libs/common/src/lib/recurrence.ts
var WeekOfMonth;
(function(WeekOfMonth2) {
  WeekOfMonth2[WeekOfMonth2["First"] = 1] = "First";
  WeekOfMonth2[WeekOfMonth2["Second"] = 2] = "Second";
  WeekOfMonth2[WeekOfMonth2["Third"] = 3] = "Third";
  WeekOfMonth2[WeekOfMonth2["Fourth"] = 4] = "Fourth";
  WeekOfMonth2[WeekOfMonth2["Fifth"] = 5] = "Fifth";
  WeekOfMonth2[WeekOfMonth2["Last"] = -1] = "Last";
  WeekOfMonth2[WeekOfMonth2["SecondLast"] = -2] = "SecondLast";
  WeekOfMonth2[WeekOfMonth2["ThirdLast"] = -3] = "ThirdLast";
  WeekOfMonth2[WeekOfMonth2["FourthLast"] = -4] = "FourthLast";
  WeekOfMonth2[WeekOfMonth2["FifthLast"] = -5] = "FifthLast";
})(WeekOfMonth || (WeekOfMonth = {}));
var RecurrDays;
(function(RecurrDays2) {
  RecurrDays2[RecurrDays2["SUNDAY"] = 1] = "SUNDAY";
  RecurrDays2[RecurrDays2["MONDAY"] = 2] = "MONDAY";
  RecurrDays2[RecurrDays2["TUESDAY"] = 4] = "TUESDAY";
  RecurrDays2[RecurrDays2["WEDNESDAY"] = 8] = "WEDNESDAY";
  RecurrDays2[RecurrDays2["THURSDAY"] = 16] = "THURSDAY";
  RecurrDays2[RecurrDays2["FRIDAY"] = 32] = "FRIDAY";
  RecurrDays2[RecurrDays2["SATURDAY"] = 64] = "SATURDAY";
  RecurrDays2[RecurrDays2["ALL"] = 127] = "ALL";
})(RecurrDays || (RecurrDays = {}));
var DAYS_OF_WEEK_INDEX = [
  RecurrDays.SUNDAY,
  RecurrDays.MONDAY,
  RecurrDays.TUESDAY,
  RecurrDays.WEDNESDAY,
  RecurrDays.THURSDAY,
  RecurrDays.FRIDAY,
  RecurrDays.SATURDAY
];
var WEEK_MS = 7 * 24 * 60 * 60 * 1e3;
function weekOfMonth(date) {
  const date_obj = new Date(date);
  const day = date_obj.getDate();
  const week = Math.floor(day / 7) + (day % 7 ? 1 : 0);
  if (week === 4 && day >= 25 || week === 5)
    return -1;
  return week;
}
function monthlyWeekdayStart(date, week, day_of_week) {
  const date_obj = new Date(date);
  const year = date_obj.getFullYear();
  const month = date_obj.getMonth();
  let day_of_month;
  if (week < 0) {
    const last_day = new Date(year, month + 1, 0);
    day_of_month = last_day.getDate() - (last_day.getDay() - day_of_week + 7) % 7 + (week + 1) * 7;
  } else {
    const first_day = new Date(year, month, 1);
    day_of_month = 1 + (day_of_week - first_day.getDay() + 7) % 7 + (week - 1) * 7;
  }
  const recurrence_date = new Date(date);
  recurrence_date.setDate(day_of_month);
  if (recurrence_date.getMonth() !== month) {
    recurrence_date.setDate(day_of_month - 7);
  }
  return recurrence_date.valueOf();
}
function startOfWeekMs(date) {
  const date_obj = new Date(date);
  date_obj.setDate(date_obj.getDate() - date_obj.getDay());
  date_obj.setHours(0, 0, 0, 0);
  return date_obj.valueOf();
}
function validWeekdays(days) {
  if (!days?.size)
    return [];
  return Array.from(days).filter((day) => day >= 0 && day < 7).sort((a, b) => a - b);
}
function recurrenceInstanceCount(value) {
  const count = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  return Number.isFinite(count) && count >= 1 ? Math.floor(count) : void 0;
}
function isWeeklyInstance(date, start_date, interval, weekdays) {
  const day = new Date(date).getDay();
  const days = validWeekdays(weekdays);
  if (days.length && !days.includes(day))
    return false;
  const weeks = Math.floor((startOfWeekMs(date) - startOfWeekMs(start_date)) / WEEK_MS);
  return weeks >= 0 && weeks % Math.max(interval, 1) === 0;
}
function firstRecurrenceInstance(recurrence, date = Date.now()) {
  if (recurrence.type === "weekly") {
    for (let offset = 0; offset < 7 * Math.max(recurrence.interval, 1); offset++) {
      const candidate = addDays(date, offset).valueOf();
      if (isWeeklyInstance(candidate, date, recurrence.interval, recurrence.weekdays)) {
        return candidate;
      }
    }
  }
  if (recurrence.type === "monthly" && recurrence.monthly_type === "day_of_week" && recurrence.weekdays?.size) {
    const day = validWeekdays(recurrence.weekdays)[0];
    const week = recurrence.week || weekOfMonth(date);
    for (let offset = 0; offset <= Math.max(recurrence.interval, 1); offset++) {
      const candidate = monthlyWeekdayStart(addMonths(date, offset).valueOf(), week, day);
      if (candidate >= date)
        return candidate;
    }
  }
  return date;
}
function recurrenceEndDate(recurrence, date = Date.now()) {
  const instances = Math.max((recurrenceInstanceCount(recurrence.end_instances) || 1) - 1, 0);
  const interval = Math.max(recurrence.interval, 1);
  const first_instance = firstRecurrenceInstance(recurrence, date);
  if (recurrence.type === "daily") {
    return endOfDay(addDays(first_instance, interval * instances)).valueOf();
  }
  if (recurrence.type === "weekly") {
    const days = validWeekdays(recurrence.weekdays);
    if (days.length > 1) {
      let count = 0;
      let candidate = first_instance;
      while (count < instances) {
        candidate = addDays(candidate, 1).valueOf();
        if (isWeeklyInstance(candidate, date, interval, recurrence.weekdays)) {
          count++;
        }
      }
      return endOfDay(candidate).valueOf();
    }
    return endOfDay(addWeeks(first_instance, interval * instances)).valueOf();
  }
  if (recurrence.type === "monthly" && recurrence.monthly_type === "day_of_week" && recurrence.weekdays?.size) {
    const day = validWeekdays(recurrence.weekdays)[0];
    const week = recurrence.week || weekOfMonth(date);
    return endOfDay(monthlyWeekdayStart(addMonths(first_instance, interval * instances).valueOf(), week, day)).valueOf();
  }
  if (recurrence.type === "yearly") {
    return endOfDay(addYears(first_instance, interval * instances)).valueOf();
  }
  return endOfDay(addMonths(first_instance, interval * instances)).valueOf();
}
function fromEventRecurrence(r) {
  if (!r.pattern || r._pattern === "none") {
    return {
      _custom: false,
      type: "none",
      interval: 1,
      end_type: "never"
    };
  }
  const occurrences = recurrenceInstanceCount(r.occurrences);
  const recurr = {
    _custom: r._pattern == "custom_display",
    type: r.pattern,
    interval: r.interval || 1,
    end_type: r._end_type ?? (occurrences ? "instances" : r.end ? "date" : "never")
  };
  if (r.end)
    recurr.end_date = r.end;
  if (occurrences)
    recurr.end_instances = occurrences;
  if (r.pattern === "weekly" && r.days_of_week?.length) {
    recurr.weekdays = new Set(r.days_of_week);
  }
  if (r.pattern === "monthly") {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_week";
    if (r.days_of_week?.length) {
      recurr.weekdays = new Set(r.days_of_week);
    }
    if (r.nth_of_month) {
      recurr.week = r.nth_of_month;
    } else if (r.start) {
      recurr.week = weekOfMonth(r.start);
    }
  }
  if (r.pattern === "month_day" && r.days_of_week?.length) {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_week";
    recurr.weekdays = new Set(r.days_of_week);
    if (r.nth_of_month) {
      recurr.week = r.nth_of_month;
    } else if (r.start) {
      recurr.week = weekOfMonth(r.start);
    }
  } else if (r.pattern === "month_day") {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_month";
  }
  return recurr;
}
function toBookingRecurrence(r, date = Date.now()) {
  if (r.type === "none") {
    return {
      recurrence_custom: false,
      recurrence_type: "none",
      recurrence_days: void 0,
      recurrence_nth_of_month: void 0,
      recurrence_interval: void 0,
      recurrence_end: void 0,
      recurrence_instances: void 0
    };
  }
  const booking = {
    recurrence_custom: r._custom,
    recurrence_type: r.type === "yearly" ? "monthly" : r.type,
    recurrence_days: void 0,
    recurrence_nth_of_month: void 0,
    recurrence_interval: r.type === "yearly" ? r.interval * 12 : r.interval,
    recurrence_end: void 0,
    recurrence_instances: void 0
  };
  if (r.end_type === "date" && r.end_date) {
    booking.recurrence_end = getUnixTime(r.end_date);
  } else if (r.end_type === "instances") {
    booking.recurrence_instances = recurrenceInstanceCount(r.end_instances);
    booking.recurrence_end = getUnixTime(recurrenceEndDate(r, date));
  }
  if (r.type === "daily") {
    booking.recurrence_days = RecurrDays.ALL;
  }
  if (r.type === "weekly" && r.weekdays) {
    let days = 0;
    r.weekdays.forEach((day) => {
      days |= DAYS_OF_WEEK_INDEX[day];
    });
    booking.recurrence_days = days;
    booking.recurrence_type = "daily";
  }
  if ((r.type === "monthly" || r.type === "yearly") && r.weekdays) {
    let days = 0;
    r.weekdays.forEach((day) => {
      days |= 1 << day;
    });
    booking.recurrence_days = days;
  }
  if ((r.type === "monthly" || r.type === "yearly") && r.week) {
    booking.recurrence_nth_of_month = r.week;
  }
  return booking;
}

// libs/common/src/lib/remote-setup.ts
var REMOTE_SETUP_MOCK_SYSTEM = "sys-remote-setup";
var REMOTE_SETUP_MODULE = "RemoteSetup";
var REMOTE_SETUP_CLEAR_LIST = "clear_list";
var REMOTE_SETUP_CLEAR_SYSTEMS = "clear_systems";
var HEARTBEAT_MS = 15 * 60 * 1e3;
var REGISTER_SPREAD_MS2 = 10 * 1e3;
var LAST_COMMAND_KEY = "PLACEOS.remote_setup.last_command";
var CLEAR_STATE_KEY = "PLACEOS.remote_setup.clear_systems";
var MAX_HANDLED_CLEARS = 20;
var MAX_SYSTEM_CLEARS = 1e3;
function remoteSetupModule() {
  const value = authority()?.config?.["remote_setup"];
  const config = value && typeof value === "object" && !Array.isArray(value) ? value : null;
  const system_id = config?.["system_id"] || (isMock() ? REMOTE_SETUP_MOCK_SYSTEM : "");
  if (!system_id)
    return null;
  return getModule(`${system_id}`, `${config?.["module"] || REMOTE_SETUP_MODULE}`);
}
function remoteSetupCommandBinding(device_id) {
  return `device_${device_id}`;
}
function isRemoteSetupCommand(value) {
  if (!value || typeof value !== "object")
    return false;
  const command = value;
  if (typeof command.id !== "string" || !command.id)
    return false;
  const system_id = command.config?.system_id;
  return typeof system_id === "string" && !!system_id;
}
function remoteSetupClearList(value) {
  return Array.isArray(value) ? value.filter((id) => typeof id === "string") : [];
}
function remoteSetupClearSystems(value) {
  if (!Array.isArray(value))
    return [];
  return value.filter((entry) => !!entry && typeof entry === "object" && typeof entry.id === "string" && typeof entry.app === "string" && typeof entry.system_id === "string" && !!entry.system_id);
}
var RemoteSetupService = class _RemoteSetupService extends AsyncHandler {
  constructor() {
    super();
    this._target = signal(
      null,
      ...ngDevMode ? [{ debugName: "_target" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._connected = signal(
      false,
      ...ngDevMode ? [{ debugName: "_connected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._setup_screens = signal(
      0,
      ...ngDevMode ? [{ debugName: "_setup_screens" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._url_setting = settingSignal("remote_setup_url", "");
    this._module = null;
    this._clearing = false;
    this.device_id = deviceId();
    this.available = computed(
      () => !!this._target() && this._connected(),
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setup_url = computed(
      () => {
        const target = this._target();
        if (!target)
          return "";
        const base = this._url_setting() || `${apiOrigin()}${target.default_path}`;
        const separator = base.includes("?") ? "&" : "?";
        return `${base}${separator}device=${encodeURIComponent(this.device_id)}`;
      },
      ...ngDevMode ? [{ debugName: "setup_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const target = this._target();
      if (!target || !initialisationComplete()())
        return;
      untracked(() => this._connect());
    });
    effect(() => {
      const register = this.available() && this._setup_screens() > 0;
      untracked(() => register ? this._startRegister() : this._stopRegister());
    });
  }
  /** Listen for remote setup commands for this application */
  start(target) {
    this._target.set(target);
  }
  /**
   * Tell the service that a setup screen shows. The device registers while
   * a setup screen shows. Call the returned function when it closes.
   */
  showSetupScreen() {
    this._setup_screens.update((count) => count + 1);
    let closed = false;
    return () => {
      if (closed)
        return;
      closed = true;
      this._setup_screens.update((count) => count - 1);
    };
  }
  async _connect() {
    await syncNativeManagedConfig();
    if (getNativeSystemId()) {
      log2("RemoteSetup", "System is set by MDM managed config");
      return;
    }
    const mod = remoteSetupModule();
    if (!mod) {
      log2("RemoteSetup", "No remote setup system on this domain");
      return;
    }
    this._module = mod;
    this.subscription("connected", mod.variable("connected").subscribe((value) => this._connected.set(value === true)));
    this.subscription("command", mod.variable(remoteSetupCommandBinding(this.device_id)).subscribe((value) => this._applyCommand(value)));
    this.subscription("clear", mod.variable(REMOTE_SETUP_CLEAR_LIST).subscribe((value) => this._applyClearList(value)));
    this.subscription("clear_systems", mod.variable(REMOTE_SETUP_CLEAR_SYSTEMS).subscribe((value) => this._applyClearSystems(value)));
  }
  /**
   * Register after a random wait, then again at each heartbeat. The random
   * wait also sets when the heartbeat occurs, so the heartbeats of devices
   * that start at the same time stay spread.
   */
  _startRegister() {
    this.timeout("register", () => {
      this._register();
      this.interval("heartbeat", () => this._register(), HEARTBEAT_MS);
    }, Math.random() * REGISTER_SPREAD_MS2);
  }
  _stopRegister() {
    this.clearTimeout("register");
    this.clearInterval("heartbeat");
  }
  /** Add this device to the devices that wait for setup */
  _register() {
    const target = this._target();
    if (!this._module || !target)
      return;
    this._module.execute("register", [this.device_id, target.app]).catch((error) => log2("RemoteSetup", "Failed to register", error, "warn"));
  }
  /**
   * Apply a configure command from the driver once, then tell the driver
   * it is complete. The command ID is saved first, so a reload during the
   * change does not apply the command again. A failed command is not
   * completed. A failed `complete` call is not sent again. The driver
   * removes stale commands in both cases.
   */
  async _applyCommand(value) {
    const target = this._target();
    if (!target || !this._module || !isRemoteSetupCommand(value))
      return;
    if (localStorage.getItem(LAST_COMMAND_KEY) === value.id)
      return;
    localStorage.setItem(LAST_COMMAND_KEY, value.id);
    log2("RemoteSetup", "Applying configure command", value);
    if (!await this._apply(target, value.config))
      return;
    await this._module.execute("complete", [this.device_id, value.id, target.app]).catch((error) => log2("RemoteSetup", "Failed to complete command", error, "warn"));
  }
  /**
   * Clear the device when its ID is in the clear list. The driver removes
   * the ID when the device registers from its setup screen. Thus a device
   * that shows its setup screen is already clear.
   */
  async _applyClearList(value) {
    if (!remoteSetupClearList(value).includes(this.device_id))
      return;
    await this._clear();
  }
  /**
   * Clear the device when an entry in the clear systems list has its app
   * and system. An entry applies only when it arrives after the device got
   * its system: when the system changes, the entries that the device saw
   * before the change are handled without a clear. The device also
   * applies each entry one time only. The driver removes the entries after
   * a time limit.
   */
  async _applyClearSystems(value) {
    const target = this._target();
    if (!target)
      return;
    const system_id = target.system_id() || null;
    const entries = remoteSetupClearSystems(value).filter((item) => item.app === target.app);
    const matching = entries.filter((item) => !!system_id && item.system_id === system_id);
    const last = readClearState();
    const handled = last?.handled ?? [];
    if (!last || last.system_id !== system_id) {
      const before = last ? last.seen : entries.map((item) => item.id);
      for (const item of matching) {
        if (before.includes(item.id))
          handled.push(item.id);
      }
    }
    const entry = matching.find((item) => !handled.includes(item.id));
    if (entry)
      handled.push(entry.id);
    saveClearState({
      system_id,
      seen: entries.map((item) => item.id).slice(-MAX_SYSTEM_CLEARS),
      handled: handled.slice(-MAX_HANDLED_CLEARS)
    });
    if (entry)
      await this._clear();
  }
  /** Clear the configuration on this device, when it is set up */
  async _clear() {
    const target = this._target();
    if (!target || this._clearing || this._setup_screens() > 0)
      return;
    log2("RemoteSetup", "Clearing the device configuration");
    this._clearing = true;
    await this._apply(target, null);
    this._clearing = false;
  }
  /** Apply a change. Resolves `true` when the change went through */
  async _apply(target, config) {
    try {
      return await target.apply(config) !== false;
    } catch (error) {
      log2("RemoteSetup", "Failed to apply change", error, "warn");
      return false;
    }
  }
  static {
    this.\u0275fac = function RemoteSetupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteSetupService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteSetupService, factory: _RemoteSetupService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteSetupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();
function readClearState() {
  try {
    const state2 = JSON.parse(localStorage.getItem(CLEAR_STATE_KEY) || "null");
    if (!state2 || typeof state2 !== "object")
      return null;
    return {
      system_id: typeof state2.system_id === "string" ? state2.system_id : null,
      seen: remoteSetupClearList(state2.seen),
      handled: remoteSetupClearList(state2.handled)
    };
  } catch {
    return null;
  }
}
function saveClearState(state2) {
  try {
    localStorage.setItem(CLEAR_STATE_KEY, JSON.stringify(state2));
  } catch {
  }
}

// libs/common/src/lib/value-accessor.ts
function provideValueAccessor(component) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(component),
    multi: true
  };
}

// libs/common/src/lib/types/booking.class.ts
var IGNORE_EXT_KEYS = ["user", "booked_by", "resources", "assets", "members"];
var RecurrenceDays;
(function(RecurrenceDays2) {
  RecurrenceDays2[RecurrenceDays2["SUNDAY"] = 1] = "SUNDAY";
  RecurrenceDays2[RecurrenceDays2["MONDAY"] = 2] = "MONDAY";
  RecurrenceDays2[RecurrenceDays2["TUESDAY"] = 4] = "TUESDAY";
  RecurrenceDays2[RecurrenceDays2["WEDNESDAY"] = 8] = "WEDNESDAY";
  RecurrenceDays2[RecurrenceDays2["THURSDAY"] = 16] = "THURSDAY";
  RecurrenceDays2[RecurrenceDays2["FRIDAY"] = 32] = "FRIDAY";
  RecurrenceDays2[RecurrenceDays2["SATURDAY"] = 64] = "SATURDAY";
})(RecurrenceDays || (RecurrenceDays = {}));
var DAY_MINUTES = 24 * 60;
function resolveAssetName(data, booking_type) {
  const ext = data.extension_data;
  const name = data.asset_name || ext?.asset_name || ext?.name;
  if (booking_type === "visitor") {
    return ext?.visitor_name || name || data.asset_id || "";
  }
  return name || data.description || data.asset_id || "";
}
function resolveUnixWindow(data) {
  const duration = data.duration || 60;
  if (data.date) {
    const start3 = Math.floor(data.date / 1e3);
    return { start: start3, end: start3 + duration * 60 };
  }
  const start2 = data.booking_start || getUnixTime(roundToNearestMinutes(addMinutes(Date.now(), 5), {
    nearestTo: 5
  }));
  return {
    start: start2,
    end: data.booking_end || getUnixTime(addMinutes(start2 * 1e3, duration))
  };
}
function toBookingWindow(data, start2, end) {
  const date = data.date || start2 * 1e3 || Date.now();
  const span = Math.abs(differenceInMinutes(start2 * 1e3, end * 1e3));
  const duration = data.booking_end ? span || 60 : data.duration || span || 60;
  return {
    date,
    duration,
    date_end: end * 1e3 || date + duration * 60 * 1e3
  };
}
function isCustomAllDay(data) {
  return !!(data.extension_data?.custom_all_day || data.custom_all_day);
}
function snapToWholeDays(data, window2, timezone) {
  const has_length = !!(data.duration || data.date_end || data.booking_end);
  if (has_length && window2.duration % DAY_MINUTES !== 0)
    return window2;
  const date = startOfDayInTimezone(window2.date, timezone);
  return {
    date,
    duration: has_length ? Math.max(1, window2.duration - 1) : DAY_MINUTES - 1,
    date_end: endOfDayInTimezone(date, timezone)
  };
}
function resolveStatus(booking, status) {
  if (booking.deleted || status === "cancelled")
    return "cancelled";
  if (booking.rejected || status === "declined")
    return "declined";
  if (booking.has_ended)
    return "ended";
  if (booking.approved || status === "approved")
    return "approved";
  return "tentative";
}
function copyUnknownFields(booking, data) {
  for (const key in data) {
    if (!(key in booking) && !IGNORE_EXT_KEYS.includes(key) && data[key]) {
      booking.extension_data[key] = data[key];
    }
  }
}
var Booking = class {
  get group() {
    return this.extension_data.group || "";
  }
  /** Whether to show the booking as all day. Parking shifts can be 12 hours or more */
  get is_all_day() {
    const min_hours = this.booking_type === "parking" ? 18 : 12;
    return this.all_day || this.duration >= min_hours * 60;
  }
  get has_ended() {
    return this.checked_out_at > 0 || isAfter(Date.now(), this.date_end);
  }
  get valid_assets() {
    if (this._valid_cache_expiry > Date.now() && this._valid_asset_cache.length) {
      return this._valid_asset_cache;
    }
    const list = this.linked_bookings;
    this._valid_asset_cache = (this.extension_data.assets || []).map((request2) => new AssetRequest(__spreadProps(__spreadValues({}, request2), { event: this }))).filter((request2) => request2.deliver_at < this.date_end).map((request2) => {
      const booking = list.find((_) => _.extension_data.request_id === request2.id);
      if (booking) {
        request2.state = booking.approved ? "approved" : booking.rejected ? "rejected" : "pending";
      }
      return request2;
    });
    this._valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
    return this._valid_asset_cache;
  }
  constructor(data = {}) {
    this._valid_asset_cache = [];
    this._valid_cache_expiry = 0;
    this.id = data.id || "";
    this.parent_id = data.parent_id || "";
    this.asset_id = data.asset_id || "";
    this.asset_ids = data.asset_ids || [data.asset_id].filter((_) => _);
    this.asset_name = resolveAssetName(data, data.booking_type || data.type || " ");
    this.zones = data.zones || [];
    const { start: start2, end } = resolveUnixWindow(data);
    this.booking_start = start2;
    this.booking_end = end;
    this.booking_type = data.booking_type || " ";
    this.type = data.type || data.booking_type || "booking";
    const timezone = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    const base_window = toBookingWindow(data, start2, end);
    const all_day = !!data.all_day || isCustomAllDay(data) || base_window.duration >= DAY_MINUTES;
    const window2 = all_day ? snapToWholeDays(data, base_window, timezone) : base_window;
    this.date = window2.date;
    this.duration = window2.duration;
    this.date_end = window2.date_end;
    this.timezone = timezone;
    this.user_email = data.user_email || "";
    this.user_id = data.user_id || "";
    this.user_name = data.user_name || "";
    this.title = data.title ?? (this.booking_type ? `${capitalizeFirstLetter(this.booking_type)} Booking`.trim() : "");
    this.description = data.description || "";
    this.checked_in = !!data.checked_in;
    this.rejected = !!data.rejected;
    this.approved = !!data.approved;
    this.deleted = !!data.deleted;
    this.booked_by_id = data.booked_by_id || "";
    this.booked_by_name = data.booked_by_name || "";
    this.booked_by_email = data.booked_by_email || "";
    this.approver_id = data.approver_id || "";
    this.approver_email = data.approver_email || "";
    this.approver_name = data.approver_name || "";
    this.extension_data = data.extension_data || {};
    this.access = !!data.extension_data?.access;
    this.event_id = data.event_id;
    this.permission = (data.permission || "PRIVATE").toUpperCase();
    this.attendees = data.attendees || data.guests || data.members || [];
    this.tags = data.tags || data.extension_data?.tags || [];
    this.images = data.images || [];
    this.all_day = all_day;
    this.induction = data.induction || void 0;
    this.created_at = data.created_at || Date.now();
    this.history = data.history || [];
    this.checked_out_at = data.checked_out_at;
    this.checked_in_at = data.checked_in_at;
    this.linked_event = data.linked_event || null;
    this.linked_bookings = data.linked_bookings || [];
    this.linked_parent_booking = data.linked_parent_booking || null;
    this.status = resolveStatus(this, data.status);
    this.process_state = data.process_state || "pending";
    this.recurrence_type = data.recurrence_type || "none";
    this.recurrence_days = data.recurrence_days;
    this.recurrence_nth_of_month = data.recurrence_nth_of_month;
    this.recurrence_interval = data.recurrence_interval;
    this.recurrence_end = data.recurrence_end;
    this.instance = data.instance;
    copyUnknownFields(this, data);
    this.extension_data.assets = (this.extension_data.assets || []).map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: this, date: this.date })));
    this.extension_data.tags = data.tags || [];
    if (this.extension_data.request) {
      this.extension_data.request = new AssetRequest(__spreadProps(__spreadValues({}, this.extension_data.request), {
        event: this,
        date: this.date
      }));
    }
  }
  toJSON() {
    const data = __spreadValues({}, this);
    if (!this.id)
      delete data.id;
    data.extension_data.assets = data.extension_data.assets.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: null })));
    if (data.extension_data.request) {
      data.extension_data.request = new AssetRequest(__spreadProps(__spreadValues({}, data.extension_data.request), {
        event: null
      }));
    }
    if (!data.parent_id)
      delete data.parent_id;
    data.zones = data.zones.filter((_) => _);
    delete data.date;
    delete data.duration;
    delete data.created_at;
    delete data.history;
    delete data.process_state;
    removeEmptyFields(data);
    return data;
  }
  get location() {
    return this.extension_data?.location || this.description;
  }
  /** Whether the booking occurs today */
  get is_today() {
    return isSameDay(this.date, /* @__PURE__ */ new Date());
  }
  /** Whether booking is done */
  get is_done() {
    const start2 = /* @__PURE__ */ new Date();
    const end = this.all_day ? addHours(this.date, 24) : addMinutes(this.date, this.duration);
    const checked_out = (this.checked_out_at || this.extension_data.checked_out_at || 0) * 1e3;
    const end_time = end.getTime();
    if (checked_out && Date.now() > checked_out)
      return true;
    return isAfter(start2, new Date(end_time));
  }
  /** Status of the booking */
  get state() {
    const now = /* @__PURE__ */ new Date();
    const date = this.date;
    if (isBefore(now, add(date, { minutes: -15 })))
      return "future";
    if (isBefore(now, date))
      return "upcoming";
    if (isBefore(now, add(date, { minutes: 15 })))
      return "started";
    if (isBefore(now, add(date, { minutes: this.duration })))
      return "in_progress";
    return "done";
  }
};

// libs/common/src/lib/types/calendar.class.ts
var Calendar = class {
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.primary = !!data.primary;
    this.summary = data.summary || "";
    this.can_edit = !!data.can_edit;
    this.resource = new Space(data.resource || data.system);
    this.availability = (data.availability || []).map(({ starts_at, ends_at, date, duration, status }) => {
      return {
        date: new Date(date || starts_at * 1e3).valueOf(),
        duration: duration || differenceInMinutes(ends_at * 1e3, starts_at * 1e3),
        status
      };
    });
    this.hidden = !!data.hidden;
  }
};

// libs/common/src/lib/types/desk.class.ts
var IGNORE_KEYS = ["zone", "qr_code", "toJSON"];
function emptyZone() {
  const result = parseResponse(Zone, {}, { missing_fields: "zero" });
  if (result.ok === false)
    throw new Error("Empty zone does not parse");
  return result.value;
}
var Desk = class {
  constructor(data = {}) {
    this.toJSON = () => this.format();
    this.id = data.id || "";
    this.map_id = data.map_id || data.id || "";
    this.name = data.name || "";
    this.bookable = data.bookable ?? false;
    this.zone = data.zone || emptyZone();
    this.assigned_to = data.assigned_to || "";
    this.groups = data.groups || [];
    this.qr_code = data.qr_code || "";
    this.features = data.features || [];
    this.images = data.images || [];
    this.tags = data.tags || [];
    this.homebase = data.homebase || "";
    this.security = data.security || "";
    for (const key in data) {
      if (!(key in this))
        this[key] = data[key];
    }
  }
  format() {
    const data = __spreadValues({}, this);
    for (const key of IGNORE_KEYS) {
      delete data[key];
    }
    cleanObject(data, [void 0, null, []]);
    return data;
  }
};

// libs/components/src/lib/safe.pipe.ts
var SafePipe = class _SafePipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  /**
   * Marks the string as trusted, so it can be injected into a template.
   * A `url` or `resource` that runs script, such as `javascript:`, is not
   * trusted. It becomes `null` for `url` and an empty URL for `resource`.
   * The type has no default, so each `html` use is explicit. Never pass
   * user content as `html`. Bind it to `[innerHTML]` without this pipe,
   * so Angular sanitises it.
   * @param value String to trust
   * @param type Type of value to trust. `resource`, `url`, `style` or `html`
   */
  transform(value, type) {
    switch (type) {
      case "resource":
        return this.sanitizer.bypassSecurityTrustResourceUrl(this._isSafeUrl(value) ? value : "");
      case "url":
        return this._isSafeUrl(value) ? this.sanitizer.bypassSecurityTrustUrl(value) : null;
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case "html":
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
  /** True when Angular's URL check leaves the URL as is */
  _isSafeUrl(url) {
    return this.sanitizer.sanitize(SecurityContext.URL, url) === url;
  }
  static {
    this.\u0275fac = function SafePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safe", type: _SafePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafePipe, [{
    type: Pipe,
    args: [{
      name: "safe"
    }]
  }], null, null);
})();

// libs/components/src/lib/icon.component.ts
var _c0 = ["*"];
function IconComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class_ref());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.icon()?.content, " ");
  }
}
function IconComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 2);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.icon().src, "resource"), \u0275\u0275sanitizeUrl);
  }
}
var CLASS_MAP = {
  rounded: "material-symbols-rounded",
  outlined: "material-symbols-outlined",
  sharp: "material-symbols-sharp"
};
var IconComponent = class _IconComponent {
  constructor() {
    this.className = input(
      "material-symbols-rounded",
      ...ngDevMode ? [{ debugName: "className" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = input(
      void 0,
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = input(
      "",
      ...ngDevMode ? [{ debugName: "label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.class_ref = computed(
      () => CLASS_MAP[this.icon()?.class] || CLASS_MAP[this.className()] || this.className(),
      ...ngDevMode ? [{ debugName: "class_ref" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function IconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconComponent, selectors: [["icon"], ["i", "icon", ""]], hostVars: 3, hostBindings: function IconComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", ctx.label() ? null : "true")("role", ctx.label() ? "img" : null)("aria-label", ctx.label() || null);
      }
    }, inputs: { className: [1, "className"], icon: [1, "icon"], label: [1, "label"] }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "flex", "h-[1.25em]", "max-h-[1.25em]", "w-[1.25em]", "max-w-[1.25em]", "items-center", "justify-center", "overflow-hidden"], [3, "class"], ["alt", "", 1, "h-[1em]", "w-[1em]", 3, "src"]], template: function IconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, IconComponent_Conditional_1_Template, 3, 3, "i", 1);
        \u0275\u0275conditionalCreate(2, IconComponent_Conditional_2_Template, 2, 4, "img", 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.icon() || ctx.icon().type !== "img" ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.icon() && ctx.icon().type === "img" ? 2 : -1);
      }
    }, dependencies: [SafePipe], styles: ["\ni[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{ selector: "icon,i[icon]", host: {
      "[attr.aria-hidden]": 'label() ? null : "true"',
      "[attr.role]": 'label() ? "img" : null',
      "[attr.aria-label]": "label() || null"
    }, template: `
        <div
            class="flex h-[1.25em] max-h-[1.25em] w-[1.25em] max-w-[1.25em] items-center justify-center overflow-hidden"
        >
            @if (!icon() || icon().type !== 'img') {
                <i [class]="class_ref()">
                    {{ icon()?.content }}
                    <ng-content></ng-content>
                </i>
            }
            @if (icon() && icon().type === 'img') {
                <img
                    class="h-[1em] w-[1em]"
                    alt=""
                    [src]="icon().src | safe: 'resource'"
                />
            }
        </div>
    `, imports: [SafePipe], styles: ["/* angular:styles/component:css;9dcb326dcc2b3d8b68e7d89ef488eb28abc701fb0e2ab3f372b27f7bf732088c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/icon.component.ts */\ni {\n  font-size: 1em;\n}\n/*# sourceMappingURL=icon.component.css.map */\n"] }]
  }], null, { className: [{ type: Input, args: [{ isSignal: true, alias: "className", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconComponent, { className: "IconComponent", filePath: "libs/components/src/lib/icon.component.ts", lineNumber: 52 });
})();

export {
  SwUpdate,
  provideServiceWorker,
  toDate,
  addDays,
  addMonths,
  addHours,
  startOfDay,
  addMinutes,
  isSameDay,
  differenceInMinutes,
  endOfDay,
  format,
  getUnixTime,
  isAfter,
  isBefore,
  startOfMinute,
  set,
  stringToMinutes,
  filterResourcesFromRules,
  rulesForResource,
  AsyncHandler,
  registerMockEndpoint,
  string,
  literal,
  integer,
  boolean,
  json,
  nullable,
  array,
  record,
  object,
  parameters,
  union,
  parseResponse,
  checkRequest,
  operation,
  call,
  registerSystem,
  mockSystem,
  orThrow,
  orThrowPage,
  Zone,
  asset_categories_exports,
  asset_types_exports,
  assets_exports,
  metadata_exports,
  systems_exports,
  users_exports,
  setTranslationService,
  i18n,
  LocaleService,
  setNotifyOutlet,
  lazySnackbar,
  notifySuccess,
  notifyError,
  notifyWarn,
  LOCAL_TIMEZONE,
  localToTimezone,
  getTimezoneOffsetString,
  getTimeInTimezone,
  sameDayInTimezone,
  setAppName,
  log2 as log,
  padLength,
  getItemWithKeys,
  toggleListItem,
  cleanObject,
  unique,
  randomInt,
  randomString,
  flatten,
  timePeriodsIntersect,
  predictableRandomInt,
  capitalizeFirstLetter,
  isMobileSafari2 as isMobileSafari,
  calculateDistance,
  formatDuration2 as formatDuration,
  firstTruthyValueFrom,
  withTimeout,
  getAllDayTimeRange,
  isWithinBookableHours,
  guardModelUndefinedWrites,
  onFieldChange,
  getInvalidSignalFields,
  setupFormTimeSync,
  errorMessage2 as errorMessage,
  responseErrorMessage,
  HotkeysService,
  SETTING_KEYS,
  placeRealtime,
  isMock,
  authority,
  onlineState,
  waitForOnline,
  token,
  apiKey,
  setToken,
  invalidateToken,
  placeFetch,
  placeFetchJson,
  serviceWorkerUpdate,
  initialisationFailure,
  initialisationComplete,
  failInitialisation,
  markInitialisationComplete,
  retryInitialisation,
  setupCache,
  Clipboard,
  getNativeDomain,
  getNativeEmail,
  setNativeDomain,
  setNativeEmail,
  getNativeApiKey,
  setNativeApiKey,
  normaliseNativeDomain,
  lookupNativeDomainByEmail,
  VERSION,
  PLACE_SETUP_TIMEOUT,
  setupPlace,
  isJsonArray,
  jsonRecord,
  jsonRecords,
  jsonText,
  jsonStrings,
  DEFAULT_SETTINGS,
  AssetRequest,
  CateringOrder,
  Space,
  User,
  GuestUser,
  StaffUser,
  EMPTY_USER,
  isEmptyUser,
  setDefaultCreator,
  toVisitorInternalOrExternal,
  readAttendeeFlags,
  CalendarEvent,
  GroupPermission,
  current_user,
  user_groups_loaded,
  user_groups_failed,
  user_group_names,
  currentUser,
  currentUserCanApprove,
  currentUserIsLoaded,
  currentUserLoaded,
  waitForCurrentUser,
  userSignal,
  hasPermission,
  setting,
  appDetails,
  settingSignal,
  SettingsService,
  getModule,
  REMOTE_DEBUG_MODULE,
  MAX_REMOTE_DEBUG_COMMANDS,
  remoteDebugDeviceBinding,
  remoteDebugLogsBinding,
  remoteDebugResultsBinding,
  isRemoteLogRequest,
  isRemoteDebugCommand,
  getLoadingMessage,
  needsNativeDomain,
  nativeDomainError,
  autoConfirmNativeDomain,
  PlaceOS_Service,
  firstValueWhere,
  OrganisationService,
  MapService,
  MapsPeopleService,
  toQueryString,
  MAP_FEATURE_DATA,
  ConsoleHistoryService,
  ExternalCateringService,
  reloadOnChunkLoadError,
  fromEventRecurrence,
  toBookingRecurrence,
  REMOTE_SETUP_MOCK_SYSTEM,
  REMOTE_SETUP_MODULE,
  remoteSetupCommandBinding,
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
  NgForm,
  FormGroupDirective,
  NgModel,
  ɵNgNoValidate,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgSelectOption,
  ɵNgSelectMultipleOption,
  FormsModule,
  provideValueAccessor,
  Booking,
  Calendar,
  Desk,
  SafePipe,
  IconComponent
};
//# debugId=bc5e1965-a537-51ca-9704-942f11ec8333
//# sourceMappingURL=chunk-IPSAUJK2.js.map
