import {
  subMinutes
} from "./chunk-RNNF4UL5.js";
import {
  ANIMATION_MODULE_TYPE,
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  Ao,
  AuthorisedUserGuard,
  BrowserModule,
  ChatComponent,
  Component,
  DOCUMENT,
  DomRendererFactory2,
  ErrorHandler,
  GlobalBannerComponent,
  GlobalLoadingComponent,
  Inject,
  Injectable,
  Ko,
  LOCALE_ID,
  LocaleService,
  MatSnackBarModule,
  MisconfiguredComponent,
  NgModule,
  NgZone,
  NoopAnimationPlayer,
  PlaceOS_Service,
  RedirectComponent,
  RendererFactory2,
  Router,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  ServiceWorkerModule,
  Sh,
  TraceService,
  UnauthorisedComponent,
  UploadsService,
  __objRest,
  __spreadProps,
  __spreadValues,
  addDays,
  addMinutes,
  addMonths,
  addSeconds,
  capitalizeFirstLetter,
  createErrorHandler,
  differenceInMinutes,
  enableProdMode,
  generateMockSpace,
  getUnixTime,
  inject,
  isBefore,
  padString,
  platformBrowser,
  predictableRandomInt,
  provideZonelessChangeDetection,
  randomInt,
  randomString,
  registerLocaleData,
  sequence,
  setClassMetadata,
  setHours,
  setMinutes,
  setMocks,
  settingSignal,
  startOfDay,
  style,
  timePeriodsIntersect,
  unique,
  ɵPRE_STYLE,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject
} from "./chunk-X7MCBCYR.js";

// node_modules/@angular/animations/fesm2022/util-CPU6TNml.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set([
  "-moz-outline-radius",
  "-moz-outline-radius-bottomleft",
  "-moz-outline-radius-bottomright",
  "-moz-outline-radius-topleft",
  "-moz-outline-radius-topright",
  "-ms-grid-columns",
  "-ms-grid-rows",
  "-webkit-line-clamp",
  "-webkit-text-fill-color",
  "-webkit-text-stroke",
  "-webkit-text-stroke-color",
  "accent-color",
  "all",
  "backdrop-filter",
  "background",
  "background-color",
  "background-position",
  "background-size",
  "block-size",
  "border",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-width",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image-outset",
  "border-image-slice",
  "border-image-width",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-width",
  "border-left",
  "border-left-color",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-width",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-width",
  "border-width",
  "bottom",
  "box-shadow",
  "caret-color",
  "clip",
  "clip-path",
  "color",
  "column-count",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-width",
  "column-width",
  "columns",
  "filter",
  "flex",
  "flex-basis",
  "flex-grow",
  "flex-shrink",
  "font",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-variation-settings",
  "font-weight",
  "gap",
  "grid-column-gap",
  "grid-gap",
  "grid-row-gap",
  "grid-template-columns",
  "grid-template-rows",
  "height",
  "inline-size",
  "input-security",
  "inset",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "left",
  "letter-spacing",
  "line-clamp",
  "line-height",
  "margin",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "mask",
  "mask-border",
  "mask-position",
  "mask-size",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-lines",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-width",
  "padding",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "perspective",
  "perspective-origin",
  "right",
  "rotate",
  "row-gap",
  "scale",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-coordinate",
  "scroll-snap-destination",
  "scrollbar-color",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "tab-size",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-indent",
  "text-shadow",
  "text-underline-offset",
  "top",
  "transform",
  "transform-origin",
  "translate",
  "vertical-align",
  "visibility",
  "width",
  "word-spacing",
  "z-index",
  "zoom"
]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return { element, triggerName, fromState, toState, phaseName, totalTime, disabled: !!disabled };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return { duration: 0, delay: 0, easing: "" };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return { duration, delay, easing };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@angular/common/locales/ar.js
var u = void 0;
function plural(val) {
  const n = val;
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  if (n === 2)
    return 2;
  if (n % 100 === Math.floor(n % 100) && (n % 100 >= 3 && n % 100 <= 10))
    return 3;
  if (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 99))
    return 4;
  return 5;
}
var ar_default = ["ar", [["\u0635", "\u0645"], u, u], [["\u0635", "\u0645"], u, ["\u0635\u0628\u0627\u062D\u064B\u0627", "\u0645\u0633\u0627\u0621\u064B"]], [["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"], u, ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"]], u, [["\u064A", "\u0641", "\u0645", "\u0623", "\u0648", "\u0646", "\u0644", "\u063A", "\u0633", "\u0643", "\u0628", "\u062F"], ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"], u], u, [["\u0642.\u0645", "\u0645"], u, ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0645\u064A\u0644\u0627\u062F\u064A"]], 6, [5, 6], ["d\u200F/M\u200F/y", "dd\u200F/MM\u200F/y", "d MMMM y", "EEEE\u060C d MMMM y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} \u0641\u064A {0}", u], [".", ",", ";", "\u200E%\u200E", "\u200E+", "\u200E-", "E", "\xD7", "\u2030", "\u221E", "\u0644\u064A\u0633\xA0\u0631\u0642\u0645\u064B\u0627", ":"], ["#,##0.###", "#,##0%", "\xA4\xA0#,##0.00", "#E0"], "EGP", "\u062C.\u0645.\u200F", "\u062C\u0646\u064A\u0647 \u0645\u0635\u0631\u064A", { "AED": ["\u062F.\u0625.\u200F"], "ARS": [u, "AR$"], "AUD": ["AU$"], "BBD": [u, "BB$"], "BHD": ["\u062F.\u0628.\u200F"], "BMD": [u, "BM$"], "BND": [u, "BN$"], "BSD": [u, "BS$"], "BYN": [u, "\u0440."], "BZD": [u, "BZ$"], "CAD": ["CA$"], "CLP": [u, "CL$"], "CNY": ["CN\xA5"], "COP": [u, "CO$"], "CUP": [u, "CU$"], "DOP": [u, "DO$"], "DZD": ["\u062F.\u062C.\u200F"], "EGP": ["\u062C.\u0645.\u200F", "E\xA3"], "FJD": [u, "FJ$"], "GBP": ["UK\xA3"], "GYD": [u, "GY$"], "HKD": ["HK$"], "IQD": ["\u062F.\u0639.\u200F"], "IRR": ["\u0631.\u0625."], "JMD": [u, "JM$"], "JOD": ["\u062F.\u0623.\u200F"], "JPY": ["JP\xA5"], "KWD": ["\u062F.\u0643.\u200F"], "KYD": [u, "KY$"], "LBP": ["\u0644.\u0644.\u200F", "L\xA3"], "LRD": [u, "$LR"], "LYD": ["\u062F.\u0644.\u200F"], "MAD": ["\u062F.\u0645.\u200F"], "MRU": ["\u0623.\u0645."], "MXN": ["MX$"], "NZD": ["NZ$"], "OMR": ["\u0631.\u0639.\u200F"], "PHP": [u, "\u20B1"], "QAR": ["\u0631.\u0642.\u200F"], "SAR": ["\u0631.\u0633.\u200F"], "SBD": [u, "SB$"], "SDD": ["\u062F.\u0633.\u200F"], "SDG": ["\u062C.\u0633."], "SRD": [u, "SR$"], "SYP": ["\u0644.\u0633.\u200F", "\xA3"], "THB": ["\u0E3F"], "TND": ["\u062F.\u062A.\u200F"], "TTD": [u, "TT$"], "TWD": ["NT$"], "USD": ["US$"], "UYU": [u, "UY$"], "YER": ["\u0631.\u064A.\u200F"] }, "rtl", plural];

// node_modules/@angular/common/locales/es.js
var u2 = void 0;
function plural2(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (n === 1)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var es_default = ["es", [["a.\xA0m.", "p.\xA0m."], u2, u2], u2, [["D", "L", "M", "X", "J", "V", "S"], ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"], ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"], ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]], u2, [["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]], u2, [["a. C.", "d. C."], u2, ["antes de Cristo", "despu\xE9s de Cristo"]], 1, [6, 0], ["d/M/yy", "d MMM y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H:mm:ss (zzzz)"], ["{1}, {0}", u2, u2, u2], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "AUD": [u2, "$"], "BRL": [u2, "R$"], "BYN": [u2, "\u0440."], "CAD": [u2, "$"], "CNY": [u2, "\xA5"], "EGP": [], "ESP": ["\u20A7"], "GBP": [u2, "\xA3"], "HKD": [u2, "$"], "ILS": [u2, "\u20AA"], "INR": [u2, "\u20B9"], "JPY": [u2, "\xA5"], "KRW": [u2, "\u20A9"], "MXN": [u2, "$"], "NZD": [u2, "$"], "PHP": [u2, "\u20B1"], "RON": [u2, "L"], "THB": ["\u0E3F"], "TWD": [u2, "NT$"], "USD": ["US$", "$"], "XAF": [], "XCD": [u2, "$"], "XOF": [] }, "ltr", plural2];

// node_modules/@angular/common/locales/fr.js
var u3 = void 0;
function plural3(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 0 || i === 1)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var fr_default = ["fr", [["AM", "PM"], u3, u3], u3, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u3, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "f\xE9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."], ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"]], u3, [["av. J.-C.", "ap. J.-C."], u3, ["avant J\xE9sus-Christ", "apr\xE8s J\xE9sus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} '\xE0' {0}", u3], [",", "\u202F", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "ARS": ["$AR", "$"], "AUD": ["$AU", "$"], "BEF": ["FB"], "BMD": ["$BM", "$"], "BND": ["$BN", "$"], "BYN": [u3, "\u0440."], "BZD": ["$BZ", "$"], "CAD": ["$CA", "$"], "CLP": ["$CL", "$"], "CNY": [u3, "\xA5"], "COP": ["$CO", "$"], "CYP": ["\xA3CY"], "EGP": [u3, "\xA3E"], "FJD": ["$FJ", "$"], "FKP": ["\xA3FK", "\xA3"], "FRF": ["F"], "GBP": ["\xA3GB", "\xA3"], "GIP": ["\xA3GI", "\xA3"], "HKD": [u3, "$"], "IEP": ["\xA3IE"], "ILP": ["\xA3IL"], "ITL": ["\u20A4IT"], "JPY": [u3, "\xA5"], "KMF": [u3, "FC"], "LBP": ["\xA3LB", "\xA3L"], "MTP": ["\xA3MT"], "MXN": ["$MX", "$"], "NAD": ["$NA", "$"], "NIO": [u3, "$C"], "NZD": ["$NZ", "$"], "PHP": [u3, "\u20B1"], "RHD": ["$RH"], "RON": [u3, "L"], "RWF": [u3, "FR"], "SBD": ["$SB", "$"], "SGD": ["$SG", "$"], "SRD": ["$SR", "$"], "TOP": [u3, "$T"], "TTD": ["$TT", "$"], "TWD": [u3, "NT$"], "USD": ["$US", "$"], "UYU": ["$UY", "$"], "WST": ["$WS"], "XCD": [u3, "$"], "XPF": ["FCFP"], "ZMW": [u3, "Kw"] }, "ltr", plural3];

// node_modules/@angular/common/locales/it.js
var u4 = void 0;
function plural4(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 1 && v === 0)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var it_default = ["it", [["m.", "p."], ["AM", "PM"], u4], u4, [["D", "L", "M", "M", "G", "V", "S"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"]], u4, [["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]], u4, [["aC", "dC"], ["a.C.", "d.C."], ["avanti Cristo", "dopo Cristo"]], 1, [6, 0], ["dd/MM/yy", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u4, "{1} {0}", u4], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "BRL": [u4, "R$"], "BYN": [u4, "Br"], "EGP": [u4, "\xA3E"], "HKD": [u4, "$"], "INR": [u4, "\u20B9"], "JPY": [u4, "\xA5"], "KRW": [u4, "\u20A9"], "MXN": [u4, "$"], "NOK": [u4, "NKr"], "THB": ["\u0E3F"], "TWD": [u4, "NT$"], "USD": [u4, "$"], "VND": [u4, "\u20AB"] }, "ltr", plural4];

// node_modules/@angular/common/locales/ja.js
var u5 = void 0;
function plural5(val) {
  const n = val;
  return 5;
}
var ja_default = ["ja", [["\u5348\u524D", "\u5348\u5F8C"], u5, u5], u5, [["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"], u5, ["\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"], ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"]], u5, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], u5], u5, [["BC", "AD"], ["\u7D00\u5143\u524D", "\u897F\u66A6"], u5], 0, [6, 0], ["y/MM/dd", u5, "y\u5E74M\u6708d\u65E5", "y\u5E74M\u6708d\u65E5EEEE"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H\u6642mm\u5206ss\u79D2 zzzz"], ["{1} {0}", u5, u5, u5], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "JPY", "\uFFE5", "\u65E5\u672C\u5186", { "BYN": [u5, "\u0440."], "CNY": ["\u5143", "\uFFE5"], "JPY": ["\uFFE5"], "PHP": [u5, "\u20B1"], "RON": [u5, "\u30EC\u30A4"], "XXX": [] }, "ltr", plural5];

// node_modules/@angular/common/locales/zh.js
var u6 = void 0;
function plural6(val) {
  const n = val;
  return 5;
}
var zh_default = ["zh", [["\u4E0A\u5348", "\u4E0B\u5348"], u6, u6], u6, [["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"], ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"], ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"]], u6, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]], u6, [["\u516C\u5143\u524D", "\u516C\u5143"], u6, u6], 0, [6, 0], ["y/M/d", "y\u5E74M\u6708d\u65E5", u6, "y\u5E74M\u6708d\u65E5EEEE"], ["HH:mm", "HH:mm:ss", "z HH:mm:ss", "zzzz HH:mm:ss"], ["{1} {0}", u6, u6, u6], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "CNY", "\xA5", "\u4EBA\u6C11\u5E01", { "AUD": ["AU$", "$"], "BYN": [u6, "\u0440."], "CNY": ["\xA5"], "ILR": ["ILS"], "JPY": ["JP\xA5", "\xA5"], "KRW": ["\uFFE6", "\u20A9"], "PHP": [u6, "\u20B1"], "RUR": [u6, "\u0440."], "TWD": ["NT$"], "USD": ["US$", "$"], "XXX": [] }, "ltr", plural6];

// node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// node_modules/date-fns/subMonths.js
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}

// node_modules/date-fns/subSeconds.js
function subSeconds(date, amount, options) {
  return addSeconds(date, -amount, options);
}

// apps/workplace/src/environments/environment.ts
var environment = {
  production: false
};

// apps/workplace/src/app/app-routing.module.ts
var routes = [
  { path: "-", component: RedirectComponent },
  { path: "unauthorised", component: UnauthorisedComponent },
  { path: "misconfigured", component: MisconfiguredComponent },
  {
    path: "landing",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./landing.module-OHYUAKAK.js").then((m) => m.AppLandingModule)
  },
  {
    path: "book",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./book.module-4XIAFSTA.js").then((m) => m.BookModule)
  },
  {
    path: "explore",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./explore.module-J4F43XU6.js").then((m) => m.ExploreModule)
  },
  {
    path: "control",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./control.module-VUDFKFNS.js").then((m) => m.ControlModule)
  },
  {
    path: "directory",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./directory.module-5D6ZKM22.js").then((m) => m.DirectoryModule)
  },
  {
    path: "your-bookings",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./schedule.module-I5YR5QPG.js").then((m) => m.AppScheduleModule)
  },
  {
    path: "group-events",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./group-events.module-NPVT4PJH.js").then((m) => m.GroupEventsModule)
  },
  {
    path: "deals-n-offers",
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard],
    loadChildren: () => import("./deals.module-QU5HDFYM.js").then((m) => m.DealsModule)
  },
  { path: "**", redirectTo: "-", pathMatch: "full" }
];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes, {
  useHash: true,
  paramsInheritanceStrategy: "always"
}), RouterModule] });
var AppRoutingModule = _AppRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [
        RouterModule.forRoot(routes, {
          useHash: true,
          paramsInheritanceStrategy: "always"
        })
      ],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// libs/mocks/src/lib/api/assets.data.ts
var MOCK_CATEGORIES = [
  {
    id: "9",
    name: "AV Equipment",
    description: "Audio-visual equipment, projectors, monitors, cameras and accessories"
  },
  {
    id: "11",
    name: "Event Setup & Furniture",
    description: "Tables, bars, cocktail tables and event furniture rental"
  }
];
var MOCK_PRODUCTS = [
  // ── UCLA AV Equipment (category 9) ────────────────────────────────
  {
    id: "30",
    name: "Basic Meeting Room AV (University Club)",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-BASIC-UC",
    description: "Basic AV package for University Club meeting rooms \u2014 includes projector, screen, podium mic",
    specifications: { rental_price: "$500/event" }
  },
  {
    id: "31",
    name: "Basic AV \u2014 Built-In Projector",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-BUILTIN",
    description: "Basic AV setup with venue built-in projector and audio",
    specifications: { rental_price: "$400/event" }
  },
  {
    id: "32",
    name: "Basic AV \u2014 Portable Projector (The Hill)",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-PORTABLE",
    description: "Portable projector package for Hill venues",
    specifications: { rental_price: "$400/event" }
  },
  {
    id: "33",
    name: "Portable Projector + Screen (Lounges)",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-PROJ-SCR",
    description: "Portable projector and screen combo for lounge areas",
    specifications: { rental_price: "$250/each" }
  },
  {
    id: "34",
    name: "Hard Wired Internet",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-INTERNET",
    description: "Dedicated hard-wired internet connection for events",
    specifications: { rental_price: "$150/each" }
  },
  {
    id: "35",
    name: "Acrylic Podium",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-PODIUM",
    description: "Clear acrylic podium for presentations and speeches",
    specifications: { rental_price: "$150/each" }
  },
  {
    id: "36",
    name: "Additional Pad for Flipchart",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-FLIPPAD",
    description: "Replacement pad for flipchart easel",
    specifications: { rental_price: "$20/each" }
  },
  {
    id: "37",
    name: "Audio Mixer (16-channel)",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-MIX16",
    description: "16-channel audio mixer for large events",
    specifications: { channels: "16", rental_price: "$130/each" }
  },
  {
    id: "38",
    name: "Audio Mixer (4-channel)",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-MIX4",
    description: "4-channel audio mixer for small events",
    specifications: { channels: "4", rental_price: "$65/each" }
  },
  {
    id: "39",
    name: "Additional Microphone",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-MIC",
    description: "Additional wired or wireless microphone",
    specifications: { rental_price: "$200/each" }
  },
  {
    id: "40",
    name: "Assisted Listening Device",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-ALD",
    description: "Assisted listening device for accessibility compliance",
    specifications: { rental_price: "$50/each" }
  },
  {
    id: "41",
    name: "Camera",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-CAM",
    description: "Video camera for event recording and live streaming",
    specifications: { rental_price: "$300/each" }
  },
  {
    id: "42",
    name: "Cisco Speakerphone",
    category_id: "9",
    brand: "Cisco",
    barcode: "UCLA-AV-CISCO",
    description: "Cisco speakerphone for conference calls and hybrid meetings",
    specifications: { rental_price: "$300/each" }
  },
  {
    id: "43",
    name: 'Confidence Monitor 55"',
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-MON55",
    description: "55-inch confidence monitor for speaker reference",
    specifications: { size: "55 inch", rental_price: "$350/each" }
  },
  {
    id: "44",
    name: 'Confidence Monitor 65"',
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-MON65",
    description: "65-inch confidence monitor for speaker reference",
    specifications: { size: "65 inch", rental_price: "$550/each" }
  },
  {
    id: "45",
    name: 'Confidence Monitor 85"',
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-MON85",
    description: "85-inch confidence monitor for large venues",
    specifications: { size: "85 inch", rental_price: "$750/each" }
  },
  {
    id: "46",
    name: 'Monitor 42"',
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-MON42",
    description: "42-inch display monitor",
    specifications: { size: "42 inch", rental_price: "$200/each" }
  },
  {
    id: "47",
    name: "OWL USB Webcam",
    category_id: "9",
    brand: "Meeting Owl",
    barcode: "UCLA-AV-OWL",
    description: "OWL 360-degree USB webcam for hybrid meetings",
    specifications: { rental_price: "$350/each" }
  },
  {
    id: "48",
    name: "Slide Advancer",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-SLIDE",
    description: "Wireless slide advancer remote",
    specifications: { rental_price: "$50/each" }
  },
  {
    id: "49",
    name: "Speaker Timer",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-TIMER",
    description: "Digital speaker timer display",
    specifications: { rental_price: "$350/each" }
  },
  {
    id: "50",
    name: "PerfectCue",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-CUE",
    description: "PerfectCue presentation cue system",
    specifications: { rental_price: "$350/each" }
  },
  {
    id: "51",
    name: "Laptop \u2014 MacBook",
    category_id: "9",
    brand: "Apple",
    barcode: "UCLA-AV-MAC",
    description: "MacBook laptop for presentations",
    specifications: { rental_price: "$250/each" }
  },
  {
    id: "52",
    name: "Laptop \u2014 PC",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-PC",
    description: "PC laptop for presentations",
    specifications: { rental_price: "$250/each" }
  },
  {
    id: "53",
    name: "Moon Balloon",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-MOON",
    description: "Moon balloon lighting for outdoor events",
    specifications: { rental_price: "$800/each" }
  },
  {
    id: "54",
    name: "Power Panel",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-PWRPNL",
    description: "Electrical power panel for large events",
    specifications: { rental_price: "$600/each" }
  },
  {
    id: "55",
    name: "Power Strip",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-PWRSTR",
    description: "Power strip extension",
    specifications: { rental_price: "$30/each" }
  },
  {
    id: "56",
    name: "Power Extension",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-PWREXT",
    description: "Power extension cord",
    specifications: { rental_price: "$30/each" }
  },
  {
    id: "57",
    name: "HDMI Cable (6-Foot)",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-HDMI",
    description: "6-foot HDMI cable",
    specifications: { length: "6 feet", rental_price: "$30/each" }
  },
  {
    id: "58",
    name: "Network Cable (10-Foot)",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-NET",
    description: "10-foot network/ethernet cable",
    specifications: { length: "10 feet", rental_price: "$30/each" }
  },
  {
    id: "59",
    name: "Laptop Adapters",
    category_id: "9",
    brand: "UCLA AV",
    barcode: "UCLA-AV-ADAPT",
    description: "Assorted laptop video adapters (USB-C, HDMI, VGA)",
    specifications: { rental_price: "$30/each" }
  },
  // ── UCLA Event Setup & Furniture (category 11) ──────────────────
  {
    id: "70",
    name: "12-ft Registration Table + 4 Chairs + Wastebaskets",
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-REG",
    description: "Registration table package with chairs and wastebaskets",
    specifications: { rental_price: "Included", size: "12 feet" }
  },
  {
    id: "71",
    name: "12-ft Bar",
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-BAR12",
    description: "12-foot bar for events and receptions",
    specifications: { rental_price: "Included", size: "12 feet" }
  },
  {
    id: "72",
    name: "6-ft Front & Back Bar",
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-BAR6",
    description: "6-foot front and back bar",
    specifications: { rental_price: "Included", size: "6 feet" }
  },
  {
    id: "73",
    name: "6' Buffet Table",
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-BUF6",
    description: "6' buffet table for catering setup",
    specifications: { rental_price: "Included", size: "6 feet" }
  },
  {
    id: "74",
    name: "12' Buffet Table",
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-BUF12",
    description: "12' buffet table for catering setup",
    specifications: { rental_price: "Included", size: "12 feet" }
  },
  {
    id: "75",
    name: "18' Buffet Table",
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-BUF18",
    description: "18' buffet table for catering setup",
    specifications: { rental_price: "Included", size: "18 feet" }
  },
  {
    id: "76",
    name: "6' Table",
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-T6",
    description: "6' table \u2014 $15/each",
    specifications: { rental_price: "$15/each", size: "6 feet" }
  },
  {
    id: "77",
    name: "8' Table",
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-T8",
    description: "8' table \u2014 $20/each",
    specifications: { rental_price: "$20/each", size: "8 feet" }
  },
  {
    id: "78",
    name: `6'x18" Seminar (Classroom) Table`,
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-SEM",
    description: "Seminar/classroom table \u2014 $10/each",
    specifications: { rental_price: "$10/each" }
  },
  {
    id: "79",
    name: '30" Standing Cocktail Tables',
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-CKT30",
    description: '30" standing cocktail table \u2014 $10/each',
    specifications: { rental_price: "$10/each", height: "30 inches" }
  },
  {
    id: "80",
    name: '36" Seated Cocktail Tables + 4 Chairs',
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-CKT36",
    description: '36" seated cocktail table with 4 chairs \u2014 $15/each',
    specifications: { rental_price: "$15/each", height: "36 inches" }
  },
  {
    id: "81",
    name: '42" Round Table',
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-RND42",
    description: '42" round table \u2014 $8/each',
    specifications: { rental_price: "$8/each", diameter: "42 inches" }
  },
  {
    id: "82",
    name: '60" Round Table',
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-RND60",
    description: '60" round table \u2014 $12/each',
    specifications: { rental_price: "$12/each", diameter: "60 inches" }
  },
  {
    id: "83",
    name: '66" Round Table',
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-RND66",
    description: '66" round table \u2014 $15/each',
    specifications: { rental_price: "$15/each", diameter: "66 inches" }
  },
  {
    id: "84",
    name: '72" Round Table',
    category_id: "11",
    brand: "UCLA Events",
    barcode: "UCLA-SETUP-RND72",
    description: '72" round table \u2014 $20/each',
    specifications: { rental_price: "$20/each", diameter: "72 inches" }
  }
];
var ASSET_CONDITIONS = ["Excellent", "Good", "Fair", "Poor"];
var ASSET_STATUS = ["Available", "In Use", "Maintenance", "Retired"];
var MAINTENANCE_TYPES = ["Routine", "Repair", "Calibration", "Inspection"];
var generateAssetHistory = (assetId) => {
  const historyCount = predictableRandomInt(5, 1);
  return Array(historyCount).fill(null).map((_, i) => ({
    id: `history-${assetId}-${i}`,
    asset_id: assetId,
    action: ["Assigned", "Returned", "Maintained", "Relocated"][predictableRandomInt(4)],
    user_id: `staff-${predictableRandomInt(20) + 1}`,
    location: `Floor ${predictableRandomInt(3) + 1}`,
    timestamp: getUnixTime(subDays(Date.now(), predictableRandomInt(365))),
    notes: "Asset management action recorded"
  }));
};
var generateMaintenanceSchedule = (assetId) => {
  if (predictableRandomInt(3) === 0)
    return null;
  return {
    id: `maintenance-${assetId}`,
    asset_id: assetId,
    type: MAINTENANCE_TYPES[predictableRandomInt(MAINTENANCE_TYPES.length)],
    frequency_days: [30, 60, 90, 180, 365][predictableRandomInt(5)],
    last_service: getUnixTime(subDays(Date.now(), predictableRandomInt(90))),
    next_service: getUnixTime(new Date(Date.now() + (predictableRandomInt(90) + 30) * 24 * 60 * 60 * 1e3)),
    service_provider: "Internal IT" + (predictableRandomInt(3) === 0 ? "" : " / External Contractor"),
    estimated_cost: predictableRandomInt(500, 50)
  };
};
var MOCK_ASSETS = Array(MOCK_PRODUCTS.length * 3).fill(null).map((_, i) => {
  const product = MOCK_PRODUCTS[i % MOCK_PRODUCTS.length];
  const purchaseDate = subMonths(Date.now(), predictableRandomInt(36, 1));
  const condition = ASSET_CONDITIONS[predictableRandomInt(ASSET_CONDITIONS.length)];
  const status = ASSET_STATUS[predictableRandomInt(ASSET_STATUS.length)];
  const assetId = `asset-${String(i + 1).padStart(4, "0")}`;
  return {
    id: assetId,
    name: `${product.name} - ${assetId}`,
    asset_type_id: product.id,
    description: product.description || `${product.brand} ${product.name} for office use`,
    model_number: product.model || `${product.brand}-${predictableRandomInt(9999)}`,
    serial_number: `${product.brand?.substring(0, 3).toUpperCase()}${predictableRandomInt(999999999)}`,
    identifier: `${product.barcode}-${String(i + 1).padStart(3, "0")}`,
    barcode: product.barcode,
    brand: product.brand,
    condition,
    status,
    purchase_order_id: `PO-${Math.floor(i / 5) + 1}`,
    // Group assets by purchase orders
    purchase_date: getUnixTime(purchaseDate),
    warranty_expiry: getUnixTime(new Date(purchaseDate.getTime() + predictableRandomInt(36, 12) * 30 * 24 * 60 * 60 * 1e3)),
    purchase_price: predictableRandomInt(5e3, 100),
    current_value: Math.max(predictableRandomInt(3e3, 50), 50),
    // Depreciated value
    location: {
      building: `Building ${predictableRandomInt(2) + 1}`,
      floor: predictableRandomInt(5) + 1,
      room: `Room ${String(predictableRandomInt(50) + 1).padStart(2, "0")}`,
      zone: `zone-${predictableRandomInt(3) + 1}`
    },
    assigned_to: status === "In Use" ? `staff-${predictableRandomInt(20) + 1}` : null,
    category_id: product.category_id,
    specifications: product.specifications || {},
    other_data: {
      history: generateAssetHistory(assetId),
      maintenance_schedule: generateMaintenanceSchedule(assetId),
      insurance_value: predictableRandomInt(6e3, 200),
      depreciation_rate: predictableRandomInt(20, 5),
      // 5-25% per year
      energy_rating: null,
      dimensions: {
        width: predictableRandomInt(100, 10),
        height: predictableRandomInt(100, 5),
        depth: predictableRandomInt(80, 10),
        weight: predictableRandomInt(50, 1)
      },
      tags: [
        product.brand?.toLowerCase(),
        MOCK_CATEGORIES.find((c2) => c2.id === product.category_id)?.name.toLowerCase(),
        condition.toLowerCase(),
        ...status === "In Use" ? ["assigned"] : [],
        ...product.category_id === "1" ? ["tech"] : []
      ].filter(Boolean)
    }
  };
});
var MOCK_PURCHASE_ORDERS = Array(30).fill(null).map((_, i) => {
  const orderDate = subMonths(Date.now(), predictableRandomInt(36, 1));
  const deliveryDate = new Date(orderDate.getTime() + predictableRandomInt(30) * 24 * 60 * 60 * 1e3);
  return {
    id: `PO-${i + 1}`,
    purchase_order_number: `PO-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(i + 1).padStart(4, "0")}`,
    invoice_number: `INV-${String(predictableRandomInt(99999) + 1e4)}`,
    vendor: [
      "Office Supplies Co",
      "Tech Solutions Ltd",
      "Furniture Plus",
      "AV Equipment Pro"
    ][predictableRandomInt(4)],
    department: ["IT", "Facilities", "HR", "Finance"][predictableRandomInt(4)],
    purchase_date: getUnixTime(orderDate),
    delivery_date: getUnixTime(deliveryDate),
    expected_service_start_date: getUnixTime(deliveryDate),
    expected_service_end_date: getUnixTime(new Date(deliveryDate.getTime() + 3 * 365 * 24 * 60 * 60 * 1e3)),
    // 3 years
    total_amount: predictableRandomInt(5e4, 1e3),
    currency: "USD",
    status: ["Pending", "Approved", "Delivered", "Complete"][predictableRandomInt(4)],
    approver_id: `staff-${predictableRandomInt(5) + 1}`,
    notes: i % 3 === 0 ? "Bulk order for office renovation" : i % 3 === 1 ? "Emergency replacement" : "Routine procurement",
    payment_terms: [
      "Net 30",
      "Net 60",
      "Payment on Delivery",
      "Net 15"
    ][predictableRandomInt(4)]
  };
});

// libs/mocks/src/lib/api/assets.mock.ts
var BASE_PATH = "/api/engine/v2";
var update = (dataset) => (id, data) => {
  const index = dataset.findIndex((e) => e.id === id);
  if (index < 0)
    throw {
      status: 404,
      message: `Unable to find booking with ID ${id}`
    };
  const new_event = __spreadValues({}, data);
  dataset.splice(index, 1, new_event);
  return new_event;
};
function registerMockAssets() {
  Ko({
    path: `${BASE_PATH}/asset_categories`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      let results = MOCK_CATEGORIES;
      if (req.query_params?.hidden !== void 0) {
        const hidden = String(req.query_params.hidden) === "true";
        results = results.filter((c2) => !!c2.hidden === hidden);
      }
      return results;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_CATEGORIES.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_categories`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-category-${predictableRandomInt(999)}`
      });
      MOCK_CATEGORIES.push(new_event);
      return new_event;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_CATEGORIES)(req.route_params.id, __spreadValues({}, req.body))
  });
  Ko({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_CATEGORIES.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_CATEGORIES.splice(index, 1);
      return;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_types`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      let results = MOCK_PRODUCTS;
      if (req.query_params?.category_id) {
        results = results.filter((p) => p.category_id === req.query_params.category_id);
      }
      return results;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_PRODUCTS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_types`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-product-${predictableRandomInt(999)}`
      });
      MOCK_PRODUCTS.push(new_event);
      return new_event;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_PRODUCTS)(req.route_params.id, __spreadValues({}, req.body))
  });
  Ko({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_PRODUCTS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_PRODUCTS.splice(index, 1);
      return;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_purchase_orders`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const events = MOCK_PURCHASE_ORDERS;
      return events;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_PURCHASE_ORDERS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_purchase_orders`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-purchase-order-${predictableRandomInt(999)}`
      });
      MOCK_PURCHASE_ORDERS.push(new_event);
      return new_event;
    }
  });
  Ko({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_PURCHASE_ORDERS)(req.route_params.id, __spreadValues({}, req.body))
  });
  Ko({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_PURCHASE_ORDERS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find purchase order with ID ${req.route_params.id}`
        };
      MOCK_PURCHASE_ORDERS.splice(index, 1);
      return;
    }
  });
  Ko({
    path: `${BASE_PATH}/assets`,
    metadata: {},
    method: "GET",
    callback: (req) => {
      const type_id = req.query_params?.type_id;
      const zone_id = req.query_params?.zone_id;
      let results = [...MOCK_ASSETS];
      if (type_id) {
        results = results.filter((a) => a.asset_type_id === type_id);
      }
      if (zone_id) {
        results = results.filter((a) => a.zone_id === zone_id);
      }
      return results;
    }
  });
  Ko({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_ASSETS.find((e) => e.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Ko({
    path: `${BASE_PATH}/assets`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-asset-${predictableRandomInt(999)}`
      });
      MOCK_ASSETS.push(new_event);
      return new_event;
    }
  });
  Ko({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_ASSETS)(req.route_params.id, __spreadValues({}, req.body))
  });
  Ko({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_ASSETS.findIndex((e) => e.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_ASSETS.splice(index, 1);
      return;
    }
  });
}

