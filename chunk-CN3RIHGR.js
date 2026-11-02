import {
  PickerItemDirective,
  PickerModalComponent
} from "./chunk-X7CSJT6L.js";
import {
  SignageMediaService
} from "./chunk-76U465HG.js";
import {
  MediaThumbnailComponent
} from "./chunk-VZG7GCO3.js";
import {
  PagedSearch,
  byName
} from "./chunk-VXDPGMUS.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-CHDADISI.js";
import {
  TranslatePipe
} from "./chunk-T2VWHNJH.js";
import {
  IconComponent
} from "./chunk-7MADQ4JT.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-SZ34I7U6.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BKT2MDTY.js";

// apps/signage-manager/src/app/shared/media-select-modal.component.ts
var _c0 = (a0) => ({ count: a0 });
function MediaSelectModalComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 8);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MediaSelectModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function MediaSelectModalComponent_ng_template_1_Template_button_click_0_listener() {
      const media_item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pick(media_item_r2));
    });
    \u0275\u0275element(1, "media-thumbnail", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, MediaSelectModalComponent_ng_template_1_Conditional_7_Template, 2, 0, "icon", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-primary", ctx_r2.isSelected(media_item_r2))("ring-primary", ctx_r2.isSelected(media_item_r2))("ring-1", ctx_r2.isSelected(media_item_r2));
    \u0275\u0275attribute("aria-pressed", ctx_r2.multiple ? ctx_r2.isSelected(media_item_r2) : null);
    \u0275\u0275advance();
    \u0275\u0275property("item", media_item_r2)("cover", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(media_item_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", media_item_r2.media_type, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSelected(media_item_r2) ? 7 : -1);
  }
}
function MediaSelectModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 2)(1, "button", 9);
    \u0275\u0275listener("click", function MediaSelectModalComponent_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirm());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.picked().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "SIGNAGE_MANAGER.ADD_SELECTED_MEDIA", \u0275\u0275pureFunction1(5, _c0, ctx_r2.picked().length)), " ");
  }
}
var MediaSelectModalComponent = class _MediaSelectModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._media_service = inject(SignageMediaService);
    this.multiple = !!this._data.multiple;
    this.heading = this._data.heading || "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT";
    this.picked = signal(
      [],
      ...ngDevMode ? [{ debugName: "picked" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.list = new PagedSearch((search) => this._media_service.queryMedia(search), byName);
  }
  isSelected(media) {
    return this.multiple ? this.picked().some(({ id }) => id === media.id) : media.id === this._data.selected_id;
  }
  /** Close with the item, or toggle it when picking several */
  pick(media) {
    if (!this.multiple) {
      this._dialog_ref.close(media);
      return;
    }
    this.picked.update((list) => list.some(({ id }) => id === media.id) ? list.filter(({ id }) => id !== media.id) : [...list, media]);
  }
  /** Close with the picked items */
  confirm() {
    this._dialog_ref.close(this.picked());
  }
  static {
    this.\u0275fac = function MediaSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaSelectModalComponent, selectors: [["media-select-modal"]], decls: 3, vars: 4, consts: [["close_label", "COMMON.CLOSE", "search_label", "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH", "empty_icon", "image", "empty_label", "SIGNAGE_MANAGER.NO_MEDIA", 3, "heading", "list"], [3, "pickerItem"], [1, "border-base-300", "flex", "justify-end", "border-t", "p-2"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-20", "w-full", "items-center", "gap-3", "rounded-sm", "border", "p-2", "text-left", 3, "click"], [1, "bg-base-200", "h-14", "w-20", "shrink-0", "overflow-hidden", "rounded", 3, "item", "cover"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs", "capitalize"], [1, "text-primary", "shrink-0"], ["btn", "", "type", "button", "matRipple", "", 1, "min-w-32", 3, "click", "disabled"]], template: function MediaSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "picker-modal", 0);
        \u0275\u0275template(1, MediaSelectModalComponent_ng_template_1_Template, 8, 12, "ng-template", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, MediaSelectModalComponent_Conditional_2_Template, 4, 7, "footer", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.heading)("list", ctx.list);
        \u0275\u0275advance();
        \u0275\u0275property("pickerItem", ctx.list);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.multiple ? 2 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      MediaThumbnailComponent,
      PickerModalComponent,
      PickerItemDirective,
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
        <picker-modal
            [heading]="heading"
            close_label="COMMON.CLOSE"
            search_label="SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH"
            empty_icon="image"
            empty_label="SIGNAGE_MANAGER.NO_MEDIA"
            [list]="list"
        >
            <ng-template [pickerItem]="list" let-media_item>
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-20 w-full items-center gap-3 rounded-sm border p-2 text-left"
                    [class.border-primary]="isSelected(media_item)"
                    [class.ring-primary]="isSelected(media_item)"
                    [class.ring-1]="isSelected(media_item)"
                    [attr.aria-pressed]="
                        multiple ? isSelected(media_item) : null
                    "
                    (click)="pick(media_item)"
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
                    @if (isSelected(media_item)) {
                        <icon class="text-primary shrink-0">check</icon>
                    }
                </button>
            </ng-template>
        </picker-modal>
        @if (multiple) {
            <footer class="border-base-300 flex justify-end border-t p-2">
                <button
                    btn
                    type="button"
                    matRipple
                    class="min-w-32"
                    [disabled]="!picked().length"
                    (click)="confirm()"
                >
                    {{
                        'SIGNAGE_MANAGER.ADD_SELECTED_MEDIA'
                            | translate: { count: picked().length }
                    }}
                </button>
            </footer>
        }
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        MediaThumbnailComponent,
        PickerModalComponent,
        PickerItemDirective
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaSelectModalComponent, { className: "MediaSelectModalComponent", filePath: "apps/signage-manager/src/app/shared/media-select-modal.component.ts", lineNumber: 97 });
})();

export {
  MediaSelectModalComponent
};
//# debugId=67bc4aa4-6f89-566f-b2f3-f710ab52f8cf
//# sourceMappingURL=chunk-CN3RIHGR.js.map
