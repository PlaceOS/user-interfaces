import {
  ItemListFieldComponent
} from "./chunk-WYMASTX7.js";
import "./chunk-V4XLJ2SN.js";
import "./chunk-IDYOJSL5.js";
import "./chunk-RSKYLYEV.js";
import {
  TranslatePipe
} from "./chunk-OQHCC7EM.js";
import "./chunk-3MB6OAN2.js";
import "./chunk-O6Q3U2DX.js";
import {
  Component,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  i18n,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QSNPLM4U.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/media-tags-modal.component.ts
var MediaTagsModalComponent = class _MediaTagsModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA, {
      optional: true
    });
    this.tag_options = this._data?.tags || [];
    this.heading = `${i18n("COMMON.ADD")} ${i18n("COMMON.TAGS")}`;
    this.tags = signal(
      [],
      ...ngDevMode ? [{ debugName: "tags" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  addTags() {
    if (this.tags().length)
      this._dialog_ref.close(this.tags());
  }
  static {
    this.\u0275fac = function MediaTagsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaTagsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaTagsModalComponent, selectors: [["media-tags-modal"]], hostAttrs: [1, "block", "min-w-0", "max-w-112", "overflow-hidden"], decls: 17, vars: 16, consts: [[1, "bg-base-200", "m-2", "flex", "w-[calc(100%-1rem)]", "min-w-0", "items-center", "justify-between", "overflow-hidden", "rounded-sm", "p-2"], [1, "min-w-0", "flex-1", "truncate", "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", "", 1, "shrink-0"], [1, "min-w-0", "px-4", "py-2"], ["name", "media-tags", 3, "ngModelChange", "ngModel", "options", "placeholder"], [1, "border-base-300", "flex", "justify-end", "border-t", "p-2"], ["btn", "", "type", "button", "matRipple", "", 1, "min-w-32", 3, "click", "disabled"]], template: function MediaTagsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementStart(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 3)(8, "label");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "item-list-field", 4);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function MediaTagsModalComponent_Template_item_list_field_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 5)(14, "button", 6);
        \u0275\u0275listener("click", function MediaTagsModalComponent_Template_button_click_14_listener() {
          return ctx.addTags();
        });
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.heading, " ");
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 8, "COMMON.CANCEL"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "COMMON.TAGS"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.tags);
        \u0275\u0275property("options", ctx.tag_options)("placeholder", \u0275\u0275pipeBind1(12, 12, "COMMON.TAGS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.tags().length);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "COMMON.ADD"), " ");
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      IconComponent,
      ItemListFieldComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaTagsModalComponent, [{
    type: Component,
    args: [{
      selector: "media-tags-modal",
      host: { class: "block min-w-0 max-w-112 overflow-hidden" },
      template: `
        <header
            class="bg-base-200 m-2 flex w-[calc(100%-1rem)] min-w-0 items-center justify-between overflow-hidden rounded-sm p-2"
        >
            <h2 class="min-w-0 flex-1 truncate px-2 text-xl font-medium">
                {{ heading }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                class="shrink-0"
                [attr.aria-label]="'COMMON.CANCEL' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-0 px-4 py-2">
            <label>{{ 'COMMON.TAGS' | translate }}</label>
            <item-list-field
                name="media-tags"
                [(ngModel)]="tags"
                [options]="tag_options"
                [placeholder]="'COMMON.TAGS' | translate"
            />
        </main>
        <footer class="border-base-300 flex justify-end border-t p-2">
            <button
                btn
                type="button"
                matRipple
                class="min-w-32"
                [disabled]="!tags().length"
                (click)="addTags()"
            >
                {{ 'COMMON.ADD' | translate }}
            </button>
        </footer>
    `,
      imports: [
        FormsModule,
        MatDialogModule,
        MatRippleModule,
        IconComponent,
        ItemListFieldComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaTagsModalComponent, { className: "MediaTagsModalComponent", filePath: "apps/signage-manager/src/app/shared/media-tags-modal.component.ts", lineNumber: 70 });
})();
export {
  MediaTagsModalComponent
};
//# debugId=df723ac5-6a39-589d-a2c2-510744432499
//# sourceMappingURL=media-tags-modal.component-4SW6XMV2.js.map
