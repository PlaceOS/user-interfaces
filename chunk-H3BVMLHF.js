import {
  SignageContextService
} from "./chunk-IC6PDIJY.js";
import {
  byName,
  decodeEntityNames
} from "./chunk-P5YDCKEY.js";
import {
  OrganisationService
} from "./chunk-DQYXLEKZ.js";
import {
  Injectable,
  computed,
  inject,
  resource,
  setClassMetadata,
  ul,
  ɵɵdefineInjectable
} from "./chunk-VC4MJRPT.js";

// apps/signage-manager/src/app/signage-plugin.service.ts
var SignagePluginService = class _SignagePluginService {
  constructor() {
    this._org = inject(OrganisationService);
    this._context = inject(SignageContextService);
    this._plugins = this._pluginResource("plugin");
    this._widgets = this._pluginResource("widget");
    this.all_plugins = computed(
      () => this._plugins.value() || [],
      ...ngDevMode ? [{ debugName: "all_plugins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugins = computed(
      () => {
        const allowed = this._context.group_features().available_plugins;
        const plugins = this.all_plugins();
        return allowed ? plugins.filter((plugin) => allowed.includes(plugin.id)) : plugins;
      },
      ...ngDevMode ? [{ debugName: "plugins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.widgets = computed(
      () => this._widgets.value() || [],
      ...ngDevMode ? [{ debugName: "widgets" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  // Plugins available to the selected group. Signage edits never change
  // plugins, so these lists follow the group but not `changed()`.
  _pluginResource(plugin_type) {
    return resource({
      params: () => ({
        initialised: this._org.initialised(),
        can_query: this._context.can_query_group_data(),
        group_id: this._context.api_group_id_debounced.value()
      }),
      loader: async ({ params }) => {
        if (!params.initialised || !params.can_query) {
          return [];
        }
        try {
          const result = await ul(this._context.orgZoneQueryParams({ limit: 500, plugin_type }, params.group_id));
          return (result.data || []).filter((plugin) => plugin.enabled).map(decodeEntityNames).sort(byName);
        } catch {
          return [];
        }
      }
    });
  }
  /**
   * Find a plugin by ID, from every plugin and not only the group's.
   * Uses the loaded plugins first and only queries on a miss.
   */
  async resolvePlugin(plugin_id) {
    if (!plugin_id)
      return void 0;
    const loaded = this.all_plugins().find(({ id }) => id === plugin_id);
    if (loaded)
      return loaded;
    const result = await ul({
      limit: 500,
      plugin_type: "plugin"
    }).catch(() => ({ data: [] }));
    return (result.data || []).find(({ id }) => id === plugin_id);
  }
  static {
    this.\u0275fac = function SignagePluginService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignagePluginService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignagePluginService, factory: _SignagePluginService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePluginService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SignagePluginService
};
//# debugId=c0b349b6-cb6c-5853-91b0-532e13aaa689
//# sourceMappingURL=chunk-H3BVMLHF.js.map