// libs/mocks/src/lib/api/catering.data.ts
var DIETARY_RESTRICTIONS = [
  { id: "vegetarian", name: "Vegetarian", icon: "\u{1F331}" },
  { id: "vegan", name: "Vegan", icon: "\u{1F33F}" },
  { id: "gluten-free", name: "Gluten Free", icon: "\u{1F33E}" },
  { id: "dairy-free", name: "Dairy Free", icon: "\u{1F95B}" },
  { id: "nut-free", name: "Nut Free", icon: "\u{1F95C}" },
  { id: "halal", name: "Halal", icon: "\u262A\uFE0F" },
  { id: "kosher", name: "Kosher", icon: "\u2721\uFE0F" },
  { id: "low-carb", name: "Low Carb", icon: "\u{1F957}" },
  { id: "keto", name: "Ketogenic", icon: "\u{1F951}" },
  { id: "paleo", name: "Paleo", icon: "\u{1F969}" }
];
var MOCK_MENU = [
  // ── Breakfast ────────────────────────────────────────────────────
  {
    id: "classic_continental",
    name: "Classic Continental Breakfast",
    unit_price: 1300,
    category: "breakfast",
    description: "Continental breakfast \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "deluxe_continental",
    name: "Deluxe Continental Breakfast",
    unit_price: 1600,
    category: "breakfast",
    description: "Deluxe continental breakfast \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "premium_continental",
    name: "Premium Continental Breakfast",
    unit_price: 1700,
    category: "breakfast",
    description: "Premium continental breakfast \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "american_breakfast",
    name: "American Breakfast Buffet",
    unit_price: 2800,
    category: "breakfast",
    description: "Full American breakfast buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "breakfast_burrito",
    name: "Breakfast Burrito Buffet",
    unit_price: 2800,
    category: "breakfast",
    description: "Breakfast burrito buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "bruin_fitness",
    name: "Bruin Fitness Breakfast Buffet",
    unit_price: 3e3,
    category: "breakfast",
    description: "Healthy fitness breakfast buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "italy_breakfast",
    name: "Italy Breakfast Buffet",
    unit_price: 2600,
    category: "breakfast",
    description: "Italian-style breakfast buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "omelettes",
    name: "Omelettes & Things Buffet",
    unit_price: 3200,
    category: "breakfast",
    description: "Omelette station buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "ee_breakfast",
    name: "EE Breakfast Buffet (A-F)",
    unit_price: 3e3,
    category: "breakfast",
    description: "Executive Education breakfast buffet \u2014 per person",
    tags: ["per_person", "conference"],
    options: [
      { id: "ee_bf_a", name: "Menu A", group: "menu" },
      { id: "ee_bf_b", name: "Menu B", group: "menu" },
      { id: "ee_bf_c", name: "Menu C", group: "menu" },
      { id: "ee_bf_d", name: "Menu D", group: "menu" },
      { id: "ee_bf_e", name: "Menu E", group: "menu" },
      { id: "ee_bf_f", name: "Menu F", group: "menu" }
    ]
  },
  // ── Brunch ───────────────────────────────────────────────────────
  {
    id: "bruin_brunch",
    name: "Bruin Brunch Buffet",
    unit_price: 4300,
    category: "brunch",
    description: "Full Bruin brunch buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "brunch_everyday",
    name: "Brunch Everyday Buffet",
    unit_price: 4e3,
    category: "brunch",
    description: "Everyday brunch buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "dessert_coffee",
    name: "Dessert & Coffee",
    unit_price: 1800,
    category: "brunch",
    description: "Dessert and coffee service \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  // ── Lunch ────────────────────────────────────────────────────────
  {
    id: "abbondanza_pasta",
    name: "Abbondanza Pasta",
    unit_price: 1800,
    category: "lunch",
    description: "Pasta buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "soup_salad_sandwich",
    name: "Soup, Salad & Sandwich Buffet",
    unit_price: 4500,
    category: "lunch",
    description: "Soup, salad and sandwich combination \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "market_salad",
    name: "Market Salad Bar",
    unit_price: 1800,
    category: "lunch",
    description: "Fresh market salad bar \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "sliders",
    name: "Sliders",
    unit_price: 2200,
    category: "lunch",
    description: "Slider buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "street_tacos",
    name: "Street Tacos",
    unit_price: 2200,
    category: "lunch",
    description: "Street taco station \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "pho_cart",
    name: "Pho Cart",
    unit_price: 2e3,
    category: "lunch",
    description: "Vietnamese pho cart \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "california_market_cold",
    name: "California Market Buffet (Cold)",
    unit_price: 5400,
    category: "lunch",
    description: "Cold California market buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "california_market_hot",
    name: "California Market Buffet (Hot)",
    unit_price: 5400,
    category: "lunch",
    description: "Hot California market buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "festivity",
    name: "Festivity Buffet",
    unit_price: 5900,
    category: "lunch",
    description: "Festivity celebration buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "holiday",
    name: "Holiday Buffet",
    unit_price: 5700,
    category: "lunch",
    description: "Holiday themed buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "albacore_tuna_salad",
    name: "Albacore Tuna Salad",
    unit_price: 3800,
    category: "lunch",
    description: "Albacore tuna salad \u2014 per bowl",
    tags: ["per_bowl"],
    options: []
  },
  {
    id: "albacore_tuna_sandwich",
    name: "Albacore Tuna Sandwich",
    unit_price: 2e3,
    category: "lunch",
    description: "Albacore tuna sandwich \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "ee_lunch",
    name: "EE Lunch Buffet (A-F)",
    unit_price: 4500,
    category: "lunch",
    description: "Executive Education lunch buffet \u2014 per person",
    tags: ["per_person", "conference"],
    options: [
      { id: "ee_ln_a", name: "Menu A", group: "menu" },
      { id: "ee_ln_b", name: "Menu B", group: "menu" },
      { id: "ee_ln_c", name: "Menu C", group: "menu" },
      { id: "ee_ln_d", name: "Menu D", group: "menu" },
      { id: "ee_ln_e", name: "Menu E", group: "menu" },
      { id: "ee_ln_f", name: "Menu F", group: "menu" }
    ]
  },
  // ── Dinner ───────────────────────────────────────────────────────
  {
    id: "across_asia",
    name: "Across Asia Buffet",
    unit_price: 5e3,
    category: "dinner",
    description: "Pan-Asian dinner buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "backyard_grillin",
    name: "Backyard Grillin' Buffet",
    unit_price: 4e3,
    category: "dinner",
    description: "Backyard grill dinner buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "celebration",
    name: "Celebration Buffet",
    unit_price: 5500,
    category: "dinner",
    description: "Celebration dinner buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "italian_fare",
    name: "The Italian Fare Buffet",
    unit_price: 5e3,
    category: "dinner",
    description: "Italian fare dinner buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "latin_america",
    name: "Latin America Buffet",
    unit_price: 5400,
    category: "dinner",
    description: "Latin American dinner buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "mediterranean_hot",
    name: "Mediterranean Buffet (Hot)",
    unit_price: 5e3,
    category: "dinner",
    description: "Hot Mediterranean dinner buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "mediterranean_room_temp",
    name: "Mediterranean Buffet (Room Temp)",
    unit_price: 5e3,
    category: "dinner",
    description: "Room temperature Mediterranean buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "national_barbecue",
    name: "National Barbecue Buffet",
    unit_price: 5e3,
    category: "dinner",
    description: "National barbecue dinner buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "true_bruin",
    name: "True Bruin Buffet",
    unit_price: 4e3,
    category: "dinner",
    description: "True Bruin dinner buffet \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "ee_dinner",
    name: "EE Dinner Buffet (A-F)",
    unit_price: 5e3,
    category: "dinner",
    description: "Executive Education dinner buffet \u2014 per person",
    tags: ["per_person", "conference"],
    options: [
      { id: "ee_dn_a", name: "Menu A", group: "menu" },
      { id: "ee_dn_b", name: "Menu B", group: "menu" },
      { id: "ee_dn_c", name: "Menu C", group: "menu" },
      { id: "ee_dn_d", name: "Menu D", group: "menu" },
      { id: "ee_dn_e", name: "Menu E", group: "menu" },
      { id: "ee_dn_f", name: "Menu F", group: "menu" }
    ]
  },
  // ── Breaks & Snacks ─────────────────────────────────────────────
  {
    id: "beverage_package",
    name: "Beverage Package",
    unit_price: 1200,
    category: "breaks",
    description: "Coffee, tea & refreshments \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "cookies_treats",
    name: "Cookies N'Treats",
    unit_price: 1400,
    category: "breaks",
    description: "Assorted cookies and treats \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "grazing",
    name: "Grazing",
    unit_price: 2e3,
    category: "breaks",
    description: "Grazing platter \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "la_fiesta",
    name: "La Fiesta",
    unit_price: 1700,
    category: "breaks",
    description: "La Fiesta snack break \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "revitalize",
    name: "Revitalize",
    unit_price: 1500,
    category: "breaks",
    description: "Revitalize healthy break \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "moroccan_sun",
    name: "Under the Moroccan Sun",
    unit_price: 1600,
    category: "breaks",
    description: "Moroccan-themed snack break \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "zen",
    name: "Zen",
    unit_price: 1600,
    category: "breaks",
    description: "Zen wellness break \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "sundae_bar",
    name: "Sundae Bar",
    unit_price: 2200,
    category: "breaks",
    description: "Ice cream sundae bar \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "ee_am_break",
    name: "EE AM Break w/Coffee (A-F)",
    unit_price: 1850,
    category: "breaks",
    description: "Morning break with coffee \u2014 per person",
    tags: ["per_person", "conference"],
    options: [
      { id: "ee_am_a", name: "Menu A", group: "menu" },
      { id: "ee_am_b", name: "Menu B", group: "menu" },
      { id: "ee_am_c", name: "Menu C", group: "menu" },
      { id: "ee_am_d", name: "Menu D", group: "menu" },
      { id: "ee_am_e", name: "Menu E", group: "menu" },
      { id: "ee_am_f", name: "Menu F", group: "menu" }
    ]
  },
  {
    id: "ee_am_continental",
    name: "EE AM Break w/Continental & Coffee (A-F)",
    unit_price: 2550,
    category: "breaks",
    description: "Morning break with continental and coffee \u2014 per person",
    tags: ["per_person", "conference"],
    options: [
      { id: "ee_amc_a", name: "Menu A", group: "menu" },
      { id: "ee_amc_b", name: "Menu B", group: "menu" },
      { id: "ee_amc_c", name: "Menu C", group: "menu" },
      { id: "ee_amc_d", name: "Menu D", group: "menu" },
      { id: "ee_amc_e", name: "Menu E", group: "menu" },
      { id: "ee_amc_f", name: "Menu F", group: "menu" }
    ]
  },
  {
    id: "ee_pm_break",
    name: "EE PM Break w/Coffee (A-F)",
    unit_price: 2100,
    category: "breaks",
    description: "Afternoon break with coffee \u2014 per person",
    tags: ["per_person", "conference"],
    options: [
      { id: "ee_pm_a", name: "Menu A", group: "menu" },
      { id: "ee_pm_b", name: "Menu B", group: "menu" },
      { id: "ee_pm_c", name: "Menu C", group: "menu" },
      { id: "ee_pm_d", name: "Menu D", group: "menu" },
      { id: "ee_pm_e", name: "Menu E", group: "menu" },
      { id: "ee_pm_f", name: "Menu F", group: "menu" }
    ]
  },
  // ── Reception & Hors d'oeuvres ──────────────────────────────────
  {
    id: "artisan_cheese_pp",
    name: "Artisan Cheese Platter",
    unit_price: 1400,
    category: "reception",
    description: "Artisan cheese platter \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  {
    id: "artisan_cheese_sm",
    name: "Artisan Cheese Platter (Small)",
    unit_price: 9500,
    category: "reception",
    description: "Small artisan cheese platter \u2014 per platter",
    tags: ["per_platter"],
    options: []
  },
  {
    id: "artisan_cheese_lg",
    name: "Artisan Cheese Platter (Large)",
    unit_price: 15e3,
    category: "reception",
    description: "Large artisan cheese platter \u2014 per platter",
    tags: ["per_platter"],
    options: []
  },
  {
    id: "american_caviar",
    name: "American Caviar, Roasted Potato, Creme Fraiche",
    unit_price: 500,
    category: "reception",
    description: "Hors d'oeuvre \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "artisan_cheese_tart",
    name: "Artisan Cheese Tart, Roasted Fruit, Thyme",
    unit_price: 350,
    category: "reception",
    description: "Hors d'oeuvre \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "asian_pork_meatballs",
    name: "Asian Pork Meatballs, Five Spice, Ginger Honey",
    unit_price: 400,
    category: "reception",
    description: "Hors d'oeuvre \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "portobella_sopes",
    name: "Achiote-Marinated Portobella Sopes",
    unit_price: 4300,
    category: "reception",
    description: "Hors d'oeuvre \u2014 per person",
    tags: ["per_person"],
    options: []
  },
  // ── Beverages ───────────────────────────────────────────────────
  {
    id: "apple_juice",
    name: "Apple Juice",
    unit_price: 3200,
    category: "beverages",
    description: "Apple juice \u2014 per gallon",
    tags: ["per_gallon"],
    options: []
  },
  {
    id: "arnold_palmer",
    name: "Arnold Palmer",
    unit_price: 3200,
    category: "beverages",
    description: "Arnold Palmer \u2014 per gallon",
    tags: ["per_gallon"],
    options: []
  },
  {
    id: "almond_milk",
    name: "Almond Milk",
    unit_price: 1200,
    category: "beverages",
    description: "Almond milk \u2014 per quart",
    tags: ["per_quart"],
    options: []
  },
  {
    id: "canned_juices",
    name: "Assorted Canned Fruit Juices & V8",
    unit_price: 250,
    category: "beverages",
    description: "Canned juices \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "soft_drinks_bar",
    name: "Assorted Soft Drinks (Bar)",
    unit_price: 700,
    category: "beverages",
    description: "Soft drinks for bar service \u2014 each",
    tags: ["each"],
    options: []
  },
  // ── Bakery & Pastries ───────────────────────────────────────────
  {
    id: "almond_croissants",
    name: "Almond Croissants",
    unit_price: 3300,
    category: "bakery",
    description: "Almond croissants \u2014 per dozen",
    tags: ["per_dozen"],
    options: []
  },
  {
    id: "artisan_bagels_classic",
    name: "Artisan Bagels (Classic Flavors)",
    unit_price: 2800,
    category: "bakery",
    description: "Classic flavor bagels \u2014 per dozen",
    tags: ["per_dozen"],
    options: []
  },
  {
    id: "artisan_bagels_specialty",
    name: "Artisan Bagels (Specialty Flavors)",
    unit_price: 2800,
    category: "bakery",
    description: "Specialty flavor bagels \u2014 per dozen",
    tags: ["per_dozen"],
    options: []
  },
  {
    id: "ucla_cookies",
    name: "Fresh-Baked UCLA Bakery Cookies",
    unit_price: 2400,
    category: "bakery",
    description: "UCLA bakery cookies \u2014 per dozen",
    tags: ["per_dozen"],
    options: []
  },
  {
    id: "petit_fours",
    name: "Assorted Petit Fours",
    unit_price: 3500,
    category: "bakery",
    description: "Assorted petit fours \u2014 per dozen",
    tags: ["per_dozen"],
    options: []
  },
  {
    id: "mini_desserts",
    name: "Assorted Seasonal Mini Desserts",
    unit_price: 4500,
    category: "bakery",
    description: "Seasonal mini desserts \u2014 per dozen",
    tags: ["per_dozen"],
    options: []
  },
  {
    id: "chips_bags",
    name: "Assorted Bags of Chips",
    unit_price: 175,
    category: "bakery",
    description: "Individual chip bags \u2014 per bag",
    tags: ["per_bag"],
    options: []
  },
  {
    id: "kettle_chips",
    name: "Additional Kettle / Tortilla Chips",
    unit_price: 2e3,
    category: "bakery",
    description: "Kettle or tortilla chips \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "asian_snack_mix",
    name: "Asian Snack Mix",
    unit_price: 1800,
    category: "bakery",
    description: "Asian snack mix \u2014 each",
    tags: ["each"],
    options: []
  },
  // ── Gameday Menus ───────────────────────────────────────────────
  {
    id: "football_lunch",
    name: "Prepackaged Football Menu \u2014 Lunch (A-U)",
    unit_price: 2e3,
    category: "gameday",
    description: "Pre-packaged football game day lunch \u2014 per person",
    tags: ["per_person"],
    options: [
      { id: "fb_ln_a", name: "Menu A", group: "menu" },
      { id: "fb_ln_b", name: "Menu B", group: "menu" },
      { id: "fb_ln_c", name: "Menu C", group: "menu" },
      { id: "fb_ln_u", name: "Menu U", group: "menu" }
    ]
  },
  {
    id: "football_dinner",
    name: "Prepackaged Football Menu \u2014 Dinner (A-U)",
    unit_price: 3e3,
    category: "gameday",
    description: "Pre-packaged football game day dinner \u2014 per person",
    tags: ["per_person"],
    options: [
      { id: "fb_dn_a", name: "Menu A", group: "menu" },
      { id: "fb_dn_b", name: "Menu B", group: "menu" },
      { id: "fb_dn_c", name: "Menu C", group: "menu" },
      { id: "fb_dn_u", name: "Menu U", group: "menu" }
    ]
  },
  // ── Setup & Furniture Rental ────────────────────────────────────
  {
    id: "registration_table",
    name: "12-ft Registration Table + 4 Chairs + Wastebaskets",
    unit_price: 0,
    category: "setup",
    description: "Registration table package \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "bar_12ft",
    name: "12-ft Bar",
    unit_price: 0,
    category: "setup",
    description: "12-foot bar \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "bar_6ft",
    name: "6-ft Front & Back Bar",
    unit_price: 0,
    category: "setup",
    description: "6-foot front and back bar \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "buffet_6ft",
    name: "6' Buffet Table",
    unit_price: 0,
    category: "setup",
    description: "6' buffet table \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "buffet_12ft",
    name: "12' Buffet Table",
    unit_price: 0,
    category: "setup",
    description: "12' buffet table \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "buffet_18ft",
    name: "18' Buffet Table",
    unit_price: 0,
    category: "setup",
    description: "18' buffet table \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "table_6ft",
    name: "6' Table",
    unit_price: 1500,
    category: "setup",
    description: "6' table \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "table_8ft",
    name: "8' Table",
    unit_price: 2e3,
    category: "setup",
    description: "8' table \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "seminar_table",
    name: `6'x18" Seminar (Classroom) Table`,
    unit_price: 1e3,
    category: "setup",
    description: "Seminar/classroom table \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "cocktail_standing",
    name: '30" Standing Cocktail Tables',
    unit_price: 1e3,
    category: "setup",
    description: "Standing cocktail table \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "cocktail_seated",
    name: '36" Seated Cocktail Tables + 4 Chairs',
    unit_price: 1500,
    category: "setup",
    description: "Seated cocktail table with chairs \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "round_42",
    name: '42" Round Table',
    unit_price: 800,
    category: "setup",
    description: '42" round table \u2014 each',
    tags: ["each"],
    options: []
  },
  {
    id: "round_60",
    name: '60" Round Table',
    unit_price: 1200,
    category: "setup",
    description: '60" round table \u2014 each',
    tags: ["each"],
    options: []
  },
  {
    id: "round_66",
    name: '66" Round Table',
    unit_price: 1500,
    category: "setup",
    description: '66" round table \u2014 each',
    tags: ["each"],
    options: []
  },
  {
    id: "round_72",
    name: '72" Round Table',
    unit_price: 2e3,
    category: "setup",
    description: '72" round table \u2014 each',
    tags: ["each"],
    options: []
  },
  // ── AV Equipment Rental ─────────────────────────────────────────
  {
    id: "av_basic_uc",
    name: "Basic Meeting Room AV (University Club)",
    unit_price: 5e4,
    category: "av_rental",
    description: "Basic AV package for University Club \u2014 per event",
    tags: ["per_event"],
    options: []
  },
  {
    id: "av_basic_projector",
    name: "Basic AV \u2014 Built-In Projector",
    unit_price: 4e4,
    category: "av_rental",
    description: "Basic AV with built-in projector \u2014 per event",
    tags: ["per_event"],
    options: []
  },
  {
    id: "av_basic_portable",
    name: "Basic AV \u2014 Portable Projector (The Hill)",
    unit_price: 4e4,
    category: "av_rental",
    description: "Portable projector package for The Hill \u2014 per event",
    tags: ["per_event"],
    options: []
  },
  {
    id: "av_projector_screen",
    name: "Portable Projector + Screen (Lounges)",
    unit_price: 25e3,
    category: "av_rental",
    description: "Portable projector and screen \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_hard_internet",
    name: "Hard Wired Internet",
    unit_price: 15e3,
    category: "av_rental",
    description: "Wired internet connection \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_podium",
    name: "Acrylic Podium",
    unit_price: 15e3,
    category: "av_rental",
    description: "Acrylic podium \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_flipchart_pad",
    name: "Additional Pad for Flipchart",
    unit_price: 2e3,
    category: "av_rental",
    description: "Flipchart pad \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_mixer_16ch",
    name: "Audio Mixer (16-channel)",
    unit_price: 13e3,
    category: "av_rental",
    description: "16-channel audio mixer \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_mixer_4ch",
    name: "Audio Mixer (4-channel)",
    unit_price: 6500,
    category: "av_rental",
    description: "4-channel audio mixer \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_additional_mic",
    name: "Additional Microphone",
    unit_price: 2e4,
    category: "av_rental",
    description: "Additional microphone \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_assisted_listening",
    name: "Assisted Listening Device",
    unit_price: 5e3,
    category: "av_rental",
    description: "Assisted listening device \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_camera",
    name: "Camera",
    unit_price: 3e4,
    category: "av_rental",
    description: "Camera \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_speakerphone",
    name: "Cisco Speakerphone",
    unit_price: 3e4,
    category: "av_rental",
    description: "Cisco speakerphone \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_monitor_55",
    name: 'Confidence Monitor 55"',
    unit_price: 35e3,
    category: "av_rental",
    description: '55" confidence monitor \u2014 each',
    tags: ["each"],
    options: []
  },
  {
    id: "av_monitor_65",
    name: 'Confidence Monitor 65"',
    unit_price: 55e3,
    category: "av_rental",
    description: '65" confidence monitor \u2014 each',
    tags: ["each"],
    options: []
  },
  {
    id: "av_monitor_85",
    name: 'Confidence Monitor 85"',
    unit_price: 75e3,
    category: "av_rental",
    description: '85" confidence monitor \u2014 each',
    tags: ["each"],
    options: []
  },
  {
    id: "av_monitor_42",
    name: 'Monitor 42"',
    unit_price: 2e4,
    category: "av_rental",
    description: '42" monitor \u2014 each',
    tags: ["each"],
    options: []
  },
  {
    id: "av_owl_webcam",
    name: "OWL USB Webcam",
    unit_price: 35e3,
    category: "av_rental",
    description: "OWL USB webcam \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_slide_advancer",
    name: "Slide Advancer",
    unit_price: 5e3,
    category: "av_rental",
    description: "Slide advancer \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_speaker_timer",
    name: "Speaker Timer",
    unit_price: 35e3,
    category: "av_rental",
    description: "Speaker timer \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_perfect_cue",
    name: "PerfectCue",
    unit_price: 35e3,
    category: "av_rental",
    description: "PerfectCue system \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_laptop_mac",
    name: "Laptop \u2014 MacBook",
    unit_price: 25e3,
    category: "av_rental",
    description: "MacBook laptop \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_laptop_pc",
    name: "Laptop \u2014 PC",
    unit_price: 25e3,
    category: "av_rental",
    description: "PC laptop \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_moon_balloon",
    name: "Moon Balloon",
    unit_price: 8e4,
    category: "av_rental",
    description: "Moon balloon lighting \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_power_panel",
    name: "Power Panel",
    unit_price: 6e4,
    category: "av_rental",
    description: "Power panel \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_power_strip",
    name: "Power Strip",
    unit_price: 3e3,
    category: "av_rental",
    description: "Power strip \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_power_extension",
    name: "Power Extension",
    unit_price: 3e3,
    category: "av_rental",
    description: "Power extension \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_hdmi_cable",
    name: "HDMI Cable (6-Foot)",
    unit_price: 3e3,
    category: "av_rental",
    description: "6-foot HDMI cable \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_network_cable",
    name: "Network Cable (10-Foot)",
    unit_price: 3e3,
    category: "av_rental",
    description: "10-foot network cable \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_laptop_adapters",
    name: "Laptop Adapters",
    unit_price: 3e3,
    category: "av_rental",
    description: "Laptop adapters \u2014 each",
    tags: ["each"],
    options: []
  },
  // ── AV Staffing ─────────────────────────────────────────────────
  {
    id: "av_operator",
    name: "AV Operator",
    unit_price: 5e3,
    category: "av_staffing",
    description: "AV operator \u2014 per hour",
    tags: ["per_hour"],
    options: []
  },
  {
    id: "av_lighting_operator",
    name: "AV Lighting Operator",
    unit_price: 6e3,
    category: "av_staffing",
    description: "Lighting operator \u2014 per hour",
    tags: ["per_hour"],
    options: []
  },
  {
    id: "av_technician_hourly",
    name: "AV Technician ($75/hr, min 4hrs)",
    unit_price: 7500,
    category: "av_staffing",
    description: "AV technician hourly rate, 4-hour minimum \u2014 per hour",
    tags: ["per_hour"],
    options: []
  },
  {
    id: "av_technician_strike",
    name: "AV Technician (Set/Strike)",
    unit_price: 1e4,
    category: "av_staffing",
    description: "AV technician for setup/strike \u2014 per hour",
    tags: ["per_hour"],
    options: []
  },
  {
    id: "av_technician_day",
    name: "AV Technician (10-hour day)",
    unit_price: 95e3,
    category: "av_staffing",
    description: "Full day AV technician (10 hours) \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_tech_director",
    name: "AV Technical Director (10-hour day)",
    unit_price: 95e3,
    category: "av_staffing",
    description: "Full day AV technical director (10 hours) \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_vendor_basic",
    name: "External Vendor Supervisor (Basic)",
    unit_price: 5e4,
    category: "av_staffing",
    description: "Basic external vendor supervision \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_vendor_premium",
    name: "External Vendor Supervisor (Premium)",
    unit_price: 95e3,
    category: "av_staffing",
    description: "Premium external vendor supervision \u2014 each",
    tags: ["each"],
    options: []
  },
  {
    id: "av_setup_test",
    name: "AV Setup & Test",
    unit_price: 5e4,
    category: "av_staffing",
    description: "AV setup and testing \u2014 per event",
    tags: ["per_event"],
    options: []
  },
  // ── Service Charges ─────────────────────────────────────────────
  {
    id: "after_hours",
    name: "After-Hours Service Charge",
    unit_price: 5e3,
    category: "service_charges",
    description: "After-hours service charge \u2014 each",
    tags: ["each"],
    options: []
  }
];
var CATERING_PACKAGES = [
  {
    id: "pkg-001",
    name: "Morning Meeting Package",
    description: "Continental breakfast with beverages for morning meetings",
    price: 2500,
    serves: "8-12 people",
    duration: "2-3 hours",
    items: ["classic_continental", "beverage_package"],
    dietary_options: ["vegetarian", "gluten-free"]
  },
  {
    id: "pkg-002",
    name: "Executive Conference Package",
    description: "Full day conference with breakfast, lunch and breaks",
    price: 8500,
    serves: "10-20 people",
    duration: "8 hours",
    items: [
      "deluxe_continental",
      "ee_am_break",
      "soup_salad_sandwich",
      "ee_pm_break"
    ],
    dietary_options: ["vegetarian", "gluten-free"]
  },
  {
    id: "pkg-003",
    name: "Reception Package",
    description: "Elegant reception with cheese, apps and beverages",
    price: 3500,
    serves: "20-30 people",
    duration: "3-4 hours",
    items: [
      "artisan_cheese_pp",
      "asian_pork_meatballs",
      "artisan_cheese_tart"
    ],
    dietary_options: ["vegetarian"]
  },
  {
    id: "pkg-004",
    name: "Game Day Package",
    description: "Pre-packaged football game day dining",
    price: 5e3,
    serves: "15-25 people",
    duration: "4-6 hours",
    items: ["football_lunch", "football_dinner", "beverage_package"],
    dietary_options: []
  },
  {
    id: "pkg-005",
    name: "Brunch Event Package",
    description: "Full brunch buffet with dessert and coffee",
    price: 6100,
    serves: "12-20 people",
    duration: "3-4 hours",
    items: ["bruin_brunch", "dessert_coffee"],
    dietary_options: ["vegetarian", "vegan", "gluten-free"]
  }
];
var SERVICE_TYPES = [
  {
    id: "buffet",
    name: "Buffet Service",
    description: "Self-service buffet setup",
    setup_time: 30,
    breakdown_time: 30,
    staff_required: 1,
    price_modifier: 1
  },
  {
    id: "plated",
    name: "Plated Service",
    description: "Individual plated meals served to guests",
    setup_time: 45,
    breakdown_time: 45,
    staff_required: 2,
    price_modifier: 1.3
  },
  {
    id: "station",
    name: "Food Stations",
    description: "Multiple themed food stations",
    setup_time: 60,
    breakdown_time: 45,
    staff_required: 2,
    price_modifier: 1.2
  },
  {
    id: "cocktail",
    name: "Cocktail Style",
    description: "Pass-around finger foods and canapes",
    setup_time: 30,
    breakdown_time: 30,
    staff_required: 3,
    price_modifier: 1.4
  }
];
var SUPPLIERS = [
  {
    id: "sup-001",
    name: "UCLA Conferences & Catering",
    rating: 4.9,
    specialty: "Full-Service Event Catering",
    location: "UCLA Campus",
    min_order: 500,
    delivery_fee: 0,
    setup_fee: 0
  },
  {
    id: "sup-002",
    name: "UCLA Housing & Hospitality",
    rating: 4.8,
    specialty: "Campus Dining & Hospitality",
    location: "UCLA Campus",
    min_order: 300,
    delivery_fee: 0,
    setup_fee: 100
  }
];
function generateCateringOrder(event) {
  const duration = Math.abs(differenceInMinutes(event.event_end * 1e3, event.event_start * 1e3));
  const attendeeCount = event.attendees?.length || predictableRandomInt(15, 5);
  let selectedItems = [];
  let orderType = "individual";
  let totalPrice = 0;
  if (attendeeCount >= 8 && duration >= 120) {
    const suitablePackages = CATERING_PACKAGES.filter((pkg) => {
      const serves = parseInt(pkg.serves.split("-")[0]);
      const maxServes = parseInt(pkg.serves.split("-")[1]) || serves + 5;
      return attendeeCount >= serves && attendeeCount <= maxServes + 5;
    });
    if (suitablePackages.length > 0) {
      const selectedPackage = suitablePackages[predictableRandomInt(suitablePackages.length)];
      orderType = "package";
      totalPrice = selectedPackage.price;
      selectedItems = selectedPackage.items.map((itemId) => {
        const item = MOCK_MENU.find((m) => m.id === itemId);
        return __spreadProps(__spreadValues({}, item), {
          quantity: Math.ceil(attendeeCount / 8),
          package_item: true,
          options: []
        });
      }).filter(Boolean);
    }
  }
  if (selectedItems.length === 0) {
    const itemCount = Math.min(predictableRandomInt(5, 2), Math.ceil(duration / 60));
    const selectedItemIds = /* @__PURE__ */ new Set();
    while (selectedItems.length < itemCount && selectedItemIds.size < MOCK_MENU.length) {
      const item = MOCK_MENU[predictableRandomInt(MOCK_MENU.length)];
      if (!selectedItemIds.has(item.id)) {
        selectedItemIds.add(item.id);
        const quantity = Math.max(1, Math.ceil(attendeeCount / 8));
        const itemPrice = item.unit_price * quantity;
        totalPrice += itemPrice;
        selectedItems.push(__spreadProps(__spreadValues({}, item), {
          quantity,
          package_item: false,
          options: item.options?.slice(0, predictableRandomInt(3)) || []
        }));
      }
    }
  }
  const serviceType = SERVICE_TYPES[predictableRandomInt(SERVICE_TYPES.length)];
  const serviceModifier = serviceType.price_modifier;
  totalPrice *= serviceModifier;
  const supplier = SUPPLIERS[predictableRandomInt(SUPPLIERS.length)];
  const deliveryFee = supplier.delivery_fee;
  const setupFee = supplier.setup_fee;
  totalPrice += deliveryFee + setupFee;
  const deliveryOffset = predictableRandomInt(30, 30);
  const deliverAt = new Date(event.event_start * 1e3 - deliveryOffset * 60 * 1e3);
  const dietaryNeeds = DIETARY_RESTRICTIONS.filter(() => predictableRandomInt(8) === 0);
  return __spreadValues({
    id: `order-${String(predictableRandomInt(999999, 1e5))}`,
    event_id: event.id,
    invoice_number: `INV-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(predictableRandomInt(99999, 1e4))}`,
    charge_code: `CC-${String(predictableRandomInt(9999, 1e3))}`,
    order_type: orderType,
    status: ["pending", "confirmed", "preparing", "delivered"][predictableRandomInt(4)],
    // Timing
    order_date: new Date(Date.now() - predictableRandomInt(7) * 24 * 60 * 60 * 1e3).toISOString(),
    deliver_at: deliverAt.toISOString(),
    setup_time: serviceType.setup_time,
    breakdown_time: serviceType.breakdown_time,
    // Service details
    service_type: serviceType,
    supplier,
    guest_count: attendeeCount,
    // Items and pricing
    items: selectedItems,
    subtotal: Math.floor(totalPrice - deliveryFee - setupFee),
    delivery_fee: deliveryFee,
    setup_fee: setupFee,
    tax: Math.floor(totalPrice * 0.1),
    // 10% tax
    total: Math.floor(totalPrice * 1.1),
    // Special requirements
    dietary_requirements: dietaryNeeds.map((d) => d.name),
    special_instructions: predictableRandomInt(3) === 0 ? [
      "Please use UCLA branded napkins",
      "Set up 15 minutes before event start",
      "Vegetarian options on separate table",
      "Please include serving utensils",
      "Halal preparation required",
      "Nut-free preparation required"
    ][predictableRandomInt(6)] : "",
    // Contact and delivery
    delivery_contact: event.attendees?.[0]?.name || "Event Organizer",
    delivery_phone: event.attendees?.[0]?.phone || "+1 310 825 4321",
    delivery_location: `Venue - ${event.location || "TBC"}`,
    access_instructions: "UCLA Events will direct to venue",
    // Billing
    department: event.extension_data?.department || "General",
    cost_center: event.extension_data?.cost_center || "events",
    project_code: event.extension_data?.project_code || null,
    // Metadata
    notes: [
      "Standard UCLA event catering",
      "Conference refreshments",
      "Department celebration catering",
      "Workshop session meals",
      "Board meeting premium service"
    ][predictableRandomInt(5)],
    created_by: event.attendees?.[0]?.email || "system@place.tech",
    last_modified: (/* @__PURE__ */ new Date()).toISOString()
  }, predictableRandomInt(4) === 0 && {
    rating: predictableRandomInt(5, 3) + 1,
    // 4-5 stars
    feedback: [
      "Excellent food quality and presentation",
      "Delivered on time, great service",
      "Fresh ingredients, everyone loved it",
      "Professional setup and cleanup",
      "Good variety, accommodated dietary needs"
    ][predictableRandomInt(5)],
    would_recommend: true
  });
}

// libs/mocks/src/lib/api/zone.data.ts
var MOCK_ORGS = [
  {
    id: "zone-org",
    created_at: getUnixTime(subMonths(Date.now(), 24)),
    updated_at: getUnixTime(subMonths(Date.now(), 1)),
    name: "UCLA",
    display_name: "University of California, Los Angeles",
    description: "UCLA Campus Event & Venue Spaces \u2014 Academic, Cultural, Athletic, and Student Life venues",
    tags: ["org", "university", "campus"],
    count: 1,
    capacity: 15e3,
    parent_id: "",
    triggers: [],
    settings: {
      timezone: "America/Los_Angeles",
      booking_rules: {
        advance_booking_days: 90,
        max_booking_duration: 12 * 60,
        auto_release_minutes: 15
      },
      work_hours: {
        start: "07:00",
        end: "22:00",
        days: [1, 2, 3, 4, 5, 6, 7]
      },
      features: [
        "wifi",
        "parking",
        "accessibility",
        "catering",
        "security",
        "av_support"
      ]
    },
    contact: {
      email: "events@ucla.edu",
      phone: "+1 310-825-4321",
      address: "405 Hilgard Avenue, Los Angeles, CA 90095"
    },
    metadata: {
      founded: 1919,
      employee_count: 45e3,
      sustainability_rating: "Platinum",
      certifications: [
        "LEED Platinum",
        "AASHE STARS Gold",
        "Tree Campus USA"
      ]
    }
  }
];
var MOCK_REGIONS = [
  {
    id: "region-ucla-campus",
    created_at: getUnixTime(subMonths(Date.now(), 18)),
    updated_at: getUnixTime(subMonths(Date.now(), 2)),
    name: "UCLA Campus",
    display_name: "UCLA Campus",
    description: "Main UCLA campus in Westwood, Los Angeles",
    tags: ["region", "campus", "westwood"],
    count: 25,
    capacity: 15e3,
    parent_id: "zone-org",
    triggers: [],
    settings: {
      timezone: "America/Los_Angeles",
      region_code: "UCLA",
      business_hours: {
        start: "07:00",
        end: "22:00",
        timezone: "America/Los_Angeles"
      }
    },
    contact: {
      email: "events@ucla.edu",
      phone: "+1 310-825-4321",
      address: "UCLA, Los Angeles, CA 90095"
    },
    boundaries: {
      north: 34.0759,
      south: 34.0627,
      east: -118.437,
      west: -118.453
    }
  }
];
var MOCK_BUILDINGS = [
  {
    id: "bld-01",
    name: "Covel Commons",
    display_name: "Covel Commons (Sunset Village)",
    description: "Full-service event venue in Sunset Village offering catering, AV support, and on-site parking for large and small events",
    tags: ["building", "dining", "events", "catering"],
    count: 2,
    capacity: 800,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "200 De Neve Drive",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0726,
        lng: -118.451
      }
    },
    features: {
      parking_spaces: 150,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 10,
      security_level: "standard"
    },
    building_details: {
      year_built: 1959,
      architect: "Welton Becket",
      total_floors: 2,
      basement_levels: 0,
      floor_area_sqm: 2800,
      energy_rating: "LEED Silver",
      construction_type: "Reinforced concrete",
      elevator_count: 2,
      stair_count: 3
    }
  },
  {
    id: "bld-02",
    name: "Carnesale Commons",
    display_name: "Carnesale Commons",
    description: "Premier event venue with Palisades Ballroom and flexible meeting rooms for conferences, receptions, and formal dinners",
    tags: ["building", "events", "conference", "ballroom"],
    count: 2,
    capacity: 900,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "251 Charles E Young Drive West",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0714,
        lng: -118.4499
      }
    },
    features: {
      parking_spaces: 200,
      accessibility: true,
      bike_storage: false,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 8,
      security_level: "standard"
    },
    building_details: {
      year_built: 2005,
      architect: "Anshen + Allen",
      total_floors: 2,
      basement_levels: 0,
      floor_area_sqm: 3200,
      energy_rating: "LEED Gold",
      construction_type: "Steel frame with glass facade",
      elevator_count: 2,
      stair_count: 2
    }
  },
  {
    id: "bld-03",
    name: "De Neve Plaza",
    display_name: "De Neve Plaza",
    description: "Campus event venue with auditorium, plaza room, and flexible meeting spaces for catered events and presentations",
    tags: ["building", "events", "auditorium", "residential"],
    count: 2,
    capacity: 700,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "351 Charles E Young Drive West",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0706,
        lng: -118.4505
      }
    },
    features: {
      parking_spaces: 120,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 5,
      security_level: "standard"
    },
    building_details: {
      year_built: 1965,
      architect: "Welton Becket",
      total_floors: 2,
      basement_levels: 0,
      floor_area_sqm: 2400,
      energy_rating: "LEED Silver",
      construction_type: "Reinforced concrete",
      elevator_count: 2,
      stair_count: 3
    }
  },
  {
    id: "bld-04",
    name: "University Club",
    display_name: "University Club",
    description: "Premier members-only venue with dining rooms, boardrooms, patios, and full-service catering for weddings, galas, and corporate events",
    tags: ["building", "dining", "events", "premium", "club"],
    count: 2,
    capacity: 600,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "480 Charles E Young Drive East",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0713,
        lng: -118.4408
      }
    },
    features: {
      parking_spaces: 80,
      accessibility: true,
      bike_storage: false,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 4,
      security_level: "premium"
    },
    building_details: {
      year_built: 1959,
      architect: "Welton Becket",
      total_floors: 2,
      basement_levels: 0,
      floor_area_sqm: 5500,
      energy_rating: "LEED Silver",
      construction_type: "Mid-century modern with renovations",
      elevator_count: 1,
      stair_count: 2
    }
  },
  {
    id: "bld-05",
    name: "Luskin Conference Center",
    display_name: "Meyer and Renee Luskin Conference Center",
    description: "Full-service conference center and hotel with 25,000+ sq ft of event space, 254 guest rooms, and on-site restaurant",
    tags: ["building", "conference", "hotel", "premium", "events"],
    count: 3,
    capacity: 1200,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1", "lvl-2"],
    address: {
      street: "425 Westwood Plaza",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0706,
        lng: -118.4437
      }
    },
    features: {
      parking_spaces: 300,
      accessibility: true,
      bike_storage: false,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: false,
      ev_charging: 15,
      security_level: "high"
    },
    building_details: {
      year_built: 2016,
      architect: "Pei Cobb Freed & Partners",
      total_floors: 7,
      basement_levels: 2,
      floor_area_sqm: 1e4,
      energy_rating: "LEED Gold",
      construction_type: "Steel and glass with sustainable features",
      elevator_count: 6,
      stair_count: 4
    }
  },
  {
    id: "bld-06",
    name: "ASUCLA Event Spaces",
    display_name: "ASUCLA Event Spaces (Ackerman & Kerckhoff)",
    description: "Student union event venues including Grand Ballroom, Grand Salon, meeting rooms, and outdoor terraces",
    tags: ["building", "student", "events", "ballroom"],
    count: 2,
    capacity: 1500,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "308 Westwood Plaza",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.07,
        lng: -118.444
      }
    },
    features: {
      parking_spaces: 200,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 10,
      security_level: "standard"
    },
    building_details: {
      year_built: 1962,
      architect: "Welton Becket",
      total_floors: 4,
      basement_levels: 1,
      floor_area_sqm: 8e3,
      energy_rating: "LEED Silver",
      construction_type: "Reinforced concrete with modern renovations",
      elevator_count: 3,
      stair_count: 4
    }
  },
  {
    id: "bld-07",
    name: "Anderson School of Management",
    display_name: "UCLA Anderson School of Management",
    description: "Academic venue with Korn Convocation Hall, classrooms, atriums, and outdoor event spaces for conferences and ceremonies",
    tags: ["building", "academic", "conference", "business"],
    count: 2,
    capacity: 800,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "110 Westwood Plaza",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0735,
        lng: -118.443
      }
    },
    features: {
      parking_spaces: 250,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 12,
      security_level: "standard"
    },
    building_details: {
      year_built: 1995,
      architect: "Pei Cobb Freed & Partners",
      total_floors: 4,
      basement_levels: 1,
      floor_area_sqm: 6500,
      energy_rating: "LEED Gold",
      construction_type: "Modern academic complex",
      elevator_count: 3,
      stair_count: 4
    }
  },
  {
    id: "bld-08",
    name: "Fowler Museum",
    display_name: "Fowler Museum at UCLA",
    description: "Cultural venue with auditorium, galleries, terraces, and courtyards for receptions, lectures, and performances",
    tags: ["building", "cultural", "museum", "arts"],
    count: 2,
    capacity: 600,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "308 Charles E Young Drive North",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.073,
        lng: -118.4437
      }
    },
    features: {
      parking_spaces: 100,
      accessibility: true,
      bike_storage: false,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 5,
      security_level: "high"
    },
    building_details: {
      year_built: 1992,
      architect: "Richard Meier (style)",
      total_floors: 3,
      basement_levels: 0,
      floor_area_sqm: 4500,
      energy_rating: "Energy Star Certified",
      construction_type: "Modern museum construction",
      elevator_count: 2,
      stair_count: 3
    }
  },
  {
    id: "bld-09",
    name: "Royce Hall",
    display_name: "Royce Hall",
    description: "Iconic 1,834-seat performance hall with conference rooms, green rooms, and outdoor terraces for concerts, ceremonies, and events",
    tags: ["building", "performing-arts", "historic", "landmark"],
    count: 2,
    capacity: 2e3,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "340 Royce Drive",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0729,
        lng: -118.4422
      }
    },
    features: {
      parking_spaces: 200,
      accessibility: true,
      bike_storage: false,
      shower_facilities: true,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 8,
      security_level: "high"
    },
    building_details: {
      year_built: 1929,
      architect: "Allison & Allison",
      total_floors: 3,
      basement_levels: 1,
      floor_area_sqm: 7e3,
      energy_rating: "Historic Building \u2014 Energy Retrofit",
      construction_type: "Romanesque Revival brick and reinforced concrete",
      elevator_count: 2,
      stair_count: 4
    }
  },
  {
    id: "bld-10",
    name: "James West Alumni Center",
    display_name: "James West Alumni Center",
    description: "Event venue with conference rooms, founders room, galleria, and outdoor patios for receptions, meetings, and celebrations",
    tags: ["building", "alumni", "events", "conference"],
    count: 2,
    capacity: 400,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "325 Westwood Plaza",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0695,
        lng: -118.445
      }
    },
    features: {
      parking_spaces: 60,
      accessibility: true,
      bike_storage: false,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 4,
      security_level: "standard"
    },
    building_details: {
      year_built: 1990,
      architect: "Robert Kerr (namesake)",
      total_floors: 2,
      basement_levels: 0,
      floor_area_sqm: 3500,
      energy_rating: "Energy Star Certified",
      construction_type: "Modern campus architecture",
      elevator_count: 1,
      stair_count: 2
    }
  },
  {
    id: "bld-11",
    name: "Hammer Museum",
    display_name: "Hammer Museum",
    description: "Cultural venue with Billy Wilder Theater, galleries, terraces, boardroom, and sculpture gardens for up to 900 guests",
    tags: ["building", "cultural", "museum", "arts", "performing-arts"],
    count: 2,
    capacity: 900,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "10899 Wilshire Boulevard",
      suburb: "Westwood",
      state: "CA",
      postcode: "90024",
      country: "United States",
      coordinates: {
        lat: 34.059,
        lng: -118.4435
      }
    },
    features: {
      parking_spaces: 200,
      accessibility: true,
      bike_storage: false,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 8,
      security_level: "high"
    },
    building_details: {
      year_built: 1990,
      architect: "Edward Larrabee Barnes",
      total_floors: 4,
      basement_levels: 1,
      floor_area_sqm: 8e3,
      energy_rating: "LEED Silver",
      construction_type: "Modern museum construction",
      elevator_count: 3,
      stair_count: 4
    }
  },
  {
    id: "bld-12",
    name: "Schoenberg Music Building",
    display_name: "Schoenberg Music Building",
    description: "Music performance complex with 522-seat concert hall, recital halls, practice rooms, recording labs, and rehearsal spaces",
    tags: ["building", "performing-arts", "music", "academic"],
    count: 2,
    capacity: 800,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "445 Charles E Young Drive East",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0706,
        lng: -118.44
      }
    },
    features: {
      parking_spaces: 100,
      accessibility: true,
      bike_storage: false,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 4,
      security_level: "standard"
    },
    building_details: {
      year_built: 1955,
      architect: "Welton Becket",
      total_floors: 3,
      basement_levels: 0,
      floor_area_sqm: 5500,
      energy_rating: "Historic Building \u2014 Energy Retrofit",
      construction_type: "Mid-century modern academic",
      elevator_count: 2,
      stair_count: 3
    }
  },
  {
    id: "bld-13",
    name: "Theater, Film & Television",
    display_name: "UCLA School of Theater, Film & Television",
    description: "Performance and production complex with Freud Playhouse, James Bridges Theater, Little Theater, studio spaces, and screening rooms",
    tags: ["building", "performing-arts", "film", "theater", "academic"],
    count: 2,
    capacity: 1100,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "245 Charles E Young Drive East",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0718,
        lng: -118.4405
      }
    },
    features: {
      parking_spaces: 150,
      accessibility: true,
      bike_storage: false,
      shower_facilities: true,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 6,
      security_level: "standard"
    },
    building_details: {
      year_built: 1962,
      architect: "Welton Becket",
      total_floors: 3,
      basement_levels: 0,
      floor_area_sqm: 7e3,
      energy_rating: "LEED Silver",
      construction_type: "Theater and production facility",
      elevator_count: 2,
      stair_count: 4
    }
  },
  {
    id: "bld-14",
    name: "CNSI",
    display_name: "California NanoSystems Institute",
    description: "Research facility with 260-seat auditorium, conference rooms, lobby space, multipurpose meeting space, and outdoor terraces",
    tags: ["building", "academic", "research", "conference"],
    count: 2,
    capacity: 500,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "570 Westwood Plaza",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.069,
        lng: -118.4425
      }
    },
    features: {
      parking_spaces: 100,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 8,
      security_level: "high"
    },
    building_details: {
      year_built: 2007,
      architect: "RTKL Associates",
      total_floors: 5,
      basement_levels: 1,
      floor_area_sqm: 6800,
      energy_rating: "LEED Gold",
      construction_type: "Modern research facility with glass facade",
      elevator_count: 3,
      stair_count: 4
    }
  },
  {
    id: "bld-15",
    name: "Botanical Gardens",
    display_name: "Mildred E. Mathias Botanical Garden",
    description: "Garden venue with La Kretz Pavilion, terraces, patios, amphitheater, and 5,000+ plant species across 7 acres",
    tags: ["building", "outdoor", "garden", "events"],
    count: 1,
    capacity: 300,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G"],
    address: {
      street: "707 Tiverton Drive",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0668,
        lng: -118.441
      }
    },
    features: {
      parking_spaces: 50,
      accessibility: true,
      bike_storage: false,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 2,
      security_level: "standard"
    },
    building_details: {
      year_built: 1930,
      architect: "UCLA Grounds Division",
      total_floors: 1,
      basement_levels: 0,
      floor_area_sqm: 2500,
      energy_rating: "LEED Gold",
      construction_type: "Garden pavilion with outdoor spaces",
      elevator_count: 0,
      stair_count: 1
    }
  },
  {
    id: "bld-16",
    name: "Samueli Engineering",
    display_name: "Henry Samueli School of Engineering",
    description: "Engineering complex with auditoriums, classrooms, Mong Learning Center, Cohen Room, maker spaces, and outdoor patios",
    tags: ["building", "academic", "engineering", "conference"],
    count: 2,
    capacity: 600,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "420 Westwood Plaza",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0696,
        lng: -118.443
      }
    },
    features: {
      parking_spaces: 150,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 10,
      security_level: "standard"
    },
    building_details: {
      year_built: 2006,
      architect: "Morphosis Architects",
      total_floors: 5,
      basement_levels: 1,
      floor_area_sqm: 9e3,
      energy_rating: "LEED Gold",
      construction_type: "Modern academic and research complex",
      elevator_count: 4,
      stair_count: 4
    }
  },
  {
    id: "bld-17",
    name: "Law School",
    display_name: "UCLA School of Law",
    description: "Academic venue with classrooms, meeting rooms, student lounges, and Shapiro Courtyard for legal conferences, symposiums, and events",
    tags: ["building", "academic", "law", "conference"],
    count: 2,
    capacity: 500,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "385 Charles E Young Drive East",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0724,
        lng: -118.439
      }
    },
    features: {
      parking_spaces: 120,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 6,
      security_level: "standard"
    },
    building_details: {
      year_built: 1967,
      architect: "Jones & Emmons",
      total_floors: 4,
      basement_levels: 0,
      floor_area_sqm: 6e3,
      energy_rating: "Energy Star Certified",
      construction_type: "Brutalist academic complex",
      elevator_count: 3,
      stair_count: 4
    }
  },
  {
    id: "bld-18",
    name: "Moore Hall",
    display_name: "Moore Hall",
    description: "Academic venue with reading room, classrooms, auditorium, and courtyard for lectures, colloquia, and educational conferences",
    tags: ["building", "academic", "education", "conference"],
    count: 2,
    capacity: 400,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "457 Charles E Young Drive South",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.07,
        lng: -118.4412
      }
    },
    features: {
      parking_spaces: 80,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 4,
      security_level: "standard"
    },
    building_details: {
      year_built: 1930,
      architect: "Allison & Allison",
      total_floors: 3,
      basement_levels: 0,
      floor_area_sqm: 4e3,
      energy_rating: "Historic Building \u2014 Energy Retrofit",
      construction_type: "Romanesque Revival brick",
      elevator_count: 1,
      stair_count: 3
    }
  },
  {
    id: "bld-19",
    name: "Luskin School of Public Affairs",
    display_name: "UCLA Luskin School of Public Affairs",
    description: "Academic venue with classrooms, 3rd Floor Commons, patio, and terrace for lectures, career fairs, and commencement events",
    tags: ["building", "academic", "public-affairs", "conference"],
    count: 2,
    capacity: 400,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "337 Charles E Young Drive East",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0744,
        lng: -118.4398
      }
    },
    features: {
      parking_spaces: 60,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 4,
      security_level: "standard"
    },
    building_details: {
      year_built: 2010,
      architect: "Pei Cobb Freed & Partners",
      total_floors: 4,
      basement_levels: 0,
      floor_area_sqm: 5e3,
      energy_rating: "LEED Gold",
      construction_type: "Modern academic building",
      elevator_count: 2,
      stair_count: 3
    }
  },
  {
    id: "bld-20",
    name: "Powell Library",
    display_name: "Powell Library & Young Research Library",
    description: "Academic library complex with classrooms, research commons, study spaces, Lux Lab, and special collections for workshops and lectures",
    tags: ["building", "academic", "library", "research"],
    count: 2,
    capacity: 300,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "10740 Dickson Court",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0715,
        lng: -118.442
      }
    },
    features: {
      parking_spaces: 60,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: true,
      gym: false,
      rooftop_garden: false,
      ev_charging: 4,
      security_level: "standard"
    },
    building_details: {
      year_built: 1929,
      architect: "Allison & Allison",
      total_floors: 3,
      basement_levels: 1,
      floor_area_sqm: 8e3,
      energy_rating: "Historic Building \u2014 Energy Retrofit",
      construction_type: "Romanesque Revival brick and concrete",
      elevator_count: 2,
      stair_count: 4
    }
  },
  {
    id: "bld-21",
    name: "DataX",
    display_name: "DataX Research Hub",
    description: "Data science research hub with Impact Forum event space, conference rooms, collaboration hub, hotel offices, and lounge areas",
    tags: ["building", "academic", "research", "technology"],
    count: 1,
    capacity: 200,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G"],
    address: {
      street: "550 Westwood Plaza",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0685,
        lng: -118.442
      }
    },
    features: {
      parking_spaces: 80,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 6,
      security_level: "standard"
    },
    building_details: {
      year_built: 2022,
      architect: "Gensler",
      total_floors: 2,
      basement_levels: 0,
      floor_area_sqm: 3e3,
      energy_rating: "LEED Gold",
      construction_type: "Modern tech research hub",
      elevator_count: 1,
      stair_count: 2
    }
  },
  {
    id: "bld-22",
    name: "Kaplan Hall",
    display_name: "Kaplan Hall",
    description: "Academic building with event spaces, classrooms, and meeting rooms for colloquia, lectures, and student group events",
    tags: ["building", "academic", "conference"],
    count: 1,
    capacity: 100,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G"],
    address: {
      street: "377 Charles E Young Drive East",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0725,
        lng: -118.4395
      }
    },
    features: {
      parking_spaces: 40,
      accessibility: true,
      bike_storage: true,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 2,
      security_level: "standard"
    },
    building_details: {
      year_built: 1960,
      architect: "Welton Becket",
      total_floors: 2,
      basement_levels: 0,
      floor_area_sqm: 2e3,
      energy_rating: "Energy Star Certified",
      construction_type: "Mid-century academic building",
      elevator_count: 1,
      stair_count: 2
    }
  },
  {
    id: "bld-23",
    name: "Lake Arrowhead Lodge",
    display_name: "UCLA Lake Arrowhead Lodge",
    description: "Off-campus conference center and lodge with 10,000 sq ft of event space, 13 meeting rooms, 254 guest rooms, pool, and recreation facilities",
    tags: ["building", "conference", "retreat", "hotel"],
    count: 2,
    capacity: 400,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G", "lvl-1"],
    address: {
      street: "850 Willow Creek Road",
      suburb: "Lake Arrowhead",
      state: "CA",
      postcode: "92352",
      country: "United States",
      coordinates: {
        lat: 34.2495,
        lng: -117.189
      }
    },
    features: {
      parking_spaces: 100,
      accessibility: true,
      bike_storage: false,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: false,
      ev_charging: 6,
      security_level: "standard"
    },
    building_details: {
      year_built: 1922,
      architect: "Paul Revere Williams (renovation)",
      total_floors: 3,
      basement_levels: 0,
      floor_area_sqm: 5e3,
      energy_rating: "Energy Star Certified",
      construction_type: "Rustic lodge with modern renovations",
      elevator_count: 1,
      stair_count: 3
    }
  },
  {
    id: "bld-24",
    name: "UCLA Recreation",
    display_name: "UCLA Recreation & Athletic Venues",
    description: "Athletic and recreation complex including Drake Stadium, Los Angeles Tennis Center, John Wooden Center, and Sunset Canyon Recreation Center",
    tags: ["building", "athletics", "recreation", "outdoor"],
    count: 1,
    capacity: 5e3,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G"],
    address: {
      street: "100 Bruin Walk",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0715,
        lng: -118.4475
      }
    },
    features: {
      parking_spaces: 300,
      accessibility: true,
      bike_storage: true,
      shower_facilities: true,
      cafe_on_site: true,
      gym: true,
      rooftop_garden: false,
      ev_charging: 12,
      security_level: "standard"
    },
    building_details: {
      year_built: 1965,
      architect: "Various",
      total_floors: 2,
      basement_levels: 0,
      floor_area_sqm: 2e4,
      energy_rating: "LEED Silver",
      construction_type: "Athletic and recreation facilities",
      elevator_count: 2,
      stair_count: 6
    }
  },
  {
    id: "bld-25",
    name: "Campus Outdoor Spaces",
    display_name: "UCLA Campus Outdoor Venues",
    description: "Campus-wide outdoor event spaces including Wilson Plaza, Court of Sciences, Franklin Murphy Sculpture Garden, Meyerhoff Park, and Dickson Courts",
    tags: ["building", "outdoor", "plaza", "events"],
    count: 1,
    capacity: 2e3,
    parent_id: "region-ucla-campus",
    triggers: [],
    levels: ["lvl-G"],
    address: {
      street: "405 Hilgard Avenue",
      suburb: "Westwood",
      state: "CA",
      postcode: "90095",
      country: "United States",
      coordinates: {
        lat: 34.0708,
        lng: -118.443
      }
    },
    features: {
      parking_spaces: 200,
      accessibility: true,
      bike_storage: false,
      shower_facilities: false,
      cafe_on_site: false,
      gym: false,
      rooftop_garden: false,
      ev_charging: 0,
      security_level: "standard"
    },
    building_details: {
      year_built: 1929,
      architect: "Various",
      total_floors: 1,
      basement_levels: 0,
      floor_area_sqm: 3e4,
      energy_rating: "N/A \u2014 Outdoor spaces",
      construction_type: "Landscaped plazas and courtyards",
      elevator_count: 0,
      stair_count: 0
    }
  }
];
var MOCK_ZONES = [];
var createMockLevel = (id, idx, building, levelCode = "1") => {
  const levelNumber = levelCode === "G" ? 0 : levelCode === "M" ? 0.5 : levelCode.startsWith("P") ? -parseInt(levelCode.substring(1)) : parseInt(levelCode) || 1;
  const isGroundFloor = levelCode === "G";
  const isMezzanine = levelCode === "M";
  const isParkingLevel = levelCode.startsWith("P");
  let levelType = "office";
  if (isParkingLevel)
    levelType = "parking";
  else if (isGroundFloor)
    levelType = "lobby";
  else if (isMezzanine)
    levelType = "mixed-use";
  const capacityByType = {
    parking: 0,
    lobby: 50,
    "mixed-use": Math.floor(building.capacity * 0.2),
    office: Math.floor(building.capacity * 0.4)
  };
  const levelName = isParkingLevel ? `Parking Level ${levelCode.substring(1)}` : isGroundFloor ? "Ground Floor" : isMezzanine ? "Mezzanine" : `Level ${levelCode}`;
  const displayName = levelName;
  const features = [];
  if (isGroundFloor)
    features.push("reception", "lobby", "event-spaces");
  if (isMezzanine)
    features.push("meeting-rooms", "break-areas", "informal-seating");
  if (levelType === "office")
    features.push("event-spaces", "meeting-rooms", "conference-rooms");
  if (isParkingLevel)
    features.push("parking", "ev-charging");
  return {
    id: `${building.id}_${id}`,
    name: levelName,
    display_name: displayName,
    parent_id: building.id,
    description: `${levelName} of ${building.name} featuring ${features.join(", ")}`,
    tags: ["level", levelType, building.tags[1]].filter(Boolean),
    map_id: `assets/maps/${building.id.replace("bld-", "level_")}${levelCode}.svg`,
    code: `${building.name.substring(0, 3).toUpperCase()}-${levelCode}`,
    type: levelType,
    count: predictableRandomInt(15, 5),
    capacity: capacityByType[levelType] || Math.floor(building.capacity * 0.3),
    location: `${building.address.coordinates.lat},${building.address.coordinates.lng}`,
    level_number: levelNumber,
    floor_area_sqm: Math.floor(building.building_details.floor_area_sqm / building.count),
    ceiling_height: levelType === "lobby" ? 4.5 : isParkingLevel ? 2.4 : 3.5,
    features,
    accessibility: {
      wheelchair_accessible: true,
      elevator_access: !isParkingLevel || building.building_details.elevator_count > 0,
      accessible_bathrooms: levelType !== "parking",
      hearing_loop: isGroundFloor || levelType === "office"
    },
    utilities: {
      power_outlets: "extensive",
      data_points: "fiber_optic",
      hvac_zones: Math.ceil((capacityByType[levelType] || 50) / 50),
      fire_safety: "compliant",
      security_systems: building.features.security_level
    },
    spaces: {
      meeting_rooms: predictableRandomInt(8, 3),
      workstations: 0,
      break_areas: levelType !== "parking" ? predictableRandomInt(3, 1) : 0,
      storage_rooms: predictableRandomInt(4, 1),
      bathrooms: isParkingLevel ? 1 : predictableRandomInt(4, 2),
      parking_spaces: isParkingLevel ? Math.floor(building.features.parking_spaces / 2) : 0
    },
    created_at: getUnixTime(subMonths(Date.now(), predictableRandomInt(36, 6))),
    updated_at: getUnixTime(subMonths(Date.now(), predictableRandomInt(3, 0))),
    settings: {
      booking_enabled: levelType !== "parking",
      public_access: isGroundFloor,
      after_hours_access: "keycard",
      temperature_range: {
        min: 68,
        max: 76
      },
      lighting: {
        type: "LED with daylight sensors",
        zones: Math.ceil((capacityByType[levelType] || 30) / 30)
      }
    },
    maintenance: {
      last_inspection: getUnixTime(subMonths(Date.now(), predictableRandomInt(6, 1))),
      next_inspection: getUnixTime(new Date(Date.now() + predictableRandomInt(90, 30) * 24 * 60 * 60 * 1e3)),
      cleaning_schedule: isParkingLevel ? "weekly" : "daily",
      maintenance_contact: "UCLA Facilities Management"
    }
  };
};
var MOCK_LEVELS = MOCK_BUILDINGS.map((bld) => bld.levels.map((level, idx) => createMockLevel(level, idx, bld, level.split("-")[1]))).reduce((prev, current) => prev.concat(current), []);

