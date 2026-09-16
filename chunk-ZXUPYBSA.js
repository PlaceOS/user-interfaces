import {
  AsyncHandler
} from "./chunk-PJV4BLFG.js";
import {
  Component,
  Input,
  Output,
  SafePipe,
  ViewChild,
  computed,
  input,
  model,
  output,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵviewQuerySignal
} from "./chunk-JABNH3I5.js";

// libs/components/src/lib/plugin-embed.component.ts
var _c0 = ["plugin_el"];
function PluginEmbedComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "iframe", 2, 0);
    \u0275\u0275pipe(2, "safe");
    \u0275\u0275domListener("load", function PluginEmbedComponent_Conditional_0_Template_iframe_load_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loaded.emit());
    })("error", function PluginEmbedComponent_Conditional_0_Template_iframe_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIframeError());
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(2, 1, ctx_r1.plugin().uri, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var API_VERSION = "signage-plugin/v1";
var MAX_THUMBNAIL_LENGTH = 4 * 1024 * 1024;
var THUMBNAIL_DATA_URL = /^data:image\/(png|jpeg|webp);base64,/;
function safeThumbnail(image) {
  if (typeof image !== "string")
    return "";
  if (!THUMBNAIL_DATA_URL.test(image))
    return "";
  if (image.length > MAX_THUMBNAIL_LENGTH)
    return "";
  return image;
}
var PluginEmbedComponent = class _PluginEmbedComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.plugin = input(
      null,
      ...ngDevMode ? [{ debugName: "plugin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.config = input(
      null,
      ...ngDevMode ? [{ debugName: "config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.play = input(
      0,
      ...ngDevMode ? [{ debugName: "play" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.auto_play = input(
      false,
      ...ngDevMode ? [{ debugName: "auto_play" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.play_delay = input(
      100,
      ...ngDevMode ? [{ debugName: "play_delay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.details = model(
      null,
      ...ngDevMode ? [{ debugName: "details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schema = model(
      {},
      ...ngDevMode ? [{ debugName: "schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status = model(
      "unknown",
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loaded = output();
    this.plugin_error = output();
    this.plugin_interaction = output();
    this._plugin_el = viewChild(
      "plugin_el",
      ...ngDevMode ? [{ debugName: "_plugin_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_origin = computed(
      () => {
        try {
          const uri = this.plugin()?.uri;
          if (!uri)
            return "";
          return new URL(uri, window.location.origin).origin;
        } catch {
          return "";
        }
      },
      ...ngDevMode ? [{ debugName: "plugin_origin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._handle_messages = (e) => this._handleMessage(e);
    this._play_timer = null;
    this._pending_auto_config = false;
    this._thumbnail_requests = /* @__PURE__ */ new Map();
    this._thumbnail_count = 0;
  }
  ngOnInit() {
    this._setupChannels();
  }
  ngOnChanges(changes) {
    if (changes.plugin) {
      this.status.set("unknown");
      this._clearPlayTimer();
      this._pending_auto_config = this.auto_play() && !!this.config();
      this._setupChannels();
    }
    if (changes.config && this.auto_play()) {
      this._pending_auto_config = !!this.config();
    }
    if (changes.play && this.play())
      this.send("play");
    if (changes.config && this.config() && !this.auto_play()) {
      this.send("config", this.config());
    }
  }
  send(type, payload = null, request_id) {
    const origin = this.plugin_origin();
    if (!origin)
      return;
    this._plugin_el()?.nativeElement?.contentWindow.postMessage({ api: API_VERSION, type, request_id, payload }, origin);
  }
  /** Whether the plugin told us it can render its own thumbnail */
  canProvideThumbnail() {
    return !!this.details()?.capabilities?.can_thumbnail;
  }
  /**
   * Ask the plugin to render a thumbnail of itself. Resolves to an empty
   * string for any plugin that cannot or does not answer, so callers treat a
   * plugin built before this existed exactly as they did before.
   */
  requestThumbnail(width, height, timeout_ms = 5e3) {
    const origin = this.plugin_origin();
    const frame = this._plugin_el()?.nativeElement?.contentWindow;
    if (!this.canProvideThumbnail() || !origin || !frame) {
      return Promise.resolve("");
    }
    this._thumbnail_count += 1;
    const request_id = `thumbnail-${this._thumbnail_count}`;
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this._thumbnail_requests.delete(request_id);
        resolve("");
      }, timeout_ms);
      this._thumbnail_requests.set(request_id, (image) => {
        clearTimeout(timer);
        resolve(image);
      });
      this.send("thumbnail", { width, height }, request_id);
    });
  }
  onIframeError() {
    this.plugin_error.emit({
      code: "iframe_load_error",
      message: "Plugin iframe failed to load.",
      fatal: true
    });
  }
  _setupChannels() {
    if (!this.plugin()?.uri)
      return;
    this.subscription("channel", () => window.removeEventListener("message", this._handle_messages));
    window.addEventListener("message", this._handle_messages);
  }
  _handleMessage(event) {
    if (event.origin !== this.plugin_origin())
      return;
    if (event.source !== this._plugin_el()?.nativeElement?.contentWindow)
      return;
    const msg = event.data;
    if (!msg || msg.api !== API_VERSION || typeof msg.type !== "string")
      return;
    if (msg.type === "interaction") {
      this.plugin_interaction.emit(msg.payload);
      return;
    }
    if (msg.type === "thumbnail") {
      const handler = this._thumbnail_requests.get(msg.request_id);
      if (!handler)
        return;
      this._thumbnail_requests.delete(msg.request_id);
      handler(safeThumbnail(msg.payload?.image));
      return;
    }
    this.status.set(msg.type);
    switch (msg.type) {
      case "loaded":
        this.details.set(msg.payload);
        this.schema.set(msg.payload?.config_schema);
        this._autoConfigure();
        break;
      case "ready":
        this._autoConfigure();
        break;
      case "error":
        this.plugin_error.emit(msg.payload);
        break;
    }
  }
  _autoConfigure() {
    if (!this.auto_play() || !this.config() || !this._pending_auto_config) {
      return;
    }
    this._pending_auto_config = false;
    this.send("config", this.config());
    this._clearPlayTimer();
    this._play_timer = setTimeout(() => this.send("play"), this.play_delay());
  }
  _clearPlayTimer() {
    if (!this._play_timer)
      return;
    clearTimeout(this._play_timer);
    this._play_timer = null;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PluginEmbedComponent_BaseFactory;
      return function PluginEmbedComponent_Factory(__ngFactoryType__) {
        return (\u0275PluginEmbedComponent_BaseFactory || (\u0275PluginEmbedComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PluginEmbedComponent)))(__ngFactoryType__ || _PluginEmbedComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PluginEmbedComponent, selectors: [["plugin-embed"]], viewQuery: function PluginEmbedComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._plugin_el, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { plugin: [1, "plugin"], config: [1, "config"], play: [1, "play"], auto_play: [1, "auto_play"], play_delay: [1, "play_delay"], details: [1, "details"], schema: [1, "schema"], status: [1, "status"] }, outputs: { details: "detailsChange", schema: "schemaChange", status: "statusChange", loaded: "loaded", plugin_error: "plugin_error", plugin_interaction: "plugin_interaction" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["plugin_el", ""], ["sandbox", "allow-scripts allow-same-origin", "referrerpolicy", "no-referrer", 3, "src"], ["sandbox", "allow-scripts allow-same-origin", "referrerpolicy", "no-referrer", 3, "load", "error", "src"]], template: function PluginEmbedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, PluginEmbedComponent_Conditional_0_Template, 3, 4, "iframe", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.plugin()?.uri ? 0 : -1);
      }
    }, dependencies: [SafePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n/*# sourceMappingURL=plugin-embed.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PluginEmbedComponent, [{
    type: Component,
    args: [{ selector: "plugin-embed", template: `
        @if (plugin()?.uri) {
            <iframe
                #plugin_el
                sandbox="allow-scripts allow-same-origin"
                referrerpolicy="no-referrer"
                [src]="plugin().uri | safe: 'resource'"
                (load)="loaded.emit()"
                (error)="onIframeError()"
            >
            </iframe>
        }
    `, imports: [SafePipe], styles: ["/* angular:styles/component:css;5c38d2afd4718f43078bd3971d0ccbbcc4ff11b3de0233f512e4525ba7baa5f1;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/plugin-embed.component.ts */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\niframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n/*# sourceMappingURL=plugin-embed.component.css.map */\n"] }]
  }], null, { plugin: [{ type: Input, args: [{ isSignal: true, alias: "plugin", required: false }] }], config: [{ type: Input, args: [{ isSignal: true, alias: "config", required: false }] }], play: [{ type: Input, args: [{ isSignal: true, alias: "play", required: false }] }], auto_play: [{ type: Input, args: [{ isSignal: true, alias: "auto_play", required: false }] }], play_delay: [{ type: Input, args: [{ isSignal: true, alias: "play_delay", required: false }] }], details: [{ type: Input, args: [{ isSignal: true, alias: "details", required: false }] }, { type: Output, args: ["detailsChange"] }], schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }, { type: Output, args: ["schemaChange"] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }, { type: Output, args: ["statusChange"] }], loaded: [{ type: Output, args: ["loaded"] }], plugin_error: [{ type: Output, args: ["plugin_error"] }], plugin_interaction: [{ type: Output, args: ["plugin_interaction"] }], _plugin_el: [{ type: ViewChild, args: ["plugin_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PluginEmbedComponent, { className: "PluginEmbedComponent", filePath: "libs/components/src/lib/plugin-embed.component.ts", lineNumber: 131 });
})();

export {
  PluginEmbedComponent
};
//# debugId=2d6cd883-62f0-5b80-b5da-9bff71c7ec77
//# sourceMappingURL=chunk-ZXUPYBSA.js.map
