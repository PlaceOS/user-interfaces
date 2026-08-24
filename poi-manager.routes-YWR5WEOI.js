import {
  UploadButtonComponent
} from "./chunk-LP2FNICB.js";
import {
  PrintableComponent
} from "./chunk-OMELZSTA.js";
import {
  SelectMapItemModalComponent
} from "./chunk-7TMG45ET.js";
import {
  LevelPipe
} from "./chunk-NBNWY47S.js";
import "./chunk-T52X6L2R.js";
import "./chunk-H7LCNA6S.js";
import {
  openConfirmModal
} from "./chunk-FWLLKEYM.js";
import {
  SimpleTableComponent
} from "./chunk-PMH2624V.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AuthenticatedImageDirective,
  FullscreenModalShellComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent,
  UploadPermissionsModalComponent
} from "./chunk-FSRZYXHY.js";
import {
  AsyncHandler,
  Clipboard,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormField,
  FormsModule,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  SafePipe,
  SettingsService,
  TranslatePipe,
  UPLOAD_PERMISSIONS_MODAL,
  UploadCancelledError,
  UploadsService,
  ViewChild,
  Vu,
  Xu,
  computed,
  createShortURL,
  effect,
  flatten,
  form,
  forwardRef,
  generateQRCode,
  getInvalidSignalFields,
  inject,
  notifyError,
  notifyInfo,
  notifySuccess,
  randomString,
  required,
  setClassMetadata,
  signal,
  untracked,
  updateShortURL,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-337ZWGBM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/explore/src/lib/explore-poi-modal.component.ts
var _c0 = ["media_el"];
function ExplorePointOfInterestModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, " No available details for this point of interest. ");
    \u0275\u0275elementEnd();
  }
}
function ExplorePointOfInterestModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.item().image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.item().name);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 7, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.item().media_url);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "audio", 7, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.item().media_url);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_1_Template, 2, 1, "video", 7)(2, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_2_Template, 2, 1, "audio", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9);
    \u0275\u0275conditionalCreate(5, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_5_Template, 1, 0, "div", 10);
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function ExplorePointOfInterestModalComponent_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePlay());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 12);
    \u0275\u0275text(10, "Read Aloud");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item().media_type === "video" ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.playing() ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.playing() ? "stop" : "volume_up");
  }
}
function ExplorePointOfInterestModalComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const details_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", details_r3?.[0], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(details_r3?.[1]);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ExplorePointOfInterestModalComponent_Conditional_11_For_2_Template, 5, 2, "div", 13, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item().extra_details);
  }
}
var ExplorePointOfInterestModalComponent = class _ExplorePointOfInterestModalComponent {
  constructor() {
    this.item = signal(
      inject(MAT_DIALOG_DATA),
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playing = signal(
      false,
      ...ngDevMode ? [{ debugName: "playing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_el = viewChild(
      "media_el",
      ...ngDevMode ? [{ debugName: "_media_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._on_ended = () => {
      this.playing.set(false);
      this._media_el()?.nativeElement.removeEventListener("ended", this._on_ended);
    };
  }
  togglePlay() {
    const el = this._media_el()?.nativeElement;
    if (!el)
      return;
    if (this.playing()) {
      el.pause();
    } else {
      el.addEventListener("ended", this._on_ended);
      el.currentTime = 0;
      el.play();
    }
    this.playing.set(!this.playing());
  }
  static {
    this.\u0275fac = function ExplorePointOfInterestModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExplorePointOfInterestModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorePointOfInterestModalComponent, selectors: [["explore-poi-modal"]], viewQuery: function ExplorePointOfInterestModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._media_el, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 12, vars: 5, consts: [["media_el", ""], [1, "bg-base-100", "h-screen", "w-full", "max-w-md", "min-w-[20rem]", "overflow-auto", "rounded-sm", "sm:h-auto"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "bg-base-200", "m-4", "flex", "h-[calc(100vh-5.75rem)]", "w-[calc(100%-2rem)]", "items-center", "justify-center", "rounded-lg", "p-8", "text-center", "opacity-50", "sm:h-64"], [1, "bg-base-300", "h-48", "w-full", "object-contain", 3, "src", "alt"], [1, "text-sm"], [1, "pointer-events-none", "absolute", "opacity-0"], ["auth", "", "controls", "", 1, "h-full", "w-full", 3, "source"], [1, "border-base-200", "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "border-t", "p-4"], [1, "relative"], [1, "bg-info", "absolute", "top-2", "left-2", "h-8", "w-8", "animate-ping", "rounded-full"], ["icon", "", "matRipple", "", 1, "bg-base-200", "relative", "h-12", "w-12", 3, "click"], [1, "text-xs", "font-medium"], [1, "border-base-200", "flex", "space-x-4", "border-t", "p-4"], [1, "text-info", "w-20", "min-w-20"]], template: function ExplorePointOfInterestModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header")(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main");
        \u0275\u0275conditionalCreate(8, ExplorePointOfInterestModalComponent_Conditional_8_Template, 2, 0, "p", 3);
        \u0275\u0275conditionalCreate(9, ExplorePointOfInterestModalComponent_Conditional_9_Template, 1, 2, "img", 4);
        \u0275\u0275conditionalCreate(10, ExplorePointOfInterestModalComponent_Conditional_10_Template, 11, 3);
        \u0275\u0275conditionalCreate(11, ExplorePointOfInterestModalComponent_Conditional_11_Template, 3, 0, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.item().name);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.item().image && !ctx.item().media_url && !ctx.item().extra_details?.length ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().image ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().media_url ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().extra_details?.length ? 11 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      AuthenticatedImageDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestModalComponent, [{
    type: Component,
    args: [{ selector: `explore-poi-modal`, template: `
        <div
            class="bg-base-100 h-screen w-full max-w-md min-w-[20rem] overflow-auto rounded-sm sm:h-auto"
        >
            <header>
                <h2>{{ item().name }}</h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main>
                @if (
                    !item().image &&
                    !item().media_url &&
                    !item().extra_details?.length
                ) {
                    <p
                        class="bg-base-200 m-4 flex h-[calc(100vh-5.75rem)] w-[calc(100%-2rem)] items-center justify-center rounded-lg p-8 text-center opacity-50 sm:h-64"
                    >
                        No available details for this point of interest.
                    </p>
                }
                @if (item().image) {
                    <img
                        class="bg-base-300 h-48 w-full object-contain"
                        [src]="item().image"
                        [alt]="item().name"
                    />
                }
                @if (item().media_url) {
                    <div class="pointer-events-none absolute opacity-0">
                        @if (item().media_type === 'video') {
                            <video
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item().media_url"
                                controls
                            ></video>
                        } @else {
                            <audio
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item().media_url"
                                controls
                            ></audio>
                        }
                    </div>
                    <div
                        class="border-base-200 flex w-full flex-col items-center justify-center space-y-2 border-t p-4"
                    >
                        <div class="relative">
                            @if (playing()) {
                                <div
                                    class="bg-info absolute top-2 left-2 h-8 w-8 animate-ping rounded-full"
                                ></div>
                            }
                            <button
                                icon
                                matRipple
                                class="bg-base-200 relative h-12 w-12"
                                (click)="togglePlay()"
                            >
                                <icon>{{
                                    playing() ? 'stop' : 'volume_up'
                                }}</icon>
                            </button>
                        </div>
                        <p class="text-xs font-medium">Read Aloud</p>
                    </div>
                }
                @if (item().extra_details?.length) {
                    <div class="text-sm">
                        @for (details of item().extra_details; track $index) {
                            <div
                                class="border-base-200 flex space-x-4 border-t p-4"
                            >
                                <div class="text-info w-20 min-w-20">
                                    {{ details?.[0] }}
                                </div>
                                <div>{{ details?.[1] }}</div>
                            </div>
                        }
                    </div>
                }
            </main>
        </div>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, { _media_el: [{ type: ViewChild, args: ["media_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorePointOfInterestModalComponent, { className: "ExplorePointOfInterestModalComponent", filePath: "libs/explore/src/lib/explore-poi-modal.component.ts", lineNumber: 128 });
})();

// libs/form-fields/src/lib/image-field.component.ts
var _c02 = ["file_input"];
function ImageFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 4);
    \u0275\u0275elementStart(1, "button", 5)(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "button", 7);
    \u0275\u0275listener("click", function ImageFieldComponent_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyLink());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "link");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r1.url());
  }
}
function ImageFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h3", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 10)(8, "icon", 11);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.UPLOAD_IMAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "COMMON.UPLOAD_IMAGE_INFO"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "COMMON.UPLOAD_IMAGE"), " ");
  }
}
var ImageFieldComponent = class _ImageFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._uploads = inject(UploadsService);
    this._clipboard = inject(Clipboard);
    this.url = signal(
      "",
      ...ngDevMode ? [{ debugName: "url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.progress = signal(
      0,
      ...ngDevMode ? [{ debugName: "progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
    this._file_input = viewChild(
      "file_input",
      ...ngDevMode ? [{ debugName: "_file_input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.copyLink = () => {
      this._clipboard.copy(this.url());
      notifyInfo("Link copied to clipboard");
    };
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  async setValue(new_url) {
    this.url.set(new_url);
    if (this._onChange)
      this._onChange(this.url());
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.url.set(value);
  }
  async uploadImage(event) {
    const element = event.target;
    if (!element?.files)
      return;
    const files = element.files;
    if (!files.length)
      return;
    try {
      const id = await this._uploads.uploadFileWithPermissions(files[0]);
      this.interval("update_status", () => this._updateUploadHistory(id));
    } catch (error) {
      this.clearInterval("update_status");
      this.progress.set(0);
      if (!(error instanceof UploadCancelledError)) {
        notifyError(`Failed to upload ${files[0].name}: ${error?.message || "Unknown error"}`);
      }
    } finally {
      this._file_input().nativeElement.value = "";
    }
  }
  async _updateUploadHistory(id) {
    const global_list = this._uploads.upload_list();
    const file = global_list.find((_) => _.id === id);
    if (!file)
      return;
    this.progress.set(file.progress);
    if (file.progress < 100)
      return;
    this.setValue(`/api/engine/v2/uploads/${encodeURIComponent(file.upload_id || file.id)}/url`);
    this.clearInterval("update_status");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ImageFieldComponent_BaseFactory;
      return function ImageFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275ImageFieldComponent_BaseFactory || (\u0275ImageFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ImageFieldComponent)))(__ngFactoryType__ || _ImageFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageFieldComponent, selectors: [["image-field"]], viewQuery: function ImageFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._file_input, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _ImageFieldComponent),
        multi: true
      },
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ]), \u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [["file_input", ""], ["matRipple", "", 1, "bg-base-200", "relative", "h-48", "w-full", "rounded-xl"], ["type", "file", 1, "absolute", "inset-0", "z-10", "cursor-pointer", "opacity-0", 3, "change"], [1, "border-base-300", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "rounded-xl", "border-2", "border-dashed"], ["auth", "", "alt", "Image", 1, "h-full", "w-full", "object-contain", 3, "source"], ["icon", "", "matRipple", "", "matTooltip", "Clear Image", "matTooltipPosition", "left", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "z-20", "rounded-full", "border"], [1, "border-base-300", "bg-base-100", "absolute", "top-1/2", "left-2", "z-20", "-translate-y-1/2", "rounded-full", "border"], ["icon", "", "matRipple", "", "matTooltip", "Copy Image URL", "matTooltipPosition", "right", 3, "click"], [1, "mb-2", "text-lg", "font-medium"], [1, "mb-4", "opacity-60"], ["btn", "", 1, "inverse", "bg-base-100"], [1, "mr-2", "text-2xl"], [1, "pr-2"]], template: function ImageFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function ImageFieldComponent_Template_input_change_1_listener($event) {
          return ctx.uploadImage($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, ImageFieldComponent_Conditional_3_Template, 8, 1)(4, ImageFieldComponent_Conditional_4_Template, 13, 9, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.url() ? 3 : 4);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      AuthenticatedImageDirective,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageFieldComponent, [{
    type: Component,
    args: [{ selector: "image-field", template: `
        <button matRipple class="bg-base-200 relative h-48 w-full rounded-xl">
            <input
                #file_input
                type="file"
                class="absolute inset-0 z-10 cursor-pointer opacity-0"
                (change)="uploadImage($event)"
            />
            @if (this.url()) {
                <img
                    auth
                    [source]="this.url()"
                    alt="Image"
                    class="h-full w-full object-contain"
                />
                <button
                    icon
                    matRipple
                    matTooltip="Clear Image"
                    matTooltipPosition="left"
                    class="border-base-300 bg-base-100 absolute top-2 right-2 z-20 rounded-full border"
                >
                    <icon>close</icon>
                </button>
                <div
                    class="border-base-300 bg-base-100 absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full border"
                >
                    <button
                        icon
                        matRipple
                        matTooltip="Copy Image URL"
                        matTooltipPosition="right"
                        (click)="copyLink()"
                    >
                        <icon>link</icon>
                    </button>
                    <!-- <button
                        icon
                        matRipple
                        matTooltip="Copy Image URL"
                        matTooltipPosition="right"
                        (click)="copyLink()"
                    >
                        <icon>link</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        matTooltip="Copy Image URL"
                        matTooltipPosition="right"
                        (click)="copyLink()"
                    >
                        <icon>link</icon>
                    </button> -->
                </div>
            } @else {
                <div
                    class="border-base-300 flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed"
                >
                    <h3 class="mb-2 text-lg font-medium">
                        {{ 'COMMON.UPLOAD_IMAGE' | translate }}
                    </h3>
                    <p class="mb-4 opacity-60">
                        {{ 'COMMON.UPLOAD_IMAGE_INFO' | translate }}
                    </p>
                    <button btn class="inverse bg-base-100">
                        <icon class="mr-2 text-2xl">chevron_right</icon>
                        <div class="pr-2">
                            {{ 'COMMON.UPLOAD_IMAGE' | translate }}
                        </div>
                    </button>
                </div>
            }
        </button>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ImageFieldComponent),
        multi: true
      },
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ], imports: [
      MatRippleModule,
      MatTooltipModule,
      AuthenticatedImageDirective,
      IconComponent,
      TranslatePipe
    ] }]
  }], null, { _file_input: [{ type: ViewChild, args: ["file_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageFieldComponent, { className: "ImageFieldComponent", filePath: "libs/form-fields/src/lib/image-field.component.ts", lineNumber: 123 });
})();

// apps/concierge/src/app/poi-manager/poi-modal.component.ts
var _c03 = () => ({ standalone: true });
var _c1 = () => ["audio", "video"];
function POIModalComponent_Conditional_14_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name, " ");
  }
}
function POIModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_Conditional_14_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.building, $event) || (ctx_r1.building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, POIModalComponent_Conditional_14_For_9_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.building);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.building_list());
  }
}
function POIModalComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    \u0275\u0275property("value", level_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r4.display_name, " ");
  }
}
function POIModalComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-form-field", 19)(2, "input", 27);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Conditional_39_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { location: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 28);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function POIModalComponent_Conditional_39_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPOIfromMap());
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "place");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.model().location)("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 3, "APP.CONCIERGE.POI_MAP_SELECT"));
  }
}
function POIModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-form-field", 29)(2, "input", 30);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Conditional_40_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { location: [+$event, +m.location[1]] })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 29)(4, "input", 31);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Conditional_40_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { location: [+m.location[0], +$event] })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.model().location[0])("ngModelOptions", \u0275\u0275pureFunction0(4, _c03));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.model().location[1])("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275control();
  }
}
function POIModalComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-form-field", 19)(2, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_For_57_Template_input_ngModelChange_2_listener($event) {
      const value_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(value_r8[0], $event) || (value_r8[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 19)(4, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_For_57_Template_input_ngModelChange_4_listener($event) {
      const value_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(value_r8[1], $event) || (value_r8[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", value_r8[0]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c03));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", value_r8[1]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275control();
  }
}
var POIModalComponent = class _POIModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location_type = signal(
      this._data?.location instanceof Array ? "coordinates" : "map_id",
      ...ngDevMode ? [{ debugName: "location_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building_list = this._org.building_list;
    this.level_list = this._org.active_levels;
    this.extra_details = signal(
      this._data?.extra_details || [],
      ...ngDevMode ? [{ debugName: "extra_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        id: this._data?.id || "",
        name: this._data?.name || "",
        level_id: this._data?.level_id || "",
        location: this._data?.location || "",
        can_search: this._data?.can_search ?? false,
        image: this._data?.image || "",
        media_type: this._data?.media_type || "audio",
        media_url: this._data?.media_url || "",
        extra_details: this._data?.extra_details || {}
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.level_id);
      required(p.location);
    });
  }
  get building() {
    return this._org.building;
  }
  set building(value) {
    this._org.building = value;
  }
  async ngOnInit() {
    if (!this.model().level_id) {
      const levels = this._org.active_levels();
      if (levels.length)
        this.model.update((m) => __spreadProps(__spreadValues({}, m), { level_id: levels[0].id }));
    }
  }
  selectPOIfromMap() {
    const ref = this._dialog.open(SelectMapItemModalComponent, {
      data: __spreadValues(__spreadValues({}, this._data), this.model())
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        location: d,
        level_id: ref.componentInstance.level()?.id
      }));
    });
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(`Some form fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ")}]`);
    }
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      extra_details: this.extra_details().filter(([key, value]) => key && value)
    }));
    const data = this.model();
    if (!data.id)
      data.id = `POI-${randomString(8)}`;
    data.short_link_id = this._data?.short_link_id;
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    const public_key = this._settings.get("app.short_url_public_key");
    const location2 = typeof data.location === "string" ? data.location : data.location.join(",");
    let uri = `${path}/#/explore?level=${data.level_id}&locate=${location2}&public=true`;
    if (public_key)
      uri += `&x-api-key=${public_key}`;
    if (!data.short_link_id) {
      const { id } = await createShortURL({
        name: data.name,
        description: `Point of Interest: ${data.name}`,
        uri: `${window.location.origin}/auth/login?continue=${encodeURIComponent(uri)}`
      });
      data.short_link_id = id;
    } else {
      await updateShortURL(data.short_link_id, {
        id: data.short_link_id,
        name: data.name,
        description: `Point of Interest: ${data.name}`,
        uri: `${window.location.origin}/auth/login?continue=${encodeURIComponent(uri)}`
      });
    }
    this.loading.set(true);
    const old_metadata = await Vu(this._org.organisation.id, "points-of-interest");
    const metadata = old_metadata.details || {};
    if (!metadata[data.level_id])
      metadata[data.level_id] = [];
    if (this._data?.id) {
      for (const lvl in metadata) {
        if (metadata[lvl])
          metadata[lvl] = metadata[lvl].filter((_) => _.id !== data.id);
      }
    }
    metadata[data.level_id] = [
      ...metadata[data.level_id].filter((_) => _.id !== data.id),
      data
    ].sort((a, b) => a.name.localeCompare(b.name));
    const resp = await Xu(this._org.organisation.id, {
      name: "points-of-interest",
      details: metadata,
      description: "Point of Interests for maps"
    }).catch((e) => notifyError(e));
    if (resp.id)
      this._dialog_ref.close(resp);
    this.loading.set(false);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275POIModalComponent_BaseFactory;
      return function POIModalComponent_Factory(__ngFactoryType__) {
        return (\u0275POIModalComponent_BaseFactory || (\u0275POIModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_POIModalComponent)))(__ngFactoryType__ || _POIModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIModalComponent, selectors: [["poi-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 60, vars: 52, consts: [[3, "confirm", "heading", "loading"], [1, "mb-4!", "block", 3, "formField"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "level"], ["placeholder", "Select Level", 3, "formField"], [3, "value"], ["for", "location"], ["placeholder", "Location Type", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "map_id"], ["value", "coordinates"], [1, "flex", "items-center", "space-x-2", "pb-2"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-4", "pt-2"], [1, "flex-1", 3, "label", "formField"], ["for", "media", 1, "mt-4"], [1, "flex", "items-center", "space-x-2", "pt-2"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", 3, "formField", "placeholder"], [3, "ngModelChange", "ngModel", "ngModelOptions", "types"], ["for", "extra-details", 1, "mt-4"], [1, "space-y-2"], ["btn", "", "matRipple", "", 1, "mt-2", "mb-4", "w-full", 3, "click"], ["for", "building"], ["placeholder", "Select Building", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "placeholder", "Location", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "name", "latitude", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "name", "longitude", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "placeholder", "Label", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "placeholder", "Content", 3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function POIModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function POIModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form");
        \u0275\u0275element(4, "image-field", 1);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(5, "div", 2)(6, "label", 3);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "mat-form-field", 4);
        \u0275\u0275element(12, "input", 5);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, POIModalComponent_Conditional_14_Template, 10, 6, "div", 2);
        \u0275\u0275elementStart(15, "div", 2)(16, "label", 6);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "mat-form-field", 4)(22, "mat-select", 7);
        \u0275\u0275repeaterCreate(23, POIModalComponent_For_24_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 2)(26, "label", 9);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "mat-form-field", 4)(32, "mat-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_Template_mat_select_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.location_type, $event) || (ctx.location_type = $event);
          return $event;
        });
        \u0275\u0275elementStart(33, "mat-option", 11);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 12);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(39, POIModalComponent_Conditional_39_Template, 7, 6, "div", 13);
        \u0275\u0275conditionalCreate(40, POIModalComponent_Conditional_40_Template, 5, 6, "div", 14);
        \u0275\u0275elementStart(41, "div", 15);
        \u0275\u0275element(42, "settings-toggle", 16);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "label", 17);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 18)(48, "mat-form-field", 19);
        \u0275\u0275element(49, "input", 20);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "upload-button", 21);
        \u0275\u0275listener("ngModelChange", function POIModalComponent_Template_upload_button_ngModelChange_51_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { media_url: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "label", 22);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 23);
        \u0275\u0275repeaterCreate(56, POIModalComponent_For_57_Template, 5, 6, "div", 14, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 24);
        \u0275\u0275listener("click", function POIModalComponent_Template_button_click_58_listener() {
          return ctx.extra_details.update((d) => [...d, ["", ""]]);
        });
        \u0275\u0275text(59, " Add Details Item ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 25, ctx.model().id ? "APP.CONCIERGE.POI_EDIT" : "APP.CONCIERGE.POI_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 27, "APP.CONCIERGE.POI_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.image);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 29, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 31, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.building_list().length > 1 ? 14 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 33, "RESOURCE.LEVEL"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.level_id);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.level_list());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 35, "COMMON.LOCATION"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.location_type);
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(49, _c03));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 37, "EXPLORE.MAP_ID"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 39, "EXPLORE.COORDINATES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.location_type() === "map_id" ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.location_type() === "coordinates" ? 40 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(43, 41, "APP.CONCIERGE.POI_SEARCHABLE"))("formField", ctx.form.can_search);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 43, "APP.CONCIERGE.POI_MEDIA"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.media_url)("placeholder", \u0275\u0275pipeBind1(50, 45, "APP.CONCIERGE.POI_MEDIA_URL"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.model().media_url)("ngModelOptions", \u0275\u0275pureFunction0(50, _c03))("types", \u0275\u0275pureFunction0(51, _c1));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 47, "APP.CONCIERGE.POI_DETAILS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.extra_details());
      }
    }, dependencies: [
      IconComponent,
      FullscreenModalShellComponent,
      FormField,
      ImageFieldComponent,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      SettingsToggleComponent,
      MatSelectModule,
      MatSelect,
      MatOption,
      UploadButtonComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIModalComponent, [{
    type: Component,
    args: [{ selector: "poi-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.POI_EDIT'
                    : 'APP.CONCIERGE.POI_NEW'
                ) | translate
            "
            (confirm)="save()"
            [loading]="
                loading() ? ('APP.CONCIERGE.POI_SAVING' | translate) : ''
            "
        >
            <form>
                <image-field
                    class="mb-4! block"
                    [formField]="form.image"
                ></image-field>
                <div class="flex flex-col">
                    <label for="name">
                        {{ 'FORM.NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                        />
                    </mat-form-field>
                </div>
                @if (building_list().length > 1) {
                    <div class="flex flex-col">
                        <label for="building">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [(ngModel)]="building"
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="Select Building"
                            >
                                @for (bld of building_list(); track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="level">
                        {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.level_id"
                            placeholder="Select Level"
                        >
                            @for (level of level_list(); track level) {
                                <mat-option [value]="level.id">
                                    {{ level.display_name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="location">
                        {{ 'COMMON.LOCATION' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [(ngModel)]="location_type"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="Location Type"
                        >
                            <mat-option value="map_id">{{
                                'EXPLORE.MAP_ID' | translate
                            }}</mat-option>
                            <mat-option value="coordinates">
                                {{ 'EXPLORE.COORDINATES' | translate }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    @if (location_type() === 'map_id') {
                        <div class="flex items-center space-x-2 pb-2">
                            <mat-form-field
                                class="no-subscript"
                                appearance="outline"
                            >
                                <input
                                    matInput
                                    placeholder="Location"
                                    [ngModel]="model().location"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            location: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                                [matTooltip]="
                                    'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                "
                                (click)="selectPOIfromMap()"
                            >
                                <icon>place</icon>
                            </button>
                        </div>
                    }
                    @if (location_type() === 'coordinates') {
                        <div class="flex items-center space-x-2">
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="latitude"
                                    [ngModel]="model().location[0]"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            location: [
                                                +$event,
                                                +m.location[1],
                                            ],
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="longitude"
                                    [ngModel]="model().location[1]"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            location: [
                                                +m.location[0],
                                                +$event,
                                            ],
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <div class="flex items-center space-x-4 pt-2">
                        <settings-toggle
                            class="flex-1"
                            [label]="'APP.CONCIERGE.POI_SEARCHABLE' | translate"
                            [formField]="form.can_search"
                        >
                        </settings-toggle>
                    </div>
                    <label for="media" class="mt-4">
                        {{ 'APP.CONCIERGE.POI_MEDIA' | translate }}
                    </label>
                    <div class="flex items-center space-x-2 pt-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <input
                                matInput
                                [formField]="form.media_url"
                                [placeholder]="
                                    'APP.CONCIERGE.POI_MEDIA_URL' | translate
                                "
                            />
                        </mat-form-field>
                        <upload-button
                            [ngModel]="model().media_url"
                            (ngModelChange)="
                                model.update((m) => ({ ...m, media_url: $event }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [types]="['audio', 'video']"
                        ></upload-button>
                    </div>
                    <label for="extra-details" class="mt-4">
                        {{ 'APP.CONCIERGE.POI_DETAILS' | translate }}
                    </label>
                    <div class="space-y-2">
                        @for (value of extra_details(); track $index) {
                            <div class="flex items-center space-x-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <input
                                        matInput
                                        [(ngModel)]="value[0]"
                                        [ngModelOptions]="{ standalone: true }"
                                        placeholder="Label"
                                    />
                                </mat-form-field>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <input
                                        matInput
                                        [(ngModel)]="value[1]"
                                        [ngModelOptions]="{ standalone: true }"
                                        placeholder="Content"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <button
                        btn
                        matRipple
                        class="mt-2 mb-4 w-full"
                        (click)="extra_details.update((d) => [...d, ['', '']])"
                    >
                        Add Details Item
                    </button>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      TranslatePipe,
      IconComponent,
      FullscreenModalShellComponent,
      FormField,
      ImageFieldComponent,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      SettingsToggleComponent,
      MatSelectModule,
      UploadButtonComponent,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIModalComponent, { className: "POIModalComponent", filePath: "apps/concierge/src/app/poi-manager/poi-modal.component.ts", lineNumber: 287 });
})();

// apps/concierge/src/app/poi-manager/poi-management.service.ts
var POIManagementService = class _POIManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = signal(
      {},
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._features = signal(
      [],
      ...ngDevMode ? [{ debugName: "_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_features = computed(
      () => {
        const list = this._features();
        const { search } = this.options();
        if (search) {
          return list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()));
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "filtered_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this._org.active_building();
      this._change();
      this._loadFeatures();
    });
  }
  async _loadFeatures() {
    const metadata = await Vu(this._org.organisation.id, "points-of-interest").catch((_) => ({ details: {} }));
    const mapping = metadata.details || {};
    const levels = this._org.levelsForBuilding(this._org.building);
    const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
    this._features.set(list);
  }
  setFilters(options) {
    this.options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this.options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  editPointOfInterest(poi) {
    const ref = this._dialog.open(POIModalComponent, {
      data: poi
    });
    ref.afterClosed().subscribe(() => this._change.update((value) => value + 1));
  }
  previewPointOfInterest(poi) {
    const ref = this._dialog.open(ExplorePointOfInterestModalComponent, {
      data: poi
    });
  }
  async removePointOfInterest(poi) {
    const ref = await openConfirmModal({
      title: "Remove Point of Interest",
      content: `Are you sure you want to remove the point of interest "${poi.name}"?`,
      icon: { content: "delete_forever" },
      confirm_text: "Remove"
    }, this._dialog);
    if (ref.reason !== "done")
      return ref.close();
    ref.loading("Removing point of interest...");
    const old_metadata = await Vu(this._org.organisation.id, "points-of-interest");
    const metadata = old_metadata.details || {};
    for (const lvl in metadata) {
      if (metadata[lvl])
        metadata[lvl] = metadata[lvl].filter((_) => _.id !== poi.id);
    }
    await Xu(this._org.organisation.id, {
      name: "points-of-interest",
      details: metadata,
      description: ""
    }).catch((e) => {
      notifyError(e);
      ref.close();
      throw e;
    });
    notifySuccess("Successfully removed point of interest.");
    ref.close();
    this._change.update((value) => value + 1);
  }
  static {
    this.\u0275fac = function POIManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _POIManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _POIManagementService, factory: _POIManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/poi-manager/poi-list.component.ts
var _c04 = (a0) => ({ key: "name", name: a0 });
var _c12 = (a0, a1) => ({ key: "level_id", name: a0, content: a1, size: "12rem", sortable: false });
var _c2 = (a0) => ({ key: "location", name: a0, size: "10rem" });
var _c3 = (a0, a1) => ({ key: "can_search", name: a0, size: "7rem", content: a1 });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "9rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c6 = (a0, a1) => ({ qr: a0, item: a1 });
function POIListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, row_r1.level_id)?.display_name || "Unknown", " ");
  }
}
function POIListComponent_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function POIListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, POIListComponent_ng_template_9_Conditional_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275conditional(data_r2 ? 0 : -1);
  }
}
function POIListComponent_ng_template_11_ng_template_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275element(2, "img", 24);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const qr_r8 = ctx_r6.qr;
    const item_r9 = ctx_r6.item;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, qr_r8?.link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275pipeBind2(3, 6, qr_r8?.image, "resource"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r9.name || item_r9.id, " ");
  }
}
function POIListComponent_ng_template_11_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275template(2, POIListComponent_ng_template_11_ng_template_11_ng_template_2_Template, 6, 9, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_ng_template_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.print());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const print_content_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", print_content_r10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.CONCIERGE.POI_PRINT_QR"), " ");
  }
}
function POIListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_3_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadQrCode(row_r4));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "qr_code_2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_8_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadPublicQrCode(row_r4));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "qr_code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, POIListComponent_ng_template_11_ng_template_11_Template, 7, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(13, "button", 15)(14, "icon");
    \u0275\u0275text(15, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-menu", null, 4)(18, "button", 16);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.edit(row_r4));
    });
    \u0275\u0275elementStart(19, "div", 17)(20, "icon");
    \u0275\u0275text(21, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 16);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_25_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.preview(row_r4));
    });
    \u0275\u0275elementStart(26, "div", 17)(27, "icon");
    \u0275\u0275text(28, "preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 16);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_32_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(33, "div", 18)(34, "icon", 19);
    \u0275\u0275text(35, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const qr_menu_r11 = \u0275\u0275reference(12);
    const menu_r12 = \u0275\u0275reference(17);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 11, "APP.CONCIERGE.POI_PRIVATE_QR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", qr_menu_r11)("data", \u0275\u0275pureFunction2(21, _c6, ctx_r4.qr_codes()[row_r4.id]?.private, row_r4));
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 13, "APP.CONCIERGE.POI_PUBLIC_QR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r4.short_link_id)("data", \u0275\u0275pureFunction2(24, _c6, ctx_r4.qr_codes()[row_r4.id]?.public, row_r4))("content", qr_menu_r11);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", menu_r12);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 15, "APP.CONCIERGE.POI_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 17, "APP.CONCIERGE.POI_PREVIEW"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 19, "APP.CONCIERGE.POI_REMOVE"));
  }
}
var POIListComponent = class _POIListComponent extends AsyncHandler {
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  constructor() {
    super();
    this._manager = inject(POIManagementService);
    this._settings = inject(SettingsService);
    this.features = this._manager.filtered_features;
    this.qr_codes = signal(
      {},
      ...ngDevMode ? [{ debugName: "qr_codes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit = (region) => this._manager.editPointOfInterest(region);
    this.remove = (region) => this._manager.removePointOfInterest(region);
    this.preview = (poi) => this._manager.previewPointOfInterest(poi);
    effect(() => {
      for (const item of this.features()) {
        const existing_codes = untracked(() => this.qr_codes()[item.id]);
        if (existing_codes)
          continue;
        const qr_private = this.loadQrCode(item);
        const qr_public = this.loadPublicQrCode(item);
        this.qr_codes.update((mapping) => __spreadProps(__spreadValues({}, mapping), {
          [item.id]: {
            private: qr_private,
            public: qr_public
          }
        }));
      }
    });
  }
  loadQrCode(item) {
    const location2 = typeof item.location === "string" ? item.location : item.location.join(",");
    const link = `${this.kiosk_url}/#/explore?level=${encodeURIComponent(item.level_id)}&locate=${encodeURIComponent(location2)}`;
    return { link, image: generateQRCode(link) };
  }
  loadPublicQrCode(item) {
    const link = `${location.origin}/r/${item.short_link_id.split("-")[1]}`;
    return { link, image: generateQRCode(link) };
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function POIListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _POIListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIListComponent, selectors: [["poi-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 29, consts: [["level_template", ""], ["bool_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], ["print_content", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "block", "min-w-3xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-12", "w-full"], [1, "p-4"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "mx-auto", "flex", "gap-2", "p-2"], [3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", "customTooltip", "", 3, "click", "content", "data"], ["icon", "", "default", "", "matRipple", "", "customTooltip", "", 3, "click", "disabled", "data", "content"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error"], [1, "bg-base-100", "rounded-sm", "py-2", "shadow-sm"], ["printable", "", 1, "", 3, "content"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], ["target", "_blank", "ref", "noopener noreferrer", 1, "border-base-200", "bg-base-100", "mx-4", "my-2", "block", "rounded-lg", "border", "p-2", 3, "href"], [1, "mx-auto", "w-48", 3, "src"], [1, "bg-base-200", "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded-sm", "p-2", "text-center", "font-mono", "text-sm"]], template: function POIListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6);
        \u0275\u0275element(1, "simple-table", 7);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275element(6, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, POIListComponent_ng_template_7_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, POIListComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, POIListComponent_ng_template_11_Template, 39, 27, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const level_template_r13 = \u0275\u0275reference(8);
        const bool_template_r14 = \u0275\u0275reference(10);
        const action_template_r15 = \u0275\u0275reference(12);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.features())("columns", \u0275\u0275pureFunction5(23, _c5, \u0275\u0275pureFunction1(11, _c04, \u0275\u0275pipeBind1(2, 3, "FORM.NAME")), \u0275\u0275pureFunction2(13, _c12, \u0275\u0275pipeBind1(3, 5, "RESOURCE.LEVEL"), level_template_r13), \u0275\u0275pureFunction1(16, _c2, \u0275\u0275pipeBind1(4, 7, "COMMON.LOCATION")), \u0275\u0275pureFunction2(18, _c3, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.POI_SEARCHABLE"), bool_template_r14), \u0275\u0275pureFunction1(21, _c4, action_template_r15)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      MatRippleModule,
      MatRipple,
      PrintableComponent,
      CustomTooltipComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe,
      LevelPipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIListComponent, [{
    type: Component,
    args: [{ selector: "poi-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-3xl text-sm"
                [data]="features()"
                empty_message="No Points of Interest found."
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'level_id',
                        name: 'RESOURCE.LEVEL' | translate,
                        content: level_template,
                        size: '12rem',
                        sortable: false,
                    },
                    {
                        key: 'location',
                        name: 'COMMON.LOCATION' | translate,
                        size: '10rem',
                    },
                    {
                        key: 'can_search',
                        name: 'APP.CONCIERGE.POI_SEARCHABLE' | translate,
                        size: '7rem',
                        content: bool_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '9rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
        </div>
        <ng-template #level_template let-row="row">
            <div class="p-4">
                {{ (row.level_id | level)?.display_name || 'Unknown' }}
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            @if (data) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex gap-2 p-2">
                <div [matTooltip]="'APP.CONCIERGE.POI_PRIVATE_QR' | translate">
                    <button
                        icon
                        default
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        [data]="{
                            qr: qr_codes()[row.id]?.private,
                            item: row,
                        }"
                        (click)="loadQrCode(row)"
                    >
                        <icon>qr_code_2</icon>
                    </button>
                </div>
                <div [matTooltip]="'APP.CONCIERGE.POI_PUBLIC_QR' | translate">
                    <button
                        icon
                        default
                        matRipple
                        customTooltip
                        [disabled]="!row.short_link_id"
                        [data]="{
                            qr: qr_codes()[row.id]?.public,
                            item: row,
                        }"
                        [content]="qr_menu"
                        (click)="loadPublicQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                </div>
                <ng-template #qr_menu let-qr="qr" let-item="item">
                    <div class="bg-base-100 rounded-sm py-2 shadow-sm">
                        <div class="" printable [content]="print_content">
                            <ng-template #print_content>
                                <a
                                    [href]="qr?.link | safe: 'url'"
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="border-base-200 bg-base-100 mx-4 my-2 block rounded-lg border p-2"
                                >
                                    <img
                                        class="mx-auto w-48"
                                        [src]="qr?.image | safe: 'resource'"
                                    />
                                </a>
                                <div
                                    class="bg-base-200 mx-4 mt-2 w-[calc(100%-2rem)] rounded-sm p-2 text-center font-mono text-sm"
                                >
                                    {{ item.name || item.id }}
                                </div>
                            </ng-template>
                        </div>
                        <button
                            btn
                            matRipple
                            class="mx-4 my-2 w-[calc(100%-2rem)]"
                            (click)="print()"
                        >
                            {{ 'APP.CONCIERGE.POI_PRINT_QR' | translate }}
                        </button>
                    </div>
                </ng-template>
                <button icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="edit(row)">
                        <div class="flex items-center space-x-2">
                            <icon>edit</icon>
                            <span>{{
                                'APP.CONCIERGE.POI_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="preview(row)">
                        <div class="flex items-center space-x-2">
                            <icon>preview</icon>
                            <span>{{
                                'APP.CONCIERGE.POI_PREVIEW' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.POI_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      MatMenuModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      PrintableComponent,
      LevelPipe,
      CustomTooltipComponent,
      MatTooltipModule,
      SafePipe
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIListComponent, { className: "POIListComponent", filePath: "apps/concierge/src/app/poi-manager/poi-list.component.ts", lineNumber: 192 });
})();

// apps/concierge/src/app/poi-manager/poi-manager.component.ts
var _c05 = () => ({ standalone: true });
function POIManagerComponent_Conditional_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function POIManagerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-form-field", 8)(2, "mat-select", 9);
    \u0275\u0275listener("ngModelChange", function POIManagerComponent_Conditional_11_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(3, POIManagerComponent_Conditional_11_For_4_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(3, _c05))("placeholder", ctx_r1.building?.display_name || ctx_r1.building?.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
var POIManagerComponent = class _POIManagerComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._state = inject(POIManagementService);
    this._settings = inject(SettingsService);
    this.new = () => this._state.editPointOfInterest();
    this.buildings = this._org.active_buildings;
  }
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  static {
    this.\u0275fac = function POIManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _POIManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIManagerComponent, selectors: [["", "app-poi-manager", ""]], decls: 13, vars: 9, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "justify-between", "px-8", "py-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"], ["appearance", "outline", 1, "w-64"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"]], template: function POIManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2)(4, "header", 3)(5, "h2", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function POIManagerComponent_Template_button_click_8_listener() {
          return ctx.new();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, POIManagerComponent_Conditional_11_Template, 5, 4, "div", 6);
        \u0275\u0275element(12, "poi-list", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mb-2", !ctx.use_region || ctx.buildings().length <= 1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "APP.CONCIERGE.POI_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "APP.CONCIERGE.POI_ADD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.use_region && ctx.buildings().length > 1 ? 11 : -1);
      }
    }, dependencies: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      POIListComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=poi-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-poi-manager]", template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="flex items-center justify-between px-8 py-8"
                    [class.mb-2]="!use_region || buildings().length <= 1"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.POI_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="new()">
                        {{ 'APP.CONCIERGE.POI_ADD' | translate }}
                    </button>
                </header>
                @if (use_region && buildings().length > 1) {
                    <div class="mb-2 flex items-center justify-between px-8">
                        <mat-form-field appearance="outline" class="w-64">
                            <mat-select
                                name="building"
                                [ngModel]="building"
                                (ngModelChange)="building = $event"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building?.display_name || building?.name
                                "
                            >
                                @for (bld of buildings(); track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <poi-list class="relative block h-1/2 w-full flex-1"></poi-list>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      POIListComponent
    ], styles: ["/* angular:styles/component:css;c3c4e43489fa049a08c22bf31fd7fb879b1769192f7684fb69867d5e4ca38a37;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/poi-manager/poi-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar {\n  height: 100%;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=poi-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIManagerComponent, { className: "POIManagerComponent", filePath: "apps/concierge/src/app/poi-manager/poi-manager.component.ts", lineNumber: 94 });
})();

// apps/concierge/src/app/poi-manager/poi-manager.routes.ts
var ROUTES = [
  { path: "", component: POIManagerComponent, title: "Points of Interest" }
];
export {
  ROUTES
};
//# sourceMappingURL=poi-manager.routes-YWR5WEOI.js.map
