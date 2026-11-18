import {
  PickerItemDirective,
  PickerModalComponent
} from "./chunk-IJH4C6IM.js";
import "./chunk-NMONPQBW.js";
import "./chunk-TPIYTD63.js";
import {
  SignagePlaylistService
} from "./chunk-5NJDOF56.js";
import "./chunk-X3RLYKHC.js";
import "./chunk-5DBOETBP.js";
import "./chunk-HQT73M4E.js";
import "./chunk-TYXBOV3I.js";
import "./chunk-7NP5DBVY.js";
import "./chunk-7WP6JLBK.js";
import "./chunk-DBHIDYGN.js";
import "./chunk-4KDGX2ZG.js";
import "./chunk-PG3UDOSB.js";
import "./chunk-QBA626HA.js";
import {
  PagedSearch,
  byName
} from "./chunk-PCEZJ27E.js";
import "./chunk-OK5TSWA3.js";
import "./chunk-ULBI6BCP.js";
import "./chunk-26OIUIHH.js";
import {
  MatDialogClose,
  MatDialogModule
} from "./chunk-OPFTRVSI.js";
import "./chunk-XUI5Q4W7.js";
import "./chunk-K4HONAXN.js";
import "./chunk-XUC5JTKQ.js";
import "./chunk-ND7JCST6.js";
import "./chunk-X25JVJEC.js";
import {
  IconComponent
} from "./chunk-HOZSCKVQ.js";
import "./chunk-XOZGIMTC.js";
import "./chunk-QRKKUNDS.js";
import "./chunk-ZIHEKIW7.js";
import "./chunk-KQUEHK5N.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-5XA7EDTX.js";
import "./chunk-35VUMMTM.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-W6NHZ5YT.js";
import "./chunk-GLT7DQUO.js";

// apps/signage-manager/src/app/shared/playlist-select-modal.component.ts
function PlaylistSelectModalComponent_ng_template_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r1.description, " ");
  }
}
function PlaylistSelectModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon", 3);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PlaylistSelectModalComponent_ng_template_1_Conditional_6_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const playlist_r1 = ctx.$implicit;
    \u0275\u0275property("mat-dialog-close", playlist_r1.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(playlist_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(playlist_r1.description ? 6 : -1);
  }
}
var PlaylistSelectModalComponent = class _PlaylistSelectModalComponent {
  constructor() {
    this._playlist_service = inject(SignagePlaylistService);
    this.list = new PagedSearch((search) => this._playlist_service.queryPlaylists(search), byName);
  }
  static {
    this.\u0275fac = function PlaylistSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistSelectModalComponent, selectors: [["playlist-select-modal"]], decls: 2, vars: 2, consts: [["heading", "SIGNAGE_MANAGER.ADD_TO_PLAYLIST", "close_label", "SIGNAGE_MANAGER.CLOSE_ADD_PLAYLIST", "search_label", "SIGNAGE_MANAGER.SEARCH_PLAYLISTS", "empty_icon", "playlist_play", "empty_label", "SIGNAGE_MANAGER.NO_PLAYLISTS", 3, "list"], [3, "pickerItem"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "text-base-content/60", "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs"]], template: function PlaylistSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "picker-modal", 0);
        \u0275\u0275template(1, PlaylistSelectModalComponent_ng_template_1_Template, 7, 3, "ng-template", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("list", ctx.list);
        \u0275\u0275advance();
        \u0275\u0275property("pickerItem", ctx.list);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      PickerModalComponent,
      PickerItemDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistSelectModalComponent, [{
    type: Component,
    args: [{
      selector: "playlist-select-modal",
      template: `
        <picker-modal
            heading="SIGNAGE_MANAGER.ADD_TO_PLAYLIST"
            close_label="SIGNAGE_MANAGER.CLOSE_ADD_PLAYLIST"
            search_label="SIGNAGE_MANAGER.SEARCH_PLAYLISTS"
            empty_icon="playlist_play"
            empty_label="SIGNAGE_MANAGER.NO_PLAYLISTS"
            [list]="list"
        >
            <ng-template [pickerItem]="list" let-playlist>
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [mat-dialog-close]="playlist.id"
                >
                    <icon class="text-base-content/60 shrink-0 text-2xl"
                        >playlist_play</icon
                    >
                    <div class="min-w-0 flex-1">
                        <div class="truncate">{{ playlist.name }}</div>
                        @if (playlist.description) {
                            <div class="text-base-content/70 truncate text-xs">
                                {{ playlist.description }}
                            </div>
                        }
                    </div>
                </button>
            </ng-template>
        </picker-modal>
    `,
      imports: [
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        PickerModalComponent,
        PickerItemDirective
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistSelectModalComponent, { className: "PlaylistSelectModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-select-modal.component.ts", lineNumber: 54 });
})();
export {
  PlaylistSelectModalComponent
};
//# debugId=8c9c7be2-418f-5f70-9010-195bf0c312f1
//# sourceMappingURL=playlist-select-modal.component-ASJVAILK.js.map
