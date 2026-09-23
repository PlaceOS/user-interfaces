import {
  PlaylistApprovalPreviewComponent
} from "./chunk-WXB64ENU.js";
import "./chunk-LQ6EF2JJ.js";
import "./chunk-KOKDDOXG.js";
import {
  SignageService
} from "./chunk-IJFYACDR.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-XASXFKEM.js";
import "./chunk-MFBJJVF7.js";
import "./chunk-OKGMEF76.js";
import "./chunk-HW4EA2SL.js";
import {
  playlistMediaItems
} from "./chunk-WN6EDS3Q.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-C7ELQ7TP.js";
import {
  TranslatePipe
} from "./chunk-OQHCC7EM.js";
import "./chunk-3MB6OAN2.js";
import "./chunk-O6Q3U2DX.js";
import {
  CommonModule,
  Component,
  IconComponent,
  Jh,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  Vh,
  el,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  notifyWarn,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QSNPLM4U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/playlist-approve-modal.component.ts
function PlaylistApproveModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.CLOSE_APPROVE_PLAYLIST"));
  }
}
function PlaylistApproveModalComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function PlaylistApproveModalComponent_Conditional_6_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.undoChanges());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.has_previous_version());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.UNDO_CHANGES"), " ");
  }
}
function PlaylistApproveModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "playlist-approval-preview", 5);
    \u0275\u0275listener("preview", function PlaylistApproveModalComponent_Conditional_6_Template_playlist_approval_preview_preview_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previewItem($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "footer", 6);
    \u0275\u0275conditionalCreate(3, PlaylistApproveModalComponent_Conditional_6_Conditional_3_Template, 3, 4, "button", 7);
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function PlaylistApproveModalComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("versions", ctx_r1.playlist_versions())("media", ctx_r1.playlist_media());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "COMMON.APPROVE"), " ");
  }
}
function PlaylistApproveModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main")(1, "div", 10);
    \u0275\u0275element(2, "mat-spinner", 11);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
var PlaylistApproveModalComponent = class _PlaylistApproveModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._service = inject(SignageService);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_previous_version = signal(
      false,
      ...ngDevMode ? [{ debugName: "has_previous_version" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = this._service.can_update;
    this._playlist_versions = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_playlist_versions" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._data?.playlist?.id || "",
      loader: async ({ params }) => {
        if (!params)
          return [];
        this.loading.set(i18n("SIGNAGE_MANAGER.LOADING_VERSIONS"));
        try {
          const versions = await Jh(params, { limit: 2 });
          this.has_previous_version.set(versions.length > 1);
          return versions;
        } finally {
          this.loading.set("");
        }
      }
    }));
    this.playlist_versions = () => this._playlist_versions.value() || [];
    this.playlist_media = () => this.playlist_versions().map((playlist) => playlistMediaItems(playlist));
  }
  async undoChanges() {
    if (!this.can_update()) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"));
      return;
    }
    const [, previous_version] = this.playlist_versions();
    if (!previous_version?.items)
      return;
    this.loading.set(i18n("SIGNAGE_MANAGER.UNDOING_CHANGES"));
    this._dialog_ref.disableClose = true;
    try {
      await el(this._data.playlist.id, previous_version.items);
      this._service.setPlaylistApprovalStatus(this._data.playlist.id, false);
      notifySuccess(i18n("SIGNAGE_MANAGER.PLAYLIST_REVERTED"));
      this._dialog_ref.close(true);
      this._service.refreshPlaylist(this._data.playlist.id);
    } catch (e) {
      notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_REVERT_ERROR"));
    } finally {
      this.loading.set("");
      this._dialog_ref.disableClose = false;
    }
  }
  async approve() {
    this.loading.set(i18n("SIGNAGE_MANAGER.APPROVING_PLAYLIST"));
    this._dialog_ref.disableClose = true;
    try {
      await Vh(this._data.playlist.id);
      this._service.setPlaylistApprovalStatus(this._data.playlist.id, true);
      notifySuccess(i18n("SIGNAGE_MANAGER.PLAYLIST_APPROVED"));
      this._dialog_ref.close(true);
      this._service.changed();
    } catch (e) {
      notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_APPROVE_ERROR"));
    } finally {
      this.loading.set("");
      this._dialog_ref.disableClose = false;
    }
  }
  previewItem(item) {
    this._service.previewMedia(item);
  }
  static {
    this.\u0275fac = function PlaylistApproveModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistApproveModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistApproveModalComponent, selectors: [["playlist-approve-modal"]], decls: 8, vars: 5, consts: [[1, "p-2"], [1, "bg-base-200", "rounded-sm", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[60vh]", "gap-2", "overflow-auto", "py-2"], [3, "preview", "versions", "media"], [1, "bg-base-200", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "w-40", 3, "click"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-32", "py-16"], ["diameter", "32"]], template: function PlaylistApproveModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, PlaylistApproveModalComponent_Conditional_5_Template, 4, 3, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, PlaylistApproveModalComponent_Conditional_6_Template, 7, 6)(7, PlaylistApproveModalComponent_Conditional_7_Template, 5, 1, "main");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "SIGNAGE_MANAGER.APPROVE_PLAYLIST"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      PlaylistApprovalPreviewComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistApproveModalComponent, [{
    type: Component,
    args: [{
      selector: "playlist-approve-modal",
      template: `
        <div class="p-2">
            <header class="bg-base-200 rounded-sm p-2">
                <h2 class="px-2 text-xl font-medium">
                    {{ 'SIGNAGE_MANAGER.APPROVE_PLAYLIST' | translate }}
                </h2>
                @if (!loading()) {
                    <button
                        icon
                        type="button"
                        matRipple
                        mat-dialog-close
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.CLOSE_APPROVE_PLAYLIST' | translate
                        "
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[60vh] gap-2 overflow-auto py-2">
                    <playlist-approval-preview
                        [versions]="playlist_versions()"
                        [media]="playlist_media()"
                        (preview)="previewItem($event)"
                    />
                </main>
                <footer
                    class="bg-base-200 flex items-center justify-end space-x-2 rounded-sm p-2"
                >
                    @if (can_update()) {
                        <button
                            btn
                            type="button"
                            matRipple
                            class="inverse bg-base-100 w-40"
                            [disabled]="!has_previous_version()"
                            (click)="undoChanges()"
                        >
                            {{ 'SIGNAGE_MANAGER.UNDO_CHANGES' | translate }}
                        </button>
                    }
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-40"
                        (click)="approve()"
                    >
                        {{ 'COMMON.APPROVE' | translate }}
                    </button>
                </footer>
            } @else {
                <main>
                    <div
                        class="flex flex-col items-center justify-center space-y-4 px-32 py-16"
                    >
                        <mat-spinner diameter="32" />
                        <p>{{ loading() }}</p>
                    </div>
                </main>
            }
        </div>
    `,
      imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        PlaylistApprovalPreviewComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistApproveModalComponent, { className: "PlaylistApproveModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-approve-modal.component.ts", lineNumber: 104 });
})();
export {
  PlaylistApproveModalComponent
};
//# debugId=c2ee7485-9fcc-51df-87e3-f0834d130b88
//# sourceMappingURL=playlist-approve-modal.component-OQ5RFIZX.js.map