// libs/mocks/src/lib/api/spaces.data.ts
var floorIndexToLevelCode = (floor_index) => {
  if (floor_index === 0)
    return "G";
  return String(floor_index);
};
var getZoneHierarchy = (buildingId, levelId) => {
  const building = MOCK_BUILDINGS.find((b) => b.id === buildingId);
  if (!building)
    return ["zone-org", "region-ucla-campus", buildingId, levelId];
  const region = MOCK_REGIONS.find((r) => r.id === building.parent_id);
  const orgId = region ? region.parent_id : "zone-org";
  return [orgId, building.parent_id, buildingId, levelId];
};
var UCLA_ROOMS = [
  // ═══════════════════════════════════════════════════════════════════
  // COVEL COMMONS (bld-01) — from Meeting Room Rental Rates + Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Grand Horizon & Terrace",
    display_name: "Grand Horizon & Terrace",
    type: "Event Space",
    building_id: "bld-01",
    building_name: "Covel Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 350,
    sqft: 5900,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "Terrace Access", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "Event Facilitators", "On-site Parking"],
    hourly_rate: 450,
    half_day_rate: 3e3,
    full_day_rate: 3600,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Salon A & Terrace",
    display_name: "Salon A & Terrace",
    type: "Event Space",
    building_id: "bld-01",
    building_name: "Covel Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 3e3,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "Terrace Access", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "Event Facilitators", "On-site Parking"],
    hourly_rate: 400,
    half_day_rate: 2750,
    full_day_rate: 3150,
    approval_required: true,
    catering_available: true
  },
  {
    name: "South Bay Room",
    display_name: "South Bay Room",
    type: "Meeting Room",
    building_id: "bld-01",
    building_name: "Covel Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 60,
    sqft: 960,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 130,
    half_day_rate: 900,
    full_day_rate: 1050,
    approval_required: false,
    catering_available: true
  },
  {
    name: "West Coast",
    display_name: "West Coast",
    type: "Meeting Room",
    building_id: "bld-01",
    building_name: "Covel Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 55,
    sqft: 920,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 130,
    half_day_rate: 900,
    full_day_rate: 1050,
    approval_required: false,
    catering_available: true
  },
  {
    name: "North Ridge",
    display_name: "North Ridge",
    type: "Meeting Room",
    building_id: "bld-01",
    building_name: "Covel Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 50,
    sqft: 874,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 130,
    half_day_rate: 900,
    full_day_rate: 1050,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Conference Room L-04",
    display_name: "Conference Room L-04",
    type: "Conference Room",
    building_id: "bld-01",
    building_name: "Covel Commons",
    floor: "Level 1",
    floor_index: 1,
    capacity: 20,
    sqft: 400,
    features: ["Display Screen", "Video Conference", "Whiteboard", "Phone", "WiFi"],
    services: ["Audio-Visual Tech & Support", "Complimentary Wi-Fi"],
    hourly_rate: 50,
    half_day_rate: 250,
    full_day_rate: 400,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Conference Room 207",
    display_name: "Conference Room 207",
    type: "Conference Room",
    building_id: "bld-01",
    building_name: "Covel Commons",
    floor: "Level 1",
    floor_index: 1,
    capacity: 20,
    sqft: 400,
    features: ["Display Screen", "Video Conference", "Whiteboard", "Phone", "WiFi"],
    services: ["Audio-Visual Tech & Support", "Complimentary Wi-Fi"],
    hourly_rate: 50,
    half_day_rate: 250,
    full_day_rate: 400,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Northwest Campus Auditorium",
    display_name: "Northwest Campus Auditorium",
    type: "Auditorium",
    building_id: "bld-01",
    building_name: "Covel Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 349,
    sqft: 4500,
    features: ["Audio System", "Projector", "Stage/Platform", "Tiered Seating", "Lighting Control", "Video Conference"],
    services: ["Audio-Visual Tech & Support", "Complimentary Wi-Fi", "Event Facilitators", "On-site Parking"],
    hourly_rate: 300,
    half_day_rate: 2e3,
    full_day_rate: 2400,
    approval_required: true,
    catering_available: false,
    notes: "Teleconferences, lectures, presentations, forums, small theatrical performances"
  },
  // ═══════════════════════════════════════════════════════════════════
  // CARNESALE COMMONS (bld-02) — from Meeting Room Rental Rates + Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Palisades Ballroom",
    display_name: "Palisades Ballroom",
    type: "Ballroom",
    building_id: "bld-02",
    building_name: "Carnesale Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 450,
    sqft: 6700,
    features: ["Audio System", "Projector", "Stage/Platform", "Flexible Seating", "Catering Setup", "Dance Floor"],
    services: ["Full Catering Services", "Business Center", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "Event Facilitators & Conference Managers", "On-site Parking", "Event Material Storage", "Signage & Displays"],
    hourly_rate: 450,
    half_day_rate: 3e3,
    full_day_rate: 3600,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Palisades ABCF",
    display_name: "Palisades ABCF Section",
    type: "Event Space",
    building_id: "bld-02",
    building_name: "Carnesale Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 300,
    sqft: 4500,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "Event Facilitators & Conference Managers", "On-site Parking"],
    hourly_rate: 420,
    half_day_rate: 2900,
    full_day_rate: 3400,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Palisades DE",
    display_name: "Palisades DE Section",
    type: "Event Space",
    building_id: "bld-02",
    building_name: "Carnesale Commons",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 2250,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 300,
    half_day_rate: 2100,
    full_day_rate: 2600,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Malibu",
    display_name: "Malibu",
    type: "Meeting Room",
    building_id: "bld-02",
    building_name: "Carnesale Commons",
    floor: "Level 1",
    floor_index: 1,
    capacity: 40,
    sqft: 713,
    features: ["Display Screen", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 110,
    half_day_rate: 750,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Venice A & B",
    display_name: "Venice A & B",
    type: "Meeting Room",
    building_id: "bld-02",
    building_name: "Carnesale Commons",
    floor: "Level 1",
    floor_index: 1,
    capacity: 70,
    sqft: 1211,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 140,
    half_day_rate: 1e3,
    full_day_rate: 1150,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Hermosa A & B",
    display_name: "Hermosa A & B",
    type: "Meeting Room",
    building_id: "bld-02",
    building_name: "Carnesale Commons",
    floor: "Level 1",
    floor_index: 1,
    capacity: 70,
    sqft: 1205,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 140,
    half_day_rate: 1e3,
    full_day_rate: 1150,
    approval_required: false,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // DE NEVE PLAZA (bld-03) — from Meeting Room Rental Rates + Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Plaza Room",
    display_name: "Plaza Room",
    type: "Event Space",
    building_id: "bld-03",
    building_name: "De Neve Plaza",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 250,
    sqft: 3700,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "Event Facilitators & Conference Managers", "On-site Parking"],
    hourly_rate: 300,
    half_day_rate: 2100,
    full_day_rate: 2400,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Plaza A",
    display_name: "Plaza A",
    type: "Conference Room",
    building_id: "bld-03",
    building_name: "De Neve Plaza",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 120,
    sqft: 1850,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 190,
    half_day_rate: 1300,
    full_day_rate: 1700,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Plaza B",
    display_name: "Plaza B",
    type: "Conference Room",
    building_id: "bld-03",
    building_name: "De Neve Plaza",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 120,
    sqft: 1850,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Full Catering Services", "Audio-Visual Tech & Support", "Complimentary Wi-Fi", "On-site Parking"],
    hourly_rate: 190,
    half_day_rate: 1300,
    full_day_rate: 1700,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Sycamore",
    display_name: "Sycamore",
    type: "Meeting Room",
    building_id: "bld-03",
    building_name: "De Neve Plaza",
    floor: "Level 1",
    floor_index: 1,
    capacity: 30,
    sqft: 510,
    features: ["Display Screen", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Audio-Visual Tech & Support", "Complimentary Wi-Fi"],
    hourly_rate: 60,
    half_day_rate: 400,
    full_day_rate: 550,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Magnolia",
    display_name: "Magnolia",
    type: "Meeting Room",
    building_id: "bld-03",
    building_name: "De Neve Plaza",
    floor: "Level 1",
    floor_index: 1,
    capacity: 12,
    sqft: 200,
    features: ["Display Screen", "Video Conference", "WiFi"],
    services: ["Audio-Visual Tech & Support", "Complimentary Wi-Fi"],
    hourly_rate: 30,
    half_day_rate: 210,
    full_day_rate: 315,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Jacaranda",
    display_name: "Jacaranda",
    type: "Meeting Room",
    building_id: "bld-03",
    building_name: "De Neve Plaza",
    floor: "Level 1",
    floor_index: 1,
    capacity: 12,
    sqft: 200,
    features: ["Display Screen", "Video Conference", "WiFi"],
    services: ["Audio-Visual Tech & Support", "Complimentary Wi-Fi"],
    hourly_rate: 30,
    half_day_rate: 210,
    full_day_rate: 315,
    approval_required: false,
    catering_available: false
  },
  {
    name: "De Neve Lecture Auditorium",
    display_name: "De Neve Lecture Auditorium",
    type: "Auditorium",
    building_id: "bld-03",
    building_name: "De Neve Plaza",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 430,
    sqft: 5e3,
    features: ["Audio System", "Projector", "Stage/Platform", "Tiered Seating", "Lighting Control"],
    services: ["Audio-Visual Tech & Support", "Complimentary Wi-Fi", "Event Facilitators & Conference Managers", "On-site Parking"],
    hourly_rate: 300,
    half_day_rate: 2e3,
    full_day_rate: 2400,
    approval_required: true,
    catering_available: false,
    notes: "Catering only available in Plaza Room, NOT Auditorium"
  },
  // ═══════════════════════════════════════════════════════════════════
  // UNIVERSITY CLUB (bld-04) — from University Club Rental Rates + Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Cederbaum Board Room",
    display_name: "Cederbaum Board Room",
    type: "Boardroom",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 12,
    sqft: 170,
    features: ["Large Display", "HDMI", "Executive Seating", "WiFi"],
    services: ["Full-Service Catering", "Audio-Visual Support", "Complimentary Guest WiFi"],
    hourly_rate: 50,
    half_day_rate: 250,
    full_day_rate: 250,
    approval_required: false,
    catering_available: true,
    notes: '40" TV w/HDMI cord. Min occupancy 10.'
  },
  {
    name: "Sierra",
    display_name: "Sierra",
    type: "Conference Room",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 50,
    sqft: 806,
    features: ["Audio System", "Projector", "Flexible Seating", "WiFi"],
    services: ["Full-Service Catering", "Audio-Visual Support", "Complimentary Guest WiFi", "Bar & Cocktail Services", "Custom Menu Development"],
    hourly_rate: 85,
    half_day_rate: 500,
    full_day_rate: 500,
    approval_required: false,
    catering_available: true,
    notes: "No screen in room. Min occupancy 20. Configs: Reception 40, Theatre 50, Rounds 40, Classroom 25, Board 24."
  },
  {
    name: "Hacienda",
    display_name: "Hacienda",
    type: "Conference Room",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 999,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "WiFi"],
    services: ["Full-Service Catering", "Audio-Visual Support", "Complimentary Guest WiFi", "Bar & Cocktail Services", "Custom Menu Development"],
    hourly_rate: 170,
    half_day_rate: 1e3,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: true,
    notes: "Min occupancy 40. Configs: Reception 60, Theatre 80, Rounds 60, Classroom 35, Board 34."
  },
  {
    name: "Redwood",
    display_name: "Redwood",
    type: "Conference Room",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 60,
    sqft: 620,
    features: ["Audio System", "Projector", "Flexible Seating", "WiFi"],
    services: ["Full-Service Catering", "Audio-Visual Support", "Complimentary Guest WiFi", "Bar & Cocktail Services"],
    hourly_rate: 170,
    half_day_rate: 1e3,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: true,
    notes: "Entire room. Min occupancy 40. Can be split into Redwood A (West w/screen) and Redwood B (East)."
  },
  {
    name: "Sequoia",
    display_name: "Sequoia",
    type: "Event Space",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 100,
    sqft: 1535,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "Patio Access", "WiFi"],
    services: ["Full-Service Catering", "Audio-Visual Support", "Complimentary Guest WiFi", "Bar & Cocktail Services", "Custom Menu Development", "Setup & Clean-up Crews"],
    hourly_rate: 210,
    half_day_rate: 1250,
    full_day_rate: 1250,
    approval_required: true,
    catering_available: true,
    notes: "Includes Patio. Min occupancy 50. Configs: Reception 80, Theatre 100, Rounds 60, Classroom 50, Board 32."
  },
  {
    name: "Morrison Room",
    display_name: "Morrison Room (incl. Terrace)",
    type: "Event Space",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Level 1",
    floor_index: 1,
    capacity: 200,
    sqft: 2252,
    features: ["Audio System", "Projector", "Stage/Platform", "Flexible Seating", "Catering Setup", "Piano", "Terrace Access", "WiFi"],
    services: ["Full-Service Catering", "Audio-Visual Support", "Complimentary Guest WiFi", "Bar & Cocktail Services", "Piano Use ($250)", "Professional Event Coordination", "Custom Menu Development", "Setup & Clean-up Crews"],
    hourly_rate: 340,
    half_day_rate: 2e3,
    full_day_rate: 2e3,
    approval_required: true,
    catering_available: true,
    notes: "Includes Terrace. Piano Use $250, Piano Tuning $200. Min occupancy 80. Configs: Reception 200, Theatre 200, Rounds 180, Classroom 112, Board 50."
  },
  {
    name: "Main Dining Room",
    display_name: "Main Dining Room",
    type: "Dining Venue",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Level 1",
    floor_index: 1,
    capacity: 400,
    sqft: 4191,
    features: ["Audio System", "Catering Setup", "Flexible Seating", "Bar Service", "WiFi"],
    services: ["Full-Service Catering", "Audio-Visual Support", "Complimentary Guest WiFi", "Bar & Cocktail Services", "Professional Event Coordination", "Custom Menu Development", "Setup & Clean-up Crews"],
    hourly_rate: 750,
    half_day_rate: 4400,
    full_day_rate: 4400,
    approval_required: true,
    catering_available: true,
    notes: "$8,000 weekday buy-out displaces Member Lunch. Min occupancy 175. Configs: Reception 350, Theatre 400, Rounds 200."
  },
  {
    name: "Sherie Bar & Lounge",
    display_name: "Sherie Bar & Lounge",
    type: "Dining Venue",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 100,
    sqft: 1886,
    features: ["Audio System", "Bar Service", "Piano", "Flexible Seating", "WiFi"],
    services: ["Full-Service Catering", "Bar & Cocktail Services", "Piano Use ($250)", "Audio-Visual Support", "Complimentary Guest WiFi"],
    hourly_rate: 210,
    half_day_rate: 1250,
    full_day_rate: 1250,
    approval_required: false,
    catering_available: true,
    notes: "Piano Use $250, Piano Tuning $200. Min occupancy 50. Configs: Reception 50, Theatre 100, Rounds 60, Board 24."
  },
  {
    name: "West Patio",
    display_name: "West Patio",
    type: "Outdoor Space",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 40,
    sqft: 1044,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Full-Service Catering", "Setup & Clean-up Crews"],
    hourly_rate: 105,
    half_day_rate: 625,
    full_day_rate: 625,
    approval_required: false,
    catering_available: true,
    notes: "Min occupancy 25. Configs: Reception 40, Rounds 40, Board 24."
  },
  {
    name: "Garden Patio",
    display_name: "Garden Patio",
    type: "Outdoor Space",
    building_id: "bld-04",
    building_name: "University Club",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 2160,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Portable PA"],
    services: ["Full-Service Catering", "Audio-Visual Support", "Setup & Clean-up Crews"],
    hourly_rate: 420,
    half_day_rate: 2500,
    full_day_rate: 2500,
    approval_required: true,
    catering_available: true,
    notes: "$2,500 after 4 p.m. or weekends. $5,500 weekday buy-out. Configs: Reception 200, Theatre 100, Rounds 100."
  },
  // ═══════════════════════════════════════════════════════════════════
  // WEYBURN TERRACE (part of bld-03, mapped to De Neve area)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Village View Room",
    display_name: "Village View Room",
    type: "Event Space",
    building_id: "bld-03",
    building_name: "De Neve Plaza",
    floor: "Level 1",
    floor_index: 1,
    capacity: 100,
    sqft: 1800,
    features: ["Audio System", "Projector", "Flexible Seating", "Kitchenette", "Terrace Access", "WiFi"],
    services: ["Audio-Visual Support", "Sound System", "Room Setup & Striking", "Catering Permitted", "Custodial Services", "UCLA Guest WiFi"],
    hourly_rate: 200,
    half_day_rate: 1400,
    full_day_rate: 1800,
    approval_required: false,
    catering_available: true,
    notes: "Outdoor terrace with city views. Kitchenette for food prep."
  },
  // ═══════════════════════════════════════════════════════════════════
  // LUSKIN CONFERENCE CENTER (bld-05) — from Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Centennial Ballroom",
    display_name: "Centennial Ballroom",
    type: "Ballroom",
    building_id: "bld-05",
    building_name: "Luskin Conference Center",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 500,
    sqft: 1e4,
    features: ["Audio System", "Projector", "Stage/Platform", "Flexible Seating", "Catering Setup", "Dance Floor", "Smart Room Technology", "Lighting Control"],
    services: ["On-Site Event Catering", "Dedicated Conference Services Planners", "Smart Room Technology", "Built-in Projection & Motorized Screens", "Sound Amplification & Microphones", "Video Conferencing", "Simultaneous Translation", "On-Site Technical Staff", "Nutrition Hubs"],
    hourly_rate: 750,
    half_day_rate: 5e3,
    full_day_rate: 8e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Centennial Terrace",
    display_name: "Centennial Terrace",
    type: "Outdoor Space",
    building_id: "bld-05",
    building_name: "Luskin Conference Center",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 250,
    sqft: 5e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Portable PA"],
    services: ["On-Site Event Catering", "Dedicated Conference Services Planners", "Portable AV Equipment"],
    hourly_rate: 400,
    half_day_rate: 2500,
    full_day_rate: 4e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Laureate Room",
    display_name: "Laureate Room",
    type: "Conference Room",
    building_id: "bld-05",
    building_name: "Luskin Conference Center",
    floor: "Level 1",
    floor_index: 1,
    capacity: 80,
    sqft: 1800,
    features: ["Audio System", "Projector", "Video Conference", "Smart Room Technology", "WiFi"],
    services: ["On-Site Event Catering", "Smart Room Technology", "Built-in Projection", "Video Conferencing", "On-Site Technical Staff", "Nutrition Hubs"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Luskin Meeting Room 1",
    display_name: "Meeting Room 1",
    type: "Meeting Room",
    building_id: "bld-05",
    building_name: "Luskin Conference Center",
    floor: "Level 1",
    floor_index: 1,
    capacity: 30,
    sqft: 600,
    features: ["Display Screen", "Video Conference", "Smart Room Technology", "WiFi"],
    services: ["On-Site Event Catering", "Smart Room Technology", "Video Conferencing", "Complimentary WiFi"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Luskin Meeting Room 2",
    display_name: "Meeting Room 2",
    type: "Meeting Room",
    building_id: "bld-05",
    building_name: "Luskin Conference Center",
    floor: "Level 1",
    floor_index: 1,
    capacity: 25,
    sqft: 500,
    features: ["Display Screen", "Video Conference", "Smart Room Technology", "WiFi"],
    services: ["On-Site Event Catering", "Smart Room Technology", "Video Conferencing", "Complimentary WiFi"],
    hourly_rate: 90,
    half_day_rate: 550,
    full_day_rate: 900,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Luskin Meeting Room 3",
    display_name: "Meeting Room 3",
    type: "Meeting Room",
    building_id: "bld-05",
    building_name: "Luskin Conference Center",
    floor: "Level 2",
    floor_index: 2,
    capacity: 20,
    sqft: 450,
    features: ["Display Screen", "Video Conference", "Smart Room Technology", "WiFi"],
    services: ["On-Site Event Catering", "Smart Room Technology", "Video Conferencing", "Complimentary WiFi"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // ASUCLA EVENT SPACES (bld-06) — from Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Ackerman Grand Ballroom",
    display_name: "Ackerman Grand Ballroom",
    type: "Ballroom",
    building_id: "bld-06",
    building_name: "ASUCLA Event Spaces",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 1200,
    sqft: 12e3,
    features: ["Audio System", "Projector", "Stage/Platform", "Flexible Seating", "Catering Setup", "Dance Floor", "Lighting Control"],
    services: ["Full-Service Catering (ASUCLA)", "Audio-Visual Support", "Custom Room Setup & Furniture", "Event Planning & Coordination", "Digital Signage Promotion", "Loading Dock Access", "Cleaning & Custodial Support", "Security Coordination"],
    hourly_rate: 800,
    half_day_rate: 5e3,
    full_day_rate: 8e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Bruin Reception Room",
    display_name: "Bruin Reception Room",
    type: "Event Space",
    building_id: "bld-06",
    building_name: "ASUCLA Event Spaces",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 1200,
    features: ["Audio System", "Flexible Seating", "Catering Setup", "WiFi"],
    services: ["Full-Service Catering (ASUCLA)", "Audio-Visual Support", "Custom Room Setup", "Event Planning & Coordination"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Kerckhoff Grand Salon",
    display_name: "Charles E. Young Grand Salon",
    type: "Event Space",
    building_id: "bld-06",
    building_name: "ASUCLA Event Spaces",
    floor: "Level 1",
    floor_index: 1,
    capacity: 200,
    sqft: 3500,
    features: ["Audio System", "Projector", "Vaulted Ceiling", "Flexible Seating", "Catering Setup", "WiFi"],
    services: ["Full-Service Catering (ASUCLA)", "Audio-Visual Support", "Custom Room Setup & Furniture", "Event Planning & Coordination", "Digital Signage Promotion"],
    hourly_rate: 400,
    half_day_rate: 2500,
    full_day_rate: 4e3,
    approval_required: true,
    catering_available: true,
    notes: "Historic vaulted-ceiling venue in Kerckhoff Hall."
  },
  {
    name: "Viewpoint Conference Room",
    display_name: "Viewpoint Conference Room",
    type: "Conference Room",
    building_id: "bld-06",
    building_name: "ASUCLA Event Spaces",
    floor: "Level 1",
    floor_index: 1,
    capacity: 40,
    sqft: 700,
    features: ["Display Screen", "Video Conference", "Panoramic Views", "WiFi"],
    services: ["Audio-Visual Support", "Complimentary WiFi", "Catering Available"],
    hourly_rate: 120,
    half_day_rate: 700,
    full_day_rate: 1200,
    approval_required: false,
    catering_available: true,
    notes: "Top-floor views of campus."
  },
  {
    name: "Kerckhoff State Room A",
    display_name: "Kerckhoff State Room A",
    type: "Meeting Room",
    building_id: "bld-06",
    building_name: "ASUCLA Event Spaces",
    floor: "Level 1",
    floor_index: 1,
    capacity: 25,
    sqft: 400,
    features: ["Display Screen", "Video Conference", "WiFi"],
    services: ["Audio-Visual Support", "Complimentary WiFi", "Catering Available"],
    hourly_rate: 75,
    half_day_rate: 450,
    full_day_rate: 750,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Bruin Plaza",
    display_name: "Bruin Plaza",
    type: "Outdoor Space",
    building_id: "bld-06",
    building_name: "ASUCLA Event Spaces",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 500,
    sqft: 8e3,
    features: ["Portable PA", "Flexible Seating", "Natural Light", "Catering Setup"],
    services: ["Full-Service Catering (ASUCLA)", "Audio-Visual Support", "Event Planning & Coordination", "Security Coordination"],
    hourly_rate: 500,
    half_day_rate: 3e3,
    full_day_rate: 5e3,
    approval_required: true,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // ANDERSON SCHOOL OF MANAGEMENT (bld-07) — from Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Korn Convocation Hall",
    display_name: "Carolbeth and Lester Korn Convocation Hall",
    type: "Auditorium",
    building_id: "bld-07",
    building_name: "Anderson School of Management",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 300,
    sqft: 5e3,
    features: ["Audio System", "Projector", "Stage/Platform", "Tiered Seating", "Lighting Control", "Video Conference"],
    services: ["Venue Rentals", "Audio-Visual Equipment & Support", "High-Speed WiFi", "Catering Coordination", "Event Planning & Management", "Visitor Parking & Transportation", "Safety & Security Liaison", "Virtual & Hybrid Presentation Support", "Ticketing Services", "Disability & Accessibility Accommodations"],
    hourly_rate: 500,
    half_day_rate: 3e3,
    full_day_rate: 5e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Korn Foyer",
    display_name: "Carolbeth and Lester Korn Foyer",
    type: "Event Space",
    building_id: "bld-07",
    building_name: "Anderson School of Management",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 2500,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "WiFi"],
    services: ["Venue Rentals", "Catering Coordination", "Event Planning & Management", "High-Speed WiFi"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Executive Dining Room",
    display_name: "Executive Dining Room",
    type: "Dining Venue",
    building_id: "bld-07",
    building_name: "Anderson School of Management",
    floor: "Level 1",
    floor_index: 1,
    capacity: 40,
    sqft: 800,
    features: ["Audio System", "Catering Setup", "Executive Seating", "WiFi"],
    services: ["Venue Rentals", "Catering Coordination", "High-Speed WiFi", "Disability & Accessibility Accommodations"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Briskin Family Plaza",
    display_name: "Judy & Bernard Briskin Family Plaza",
    type: "Outdoor Space",
    building_id: "bld-07",
    building_name: "Anderson School of Management",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 4e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Portable PA"],
    services: ["Venue Rentals", "Catering Coordination", "Event Planning & Management", "Safety & Security Liaison"],
    hourly_rate: 350,
    half_day_rate: 2e3,
    full_day_rate: 3500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Anderson Large Classroom",
    display_name: "Anderson Large Classroom",
    type: "Classroom",
    building_id: "bld-07",
    building_name: "Anderson School of Management",
    floor: "Level 1",
    floor_index: 1,
    capacity: 80,
    sqft: 1500,
    features: ["Projector", "Audio System", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Venue Rentals", "Audio-Visual Equipment & Support", "High-Speed WiFi", "Virtual & Hybrid Presentation Support"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: false
  },
  // ═══════════════════════════════════════════════════════════════════
  // FOWLER MUSEUM (bld-08) — from Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Lenart Auditorium",
    display_name: "Harry and Yvonne Lenart Auditorium",
    type: "Auditorium",
    building_id: "bld-08",
    building_name: "Fowler Museum",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 324,
    sqft: 4500,
    features: ["Audio System", "Projector", "Stage/Platform", "Tiered Seating", "Lighting Control"],
    services: ["Venue Rentals", "Audio-Visual Equipment", "Campus Guest WiFi", "Catering Coordination", "Event Planning & Management", "Technical Support", "Security & Safety Reviews", "Custodial & Clean-up", "Photography & Rights Reproductions"],
    hourly_rate: 400,
    half_day_rate: 2500,
    full_day_rate: 4e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Goldenberg Terrace",
    display_name: "Barbara and Joseph Goldenberg Terrace",
    type: "Outdoor Space",
    building_id: "bld-08",
    building_name: "Fowler Museum",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 250,
    sqft: 3500,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Portable PA"],
    services: ["Venue Rentals", "Catering Coordination", "Event Planning & Management", "Photography Permitting"],
    hourly_rate: 350,
    half_day_rate: 2e3,
    full_day_rate: 3500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Davis Courtyard",
    display_name: "Elizabeth and W. Thomas Davis Courtyard",
    type: "Outdoor Space",
    building_id: "bld-08",
    building_name: "Fowler Museum",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 2500,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Venue Rentals", "Catering Coordination", "Event Planning & Management"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Deutsch Seminar Room",
    display_name: "Eleanor Deutsch Seminar Room",
    type: "Meeting Room",
    building_id: "bld-08",
    building_name: "Fowler Museum",
    floor: "Level 1",
    floor_index: 1,
    capacity: 30,
    sqft: 500,
    features: ["Projector", "Audio System", "Video Conference", "WiFi"],
    services: ["Venue Rentals", "Audio-Visual Equipment", "Campus Guest WiFi"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: false
  },
  {
    name: "UCLA Art Council Amphitheater",
    display_name: "UCLA Art Council Amphitheater",
    type: "Outdoor Space",
    building_id: "bld-08",
    building_name: "Fowler Museum",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 3e3,
    features: ["Stage/Platform", "Tiered Seating", "Natural Light", "Portable PA"],
    services: ["Venue Rentals", "Catering Coordination", "Event Planning & Management", "Photography Permitting"],
    hourly_rate: 300,
    half_day_rate: 1800,
    full_day_rate: 3e3,
    approval_required: true,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // ROYCE HALL (bld-09) — from Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Royce Hall Auditorium",
    display_name: "Royce Hall Main Auditorium",
    type: "Auditorium",
    building_id: "bld-09",
    building_name: "Royce Hall",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 1834,
    sqft: 2e4,
    features: ["Audio System", "Stage/Platform", "Stage Lighting", "Tiered Seating", "Green Room", "Dressing Rooms", "Lighting Control"],
    services: ["Professional Stage Crew & Management", "House Staff & Ushers", "UCLA Central Ticket Office", "Full Lighting & Sound Production", "Event Planning & Logistics", "Catering Coordination", "Filming & Photography Permitting", "Security & Fire Marshal Liaison"],
    hourly_rate: 1500,
    half_day_rate: 8e3,
    full_day_rate: 15e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Humanities Conference Room",
    display_name: "Humanities Conference Room",
    type: "Conference Room",
    building_id: "bld-09",
    building_name: "Royce Hall",
    floor: "Level 1",
    floor_index: 1,
    capacity: 120,
    sqft: 2e3,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Audio-Visual Support", "Catering Coordination", "Kitchenette Access", "Guest WiFi"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Herbert Morris Seminar Room",
    display_name: "Herbert Morris Seminar Room",
    type: "Meeting Room",
    building_id: "bld-09",
    building_name: "Royce Hall",
    floor: "Level 1",
    floor_index: 1,
    capacity: 80,
    sqft: 1200,
    features: ["Audio System", "Projector", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Audio-Visual Support", "Catering Coordination", "Kitchenette Access", "Guest WiFi"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Royce West Terrace",
    display_name: "Royce West Terrace",
    type: "Outdoor Space",
    building_id: "bld-09",
    building_name: "Royce Hall",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 3e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Portable PA"],
    services: ["Catering Coordination", "Event Planning & Logistics", "Security Coordination"],
    hourly_rate: 350,
    half_day_rate: 2e3,
    full_day_rate: 3500,
    approval_required: true,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // JAMES WEST ALUMNI CENTER (bld-10) — from Event Spaces
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Collins Alumni Conference Room",
    display_name: "Collins Alumni Conference Room",
    type: "Conference Room",
    building_id: "bld-10",
    building_name: "James West Alumni Center",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 2753,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "Patio Access", "WiFi"],
    services: ["Venue Rentals", "Catering Management", "Event Staffing", "Room Setup & Strike", "Integrated Sound Systems", "ADA Accessible", "Guest WiFi"],
    hourly_rate: 300,
    half_day_rate: 1800,
    full_day_rate: 3e3,
    approval_required: false,
    catering_available: true,
    notes: "Two-tiered interior. Supports up to six sound inputs."
  },
  {
    name: "Tom Davis Founders Room",
    display_name: "Tom Davis Founders' Room",
    type: "Event Space",
    building_id: "bld-10",
    building_name: "James West Alumni Center",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 1678,
    features: ["Audio System", "Flexible Seating", "Catering Setup", "Patio Access", "WiFi"],
    services: ["Venue Rentals", "Catering Management", "Event Staffing", "Room Setup & Strike", "Guest WiFi"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Robert Kerr Galleria",
    display_name: "Robert Kerr Galleria",
    type: "Gallery",
    building_id: "bld-10",
    building_name: "James West Alumni Center",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 250,
    sqft: 4434,
    features: ["Exhibition Walls", "Flexible Seating", "Catering Setup", "Natural Light", "WiFi"],
    services: ["Venue Rentals", "Catering Management", "Event Staffing", "Room Setup & Strike", "Guest WiFi", "ADA Accessible"],
    hourly_rate: 400,
    half_day_rate: 2500,
    full_day_rate: 4e3,
    approval_required: true,
    catering_available: true,
    notes: 'Known as the "Alumni Living Room". Available after business hours or weekends only.'
  },
  {
    name: "Alumni Center Northwest Patio",
    display_name: "Northwest Patio",
    type: "Outdoor Space",
    building_id: "bld-10",
    building_name: "James West Alumni Center",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 5e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Fountain"],
    services: ["Venue Rentals", "Catering Management", "Event Staffing"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: false,
    catering_available: true,
    notes: "1st floor patio with lush trees and fountains. Part of 11,335 sq ft total outdoor space."
  },
  {
    name: "Alumni Center Northeast Patio",
    display_name: "Northeast Patio",
    type: "Outdoor Space",
    building_id: "bld-10",
    building_name: "James West Alumni Center",
    floor: "Level 1",
    floor_index: 1,
    capacity: 100,
    sqft: 3e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Venue Rentals", "Catering Management", "Event Staffing"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true,
    notes: "2nd floor patio."
  },
  // ═══════════════════════════════════════════════════════════════════
  // HAMMER MUSEUM (bld-11)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Billy Wilder Theater",
    display_name: "Billy Wilder Theater",
    type: "Theater",
    building_id: "bld-11",
    building_name: "Hammer Museum",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 300,
    sqft: 4500,
    features: ["Audio System", "Stage/Platform", "Stage Lighting", "Tiered Seating", "Lighting Control"],
    services: ["AV Support", "Event Planning & Staffing", "Catering Coordination", "Virtual & Hybrid Support", "Group Tours"],
    hourly_rate: 600,
    half_day_rate: 3500,
    full_day_rate: 6e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Pritzker Family Commons",
    display_name: "Pritzker Family Commons & South Courtyard",
    type: "Event Space",
    building_id: "bld-11",
    building_name: "Hammer Museum",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 400,
    sqft: 6e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "WiFi"],
    services: ["AV Support", "Catering Coordination", "Event Planning & Staffing", "Building Engineering & Custodial"],
    hourly_rate: 500,
    half_day_rate: 3e3,
    full_day_rate: 5e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Annenberg Terrace",
    display_name: "Annenberg Terrace",
    type: "Outdoor Space",
    building_id: "bld-11",
    building_name: "Hammer Museum",
    floor: "Level 1",
    floor_index: 1,
    capacity: 200,
    sqft: 3e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Portable PA"],
    services: ["Catering Coordination", "Event Planning & Staffing", "Building Engineering & Custodial"],
    hourly_rate: 350,
    half_day_rate: 2e3,
    full_day_rate: 3500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "McMorrow Terrace",
    display_name: "McMorrow Terrace",
    type: "Outdoor Space",
    building_id: "bld-11",
    building_name: "Hammer Museum",
    floor: "Level 1",
    floor_index: 1,
    capacity: 150,
    sqft: 2500,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Catering Coordination", "Event Planning & Staffing"],
    hourly_rate: 300,
    half_day_rate: 1800,
    full_day_rate: 3e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Hammer Executive Board Room",
    display_name: "Executive Board Room",
    type: "Boardroom",
    building_id: "bld-11",
    building_name: "Hammer Museum",
    floor: "Level 1",
    floor_index: 1,
    capacity: 20,
    sqft: 400,
    features: ["Large Display", "Video Conference", "Audio System", "WiFi"],
    services: ["AV Support", "Complimentary WiFi"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: false
  },
  {
    name: "The Lab",
    display_name: "The Lab",
    type: "Event Space",
    building_id: "bld-11",
    building_name: "Hammer Museum",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 60,
    sqft: 1e3,
    features: ["Flexible Seating", "Audio System", "Projector", "WiFi"],
    services: ["AV Support", "Catering Coordination", "Event Planning & Staffing"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: true,
    notes: "Flexible workshop and event space."
  },
  {
    name: "Nimoy Studio",
    display_name: "Bay Nimoy Studio",
    type: "Event Space",
    building_id: "bld-11",
    building_name: "Hammer Museum",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 1200,
    features: ["Flexible Seating", "Audio System", "Stage/Platform", "Lighting Control", "WiFi"],
    services: ["AV Support", "Catering Coordination", "Event Planning & Staffing"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // SCHOENBERG MUSIC BUILDING (bld-12)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Schoenberg Hall",
    display_name: "Schoenberg Hall",
    type: "Auditorium",
    building_id: "bld-12",
    building_name: "Schoenberg Music Building",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 522,
    sqft: 7e3,
    features: ["Audio System", "Stage/Platform", "Stage Lighting", "Tiered Seating", "Green Room", "Lighting Control"],
    services: ["Venue Rentals", "AV Support", "Live-Streaming & Recording", "Catering Coordination", "Event Staffing"],
    hourly_rate: 800,
    half_day_rate: 4500,
    full_day_rate: 7500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Lani Hall",
    display_name: "Lani Hall Theater",
    type: "Theater",
    building_id: "bld-12",
    building_name: "Schoenberg Music Building",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 133,
    sqft: 2e3,
    features: ["Audio System", "Stage/Platform", "Stage Lighting", "Tiered Seating", "Lighting Control"],
    services: ["Venue Rentals", "AV Support", "Live-Streaming & Recording", "Event Staffing"],
    hourly_rate: 300,
    half_day_rate: 1800,
    full_day_rate: 3e3,
    approval_required: true,
    catering_available: false,
    notes: "Recital hall for small groups and lectures."
  },
  {
    name: "Jan Popper Theater",
    display_name: "Jan Popper Theater",
    type: "Theater",
    building_id: "bld-12",
    building_name: "Schoenberg Music Building",
    floor: "Level 1",
    floor_index: 1,
    capacity: 140,
    sqft: 2200,
    features: ["Audio System", "Stage/Platform", "Stage Lighting", "Tiered Seating", "Lighting Control"],
    services: ["Venue Rentals", "AV Support", "Event Staffing"],
    hourly_rate: 300,
    half_day_rate: 1800,
    full_day_rate: 3e3,
    approval_required: true,
    catering_available: false,
    notes: "Intimate performance venue."
  },
  // ═══════════════════════════════════════════════════════════════════
  // THEATER, FILM & TELEVISION (bld-13)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Freud Playhouse",
    display_name: "Freud Playhouse",
    type: "Theater",
    building_id: "bld-13",
    building_name: "Theater, Film & Television",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 562,
    sqft: 8e3,
    features: ["Audio System", "Stage/Platform", "Stage Lighting", "Tiered Seating", "Green Room", "Dressing Rooms"],
    services: ["Venue Rentals", "Production & Technical Support", "Film Permitting", "Ticketing Services", "Catering Coordination"],
    hourly_rate: 1e3,
    half_day_rate: 6e3,
    full_day_rate: 1e4,
    approval_required: true,
    catering_available: true
  },
  {
    name: "James Bridges Theater",
    display_name: "James Bridges Theater (Melnitz 1409)",
    type: "Theater",
    building_id: "bld-13",
    building_name: "Theater, Film & Television",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 278,
    sqft: 4e3,
    features: ["Audio System", "Stage/Platform", "Stage Lighting", "Tiered Seating", "Projector"],
    services: ["Venue Rentals", "Production & Technical Support", "Film Permitting", "Ticketing Services", "Catering Coordination"],
    hourly_rate: 500,
    half_day_rate: 3e3,
    full_day_rate: 5e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Little Theater",
    display_name: "Little Theater",
    type: "Theater",
    building_id: "bld-13",
    building_name: "Theater, Film & Television",
    floor: "Level 1",
    floor_index: 1,
    capacity: 172,
    sqft: 2500,
    features: ["Audio System", "Stage/Platform", "Stage Lighting", "Tiered Seating"],
    services: ["Venue Rentals", "Production & Technical Support", "AV Orientation"],
    hourly_rate: 350,
    half_day_rate: 2e3,
    full_day_rate: 3500,
    approval_required: true,
    catering_available: false
  },
  {
    name: "Studio Theater 1340",
    display_name: "Studio Theater 1340",
    type: "Theater",
    building_id: "bld-13",
    building_name: "Theater, Film & Television",
    floor: "Level 1",
    floor_index: 1,
    capacity: 81,
    sqft: 1200,
    features: ["Flexible Seating", "Stage/Platform", "Lighting Control", "Audio System"],
    services: ["Venue Rentals", "Production & Technical Support"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: false,
    notes: "Flexible black box theater."
  },
  {
    name: "Darren Star Screening Room",
    display_name: "Darren Star Screening Room",
    type: "Theater",
    building_id: "bld-13",
    building_name: "Theater, Film & Television",
    floor: "Level 1",
    floor_index: 1,
    capacity: 60,
    sqft: 900,
    features: ["Projector", "Audio System", "Tiered Seating", "Lighting Control"],
    services: ["Venue Rentals", "AV Support", "Film Permitting"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: false,
    notes: "Screening and workshop space."
  },
  // ═══════════════════════════════════════════════════════════════════
  // CNSI (bld-14)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "CNSI Auditorium",
    display_name: "CNSI Auditorium",
    type: "Auditorium",
    building_id: "bld-14",
    building_name: "CNSI",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 260,
    sqft: 4e3,
    features: ["Audio System", "Projector", "Stage/Platform", "Tiered Seating", "Video Conference"],
    services: ["AV Tech & Support", "Complimentary WiFi", "Event Furniture"],
    hourly_rate: 400,
    half_day_rate: 2500,
    full_day_rate: 4e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "CNSI Lobby Space",
    display_name: "CNSI Lobby",
    type: "Event Space",
    building_id: "bld-14",
    building_name: "CNSI",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 2500,
    features: ["Flexible Seating", "Natural Light", "WiFi", "Catering Setup"],
    services: ["AV Tech & Support", "Complimentary WiFi", "Event Furniture"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "CNSI Multipurpose Room",
    display_name: "CNSI Multipurpose Meeting Space",
    type: "Conference Room",
    building_id: "bld-14",
    building_name: "CNSI",
    floor: "Level 1",
    floor_index: 1,
    capacity: 60,
    sqft: 1e3,
    features: ["Projector", "Video Conference", "Audio System", "Natural Light", "WiFi"],
    services: ["AV Tech & Support", "Complimentary WiFi"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: false,
    notes: "Overlooks Court of Sciences through floor-to-ceiling windows."
  },
  {
    name: "CNSI Conference Room A",
    display_name: "CNSI Conference Room A",
    type: "Conference Room",
    building_id: "bld-14",
    building_name: "CNSI",
    floor: "Level 1",
    floor_index: 1,
    capacity: 20,
    sqft: 400,
    features: ["Display Screen", "Video Conference", "Whiteboard", "WiFi"],
    services: ["AV Tech & Support", "Complimentary WiFi"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: false
  },
  {
    name: "CNSI Terrace",
    display_name: "CNSI Upper Terrace",
    type: "Outdoor Space",
    building_id: "bld-14",
    building_name: "CNSI",
    floor: "Level 1",
    floor_index: 1,
    capacity: 100,
    sqft: 2e3,
    features: ["Flexible Seating", "Natural Light", "Portable PA"],
    services: ["AV Tech & Support", "Catering Coordination"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // BOTANICAL GARDENS (bld-15)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "La Kretz Garden Pavilion",
    display_name: "La Kretz Garden Pavilion",
    type: "Event Space",
    building_id: "bld-15",
    building_name: "Botanical Gardens",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 100,
    sqft: 1500,
    features: ["Audio System", "Projector", "Flexible Seating", "Natural Light", "WiFi"],
    services: ["Venue Rentals", "AV Setup", "Catering Coordination", "Photography Permitting", "Educational Workshops"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Herbert Plaza",
    display_name: "Herbert Plaza",
    type: "Outdoor Space",
    building_id: "bld-15",
    building_name: "Botanical Gardens",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 120,
    sqft: 2e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Venue Rentals", "Catering Coordination", "Photography Permitting"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true,
    notes: "Add-on space to La Kretz Pavilion."
  },
  {
    name: "Parks Patio",
    display_name: "Park's Patio",
    type: "Outdoor Space",
    building_id: "bld-15",
    building_name: "Botanical Gardens",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 1500,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Venue Rentals", "Catering Coordination"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Jewell Terrace",
    display_name: "Jewell Terrace",
    type: "Outdoor Space",
    building_id: "bld-15",
    building_name: "Botanical Gardens",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 60,
    sqft: 1200,
    features: ["Flexible Seating", "Natural Light"],
    services: ["Venue Rentals", "Catering Coordination"],
    hourly_rate: 120,
    half_day_rate: 700,
    full_day_rate: 1200,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Norris Terrace",
    display_name: "Norris Terrace",
    type: "Outdoor Space",
    building_id: "bld-15",
    building_name: "Botanical Gardens",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 60,
    sqft: 1200,
    features: ["Flexible Seating", "Natural Light"],
    services: ["Venue Rentals", "Catering Coordination"],
    hourly_rate: 120,
    half_day_rate: 700,
    full_day_rate: 1200,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Garden Amphitheater",
    display_name: "Outdoor Amphitheater",
    type: "Outdoor Space",
    building_id: "bld-15",
    building_name: "Botanical Gardens",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 2500,
    features: ["Stage/Platform", "Tiered Seating", "Natural Light", "Portable PA"],
    services: ["Venue Rentals", "AV Setup", "Catering Coordination", "Photography Permitting"],
    hourly_rate: 300,
    half_day_rate: 1800,
    full_day_rate: 3e3,
    approval_required: true,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // SAMUELI ENGINEERING (bld-16)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Boelter Hall 6750",
    display_name: "Boelter Hall 6750",
    type: "Classroom",
    building_id: "bld-16",
    building_name: "Samueli Engineering",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 1500,
    features: ["Projector", "Audio System", "Video Conference", "Whiteboard", "WiFi"],
    services: ["AV & Tech Support", "WiFi", "Catering Coordination"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Boelter Hall Penthouse",
    display_name: "Boelter Hall Penthouse",
    type: "Event Space",
    building_id: "bld-16",
    building_name: "Samueli Engineering",
    floor: "Level 1",
    floor_index: 1,
    capacity: 60,
    sqft: 1e3,
    features: ["Flexible Seating", "Audio System", "Natural Light", "WiFi"],
    services: ["AV & Tech Support", "WiFi", "Catering Coordination"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Engineering VI Room 100",
    display_name: "Engineering VI Room 100",
    type: "Auditorium",
    building_id: "bld-16",
    building_name: "Samueli Engineering",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 3e3,
    features: ["Audio System", "Projector", "Stage/Platform", "Tiered Seating", "Video Conference"],
    services: ["AV & Tech Support", "WiFi", "Catering Coordination", "Digital Signage Promotion"],
    hourly_rate: 350,
    half_day_rate: 2e3,
    full_day_rate: 3500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Engineering VI Room 300",
    display_name: "Engineering VI Room 300",
    type: "Classroom",
    building_id: "bld-16",
    building_name: "Samueli Engineering",
    floor: "Level 1",
    floor_index: 1,
    capacity: 100,
    sqft: 1800,
    features: ["Projector", "Audio System", "Video Conference", "Whiteboard", "WiFi"],
    services: ["AV & Tech Support", "WiFi"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Mong Learning Center",
    display_name: "Mong Learning Center (Eng VI 180)",
    type: "Classroom",
    building_id: "bld-16",
    building_name: "Samueli Engineering",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 1500,
    features: ["Projector", "Audio System", "Video Conference", "Whiteboard", "WiFi"],
    services: ["AV & Tech Support", "WiFi", "Instructional Technology"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Cohen Multipurpose Room",
    display_name: "Cohen Multipurpose Room (Eng VI 134)",
    type: "Event Space",
    building_id: "bld-16",
    building_name: "Samueli Engineering",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 100,
    sqft: 1800,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "WiFi"],
    services: ["AV & Tech Support", "WiFi", "Catering Coordination", "Room Setup Support"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Engineering IV Patio",
    display_name: "Engineering IV Patio",
    type: "Outdoor Space",
    building_id: "bld-16",
    building_name: "Samueli Engineering",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 2500,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Portable PA"],
    services: ["Catering Coordination", "Room Setup Support"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // LAW SCHOOL (bld-17)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Law School Lecture Hall",
    display_name: "Law School Lecture Hall",
    type: "Auditorium",
    building_id: "bld-17",
    building_name: "Law School",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 3e3,
    features: ["Audio System", "Projector", "Tiered Seating", "Video Conference", "WiFi"],
    services: ["Venue Rentals", "AV Equipment", "Guest WiFi", "Catering Coordination", "Security & Safety Reviews", "Custodial Services", "Ticketing Services"],
    hourly_rate: 350,
    half_day_rate: 2e3,
    full_day_rate: 3500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Law School Classroom A",
    display_name: "Law School Classroom A",
    type: "Classroom",
    building_id: "bld-17",
    building_name: "Law School",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 1500,
    features: ["Projector", "Audio System", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Venue Rentals", "AV Equipment", "Guest WiFi"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Law School Meeting Room",
    display_name: "Law School Meeting Room",
    type: "Meeting Room",
    building_id: "bld-17",
    building_name: "Law School",
    floor: "Level 1",
    floor_index: 1,
    capacity: 30,
    sqft: 500,
    features: ["Display Screen", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Venue Rentals", "AV Equipment", "Guest WiFi"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Shapiro Courtyard",
    display_name: "Shapiro Courtyard",
    type: "Outdoor Space",
    building_id: "bld-17",
    building_name: "Law School",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 4e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light", "Portable PA"],
    services: ["Venue Rentals", "Catering Coordination", "Event Planning Support", "Security Coordination"],
    hourly_rate: 300,
    half_day_rate: 1800,
    full_day_rate: 3e3,
    approval_required: true,
    catering_available: true,
    notes: "Tables, easels, and ice buckets must be reserved through EMS."
  },
  // ═══════════════════════════════════════════════════════════════════
  // MOORE HALL (bld-18)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Moore Hall Reading Room",
    display_name: "Moore Hall Reading Room",
    type: "Event Space",
    building_id: "bld-18",
    building_name: "Moore Hall",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 80,
    sqft: 1500,
    features: ["Audio System", "Projector", "Flexible Seating", "WiFi"],
    services: ["Venue Rentals", "AV Equipment", "Instructional Technology Support", "Guest WiFi", "Catering Coordination"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Moore Hall Classroom 100",
    display_name: "Moore Hall Classroom 100",
    type: "Classroom",
    building_id: "bld-18",
    building_name: "Moore Hall",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 60,
    sqft: 1200,
    features: ["Projector", "Audio System", "Whiteboard", "WiFi"],
    services: ["Venue Rentals", "AV Equipment", "Instructional Technology Support", "Guest WiFi"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Moore Hall Courtyard",
    display_name: "Moore Hall Courtyard",
    type: "Outdoor Space",
    building_id: "bld-18",
    building_name: "Moore Hall",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 100,
    sqft: 2e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Venue Rentals", "Catering Coordination"],
    hourly_rate: 150,
    half_day_rate: 900,
    full_day_rate: 1500,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Moore Hall Auditorium",
    display_name: "Moore Hall Auditorium",
    type: "Auditorium",
    building_id: "bld-18",
    building_name: "Moore Hall",
    floor: "Level 1",
    floor_index: 1,
    capacity: 150,
    sqft: 2500,
    features: ["Audio System", "Projector", "Stage/Platform", "Tiered Seating"],
    services: ["Venue Rentals", "AV Equipment", "Guest WiFi", "Catering Coordination"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: true,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // LUSKIN SCHOOL OF PUBLIC AFFAIRS (bld-19)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Luskin PA Classroom",
    display_name: "Luskin Public Affairs Classroom",
    type: "Classroom",
    building_id: "bld-19",
    building_name: "Luskin School of Public Affairs",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 60,
    sqft: 1200,
    features: ["Projector", "Audio System", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Venue Rentals", "AV Equipment", "Guest WiFi", "Custodial & Setup Services"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: false
  },
  {
    name: "3rd Floor Commons",
    display_name: "Luskin 3rd Floor Commons",
    type: "Event Space",
    building_id: "bld-19",
    building_name: "Luskin School of Public Affairs",
    floor: "Level 1",
    floor_index: 1,
    capacity: 100,
    sqft: 1800,
    features: ["Flexible Seating", "Audio System", "Projector", "Catering Setup", "WiFi"],
    services: ["Venue Rentals", "AV Equipment", "Guest WiFi", "Catering Coordination", "Event Planning & Logistics"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Luskin PA Patio",
    display_name: "Luskin Patio",
    type: "Outdoor Space",
    building_id: "bld-19",
    building_name: "Luskin School of Public Affairs",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 60,
    sqft: 1e3,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Venue Rentals", "Catering Coordination"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Luskin PA Terrace",
    display_name: "Luskin Terrace",
    type: "Outdoor Space",
    building_id: "bld-19",
    building_name: "Luskin School of Public Affairs",
    floor: "Level 1",
    floor_index: 1,
    capacity: 80,
    sqft: 1500,
    features: ["Flexible Seating", "Catering Setup", "Natural Light"],
    services: ["Venue Rentals", "Catering Coordination"],
    hourly_rate: 120,
    half_day_rate: 700,
    full_day_rate: 1200,
    approval_required: false,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // POWELL LIBRARY / YRL (bld-20)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Powell Library Classroom A",
    display_name: "307A Powell Library (Classroom A)",
    type: "Classroom",
    building_id: "bld-20",
    building_name: "Powell Library",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 40,
    sqft: 800,
    features: ["Projector", "Whiteboard", "WiFi"],
    services: ["Guest WiFi", "ADA Accessible Workstations"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: false,
    notes: "External events must have a campus sponsor."
  },
  {
    name: "Powell Library Classroom B",
    display_name: "320B Powell Library (Classroom B)",
    type: "Classroom",
    building_id: "bld-20",
    building_name: "Powell Library",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 40,
    sqft: 800,
    features: ["Projector", "Whiteboard", "WiFi"],
    services: ["Guest WiFi", "ADA Accessible Workstations"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Powell Library Classroom C",
    display_name: "307C Powell Library (Classroom C)",
    type: "Classroom",
    building_id: "bld-20",
    building_name: "Powell Library",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 40,
    sqft: 800,
    features: ["Projector", "Whiteboard", "WiFi"],
    services: ["Guest WiFi", "ADA Accessible Workstations"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Powell InqLab 3",
    display_name: "330 Powell Library (InqLab 3)",
    type: "Classroom",
    building_id: "bld-20",
    building_name: "Powell Library",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 30,
    sqft: 600,
    features: ["Projector", "Whiteboard", "WiFi", "Display Screen"],
    services: ["Guest WiFi", "ADA Accessible Workstations", "Technology Sandbox"],
    hourly_rate: 60,
    half_day_rate: 400,
    full_day_rate: 650,
    approval_required: false,
    catering_available: false
  },
  {
    name: "YRL RC Classroom",
    display_name: "11360F YRL (Research Commons Classroom)",
    type: "Classroom",
    building_id: "bld-20",
    building_name: "Powell Library",
    floor: "Level 1",
    floor_index: 1,
    capacity: 30,
    sqft: 600,
    features: ["Projector", "Display Screen", "WiFi"],
    services: ["Guest WiFi", "Data Science & GIS Stations", "Equipment Lending"],
    hourly_rate: 60,
    half_day_rate: 400,
    full_day_rate: 650,
    approval_required: false,
    catering_available: false,
    notes: "Located in Young Research Library Research Commons."
  },
  // ═══════════════════════════════════════════════════════════════════
  // DATAX (bld-21)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "DataX Impact Forum",
    display_name: "Impact Forum",
    type: "Event Space",
    building_id: "bld-21",
    building_name: "DataX",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 100,
    sqft: 1800,
    features: ["Audio System", "Projector", "Flexible Seating", "Live-Streaming", "Video Conference", "WiFi"],
    services: ["Facility Services", "Live-Streaming & Event Recording", "Video Conferencing", "Custom Room Layouts", "Guest WiFi", "Catering Coordination", "Event Security"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "DataX Conference Room A",
    display_name: "DataX Conference Room A",
    type: "Conference Room",
    building_id: "bld-21",
    building_name: "DataX",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 20,
    sqft: 400,
    features: ["Display Screen", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Guest WiFi", "Video Conferencing"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: false
  },
  {
    name: "DataX Collaboration Hub",
    display_name: "Collaboration Hub",
    type: "Event Space",
    building_id: "bld-21",
    building_name: "DataX",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 40,
    sqft: 800,
    features: ["Flexible Seating", "Display Screen", "WiFi"],
    services: ["Guest WiFi", "Custom Room Layouts"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: true,
    notes: "Open workspace configurable for events."
  },
  // ═══════════════════════════════════════════════════════════════════
  // KAPLAN HALL (bld-22)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Kaplan Hall 193",
    display_name: "Kaplan Hall 193",
    type: "Event Space",
    building_id: "bld-22",
    building_name: "Kaplan Hall",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 40,
    sqft: 1200,
    features: ["Display Screen", "Video Conference", "Flexible Seating", "WiFi"],
    services: ["Furniture (Chairs, Tables, Couches)", "WiFi", "Cleaning Services", "AV Services", "Catering Support"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: true,
    notes: "Room size is 20' x 60'. Wall-mounted monitor, Zoom appliance, control podium."
  },
  // ═══════════════════════════════════════════════════════════════════
  // LAKE ARROWHEAD LODGE (bld-23)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Lake Arrowhead Main Hall",
    display_name: "Main Conference Hall",
    type: "Event Space",
    building_id: "bld-23",
    building_name: "Lake Arrowhead Lodge",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 3e3,
    features: ["Audio System", "Projector", "Flexible Seating", "Catering Setup", "WiFi"],
    services: ["Built-in Sound Systems", "Projectors & Flat Screen TVs", "Video Conferencing", "On-Site Technical Support", "Award-Winning Dining", "Complete Meeting Packages"],
    hourly_rate: 400,
    half_day_rate: 2500,
    full_day_rate: 4e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Lake Arrowhead Breakout Room A",
    display_name: "Breakout Room A",
    type: "Meeting Room",
    building_id: "bld-23",
    building_name: "Lake Arrowhead Lodge",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 30,
    sqft: 500,
    features: ["Display Screen", "Whiteboard", "WiFi"],
    services: ["Complimentary WiFi", "On-Site Technical Support", "Refreshment Breaks"],
    hourly_rate: 80,
    half_day_rate: 500,
    full_day_rate: 800,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Lake Arrowhead Breakout Room B",
    display_name: "Breakout Room B",
    type: "Meeting Room",
    building_id: "bld-23",
    building_name: "Lake Arrowhead Lodge",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 20,
    sqft: 400,
    features: ["Display Screen", "Whiteboard", "WiFi"],
    services: ["Complimentary WiFi", "On-Site Technical Support", "Refreshment Breaks"],
    hourly_rate: 60,
    half_day_rate: 400,
    full_day_rate: 650,
    approval_required: false,
    catering_available: true
  },
  {
    name: "Lake Arrowhead Boardroom",
    display_name: "Executive Boardroom",
    type: "Boardroom",
    building_id: "bld-23",
    building_name: "Lake Arrowhead Lodge",
    floor: "Level 1",
    floor_index: 1,
    capacity: 16,
    sqft: 350,
    features: ["Large Display", "Video Conference", "Executive Seating", "WiFi"],
    services: ["Complimentary WiFi", "Video Conferencing", "On-Site Bar & Lounge"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // UCLA RECREATION (bld-24)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Drake Stadium",
    display_name: "Drake Stadium",
    type: "Outdoor Space",
    building_id: "bld-24",
    building_name: "UCLA Recreation",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 3500,
    sqft: 5e4,
    features: ["Stage/Platform", "Audio System", "Lighting Control", "Natural Light"],
    services: ["Venue Rentals", "Event Coordination", "Security Coordination", "Catering Coordination"],
    hourly_rate: 2e3,
    half_day_rate: 1e4,
    full_day_rate: 18e3,
    approval_required: true,
    catering_available: true,
    notes: "Outdoor large-scale events venue."
  },
  {
    name: "Los Angeles Tennis Center",
    display_name: "Los Angeles Tennis Center & Clubhouse",
    type: "Outdoor Space",
    building_id: "bld-24",
    building_name: "UCLA Recreation",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 5e3,
    sqft: 8e4,
    features: ["Stage/Platform", "Audio System", "Lighting Control", "Natural Light"],
    services: ["Venue Rentals", "Event Coordination", "Security Coordination", "Catering Coordination"],
    hourly_rate: 2500,
    half_day_rate: 12e3,
    full_day_rate: 2e4,
    approval_required: true,
    catering_available: true,
    notes: "Used for ceremonies, concerts, and commencements."
  },
  {
    name: "Wooden Center Meeting Rooms",
    display_name: "John Wooden Center Meeting Rooms",
    type: "Meeting Room",
    building_id: "bld-24",
    building_name: "UCLA Recreation",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 40,
    sqft: 700,
    features: ["Display Screen", "Video Conference", "Whiteboard", "WiFi"],
    services: ["Venue Rentals", "AV Equipment"],
    hourly_rate: 100,
    half_day_rate: 600,
    full_day_rate: 1e3,
    approval_required: false,
    catering_available: false
  },
  {
    name: "Sunset Canyon Recreation Center",
    display_name: "Sunset Canyon Recreation Center",
    type: "Event Space",
    building_id: "bld-24",
    building_name: "UCLA Recreation",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 300,
    sqft: 5e3,
    features: ["Audio System", "Flexible Seating", "Catering Setup", "Natural Light", "WiFi"],
    services: ["Venue Rentals", "Event Coordination", "Catering Coordination"],
    hourly_rate: 400,
    half_day_rate: 2500,
    full_day_rate: 4e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Student Activities Center",
    display_name: "Student Activities Center",
    type: "Event Space",
    building_id: "bld-24",
    building_name: "UCLA Recreation",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 2500,
    features: ["Audio System", "Projector", "Flexible Seating", "WiFi"],
    services: ["Venue Rentals", "AV Equipment", "Event Coordination"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: true
  },
  // ═══════════════════════════════════════════════════════════════════
  // CAMPUS OUTDOOR SPACES (bld-25)
  // ═══════════════════════════════════════════════════════════════════
  {
    name: "Wilson Plaza",
    display_name: "Wilson Plaza",
    type: "Outdoor Space",
    building_id: "bld-25",
    building_name: "Campus Outdoor Spaces",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 500,
    sqft: 15e3,
    features: ["Flexible Seating", "Portable PA", "Natural Light", "Catering Setup"],
    services: ["Event Coordination", "Security Coordination", "Catering Coordination"],
    hourly_rate: 500,
    half_day_rate: 3e3,
    full_day_rate: 5e3,
    approval_required: true,
    catering_available: true,
    notes: "Suitable for receptions, ceremonies, concerts, and information fairs."
  },
  {
    name: "Court of Sciences",
    display_name: "Court of Sciences",
    type: "Outdoor Space",
    building_id: "bld-25",
    building_name: "Campus Outdoor Spaces",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 300,
    sqft: 8e3,
    features: ["Flexible Seating", "Portable PA", "Natural Light", "Catering Setup"],
    services: ["Event Coordination", "Security Coordination", "Catering Coordination"],
    hourly_rate: 400,
    half_day_rate: 2500,
    full_day_rate: 4e3,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Franklin Murphy Sculpture Garden",
    display_name: "Franklin Murphy Sculpture Garden",
    type: "Outdoor Space",
    building_id: "bld-25",
    building_name: "Campus Outdoor Spaces",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 6e3,
    features: ["Flexible Seating", "Natural Light", "Catering Setup"],
    services: ["Event Coordination", "Photography Permitting", "Catering Coordination"],
    hourly_rate: 350,
    half_day_rate: 2e3,
    full_day_rate: 3500,
    approval_required: true,
    catering_available: true
  },
  {
    name: "Meyerhoff Park",
    display_name: "Meyerhoff Park",
    type: "Outdoor Space",
    building_id: "bld-25",
    building_name: "Campus Outdoor Spaces",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 200,
    sqft: 5e3,
    features: ["Stage/Platform", "Portable PA", "Natural Light"],
    services: ["Event Coordination", "Security Coordination"],
    hourly_rate: 250,
    half_day_rate: 1500,
    full_day_rate: 2500,
    approval_required: true,
    catering_available: false,
    notes: "Free speech designated area with podium and amplified sound."
  },
  {
    name: "Dickson Courts",
    display_name: "Dickson Courts North & South",
    type: "Outdoor Space",
    building_id: "bld-25",
    building_name: "Campus Outdoor Spaces",
    floor: "Ground Floor",
    floor_index: 0,
    capacity: 150,
    sqft: 4e3,
    features: ["Flexible Seating", "Natural Light"],
    services: ["Event Coordination"],
    hourly_rate: 200,
    half_day_rate: 1200,
    full_day_rate: 2e3,
    approval_required: false,
    catering_available: false
  }
];
var generateSpaceData = () => {
  return UCLA_ROOMS.map((room, index) => {
    const floorId = `${room.building_id}_lvl-${floorIndexToLevelCode(room.floor_index)}`;
    const room_code = `${room.building_id.split("-")[1]}.${room.floor_index}.${String(index + 1).padStart(2, "0")}`;
    return {
      id: `space-${index + 1}`,
      name: `${room_code} ${room.name}`,
      display_name: room.display_name,
      map_id: `area-${room_code.toLowerCase().replace(/\./g, "-")}-status`,
      zones: getZoneHierarchy(room.building_id, floorId),
      type: room.type,
      code: room.type,
      capacity: room.capacity,
      features: room.features,
      images: [
        `https://images.unsplash.com/photo-${15e8 + index * 1e5}?w=800&h=600&fit=crop`
      ],
      bookable: true,
      approval: room.approval_required,
      level: {
        id: floorId,
        parent_id: room.building_id,
        name: room.floor,
        display_name: room.floor,
        capacity: room.capacity,
        number: room.floor_index.toString(),
        map_id: `${room.building_id}_${room.floor_index}`,
        tags: [room.type.toLowerCase().replace(/\s+/g, "-")],
        settings: {
          booking_enabled: true,
          auto_release: room.type === "Meeting Room" || room.type === "Conference Room",
          max_booking_duration: room.type === "Auditorium" || room.type === "Ballroom" ? 720 : 480
        },
        images: [
          `https://images.unsplash.com/photo-${14e8 + room.floor_index * 2e5}?w=1200&h=800&fit=crop`
        ],
        locations: {
          id: floorId,
          name: room.floor,
          building: room.building_name
        }
      },
      building: room.building_name,
      building_id: room.building_id,
      floor: room.floor,
      floor_number: room.floor_index,
      room_code,
      sqft: room.sqft,
      services: room.services,
      notes: room.notes || "",
      accessibility: {
        wheelchair_accessible: true,
        hearing_loop: ["Auditorium", "Ballroom", "Theater"].includes(room.type),
        braille_signage: true
      },
      equipment: room.features.map((feature) => ({
        name: feature,
        status: "Working",
        last_serviced: new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3).toISOString()
      })),
      amenities: {
        natural_light: room.type === "Outdoor Space" || room.features.includes("Natural Light"),
        air_conditioning: room.type !== "Outdoor Space",
        power_outlets: Math.max(room.capacity, 10),
        wifi: true,
        catering_available: room.catering_available,
        parking_nearby: true
      },
      booking_rules: {
        advance_booking_days: room.approval_required ? 90 : 30,
        min_booking_duration: 60,
        max_booking_duration: room.type === "Auditorium" || room.type === "Ballroom" ? 720 : 480,
        buffer_time: room.type === "Event Space" || room.type === "Ballroom" ? 60 : 30,
        approval_required: room.approval_required
      },
      cost_center: room.building_name.toLowerCase().replace(/\s+/g, "-"),
      hourly_rate: room.hourly_rate,
      half_day_rate: room.half_day_rate || 0,
      full_day_rate: room.full_day_rate || 0
    };
  });
};
var rawSpaces = generateSpaceData();
var MOCK_SPACES = rawSpaces.map((space) => generateMockSpace(__spreadProps(__spreadValues({}, space), {
  features: space.features || [],
  images: space.images || [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  ]
})));

// libs/mocks/src/lib/api/common.mock.ts
var DOMAIN = "place.tech";

// libs/mocks/src/lib/api/users.data.ts
var REALISTIC_STAFF_PROFILES = [
  {
    first_name: "Sarah",
    last_name: "Chen",
    department: "Engineering",
    title: "Senior Software Engineer",
    location: "Sydney"
  },
  {
    first_name: "Michael",
    last_name: "Rodriguez",
    department: "Product",
    title: "Product Manager",
    location: "Melbourne"
  },
  {
    first_name: "Emily",
    last_name: "Johnson",
    department: "Design",
    title: "UX Designer",
    location: "Brisbane"
  },
  {
    first_name: "David",
    last_name: "Park",
    department: "Engineering",
    title: "Technical Lead",
    location: "Sydney"
  },
  {
    first_name: "Jessica",
    last_name: "Thompson",
    department: "Marketing",
    title: "Marketing Manager",
    location: "Perth"
  },
  {
    first_name: "Alex",
    last_name: "Kumar",
    department: "Sales",
    title: "Account Executive",
    location: "Adelaide"
  },
  {
    first_name: "Rachel",
    last_name: "Williams",
    department: "Human Resources",
    title: "HR Business Partner",
    location: "Sydney"
  },
  {
    first_name: "James",
    last_name: "O'Connor",
    department: "Finance",
    title: "Financial Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Lisa",
    last_name: "Zhang",
    department: "Operations",
    title: "Operations Manager",
    location: "Sydney"
  },
  {
    first_name: "Tom",
    last_name: "Mitchell",
    department: "Engineering",
    title: "DevOps Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Amanda",
    last_name: "Foster",
    department: "Customer Success",
    title: "Customer Success Manager",
    location: "Melbourne"
  },
  {
    first_name: "Chris",
    last_name: "Anderson",
    department: "IT",
    title: "IT Administrator",
    location: "Perth"
  },
  {
    first_name: "Priya",
    last_name: "Sharma",
    department: "Research & Development",
    title: "Research Scientist",
    location: "Sydney"
  },
  {
    first_name: "Mark",
    last_name: "Davis",
    department: "Sales",
    title: "Sales Manager",
    location: "Adelaide"
  },
  {
    first_name: "Sophie",
    last_name: "Taylor",
    department: "Design",
    title: "Senior UX Designer",
    location: "Melbourne"
  },
  {
    first_name: "Daniel",
    last_name: "Lee",
    department: "Engineering",
    title: "Software Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Olivia",
    last_name: "Brown",
    department: "Marketing",
    title: "Content Creator",
    location: "Sydney"
  },
  {
    first_name: "Ryan",
    last_name: "Wilson",
    department: "Product",
    title: "Business Analyst",
    location: "Perth"
  },
  {
    first_name: "Grace",
    last_name: "Martinez",
    department: "Legal",
    title: "Legal Counsel",
    location: "Melbourne"
  },
  {
    first_name: "Ben",
    last_name: "Clarke",
    department: "Engineering",
    title: "Quality Assurance Engineer",
    location: "Sydney"
  },
  // Additional staff profiles to reach 80 total
  {
    first_name: "Natasha",
    last_name: "Petrov",
    department: "Engineering",
    title: "Senior Developer",
    location: "Melbourne"
  },
  {
    first_name: "Carlos",
    last_name: "Silva",
    department: "Sales",
    title: "Sales Manager",
    location: "Sydney"
  },
  {
    first_name: "Maya",
    last_name: "Patel",
    department: "Design",
    title: "UI/UX Designer",
    location: "Brisbane"
  },
  {
    first_name: "Jacob",
    last_name: "Nielsen",
    department: "Marketing",
    title: "Digital Marketing Manager",
    location: "Perth"
  },
  {
    first_name: "Isabella",
    last_name: "Romano",
    department: "Human Resources",
    title: "HR Manager",
    location: "Adelaide"
  },
  {
    first_name: "Hassan",
    last_name: "Ahmed",
    department: "Finance",
    title: "Senior Financial Analyst",
    location: "Sydney"
  },
  {
    first_name: "Elena",
    last_name: "Popov",
    department: "Operations",
    title: "Operations Coordinator",
    location: "Melbourne"
  },
  {
    first_name: "Nathan",
    last_name: "Campbell",
    department: "Engineering",
    title: "Software Engineer",
    location: "Brisbane"
  },
  {
    first_name: "Zoe",
    last_name: "Walker",
    department: "Product",
    title: "Product Owner",
    location: "Perth"
  },
  {
    first_name: "Adrian",
    last_name: "Kowalski",
    department: "IT",
    title: "Systems Administrator",
    location: "Adelaide"
  },
  {
    first_name: "Samantha",
    last_name: "Brooks",
    department: "Customer Success",
    title: "Customer Success Specialist",
    location: "Sydney"
  },
  {
    first_name: "Lucas",
    last_name: "Garcia",
    department: "Research & Development",
    title: "Data Scientist",
    location: "Melbourne"
  },
  {
    first_name: "Aisha",
    last_name: "Johnson",
    department: "Legal",
    title: "Compliance Officer",
    location: "Brisbane"
  },
  {
    first_name: "Marcus",
    last_name: "Stone",
    department: "Engineering",
    title: "Technical Lead",
    location: "Perth"
  },
  {
    first_name: "Lily",
    last_name: "Watson",
    department: "Design",
    title: "Graphic Designer",
    location: "Adelaide"
  },
  {
    first_name: "Oscar",
    last_name: "Murphy",
    department: "Sales",
    title: "Business Development Manager",
    location: "Sydney"
  },
  {
    first_name: "Chloe",
    last_name: "Edwards",
    department: "Marketing",
    title: "Marketing Specialist",
    location: "Melbourne"
  },
  {
    first_name: "Ethan",
    last_name: "Roberts",
    department: "Finance",
    title: "Budget Analyst",
    location: "Brisbane"
  },
  {
    first_name: "Mia",
    last_name: "Turner",
    department: "Human Resources",
    title: "Talent Acquisition Specialist",
    location: "Perth"
  },
  {
    first_name: "Logan",
    last_name: "Phillips",
    department: "Operations",
    title: "Process Improvement Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Aria",
    last_name: "Cooper",
    department: "Engineering",
    title: "Frontend Developer",
    location: "Sydney"
  },
  {
    first_name: "Felix",
    last_name: "Morgan",
    department: "Product",
    title: "Product Marketing Manager",
    location: "Melbourne"
  },
  {
    first_name: "Ruby",
    last_name: "Bailey",
    department: "Customer Success",
    title: "Account Manager",
    location: "Brisbane"
  },
  {
    first_name: "Caleb",
    last_name: "Reed",
    department: "IT",
    title: "Network Engineer",
    location: "Perth"
  },
  {
    first_name: "Luna",
    last_name: "Howard",
    department: "Design",
    title: "Product Designer",
    location: "Adelaide"
  },
  {
    first_name: "Mason",
    last_name: "Cox",
    department: "Research & Development",
    title: "Machine Learning Engineer",
    location: "Sydney"
  },
  {
    first_name: "Hazel",
    last_name: "Ward",
    department: "Legal",
    title: "Contract Manager",
    location: "Melbourne"
  },
  {
    first_name: "Theo",
    last_name: "Torres",
    department: "Sales",
    title: "Account Executive",
    location: "Brisbane"
  },
  {
    first_name: "Violet",
    last_name: "Peterson",
    department: "Marketing",
    title: "Brand Manager",
    location: "Perth"
  },
  {
    first_name: "Julian",
    last_name: "Gray",
    department: "Finance",
    title: "Tax Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Nova",
    last_name: "James",
    department: "Human Resources",
    title: "Learning & Development Coordinator",
    location: "Sydney"
  },
  {
    first_name: "Blake",
    last_name: "Watson",
    department: "Operations",
    title: "Supply Chain Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Ivy",
    last_name: "Brooks",
    department: "Engineering",
    title: "Backend Developer",
    location: "Brisbane"
  },
  {
    first_name: "Axel",
    last_name: "Fisher",
    department: "Product",
    title: "Technical Writer",
    location: "Perth"
  },
  {
    first_name: "Sage",
    last_name: "Bennett",
    department: "Customer Success",
    title: "Implementation Specialist",
    location: "Adelaide"
  },
  {
    first_name: "Kai",
    last_name: "Powell",
    department: "IT",
    title: "Security Analyst",
    location: "Sydney"
  },
  {
    first_name: "Raven",
    last_name: "Long",
    department: "Design",
    title: "Creative Director",
    location: "Melbourne"
  },
  {
    first_name: "Phoenix",
    last_name: "Hughes",
    department: "Research & Development",
    title: "Research Engineer",
    location: "Brisbane"
  },
  {
    first_name: "River",
    last_name: "Price",
    department: "Legal",
    title: "Intellectual Property Lawyer",
    location: "Perth"
  },
  {
    first_name: "Atlas",
    last_name: "Sanders",
    department: "Sales",
    title: "Regional Sales Director",
    location: "Adelaide"
  },
  {
    first_name: "Willow",
    last_name: "Ross",
    department: "Marketing",
    title: "Social Media Manager",
    location: "Sydney"
  },
  {
    first_name: "Orion",
    last_name: "Morris",
    department: "Finance",
    title: "Investment Analyst",
    location: "Melbourne"
  },
  {
    first_name: "Ember",
    last_name: "Rogers",
    department: "Human Resources",
    title: "Organizational Development Specialist",
    location: "Brisbane"
  },
  {
    first_name: "Juno",
    last_name: "Reed",
    department: "Operations",
    title: "Quality Assurance Manager",
    location: "Perth"
  },
  {
    first_name: "Zara",
    last_name: "Cook",
    department: "Engineering",
    title: "Mobile Developer",
    location: "Adelaide"
  },
  {
    first_name: "Leo",
    last_name: "Morgan",
    department: "Product",
    title: "UX Researcher",
    location: "Sydney"
  },
  {
    first_name: "Iris",
    last_name: "Bailey",
    department: "Customer Success",
    title: "Training Specialist",
    location: "Melbourne"
  },
  {
    first_name: "Finn",
    last_name: "Rivera",
    department: "IT",
    title: "Database Administrator",
    location: "Brisbane"
  },
  {
    first_name: "Aurora",
    last_name: "Cooper",
    department: "Design",
    title: "Motion Graphics Designer",
    location: "Perth"
  },
  {
    first_name: "Xavier",
    last_name: "Richardson",
    department: "Research & Development",
    title: "AI Research Scientist",
    location: "Adelaide"
  },
  {
    first_name: "Skye",
    last_name: "Cox",
    department: "Legal",
    title: "Privacy Officer",
    location: "Sydney"
  },
  {
    first_name: "Knox",
    last_name: "Howard",
    department: "Sales",
    title: "Enterprise Sales Manager",
    location: "Melbourne"
  },
  {
    first_name: "Luna",
    last_name: "Ward",
    department: "Marketing",
    title: "Event Marketing Manager",
    location: "Brisbane"
  },
  {
    first_name: "Sage",
    last_name: "Torres",
    department: "Finance",
    title: "Risk Analyst",
    location: "Perth"
  },
  {
    first_name: "Phoenix",
    last_name: "Peterson",
    department: "Human Resources",
    title: "Employee Relations Specialist",
    location: "Adelaide"
  },
  {
    first_name: "River",
    last_name: "Gray",
    department: "Operations",
    title: "Facilities Manager",
    location: "Sydney"
  },
  {
    first_name: "Atlas",
    last_name: "James",
    department: "Engineering",
    title: "Cloud Architect",
    location: "Melbourne"
  },
  {
    first_name: "Willow",
    last_name: "Watson",
    department: "Product",
    title: "Product Strategy Manager",
    location: "Brisbane"
  },
  {
    first_name: "Orion",
    last_name: "Brooks",
    department: "Customer Success",
    title: "Customer Operations Manager",
    location: "Perth"
  },
  {
    first_name: "Ember",
    last_name: "Fisher",
    department: "IT",
    title: "DevOps Manager",
    location: "Adelaide"
  },
  {
    first_name: "Juno",
    last_name: "Bennett",
    department: "Design",
    title: "Brand Designer",
    location: "Sydney"
  },
  {
    first_name: "Nova",
    last_name: "Powell",
    department: "Research & Development",
    title: "Technology Innovation Manager",
    location: "Melbourne"
  },
  {
    first_name: "Blake",
    last_name: "Long",
    department: "Legal",
    title: "Regulatory Affairs Manager",
    location: "Brisbane"
  },
  {
    first_name: "Ivy",
    last_name: "Hughes",
    department: "Sales",
    title: "Channel Partner Manager",
    location: "Perth"
  },
  {
    first_name: "Axel",
    last_name: "Price",
    department: "Marketing",
    title: "Growth Marketing Manager",
    location: "Adelaide"
  }
];
var VISITOR_PROFILES = [
  {
    first_name: "Jennifer",
    last_name: "Adams",
    company: "TechCorp Australia",
    purpose: "Business Partnership Meeting"
  },
  {
    first_name: "Robert",
    last_name: "Hayes",
    company: "Global Innovations Pty Ltd",
    purpose: "Product Demo"
  },
  {
    first_name: "Maria",
    last_name: "Gonzalez",
    company: "Digital Solutions Group",
    purpose: "Contract Negotiation"
  },
  {
    first_name: "Kevin",
    last_name: "Turner",
    company: "Innovation Labs",
    purpose: "Technical Consultation"
  },
  {
    first_name: "Catherine",
    last_name: "Moore",
    company: "Future Systems",
    purpose: "Strategic Planning"
  },
  {
    first_name: "Steven",
    last_name: "White",
    company: "Advanced Technologies",
    purpose: "Vendor Assessment"
  },
  {
    first_name: "Nicole",
    last_name: "Campbell",
    company: "Smart Solutions Ltd",
    purpose: "Project Review"
  },
  {
    first_name: "Brian",
    last_name: "Scott",
    company: "NextGen Industries",
    purpose: "Investment Discussion"
  },
  {
    first_name: "Michelle",
    last_name: "Green",
    company: "Dynamic Enterprises",
    purpose: "Collaboration Meeting"
  },
  {
    first_name: "Jason",
    last_name: "Hill",
    company: "Creative Solutions Inc",
    purpose: "Design Review"
  },
  {
    first_name: "Laura",
    last_name: "King",
    company: "Enterprise Partners",
    purpose: "Partnership Proposal"
  },
  {
    first_name: "Andrew",
    last_name: "Wright",
    company: "Strategic Consulting",
    purpose: "Business Consultation"
  },
  {
    first_name: "Rebecca",
    last_name: "Lopez",
    company: "Business Development Co",
    purpose: "Market Analysis"
  },
  {
    first_name: "Paul",
    last_name: "Young",
    company: "Market Leaders Group",
    purpose: "Industry Insights"
  },
  // Additional visitor profiles to create 20 total guests
  {
    first_name: "Douglas",
    last_name: "Chen",
    company: "Quantum Dynamics",
    purpose: "R&D Collaboration"
  },
  {
    first_name: "Victoria",
    last_name: "Singh",
    company: "Digital Innovation Hub",
    purpose: "Technology Transfer"
  },
  {
    first_name: "Timothy",
    last_name: "O'Brien",
    company: "CloudTech Solutions",
    purpose: "Infrastructure Review"
  },
  {
    first_name: "Angela",
    last_name: "Martinez",
    company: "Data Analytics Corp",
    purpose: "Analytics Partnership"
  },
  {
    first_name: "Gordon",
    last_name: "Thompson",
    company: "Venture Capital Partners",
    purpose: "Investment Evaluation"
  },
  {
    first_name: "Patricia",
    last_name: "Wilson",
    company: "Sustainability Solutions",
    purpose: "ESG Consultation"
  }
];
var ACTIVE_USER = {
  id: "current",
  name: "Sarah Chen",
  email: "sarah.chen@place.tech",
  first_name: "Sarah",
  last_name: "Chen",
  department: "Engineering",
  title: "Senior Software Engineer",
  location: "Sydney",
  groups: ["staff", "engineering", "senior"],
  sys_admin: true,
  phone: "+61 2 9876 5432",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b9ce2c62?w=150&h=150&fit=crop&crop=face"
};
var MOCK_STAFF = REALISTIC_STAFF_PROFILES.map((profile, i) => {
  const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase().replace(/'/g, "")}`;
  const isManager = profile.title.toLowerCase().includes("manager") || profile.title.toLowerCase().includes("lead") || profile.title.toLowerCase().includes("senior");
  return {
    id: `staff-${i + 1}`,
    name: `${profile.first_name} ${profile.last_name}`,
    email: `${emailName}@${DOMAIN}`,
    first_name: profile.first_name,
    last_name: profile.last_name,
    department: profile.department,
    title: profile.title,
    location: profile.location,
    groups: [
      "staff",
      profile.department.toLowerCase().replace(/\s+/g, "-"),
      ...isManager ? ["manager"] : []
    ],
    phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)}`,
    avatar: `https://images.unsplash.com/photo-${15e11 + i * 1e6}?w=150&h=150&fit=crop&crop=face`,
    extension_data: {
      employee_id: `EMP${String(i + 1).padStart(4, "0")}`,
      start_date: new Date(2020 + predictableRandomInt(4), predictableRandomInt(12), predictableRandomInt(28) + 1).toISOString(),
      manager_id: isManager ? null : `staff-${predictableRandomInt(5) + 1}`
    }
  };
}).concat([ACTIVE_USER]);
var MOCK_GUESTS = VISITOR_PROFILES.map((profile, i) => {
  const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase()}`;
  const companyDomain = profile.company.toLowerCase().replace(/\s+/g, "").replace(/pty.*ltd|ltd|inc|corp|group|co/gi, "").slice(0, 12) + ".com";
  return {
    id: `guest-${i + 1}`,
    name: `${profile.first_name} ${profile.last_name}`,
    email: `${emailName}@${companyDomain}`,
    first_name: profile.first_name,
    last_name: profile.last_name,
    company: profile.company,
    purpose: profile.purpose,
    visit_expected: predictableRandomInt(99999) % 3 !== 0,
    // 66% expected
    phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)} ${String(predictableRandomInt(9e3) + 1e3).slice(0, 4)}`,
    extension_data: __spreadValues(__spreadValues({
      visitor_type: predictableRandomInt(99999) % 4 === 0 ? "VIP" : "Standard",
      host_id: `staff-${predictableRandomInt(REALISTIC_STAFF_PROFILES.length) + 1}`,
      requirements: predictableRandomInt(99999) % 5 === 0 ? "Wheelchair accessible" : null,
      parking_required: predictableRandomInt(99999) % 3 === 0
    }, predictableRandomInt(99999) % 4 === 0 ? {
      vaccination_proof: {
        url: "https://fonts.gstatic.com/s/i/materialicons/verified/v11/24px.svg",
        verified: true
      }
    } : {}), predictableRandomInt(99999) % 3 === 0 ? {
      id_data: {
        url: "https://fonts.gstatic.com/s/i/materialicons/fingerprint/v12/24px.svg",
        type: "Driver License",
        verified: true
      }
    } : {})
  };
});

// libs/mocks/src/lib/api/bookings.data.ts
var TRACKING = ["in_storage", "in_transit", "at_location"];
var generateBookingForDay = (day, type, index, user) => {
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
  const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
  const lvl = lvls[predictableRandomInt(lvls.length)];
  const lvl_spaces = MOCK_SPACES.filter((_) => _.zones.includes(lvl?.id)) || [];
  const approved = predictableRandomInt(999999) % 4;
  const approver = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
  const guest = MOCK_GUESTS[predictableRandomInt(MOCK_GUESTS.length)];
  const asset_count = predictableRandomInt(3, 1);
  const position = padString(predictableRandomInt(999) + 1, 3);
  const base_time = setHours(addDays(startOfDay(Date.now()), day - 15), predictableRandomInt(10, 7));
  const booking_start = getUnixTime(base_time);
  const time_length = predictableRandomInt(240, 60);
  const booking_end = getUnixTime(addMinutes(base_time, time_length));
  const qr_base = Date.now() * predictableRandomInt(999999, 1) / 1e5;
  return {
    id: index,
    qr_code: Math.floor(qr_base).toString(),
    booking_start,
    booking_end,
    timezone: "Australia/Sydney",
    title: capitalizeFirstLetter(`${type.replace("-", " ")} booking ${index}`),
    event_start: booking_start,
    event_end: booking_end,
    asset_ids: type === "asset-request" ? [...Array(asset_count)].map((_, i) => MOCK_ASSETS[predictableRandomInt(MOCK_ASSETS.length, i + 1)].id) : [
      type === "visitor" ? guest.email : `${type}-${bld?.id}-${lvl?.id}-${position}`
    ],
    asset_id: type === "visitor" ? guest.email : `${type}-${bld?.id}-${lvl?.id}-${position}`,
    asset_name: type === "visitor" ? guest.name : `${bld?.name}-${position}`,
    description: type === "visitor" ? guest.name : `${capitalizeFirstLetter(type.replace("-", " "))} in ${bld?.name}`,
    booking_type: type,
    type,
    user_id: user.id,
    user_name: user.name,
    user_email: user.email,
    booked_by_id: user.id,
    booked_by_name: user.name,
    booked_by_email: user.email,
    attendees: [],
    checked_in: approved && predictableRandomInt(4) <= 2,
    rejected: predictableRandomInt(12) === 0,
    approved: approved !== 0,
    access: approved !== 0,
    permission: type === "group-event" ? "OPEN" : "PRIVATE",
    approver_id: approved ? approver.id : "",
    approver_name: approved ? approver.name : "",
    approver_email: approved ? approver.email : "",
    process_state: type === "asset-request" ? TRACKING[predictableRandomInt(TRACKING.length, index)] : "",
    last_changed: booking_start,
    created: booking_start - 3600,
    created_by_id: user.id,
    created_by_name: user.name,
    created_by_email: user.email,
    zones: [
      bld?.id,
      type === "parking" ? MOCK_LEVELS.find((l) => l.parent_id === bld?.id && l.type === "parking")?.id : lvl?.id
    ].filter(Boolean),
    extension_data: {
      map_id: `table-${bld?.id}.${position}`,
      note: capitalizeFirstLetter(`${type.replace("-", " ")} booking ${index}`),
      plate_number: randomString(8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
      tracking: approved ? "at_location" : "in_storage",
      space_id: lvl_spaces.length ? lvl_spaces[predictableRandomInt(lvl_spaces.length)].id : `space-${index}`,
      building_id: bld?.id,
      building_name: bld?.name
    }
  };
};
var MOCK_BOOKINGS = (() => {
  const bookings = [];
  let bookingIndex = 0;
  for (let day = 0; day < 30; day++) {
    const dayBookings = [];
    const staffWithoutActive = MOCK_STAFF.filter((u7) => u7.id !== ACTIVE_USER.id);
    const targetUserCount = Math.min(20, staffWithoutActive.length);
    const shuffled = [...staffWithoutActive];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = predictableRandomInt(i + 1);
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    const selectedUsers = shuffled.slice(0, targetUserCount);
    {
      const activeFromStaff = MOCK_STAFF.find((u7) => u7.id === ACTIVE_USER.id);
      selectedUsers.push(activeFromStaff || __spreadProps(__spreadValues({}, ACTIVE_USER), {
        extension_data: {
          employee_id: "EMP0000",
          start_date: (/* @__PURE__ */ new Date()).toISOString(),
          manager_id: null
        }
      }));
    }
    selectedUsers.forEach((user) => {
      const userDayBookings = [];
      if (!user)
        return;
      const deskBookingCount = predictableRandomInt(4, 1);
      for (let i = 0; i < deskBookingCount; i++) {
        const booking = generateBookingForDay(day, "desk", bookingIndex++, user);
        const durationHours = predictableRandomInt(9, 2);
        const latestStartHour = 18 - durationHours;
        const minStartHour = Math.min(7 + i * 3, latestStartHour);
        const startHour = predictableRandomInt(latestStartHour + 1, minStartHour);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      {
        const booking = generateBookingForDay(day, "parking", bookingIndex++, user);
        const durationHours = predictableRandomInt(9, 6);
        const latestStartHour = 18 - durationHours;
        const startHour = predictableRandomInt(latestStartHour + 1, 7);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      {
        const booking = generateBookingForDay(day, "visitor", bookingIndex++, user);
        const durationHours = predictableRandomInt(4, 1);
        const latestStartHour = 18 - durationHours;
        const startHour = predictableRandomInt(latestStartHour + 1, 7);
        const baseTime = setHours(addDays(startOfDay(Date.now()), day - 15), startHour);
        booking.booking_start = getUnixTime(baseTime);
        booking.booking_end = getUnixTime(addMinutes(baseTime, durationHours * 60));
        booking.event_start = booking.booking_start;
        booking.event_end = booking.booking_end;
        userDayBookings.push(booking);
      }
      dayBookings.push(...userDayBookings);
    });
    bookings.push(...dayBookings);
  }
  return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();
var generateCateringOrderBooking = (day, index, user) => {
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
  const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
  const lvl = lvls[predictableRandomInt(lvls.length)];
  const space = MOCK_SPACES[predictableRandomInt(MOCK_SPACES.length)];
  const base_time = setHours(addDays(startOfDay(Date.now()), day - 15), predictableRandomInt(10, 8));
  const booking_start = getUnixTime(base_time);
  const time_length = predictableRandomInt(120, 60);
  const booking_end = getUnixTime(addMinutes(base_time, time_length));
  const cateringOrder = generateCateringOrder({
    id: `catering-event-${index}`,
    event_start: booking_start,
    event_end: booking_end,
    attendees: [user],
    location: space?.name || "Meeting Room"
  });
  const caterer = ["Gourmet Events Catering", "Fresh & Local Kitchen", "Premium Dining"][predictableRandomInt(3)];
  const items_with_caterer = cateringOrder.items.map((item) => __spreadProps(__spreadValues({}, item), {
    caterer
  }));
  return {
    id: 1e4 + index,
    booking_start,
    booking_end,
    timezone: "Australia/Sydney",
    title: `Catering Order ${index}`,
    event_start: booking_start,
    event_end: booking_end,
    asset_id: cateringOrder.id,
    asset_name: `Catering Order - ${space?.name || "Meeting Room"}`,
    description: `Catering order for ${space?.name || "Meeting Room"}`,
    booking_type: "catering-order",
    type: "catering-order",
    user_id: user.id,
    user_name: user.name,
    user_email: user.email,
    booked_by_id: user.id,
    booked_by_name: user.name,
    booked_by_email: user.email,
    attendees: [],
    checked_in: false,
    rejected: false,
    approved: true,
    zones: [bld?.id, lvl?.id].filter(Boolean),
    extension_data: {
      details: {
        id: cateringOrder.id,
        deliver_at: cateringOrder.deliver_at,
        items: items_with_caterer,
        charge_code: cateringOrder.charge_code,
        invoice_number: cateringOrder.invoice_number,
        notes: cateringOrder.notes,
        status: cateringOrder.status,
        caterer
      }
    },
    linked_event: {
      id: `linked-event-${index}`,
      title: `Meeting with Catering`,
      event_start: booking_start,
      event_end: booking_end,
      host: user.email,
      system_id: space?.id,
      location: space?.name || "Meeting Room",
      organiser: {
        name: user.name,
        email: user.email
      }
    }
  };
};
var MOCK_CATERING_BOOKINGS = (() => {
  const bookings = [];
  let bookingIndex = 0;
  for (let day = 0; day < 30; day++) {
    const ordersPerDay = predictableRandomInt(5, 3);
    for (let i = 0; i < ordersPerDay; i++) {
      const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      if (!user)
        continue;
      const booking = generateCateringOrderBooking(day, bookingIndex++, user);
      bookings.push(booking);
    }
  }
  return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();

// libs/mocks/src/lib/api/bookings.mock.ts
var ALL_BOOKINGS = [...MOCK_BOOKINGS, ...MOCK_CATERING_BOOKINGS];
function registerMockBookings() {
  Ko({
    path: "/api/staff/v1/bookings",
    metadata: {},
    method: "GET",
    callback: (_) => {
      let events = ALL_BOOKINGS;
      if (!_.query_params.zone_ids && !_.query_params.zones) {
        _.query_params.user_id = ACTIVE_USER.id;
      }
      if (_.query_params.user_id) {
        events = events.filter((booking) => booking.user_id === _.query_params.user_id);
      }
      if (_.query_params.email) {
        events = events.filter((booking) => booking.user_email === _.query_params.email);
      }
      if (_.query_params.zones || _.query_params.zone_ids) {
        const zones = (_.query_params.zones || _.query_params.zone_ids || "").split(",").filter((id) => !!id);
        if (zones.length > 0) {
          events = events.filter((booking) => zones.some((zone) => booking.zones.includes(zone)));
        }
      }
      if (_.query_params.period_start && _.query_params.period_end) {
        events = events.filter((event) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, event.booking_start, event.booking_end));
      }
      if (_.query_params.type) {
        events = events.filter((event) => event.type === _.query_params.type || event.booking_type === _.query_params.type);
      }
      const limit = +_.query_params.limit || 50;
      const offset = +_.query_params.offset || 0;
      events = events.slice(offset, offset + limit);
      return events;
    }
  });
  Ko({
    path: "/api/debug/bookings/distribution",
    metadata: {},
    method: "GET",
    callback: (_) => {
      const distribution = {};
      MOCK_BOOKINGS.forEach((booking) => {
        if (!distribution[booking.user_id]) {
          distribution[booking.user_id] = {
            user_name: booking.user_name,
            user_email: booking.user_email,
            total: 0,
            desk: 0,
            parking: 0,
            visitor: 0,
            other: 0
          };
        }
        distribution[booking.user_id].total++;
        if (booking.type === "desk")
          distribution[booking.user_id].desk++;
        else if (booking.type === "parking")
          distribution[booking.user_id].parking++;
        else if (booking.type === "visitor")
          distribution[booking.user_id].visitor++;
        else
          distribution[booking.user_id].other++;
      });
      return {
        total_bookings: MOCK_BOOKINGS.length,
        total_users: Object.keys(distribution).length,
        distribution
      };
    }
  });
  Ko({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${_.route_params.id}`);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  Ko({
    path: "/api/staff/v1/bookings/:id/guests/:email",
    metadata: {},
    method: "POST",
    callback: (_) => {
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${_.route_params.id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      }
      const user = {
        id: _.body.id,
        name: _.body.name,
        email: _.body.email
      };
      event.attendees.push(user);
      return user;
    }
  });
  Ko({
    path: "/api/staff/v1/bookings/:id/guests/:email",
    metadata: {},
    method: "DELETE",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      const guest = event.attendees.find((_2) => _2.email === decodeURIComponent(email));
      if (!guest) {
        throw {
          status: 404,
          message: `Unable to find guest with email ${decodeURIComponent(email)}`
        };
      }
      return guest;
    }
  });
  Ko({
    path: "/api/staff/v1/bookings/:id/guests/:email/checkin",
    metadata: {},
    method: "POST",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      event.attendees = event.attendees.filter((_2) => _2.email !== decodeURIComponent(email));
      return {};
    }
  });
  Ko({
    path: "/api/staff/v1/bookings",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-booking-${predictableRandomInt(999)}`
      });
      MOCK_BOOKINGS.push(new_event);
      return new_event;
    }
  });
  const updateBooking = (id, data) => {
    const index = ALL_BOOKINGS.findIndex((e) => `${e.id}` === `${id}`);
    if (index < 0)
      throw {
        status: 404,
        message: `Unable to find booking with ID ${id}`
      };
    const new_event = __spreadValues({}, data);
    ALL_BOOKINGS.splice(index, 1, new_event);
    return new_event;
  };
  Ko({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "PATCH",
    callback: (req) => updateBooking(req.route_params.id, req.body)
  });
  Ko({
    path: "/api/staff/v1/bookings/:id/approve",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      booking.approved = true;
      booking.rejected = false;
      return booking;
    }
  });
  Ko({
    path: "/api/staff/v1/bookings/:id/reject",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      booking.approved = false;
      booking.rejected = true;
      return booking;
    }
  });
  Ko({
    path: "/api/staff/v1/bookings/:id/checkin",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      booking.checked_in = true;
      return booking;
    }
  });
  Ko({
    path: "/api/staff/v1/bookings/:id/update_induction",
    metadata: {},
    method: "POST",
    callback: (req) => {
      const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${req.route_params.id}`);
      if (!booking)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      const induction = req.query_params.induction || "tentative";
      booking.induction = induction;
      return booking;
    }
  });
  Ko({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "PUT",
    callback: (req) => updateBooking(req.route_params.id, req.body)
  });
  Ko({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = ALL_BOOKINGS.findIndex((e) => `${e.id}` === `${req.route_params.id}`);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      ALL_BOOKINGS.splice(index, 1);
      return;
    }
  });
}

// libs/mocks/src/lib/api/events.data.ts
var EVENT_TIME = setHours(startOfDay(Date.now()), 7);
var event_status = ["tentative", "confirmed", "cancelled"];
var randomStatus = () => {
  const rnd = predictableRandomInt(10);
  return rnd < 2 ? event_status[2] : rnd < 5 ? event_status[0] : event_status[1];
};
var MEETING_TYPES = {
  "Team Standup": {
    category: "Operational",
    body: "Daily team synchronization meeting to discuss progress, blockers, and priorities.",
    typical_attendees: 5,
    departments: ["Engineering", "Product", "Design"]
  },
  "Project Kickoff": {
    category: "Project",
    body: "Initial meeting to define project scope, objectives, timeline, and team responsibilities.",
    typical_attendees: 8,
    departments: ["Engineering", "Product", "Design", "Marketing"]
  },
  "Client Presentation": {
    category: "Client",
    body: "Formal presentation of project deliverables, progress updates, or proposal pitch to client stakeholders.",
    typical_attendees: 6,
    departments: ["Sales", "Marketing", "Engineering"]
  },
  "Strategic Planning": {
    category: "Strategic",
    body: "High-level discussion on company direction, quarterly goals, and resource allocation strategies.",
    typical_attendees: 4,
    departments: ["Leadership", "Product", "Finance"]
  },
  "Code Review Session": {
    category: "Technical",
    body: "Collaborative review of code changes, architecture decisions, and technical implementation details.",
    typical_attendees: 4,
    departments: ["Engineering"]
  },
  "Training Workshop": {
    category: "Training",
    body: "Educational session covering new technologies, processes, or professional development topics.",
    typical_attendees: 12,
    departments: ["All Departments"]
  },
  "Budget Review": {
    category: "Financial",
    body: "Quarterly financial review covering expenses, revenue projections, and budget adjustments.",
    typical_attendees: 6,
    departments: ["Finance", "Leadership", "Operations"]
  },
  "1:1 Meeting": {
    category: "Personal",
    body: "Individual meeting between manager and team member for performance discussion and feedback.",
    typical_attendees: 2,
    departments: ["All Departments"]
  },
  "Product Demo": {
    category: "Product",
    body: "Demonstration of new features, product updates, or prototype showcasing to stakeholders.",
    typical_attendees: 8,
    departments: ["Product", "Engineering", "Design", "Marketing"]
  },
  "Team Building": {
    category: "Social",
    body: "Interactive activities designed to improve team cohesion, communication, and workplace culture.",
    typical_attendees: 15,
    departments: ["All Departments"]
  },
  "Interview Panel": {
    category: "HR",
    body: "Candidate interview session with multiple team members to evaluate fit and technical skills.",
    typical_attendees: 4,
    departments: ["HR", "Engineering", "Product"]
  },
  "Vendor Meeting": {
    category: "Business",
    body: "Discussion with external vendors regarding partnerships, services, or procurement decisions.",
    typical_attendees: 5,
    departments: ["Operations", "Finance", "Leadership"]
  },
  "Risk Assessment": {
    category: "Strategic",
    body: "Analysis and discussion of potential project risks, mitigation strategies, and contingency planning.",
    typical_attendees: 6,
    departments: ["Leadership", "Operations", "Finance"]
  },
  "Innovation Brainstorm": {
    category: "Creative",
    body: "Creative ideation session for new product features, process improvements, or market opportunities.",
    typical_attendees: 8,
    departments: ["Product", "Design", "Engineering", "Marketing"]
  },
  "Compliance Review": {
    category: "Legal",
    body: "Review of regulatory requirements, policy updates, and compliance procedures.",
    typical_attendees: 5,
    departments: ["Legal", "Operations", "Leadership"]
  },
  "All Hands Meeting": {
    category: "Company",
    body: "Company-wide meeting for announcements, updates, and team recognition.",
    typical_attendees: 50,
    departments: ["All Departments"]
  },
  "Sprint Planning": {
    category: "Agile",
    body: "Planning session for upcoming sprint work, story estimation, and capacity planning.",
    typical_attendees: 6,
    departments: ["Engineering", "Product", "Design"]
  },
  Retrospective: {
    category: "Agile",
    body: "Team reflection on completed sprint, identifying improvements and celebrating successes.",
    typical_attendees: 6,
    departments: ["Engineering", "Product", "Design"]
  },
  "User Research": {
    category: "Research",
    body: "Discussion of user feedback, research findings, and implications for product development.",
    typical_attendees: 5,
    departments: ["Product", "Design", "Engineering"]
  },
  "Security Briefing": {
    category: "Security",
    body: "Review of security protocols, threat assessments, and incident response procedures.",
    typical_attendees: 8,
    departments: ["Engineering", "Operations", "Leadership"]
  }
};
var getRandomMeetingContent = () => {
  const titles = Object.keys(MEETING_TYPES);
  const title = titles[predictableRandomInt(titles.length)];
  return __spreadValues({
    title
  }, MEETING_TYPES[title]);
};
var generateMeetingUrl = () => {
  const providers = [
    { name: "Zoom", urlPattern: "https://zoom.us/j/" },
    {
      name: "Microsoft Teams",
      urlPattern: "https://teams.microsoft.com/l/meetup-join/"
    },
    { name: "Google Meet", urlPattern: "https://meet.google.com/" },
    { name: "WebEx", urlPattern: "https://placeos.webex.com/meet/" }
  ];
  const provider = providers[predictableRandomInt(providers.length)];
  const meetingId = Math.random().toString(36).substring(2, 15);
  return {
    provider: provider.name,
    url: provider.urlPattern + meetingId,
    id: meetingId
  };
};
var MOCK_EVENTS = (() => {
  const events = [];
  const totalDays = 30;
  const dayOffset = -15;
  MOCK_SPACES.forEach((space, spaceIndex) => {
    for (let day = 0; day < totalDays; day++) {
      const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 7);
      const hourOffset = 7 + (spaceIndex + day) % 11;
      const minuteOffset = (spaceIndex * 17 + day * 13) % 60;
      const eventTime = getUnixTime(setHours(setMinutes(dayStart, minuteOffset), hourOffset));
      const availableStaff = MOCK_STAFF.filter((s) => s.email !== ACTIVE_USER.email);
      const host = availableStaff[spaceIndex % availableStaff.length];
      const colleagues = MOCK_STAFF.filter((s) => s.department === host.department && s.email !== host.email && s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(3) + 1);
      const meetingContent = getRandomMeetingContent();
      const meetingInfo = generateMeetingUrl();
      const attendees = [host, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
        organizer: idx === 0,
        checked_in: predictableRandomInt(99999) % 3 === 0,
        response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
      }));
      const event_start = eventTime;
      const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
      events.push({
        id: `space-daily-${space.id}-${day}`,
        status: randomStatus(),
        host: host.email,
        calendar: `calendar-${host.department?.toLowerCase() || "general"}`,
        creator: host.email,
        attendees,
        title: meetingContent.title,
        body: meetingContent.body,
        private: predictableRandomInt(4) === 0,
        event_start,
        event_end,
        timezone: "Australia/Sydney",
        all_day: false,
        location: space?.name || "TBD",
        recurring: predictableRandomInt(10) === 0,
        recurrence: {},
        attachments: {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
          category: meetingContent.category,
          catering: [],
          setup: 0,
          breakdown: 0,
          cost_center: host.department?.toLowerCase().replace(/\s+/g, "-") || "general",
          priority: "normal",
          estimated_attendees: attendees.length,
          actual_attendees: attendees.length
        }
      });
    }
  });
  const activeUserDailyCount = /* @__PURE__ */ new Map();
  MOCK_STAFF.forEach((user, userIndex) => {
    if (user.email === ACTIVE_USER.email) {
      return;
    }
    for (let day = 0; day < totalDays; day++) {
      const eventsPerDay = predictableRandomInt(3) + 1;
      for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
        const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 8);
        const hourOffset = 8 + eventNum * 3 + userIndex % 3;
        const eventTime = getUnixTime(setHours(dayStart, Math.min(hourOffset, 17)));
        const space = MOCK_SPACES[(userIndex + day + eventNum) % MOCK_SPACES.length];
        let colleagues = MOCK_STAFF.filter((s) => s.department === user.department && s.email !== user.email && s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(4) + 1);
        const currentDayCount = activeUserDailyCount.get(day) || 0;
        const shouldIncludeActiveUser = user.department === ACTIVE_USER.department && currentDayCount === 0 && predictableRandomInt(5) === 0;
        if (shouldIncludeActiveUser) {
          colleagues = [...colleagues, ACTIVE_USER];
          activeUserDailyCount.set(day, currentDayCount + 1);
        }
        const meetingContent = getRandomMeetingContent();
        const meetingInfo = generateMeetingUrl();
        const attendees = [user, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
          organizer: idx === 0,
          checked_in: predictableRandomInt(99999) % 3 === 0,
          response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
        }));
        const event_start = eventTime;
        const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
        events.push({
          id: `user-daily-${userIndex}-${day}-${eventNum}`,
          status: randomStatus(),
          host: user.email,
          calendar: `calendar-${user.department?.toLowerCase() || "general"}`,
          creator: user.email,
          attendees,
          title: meetingContent.title,
          body: meetingContent.body,
          private: predictableRandomInt(4) === 0,
          event_start,
          event_end,
          timezone: "Australia/Sydney",
          all_day: false,
          location: space?.name || "TBD",
          recurring: predictableRandomInt(10) === 0,
          recurrence: {},
          attachments: {},
          system: space,
          meeting_url: meetingInfo.url,
          meeting_id: meetingInfo.id,
          meeting_provider: meetingInfo.provider,
          extension_data: {
            category: meetingContent.category,
            catering: [],
            setup: 0,
            breakdown: 0,
            cost_center: user.department?.toLowerCase().replace(/\s+/g, "-") || "general",
            priority: "normal",
            estimated_attendees: attendees.length,
            actual_attendees: attendees.length
          }
        });
      }
    }
  });
  for (let day = 0; day < totalDays; day++) {
    const eventsPerDay = predictableRandomInt(3) + 1;
    for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
      const dayStart = setHours(addDays(startOfDay(Date.now()), day + dayOffset), 9);
      const hourOffset = 9 + eventNum * 3;
      const eventTime = getUnixTime(setHours(dayStart, Math.min(hourOffset, 16)));
      const space = MOCK_SPACES[(day + eventNum) % MOCK_SPACES.length];
      const meetingContent = getRandomMeetingContent();
      const meetingInfo = generateMeetingUrl();
      const colleagues = MOCK_STAFF.filter((s) => s.email !== ACTIVE_USER.email).slice(0, predictableRandomInt(4) + 2);
      const attendees = [ACTIVE_USER, ...colleagues].map((attendee, idx) => __spreadProps(__spreadValues({}, attendee), {
        organizer: idx === 0,
        checked_in: predictableRandomInt(99999) % 3 === 0,
        response_status: idx === 0 ? "accepted" : predictableRandomInt(99999) % 2 === 0 ? "accepted" : "tentative"
      }));
      const event_start = eventTime;
      const event_end = getUnixTime(addMinutes(new Date(event_start * 1e3), 60));
      events.push({
        id: `active-user-daily-${day}-${eventNum}`,
        status: "confirmed",
        host: ACTIVE_USER.email,
        calendar: `calendar-${ACTIVE_USER.department?.toLowerCase() || "engineering"}`,
        creator: ACTIVE_USER.email,
        attendees,
        title: meetingContent.title,
        body: meetingContent.body,
        private: eventNum === 0,
        // Make first event of day private sometimes
        event_start,
        event_end,
        timezone: "Australia/Sydney",
        all_day: false,
        location: space?.name || "TBD",
        recurring: predictableRandomInt(10) === 0,
        recurrence: {},
        attachments: {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
          category: meetingContent.category,
          catering: [],
          setup: 0,
          breakdown: 0,
          cost_center: ACTIVE_USER.department?.toLowerCase().replace(/\s+/g, "-") || "engineering",
          priority: eventNum === 0 ? "high" : "normal",
          // First event of day is high priority
          estimated_attendees: attendees.length,
          actual_attendees: attendees.length
        }
      });
    }
  }
  const uniqueEvents = events.filter((event, index, array) => index === array.findIndex((e) => e.id === event.id));
  return uniqueEvents.sort((a, b) => a.event_start - b.event_start);
})();
var event_spaces = MOCK_SPACES.map((space) => space.id);

// libs/mocks/src/lib/api/calendars.mock.ts
function registerMockCalendars() {
  Ko({
    path: "/api/staff/v1/calendars",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user2 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user3 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      return [
        {
          id: ACTIVE_USER.email,
          summary: ACTIVE_USER.name,
          primary: true,
          can_edit: true,
          hidden: false
        },
        {
          id: user.email,
          summary: user.name,
          primary: false,
          can_edit: true,
          hidden: false
        },
        {
          id: user2.email,
          summary: user2.name,
          primary: false,
          can_edit: false,
          hidden: false
        },
        {
          id: user3.email,
          summary: user3.name,
          primary: false,
          can_edit: false,
          hidden: true
        }
      ];
    }
  });
  const handleSpaceAvailability = (request) => {
    const start = +request.query_params.period_start;
    const end = +request.query_params.period_end;
    const zones = (request.query_params.zone_ids || "").split(",").filter((i) => !!i);
    const systems = (request.query_params.system_ids || "").split(",").filter((i) => !!i);
    const spaces = MOCK_SPACES.filter((space) => zones.length ? zones.reduce((has, zone) => has && space.zones.includes(zone), true) : systems.length ? systems.includes(space.id) : true).filter((space) => {
      const bookings = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.id === space.id));
      for (const event of bookings) {
        if (timePeriodsIntersect(start, end, event.event_start, event.event_end))
          return false;
      }
      return true;
    });
    return spaces;
  };
  Ko({
    path: "/api/staff/v1/calendars/availability",
    metadata: {},
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
  Ko({
    path: "/api/staff/v1/calendars/free_busy",
    metadata: {},
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
}

// libs/mocks/src/lib/api/events.mock.ts
function registerMockEvents() {
  Ko({
    path: "/api/staff/v1/events",
    metadata: {},
    method: "GET",
    callback: (_) => {
      let events = MOCK_EVENTS;
      if (!_.query_params.zone_ids) {
        events = events.filter((event) => !!event.attendees.find((user) => user.email === ACTIVE_USER.email));
      } else if (_.query_params.zone_ids) {
        events = events.filter((event) => !!event.system.zones.find((zone) => _.query_params.zone_ids.includes(zone)));
      }
      if (_.query_params.period_start) {
        events = events.filter((e) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, e.event_start, e.event_end));
      }
      return events;
    }
  });
  Ko({
    path: "/api/staff/v1/events",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-cal-event-${predictableRandomInt(999)}`
      });
      new_event.attendees = [
        MOCK_STAFF.find((_) => _.email === new_event.host),
        ...new_event.attendees || []
      ];
      new_event.attendees.forEach((user) => {
        if (user.zones)
          user.resource = true;
      });
      if (new_event.system) {
        new_event.attendees = [
          ...new_event.attendees || [],
          __spreadProps(__spreadValues({}, new_event.system), { resource: true })
        ];
      }
      MOCK_EVENTS.push(new_event);
      const system = Ao(new_event.system?.id);
      system?.Bookings[0]?.$poll_bookings();
      return new_event;
    }
  });
  Ko({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const item = MOCK_EVENTS.find((event) => event.id === request.route_params.id);
      if (item) {
        return item;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  Ko({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index > 0) {
        if (MOCK_EVENTS[index].host === ACTIVE_USER.email) {
          MOCK_EVENTS.splice(index, 1);
        } else {
          const user = MOCK_EVENTS[index].attendees.find((_) => _.email === ACTIVE_USER.email);
          user.response_status = "declined";
        }
        return;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  Ko({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index >= 0) {
        return MOCK_EVENTS.splice(index, 1, request.body);
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  Ko({
    path: "/api/staff/v1/events/:id/guests/:email/checkin",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const event = MOCK_EVENTS.find((event2) => event2.id === request.route_params.id);
      if (event) {
        const checked_in = event.extension_data.checked_in || [];
        event.extension_data.checked_in = checked_in.concat([
          request.route_params.email
        ]);
        return event;
      }
      throw { status: 404, message: "Guest not found" };
    }
  });
}

// libs/mocks/src/lib/api/signage.mock.ts
var CONTENT_CATEGORIES = [
  { id: "announcements", name: "Announcements", color: "#FF5722" },
  { id: "events", name: "Events & Meetings", color: "#2196F3" },
  { id: "wayfinding", name: "Wayfinding", color: "#4CAF50" },
  { id: "emergency", name: "Emergency", color: "#F44336" },
  { id: "corporate", name: "Corporate Updates", color: "#673AB7" },
  { id: "wellness", name: "Wellness & Safety", color: "#FF9800" },
  { id: "social", name: "Social & Community", color: "#E91E63" },
  { id: "weather", name: "Weather & External", color: "#607D8B" }
];
var MEDIA_TYPES = [
  "image",
  "video",
  "html",
  "text",
  "slideshow",
  "live_feed",
  "weather",
  "calendar"
];
var DISPLAY_ORIENTATIONS = ["landscape", "portrait", "square"];
var DISPLAY_RESOLUTIONS = [
  "1920x1080",
  "1080x1920",
  "3840x2160",
  "2160x3840",
  "1366x768",
  "768x1366"
];
var CONTENT_TEMPLATES = [
  {
    category: "announcements",
    title: "Weekly Office Updates",
    description: "Important announcements and office news",
    content: {
      headline: "This Week in the Office",
      items: [
        "New parking guidelines effective Monday",
        "Kitchen renovation completed on Level 2",
        "Fire drill scheduled for Thursday 2PM",
        "Coffee machine maintenance this Friday"
      ]
    },
    duration: 15e3
    // 15 seconds
  },
  {
    category: "events",
    title: "Today's Meetings",
    description: "Real-time meeting room schedule display",
    content: {
      template: "meeting_schedule",
      refresh_interval: 3e5,
      // 5 minutes
      show_next_hours: 8
    },
    duration: 3e4
    // 30 seconds
  },
  {
    category: "wayfinding",
    title: "Building Directory",
    description: "Interactive building navigation",
    content: {
      floors: [
        {
          level: "Ground",
          departments: ["Reception", "Cafe", "Security"]
        },
        {
          level: "Level 1",
          departments: ["Engineering", "Product", "Design"]
        },
        { level: "Level 2", departments: ["Sales", "Marketing", "HR"] },
        {
          level: "Level 3",
          departments: ["Finance", "Legal", "Executive"]
        }
      ],
      emergency_exits: [
        "North Stairwell",
        "South Stairwell",
        "Main Elevator"
      ]
    },
    duration: 0
    // Interactive - no auto advance
  },
  {
    category: "emergency",
    title: "Emergency Procedures",
    description: "Safety information and emergency contacts",
    content: {
      type: "emergency_info",
      contacts: [
        { role: "Emergency", number: "000" },
        { role: "Building Security", number: "1234" },
        { role: "First Aid", number: "5678" }
      ],
      assembly_point: "Car Park Level 1",
      procedures: [
        "Stay calm and follow instructions",
        "Use stairs, not elevators",
        "Proceed to assembly point",
        "Wait for all-clear signal"
      ]
    },
    duration: 45e3
    // 45 seconds
  },
  {
    category: "corporate",
    title: "Company Performance Dashboard",
    description: "Key metrics and achievements",
    content: {
      metrics: [
        { label: "Projects Delivered", value: "127", trend: "+12%" },
        { label: "Client Satisfaction", value: "94%", trend: "+3%" },
        { label: "Team Members", value: "850", trend: "+15%" },
        { label: "Offices Worldwide", value: "12", trend: "stable" }
      ],
      achievement: "Certified Great Place to Work 2024"
    },
    duration: 2e4
    // 20 seconds
  },
  {
    category: "wellness",
    title: "Wellness Tips",
    description: "Daily wellness and safety reminders",
    content: {
      tips: [
        "Remember to take regular breaks from your screen",
        "Stay hydrated - aim for 8 glasses of water daily",
        "Use proper ergonomics at your workstation",
        "Take the stairs for extra exercise",
        "Practice good hand hygiene"
      ],
      wellness_metric: "Steps Goal: 10,000 daily"
    },
    duration: 12e3
    // 12 seconds
  },
  {
    category: "social",
    title: "Team Celebrations",
    description: "Celebrating our people and achievements",
    content: {
      celebrations: [
        "Happy Birthday Sarah Chen! \u{1F389}",
        "Congratulations to the Sales team on Q4 results! \u{1F3C6}",
        "Welcome new team members joining this month! \u{1F44B}",
        "Tech Talk Friday: AI in the Workplace - 3PM Conference Room A"
      ],
      upcoming_events: [
        "Monthly Town Hall - Next Tuesday 10AM",
        "Volunteer Day - Community Garden - Saturday",
        "Holiday Party Planning - Committee Meeting Thursday"
      ]
    },
    duration: 18e3
    // 18 seconds
  },
  {
    category: "weather",
    title: "Weather & Transport",
    description: "Current weather and transport updates",
    content: {
      weather: {
        current: "22\xB0C Partly Cloudy",
        forecast: "High 25\xB0C, Low 18\xB0C",
        uv_index: "6 - High",
        rain_chance: "20%"
      },
      transport: [
        "Train services operating normally",
        "Light delays on Bus Route 123",
        "Bike sharing stations: 85% available"
      ]
    },
    duration: 25e3
    // 25 seconds
  }
];
function generateMockDisplays() {
  const displays = [];
  let displayId = 1;
  MOCK_BUILDINGS.forEach((building) => {
    const levels = MOCK_LEVELS.filter((level) => level.parent_id === building.id);
    levels.forEach((level) => {
      const displayCount = predictableRandomInt(4, 2);
      for (let i = 0; i < displayCount; i++) {
        const orientation = DISPLAY_ORIENTATIONS[predictableRandomInt(DISPLAY_ORIENTATIONS.length)];
        const resolution = DISPLAY_RESOLUTIONS.filter((res) => orientation === "portrait" && res.includes("x1920") || orientation === "landscape" && res.includes("1920x") || orientation === "square")[0] || "1920x1080";
        const display = {
          id: `display-${String(displayId).padStart(3, "0")}`,
          name: `${level.name} Display ${String.fromCharCode(65 + i)}`,
          description: `Digital signage display located in ${level.name} of ${building.name}`,
          // Location
          building_id: building.id,
          level_id: level.id,
          zone_id: building.parent_id,
          location: {
            building: building.name,
            level: level.name,
            area: [
              "Main Corridor",
              "Reception Area",
              "Break Room",
              "Elevator Lobby",
              "Meeting Room Entrance"
            ][predictableRandomInt(5)],
            coordinates: {
              x: predictableRandomInt(100, 10),
              y: predictableRandomInt(100, 10)
            }
          },
          // Hardware specifications
          hardware: {
            model: [
              "Samsung QM55R",
              "LG 55SM5KE",
              "NEC MultiSync V554",
              "Sharp PN-M501"
            ][predictableRandomInt(4)],
            size_inches: [43, 50, 55, 65, 75][predictableRandomInt(5)],
            resolution,
            orientation,
            brightness: predictableRandomInt(500, 300),
            // nits
            contrast_ratio: "5000:1",
            viewing_angle: "178\xB0",
            operating_hours: predictableRandomInt(5e4, 3e4)
          },
          // Network and connectivity
          network: {
            ip_address: `192.168.${predictableRandomInt(255, 1)}.${predictableRandomInt(255, 1)}`,
            mac_address: `00:1B:44:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}`,
            connection_type: "Ethernet",
            bandwidth: "100 Mbps",
            wifi_enabled: predictableRandomInt(2) === 1
          },
          // Status and health
          status: ["online", "offline", "maintenance", "error"][predictableRandomInt(10) === 0 ? predictableRandomInt(4) : 0],
          // 90% online
          health: {
            cpu_usage: predictableRandomInt(30, 5),
            memory_usage: predictableRandomInt(60, 20),
            storage_used: predictableRandomInt(80, 30),
            temperature: predictableRandomInt(45, 25),
            uptime_hours: predictableRandomInt(720, 1),
            // Up to 30 days
            last_reboot: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 1)))
          },
          // Display settings
          settings: {
            brightness: predictableRandomInt(100, 60),
            volume: orientation === "portrait" ? 0 : predictableRandomInt(50, 10),
            power_schedule: {
              on_time: "06:00",
              off_time: "22:00",
              weekend_mode: "reduced_hours"
              // 08:00-18:00
            },
            sleep_mode: predictableRandomInt(2) === 1,
            auto_rotation: false,
            screensaver: {
              enabled: true,
              timeout_minutes: 30,
              type: "clock_and_weather"
            }
          },
          // Content preferences
          content_settings: {
            allowed_categories: CONTENT_CATEGORIES.slice(0, predictableRandomInt(CONTENT_CATEGORIES.length, 3)).map((c2) => c2.id),
            prohibited_content: ["external_feeds", "social_media"],
            emergency_override: true,
            local_content_cache: true,
            max_file_size_mb: 50,
            supported_formats: ["jpg", "png", "mp4", "html", "pdf"]
          },
          // Maintenance and monitoring
          maintenance: {
            last_service: getUnixTime(subDays(Date.now(), predictableRandomInt(90, 7))),
            next_service: getUnixTime(addDays(Date.now(), predictableRandomInt(180, 30))),
            service_provider: "TechCorp Solutions",
            warranty_expiry: getUnixTime(addDays(Date.now(), predictableRandomInt(365, 180))),
            cleaning_schedule: "weekly",
            firmware_version: `v${predictableRandomInt(5, 1)}.${predictableRandomInt(9, 0)}.${predictableRandomInt(99, 10)}`,
            last_update: getUnixTime(subDays(Date.now(), predictableRandomInt(60, 7)))
          },
          // Analytics and usage
          analytics: {
            daily_views: predictableRandomInt(500, 50),
            interaction_count: orientation !== "portrait" ? predictableRandomInt(50, 5) : 0,
            content_engagement: `${predictableRandomInt(85, 45)}%`,
            error_count_24h: predictableRandomInt(3, 0),
            avg_content_display_time: predictableRandomInt(20, 8)
          },
          // Timestamps
          created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(365, 30))),
          updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
          last_seen: getUnixTime(subDays(Date.now(), predictableRandomInt(1, 0)))
        };
        displays.push(display);
        displayId++;
      }
    });
  });
  return displays;
}
function generateMockMedia() {
  const media = [];
  let mediaId = 1;
  CONTENT_TEMPLATES.forEach((template, templateIndex) => {
    const variations = predictableRandomInt(3, 2);
    for (let v = 0; v < variations; v++) {
      const mediaItem = {
        id: `media-${String(mediaId).padStart(3, "0")}`,
        name: `${template.title} ${v > 0 ? `v${v + 1}` : ""}`,
        description: template.description,
        category: template.category,
        type: MEDIA_TYPES[predictableRandomInt(MEDIA_TYPES.length)],
        // File details
        file: {
          filename: `${template.title.toLowerCase().replace(/\s+/g, "_")}_${mediaId}.${template.category === "weather" ? "html" : "jpg"}`,
          size_bytes: predictableRandomInt(5e6, 1e5),
          // 100KB - 5MB
          mime_type: template.category === "weather" ? "text/html" : "image/jpeg",
          url: `https://signage-assets.place.tech/media/${mediaId}`,
          thumbnail_url: `https://signage-assets.place.tech/thumbs/${mediaId}_thumb.jpg`,
          duration_seconds: template.duration / 1e3 || null
        },
        // Content metadata
        content: template.content,
        tags: [template.category, "corporate", "approved"],
        // Display properties
        display_properties: {
          duration_ms: template.duration,
          transition: ["fade", "slide_left", "slide_right", "zoom"][predictableRandomInt(4)],
          background_color: "#ffffff",
          text_color: "#333333",
          font_family: "Inter, sans-serif",
          font_size: "responsive",
          aspect_ratio: "16:9"
        },
        // Scheduling and targeting
        scheduling: {
          start_date: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 0))),
          end_date: getUnixTime(addDays(Date.now(), predictableRandomInt(90, 30))),
          time_slots: [
            { start: "06:00", end: "10:00", days: [1, 2, 3, 4, 5] },
            { start: "12:00", end: "14:00", days: [1, 2, 3, 4, 5] },
            { start: "16:00", end: "19:00", days: [1, 2, 3, 4, 5] }
          ],
          priority: template.category === "emergency" ? 10 : predictableRandomInt(5, 1),
          frequency: predictableRandomInt(3, 1)
          // times per hour
        },
        // Approval and compliance
        approval: {
          status: ["approved", "pending", "rejected"][template.category === "emergency" ? 0 : predictableRandomInt(3)],
          approved_by: "facilities.manager@place.tech",
          approved_date: getUnixTime(subDays(Date.now(), predictableRandomInt(14, 1))),
          compliance_checked: true,
          brand_guidelines: template.category !== "emergency"
        },
        // Analytics
        performance: {
          impressions: predictableRandomInt(5e3, 500),
          unique_views: predictableRandomInt(2e3, 200),
          engagement_rate: `${predictableRandomInt(75, 25)}%`,
          average_view_time: predictableRandomInt(template.duration / 1e3, 3),
          skip_rate: `${predictableRandomInt(15, 2)}%`
        },
        // Metadata
        created_by: "marketing.team@place.tech",
        created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(60, 7))),
        updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
        version: `v1.${v}`,
        status: "active"
      };
      media.push(mediaItem);
      mediaId++;
    }
  });
  return media;
}
function generateMockPlaylists(displays, media) {
  const playlists = [];
  let playlistId = 1;
  MOCK_BUILDINGS.forEach((building) => {
    const buildingDisplays = displays.filter((d) => d.building_id === building.id);
    const generalPlaylist = {
      id: `playlist-${String(playlistId).padStart(3, "0")}`,
      name: `${building.name} General Content`,
      description: `Default content rotation for all displays in ${building.name}`,
      // Content items (randomly select 5-8 media items)
      items: media.filter((m) => ["announcements", "corporate", "wellness"].includes(m.category)).sort(() => 0.5 - Math.random()).slice(0, predictableRandomInt(8, 5)).map((mediaItem, index) => ({
        id: `item-${playlistId}-${index + 1}`,
        media_id: mediaItem.id,
        order: index + 1,
        duration_override: null,
        start_date: mediaItem.scheduling.start_date,
        end_date: mediaItem.scheduling.end_date,
        conditions: {
          weather: null,
          occupancy: null,
          time_based: true
        }
      })),
      // Playlist settings
      settings: {
        loop: true,
        shuffle: false,
        auto_advance: true,
        emergency_interruption: true,
        volume_control: true,
        transition_effect: "fade",
        default_duration: 15e3
      },
      // Targeting
      target: {
        displays: buildingDisplays.map((d) => d.id),
        zones: [building.id],
        categories: ["lobby", "corridor", "general"]
      },
      // Scheduling
      schedule: {
        active_hours: {
          start: "06:00",
          end: "22:00",
          timezone: "Australia/Sydney"
        },
        days: [1, 2, 3, 4, 5],
        // Weekdays
        override_holidays: false
      },
      // Metadata
      created_by: "facilities.manager@place.tech",
      created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(30, 7))),
      updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(7, 0))),
      status: "active",
      priority: 5
    };
    playlists.push(generalPlaylist);
    playlistId++;
    if (predictableRandomInt(2) === 0) {
      const meetingPlaylist = {
        id: `playlist-${String(playlistId).padStart(3, "0")}`,
        name: `${building.name} Meeting Rooms`,
        description: `Content specifically for meeting room displays in ${building.name}`,
        items: media.filter((m) => ["events", "wayfinding", "announcements"].includes(m.category)).sort(() => 0.5 - Math.random()).slice(0, 4).map((mediaItem, index) => ({
          id: `item-${playlistId}-${index + 1}`,
          media_id: mediaItem.id,
          order: index + 1,
          duration_override: null,
          start_date: mediaItem.scheduling.start_date,
          end_date: mediaItem.scheduling.end_date
        })),
        target: {
          displays: buildingDisplays.filter((d) => d.location.area.includes("Meeting")).map((d) => d.id),
          zones: [building.id],
          categories: ["meeting_room"]
        },
        settings: {
          loop: true,
          auto_advance: true,
          emergency_interruption: true,
          show_room_schedule: true,
          integration: "calendar_api"
        },
        created_by: "it.admin@place.tech",
        created_at: getUnixTime(subDays(Date.now(), predictableRandomInt(21, 3))),
        updated_at: getUnixTime(subDays(Date.now(), predictableRandomInt(5, 0))),
        status: "active",
        priority: 7
      };
      playlists.push(meetingPlaylist);
      playlistId++;
    }
  });
  const emergencyPlaylist = {
    id: `playlist-emergency`,
    name: "Emergency Broadcast",
    description: "High-priority emergency communications for all displays",
    items: media.filter((m) => m.category === "emergency").map((mediaItem, index) => ({
      id: `emergency-item-${index + 1}`,
      media_id: mediaItem.id,
      order: index + 1,
      duration_override: null
    })),
    target: {
      displays: displays.map((d) => d.id),
      // All displays
      zones: ["zone-EmWFTjuYExK"],
      categories: ["emergency"]
    },
    settings: {
      loop: true,
      interrupt_all: true,
      max_volume: true,
      ignore_schedule: true,
      manual_dismiss_only: true
    },
    created_by: "security.manager@place.tech",
    created_at: getUnixTime(subDays(Date.now(), 100)),
    updated_at: getUnixTime(subDays(Date.now(), 50)),
    status: "standby",
    // Activated only during emergencies
    priority: 10
  };
  playlists.push(emergencyPlaylist);
  return playlists;
}
function generateMockTriggers() {
  return [
    {
      id: "trigger-001",
      name: "Emergency Alert System",
      description: "Automatically broadcast emergency content",
      type: "emergency",
      conditions: {
        api_endpoint: "/api/emergency/status",
        trigger_value: "active",
        check_interval: 30
        // seconds
      },
      actions: {
        activate_playlist: "playlist-emergency",
        interrupt_all: true,
        volume_override: 100,
        priority: 10
      },
      active: true,
      last_triggered: null
    },
    {
      id: "trigger-002",
      name: "Meeting Room Booking Update",
      description: "Update meeting room displays when bookings change",
      type: "calendar_sync",
      conditions: {
        calendar_change: true,
        check_interval: 300,
        // 5 minutes
        rooms_only: true
      },
      actions: {
        refresh_content: true,
        update_schedule_display: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 0.5))
    },
    {
      id: "trigger-003",
      name: "Weather Content Update",
      description: "Update weather displays every 30 minutes",
      type: "scheduled",
      conditions: {
        schedule: "*/30 * * * *",
        // Every 30 minutes
        weather_api: "https://api.weather.com/current"
      },
      actions: {
        update_weather_content: true,
        refresh_transport_info: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 0.02))
      // ~30 min ago
    },
    {
      id: "trigger-004",
      name: "After Hours Display Schedule",
      description: "Switch to minimal content outside business hours",
      type: "time_based",
      conditions: {
        time_range: { start: "22:00", end: "06:00" },
        weekends: true,
        holidays: true
      },
      actions: {
        activate_screensaver: true,
        reduce_brightness: 30,
        minimal_content: true
      },
      active: true,
      last_triggered: getUnixTime(subDays(Date.now(), 1))
    }
  ];
}
var MOCK_DISPLAYS = generateMockDisplays();
var MOCK_MEDIA = generateMockMedia();
var MOCK_PLAYLISTS = generateMockPlaylists(MOCK_DISPLAYS, MOCK_MEDIA);
var MOCK_TRIGGERS = generateMockTriggers();
function registerMockSignage() {
  MOCK_DISPLAYS.forEach((display, index) => {
    if (index < 10) {
      MOCK_ZONES.push({
        id: display.id,
        tags: ["signage", "display"],
        display_name: display.name.split(" ").slice(-2).join(" "),
        // Extract "Display A" from "Level 1 Display A"
        name: display.name,
        parent_id: display.building_id,
        description: display.description,
        hardware: display.hardware,
        status: display.status,
        location: display.location
      });
    }
  });
  Ko({
    path: "/api/staff/v1/signage-displays",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let displays = MOCK_DISPLAYS;
      if (request.query_params?.building_id) {
        displays = displays.filter((d) => d.building_id === request.query_params.building_id);
      }
      if (request.query_params?.status) {
        displays = displays.filter((d) => d.status === request.query_params.status);
      }
      if (request.query_params?.zone_id) {
        displays = displays.filter((d) => d.zone_id === request.query_params.zone_id);
      }
      return {
        data: displays,
        meta: {
          total: displays.length,
          online: displays.filter((d) => d.status === "online").length,
          offline: displays.filter((d) => d.status === "offline").length,
          error: displays.filter((d) => d.status === "error").length
        }
      };
    }
  });
  Ko({
    path: "/api/staff/v1/signage/displays/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      return display;
    }
  });
  Ko({
    path: "/api/staff/v1/signage/media",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let media = MOCK_MEDIA;
      if (request.query_params?.category) {
        media = media.filter((m) => m.category === request.query_params.category);
      }
      if (request.query_params?.status) {
        media = media.filter((m) => m.status === request.query_params.status);
      }
      if (request.query_params?.type) {
        media = media.filter((m) => m.type === request.query_params.type);
      }
      const page = parseInt(request.query_params?.page) || 1;
      const limit = parseInt(request.query_params?.limit) || 20;
      const offset = (page - 1) * limit;
      return {
        data: media.slice(offset, offset + limit),
        meta: {
          page,
          limit,
          total: media.length,
          pages: Math.ceil(media.length / limit),
          categories: CONTENT_CATEGORIES
        }
      };
    }
  });
  Ko({
    path: "/api/staff/v1/signage/playlists",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let playlists = MOCK_PLAYLISTS;
      if (request.query_params?.building_id) {
        playlists = playlists.filter((p) => p.target.zones.includes(request.query_params.building_id));
      }
      if (request.query_params?.status) {
        playlists = playlists.filter((p) => p.status === request.query_params.status);
      }
      return {
        data: playlists,
        meta: {
          total: playlists.length,
          active: playlists.filter((p) => p.status === "active").length,
          standby: playlists.filter((p) => p.status === "standby").length
        }
      };
    }
  });
  Ko({
    path: "/api/staff/v1/signage/playlists/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const playlist = MOCK_PLAYLISTS.find((p) => p.id === request.route_params.id);
      if (!playlist)
        throw { status: 404, message: "Playlist not found" };
      const playlistWithMedia = __spreadProps(__spreadValues({}, playlist), {
        items: playlist.items.map((item) => __spreadProps(__spreadValues({}, item), {
          media: MOCK_MEDIA.find((m) => m.id === item.media_id)
        }))
      });
      return playlistWithMedia;
    }
  });
  Ko({
    path: "/api/staff/v1/signage/triggers",
    metadata: {},
    method: "GET",
    callback: (request) => {
      let triggers = MOCK_TRIGGERS;
      if (request.query_params?.type) {
        triggers = triggers.filter((t) => t.type === request.query_params.type);
      }
      if (request.query_params?.active !== void 0) {
        const isActive = request.query_params.active === "true";
        triggers = triggers.filter((t) => t.active === isActive);
      }
      return {
        data: triggers,
        meta: {
          total: triggers.length,
          active: triggers.filter((t) => t.active).length,
          inactive: triggers.filter((t) => !t.active).length
        }
      };
    }
  });
  Ko({
    path: "/api/staff/v1/signage/displays/:id/content",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      const activePlaylist = MOCK_PLAYLISTS.find((p) => p.status === "active" && p.target.displays.includes(display.id));
      if (!activePlaylist) {
        return { message: "No active content for this display" };
      }
      const currentItem = activePlaylist.items[predictableRandomInt(activePlaylist.items.length)];
      const media = MOCK_MEDIA.find((m) => m.id === currentItem.media_id);
      return {
        display_id: display.id,
        current_content: {
          playlist: activePlaylist,
          item: currentItem,
          media,
          started_at: (/* @__PURE__ */ new Date()).toISOString(),
          remaining_time: media?.file.duration_seconds || 15
        },
        next_content: activePlaylist.items[(activePlaylist.items.indexOf(currentItem) + 1) % activePlaylist.items.length]
      };
    }
  });
  Ko({
    path: "/api/staff/v1/signage-analytics",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const timeframe = request.query_params?.timeframe || "7d";
      const building_id = request.query_params?.building_id;
      let displays = MOCK_DISPLAYS;
      if (building_id) {
        displays = displays.filter((d) => d.building_id === building_id);
      }
      return {
        timeframe,
        summary: {
          total_displays: displays.length,
          online_displays: displays.filter((d) => d.status === "online").length,
          total_impressions: displays.reduce((sum, d) => sum + d.analytics.daily_views, 0) * (timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : 1),
          average_uptime: "99.2%",
          content_items_served: MOCK_MEDIA.length * displays.length * 24
        },
        performance: displays.map((display) => ({
          display_id: display.id,
          display_name: display.name,
          uptime: `${100 - predictableRandomInt(5)}%`,
          impressions: display.analytics.daily_views * (timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : 1),
          engagement: display.analytics.content_engagement,
          errors: display.analytics.error_count_24h
        })),
        content_performance: MOCK_MEDIA.slice(0, 10).map((media) => ({
          media_id: media.id,
          media_name: media.name,
          impressions: media.performance.impressions,
          engagement_rate: media.performance.engagement_rate,
          average_view_time: media.performance.average_view_time
        })),
        health_alerts: displays.filter((d) => d.status !== "online").map((display) => ({
          display_id: display.id,
          display_name: display.name,
          alert_type: display.status,
          message: display.status === "offline" ? "Display is not responding" : display.status === "error" ? "Hardware error detected" : "Maintenance mode active",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }))
      };
    }
  });
  Ko({
    path: "/api/staff/v1/signage-displays/:id/control",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const display = MOCK_DISPLAYS.find((d) => d.id === request.route_params.id);
      if (!display)
        throw { status: 404, message: "Display not found" };
      const action = request.body?.action;
      const validActions = [
        "power_on",
        "power_off",
        "restart",
        "refresh_content",
        "update_brightness",
        "update_volume"
      ];
      if (!validActions.includes(action)) {
        throw { status: 400, message: "Invalid action" };
      }
      return {
        display_id: display.id,
        action,
        status: "success",
        message: `Action ${action} executed successfully`,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
  });
}

// libs/mocks/src/lib/api/surveys.mock.ts
var MOCK_SURVEYS = [
  {
    id: 1,
    title: "Employee Satisfaction Survey",
    description: "Annual survey to assess employee satisfaction and workplace culture",
    trigger: "quarterly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-G",
    pages: [
      {
        title: "Job Satisfaction",
        description: "Questions about your current role and responsibilities",
        question_order: [1, 2, 3]
      },
      {
        title: "Work Environment",
        description: "Questions about your workplace and facilities",
        question_order: [4, 5, 6]
      }
    ]
  },
  {
    id: 2,
    title: "Facility Feedback Survey",
    description: "Help us improve our office facilities and amenities",
    trigger: "monthly",
    building_id: "bld-02",
    zone_id: "bld-02_lvl-2",
    pages: [
      {
        title: "Office Facilities",
        description: "Rate your experience with our office facilities",
        question_order: [7, 8, 9]
      }
    ]
  },
  {
    id: 3,
    title: "Meeting Room Experience",
    description: "Quick feedback about your meeting room experience",
    trigger: "after_booking",
    building_id: "bld-03",
    zone_id: "bld-03_lvl-1",
    pages: [
      {
        title: "Room Quality",
        description: "How was your meeting room experience?",
        question_order: [10, 11]
      }
    ]
  },
  {
    id: 4,
    title: "Melbourne Office Feedback",
    description: "Help us improve the Melbourne office experience",
    trigger: "monthly",
    building_id: "bld-04",
    zone_id: "bld-04_lvl-1",
    pages: [
      {
        title: "Office Environment",
        description: "Rate your Melbourne office experience",
        question_order: [12, 13, 14]
      }
    ]
  },
  {
    id: 5,
    title: "Innovation Lab Usage Survey",
    description: "Feedback on research and development facilities",
    trigger: "quarterly",
    building_id: "bld-05",
    zone_id: "bld-05_lvl-2",
    pages: [
      {
        title: "Lab Facilities",
        description: "How are you finding the innovation lab?",
        question_order: [15, 16]
      }
    ]
  },
  {
    id: 6,
    title: "Parking Experience Survey",
    description: "Help us improve parking facilities",
    trigger: "weekly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-P1",
    pages: [
      {
        title: "Parking Quality",
        description: "Rate your parking experience",
        question_order: [17, 18]
      }
    ]
  },
  {
    id: 7,
    title: "Comprehensive Feedback Survey",
    description: "A survey with all question types for testing",
    trigger: "monthly",
    building_id: "bld-01",
    zone_id: "bld-01_lvl-1",
    pages: [
      {
        title: "Page 1 - Ratings and Text",
        description: "Rate your experience and provide text feedback",
        question_order: [19, 20, 21]
      },
      {
        title: "Page 2 - Selections",
        description: "Select from various options",
        question_order: [22, 23, 24]
      }
    ]
  }
];
var MOCK_QUESTIONS = [
  {
    id: 1,
    title: "How satisfied are you with your current role?",
    description: "Rate your overall job satisfaction",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Very Dissatisfied",
        "Dissatisfied",
        "Neutral",
        "Satisfied",
        "Very Satisfied"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["job-satisfaction", "role"],
    deleted: false
  },
  {
    id: 2,
    title: "Do you feel valued by your supervisor?",
    description: "How valued do you feel by your direct supervisor?",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: ["Always", "Often", "Sometimes", "Rarely", "Never"],
    tags: ["supervisor", "recognition"],
    deleted: false
  },
  {
    id: 3,
    title: "What could we improve about your work experience?",
    description: "Please share any suggestions for improvement",
    type: "text",
    options: { multiline: true, max_length: 500 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["feedback", "improvement"],
    deleted: false
  },
  {
    id: 4,
    title: "Rate the cleanliness of the office",
    description: "How would you rate the overall cleanliness?",
    type: "rating",
    options: { min: 1, max: 10 },
    required: true,
    max_rating: 10,
    choices: [],
    tags: ["cleanliness", "office"],
    deleted: false
  },
  {
    id: 5,
    title: "Is the temperature comfortable in your work area?",
    description: "Rate the temperature comfort level",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      "Too Cold",
      "Slightly Cold",
      "Just Right",
      "Slightly Warm",
      "Too Warm"
    ],
    tags: ["temperature", "comfort"],
    deleted: false
  },
  {
    id: 6,
    title: "How would you rate the noise level?",
    description: "Is the office noise level appropriate for work?",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Too Quiet",
        "Slightly Quiet",
        "Perfect",
        "Slightly Noisy",
        "Too Noisy"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["noise", "environment"],
    deleted: false
  },
  {
    id: 7,
    title: "Rate the kitchen facilities",
    description: "How satisfied are you with the kitchen and dining areas?",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["kitchen", "facilities"],
    deleted: false
  },
  {
    id: 8,
    title: "Which amenities do you use most?",
    description: "Select all that apply",
    type: "checkbox",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      { text: "Coffee machine" },
      { text: "Microwave" },
      { text: "Refrigerator" },
      { text: "Water cooler" },
      { text: "Vending machines" },
      { text: "Recreation area" }
    ],
    tags: ["amenities", "usage"],
    deleted: false
  },
  {
    id: 9,
    title: "Additional facility suggestions",
    description: "What other facilities would you like to see?",
    type: "text",
    options: { multiline: true, max_length: 300 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["suggestions", "facilities"],
    deleted: false
  },
  {
    id: 10,
    title: "Rate the meeting room quality",
    description: "Overall quality of the meeting room you used",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["meeting-room", "quality"],
    deleted: false
  },
  {
    id: 11,
    title: "Were all technical equipment working properly?",
    description: "Screen, projector, video conferencing, etc.",
    type: "multiple_choice",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      "Yes, everything worked perfectly",
      "Most things worked",
      "Some issues but manageable",
      "Major technical problems"
    ],
    tags: ["technical", "equipment"],
    deleted: false
  },
  {
    id: 12,
    title: "How would you rate the Melbourne office atmosphere?",
    description: "Overall atmosphere and culture in Melbourne",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["atmosphere", "culture", "melbourne"],
    deleted: false
  },
  {
    id: 13,
    title: "What do you like most about the Melbourne office?",
    description: "Share what you enjoy about working here",
    type: "text",
    options: { multiline: true, max_length: 400 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["feedback", "positive", "melbourne"],
    deleted: false
  },
  {
    id: 14,
    title: "How often do you use the gym facilities?",
    description: "Frequency of gym usage",
    type: "multiple_choice",
    options: {},
    required: false,
    max_rating: 0,
    choices: ["Daily", "Few times a week", "Weekly", "Monthly", "Never"],
    tags: ["gym", "facilities", "usage"],
    deleted: false
  },
  {
    id: 15,
    title: "Rate the innovation lab equipment",
    description: "Quality and availability of lab equipment",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["equipment", "innovation", "lab"],
    deleted: false
  },
  {
    id: 16,
    title: "What additional equipment would be helpful?",
    description: "Suggestions for new lab equipment or tools",
    type: "text",
    options: { multiline: true, max_length: 300 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["equipment", "suggestions", "innovation"],
    deleted: false
  },
  {
    id: 17,
    title: "How easy is it to find parking?",
    description: "Rate the ease of finding a parking spot",
    type: "rating",
    options: {
      min: 1,
      max: 5,
      labels: [
        "Very Difficult",
        "Difficult",
        "Neutral",
        "Easy",
        "Very Easy"
      ]
    },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["parking", "availability"],
    deleted: false
  },
  {
    id: 18,
    title: "Do you use EV charging stations?",
    description: "Electric vehicle charging usage",
    type: "multiple_choice",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      "Yes, regularly",
      "Yes, occasionally",
      "No, but would like to",
      "No, not needed"
    ],
    tags: ["ev-charging", "parking", "sustainability"],
    deleted: false
  },
  // Comprehensive survey questions (19-24)
  {
    id: 19,
    title: "Overall satisfaction rating",
    description: "Rate your overall satisfaction from 1 to 5",
    type: "rating",
    options: { min: 1, max: 5 },
    required: true,
    max_rating: 5,
    choices: [],
    tags: ["satisfaction", "comprehensive"],
    deleted: false
  },
  {
    id: 20,
    title: "Your name",
    description: "Please enter your name",
    type: "text",
    options: { max_length: 100 },
    required: true,
    max_rating: 0,
    choices: [],
    tags: ["name", "comprehensive"],
    deleted: false
  },
  {
    id: 21,
    title: "Additional comments",
    description: "Please share any additional feedback",
    type: "comment",
    options: { multiline: true, max_length: 500 },
    required: false,
    max_rating: 0,
    choices: [],
    tags: ["comments", "comprehensive"],
    deleted: false
  },
  {
    id: 22,
    title: "Preferred contact method",
    description: "How would you like us to contact you?",
    type: "dropdown",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      { text: "Email" },
      { text: "Phone" },
      { text: "In Person" },
      { text: "No Contact" }
    ],
    tags: ["contact", "comprehensive"],
    deleted: false
  },
  {
    id: 23,
    title: "Preferred time of day",
    description: "When is the best time to reach you?",
    type: "radiogroup",
    options: {},
    required: true,
    max_rating: 0,
    choices: [
      { text: "Morning (9am - 12pm)" },
      { text: "Afternoon (12pm - 5pm)" },
      { text: "Evening (5pm - 8pm)" }
    ],
    tags: ["time", "comprehensive"],
    deleted: false
  },
  {
    id: 24,
    title: "Topics of interest",
    description: "Select all topics that interest you",
    type: "checkbox",
    options: {},
    required: false,
    max_rating: 0,
    choices: [
      { text: "Workplace improvements" },
      { text: "New facilities" },
      { text: "Team events" },
      { text: "Training opportunities" }
    ],
    tags: ["interests", "comprehensive"],
    deleted: false
  }
];
var MOCK_ANSWERS = [
  {
    id: 1,
    question_id: 1,
    survey_id: 1,
    type: "rating",
    answer_json: { rating: 4, comment: "Generally satisfied with my role" }
  },
  {
    id: 2,
    question_id: 2,
    survey_id: 1,
    type: "multiple_choice",
    answer_json: { choice: "Often", index: 1 }
  },
  {
    id: 3,
    question_id: 3,
    survey_id: 1,
    type: "text",
    answer_json: { text: "More flexible working hours would be great." }
  },
  {
    id: 4,
    question_id: 4,
    survey_id: 2,
    type: "rating",
    answer_json: { rating: 8 }
  },
  {
    id: 5,
    question_id: 5,
    survey_id: 2,
    type: "multiple_choice",
    answer_json: { choice: "Just Right", index: 2 }
  },
  {
    id: 6,
    question_id: 10,
    survey_id: 3,
    type: "rating",
    answer_json: {
      rating: 5,
      comment: "Excellent meeting room experience"
    }
  },
  {
    id: 7,
    question_id: 11,
    survey_id: 3,
    type: "multiple_choice",
    answer_json: { choice: "Yes, everything worked perfectly", index: 0 }
  },
  {
    id: 8,
    question_id: 12,
    survey_id: 4,
    type: "rating",
    answer_json: { rating: 4, comment: "Great atmosphere in Melbourne" }
  },
  {
    id: 9,
    question_id: 13,
    survey_id: 4,
    type: "text",
    answer_json: {
      text: "Love the city views and the collaborative spaces"
    }
  },
  {
    id: 10,
    question_id: 15,
    survey_id: 5,
    type: "rating",
    answer_json: { rating: 5, comment: "Excellent lab equipment" }
  },
  {
    id: 11,
    question_id: 17,
    survey_id: 6,
    type: "rating",
    answer_json: { rating: 3 }
  },
  {
    id: 12,
    question_id: 18,
    survey_id: 6,
    type: "multiple_choice",
    answer_json: { choice: "Yes, occasionally", index: 1 }
  }
];
function registerMockSurveys() {
  Ko({
    path: "/api/staff/v1/surveys",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredSurveys = [...MOCK_SURVEYS];
      if (query_params?.building_id) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.building_id === query_params.building_id);
      }
      if (query_params?.zone_id) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.zone_id === query_params.zone_id);
      }
      if (query_params?.trigger) {
        filteredSurveys = filteredSurveys.filter((survey) => survey.trigger === query_params.trigger);
      }
      return filteredSurveys;
    }
  });
  Ko({
    path: "/api/staff/v1/surveys/questions",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredQuestions = MOCK_QUESTIONS.filter((q) => !q.deleted);
      if (query_params?.survey_id) {
        const surveyId = parseInt(query_params.survey_id);
        const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
        if (survey) {
          const questionIds = survey.pages.flatMap((page) => page.question_order);
          filteredQuestions = filteredQuestions.filter((q) => questionIds.includes(q.id));
        }
      }
      if (query_params?.type) {
        filteredQuestions = filteredQuestions.filter((q) => q.type === query_params.type);
      }
      if (query_params?.tags) {
        const searchTags = Array.isArray(query_params.tags) ? query_params.tags : [query_params.tags];
        filteredQuestions = filteredQuestions.filter((q) => searchTags.some((tag) => q.tags.includes(tag)));
      }
      return filteredQuestions;
    }
  });
  Ko({
    path: "/api/staff/v1/surveys/questions/:id",
    metadata: {},
    method: "GET",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const questionId = parseInt(request.route_params?.id);
      const question = MOCK_QUESTIONS.find((q) => q.id === questionId && !q.deleted);
      if (!question) {
        throw new Error("Question not found");
      }
      return question;
    }
  });
  Ko({
    path: "/api/staff/v1/surveys/answers",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const { query_params } = request;
      let filteredAnswers = [...MOCK_ANSWERS];
      if (query_params?.survey_id) {
        const surveyId = parseInt(query_params.survey_id);
        filteredAnswers = filteredAnswers.filter((answer) => answer.survey_id === surveyId);
      }
      if (query_params?.question_id) {
        const questionId = parseInt(query_params.question_id);
        filteredAnswers = filteredAnswers.filter((answer) => answer.question_id === questionId);
      }
      if (query_params?.type) {
        filteredAnswers = filteredAnswers.filter((answer) => answer.type === query_params.type);
      }
      return filteredAnswers;
    }
  });
  Ko({
    path: "/api/staff/v1/surveys/answers/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const answerId = parseInt(request.route_params?.id);
      const answer = MOCK_ANSWERS.find((a) => a.id === answerId);
      if (!answer) {
        throw new Error("Answer not found");
      }
      return answer;
    }
  });
  Ko({
    path: "/api/staff/v1/surveys/:id",
    metadata: {},
    method: "GET",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const surveyId = parseInt(request.route_params?.id);
      const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
      if (!survey) {
        throw new Error("Survey not found");
      }
      return survey;
    }
  });
  Ko({
    path: "/api/staff/v1/surveys/answers",
    metadata: {},
    method: "POST",
    delay: 50,
    delay_variance: 10,
    callback: (request) => {
      const body = request.body;
      const answers = Array.isArray(body) ? body : [body];
      const created_answers = [];
      for (const answer of answers) {
        const new_id = Math.max(...MOCK_ANSWERS.map((a) => a.id), 0) + 1;
        const new_answer = {
          id: new_id,
          survey_id: answer.survey_id,
          question_id: answer.question_id,
          type: answer.type,
          answer_json: answer.answer_json
        };
        MOCK_ANSWERS.push(new_answer);
        created_answers.push(new_answer);
      }
      return created_answers.length === 1 ? created_answers[0] : created_answers;
    }
  });
}

