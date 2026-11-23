import {
  placeRealtime
} from "./chunk-VK72XFLC.js";
import {
  signal
} from "./chunk-T4IGA262.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/components/src/lib/binding-debug-hooks.ts
var EXECUTE_MESSAGES_MAX = 250;
var binding_records = signal(
  [],
  ...ngDevMode ? [{ debugName: "binding_records" }] : (
    /* istanbul ignore next */
    []
  )
);
var execute_messages = signal(
  [],
  ...ngDevMode ? [{ debugName: "execute_messages" }] : (
    /* istanbul ignore next */
    []
  )
);
var records_by_key = /* @__PURE__ */ new Map();
var listeners_by_key = /* @__PURE__ */ new Map();
var hooked = /* @__PURE__ */ new WeakSet();
var execute_id = 0;
function moduleDetails(target) {
  const index = target.index ?? 1;
  return {
    system_id: target.sys,
    module_id: `${target.mod}_${index}`,
    module_name: target.mod,
    module_index: index
  };
}
function trackBinding(target, realtime) {
  const details = moduleDetails(target);
  const key = `${details.system_id}|${details.module_id}|${target.name}`;
  const existing = records_by_key.get(key);
  if (existing)
    return existing;
  const state = realtime.value(target);
  const value = state.kind === "value" ? state.value : void 0;
  const listeners = /* @__PURE__ */ new Set();
  const record = __spreadProps(__spreadValues({
    key
  }, details), {
    name: target.name,
    count: 0,
    value: signal(value),
    last_update: signal(value === void 0 ? 0 : Date.now()),
    overridden: signal(false),
    driver_value: value,
    emit: (next) => {
      record.value.set(next);
      for (const listener of listeners) {
        listener({ kind: "value", value: next });
      }
    }
  });
  records_by_key.set(key, record);
  listeners_by_key.set(key, listeners);
  binding_records.update((records) => [...records, record]);
  return record;
}
function addExecuteMessage(message) {
  execute_messages.update((messages) => [...messages, message].slice(-EXECUTE_MESSAGES_MAX));
}
function installBindingDebugHooks() {
  let realtime;
  try {
    realtime = placeRealtime();
  } catch {
    return;
  }
  if (hooked.has(realtime))
    return;
  hooked.add(realtime);
  const bind = realtime.bind;
  realtime.bind = (target, listener) => {
    const record = trackBinding(target, realtime);
    const listeners = listeners_by_key.get(record.key);
    const wrapped = (state) => {
      if (state.kind === "value") {
        record.driver_value = state.value;
        record.last_update.set(Date.now());
        if (record.overridden())
          return;
        record.value.set(state.value);
      }
      listener(state);
    };
    listeners.add(listener);
    record.count += 1;
    const release = bind(target, wrapped);
    const override = record.overridden() ? record.value() : void 0;
    if (override !== void 0)
      listener({ kind: "value", value: override });
    let released = false;
    return () => {
      if (released)
        return;
      released = true;
      listeners.delete(listener);
      record.count -= 1;
      release();
    };
  };
  const value = realtime.value;
  realtime.value = (target) => {
    const { system_id, module_id } = moduleDetails(target);
    const record = records_by_key.get(`${system_id}|${module_id}|${target.name}`);
    const override = record?.overridden() ? record.value() : void 0;
    if (override !== void 0)
      return { kind: "value", value: override };
    return value(target);
  };
  const exec = realtime.exec;
  realtime.exec = (target, args = [], options) => {
    const details = __spreadProps(__spreadValues({
      id: ++execute_id
    }, moduleDetails(target)), {
      method: target.name
    });
    addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "send",
      value: args,
      time: Date.now(),
      error: false
    }));
    const request = exec(target, args, options);
    request.then((result) => addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "receive",
      value: result.ok === false ? result.error : result.value,
      time: Date.now(),
      error: result.ok === false
    })), (error) => addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "receive",
      value: error,
      time: Date.now(),
      error: true
    })));
    return request;
  };
}

export {
  binding_records,
  execute_messages,
  records_by_key,
  installBindingDebugHooks
};
//# debugId=54b768f7-ea67-5523-af3f-97989545a1e3
//# sourceMappingURL=chunk-3ESA7J7U.js.map
