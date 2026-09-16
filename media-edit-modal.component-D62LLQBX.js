import {
  SchemaFormComponent,
  objectHasKeys,
  pluginSchema,
  schemaDefaults
} from "./chunk-JWD3FLOU.js";
import {
  PluginEmbedComponent
} from "./chunk-ZXUPYBSA.js";
import {
  ItemListFieldComponent
} from "./chunk-O7VMTUVX.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-JKKZ3YBZ.js";
import {
  MediaDurationPipe
} from "./chunk-VEVPEVNK.js";
import {
  SignageSharedWithComponent
} from "./chunk-UMK6DZ5F.js";
import {
  DateFieldComponent
} from "./chunk-ET5HZIVI.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-ZEK4Y6XL.js";
import "./chunk-4ZPVAEUW.js";
import "./chunk-HSYNQBVJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-6EWG3HJY.js";
import "./chunk-XVHEOONU.js";
import {
  AuthenticatedImageDirective
} from "./chunk-OWAUM6UI.js";
import {
  getVideoContainer,
  isSupportedImageFile
} from "./chunk-OZEEJTZM.js";
import "./chunk-GE4MR7XX.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5PUHOZFV.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  form,
  required,
  submit
} from "./chunk-CIOF3O5C.js";
import "./chunk-VOXI3UVZ.js";
import {
  playlistMediaThumbnailUrl
} from "./chunk-IROTSDQV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-VATSXXH3.js";
import {
  TranslatePipe
} from "./chunk-2MCN5NQW.js";
import "./chunk-BLIVD4QK.js";
import "./chunk-ZREI4RDV.js";
import "./chunk-K5RUP4DL.js";
import {
  HotkeysService,
  UPLOAD_PERMISSIONS_MODAL,
  getUnixTime
} from "./chunk-PJV4BLFG.js";
import "./chunk-6VI5IEKG.js";
import {
  Component,
  Cs,
  DefaultValueAccessor,
  DestroyRef,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatOption,
  MatRipple,
  MatRippleModule,
  NO_ERRORS_SCHEMA,
  NgControlStatus,
  NgModel,
  SafePipe,
  ViewChild,
  computed,
  effect,
  endOfDay,
  forwardRef,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  startOfDay,
  viewChild,
  ws,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-JABNH3I5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/upload-permissions-modal.component.ts
var _c0 = (a0, a1, a2) => ({ file: a0, is_public: a1, permissions: a2 });
function UploadPermissionsModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label");
    \u0275\u0275text(2, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 11)(4, "mat-select", 12);
    \u0275\u0275listener("ngModelChange", function UploadPermissionsModalComponent_Conditional_12_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.permissions.set($event));
    });
    \u0275\u0275elementStart(5, "mat-option", 13);
    \u0275\u0275text(6, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 14);
    \u0275\u0275text(8, "Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 15);
    \u0275\u0275text(10, "Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.permissions());
    \u0275\u0275control();
  }
}
var UploadPermissionsModalComponent = class _UploadPermissionsModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.file = this._data.file;
    this.is_public = signal(
      !!this._data.is_public,
      ...ngDevMode ? [{ debugName: "is_public" }] : (
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
    this.file = this._data.file;
  }
  close() {
    this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function UploadPermissionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadPermissionsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadPermissionsModalComponent, selectors: [["upload-permissions-modal"]], decls: 18, vars: 7, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "min-w-[20rem]", "space-y-2", "px-4", "py-2"], [1, "flex", "flex-col"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "disabled", "true", "placeholder", "File Name", 3, "ngModel"], [1, "flex", "flex-col", "space-y-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], ["appearance", "outline"], [3, "ngModelChange", "ngModel"], ["value", "none"], ["value", "support"], ["value", "admin"]], template: function UploadPermissionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Upload File");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2)(4, "icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "main", 3)(7, "div", 4)(8, "label");
        \u0275\u0275text(9, "File Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 5);
        \u0275\u0275element(11, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(12, UploadPermissionsModalComponent_Conditional_12_Template, 11, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 8)(14, "button", 9);
        \u0275\u0275text(15, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275text(17, " Upload ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngModel", ctx.file.name);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.is_public() ? 12 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("mat-dialog-close", \u0275\u0275pureFunction3(3, _c0, ctx.file, ctx.is_public(), ctx.permissions()));
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatSelectModule,
      MatSelect,
      MatOption,
      IconComponent,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadPermissionsModalComponent, [{
    type: Component,
    args: [{ selector: "upload-permissions-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">Upload File</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[20rem] space-y-2 px-4 py-2">
            <div class="flex flex-col">
                <label>File Name</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <input
                        matInput
                        [ngModel]="file.name"
                        disabled="true"
                        placeholder="File Name"
                    />
                </mat-form-field>
            </div>
            @if (!is_public()) {
                <div class="flex flex-col space-y-2">
                    <label>Permissions</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [ngModel]="permissions()"
                            (ngModelChange)="permissions.set($event)"
                        >
                            <mat-option value="none">None</mat-option>
                            <mat-option value="support">Support</mat-option>
                            <mat-option value="admin">Admin</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            <!-- <div>
                <settings-toggle [(ngModel)]="is_public"
                    >Public</settings-toggle
                >
            </div> -->
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                Cancel
            </button>
            <button
                btn
                matRipple
                class="w-32"
                [mat-dialog-close]="{
                    file,
                    is_public: is_public(),
                    permissions: permissions(),
                }"
            >
                Upload
            </button>
        </footer>
    `, schemas: [NO_ERRORS_SCHEMA], imports: [
      MatDialogModule,
      MatFormFieldModule,
      FormsModule,
      MatSelectModule,
      IconComponent,
      MatInputModule,
      MatRippleModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadPermissionsModalComponent, { className: "UploadPermissionsModalComponent", filePath: "libs/components/src/lib/upload-permissions-modal.component.ts", lineNumber: 91 });
})();

// apps/signage-manager/src/app/shared/media-edit-modal.component.ts
function MediaEditModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.LOADING_PLUGIN_PREVIEW"), " ");
  }
}
function MediaEditModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "plugin-embed", 36);
    \u0275\u0275twoWayListener("schemaChange", function MediaEditModalComponent_Conditional_8_Template_plugin_embed_schemaChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.plugin_embed_schema, $event) || (ctx_r1.plugin_embed_schema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plugin", ctx_r1.plugin())("config", ctx_r1.plugin_preview_config())("auto_play", true);
    \u0275\u0275twoWayProperty("schema", ctx_r1.plugin_embed_schema);
  }
}
function MediaEditModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "safe");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.MEDIA_PREVIEW"))("src", \u0275\u0275pipeBind2(2, 4, ctx_r1.preview_url(), "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
function MediaEditModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r1.thumbnail || ctx_r1.url)("alt", ctx_r1.model().name || \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.MEDIA_PREVIEW"));
  }
}
function MediaEditModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 10);
    \u0275\u0275element(4, "input", 38);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(6, "mat-error");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.URL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.media_uri);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.WEBPAGE_URL_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "SIGNAGE_MANAGER.URL_REQUIRED"));
  }
}
function MediaEditModalComponent_Conditional_24_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.custom_thumbnail(), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.THUMBNAIL"));
  }
}
function MediaEditModalComponent_Conditional_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.thumbnail)("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.THUMBNAIL"));
  }
}
function MediaEditModalComponent_Conditional_24_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.THUMBNAIL_NONE"), " ");
  }
}
function MediaEditModalComponent_Conditional_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function MediaEditModalComponent_Conditional_24_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.custom_thumbnail.set(""));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CLEAR"), " ");
  }
}
function MediaEditModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "div", 41);
    \u0275\u0275conditionalCreate(5, MediaEditModalComponent_Conditional_24_Conditional_5_Template, 2, 4, "img", 42)(6, MediaEditModalComponent_Conditional_24_Conditional_6_Template, 2, 4, "img", 43)(7, MediaEditModalComponent_Conditional_24_Conditional_7_Template, 3, 3, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 45);
    \u0275\u0275listener("click", function MediaEditModalComponent_Conditional_24_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const thumbnail_input_r4 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(thumbnail_input_r4.click());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, MediaEditModalComponent_Conditional_24_Conditional_11_Template, 3, 3, "button", 46);
    \u0275\u0275elementStart(12, "input", 47, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("change", function MediaEditModalComponent_Conditional_24_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setThumbnail($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.THUMBNAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.custom_thumbnail() ? 5 : ctx_r1.item.thumbnail_id ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.thumbnail_loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, ctx_r1.thumbnail_loading() ? "SIGNAGE_MANAGER.THUMBNAIL_LOADING" : "SIGNAGE_MANAGER.THUMBNAIL_CHOOSE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.custom_thumbnail() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 10, "SIGNAGE_MANAGER.THUMBNAIL_CHOOSE"));
  }
}
function MediaEditModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "label", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-slider", 51);
    \u0275\u0275element(8, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "FORM.TIME_START"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, ctx_r1.model().start_time / 1e3, true), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("max", (ctx_r1.item.video_length || 3e5) - 1e3);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.start_time);
    \u0275\u0275control();
  }
}
function MediaEditModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "mediaDuration");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.model().play_time / 1e3, true), " ");
  }
}
function MediaEditModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.DEFAULT"), "(", \u0275\u0275pipeBind1(3, 4, ctx_r1.item.video_length ? ctx_r1.item.video_length / 1e3 : 5), ") ");
  }
}
function MediaEditModalComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "mat-spinner", 52);
    \u0275\u0275elementStart(2, "p", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.LOADING_PLUGIN_DETAILS"), " ");
  }
}
function MediaEditModalComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275element(4, "schema-form", 55);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.PLUGIN_PARAMETERS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("schema", ctx_r1.active_plugin_schema())("formField", ctx_r1.form.plugin_params);
    \u0275\u0275control();
  }
}
function mediaSaveErrorMessage(error) {
  if (error === void 0 || error === null) {
    return i18n("SIGNAGE_MANAGER.SVC_MEDIA_UPLOAD_CANCELLED");
  }
  if (error instanceof Error && error.message)
    return error.message;
  if (typeof error === "string")
    return error;
  if (typeof error === "number" || typeof error === "boolean") {
    return `${error}`;
  }
  if (typeof error === "object") {
    const details = error;
    const value = details.error || details.message || details.statusText || details.name;
    if (value)
      return mediaSaveErrorMessage(value);
  }
  return i18n("SIGNAGE_MANAGER.SVC_MEDIA_UPLOAD_FAILED");
}
var MediaEditModalComponent = class _MediaEditModalComponent {
  get media_type() {
    if (!this.file)
      return this.item.media_type;
    return (getVideoContainer(this.file) ? "video" : isSupportedImageFile(this.file) ? "image" : "") || this.item.media_type;
  }
  /**
   * Webpages and plugins have no file to capture a frame from, and a cross
   * origin page cannot be rendered to a canvas, so their thumbnail has to be
   * supplied by hand.
   */
  get can_set_thumbnail() {
    return !!this._data.generateThumbnail && (this.media_type === "webpage" || this.media_type === "plugin");
  }
  get url() {
    if (this.media_type === "webpage") {
      return this.model().media_uri || this.item.media_uri;
    }
    if (this.item.id)
      return this.item.media_url;
    if (this.item.media_uri)
      return this.item.media_uri;
    if (this._file_url)
      return this._file_url;
    this._file_url = URL.createObjectURL(this.file);
    return this._file_url;
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item = this._data.media;
    this.tag_options = this._data.tag_options || [];
    this.group_id = this._data.group_id || "";
    this.file = this._data.file;
    this.plugin = signal(
      this._data.plugin,
      ...ngDevMode ? [{ debugName: "plugin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_loading = signal(
      this.media_type === "plugin" && !!this._data.loadPlugin && !this._data.plugin,
      ...ngDevMode ? [{ debugName: "plugin_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.thumbnail = this._data.file_thumbnail || playlistMediaThumbnailUrl(this._data.media);
    this.plugin_embed_schema = signal(
      null,
      ...ngDevMode ? [{ debugName: "plugin_embed_schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_plugin_schema = computed(
      () => this._resolvePluginSchema(),
      ...ngDevMode ? [{ debugName: "active_plugin_schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preview_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "preview_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_thumbnail = signal(
      "",
      ...ngDevMode ? [{ debugName: "custom_thumbnail" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.thumbnail_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "thumbnail_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._plugin_embed = viewChild(
      PluginEmbedComponent,
      ...ngDevMode ? [{ debugName: "_plugin_embed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        name: this._data.file?.name || this._data.media.name || "",
        media_uri: this._data.media.media_uri || "",
        description: this._data.media.description || "",
        animation: this._data.media.animation ?? Cs.Default,
        start_time: this._data.media.start_time || 0,
        play_time: this._data.media.play_time || 0,
        tags: this._data.media.tags || [],
        plugin_params: this._data.media.plugin_params || {},
        valid_from: this._data.media.valid_from ? this._data.media.valid_from * 1e3 : null,
        valid_until: this._data.media.valid_until ? this._data.media.valid_until * 1e3 : null
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (path) => {
      required(path.name);
      required(path.media_uri, {
        when: () => this.media_type === "webpage"
      });
    });
    this.preview = () => this._data.preview({
      media_uri: this.url,
      media_type: this.media_type,
      name: this.model().name,
      plugin_id: this.item.plugin_id || this.plugin()?.id,
      plugin_params: this.plugin_config()
    });
    this.plugin_config = computed(
      () => __spreadValues(__spreadValues(__spreadValues({}, this.plugin()?.defaults || {}), schemaDefaults(this.active_plugin_schema())), this.model().plugin_params || {}),
      ...ngDevMode ? [{ debugName: "plugin_config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_preview_config = computed(
      () => ({
        instance_id: this.item.id || "signage-manager-preview",
        config: this.plugin_config(),
        timing: { scheduled_duration_ms: 15e3 }
      }),
      ...ngDevMode ? [{ debugName: "plugin_preview_config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const save_hotkey = inject(HotkeysService).listen(["KeyS"], () => this.saveMedia());
    inject(DestroyRef).onDestroy(() => save_hotkey?.unsubscribe());
    if (this.media_type === "webpage") {
      this.preview_url.set(this.item.media_uri || this.item.media_url);
      effect((onCleanup) => {
        const url = this.model().media_uri;
        clearTimeout(this._preview_url_timeout);
        this._preview_url_timeout = setTimeout(() => this.preview_url.set(url || ""), 1500);
        onCleanup(() => clearTimeout(this._preview_url_timeout));
      });
    }
    if (this._data.file_metadata) {
      this.item.video_length = Math.floor(this._data.file_metadata.duration * 1e3);
    }
    if (this.plugin_loading()) {
      this._loadPluginDetails();
    }
    effect(() => {
      const defaults = __spreadValues(__spreadValues({}, this.plugin()?.defaults || {}), schemaDefaults(this.active_plugin_schema()));
      if (!objectHasKeys(defaults))
        return;
      this.model.update((model) => __spreadProps(__spreadValues({}, model), {
        plugin_params: __spreadValues(__spreadValues({}, defaults), model.plugin_params || {})
      }));
    });
  }
  _resolvePluginSchema() {
    return pluginSchema(this.plugin_embed_schema()) || pluginSchema(this.plugin()?.params);
  }
  async _loadPluginDetails() {
    const plugin = await this._data.loadPlugin?.().catch(() => void 0);
    if (plugin)
      this.plugin.set(plugin);
    this.plugin_loading.set(false);
  }
  ngOnDestroy() {
    if (this._file_url)
      URL.revokeObjectURL(this._file_url);
    clearTimeout(this._preview_url_timeout);
  }
  async setThumbnail(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    this.thumbnail_loading.set(true);
    const image = await this._data.generateThumbnail(file).catch(() => "").finally(() => this.thumbnail_loading.set(false));
    if (image)
      this.custom_thumbnail.set(image);
  }
  /**
   * Ask the embedded plugin to render its own thumbnail. Captured from the
   * live preview so it reflects the config the user just set. Plugins that
   * predate the capability return nothing and are saved exactly as before.
   */
  async _capturePluginThumbnail() {
    if (this.media_type !== "plugin")
      return "";
    const embed = this._plugin_embed();
    if (!embed?.canProvideThumbnail())
      return "";
    return embed.requestThumbnail(1280, 720).catch(() => "");
  }
  async saveMedia() {
    await submit(this.form, async () => {
      if (this.schema_form && !this.schema_form.isValid())
        return;
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      const form_value = this.model();
      const new_media = __spreadValues(__spreadValues({}, this.item), form_value);
      if (this.plugin()) {
        new_media.plugin_id = this.item.plugin_id || this.plugin().id;
      }
      if (this.media_type === "plugin") {
        const plugin_config = this.plugin_config();
        if (objectHasKeys(plugin_config)) {
          new_media.plugin_params = plugin_config;
        } else {
          delete new_media.plugin_params;
        }
      } else if (form_value.plugin_params) {
        new_media.plugin_params = form_value.plugin_params;
      } else {
        delete new_media.plugin_params;
      }
      if (form_value.valid_from) {
        new_media.valid_from = getUnixTime(startOfDay(form_value.valid_from));
      } else {
        new_media.valid_from = null;
      }
      if (form_value.valid_until) {
        new_media.valid_until = getUnixTime(endOfDay(form_value.valid_until));
      } else {
        new_media.valid_until = null;
      }
      try {
        if (this.item.id) {
          if (this.custom_thumbnail()) {
            new_media.thumbnail_image = this.custom_thumbnail();
          }
          await this._data.onEdit(this.item.id, new_media);
        } else {
          const thumbnail = this.custom_thumbnail() || await this._capturePluginThumbnail();
          await this._data.onAdd(this.file, new ws(new_media), this._data.file_metadata, thumbnail);
        }
      } catch (error) {
        notifyError(i18n("SIGNAGE_MANAGER.MEDIA_SAVE_ERROR", {
          error: mediaSaveErrorMessage(error)
        }));
        return;
      } finally {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
      }
      this._dialog_ref.close();
      notifySuccess(i18n("SIGNAGE_MANAGER.MEDIA_SAVE_SUCCESS"));
    });
  }
  static {
    this.\u0275fac = function MediaEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaEditModalComponent, selectors: [["media-edit-modal"]], viewQuery: function MediaEditModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._plugin_embed, PluginEmbedComponent, 5);
        \u0275\u0275viewQuery(SchemaFormComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.schema_form = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ])], decls: 89, vars: 104, consts: [["thumbnail_input", ""], ["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["type", "button", "matRipple", "", 1, "bg-base-300", "border-base-300", "relative", "mx-auto", "mb-4", "h-48", "w-full", "overflow-hidden", "rounded-xl", "border", "shadow", 3, "click"], [1, "text-base-content/70", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "gap-3"], [1, "h-full", "w-full", 3, "plugin", "config", "auto_play", "schema"], [1, "h-screen", "w-full", "object-contain", "object-center", 3, "title", "src"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source", "alt"], [1, "bg-info", "text-info-content", "absolute", "top-2", "left-2", "rounded-sm", "px-2", "py-1", "text-xs", "capitalize", "shadow"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "formField", "placeholder"], [1, "flex", "items-center", "gap-4"], ["for", "play-time", 1, "m-0", "w-auto", "min-w-0"], [1, "font-mono", "text-xs"], [1, "text-base-content/70"], ["step", "100", 3, "min", "max"], ["matSliderThumb", "", 3, "formField"], ["for", "animation"], [3, "formField", "placeholder"], [3, "value"], ["for", "description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 1, "min-h-32", 3, "placeholder", "formField"], ["for", "tags"], ["name", "tags", 3, "formField", "options", "placeholder"], [1, "bg-base-200/60", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "p-4"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "valid-from"], ["name", "valid-from", 3, "formField", "clear"], ["for", "valid-until"], ["name", "valid-until", 3, "from", "formField", "clear"], ["type", "media", 3, "item_id", "group_id"], ["diameter", "32"], [1, "text-sm"], [1, "h-full", "w-full", 3, "schemaChange", "plugin", "config", "auto_play", "schema"], ["for", "media-uri"], ["matInput", "", "type", "url", "placeholder", "https://example.com", 3, "formField"], ["for", "thumbnail"], [1, "mb-4", "flex", "items-center", "gap-4"], [1, "bg-base-300", "border-base-300", "h-20", "w-32", "shrink-0", "overflow-hidden", "rounded-lg", "border"], [1, "h-full", "w-full", "object-contain", 3, "src", "alt"], ["auth", "", 1, "h-full", "w-full", "object-contain", 3, "source", "alt"], [1, "text-base-content/50", "flex", "h-full", "w-full", "items-center", "justify-center", "px-2", "text-center", "text-xs"], ["btn", "", "type", "button", 1, "inverse", "bg-base-100", 3, "click", "disabled"], ["btn", "", "type", "button", 1, "clear"], ["type", "file", "accept", "image/*", 1, "sr-only", 3, "change"], ["btn", "", "type", "button", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-4"], ["for", "start-time", 1, "m-0", "w-auto", "min-w-0"], ["min", "0", "step", "100", 3, "max"], ["diameter", "24"], [1, "m-0", "text-sm", "opacity-70"], [1, "bg-base-200/60", "mb-2", "rounded-lg", "p-4"], [3, "schema", "formField"]], template: function MediaEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function MediaEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveMedia();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 2)(5, "button", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("click", function MediaEditModalComponent_Template_button_click_5_listener() {
          return ctx.preview();
        });
        \u0275\u0275conditionalCreate(7, MediaEditModalComponent_Conditional_7_Template, 5, 3, "div", 4)(8, MediaEditModalComponent_Conditional_8_Template, 1, 4, "plugin-embed", 5)(9, MediaEditModalComponent_Conditional_9_Template, 3, 7, "iframe", 6)(10, MediaEditModalComponent_Conditional_10_Template, 2, 4, "img", 7);
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "label", 9);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-form-field", 10);
        \u0275\u0275element(17, "input", 11);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(20, "mat-error");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, MediaEditModalComponent_Conditional_23_Template, 9, 10);
        \u0275\u0275conditionalCreate(24, MediaEditModalComponent_Conditional_24_Template, 15, 12);
        \u0275\u0275conditionalCreate(25, MediaEditModalComponent_Conditional_25_Template, 9, 9);
        \u0275\u0275elementStart(26, "div", 12)(27, "label", 13);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 14);
        \u0275\u0275conditionalCreate(31, MediaEditModalComponent_Conditional_31_Template, 2, 4)(32, MediaEditModalComponent_Conditional_32_Template, 4, 6, "span", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "mat-slider", 16);
        \u0275\u0275element(34, "input", 17);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "label", 18);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-form-field", 10)(39, "mat-select", 19);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "mat-option", 20);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-option", 20);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-option", 20);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "mat-option", 20);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-option", 20);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-option", 20);
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "mat-option", 20);
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "label", 21);
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "mat-form-field", 22);
        \u0275\u0275element(67, "textarea", 23);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "label", 24);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(73, "item-list-field", 25);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(75, MediaEditModalComponent_Conditional_75_Template, 5, 3, "div", 26)(76, MediaEditModalComponent_Conditional_76_Template, 5, 5);
        \u0275\u0275elementStart(77, "div", 27)(78, "div", 28)(79, "label", 29);
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(82, "a-date-field", 30);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 28)(84, "label", 31);
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(87, "a-date-field", 32);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(88, "signage-shared-with", 33);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 54, ctx.item.id ? "SIGNAGE_MANAGER.MEDIA_EDIT" : "SIGNAGE_MANAGER.MEDIA_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 56, "SIGNAGE_MANAGER.MEDIA_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 58, "SIGNAGE_MANAGER.PREVIEW_MEDIA_ARIA"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "plugin" && ctx.plugin_loading() ? 7 : ctx.media_type === "plugin" && ctx.plugin() ? 8 : ctx.media_type === "webpage" ? 9 : 10);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.media_type, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 60, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.name)("placeholder", \u0275\u0275pipeBind1(18, 62, "FORM.NAME"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 64, "SIGNAGE_MANAGER.MEDIA_NAME_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 66, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "webpage" ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_set_thumbnail ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.media_type === "video" ? 25 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 68, "SIGNAGE_MANAGER.MEDIA_PLAY_TIME"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().play_time ? 31 : 32);
        \u0275\u0275advance(2);
        \u0275\u0275property("min", ctx.model().start_time)("max", ctx.item.video_length || 3e5);
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.play_time);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 70, "SIGNAGE_MANAGER.ANIMATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.animation)("placeholder", \u0275\u0275pipeBind1(40, 72, "COMMON.DEFAULT"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(41, 74, "SIGNAGE_MANAGER.ANIMATION"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 76, "COMMON.DEFAULT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 78, "SIGNAGE_MANAGER.ANIM_CUT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 2);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 80, "SIGNAGE_MANAGER.ANIM_CROSS_FADE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 3);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 82, "SIGNAGE_MANAGER.ANIM_SLIDE_TOP"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 4);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 84, "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 5);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 86, "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 6);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 88, "SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 90, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(68, 92, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(69, 94, "SIGNAGE_MANAGER.MEDIA_DESCRIPTION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 96, "COMMON.TAGS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.tags)("options", ctx.tag_options)("placeholder", \u0275\u0275pipeBind1(74, 98, "COMMON.TAGS"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "plugin" && ctx.plugin_loading() ? 75 : ctx.active_plugin_schema() ? 76 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 100, "SIGNAGE_MANAGER.VALID_FROM"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.valid_from)("clear", true);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 102, "FORM.EXPIRES_AT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.model().valid_from)("formField", ctx.form.valid_until)("clear", true);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("item_id", ctx.item.id)("group_id", ctx.group_id);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      FormField,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      AuthenticatedImageDirective,
      SchemaFormComponent,
      PluginEmbedComponent,
      ItemListFieldComponent,
      SignageSharedWithComponent,
      TranslatePipe,
      SafePipe,
      MediaDurationPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaEditModalComponent, [{
    type: Component,
    args: [{ selector: "media-edit-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (item.id
                    ? 'SIGNAGE_MANAGER.MEDIA_EDIT'
                    : 'SIGNAGE_MANAGER.MEDIA_NEW'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveMedia()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.MEDIA_SAVING' | translate) : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <button
                        type="button"
                        matRipple
                        class="bg-base-300 border-base-300 relative mx-auto mb-4 h-48 w-full overflow-hidden rounded-xl border shadow"
                        (click)="preview()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PREVIEW_MEDIA_ARIA' | translate
                        "
                    >
                        @if (media_type === 'plugin' && plugin_loading()) {
                            <div
                                class="text-base-content/70 flex h-full w-full flex-col items-center justify-center gap-3"
                            >
                                <mat-spinner diameter="32" />
                                <p class="text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.LOADING_PLUGIN_PREVIEW'
                                            | translate
                                    }}
                                </p>
                            </div>
                        } @else if (media_type === 'plugin' && plugin()) {
                            <plugin-embed
                                class="h-full w-full"
                                [plugin]="plugin()"
                                [config]="plugin_preview_config()"
                                [auto_play]="true"
                                [(schema)]="plugin_embed_schema"
                            ></plugin-embed>
                        } @else if (media_type === 'webpage') {
                            <iframe
                                [title]="
                                    'SIGNAGE_MANAGER.MEDIA_PREVIEW' | translate
                                "
                                class="h-screen w-full object-contain object-center"
                                [src]="preview_url() | safe: 'resource'"
                            ></iframe>
                        } @else {
                            <img
                                class="h-full w-full object-contain object-center"
                                auth
                                [source]="thumbnail || url"
                                [alt]="
                                    model().name ||
                                    ('SIGNAGE_MANAGER.MEDIA_PREVIEW'
                                        | translate)
                                "
                            />
                        }
                        <div
                            class="bg-info text-info-content absolute top-2 left-2 rounded-sm px-2 py-1 text-xs capitalize shadow"
                        >
                            {{ media_type }}
                        </div>
                    </button>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.name"
                            [placeholder]="'FORM.NAME' | translate"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.MEDIA_NAME_ARIA' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    @if (media_type === 'webpage') {
                        <label for="media-uri">{{
                            'COMMON.URL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="url"
                                [formField]="form.media_uri"
                                placeholder="https://example.com"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.WEBPAGE_URL_ARIA'
                                        | translate
                                "
                            />
                            <mat-error>{{
                                'SIGNAGE_MANAGER.URL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    }
                    @if (can_set_thumbnail) {
                        <label for="thumbnail">{{
                            'SIGNAGE_MANAGER.THUMBNAIL' | translate
                        }}</label>
                        <div class="mb-4 flex items-center gap-4">
                            <div
                                class="bg-base-300 border-base-300 h-20 w-32 shrink-0 overflow-hidden rounded-lg border"
                            >
                                @if (custom_thumbnail()) {
                                    <img
                                        class="h-full w-full object-contain"
                                        [src]="custom_thumbnail()"
                                        [alt]="
                                            'SIGNAGE_MANAGER.THUMBNAIL'
                                                | translate
                                        "
                                    />
                                } @else if (item.thumbnail_id) {
                                    <img
                                        class="h-full w-full object-contain"
                                        auth
                                        [source]="thumbnail"
                                        [alt]="
                                            'SIGNAGE_MANAGER.THUMBNAIL'
                                                | translate
                                        "
                                    />
                                } @else {
                                    <div
                                        class="text-base-content/50 flex h-full w-full items-center justify-center px-2 text-center text-xs"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.THUMBNAIL_NONE'
                                                | translate
                                        }}
                                    </div>
                                }
                            </div>
                            <button
                                btn
                                type="button"
                                class="inverse bg-base-100"
                                [disabled]="thumbnail_loading()"
                                (click)="thumbnail_input.click()"
                            >
                                {{
                                    (thumbnail_loading()
                                        ? 'SIGNAGE_MANAGER.THUMBNAIL_LOADING'
                                        : 'SIGNAGE_MANAGER.THUMBNAIL_CHOOSE'
                                    ) | translate
                                }}
                            </button>
                            @if (custom_thumbnail()) {
                                <button
                                    btn
                                    type="button"
                                    class="clear"
                                    (click)="custom_thumbnail.set('')"
                                >
                                    {{ 'COMMON.CLEAR' | translate }}
                                </button>
                            }
                            <input
                                #thumbnail_input
                                type="file"
                                class="sr-only"
                                accept="image/*"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.THUMBNAIL_CHOOSE'
                                        | translate
                                "
                                (change)="setThumbnail($event)"
                            />
                        </div>
                    }
                    @if (media_type === 'video') {
                        <div class="flex items-center space-x-4">
                            <label
                                for="start-time"
                                class="m-0 w-auto min-w-0"
                                >{{ 'FORM.TIME_START' | translate }}</label
                            >
                            <div class="font-mono text-xs">
                                {{
                                    model().start_time / 1000
                                        | mediaDuration: true
                                }}
                            </div>
                        </div>
                        <mat-slider
                            min="0"
                            [max]="(item.video_length || 300000) - 1000"
                            step="100"
                        >
                            <input
                                matSliderThumb
                                [formField]="form.start_time"
                            />
                        </mat-slider>
                    }
                    <div class="flex items-center gap-4">
                        <label for="play-time" class="m-0 w-auto min-w-0">
                            {{
                                'SIGNAGE_MANAGER.MEDIA_PLAY_TIME' | translate
                            }}</label
                        >
                        <div class="font-mono text-xs">
                            @if (model().play_time) {
                                {{
                                    model().play_time / 1000
                                        | mediaDuration: true
                                }}
                            } @else {
                                <span class="text-base-content/70">
                                    {{ 'COMMON.DEFAULT' | translate }}({{
                                        (item.video_length
                                            ? item.video_length / 1000
                                            : 5
                                        ) | mediaDuration
                                    }})
                                </span>
                            }
                        </div>
                    </div>
                    <mat-slider
                        [min]="model().start_time"
                        [max]="item.video_length || 300000"
                        step="100"
                    >
                        <input matSliderThumb [formField]="form.play_time" />
                    </mat-slider>
                    <label for="animation">{{
                        'SIGNAGE_MANAGER.ANIMATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.animation"
                            [placeholder]="'COMMON.DEFAULT' | translate"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.ANIMATION' | translate
                            "
                        >
                            <mat-option [value]="0">{{
                                'COMMON.DEFAULT' | translate
                            }}</mat-option>
                            <mat-option [value]="1">{{
                                'SIGNAGE_MANAGER.ANIM_CUT' | translate
                            }}</mat-option>
                            <mat-option [value]="2">{{
                                'SIGNAGE_MANAGER.ANIM_CROSS_FADE' | translate
                            }}</mat-option>
                            <mat-option [value]="3">{{
                                'SIGNAGE_MANAGER.ANIM_SLIDE_TOP' | translate
                            }}</mat-option>
                            <mat-option [value]="4">{{
                                'SIGNAGE_MANAGER.ANIM_SLIDE_LEFT' | translate
                            }}</mat-option>
                            <mat-option [value]="5">{{
                                'SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT' | translate
                            }}</mat-option>
                            <mat-option [value]="6">{{
                                'SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM' | translate
                            }}</mat-option>
                        </mat-select>
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
                                'SIGNAGE_MANAGER.MEDIA_DESCRIPTION_ARIA'
                                    | translate
                            "
                        ></textarea>
                    </mat-form-field>
                    <label for="tags">{{ 'COMMON.TAGS' | translate }}</label>
                    <item-list-field
                        name="tags"
                        [formField]="form.tags"
                        [options]="tag_options"
                        [placeholder]="'COMMON.TAGS' | translate"
                    ></item-list-field>
                    @if (media_type === 'plugin' && plugin_loading()) {
                        <div
                            class="bg-base-200/60 mb-2 flex items-center gap-3 rounded-lg p-4"
                        >
                            <mat-spinner diameter="24" />
                            <p class="m-0 text-sm opacity-70">
                                {{
                                    'SIGNAGE_MANAGER.LOADING_PLUGIN_DETAILS'
                                        | translate
                                }}
                            </p>
                        </div>
                    } @else if (active_plugin_schema()) {
                        <label>{{
                            'SIGNAGE_MANAGER.PLUGIN_PARAMETERS' | translate
                        }}</label>
                        <div class="bg-base-200/60 mb-2 rounded-lg p-4">
                            <schema-form
                                [schema]="active_plugin_schema()"
                                [formField]="form.plugin_params"
                            ></schema-form>
                        </div>
                    }
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'SIGNAGE_MANAGER.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                name="valid-from"
                                [formField]="form.valid_from"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="valid-until">{{
                                'FORM.EXPIRES_AT' | translate
                            }}</label>
                            <a-date-field
                                name="valid-until"
                                [from]="model().valid_from"
                                [formField]="form.valid_until"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                    </div>
                    <signage-shared-with
                        type="media"
                        [item_id]="item.id"
                        [group_id]="group_id"
                    ></signage-shared-with>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, providers: [
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ], imports: [
      FullscreenModalShellComponent,
      FormField,
      DateFieldComponent,
      TranslatePipe,
      SafePipe,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSliderModule,
      AuthenticatedImageDirective,
      MediaDurationPipe,
      SchemaFormComponent,
      PluginEmbedComponent,
      ItemListFieldComponent,
      SignageSharedWithComponent
    ] }]
  }], () => [], { schema_form: [{
    type: ViewChild,
    args: [SchemaFormComponent]
  }], _plugin_embed: [{ type: ViewChild, args: [forwardRef(() => PluginEmbedComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaEditModalComponent, { className: "MediaEditModalComponent", filePath: "apps/signage-manager/src/app/shared/media-edit-modal.component.ts", lineNumber: 492 });
})();
export {
  MediaEditModalComponent
};
//# debugId=97bed396-716b-5555-bf72-fe41f9f0f0ad
//# sourceMappingURL=media-edit-modal.component-D62LLQBX.js.map