// libs/mocks/src/lib/realtime/camera.ts
var CameraTilt;
(function(CameraTilt2) {
  CameraTilt2[CameraTilt2["Down"] = 0] = "Down";
  CameraTilt2[CameraTilt2["Up"] = 1] = "Up";
  CameraTilt2[CameraTilt2["Stop"] = 2] = "Stop";
})(CameraTilt || (CameraTilt = {}));
var CameraPan;
(function(CameraPan2) {
  CameraPan2[CameraPan2["Left"] = 0] = "Left";
  CameraPan2[CameraPan2["Right"] = 1] = "Right";
  CameraPan2[CameraPan2["Stop"] = 2] = "Stop";
})(CameraPan || (CameraPan = {}));
var CameraModule = class {
  constructor(_) {
    this.pan = 0;
    this.tilt = 0;
    this.zoom = 50;
    this.pan_speed = 5;
    this.tilt_speed = 5;
    this.zoom_speed = 5;
    this.moving = false;
    this.presets = ["Preset One", "Preset 2", "Preset Three", "Wide Shot", "Close Up"];
  }
  $pan(dir) {
    if (dir === CameraPan.Left) {
      this.pan = Math.max(-100, this.pan - this.pan_speed);
    } else if (dir === CameraPan.Right) {
      this.pan = Math.min(100, this.pan + this.pan_speed);
    }
    this.moving = dir !== CameraPan.Stop;
  }
  $tilt(dir) {
    if (dir === CameraTilt.Up) {
      this.tilt = Math.min(100, this.tilt + this.tilt_speed);
    } else if (dir === CameraTilt.Down) {
      this.tilt = Math.max(-100, this.tilt - this.tilt_speed);
    }
    this.moving = dir !== CameraTilt.Stop;
  }
  $zoom(direction) {
    if (direction === "in") {
      this.zoom = Math.min(100, this.zoom + this.zoom_speed);
    } else if (direction === "out") {
      this.zoom = Math.max(0, this.zoom - this.zoom_speed);
    }
  }
  $recall(name) {
    if (this.presets.includes(name)) {
      this.pan = 0;
      this.tilt = 0;
      this.zoom = 50;
    }
  }
  $save_preset(name) {
    if (!this.presets.includes(name)) {
      this.presets = [...this.presets, name];
    }
  }
};
var createCameraModule = (space, overrides = {}) => new CameraModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/capture.ts
var interval;
var CaptureModule = class {
  constructor(_) {
    this.status = "stopped";
    this.live = false;
    this.remaining = randomInt(24 * 60 * 60);
  }
  $start() {
    this.status = "playing";
    interval = setInterval(() => {
      if (this.remaining < 1)
        clearInterval(interval);
      this.remaining = this.remaining - 1;
      this.current = this.current + 1;
    }, 3e3);
  }
  $pause() {
    this.status = "paused";
    clearInterval(interval);
  }
  $resume() {
    this.$start();
  }
  $stop() {
    this.status = "stopped";
    this.current = 0;
    clearInterval(interval);
  }
};
var createCaptureModule = (space, overrides = {}) => new CaptureModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/contact-tracing.ts
var CONTACT_EVENTS = {};
var filterFn = (start, end) => (itm) => {
  return timePeriodsIntersect(start, end, itm.contact_time, itm.contact_time);
};
var ContactTracingModule = class {
  constructor(_) {
  }
  $close_contacts(email, user, start, end) {
    if (!CONTACT_EVENTS[email])
      CONTACT_EVENTS[email] = [];
    if (CONTACT_EVENTS[email].length)
      return CONTACT_EVENTS[email].filter(filterFn(start, end));
    const events = [];
    const beginning = addDays(start * 1e3, -10);
    const ending = addDays(end * 1e3, 10);
    let date = new Date(beginning);
    while (isBefore(date, ending)) {
      new Array(randomInt(4)).fill(0).map((_) => ({
        mac_address: randomString(10),
        contact_time: getUnixTime(setHours(date, randomInt(11) + 7)),
        duration: randomInt(60) * 60,
        username: MOCK_STAFF[randomInt(MOCK_STAFF.length)].email
      })).forEach((e) => events.push(e));
      date = addDays(date, 1);
    }
    CONTACT_EVENTS[email] = events;
    return CONTACT_EVENTS[email].filter(filterFn(start, end));
  }
};
var createContactTracingModule = (space, overrides = {}) => new ContactTracingModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/control.ts
var RoomModule = class {
  constructor(_data) {
    this.lighting_scenes = ["Off", "Presentation", "Meeting", "Full"];
    this.lighting_scene = "Off";
    this.lighting_levels = {
      zone1: 50,
      zone2: 75,
      zone3: 100
    };
    this.available_cameras = [
      "Camera_1",
      "Camera_2",
      "Camera_3",
      "Camera_4"
    ];
    this.selected_camera = "Camera_1";
    this.microphones = ["Microphone_1", "Microphone_2", "Microphone_3"];
    this.join_modes = {
      independent: "Independent",
      combined: "Combined Mode",
      overflow: "Overflow Mode"
    };
    this.joined = { room_ids: [] };
    this.join_lockout_secondary = false;
    this.room_accessories = [
      {
        id: "blind1",
        name: "Window Blinds",
        icon: "blinds",
        states: ["Open", "Closed", "Half"],
        state: "Open"
      },
      {
        id: "screen1",
        name: "Projector Screen",
        icon: "screen_share",
        states: ["Up", "Down"],
        state: "Up"
      }
    ];
    this.voice_control = true;
    this.dial_bindings = {
      module: "QSC",
      index: 1
    };
    this.offhook = false;
    this.ringing = false;
    this.has_master_audio = true;
    this.mute = false;
    this.meeting_url = "https://meet.example.com/room-123";
    this.hide_join_button = false;
    this.hide_present_all = false;
    this.preview_outputs = ["Display1", "Display2"];
    this.help = {
      help: {
        title: "Help",
        content: `
# Using the asset browser

## Activating the menu
The 5 finger touch can be actvated by placing 4 fingers and your thumb on the screen, or quickly double-tapping the screen. Activation through double tap will leave the menu on-screen. To close tap the \u2018X\u2019.

## Selecting a menu item
Leaving at least one finger on the screen, drag your finger to the icon to select.

## Home Menu
The home menu allows you to access files and navigate to content and presentations via the Launcher.

## Connect and stream your laptop or access the CMS to add files
Plug your laptop into the HDMI to stream it to the screen, or access the CMS to add your own content and create custom presentations.

<video></video>

1. Test1
2. Test2
3. Test3
            `
      },
      "laptop-help": {
        icon: "web_asset",
        title: "Asset Browser",
        content: `# Test 2`
      }
    };
    this.tabs = [
      {
        icon: "laptop",
        name: "Laptop",
        type: "Laptop"
      },
      {
        icon: "call",
        name: "VC",
        inputs: ["VidConf_1"],
        help: "vidconf-help",
        controls: "vidconf-controls"
      }
    ];
    this.volume = 0;
    this.name = _data.name || "Test Module";
    this.connected = _data.connected ?? true;
    this.active = _data.active || false;
    this.input_list = _data.input_list;
    this.output_list = _data.output_list;
    this.env_sources = _data.env_sources || [];
    this.inputs = Object.keys(this.input_list || {}) || [];
    this.outputs = Object.keys(this.output_list || {}) || [];
    this.available_outputs = this.outputs;
    const types = unique(this.env_sources.map((_) => _.type)) || [];
    types.forEach((t) => this[`${t}`] = this.env_sources.filter((_) => _.type === t).map((_) => _.id));
    this.env_sources.forEach((source) => this[`${source.type}/${source.id}`] = source);
    this.inputs.forEach((key) => this[`input/${key}`] = this.input_list[key]);
    this.outputs.forEach((key) => this[`output/${key}`] = this.output_list[key]);
  }
  $power(state = true) {
    this.active = state;
  }
  /** Shares a signal source with the room and any connected remote participants. */
  $share() {
  }
  /**
   * Connect a signal source to a signal output, or set of outputs. Any intermediate
   * device interactions are handled internally. For example, on a system using a small
   * presentation switcher and a display, routing a laptop input will select the
   * appropriate input on the switcher, and select the appropriate input on the display.
   *
   * This includes all routable signal types - in addition to the above example, this may
   * be interacting with an audio DSP to add a microphone feed to an output zone, or
   * connecting a USB HID input device with a specific output.
   **/
  $route(input, output) {
    if (this.inputs.includes(input) && this.outputs.includes(output)) {
      this.$updateState(input, {
        routes: unique([
          ...this.input_list[input].routes || [],
          output
        ])
      });
      this.$updateState(output, {
        source: input,
        following: input
      });
    }
  }
  /**
   * Remove a signal source from a signal output.
   * Predominantly intended for outputs that support more than one simultaneous input source
   * (mixed audio zone, or display capable of compositing multiple video sources).
   **/
  $unroute() {
  }
  /**
   * Establish a call (either phone or video) with a remote participant.
   * This may be a peer-to-peer connection or a wider group via an external bridging service.
   **/
  $connect() {
  }
  /** End a call with a remote participant. */
  $disconnect() {
  }
  /**
   * Bind the current system to another PlaceOS controlled space, relinquishing local control.
   * This may be used for an education pod that pairs with a wider classroom or a room being
   * used as an overflow from a primary event space.
   **/
  $link() {
  }
  /**
   * Join the current system with another PlaceOS controlled space, sharing control and signal IO.
   * Examples of usage would be a set of rooms with moveable walls. N-way merges supported.
   **/
  $merge() {
  }
  /** Separate from a linked or merged system. */
  $split() {
  }
  /**
   * Display an alert visible to participants in the space. This may occur as a screen overlay,
   * on a control interface, a bot post in a chat space associated with the current meeting or
   * other modalities depending on hardware capability.
   **/
  $notify() {
  }
  /**
   * Place the room into a predefined operation mode. This may include executing an arbitrary
   * set of device interactions, changing metadata associated with the system itself (changing
   * available input or output nodes), or other configurable actions designed to transition
   * the space to a specific state.
   **/
  $preset() {
  }
  /**
   * Set the volume for a signal node in the space. This can include outputs as well as inputs
   * where supported (e.g. microphone). If unspecified, default is to interact with a ‘primary’
   * output node.
   **/
  $volume(value, source = "all") {
    if (source === "all") {
      this.volume = value;
    }
  }
  /** Interact with audio muting on supporting signal nodes within the space. */
  $mute(state = true, source = "all") {
    this.$updateState(source, { mute: state });
  }
  /**
   * Activates or deactivates a signal mute for the associated IO. If this is not possible,
   * (e.g. unsupported by the device) an error is returned.
   **/
  $unmute(source = "all") {
    this.$mute(false, source);
  }
  /**
   * Wrapper for an arbitrary set of control points defined in system configuration.
   * Each of these may map to control options available on a sibling module and take one of two forms:
   *  - Continuous value within a range (temperature set point 16.0...28.0 degrees, lighting level 0...100)
   *  - Set of possible states (lighting high/med/low, blind up/down, electrochromic glass clear/opaque)
   *
   * System state provides the ability to introspect configured points for both control limits and current value.
   **/
  $environment(id, state) {
    const source = this.env_sources.find((_) => _.id === id);
    if (source) {
      this[`${source.type}/${source.id}`] = __spreadProps(__spreadValues({}, source), { state });
    }
  }
  /** Locks an IO node. Prevents any route changes that include this until unlocked. */
  $lock(source) {
    this.$updateState(source, { locked: true });
  }
  /** Unlocks an IO node. */
  $unlock(source) {
    this.$updateState(source, { locked: false });
  }
  /** Set the lighting scene */
  $set_lighting_scene(scene) {
    if (this.lighting_scenes.includes(scene)) {
      this.lighting_scene = scene;
      const light_source = this.env_sources.find((_) => _.type === "lights");
      if (light_source) {
        this[`${light_source.type}/${light_source.id}`] = __spreadProps(__spreadValues({}, light_source), {
          state: scene
        });
      }
    }
  }
  /** Set lighting level for a zone */
  $set_lighting_level(zone, level) {
    if (this.lighting_levels[zone] !== void 0) {
      this.lighting_levels = __spreadProps(__spreadValues({}, this.lighting_levels), { [zone]: level });
    }
  }
  /** Select a camera */
  $select_camera(camera_id) {
    if (this.available_cameras.includes(camera_id)) {
      this.selected_camera = camera_id;
    }
  }
  /** Join rooms with a specific mode */
  $join_rooms(mode, room_ids = []) {
    if (this.join_modes[mode]) {
      this.joined = { room_ids, mode };
    }
  }
  /** Separate joined rooms */
  $separate_rooms() {
    this.joined = { room_ids: [] };
  }
  /** Control a room accessory */
  $set_accessory_state(accessory_id, state) {
    const accessory = this.room_accessories.find((_) => _.id === accessory_id);
    if (accessory && accessory.states.includes(state)) {
      accessory.state = state;
      this.room_accessories = [...this.room_accessories];
    }
  }
  /** Dial a phone number */
  $dial_phone(number) {
    this.offhook = true;
    return new Promise((r) => setTimeout(() => r(), 1e3));
  }
  /** Hangup phone call */
  $hangup_phone() {
    this.offhook = false;
    this.ringing = false;
  }
  $updateState(source, data) {
    if (this[`input/${source}`]) {
      this[`input/${source}`] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
      this.input_list[source] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
    } else if (this[`output/${source}`]) {
      this[`output/${source}`] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
      this.output_list[source] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
    }
  }
};
var input_list = {
  Mic1: {
    name: "Lectern Mic",
    type: "Microphone",
    mod: "Microphone_1"
  },
  Mic2: {
    name: "Lapel Mic",
    type: "Microphone",
    mod: "Microphone_2"
  },
  Mic3: {
    name: "Handheld Mic",
    type: "Microphone",
    mod: "Microphone_3"
  },
  PC1: {
    name: "PC-1",
    type: "PC"
  },
  PC2: {
    name: "PC-2",
    type: "PC"
  },
  PC3: {
    name: "PC-3",
    type: "PC"
  },
  PC4: {
    name: "PC-4",
    type: "PC"
  },
  HDMI: {
    name: "Laptop HDMI",
    type: "Laptop"
  },
  VGA: {
    name: "Laptop VGA",
    type: "Laptop"
  },
  Camera1: {
    name: "Camera Rear",
    type: "Camera",
    mod: "Camera_1"
  },
  Camera2: {
    name: "Camera Front",
    type: "Camera",
    mod: "Camera_2"
  },
  Camera3: {
    name: "Camera Rear 2",
    type: "Camera",
    mod: "Camera_3"
  },
  Camera4: {
    name: "Camera Front 2",
    type: "Camera",
    mod: "Camera_4"
  },
  TV1: {
    name: "IPTV 1",
    type: "TV",
    mod: "IPTV_1"
  },
  VC1: {
    name: "Video Conference 1",
    type: "VC",
    mod: "VidConf_1"
  }
};
var output_list = {
  Display1: {
    name: "Screen 1",
    type: "Display",
    source: "PC1",
    mod: "Display_1"
  },
  Display2: {
    name: "Screen 2",
    type: "Display",
    mod: "Display_2"
  },
  Display5: {
    name: "TV 1",
    type: "Display",
    mod: "Display_5",
    source: "TV1"
  }
};
var env_sources = [
  {
    id: "light1",
    name: "Lighting",
    type: "lights",
    states: ["Off", "Presentation", "Meeting", "Full"],
    state: "Off"
  },
  {
    id: "blind1",
    name: "Blinds",
    type: "blinds",
    states: ["Off", "Presentation", "Meeting"],
    state: "Off"
  },
  {
    id: "screen1",
    name: "Screen",
    type: "screen",
    states: ["Up", "Down"],
    state: "Down"
  }
];
var createSystemModule = (space, overrides = {}) => new RoomModule(__spreadValues(__spreadProps(__spreadValues({}, space), {
  input_list,
  output_list,
  env_sources
}), overrides));

