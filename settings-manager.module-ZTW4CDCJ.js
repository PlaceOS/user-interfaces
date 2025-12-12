import {
  EmailTemplatesListComponent
} from "./chunk-B6QFI4UB.js";
import {
  UploadButtonComponent
} from "./chunk-RBI7X44X.js";
import {
  EmergencyContactModalComponent,
  RoleManagementModalComponent
} from "./chunk-GD3JBSRR.js";
import {
  PointsAssetsComponent,
  PointsOverviewComponent,
  PointsStateService
} from "./chunk-2354FUBB.js";
import {
  ParkingUsersListComponent
} from "./chunk-CXMUQAOP.js";
import {
  ParkingStateService
} from "./chunk-2HWJEQSK.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-6ZGQ6MJF.js";
import {
  ExplorePointOfInterestModalComponent
} from "./chunk-OYYTELB5.js";
import "./chunk-QVUG6G2J.js";
import {
  SelectMapItemModalComponent
} from "./chunk-CLYK2JGC.js";
import "./chunk-RSB53MCB.js";
import "./chunk-DCC25PBS.js";
import "./chunk-ORXW5ROT.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-2TMQ6H3Q.js";
import {
  ActivatedRoute,
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
  MatPrefix,
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
  RichTextInputComponent,
  Router,
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
  Xu,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  computed,
  createShortURL,
  debounceTime,
  deleteShortURL,
  ec,
  filter,
  first,
  flatten,
  forwardRef,
  generateQRCode,
  getInvalidFields,
  getShortUrlQRCode,
  i18n,
  inject,
  map,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  queryShortURLs,
  randomString,
  saveShortURL,
  setClassMetadata,
  settingSignal,
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
  ɵɵpureFunction3,
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
} from "./chunk-B2WI2KLR.js";

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
]), \u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [["file_input", ""], ["matRipple", "", 1, "relative", "h-48", "w-full", "rounded-xl", "bg-base-200"], ["type", "file", 1, "absolute", "inset-0", "z-10", "cursor-pointer", "opacity-0", 3, "change"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "rounded-xl", "border-2", "border-dashed", "border-base-300"], ["auth", "", "alt", "Image", 1, "h-full", "w-full", "object-contain", 3, "source"], ["icon", "", "matRipple", "", "matTooltip", "Clear Image", "matTooltipPosition", "left", 1, "absolute", "right-2", "top-2", "z-20", "rounded-full", "border", "border-base-300", "bg-base-100"], [1, "absolute", "left-2", "top-1/2", "z-20", "-translate-y-1/2", "rounded-full", "border", "border-base-300", "bg-base-100"], ["icon", "", "matRipple", "", "matTooltip", "Copy Image URL", "matTooltipPosition", "right", 3, "click"], [1, "mb-2", "text-lg", "font-medium"], [1, "mb-4", "opacity-60"], ["btn", "", 1, "inverse", "bg-base-100"], [1, "mr-2", "text-2xl"], [1, "pr-2"]], template: function ImageFieldComponent_Template(rf, ctx) {
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
        <button matRipple class="relative h-48 w-full rounded-xl bg-base-200">
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
                    class="absolute right-2 top-2 z-20 rounded-full border border-base-300 bg-base-100"
                >
                    <icon>close</icon>
                </button>
                <div
                    class="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-base-300 bg-base-100"
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
                    class="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-base-300"
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
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ location: [$event, ctx_r1.form.value.location[1]] }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-form-field", 30)(4, "input", 32);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Conditional_24_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ location: [ctx_r1.form.value.location[0], $event] }));
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
    const old_metadata = await Xu(this._org.organisation.id, "points-of-interest").toPromise();
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
    const resp = await ec(this._org.organisation.id, {
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
_POIModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIModalComponent, selectors: [["poi-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 44, vars: 43, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], ["formControlName", "image", 1, "mb-4!", "block"], [1, "flex", "flex-col"], ["for", "location"], ["appearance", "outline"], ["placeholder", "Location Type", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "map_id"], ["value", "coordinates"], [1, "flex", "items-center", "space-x-2", "pb-2"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-4", "pt-2"], ["formControlName", "can_search", 1, "flex-1", 3, "name"], ["for", "media", 1, "mt-4"], [1, "flex", "items-center", "space-x-2", "pt-2"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "formControlName", "media_url", 3, "placeholder"], [3, "ngModelChange", "ngModel", "ngModelOptions", "types"], ["for", "extra-details", 1, "mt-4"], [1, "space-y-2"], ["btn", "", "matRipple", "", 1, "mb-4", "mt-2", "w-full", 3, "click"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "building"], ["placeholder", "Select Building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["for", "level"], ["formControlName", "level_id", "placeholder", "Select Level"], ["matInput", "", "name", "location", "placeholder", "Location", "formControlName", "location"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "border", "border-secondary", "text-secondary", 3, "click", "matTooltip"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "name", "latitude", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "name", "longitude", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "placeholder", "Label", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "placeholder", "Content", 3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function POIModalComponent_Template(rf, ctx) {
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
  UploadButtonComponent
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
                                class="h-12 w-12 rounded-sm border border-secondary text-secondary"
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
                                                $event,
                                                form.value.location[1],
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
                                                form.value.location[0],
                                                $event,
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
                        class="mb-4 mt-2 w-full"
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
      UploadButtonComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIModalComponent, { className: "POIModalComponent", filePath: "apps/concierge/src/app/poi-manager/poi-modal.component.ts", lineNumber: 291 });
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
    ]).pipe(switchMap(() => Xu(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), map((_) => {
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
    const old_metadata = await Xu(this._org.organisation.id, "points-of-interest").toPromise();
    const metadata = old_metadata.details || {};
    for (const lvl in metadata) {
      if (metadata[lvl])
        metadata[lvl] = metadata[lvl].filter((_) => _.id !== poi.id);
    }
    await ec(this._org.organisation.id, {
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
_POIListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIListComponent, selectors: [["poi-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 29, consts: [["level_template", ""], ["bool_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], ["print_content", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "block", "min-w-3xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-12", "w-full"], [1, "p-4"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "bg-success", "text-2xl", "text-success-content"], [1, "mx-auto", "flex", "w-full", "justify-end", "space-x-2", "px-4", "py-2"], [3, "matTooltip"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content", "data"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "disabled", "data", "content"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-red-500", "flex", "items-center", "space-x-2"], [1, "text-error"], [1, "rounded-sm", "bg-base-100", "py-2", "shadow-sm"], ["printable", "", 1, "", 3, "content"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", 3, "href"], [1, "mx-auto", "w-48", 3, "src"], [1, "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded-sm", "bg-base-200", "p-2", "text-center", "font-mono", "text-sm"]], template: function POIListComponent_Template(rf, ctx) {
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
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm bg-success text-2xl text-success-content"
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
                    <div class="rounded-sm bg-base-100 py-2 shadow-sm">
                        <div class="" printable [content]="print_content">
                            <ng-template #print_content>
                                <a
                                    [href]="qr?.link | safe: 'url'"
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                                >
                                    <img
                                        class="mx-auto w-48"
                                        [src]="qr?.image | safe: 'resource'"
                                    />
                                </a>
                                <div
                                    class="mx-4 mt-2 w-[calc(100%-2rem)] rounded-sm bg-base-200 p-2 text-center font-mono text-sm"
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
                        <div class="text-red-500 flex items-center space-x-2">
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

// apps/concierge/src/app/staff/emergency-contacts-list.component.ts
var _c04 = () => [];
var _c13 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c22 = (a0, a1) => ({ key: "roles", name: a0, content: a1, sortable: false });
var _c32 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c42 = (a0, a1, a2) => [a0, a1, a2];
var _forTrack0 = ($index, $item) => $item + $index;
function EmergencyContactsListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("value", role_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r2, " ");
  }
}
function EmergencyContactsListComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function EmergencyContactsListComponent_ng_template_28_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyToClipboard(row_r4.email));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.email, " ");
  }
}
function EmergencyContactsListComponent_ng_template_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r6, " ");
  }
}
function EmergencyContactsListComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, EmergencyContactsListComponent_ng_template_30_For_2_Template, 2, 1, "span", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r7);
  }
}
function EmergencyContactsListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function EmergencyContactsListComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editContact(row_r9));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function EmergencyContactsListComponent_ng_template_32_Template_button_click_5_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeContact(row_r9));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.CONTACTS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.CONTACTS_REMOVE"));
  }
}
var _EmergencyContactsListComponent = class _EmergencyContactsListComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._clipboard = inject(Clipboard);
    this._change = new BehaviorSubject(0);
    this.search = "";
    this.role_filter = new BehaviorSubject("");
    this.data = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => Xu(bld.id, "emergency_contacts")), map(({ details }) => details || { roles: [], contacts: [] }), shareReplay(1));
    this.roles = this.data.pipe(map((_) => _?.roles || []));
    this.contacts = this.data.pipe(map((_) => _?.contacts || []));
    this.filtered_contacts = combineLatest([
      this.contacts,
      this.role_filter
    ]).pipe(map(([list, role]) => list.filter((_) => !role || _.roles.includes(role))));
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("User's email copied to clipboard.");
    };
  }
  manageRoles() {
    const ref = this._dialog.open(RoleManagementModalComponent, {});
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  editContact(contact) {
    const ref = this._dialog.open(EmergencyContactModalComponent, {
      data: contact
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  async removeContact(contact) {
    const result = await openConfirmModal({
      title: "Remove Emergency Contact",
      content: `Are you sure you want to remove ${contact.name} from the emergency contacts?`,
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading("Removing contact...");
    const data = await nextValueFrom(this.data);
    const new_contacts = (data?.contacts || []).filter((_) => _.id !== contact.id);
    await ec(this._org.building.id, {
      name: "emergency_contacts",
      description: "Emergency Contacts",
      details: { roles: data.roles, contacts: new_contacts }
    }).toPromise();
    result.close();
    this._change.next(Date.now());
    notifySuccess("Successfully removed emergency contact.");
  }
};
_EmergencyContactsListComponent.\u0275fac = function EmergencyContactsListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmergencyContactsListComponent)();
};
_EmergencyContactsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactsListComponent, selectors: [["emergency-contacts-list"]], decls: 34, vars: 40, consts: [["person_template", ""], ["roles_template", ""], ["actions_template", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "sticky", "left-0", "flex", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["appearance", "outline", 1, "no-subscript"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], [3, "value"], [1, "w-px", "flex-1"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], [1, "block", "min-w-[52rem]", "text-sm", 3, "data", "filter", "empty_message", "columns", "sortable"], [1, "h-12", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "flex-wrap", "p-2"], [1, "m-1", "rounded-2xl", "bg-info", "px-2", "py-1", "font-mono", "text-xs", "text-info-content"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function EmergencyContactsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "div", 5)(3, "mat-form-field", 6)(4, "icon", 7);
    \u0275\u0275text(5, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 8);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactsListComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 9)(9, "mat-select", 10);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("ngModelChange", function EmergencyContactsListComponent_Template_mat_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.role_filter.next($event));
    });
    \u0275\u0275elementStart(11, "mat-option", 11);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, EmergencyContactsListComponent_For_15_Template, 2, 2, "mat-option", 12, _forTrack0);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 13);
    \u0275\u0275elementStart(18, "div", 14)(19, "button", 15);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("click", function EmergencyContactsListComponent_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.manageRoles());
    });
    \u0275\u0275elementStart(21, "icon");
    \u0275\u0275text(22, "list_alt");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(23, "simple-table", 16);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275element(27, "div", 17);
    \u0275\u0275template(28, EmergencyContactsListComponent_ng_template_28_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(30, EmergencyContactsListComponent_ng_template_30_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(32, EmergencyContactsListComponent_ng_template_32_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const person_template_r10 = \u0275\u0275reference(29);
    const roles_template_r11 = \u0275\u0275reference(31);
    const actions_template_r12 = \u0275\u0275reference(33);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 11, "APP.CONCIERGE.CONTACTS_FILTER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.role_filter.getValue())("placeholder", \u0275\u0275pipeBind1(10, 13, "APP.CONCIERGE.CONTACTS_ROLES_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "APP.CONCIERGE.CONTACTS_ROLES_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(16, 17, ctx.roles) || \u0275\u0275pureFunction0(27, _c04));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(20, 19, "APP.CONCIERGE.CONTACTS_ROLES_MANAGE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx.filtered_contacts)("filter", ctx.search)("empty_message", \u0275\u0275pipeBind1(24, 21, ctx.search ? "APP.CONCIERGE.CONTACTS_SEARCH_EMPTY" : "APP.CONCIERGE.CONTACTS_EMPTY"))("columns", \u0275\u0275pureFunction3(36, _c42, \u0275\u0275pureFunction2(28, _c13, \u0275\u0275pipeBind1(25, 23, "COMMON.PERSON"), person_template_r10), \u0275\u0275pureFunction2(31, _c22, \u0275\u0275pipeBind1(26, 25, "APP.CONCIERGE.CONTACTS_ROLES"), roles_template_r11), \u0275\u0275pureFunction1(34, _c32, actions_template_r12)))("sortable", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  SimpleTableComponent,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatInputModule,
  MatInput,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=emergency-contacts-list.component.css.map */"] });
var EmergencyContactsListComponent = _EmergencyContactsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmergencyContactsListComponent, [{
    type: Component,
    args: [{ selector: "emergency-contacts-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <section class="sticky left-0 flex flex-col">
                <div class="mb-2 flex items-center justify-between space-x-2">
                    <mat-form-field
                        class="no-subscript flex-1"
                        appearance="outline"
                    >
                        <icon class="text-2xl" matPrefix> search </icon>
                        <input
                            matInput
                            [(ngModel)]="search"
                            [placeholder]="
                                'APP.CONCIERGE.CONTACTS_FILTER' | translate
                            "
                        />
                    </mat-form-field>
                    <mat-form-field class="no-subscript" appearance="outline">
                        <mat-select
                            [ngModel]="role_filter.getValue()"
                            (ngModelChange)="role_filter.next($event)"
                            [placeholder]="
                                'APP.CONCIERGE.CONTACTS_ROLES_ALL' | translate
                            "
                        >
                            <mat-option value="">{{
                                'APP.CONCIERGE.CONTACTS_ROLES_ALL' | translate
                            }}</mat-option>
                            @for (
                                role of (roles | async) || [];
                                track role + $index
                            ) {
                                <mat-option [value]="role">
                                    {{ role }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="w-px flex-1"></div>
                    <div class="flex items-center space-x-2">
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            [matTooltip]="
                                'APP.CONCIERGE.CONTACTS_ROLES_MANAGE'
                                    | translate
                            "
                            (click)="manageRoles()"
                        >
                            <icon>list_alt</icon>
                        </button>
                    </div>
                </div>
            </section>
            <simple-table
                class="block min-w-[52rem] text-sm"
                [data]="filtered_contacts"
                [filter]="search"
                [empty_message]="
                    (search
                        ? 'APP.CONCIERGE.CONTACTS_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.CONTACTS_EMPTY'
                    ) | translate
                "
                [columns]="[
                    {
                        key: 'name',
                        name: 'COMMON.PERSON' | translate,
                        content: person_template,
                    },
                    {
                        key: 'roles',
                        name: 'APP.CONCIERGE.CONTACTS_ROLES' | translate,
                        content: roles_template,
                        sortable: false,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: actions_template,
                        size: '6rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
            <ng-template #person_template let-row="row">
                <button
                    class="px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.email)"
                >
                    <div class="">{{ row.name }}</div>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.email }}
                    </div>
                </button>
            </ng-template>
            <ng-template #roles_template let-data="data">
                <div class="flex flex-wrap p-2">
                    @for (role of data; track role) {
                        <span
                            class="m-1 rounded-2xl bg-info px-2 py-1 font-mono text-xs text-info-content"
                        >
                            {{ role }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="flex w-full items-center justify-end space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        [matTooltip]="'APP.CONCIERGE.CONTACTS_EDIT' | translate"
                        (click)="editContact(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="text-error"
                        (click)="removeContact(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.CONTACTS_REMOVE' | translate
                        "
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      IconComponent,
      MatTooltipModule,
      SimpleTableComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      FormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/staff/emergency-contacts-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=emergency-contacts-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactsListComponent, { className: "EmergencyContactsListComponent", filePath: "apps/concierge/src/app/staff/emergency-contacts-list.component.ts", lineNumber: 189 });
})();

// apps/concierge/src/app/url-management/url-modal.component.ts
function ShortUrlModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.NAME"));
  }
}
function ShortUrlModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 8);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.URLS_URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 4, "APP.CONCIERGE.URLS_URI"));
  }
}
function ShortUrlModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "rich-text-input", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.DESCRIPTION"), " ");
  }
}
function ShortUrlModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "settings-toggle", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.URLS_ENABLED"));
  }
}
var _ShortUrlModalComponent = class _ShortUrlModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = false;
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      name: new FormControl(this._data?.name || "", [Validators.required]),
      description: new FormControl(this._data?.description || "", []),
      uri: new FormControl(this._data?.uri || "", [Validators.required]),
      enabled: new FormControl(this._data?.enabled ?? true, [])
      // valid_from: new FormControl(
      //     this._data?.valid_from || startOfDay(Date.now()).valueOf(),
      //     []
      // ),
      // valid_to: new FormControl(
      //     this._data?.valid_to ||
      //         addYears(startOfDay(Date.now()).valueOf(), 10),
      //     []
      // ),
    });
  }
  async save() {
    if (!this.form.valid) {
      return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
    }
    const data = this.form.getRawValue();
    this.loading = true;
    const resp = await saveShortURL(data).toPromise().catch((e) => notifyError(`Error saving Short URL: ${e.message}`));
    if (resp.id)
      this._dialog_ref.close(resp);
    this.loading = false;
  }
};
_ShortUrlModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ShortUrlModalComponent_BaseFactory;
  return function ShortUrlModalComponent_Factory(__ngFactoryType__) {
    return (\u0275ShortUrlModalComponent_BaseFactory || (\u0275ShortUrlModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ShortUrlModalComponent)))(__ngFactoryType__ || _ShortUrlModalComponent);
  };
})();
_ShortUrlModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShortUrlModalComponent, selectors: [["short-url-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 11, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], [1, "item-center", "flex", "space-x-4", "py-4"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], ["for", "uri"], ["matInput", "", "name", "uri", "formControlName", "uri", 3, "placeholder"], ["for", "description"], ["name", "description", "formControlName", "description", "placeholder", "URL description..."], ["formControlName", "enabled", 1, "flex-1", 3, "name"], [1, "flex-1"]], template: function ShortUrlModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function ShortUrlModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(3, "form", 1);
    \u0275\u0275conditionalCreate(4, ShortUrlModalComponent_Conditional_4_Template, 8, 3, "div", 2);
    \u0275\u0275conditionalCreate(5, ShortUrlModalComponent_Conditional_5_Template, 9, 6, "div", 2);
    \u0275\u0275conditionalCreate(6, ShortUrlModalComponent_Conditional_6_Template, 5, 3, "div", 2);
    \u0275\u0275conditionalCreate(7, ShortUrlModalComponent_Conditional_7_Template, 4, 3, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 7, ctx.form.value.id ? "APP.CONCIERGE.URLS_EDIT" : "APP.CONCIERGE.URLS_ADD"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 9, "APP.CONCIERGE.URLS_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.name ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.uri ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.description ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.enabled ? 7 : -1);
  }
}, dependencies: [
  FullscreenModalShellComponent,
  SettingsToggleComponent,
  RichTextInputComponent,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  TranslatePipe,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], encapsulation: 2 });
