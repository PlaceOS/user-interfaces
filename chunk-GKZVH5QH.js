import {
  querySignageDisplays
} from "./chunk-KPTH2ON4.js";
import {
  SignageContextService
} from "./chunk-WHF2MYCM.js";
import {
  searchParam
} from "./chunk-TWYNJBM2.js";
import {
  decodeEntityNames
} from "./chunk-2LNHNEQI.js";
import {
  MatDialog
} from "./chunk-Z6FZWLVS.js";
import {
  $h,
  Bh,
  i18n,
  nl,
  vl
} from "./chunk-5AOQ34DQ.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-5SPB2BCN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GLT7DQUO.js";

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
      const { CommandPaletteComponent } = await import("./command-palette.component-2JCISAUH.js");
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
  CommandPaletteService
};
//# debugId=960defbe-817a-5402-b860-a6b057d60663
//# sourceMappingURL=chunk-GKZVH5QH.js.map
