import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  Validators,
  elementAcceptsMinMax,
  isNativeFormElement,
  isTextualFormElement,
  selectValueAccessor,
  setNativeDomProperty,
  ɵFORM_CONTROL_INTEGRATION
} from "./chunk-PAKYII5B.js";
import {
  CSP_NONCE,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Renderer2,
  RuntimeError,
  afterRenderEffect,
  computed,
  effect,
  formatRuntimeError,
  forwardRef,
  inject,
  input,
  linkedSignal,
  setClassMetadata,
  signal,
  untracked,
  ɵɵControlFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-KUITXW5O.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@angular/forms/fesm2022/_validation_errors-chunk.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function isArray(value) {
  return Array.isArray(value);
}
var MetadataReducer = {
  list() {
    return {
      reduce: (acc, item) => item === void 0 ? acc : [...acc, item],
      getInitial: () => []
    };
  },
  min() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return item < acc ? item : acc;
      },
      getInitial: () => void 0
    };
  },
  max() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return item > acc ? item : acc;
      },
      getInitial: () => void 0
    };
  },
  or() {
    return {
      reduce: (prev, next) => prev || next,
      getInitial: () => false
    };
  },
  and() {
    return {
      reduce: (prev, next) => prev && next,
      getInitial: () => true
    };
  },
  override
};
function override(getInitial) {
  return {
    reduce: (_, item) => item,
    getInitial: () => getInitial?.()
  };
}
var IS_ASYNC_VALIDATION_RESOURCE = /* @__PURE__ */ Symbol("IS_ASYNC_VALIDATION_RESOURCE");
var MetadataKey = class {
  reducer;
  create;
  brand;
  [IS_ASYNC_VALIDATION_RESOURCE];
  constructor(reducer, create) {
    this.reducer = reducer;
    this.create = create;
  }
};
function createMetadataKey(reducer) {
  return new MetadataKey(reducer ?? MetadataReducer.override());
}
function createLimitSelectionKey() {
  return createMetadataKey();
}
var REQUIRED = createMetadataKey(MetadataReducer.or());
var MIN = createLimitSelectionKey();
var MIN_DATE = createMetadataKey(MetadataReducer.max());
var MIN_NUMBER = createMetadataKey(MetadataReducer.max());
var MAX = createLimitSelectionKey();
var MAX_DATE = createMetadataKey(MetadataReducer.min());
var MAX_NUMBER = createMetadataKey(MetadataReducer.min());
var MIN_LENGTH = createMetadataKey(MetadataReducer.max());
var MAX_LENGTH = createMetadataKey(MetadataReducer.min());
var PATTERN = createMetadataKey(MetadataReducer.list());
function shallowArrayEquals(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!Object.is(a[i], b[i])) return false;
  }
  return true;
}
function addDefaultField(errors, fieldTree) {
  if (isArray(errors)) {
    for (const error of errors) {
      error.fieldTree ??= fieldTree;
    }
  } else if (errors) {
    errors.fieldTree ??= fieldTree;
  }
  return errors;
}
var DEBOUNCER = createMetadataKey();
var FALSE_SIGNAL = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE_SIGNAL"
}] : []);
var ROOT_PATH_KEYS = computed(() => [], ...ngDevMode ? [{
  debugName: "ROOT_PATH_KEYS"
}] : []);
var ROOT_KEY_IN_PARENT = computed(() => {
  throw new RuntimeError(1905, ngDevMode && "The top-level field in the form has no parent.");
}, ...ngDevMode ? [{
  debugName: "ROOT_KEY_IN_PARENT"
}] : []);
var EMPTY = computed(() => [], ...ngDevMode ? [{
  debugName: "EMPTY"
}] : []);
var FALSE = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE"
}] : []);
var REGISTER_WEBMCP_FORM = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "REGISTER_WEBMCP_FORM" : "");
async function submit(form, options) {
  const node = untracked(form);
  if (untracked(node.submitState.submitting)) {
    return false;
  }
  const field = options === void 0 ? node.structure.root.fieldProxy : form;
  const detail = {
    root: node.structure.root.fieldProxy,
    submitted: form
  };
  options = typeof options === "function" ? {
    action: options
  } : options ?? node.structure.fieldManager.submitOptions;
  const action = options?.action;
  if (!action) {
    throw new RuntimeError(1915, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot submit form with no submit action. Specify the action when creating the form, or as an additional argument to `submit()`.");
  }
  node.markAsTouched();
  const onInvalid = options?.onInvalid;
  const shouldRun = shouldRunAction(node, options?.ignoreValidators);
  try {
    if (shouldRun) {
      node.submitState.selfSubmitting.set(true);
      const errors = await untracked(() => action?.(field, detail));
      errors && setSubmissionErrors(node, errors);
      return !errors || isArray(errors) && errors.length === 0;
    } else {
      untracked(() => onInvalid?.(field, detail));
    }
    return false;
  } finally {
    node.submitState.selfSubmitting.set(false);
  }
}
function shouldRunAction(node, ignoreValidators) {
  switch (ignoreValidators) {
    case "all":
      return true;
    case "none":
      return untracked(node.valid);
    default:
      return !untracked(node.invalid);
  }
}
function setSubmissionErrors(submittedField, errors) {
  if (!isArray(errors)) {
    errors = [errors];
  }
  const errorsByField = /* @__PURE__ */ new Map();
  for (const error of errors) {
    const errorWithField = addDefaultField(error, submittedField.fieldTree);
    const field = errorWithField.fieldTree();
    let fieldErrors = errorsByField.get(field);
    if (!fieldErrors) {
      fieldErrors = [];
      errorsByField.set(field, fieldErrors);
    }
    fieldErrors.push(errorWithField);
  }
  for (const [field, fieldErrors] of errorsByField) {
    field.submitState.submissionErrors.set(fieldErrors);
  }
}
var CompatValidationError = class {
  kind = "compat";
  control;
  fieldTree;
  context;
  message;
  constructor({
    context,
    kind,
    control
  }) {
    this.context = context;
    this.kind = kind;
    this.control = control;
  }
};
function signalErrorsToValidationErrors(errors) {
  if (errors.length === 0) {
    return null;
  }
  const errObj = {};
  for (const error of errors) {
    errObj[error.kind] = error instanceof CompatValidationError ? error.context : error;
  }
  return errObj;
}
function reactiveErrorsToSignalErrors(errors, control) {
  if (errors === null) {
    return [];
  }
  return Object.entries(errors).map(([kind, context]) => {
    return new CompatValidationError({
      context,
      kind,
      control
    });
  });
}

// node_modules/@angular/forms/fesm2022/signals.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var SIGNAL_FORMS_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SIGNAL_FORMS_CONFIG" : "");
function normalizeErrors(error) {
  if (error === void 0) {
    return [];
  }
  if (Array.isArray(error)) {
    return error;
  }
  return [error];
}
var BaseNgValidationError = class {
  __brand = void 0;
  kind = "";
  fieldTree;
  message;
  constructor(options) {
    if (options) {
      Object.assign(this, options);
    }
  }
};
var NativeInputParseError = class extends BaseNgValidationError {
  kind = "parse";
};
function createParser(getValue, setValue, parse) {
  const errors = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    source: getValue,
    computation: () => [],
    equal: shallowArrayEquals
  }));
  const setRawValue = (rawValue) => {
    const result = parse(rawValue);
    errors.set(normalizeErrors(result.error));
    if (result.value !== void 0) {
      setValue(result.value);
    }
    errors.set(normalizeErrors(result.error));
  };
  const reset = () => {
    errors.set([]);
  };
  return {
    errors: errors.asReadonly(),
    setRawValue,
    reset
  };
}
var InteropNgControl = class {
  field;
  constructor(field) {
    this.field = field;
  }
  control = this;
  get value() {
    return this.field().controlValue();
  }
  get valid() {
    return this.field().valid();
  }
  get invalid() {
    return this.field().invalid();
  }
  get pending() {
    return this.field().pending();
  }
  get disabled() {
    return this.field().disabled();
  }
  get enabled() {
    return !this.field().disabled();
  }
  get errors() {
    return signalErrorsToValidationErrors(this.field().errors());
  }
  get pristine() {
    return !this.field().dirty();
  }
  get dirty() {
    return this.field().dirty();
  }
  get touched() {
    return this.field().touched();
  }
  get untouched() {
    return !this.field().touched();
  }
  get status() {
    if (this.field().disabled()) {
      return "DISABLED";
    }
    if (this.field().valid()) {
      return "VALID";
    }
    if (this.field().invalid()) {
      return "INVALID";
    }
    if (this.field().pending()) {
      return "PENDING";
    }
    throw new RuntimeError(1910, ngDevMode && "Unknown form control status");
  }
  valueAccessor = null;
  hasValidator(validator) {
    if (validator === Validators.required) {
      return this.field().required();
    }
    return false;
  }
  updateValueAndValidity() {
  }
};
var FIELD_STATE_KEY_TO_CONTROL_BINDING = {
  disabled: "disabled",
  disabledReasons: "disabledReasons",
  dirty: "dirty",
  errors: "errors",
  hidden: "hidden",
  invalid: "invalid",
  max: "max",
  maxLength: "maxLength",
  min: "min",
  minLength: "minLength",
  name: "name",
  pattern: "pattern",
  pending: "pending",
  readonly: "readonly",
  required: "required",
  touched: "touched"
};
var CONTROL_BINDING_TO_FIELD_STATE_KEY = /* @__PURE__ */ (() => {
  const map = {};
  for (const key of Object.keys(FIELD_STATE_KEY_TO_CONTROL_BINDING)) {
    map[FIELD_STATE_KEY_TO_CONTROL_BINDING[key]] = key;
  }
  return map;
})();
function readFieldStateBindingValue(fieldState, key) {
  const property = CONTROL_BINDING_TO_FIELD_STATE_KEY[key];
  return fieldState[property]?.();
}
var CONTROL_BINDING_NAMES = /* @__PURE__ */ (() => Object.values(FIELD_STATE_KEY_TO_CONTROL_BINDING))();
function createBindings() {
  return {};
}
function bindingUpdated(bindings, key, value) {
  if (bindings[key] !== value) {
    bindings[key] = value;
    return true;
  }
  return false;
}
function getNativeControlValue(element, currentValue, validityMonitor) {
  let modelValue;
  if (isInput(element) && validityMonitor.isBadInput(element)) {
    return {
      error: new NativeInputParseError()
    };
  }
  switch (element.type) {
    case "checkbox":
      return {
        value: element.checked
      };
    case "number":
    case "range":
    case "datetime-local":
      modelValue = untracked(currentValue);
      if (typeof modelValue === "number" || modelValue === null) {
        return {
          value: element.value === "" ? null : element.valueAsNumber
        };
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      modelValue = untracked(currentValue);
      if (modelValue === null || modelValue instanceof Date) {
        return {
          value: element.valueAsDate
        };
      } else if (typeof modelValue === "number") {
        return {
          value: element.valueAsNumber
        };
      }
      break;
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    modelValue ??= untracked(currentValue);
    if (typeof modelValue === "number" || modelValue === null) {
      if (element.value === "") {
        return {
          value: null
        };
      }
      const parsed = Number(element.value);
      if (Number.isNaN(parsed)) {
        return {
          error: new NativeInputParseError()
        };
      }
      return {
        value: parsed
      };
    }
  }
  return {
    value: element.value
  };
}
function setNativeControlValue(element, value) {
  switch (element.type) {
    case "checkbox":
      element.checked = value;
      return;
    case "radio":
      element.checked = value === element.value;
      return;
    case "number":
    case "range":
    case "datetime-local":
      if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      } else if (value === null) {
        element.value = "";
        return;
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      if (value === null || value instanceof Date) {
        element.valueAsDate = value;
        return;
      } else if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      }
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    if (typeof value === "number") {
      element.value = isNaN(value) ? "" : String(value);
      return;
    }
    if (value === null) {
      if (typeof ngDevMode !== "undefined" && ngDevMode) {
        console.warn(formatRuntimeError(1921, `The text input ${element.name} received a null value. Text inputs should use empty strings to represent null values.  The input's value will be set to an empty string instead.`));
      }
      element.value = "";
      return;
    }
  }
  element.value = value;
}
function setNativeNumberControlValue(element, value) {
  if (isNaN(value)) {
    element.value = "";
  } else {
    element.valueAsNumber = value;
  }
}
function isInput(element) {
  return element.tagName === "INPUT";
}
function inputRequiresValidityTracking(input2) {
  return input2.type === "date" || input2.type === "datetime-local" || input2.type === "month" || input2.type === "time" || input2.type === "week";
}
function formatDateForInput(date, type) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  if (type === "month") {
    return `${year}-${month}`;
  }
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatDateForMinMax(name, value, type) {
  if (value instanceof Date && (name === "min" || name === "max") && (type === "date" || type === "month")) {
    return formatDateForInput(value, type);
  }
  return value;
}
function customControlCreate(host, parent) {
  host.listenToCustomControlModel((value) => parent.state().controlValue.set(value));
  host.listenToCustomControlOutput("touch", () => parent.state().markAsTouched());
  parent.registerAsBinding(host.customControl);
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    const controlValue = state.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      host.setCustomControlModelInput(controlValue);
    }
    for (const name of CONTROL_BINDING_NAMES) {
      let value;
      if (name === "errors") {
        value = parent.errors();
      } else {
        value = readFieldStateBindingValue(state, name);
      }
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name) && !host.customControlHasInput(name)) {
          const domValue = formatDateForMinMax(name, value, parent.nativeFormElement.type);
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, domValue);
        }
      }
    }
  };
}
function isValidatorObject(v) {
  return typeof v === "object" && v !== null;
}
function cvaControlCreate(host, parent) {
  const bindings = createBindings();
  parent.controlValueAccessor.registerOnChange((value) => {
    bindings["controlValue"] = value;
    parent.state().controlValue.set(value);
  });
  parent.controlValueAccessor.registerOnTouched(() => parent.state().markAsTouched());
  const legacyValidators = parent.injector.get(NG_VALIDATORS, null, {
    optional: true,
    self: true
  });
  if (legacyValidators) {
    let version;
    for (const v of legacyValidators) {
      if (isValidatorObject(v) && v.registerOnValidatorChange) {
        version ??= signal(0);
        v.registerOnValidatorChange(() => {
          version.update((n) => n + 1);
        });
      }
    }
    const validatorFns = legacyValidators.map((v) => typeof v === "function" ? v : v.validate.bind(v));
    const mergedValidator = Validators.compose(validatorFns);
    const parseErrors = computed(() => {
      version?.();
      const errors = mergedValidator ? mergedValidator(parent.interopNgControl.control) : null;
      return reactiveErrorsToSignalErrors(errors, parent.interopNgControl.control);
    }, ...ngDevMode ? [{
      debugName: "parseErrors"
    }] : []);
    parent.parseErrorsSource.set(parseErrors);
  }
  parent.registerAsBinding({
    reset: () => {
      const value = parent.state().value();
      bindings["controlValue"] = value;
      untracked(() => parent.controlValueAccessor.writeValue(value));
    }
  });
  return () => {
    const fieldState = parent.state();
    const controlValue = fieldState.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      untracked(() => parent.controlValueAccessor.writeValue(controlValue));
    }
    for (const name of CONTROL_BINDING_NAMES) {
      const value = readFieldStateBindingValue(fieldState, name);
      if (bindingUpdated(bindings, name, value)) {
        const propertyWasSet = host.setInputOnDirectives(name, value, name === "name" ? isDefinedPredicate : void 0);
        if (name === "disabled" && parent.controlValueAccessor.setDisabledState) {
          untracked(() => parent.controlValueAccessor.setDisabledState(value));
        } else if (!propertyWasSet && parent.elementAcceptsNativeProperty(name)) {
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value);
        }
      }
    }
  };
}
function isDefinedPredicate(value) {
  return value == null;
}
function observeSelectMutations(select, onMutation, destroyRef) {
  if (typeof MutationObserver !== "function") {
    return;
  }
  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => isRelevantSelectMutation(m))) {
      onMutation();
    }
  });
  observer.observe(select, {
    attributes: true,
    attributeFilter: ["value"],
    characterData: true,
    childList: true,
    subtree: true
  });
  destroyRef.onDestroy(() => observer.disconnect());
}
function isRelevantSelectMutation(mutation) {
  if (mutation.type === "childList" || mutation.type === "characterData") {
    if (mutation.target instanceof Comment) {
      return false;
    }
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    for (const node of mutation.removedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    return false;
  }
  if (mutation.type === "attributes" && mutation.target instanceof HTMLOptionElement) {
    return true;
  }
  return false;
}
function nativeControlCreate(host, parent, parseErrorsSource, validityMonitor) {
  let updateMode = false;
  const input2 = parent.nativeFormElement;
  const parser = createParser(() => parent.state().value(), (rawValue) => parent.state().controlValue.set(rawValue), (_rawValue) => getNativeControlValue(input2, parent.state().value, validityMonitor));
  parseErrorsSource.set(parser.errors);
  parent.onReset = () => {
    parser.reset();
    const value = parent.state().value();
    bindings["controlValue"] = value;
    setNativeControlValue(input2, value);
  };
  host.listenToDom("input", () => parser.setRawValue(void 0));
  host.listenToDom("blur", () => parent.state().markAsTouched());
  if (isInput(input2) && inputRequiresValidityTracking(input2)) {
    validityMonitor.watchValidity(parent.destroyRef, input2, () => parser.setRawValue(void 0));
  }
  parent.registerAsBinding();
  if (input2.tagName === "SELECT") {
    observeSelectMutations(input2, () => {
      if (!updateMode) {
        return;
      }
      input2.value = parent.state().controlValue();
    }, parent.destroyRef);
  }
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    for (const name of CONTROL_BINDING_NAMES) {
      const value = readFieldStateBindingValue(state, name);
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name)) {
          const domValue = formatDateForMinMax(name, value, input2.type);
          setNativeDomProperty(parent.renderer, input2, name, domValue);
        }
      }
    }
    const controlValue = state.controlValue();
    const controlValueChanged = bindingUpdated(bindings, "controlValue", controlValue);
    const radioValueChanged = input2.type === "radio" && bindingUpdated(bindings, "radioValue", input2.value);
    if (controlValueChanged || radioValueChanged) {
      setNativeControlValue(input2, controlValue);
    }
    updateMode = true;
  };
}
var InputValidityMonitor = class _InputValidityMonitor {
  static \u0275fac = function InputValidityMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputValidityMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputValidityMonitor,
    factory: (__ngFactoryType__) => AnimationInputValidityMonitor.\u0275fac(__ngFactoryType__),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValidityMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useClass: forwardRef(() => AnimationInputValidityMonitor)
    }]
  }], null, null);
})();
var AnimationInputValidityMonitor = class _AnimationInputValidityMonitor extends InputValidityMonitor {
  document = inject(DOCUMENT);
  cspNonce = inject(CSP_NONCE, {
    optional: true
  });
  injectedStyles = /* @__PURE__ */ new WeakMap();
  watchValidity(destroyRef, element, callback) {
    if (false) {
      return;
    }
    const rootNode = element.getRootNode();
    if (!this.injectedStyles.has(rootNode)) {
      this.injectedStyles.set(rootNode, this.createTransitionStyle(rootNode));
    }
    const onAnimationStart = (event) => {
      const animationEvent = event;
      if (animationEvent.animationName === "ng-valid" || animationEvent.animationName === "ng-invalid") {
        callback();
      }
    };
    element.addEventListener("animationstart", onAnimationStart);
    destroyRef.onDestroy(() => {
      element.removeEventListener("animationstart", onAnimationStart);
    });
  }
  isBadInput(element) {
    return element.validity?.badInput ?? false;
  }
  createTransitionStyle(rootNode) {
    const element = this.document.createElement("style");
    if (this.cspNonce) {
      element.nonce = this.cspNonce;
    }
    element.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `;
    if (rootNode.nodeType === 9) {
      rootNode.head?.appendChild(element);
    } else {
      rootNode.appendChild(element);
    }
    return element;
  }
  ngOnDestroy() {
    this.injectedStyles.get(this.document)?.remove();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AnimationInputValidityMonitor_BaseFactory;
    return function AnimationInputValidityMonitor_Factory(__ngFactoryType__) {
      return (\u0275AnimationInputValidityMonitor_BaseFactory || (\u0275AnimationInputValidityMonitor_BaseFactory = \u0275\u0275getInheritedFactory(_AnimationInputValidityMonitor)))(__ngFactoryType__ || _AnimationInputValidityMonitor);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationInputValidityMonitor,
    factory: _AnimationInputValidityMonitor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationInputValidityMonitor, [{
    type: Injectable
  }], null, null);
})();
var \u0275NgFieldDirective = /* @__PURE__ */ Symbol();
var FORM_FIELD = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_FIELD" : "");
var FormField = class _FormField {
  field = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "field"
  } : {}), {
    alias: "formField"
  }));
  state = computed(() => this.field()(), ...ngDevMode ? [{
    debugName: "state"
  }] : []);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  injector = inject(Injector);
  element = inject(ElementRef).nativeElement;
  elementIsNativeFormElement = isNativeFormElement(this.element);
  elementAcceptsTextualValues = isTextualFormElement(this.element);
  _elementAcceptsMinMax;
  nativeFormElement = this.elementIsNativeFormElement ? this.element : void 0;
  focuser = (options) => this.element.focus(options);
  controlValueAccessors = inject(NG_VALUE_ACCESSOR, {
    optional: true,
    self: true
  });
  config = inject(SIGNAL_FORMS_CONFIG, {
    optional: true
  });
  validityMonitor = inject(InputValidityMonitor);
  parseErrorsSource = signal(void 0, ...ngDevMode ? [{
    debugName: "parseErrorsSource"
  }] : []);
  _interopNgControl;
  get interopNgControl() {
    return this._interopNgControl ??= new InteropNgControl(this.state);
  }
  parseErrors = computed(() => this.parseErrorsSource()?.().map((err) => __spreadProps(__spreadValues({}, err), {
    fieldTree: untracked(this.state).fieldTree,
    formField: this
  })) ?? [], __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "parseErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  errors = computed(() => this.state().errors().filter((err) => !err.formField || err.formField === this), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  isFieldBinding = false;
  resetter = () => {
  };
  parseErrorsResetCallback;
  setParseErrors(source) {
    this.parseErrorsSource.set(source);
  }
  set onReset(callback) {
    this.parseErrorsResetCallback = callback;
  }
  get onReset() {
    return this.parseErrorsResetCallback;
  }
  get controlValueAccessor() {
    if (!this.controlValueAccessors || this.controlValueAccessors.length === 0) {
      return this.interopNgControl?.valueAccessor ?? void 0;
    }
    return selectValueAccessor(this.interopNgControl, this.controlValueAccessors) ?? void 0;
  }
  installClassBindingEffect() {
    const classes = Object.entries(this.config?.classes ?? {}).map(([className, computation]) => [className, computed(() => computation(this))]);
    if (classes.length === 0) {
      return;
    }
    const bindings = createBindings();
    afterRenderEffect({
      write: () => {
        for (const [className, computation] of classes) {
          const active = computation();
          if (bindingUpdated(bindings, className, active)) {
            if (active) {
              this.renderer.addClass(this.element, className);
            } else {
              this.renderer.removeClass(this.element, className);
            }
          }
        }
      }
    }, {
      injector: this.injector
    });
  }
  focus(options) {
    this.focuser(options);
  }
  reset() {
    this.resetter();
    this.parseErrorsResetCallback?.(this.state().value());
  }
  registerAsBinding(bindingOptions) {
    if (this.isFieldBinding) {
      throw new RuntimeError(1913, typeof ngDevMode !== "undefined" && ngDevMode && "FormField already registered as a binding");
    }
    this.isFieldBinding = true;
    this.installClassBindingEffect();
    if (bindingOptions?.focus) {
      this.focuser = (focusOptions) => bindingOptions.focus(focusOptions);
    }
    if (bindingOptions?.reset) {
      this.resetter = () => bindingOptions.reset();
    }
    effect((onCleanup) => {
      const fieldNode = this.state();
      fieldNode.nodeState.formFieldBindings.update((controls) => [...controls, this]);
      onCleanup(() => {
        fieldNode.nodeState.formFieldBindings.update((controls) => controls.filter((c) => c !== this));
      });
    }, {
      injector: this.injector
    });
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      effect(() => {
        const fieldNode = this.state();
        if (fieldNode.hidden()) {
          const path = fieldNode.structure.pathKeys().join(".") || "<root>";
          console.warn(formatRuntimeError(1916, `Field '${path}' is hidden but is being rendered. Hidden fields should be removed from the DOM using @if.`));
        }
      }, {
        injector: this.injector
      });
    }
  }
  [\u0275NgFieldDirective];
  \u0275ngControlCreate(host) {
    if (host.hasPassThrough) {
      return;
    }
    if (this.controlValueAccessor) {
      this.\u0275ngControlUpdate = cvaControlCreate(host, this);
    } else if (host.customControl) {
      this.\u0275ngControlUpdate = customControlCreate(host, this);
    } else if (this.elementIsNativeFormElement) {
      this.\u0275ngControlUpdate = nativeControlCreate(host, this, this.parseErrorsSource, this.validityMonitor);
    } else {
      throw new RuntimeError(1914, typeof ngDevMode !== "undefined" && ngDevMode && `${host.descriptor} is an invalid [formField] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`);
    }
  }
  \u0275ngControlUpdate;
  elementAcceptsNativeProperty(key) {
    if (!this.elementIsNativeFormElement) {
      return false;
    }
    switch (key) {
      case "min":
      case "max":
        return this._elementAcceptsMinMax ??= elementAcceptsMinMax(this.element);
      case "minLength":
      case "maxLength":
        return this.elementAcceptsTextualValues;
      case "disabled":
      case "required":
      case "readonly":
      case "name":
        return true;
      default:
        return false;
    }
  }
  static \u0275fac = function FormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormField)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormField,
    selectors: [["", "formField", ""]],
    inputs: {
      field: [1, "formField", "field"]
    },
    exportAs: ["formField"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: FORM_FIELD,
      useExisting: _FormField
    }, {
      provide: NgControl,
      useFactory: () => inject(_FormField).interopNgControl
    }, {
      provide: \u0275FORM_CONTROL_INTEGRATION,
      useFactory: () => inject(FORM_FIELD, {
        self: true
      })
    }]), \u0275\u0275ControlFeature("formField")]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormField, [{
    type: Directive,
    args: [{
      selector: "[formField]",
      exportAs: "formField",
      providers: [{
        provide: FORM_FIELD,
        useExisting: FormField
      }, {
        provide: NgControl,
        useFactory: () => inject(FormField).interopNgControl
      }, {
        provide: \u0275FORM_CONTROL_INTEGRATION,
        useFactory: () => inject(FORM_FIELD, {
          self: true
        })
      }]
    }]
  }], null, {
    field: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formField",
        required: true
      }]
    }]
  });
})();
var FormRoot = class _FormRoot {
  fieldTree = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fieldTree"
  } : {}), {
    alias: "formRoot"
  }));
  onSubmit(event) {
    event.preventDefault();
    untracked(() => {
      const fieldTree = this.fieldTree();
      const node = fieldTree();
      if (node.structure.fieldManager.submitOptions) {
        submit(fieldTree);
      }
    });
  }
  static \u0275fac = function FormRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormRoot)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormRoot,
    selectors: [["form", "formRoot", ""]],
    hostAttrs: ["novalidate", ""],
    hostBindings: function FormRoot_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormRoot_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        });
      }
    },
    inputs: {
      fieldTree: [1, "formRoot", "fieldTree"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoot, [{
    type: Directive,
    args: [{
      selector: "form[formRoot]",
      host: {
        "novalidate": "",
        "(submit)": "onSubmit($event)"
      }
    }]
  }], null, {
    fieldTree: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formRoot",
        required: true
      }]
    }]
  });
})();

export {
  FORM_FIELD
};
//# debugId=e63b6271-8913-5f88-8e4b-05a667098f1b
//# sourceMappingURL=chunk-FZHZW7PT.js.map
