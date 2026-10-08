import {
  PlaylistApprovalPreviewComponent,
  loadPlaylistApprovalVersions,
  playlistChangedSince
} from "./chunk-JHEYHUVL.js";
import "./chunk-O5WRZECE.js";
import {
  SignageMediaService
} from "./chunk-RHMT4PAO.js";
import "./chunk-H3BVMLHF.js";
import "./chunk-EBPED7MY.js";
import "./chunk-FZRJJ3PO.js";
import "./chunk-DZ75ROTS.js";
import {
  SignagePlaylistService
} from "./chunk-FSD5ODU2.js";
import {
  playlistMediaItems
} from "./chunk-VTNUNR3F.js";
import "./chunk-DKQ77FMR.js";
import "./chunk-Y465EEIV.js";
import "./chunk-CANWIIRQ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WEGWBEFP.js";
import {
  SignageContextService
} from "./chunk-IC6PDIJY.js";
import "./chunk-P5YDCKEY.js";
import {
  TranslatePipe
} from "./chunk-4R7BTQAK.js";
import "./chunk-DQYXLEKZ.js";
import "./chunk-VCQ7GNNO.js";
import {
  CommonModule,
  Component,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  computed,
  el,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  notifyWarn,
  resource,
  setClassMetadata,
  signal,
  sl,
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
} from "./chunk-VC4MJRPT.js";
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
function PlaylistApproveModalComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 10);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.PLAYLIST_VERSIONS_LOAD_ERROR"), " ");
  }
}
function PlaylistApproveModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "playlist-approval-preview", 12);
    \u0275\u0275listener("preview", function PlaylistApproveModalComponent_Conditional_6_Conditional_2_Template_playlist_approval_preview_preview_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.previewItem($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("versions", ctx_r2.playlist_versions())("media", ctx_r2.playlist_media());
  }
}
function PlaylistApproveModalComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function PlaylistApproveModalComponent_Conditional_6_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.undoChanges());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.has_previous_version());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.UNDO_CHANGES"), " ");
  }
}
function PlaylistApproveModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275conditionalCreate(1, PlaylistApproveModalComponent_Conditional_6_Conditional_1_Template, 6, 3, "div", 5)(2, PlaylistApproveModalComponent_Conditional_6_Conditional_2_Template, 1, 2, "playlist-approval-preview", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "footer", 7);
    \u0275\u0275conditionalCreate(4, PlaylistApproveModalComponent_Conditional_6_Conditional_4_Template, 3, 4, "button", 8);
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function PlaylistApproveModalComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.versions_error() ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.can_update() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.versions_loaded());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "COMMON.APPROVE"), " ");
  }
}
function PlaylistApproveModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main")(1, "div", 14);
    \u0275\u0275element(2, "mat-spinner", 15);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.loading());
  }
}
var PlaylistApproveModalComponent = class _PlaylistApproveModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._context = inject(SignageContextService);
    this._media_service = inject(SignageMediaService);
    this._playlist_service = inject(SignagePlaylistService);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = this._context.can_update;
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
          return await loadPlaylistApprovalVersions(params);
        } catch (error) {
          notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_VERSIONS_LOAD_ERROR"));
          throw error;
        } finally {
          this.loading.set("");
        }
      }
    }));
    this.versions_loaded = computed(
      () => this._playlist_versions.hasValue(),
      ...ngDevMode ? [{ debugName: "versions_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.versions_error = computed(
      () => this._playlist_versions.status() === "error",
      ...ngDevMode ? [{ debugName: "versions_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_versions = () => this._playlist_versions.hasValue() ? this._playlist_versions.value() : [];
    this.has_previous_version = computed(
      () => this.playlist_versions().length > 1,
      ...ngDevMode ? [{ debugName: "has_previous_version" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
      await sl(this._data.playlist.id, previous_version.items);
      this._playlist_service.setPlaylistApprovalStatus(this._data.playlist.id, false);
      notifySuccess(i18n("SIGNAGE_MANAGER.PLAYLIST_REVERTED"));
      this._dialog_ref.close(true);
      this._playlist_service.refreshPlaylist(this._data.playlist.id);
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_REVERT_ERROR"));
    } finally {
      this.loading.set("");
      this._dialog_ref.disableClose = false;
    }
  }
  /**
   * Approve the playlist. When it changed after the changes were loaded,
   * show the new changes and a warning instead, as the server approves
   * the latest version.
   */
  async approve() {
    if (!this.versions_loaded())
      return;
    const playlist_id = this._data.playlist.id;
    this.loading.set(i18n("SIGNAGE_MANAGER.APPROVING_PLAYLIST"));
    this._dialog_ref.disableClose = true;
    try {
      const [shown] = this.playlist_versions();
      if (await playlistChangedSince(playlist_id, shown)) {
        notifyWarn(i18n("SIGNAGE_MANAGER.PLAYLIST_CHANGED_BEFORE_APPROVAL"));
        this._playlist_versions.reload();
        return;
      }
      await el(playlist_id);
      this._playlist_service.setPlaylistApprovalStatus(playlist_id, true);
      notifySuccess(i18n("SIGNAGE_MANAGER.PLAYLIST_APPROVED"));
      this._dialog_ref.close(true);
      this._context.changed();
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_APPROVE_ERROR"));
    } finally {
      this.loading.set("");
      this._dialog_ref.disableClose = false;
    }
  }
  previewItem(item) {
    this._media_service.previewMedia(item);
  }
  static {
    this.\u0275fac = function PlaylistApproveModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistApproveModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistApproveModalComponent, selectors: [["playlist-approve-modal"]], decls: 8, vars: 5, consts: [[1, "p-2"], [1, "bg-base-200", "rounded-sm", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[60vh]", "gap-2", "overflow-auto", "py-2"], ["role", "alert", 1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [3, "versions", "media"], [1, "bg-base-200", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "w-40", 3, "click", "disabled"], [1, "text-error", "text-4xl"], [1, "text-sm"], [3, "preview", "versions", "media"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-32", "py-16"], ["diameter", "32"]], template: function PlaylistApproveModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, PlaylistApproveModalComponent_Conditional_5_Template, 4, 3, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, PlaylistApproveModalComponent_Conditional_6_Template, 8, 6)(7, PlaylistApproveModalComponent_Conditional_7_Template, 5, 1, "main");
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
                    @if (versions_error()) {
                        <div
                            class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                            role="alert"
                        >
                            <icon class="text-error text-4xl">error</icon>
                            <p class="text-sm">
                                {{
                                    'SIGNAGE_MANAGER.PLAYLIST_VERSIONS_LOAD_ERROR'
                                        | translate
                                }}
                            </p>
                        </div>
                    } @else {
                        <playlist-approval-preview
                            [versions]="playlist_versions()"
                            [media]="playlist_media()"
                            (preview)="previewItem($event)"
                        />
                    }
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
                        [disabled]="!versions_loaded()"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistApproveModalComponent, { className: "PlaylistApproveModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-approve-modal.component.ts", lineNumber: 125 });
})();
export {
  PlaylistApproveModalComponent
};
//# debugId=4158e62e-7eb7-5d10-a3a8-fa5d72be1212
//# sourceMappingURL=playlist-approve-modal.component-LM46722I.js.map
