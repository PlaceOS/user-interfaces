import {
  PagedSearch,
  byName
} from "./chunk-EQ5LIJEF.js";
import {
  IntersectDirective
} from "./chunk-44WQOBER.js";
import {
  SignageService
} from "./chunk-IJFYACDR.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-XASXFKEM.js";
import "./chunk-MFBJJVF7.js";
import "./chunk-OKGMEF76.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-XG3NPPBO.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-RSKYLYEV.js";
import "./chunk-HW4EA2SL.js";
import "./chunk-WN6EDS3Q.js";
import "./chunk-C7ELQ7TP.js";
import {
  TranslatePipe
} from "./chunk-OQHCC7EM.js";
import "./chunk-3MB6OAN2.js";
import "./chunk-O6Q3U2DX.js";
import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate1
} from "./chunk-QSNPLM4U.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/playlist-select-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PlaylistSelectModalComponent_Conditional_13_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r1.description, " ");
  }
}
function PlaylistSelectModalComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "icon", 10);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PlaylistSelectModalComponent_Conditional_13_For_1_Conditional_6_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const playlist_r1 = ctx.$implicit;
    \u0275\u0275property("mat-dialog-close", playlist_r1.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", playlist_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(playlist_r1.description ? 6 : -1);
  }
}
function PlaylistSelectModalComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("intersect", function PlaylistSelectModalComponent_Conditional_13_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.list.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function PlaylistSelectModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistSelectModalComponent_Conditional_13_For_1_Template, 7, 3, "button", 8, _forTrack0);
    \u0275\u0275conditionalCreate(2, PlaylistSelectModalComponent_Conditional_13_Conditional_2_Template, 1, 0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.list.items());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.list.has_more() ? 2 : -1);
  }
}
function PlaylistSelectModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"), " ");
  }
}
function PlaylistSelectModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 16);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS"), " ");
  }
}
var PlaylistSelectModalComponent = class _PlaylistSelectModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._service = inject(SignageService);
    this.list = new PagedSearch((search) => this._service.queryPlaylists(search), byName);
  }
  static {
    this.\u0275fac = function PlaylistSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistSelectModalComponent, selectors: [["playlist-select-modal"]], decls: 16, vars: 14, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], ["intersect", "", 1, "h-px", "w-full"], [1, "text-base-content/60", "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [1, "text-base-content/70"], [1, "text-base-content/70", "text-8xl"]], template: function PlaylistSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 3)(9, "mat-form-field", 4)(10, "input", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275listener("ngModelChange", function PlaylistSelectModalComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.list.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, PlaylistSelectModalComponent_Conditional_13_Template, 3, 1)(14, PlaylistSelectModalComponent_Conditional_14_Template, 4, 3, "div", 6)(15, PlaylistSelectModalComponent_Conditional_15_Template, 6, 3, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SIGNAGE_MANAGER.ADD_TO_PLAYLIST"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 8, "SIGNAGE_MANAGER.CLOSE_ADD_PLAYLIST"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.list.search())("placeholder", \u0275\u0275pipeBind1(11, 10, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 12, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.list.items().length > 0 ? 13 : ctx.list.loading() ? 14 : 15);
      }
    }, dependencies: [
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
      IconComponent,
      IntersectDirective,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistSelectModalComponent, [{
    type: Component,
    args: [{
      selector: "playlist-select-modal",
      template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.ADD_TO_PLAYLIST' | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.CLOSE_ADD_PLAYLIST' | translate
                "
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [ngModel]="list.search()"
                    (ngModelChange)="list.search.set($event)"
                    [placeholder]="
                        'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                    "
                />
            </mat-form-field>
            @if (list.items().length > 0) {
                @for (playlist of list.items(); track playlist.id) {
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
                            <div class="truncate">
                                {{ playlist.name }}
                            </div>
                            @if (playlist.description) {
                                <div
                                    class="text-base-content/70 truncate text-xs"
                                >
                                    {{ playlist.description }}
                                </div>
                            }
                        </div>
                    </button>
                }
                @if (list.has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="list.loadMore()"
                    ></div>
                }
            } @else if (list.loading()) {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center rounded-lg p-16"
                >
                    <div class="text-base-content/70">
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl"
                        >playlist_play</icon
                    >
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_PLAYLISTS' | translate }}
                    </div>
                </div>
            }
        </main>
    `,
      imports: [
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
        IntersectDirective
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistSelectModalComponent, { className: "PlaylistSelectModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-select-modal.component.ts", lineNumber: 117 });
})();
export {
  PlaylistSelectModalComponent
};
//# debugId=aa35aac6-1c2a-5df5-b1a0-bed281975563
//# sourceMappingURL=playlist-select-modal.component-4L6K2NQR.js.map
