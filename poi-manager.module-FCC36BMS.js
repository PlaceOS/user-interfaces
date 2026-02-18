import {
  UploadButtonComponent
} from "./chunk-EG2EXA6P.js";
import {
  SelectMapItemModalComponent
} from "./chunk-HVSBTZDW.js";
import {
  ExplorePointOfInterestModalComponent
} from "./chunk-ZXXXAZ3G.js";
import "./chunk-TVNQVJRH.js";
import "./chunk-322PMJ6Y.js";
import "./chunk-M7S62NTX.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-YC55532I.js";
import "./chunk-XM4GP554.js";
import {
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Clipboard,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  PrintableComponent,
  ReactiveFormsModule,
  RouterModule,
  SafePipe,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  TranslatePipe,
  UPLOAD_PERMISSIONS_MODAL,
  UploadPermissionsModalComponent,
  UploadsService,
  Validators,
  catchError,
  combineLatest,
  createShortURL,
  flatten,
  forwardRef,
  generateQRCode,
  getInvalidFields,
  inject,
  map,
  nc,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  randomString,
  rc,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
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
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
} from "./chunk-CABWWIQI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// libs/form-fields/src/lib/image-field.component.ts
var _c0 = ["file_input"];
function ImageFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 4);
    \u0275\u0275elementStart(1, "button", 5)(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "button", 7);
    \u0275\u0275listener("click", function ImageFieldComponent_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyLink());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "link");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r2.url());
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
var _ImageFieldComponent = class _ImageFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._uploads = inject(UploadsService);
    this._clipboard = inject(Clipboard);
    this.url = signal("");
    this.progress = signal(0);
    this.disabled = signal(false);
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
    this._file_input = viewChild("file_input");
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
    const id = await this._uploads.uploadFileWithPermissions(files[0]);
    this.interval("update_status", () => this._updateUploadHistory(id));
    this._file_input().nativeElement.value = "";
  }
  async _updateUploadHistory(id) {
    const global_list = await nextValueFrom(this._uploads.upload_list);
    const file = global_list.find((_) => _.id === id);
    if (!file)
      return;
    this.progress.set(file.progress);
    if (file.progress < 100)
      return;
    this.setValue(`/api/engine/v2/uploads/${encodeURIComponent(file.upload_id || file.id)}/url`);
    this.clearInterval("update_status");
  }
};
_ImageFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ImageFieldComponent_BaseFactory;
  return function ImageFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275ImageFieldComponent_BaseFactory || (\u0275ImageFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ImageFieldComponent)))(__ngFactoryType__ || _ImageFieldComponent);
  };
})();
_ImageFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageFieldComponent, selectors: [["image-field"]], viewQuery: function ImageFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._file_input, _c0, 5);
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
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1)(1, "input", 2, 0);
    \u0275\u0275listener("change", function ImageFieldComponent_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.uploadImage($event));
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
var ImageFieldComponent = _ImageFieldComponent;
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageFieldComponent, { className: "ImageFieldComponent", filePath: "libs/form-fields/src/lib/image-field.component.ts", lineNumber: 122 });
})();