var ShortUrlModalComponent = _ShortUrlModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShortUrlModalComponent, [{
    type: Component,
    args: [{ selector: "short-url-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.URLS_EDIT'
                    : 'APP.CONCIERGE.URLS_ADD'
                ) | translate
            "
            (confirm)="save()"
            [loading]="loading ? ('APP.CONCIERGE.URLS_SAVING' | translate) : ''"
        >
            <form [formGroup]="form">
                @if (form.controls.name) {
                    <div class="flex flex-col">
                        <label for="name">
                            {{ 'FORM.NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                placeholder="Name"
                                formControlName="name"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.uri) {
                    <div class="flex flex-col">
                        <label for="uri">
                            {{ 'APP.CONCIERGE.URLS_URI' | translate
                            }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="uri"
                                [placeholder]="
                                    'APP.CONCIERGE.URLS_URI' | translate
                                "
                                formControlName="uri"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.description) {
                    <div class="flex flex-col">
                        <label for="description">
                            {{ 'COMMON.DESCRIPTION' | translate }}
                        </label>
                        <rich-text-input
                            name="description"
                            formControlName="description"
                            placeholder="URL description..."
                        ></rich-text-input>
                    </div>
                }
                @if (form.controls.enabled) {
                    <div class="item-center flex space-x-4 py-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="'APP.CONCIERGE.URLS_ENABLED' | translate"
                            formControlName="enabled"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                }
                <!-- <div class="flex flex-col" *ngIf="form.controls.valid_from">
            <label for="uri" >{{ 'APP.CONCIERGE.VALID_FROM' | translate }}</label>
            <a-date-field formControlName="valid_from"></a-date-field>
          </div>
          <div class="flex flex-col" *ngIf="form.controls.valid_to">
            <label for="uri" >
              {{'APP.CONCIERGE.VALID_UNTIL' | translate}}<span>*</span>
            </label>
            <a-date-field
              formControlName="valid_until"
              [from]="form.value.valid_from"
            ></a-date-field>
          </div> -->
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      RichTextInputComponent,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      ReactiveFormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShortUrlModalComponent, { className: "ShortUrlModalComponent", filePath: "apps/concierge/src/app/url-management/url-modal.component.ts", lineNumber: 122 });
})();

// apps/concierge/src/app/url-management/url-management.service.ts
var _UrlManagementService = class _UrlManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.url_list = combineLatest([
      this._org.active_building,
      this._options,
      this._change
    ]).pipe(debounceTime(300), switchMap(([bld, { search }]) => queryShortURLs({ q: search, limit: 1e3 })), shareReplay(1));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editURL(url) {
    const ref = this._dialog.open(ShortUrlModalComponent, {
      data: url
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  async removeURL(url) {
    const ref = await openConfirmModal({
      title: i18n("APP.CONCIERGE.URLS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.URLS_REMOVE_MSG", {
        name: url.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (ref.reason !== "done")
      return ref.close();
    ref.loading(i18n("APP.CONCIERGE.URLS_REMOVE_LOADING"));
    await deleteShortURL(url.id).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.URLS_REMOVE_ERROR", {
        error: e.message || e
      }));
      ref.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.URLS_REMOVE_SUCCESS"));
    ref.close();
    this._change.next(Date.now());
  }
};
_UrlManagementService.\u0275fac = function UrlManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlManagementService)();
};
_UrlManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UrlManagementService, factory: _UrlManagementService.\u0275fac, providedIn: "root" });
var UrlManagementService = _UrlManagementService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/url-management/url-list.component.ts
var _c05 = (a0) => ({ key: "name", name: a0 });
var _c14 = (a0, a1) => ({ key: "uri", name: a0, content: a1, size: "24rem" });
var _c23 = (a0) => ({ key: "user_name", name: a0 });
var _c33 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c43 = (a0) => ({ key: "actions", name: " ", content: a0, size: "7rem", sortable: false });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function UrlListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275property("href", data_r1, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1, " ");
  }
}
function UrlListComponent_ng_template_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"), " ");
  }
}
function UrlListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, UrlListComponent_ng_template_9_Conditional_2_Template, 3, 3, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r2 ? 2 : -1);
  }
}
function UrlListComponent_ng_template_11_ng_template_4_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(3).row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind2(1, 1, ctx_r4.qr_codes()[row_r4.id] || "", "resource"), \u0275\u0275sanitizeUrl);
  }
}
function UrlListComponent_ng_template_11_ng_template_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275conditionalCreate(2, UrlListComponent_ng_template_11_ng_template_4_ng_template_2_Conditional_2_Template, 2, 4, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(2).row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, "/r/" + row_r4.id.split("-")[1], "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.qr_codes()[row_r4.id] ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.name || row_r4.id, " ");
  }
}
function UrlListComponent_ng_template_11_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275template(2, UrlListComponent_ng_template_11_ng_template_4_ng_template_2_Template, 5, 6, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_ng_template_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.print());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const print_content_r7 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", print_content_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.CONCIERGE.URLS_PRINT_QR"), " ");
  }
}
function UrlListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadQrCode(row_r4));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UrlListComponent_ng_template_11_ng_template_4_Template, 7, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 14)(7, "icon");
    \u0275\u0275text(8, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-menu", null, 4)(11, "button", 15);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_11_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.edit(row_r4));
    });
    \u0275\u0275elementStart(12, "div", 16)(13, "icon");
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 15);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(19, "div", 17)(20, "icon", 18);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const qr_menu_r8 = \u0275\u0275reference(5);
    const menu_r9 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("content", qr_menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 4, "APP.CONCIERGE.URLS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 6, "APP.CONCIERGE.URLS_REMOVE"));
  }
}
var _UrlListComponent = class _UrlListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._manager = inject(UrlManagementService);
    this._settings = inject(SettingsService);
    this.features = this._manager.url_list;
    this.edit = (region) => this._manager.editURL(region);
    this.remove = (region) => this._manager.removeURL(region);
    this.qr_codes = signal({});
  }
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  ngOnInit() {
    this.subscription("url_list", this.features.subscribe(async (l) => {
      for (const item of l) {
        await this.loadQrCode(item);
      }
    }));
  }
  async loadQrCode(item) {
    if (this.qr_codes[item.id])
      return;
    const code = await getShortUrlQRCode(item.id);
    this.qr_codes.update((codes) => {
      codes[item.id] = code;
      return codes;
    });
  }
  print() {
    window.print();
  }
};
_UrlListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UrlListComponent_BaseFactory;
  return function UrlListComponent_Factory(__ngFactoryType__) {
    return (\u0275UrlListComponent_BaseFactory || (\u0275UrlListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UrlListComponent)))(__ngFactoryType__ || _UrlListComponent);
  };
})();
_UrlListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlListComponent, selectors: [["short-url-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 29, consts: [["url_template", ""], ["desc_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], ["print_content", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-12", "w-full"], ["link", "", 1, "w-full", "overflow-hidden", "wrap-break-word", "p-4", "text-xs", 3, "href"], [1, "p-4", "text-xs"], [1, "opacity-30"], [1, "mx-auto", "flex", "w-full", "justify-end", "space-x-2", "px-4", "py-2"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-red-500", "flex", "items-center", "space-x-2"], [1, "text-error"], [1, "rounded-sm", "bg-base-100", "py-2", "shadow-sm"], ["printable", "", 1, "", 3, "content"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", 3, "href"], [1, "mx-auto", "w-48", 3, "src"], [1, "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded-sm", "bg-base-200", "p-2", "text-center", "font-mono", "text-sm"]], template: function UrlListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "simple-table", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, UrlListComponent_ng_template_7_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, UrlListComponent_ng_template_9_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, UrlListComponent_ng_template_11_Template, 25, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const url_template_r10 = \u0275\u0275reference(8);
    const desc_template_r11 = \u0275\u0275reference(10);
    const action_template_r12 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.features)("columns", \u0275\u0275pureFunction5(23, _c52, \u0275\u0275pureFunction1(11, _c05, \u0275\u0275pipeBind1(2, 3, "FORM.NAME")), \u0275\u0275pureFunction2(13, _c14, \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.URLS_URI"), url_template_r10), \u0275\u0275pureFunction1(16, _c23, \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.URLS_USER_NAME")), \u0275\u0275pureFunction2(18, _c33, \u0275\u0275pipeBind1(5, 9, "COMMON.DESCRIPTION"), desc_template_r11), \u0275\u0275pureFunction1(21, _c43, action_template_r12)))("sortable", true);
  }
}, dependencies: [
  SimpleTableComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  CustomTooltipComponent,
  SafePipe,
  PrintableComponent
], encapsulation: 2 });
var UrlListComponent = _UrlListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlListComponent, [{
    type: Component,
    args: [{ selector: "short-url-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-5xl text-sm"
                [data]="features"
                empty_message="No Points of Interest found."
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'uri',
                        name: 'APP.CONCIERGE.URLS_URI' | translate,
                        content: url_template,
                        size: '24rem',
                    },
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.URLS_USER_NAME' | translate,
                    },
                    {
                        key: 'description',
                        name: 'COMMON.DESCRIPTION' | translate,
                        content: desc_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '7rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
        </div>
        <ng-template #url_template let-data="data">
            <a
                link
                [href]="data"
                class="w-full overflow-hidden wrap-break-word p-4 text-xs"
            >
                {{ data }}
            </a>
        </ng-template>
        <ng-template #desc_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex w-full justify-end space-x-2 px-4 py-2">
                <button
                    icon
                    matRipple
                    customTooltip
                    [content]="qr_menu"
                    (click)="loadQrCode(row)"
                >
                    <icon>qr_code</icon>
                </button>
                <ng-template #qr_menu>
                    <div class="rounded-sm bg-base-100 py-2 shadow-sm">
                        <div class="" printable [content]="print_content">
                            <ng-template #print_content>
                                <a
                                    [href]="
                                        '/r/' + row.id.split('-')[1]
                                            | safe: 'url'
                                    "
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                                >
                                    @if (qr_codes()[row.id]) {
                                        <img
                                            class="mx-auto w-48"
                                            [src]="
                                                qr_codes()[row.id] || ''
                                                    | safe: 'resource'
                                            "
                                        />
                                    }
                                </a>
                                <div
                                    class="mx-4 mt-2 w-[calc(100%-2rem)] rounded-sm bg-base-200 p-2 text-center font-mono text-sm"
                                >
                                    {{ row.name || row.id }}
                                </div>
                            </ng-template>
                        </div>
                        <button
                            btn
                            matRipple
                            class="mx-4 my-2 w-[calc(100%-2rem)]"
                            (click)="print()"
                        >
                            {{ 'APP.CONCIERGE.URLS_PRINT_QR' | translate }}
                        </button>
                    </div>
                </ng-template>
                <button btn icon matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="edit(row)">
                        <div class="flex items-center space-x-2">
                            <icon>edit</icon>
                            <span>{{
                                'APP.CONCIERGE.URLS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="text-red-500 flex items-center space-x-2">
                            <icon class="text-error">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.URLS_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      MatMenuModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      CustomTooltipComponent,
      SafePipe,
      PrintableComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlListComponent, { className: "UrlListComponent", filePath: "apps/concierge/src/app/url-management/url-list.component.ts", lineNumber: 163 });
})();

// apps/concierge/src/app/settings-manager/settings-manager.component.ts
var _c06 = ["app-settings-manager", ""];
function SettingsManagerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SettingsManagerComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItem());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "icon");
    \u0275\u0275text(3, "shadow_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, ctx_r1.addButtonText()), " ");
  }
}
function SettingsManagerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_EMERGENCY_CONTACTS"));
  }
}
function SettingsManagerComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_EMAIL_TEMPLATES"));
  }
}
function SettingsManagerComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_URL_MANAGEMENT"));
  }
}
function SettingsManagerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_POI"));
  }
}
function SettingsManagerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_PARKING_USERS"));
  }
}
function SettingsManagerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_POINTS_OVERVIEW"));
  }
}
function SettingsManagerComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_POINTS_ASSETS"));
  }
}
function SettingsManagerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "emergency-contacts-list", 9);
  }
}
function SettingsManagerComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "email-templates-list", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("hide_header", true);
  }
}
function SettingsManagerComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-form-field", 15)(2, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsManagerComponent_Conditional_21_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.url_search_term, $event) || (ctx_r1.url_search_term = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SettingsManagerComponent_Conditional_21_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateUrlSearch($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(3, "short-url-list", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.url_search_term);
  }
}
function SettingsManagerComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "poi-list", 9);
  }
}
function SettingsManagerComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-users-list", 9);
  }
}
function SettingsManagerComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "points-overview", 9);
  }
}
function SettingsManagerComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "points-assets", 9);
  }
}
var _SettingsManagerComponent = class _SettingsManagerComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._poi_service = inject(POIManagementService);
    this._url_service = inject(UrlManagementService);
    this._points_service = inject(PointsStateService);
    this._parking_service = inject(ParkingStateService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.selected_tab = signal(0);
    this.url_search_term = "";
    this._change = new BehaviorSubject(0);
    this.feature_list = settingSignal("features", []);
    this.show_emergency_contacts = computed(() => this.feature_list().includes("emergency-contacts") || this.feature_list().includes("internal-users"));
    this.show_email_templates = computed(() => this.feature_list().includes("email-templates"));
    this.show_url_management = computed(() => this.feature_list().includes("url-management"));
    this.show_poi = computed(() => this.feature_list().includes("points-of-interest"));
    this.show_parking_users = computed(() => this.feature_list().includes("parking"));
    this.show_points_overview = computed(() => this.feature_list().includes("points"));
    this.show_points_assets = computed(() => this.feature_list().includes("points"));
    this.available_tabs = computed(() => {
      const tabs = [];
      if (this.show_emergency_contacts())
        tabs.push({
          name: "emergency-contacts",
          feature: "emergency-contacts"
        });
      if (this.show_email_templates())
        tabs.push({ name: "email-templates", feature: "email-templates" });
      if (this.show_url_management())
        tabs.push({ name: "url-management", feature: "url-management" });
      if (this.show_poi())
        tabs.push({ name: "poi", feature: "poi" });
      if (this.show_parking_users())
        tabs.push({ name: "parking-users", feature: "parking" });
      if (this.show_points_overview())
        tabs.push({ name: "points-overview", feature: "points" });
      if (this.show_points_assets())
        tabs.push({ name: "points-assets", feature: "points" });
      return tabs;
    });
    this.current_tab_name = computed(() => {
      const available = this.available_tabs();
      const index = this.selected_tab();
      return available[index]?.name || "";
    });
    this.TAB_NAMES = [
      "emergency-contacts",
      "email-templates",
      "url-management",
      "poi",
      "parking-users",
      "points-overview",
      "points-assets"
    ];
    this.addButtonText = () => {
      const tab = this.current_tab_name();
      if (tab === "emergency-contacts")
        return "APP.CONCIERGE.CONTACTS_ADD";
      if (tab === "email-templates")
        return "APP.CONCIERGE.EMAIL_TEMPLATES_ADD";
      if (tab === "url-management")
        return "APP.CONCIERGE.URLS_ADD";
      if (tab === "poi")
        return "APP.CONCIERGE.POI_ADD";
      if (tab === "parking-users")
        return "APP.CONCIERGE.PARKING_USER_NEW";
      if (tab === "points-assets")
        return "APP.CONCIERGE.POINTS_ASSETS_ADD";
      return "";
    };
    this.addItem = () => {
      const tab = this.current_tab_name();
      if (tab === "emergency-contacts") {
        const ref = this._dialog.open(EmergencyContactModalComponent, {});
        ref.afterClosed().subscribe(() => this._change.next(Date.now()));
      } else if (tab === "email-templates") {
        this._router.navigate(["/email-templates/manage"]);
      } else if (tab === "url-management") {
        this._url_service.editURL();
      } else if (tab === "poi") {
        this._poi_service.editPointOfInterest();
      } else if (tab === "parking-users") {
        this._parking_service.editUser();
      } else if (tab === "points-assets") {
        this._points_service.newAsset();
      }
    };
  }
  updateUrlSearch(value) {
    this._url_service.setSearchString(value);
  }
  onTabChange(index) {
    this.selected_tab.set(index);
    const available = this.available_tabs();
    if (available[index]) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { tab: available[index].name },
        queryParamsHandling: "merge"
      });
    }
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("tab")) {
        const tab_name = params.get("tab");
        const available = this.available_tabs();
        const tab_index = available.findIndex((t) => t.name === tab_name);
        if (tab_index >= 0) {
          this.selected_tab.set(tab_index);
        }
      }
    }));
  }
};
_SettingsManagerComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SettingsManagerComponent_BaseFactory;
  return function SettingsManagerComponent_Factory(__ngFactoryType__) {
    return (\u0275SettingsManagerComponent_BaseFactory || (\u0275SettingsManagerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SettingsManagerComponent)))(__ngFactoryType__ || _SettingsManagerComponent);
  };
})();
_SettingsManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsManagerComponent, selectors: [["", "app-settings-manager", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c06, decls: 26, vars: 13, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pb-2", "pt-4"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "gap-2"], ["btn", "", "matRipple", "", 1, "w-48"], [1, "mx-8", "mb-4", "overflow-hidden", "rounded-md", "bg-base-200", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "relative", "flex-1"], [1, "relative", "block", "h-full", "w-full"], [1, "relative", "block", "h-full", "w-full", 3, "hide_header"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "mb-4", "flex", "justify-end"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "placeholder", "Search", 3, "ngModelChange", "ngModel"]], template: function SettingsManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275conditionalCreate(9, SettingsManagerComponent_Conditional_9_Template, 7, 3, "button", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-tab-group", 6);
    \u0275\u0275twoWayListener("selectedIndexChange", function SettingsManagerComponent_Template_mat_tab_group_selectedIndexChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selected_tab, $event) || (ctx.selected_tab = $event);
      return $event;
    });
    \u0275\u0275listener("selectedIndexChange", function SettingsManagerComponent_Template_mat_tab_group_selectedIndexChange_10_listener($event) {
      return ctx.onTabChange($event);
    });
    \u0275\u0275conditionalCreate(11, SettingsManagerComponent_Conditional_11_Template, 2, 3, "mat-tab", 7);
    \u0275\u0275conditionalCreate(12, SettingsManagerComponent_Conditional_12_Template, 2, 3, "mat-tab", 7);
    \u0275\u0275conditionalCreate(13, SettingsManagerComponent_Conditional_13_Template, 2, 3, "mat-tab", 7);
    \u0275\u0275conditionalCreate(14, SettingsManagerComponent_Conditional_14_Template, 2, 3, "mat-tab", 7);
    \u0275\u0275conditionalCreate(15, SettingsManagerComponent_Conditional_15_Template, 2, 3, "mat-tab", 7);
    \u0275\u0275conditionalCreate(16, SettingsManagerComponent_Conditional_16_Template, 2, 3, "mat-tab", 7);
    \u0275\u0275conditionalCreate(17, SettingsManagerComponent_Conditional_17_Template, 2, 3, "mat-tab", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 8);
    \u0275\u0275conditionalCreate(19, SettingsManagerComponent_Conditional_19_Template, 1, 0, "emergency-contacts-list", 9)(20, SettingsManagerComponent_Conditional_20_Template, 1, 1, "email-templates-list", 10)(21, SettingsManagerComponent_Conditional_21_Template, 4, 1)(22, SettingsManagerComponent_Conditional_22_Template, 1, 0, "poi-list", 9)(23, SettingsManagerComponent_Conditional_23_Template, 1, 0, "parking-users-list", 9)(24, SettingsManagerComponent_Conditional_24_Template, 1, 0, "points-overview", 9)(25, SettingsManagerComponent_Conditional_25_Template, 1, 0, "points-assets", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, "APP.CONCIERGE.SETTINGS_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.addButtonText() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("selectedIndex", ctx.selected_tab);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_emergency_contacts() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_email_templates() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_url_management() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_poi() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_parking_users() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_points_overview() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_points_assets() ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.current_tab_name() === "emergency-contacts" ? 19 : ctx.current_tab_name() === "email-templates" ? 20 : ctx.current_tab_name() === "url-management" ? 21 : ctx.current_tab_name() === "poi" ? 22 : ctx.current_tab_name() === "parking-users" ? 23 : ctx.current_tab_name() === "points-overview" ? 24 : ctx.current_tab_name() === "points-assets" ? 25 : -1);
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  MatTabsModule,
  MatTab,
  MatTabGroup,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe,
  EmergencyContactsListComponent,
  EmailTemplatesListComponent,
  UrlListComponent,
  POIListComponent,
  ParkingUsersListComponent,
  PointsOverviewComponent,
  PointsAssetsComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=settings-manager.component.css.map */"] });
var SettingsManagerComponent = _SettingsManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-settings-manager]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-2 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.SETTINGS_HEADER' | translate }}
                    </h2>
                    <div class="flex items-center gap-2">
                        @if (addButtonText()) {
                            <button
                                btn
                                matRipple
                                (click)="addItem()"
                                class="w-48"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>shadow_add</icon>
                                    <div class="pr-2">
                                        {{ addButtonText() | translate }}
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                </header>
                <mat-tab-group
                    class="mx-8 mb-4 overflow-hidden rounded-md bg-base-200"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    @if (show_emergency_contacts()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_EMERGENCY_CONTACTS'
                                    | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_email_templates()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_EMAIL_TEMPLATES' | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_url_management()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_URL_MANAGEMENT' | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_poi()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_POI' | translate"
                        ></mat-tab>
                    }
                    @if (show_parking_users()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_PARKING_USERS' | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_points_overview()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_POINTS_OVERVIEW' | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_points_assets()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_POINTS_ASSETS' | translate
                            "
                        ></mat-tab>
                    }
                </mat-tab-group>
                <div class="relative flex-1">
                    @if (current_tab_name() === 'emergency-contacts') {
                        <emergency-contacts-list
                            class="relative block h-full w-full"
                        ></emergency-contacts-list>
                    } @else if (current_tab_name() === 'email-templates') {
                        <email-templates-list
                            class="relative block h-full w-full"
                            [hide_header]="true"
                        ></email-templates-list>
                    } @else if (current_tab_name() === 'url-management') {
                        <div class="mb-4 flex justify-end">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <input
                                    matInput
                                    placeholder="Search"
                                    [(ngModel)]="url_search_term"
                                    (ngModelChange)="updateUrlSearch($event)"
                                />
                            </mat-form-field>
                        </div>
                        <short-url-list
                            class="relative block h-full w-full"
                        ></short-url-list>
                    } @else if (current_tab_name() === 'poi') {
                        <poi-list
                            class="relative block h-full w-full"
                        ></poi-list>
                    } @else if (current_tab_name() === 'parking-users') {
                        <parking-users-list
                            class="relative block h-full w-full"
                        ></parking-users-list>
                    } @else if (current_tab_name() === 'points-overview') {
                        <points-overview
                            class="relative block h-full w-full"
                        ></points-overview>
                    } @else if (current_tab_name() === 'points-assets') {
                        <points-assets
                            class="relative block h-full w-full"
                        ></points-assets>
                    }
                </div>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatTabsModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      EmergencyContactsListComponent,
      EmailTemplatesListComponent,
      UrlListComponent,
      POIListComponent,
      ParkingUsersListComponent,
      PointsOverviewComponent,
      PointsAssetsComponent,
      FormsModule,
      MatFormFieldModule,
      MatInputModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/settings-manager/settings-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=settings-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsManagerComponent, { className: "SettingsManagerComponent", filePath: "apps/concierge/src/app/settings-manager/settings-manager.component.ts", lineNumber: 195 });
})();

// apps/concierge/src/app/settings-manager/settings-manager.module.ts
var ROUTES = [{ path: "", component: SettingsManagerComponent }];
var _SettingsManagerModule = class _SettingsManagerModule {
};
_SettingsManagerModule.\u0275fac = function SettingsManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsManagerModule)();
};
_SettingsManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsManagerModule });
_SettingsManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SettingsManagerComponent, RouterModule.forChild(ROUTES)] });
var SettingsManagerModule = _SettingsManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [SettingsManagerComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  SettingsManagerModule
};
//# sourceMappingURL=settings-manager.module-ZTW4CDCJ.js.map
