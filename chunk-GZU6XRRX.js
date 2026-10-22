import {
  SignagePluginService
} from "./chunk-RVQAVHAI.js";
import {
  SignageContextService
} from "./chunk-CUVMEQL2.js";
import {
  MatDialog
} from "./chunk-4XLPPEHO.js";
import {
  Injectable,
  Injector,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-COAI73L2.js";

// apps/signage-manager/src/app/media/media-preview.service.ts
var MediaPreviewService = class _MediaPreviewService {
  constructor() {
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this._injector = inject(Injector);
  }
  async previewMedia(item) {
    const plugin = item.media_type === "plugin" && item.plugin_id ? await this._injector.get(SignagePluginService).resolvePlugin(item.plugin_id) : void 0;
    const { MediaPreviewModalComponent } = await import("./media-preview-modal.component-WYWSLCVV.js");
    this._dialog.open(MediaPreviewModalComponent, {
      data: {
        media: item,
        plugin,
        group_id: this._context.api_group_id()
      },
      panelClass: "fullscreen-dialog"
    });
  }
  static {
    this.\u0275fac = function MediaPreviewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaPreviewService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MediaPreviewService, factory: _MediaPreviewService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaPreviewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  MediaPreviewService
};
//# debugId=f1239fb0-3637-518d-97d1-873a6801228e
//# sourceMappingURL=chunk-GZU6XRRX.js.map
