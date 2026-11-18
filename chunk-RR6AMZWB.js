import {
  SignagePluginService
} from "./chunk-L3JGYHST.js";
import {
  SignageContextService
} from "./chunk-KYJVZL5K.js";
import {
  MatDialog
} from "./chunk-OPFTRVSI.js";
import {
  loadLazyChunk
} from "./chunk-RMP5ICO4.js";
import {
  Injectable,
  Injector,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-W6NHZ5YT.js";

// apps/signage-manager/src/app/media/media-preview.service.ts
var MediaPreviewService = class _MediaPreviewService {
  constructor() {
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this._injector = inject(Injector);
  }
  async previewMedia(item) {
    const plugin = item.media_type === "plugin" && item.plugin_id ? await this._injector.get(SignagePluginService).resolvePlugin(item.plugin_id) : void 0;
    const chunk = await loadLazyChunk(() => import("./media-preview-modal.component-ACWFC4UE.js"));
    if (!chunk)
      return;
    this._dialog.open(chunk.MediaPreviewModalComponent, {
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
//# debugId=82c8f54b-8040-5ede-a869-16caeac5bef2
//# sourceMappingURL=chunk-RR6AMZWB.js.map
