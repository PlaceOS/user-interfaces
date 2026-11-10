import {
  Jr
} from "./chunk-3KRYKYLJ.js";
import {
  signal
} from "./chunk-CHGRMEMJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KUGYOAP2.js";

// libs/components/src/lib/binding-debug-hooks.ts
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
var execute_id = 0;
function bindingKey(module, binding) {
  return `${module.system.id}|${module.id}|${binding.name}`;
}
function trackBinding(module, binding) {
  const key = bindingKey(module, binding);
  if (records_by_key.has(key))
    return binding;
  const source = binding.listen();
  const emit = source.set.bind(source);
  const record = {
    key,
    system_id: module.system.id,
    module_id: module.id,
    module_name: module.name,
    module_index: module.index,
    name: binding.name,
    binding,
    value: signal(source.value),
    last_update: signal(source.value === void 0 ? 0 : Date.now()),
    overridden: signal(false),
    driver_value: source.value,
    emit
  };
  records_by_key.set(key, record);
  binding_records.update((records) => [...records, record]);
  source.subscribe((value) => record.value.set(value));
  source.set = (value) => {
    record.driver_value = value;
    record.last_update.set(Date.now());
    if (!record.overridden())
      emit(value);
  };
  return binding;
}
function addExecuteMessage(message) {
  execute_messages.update((messages) => [...messages, message].slice(-250));
}
function installBindingDebugHooks() {
  const prototype = Jr.prototype;
  if (prototype.__binding_debug_hooks__)
    return;
  prototype.__binding_debug_hooks__ = true;
  const variable = Jr.prototype.variable;
  Jr.prototype.variable = function(name) {
    return trackBinding(this, variable.call(this, name));
  };
  const binding = Jr.prototype.binding;
  Jr.prototype.binding = function(name) {
    return trackBinding(this, binding.call(this, name));
  };
  const execute = Jr.prototype.execute;
  Jr.prototype.execute = function(method, args = [], timeout_delay) {
    const id = ++execute_id;
    const details = {
      id,
      system_id: this.system.id,
      module_id: this.id,
      module_name: this.name,
      module_index: this.index,
      method
    };
    addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "send",
      value: args,
      time: Date.now(),
      error: false
    }));
    const request = execute.call(this, method, args, timeout_delay);
    request.then((value) => addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "receive",
      value,
      time: Date.now(),
      error: false
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
//# debugId=628679cc-5b5b-5123-b888-7749274b6118
//# sourceMappingURL=chunk-FIMYT7OJ.js.map