// node_modules/ts-md5/dist/index.es.js
var c = new Int32Array(4);
var h = class _h {
  static hashStr(i, a = false) {
    return this.onePassHasher.start().appendStr(i).end(a);
  }
  static hashAsciiStr(i, a = false) {
    return this.onePassHasher.start().appendAsciiStr(i).end(a);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new _h();
  static _hex(i) {
    const a = _h.hexChars, t = _h.hexOut;
    let e, s, r, n;
    for (n = 0; n < 4; n += 1)
      for (s = n * 8, e = i[n], r = 0; r < 8; r += 2)
        t[s + 1 + r] = a.charAt(e & 15), e >>>= 4, t[s + 0 + r] = a.charAt(e & 15), e >>>= 4;
    return t.join("");
  }
  static _md5cycle(i, a) {
    let t = i[0], e = i[1], s = i[2], r = i[3];
    t += (e & s | ~e & r) + a[0] - 680876936 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[1] - 389564586 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[3] - 1044525330 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[4] - 176418897 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[5] + 1200080426 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[7] - 45705983 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[8] + 1770035416 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[9] - 1958414417 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[10] - 42063 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[11] - 1990404162 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[12] + 1804603682 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[13] - 40341101 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[15] + 1236535329 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & r | s & ~r) + a[1] - 165796510 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[6] - 1069501632 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[0] - 373897302 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[5] - 701558691 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[10] + 38016083 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[4] - 405537848 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[9] + 568446438 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[14] - 1019803690 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[8] + 1163531501 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[13] - 1444681467 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[2] - 51403784 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[12] - 1926607734 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e ^ s ^ r) + a[5] - 378558 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[8] - 2022574463 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[14] - 35309556 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[1] - 1530992060 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[4] + 1272893353 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[10] - 1094730640 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[13] + 681279174 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[0] - 358537222 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[6] + 76029189 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[9] - 640364487 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[12] - 421815835 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[2] - 995338651 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (s ^ (e | ~r)) + a[0] - 198630844 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[7] + 1126891415 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[5] - 57434055 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[12] + 1700485571 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[3] - 1894986606 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[1] - 2054922799 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[8] + 1873313359 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[15] - 30611744 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[13] + 1309151649 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[4] - 145523070 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[11] - 1120210379 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[9] - 343485551 | 0, e = (e << 21 | e >>> 11) + s | 0, i[0] = t + i[0] | 0, i[1] = e + i[1] | 0, i[2] = s + i[2] | 0, i[3] = r + i[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_h.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r;
    for (r = 0; r < i.length; r += 1) {
      if (s = i.charCodeAt(r), s < 128)
        a[e++] = s;
      else if (s < 2048)
        a[e++] = (s >>> 6) + 192, a[e++] = s & 63 | 128;
      else if (s < 55296 || s > 56319)
        a[e++] = (s >>> 12) + 224, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      else {
        if (s = (s - 55296) * 1024 + (i.charCodeAt(++r) - 56320) + 65536, s > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        a[e++] = (s >>> 18) + 240, a[e++] = s >>> 12 & 63 | 128, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      }
      e >= 64 && (this._dataLength += 64, _h._md5cycle(this._state, t), e -= 64, t[0] = t[16]);
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i.charCodeAt(r++);
      if (e < 64)
        break;
      this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(i) {
    const a = this._buffer8, t = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i[r++];
      if (e < 64)
        break;
      this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const i = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [i[0], i[1], i[2], i[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(i) {
    const a = i.buffer, t = i.state, e = this._state;
    let s;
    for (this._dataLength = i.length, this._bufferLength = i.buflen, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], s = 0; s < a.length; s += 1)
      this._buffer8[s] = a.charCodeAt(s);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(i = false) {
    const a = this._bufferLength, t = this._buffer8, e = this._buffer32, s = (a >> 2) + 1;
    this._dataLength += a;
    const r = this._dataLength * 8;
    if (t[a] = 128, t[a + 1] = t[a + 2] = t[a + 3] = 0, e.set(_h.buffer32Identity.subarray(s), s), a > 55 && (_h._md5cycle(this._state, e), e.set(_h.buffer32Identity)), r <= 4294967295)
      e[14] = r;
    else {
      const n = r.toString(16).match(/(.*?)(.{0,8})$/);
      if (n === null) return i ? c : "";
      const o = parseInt(n[2], 16), _ = parseInt(n[1], 16) || 0;
      e[14] = o, e[15] = _;
    }
    return _h._md5cycle(this._state, e), i ? this._state : _h._hex(this._state);
  }
};
if (h.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");

// libs/mocks/src/lib/realtime/desks.ts
var MockAreaManagementModule = class {
  constructor() {
    this.overview = {};
    this.emergency_contacts = {
      "First Aid": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0),
      "Fire Warden": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0)
    };
  }
  $locate_user(email, username) {
    return {};
  }
  $update() {
    updateLocations(this, MOCK_LEVELS);
  }
};
var MAC_LOOKUP = {};
var MockLocationServicesModule = class {
  $check_ownership_of(mac_address) {
    if (!MAC_LOOKUP[mac_address]) {
      const staff = randomInt(999999) % 3 === 0 ? MOCK_STAFF[randomInt(MOCK_STAFF.length)] : { name: "" };
      MAC_LOOKUP[mac_address] = { assigned_to: staff.name };
    }
    return MAC_LOOKUP[mac_address];
  }
  $locate_user(email, username) {
    return [
      {
        type: "wireless",
        position: { x: 0.5, y: 0.5 },
        level: MOCK_LEVELS[randomInt(MOCK_LEVELS.length)].id,
        priority: 0
      }
    ];
  }
};
function padZero(no, len = 3) {
  let str = `${no}`;
  while (str.length < len) {
    str = "0" + str;
  }
  return str;
}
function createAreaManagementModule(space, overrides = {}) {
  const mod = new MockAreaManagementModule();
  for (const lvl of MOCK_LEVELS) {
    mod.overview[lvl.id] = {
      desk_count: 100,
      desk_usage: 0,
      device_capacity: 100,
      device_count: 0,
      estimated_people: 0,
      percentage_use: 0,
      recommendation: 1e4
    };
    mod[`${lvl.id}:desk_ids`] = new Array(mod.overview[lvl.id].desk_count).fill(0).map((_, idx) => `table-${lvl.number}.${padZero(idx)}`);
    mod[`${lvl.id}`] = { value: [] };
    mod[`${lvl.id}:areas`] = {
      value: [
        {
          area_id: "zone-10.B",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.A",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.C",
          count: randomInt(50),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-02.D",
          count: randomInt(100),
          name: "Quite Work"
        },
        {
          area_id: "zone-02.B",
          count: randomInt(100),
          name: "Meeting Area A"
        },
        {
          area_id: "zone-02.A",
          count: randomInt(100),
          name: "Meeting Area B"
        },
        {
          area_id: "zone-02.C",
          count: randomInt(50),
          name: "Casual Work"
        }
      ]
    };
  }
  return mod;
}
function updateLocations(mod, levels) {
  for (const lvl of levels) {
    mod[lvl.id] = {
      value: new Array(predictableRandomInt(20)).fill(0).map(() => generateLocation(lvl, mod[`${lvl.id}:desk_ids`]))
    };
    for (const area of mod[`${lvl.id}:areas`].value) {
      area.count = randomInt(100);
    }
    mod[`${lvl.id}:areas`] = __spreadValues({}, mod[`${lvl.id}:areas`]);
  }
}
function generateLocation(lvl, desks, users = MOCK_STAFF) {
  const fixed = predictableRandomInt(9999) % 3 === 0;
  const usr = (users || [])[predictableRandomInt((users || [])?.length)]?.email;
  return fixed ? {
    location: "desk",
    at_location: predictableRandomInt(9999) % 2 !== 0,
    map_id: desks[predictableRandomInt(desks.length)],
    mac: h?.hashStr(usr || ""),
    level: lvl.id,
    building: lvl.parent_id
  } : {
    location: "wireless",
    coordinates_from: "bottom-left",
    x: predictableRandomInt(1e3) / 10,
    y: predictableRandomInt(1e3) / 10,
    lon: 55.27476066828535,
    lat: 25.20106100633537,
    s2_cell_id: "3e5f4281459c",
    mac: h?.hashStr(usr || ""),
    variance: 9.62534032222287,
    last_seen: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3),
    map_width: 100,
    map_height: 100
  };
}

// libs/mocks/src/lib/realtime/display.ts
var DisplayModule = class {
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
  constructor(_) {
    this.volume = randomInt(100);
  }
};
var createDisplayModule = (space, overrides = {}) => new DisplayModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/events.ts
var MockBookingModule = class {
  constructor(space, _data) {
    this.time_zone = "Australia/Sydney";
    this.disable_book_now = false;
    this.disable_end_meeting = false;
    this.enable_end_meeting_button = true;
    this.disable_book_now_host = false;
    this.bookings = [];
    this.pending_period = 600;
    this.pending_before = 300;
    this.control_ui = "";
    this.catering_ui = "";
    this.last_booking_started = 0;
    this.current_booking = null;
    this.next_booking = null;
    this.room_image = "assets/boardroom.jpg";
    this.status = "free";
    this.room_name = "";
    this.room_capacity = 10;
    this.custom_qr_url = "";
    this.custom_qr_color = "";
    this.show_qr_code = true;
    this.hide_qr_text = false;
    this.hide_meeting_details = false;
    this.hide_meeting_title = false;
    this.offline_image = "";
    this.offline_color = "#FFFFFF";
    this.presence = false;
    this.min_duration = 15;
    this.max_duration = 480;
    this.default_title = "Ad-Hoc Panel Booking";
    this.pending = true;
    this._space = null;
    this._space = space;
    this.room_name = space?.display_name || space?.name || "";
    this.room_capacity = space?.capacity || 10;
    if (_data) {
      Object.assign(this, _data);
    }
  }
  /** Start the meeting at the given time */
  $start_meeting(t) {
    this.last_booking_started = t;
    this.status = "busy";
  }
  /** End the meeting at the given time */
  $end_meeting(t, notify, reason) {
    this.current_booking = null;
    this.status = this.next_booking ? "pending" : "free";
  }
  /** Book meeting for the current time */
  $book_now(len, t, o) {
    const now = Math.floor(Date.now() / 1e3);
    const new_booking = {
      id: `mock-booking-${now}`,
      event_start: now,
      event_end: now + len,
      title: t || this.default_title,
      host: o || "mock@place.tech",
      attendees: []
    };
    this.bookings = [new_booking, ...this.bookings];
    this.current_booking = new_booking;
    this.status = "busy";
    return new_booking;
  }
  /** Check in to current booking */
  $checkin(time) {
    if (this.current_booking) {
      this.status = "busy";
    }
  }
  /** Call waiter service */
  $waiter_call(time) {
    return { success: true, time };
  }
  $poll_bookings() {
    updateBookings(this._space, this);
  }
};
var createBookingsModule = (space, overrides = {}) => new MockBookingModule(space, overrides);
function updateBookings(space, mod) {
  const bookings = MOCK_EVENTS.filter((event) => event.attendees?.find((u7) => u7.email === space.email || u7.id === space.id || event.system?.id === space.id)) || [];
  bookings.sort((a, b) => a.event_start - b.event_start);
  mod.bookings = bookings;
  mod.current_booking = bookings.find((_) => timePeriodsIntersect(Date.now(), Date.now(), _.event_start * 1e3, _.event_end * 1e3));
  mod.next_booking = bookings.find((_) => _.event_start * 1e3 > Date.now());
  const date = /* @__PURE__ */ new Date();
  const { current_booking, next_booking } = mod;
  const start = new Date((current_booking || next_booking)?.event_start);
  const pending = timePeriodsIntersect(date.valueOf(), date.valueOf(), subSeconds(start, mod.pending_before).valueOf(), addSeconds(start, mod.pending_period).valueOf());
  mod.status = space?.bookable ? current_booking ? "busy" : pending ? "pending" : "free" : "not-bookable";
}

// libs/mocks/src/lib/realtime/locker-locations.ts
var LockerLocationsModule = class {
  constructor(data) {
  }
  $lockers_allocated_to_me(...args) {
    return [
      {
        location: "locker",
        bank_id: "977cb758-4e42-4292-848a-4821f2fb4d74",
        locker_id: "adda7802-dfd7-467c-b369-d73394ad7084",
        locker_name: "0.105",
        allocated: true,
        group_id: "6c246e35-4a73-475a-8725-0676d78167f4"
      }
    ];
  }
};
var createLockerLocationsModule = (details, overrides = {}) => new LockerLocationsModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/meeting.ts
var MeetingPushModule = class {
  constructor(data) {
    this.supported_meeting_url = "https://meet.";
  }
  $econtrol(...args) {
  }
};
var createMeetingPushModule = (details, overrides = {}) => new MeetingPushModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/microphone.ts
var MicrophoneModule = class {
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
  constructor(_) {
    this.volume = randomInt(100);
  }
};
var createMicrophoneModule = (space, overrides = {}) => new MicrophoneModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/payments.ts
var PaymentsModule = class {
  $list_payment_methods(type) {
  }
  $add_payment_method(type, details) {
  }
  $get_product_prices(id, period) {
    return [12e3, 60];
  }
  $create_payment_intent(amount, source) {
    return randomString(12);
  }
  $confirm_payment_intent(id) {
  }
  $cancel_payment_intent(id) {
  }
  $create_customer(...args) {
    return `stripe-${randomInt(9999999, 1e6)}`;
  }
  constructor(_) {
  }
};
var createPaymentsModule = (space, overrides = {}) => new PaymentsModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/video-conference.ts
var VideoConferenceModule = class {
  $show_camera_pip(visible) {
    this.selfview = visible;
  }
  $mic_mute(state) {
    this.mic_mute = state;
  }
  $presentation_mode(state) {
    this.presentation_mode = state;
    this.presentation = state === "Local" ? "Sending" : false;
  }
  $hangup() {
    this.calls = {};
    this.call_status = "Idle";
    this.presentation_mode = "None";
    this.presentation = false;
  }
  $call_place_on_hold() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "OnHold";
        this.calls[key].PlacedOnHold = true;
        this.calls = __spreadValues({}, this.calls);
        this.call_status = "OnHold";
        return;
      }
    }
  }
  $call_resume() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "Connected";
        this.calls[key].PlacedOnHold = false;
        this.calls = __spreadValues({}, this.calls);
        this.call_status = "Connected";
        return;
      }
    }
  }
  $video_layout(layout) {
    this.video_layout = layout;
  }
  $dtmf_send(digit) {
    this.dtmf_history.push(digit);
  }
  $dial(dial_number) {
    this.call_status = "Dialling";
    return new Promise((resolve) => {
      setTimeout(() => {
        this.call_status = "Connected";
        const call_id = `call-${Date.now()}`;
        this.calls = {
          [call_id]: {
            AnswerState: "Answered",
            CallType: "Video",
            CallbackNumber: dial_number,
            DeviceType: "Endpoint",
            Direction: "Outgoing",
            DisplayName: 0,
            Duration: 0,
            "Encryption/Type": "AES-256",
            FacilityServiceId: 0,
            HoldReason: "",
            PlacedOnHold: false,
            Protocol: "SIP",
            ReceiveCallRate: 4096,
            RemoteNumber: dial_number,
            Status: "Connected",
            TransmitCallRate: 4096,
            Ice: ""
          }
        };
        resolve();
      }, 1e3);
    });
  }
  constructor(_) {
    this.mic_mute = false;
    this.selfview = false;
    this.video_layout = "Auto";
    this.presentation_mode = "None";
    this.presentation = false;
    this.calls = {};
    this.call_status = "Idle";
    this.dtmf_history = [];
  }
};
var createVideoConferenceModule = (space = {}, overrides = {}) => new VideoConferenceModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/systems-bindings.mock.ts
function createSystem(space) {
  Sh(space.id, {
    System: [createSystemModule(space)],
    Bookings: [createBookingsModule(space)],
    ContactTracing: [createContactTracingModule(space)],
    AreaManagement: [createAreaManagementModule(space)],
    LocationServices: [new MockLocationServicesModule()],
    Camera: new Array(10).fill(0).map((_) => createCameraModule(space)),
    Display: new Array(10).fill(0).map((_) => createDisplayModule(space)),
    Microphone: new Array(10).fill(0).map((_) => createMicrophoneModule(space)),
    Capture: [createCaptureModule(space)],
    MeetingPush: [createMeetingPushModule()],
    VidConf: [createVideoConferenceModule()],
    Payment: [createPaymentsModule(space)],
    LockerLocations: [createLockerLocationsModule()]
  });
  const system = Ao(space.id);
  system.Bookings[0].$poll_bookings();
  setInterval(() => system.Bookings[0].$poll_bookings(), 30 * 1e3);
  system.AreaManagement[0].$update();
  setInterval(() => system.AreaManagement[0].$update(), 30 * 1e3);
}

