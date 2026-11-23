import {
  querySignageDisplays
} from "./chunk-RE3BHRSQ.js";
import {
  SignageContextService
} from "./chunk-MN4SO3PZ.js";
import {
  searchParam
} from "./chunk-SG57ZUUB.js";
import {
  decodeEntityNames
} from "./chunk-5G4V6J43.js";
import {
  MatDialog
} from "./chunk-4MZUVPXU.js";
import {
  $h,
  Bh,
  i18n,
  nl,
  vl
} from "./chunk-HLJZZGGR.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-Y6KAMZVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QQY67O5D.js";

// apps/signage-manager/src/app/shared/nav-items.ts
var NAV_ITEMS = [
  {
    route: "/media",
    icon: "stock_media",
    label: "SIGNAGE_MANAGER.NAV_MEDIA"
  },
  {
    route: "/playlists",
    icon: "playlist_play",
    label: "SIGNAGE_MANAGER.NAV_PLAYLISTS"
  },
  {
    route: "/templates",
    icon: "dashboard_customize",
    label: "SIGNAGE_MANAGER.NAV_TEMPLATES"
  },
  { route: "/zones", icon: "layers", label: "SIGNAGE_MANAGER.NAV_ZONES" },
  {
    route: "/schedules",
    icon: "calendar_view_day",
    label: "SIGNAGE_MANAGER.NAV_SCHEDULES"
  },
  {
    route: "/displays",
    icon: "display_settings",
    label: "SIGNAGE_MANAGER.NAV_DISPLAYS"
  },
  {
    route: "/manage",
    icon: "tune",
    label: "SIGNAGE_MANAGER.NAV_MANAGE"
  },
  { route: "/groups", icon: "groups", label: "COMMON.GROUPS" }
];
function filterManageNavItems(can_manage_groups, templates_enabled = false) {
  return NAV_ITEMS.filter((item) => {
    if (item.route === "/groups")
      return can_manage_groups;
    if (item.route === "/templates")
      return templates_enabled;
    return true;
  });
}
function injectNavItems() {
  const context = inject(SignageContextService);
  return computed(() => filterManageNavItems(context.can_manage_groups(), context.templates_enabled()));
}

// apps/signage-manager/src/app/shared/command-palette.service.ts
var EMPTY_SEARCH_RESULTS = {
  displays: [],
  playlists: [],
  templates: [],
  zones: [],
  media: []
};
var CommandPaletteService = class _CommandPaletteService {
  constructor() {
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this._ref = null;
    this._opening = false;
  }
  /** Open the palette, or close it when it is already open */
  async toggle() {
    if (this._ref) {
      this._ref.close();
      return;
    }
    if (this._opening || this._dialog.openDialogs.length)
      return;
    this._opening = true;
    try {
      const { CommandPaletteComponent } = await import("./command-palette.component-B4JIZDEU.js");
      this._ref = this._dialog.open(CommandPaletteComponent, {
        position: { top: "12vh" },
        width: "36rem",
        maxWidth: "95vw",
        ariaLabel: i18n("SIGNAGE_MANAGER.PALETTE_OPEN")
      });
      this._ref.afterClosed().subscribe(() => this._ref = null);
    } finally {
      this._opening = false;
    }
  }
  /**
   * First matches of each signage type for a search, for the command
   * palette. A type is empty when its query fails or is not available.
   * @param search Text to search for
   * @param limit Most results to return for each type
   */
  async searchAll(search, limit = 5) {
    const term = search.trim();
    if (!term || !this._context.canQueryLists()) {
      return EMPTY_SEARCH_RESULTS;
    }
    const params = __spreadValues(__spreadValues({}, this._context.orgZoneQueryParams({ limit })), searchParam(term));
    const group_params = this._context.groupQueryParams(__spreadValues({
      limit
    }, searchParam(term)));
    const settle = async (query) => {
      try {
        const data = (await query).data || [];
        return data.slice(0, limit).map(decodeEntityNames);
      } catch {
        return [];
      }
    };
    const [displays, playlists, templates, zones, media] = await Promise.all([
      settle(querySignageDisplays(__spreadProps(__spreadValues({}, params), { signage: true }))),
      settle(nl(params)),
      this._context.templates_enabled() ? settle(vl(group_params)) : Promise.resolve([]),
      settle($h(__spreadProps(__spreadValues({}, group_params), { tags: "signage" }))),
      settle(Bh(params))
    ]);
    return { displays, playlists, templates, zones, media };
  }
  static {
    this.\u0275fac = function CommandPaletteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommandPaletteService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommandPaletteService, factory: _CommandPaletteService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandPaletteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  injectNavItems,
  CommandPaletteService
};
//# debugId=b2fcd854-f22f-5972-a2c6-91005fd76e86
//# sourceMappingURL=chunk-MCL75ZNH.js.map
