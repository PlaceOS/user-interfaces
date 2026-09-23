import {
  PlaylistApprovalPreviewComponent
} from "./chunk-YCEMIRQD.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-5KDACSEJ.js";
import "./chunk-2KR4UBYG.js";
import "./chunk-XPSZ5LG6.js";
import "./chunk-PUH3M47P.js";
import {
  SignageService
} from "./chunk-WDYM7PDF.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-XASXFKEM.js";
import "./chunk-2SQ7BBBV.js";
import "./chunk-2KM254EA.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HCKZTBON.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-VZ73B46P.js";
import "./chunk-B6XI7VOD.js";
import {
  playlistMediaItems
} from "./chunk-2JBYYBTH.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4RZU6Z3I.js";
import {
  TranslatePipe
} from "./chunk-PHOFLDSC.js";
import "./chunk-VK7CM6JR.js";
import "./chunk-JUNGKQZF.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Jh,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgClass,
  NgControlStatus,
  NgModel,
  el,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  notifyWarn,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KD4PLTV2.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/playlist-request-approval-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PlaylistRequestApprovalModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.CLOSE_REQUEST_APPROVAL"));
  }
}
function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_1_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.name || item_r4.id, " ");
  }
}
function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 14)(11, "mat-select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_1_Template_mat_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selected_approver_id, $event) || (ctx_r2.selected_approver_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "mat-option", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_1_For_16_Template, 2, 2, "mat-option", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 18);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 14)(22, "textarea", 19);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_1_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.message, $event) || (ctx_r2.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "SIGNAGE_MANAGER.PLAYLIST_LABEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.data.playlist.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "SIGNAGE_MANAGER.APPROVER"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selected_approver_id);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "SIGNAGE_MANAGER.ANYONE"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.data.approvers);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, "SIGNAGE_MANAGER.MESSAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 16, "SIGNAGE_MANAGER.APPROVERS_NOTE_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.message);
    \u0275\u0275control();
  }
}
function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "playlist-approval-preview", 20);
    \u0275\u0275listener("preview", function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_13_Template_playlist_approval_preview_preview_0_listener($event) {
      \u0275\u0275restoreView(_r5);
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
function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CANCEL"), " ");
  }
}
function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
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
function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.REQUEST_APPROVAL"), " ");
  }
}
function PlaylistRequestApprovalModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_1_Template, 24, 18);
    \u0275\u0275elementStart(2, "button", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function PlaylistRequestApprovalModalComponent_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePreview());
    });
    \u0275\u0275elementStart(4, "div")(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "icon", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_13_Template, 1, 2, "playlist-approval-preview", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "footer", 9);
    \u0275\u0275conditionalCreate(15, PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_15_Template, 3, 3, "button", 10);
    \u0275\u0275conditionalCreate(16, PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_16_Template, 3, 4, "button", 11);
    \u0275\u0275conditionalCreate(17, PlaylistRequestApprovalModalComponent_Conditional_5_Conditional_17_Template, 3, 3, "button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.show_preview() ? "w-[50rem]" : "w-[28rem]");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.show_preview() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", ctx_r2.show_preview());
    \u0275\u0275attribute("aria-pressed", ctx_r2.show_preview())("aria-label", \u0275\u0275pipeBind1(3, 13, ctx_r2.show_preview() ? "SIGNAGE_MANAGER.HIDE_APPROVAL_CHANGES" : "SIGNAGE_MANAGER.SHOW_APPROVAL_CHANGES"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "SIGNAGE_MANAGER.PREVIEW_CHANGES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 17, "SIGNAGE_MANAGER.PREVIEW_CHANGES_HINT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.show_preview() ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.show_preview() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.show_preview() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.show_preview() && ctx_r2.can_update() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.show_preview() ? 17 : -1);
  }
}
function PlaylistRequestApprovalModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main")(1, "div", 23);
    \u0275\u0275element(2, "mat-spinner", 24);
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
var PlaylistRequestApprovalModalComponent = class _PlaylistRequestApprovalModalComponent {
  constructor() {
    this._service = inject(SignageService);
    this.data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.selected_approver_id = signal(
      this.data.selected_approver_id || "",
      ...ngDevMode ? [{ debugName: "selected_approver_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.message = signal(
      "",
      ...ngDevMode ? [{ debugName: "message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_preview = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_preview" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    this.playlist_versions = signal(
      [],
      ...ngDevMode ? [{ debugName: "playlist_versions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_media = () => this.playlist_versions().map((playlist) => playlistMediaItems(playlist));
  }
  togglePreview() {
    const show_preview = !this.show_preview();
    this.show_preview.set(show_preview);
    if (show_preview)
      void this._loadPlaylistVersions();
  }
  async _loadPlaylistVersions() {
    if (this.playlist_versions().length)
      return this.playlist_versions();
    const playlist_id = this.data?.playlist?.id || "";
    if (!playlist_id)
      return [];
    this.loading.set(i18n("SIGNAGE_MANAGER.LOADING_VERSIONS"));
    try {
      const versions = await Jh(playlist_id, { limit: 2 });
      this.playlist_versions.set(versions);
      this.has_previous_version.set(versions.length > 1);
      return versions;
    } finally {
      this.loading.set("");
    }
  }
  submit() {
    this._dialog_ref.close({
      approver_id: this.selected_approver_id(),
      message: this.message().trim()
    });
  }
  async undoChanges() {
    if (!this.can_update()) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"));
      return;
    }
    const [, previous_version] = await this._loadPlaylistVersions();
    if (!previous_version?.items)
      return;
    this.loading.set(i18n("SIGNAGE_MANAGER.UNDOING_CHANGES"));
    this._dialog_ref.disableClose = true;
    try {
      await el(this.data.playlist.id, previous_version.items);
      this._service.setPlaylistApprovalStatus(this.data.playlist.id, false);
      notifySuccess(i18n("SIGNAGE_MANAGER.PLAYLIST_REVERTED"));
      this._dialog_ref.close();
      this._service.changed();
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_REVERT_ERROR"));
    } finally {
      this.loading.set("");
      this._dialog_ref.disableClose = false;
    }
  }
  previewItem(item) {
    this._service.previewMedia(item);
  }
  static {
    this.\u0275fac = function PlaylistRequestApprovalModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistRequestApprovalModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistRequestApprovalModalComponent, selectors: [["playlist-request-approval-modal"]], decls: 7, vars: 5, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[70vh]", "max-w-[calc(100vw-2rem)]", "flex-col", "gap-4", "overflow-auto", "px-4", "pt-2", "pb-4", "max-md:w-auto", "max-md:flex-1", 3, "ngClass"], ["type", "button", "matRipple", "", 1, "border-base-300", "bg-base-100", "flex", "w-full", "items-center", "justify-between", "rounded-sm", "border", "p-2", "text-left", 3, "click"], [1, "font-medium"], [1, "text-base-content/70", "text-sm"], [1, "px-2", "text-2xl"], [3, "versions", "media"], [1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "flex", "justify-end", "gap-2", "border-t", "p-4"], ["btn", "", "type", "button", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-36"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "w-40", 3, "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "w-44"], ["for", "approval-approver"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["name", "approval-approver", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "message"], ["matInput", "", "name", "message", 1, "min-h-28", "resize-y", 3, "ngModelChange", "placeholder", "ngModel"], [3, "preview", "versions", "media"], ["btn", "", "type", "button", "matRipple", "", 1, "inverse", "w-40", 3, "click", "disabled"], ["btn", "", "type", "button", "matRipple", "", 1, "w-44", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-32", "py-16"], ["diameter", "32"]], template: function PlaylistRequestApprovalModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, PlaylistRequestApprovalModalComponent_Conditional_4_Template, 4, 3, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, PlaylistRequestApprovalModalComponent_Conditional_5_Template, 18, 19)(6, PlaylistRequestApprovalModalComponent_Conditional_6_Template, 5, 1, "main");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.REQUEST_APPROVAL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
      IconComponent,
      PlaylistApprovalPreviewComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistRequestApprovalModalComponent, [{
    type: Component,
    args: [{
      selector: "playlist-request-approval-modal",
      template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.REQUEST_APPROVAL' | translate }}
            </h2>
            @if (!loading()) {
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CLOSE_REQUEST_APPROVAL' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="flex max-h-[70vh] max-w-[calc(100vw-2rem)] flex-col gap-4 overflow-auto px-4 pt-2 pb-4 max-md:w-auto max-md:flex-1"
                [ngClass]="show_preview() ? 'w-[50rem]' : 'w-[28rem]'"
            >
                @if (!show_preview()) {
                    <div>
                        <div class="text-base-content/70 text-sm">
                            {{ 'SIGNAGE_MANAGER.PLAYLIST_LABEL' | translate }}
                        </div>
                        <div class="font-medium">{{ data.playlist.name }}</div>
                    </div>
                    <div>
                        <label for="approval-approver">{{
                            'SIGNAGE_MANAGER.APPROVER' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                name="approval-approver"
                                [(ngModel)]="selected_approver_id"
                            >
                                <mat-option value="">{{
                                    'SIGNAGE_MANAGER.ANYONE' | translate
                                }}</mat-option>
                                @for (item of data.approvers; track item.id) {
                                    <mat-option [value]="item.id">
                                        {{ item.name || item.id }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="message">{{
                            'SIGNAGE_MANAGER.MESSAGE' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <textarea
                                matInput
                                name="message"
                                class="min-h-28 resize-y"
                                [placeholder]="
                                    'SIGNAGE_MANAGER.APPROVERS_NOTE_PLACEHOLDER'
                                        | translate
                                "
                                [(ngModel)]="message"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                <button
                    type="button"
                    matRipple
                    class="border-base-300 bg-base-100 flex w-full items-center justify-between rounded-sm border p-2 text-left"
                    [class.bg-base-200]="show_preview()"
                    [attr.aria-pressed]="show_preview()"
                    [attr.aria-label]="
                        (show_preview()
                            ? 'SIGNAGE_MANAGER.HIDE_APPROVAL_CHANGES'
                            : 'SIGNAGE_MANAGER.SHOW_APPROVAL_CHANGES'
                        ) | translate
                    "
                    (click)="togglePreview()"
                >
                    <div>
                        <div class="font-medium">
                            {{ 'SIGNAGE_MANAGER.PREVIEW_CHANGES' | translate }}
                        </div>
                        <div class="text-base-content/70 text-sm">
                            {{
                                'SIGNAGE_MANAGER.PREVIEW_CHANGES_HINT'
                                    | translate
                            }}
                        </div>
                    </div>
                    <icon class="px-2 text-2xl">{{
                        show_preview() ? 'visibility_off' : 'visibility'
                    }}</icon>
                </button>
                @if (show_preview()) {
                    <playlist-approval-preview
                        [versions]="playlist_versions()"
                        [media]="playlist_media()"
                        (preview)="previewItem($event)"
                    />
                }
            </main>
            <footer
                class="border-base-300 bg-base-100 sticky bottom-0 flex justify-end gap-2 border-t p-4"
            >
                @if (!show_preview()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="inverse w-36"
                        mat-dialog-close
                    >
                        {{ 'COMMON.CANCEL' | translate }}
                    </button>
                }
                @if (show_preview() && can_update()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="inverse w-40"
                        [disabled]="!has_previous_version()"
                        (click)="undoChanges()"
                    >
                        {{ 'SIGNAGE_MANAGER.UNDO_CHANGES' | translate }}
                    </button>
                }
                @if (!show_preview()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-44"
                        (click)="submit()"
                    >
                        {{ 'SIGNAGE_MANAGER.REQUEST_APPROVAL' | translate }}
                    </button>
                }
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
    `,
      imports: [
        CommonModule,
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        IconComponent,
        PlaylistApprovalPreviewComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistRequestApprovalModalComponent, { className: "PlaylistRequestApprovalModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-request-approval-modal.component.ts", lineNumber: 217 });
})();
export {
  PlaylistRequestApprovalModalComponent
};
//# debugId=adeb8045-90d7-52ef-a866-61d30fa4610e
//# sourceMappingURL=playlist-request-approval-modal.component-MYCNVLH3.js.map