// libs/mocks/src/lib/api/systems.mock.ts
function registerMockSystems() {
  MOCK_SPACES.forEach((space, index) => createSystem(space));
  Ko({
    path: "/api/engine/v2/systems",
    metadata: {},
    method: "GET",
    callback: (request) => {
      return request.query_params?.zone_id ? MOCK_SPACES.filter((_) => _.zones.includes(request.query_params.zone_id)) : MOCK_SPACES;
    }
  });
  Ko({
    path: "/api/engine/v2/systems/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const space = MOCK_SPACES.find((_) => _.id === request.route_params.id);
      if (!space)
        throw { status: 404 };
      return space;
    }
  });
}

// libs/mocks/src/lib/api/users.mock.ts
function registerMockUsers() {
  Ko({
    path: "/api/engine/v2/users/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.route_params.id === "current") {
        return ACTIVE_USER;
      }
      const person = MOCK_STAFF.find((user) => user.email === request.route_params.id);
      if (person) {
        return person;
      }
      throw { status: 404, message: "User not found" };
    }
  });
  Ko({
    path: "/api/staff/v1/people",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_STAFF.filter(({ name, email }) => {
          return name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
        });
      }
      return MOCK_STAFF;
    }
  });
  Ko({
    path: "/api/staff/v1/people/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const id = decodeURIComponent(request.route_params.id);
      const person = MOCK_STAFF.find((user) => user.email === id);
      if (person) {
        return __spreadProps(__spreadValues({}, person), {
          location: generateLocation2()
        });
      }
      throw { status: 404, message: "User not found" };
    }
  });
  Ko({
    path: "/api/staff/v1/guests",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_GUESTS.filter((user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search));
      }
      return MOCK_STAFF;
    }
  });
  Ko({
    path: "/api/staff/v1/guests/:email",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const email = decodeURIComponent(request.route_params.email);
      const person = MOCK_GUESTS.find((user) => user.email === email);
      if (person)
        return person;
      throw { status: 404, message: "Guest not found" };
    }
  });
  Ko({
    path: "/api/staff/v1/guests/:email/meetings",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.route_params.email) {
        const email = request.route_params.email.toLowerCase();
        const events = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.email.toLowerCase() === email));
        return events;
      }
      throw {
        status: 404,
        message: `Unable to find meetings with guest with email ${request.route_params.email}`
      };
    }
  });
  const LOCATION_TYPES = [
    "meeting",
    "desk_id",
    "laptop",
    "mobile",
    "geo",
    "none"
  ];
  function generateLocation2() {
    const type = LOCATION_TYPES[predictableRandomInt(LOCATION_TYPES.length)];
    const level = MOCK_LEVELS[predictableRandomInt(MOCK_LEVELS.length)];
    const level_spaces = MOCK_SPACES.filter((s) => s.zones.includes(level.id));
    const space = level_spaces[predictableRandomInt(level_spaces.length)] || {};
    const location = {};
    switch (type) {
      case "meeting":
        location.meeting = {
          building: level.parent_id,
          level: level.id,
          system: space.id,
          map_id: space.map_id,
          event_id: ""
        };
        break;
      case "desk_id":
        location.meeting = {
          building: level.parent_id,
          level: level.id,
          map_id: space.map_id,
          checked_in: getUnixTime(Date.now())
        };
        break;
      case "laptop":
      case "mobile":
        location[type] = {
          building: level.parent_id,
          level: level.id,
          x: +predictableRandomInt(1e4),
          y: +predictableRandomInt(5e3),
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
      case "geo":
        location.geo = {
          lat: predictableRandomInt(180) - 90,
          lon: predictableRandomInt(360) - 180,
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
    }
    return location;
  }
}

// libs/mocks/src/lib/api/zones.mock.ts
var MOCK_METADATA = {
  current: {
    contacts: {
      name: "contacts",
      description: "",
      details: [
        {
          id: "user-1",
          name: "Jonathan McFarlane (PlaceOS)",
          email: "jon@place.tech",
          first_name: "Jonathan",
          last_name: "McFarlane"
        },
        {
          id: "user-1",
          name: "Alex Sorafumo (PlaceOS)",
          email: "alex@place.tech",
          first_name: "Alex",
          last_name: "Sorafumo"
        }
      ]
    }
  }
};
var LOCKERS = {};
function registerMockZones() {
  Ko({
    path: "/api/engine/v2/zones",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.tags === "org") {
        return MOCK_ORGS;
      } else if (request.query_params.tags === "region") {
        return MOCK_REGIONS;
      } else if (request.query_params.tags === "building") {
        return MOCK_BUILDINGS;
      } else if (request.query_params.tags === "level") {
        return MOCK_LEVELS;
      } else if (request.query_params.tags) {
        return MOCK_ZONES.filter((_) => _.tags.includes(request.query_params.tags));
      }
      throw { status: 404, message: "Zones not found" };
    }
  });
  Ko({
    path: "/api/engine/v2/settings",
    metadata: {},
    method: "GET",
    callback: (request) => []
  });
  Ko({
    path: "/api/engine/v2/settings/:id",
    metadata: {},
    method: "GET",
    callback: (request) => ({})
  });
  Ko({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.name === "bindings") {
        return {
          bindings: {
            details: {
              area_management: "space-0",
              location_services: "space-0",
              contact_tracing: "space-0",
              lockers: "space-0"
              // payments: 'space-0',
            }
          }
        };
      }
      if (request.query_params.name === "catering") {
        return {
          catering: {
            details: MOCK_MENU
          }
        };
      }
      if (request.query_params.name === "catering-settings") {
        return {
          "catering-settings": {
            details: {
              require_notes: false,
              charge_codes: [
                "CC-1001",
                "CC-1002",
                "CC-1003",
                "CC-2001",
                "CC-2002"
              ],
              disabled_rooms: []
            }
          }
        };
      }
      if (request.query_params.name === "catering_config") {
        return {
          catering_config: {
            details: []
          }
        };
      }
      if (request.query_params.name === "lockers") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateLockers(id);
      }
      if (request.query_params.name === "desks") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateMockDeskMetadata(id);
      }
      if (request.query_params.name === "charge_codes") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return {
          charge_codes: {
            details: new Array(30).fill(0).map((_, idx) => `C-${idx}`)
          }
        };
      }
      if (request.query_params.name === "map_regions") {
        return {
          map_regions: {
            details: {
              areas: [
                {
                  id: "zone-10.A",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.36, y: 0.33 }
                    // draw_polygon: true
                  },
                  geometry: {
                    coordinates: [
                      [0, 0],
                      [0, 0.5],
                      [0.5, 0.5],
                      [0.5, 0]
                    ]
                  }
                },
                {
                  id: "zone-10.B",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.76, y: 0.33 }
                  }
                },
                {
                  id: "zone-10.C",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.63, y: 0.77 }
                  }
                }
              ]
            }
          }
        };
      }
      if (MOCK_METADATA[request.route_params.id] && MOCK_METADATA[request.route_params.id][request.query_params.name]) {
        return MOCK_METADATA[request.route_params.id];
      } else if (MOCK_METADATA[request.route_params.id] && !request.query_params.name) {
        return MOCK_METADATA[request.route_params.id] || {};
      }
      return {};
    }
  });
  Ko({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  Ko({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "PUT",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  const DESK_FEATURES = ["sit_to_stand", "single_monitor", "dual_monitor"];
  function generateMockDeskMetadata(id) {
    return {
      desks: {
        details: new Array(30).fill(0).map((_, idx) => ({
          id: `table-${padString(id, 2)}.${padString(idx + 1, 3)}`,
          name: `Desk ${id}.${padString(idx + 1, 3)}`,
          bookable: predictableRandomInt(9999) % 4 !== 0,
          groups: predictableRandomInt(9999) % 4 === 0 ? ["test-1"] : [],
          features: DESK_FEATURES.filter((_2) => predictableRandomInt(99999) % 3 === 0)
        }))
      }
    };
  }
  function generateLockers(id) {
    if (!LOCKERS[id]) {
      LOCKERS[id] = {
        lockers: {
          details: new Array(6).fill(0).map((_, idx) => {
            const position = padString(idx + 1, 2);
            const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
            return {
              id: `locker-bank-${id}.${position}`,
              map_id: `bank-${id}.${position}`,
              level_id: `lvl-02`,
              name: `Bank ${position}`,
              height: 3,
              lockers: new Array(18).fill(0).map((_2, idx2) => ({
                id: `locker-${position}.${padString(idx2 + 1, 3)}`,
                name: `Locker ${idx2 + 1}`,
                accessible: predictableRandomInt(9999) % 2 !== 0,
                bookable: predictableRandomInt(9999) % 4 !== 0,
                position: [idx2 % 6, Math.floor(idx2 / 6)],
                size: [1, 1]
              }))
            };
          })
        }
      };
    }
    return LOCKERS[id];
  }
  Ko({
    path: "/api/engine/v2/metadata/:id/children",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const zone = MOCK_BUILDINGS.find((_) => _.id === request.route_params.id);
      if (!zone)
        throw {
          status: 404,
          message: `Unable to find zone with id "${request.route_params.id}"`
        };
      return MOCK_LEVELS.filter((_) => _.parent_id === zone.id).map((lvl) => {
        const parts = lvl.id.split("-");
        const id = parts[parts.length - 1];
        return {
          zone: lvl,
          metadata: request.query_params.name === "lockers" ? generateLockers(id) : generateMockDeskMetadata(id)
        };
      });
    }
  });
}

// libs/mocks/src/index.ts
function mocksInit() {
  registerMockAssets();
  registerMockBookings();
  registerMockCalendars();
  registerMockEvents();
  registerMockSignage();
  registerMockSurveys();
  registerMockSystems();
  registerMockUsers();
  registerMockZones();
}

// apps/workplace/src/app/app.component.ts
function AppComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "global-chat");
  }
}
var _AppComponent = class _AppComponent {
  constructor() {
    this._placeos = inject(PlaceOS_Service);
    this._uploads = inject(UploadsService);
    this.has_chat = settingSignal("chat.enabled", false);
  }
  async ngOnInit() {
    setMocks(mocksInit);
    await this._placeos.init();
    if (this._placeos.has_uploads)
      this._uploads.init();
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, decls: 5, vars: 1, consts: [[1, "relative", "h-1/2", "w-full", "flex-1"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "global-banner");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AppComponent_Conditional_3_Template, 1, 0, "global-chat");
    \u0275\u0275element(4, "global-loading");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.has_chat() ? 3 : -1);
  }
}, dependencies: [RouterOutlet, GlobalLoadingComponent, GlobalBannerComponent, ChatComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @if (has_chat()) {
            <global-chat />
        }
        <global-loading />
        <!-- <debug-console *ngIf="debug"></debug-console> -->
    `, standalone: false, styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/app.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "apps/workplace/src/app/app.component.ts", lineNumber: 35 });
})();

// apps/workplace/src/app/app.module.ts
var _AppModule = class _AppModule {
  constructor() {
    registerLocaleData(fr_default);
    registerLocaleData(ar_default);
    registerLocaleData(ja_default);
    registerLocaleData(zh_default);
    registerLocaleData(es_default);
    registerLocaleData(it_default);
  }
};
_AppModule.\u0275fac = function AppModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  provideZonelessChangeDetection(),
  {
    provide: ErrorHandler,
    useValue: createErrorHandler({
      showDialog: false
    })
  },
  {
    provide: TraceService,
    deps: [Router]
  },
  {
    provide: LOCALE_ID,
    deps: [LocaleService],
    useFactory: (localeService) => localeService.locale
  }
], imports: [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  MatSnackBarModule,
  GlobalLoadingComponent,
  GlobalBannerComponent,
  ChatComponent,
  ServiceWorkerModule.register("ngsw-worker.js", {
    enabled: environment.production
  })
] });
var AppModule = _AppModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [AppComponent],
      bootstrap: [AppComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSnackBarModule,
        GlobalLoadingComponent,
        GlobalBannerComponent,
        ChatComponent,
        ServiceWorkerModule.register("ngsw-worker.js", {
          enabled: environment.production
        })
      ],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: ErrorHandler,
          useValue: createErrorHandler({
            showDialog: false
          })
        },
        {
          provide: TraceService,
          deps: [Router]
        },
        {
          provide: LOCALE_ID,
          deps: [LocaleService],
          useFactory: (localeService) => localeService.locale
        }
      ]
    }]
  }], () => [], null);
})();

// apps/workplace/src/main.ts
if (environment.production) {
  enableProdMode();
}
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/util-CPU6TNml.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v20.0.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/common/locales/ar.js:
@angular/common/locales/es.js:
@angular/common/locales/fr.js:
@angular/common/locales/it.js:
@angular/common/locales/ja.js:
@angular/common/locales/zh.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=main.js.map
