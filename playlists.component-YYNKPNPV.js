import {
  SignageDisplayService
} from "./chunk-7NTQIMJS.js";
import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-NQPSWHZM.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-IHHMH6X4.js";
import {
  PlaylistThumbnailComponent
} from "./chunk-C2W43Y64.js";
import {
  GroupBreadcrumbsComponent
} from "./chunk-RPIKSTML.js";
import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-6N2AQO23.js";
import "./chunk-ZMRF6RSE.js";
import {
  SignageZoneService
} from "./chunk-X25SZVTO.js";
import {
  LoadErrorComponent
} from "./chunk-QQANERJJ.js";
import {
  IntersectDirective
} from "./chunk-54ZLEWFI.js";
import {
  SignageSharedWithComponent
} from "./chunk-3YAADUIS.js";
import {
  MediaDurationPipe
} from "./chunk-WNQKXXHR.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-TLTFQ6I6.js";
import "./chunk-7J7LTBQQ.js";
import "./chunk-3QKGP3YM.js";
import {
  MediaThumbnailComponent
} from "./chunk-O5WRZECE.js";
import {
  SignageMediaService
} from "./chunk-RHMT4PAO.js";
import "./chunk-H3BVMLHF.js";
import "./chunk-EBPED7MY.js";
import "./chunk-FZRJJ3PO.js";
import "./chunk-DZ75ROTS.js";
import {
  SignageInventoryService,
  SignagePlaylistService,
  playlistSchedules
} from "./chunk-FSD5ODU2.js";
import {
  playlistAnimation,
  playlistLoopDuration,
  playlistNextPlayLabels,
  playlistScheduleExpiryTooltip,
  playlistScheduleLabel,
  playlistScheduleNextPlayLabels,
  playlistStatus
} from "./chunk-VTNUNR3F.js";
import "./chunk-VHG5CUDZ.js";
import "./chunk-M3RPYBOW.js";
import "./chunk-4625PWRO.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-GBUKG7S5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-BUXOUYWY.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BZ7UY2RA.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-G4RAFQJW.js";
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
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-VCQ7GNNO.js";
import {
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Injector,
  Input,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Os,
  ViewChildren,
  _r,
  afterNextRender,
  afterRenderEffect,
  computed,
  effect,
  i18n,
  inject,
  input,
  linkedSignal,
  notifyWarn,
  resource,
  setClassMetadata,
  signal,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-VC4MJRPT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/playlists/playlist-actions.component.ts
function PlaylistActionsComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistActionsComponent_Conditional_0_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approvePlaylist());
    });
    \u0275\u0275elementStart(3, "icon", 4);
    \u0275\u0275text(4, "order_approve");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST"));
  }
}
function PlaylistActionsComponent_Conditional_0_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
}
function PlaylistActionsComponent_Conditional_0_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 4);
    \u0275\u0275text(1, "approval");
    \u0275\u0275elementEnd();
  }
}
function PlaylistActionsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistActionsComponent_Conditional_0_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestApproval());
    });
    \u0275\u0275conditionalCreate(3, PlaylistActionsComponent_Conditional_0_Conditional_1_Conditional_3_Template, 1, 0, "mat-spinner", 6)(4, PlaylistActionsComponent_Conditional_0_Conditional_1_Conditional_4_Template, 2, 0, "icon", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP"))("disabled", ctx_r1.approval_request_loading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.approval_request_loading() ? 3 : 4);
  }
}
function PlaylistActionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PlaylistActionsComponent_Conditional_0_Conditional_0_Template, 5, 6, "button", 0)(1, PlaylistActionsComponent_Conditional_0_Conditional_1_Template, 5, 8, "button", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.can_approve() ? 0 : 1);
  }
}
function PlaylistActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistActionsComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST"));
  }
}
function PlaylistActionsComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
}
function PlaylistActionsComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1, "content_copy");
    \u0275\u0275elementEnd();
  }
}
function PlaylistActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistActionsComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.duplicatePlaylist());
    });
    \u0275\u0275conditionalCreate(3, PlaylistActionsComponent_Conditional_2_Conditional_3_Template, 1, 0, "mat-spinner", 6)(4, PlaylistActionsComponent_Conditional_2_Conditional_4_Template, 2, 0, "icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.DUPLICATE_PLAYLIST_TOOLTIP"))("disabled", ctx_r1.duplicating());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.DUPLICATE_SELECTED_PLAYLIST"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.duplicating() ? 3 : 4);
  }
}
function PlaylistActionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistActionsComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sharePlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "ios_share");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST"));
  }
}
function PlaylistActionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistActionsComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removePlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST"));
  }
}
var PlaylistActionsComponent = class _PlaylistActionsComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._playlist_service = inject(SignagePlaylistService);
    this._router = inject(Router);
    this.selected_playlist = this._playlist_service.selected_playlist;
    this.requires_approval = this._playlist_service.selected_playlist_requires_approval;
    this.can_approve = this._context.can_approve;
    this.can_update = this._context.can_update;
    this.can_create = this._context.can_create;
    this.can_delete = this._context.can_delete;
    this.can_share = this._context.can_share;
    this.approval_request_loading = this._playlist_service.playlist_approval_request_loading;
    this.duplicating = this._playlist_service.playlist_duplicating;
  }
  editPlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._playlist_service.editPlaylist(playlist);
  }
  removePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._playlist_service.removePlaylist(playlist);
  }
  approvePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._playlist_service.approvePlaylist(playlist);
  }
  requestApproval() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._playlist_service.requestPlaylistApproval(playlist);
  }
  async duplicatePlaylist() {
    const playlist = this.selected_playlist();
    if (!playlist)
      return;
    const copy = await this._playlist_service.duplicatePlaylist(playlist);
    if (copy?.id) {
      void this._router.navigate(["/playlists", copy.id], {
        queryParamsHandling: "merge"
      });
    }
  }
  sharePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._playlist_service.sharePlaylist(playlist);
  }
  static {
    this.\u0275fac = function PlaylistActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistActionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistActionsComponent, selectors: [["playlist-actions"]], decls: 5, vars: 5, consts: [["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip", "disabled"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-warning"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip", "disabled"], ["diameter", "20"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"]], template: function PlaylistActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, PlaylistActionsComponent_Conditional_0_Template, 2, 1);
        \u0275\u0275conditionalCreate(1, PlaylistActionsComponent_Conditional_1_Template, 5, 6, "button", 0);
        \u0275\u0275conditionalCreate(2, PlaylistActionsComponent_Conditional_2_Template, 5, 8, "button", 1);
        \u0275\u0275conditionalCreate(3, PlaylistActionsComponent_Conditional_3_Template, 5, 6, "button", 0);
        \u0275\u0275conditionalCreate(4, PlaylistActionsComponent_Conditional_4_Template, 5, 6, "button", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.requires_approval() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_update() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_create() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_share() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_delete() ? 4 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=playlist-actions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistActionsComponent, [{
    type: Component,
    args: [{ selector: "playlist-actions", template: `
        @if (requires_approval()) {
            @if (can_approve()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP' | translate
                    "
                    (click)="approvePlaylist()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST' | translate
                    "
                >
                    <icon class="text-warning">order_approve</icon>
                </button>
            } @else {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP'
                            | translate
                    "
                    (click)="requestApproval()"
                    [disabled]="approval_request_loading()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED' | translate
                    "
                >
                    @if (approval_request_loading()) {
                        <mat-spinner diameter="20" />
                    } @else {
                        <icon class="text-warning">approval</icon>
                    }
                </button>
            }
        }
        @if (can_update()) {
            <button
                icon
                default
                type="button"
                matRipple
                [matTooltip]="
                    'SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP' | translate
                "
                (click)="editPlaylist()"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST' | translate
                "
            >
                <icon>edit</icon>
            </button>
        }
        @if (can_create()) {
            <button
                icon
                default
                type="button"
                matRipple
                [matTooltip]="
                    'SIGNAGE_MANAGER.DUPLICATE_PLAYLIST_TOOLTIP' | translate
                "
                (click)="duplicatePlaylist()"
                [disabled]="duplicating()"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.DUPLICATE_SELECTED_PLAYLIST' | translate
                "
            >
                @if (duplicating()) {
                    <mat-spinner diameter="20" />
                } @else {
                    <icon>content_copy</icon>
                }
            </button>
        }
        @if (can_share()) {
            <button
                icon
                default
                type="button"
                matRipple
                [matTooltip]="
                    'SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP' | translate
                "
                (click)="sharePlaylist()"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST' | translate
                "
            >
                <icon>ios_share</icon>
            </button>
        }
        @if (can_delete()) {
            <button
                icon
                default
                error
                type="button"
                matRipple
                [matTooltip]="
                    'SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP' | translate
                "
                (click)="removePlaylist()"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST' | translate
                "
            >
                <icon>delete</icon>
            </button>
        }
    `, imports: [
      MatRippleModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;c56154a65d2f25aeb30f9e3d4fddc8d29a75b1cfe211ec52ebd65b8c2849fb61;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlist-actions.component.ts */\n:host {\n  display: contents;\n}\n/*# sourceMappingURL=playlist-actions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistActionsComponent, { className: "PlaylistActionsComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-actions.component.ts", lineNumber: 148 });
})();

// apps/signage-manager/src/app/playlists/playlist-header.component.ts
var _c0 = (a0) => ({ count: a0 });
function PlaylistHeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistHeaderComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.NEW_PLAYLIST"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.CREATE_NEW_PLAYLIST"));
  }
}
var PlaylistHeaderComponent = class _PlaylistHeaderComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._playlist_service = inject(SignagePlaylistService);
    this.total_count = this._playlist_service.playlists_total;
    this.can_create = this._context.can_create;
  }
  addPlaylist() {
    this._playlist_service.addPlaylist();
  }
  static {
    this.\u0275fac = function PlaylistHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistHeaderComponent, selectors: [["playlist-header"]], decls: 12, vars: 10, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "text-xl", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "text-xl", 3, "click", "matTooltip"]], template: function PlaylistHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "group-breadcrumbs");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 5);
        \u0275\u0275conditionalCreate(11, PlaylistHeaderComponent_Conditional_11_Template, 5, 6, "button", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "SIGNAGE_MANAGER.PLAYLISTS_PAGE_TITLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 5, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(8, _c0, ctx.total_count())), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.can_create() ? 11 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      GroupBreadcrumbsComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistHeaderComponent, [{
    type: Component,
    args: [{
      selector: "playlist-header",
      template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.PLAYLISTS_PAGE_TITLE' | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    <div class="text-sm opacity-60">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate: { count: total_count() }
                        }}
                    </div>
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            @if (can_create()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl"
                    (click)="addPlaylist()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_PLAYLIST' | translate
                    "
                    [matTooltip]="'SIGNAGE_MANAGER.NEW_PLAYLIST' | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent,
        MatTooltipModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistHeaderComponent, { className: "PlaylistHeaderComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-header.component.ts", lineNumber: 56 });
})();

// apps/signage-manager/src/app/playlists/playlist-item-details.component.ts
var _c02 = (a0) => ({ count: a0 });
var _c1 = (a0) => ["/zones", a0];
var _c2 = (a0) => ({ name: a0 });
var _c3 = (a0) => ["/displays", a0];
var _forTrack0 = ($index, $item) => $item.id;
function PlaylistItemDetailsComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist().description, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ENABLED"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.ORIENTATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist().orientation || \u0275\u0275pipeBind1(6, 4, "COMMON.LOCATION_UNSPECIFIED"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.VALID_FROM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx_r1.valid_from(), "longDate"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.EXPIRES_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx_r1.valid_until(), "longDate"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_49_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schedule_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r1.schedule_expiry_tooltips()[$index_r4])("matTooltipDisabled", !ctx_r1.schedule_expiry_tooltips()[$index_r4]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", schedule_r3, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_49_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const play_time_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", play_time_r5, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_49_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275repeaterCreate(5, PlaylistItemDetailsComponent_Conditional_0_Conditional_49_For_6_Template, 2, 3, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25)(8, "div", 26);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 27);
    \u0275\u0275repeaterCreate(12, PlaylistItemDetailsComponent_Conditional_0_Conditional_49_For_13_Template, 2, 1, "div", 28, \u0275\u0275repeaterTrackByIdentity, false, PlaylistItemDetailsComponent_Conditional_0_Conditional_49_ForEmpty_14_Template, 3, 3, "div", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.SCHEDULE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.schedule_labels());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "SIGNAGE_MANAGER.NEXT_5_PLAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.next_play_sessions());
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.PLAY_COUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist().play_count, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(5, _c02, ctx_r1.playlist_zones().length), ctx_r1.playlist_zones().length), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemDetailsComponent_Conditional_0_Conditional_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addZone());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.ADD_ZONE_TO_PLAYLIST_ARIA"));
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", zone_r7.description, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const zone_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeZone($event, zone_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.REMOVE_ZONE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 4, "SIGNAGE_MANAGER.REMOVE_ZONE_FROM_PLAYLIST", \u0275\u0275pureFunction1(7, _c2, zone_r7.display_name || zone_r7.name)));
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "a", 32);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 33);
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_8_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_9_Template, 5, 9, "button", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, zone_r7.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 5, "SIGNAGE_MANAGER.OPEN_ZONE", \u0275\u0275pureFunction1(10, _c2, zone_r7.display_name || zone_r7.name)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", zone_r7.display_name || zone_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(zone_r7.description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 9 : -1);
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Template, 10, 12, "div", 31, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.playlist_zones());
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 39);
    \u0275\u0275text(2, "location_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_ZONES_USE_PLAYLIST"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "SIGNAGE_MANAGER.DISPLAYS_COUNT", \u0275\u0275pureFunction1(5, _c02, ctx_r1.playlist_displays().length), ctx_r1.playlist_displays().length), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemDetailsComponent_Conditional_0_Conditional_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addDisplay());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ADD_DISPLAY_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.ADD_DISPLAY_TO_PLAYLIST_ARIA"));
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r10.description, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const display_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeDisplay($event, display_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const display_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.REMOVE_DISPLAY"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 4, "SIGNAGE_MANAGER.REMOVE_DISPLAY_FROM_PLAYLIST", \u0275\u0275pureFunction1(7, _c2, display_r10.display_name || display_r10.name)));
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "a", 32);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 33);
    \u0275\u0275text(4, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_8_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_9_Template, 5, 9, "button", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c3, display_r10.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 5, "SIGNAGE_MANAGER.OPEN_DISPLAY", \u0275\u0275pureFunction1(10, _c2, display_r10.display_name || display_r10.name)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", display_r10.display_name || display_r10.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(display_r10.description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 9 : -1);
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Template, 10, 12, "div", 31, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.playlist_displays());
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 39);
    \u0275\u0275text(2, "tv_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_DISPLAYS_USE_PLAYLIST"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 2);
    \u0275\u0275listener("selectedIndexChange", function PlaylistItemDetailsComponent_Conditional_0_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_tab.set($event));
    });
    \u0275\u0275elementStart(2, "mat-tab", 3);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, PlaylistItemDetailsComponent_Conditional_0_Conditional_12_Template, 6, 4, "div", 6);
    \u0275\u0275elementStart(13, "div")(14, "div", 7);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, PlaylistItemDetailsComponent_Conditional_0_Conditional_17_Template, 3, 3, "span", 9)(18, PlaylistItemDetailsComponent_Conditional_0_Conditional_18_Template, 3, 3, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "div", 7);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 11);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "div", 7);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 12);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "div", 7);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 11);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(40, PlaylistItemDetailsComponent_Conditional_0_Conditional_40_Template, 7, 6, "div");
    \u0275\u0275elementStart(41, "div")(42, "div", 7);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 11);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, PlaylistItemDetailsComponent_Conditional_0_Conditional_47_Template, 7, 7, "div");
    \u0275\u0275conditionalCreate(48, PlaylistItemDetailsComponent_Conditional_0_Conditional_48_Template, 7, 7, "div");
    \u0275\u0275conditionalCreate(49, PlaylistItemDetailsComponent_Conditional_0_Conditional_49_Template, 15, 7, "div");
    \u0275\u0275conditionalCreate(50, PlaylistItemDetailsComponent_Conditional_0_Conditional_50_Template, 6, 4, "div");
    \u0275\u0275element(51, "signage-shared-with", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "mat-tab");
    \u0275\u0275template(53, PlaylistItemDetailsComponent_Conditional_0_ng_template_53_Template, 2, 7, "ng-template", 14);
    \u0275\u0275elementStart(54, "div", 15)(55, "div", 16)(56, "h5", 17)(57, "icon", 18);
    \u0275\u0275text(58, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(61, PlaylistItemDetailsComponent_Conditional_0_Conditional_61_Template, 5, 6, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 20);
    \u0275\u0275conditionalCreate(63, PlaylistItemDetailsComponent_Conditional_0_Conditional_63_Template, 2, 0)(64, PlaylistItemDetailsComponent_Conditional_0_Conditional_64_Template, 6, 3, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "mat-tab");
    \u0275\u0275template(66, PlaylistItemDetailsComponent_Conditional_0_ng_template_66_Template, 2, 7, "ng-template", 14);
    \u0275\u0275elementStart(67, "div", 15)(68, "div", 16)(69, "h5", 17)(70, "icon", 18);
    \u0275\u0275text(71, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(74, PlaylistItemDetailsComponent_Conditional_0_Conditional_74_Template, 5, 6, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 20);
    \u0275\u0275conditionalCreate(76, PlaylistItemDetailsComponent_Conditional_0_Conditional_76_Template, 2, 0)(77, PlaylistItemDetailsComponent_Conditional_0_Conditional_77_Template, 6, 3, "div", 21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("selectedIndex", ctx_r1.active_tab());
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 30, "COMMON.DETAILS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 32, "FORM.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playlist().description ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 34, "COMMON.STATUS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist().enabled ? 17 : 18);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 36, "SIGNAGE_MANAGER.PLAYBACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 38, ctx_r1.playlist().random ? "SIGNAGE_MANAGER.SHUFFLE" : "SIGNAGE_MANAGER.SEQUENTIAL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 40, "SIGNAGE_MANAGER.DEFAULT_DURATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 42, ctx_r1.playlist().default_duration / 1e3), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 44, "SIGNAGE_MANAGER.DEFAULT_ANIMATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 46, ctx_r1.animation_label()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist().orientation ? 40 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 48, "SIGNAGE_MANAGER.TAB_ITEMS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playlist().valid_from ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playlist().valid_until ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.playlist().distribution ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playlist().play_count ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("item_id", ctx_r1.playlist().id)("group_id", ctx_r1.selected_group_id())("allow_unshare", ctx_r1.can_update())("compact_label", true);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(60, 50, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(58, _c02, ctx_r1.playlist_zones().length), ctx_r1.playlist_zones().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 61 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist_zones().length > 0 ? 63 : 64);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(73, 54, "SIGNAGE_MANAGER.DISPLAYS_COUNT", \u0275\u0275pureFunction1(60, _c02, ctx_r1.playlist_displays().length), ctx_r1.playlist_displays().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 74 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist_displays().length > 0 ? 76 : 77);
  }
}
function PlaylistItemDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 40);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.SELECT_PLAYLIST_DETAILS"), " ");
  }
}
var PlaylistItemDetailsComponent = class _PlaylistItemDetailsComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._display_service = inject(SignageDisplayService);
    this._inventory_service = inject(SignageInventoryService);
    this._playlist_service = inject(SignagePlaylistService);
    this._zone_service = inject(SignageZoneService);
    this.playlist = this._playlist_service.selected_playlist;
    this.active_tab = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "active_tab" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.playlist,
      computation: (playlist, previous) => previous && playlist?.id === previous.source?.id ? previous.value : 0
    }));
    this._items = this._playlist_service.playlist_media_items;
    this._displays = this._display_service.displays;
    this._zones = this._zone_service.zones;
    this._inventory = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_inventory" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.playlist()?.id ? { change: this._context.data_change() } : void 0,
      loader: () => this._inventory_service.loadSignageInventory()
    }));
    this.item_count = computed(
      () => this._playlist_service.playlist_media_error() ? "\u2014" : this._items().length,
      ...ngDevMode ? [{ debugName: "item_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = this._context.can_update;
    this.selected_group_id = computed(
      () => this._context.selected_group()?.group.id || "",
      ...ngDevMode ? [{ debugName: "selected_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_displays = computed(
      () => {
        const pl = this.playlist();
        if (!pl)
          return [];
        const displays = this._inventory.hasValue() ? this._inventory.value().displays : this._displays();
        return displays.filter((d) => d.playlists?.includes(pl.id));
      },
      ...ngDevMode ? [{ debugName: "playlist_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_zones = computed(
      () => {
        const pl = this.playlist();
        if (!pl)
          return [];
        const zones = this._inventory.hasValue() ? this._inventory.value().zones : this._zones();
        return zones.filter((z) => z.playlists?.includes(pl.id));
      },
      ...ngDevMode ? [{ debugName: "playlist_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.animation_label = computed(
      () => {
        const pl = this.playlist();
        if (!pl)
          return "COMMON.DEFAULT";
        switch (playlistAnimation(pl)) {
          case Os.Cut:
            return "SIGNAGE_MANAGER.ANIM_CUT";
          case Os.CrossFade:
            return "SIGNAGE_MANAGER.ANIM_CROSS_FADE";
          case Os.SlideTop:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_TOP";
          case Os.SlideLeft:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT";
          case Os.SlideRight:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT";
          case Os.SlideBottom:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM";
          default:
            return "COMMON.DEFAULT";
        }
      },
      ...ngDevMode ? [{ debugName: "animation_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valid_from = computed(
      () => {
        const pl = this.playlist();
        if (!pl?.valid_from)
          return "";
        return pl.valid_from * 1e3;
      },
      ...ngDevMode ? [{ debugName: "valid_from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valid_until = computed(
      () => {
        const pl = this.playlist();
        if (!pl?.valid_until)
          return "";
        return pl.valid_until * 1e3;
      },
      ...ngDevMode ? [{ debugName: "valid_until" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schedule_labels = computed(
      () => {
        const pl = this.playlist();
        if (!pl || pl.distribution)
          return [];
        return playlistSchedules(pl).map((schedule) => playlistScheduleLabel(schedule));
      },
      ...ngDevMode ? [{ debugName: "schedule_labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schedule_expiry_tooltips = computed(
      () => {
        const pl = this.playlist();
        if (!pl || pl.distribution)
          return [];
        return playlistSchedules(pl).map((schedule) => playlistScheduleExpiryTooltip(schedule));
      },
      ...ngDevMode ? [{ debugName: "schedule_expiry_tooltips" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.next_play_sessions = computed(
      () => {
        const pl = this.playlist();
        if (!pl || pl.distribution)
          return [];
        return playlistNextPlayLabels(playlistSchedules(pl));
      },
      ...ngDevMode ? [{ debugName: "next_play_sessions" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  addDisplay() {
    const playlist = this.playlist();
    if (playlist)
      this._display_service.addDisplayToPlaylist(playlist);
  }
  addZone() {
    const playlist = this.playlist();
    if (playlist)
      this._zone_service.addZoneToPlaylist(playlist);
  }
  removeDisplay(event, display) {
    event.preventDefault();
    event.stopPropagation();
    const playlist = this.playlist();
    if (playlist)
      this._display_service.removeDisplayFromPlaylist(playlist, display);
  }
  removeZone(event, zone) {
    event.preventDefault();
    event.stopPropagation();
    const playlist = this.playlist();
    if (playlist)
      this._zone_service.removeZoneFromPlaylist(playlist, zone);
  }
  static {
    this.\u0275fac = function PlaylistItemDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistItemDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistItemDetailsComponent, selectors: [["playlist-item-details"]], decls: 2, vars: 1, consts: [[1, "border-base-300", "flex", "h-full", "min-w-60", "flex-col", "overflow-hidden", "border-l", "lg:w-84"], [1, "border-base-300", "text-base-content/70", "flex", "min-w-60", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "border-l", "p-8"], [1, "flex-1", "overflow-hidden", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "h-full", "overflow-auto"], [1, "flex", "w-full", "flex-col", "gap-2", "p-4"], [1, "w-full"], [1, "text-base-content/70", "mb-1", "text-xs", "font-medium", "tracking-wider", "uppercase"], [1, "text-sm", "font-medium"], [1, "bg-success", "text-success-content", "rounded", "px-2", "py-1", "text-xs", "font-bold", "uppercase"], [1, "bg-warning", "text-warning-content", "rounded", "px-2", "py-1", "text-xs", "font-bold", "uppercase"], [1, "text-sm"], [1, "font-mono", "text-sm"], ["type", "playlists", 1, "mt-2", 3, "item_id", "group_id", "allow_unshare", "compact_label"], ["mat-tab-label", ""], [1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], [1, "min-h-0", "flex-1", "gap-2", "overflow-auto", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-sm", "capitalize"], [1, "space-y-1", "text-sm"], [3, "matTooltip", "matTooltipDisabled"], [1, "mt-2"], [1, "text-base-content/60", "mb-1", "text-xs", "font-medium", "tracking-wide", "uppercase"], [1, "text-base-content/80", "space-y-0.5", "font-mono", "text-xs", "leading-tight"], [1, "truncate"], [1, "text-base-content/60"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-0.5", "pl-1"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-w-0", "flex-1", "items-center", "gap-3", "rounded-lg", "p-1", "no-underline", "transition-colors", 3, "routerLink"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "text-base-content/70", "truncate", "text-xs"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 1, "m-1", "text-sm", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 1, "m-1", "text-sm", 3, "click", "matTooltip"], [1, "text-4xl"], [1, "text-6xl"]], template: function PlaylistItemDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, PlaylistItemDetailsComponent_Conditional_0_Template, 78, 62, "div", 0)(1, PlaylistItemDetailsComponent_Conditional_1_Template, 6, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.playlist() ? 0 : 1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTabsModule,
      MatTabLabel,
      MatTab,
      MatTabGroup,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      IconComponent,
      SignageSharedWithComponent,
      DatePipe,
      MediaDurationPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=playlist-item-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistItemDetailsComponent, [{
    type: Component,
    args: [{ selector: "playlist-item-details", template: `
        @if (playlist()) {
            <div
                class="border-base-300 flex h-full min-w-60 flex-col overflow-hidden border-l lg:w-84"
            >
                <mat-tab-group
                    class="flex-1 overflow-hidden"
                    [selectedIndex]="active_tab()"
                    (selectedIndexChange)="active_tab.set($event)"
                >
                    <mat-tab [label]="'COMMON.DETAILS' | translate">
                        <div class="h-full overflow-auto">
                            <div class="flex w-full flex-col gap-2 p-4">
                                <div class="w-full">
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{ 'FORM.NAME' | translate }}
                                    </div>
                                    <div class="text-sm font-medium">
                                        {{ playlist().name }}
                                    </div>
                                </div>
                                @if (playlist().description) {
                                    <div class="w-full">
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'COMMON.DESCRIPTION' | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().description }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{ 'COMMON.STATUS' | translate }}
                                    </div>
                                    @if (playlist().enabled) {
                                        <span
                                            class="bg-success text-success-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {{ 'COMMON.ENABLED' | translate }}
                                        </span>
                                    } @else {
                                        <span
                                            class="bg-warning text-warning-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {{ 'COMMON.DISABLED' | translate }}
                                        </span>
                                    }
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.PLAYBACK'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{
                                            (playlist().random
                                                ? 'SIGNAGE_MANAGER.SHUFFLE'
                                                : 'SIGNAGE_MANAGER.SEQUENTIAL'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.DEFAULT_DURATION'
                                                | translate
                                        }}
                                    </div>
                                    <div class="font-mono text-sm">
                                        {{
                                            playlist().default_duration / 1000
                                                | mediaDuration
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.DEFAULT_ANIMATION'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{ animation_label() | translate }}
                                    </div>
                                </div>
                                @if (playlist().orientation) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.ORIENTATION'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm capitalize">
                                            {{
                                                playlist().orientation ||
                                                    ('COMMON.LOCATION_UNSPECIFIED'
                                                        | translate)
                                            }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TAB_ITEMS'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{ item_count() }}
                                    </div>
                                </div>
                                @if (playlist().valid_from) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.VALID_FROM'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{
                                                valid_from() | date: 'longDate'
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (playlist().valid_until) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{ 'FORM.EXPIRES_AT' | translate }}
                                        </div>
                                        <div class="text-sm">
                                            {{
                                                valid_until() | date: 'longDate'
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (!playlist().distribution) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.SCHEDULE'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="space-y-1 text-sm">
                                            @for (
                                                schedule of schedule_labels();
                                                track schedule
                                            ) {
                                                <div
                                                    [matTooltip]="
                                                        schedule_expiry_tooltips()[
                                                            $index
                                                        ]
                                                    "
                                                    [matTooltipDisabled]="
                                                        !schedule_expiry_tooltips()[
                                                            $index
                                                        ]
                                                    "
                                                >
                                                    {{ schedule }}
                                                </div>
                                            }
                                        </div>
                                        <div class="mt-2">
                                            <div
                                                class="text-base-content/60 mb-1 text-xs font-medium tracking-wide uppercase"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.NEXT_5_PLAYS'
                                                        | translate
                                                }}
                                            </div>
                                            <div
                                                class="text-base-content/80 space-y-0.5 font-mono text-xs leading-tight"
                                            >
                                                @for (
                                                    play_time of next_play_sessions();
                                                    track play_time
                                                ) {
                                                    <div class="truncate">
                                                        {{ play_time }}
                                                    </div>
                                                } @empty {
                                                    <div
                                                        class="text-base-content/60"
                                                    >
                                                        {{
                                                            'SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES'
                                                                | translate
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                @if (playlist().play_count) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.PLAY_COUNT'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().play_count }}
                                        </div>
                                    </div>
                                }
                                <signage-shared-with
                                    class="mt-2"
                                    type="playlists"
                                    [item_id]="playlist().id"
                                    [group_id]="selected_group_id()"
                                    [allow_unshare]="can_update()"
                                    [compact_label]="true"
                                />
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            {{
                                'SIGNAGE_MANAGER.ZONES_COUNT'
                                    | translate
                                        : { count: playlist_zones().length }
                                        : playlist_zones().length
                            }}
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">layers</icon>
                                    {{
                                        'SIGNAGE_MANAGER.ZONES_COUNT'
                                            | translate
                                                : {
                                                      count: playlist_zones()
                                                          .length,
                                                  }
                                                : playlist_zones().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addZone()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_ZONE_TO_PLAYLIST_ARIA'
                                                | translate
                                        "
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1 gap-2 overflow-auto p-2">
                                @if (playlist_zones().length > 0) {
                                    @for (
                                        zone of playlist_zones();
                                        track zone.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/zones',
                                                    zone.id,
                                                ]"
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.OPEN_ZONE'
                                                        | translate
                                                            : {
                                                                  name:
                                                                      zone.display_name ||
                                                                      zone.name,
                                                              }
                                                "
                                            >
                                                <icon
                                                    class="shrink-0 text-xl opacity-60"
                                                    >location_on</icon
                                                >
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm font-medium"
                                                    >
                                                        {{
                                                            zone.display_name ||
                                                                zone.name
                                                        }}
                                                    </div>
                                                    @if (zone.description) {
                                                        <div
                                                            class="text-base-content/70 truncate text-xs"
                                                        >
                                                            {{
                                                                zone.description
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (can_update()) {
                                                <button
                                                    icon
                                                    default
                                                    error
                                                    type="button"
                                                    class="m-1 text-sm"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_ZONE'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removeZone($event, zone)
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_ZONE_FROM_PLAYLIST'
                                                            | translate
                                                                : {
                                                                      name:
                                                                          zone.display_name ||
                                                                          zone.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                                    >
                                        <icon class="text-4xl"
                                            >location_off</icon
                                        >
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.NO_ZONES_USE_PLAYLIST'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            {{
                                'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                    | translate
                                        : { count: playlist_displays().length }
                                        : playlist_displays().length
                            }}
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">tv</icon>
                                    {{
                                        'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                            | translate
                                                : {
                                                      count: playlist_displays()
                                                          .length,
                                                  }
                                                : playlist_displays().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_DISPLAY_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addDisplay()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_DISPLAY_TO_PLAYLIST_ARIA'
                                                | translate
                                        "
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1 gap-2 overflow-auto p-2">
                                @if (playlist_displays().length > 0) {
                                    @for (
                                        display of playlist_displays();
                                        track display.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/displays',
                                                    display.id,
                                                ]"
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.OPEN_DISPLAY'
                                                        | translate
                                                            : {
                                                                  name:
                                                                      display.display_name ||
                                                                      display.name,
                                                              }
                                                "
                                            >
                                                <icon
                                                    class="shrink-0 text-xl opacity-60"
                                                    >tv</icon
                                                >
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm font-medium"
                                                    >
                                                        {{
                                                            display.display_name ||
                                                                display.name
                                                        }}
                                                    </div>
                                                    @if (display.description) {
                                                        <div
                                                            class="text-base-content/70 truncate text-xs"
                                                        >
                                                            {{
                                                                display.description
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (can_update()) {
                                                <button
                                                    icon
                                                    default
                                                    error
                                                    class="m-1 text-sm"
                                                    type="button"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_DISPLAY'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removeDisplay(
                                                            $event,
                                                            display
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_DISPLAY_FROM_PLAYLIST'
                                                            | translate
                                                                : {
                                                                      name:
                                                                          display.display_name ||
                                                                          display.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                                    >
                                        <icon class="text-4xl">tv_off</icon>
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.NO_DISPLAYS_USE_PLAYLIST'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                </mat-tab-group>
            </div>
        } @else {
            <div
                class="border-base-300 text-base-content/70 flex min-w-60 flex-1 flex-col items-center justify-center space-y-2 border-l p-8"
            >
                <icon class="text-6xl">info</icon>
                <p>
                    {{ 'SIGNAGE_MANAGER.SELECT_PLAYLIST_DETAILS' | translate }}
                </p>
            </div>
        }
    `, imports: [
      MatRippleModule,
      MatTabsModule,
      MatTooltipModule,
      RouterLink,
      IconComponent,
      DatePipe,
      MediaDurationPipe,
      TranslatePipe,
      SignageSharedWithComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlist-item-details.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=playlist-item-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistItemDetailsComponent, { className: "PlaylistItemDetailsComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-item-details.component.ts", lineNumber: 622 });
})();

// apps/signage-manager/src/app/playlists/playlist-items.component.ts
var _c03 = ["item_row"];
var _c12 = (a0, a1) => ({ count: a0, duration: a1 });
var _c22 = (a0) => ({ name: a0 });
var _c32 = (a0) => ({ count: a0 });
var _forTrack02 = ($index, $item) => $item.id + "-" + $index;
function PlaylistItemsComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 14);
    \u0275\u0275text(3, "timer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "mediaDuration");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.PLAYLIST_LOOP_TOOLTIP"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "SIGNAGE_MANAGER.PLAYLIST_LOOP_DURATION", \u0275\u0275pureFunction2(9, _c12, ctx_r0.items().length, \u0275\u0275pipeBind1(5, 4, ctx_r0.loop_duration() / 1e3))), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.LOADING_PLAYLIST_ITEMS"), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 16);
    \u0275\u0275listener("retry", function PlaylistItemsComponent_Conditional_0_Conditional_9_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reloadItems());
    });
    \u0275\u0275elementEnd();
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, item_r6.play_time / 1e3), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const $index_r7 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.moveItem($index_r7, -1));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "icon", 30);
    \u0275\u0275text(3, "arrow_upward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Conditional_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const $index_r7 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.moveItem($index_r7, 1));
    });
    \u0275\u0275elementStart(8, "div", 29)(9, "icon", 30);
    \u0275\u0275text(10, "arrow_downward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 31);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 28);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Conditional_29_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r10 = \u0275\u0275nextContext();
      const item_r6 = ctx_r10.$implicit;
      const $index_r7 = ctx_r10.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeItem(item_r6, $index_r7));
    });
    \u0275\u0275elementStart(15, "div", 29)(16, "icon", 33);
    \u0275\u0275text(17, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 31);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const \u0275$index_39_r12 = ctx_r10.$index;
    const \u0275$count_39_r13 = ctx_r10.$count;
    \u0275\u0275property("disabled", \u0275$index_39_r12 === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "SIGNAGE_MANAGER.PLAYLIST_ITEM_MOVE_UP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_39_r12 === \u0275$count_39_r13 - 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "SIGNAGE_MANAGER.PLAYLIST_ITEM_MOVE_DOWN"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 9, "SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST"), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19, 0);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template_div_click_1_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r4);
      const item_r6 = ctx_r4.$implicit;
      const $index_r7 = ctx_r4.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectItem(item_r6, $index_r7));
    })("keydown.enter", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template_div_keydown_enter_1_listener($event) {
      const ctx_r7 = \u0275\u0275restoreView(_r4);
      const item_r6 = ctx_r7.$implicit;
      const $index_r7 = ctx_r7.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectItemWithKeyboard($event, item_r6, $index_r7));
    })("keydown.space", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template_div_keydown_space_1_listener($event) {
      const ctx_r8 = \u0275\u0275restoreView(_r4);
      const item_r6 = ctx_r8.$implicit;
      const $index_r7 = ctx_r8.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectItemWithKeyboard($event, item_r6, $index_r7));
    });
    \u0275\u0275elementStart(4, "icon", 20);
    \u0275\u0275text(5, "drag_indicator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-checkbox", 21);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template_mat_checkbox_click_6_listener($event) {
      return $event.stopPropagation();
    })("change", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template_mat_checkbox_change_6_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleSelection($index_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "media-thumbnail", 22);
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 24)(13, "span", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Conditional_15_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 27);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template_button_click_16_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-menu", null, 1)(22, "button", 28);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template_button_click_22_listener() {
      const item_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.previewItem(item_r6));
    });
    \u0275\u0275elementStart(23, "div", 29)(24, "icon", 30);
    \u0275\u0275text(25, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 31);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(29, PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Conditional_29_Template, 21, 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    const item_menu_r14 = \u0275\u0275reference(21);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", ctx_r0.isItemSelected(item_r6, $index_r7))("text-primary-content", ctx_r0.isItemSelected(item_r6, $index_r7))("hover:bg-base-200", !ctx_r0.isItemSelected(item_r6, $index_r7))("ring-2", ctx_r0.isBulkItemSelected($index_r7))("ring-primary", ctx_r0.isBulkItemSelected($index_r7));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 38, "SIGNAGE_MANAGER.SELECT_MEDIA_ITEM", \u0275\u0275pureFunction1(48, _c22, item_r6.name)));
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r0.isBulkItemSelected($index_r7));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(7, 41, "SIGNAGE_MANAGER.SELECT_MEDIA", \u0275\u0275pureFunction1(50, _c22, item_r6.name)));
    \u0275\u0275advance(2);
    \u0275\u0275property("item", item_r6)("cover", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-info", item_r6.media_type === "video")("text-info-content", item_r6.media_type === "video")("bg-warning", item_r6.media_type === "image")("text-warning-content", item_r6.media_type === "image")("bg-success", item_r6.media_type === "webpage")("text-success-content", item_r6.media_type === "webpage")("bg-error", item_r6.media_type === "plugin")("text-error-content", item_r6.media_type === "plugin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.media_type, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.play_time ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", item_menu_r14);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 44, "SIGNAGE_MANAGER.ITEM_ACTIONS"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 46, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.can_update() ? 29 : -1);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("cdkDropListDropped", function PlaylistItemsComponent_Conditional_0_Conditional_10_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDrop($event));
    });
    \u0275\u0275repeaterCreate(1, PlaylistItemsComponent_Conditional_0_Conditional_10_For_2_Template, 30, 52, "div", 18, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.items());
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, item_r18.play_time / 1e3), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      \u0275\u0275nextContext();
      const schedule_r23 = \u0275\u0275readContextLet(0);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editItemSchedule(schedule_r23));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "icon", 30);
    \u0275\u0275text(3, "edit_calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_28_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r23 = \u0275\u0275nextContext();
      const item_r18 = ctx_r23.$implicit;
      const $index_r19 = ctx_r23.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeItem(item_r18, $index_r19));
    });
    \u0275\u0275elementStart(8, "div", 29)(9, "icon", 33);
    \u0275\u0275text(10, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 31);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "SIGNAGE_MANAGER.EDIT_SCHEDULE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 4, "SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST"), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_36_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_schedule_r26 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275property("matTooltip", ctx_r0.schedule_tooltips().get(item_schedule_r26));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.scheduleLabel(item_schedule_r26), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_36_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_36_Conditional_0_For_1_Template, 2, 2, "div", 44, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const schedule_r23 = \u0275\u0275readContextLet(0);
    \u0275\u0275repeater(schedule_r23.schedules);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_SCHEDULES"), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_36_Conditional_0_Template, 2, 0)(1, PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_36_Conditional_1_Template, 3, 3, "div", 43);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const schedule_r23 = \u0275\u0275readContextLet(0);
    \u0275\u0275conditional(schedule_r23?.schedules?.length ? 0 : 1);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 38)(2, "div", 39);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template_div_click_2_listener() {
      const ctx_r16 = \u0275\u0275restoreView(_r16);
      const item_r18 = ctx_r16.$implicit;
      const $index_r19 = ctx_r16.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectItem(item_r18, $index_r19));
    })("keydown.enter", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template_div_keydown_enter_2_listener($event) {
      const ctx_r19 = \u0275\u0275restoreView(_r16);
      const item_r18 = ctx_r19.$implicit;
      const $index_r19 = ctx_r19.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectItemWithKeyboard($event, item_r18, $index_r19));
    })("keydown.space", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template_div_keydown_space_2_listener($event) {
      const ctx_r20 = \u0275\u0275restoreView(_r16);
      const item_r18 = ctx_r20.$implicit;
      const $index_r19 = ctx_r20.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectItemWithKeyboard($event, item_r18, $index_r19));
    });
    \u0275\u0275elementStart(4, "div", 40)(5, "mat-checkbox", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template_mat_checkbox_click_5_listener($event) {
      return $event.stopPropagation();
    })("change", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template_mat_checkbox_change_5_listener() {
      const $index_r19 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleSelection($index_r19));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "media-thumbnail", 22);
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 24)(12, "span", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_14_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 27);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template_button_click_15_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-menu", null, 2)(21, "button", 28);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template_button_click_21_listener() {
      const item_r18 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.previewItem(item_r18));
    });
    \u0275\u0275elementStart(22, "div", 29)(23, "icon", 30);
    \u0275\u0275text(24, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 31);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(28, PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_28_Template, 14, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 41)(30, "button", 42);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template_button_click_30_listener($event) {
      const ctx_r24 = \u0275\u0275restoreView(_r16);
      const item_r18 = ctx_r24.$implicit;
      const $index_r19 = ctx_r24.$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleSchedules($event, item_r18, $index_r19));
    });
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "icon", 36);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(36, PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Conditional_36_Template, 2, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const $index_r19 = ctx.$index;
    const distribution_item_menu_r27 = \u0275\u0275reference(20);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275storeLet(ctx_r0.itemSchedule(item_r18, $index_r19));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-primary", ctx_r0.isItemSelected(item_r18, $index_r19))("text-primary-content", ctx_r0.isItemSelected(item_r18, $index_r19))("hover:bg-base-200", !ctx_r0.isItemSelected(item_r18, $index_r19))("ring-2", ctx_r0.isBulkItemSelected($index_r19))("ring-primary", ctx_r0.isBulkItemSelected($index_r19));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 43, "SIGNAGE_MANAGER.SELECT_MEDIA_ITEM", \u0275\u0275pureFunction1(55, _c22, item_r18.name)));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r0.isBulkItemSelected($index_r19));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(6, 46, "SIGNAGE_MANAGER.SELECT_MEDIA", \u0275\u0275pureFunction1(57, _c22, item_r18.name)));
    \u0275\u0275advance(2);
    \u0275\u0275property("item", item_r18)("cover", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r18.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-info", item_r18.media_type === "video")("text-info-content", item_r18.media_type === "video")("bg-warning", item_r18.media_type === "image")("text-warning-content", item_r18.media_type === "image")("bg-success", item_r18.media_type === "webpage")("text-success-content", item_r18.media_type === "webpage")("bg-error", item_r18.media_type === "plugin")("text-error-content", item_r18.media_type === "plugin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r18.media_type, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r18.play_time ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", distribution_item_menu_r27);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 49, "SIGNAGE_MANAGER.ITEM_ACTIONS"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 51, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.can_update() ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r0.schedulesOpen(item_r18, $index_r19));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 53, "SIGNAGE_MANAGER.NAV_SCHEDULES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.schedulesOpen(item_r18, $index_r19) ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.schedulesOpen(item_r18, $index_r19) ? 36 : -1);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 34)(2, "button", 35);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleAllSchedules($event));
    });
    \u0275\u0275elementStart(3, "icon", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(8, PlaylistItemsComponent_Conditional_0_Conditional_11_For_9_Template, 37, 59, "div", 38, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.allSchedulesCollapsed() ? "unfold_more" : "unfold_less");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, ctx_r0.allSchedulesCollapsed() ? "COMMON.EXPAND_ALL" : "COMMON.COLLAPSE_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.items());
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon", 45);
    \u0275\u0275text(2, "queue_music");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLIST_ITEMS"));
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_13_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_13_Conditional_10_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.applyScheduleToSelected());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit_calendar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.APPLY_SCHEDULE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.APPLY_SCHEDULE"));
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, PlaylistItemsComponent_Conditional_0_Conditional_13_Conditional_10_Conditional_1_Template, 5, 6, "button", 49);
    \u0275\u0275elementStart(2, "button", 50);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_13_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteSelected());
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_distribution() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.REMOVE_SELECTED_FROM_PLAYLIST"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 5, "SIGNAGE_MANAGER.REMOVE_SELECTED_FROM_PLAYLIST"));
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 13)(1, "div", 46)(2, "button", 47);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearSelection());
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 48);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, PlaylistItemsComponent_Conditional_0_Conditional_13_Conditional_10_Template, 7, 7, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 4, "SIGNAGE_MANAGER.CLEAR_SELECTED_PLAYLIST_ITEMS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 6, "SIGNAGE_MANAGER.CLEAR_SELECTED_PLAYLIST_ITEMS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 8, "COMMON.SELECTED_COUNT", \u0275\u0275pureFunction1(11, _c32, ctx_r0.selected_count())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.can_update() ? 10 : -1);
  }
}
function PlaylistItemsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "icon", 5);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "h4", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "playlist-actions");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, PlaylistItemsComponent_Conditional_0_Conditional_7_Template, 7, 12, "div", 8);
    \u0275\u0275conditionalCreate(8, PlaylistItemsComponent_Conditional_0_Conditional_8_Template, 5, 3, "div", 9)(9, PlaylistItemsComponent_Conditional_0_Conditional_9_Template, 1, 0, "load-error", 10)(10, PlaylistItemsComponent_Conditional_0_Conditional_10_Template, 3, 0, "div", 11)(11, PlaylistItemsComponent_Conditional_0_Conditional_11_Template, 10, 4, "div", 12)(12, PlaylistItemsComponent_Conditional_0_Conditional_12_Template, 6, 3, "div", 3);
    \u0275\u0275conditionalCreate(13, PlaylistItemsComponent_Conditional_0_Conditional_13_Template, 11, 13, "footer", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selected_playlist().name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.loading() && ctx_r0.items().length > 0 && !ctx_r0.is_distribution() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading() ? 8 : ctx_r0.load_error() ? 9 : ctx_r0.items().length > 0 && !ctx_r0.is_distribution() ? 10 : ctx_r0.items().length > 0 ? 11 : 12);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.selected_count() > 0 ? 13 : -1);
  }
}
function PlaylistItemsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon", 45);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.SELECT_PLAYLIST_ITEMS"));
  }
}
var PlaylistItemsComponent = class _PlaylistItemsComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._media_service = inject(SignageMediaService);
    this._playlist_service = inject(SignagePlaylistService);
    this._injector = inject(Injector);
    this._rows = viewChildren(
      "item_row",
      ...ngDevMode ? [{ debugName: "_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_playlist = this._playlist_service.selected_playlist;
    this.selected_item = this._playlist_service.selected_playlist_item;
    this.selected_item_index = this._playlist_service.selected_playlist_item_index;
    this.can_update = this._context.can_update;
    this.items = this._playlist_service.playlist_media_items;
    this.loading = computed(
      () => this._playlist_service.playlist_media_loading() && !this.items().length,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.load_error = this._playlist_service.playlist_media_error;
    this.loop_duration = computed(
      () => playlistLoopDuration(this.items(), this.selected_playlist()?.default_duration),
      ...ngDevMode ? [{ debugName: "loop_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item_schedules = this._playlist_service.playlist_item_schedules;
    this.item_schedule_list = this._playlist_service.playlist_item_schedule_list;
    this.is_distribution = () => !!this.selected_playlist()?.distribution;
    this.collapsed_schedules = signal(
      {},
      ...ngDevMode ? [{ debugName: "collapsed_schedules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_indices = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_indices" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => [this.selected_playlist()?.id, this.items()],
      computation: () => /* @__PURE__ */ new Set()
    }));
    this.selected_items = computed(
      () => {
        const selected_indices = this.selected_indices();
        return this.items().flatMap((item, index) => selected_indices.has(index) ? [{ item, index }] : []);
      },
      ...ngDevMode ? [{ debugName: "selected_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_count = computed(
      () => this.selected_items().length,
      ...ngDevMode ? [{ debugName: "selected_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.scheduleLabel = playlistScheduleLabel;
    this.schedule_tooltips = computed(
      () => new Map(this.item_schedule_list().flatMap((item) => (item.schedules || []).map((schedule) => [schedule, this.scheduleTooltip(schedule)]))),
      ...ngDevMode ? [{ debugName: "schedule_tooltips" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  selectItem(item, index) {
    this._playlist_service.selected_playlist_item.set(item);
    this._playlist_service.selected_playlist_item_index.set(index);
  }
  isItemSelected(item, index) {
    return this.selected_item()?.id === item.id && this.selected_item_index() === index;
  }
  isBulkItemSelected(index) {
    return this.selected_indices().has(index);
  }
  toggleSelection(index) {
    this.selected_indices.update((indices) => {
      const selected_indices = new Set(indices);
      selected_indices.has(index) ? selected_indices.delete(index) : selected_indices.add(index);
      return selected_indices;
    });
  }
  clearSelection() {
    this.selected_indices.set(/* @__PURE__ */ new Set());
  }
  itemSchedule(item, index = -1) {
    const schedule = this.item_schedule_list()[index];
    if (schedule?.media?.id === item.id)
      return schedule;
    return this.item_schedules().get(item.id) || new _r({
      item_id: item.id,
      media: item
    });
  }
  scheduleTooltip(schedule) {
    const labels = playlistScheduleNextPlayLabels(schedule);
    const expiry = playlistScheduleExpiryTooltip(schedule);
    return [
      `-- ${i18n("SIGNAGE_MANAGER.NEXT_5_PLAYS")} --`,
      ...labels.length ? labels : [i18n("SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES")],
      ...expiry ? [`${i18n("FORM.EXPIRES_AT")}: ${expiry}`] : []
    ].join("\n");
  }
  scheduleKey(item, index) {
    const schedule = this.itemSchedule(item, index);
    return `${schedule.id || schedule.item_id || item.id}:${index}`;
  }
  schedulesOpen(item, index) {
    return !this.collapsed_schedules()[this.scheduleKey(item, index)];
  }
  toggleSchedules(event, item, index) {
    event.preventDefault();
    event.stopPropagation();
    const key = this.scheduleKey(item, index);
    this.collapsed_schedules.update((state) => __spreadProps(__spreadValues({}, state), {
      [key]: !state[key]
    }));
  }
  allSchedulesCollapsed() {
    const items = this.items();
    return items.length > 0 && items.every((item, index) => !this.schedulesOpen(item, index));
  }
  toggleAllSchedules(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.allSchedulesCollapsed()) {
      this.collapsed_schedules.set({});
      return;
    }
    const collapsed = {};
    this.items().forEach((item, index) => {
      collapsed[this.scheduleKey(item, index)] = true;
    });
    this.collapsed_schedules.set(collapsed);
  }
  /**
   * Select an item with Enter or Space on its row. Keys from controls in
   * the row, such as the checkbox and the actions button, keep their own
   * behaviour.
   */
  selectItemWithKeyboard(event, item, index) {
    if (event.target !== event.currentTarget)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.selectItem(item, index);
  }
  previewItem(item) {
    this._media_service.previewMedia(item);
  }
  editItemSchedule(schedule) {
    this._playlist_service.editPlaylistItemSchedules([schedule]);
  }
  async applyScheduleToSelected() {
    const schedules = this.selected_items().map(({ item, index }) => this.itemSchedule(item, index));
    if (await this._playlist_service.editPlaylistItemSchedules(schedules)) {
      this.clearSelection();
    }
  }
  async removeItem(item, item_index) {
    const playlist = this.selected_playlist();
    if (!playlist?.id || !item?.id)
      return;
    const schedule = playlist.distribution ? this.itemSchedule(item, item_index) : null;
    const playlist_item_id = schedule?.id || schedule?.item_id || item.id;
    await this._playlist_service.removeMediaFromPlaylist(playlist.id, playlist_item_id, item_index);
    if (this.isItemSelected(item, item_index)) {
      this._playlist_service.selected_playlist_item.set(null);
      this._playlist_service.selected_playlist_item_index.set(null);
    }
  }
  async deleteSelected() {
    const playlist = this.selected_playlist();
    if (!playlist?.id)
      return;
    const selected_items = this.selected_items().map(({ item, index }) => {
      const schedule = playlist.distribution ? this.itemSchedule(item, index) : null;
      return {
        id: schedule?.id || schedule?.item_id || item.id,
        index
      };
    });
    if (await this._playlist_service.removeMediaItemsFromPlaylist(playlist.id, selected_items)) {
      this.clearSelection();
    }
  }
  reloadItems() {
    this._playlist_service.reloadPlaylistMedia();
  }
  async onDrop(event) {
    await this._reorder(event.previousIndex, event.currentIndex);
  }
  /**
   * Move an item one place, for users who cannot drag. Keeps the focus
   * on the moved item, so it can be moved again.
   * @param offset -1 to move up, 1 to move down
   */
  async moveItem(index, offset) {
    const target = index + offset;
    const saved = this._reorder(index, target);
    afterNextRender(() => this._rows()[target]?.nativeElement.focus(), {
      injector: this._injector
    });
    await saved;
  }
  async _reorder(from, to) {
    if (!this.can_update() || this.is_distribution())
      return;
    const playlist = this.selected_playlist();
    const current_items = [...this.items()];
    if (!playlist?.id || from === to)
      return;
    if (to < 0 || to >= current_items.length)
      return;
    moveItemInArray(current_items, from, to);
    await this._playlist_service.reorderPlaylistMedia(playlist.id, current_items.map((m) => m.id));
  }
  static {
    this.\u0275fac = function PlaylistItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistItemsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistItemsComponent, selectors: [["playlist-items"]], viewQuery: function PlaylistItemsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._rows, _c03, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 2, vars: 1, consts: [["item_row", ""], ["item_menu", "matMenu"], ["distribution_item_menu", "matMenu"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "bg-base-100", "border-base-300", "mx-2", "hidden", "items-center", "gap-2", "rounded-b-lg", "border", "px-4", "py-3", "lg:flex"], [1, "shrink-0", "text-2xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-medium"], [1, "text-base-content/60", "flex", "items-center", "gap-1", "px-4", "pt-2", "text-xs", 3, "matTooltip"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-3", "p-8", "opacity-70"], [1, "flex-1"], ["cdkDropList", "", "role", "list", 1, "w-full", "flex-1", "overflow-auto", "px-3", "py-2"], ["role", "list", 1, "w-full", "flex-1", "overflow-auto", "px-3", "py-2"], ["aria-live", "polite", 1, "bg-base-100", "border-base-300", "sticky", "bottom-2", "z-20", "mx-2", "mt-2", "flex", "items-center", "justify-between", "gap-2", "rounded-xl", "border", "p-2", "shadow-lg"], [1, "text-sm"], ["diameter", "32"], [1, "flex-1", 3, "retry"], ["cdkDropList", "", "role", "list", 1, "w-full", "flex-1", "overflow-auto", "px-3", "py-2", 3, "cdkDropListDropped"], ["cdkDrag", "", "role", "listitem", 1, "mb-2"], ["role", "button", "tabindex", "0", 1, "bg-base-100", "border-base-300", "flex", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "border", "p-2", "transition-colors", 3, "click", "keydown.enter", "keydown.space"], ["cdkDragHandle", "", 1, "shrink-0", "cursor-grab", "opacity-40"], [3, "click", "change", "checked"], [1, "bg-base-300", "h-12", "w-16", "shrink-0", "overflow-hidden", "rounded", 3, "item", "cover"], [1, "truncate", "text-sm", "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "rounded", "px-1.5", "py-0.5", "text-[10px]", "capitalize"], [1, "font-mono", "text-[10px]", "opacity-60"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matMenuTriggerFor"], ["type", "button", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["type", "button", "mat-menu-item", "", 3, "click", "disabled"], [1, "text-error", "text-2xl"], [1, "-mt-2", "mb-2", "flex", "justify-end", "lg:mt-0"], ["type", "button", "matRipple", "", 1, "text-base-content/70", "hover:bg-base-200", "flex", "w-28", "items-center", "justify-center", "gap-1", "rounded", "px-2", "py-1", "text-xs", "font-medium", 3, "click"], [1, "text-base"], [1, "mr-2"], ["role", "listitem", 1, "mb-2"], ["role", "button", "tabindex", "0", 1, "bg-base-100", "border-base-300", "cursor-pointer", "rounded-lg", "border", "p-2", "transition-colors", 3, "click", "keydown.enter", "keydown.space"], [1, "flex", "items-start", "gap-3"], [1, "border-base-300", "bg-base-100", "text-base-content", "relative", "mt-4", "flex", "flex-col", "gap-1", "rounded-lg", "border", "text-sm"], ["type", "button", 1, "bg-base-100", "absolute", "-top-3", "left-4", "flex", "items-center", "gap-1", "rounded-lg", "px-2", "text-xs", "font-medium", 3, "click"], [1, "text-base-content/60", "rounded-md", "p-2"], ["matTooltipClass", "playlist-schedule-tooltip", 1, "rounded-md", "p-2", 3, "matTooltip"], [1, "text-6xl"], [1, "flex", "items-center", "gap-3"], ["icon", "", "type", "button", "matRipple", "", 1, "hover:bg-base-200", "rounded-xl", 3, "click", "matTooltip"], [1, "font-medium"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"]], template: function PlaylistItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, PlaylistItemsComponent_Conditional_0_Template, 14, 4)(1, PlaylistItemsComponent_Conditional_1_Template, 6, 3, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.selected_playlist() ? 0 : 1);
      }
    }, dependencies: [
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      MatCheckboxModule,
      MatCheckbox,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      LoadErrorComponent,
      MediaThumbnailComponent,
      PlaylistActionsComponent,
      MediaDurationPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n  .cdk-drag-preview {\n  opacity: 0.6;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n  .playlist-schedule-tooltip .mdc-tooltip__surface {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=playlist-items.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistItemsComponent, [{
    type: Component,
    args: [{ selector: "playlist-items", template: `
        @if (selected_playlist()) {
            <div
                class="bg-base-100 border-base-300 mx-2 hidden items-center gap-2 rounded-b-lg border px-4 py-3 lg:flex"
            >
                <icon class="shrink-0 text-2xl opacity-60">playlist_play</icon>
                <div class="min-w-0 flex-1">
                    <h4 class="truncate text-lg font-medium">
                        {{ selected_playlist().name }}
                    </h4>
                </div>
                <playlist-actions />
            </div>
            @if (!loading() && items().length > 0 && !is_distribution()) {
                <div
                    class="text-base-content/60 flex items-center gap-1 px-4 pt-2 text-xs"
                    [matTooltip]="
                        'SIGNAGE_MANAGER.PLAYLIST_LOOP_TOOLTIP' | translate
                    "
                >
                    <icon class="text-sm">timer</icon>
                    {{
                        'SIGNAGE_MANAGER.PLAYLIST_LOOP_DURATION'
                            | translate
                                : {
                                      count: items().length,
                                      duration:
                                          loop_duration() / 1000
                                          | mediaDuration,
                                  }
                    }}
                </div>
            }
            @if (loading()) {
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-3 p-8 opacity-70"
                >
                    <mat-spinner diameter="32" />
                    <p>
                        {{
                            'SIGNAGE_MANAGER.LOADING_PLAYLIST_ITEMS' | translate
                        }}
                    </p>
                </div>
            } @else if (load_error()) {
                <load-error class="flex-1" (retry)="reloadItems()" />
            } @else if (items().length > 0 && !is_distribution()) {
                <div
                    class="w-full flex-1 overflow-auto px-3 py-2"
                    cdkDropList
                    role="list"
                    (cdkDropListDropped)="onDrop($event)"
                >
                    @for (item of items(); track item.id + '-' + $index) {
                        <div cdkDrag role="listitem" class="mb-2">
                            <div
                                #item_row
                                role="button"
                                tabindex="0"
                                class="bg-base-100 border-base-300 flex cursor-pointer items-center gap-3 rounded-lg border p-2 transition-colors"
                                [class.bg-primary]="
                                    isItemSelected(item, $index)
                                "
                                [class.text-primary-content]="
                                    isItemSelected(item, $index)
                                "
                                [class.hover:bg-base-200]="
                                    !isItemSelected(item, $index)
                                "
                                [class.ring-2]="isBulkItemSelected($index)"
                                [class.ring-primary]="
                                    isBulkItemSelected($index)
                                "
                                (click)="selectItem(item, $index)"
                                (keydown.enter)="
                                    selectItemWithKeyboard($event, item, $index)
                                "
                                (keydown.space)="
                                    selectItemWithKeyboard($event, item, $index)
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SELECT_MEDIA_ITEM'
                                        | translate: { name: item.name }
                                "
                            >
                                <icon
                                    cdkDragHandle
                                    class="shrink-0 cursor-grab opacity-40"
                                    >drag_indicator</icon
                                >
                                <mat-checkbox
                                    [checked]="isBulkItemSelected($index)"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.SELECT_MEDIA'
                                            | translate: { name: item.name }
                                    "
                                    (click)="$event.stopPropagation()"
                                    (change)="toggleSelection($index)"
                                />
                                <media-thumbnail
                                    [item]="item"
                                    [cover]="true"
                                    class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                                />
                                <div class="min-w-0 flex-1">
                                    <div class="truncate text-sm font-medium">
                                        {{ item.name }}
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span
                                            class="rounded px-1.5 py-0.5 text-[10px] capitalize"
                                            [class.bg-info]="
                                                item.media_type === 'video'
                                            "
                                            [class.text-info-content]="
                                                item.media_type === 'video'
                                            "
                                            [class.bg-warning]="
                                                item.media_type === 'image'
                                            "
                                            [class.text-warning-content]="
                                                item.media_type === 'image'
                                            "
                                            [class.bg-success]="
                                                item.media_type === 'webpage'
                                            "
                                            [class.text-success-content]="
                                                item.media_type === 'webpage'
                                            "
                                            [class.bg-error]="
                                                item.media_type === 'plugin'
                                            "
                                            [class.text-error-content]="
                                                item.media_type === 'plugin'
                                            "
                                        >
                                            {{ item.media_type }}
                                        </span>
                                        @if (item.play_time) {
                                            <span
                                                class="font-mono text-[10px] opacity-60"
                                            >
                                                {{
                                                    item.play_time / 1000
                                                        | mediaDuration
                                                }}
                                            </span>
                                        }
                                    </div>
                                </div>
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    [matMenuTriggerFor]="item_menu"
                                    (click)="$event.stopPropagation()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.ITEM_ACTIONS'
                                            | translate
                                    "
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #item_menu="matMenu">
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="previewItem(item)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl"
                                                >visibility</icon
                                            >
                                            <div class="pr-2">
                                                {{
                                                    'COMMON.PREVIEW' | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    @if (can_update()) {
                                        <button
                                            type="button"
                                            mat-menu-item
                                            [disabled]="$first"
                                            (click)="moveItem($index, -1)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >arrow_upward</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.PLAYLIST_ITEM_MOVE_UP'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            mat-menu-item
                                            [disabled]="$last"
                                            (click)="moveItem($index, 1)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >arrow_downward</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.PLAYLIST_ITEM_MOVE_DOWN'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            mat-menu-item
                                            (click)="removeItem(item, $index)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon
                                                    class="text-error text-2xl"
                                                >
                                                    delete
                                                </icon>
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                    }
                                </mat-menu>
                            </div>
                        </div>
                    }
                </div>
            } @else if (items().length > 0) {
                <div class="w-full flex-1 overflow-auto px-3 py-2" role="list">
                    <div class="-mt-2 mb-2 flex justify-end lg:mt-0">
                        <button
                            type="button"
                            class="text-base-content/70 hover:bg-base-200 flex w-28 items-center justify-center gap-1 rounded px-2 py-1 text-xs font-medium"
                            matRipple
                            (click)="toggleAllSchedules($event)"
                        >
                            <icon class="text-base">{{
                                allSchedulesCollapsed()
                                    ? 'unfold_more'
                                    : 'unfold_less'
                            }}</icon>
                            <span class="mr-2">{{
                                (allSchedulesCollapsed()
                                    ? 'COMMON.EXPAND_ALL'
                                    : 'COMMON.COLLAPSE_ALL'
                                ) | translate
                            }}</span>
                        </button>
                    </div>
                    @for (item of items(); track item.id + '-' + $index) {
                        @let schedule = itemSchedule(item, $index);
                        <div role="listitem" class="mb-2">
                            <div
                                role="button"
                                tabindex="0"
                                class="bg-base-100 border-base-300 cursor-pointer rounded-lg border p-2 transition-colors"
                                [class.bg-primary]="
                                    isItemSelected(item, $index)
                                "
                                [class.text-primary-content]="
                                    isItemSelected(item, $index)
                                "
                                [class.hover:bg-base-200]="
                                    !isItemSelected(item, $index)
                                "
                                [class.ring-2]="isBulkItemSelected($index)"
                                [class.ring-primary]="
                                    isBulkItemSelected($index)
                                "
                                (click)="selectItem(item, $index)"
                                (keydown.enter)="
                                    selectItemWithKeyboard($event, item, $index)
                                "
                                (keydown.space)="
                                    selectItemWithKeyboard($event, item, $index)
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SELECT_MEDIA_ITEM'
                                        | translate: { name: item.name }
                                "
                            >
                                <div class="flex items-start gap-3">
                                    <mat-checkbox
                                        [checked]="isBulkItemSelected($index)"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SELECT_MEDIA'
                                                | translate: { name: item.name }
                                        "
                                        (click)="$event.stopPropagation()"
                                        (change)="toggleSelection($index)"
                                    />
                                    <media-thumbnail
                                        [item]="item"
                                        [cover]="true"
                                        class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                                    />
                                    <div class="min-w-0 flex-1">
                                        <div
                                            class="truncate text-sm font-medium"
                                        >
                                            {{ item.name }}
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span
                                                class="rounded px-1.5 py-0.5 text-[10px] capitalize"
                                                [class.bg-info]="
                                                    item.media_type === 'video'
                                                "
                                                [class.text-info-content]="
                                                    item.media_type === 'video'
                                                "
                                                [class.bg-warning]="
                                                    item.media_type === 'image'
                                                "
                                                [class.text-warning-content]="
                                                    item.media_type === 'image'
                                                "
                                                [class.bg-success]="
                                                    item.media_type ===
                                                    'webpage'
                                                "
                                                [class.text-success-content]="
                                                    item.media_type ===
                                                    'webpage'
                                                "
                                                [class.bg-error]="
                                                    item.media_type === 'plugin'
                                                "
                                                [class.text-error-content]="
                                                    item.media_type === 'plugin'
                                                "
                                            >
                                                {{ item.media_type }}
                                            </span>
                                            @if (item.play_time) {
                                                <span
                                                    class="font-mono text-[10px] opacity-60"
                                                >
                                                    {{
                                                        item.play_time / 1000
                                                            | mediaDuration
                                                    }}
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matMenuTriggerFor]="
                                            distribution_item_menu
                                        "
                                        (click)="$event.stopPropagation()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ITEM_ACTIONS'
                                                | translate
                                        "
                                    >
                                        <icon>more_vert</icon>
                                    </button>
                                    <mat-menu #distribution_item_menu="matMenu">
                                        <button
                                            type="button"
                                            mat-menu-item
                                            (click)="previewItem(item)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >visibility</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'COMMON.PREVIEW'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        @if (can_update()) {
                                            <button
                                                type="button"
                                                mat-menu-item
                                                (click)="
                                                    editItemSchedule(schedule)
                                                "
                                            >
                                                <div
                                                    class="flex items-center space-x-2"
                                                >
                                                    <icon class="text-2xl"
                                                        >edit_calendar</icon
                                                    >
                                                    <div class="pr-2">
                                                        {{
                                                            'SIGNAGE_MANAGER.EDIT_SCHEDULE'
                                                                | translate
                                                        }}
                                                    </div>
                                                </div>
                                            </button>
                                            <button
                                                type="button"
                                                mat-menu-item
                                                (click)="
                                                    removeItem(item, $index)
                                                "
                                            >
                                                <div
                                                    class="flex items-center space-x-2"
                                                >
                                                    <icon
                                                        class="text-error text-2xl"
                                                    >
                                                        delete
                                                    </icon>
                                                    <div class="pr-2">
                                                        {{
                                                            'SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST'
                                                                | translate
                                                        }}
                                                    </div>
                                                </div>
                                            </button>
                                        }
                                    </mat-menu>
                                </div>
                                <div
                                    class="border-base-300 bg-base-100 text-base-content relative mt-4 flex flex-col gap-1 rounded-lg border text-sm"
                                >
                                    <button
                                        type="button"
                                        class="bg-base-100 absolute -top-3 left-4 flex items-center gap-1 rounded-lg px-2 text-xs font-medium"
                                        (click)="
                                            toggleSchedules(
                                                $event,
                                                item,
                                                $index
                                            )
                                        "
                                        [attr.aria-expanded]="
                                            schedulesOpen(item, $index)
                                        "
                                    >
                                        <span>{{
                                            'SIGNAGE_MANAGER.NAV_SCHEDULES'
                                                | translate
                                        }}</span>
                                        <icon class="text-base">{{
                                            schedulesOpen(item, $index)
                                                ? 'expand_less'
                                                : 'expand_more'
                                        }}</icon>
                                    </button>
                                    @if (schedulesOpen(item, $index)) {
                                        @if (schedule?.schedules?.length) {
                                            @for (
                                                item_schedule of schedule.schedules;
                                                track $index
                                            ) {
                                                <div
                                                    class="rounded-md p-2"
                                                    [matTooltip]="
                                                        schedule_tooltips().get(
                                                            item_schedule
                                                        )
                                                    "
                                                    matTooltipClass="playlist-schedule-tooltip"
                                                >
                                                    {{
                                                        scheduleLabel(
                                                            item_schedule
                                                        )
                                                    }}
                                                </div>
                                            }
                                        } @else {
                                            <div
                                                class="text-base-content/60 rounded-md p-2"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.NO_SCHEDULES'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">queue_music</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_PLAYLIST_ITEMS' | translate }}</p>
                </div>
            }
            @if (selected_count() > 0) {
                <footer
                    class="bg-base-100 border-base-300 sticky bottom-2 z-20 mx-2 mt-2 flex items-center justify-between gap-2 rounded-xl border p-2 shadow-lg"
                    aria-live="polite"
                >
                    <div class="flex items-center gap-3">
                        <button
                            icon
                            type="button"
                            matRipple
                            class="hover:bg-base-200 rounded-xl"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.CLEAR_SELECTED_PLAYLIST_ITEMS'
                                    | translate
                            "
                            [matTooltip]="
                                'SIGNAGE_MANAGER.CLEAR_SELECTED_PLAYLIST_ITEMS'
                                    | translate
                            "
                            (click)="clearSelection()"
                        >
                            <icon>close</icon>
                        </button>
                        <div class="font-medium">
                            {{
                                'COMMON.SELECTED_COUNT'
                                    | translate: { count: selected_count() }
                            }}
                        </div>
                    </div>
                    @if (can_update()) {
                        <div class="flex items-center gap-2">
                            @if (is_distribution()) {
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    (click)="applyScheduleToSelected()"
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.APPLY_SCHEDULE'
                                            | translate
                                    "
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.APPLY_SCHEDULE'
                                            | translate
                                    "
                                >
                                    <icon>edit_calendar</icon>
                                </button>
                            }
                            <button
                                icon
                                default
                                error
                                type="button"
                                matRipple
                                (click)="deleteSelected()"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.REMOVE_SELECTED_FROM_PLAYLIST'
                                        | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.REMOVE_SELECTED_FROM_PLAYLIST'
                                        | translate
                                "
                            >
                                <icon>delete</icon>
                            </button>
                        </div>
                    }
                </footer>
            }
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">playlist_play</icon>
                <p>{{ 'SIGNAGE_MANAGER.SELECT_PLAYLIST_ITEMS' | translate }}</p>
            </div>
        }
    `, imports: [
      DragDropModule,
      MatCheckboxModule,
      MatRippleModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      IconComponent,
      LoadErrorComponent,
      MediaDurationPipe,
      TranslatePipe,
      MediaThumbnailComponent,
      PlaylistActionsComponent
    ], styles: ["/* angular:styles/component:css;ea4bfd70c03f2b567778031b92344f469b9fe396e4a9146a22b45b9b2e409179;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlist-items.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n::ng-deep .cdk-drag-preview {\n  opacity: 0.6;\n}\n.cdk-drag-placeholder {\n  opacity: 0.3;\n}\n::ng-deep .playlist-schedule-tooltip .mdc-tooltip__surface {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=playlist-items.component.css.map */\n"] }]
  }], null, { _rows: [{ type: ViewChildren, args: ["item_row", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistItemsComponent, { className: "PlaylistItemsComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-items.component.ts", lineNumber: 693 });
})();

// apps/signage-manager/src/app/playlists/playlist-list.component.ts
var _c04 = ["playlist_item"];
var _c13 = (a0) => ["/playlists", a0];
var _c23 = (a0) => ({ name: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function PlaylistListComponent_Conditional_6_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_EXPIRED"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.PENDING"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", ctx_r1.selected()?.id !== playlist_r1.id)("opacity-90", ctx_r1.selected()?.id === playlist_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r1.description, " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 21);
    \u0275\u0275text(1, "p2p");
    \u0275\u0275elementEnd();
  }
}
function PlaylistListComponent_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10, 0);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "playlist-thumbnail", 11);
    \u0275\u0275elementStart(5, "div", 12)(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275conditionalCreate(9, PlaylistListComponent_Conditional_6_For_1_Conditional_9_Template, 3, 3, "span", 15);
    \u0275\u0275conditionalCreate(10, PlaylistListComponent_Conditional_6_For_1_Case_10_Template, 3, 3, "span", 16)(11, PlaylistListComponent_Conditional_6_For_1_Case_11_Template, 3, 3, "span", 17)(12, PlaylistListComponent_Conditional_6_For_1_Case_12_Template, 3, 3, "span", 18)(13, PlaylistListComponent_Conditional_6_For_1_Case_13_Template, 3, 3, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, PlaylistListComponent_Conditional_6_For_1_Conditional_14_Template, 2, 5, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, PlaylistListComponent_Conditional_6_For_1_Conditional_15_Template, 2, 0, "icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_25_0;
    const playlist_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.selected()?.id === playlist_r1.id)("bg-warning/10", !playlist_r1.enabled && ctx_r1.selected()?.id !== playlist_r1.id)("text-primary-content", ctx_r1.selected()?.id === playlist_r1.id)("hover:bg-base-200", playlist_r1.enabled && ctx_r1.selected()?.id !== playlist_r1.id)("hover:bg-warning/20", !playlist_r1.enabled && ctx_r1.selected()?.id !== playlist_r1.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(28, _c13, playlist_r1.id));
    \u0275\u0275attribute("data-disabled-playlist", !playlist_r1.enabled ? true : null)("aria-label", \u0275\u0275pipeBind2(2, 23, "SIGNAGE_MANAGER.OPEN_PLAYLIST", \u0275\u0275pureFunction1(30, _c23, playlist_r1.name)) + (!playlist_r1.enabled ? ", " + \u0275\u0275pipeBind1(3, 26, "COMMON.DISABLED") : ""));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("grayscale", !playlist_r1.enabled)("opacity-50", !playlist_r1.enabled);
    \u0275\u0275property("playlist", playlist_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", playlist_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!playlist_r1.enabled ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_25_0 = ctx_r1.getStatus(playlist_r1)) === "expired" ? 10 : tmp_25_0 === "pending" ? 11 : tmp_25_0 === "awaiting_review" ? 12 : tmp_25_0 === "awaiting_approval" ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(playlist_r1.description ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(playlist_r1.distribution ? 15 : -1);
  }
}
function PlaylistListComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("intersect", function PlaylistListComponent_Conditional_6_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function PlaylistListComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 24);
    \u0275\u0275listener("retry", function PlaylistListComponent_Conditional_6_Conditional_3_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reload());
    });
    \u0275\u0275elementEnd();
  }
}
function PlaylistListComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function PlaylistListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistListComponent_Conditional_6_For_1_Template, 16, 32, "a", 7, _forTrack03);
    \u0275\u0275conditionalCreate(2, PlaylistListComponent_Conditional_6_Conditional_2_Template, 1, 0, "div", 8)(3, PlaylistListComponent_Conditional_6_Conditional_3_Template, 1, 0, "load-error")(4, PlaylistListComponent_Conditional_6_Conditional_4_Template, 3, 3, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.playlists());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_more() ? 2 : ctx_r1.error() ? 3 : 4);
  }
}
function PlaylistListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function PlaylistListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 26);
    \u0275\u0275listener("retry", function PlaylistListComponent_Conditional_8_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reload());
    });
    \u0275\u0275elementEnd();
  }
}
function PlaylistListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 27);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS"));
  }
}
var PlaylistListComponent = class _PlaylistListComponent {
  constructor() {
    this._playlist_service = inject(SignagePlaylistService);
    this._playlist_items = viewChildren(
      "playlist_item",
      ...ngDevMode ? [{ debugName: "_playlist_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._playlist_service.playlist_search_term;
    this.playlists = this._playlist_service.filtered_playlists;
    this.selected = this._playlist_service.selected_playlist;
    this.playlist_approval_status = this._playlist_service.playlist_approval_status;
    this.playlist_approval_requested_status = this._playlist_service.playlist_approval_requested_status;
    this.has_more = this._playlist_service.playlists_has_more;
    this.loading = this._playlist_service.playlists_loading;
    this.error = this._playlist_service.playlists_error;
    afterRenderEffect({
      earlyRead: () => {
        const selected_id = this.selected()?.id;
        if (!selected_id)
          return;
        const playlist_index = this.playlists().findIndex(({ id }) => id === selected_id);
        return this._playlist_items()[playlist_index]?.nativeElement;
      },
      write: (selected_item) => {
        selected_item()?.scrollIntoView?.({
          behavior: "instant",
          block: "nearest",
          inline: "nearest"
        });
      }
    });
  }
  loadMore() {
    this._playlist_service.loadMorePlaylists();
  }
  reload() {
    this._playlist_service.reloadPlaylists();
  }
  getStatus(playlist) {
    return playlistStatus(playlist, this.playlist_approval_status(), this.playlist_approval_requested_status());
  }
  static {
    this.\u0275fac = function PlaylistListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistListComponent, selectors: [["playlist-list"]], viewQuery: function PlaylistListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._playlist_items, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 10, vars: 8, consts: [["playlist_item", ""], [1, "bg-base-100", "border-base-300", "h-full", "min-w-64", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "flex-1"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "relative", "z-0", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-2", "py-1", "text-left", "no-underline", "transition-colors", 3, "bg-primary", "bg-warning/10", "text-primary-content", "hover:bg-base-200", "hover:bg-warning/20", "routerLink"], ["intersect", "", 1, "h-px", "w-full"], [1, "text-base-content/50", "bg-base-content/10", "col-span-full", "my-2", "p-2", "text-center", "text-xs"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "relative", "z-0", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-2", "py-1", "text-left", "no-underline", "transition-colors", 3, "routerLink"], [1, "relative", "h-12", "w-12", "shrink-0", "overflow-hidden", "rounded-md", 3, "playlist"], [1, "min-w-0", "flex-1", "pr-2"], [1, "flex", "items-center", "gap-2", "truncate", "font-medium"], [1, "flex", "flex-wrap", "gap-1", "text-[0.625rem]", "font-medium", "uppercase"], ["data-playlist-status", "disabled", 1, "bg-warning", "text-warning-content", "flex", "shrink-0", "items-center", "gap-1", "rounded", "px-1.5", "py-0.5", "font-bold"], [1, "bg-error", "text-error-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-info", "text-info-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-base-300", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], [1, "mx-1"], [1, "mt-0.5", "truncate", "text-xs"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [3, "retry"], ["diameter", "32"], [1, "flex-1", 3, "retry"], [1, "text-6xl"]], template: function PlaylistListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "input", 4);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function PlaylistListComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, PlaylistListComponent_Conditional_6_Template, 5, 1)(7, PlaylistListComponent_Conditional_7_Template, 5, 3, "div", 5)(8, PlaylistListComponent_Conditional_8_Template, 1, 0, "load-error", 6)(9, PlaylistListComponent_Conditional_9_Template, 6, 3, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 4, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.playlists().length > 0 ? 6 : ctx.loading() ? 7 : ctx.error() ? 8 : 9);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      LoadErrorComponent,
      IntersectDirective,
      PlaylistThumbnailComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=playlist-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistListComponent, [{
    type: Component,
    args: [{ selector: "playlist-list", template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div
                class="border-base-300 bg-base-100 sticky top-0 z-10 border-b p-2"
            >
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                        "
                        [(ngModel)]="search"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                        "
                    />
                </mat-form-field>
            </div>
            @if (playlists().length > 0) {
                @for (playlist of playlists(); track playlist.id) {
                    <a
                        #playlist_item
                        matRipple
                        class="border-base-300 relative z-0 flex w-full cursor-pointer items-center gap-3 border-b px-2 py-1 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === playlist.id"
                        [class.bg-warning/10]="
                            !playlist.enabled && selected()?.id !== playlist.id
                        "
                        [class.text-primary-content]="
                            selected()?.id === playlist.id
                        "
                        [class.hover:bg-base-200]="
                            playlist.enabled && selected()?.id !== playlist.id
                        "
                        [class.hover:bg-warning/20]="
                            !playlist.enabled && selected()?.id !== playlist.id
                        "
                        [routerLink]="['/playlists', playlist.id]"
                        queryParamsHandling="merge"
                        [attr.data-disabled-playlist]="
                            !playlist.enabled ? true : null
                        "
                        [attr.aria-label]="
                            ('SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                | translate: { name: playlist.name }) +
                            (!playlist.enabled
                                ? ', ' + ('COMMON.DISABLED' | translate)
                                : '')
                        "
                    >
                        <playlist-thumbnail
                            [playlist]="playlist"
                            class="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
                            [class.grayscale]="!playlist.enabled"
                            [class.opacity-50]="!playlist.enabled"
                        />
                        <div class="min-w-0 flex-1 pr-2">
                            <div
                                class="flex items-center gap-2 truncate font-medium"
                            >
                                {{ playlist.name }}
                            </div>
                            <div
                                class="flex flex-wrap gap-1 text-[0.625rem] font-medium uppercase"
                            >
                                @if (!playlist.enabled) {
                                    <span
                                        data-playlist-status="disabled"
                                        class="bg-warning text-warning-content flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 font-bold"
                                    >
                                        {{ 'COMMON.DISABLED' | translate }}
                                    </span>
                                }
                                @switch (getStatus(playlist)) {
                                    @case ('expired') {
                                        <span
                                            class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                    @case ('pending') {
                                        <span
                                            class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{ 'COMMON.PENDING' | translate }}
                                        </span>
                                    }
                                    @case ('awaiting_review') {
                                        <span
                                            class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                    @case ('awaiting_approval') {
                                        <span
                                            class="bg-base-300 shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'COMMON.APPROVAL_REQUIRED'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                }
                            </div>
                            @if (playlist.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== playlist.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === playlist.id
                                    "
                                >
                                    {{ playlist.description }}
                                </div>
                            }
                        </div>
                        @if (playlist.distribution) {
                            <icon class="mx-1">p2p</icon>
                        }
                    </a>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                } @else if (error()) {
                    <load-error (retry)="reload()" />
                } @else {
                    <div
                        class="text-base-content/50 bg-base-content/10 col-span-full my-2 p-2 text-center text-xs"
                    >
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else if (loading()) {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32" />
                    <p>{{ 'COMMON.LOADING' | translate }}</p>
                </div>
            } @else if (error()) {
                <load-error class="flex-1" (retry)="reload()" />
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">playlist_play</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_PLAYLISTS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      RouterLink,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      IconComponent,
      LoadErrorComponent,
      TranslatePipe,
      IntersectDirective,
      PlaylistThumbnailComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlist-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=playlist-list.component.css.map */\n"] }]
  }], () => [], { _playlist_items: [{ type: ViewChildren, args: ["playlist_item", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistListComponent, { className: "PlaylistListComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-list.component.ts", lineNumber: 221 });
})();

// apps/signage-manager/src/app/playlists/playlists.component.ts
function PlaylistsSectionComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_playlist().description, " ");
  }
}
function PlaylistsSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deselectPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "h4", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PlaylistsSectionComponent_Conditional_7_Conditional_8_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div")(10, "playlist-actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "button", 15);
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("items"));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 16);
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("details"));
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 24, "SIGNAGE_MANAGER.BACK_TO_PLAYLISTS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_playlist().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selected_playlist().description ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 26, "SIGNAGE_MANAGER.PLAYLIST_DETAILS_TABS"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "items")("border-b-2", ctx_r1.view_tab() === "items")("text-primary", ctx_r1.view_tab() === "items")("opacity-60", ctx_r1.view_tab() !== "items");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "items");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 28, "SIGNAGE_MANAGER.TAB_ITEMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "details")("border-b-2", ctx_r1.view_tab() === "details")("text-primary", ctx_r1.view_tab() === "details")("opacity-60", ctx_r1.view_tab() !== "details");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "details");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 30, "COMMON.DETAILS"), " ");
  }
}
var TAB_QUERY_PARAM = "tab";
function parsePlaylistTab(value) {
  return value === "details" ? "details" : "items";
}
var PlaylistsSectionComponent = class _PlaylistsSectionComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._playlist_service = inject(SignagePlaylistService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.id = input(
      "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tab = input(
      null,
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item = input(
      null,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view_tab = signal(
      "items",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_playlist = this._playlist_service.selected_playlist;
    this._playlists = this._playlist_service.playlists;
    this._playlist_items = this._playlist_service.playlist_media_items;
    this._route_resolved = false;
    this._fetched_id = "";
    effect(() => {
      const route_tab = parsePlaylistTab(this.tab());
      if (route_tab !== this.view_tab()) {
        this.view_tab.set(route_tab);
      }
    });
    effect(() => {
      const id = this.id();
      const list = this._playlists();
      if (!id) {
        if (this._route_resolved) {
          this._playlist_service.selected_playlist.set(null);
          this._playlist_service.selected_playlist_item.set(null);
          this._playlist_service.selected_playlist_item_index.set(null);
        }
        return;
      }
      const match = list.find((p) => p.id === id);
      if (match) {
        if (this._playlist_service.selected_playlist() !== match) {
          this._playlist_service.selected_playlist.set(match);
          this._playlist_service.selected_playlist_item.set(null);
          this._playlist_service.selected_playlist_item_index.set(null);
        }
        this._route_resolved = true;
        return;
      }
      if (!this._context.canQueryLists() || this._playlist_service.playlists_loading()) {
        return;
      }
      if (this._fetched_id !== id) {
        this._fetched_id = id;
        void this._loadLinkedPlaylist(id);
      }
      this._route_resolved = true;
    });
    effect(() => {
      const item_id = this.item();
      if (!item_id)
        return;
      const items = this._playlist_items();
      if (!items.length)
        return;
      const matched_index = items.findIndex((item) => item.id === item_id);
      const matched_item = items[matched_index];
      this._playlist_service.selected_playlist_item.set(matched_item || null);
      this._playlist_service.selected_playlist_item_index.set(matched_item ? matched_index : null);
    });
  }
  /**
   * Fetch a linked playlist that the loaded pages lack. When it cannot
   * load, warn and clear the selection, so no other playlist shows under
   * its link. Does nothing when the user has opened another link since.
   */
  async _loadLinkedPlaylist(id) {
    if (await this._playlist_service.loadPlaylist(id))
      return;
    if (this.id() !== id)
      return;
    notifyWarn(i18n("SIGNAGE_MANAGER.PLAYLIST_NOT_FOUND"));
    this._playlist_service.selected_playlist.set(null);
    this._playlist_service.selected_playlist_item.set(null);
    this._playlist_service.selected_playlist_item_index.set(null);
  }
  deselectPlaylist() {
    this._playlist_service.selected_playlist.set(null);
    this._playlist_service.selected_playlist_item.set(null);
    this._playlist_service.selected_playlist_item_index.set(null);
    this._router.navigate(["/playlists"], {});
  }
  setViewTab(tab) {
    if (tab === this.view_tab())
      return;
    this.view_tab.set(tab);
    void this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { [TAB_QUERY_PARAM]: tab },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  static {
    this.\u0275fac = function PlaylistsSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistsSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistsSectionComponent, selectors: [["playlists-section"]], inputs: { id: [1, "id"], tab: [1, "tab"], item: [1, "item"] }, decls: 12, vars: 11, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "mobile-full"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col"], ["id", "playlist-items-panel", "role", "tabpanel", "aria-labelledby", "playlist-items-tab", 1, "w-px", "max-w-full", "flex-1"], ["id", "playlist-details-panel", "role", "tabpanel", "aria-labelledby", "playlist-details-tab", 1, "bg-base-100"], [1, "bg-base-100", "border-base-300", "mx-2", "hidden", "items-center", "gap-2", "rounded-b-lg", "border", "p-2", "max-lg:flex"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "desktop-hidden", 3, "click"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2"], [1, "truncate", "text-lg", "font-medium"], [1, "-mt-1", "truncate", "text-xs"], ["role", "tablist", 1, "bg-base-100", "border-base-300", "mx-2", "my-2", "flex", "rounded-lg", "border", "lg:hidden"], ["type", "button", "role", "tab", "aria-controls", "playlist-items-panel", "id", "playlist-items-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", "role", "tab", "aria-controls", "playlist-details-panel", "id", "playlist-details-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"]], template: function PlaylistsSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "playlist-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "playlist-list", 5);
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, PlaylistsSectionComponent_Conditional_7_Template, 19, 32);
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "playlist-items", 7)(10, "playlist-item-details", 8);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(11, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mobile-hidden", !!ctx.selected_playlist());
        \u0275\u0275advance();
        \u0275\u0275classProp("mobile-hidden", !ctx.selected_playlist());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_playlist() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tablet-hidden", ctx.view_tab() === "details");
        \u0275\u0275advance();
        \u0275\u0275classProp("tablet-hidden", ctx.view_tab() === "items")("tablet-full", ctx.view_tab() === "details");
      }
    }, dependencies: [
      NavSidebarComponent,
      NavFooterComponent,
      PlaylistHeaderComponent,
      PlaylistListComponent,
      PlaylistItemsComponent,
      PlaylistItemDetailsComponent,
      PlaylistActionsComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      TranslatePipe
    ], styles: ["\n@media (max-width: 1023px) {\n  .tablet-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=playlists.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistsSectionComponent, [{
    type: Component,
    args: [{ selector: "playlists-section", template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <playlist-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <playlist-list
                        [class.mobile-hidden]="!!selected_playlist()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_playlist()"
                    >
                        @if (selected_playlist()) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 hidden items-center gap-2 rounded-b-lg border p-2 max-lg:flex"
                            >
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    class="desktop-hidden"
                                    (click)="deselectPlaylist()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_PLAYLISTS'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="flex w-1/2 flex-1 flex-col px-2">
                                    <h4 class="truncate text-lg font-medium">
                                        {{ selected_playlist().name }}
                                    </h4>
                                    @if (selected_playlist().description) {
                                        <div class="-mt-1 truncate text-xs">
                                            {{
                                                selected_playlist().description
                                            }}
                                        </div>
                                    }
                                </div>
                                <div></div>
                                <playlist-actions />
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 my-2 flex rounded-lg border lg:hidden"
                                role="tablist"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.PLAYLIST_DETAILS_TABS'
                                        | translate
                                "
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'items'
                                    "
                                    [class.border-b-2]="view_tab() === 'items'"
                                    [class.text-primary]="
                                        view_tab() === 'items'
                                    "
                                    [class.opacity-60]="view_tab() !== 'items'"
                                    (click)="setViewTab('items')"
                                    [attr.aria-selected]="
                                        view_tab() === 'items'
                                    "
                                    aria-controls="playlist-items-panel"
                                    id="playlist-items-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.TAB_ITEMS' | translate
                                    }}
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'details'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'details'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'details'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'details'
                                    "
                                    (click)="setViewTab('details')"
                                    [attr.aria-selected]="
                                        view_tab() === 'details'
                                    "
                                    aria-controls="playlist-details-panel"
                                    id="playlist-details-tab"
                                >
                                    {{ 'COMMON.DETAILS' | translate }}
                                </button>
                            </div>
                        }
                        <div class="flex min-h-0 flex-1 flex-row">
                            <playlist-items
                                id="playlist-items-panel"
                                role="tabpanel"
                                aria-labelledby="playlist-items-tab"
                                class="w-px max-w-full flex-1"
                                [class.tablet-hidden]="view_tab() === 'details'"
                            />
                            <playlist-item-details
                                id="playlist-details-panel"
                                role="tabpanel"
                                aria-labelledby="playlist-details-tab"
                                class="bg-base-100"
                                [class.tablet-hidden]="view_tab() === 'items'"
                                [class.tablet-full]="view_tab() === 'details'"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `, imports: [
      NavSidebarComponent,
      NavFooterComponent,
      PlaylistHeaderComponent,
      PlaylistListComponent,
      PlaylistItemsComponent,
      PlaylistItemDetailsComponent,
      PlaylistActionsComponent,
      MatRippleModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8f0ec758500a76429adaa395bb2c67c11f969c0788a1140a6bbb384e18334921;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlists.component.ts */\n@media (max-width: 1023px) {\n  .tablet-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=playlists.component.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }], item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistsSectionComponent, { className: "PlaylistsSectionComponent", filePath: "apps/signage-manager/src/app/playlists/playlists.component.ts", lineNumber: 194 });
})();
export {
  PlaylistsSectionComponent
};
//# debugId=3a39e716-ebca-57ca-b269-51b06ee25a7d
//# sourceMappingURL=playlists.component-YYNKPNPV.js.map
