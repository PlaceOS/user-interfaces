import {
  MatSelect,
  MatSelectModule
} from "./chunk-5KDACSEJ.js";
import "./chunk-2KR4UBYG.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-VZ73B46P.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4RZU6Z3I.js";
import {
  TranslatePipe
} from "./chunk-PHOFLDSC.js";
import {
  hr
} from "./chunk-VK7CM6JR.js";
import "./chunk-JUNGKQZF.js";
import {
  Component,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  computed,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/bulk-media-upload-modal.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0, a1) => ({ current: a0, total: a1 });
var _forTrack0 = ($index, $item) => $item.id;
function BulkMediaUploadModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.BULK_UPLOAD_CLOSE_ARIA"));
  }
}
function BulkMediaUploadModalComponent_For_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.error);
  }
}
function BulkMediaUploadModalComponent_For_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", row_r1.formatted_size, " ");
  }
}
function BulkMediaUploadModalComponent_For_23_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-spinner", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r1.progress, "% ");
  }
}
function BulkMediaUploadModalComponent_For_23_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, " check_circle ");
    \u0275\u0275elementEnd();
  }
}
function BulkMediaUploadModalComponent_For_23_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, " error ");
    \u0275\u0275elementEnd();
  }
}
function BulkMediaUploadModalComponent_For_23_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function BulkMediaUploadModalComponent_For_23_Case_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const row_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(row_r1));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.uploading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.BULK_UPLOAD_REMOVE_ARIA"));
  }
}
function BulkMediaUploadModalComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275conditionalCreate(7, BulkMediaUploadModalComponent_For_23_Conditional_7_Template, 2, 1, "span", 20)(8, BulkMediaUploadModalComponent_For_23_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, BulkMediaUploadModalComponent_For_23_Case_9_Template, 4, 1, "div", 21)(10, BulkMediaUploadModalComponent_For_23_Case_10_Template, 2, 0, "icon", 22)(11, BulkMediaUploadModalComponent_For_23_Case_11_Template, 2, 0, "icon", 23)(12, BulkMediaUploadModalComponent_For_23_Case_12_Template, 4, 4, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r1.item.media_type === "video" ? "movie" : "image", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r1.item.file.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r1.status === "error" ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = row_r1.status) === "uploading" ? 9 : tmp_13_0 === "done" ? 10 : tmp_13_0 === "error" ? 11 : 12);
  }
}
function BulkMediaUploadModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "SIGNAGE_MANAGER.BULK_UPLOAD_UPLOADING", \u0275\u0275pureFunction2(4, _c1, ctx_r2.done_count() + ctx_r2.error_count() + 1, ctx_r2.rows().length)), " ");
  }
}
function uploadErrorMessage(error) {
  if (error instanceof Error && error.message)
    return error.message;
  if (typeof error === "string" && error)
    return error;
  if (error && typeof error === "object") {
    const details = error;
    const value = details.error || details.message || details.statusText;
    if (typeof value === "string" && value)
      return value;
  }
  return i18n("SIGNAGE_MANAGER.SVC_MEDIA_UPLOAD_FAILED");
}
var BulkMediaUploadModalComponent = class _BulkMediaUploadModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.rows = signal(
      this._data.items.map((item, index) => ({
        id: index,
        item,
        formatted_size: hr(item.file.size),
        status: "pending",
        progress: 0,
        error: ""
      })),
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permissions = signal(
      "none",
      ...ngDevMode ? [{ debugName: "permissions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading = signal(
      false,
      ...ngDevMode ? [{ debugName: "uploading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.done_count = computed(
      () => this.rows().filter((_) => _.status === "done").length,
      ...ngDevMode ? [{ debugName: "done_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error_count = computed(
      () => this.rows().filter((_) => _.status === "error").length,
      ...ngDevMode ? [{ debugName: "error_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.remaining_count = computed(
      () => this.rows().filter((_) => _.status === "pending" || _.status === "error").length,
      ...ngDevMode ? [{ debugName: "remaining_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  removeRow(row) {
    this.rows.update((rows) => rows.filter((_) => _.id !== row.id));
    if (!this.rows().length)
      this._dialog_ref.close();
  }
  _patchRow(id, changes) {
    this.rows.update((rows) => rows.map((_) => _.id === id ? __spreadValues(__spreadValues({}, _), changes) : _));
  }
  async uploadAll() {
    if (this.uploading())
      return;
    this.uploading.set(true);
    this._dialog_ref.disableClose = true;
    const permissions = this.permissions();
    for (const row of this.rows()) {
      if (row.status !== "pending" && row.status !== "error")
        continue;
      this._patchRow(row.id, {
        status: "uploading",
        progress: 0,
        error: ""
      });
      try {
        await this._data.onUpload(row.item, permissions, (progress) => this._patchRow(row.id, {
          progress: Math.min(100, Math.floor(progress))
        }));
        this._patchRow(row.id, { status: "done", progress: 100 });
      } catch (error) {
        this._patchRow(row.id, {
          status: "error",
          error: uploadErrorMessage(error)
        });
      }
    }
    this._dialog_ref.disableClose = false;
    this.uploading.set(false);
    const failed = this.error_count();
    if (failed) {
      notifyError(i18n("SIGNAGE_MANAGER.BULK_UPLOAD_FAILED", { count: failed }));
      return;
    }
    notifySuccess(i18n("SIGNAGE_MANAGER.BULK_UPLOAD_SUCCESS", {
      count: this.done_count()
    }));
    this._dialog_ref.close(this.done_count());
  }
  static {
    this.\u0275fac = function BulkMediaUploadModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkMediaUploadModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BulkMediaUploadModalComponent, selectors: [["bulk-media-upload-modal"]], decls: 32, vars: 33, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-[32rem]", "max-w-full", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "max-md:h-auto", "max-md:w-auto", "max-md:flex-1"], [1, "flex", "flex-col"], ["for", "permissions"], ["appearance", "outline", 1, "no-subscript"], ["name", "permissions", 3, "ngModelChange", "ngModel", "disabled"], ["value", "none"], ["value", "support"], ["value", "admin"], [1, "border-base-300", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], [1, "text-base-content/70", "flex-1", "text-sm"], ["btn", "", "matRipple", "", "type", "button", "mat-dialog-close", "", 1, "inverse", "w-32", 3, "disabled"], ["btn", "", "matRipple", "", "type", "button", 1, "min-w-32", 3, "click", "disabled"], [1, "text-base-content/60", "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs"], [1, "text-error"], [1, "flex", "shrink-0", "items-center", "space-x-2"], [1, "text-success", "shrink-0", "text-2xl"], [1, "text-error", "shrink-0", "text-2xl"], ["icon", "", "type", "button", "matRipple", "", 1, "shrink-0", 3, "disabled"], [1, "font-mono", "text-xs"], ["diameter", "24"], ["icon", "", "type", "button", "matRipple", "", 1, "shrink-0", 3, "click", "disabled"]], template: function BulkMediaUploadModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, BulkMediaUploadModalComponent_Conditional_4_Template, 4, 3, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "main", 3)(6, "div", 4)(7, "label", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-select", 7);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function BulkMediaUploadModalComponent_Template_mat_select_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.permissions, $event) || (ctx.permissions = $event);
          return $event;
        });
        \u0275\u0275elementStart(13, "mat-option", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-option", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-option", 10);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(22, BulkMediaUploadModalComponent_For_23_Template, 13, 4, "div", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "footer", 12);
        \u0275\u0275conditionalCreate(25, BulkMediaUploadModalComponent_Conditional_25_Template, 3, 7, "div", 13);
        \u0275\u0275elementStart(26, "button", 14);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 15);
        \u0275\u0275listener("click", function BulkMediaUploadModalComponent_Template_button_click_29_listener() {
          return ctx.uploadAll();
        });
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 14, "SIGNAGE_MANAGER.BULK_UPLOAD_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.uploading() ? 4 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSIONS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.permissions);
        \u0275\u0275property("disabled", ctx.uploading());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 18, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSIONS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 20, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_NONE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 22, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_SUPPORT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 24, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_ADMIN"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.uploading() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.uploading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 26, ctx.done_count() || ctx.error_count() ? "SIGNAGE_MANAGER.BULK_UPLOAD_CLOSE" : "COMMON.CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.uploading() || !ctx.remaining_count());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 28, ctx.error_count() ? "SIGNAGE_MANAGER.BULK_UPLOAD_RETRY" : "SIGNAGE_MANAGER.BULK_UPLOAD_START", \u0275\u0275pureFunction1(31, _c0, ctx.remaining_count())), " ");
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkMediaUploadModalComponent, [{
    type: Component,
    args: [{ selector: "bulk-media-upload-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.BULK_UPLOAD_TITLE' | translate }}
            </h2>
            @if (!uploading()) {
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.BULK_UPLOAD_CLOSE_ARIA' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        <main
            class="max-h-[65vh] w-[32rem] max-w-full space-y-2 overflow-auto px-4 pt-2 pb-4 max-md:h-auto max-md:w-auto max-md:flex-1"
        >
            <div class="flex flex-col">
                <label for="permissions">
                    {{ 'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSIONS' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        name="permissions"
                        [(ngModel)]="permissions"
                        [disabled]="uploading()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSIONS'
                                | translate
                        "
                    >
                        <mat-option value="none">
                            {{
                                'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_NONE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="support">
                            {{
                                'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_SUPPORT'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="admin">
                            {{
                                'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_ADMIN'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            @for (row of rows(); track row.id) {
                <div
                    class="border-base-300 flex w-full items-center space-x-2 rounded-sm border p-2"
                >
                    <icon class="text-base-content/60 shrink-0 text-2xl">
                        {{
                            row.item.media_type === 'video' ? 'movie' : 'image'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <div class="truncate">{{ row.item.file.name }}</div>
                        <div class="text-base-content/70 truncate text-xs">
                            @if (row.status === 'error') {
                                <span class="text-error">{{ row.error }}</span>
                            } @else {
                                {{ row.formatted_size }}
                            }
                        </div>
                    </div>
                    @switch (row.status) {
                        @case ('uploading') {
                            <div class="flex shrink-0 items-center space-x-2">
                                <div class="font-mono text-xs">
                                    {{ row.progress }}%
                                </div>
                                <mat-spinner diameter="24" />
                            </div>
                        }
                        @case ('done') {
                            <icon class="text-success shrink-0 text-2xl">
                                check_circle
                            </icon>
                        }
                        @case ('error') {
                            <icon class="text-error shrink-0 text-2xl">
                                error
                            </icon>
                        }
                        @default {
                            <button
                                icon
                                type="button"
                                matRipple
                                class="shrink-0"
                                [disabled]="uploading()"
                                (click)="removeRow(row)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.BULK_UPLOAD_REMOVE_ARIA'
                                        | translate
                                "
                            >
                                <icon>delete</icon>
                            </button>
                        }
                    }
                </div>
            }
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            @if (uploading()) {
                <div class="text-base-content/70 flex-1 text-sm">
                    {{
                        'SIGNAGE_MANAGER.BULK_UPLOAD_UPLOADING'
                            | translate
                                : {
                                      current: done_count() + error_count() + 1,
                                      total: rows().length,
                                  }
                    }}
                </div>
            }
            <button
                btn
                matRipple
                type="button"
                class="inverse w-32"
                mat-dialog-close
                [disabled]="uploading()"
            >
                {{
                    (done_count() || error_count()
                        ? 'SIGNAGE_MANAGER.BULK_UPLOAD_CLOSE'
                        : 'COMMON.CANCEL'
                    ) | translate
                }}
            </button>
            <button
                btn
                matRipple
                type="button"
                class="min-w-32"
                [disabled]="uploading() || !remaining_count()"
                (click)="uploadAll()"
            >
                {{
                    (error_count()
                        ? 'SIGNAGE_MANAGER.BULK_UPLOAD_RETRY'
                        : 'SIGNAGE_MANAGER.BULK_UPLOAD_START'
                    ) | translate: { count: remaining_count() }
                }}
            </button>
        </footer>
    `, imports: [
      FormsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatSelectModule,
      IconComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkMediaUploadModalComponent, { className: "BulkMediaUploadModalComponent", filePath: "apps/signage-manager/src/app/shared/bulk-media-upload-modal.component.ts", lineNumber: 238 });
})();
export {
  BulkMediaUploadModalComponent
};
//# debugId=bee8b7f1-e0e7-5c20-9275-c1923befddaa
//# sourceMappingURL=bulk-media-upload-modal.component-CZ57G3E5.js.map
