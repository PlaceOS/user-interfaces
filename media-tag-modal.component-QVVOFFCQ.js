import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-XVHEOONU.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5PUHOZFV.js";
import {
  FormField,
  MatFormField,
  MatFormFieldModule,
  form,
  required,
  submit
} from "./chunk-CIOF3O5C.js";
import {
  TranslatePipe
} from "./chunk-2MCN5NQW.js";
import {
  Component,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  inject,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JABNH3I5.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/media-tag-modal.component.ts
var _c0 = (a0, a1) => ({ tag: a0, count: a1 });
function MediaTagModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 8);
    \u0275\u0275element(4, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.TAG_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.tag_form.new_tag);
    \u0275\u0275control();
  }
}
function MediaTagModalComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r0.tag_form.remove_media);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.DELETE_TAGGED_MEDIA"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "SIGNAGE_MANAGER.DELETE_TAGGED_MEDIA_HINT"), " ");
  }
}
function MediaTagModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MediaTagModalComponent_Conditional_10_Conditional_3_Template, 6, 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 2, "SIGNAGE_MANAGER.REMOVE_MEDIA_TAG_DESCRIPTION", \u0275\u0275pureFunction2(6, _c0, ctx_r0.data.tag, ctx_r0.data.count), ctx_r0.data.count), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.data.can_delete_media ? 3 : -1);
  }
}
var MediaTagModalComponent = class _MediaTagModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.is_rename = this.data.action === "rename";
    this.tag_model = signal(
      {
        new_tag: this.data.tag,
        remove_media: false
      },
      ...ngDevMode ? [{ debugName: "tag_model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tag_form = form(this.tag_model, (path) => {
      required(path.new_tag);
    });
    this.rename_disabled = () => {
      const new_tag = this.tag_model().new_tag.trim();
      return this.is_rename && (this.tag_form().invalid() || !new_tag || new_tag === this.data.tag);
    };
  }
  confirm() {
    if (this.rename_disabled())
      return;
    submit(this.tag_form, async () => {
      const model = this.tag_model();
      const result = this.is_rename ? { action: "rename", new_tag: model.new_tag.trim() } : { action: "remove", remove_media: model.remove_media };
      this._dialog_ref.close(result);
    });
  }
  static {
    this.\u0275fac = function MediaTagModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaTagModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaTagModalComponent, selectors: [["media-tag-modal"]], hostAttrs: [1, "block", "min-w-0", "max-w-112", "overflow-hidden"], decls: 18, vars: 16, consts: [[1, "bg-base-200", "m-2", "flex", "w-[calc(100%-1rem)]", "min-w-0", "items-center", "justify-between", "overflow-hidden", "rounded-sm", "p-2"], [1, "min-w-0", "flex-1", "truncate", "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", "", 1, "shrink-0"], [1, "min-w-0", "px-4", "py-2"], [1, "border-base-300", "flex", "justify-end", "gap-2", "border-t", "p-2"], ["btn", "", "type", "button", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "min-w-32"], ["btn", "", "type", "button", "matRipple", "", 1, "min-w-32", 3, "click", "disabled"], ["for", "media-tag-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "media-tag-name", 3, "formField"], [1, "mt-4", 3, "formField"], [1, "text-base-content/70", "mt-1", "text-sm"]], template: function MediaTagModalComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(8, "main", 3);
        \u0275\u0275conditionalCreate(9, MediaTagModalComponent_Conditional_9_Template, 5, 4)(10, MediaTagModalComponent_Conditional_10_Template, 4, 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "footer", 4)(12, "button", 5);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function MediaTagModalComponent_Template_button_click_15_listener() {
          return ctx.confirm();
        });
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, ctx.is_rename ? "SIGNAGE_MANAGER.RENAME_MEDIA_TAG" : "SIGNAGE_MANAGER.REMOVE_MEDIA_TAG"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 10, "COMMON.CANCEL"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.is_rename ? 9 : 10);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("error", !ctx.is_rename);
        \u0275\u0275property("disabled", ctx.rename_disabled());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, ctx.is_rename ? "SIGNAGE_MANAGER.RENAME_MEDIA_TAG" : "COMMON.REMOVE"), " ");
      }
    }, dependencies: [
      FormField,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaTagModalComponent, [{
    type: Component,
    args: [{
      selector: "media-tag-modal",
      host: { class: "block min-w-0 max-w-112 overflow-hidden" },
      template: `
        <header
            class="bg-base-200 m-2 flex w-[calc(100%-1rem)] min-w-0 items-center justify-between overflow-hidden rounded-sm p-2"
        >
            <h2 class="min-w-0 flex-1 truncate px-2 text-xl font-medium">
                {{
                    (is_rename
                        ? 'SIGNAGE_MANAGER.RENAME_MEDIA_TAG'
                        : 'SIGNAGE_MANAGER.REMOVE_MEDIA_TAG'
                    ) | translate
                }}
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
            @if (is_rename) {
                <label for="media-tag-name">{{
                    'SIGNAGE_MANAGER.TAG_NAME' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="media-tag-name"
                        [formField]="tag_form.new_tag"
                    />
                </mat-form-field>
            } @else {
                <p>
                    {{
                        'SIGNAGE_MANAGER.REMOVE_MEDIA_TAG_DESCRIPTION'
                            | translate
                                : { tag: data.tag, count: data.count }
                                : data.count
                    }}
                </p>
                @if (data.can_delete_media) {
                    <mat-checkbox
                        class="mt-4"
                        [formField]="tag_form.remove_media"
                    >
                        {{ 'SIGNAGE_MANAGER.DELETE_TAGGED_MEDIA' | translate }}
                    </mat-checkbox>
                    <p class="text-base-content/70 mt-1 text-sm">
                        {{
                            'SIGNAGE_MANAGER.DELETE_TAGGED_MEDIA_HINT'
                                | translate
                        }}
                    </p>
                }
            }
        </main>
        <footer class="border-base-300 flex justify-end gap-2 border-t p-2">
            <button
                btn
                type="button"
                matRipple
                class="inverse min-w-32"
                mat-dialog-close
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                type="button"
                matRipple
                class="min-w-32"
                [class.error]="!is_rename"
                [disabled]="rename_disabled()"
                (click)="confirm()"
            >
                {{
                    (is_rename
                        ? 'SIGNAGE_MANAGER.RENAME_MEDIA_TAG'
                        : 'COMMON.REMOVE'
                    ) | translate
                }}
            </button>
        </footer>
    `,
      imports: [
        FormField,
        IconComponent,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaTagModalComponent, { className: "MediaTagModalComponent", filePath: "apps/signage-manager/src/app/shared/media-tag-modal.component.ts", lineNumber: 129 });
})();
export {
  MediaTagModalComponent
};
//# debugId=887de08d-5b83-5952-9ece-073550a0e1cb
//# sourceMappingURL=media-tag-modal.component-QVVOFFCQ.js.map
