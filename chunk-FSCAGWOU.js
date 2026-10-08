import {
  querySignageDisplays
} from "./chunk-Y465EEIV.js";
import {
  SignageContextService,
  searchParam
} from "./chunk-RUR53MNN.js";
import {
  decodeEntityNames
} from "./chunk-P5YDCKEY.js";
import {
  Injectable,
  MatDialog,
  Qh,
  hh,
  i18n,
  inject,
  pl,
  setClassMetadata,
  wh,
  ɵɵdefineInjectable
} from "./chunk-VC4MJRPT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
      const { CommandPaletteComponent } = await import("./command-palette.component-AEEHILBM.js");
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
      settle(Qh(params)),
      this._context.templates_enabled() ? settle(pl(group_params)) : Promise.resolve([]),
      settle(hh(__spreadProps(__spreadValues({}, group_params), { tags: "signage" }))),
      settle(wh(params))
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
  CommandPaletteService
};
//# debugId=eeb588b0-c044-5c46-a677-f12700cf1d8b
//# sourceMappingURL=chunk-FSCAGWOU.js.map