// apps/concierge/src/app/poi-manager/poi-modal.component.ts
var _c02 = () => ({ standalone: true });
var _c1 = () => ["audio", "video"];
function POIModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 22);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 4, "FORM.NAME"));
  }
}
function POIModalComponent_Conditional_6_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
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
function POIModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_Conditional_6_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.building, $event) || (ctx_r1.building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, POIModalComponent_Conditional_6_For_9_Template, 2, 2, "mat-option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.building);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c02));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 5, ctx_r1.building_list));
  }
}
function POIModalComponent_Conditional_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
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
function POIModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 27);
    \u0275\u0275repeaterCreate(8, POIModalComponent_Conditional_8_For_9_Template, 2, 2, "mat-option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.LEVEL"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 3, ctx_r1.level_list));
  }
}
function POIModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-form-field", 15);
    \u0275\u0275element(2, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function POIModalComponent_Conditional_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPOIfromMap());
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "place");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.POI_MAP_SELECT"));
  }
}
function POIModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-form-field", 30)(2, "input", 31);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Conditional_24_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ location: [+$event, +ctx_r1.form.value.location[1]] }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-form-field", 30)(4, "input", 32);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Conditional_24_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ location: [+ctx_r1.form.value.location[0], +$event] }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.location[0])("ngModelOptions", \u0275\u0275pureFunction0(4, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.location[1])("ngModelOptions", \u0275\u0275pureFunction0(5, _c02));
  }
}
function POIModalComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-form-field", 15)(2, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_For_41_Template_input_ngModelChange_2_listener($event) {
      const value_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(value_r8[0], $event) || (value_r8[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-form-field", 15)(4, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_For_41_Template_input_ngModelChange_4_listener($event) {
      const value_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(value_r8[1], $event) || (value_r8[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const value_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", value_r8[0]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", value_r8[1]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c02));
  }
}
var _POIModalComponent = class _POIModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.loading = false;
    this.location_type = this._data?.location instanceof Array ? "coordinates" : "map_id";
    this.building_list = this._org.building_list;
    this.level_list = this._org.active_levels;
    this.extra_details = this._data?.extra_details || [];
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      name: new FormControl(this._data?.name || "", [Validators.required]),
      level_id: new FormControl(this._data?.level_id || "", [
        Validators.required
      ]),
      location: new FormControl(this._data?.location || "", [
        Validators.required
      ]),
      can_search: new FormControl(this._data?.can_search ?? false),
      image: new FormControl(this._data?.image || ""),
      media_type: new FormControl(this._data?.media_type || "audio"),
      media_url: new FormControl(this._data?.media_url || ""),
      extra_details: new FormControl(this._data?.extra_details || {})
    });
  }
  get building() {
    return this._org.building;
  }
  set building(value) {
    this._org.building = value;
  }
  async ngOnInit() {
    if (!this.form.value.level_id) {
      const levels = await nextValueFrom(this.level_list);
      if (levels.length)
        this.form.patchValue({ level_id: levels[0].id });
    }
  }
  selectPOIfromMap() {
    const ref = this._dialog.open(SelectMapItemModalComponent, {
      data: __spreadValues(__spreadValues({}, this._data), this.form.getRawValue())
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.form.patchValue({
        location: d,
        level_id: ref.componentInstance.level?.id
      });
    });
  }
  async save() {
    if (!this.form.valid) {
      return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
    }
    this.form.patchValue({
      extra_details: this.extra_details.filter(([key, value]) => key && value)
    });
    const data = this.form.getRawValue();
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
      }).toPromise();
      data.short_link_id = id;
    } else {
      await updateShortURL(data.short_link_id, {
        id: data.short_link_id,
        name: data.name,
        description: `Point of Interest: ${data.name}`,
        uri: `${window.location.origin}/auth/login?continue=${encodeURIComponent(uri)}`
      }).toPromise();
    }
    this.loading = true;
    const old_metadata = await nc(this._org.organisation.id, "points-of-interest").toPromise();
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
    const resp = await rc(this._org.organisation.id, {
      name: "points-of-interest",
      details: metadata,
      description: "Point of Interests for maps"
    }).toPromise().catch((e) => notifyError(e));
    if (resp.id)
      this._dialog_ref.close(resp);
    this.loading = false;
  }
};
_POIModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275POIModalComponent_BaseFactory;
  return function POIModalComponent_Factory(__ngFactoryType__) {
    return (\u0275POIModalComponent_BaseFactory || (\u0275POIModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_POIModalComponent)))(__ngFactoryType__ || _POIModalComponent);
  };
})();
_POIModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIModalComponent, selectors: [["poi-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 44, vars: 43, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], ["formControlName", "image", 1, "mb-4!", "block"], [1, "flex", "flex-col"], ["for", "location"], ["appearance", "outline"], ["placeholder", "Location Type", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "map_id"], ["value", "coordinates"], [1, "flex", "items-center", "space-x-2", "pb-2"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-4", "pt-2"], ["formControlName", "can_search", 1, "flex-1", 3, "name"], ["for", "media", 1, "mt-4"], [1, "flex", "items-center", "space-x-2", "pt-2"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "formControlName", "media_url", 3, "placeholder"], [3, "ngModelChange", "ngModel", "ngModelOptions", "types"], ["for", "extra-details", 1, "mt-4"], [1, "space-y-2"], ["btn", "", "matRipple", "", 1, "mt-2", "mb-4", "w-full", 3, "click"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "building"], ["placeholder", "Select Building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["for", "level"], ["formControlName", "level_id", "placeholder", "Select Level"], ["matInput", "", "name", "location", "placeholder", "Location", "formControlName", "location"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "name", "latitude", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "name", "longitude", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "placeholder", "Label", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "placeholder", "Content", 3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function POIModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function POIModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(3, "form", 1);
    \u0275\u0275element(4, "image-field", 2);
    \u0275\u0275conditionalCreate(5, POIModalComponent_Conditional_5_Template, 9, 6, "div", 3);
    \u0275\u0275conditionalCreate(6, POIModalComponent_Conditional_6_Template, 11, 8, "div", 3);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalCreate(8, POIModalComponent_Conditional_8_Template, 11, 5, "div", 3);
    \u0275\u0275elementStart(9, "div", 3)(10, "label", 4);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 5)(16, "mat-select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.location_type, $event) || (ctx.location_type = $event);
      return $event;
    });
    \u0275\u0275elementStart(17, "mat-option", 7);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-option", 8);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(23, POIModalComponent_Conditional_23_Template, 7, 3, "div", 9);
    \u0275\u0275conditionalCreate(24, POIModalComponent_Conditional_24_Template, 5, 6, "div", 10);
    \u0275\u0275elementStart(25, "div", 11);
    \u0275\u0275element(26, "settings-toggle", 12);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 13);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 14)(32, "mat-form-field", 15);
    \u0275\u0275element(33, "input", 16);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "upload-button", 17);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Template_upload_button_ngModelChange_35_listener($event) {
      return ctx.form.patchValue({ media_url: $event });
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "label", 18);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 19);
    \u0275\u0275repeaterCreate(40, POIModalComponent_For_41_Template, 5, 6, "div", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 20);
    \u0275\u0275listener("click", function POIModalComponent_Template_button_click_42_listener() {
      return ctx.extra_details.push(["", ""]);
    });
    \u0275\u0275text(43, " Add Details Item ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 20, ctx.form.value.id ? "APP.CONCIERGE.POI_EDIT" : "APP.CONCIERGE.POI_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 22, "APP.CONCIERGE.POI_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.name ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(7, 24, ctx.building_list)) == null ? null : tmp_4_0.length) > 1 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.level_id ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 26, "COMMON.LOCATION"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.location_type);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(40, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 28, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 30, "EXPLORE.COORDINATES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.location_type === "map_id" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.location_type === "coordinates" ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(27, 32, "APP.CONCIERGE.POI_SEARCHABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 34, "APP.CONCIERGE.POI_MEDIA"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 36, "APP.CONCIERGE.POI_MEDIA_URL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.form.value.media_url)("ngModelOptions", \u0275\u0275pureFunction0(41, _c02))("types", \u0275\u0275pureFunction0(42, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 38, "APP.CONCIERGE.POI_DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.extra_details);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  FullscreenModalShellComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  ImageFieldComponent,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  FormsModule,
  NgModel,
  SettingsToggleComponent,
  MatSelectModule,
  MatSelect,
  MatOption,
  UploadButtonComponent,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var POIModalComponent = _POIModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIModalComponent, [{
    type: Component,
    args: [{ selector: "poi-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.POI_EDIT'
                    : 'APP.CONCIERGE.POI_NEW'
                ) | translate
            "
            (confirm)="save()"
            [loading]="loading ? ('APP.CONCIERGE.POI_SAVING' | translate) : ''"
        >
            <form [formGroup]="form">
                <image-field
                    class="mb-4! block"
                    formControlName="image"
                ></image-field>
                @if (form.controls.name) {
                    <div class="flex flex-col">
                        <label for="name">
                            {{ 'FORM.NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                [placeholder]="'FORM.NAME' | translate"
                                formControlName="name"
                            />
                        </mat-form-field>
                    </div>
                }
                @if ((building_list | async)?.length > 1) {
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
                                @for (bld of building_list | async; track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.level_id) {
                    <div class="flex flex-col">
                        <label for="level">
                            {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="level_id"
                                placeholder="Select Level"
                            >
                                @for (
                                    level of level_list | async;
                                    track level
                                ) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
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
                    @if (location_type === 'map_id') {
                        <div class="flex items-center space-x-2 pb-2">
                            <mat-form-field
                                class="no-subscript"
                                appearance="outline"
                            >
                                <input
                                    matInput
                                    name="location"
                                    placeholder="Location"
                                    formControlName="location"
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
                    @if (location_type === 'coordinates') {
                        <div class="flex items-center space-x-2">
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="latitude"
                                    [ngModel]="form.value.location[0]"
                                    (ngModelChange)="
                                        form.patchValue({
                                            location: [
                                                +$event,
                                                +form.value.location[1],
                                            ],
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="longitude"
                                    [ngModel]="form.value.location[1]"
                                    (ngModelChange)="
                                        form.patchValue({
                                            location: [
                                                +form.value.location[0],
                                                +$event,
                                            ],
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <div class="flex items-center space-x-4 pt-2">
                        <settings-toggle
                            class="flex-1"
                            [name]="'APP.CONCIERGE.POI_SEARCHABLE' | translate"
                            formControlName="can_search"
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
                                formControlName="media_url"
                                [placeholder]="
                                    'APP.CONCIERGE.POI_MEDIA_URL' | translate
                                "
                            />
                        </mat-form-field>
                        <upload-button
                            [ngModel]="form.value.media_url"
                            (ngModelChange)="
                                form.patchValue({ media_url: $event })
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [types]="['audio', 'video']"
                        ></upload-button>
                    </div>
                    <label for="extra-details" class="mt-4">
                        {{ 'APP.CONCIERGE.POI_DETAILS' | translate }}
                    </label>
                    <div class="space-y-2">
                        @for (value of extra_details; track $index) {
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
                        (click)="extra_details.push(['', ''])"
                    >
                        Add Details Item
                    </button>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      FullscreenModalShellComponent,
      ReactiveFormsModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIModalComponent, { className: "POIModalComponent", filePath: "apps/concierge/src/app/poi-manager/poi-modal.component.ts", lineNumber: 293 });
})();

// apps/concierge/src/app/poi-manager/poi-management.service.ts
var _POIManagementService = class _POIManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this._features = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(switchMap(() => nc(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), map((_) => {
      const mapping = _.details || {};
      const levels = this._org.levelsForBuilding(this._org.building);
      const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
      return list;
    }), shareReplay(1));
    this.filtered_features = combineLatest([
      this._features,
      this._options
    ]).pipe(map(([list, options]) => {
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      return list;
    }));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editPointOfInterest(poi) {
    const ref = this._dialog.open(POIModalComponent, {
      data: poi
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
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
    const old_metadata = await nc(this._org.organisation.id, "points-of-interest").toPromise();
    const metadata = old_metadata.details || {};
    for (const lvl in metadata) {
      if (metadata[lvl])
        metadata[lvl] = metadata[lvl].filter((_) => _.id !== poi.id);
    }
    await rc(this._org.organisation.id, {
      name: "points-of-interest",
      details: metadata,
      description: ""
    }).toPromise().catch((e) => {
      notifyError(e);
      ref.close();
      throw e;
    });
    notifySuccess("Successfully removed point of interest.");
    ref.close();
    this._change.next(Date.now());
  }
};
_POIManagementService.\u0275fac = function POIManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _POIManagementService)();
};
_POIManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _POIManagementService, factory: _POIManagementService.\u0275fac, providedIn: "root" });
var POIManagementService = _POIManagementService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/poi-manager/poi-list.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c12 = (a0, a1) => ({ key: "level_id", name: a0, content: a1, size: "12rem", sortable: false });
var _c2 = (a0) => ({ key: "location", name: a0, size: "10rem" });
var _c3 = (a0, a1) => ({ key: "can_search", name: a0, size: "7rem", content: a1 });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "9.5rem", sortable: false });
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
    let tmp_5_0;
    const row_r1 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = \u0275\u0275pipeBind1(2, 1, row_r1.level_id)) == null ? null : tmp_5_0.display_name) || "Unknown", " ");
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
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, qr_r8 == null ? null : qr_r8.link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275pipeBind2(3, 6, qr_r8 == null ? null : qr_r8.image, "resource"), \u0275\u0275sanitizeUrl);
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
    \u0275\u0275text(5, "qr_code");
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
    let tmp_9_0;
    let tmp_12_0;
    const row_r4 = ctx.row;
    const qr_menu_r11 = \u0275\u0275reference(12);
    const menu_r12 = \u0275\u0275reference(17);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 11, "APP.CONCIERGE.POI_PRIVATE_QR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", qr_menu_r11)("data", \u0275\u0275pureFunction2(21, _c6, (tmp_9_0 = ctx_r4.qr_codes()[row_r4.id]) == null ? null : tmp_9_0.private, row_r4));
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 13, "APP.CONCIERGE.POI_PUBLIC_QR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r4.short_link_id)("data", \u0275\u0275pureFunction2(24, _c6, (tmp_12_0 = ctx_r4.qr_codes()[row_r4.id]) == null ? null : tmp_12_0.public, row_r4))("content", qr_menu_r11);
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
var _POIListComponent = class _POIListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._manager = inject(POIManagementService);
    this._settings = inject(SettingsService);
    this.features = this._manager.filtered_features;
    this.qr_codes = signal({});
    this.edit = (region) => this._manager.editPointOfInterest(region);
    this.remove = (region) => this._manager.removePointOfInterest(region);
    this.preview = (poi) => this._manager.previewPointOfInterest(poi);
  }
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  ngOnInit() {
    this.subscription("featrues", this.features.subscribe(async (l) => {
      for (const item of l) {
        if (this.qr_codes()[item.id])
          continue;
        const qr_private = await this.loadQrCode(item);
        const qr_public = await this.loadPublicQrCode(item);
        this.qr_codes.update((m) => {
          m[item.id] = {
            private: qr_private,
            public: qr_public
          };
          return m;
        });
      }
    }));
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
};
_POIListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275POIListComponent_BaseFactory;
  return function POIListComponent_Factory(__ngFactoryType__) {
    return (\u0275POIListComponent_BaseFactory || (\u0275POIListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_POIListComponent)))(__ngFactoryType__ || _POIListComponent);
  };
})();
_POIListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIListComponent, selectors: [["poi-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 29, consts: [["level_template", ""], ["bool_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], ["print_content", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "block", "min-w-3xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-12", "w-full"], [1, "p-4"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "mx-auto", "flex", "w-full", "justify-end", "space-x-2", "px-4", "py-2"], [3, "matTooltip"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content", "data"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "disabled", "data", "content"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error"], [1, "bg-base-100", "rounded-sm", "py-2", "shadow-sm"], ["printable", "", 1, "", 3, "content"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], ["target", "_blank", "ref", "noopener noreferrer", 1, "border-base-200", "bg-base-100", "mx-4", "my-2", "block", "rounded-lg", "border", "p-2", 3, "href"], [1, "mx-auto", "w-48", 3, "src"], [1, "bg-base-200", "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded-sm", "p-2", "text-center", "font-mono", "text-sm"]], template: function POIListComponent_Template(rf, ctx) {
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
    \u0275\u0275property("data", ctx.features)("columns", \u0275\u0275pureFunction5(23, _c5, \u0275\u0275pureFunction1(11, _c03, \u0275\u0275pipeBind1(2, 3, "FORM.NAME")), \u0275\u0275pureFunction2(13, _c12, \u0275\u0275pipeBind1(3, 5, "RESOURCE.LEVEL"), level_template_r13), \u0275\u0275pureFunction1(16, _c2, \u0275\u0275pipeBind1(4, 7, "COMMON.LOCATION")), \u0275\u0275pureFunction2(18, _c3, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.POI_SEARCHABLE"), bool_template_r14), \u0275\u0275pureFunction1(21, _c4, action_template_r15)))("sortable", true);
  }
}, dependencies: [
  CommonModule,
  SimpleTableComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  PrintableComponent,
  LevelPipe,
  CustomTooltipComponent,
  MatTooltipModule,
  MatTooltip,
  SafePipe
], encapsulation: 2 });
var POIListComponent = _POIListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIListComponent, [{
    type: Component,
    args: [{ selector: "poi-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-3xl text-sm"
                [data]="features"
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
                        size: '9.5rem',
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
            <div class="mx-auto flex w-full justify-end space-x-2 px-4 py-2">
                <div [matTooltip]="'APP.CONCIERGE.POI_PRIVATE_QR' | translate">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        [data]="{ qr: qr_codes()[row.id]?.private, item: row }"
                        (click)="loadQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                </div>
                <div [matTooltip]="'APP.CONCIERGE.POI_PUBLIC_QR' | translate">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [disabled]="!row.short_link_id"
                        [data]="{ qr: qr_codes()[row.id]?.public, item: row }"
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
                <button icon matRipple [matMenuTriggerFor]="menu">
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
      CommonModule,
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIListComponent, { className: "POIListComponent", filePath: "apps/concierge/src/app/poi-manager/poi-list.component.ts", lineNumber: 186 });
})();

// apps/concierge/src/app/poi-manager/poi-manager.component.ts
var _c04 = ["app-poi-manager", ""];
var _c13 = () => ({ standalone: true });
function POIManagerComponent_Conditional_12_For_4_Template(rf, ctx) {
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
function POIManagerComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-form-field", 8)(2, "mat-select", 9);
    \u0275\u0275listener("ngModelChange", function POIManagerComponent_Conditional_12_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(3, POIManagerComponent_Conditional_12_For_4_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c13))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 3, ctx_r1.buildings));
  }
}
var _POIManagerComponent = class _POIManagerComponent {
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
};
_POIManagerComponent.\u0275fac = function POIManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _POIManagerComponent)();
};
_POIManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIManagerComponent, selectors: [["", "app-poi-manager", ""]], attrs: _c04, decls: 15, vars: 13, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "justify-between", "px-8", "py-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"], ["appearance", "outline", 1, "w-64"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"]], template: function POIManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "header", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function POIManagerComponent_Template_button_click_9_listener() {
      return ctx.new();
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, POIManagerComponent_Conditional_12_Template, 6, 6, "div", 6);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275element(14, "poi-list", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_3_0;
    \u0275\u0275advance(4);
    \u0275\u0275classProp("mb-2", !ctx.use_region || ((tmp_0_0 = \u0275\u0275pipeBind1(5, 5, ctx.buildings)) == null ? null : tmp_0_0.length) <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "APP.CONCIERGE.POI_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "APP.CONCIERGE.POI_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(13, 11, ctx.buildings)) == null ? null : tmp_3_0.length) > 1 ? 12 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  TranslatePipe,
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
  POIListComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=poi-manager.component.css.map */"] });
var POIManagerComponent = _POIManagerComponent;
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
                    [class.mb-2]="
                        !use_region || (buildings | async)?.length <= 1
                    "
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.POI_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="new()">
                        {{ 'APP.CONCIERGE.POI_ADD' | translate }}
                    </button>
                </header>
                @if (use_region && (buildings | async)?.length > 1) {
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
                                @for (bld of buildings | async; track bld) {
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
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIManagerComponent, { className: "POIManagerComponent", filePath: "apps/concierge/src/app/poi-manager/poi-manager.component.ts", lineNumber: 98 });
})();

// apps/concierge/src/app/poi-manager/poi-manager.module.ts
var ROUTES = [{ path: "", component: POIManagerComponent }];
var _POIManagerModule = class _POIManagerModule {
};
_POIManagerModule.\u0275fac = function POIManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _POIManagerModule)();
};
_POIManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _POIManagerModule });
_POIManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [POIManagerComponent, RouterModule.forChild(ROUTES)] });
var POIManagerModule = _POIManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [POIManagerComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  POIManagerModule
};
//# sourceMappingURL=poi-manager.module-FCC36BMS.js.map
