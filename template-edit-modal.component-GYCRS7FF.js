import {
  PagedSearch,
  byName
} from "./chunk-EQ5LIJEF.js";
import {
  IntersectDirective
} from "./chunk-44WQOBER.js";
import {
  SignageSharedWithComponent
} from "./chunk-J6FHDLOC.js";
import {
  SettingsToggleComponent
} from "./chunk-LCQDVA3T.js";
import "./chunk-YDLQU56C.js";
import {
  FullscreenModalShellComponent
} from "./chunk-PNZNXU3K.js";
import {
  MediaThumbnailComponent
} from "./chunk-WL62UWOI.js";
import {
  AuthenticatedImageDirective
} from "./chunk-YB46INQE.js";
import {
  SignageService
} from "./chunk-CYICODSY.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-XASXFKEM.js";
import "./chunk-MFBJJVF7.js";
import "./chunk-7YL2E6BC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-XG3NPPBO.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  form,
  required,
  submit
} from "./chunk-RSKYLYEV.js";
import "./chunk-HW4EA2SL.js";
import "./chunk-WN6EDS3Q.js";
import "./chunk-C7ELQ7TP.js";
import {
  TranslatePipe
} from "./chunk-OQHCC7EM.js";
import "./chunk-524GLCDK.js";
import "./chunk-T3VMWKY2.js";
import {
  HotkeysService
} from "./chunk-FYNMFSTT.js";
import "./chunk-O6Q3U2DX.js";
import {
  Component,
  DefaultValueAccessor,
  DestroyRef,
  FormsModule,
  IconComponent,
  Lh,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  computed,
  firstValueFrom,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  removeEmptyFields,
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
  ɵɵtextInterpolate1
} from "./chunk-QSNPLM4U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/media-select-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MediaSelectModalComponent_Conditional_13_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 15);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MediaSelectModalComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275element(1, "media-thumbnail", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, MediaSelectModalComponent_Conditional_13_For_1_Conditional_7_Template, 2, 0, "icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-primary", media_item_r1.id === ctx_r1.selected_id)("ring-primary", media_item_r1.id === ctx_r1.selected_id)("ring-1", media_item_r1.id === ctx_r1.selected_id);
    \u0275\u0275property("mat-dialog-close", media_item_r1);
    \u0275\u0275advance();
    \u0275\u0275property("item", media_item_r1)("cover", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(media_item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", media_item_r1.media_type, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(media_item_r1.id === ctx_r1.selected_id ? 7 : -1);
  }
}
function MediaSelectModalComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("intersect", function MediaSelectModalComponent_Conditional_13_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.list.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function MediaSelectModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MediaSelectModalComponent_Conditional_13_For_1_Template, 8, 12, "button", 8, _forTrack0);
    \u0275\u0275conditionalCreate(2, MediaSelectModalComponent_Conditional_13_Conditional_2_Template, 1, 0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.list.items());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.list.has_more() ? 2 : -1);
  }
}
function MediaSelectModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"), " ");
  }
}
function MediaSelectModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 18);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_MEDIA"), " ");
  }
}
var MediaSelectModalComponent = class _MediaSelectModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._service = inject(SignageService);
    this.selected_id = this._data.selected_id;
    this.list = new PagedSearch((search) => this._service.queryMedia(search), byName);
  }
  static {
    this.\u0275fac = function MediaSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaSelectModalComponent, selectors: [["media-select-modal"]], decls: 16, vars: 14, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "gap-4", "rounded-lg", "p-16"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-20", "w-full", "items-center", "gap-3", "rounded-sm", "border", "p-2", "text-left", 3, "border-primary", "ring-primary", "ring-1", "mat-dialog-close"], ["intersect", "", 1, "h-px", "w-full"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-20", "w-full", "items-center", "gap-3", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "bg-base-200", "h-14", "w-20", "shrink-0", "overflow-hidden", "rounded", 3, "item", "cover"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs", "capitalize"], [1, "text-primary", "shrink-0"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [1, "text-base-content/70"], [1, "text-base-content/70", "text-8xl"]], template: function MediaSelectModalComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("ngModelChange", function MediaSelectModalComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.list.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, MediaSelectModalComponent_Conditional_13_Template, 3, 1)(14, MediaSelectModalComponent_Conditional_14_Template, 4, 3, "div", 6)(15, MediaSelectModalComponent_Conditional_15_Template, 6, 3, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 8, "COMMON.CLOSE"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.list.search())("placeholder", \u0275\u0275pipeBind1(11, 10, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 12, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH"));
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
      MediaThumbnailComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaSelectModalComponent, [{
    type: Component,
    args: [{
      selector: "media-select-modal",
      template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT' | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="'COMMON.CLOSE' | translate"
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
                        'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH' | translate
                    "
                />
            </mat-form-field>
            @if (list.items().length > 0) {
                @for (media_item of list.items(); track media_item.id) {
                    <button
                        type="button"
                        matRipple
                        class="border-base-300 hover:bg-base-200 z-0 flex h-20 w-full items-center gap-3 rounded-sm border p-2 text-left"
                        [class.border-primary]="media_item.id === selected_id"
                        [class.ring-primary]="media_item.id === selected_id"
                        [class.ring-1]="media_item.id === selected_id"
                        [mat-dialog-close]="media_item"
                    >
                        <media-thumbnail
                            class="bg-base-200 h-14 w-20 shrink-0 overflow-hidden rounded"
                            [item]="media_item"
                            [cover]="true"
                        />
                        <div class="min-w-0 flex-1">
                            <div class="truncate">{{ media_item.name }}</div>
                            <div
                                class="text-base-content/70 truncate text-xs capitalize"
                            >
                                {{ media_item.media_type }}
                            </div>
                        </div>
                        @if (media_item.id === selected_id) {
                            <icon class="text-primary shrink-0">check</icon>
                        }
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
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full items-center justify-center rounded-lg p-16"
                >
                    <div class="text-base-content/70">
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center gap-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">image</icon>
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_MEDIA' | translate }}
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
        IntersectDirective,
        MediaThumbnailComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaSelectModalComponent, { className: "MediaSelectModalComponent", filePath: "apps/signage-manager/src/app/shared/media-select-modal.component.ts", lineNumber: 124 });
})();

// apps/signage-manager/src/app/shared/template-edit-modal.component.ts
function TemplateEditModalComponent_Conditional_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function TemplateEditModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TemplateEditModalComponent_Conditional_28_Conditional_6_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.background_url())("alt", ctx_r0.selected_background()?.name || \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selected_background()?.name || \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.selected_background()?.media_type) ? 6 : -1, tmp_4_0);
  }
}
function TemplateEditModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon", 21);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY"), " ");
  }
}
function TemplateEditModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TemplateEditModalComponent_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearBackground());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_REMOVE"));
  }
}
var TemplateEditModalComponent = class _TemplateEditModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog = inject(MatDialog);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template = this._data.template;
    this.group_id = this._data.group_id || "";
    this.model = signal(
      {
        name: this.template.name || "",
        description: this.template.description || "",
        background_item_id: this.template.background_item_id || "",
        full_screen_takeover: !!this.template.full_screen_takeover,
        merge: !!this.template.merge
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_background = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_background" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background_url = computed(
      () => {
        const media_id = this.model().background_item_id;
        return media_id ? Lh(media_id) : "";
      },
      ...ngDevMode ? [{ debugName: "background_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (path) => {
      required(path.name);
    });
    const save_hotkey = inject(HotkeysService).listen(["KeyS"], () => this.saveTemplate());
    inject(DestroyRef).onDestroy(() => save_hotkey?.unsubscribe());
  }
  async selectBackground() {
    const ref = this._dialog.open(MediaSelectModalComponent, {
      data: { selected_id: this.model().background_item_id },
      panelClass: "mobile-fullscreen"
    });
    const media = await firstValueFrom(ref.afterClosed());
    if (!media)
      return;
    this.selected_background.set(media);
    this.model.update((value) => __spreadProps(__spreadValues({}, value), {
      background_item_id: media.id
    }));
  }
  clearBackground() {
    this.selected_background.set(null);
    this.model.update((value) => __spreadProps(__spreadValues({}, value), {
      background_item_id: ""
    }));
  }
  async saveTemplate() {
    await submit(this.form, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      const data = __spreadValues({}, this.model());
      removeEmptyFields(data);
      try {
        let result;
        if (this.template.id) {
          result = await this._data.onEdit(this.template.id, data);
        } else {
          result = await this._data.onAdd(data);
        }
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(result);
        notifySuccess(i18n("SIGNAGE_MANAGER.TEMPLATE_SAVED"));
      } catch (e) {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        notifyError(i18n("SIGNAGE_MANAGER.TEMPLATE_SAVE_ERROR"));
        throw e;
      }
    });
  }
  static {
    this.\u0275fac = function TemplateEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateEditModalComponent, selectors: [["template-edit-modal"]], decls: 42, vars: 47, consts: [["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "placeholder", "formField"], ["for", "description"], ["matInput", "", 1, "min-h-32", 3, "placeholder", "formField"], [1, "mb-4"], [1, "mb-1"], [1, "border-base-300", "flex", "flex-wrap", "items-center", "gap-3", "rounded-lg", "border", "p-3"], [1, "ml-auto", "flex", "shrink-0", "items-center", "gap-1"], ["type", "button", "matRipple", "", 1, "hover:bg-base-200", "rounded", "px-3", "py-2", "text-sm", "font-medium", 3, "click"], ["icon", "", "type", "button", "matRipple", "", 1, "text-error"], ["info", "When selected, takeover content will hide the template and takeover the entire screen", 3, "label", "formField"], [3, "label", "formField"], ["type", "templates", 3, "item_id", "group_id"], ["auth", "", 1, "bg-base-200", "h-16", "w-24", "shrink-0", "rounded", "object-cover", 3, "source", "alt"], [1, "min-w-32", "flex-1"], [1, "truncate", "font-medium"], [1, "text-base-content/70", "text-xs", "capitalize"], [1, "bg-base-200", "flex", "h-16", "w-24", "shrink-0", "items-center", "justify-center", "rounded"], [1, "text-base-content/40", "text-3xl"], [1, "text-base-content/70", "min-w-32", "flex-1"], ["icon", "", "type", "button", "matRipple", "", 1, "text-error", 3, "click"]], template: function TemplateEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function TemplateEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveTemplate();
        });
        \u0275\u0275elementStart(3, "form")(4, "label", 1);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span", 2);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 3);
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "label", 5);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 3);
        \u0275\u0275element(20, "textarea", 6);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "fieldset", 7)(24, "legend", 8);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 9);
        \u0275\u0275conditionalCreate(28, TemplateEditModalComponent_Conditional_28_Template, 7, 8)(29, TemplateEditModalComponent_Conditional_29_Template, 6, 3);
        \u0275\u0275elementStart(30, "div", 10)(31, "button", 11);
        \u0275\u0275listener("click", function TemplateEditModalComponent_Template_button_click_31_listener() {
          return ctx.selectBackground();
        });
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(34, TemplateEditModalComponent_Conditional_34_Template, 4, 3, "button", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 7);
        \u0275\u0275element(36, "settings-toggle", 13);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 7);
        \u0275\u0275element(39, "settings-toggle", 14);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "signage-shared-with", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 21, ctx.template.id ? "SIGNAGE_MANAGER.TEMPLATE_EDIT" : "SIGNAGE_MANAGER.NEW_TEMPLATE"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 23, "SIGNAGE_MANAGER.TEMPLATE_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 25, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 27, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 29, "SIGNAGE_MANAGER.TEMPLATE_NAME_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 31, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 33, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 35, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 37, "SIGNAGE_MANAGER.TEMPLATE_DESCRIPTION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 39, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().background_item_id ? 28 : 29);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 41, ctx.model().background_item_id ? "COMMON.CHANGE" : "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.model().background_item_id ? 34 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 43, "SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER"))("formField", ctx.form.full_screen_takeover);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(40, 45, "SIGNAGE_MANAGER.TEMPLATE_MERGE"))("formField", ctx.form.merge);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("item_id", ctx.template.id)("group_id", ctx.group_id);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      AuthenticatedImageDirective,
      IconComponent,
      SettingsToggleComponent,
      FormField,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      SignageSharedWithComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateEditModalComponent, [{
    type: Component,
    args: [{
      selector: "template-edit-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="
                (template.id
                    ? 'SIGNAGE_MANAGER.TEMPLATE_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_TEMPLATE'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveTemplate()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.TEMPLATE_SAVING' | translate) : ''
            "
        >
            <form>
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [placeholder]="'FORM.NAME' | translate"
                        [formField]="form.name"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_NAME_ARIA' | translate
                        "
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <label for="description">{{
                    'COMMON.DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        [formField]="form.description"
                        class="min-h-32"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_DESCRIPTION_ARIA'
                                | translate
                        "
                    ></textarea>
                </mat-form-field>
                <fieldset class="mb-4">
                    <legend class="mb-1">
                        {{ 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND' | translate }}
                    </legend>
                    <div
                        class="border-base-300 flex flex-wrap items-center gap-3 rounded-lg border p-3"
                    >
                        @if (model().background_item_id) {
                            <img
                                auth
                                class="bg-base-200 h-16 w-24 shrink-0 rounded object-cover"
                                [source]="background_url()"
                                [alt]="
                                    selected_background()?.name ||
                                    ('SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                        | translate)
                                "
                            />
                            <div class="min-w-32 flex-1">
                                <div class="truncate font-medium">
                                    {{
                                        selected_background()?.name ||
                                            ('SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECTED'
                                                | translate)
                                    }}
                                </div>
                                @if (
                                    selected_background()?.media_type;
                                    as type
                                ) {
                                    <div
                                        class="text-base-content/70 text-xs capitalize"
                                    >
                                        {{ type }}
                                    </div>
                                }
                            </div>
                        } @else {
                            <div
                                class="bg-base-200 flex h-16 w-24 shrink-0 items-center justify-center rounded"
                            >
                                <icon class="text-base-content/40 text-3xl"
                                    >image</icon
                                >
                            </div>
                            <div class="text-base-content/70 min-w-32 flex-1">
                                {{
                                    'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY'
                                        | translate
                                }}
                            </div>
                        }
                        <div class="ml-auto flex shrink-0 items-center gap-1">
                            <button
                                type="button"
                                matRipple
                                class="hover:bg-base-200 rounded px-3 py-2 text-sm font-medium"
                                (click)="selectBackground()"
                            >
                                {{
                                    (model().background_item_id
                                        ? 'COMMON.CHANGE'
                                        : 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT'
                                    ) | translate
                                }}
                            </button>
                            @if (model().background_item_id) {
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="text-error"
                                    (click)="clearBackground()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_REMOVE'
                                            | translate
                                    "
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                        </div>
                    </div>
                </fieldset>
                <div class="mb-4">
                    <settings-toggle
                        [label]="
                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                | translate
                        "
                        [formField]="form.full_screen_takeover"
                        info="When selected, takeover content will hide the template and takeover the entire screen"
                    >
                    </settings-toggle>
                </div>
                <div class="mb-4">
                    <settings-toggle
                        [label]="'SIGNAGE_MANAGER.TEMPLATE_MERGE' | translate"
                        [formField]="form.merge"
                    ></settings-toggle>
                </div>
                <signage-shared-with
                    type="templates"
                    [item_id]="template.id"
                    [group_id]="group_id"
                ></signage-shared-with>
            </form>
        </fullscreen-modal-shell>
    `,
      imports: [
        FullscreenModalShellComponent,
        AuthenticatedImageDirective,
        IconComponent,
        SettingsToggleComponent,
        FormField,
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        SignageSharedWithComponent
      ]
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateEditModalComponent, { className: "TemplateEditModalComponent", filePath: "apps/signage-manager/src/app/shared/template-edit-modal.component.ts", lineNumber: 226 });
})();
export {
  TemplateEditModalComponent
};
//# debugId=101dcd80-f234-5439-bdf8-3082a1811e59
//# sourceMappingURL=template-edit-modal.component-GYCRS7FF.js.map
