import {
  Injectable,
  MatDialog,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-56VJTSNA.js";

// apps/signage-manager/src/app/shared/command-palette.service.ts
var CommandPaletteService = class _CommandPaletteService {
  constructor() {
    this._dialog = inject(MatDialog);
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
      const { CommandPaletteComponent } = await import("./command-palette.component-JEO4UQDI.js");
      this._ref = this._dialog.open(CommandPaletteComponent, {
        position: { top: "12vh" },
        width: "36rem",
        maxWidth: "95vw"
      });
      this._ref.afterClosed().subscribe(() => this._ref = null);
    } finally {
      this._opening = false;
    }
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
//# debugId=540e3aec-f7d5-5037-84ba-49d83d2b032c
//# sourceMappingURL=chunk-ROJFX3RM.js.map
