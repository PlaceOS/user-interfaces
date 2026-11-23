import {
  BehaviorSubject,
  EnvironmentInjector,
  Injectable,
  Subscription,
  Title,
  catchError,
  combineLatest,
  computed,
  defer,
  first,
  firstValueFrom,
  inject,
  lastValueFrom,
  map,
  of,
  retry,
  setClassMetadata,
  signal,
  timer,
  ɵɵdefineInjectable
} from "./chunk-QPTDOO3V.js";
import {
  __export,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/common/src/lib/async-handler.class.ts
var _AsyncHandler = class _AsyncHandler {
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
};
_AsyncHandler.\u0275fac = function AsyncHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AsyncHandler)();
};
_AsyncHandler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AsyncHandler, factory: _AsyncHandler.\u0275fac, providedIn: "root" });
var AsyncHandler = _AsyncHandler;
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
  const next = reply.next === void 0 || page.next_offset === null ? null : () => {
    var _a2, _b2;
    return ((_b2 = (_a2 = reply.next) == null ? void 0 : _a2.call(reply)) == null ? void 0 : _b2.then(orThrowPage)) ?? null;
  };
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
  const query5 = url.split("?")[1] ?? "";
  for (const [key, value] of new URLSearchParams(query5)) {
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
      signal2 == null ? void 0 : signal2.removeEventListener("abort", aborted);
      resolve();
    }, ms);
    if ((signal2 == null ? void 0 : signal2.aborted) === true)
      aborted();
    else
      signal2 == null ? void 0 : signal2.addEventListener("abort", aborted, { once: true });
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
  const _a2 = input, { body } = _a2, params = __objRest(_a2, ["body"]);
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
  var _a2;
  let path = operation2.path;
  for (const key of operation2.path_keys) {
    const text = queryScalar(params[key]);
    assert(text.length > 0, `the path parameter "${key}" is not empty`);
    assert(text !== "." && text !== "..", `the path parameter "${key}" is not . or ..`);
    path = path.replace(`{${key}}`, () => encodeURIComponent(text));
  }
  const node = operation2.params.node;
  assert(node.kind === "object", "the params schema is an object");
  const query5 = new URLSearchParams();
  for (const field of node.fields) {
    if (operation2.path_keys.includes(field.key))
      continue;
    const value = params[field.key];
    if (value === void 0 || value === null)
      continue;
    const name = ((_a2 = operation2.wire_names) == null ? void 0 : _a2[field.key]) ?? field.key;
    if (Array.isArray(value)) {
      const items = value;
      query5.append(name, items.map(queryScalar).join(","));
    } else {
      query5.append(name, queryScalar(value));
    }
  }
  const query_text = query5.toString();
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
    signal2 == null ? void 0 : signal2.addEventListener("abort", onAbort, { once: true });
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
      signal2 == null ? void 0 : signal2.removeEventListener("abort", onAbort);
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
  return (signal2 == null ? void 0 : signal2.aborted) === true;
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
  var _a2;
  const length_text = response.headers.get("content-length");
  if (length_text !== null) {
    const length = Number(length_text);
    if (Number.isSafeInteger(length) && length > bytes_max) {
      await ((_a2 = response.body) == null ? void 0 : _a2.cancel());
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
    cancelReconnect == null ? void 0 : cancelReconnect();
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
    var _a2;
    return ((_a2 = bindings.get(variableKey(normalize(target)))) == null ? void 0 : _a2.state) ?? { kind: "unknown" };
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
    cancelConnectTimer == null ? void 0 : cancelConnectTimer();
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
    socket == null ? void 0 : socket.close();
    socket = null;
  }
  function cancelTimers() {
    cancelConnectTimer == null ? void 0 : cancelConnectTimer();
    cancelConnectTimer = null;
    cancelKeepAlive == null ? void 0 : cancelKeepAlive();
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
  var _a2;
  return (_a2 = systems.get(id)) == null ? void 0 : _a2.system;
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
    var _a2, _b2, _c;
    const meta = {
      sys: request2.sys,
      mod: request2.mod,
      index: request2.index,
      name: request2.name
    };
    const key = JSON.stringify(meta);
    const found = systems.get(request2.sys);
    const state2 = (_a2 = found == null ? void 0 : found.modules.get(request2.mod)) == null ? void 0 : _a2[request2.index - 1];
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
        (_b2 = bound.get(key)) == null ? void 0 : _b2();
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
        (_c = bound.get(key)) == null ? void 0 : _c();
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
function create(input, options) {
  return call(CREATE, input, options);
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
function destroy(input, options) {
  return call(DESTROY, input, options);
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
function query(input = {}, options) {
  return call(QUERY, input, options);
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
function show(input, options) {
  return call(SHOW, input, options);
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
function update(input, options) {
  return call(UPDATE, input, options);
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

// node_modules/@placeos/ts-client/dist/generated/operations/groups.js
var groups_exports = {};
__export(groups_exports, {
  create: () => create2,
  current: () => current,
  destroy: () => destroy2,
  features: () => features,
  query: () => query2,
  show: () => show2,
  syncAdGroups: () => syncAdGroups,
  update: () => update2
});
function create2(input, options) {
  return call(CREATE2, input, options);
}
var CREATE2 = /* @__PURE__ */ operation({
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
function destroy2(input, options) {
  return call(DESTROY2, input, options);
}
var DESTROY2 = /* @__PURE__ */ operation({
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
function query2(input = {}, options) {
  return call(QUERY2, input, options);
}
var QUERY2 = /* @__PURE__ */ operation({
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
function show2(input, options) {
  return call(SHOW2, input, options);
}
var SHOW2 = /* @__PURE__ */ operation({
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
function update2(input, options) {
  return call(UPDATE2, input, options);
}
var UPDATE2 = /* @__PURE__ */ operation({
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
  destroy: () => destroy3,
  history: () => history2,
  merge: () => merge,
  rename: () => rename,
  show: () => show3,
  update: () => update3
});
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
function destroy3(input, options) {
  return call(DESTROY3, input, options);
}
var DESTROY3 = /* @__PURE__ */ operation({
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
function show3(input, options) {
  return call(SHOW3, input, options);
}
var SHOW3 = /* @__PURE__ */ operation({
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
function update3(input, options) {
  return call(UPDATE3, input, options);
}
var UPDATE3 = /* @__PURE__ */ operation({
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
  create: () => create3,
  current: () => current2,
  deleteResourceToken: () => deleteResourceToken,
  destroy: () => destroy4,
  groups: () => groups,
  metadata: () => metadata2,
  query: () => query3,
  resourceToken: () => resourceToken,
  revive: () => revive,
  search: () => search,
  show: () => show4,
  update: () => update4,
  userResourceToken: () => userResourceToken
});
function create3(input, options) {
  return call(CREATE3, input, options);
}
var CREATE3 = /* @__PURE__ */ operation({
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
function destroy4(input, options) {
  return call(DESTROY4, input, options);
}
var DESTROY4 = /* @__PURE__ */ operation({
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
function metadata2(input, options) {
  return call(METADATA2, input, options);
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
function query3(input = {}, options) {
  return call(QUERY3, input, options);
}
var QUERY3 = /* @__PURE__ */ operation({
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
function show4(input, options) {
  return call(SHOW4, input, options);
}
var SHOW4 = /* @__PURE__ */ operation({
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
function update4(input, options) {
  return call(UPDATE4, input, options);
}
var UPDATE4 = /* @__PURE__ */ operation({
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

// node_modules/@placeos/ts-client/dist/generated/operations/zones.js
var zones_exports = {};
__export(zones_exports, {
  create: () => create4,
  destroy: () => destroy5,
  metadata: () => metadata3,
  query: () => query4,
  show: () => show5,
  tags: () => tags,
  triggerInstances: () => triggerInstances,
  update: () => update5,
  zoneExecute: () => zoneExecute
});
function create4(input, options) {
  return call(CREATE4, input, options);
}
var CREATE4 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Zone,
  response: Zone,
  name: "zones.create"
});
function destroy5(input, options) {
  return call(DESTROY5, input, options);
}
var DESTROY5 = /* @__PURE__ */ operation({
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
function metadata3(input, options) {
  return call(METADATA3, input, options);
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
function query4(input = {}, options) {
  return call(QUERY4, input, options);
}
var QUERY4 = /* @__PURE__ */ operation({
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
function show5(input, options) {
  return call(SHOW5, input, options);
}
var SHOW5 = /* @__PURE__ */ operation({
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
function tags(input = {}, options) {
  return call(TAGS, input, options);
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
function update5(input, options) {
  return call(UPDATE5, input, options);
}
var UPDATE5 = /* @__PURE__ */ operation({
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
      var _a2;
      refused.remove(key);
      try {
        (_a2 = storageOrNull()) == null ? void 0 : _a2.removeItem(key);
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
    log3.info("start", { fixed_device: isFixedDevice2(), trusted: isTrusted() });
    halted = null;
    return authorize();
  }
  function stop2() {
    removeForegroundListener == null ? void 0 : removeForegroundListener();
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
        log3.debug("logging in with the password grant");
        const result = await requestTokens(attempt_epoch, __spreadValues({
          grant_type: "password",
          client_id,
          redirect_uri: config.redirect_uri,
          scope: config.scope,
          username: grant.username,
          password: grant.password,
          authority: (authority2 == null ? void 0 : authority2.id) ?? ""
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
    const current3 = authority2;
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
    const current3 = currentCredential2();
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
        const current4 = currentCredential2();
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
    log3.warn("the server refused the credential", { status: status2 });
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
      authority2 = parsed.value;
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
    if (authority2 === null)
      return;
    if (authority2.session)
      return;
    if (currentCredential2() !== null)
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
  function useToken(token2, expires_at_ms) {
    assert(token2.length > 0, "the token is not empty");
    const expires_at = expires_at_ms ?? environment.now() + TOKEN_LIFETIME_DEFAULT_SECONDS * 1e3;
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { access_token: token2, expires_at_ms: expires_at }));
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
  function invalidateToken2() {
    log3.debug("invalidating the access token");
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { access_token: null, expires_at_ms: 0 }));
  }
  async function logout() {
    const url = authority2 === null ? serverUrl(LOGOUT_PATH_DEFAULT) : serverUrl(authority2.logout_url);
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
  const _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(amount)) return constructFrom((options == null ? void 0 : options.in) || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(amount)) return constructFrom((options == null ? void 0 : options.in) || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom((options == null ? void 0 : options.in) || date, _date.getTime());
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
  const _date = toDate(date, options == null ? void 0 : options.in);
  const dateWithMonths = months || years ? addMonths(_date, months + years * 12) : _date;
  const dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1e3;
  return constructFrom((options == null ? void 0 : options.in) || date, +dateWithDays + msToAdd);
}

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom((options == null ? void 0 : options.in) || date, +toDate(date) + amount);
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
  var _a2, _b2, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b2 = (_a2 = options == null ? void 0 : options.locale) == null ? void 0 : _a2.options) == null ? void 0 : _b2.weekStartsOn) ?? defaultOptions2.weekStartsOn ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
  const _date = toDate(date, options == null ? void 0 : options.in);
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
  const _date = toDate(date, options == null ? void 0 : options.in);
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
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
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
  const fourthOfJanuary = constructFrom((options == null ? void 0 : options.in) || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
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
    options == null ? void 0 : options.in,
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
  return getRoundingMethod(options == null ? void 0 : options.roundingMethod)(diff);
}

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options == null ? void 0 : options.in);
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
  if (options == null ? void 0 : options.addSuffix) {
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
    const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
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
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  var _a2, _b2, _c, _d;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b2 = (_a2 = options == null ? void 0 : options.locale) == null ? void 0 : _a2.options) == null ? void 0 : _b2.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const firstWeekOfNextYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
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
  var _a2, _b2, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b2 = (_a2 = options == null ? void 0 : options.locale) == null ? void 0 : _a2.options) == null ? void 0 : _b2.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
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
function warnOrThrowProtectedError(token2, format3, input) {
  const _message = message(token2, format3, input);
  console.warn(_message);
  if (throwTokens.includes(token2)) throw new RangeError(_message);
}
function message(token2, format3, input) {
  const subject = token2[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token2.toLowerCase()}\` instead of \`${token2}\` (in \`${format3}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  const defaultOptions2 = getDefaultOptions();
  const locale = (options == null ? void 0 : options.locale) ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b2 = (_a2 = options == null ? void 0 : options.locale) == null ? void 0 : _a2.options) == null ? void 0 : _b2.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_f = (_e = options == null ? void 0 : options.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.weekStartsOn) ?? defaultOptions2.weekStartsOn ?? ((_h = (_g = defaultOptions2.locale) == null ? void 0 : _g.options) == null ? void 0 : _h.weekStartsOn) ?? 0;
  const originalDate = toDate(date, options == null ? void 0 : options.in);
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
    if (!(options == null ? void 0 : options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token2) || !(options == null ? void 0 : options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token2)) {
      warnOrThrowProtectedError(token2, formatStr, String(date));
    }
    const formatter = formatters[token2[0]];
    return formatter(originalDate, token2, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/getDaysInMonth.js
function getDaysInMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
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
  const date_ = toDate(date, options == null ? void 0 : options.in);
  date_.setSeconds(0, 0);
  return date_;
}

// node_modules/date-fns/roundToNearestMinutes.js
function roundToNearestMinutes(date, options) {
  const nearestTo = (options == null ? void 0 : options.nearestTo) ?? 1;
  if (nearestTo < 1 || nearestTo > 30) return constructFrom(date, NaN);
  const date_ = toDate(date, options == null ? void 0 : options.in);
  const fractionalSeconds = date_.getSeconds() / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1e3 / 60;
  const minutes = date_.getMinutes() + fractionalSeconds + fractionalMilliseconds;
  const method = (options == null ? void 0 : options.roundingMethod) ?? "round";
  const roundingMethod = getRoundingMethod(method);
  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  date_.setMinutes(roundedMinutes, 0, 0);
  return date_;
}

// node_modules/date-fns/setMonth.js
function setMonth(date, month, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom((options == null ? void 0 : options.in) || date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

// node_modules/date-fns/set.js
function set(date, values, options) {
  let _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(+_date)) return constructFrom((options == null ? void 0 : options.in) || date, NaN);
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

// libs/common/src/lib/locale.service.ts
var _service;
function setTranslationService(service) {
  _service = service;
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
var _LocaleService = class _LocaleService {
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
    var _a2;
    if (!this.zone_id)
      return {};
    try {
      const name = `locale_${locale}`;
      const map2 = await metadata_exports.show({ id: this.zone_id, name }).then(orThrow);
      return ((_a2 = map2[name]) == null ? void 0 : _a2.details) ?? {};
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
      if (!(store == null ? void 0 : store.cached_at) || store.cached_at + this._max_cache_age < Date.now()) {
        localStorage.removeItem(key);
        return null;
      }
      return store.mappings;
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  }
};
_LocaleService.\u0275fac = function LocaleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LocaleService)();
};
_LocaleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocaleService, factory: _LocaleService.\u0275fac, providedIn: "root" });
var LocaleService = _LocaleService;
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
  return () => import("./snack-bar-UXLYSXZB.js").then(({ MatSnackBar }) => injector.get(MatSnackBar));
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
    msg = (msg == null ? void 0 : msg.error) || (msg == null ? void 0 : msg.message) || "An error occurred";
  notify("error", msg, action, on_action, config);
}
function notifyInfo(msg, action, on_action, config = {}) {
  !_disable_logging && console.debug(msg);
  notify("info", msg, action, on_action, config);
}

// libs/common/src/lib/timezone-helpers.ts
var _a, _b;
var LOCAL_TIMEZONE = ((_b = (_a = Intl == null ? void 0 : Intl.DateTimeFormat()) == null ? void 0 : _a.resolvedOptions()) == null ? void 0 : _b.timeZone) || "Australia/Sydney";
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

// libs/common/src/lib/general.ts
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
function firstTruthyValueFrom(obs) {
  return obs ? lastValueFrom(obs.pipe(first((_) => !!_))) : Promise.resolve(null);
}
function withTimeout(promise, timeout_ms, message2 = "Operation timed out.", on_timeout) {
  if (timeout_ms <= 0)
    return promise;
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => {
      on_timeout == null ? void 0 : on_timeout();
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
function errorMessage2(error) {
  var _a2;
  if (typeof error === "string")
    return error;
  if (error instanceof Error)
    return error.message || "";
  const value = error;
  if (typeof (value == null ? void 0 : value.error) === "string")
    return value.error;
  if (typeof (value == null ? void 0 : value.message) === "string")
    return value.message;
  if (typeof ((_a2 = value == null ? void 0 : value.error) == null ? void 0 : _a2.message) === "string")
    return value.error.message;
  return "";
}

// libs/common/src/lib/hotkeys.service.ts
var INVALID_STANDALONE_KEYS = [
  "control",
  "shift",
  "alt",
  "meta",
  "os"
];
var _HotkeysService = class _HotkeysService {
  constructor() {
    this.keydown_states = {};
    this.keydown_callbacks = {};
    this.combo_end = [];
    this.registered_combos = [];
    this.counter = 0;
    window.addEventListener("keydown", (event) => {
      var _a2;
      if (((_a2 = document.getSelection()) == null ? void 0 : _a2.type) === "Range" || this.isEditableElementFocused()) {
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
      var _a2;
      const code = this.mapKey((event.code || "").toLowerCase());
      (_a2 = this.keydown_states[code]) == null ? void 0 : _a2.set(null);
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
        unsubscribe: () => {
          var _a2;
          return (_a2 = this.keydown_callbacks[last_key]) == null ? void 0 : _a2.delete(callback);
        }
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
};
_HotkeysService.\u0275fac = function HotkeysService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HotkeysService)();
};
_HotkeysService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HotkeysService, factory: _HotkeysService.\u0275fac, providedIn: "root" });
var HotkeysService = _HotkeysService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotkeysService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/settings.ts
var app = {
  name: "Control",
  short_name: "PlaceOS",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  prevent_space_init: true,
  allow_dark_mode: false
};
var DEFAULT_SETTINGS = {
  debug: true,
  composer: {
    domain: "",
    route: "/control",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  service_worker: {
    auto_reload: true
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
  _client == null ? void 0 : _client.stop();
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
      stop: () => {
        var _a2;
        return (_a2 = _client == null ? void 0 : _client.realtime) == null ? void 0 : _a2.stop();
      }
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
      var _a2;
      remove_listener();
      clearTimeout(retry2);
      session.stop();
      retire();
      (_a2 = client.realtime) == null ? void 0 : _a2.stop();
    }
  };
  const remove_listener = session.subscribe((status) => {
    var _a2;
    if (status.kind === "loading")
      return;
    const has_authority = session.authority() !== null;
    setOnline(has_authority);
    if (has_authority) {
      clearTimeout(retry2);
      retry2 = void 0;
      return;
    }
    const unavailable = status.kind === "signed_out" && ((_a2 = status.error) == null ? void 0 : _a2.kind) === "authority_unavailable";
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
  _client == null ? void 0 : _client.stop();
  _client = null;
  setOnline(false);
}
function placeClientStarted() {
  return _started;
}
function placeSession() {
  return (_client == null ? void 0 : _client.session) ?? null;
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
  var _a2;
  return ((_a2 = _client == null ? void 0 : _client.realtime) == null ? void 0 : _a2.status().kind) === "open";
}
function isMock() {
  return (_client == null ? void 0 : _client.mock) ?? false;
}
function authority() {
  var _a2;
  if (_client == null ? void 0 : _client.mock)
    return MOCK_AUTHORITY;
  return ((_a2 = _client == null ? void 0 : _client.session) == null ? void 0 : _a2.authority()) ?? void 0;
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
  var _a2;
  return ((_a2 = _client == null ? void 0 : _client.session) == null ? void 0 : _a2.credential()) ?? null;
}
function token() {
  if (_client == null ? void 0 : _client.mock)
    return "mock-token";
  const credential = currentCredential();
  if ((credential == null ? void 0 : credential.kind) === "bearer")
    return credential.token;
  if ((credential == null ? void 0 : credential.kind) === "api_key")
    return "x-api-key";
  return "";
}
function apiKey() {
  const credential = currentCredential();
  return (credential == null ? void 0 : credential.kind) === "api_key" ? credential.key : "";
}
function clientId() {
  var _a2;
  return ((_a2 = _client == null ? void 0 : _client.session) == null ? void 0 : _a2.client_id) ?? "";
}
function apiOrigin() {
  return (_client == null ? void 0 : _client.base_url) || location.origin;
}
function isFixedDevice() {
  var _a2;
  return ((_a2 = _client == null ? void 0 : _client.session) == null ? void 0 : _a2.isFixedDevice()) ?? false;
}
function setToken(token2, expires_at_ms) {
  var _a2;
  (_a2 = _client == null ? void 0 : _client.session) == null ? void 0 : _a2.useToken(token2, expires_at_ms);
}
function setApiKey(key) {
  var _a2;
  (_a2 = _client == null ? void 0 : _client.session) == null ? void 0 : _a2.useApiKey(key);
}
function invalidateToken() {
  var _a2;
  (_a2 = _client == null ? void 0 : _client.session) == null ? void 0 : _a2.invalidateToken();
}
async function authorise() {
  const session = _client == null ? void 0 : _client.session;
  if (!session)
    return token();
  const result = await session.authorize();
  if (result.ok === false)
    throw result.error;
  return token();
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
  var _a2, _b2;
  let date = ((_a2 = request2.event) == null ? void 0 : _a2.date) || request2._time;
  if (request2.deliver_time) {
    date = set(date, {
      hours: Math.floor(request2.deliver_time),
      minutes: request2.deliver_time % 1 * 60
    }).valueOf();
  }
  if (request2.deliver_day_offset > 0 || ((_b2 = request2.event) == null ? void 0 : _b2.all_day)) {
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
    var _a2, _b2, _c, _d, _e, _f, _g;
    this.conflict = false;
    this._changed = false;
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.event_id = data.event_id || data.parent_id || "";
    this.items = data.items || ((_a2 = data.asset_ids) == null ? void 0 : _a2.map((_) => ({ id: _, quantity: 1 }))) || [];
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this._status = data[`${this.event_id}_status`] || data.status || (data.extension_data || {})[`${this.event_id}_status`] || ((_b2 = data.extension_data) == null ? void 0 : _b2.status) || "in_storage";
    this.event = data.event || data || null;
    const booking = (_d = (_c = this.event) == null ? void 0 : _c.linked_bookings) == null ? void 0 : _d.find((_) => _.extension_data.request_id === this.id);
    this._booking = booking || data.booking || null;
    this._changed = !!data._changed || !booking;
    this.notes = data.notes || data.description || "";
    this.deliver_time = data.deliver_time || ((_e = data.extension_data) == null ? void 0 : _e.deliver_time) || void 0;
    this.deliver_offset = data.deliver_offset || ((_f = data.extension_data) == null ? void 0 : _f.deliver_offset) || 0;
    this.deliver_day_offset = data.deliver_day_offset || ((_g = data.extension_data) == null ? void 0 : _g.deliver_day_offset) || 0;
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
  var _a2, _b2, _c;
  let date = ((_a2 = order.event) == null ? void 0 : _a2.date) || ((_b2 = order.event) == null ? void 0 : _b2.event_start) * 1e3 || order._time;
  if (order.deliver_day_offset > 0 || ((_c = order.event) == null ? void 0 : _c.all_day)) {
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
    var _a2;
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.system_id = data.system_id || "";
    this.event_id = data.event_id || ((_a2 = data.event) == null ? void 0 : _a2.id) || "";
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
    var _a2;
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
    this.number = (((_a2 = parts.length >= 2 ? parts[parts.length - 1] : this.display_name[0]) == null ? void 0 : _a2.toUpperCase()) || "").substring(0, 2);
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
    var _a2, _b2;
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
    this.is_external = !((_a2 = this.email) == null ? void 0 : _a2.endsWith(`${USER_DOMAIN}`));
    this.visit_expected = data.visit_expected ?? true;
    this.assistance_required = !!((_b2 = this.extension_data) == null ? void 0 : _b2.assistance_required);
    for (const key in data) {
      if (!(key in this))
        this.extension_data[key] = data[key];
    }
  }
};
var StaffUser = class extends User {
  get location() {
    return this.location_time(Date.now());
  }
  work_preference(datetime) {
    var _a2, _b2, _c;
    if (!datetime)
      datetime = Date.now();
    const date = new Date(datetime);
    const day = date.getDay();
    const date_string = format(date, "yyyy-MM-dd");
    if ((_b2 = (_a2 = this.work_overrides[date_string]) == null ? void 0 : _a2.blocks) == null ? void 0 : _b2.length) {
      for (const block of this.work_overrides[date_string].blocks) {
        const start2 = block.start_time;
        const end = block.end_time;
        if (start2 <= date.getHours() + date.getMinutes() / 60 && end >= date.getHours() + date.getMinutes() / 60) {
          return block;
        }
      }
    }
    for (const pref of this.work_preferences) {
      if (pref.day_of_week === day && ((_c = pref.blocks) == null ? void 0 : _c.length)) {
        for (const block of pref.blocks) {
          if (block.start_time <= date.getHours() + date.getMinutes() / 60 && block.end_time >= date.getHours() + date.getMinutes() / 60) {
            return block;
          }
        }
      }
    }
  }
  location_time(datetime = Date.now()) {
    var _a2;
    return ((_a2 = this.work_preference(datetime)) == null ? void 0 : _a2.location) || "ooo";
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
function eventStatus(details) {
  var _a2;
  if (details.status === "cancelled")
    return "declined";
  if ((_a2 = details.resources) == null ? void 0 : _a2.length) {
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
  var _a2;
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
    days_of_week: ((_a2 = data.days_of_week) == null ? void 0 : _a2.map((_) => typeof _ === "number" ? DAYS_OF_WEEK[_] : _)) || []
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
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    this._valid_asset_cache = [];
    this._valid_cache_expiry = 0;
    const custom_all_day = !!(((_a2 = data.extension_data) == null ? void 0 : _a2.custom_all_day) || data.custom_all_day);
    this.id = data.event_id || data.id || "";
    this.event_start = data.event_start || getUnixTime(data.date || roundToNearestMinutes(addMinutes(/* @__PURE__ */ new Date(), 3), {
      nearestTo: 5
    }));
    this.event_end = data.event_end || getUnixTime(data.date_end || 0) || getUnixTime(addMinutes(this.event_start * 1e3, data.duration || 30));
    this.calendar = data.calendar || "";
    this.creator = ((_b2 = data.creator || _default_user.email) == null ? void 0 : _b2.toLowerCase()) || "";
    this.host = (data.host || data.host_email || this.creator || _default_user.email || "").toLowerCase();
    const attendees = data.attendees || [];
    const system_email = (((_c = data.system) == null ? void 0 : _c.email) || "").toLowerCase();
    const is_system_resource = (user) => {
      var _a3;
      return !!user.resource || !!system_email && ((_a3 = user.email) == null ? void 0 : _a3.toLowerCase()) === system_email;
    };
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
        start: ((_d = data.recurrence) == null ? void 0 : _d.start) || this.event_start * 1e3 || new Date(data.recurrence.range_start * 1e3).valueOf(),
        end: data.recurrence.end || new Date(data.recurrence.range_end * 1e3).valueOf(),
        interval: data.recurrence.interval,
        pattern: data.recurrence.pattern,
        occurrences: data.recurrence.occurrences,
        days_of_week: ((_e = data.recurrence.days_of_week) == null ? void 0 : _e.map((_) => typeof _ === "number" ? _ : DAYS_OF_WEEK.indexOf(_))) || [],
        nth_of_month: data.recurrence.nth_of_month
      };
    } else {
      this.recurrence = {};
    }
    const system = data.system;
    if ((system == null ? void 0 : system.email) && !this.resources.find((_) => _.email.toLowerCase() === system.email.toLowerCase())) {
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
    this.location = data.location || ((_f = this.space) == null ? void 0 : _f.display_name) || ((_g = this.space) == null ? void 0 : _g.name) || "";
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
    const linked_assets = this.linked_bookings.filter((_) => _.booking_type === "asset-request").map((_) => {
      var _a3;
      return (_a3 = _.extension_data) == null ? void 0 : _a3.request;
    }).filter((_) => !!_);
    const asset_requests = (linked_assets.length ? linked_assets : this.extension_data.assets) || [];
    this.extension_data.images = this.extension_data.images || data.images || [];
    this.extension_data.view_access = this.extension_data.view_access || data.view_access || ((_h = data.permission) == null ? void 0 : _h.toUpperCase()) || "OPEN";
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
    var _a2, _b2;
    const obj = __spreadValues({}, this);
    const is_full_day_period = this.all_day && getUnixTime(this.date) === getUnixTime(startOfDayInTimezone(this.date, this.timezone)) && getUnixTime(this.date_end) === getUnixTime(endOfDayInTimezone(this.date_end, this.timezone));
    const is_custom_all_day = this.all_day && !is_full_day_period;
    const date = is_full_day_period ? startOfDayInTimezone(this.date, this.timezone) : this.date;
    const end = is_full_day_period ? endOfDayInTimezone(this.date_end, this.timezone) + 1 : this.date_end;
    obj.event_start = getUnixTime(date);
    obj.event_end = getUnixTime(end);
    const attendees = this.attendees;
    this.recurring = ((_a2 = this.recurrence) == null ? void 0 : _a2.pattern) && this.recurrence._pattern !== "none";
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
    obj.system_id = (_b2 = this.system) == null ? void 0 : _b2.id;
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
    if (!(cache == null ? void 0 : cache.cached_at) || cache.token_id !== tokenID() || cache.cached_at + MAX_CACHE_AGE < Date.now()) {
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
function waitForCurrentUser() {
  return firstValueFrom(_current_user.pipe(first((user) => !isEmptyUser(user))));
}
function hasPermission(subsystem, permissions) {
  var _a2;
  if ((_a2 = user_signal().groups) == null ? void 0 : _a2.includes("placeos_admin"))
    return true;
  return (getPermissionMask(subsystem) & permissions) === permissions;
}
function getPermissionMask(subsystem) {
  var _a2;
  let permissions = 0;
  for (const { group, permissions: group_permissions } of user_groups()) {
    if ((_a2 = group.subsystems) == null ? void 0 : _a2.includes(subsystem)) {
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
function jsonRecord(value) {
  return isJsonRecord(value) ? value : {};
}

// libs/common/src/lib/google-analytics.service.ts
var _GoogleAnalyticsService = class _GoogleAnalyticsService {
  constructor() {
    this.enabled = true;
    this.app_name = "GA_APP";
    this._ga4 = false;
    this.timers = {};
  }
  init(tracking_id = "") {
    if (!this.enabled)
      return;
    this._ga4 = !!(tracking_id == null ? void 0 : tracking_id.startsWith("G-"));
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
      if (first_script == null ? void 0 : first_script.parentNode) {
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
};
_GoogleAnalyticsService.\u0275fac = function GoogleAnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GoogleAnalyticsService)();
};
_GoogleAnalyticsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleAnalyticsService, factory: _GoogleAnalyticsService.\u0275fac, providedIn: "root" });
var GoogleAnalyticsService = _GoogleAnalyticsService;
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
  "time": 1795435252345
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
    return typeof logo === "string" ? logo : (logo == null ? void 0 : logo.src) || "";
  },
  ...ngDevMode ? [{ debugName: "themed_logo" }] : (
    /* istanbul ignore next */
    []
  )
);
function themedLogo() {
  return themed_logo;
}
var _SettingsService = class _SettingsService extends AsyncHandler {
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
    var _a2;
    this._title.setTitle(`${value} | ${this.get("app.name") || this._app_name}`);
    const tracking_id = this.get("app.analytics.tracking_id");
    if (!tracking_id || this.get("app.analytics.enabled") === false)
      return;
    (_a2 = this._analytics) == null ? void 0 : _a2.send("pagename", { title: value });
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
    var _a2;
    if (this.get("debug"))
      window.debug = true;
    if ((_a2 = this.get("app")) == null ? void 0 : _a2.name) {
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
    const details = data == null ? void 0 : data.details;
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
    if (!(user == null ? void 0 : user.id) || !Object.keys(this._pending_settings).length)
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
    var _a2;
    if (this.theme)
      return;
    const os_dark = (window == null ? void 0 : window.matchMedia) ? (_a2 = window == null ? void 0 : window.matchMedia("(prefers-color-scheme: dark)")) == null ? void 0 : _a2.matches : false;
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
        if (user == null ? void 0 : user.id)
          return resolve(user);
        this.timeout("current_user", check, 100);
      };
      check();
    });
  }
};
_SettingsService.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsService)();
};
_SettingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
var SettingsService = _SettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

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

export {
  toDate,
  addDays,
  addMonths,
  addHours,
  startOfDay,
  addMinutes,
  differenceInMinutes,
  endOfDay,
  format,
  getUnixTime,
  isBefore,
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
  operation,
  call,
  splitModuleSlug,
  registerSystem,
  mockSystem,
  CallFailed,
  orThrow,
  orThrowPage,
  browserEnvironment,
  metadata_exports,
  systems_exports,
  zones_exports,
  setTranslationService,
  i18n,
  LocaleService,
  setNotifyOutlet,
  lazySnackbar,
  notifySuccess,
  notifyError,
  notifyInfo,
  setAppName,
  appName,
  setDebugLogging,
  log2 as log,
  scoped_log,
  padLength,
  unique,
  randomInt,
  randomString,
  flatten,
  timePeriodsIntersect,
  predictableRandomInt,
  capitalizeFirstLetter,
  firstTruthyValueFrom,
  withTimeout,
  errorMessage2 as errorMessage,
  HotkeysService,
  SECONDS,
  MINUTES,
  startPlaceClient,
  stopPlaceClient,
  placeSession,
  placeRealtime,
  realtimeConnected,
  isMock,
  authority,
  isOnline,
  onlineState,
  waitForOnline,
  token,
  apiKey,
  clientId,
  apiOrigin,
  isFixedDevice,
  setToken,
  setApiKey,
  invalidateToken,
  authorise,
  GoogleAnalyticsService,
  VERSION,
  listenToConsole,
  jsonRecord,
  DEFAULT_SETTINGS,
  isPublicMode,
  Organisation,
  BuildingLevel,
  Building,
  Region,
  Space,
  setInternalUserDomain,
  CalendarEvent,
  GroupPermission,
  current_user,
  user_groups_loaded,
  user_groups_failed,
  user_group_names,
  currentUser,
  waitForCurrentUser,
  hasPermission,
  settingSignal,
  themedLogo,
  SettingsService
};
//# debugId=75f51d9c-8797-560f-875a-b0c9917ee277
//# sourceMappingURL=chunk-MLZL75HV.js.map
