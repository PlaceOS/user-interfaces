import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleRenderer,
  defaultRippleAnimationConfig
} from "./chunk-MQ5HRBFJ.js";
import {
  _getEventTarget
} from "./chunk-P3JO7KVP.js";
import {
  Platform,
  _animationsDisabled
} from "./chunk-HIXE6JIY.js";
import {
  DOCUMENT,
  Injector,
  NgZone,
  RendererFactory2,
  Service,
  inject,
  setClassMetadata,
  ɵɵdefineService
} from "./chunk-JQIZG7UA.js";

// node_modules/@angular/material/fesm2022/_ripple-loader-chunk.mjs
var eventListenerOptions = {
  capture: true
};
var rippleInteractionEvents = ["focus", "mousedown", "mouseenter", "touchstart"];
var matRippleUninitialized = "mat-ripple-loader-uninitialized";
var matRippleClassName = "mat-ripple-loader-class-name";
var matRippleCentered = "mat-ripple-loader-centered";
var matRippleDisabled = "mat-ripple-loader-disabled";
var MatRippleLoader = class _MatRippleLoader {
  _document = inject(DOCUMENT);
  _animationsDisabled = _animationsDisabled();
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _eventCleanups;
  _hosts = /* @__PURE__ */ new Map();
  constructor() {
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    this._eventCleanups = this._ngZone.runOutsideAngular(() => rippleInteractionEvents.map((name) => renderer.listen(this._document, name, this._onInteraction, eventListenerOptions)));
  }
  ngOnDestroy() {
    const hosts = this._hosts.keys();
    for (const host of hosts) {
      this.destroyRipple(host);
    }
    this._eventCleanups.forEach((cleanup) => cleanup());
  }
  configureRipple(host, config) {
    var _a;
    host.setAttribute(matRippleUninitialized, ((_a = this._globalRippleOptions) == null ? void 0 : _a.namespace) ?? "");
    if (config.className || !host.hasAttribute(matRippleClassName)) {
      host.setAttribute(matRippleClassName, config.className || "");
    }
    if (config.centered) {
      host.setAttribute(matRippleCentered, "");
    }
    if (config.disabled) {
      host.setAttribute(matRippleDisabled, "");
    }
  }
  setDisabled(host, disabled) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.target.rippleDisabled = disabled;
      if (!disabled && !ripple.hasSetUpEvents) {
        ripple.hasSetUpEvents = true;
        ripple.renderer.setupTriggerEvents(host);
      }
    } else if (disabled) {
      host.setAttribute(matRippleDisabled, "");
    } else {
      host.removeAttribute(matRippleDisabled);
    }
  }
  _onInteraction = (event) => {
    var _a;
    const eventTarget = _getEventTarget(event);
    if (eventTarget instanceof HTMLElement) {
      const element = eventTarget.closest(`[${matRippleUninitialized}="${((_a = this._globalRippleOptions) == null ? void 0 : _a.namespace) ?? ""}"]`);
      if (element) {
        this._createRipple(element);
      }
    }
  };
  _createRipple(host) {
    var _a, _b, _c;
    if (!this._document || this._hosts.has(host)) {
      return;
    }
    (_a = host.querySelector(".mat-ripple")) == null ? void 0 : _a.remove();
    const rippleEl = this._document.createElement("span");
    rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
    host.append(rippleEl);
    const globalOptions = this._globalRippleOptions;
    const enterDuration = this._animationsDisabled ? 0 : ((_b = globalOptions == null ? void 0 : globalOptions.animation) == null ? void 0 : _b.enterDuration) ?? defaultRippleAnimationConfig.enterDuration;
    const exitDuration = this._animationsDisabled ? 0 : ((_c = globalOptions == null ? void 0 : globalOptions.animation) == null ? void 0 : _c.exitDuration) ?? defaultRippleAnimationConfig.exitDuration;
    const target = {
      rippleDisabled: this._animationsDisabled || (globalOptions == null ? void 0 : globalOptions.disabled) || host.hasAttribute(matRippleDisabled),
      rippleConfig: {
        centered: host.hasAttribute(matRippleCentered),
        terminateOnPointerUp: globalOptions == null ? void 0 : globalOptions.terminateOnPointerUp,
        animation: {
          enterDuration,
          exitDuration
        }
      }
    };
    const renderer = new RippleRenderer(target, this._ngZone, rippleEl, this._platform, this._injector);
    const hasSetUpEvents = !target.rippleDisabled;
    if (hasSetUpEvents) {
      renderer.setupTriggerEvents(host);
    }
    this._hosts.set(host, {
      target,
      renderer,
      hasSetUpEvents
    });
    host.removeAttribute(matRippleUninitialized);
  }
  destroyRipple(host) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.renderer._removeTriggerEvents();
      this._hosts.delete(host);
    }
  }
  static \u0275fac = function MatRippleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRippleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _MatRippleLoader,
    factory: _MatRippleLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleLoader, [{
    type: Service
  }], () => [], null);
})();

export {
  MatRippleLoader
};
//# debugId=19f1463e-0ac9-5c22-9cc4-b2621e5ef1da
//# sourceMappingURL=chunk-MF56HOWP.js.map
