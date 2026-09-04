import {
  AttachedResourceConfigModalComponent,
  AvailableRoomsStateModalComponent
} from "./chunk-YRVFEFBY.js";
import {
  queryAllPages
} from "./chunk-D5OO3KR4.js";
import {
  MatTab,
  MatTabGroup,
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-5PPBSRCE.js";
import {
  SpacesService
} from "./chunk-YIZUEGHO.js";
import {
  ImageCarouselComponent
} from "./chunk-BA2RXJGK.js";
import {
  DateOptionsComponent
} from "./chunk-GH4WJIZR.js";
import "./chunk-RQJ2HPA2.js";
import {
  DurationPipe
} from "./chunk-IHUFSENJ.js";
import {
  MapPinComponent
} from "./chunk-SHFIF4FW.js";
import {
  LevelPipe
} from "./chunk-GI6Z7UPX.js";
import {
  generateAssetCategoryForm,
  generateAssetForm,
  generateAssetGroupForm,
  generateAssetPurchaseOrderForm
} from "./chunk-UJVYPB2L.js";
import {
  DateFieldComponent
} from "./chunk-243AAF66.js";
import {
  InteractiveMapComponent
} from "./chunk-EMWNKQPW.js";
import "./chunk-KSBIYGFK.js";
import "./chunk-ICU7S3PM.js";
import {
  openConfirmModal
} from "./chunk-YPNM255E.js";
import {
  SimpleTableComponent
} from "./chunk-R4CVVDGL.js";
import {
  getGroupsWithAssets,
  queryAssetCategories,
  queryAssetPurchaseOrders,
  queryAssetTypes,
  queryAssets,
  removeAssetRequests,
  saveAsset,
  saveAssetCategory,
  saveAssetPurchaseOrder,
  saveAssetType,
  showGroupFull
} from "./chunk-IKWQ3RHA.js";
import "./chunk-FZ7QJ6YA.js";
import {
  approveBooking,
  queryBookings,
  rejectBooking,
  updateBooking
} from "./chunk-IZLAPVVI.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AuthenticatedImageDirective,
  FullscreenModalShellComponent,
  ImageListFieldComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  UserAvatarComponent
} from "./chunk-U6R5SHQF.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-PYXGN3JY.js";
import "./chunk-HBHMVNHS.js";
import "./chunk-K3THFXGW.js";
import {
  SpacePipe
} from "./chunk-VYXMHNT5.js";
import "./chunk-PFAJWFTH.js";
import "./chunk-IJS7KRHE.js";
import {
  ActivatedRoute,
  AssetRequest,
  AsyncHandler,
  Booking,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  EventEmitter,
  FormField,
  FormsModule,
  Hl,
  IconComponent,
  Injectable,
  Injector,
  Input,
  MAT_DIALOG_DATA,
  MINUTES,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NumberValueAccessor,
  Ol,
  OrganisationService,
  Output,
  Pipe,
  Rl,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SettingsService,
  TranslatePipe,
  ViewChild,
  Vu,
  Xu,
  _r,
  addMinutes,
  addYears,
  computed,
  debounced,
  effect,
  endOfDay,
  flatten,
  forwardRef,
  getInvalidSignalFields,
  getUnixTime,
  i18n,
  inject,
  input,
  kl,
  linkedSignal,
  nextValueFrom,
  ni,
  notifyError,
  notifySuccess,
  output,
  patchSignalModel,
  ql,
  resource,
  setClassMetadata,
  settingSignal,
  signal,
  startOfDay,
  unique,
  viewChild,
  vl,
  wl,
  yl,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuerySignal
} from "./chunk-KKWVE3W4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/asset-manager/asset-category-form.component.ts
function AssetCategoryFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AssetCategoryFormComponent_Conditional_5_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275property("value", category_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r1.name, " ");
  }
}
function AssetCategoryFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 6)(2, "label", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 8);
    \u0275\u0275element(8, "input", 9);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 6)(14, "label", 7);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 8)(18, "mat-select", 10);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275repeaterCreate(20, AssetCategoryFormComponent_Conditional_5_For_21_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 9, "FORM.NAME"))("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "APP.CONCIERGE.ASSETS_CATEGORY_PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.parent_category_id)("placeholder", \u0275\u0275pipeBind1(19, 15, "APP.CONCIERGE.ASSETS_CATEGORY_PARENT_EMPTY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
function AssetCategoryFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.ASSETS_CATEGORY_SAVING"), " ");
  }
}
function AssetCategoryFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 14);
    \u0275\u0275listener("click", function AssetCategoryFormComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
var AssetCategoryFormComponent = class _AssetCategoryFormComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this._dialog_ref = inject(MatDialogRef, { optional: true });
    this._router = inject(Router);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_ref = generateAssetCategoryForm();
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this.categories_list = this._state.categories;
    this.categories = computed(
      () => this.categories_list().filter((_) => _.parent_category_id !== this.model().id),
      ...ngDevMode ? [{ debugName: "categories" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const _data = inject(MAT_DIALOG_DATA, { optional: true });
    if (_data?.category)
      patchSignalModel(this.model, _data.category);
  }
  async save() {
    if (!this.form().valid())
      return;
    this.loading.set(true);
    if (this._dialog_ref)
      this._dialog_ref.disableClose = true;
    const data = this.model();
    const item = await saveAssetCategory(data).catch((e) => {
      this.loading.set(false);
      if (this._dialog_ref)
        this._dialog_ref.disableClose = false;
      notifyError(i18n("APP.CONCIERGE.ASSETS_CATEGORY_SAVE_ERROR", {
        error: e.message
      }));
      throw e;
    });
    this.form().reset();
    this.loading.set(false);
    if (this._dialog_ref) {
      this._dialog_ref.close(item);
    } else {
      await this._router.navigate(["/book/assets/list/items"]);
    }
  }
  static {
    this.\u0275fac = function AssetCategoryFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetCategoryFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetCategoryFormComponent, selectors: [["asset-category-form"]], decls: 8, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-1/2", "w-[24rem]", "max-w-[80vw]", "flex-1", "overflow-auto", "p-2"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "border-base-200", "flex", "justify-end", "space-x-2", "border-t", "p-2"], [1, "flex", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], [3, "formField", "placeholder"], [3, "value"], [3, "diameter"], [1, "mt-4"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function AssetCategoryFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, AssetCategoryFormComponent_Conditional_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AssetCategoryFormComponent_Conditional_5_Template, 22, 17, "main", 3)(6, AssetCategoryFormComponent_Conditional_6_Template, 5, 4, "div", 4);
        \u0275\u0275conditionalCreate(7, AssetCategoryFormComponent_Conditional_7_Template, 4, 3, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.model().id ? "APP.CONCIERGE.ASSETS_CATEGORY_EDIT" : "APP.CONCIERGE.ASSETS_CATEGORY_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormField,
      MatInputModule,
      MatInput,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetCategoryFormComponent, [{
    type: Component,
    args: [{ selector: "asset-category-form", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (model().id
                        ? 'APP.CONCIERGE.ASSETS_CATEGORY_EDIT'
                        : 'APP.CONCIERGE.ASSETS_CATEGORY_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="h-1/2 w-[24rem] max-w-[80vw] flex-1 overflow-auto p-2">
                <div class="flex flex-col space-y-2">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_CATEGORY_PARENT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.parent_category_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_CATEGORY_PARENT_EMPTY'
                                    | translate
                            "
                        >
                            @for (category of categories(); track category) {
                                <mat-option [value]="category.id">
                                    {{ category.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            </main>
        } @else {
            <div class="flex flex-col items-center justify-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="mt-4">
                    {{ 'APP.CONCIERGE.ASSETS_CATEGORY_SAVING' | translate }}
                </p>
            </div>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 flex justify-end space-x-2 border-t p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatDialogModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      FormField,
      MatInputModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetCategoryFormComponent, { className: "AssetCategoryFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-category-form.component.ts", lineNumber: 112 });
})();

// apps/concierge/src/app/asset-manager/asset-category-management-modal.component.ts
function AssetCategoryManagementModalComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function AssetCategoryManagementModalComponent_For_9_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const category_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(category_r2));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function AssetCategoryManagementModalComponent_For_9_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const category_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(category_r2));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", category_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 3, "APP.CONCIERGE.ASSETS_CATEGORY_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.ASSETS_CATEGORY_REMOVE"));
  }
}
function AssetCategoryManagementModalComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetCategoryManagementModalComponent_For_9_Conditional_0_Template, 11, 7, "div", 7);
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275conditional(category_r2.id ? 0 : -1);
  }
}
var AssetCategoryManagementModalComponent = class _AssetCategoryManagementModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.changed = new EventEmitter();
    this.list = this._data.list;
    this.edit = this._data.edit;
    this.remove = async (category) => {
      await Ol(category.id);
      this.changed.emit();
    };
  }
  static {
    this.\u0275fac = function AssetCategoryManagementModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetCategoryManagementModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetCategoryManagementModalComponent, selectors: [["asset-category-management-modal"]], decls: 16, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-128", "max-h-[65vh]", "min-w-md"], ["btn", "", "matRipple", "", 1, "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "truncate", "pl-2"], [1, "text-2xl"], [1, "hover:bg-base-200:bg-base-300", "border-base-200", "m-2", "flex", "items-center", "space-x-2", "rounded-sm", "border", "p-2"], [1, "flex-1", "truncate", "px-2"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"]], template: function AssetCategoryManagementModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 3);
        \u0275\u0275repeaterCreate(8, AssetCategoryManagementModalComponent_For_9_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275listener("click", function AssetCategoryManagementModalComponent_Template_button_click_10_listener() {
          return ctx.edit();
        });
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "icon", 6);
        \u0275\u0275text(15, "add");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.list());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 4, "APP.CONCIERGE.ASSETS_CATEGORY_NEW"), " ");
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetCategoryManagementModalComponent, [{
    type: Component,
    args: [{ selector: "asset-category-management-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-128 max-h-[65vh] min-w-md">
            @for (category of list(); track category) {
                @if (category.id) {
                    <div
                        class="hover:bg-base-200:bg-base-300 border-base-200 m-2 flex items-center space-x-2 rounded-sm border p-2"
                    >
                        <div class="flex-1 truncate px-2">
                            {{ category.name }}
                        </div>
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.ASSETS_CATEGORY_EDIT' | translate
                            "
                            class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                            (click)="edit(category)"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.ASSETS_CATEGORY_REMOVE'
                                    | translate
                            "
                            class="border-error text-error h-12 w-12 rounded-sm border"
                            (click)="remove(category)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                }
            }
        </main>
        <button
            btn
            matRipple
            class="m-2 flex w-[calc(100%-1rem)] items-center justify-center space-x-2"
            (click)="edit()"
        >
            <div class="truncate pl-2">
                {{ 'APP.CONCIERGE.ASSETS_CATEGORY_NEW' | translate }}
            </div>
            <icon class="text-2xl">add</icon>
        </button>
    `, imports: [
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatTooltipModule,
      MatDialogModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetCategoryManagementModalComponent, { className: "AssetCategoryManagementModalComponent", filePath: "apps/concierge/src/app/asset-manager/asset-category-management-modal.component.ts", lineNumber: 83 });
})();

// apps/concierge/src/app/asset-manager/asset-manager-state.service.ts
var AssetManagerStateService = class _AssetManagerStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._spaces = inject(SpacesService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._options = signal(
      { view: "grid" },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._injector = inject(Injector);
    this._poll = signal(
      0,
      ...ngDevMode ? [{ debugName: "_poll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._extra_assets = signal(
      [],
      ...ngDevMode ? [{ debugName: "_extra_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_ref = generateAssetForm(void 0, this._injector);
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._loading.asReadonly();
    this.options = this._options.asReadonly();
    this.extra_assets = this._extra_assets.asReadonly();
    this._products = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_products" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        change: this._change(),
        building: this._org.active_building()?.id
      }),
      defaultValue: [],
      loader: async () => {
        this._loading.set(true);
        try {
          const resp = await getGroupsWithAssets({
            zone_id: this._org.building?.id
          }).catch(() => ({ data: [] }));
          return resp.data;
        } finally {
          this._loading.set(false);
        }
      }
    }));
    this.products = this._products.value;
    this._purchase_orders = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_purchase_orders" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._change(),
      defaultValue: [],
      loader: async () => {
        this._loading.set(true);
        try {
          const resp = await queryAssetPurchaseOrders();
          return resp.data;
        } finally {
          this._loading.set(false);
        }
      }
    }));
    this.purchase_orders = this._purchase_orders.value;
    this._request_params = computed(() => ({
      date: this._options().date,
      building: this._org.active_building()?.id,
      region: this._org.active_region()?.id,
      poll: this._poll(),
      change: this._change(),
      initialised: this._spaces.initialised()
    }), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_request_params" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.date === b.date && a.building === b.building && a.region === b.region && a.poll === b.poll && a.change === b.change && a.initialised === b.initialised }));
    this._request_params_debounced = debounced(this._request_params, 500);
    this._requests = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_requests" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._request_params_debounced.value(),
      defaultValue: [],
      loader: async ({ params }) => {
        const start = startOfDay(params.date || Date.now()).valueOf();
        const end = endOfDay(params.date || Date.now()).valueOf();
        const zones = this._settings.get("app.use_region") ? this._org.buildingsForRegion().map((_) => _.id).join(",") : params.building;
        const list = await queryBookings({
          zones,
          period_start: getUnixTime(start),
          period_end: getUnixTime(end),
          include_parent_bookings: true,
          type: "asset-request"
        }).catch(() => []);
        return list.map((b) => new Booking(__spreadProps(__spreadValues({}, b), {
          extension_data: __spreadProps(__spreadValues({}, b.extension_data), {
            space: this._spaces.find(b.extension_data.space_id)
          })
        }))).filter((b) => {
          const event = b.linked_event || b.linked_bookings[0] || b.linked_parent_booking;
          if (!event)
            return false;
          const request = new AssetRequest(__spreadValues({}, b.extension_data?.request));
          const event_start = event.date || event.event_start * 1e3 || event.booking_start * 1e3 || start;
          request._time = event_start;
          const event_end = event.date_end || event.event_end * 1e3 || event.booking_end * 1e3 || end;
          return request?.deliver_at >= start && request?.deliver_at < event_end;
        });
      }
    }));
    this.requests = this._requests.value;
    this.filtered_requests = computed(
      () => {
        const list = this.requests();
        const search = (this._options().search || "").toLowerCase();
        return search ? list.filter((i) => i.user_name.toLowerCase().includes(search) || i.title.toLowerCase().includes(search) || i.extension_data.location_name?.toLowerCase().includes(search) || i.extension_data.assets?.find((_) => _.name.toLowerCase().includes(search)) || i.status.includes(search) || i.extension_data.tracking?.includes(search)) : list;
      },
      ...ngDevMode ? [{ debugName: "filtered_requests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._categories = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_categories" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._change(),
      defaultValue: [],
      loader: async () => {
        const list = await queryAssetCategories();
        return [
          new _r({ id: "", name: "Uncategorised" }),
          ...list.data
        ];
      }
    }));
    this.categories = this._categories.value;
    this._active_product = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_active_product" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        active_item: this._options().active_item,
        building: this._org.active_building()?.id,
        change: this._change()
      }),
      defaultValue: null,
      loader: async ({ params }) => {
        if (!params.active_item || !params.building)
          return null;
        return showGroupFull(params.active_item, {
          zone_id: params.building
        });
      }
    }));
    this.active_product = this._active_product.value;
    this.active_product_requests = computed(
      () => {
        const item = this.active_product();
        if (!item)
          return [];
        return this.requests().filter((i) => item.assets.find((asset) => asset.id === i.asset_id)).filter((i) => i.status !== "declined");
      },
      ...ngDevMode ? [{ debugName: "active_product_requests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_products = computed(
      () => {
        const list = this.products();
        const search = this._options().search;
        return search ? list.filter((i) => i.name.toLowerCase().includes(search.toLowerCase())) : list;
      },
      ...ngDevMode ? [{ debugName: "filtered_products" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.product_mapping = computed(
      () => {
        const products = this.filtered_products();
        const category_list = this.categories();
        const map = { _count: products.length };
        const mapped_products = products.map((item) => __spreadProps(__spreadValues({}, item), {
          category_id: category_list.find((_) => _.id === item.category_id) ? item.category_id : ""
        }));
        const categories = unique(mapped_products?.map((i) => i.category_id) || []);
        for (const group of categories) {
          map[group] = mapped_products.filter((i) => i.category_id === group);
        }
        return map;
      },
      ...ngDevMode ? [{ debugName: "product_mapping" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._settings_data = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_settings_data" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        building: this._org.active_building()?.id,
        change: this._change()
      }),
      defaultValue: {},
      loader: async ({ params }) => {
        if (!params.building)
          return {};
        const metadata = await Vu(params.building, "assets-settings").catch(() => ({}));
        return metadata.details || {};
      }
    }));
    this.settings = this._settings_data.value;
    this.availability = computed(
      () => this.settings().disabled_rooms || [],
      ...ngDevMode ? [{ debugName: "availability" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get form() {
    return this._form_ref.form;
  }
  get model() {
    return this._form_ref.model;
  }
  get is_new_ui() {
    return true;
  }
  get base_route() {
    return "/book/assets";
  }
  startPolling(delay = 3 * MINUTES) {
    const poll_delay = Math.max(delay, 3 * MINUTES);
    this.interval("polling", () => this._poll.set(Date.now()), poll_delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("polling");
  }
  resetForm() {
    this._form_ref = generateAssetForm(void 0, this._injector);
  }
  manageCategories() {
    const ref = this._dialog.open(AssetCategoryManagementModalComponent, {
      data: { list: this.categories, edit: (i) => this.editCategory(i) }
    });
    this.subscription("category_modal", ref.componentInstance.changed.subscribe(() => this._change.set(Date.now())));
    ref.afterClosed().subscribe(() => this.unsub("category_modal"));
  }
  async editCategory(category = {}) {
    const ref = this._dialog.open(AssetCategoryFormComponent, {
      data: { category }
    });
    const result = await nextValueFrom(ref.afterClosed());
    if (!result)
      return null;
    this._change.set(Date.now());
    return result;
  }
  setExtraAssets(list) {
    this._extra_assets.set(list);
  }
  /** Update the set view options */
  setOptions(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  postChange() {
    this.timeout("change", () => this._change.set(Date.now()), 1e3);
  }
  async setStatus(item, status) {
    let result = item;
    if (status === "declined") {
      result = await rejectBooking(item.id);
    } else if (status === "approved") {
      result = await approveBooking(item.id);
    }
    this._change.set(Date.now());
    return result;
  }
  async setTracking(item, tracking) {
    const result = await updateBooking(item.id, __spreadProps(__spreadValues({}, item.toJSON()), {
      extension_data: __spreadProps(__spreadValues({}, item.extension_data), { tracking })
    }));
    this._change.set(Date.now());
    return result;
  }
  async deleteActiveProduct() {
    const item = this.active_product();
    if (!item?.id)
      return;
    await Rl(item.id);
    this._change.set(Date.now());
    notifySuccess("Successfully deleted asset");
  }
  async postForm() {
    if (!this.form().valid())
      return;
    const data = __spreadValues({}, this.model());
    const other_data = __spreadValues({}, data);
    const drop_keys = [
      "other_data",
      "id",
      "name",
      "quantity",
      "category",
      "purchase_date",
      "brand",
      "images"
    ];
    for (const key of drop_keys) {
      delete other_data[key];
    }
    data.other_data = ni(other_data, [void 0, null, ""]);
    const asset = await saveAsset(data);
    this._change.set(Date.now());
    notifySuccess(`Successfully ${data.id ? "updated" : "created"} asset`);
    this.resetForm();
    return asset.id;
  }
  async editConfig() {
    const config = await this.getConfig(this._org.building.id);
    const items = this.products();
    const types = unique(flatten(items.map((i) => [i.name])));
    const ref = this._dialog.open(AttachedResourceConfigModalComponent, {
      data: {
        resource_name: "Assets",
        config,
        types,
        require_notes: false
      }
    });
    const details = await Promise.race([
      new Promise((resolve) => {
        const sub = ref.componentInstance.event.subscribe((event) => {
          if (event?.reason !== "done")
            return;
          sub.unsubscribe();
          resolve(event);
        });
      }),
      nextValueFrom(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    this.updateConfig(this._org.building.id, details.metadata).then(() => ref.close(), () => ref.componentInstance.loading.set(false));
  }
  async getConfig(zone_id = this._org.building.id) {
    const rules = (await Vu(zone_id, "assets_config")).details;
    return rules instanceof Array ? rules : [];
  }
  updateConfig(zone_id, config) {
    return Xu(zone_id, {
      id: zone_id,
      name: "assets_config",
      details: config,
      description: `Assets config for ${zone_id}`
    });
  }
  async saveSettings(settings) {
    const old_settings = this.settings();
    const result = await Xu(this._org.building.id, {
      id: this._org.building.id,
      name: "assets-settings",
      details: __spreadValues(__spreadValues({}, old_settings), settings),
      description: `Assets settings for ${this._org.building.id}`
    });
    this._change.set(Date.now());
    return result;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetManagerStateService_BaseFactory;
      return function AssetManagerStateService_Factory(__ngFactoryType__) {
        return (\u0275AssetManagerStateService_BaseFactory || (\u0275AssetManagerStateService_BaseFactory = \u0275\u0275getInheritedFactory(_AssetManagerStateService)))(__ngFactoryType__ || _AssetManagerStateService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetManagerStateService, factory: _AssetManagerStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetManagerStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/asset-manager/asset-bulk-form.component.ts
var _c0 = (a0, a1) => [a0, "view", a1];
var _c1 = (a0) => [a0];
var _c2 = () => ({ standalone: true });
function AssetBulkFormComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275property("value", order_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r1.purchase_order_number || order_r1.invoice_number, " ");
  }
}
function AssetBulkFormComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.ASSETS_ORDER_ID_EMPTY"), " ");
  }
}
var AssetBulkFormComponent = class _AssetBulkFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._form_ref = generateAssetForm();
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this.purchase_orders = this._state.purchase_orders;
    this.product = signal(
      null,
      ...ngDevMode ? [{ debugName: "product" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.count = signal(
      2,
      ...ngDevMode ? [{ debugName: "count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.get("id")) {
        this.loading.set(i18n("APP.CONCIERGE.ASSETS_BULK_ASSET_LOADING"));
        const asset = await yl(params.get("id")).catch(() => null);
        if (!asset) {
          notifyError("Unable to load asset details.");
          this._router.navigate([this.base_route]);
        }
        patchSignalModel(this.model, asset);
        this.loading.set("");
      }
      if (params.get("group_id")) {
        this.loading.set(i18n("APP.CONCIERGE.ASSETS_BULK_PRODUCT_LOADING"));
        const product = await ql(params.get("group_id")).catch(() => null);
        if (!product) {
          notifyError("Unable to load associated product details.");
          this._router.navigate([this.base_route]);
        }
        this.product.set(product);
        patchSignalModel(this.model, { asset_type_id: product.id });
        this.loading.set("");
      }
    }));
    this._state.setOptions({ active_item: null });
    this.count.set(2);
  }
  async save() {
    if (!this.count() || this.count() < 1) {
      return notifyError(i18n("APP.CONCIERGE.ASSETS_BULK_COUNT_ERROR"));
    }
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model)
      }));
    }
    this.loading.set(i18n("APP.CONCIERGE.ASSETS_BULK_SAVING"));
    const data = this.model();
    const list = await kl(new Array(this.count()).fill(__spreadProps(__spreadValues({}, data), {
      zone_id: this._org.building.id
    }))).catch((e) => {
      this.loading.set("");
      notifyError(i18n("APP.CONCIERGE.ASSETS_BULK_COUNT_ERROR", {
        error: e.message
      }));
      throw e;
    });
    this._state.setExtraAssets(list.map((d) => __spreadProps(__spreadValues({}, d), { asset_type_id: this.product()?.id })));
    this.form().reset();
    this._state.postChange();
    notifySuccess(i18n("APP.CONCIERGE.ASSETS_BULK_SAVE_SUCCESS", {
      count: list.length
    }));
    this._router.navigate([this.base_route, "view", this.product()?.id]);
    this.loading.set("");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetBulkFormComponent_BaseFactory;
      return function AssetBulkFormComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetBulkFormComponent_BaseFactory || (\u0275AssetBulkFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetBulkFormComponent)))(__ngFactoryType__ || _AssetBulkFormComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetBulkFormComponent, selectors: [["asset-bulk-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 40, vars: 47, consts: [[3, "confirm", "heading", "close", "loading"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelOptions", "disabled"], [1, "flex", "items-center", "space-x-2"], ["for", "count"], ["matInput", "", "name", "count", "type", "number", 3, "ngModelChange", "ngModel", "placeholder", "ngModelOptions"], ["for", "identifier"], ["matInput", "", 3, "placeholder", "formField"], ["for", "purchase-order-id"], [3, "formField", "placeholder"], [3, "value"], [1, "opacity-60", 3, "disabled"]], template: function AssetBulkFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275listener("confirm", function AssetBulkFormComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(2, "form")(3, "div", 1)(4, "label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-form-field", 3);
        \u0275\u0275element(8, "input", 4);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 1)(11, "label", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-form-field", 3)(15, "input", 7);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275listener("ngModelChange", function AssetBulkFormComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.count.set(+$event || 0);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 1)(18, "label", 8);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 3);
        \u0275\u0275element(22, "input", 9);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(24, "mat-error");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 1)(28, "label", 10);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-form-field", 3)(32, "mat-select", 11);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275repeaterCreate(34, AssetBulkFormComponent_For_35_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(36, AssetBulkFormComponent_Conditional_36_Template, 3, 4, "mat-option", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(37, "mat-error");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 20, ctx.model().id ? "APP.CONCIERGE.ASSETS_BULK_EDIT" : "APP.CONCIERGE.ASSETS_BULK_ADD"))("close", ctx.product() ? \u0275\u0275pureFunction2(40, _c0, ctx.base_route, ctx.product()?.id) : \u0275\u0275pureFunction1(43, _c1, ctx.base_route))("loading", ctx.loading());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "APP.CONCIERGE.ASSETS_PRODUCT"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.product()?.name || "No Product")("ngModelOptions", \u0275\u0275pureFunction0(45, _c2))("disabled", true);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 24, "APP.CONCIERGE.ASSETS_BULK_COUNT"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.count())("placeholder", \u0275\u0275pipeBind1(16, 26, "APP.CONCIERGE.ASSETS_BULK_COUNT"))("ngModelOptions", \u0275\u0275pureFunction0(46, _c2));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 28, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 30, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME"))("formField", ctx.form.identifier);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 32, "APP.CONCIERGE.ASSETS_NAME_REQUIRED"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 34, "APP.CONCIERGE.ASSETS_ORDER_ID"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.purchase_order_id)("placeholder", \u0275\u0275pipeBind1(33, 36, "APP.CONCIERGE.ASSETS_ORDER_SELECT"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.purchase_orders());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.purchase_orders().length ? 36 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 38, "APP.CONCIERGE.ASSETS_ORDER_ID_REQUIRED"));
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormField,
      MatInputModule,
      MatInput,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetBulkFormComponent, [{
    type: Component,
    args: [{ selector: "asset-bulk-form", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ASSETS_BULK_EDIT'
                    : 'APP.CONCIERGE.ASSETS_BULK_ADD'
                ) | translate
            "
            [close]="
                product() ? [base_route, 'view', product()?.id] : [base_route]
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_PRODUCT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="product()?.name || 'No Product'"
                            [ngModelOptions]="{ standalone: true }"
                            [disabled]="true"
                        />
                    </mat-form-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="count">{{
                            'APP.CONCIERGE.ASSETS_BULK_COUNT' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [ngModel]="count()"
                                (ngModelChange)="count.set(+$event || 0)"
                                name="count"
                                type="number"
                                [placeholder]="
                                    'APP.CONCIERGE.ASSETS_BULK_COUNT'
                                        | translate
                                "
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="identifier">{{
                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                    | translate
                            "
                            [formField]="form.identifier"
                        />
                        <mat-error>
                            {{
                                'APP.CONCIERGE.ASSETS_NAME_REQUIRED' | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="purchase-order-id">{{
                        'APP.CONCIERGE.ASSETS_ORDER_ID' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.purchase_order_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ORDER_SELECT' | translate
                            "
                        >
                            @for (order of purchase_orders(); track order) {
                                <mat-option [value]="order.id">
                                    {{
                                        order.purchase_order_number ||
                                            order.invoice_number
                                    }}
                                </mat-option>
                            }
                            @if (!purchase_orders().length) {
                                <mat-option
                                    class="opacity-60"
                                    [disabled]="true"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ORDER_ID_EMPTY'
                                            | translate
                                    }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_ORDER_ID_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormField,
      TranslatePipe,
      MatInputModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetBulkFormComponent, { className: "AssetBulkFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-bulk-form.component.ts", lineNumber: 147 });
})();

// apps/concierge/src/app/asset-manager/asset-form.component.ts
var _c02 = (a0, a1) => [a0, "view", a1];
var _c12 = (a0) => [a0];
var _c22 = () => ({ standalone: true });
function AssetFormComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275property("value", order_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r1.purchase_order_number || order_r1.invoice_number, " ");
  }
}
function AssetFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.ASSETS_ORDER_ID_EMPTY"), " ");
  }
}
var AssetFormComponent = class _AssetFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._form_ref = generateAssetForm();
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this.purchase_orders = this._state.purchase_orders;
    this.product = signal(
      null,
      ...ngDevMode ? [{ debugName: "product" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.get("id")) {
        this.loading.set("Loading Asset Details...");
        const asset = await yl(params.get("id")).catch(() => null);
        if (!asset) {
          notifyError("Unable to load asset details.");
          this._router.navigate([this.base_route]);
        }
        patchSignalModel(this.model, asset);
        this.loading.set("");
      }
      if (params.get("group_id")) {
        this.loading.set("Loading Product Details...");
        const product = await ql(params.get("group_id")).catch(() => null);
        if (!product) {
          notifyError("Unable to load associated product details.");
          this._router.navigate([this.base_route]);
        }
        this.product.set(product);
        patchSignalModel(this.model, { asset_type_id: product.id });
        this.loading.set("");
      }
    }));
    this._state.setOptions({ active_item: null });
  }
  async save() {
    if (!this.form().valid()) {
      return notifyError(`Some fields are invalid. [${getInvalidSignalFields(this.form, this.model)}]`);
    }
    this.loading.set("Saving Product...");
    const data = this.model();
    const item = await saveAsset(__spreadProps(__spreadValues({}, data), {
      zone_id: this._org.building.id
    })).catch((e) => {
      this.loading.set("");
      notifyError(`Error saving asset: ${e.message}`);
      throw e;
    });
    this.form().reset();
    this._state.postChange();
    this._state.setExtraAssets([item].map((d) => __spreadProps(__spreadValues({}, d), { asset_type_id: this.product()?.id })));
    notifySuccess("Asset saved successfully.");
    this._router.navigate([this.base_route, "view", this.product()?.id]);
    this.loading.set("");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetFormComponent_BaseFactory;
      return function AssetFormComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetFormComponent_BaseFactory || (\u0275AssetFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetFormComponent)))(__ngFactoryType__ || _AssetFormComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetFormComponent, selectors: [["asset-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 53, vars: 58, consts: [[3, "confirm", "heading", "close", "loading"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelOptions", "disabled"], [1, "flex", "items-center", "space-x-2"], ["for", "serial-number"], ["matInput", "", 3, "placeholder", "formField"], ["for", "identifier"], ["for", "purchase-order-id"], [3, "formField", "placeholder"], [3, "value"], [1, "opacity-60", 3, "disabled"]], template: function AssetFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275listener("confirm", function AssetFormComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(2, "form")(3, "div", 1)(4, "label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-form-field", 3);
        \u0275\u0275element(8, "input", 4);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 1)(11, "label", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-form-field", 3);
        \u0275\u0275element(15, "input", 7);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(17, "mat-error");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 1)(21, "label", 8);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-form-field", 3);
        \u0275\u0275element(25, "input", 7);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(27, "mat-error");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 1)(31, "label", 9);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-form-field", 3)(35, "mat-select", 10);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275repeaterCreate(37, AssetFormComponent_For_38_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(39, AssetFormComponent_Conditional_39_Template, 3, 4, "mat-option", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(40, "mat-error");
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 1)(44, "label", 6);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "mat-form-field", 3);
        \u0275\u0275element(48, "input", 7);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(50, "mat-error");
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 24, ctx.model().id ? "APP.CONCIERGE.ASSETS_EDIT" : "APP.CONCIERGE.ASSETS_NEW"))("close", ctx.product() ? \u0275\u0275pureFunction2(52, _c02, ctx.base_route, ctx.product()?.id) : \u0275\u0275pureFunction1(55, _c12, ctx.base_route))("loading", ctx.loading());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 26, "APP.CONCIERGE.ASSETS_PRODUCT"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.product()?.name || "No Product")("ngModelOptions", \u0275\u0275pureFunction0(57, _c22))("disabled", true);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 28, "APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 30, "APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL"))("formField", ctx.form.serial_number);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 32, "APP.CONCIERGE.ASSETS_SERIAL_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 34, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 36, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME"))("formField", ctx.form.identifier);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 38, "APP.CONCIERGE.ASSETS_NAME_REQUIRED"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 40, "APP.CONCIERGE.ASSETS_ORDER_ID"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.purchase_order_id)("placeholder", \u0275\u0275pipeBind1(36, 42, "APP.CONCIERGE.ASSETS_ORDER_SELECT"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.purchase_orders());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.purchase_orders().length ? 39 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 44, "APP.CONCIERGE.ASSETS_ORDER_ID_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 46, "APP.CONCIERGE.ASSETS_BARCODE"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(49, 48, "APP.CONCIERGE.ASSETS_BARCODE"))("formField", ctx.form.barcode);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 50, "APP.CONCIERGE.ASSETS_BARCODE_REQUIRED"));
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      FormField,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetFormComponent, [{
    type: Component,
    args: [{ selector: "asset-form", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ASSETS_EDIT'
                    : 'APP.CONCIERGE.ASSETS_NEW'
                ) | translate
            "
            [close]="
                product() ? [base_route, 'view', product()?.id] : [base_route]
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_PRODUCT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="product()?.name || 'No Product'"
                            [ngModelOptions]="{ standalone: true }"
                            [disabled]="true"
                        />
                    </mat-form-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="serial-number">{{
                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL'
                                        | translate
                                "
                                [formField]="form.serial_number"
                            />
                            <mat-error>{{
                                'APP.CONCIERGE.ASSETS_SERIAL_REQUIRED'
                                    | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="identifier">{{
                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                        | translate
                                "
                                [formField]="form.identifier"
                            />
                            <mat-error>
                                {{
                                    'APP.CONCIERGE.ASSETS_NAME_REQUIRED'
                                        | translate
                                }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="purchase-order-id">{{
                        'APP.CONCIERGE.ASSETS_ORDER_ID' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.purchase_order_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ORDER_SELECT' | translate
                            "
                        >
                            @for (order of purchase_orders(); track order) {
                                <mat-option [value]="order.id">
                                    {{
                                        order.purchase_order_number ||
                                            order.invoice_number
                                    }}
                                </mat-option>
                            }
                            @if (!purchase_orders().length) {
                                <mat-option
                                    class="opacity-60"
                                    [disabled]="true"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ORDER_ID_EMPTY'
                                            | translate
                                    }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_ORDER_ID_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="serial-number">{{
                        'APP.CONCIERGE.ASSETS_BARCODE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_BARCODE' | translate
                            "
                            [formField]="form.barcode"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_BARCODE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      TranslatePipe,
      FormsModule,
      FormField
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetFormComponent, { className: "AssetFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-form.component.ts", lineNumber: 164 });
})();

// apps/concierge/src/app/asset-manager/asset-group-form.component.ts
var _c03 = (a0, a1) => [a0, "view", a1];
var _c13 = (a0) => [a0, "list", "items"];
function AssetGroupFormComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275property("value", category_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r1.name, " ");
  }
}
var AssetGroupFormComponent = class _AssetGroupFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._form_ref = generateAssetGroupForm();
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this.categories_list = this._state.categories;
    this.new_category = signal(
      null,
      ...ngDevMode ? [{ debugName: "new_category" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.categories = computed(
      () => {
        const list = this.categories_list();
        const item = this.new_category();
        return item ? unique([...list, item], "id") : list;
      },
      ...ngDevMode ? [{ debugName: "categories" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_category = signal(
      "",
      ...ngDevMode ? [{ debugName: "current_category" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.get("id")) {
        this.loading.set("Loading Product Details...");
        const product = await ql(params.get("id")).catch(() => null);
        if (!product) {
          notifyError("Unable to load product details.");
          this._router.navigate([this.base_route]);
        }
        patchSignalModel(this.model, product);
        this.loading.set("");
      }
    }));
  }
  async newCategory() {
    patchSignalModel(this.model, { category_id: this.current_category() });
    const category = await this._state.editCategory();
    if (!category)
      return;
    this.new_category.set(category);
    patchSignalModel(this.model, { category_id: category.id });
  }
  async save() {
    if (!this.form().valid())
      return;
    this.loading.set("Saving Product...");
    const data = this.model();
    const item = await saveAssetType(data).catch((e) => {
      this.loading.set("");
      notifyError(`Error saving Product: ${e.message}`);
      throw e;
    });
    this.form().reset();
    this.loading.set("");
    this._state.postChange();
    this._router.navigate([this.base_route, "view", item.id]);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetGroupFormComponent_BaseFactory;
      return function AssetGroupFormComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetGroupFormComponent_BaseFactory || (\u0275AssetGroupFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetGroupFormComponent)))(__ngFactoryType__ || _AssetGroupFormComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetGroupFormComponent, selectors: [["asset-group-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 62, vars: 54, consts: [[3, "confirm", "heading", "close", "loading"], [1, "flex", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], [3, "click", "formField", "placeholder"], [3, "value"], [1, "relative", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["for", "brand"], ["for", "description"], ["matInput", "", "placeholder", "Description of the product", 3, "formField"], ["for", "images"], [3, "formField"]], template: function AssetGroupFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275listener("confirm", function AssetGroupFormComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(2, "form")(3, "div", 1)(4, "label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 3);
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(12, "mat-error");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 1)(16, "label", 2);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "mat-form-field", 3)(22, "mat-select", 5);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275listener("click", function AssetGroupFormComponent_Template_mat_select_click_22_listener() {
          return ctx.current_category.set(ctx.model().category_id);
        });
        \u0275\u0275repeaterCreate(24, AssetGroupFormComponent_For_25_Template, 2, 2, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(26, "mat-option", 7);
        \u0275\u0275listener("click", function AssetGroupFormComponent_Template_mat_option_click_26_listener() {
          return ctx.newCategory();
        });
        \u0275\u0275elementStart(27, "div", 8)(28, "icon");
        \u0275\u0275text(29, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(33, "mat-error");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 1)(37, "label", 9);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "span");
        \u0275\u0275text(41, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "mat-form-field", 3);
        \u0275\u0275element(43, "input", 4);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(45, "mat-error");
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 1)(49, "label", 10);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-form-field", 3);
        \u0275\u0275element(53, "textarea", 11);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(54, "mat-error");
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 1)(58, "label", 12);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(61, "image-list-field", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 21, ctx.model().id ? "APP.CONCIERGE.ASSETS_ITEM_EDIT" : "APP.CONCIERGE.ASSETS_ITEM_NEW"))("close", ctx.model().id ? \u0275\u0275pureFunction2(49, _c03, ctx.base_route, ctx.model().id) : \u0275\u0275pureFunction1(52, _c13, ctx.base_route))("loading", ctx.loading());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 23, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 25, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 27, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 29, "COMMON.CATEGORY"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.category_id)("placeholder", \u0275\u0275pipeBind1(23, 31, "COMMON.CATEGORY"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 33, "COMMON.CATEGORY_NEW"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 35, "COMMON.CATEGORY_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 37, "APP.CONCIERGE.ASSETS_ITEM_BRAND"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(44, 39, "APP.CONCIERGE.ASSETS_ITEM_BRAND"))("formField", ctx.form.brand);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 41, "APP.CONCIERGE.ASSETS_ITEM_BRAND_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 43, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 45, "COMMON.DESCRIPTION_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 47, "COMMON.IMAGES"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.images);
        \u0275\u0275control();
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      ImageListFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      FormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupFormComponent, [{
    type: Component,
    args: [{ selector: "asset-group-form", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ASSETS_ITEM_EDIT'
                    : 'APP.CONCIERGE.ASSETS_ITEM_NEW'
                ) | translate
            "
            [close]="
                model().id
                    ? [base_route, 'view', model().id]
                    : [base_route, 'list', 'items']
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-col space-y-2">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="name"
                        >{{ 'COMMON.CATEGORY' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.category_id"
                            [placeholder]="'COMMON.CATEGORY' | translate"
                            (click)="current_category.set(model().category_id)"
                        >
                            @for (category of categories(); track category) {
                                <mat-option [value]="category.id">
                                    {{ category.name }}
                                </mat-option>
                            }
                            <mat-option
                                (click)="newCategory()"
                                class="relative"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>add</icon>
                                    <p>
                                        {{ 'COMMON.CATEGORY_NEW' | translate }}
                                    </p>
                                </div>
                            </mat-option>
                        </mat-select>
                        <mat-error>{{
                            'COMMON.CATEGORY_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="brand"
                        >{{ 'APP.CONCIERGE.ASSETS_ITEM_BRAND' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ITEM_BRAND' | translate
                            "
                            [formField]="form.brand"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_ITEM_BRAND_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            placeholder="Description of the product"
                            [formField]="form.description"
                        ></textarea>
                        <mat-error>{{
                            'COMMON.DESCRIPTION_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="images">{{
                        'COMMON.IMAGES' | translate
                    }}</label>
                    <image-list-field
                        [formField]="form.images"
                    ></image-list-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      ImageListFieldComponent,
      MatFormFieldModule,
      FormField,
      MatInputModule,
      MatSelectModule,
      TranslatePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetGroupFormComponent, { className: "AssetGroupFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-group-form.component.ts", lineNumber: 149 });
})();

// apps/concierge/src/app/asset-manager/asset-item-list.component.ts
var _c04 = (a0) => ({ count: a0 });
var _c14 = (a0, a1) => [a0, "view", a1];
var _c23 = (a0) => [a0, "manage", "group"];
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_a_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const asset_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", asset_r1.images[0]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_a_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Assets: ", asset_r1.asset_count || asset_r1.assets?.length || 0, " ");
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16)(1, "div", 17);
    \u0275\u0275template(2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_a_2_img_2_Template, 1, 1, "img", 18)(3, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_a_2_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_a_2_div_8_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r1 = ctx.$implicit;
    const placeholder_r2 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(5, _c14, ctx_r2.base_route, asset_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", asset_r1.images?.length)("ngIfElse", placeholder_r2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", asset_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asset_r1.asset_count || asset_r1.assets?.length);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275template(2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_a_2_Template, 9, 8, "a", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.products()[group_r4.id]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_a_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const asset_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", asset_r5.images[0]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_a_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Assets: ", asset_r5.asset_count || asset_r5.assets?.length || 0, " ");
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27)(1, "div", 28);
    \u0275\u0275template(2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_a_2_img_2_Template, 1, 1, "img", 18)(3, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_a_2_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_a_2_div_8_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r5 = ctx.$implicit;
    const placeholder_r6 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(5, _c14, ctx_r2.base_route, asset_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", asset_r5.images?.length)("ngIfElse", placeholder_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", asset_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asset_r5.asset_count || asset_r5.assets?.length);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275template(2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_a_2_Template, 9, 8, "a", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.products()[group_r4.id]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerStart(7, 11);
    \u0275\u0275template(8, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_8_Template, 3, 1, "ng-container", 12)(9, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_9_Template, 3, 1, "ng-container", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r4?.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind2(6, 4, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(7, _c04, ctx_r2.products()[group_r4.id]?.length)), ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", ctx_r2.options().view);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "list");
  }
}
function AssetItemListComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AssetItemListComponent_div_0_ng_container_1_div_1_Template, 10, 9, "div", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.products()[group_r4.id]?.length);
  }
}
function AssetItemListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, AssetItemListComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.categories());
  }
}
function AssetItemListComponent_mat_progress_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 31);
  }
}
function AssetItemListComponent_ng_template_2_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275text(1, " Create New Product ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c23, ctx_r2.base_route));
  }
}
function AssetItemListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AssetItemListComponent_ng_template_2_a_3_Template, 2, 3, "a", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.options().search ? "No matching assets found" : "No assets available. Create a new asset with the button below", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.options().search);
  }
}
var AssetItemListComponent = class _AssetItemListComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this.loading = this._state.loading;
    this.options = this._state.options;
    this.categories = this._state.categories;
    this.products = this._state.product_mapping;
  }
  get base_route() {
    return this._state.base_route;
  }
  static {
    this.\u0275fac = function AssetItemListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetItemListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetItemListComponent, selectors: [["app-asset-item-list"]], decls: 4, vars: 3, consts: [["empty_state", ""], ["placeholder", ""], ["class", "h-full w-full overflow-auto pb-2", 4, "ngIf", "ngIfElse"], ["mode", "indeterminate", 4, "ngIf"], [1, "h-full", "w-full", "overflow-auto", "pb-2"], [4, "ngFor", "ngForOf"], ["class", "", 4, "ngIf"], [1, ""], [1, "py-2"], [1, "font-medium"], [1, "text-xs"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "divide-base-200", "border-base-200", "bg-base-100", "divide-y", "overflow-hidden", "rounded-sm", "border"], ["matRipple", "", "class", "border-base-200 flex items-center space-x-4 rounded-sm border p-4 text-left hover:border-indigo-400", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "border-base-200", "flex", "items-center", "space-x-4", "rounded-sm", "border", "p-4", "text-left", "hover:border-indigo-400", 3, "routerLink"], [1, "border-base-200", "bg-base-200", "flex", "h-12", "w-12", "items-center", "justify-center", "overflow-hidden", "border"], ["auth", "", "class", "min-h-full min-w-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "flex", "flex-1", "flex-col", "justify-center"], [1, "truncate"], ["class", "text-xs opacity-60", 4, "ngIf"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], ["src", "assets/icons/asset-placeholder.svg", 1, "m-auto"], [1, "text-xs", "opacity-60"], [1, "-mx-2", "flex", "w-full", "flex-wrap", "items-center", "overflow-hidden"], ["matRipple", "", "class", "border-base-200 bg-base-100 m-2 flex h-44 w-40 flex-col rounded-sm border text-left shadow-sm hover:border-indigo-400", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "m-2", "flex", "h-44", "w-40", "flex-col", "rounded-sm", "border", "text-left", "shadow-sm", "hover:border-indigo-400", 3, "routerLink"], [1, "bg-base-200", "flex", "h-32", "w-full", "items-center", "justify-center", "overflow-hidden"], [1, "border-base-200", "flex", "w-full", "flex-1", "flex-col", "justify-center", "border-t", "px-3", "py-1"], ["src", "assets/icons/asset-placeholder.svg", 1, "m-auto", "w-16"], ["mode", "indeterminate"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], [1, "opacity-40"], ["btn", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["btn", "", "matRipple", "", 3, "routerLink"]], template: function AssetItemListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AssetItemListComponent_div_0_Template, 2, 1, "div", 2)(1, AssetItemListComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 3)(2, AssetItemListComponent_ng_template_2_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const empty_state_r7 = \u0275\u0275reference(3);
        \u0275\u0275property("ngIf", ctx.categories().length && ctx.products()._count)("ngIfElse", empty_state_r7);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading());
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      NgSwitch,
      NgSwitchCase,
      NgSwitchDefault,
      MatProgressBarModule,
      MatProgressBar,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      AuthenticatedImageDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=asset-item-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetItemListComponent, [{
    type: Component,
    args: [{ selector: "app-asset-item-list", template: `
        <div
            class="h-full w-full overflow-auto pb-2"
            *ngIf="categories().length && products()._count; else empty_state"
        >
            <ng-container *ngFor="let group of categories()">
                <div class="" *ngIf="products()[group.id]?.length">
                    <h2 class="py-2">
                        <span class="font-medium">{{ group?.name }}</span>
                        <span class="text-xs">
                            ({{
                                'COMMON.ITEM_COUNT'
                                    | translate
                                        : {
                                              count: products()[group.id]
                                                  ?.length,
                                          }
                            }})
                        </span>
                    </h2>
                    <ng-container [ngSwitch]="options().view">
                        <ng-container *ngSwitchCase="'list'">
                            <div
                                class="divide-base-200 border-base-200 bg-base-100 divide-y overflow-hidden rounded-sm border"
                            >
                                <a
                                    matRipple
                                    class="border-base-200 flex items-center space-x-4 rounded-sm border p-4 text-left hover:border-indigo-400"
                                    *ngFor="let asset of products()[group.id]"
                                    [routerLink]="[
                                        base_route,
                                        'view',
                                        asset.id,
                                    ]"
                                >
                                    <div
                                        class="border-base-200 bg-base-200 flex h-12 w-12 items-center justify-center overflow-hidden border"
                                    >
                                        <img
                                            *ngIf="
                                                asset.images?.length;
                                                else placeholder
                                            "
                                            auth
                                            [source]="asset.images[0]"
                                            class="min-h-full min-w-full object-cover"
                                        />
                                        <ng-template #placeholder>
                                            <img
                                                class="m-auto"
                                                src="assets/icons/asset-placeholder.svg"
                                            />
                                        </ng-template>
                                    </div>
                                    <div
                                        class="flex flex-1 flex-col justify-center"
                                    >
                                        <div class="truncate">
                                            {{ asset.name }}
                                        </div>
                                        <div
                                            class="text-xs opacity-60"
                                            *ngIf="
                                                asset.asset_count ||
                                                asset.assets?.length
                                            "
                                        >
                                            Assets:
                                            {{
                                                asset.asset_count ||
                                                    asset.assets?.length ||
                                                    0
                                            }}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </ng-container>
                        <ng-container *ngSwitchDefault>
                            <div
                                class="-mx-2 flex w-full flex-wrap items-center overflow-hidden"
                            >
                                <a
                                    matRipple
                                    class="border-base-200 bg-base-100 m-2 flex h-44 w-40 flex-col rounded-sm border text-left shadow-sm hover:border-indigo-400"
                                    *ngFor="let asset of products()[group.id]"
                                    [routerLink]="[
                                        base_route,
                                        'view',
                                        asset.id,
                                    ]"
                                >
                                    <div
                                        class="bg-base-200 flex h-32 w-full items-center justify-center overflow-hidden"
                                    >
                                        <img
                                            auth
                                            *ngIf="
                                                asset.images?.length;
                                                else placeholder
                                            "
                                            [source]="asset.images[0]"
                                            class="min-h-full min-w-full object-cover"
                                        />
                                        <ng-template #placeholder>
                                            <img
                                                class="m-auto w-16"
                                                src="assets/icons/asset-placeholder.svg"
                                            />
                                        </ng-template>
                                    </div>
                                    <div
                                        class="border-base-200 flex w-full flex-1 flex-col justify-center border-t px-3 py-1"
                                    >
                                        <div class="truncate">
                                            {{ asset.name }}
                                        </div>
                                        <div
                                            class="text-xs opacity-60"
                                            *ngIf="
                                                asset.asset_count ||
                                                asset.assets?.length
                                            "
                                        >
                                            Assets:
                                            {{
                                                asset.asset_count ||
                                                    asset.assets?.length ||
                                                    0
                                            }}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </ng-container>
                    </ng-container>
                </div>
            </ng-container>
        </div>
        <mat-progress-bar *ngIf="loading()" mode="indeterminate" />
        <ng-template #empty_state>
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-4 p-8"
            >
                <p class="opacity-40">
                    {{
                        options().search
                            ? 'No matching assets found'
                            : 'No assets available. Create a new asset with the button below'
                    }}
                </p>
                <a
                    btn
                    matRipple
                    *ngIf="!options().search"
                    [routerLink]="[base_route, 'manage', 'group']"
                >
                    Create New Product
                </a>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      MatRippleModule,
      RouterModule,
      TranslatePipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;4c979efad00bb3e3af29807e5796f88e709cd03012591ffc4d78af51c266daeb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/asset-manager/asset-item-list.component.ts */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=asset-item-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetItemListComponent, { className: "AssetItemListComponent", filePath: "apps/concierge/src/app/asset-manager/asset-item-list.component.ts", lineNumber: 194 });
})();

// apps/concierge/src/app/asset-manager/asset-manager-topbar.component.ts
var _c05 = (a0) => [a0, "manage", "group"];
var _c15 = (a0) => [a0, "manage", "purchase-order"];
function AssetManagerTopbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c05, ctx_r0.base_route));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.ASSETS_ITEM_ADD"), " ");
  }
}
function AssetManagerTopbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c15, ctx_r0.base_route));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.ASSETS_PURCHASE_ADD"), " ");
  }
}
function AssetManagerTopbarComponent_Conditional_12_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_12_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.manageCategories());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "list_alt");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES"));
  }
}
function AssetManagerTopbarComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "button", 11);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ view: "grid" }));
    });
    \u0275\u0275elementStart(4, "icon", 12);
    \u0275\u0275text(5, "view_module");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ view: "list" }));
    });
    \u0275\u0275elementStart(8, "icon", 12);
    \u0275\u0275text(9, "view_list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "div", 14);
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editConfig());
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "menu_book");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_12_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRoomAvailability());
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, AssetManagerTopbarComponent_Conditional_12_Conditional_19_Template, 4, 3, "button", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary", ctx_r0.options().view === "grid")("text-secondary-content", ctx_r0.options().view === "grid");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 13, "COMMON.VIEW_AS_GRID"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-secondary", ctx_r0.options().view === "list")("text-secondary-content", ctx_r0.options().view === "list");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 15, "COMMON.VIEW_AS_LIST"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 17, "APP.CONCIERGE.ASSETS_MANAGE_CONFIG"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 19, "APP.CONCIERGE.ASSETS_MANAGE_BOOKING_RULES"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.active() === "items" ? 19 : -1);
  }
}
function AssetManagerTopbarComponent_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function AssetManagerTopbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-form-field", 17)(2, "mat-select", 18);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function AssetManagerTopbarComponent_Conditional_13_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(4, AssetManagerTopbarComponent_Conditional_13_For_5_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.building()?.id)("placeholder", \u0275\u0275pipeBind1(3, 2, "COMMON.BUILDINGS_ALL"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.buildings());
  }
}
var AssetManagerTopbarComponent = class _AssetManagerTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.active = input(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._state.options;
    this.building = this._org.active_building;
    this.buildings = this._org.active_buildings;
    this.use_region = settingSignal("use_region");
    this.setOptions = (o) => this._state.setOptions(o);
    this.manageCategories = () => this._state.manageCategories();
    this.editConfig = () => this._state.editConfig();
  }
  get base_route() {
    return this._state.base_route;
  }
  setBuilding(id) {
    const bld = this._org.buildings.find((_) => _.id === id);
    if (!bld)
      return;
    this._org.building = bld;
  }
  async setRoomAvailability() {
    const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
      data: {
        type: "Assets",
        disabled_rooms: this._state.availability()
      }
    });
    this.subscription("room-availability", ref.componentInstance.change.subscribe(async (list) => {
      await this._state.saveSettings({ disabled_rooms: list }).catch();
      ref.componentInstance.loading.set(false);
      notifySuccess("Room availability settings saved");
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetManagerTopbarComponent_BaseFactory;
      return function AssetManagerTopbarComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetManagerTopbarComponent_BaseFactory || (\u0275AssetManagerTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetManagerTopbarComponent)))(__ngFactoryType__ || _AssetManagerTopbarComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetManagerTopbarComponent, selectors: [["asset-manager-topbar"]], inputs: { active: [1, "active"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "bg-base-100", "flex", "w-full", "items-center", "space-x-2", "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "relative", "top-1", "-left-1", "text-2xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-40", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-48", 3, "routerLink"], [1, "mb-2", "flex", "items-center", "space-x-2", "px-8"], [1, "flex", "items-center", "space-x-2", "px-4", "pb-2"], [1, "border-secondary", "flex", "items-center", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "h-12", "w-14", "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], [1, "text-2xl"], ["icon", "", "matRipple", "", 1, "h-12", "w-14", "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], [1, "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "matTooltip"], ["appearance", "outline", 1, "no-subscript", "w-48"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"]], template: function AssetManagerTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275elementStart(5, "mat-form-field", 3)(6, "icon", 4);
        \u0275\u0275text(7, " search ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("ngModelChange", function AssetManagerTopbarComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.setOptions({ search: $event });
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, AssetManagerTopbarComponent_Conditional_10_Template, 3, 6, "a", 6);
        \u0275\u0275conditionalCreate(11, AssetManagerTopbarComponent_Conditional_11_Template, 3, 6, "a", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, AssetManagerTopbarComponent_Conditional_12_Template, 20, 21, "div", 8);
        \u0275\u0275conditionalCreate(13, AssetManagerTopbarComponent_Conditional_13_Template, 6, 4, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, ctx.active() !== "items" && ctx.active() !== "purchase-orders" ? "APP.CONCIERGE.ASSETS_HEADER" : "APP.CONCIERGE.ASSETS_MANAGE_HEADER"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.options().search)("placeholder", \u0275\u0275pipeBind1(9, 9, ctx.active() === "items" ? "APP.CONCIERGE.ASSETS_ITEM_SEARCH" : ctx.active() === "purchase-orders" ? "APP.CONCIERGE.ASSETS_ITEM_SEARCH" : "APP.CONCIERGE.ASSETS_REQUESTS_SEARCH"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.active() === "items" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.active() === "purchase-orders" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.active() === "items" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.use_region() && ctx.buildings().length ? 13 : -1);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatSelectModule,
      MatSelect,
      MatOption,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      RouterModule,
      RouterLink,
      MatInputModule,
      MatInput,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetManagerTopbarComponent, [{
    type: Component,
    args: [{ selector: "asset-manager-topbar", template: `
        <div
            class="bg-base-100 flex w-full items-center space-x-2 px-8 pt-4 pb-2"
        >
            <h2 class="text-2xl font-medium">
                {{
                    (active() !== 'items' && active() !== 'purchase-orders'
                        ? 'APP.CONCIERGE.ASSETS_HEADER'
                        : 'APP.CONCIERGE.ASSETS_MANAGE_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <mat-form-field appearance="outline" class="no-subscript">
                <icon matPrefix class="relative top-1 -left-1 text-2xl">
                    search
                </icon>
                <input
                    matInput
                    [ngModel]="options().search"
                    (ngModelChange)="setOptions({ search: $event })"
                    [placeholder]="
                        (active() === 'items'
                            ? 'APP.CONCIERGE.ASSETS_ITEM_SEARCH'
                            : active() === 'purchase-orders'
                              ? 'APP.CONCIERGE.ASSETS_ITEM_SEARCH'
                              : 'APP.CONCIERGE.ASSETS_REQUESTS_SEARCH'
                        ) | translate
                    "
                />
            </mat-form-field>
            @if (active() === 'items') {
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="[base_route, 'manage', 'group']"
                >
                    {{ 'APP.CONCIERGE.ASSETS_ITEM_ADD' | translate }}
                </a>
            }
            @if (active() === 'purchase-orders') {
                <a
                    btn
                    matRipple
                    class="w-48"
                    [routerLink]="[base_route, 'manage', 'purchase-order']"
                >
                    {{ 'APP.CONCIERGE.ASSETS_PURCHASE_ADD' | translate }}
                </a>
            }
        </div>
        @if (active() === 'items') {
            <div class="mb-2 flex items-center space-x-2 px-8">
                <div
                    class="border-secondary flex items-center rounded-sm border"
                >
                    <button
                        icon
                        matRipple
                        class="h-12 w-14 rounded-l rounded-r-none"
                        [class.bg-secondary]="options().view === 'grid'"
                        [class.text-secondary-content]="
                            options().view === 'grid'
                        "
                        (click)="setOptions({ view: 'grid' })"
                        [matTooltip]="'COMMON.VIEW_AS_GRID' | translate"
                    >
                        <icon class="text-2xl">view_module</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-14 rounded-l-none rounded-r"
                        [class.bg-secondary]="options().view === 'list'"
                        [class.text-secondary-content]="
                            options().view === 'list'
                        "
                        (click)="setOptions({ view: 'list' })"
                        [matTooltip]="'COMMON.VIEW_AS_LIST' | translate"
                    >
                        <icon class="text-2xl">view_list</icon>
                    </button>
                </div>
                <div class="flex-1"></div>
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    [matTooltip]="
                        'APP.CONCIERGE.ASSETS_MANAGE_CONFIG' | translate
                    "
                    (click)="editConfig()"
                >
                    <icon>menu_book</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    [matTooltip]="
                        'APP.CONCIERGE.ASSETS_MANAGE_BOOKING_RULES' | translate
                    "
                    (click)="setRoomAvailability()"
                >
                    <icon>event_available</icon>
                </button>
                @if (active() === 'items') {
                    <button
                        icon
                        matRipple
                        class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                        [matTooltip]="
                            'APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES' | translate
                        "
                        (click)="manageCategories()"
                    >
                        <icon>list_alt</icon>
                    </button>
                }
            </div>
        }
        @if (use_region() && buildings().length) {
            <div class="flex items-center space-x-2 px-4 pb-2">
                <mat-form-field appearance="outline" class="no-subscript w-48">
                    <mat-select
                        [ngModel]="building()?.id"
                        (ngModelChange)="setBuilding($event)"
                        [placeholder]="'COMMON.BUILDINGS_ALL' | translate"
                    >
                        @for (bld of buildings(); track bld) {
                            <mat-option [value]="bld.id">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
    `, imports: [
      MatFormFieldModule,
      TranslatePipe,
      FormsModule,
      MatSelectModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      RouterModule,
      MatInputModule
    ] }]
  }], null, { active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetManagerTopbarComponent, { className: "AssetManagerTopbarComponent", filePath: "apps/concierge/src/app/asset-manager/asset-manager-topbar.component.ts", lineNumber: 179 });
})();

// apps/concierge/src/app/asset-manager/asset-listing.component.ts
var _c06 = (a0) => [a0, "list", "items"];
var _c16 = (a0) => [a0, "list", "purchase-orders"];
var _c24 = (a0) => [a0, "list", "requests"];
function AssetListingComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c24, ctx_r0.base_route))("routerLinkActive", "active")("active", ctx_r0.active() === "requests");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.ASSETS_REQUESTS"), " ");
  }
}
function AssetListingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 3);
    \u0275\u0275conditionalCreate(1, AssetListingComponent_Conditional_2_Conditional_1_Template, 3, 8, "a", 5);
    \u0275\u0275elementStart(2, "a", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const tabPanel_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("tabPanel", tabPanel_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.is_new ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c06, ctx_r0.base_route))("active", ctx_r0.active() === "items");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.ASSETS_PRODUCTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c16, ctx_r0.base_route))("active", ctx_r0.active() === "purchase-orders");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "APP.CONCIERGE.ASSETS_PO"), " ");
  }
}
var AssetListingComponent = class _AssetListingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._router = inject(Router);
    this._state = inject(AssetManagerStateService);
    this.is_new = true;
    this.current_url = signal(
      this._router.url,
      ...ngDevMode ? [{ debugName: "current_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = computed(
      () => this.current_url().includes("requests") ? "requests" : this.current_url().includes("items") ? "items" : "purchase-orders",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("router", this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.current_url.set(this._router.url);
      }
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetListingComponent_BaseFactory;
      return function AssetListingComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetListingComponent_BaseFactory || (\u0275AssetListingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetListingComponent)))(__ngFactoryType__ || _AssetListingComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetListingComponent, selectors: [["asset-listing"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 2, consts: [["tabPanel", ""], [3, "active"], [1, "flex", "h-1/2", "w-full", "flex-1", "flex-col", "px-8"], ["mat-tab-nav-bar", "", 3, "tabPanel"], [1, "h-1/2", "w-full", "flex-1", "overflow-visible"], ["mat-tab-link", "", 3, "routerLink", "routerLinkActive", "active"], ["mat-tab-link", "", 3, "routerLink", "active"]], template: function AssetListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "asset-manager-topbar", 1);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275conditionalCreate(2, AssetListingComponent_Conditional_2_Template, 8, 16, "nav", 3);
        \u0275\u0275elementStart(3, "mat-tab-nav-panel", 4, 0);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("active", ctx.active());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.is_new || ctx.active() !== "requests" ? 2 : -1);
      }
    }, dependencies: [
      MatTabsModule,
      MatTabNav,
      MatTabNavPanel,
      MatTabLink,
      RouterModule,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      AssetManagerTopbarComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=asset-listing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetListingComponent, [{
    type: Component,
    args: [{ selector: "asset-listing", template: `
        <asset-manager-topbar [active]="active()" />
        <div class="flex h-1/2 w-full flex-1 flex-col px-8">
            @if (!is_new || active() !== 'requests') {
                <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                    @if (!is_new) {
                        <a
                            mat-tab-link
                            [routerLink]="[base_route, 'list', 'requests']"
                            [routerLinkActive]="'active'"
                            [active]="active() === 'requests'"
                        >
                            {{ 'APP.CONCIERGE.ASSETS_REQUESTS' | translate }}
                        </a>
                    }
                    <a
                        mat-tab-link
                        [routerLink]="[base_route, 'list', 'items']"
                        [active]="active() === 'items'"
                    >
                        {{ 'APP.CONCIERGE.ASSETS_PRODUCTS' | translate }}
                    </a>
                    <a
                        mat-tab-link
                        [routerLink]="[base_route, 'list', 'purchase-orders']"
                        [active]="active() === 'purchase-orders'"
                    >
                        {{ 'APP.CONCIERGE.ASSETS_PO' | translate }}
                    </a>
                </nav>
            }
            <mat-tab-nav-panel
                class="h-1/2 w-full flex-1 overflow-visible"
                #tabPanel
            >
                <router-outlet></router-outlet>
            </mat-tab-nav-panel>
        </div>
    `, imports: [
      MatTabsModule,
      RouterModule,
      TranslatePipe,
      AssetManagerTopbarComponent
    ], styles: ["/* angular:styles/component:css;8bc1d5dc85507ee453280f7965cb36c6094f5095888bc871ca505505d79ce6b5;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/asset-manager/asset-listing.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=asset-listing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetListingComponent, { className: "AssetListingComponent", filePath: "apps/concierge/src/app/asset-manager/asset-listing.component.ts", lineNumber: 67 });
})();

// apps/concierge/src/app/asset-manager/asset-manager.component.ts
var AssetManagerComponent = class _AssetManagerComponent extends AsyncHandler {
  constructor() {
    super();
    this._router = inject(Router);
    this._url = signal(
      null,
      ...ngDevMode ? [{ debugName: "_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.path = computed(
      () => {
        this._url();
        const parts = this._router.url.split("/");
        return parts[parts.length - 1].split("?")[0];
      },
      ...ngDevMode ? [{ debugName: "path" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("router", this._router.events.subscribe((event) => this._url.set(event)));
  }
  static {
    this.\u0275fac = function AssetManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetManagerComponent, selectors: [["", "asset-manager", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function AssetManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule,
      RouterOutlet
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=asset-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetManagerComponent, [{
    type: Component,
    args: [{ selector: "[asset-manager]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/asset-manager/asset-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=asset-manager.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetManagerComponent, { className: "AssetManagerComponent", filePath: "apps/concierge/src/app/asset-manager/asset-manager.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/asset-manager/asset-purchase-order-form.component.ts
var _c07 = (a0, a1) => [a0, "view", a1];
var _c17 = (a0) => [a0, "list", "purchase-orders"];
var _c25 = (a0) => ({ count: a0 });
var _c3 = (a0) => ({ key: "name", name: a0 });
var _c4 = (a0) => ({ key: "identifier", name: a0 });
var _c5 = (a0) => ({ key: "serial_number", name: a0 });
var _c6 = (a0, a1, a2) => [a0, a1, a2];
function AssetPurchaseOrderFormComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "APP.CONCIERGE.ASSETS_PURCHASE_ASSETS", \u0275\u0275pureFunction1(4, _c25, ctx_r0.asset_list().length || "0")), " ");
  }
}
function AssetPurchaseOrderFormComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.asset_list())("columns", \u0275\u0275pureFunction3(17, _c6, \u0275\u0275pureFunction1(11, _c3, \u0275\u0275pipeBind1(1, 3, "FORM.NAME")), \u0275\u0275pureFunction1(13, _c4, \u0275\u0275pipeBind1(2, 5, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME")), \u0275\u0275pureFunction1(15, _c5, \u0275\u0275pipeBind1(3, 7, "APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL"))))("empty_message", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.ASSETS_PURCHASE_ASSETS_EMPTY"));
  }
}
var AssetPurchaseOrderFormComponent = class _AssetPurchaseOrderFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._form_ref = generateAssetPurchaseOrderForm();
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.product_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "product_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._id = signal(
      "",
      ...ngDevMode ? [{ debugName: "_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item = signal(
      null,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.from = addYears(Date.now(), -5);
    this._asset_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_asset_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        id: this._id(),
        building: this._org.active_building()?.id
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        if (!params.id || !params.building)
          return [];
        const [asset_list, groups] = await Promise.all([
          queryAssets({ order_id: params.id }),
          queryAllPages(queryAssetTypes({
            zone_id: this._org.building.id,
            limit: 200
          }))
        ]);
        return asset_list.data.map((asset) => __spreadProps(__spreadValues({}, asset), {
          name: groups.find((_) => _.id === asset.asset_type_id)?.name || asset.id
        }));
      }
    }));
    this.asset_list = this._asset_list.value;
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.get("id")) {
        this.loading.set(i18n("APP.CONCIERGE.ASSETS_PURCHASE_LOADING"));
        const asset = await wl(params.get("id")).catch(() => null);
        if (!asset) {
          notifyError(i18n("APP.CONCIERGE.ASSETS_PURCHASE_LOAD_ERROR"));
          this._router.navigate([this.base_route]);
        }
        patchSignalModel(this.model, __spreadProps(__spreadValues({}, asset), {
          purchase_date: asset.purchase_date * 1e3,
          expected_service_end_date: asset.expected_service_end_date * 1e3,
          expected_service_start_date: asset.expected_service_start_date * 1e3
        }));
        this.item.set(asset);
        this._id.set(asset.id);
        this.loading.set("");
      }
      if (params.get("group_id")) {
        this.product_id.set(params.get("group_id"));
      }
    }));
    this._state.setOptions({ active_item: null });
  }
  async save() {
    if (!this.form().valid())
      return;
    this.loading.set(i18n("APP.CONCIERGE.ASSETS_PURCHASE_SAVING"));
    const data = __spreadValues({}, this.model());
    data.purchase_date = getUnixTime(data.purchase_date) || null;
    data.expected_service_start_date = getUnixTime(data.expected_service_start_date) || this.item()?.expected_service_start_date || null;
    data.expected_service_end_date = getUnixTime(data.expected_service_end_date) || this.item()?.expected_service_end_date || null;
    data.unit_price = +data.unit_price;
    const item = await saveAssetPurchaseOrder(data).catch((e) => {
      this.loading.set("");
      notifyError(i18n("APP.CONCIERGE.ASSETS_PURCHASE_SAVE_ERROR", {
        error: e.message || e
      }));
      throw e;
    });
    this.form().reset();
    notifySuccess(i18n("APP.CONCIERGE.ASSETS_PURCHASE_SAVE_SUCCESS"));
    this._state.postChange();
    if (this.product_id()) {
      this._router.navigate([this.base_route, "view", this.product_id()]);
    } else {
      this._router.navigate([this.base_route, "list", "purchase-orders"]);
    }
    this.loading.set("");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetPurchaseOrderFormComponent_BaseFactory;
      return function AssetPurchaseOrderFormComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetPurchaseOrderFormComponent_BaseFactory || (\u0275AssetPurchaseOrderFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetPurchaseOrderFormComponent)))(__ngFactoryType__ || _AssetPurchaseOrderFormComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetPurchaseOrderFormComponent, selectors: [["asset-purchase-order-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 52, vars: 50, consts: [[3, "confirm", "heading", "close", "loading"], [1, "flex", "flex-col", "space-y-2"], ["for", "order-number"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "invoice-number"], [1, "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "purchase-date"], [3, "from", "formField"], ["for", "unit-price"], ["appearance", "outline", 1, "w-full"], ["matPrefix", ""], ["matInput", "", 3, "formField"], ["for", "depreciation-start-date"], ["for", "depreciation-end-date"], [3, "formField"], [1, "mb-2", "font-medium"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "empty_message"]], template: function AssetPurchaseOrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275listener("confirm", function AssetPurchaseOrderFormComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(2, "form")(3, "div", 1)(4, "label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 3);
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(12, "mat-error");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 1)(16, "label", 5);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 3);
        \u0275\u0275element(20, "input", 4);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(22, "mat-error");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 6)(26, "div", 7)(27, "label", 8);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "a-date-field", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 7)(32, "label", 10);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-form-field", 11)(36, "div", 12);
        \u0275\u0275text(37, "$");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 6)(40, "div", 7)(41, "label", 14);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "a-date-field", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 7)(46, "label", 15);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(49, "a-date-field", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(50, AssetPurchaseOrderFormComponent_Conditional_50_Template, 3, 6, "h3", 17);
        \u0275\u0275conditionalCreate(51, AssetPurchaseOrderFormComponent_Conditional_51_Template, 5, 21, "simple-table", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 23, ctx.model().id ? "APP.CONCIERGE.ASSETS_PURCHASE_EDIT" : "APP.CONCIERGE.ASSETS_PURCHASE_NEW"))("close", ctx.product_id ? \u0275\u0275pureFunction2(45, _c07, ctx.base_route, ctx.product_id()) : \u0275\u0275pureFunction1(48, _c17, ctx.base_route))("loading", ctx.loading());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 25, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 27, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER"))("formField", ctx.form.purchase_order_number);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 29, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 31, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 33, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE"))("formField", ctx.form.invoice_number);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 35, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE_REQUIRED"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 37, "APP.CONCIERGE.ASSETS_PURCHASE_DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.from.valueOf())("formField", ctx.form.purchase_date);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 39, "APP.CONCIERGE.ASSETS_PURCHASE_PRICE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.unit_price);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 41, "APP.CONCIERGE.ASSETS_PURCHASE_START"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.from.valueOf())("formField", ctx.form.expected_service_start_date);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 43, "APP.CONCIERGE.ASSETS_PURCHASE_END"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.expected_service_end_date);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item()?.id ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item()?.id ? 51 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      SimpleTableComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatPrefix,
      MatInputModule,
      MatInput,
      FormField,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetPurchaseOrderFormComponent, [{
    type: Component,
    args: [{ selector: "asset-purchase-order-form", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ASSETS_PURCHASE_EDIT'
                    : 'APP.CONCIERGE.ASSETS_PURCHASE_NEW'
                ) | translate
            "
            [close]="
                product_id
                    ? [base_route, 'view', product_id()]
                    : [base_route, 'list', 'purchase-orders']
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-col space-y-2">
                    <label for="order-number">
                        {{ 'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER' | translate
                        }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER'
                                    | translate
                            "
                            [formField]="form.purchase_order_number"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="invoice-number">{{
                        'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE'
                                    | translate
                            "
                            [formField]="form.invoice_number"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="purchase-date">{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_DATE' | translate
                        }}</label>
                        <a-date-field
                            [from]="from.valueOf()"
                            [formField]="form.purchase_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="unit-price">{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_PRICE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <div matPrefix>$</div>
                            <input matInput [formField]="form.unit_price" />
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="depreciation-start-date">
                            {{
                                'APP.CONCIERGE.ASSETS_PURCHASE_START'
                                    | translate
                            }}
                        </label>
                        <a-date-field
                            [from]="from.valueOf()"
                            [formField]="form.expected_service_start_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="depreciation-end-date">
                            {{
                                'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate
                            }}
                        </label>
                        <a-date-field
                            [formField]="form.expected_service_end_date"
                        ></a-date-field>
                    </div>
                </div>
                @if (item()?.id) {
                    <h3 class="mb-2 font-medium">
                        {{
                            'APP.CONCIERGE.ASSETS_PURCHASE_ASSETS'
                                | translate
                                    : {
                                          count: asset_list().length || '0',
                                      }
                        }}
                    </h3>
                }
                @if (item()?.id) {
                    <simple-table
                        class="block w-full text-sm"
                        [data]="asset_list()"
                        [columns]="[
                            { key: 'name', name: 'FORM.NAME' | translate },
                            {
                                key: 'identifier',
                                name:
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                    | translate,
                            },
                            {
                                key: 'serial_number',
                                name:
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL'
                                    | translate,
                            },
                        ]"
                        [empty_message]="
                            'APP.CONCIERGE.ASSETS_PURCHASE_ASSETS_EMPTY'
                                | translate
                        "
                    ></simple-table>
                }
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      SimpleTableComponent,
      TranslatePipe,
      DateFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      FormField
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetPurchaseOrderFormComponent, { className: "AssetPurchaseOrderFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-purchase-order-form.component.ts", lineNumber: 184 });
})();

// apps/concierge/src/app/asset-manager/asset-purchase-order-list.component.ts
var _c08 = (a0) => ({ key: "purchase_order_number", name: a0 });
var _c18 = (a0) => ({ key: "invoice_number", name: a0 });
var _c26 = (a0, a1) => ({ key: "purchase_date", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "expected_service_start_date", name: a0, content: a1 });
var _c42 = (a0, a1) => ({ key: "expected_service_end_date", name: a0, content: a1 });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function AssetPurchaseOrderListComponent_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DATE_EMPTY"));
  }
}
function AssetPurchaseOrderListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, AssetPurchaseOrderListComponent_ng_template_9_Conditional_1_Template, 3, 3, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1 ? \u0275\u0275pipeBind2(3, 2, data_r1 * 1e3, "mediumDate") : "", " ");
  }
}
var AssetPurchaseOrderListComponent = class _AssetPurchaseOrderListComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this._router = inject(Router);
    this.now = Date.now();
    this.purchase_orders = computed(
      () => {
        const search = this._state.options().search;
        const list = this._state.purchase_orders();
        return (list || []).filter((_) => !search || _.purchase_order_number.toLowerCase().includes(search.toLowerCase()) || _.invoice_number?.toLowerCase().includes(search.toLowerCase()));
      },
      ...ngDevMode ? [{ debugName: "purchase_orders" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = this._state.options;
  }
  editOrder(order) {
    this._router.navigate([this._state.base_route, "manage", "purchase-order"], {
      queryParams: { id: order.id }
    });
  }
  static {
    this.\u0275fac = function AssetPurchaseOrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetPurchaseOrderListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetPurchaseOrderListComponent, selectors: [["app-asset-purchase-order-list"]], decls: 11, vars: 36, consts: [["date_template", ""], [1, "relative", "-left-4", "mt-4", "flex", "h-[calc(100%-1rem)]", "w-[calc(100%+2rem)]", "flex-col"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4"], ["purchase-orders", "", 1, "block", "min-w-208", "text-sm", 3, "row_clicked", "data", "columns", "empty_message", "filter", "sortable"], [1, "p-4"], [1, "opacity-30"]], template: function AssetPurchaseOrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "simple-table", 3);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275listener("row_clicked", function AssetPurchaseOrderListComponent_Template_simple_table_row_clicked_2_listener($event) {
          return ctx.editOrder($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(9, AssetPurchaseOrderListComponent_ng_template_9_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const date_template_r2 = \u0275\u0275reference(10);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.purchase_orders())("columns", \u0275\u0275pureFunction5(30, _c52, \u0275\u0275pureFunction1(17, _c08, \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER")), \u0275\u0275pureFunction1(19, _c18, \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE")), \u0275\u0275pureFunction2(21, _c26, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.ASSETS_PURCHASE_DATE"), date_template_r2), \u0275\u0275pureFunction2(24, _c32, \u0275\u0275pipeBind1(6, 11, "APP.CONCIERGE.ASSETS_PURCHASE_START"), date_template_r2), \u0275\u0275pureFunction2(27, _c42, \u0275\u0275pipeBind1(7, 13, "APP.CONCIERGE.ASSETS_PURCHASE_END"), date_template_r2)))("empty_message", \u0275\u0275pipeBind1(8, 15, ctx.filters().search ? "APP.CONCIERGE.ASSETS_PURCHASE_SEARCH_EMPTY" : "APP.CONCIERGE.ASSETS_PURCHASE_EMPTY"))("filter", ctx.filters().search)("sortable", true);
      }
    }, dependencies: [CommonModule, SimpleTableComponent, DatePipe, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=asset-purchase-order-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetPurchaseOrderListComponent, [{
    type: Component,
    args: [{ selector: "app-asset-purchase-order-list", template: `
        <div
            class="relative -left-4 mt-4 flex h-[calc(100%-1rem)] w-[calc(100%+2rem)] flex-col"
        >
            <div class="h-1/2 w-full flex-1 overflow-auto p-4">
                <simple-table
                    class="block min-w-208 text-sm"
                    purchase-orders
                    [data]="purchase_orders()"
                    [columns]="[
                        {
                            key: 'purchase_order_number',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER'
                                | translate,
                        },
                        {
                            key: 'invoice_number',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE'
                                | translate,
                        },
                        {
                            key: 'purchase_date',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_DATE'
                                | translate,
                            content: date_template,
                        },
                        {
                            key: 'expected_service_start_date',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_START'
                                | translate,
                            content: date_template,
                        },
                        {
                            key: 'expected_service_end_date',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate,
                            content: date_template,
                        },
                    ]"
                    [empty_message]="
                        (filters().search
                            ? 'APP.CONCIERGE.ASSETS_PURCHASE_SEARCH_EMPTY'
                            : 'APP.CONCIERGE.ASSETS_PURCHASE_EMPTY'
                        ) | translate
                    "
                    [filter]="filters().search"
                    [sortable]="true"
                    (row_clicked)="editOrder($event)"
                ></simple-table>
            </div>
        </div>
        <ng-template #date_template let-data="data">
            <div class="p-4">
                @if (!data) {
                    <span class="opacity-30">{{
                        'COMMON.DATE_EMPTY' | translate
                    }}</span>
                }
                {{ data ? (data * 1000 | date: 'mediumDate') : '' }}
            </div>
        </ng-template>
    `, imports: [CommonModule, SimpleTableComponent, TranslatePipe], styles: ["/* angular:styles/component:css;6714f28fad7d44bfe3f2ce1c97e51c47788fbc9ca35df075a6079c15b86aa170;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/asset-manager/asset-purchase-order-list.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=asset-purchase-order-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetPurchaseOrderListComponent, { className: "AssetPurchaseOrderListComponent", filePath: "apps/concierge/src/app/asset-manager/asset-purchase-order-list.component.ts", lineNumber: 86 });
})();

// apps/concierge/src/app/asset-manager/split-join.pipe.ts
var SplitJoinPipe = class _SplitJoinPipe {
  transform(value, split = "_", join = " ") {
    return (value || "").split(split).join(join);
  }
  static {
    this.\u0275fac = function SplitJoinPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SplitJoinPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "splitjoin", type: _SplitJoinPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitJoinPipe, [{
    type: Pipe,
    args: [{
      name: "splitjoin"
    }]
  }], null, null);
})();

// apps/concierge/src/app/asset-manager/asset-request-details.component.ts
var _c09 = (a0) => ({ name: a0 });
function AssetRequestDetailsComponent_Conditional_0_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r3.quantity, " ");
  }
}
function AssetRequestDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function AssetRequestDetailsComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.request.set(null);
      return \u0275\u0275resetView(ctx_r1.requestChange.emit(ctx_r1.request()));
    });
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275listener("click", function AssetRequestDetailsComponent_Conditional_0_Template_div_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function AssetRequestDetailsComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.request.set(null);
      return \u0275\u0275resetView(ctx_r1.requestChange.emit(ctx_r1.request()));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275element(7, "a-user-avatar", 8);
    \u0275\u0275elementStart(8, "div", 9)(9, "div", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11)(12, "icon");
    \u0275\u0275text(13, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "icon");
    \u0275\u0275text(18, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 11)(22, "icon");
    \u0275\u0275text(23, "work_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 13)(27, "div", 14)(28, "div", 15)(29, "icon", 16);
    \u0275\u0275text(30, "send");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 10);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275repeaterCreate(35, AssetRequestDetailsComponent_Conditional_0_For_36_Template, 4, 2, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 18)(38, "div", 15)(39, "icon", 16);
    \u0275\u0275text(40, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 10);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 19);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 18)(48, "div", 15)(49, "icon", 16);
    \u0275\u0275text(50, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 10);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 19);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "date");
    \u0275\u0275pipe(57, "date");
    \u0275\u0275pipe(58, "duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 18)(60, "div", 15)(61, "icon", 16);
    \u0275\u0275text(62, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 10);
    \u0275\u0275text(64, "Floor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 19);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 18)(69, "div", 15)(70, "icon", 16);
    \u0275\u0275text(71, "meeting_room");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 10);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 19);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 20)(78, "button", 21)(79, "icon", 22);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 23);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "icon", 24);
    \u0275\u0275text(84, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "mat-menu", 25, 0)(87, "button", 26);
    \u0275\u0275listener("click", function AssetRequestDetailsComponent_Conditional_0_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatus("approved"));
    });
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "button", 26);
    \u0275\u0275listener("click", function AssetRequestDetailsComponent_Conditional_0_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatus("declined"));
    });
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "button", 27)(94, "div", 23);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "splitjoin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "icon", 24);
    \u0275\u0275text(98, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "mat-menu", 25, 1)(101, "button", 26);
    \u0275\u0275listener("click", function AssetRequestDetailsComponent_Conditional_0_Template_button_click_101_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking("in_storage"));
    });
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "button", 26);
    \u0275\u0275listener("click", function AssetRequestDetailsComponent_Conditional_0_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking("in_transit"));
    });
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "button", 26);
    \u0275\u0275listener("click", function AssetRequestDetailsComponent_Conditional_0_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking("at_location"));
    });
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const menu_r4 = \u0275\u0275reference(86);
    const tracking_menu_r5 = \u0275\u0275reference(100);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("user", \u0275\u0275pureFunction1(74, _c09, ctx_r1.request().user_name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.request().user_name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "mailto:" + ctx_r1.request().user_email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.request().user_email || "staff@place.tech", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "tel:" + ctx_r1.request().user_phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.request().user_phone || "04 1234 5678", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.request().user_company || "PlaceOS", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 41, "APP.CONCIERGE.ASSETS_REQUESTS_ITEMS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.items());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 43, "APP.CONCIERGE.ASSETS_REQUESTS_DATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 45, ctx_r1.request().date, "EEEE, MMMM d, y"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 48, "FORM.PERIOD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(56, 50, ctx_r1.request().date, ctx_r1.time_format()), " \u2013 ", \u0275\u0275pipeBind2(57, 53, ctx_r1.request().date + ctx_r1.request().duration * 60 * 1e3, ctx_r1.time_format()), " (", \u0275\u0275pipeBind1(58, 56, ctx_r1.request().duration), ") ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 58, ctx_r1.request().zones)?.display_name || "N/A", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 60, "RESOURCE.ROOM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.request().description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", ctx_r1.request().status === "approved")("bg-error", ctx_r1.request().status === "declined")("bg-warning", ctx_r1.request().status === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r4)("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-green-600", ctx_r1.request().status === "approved")("text-red-600", ctx_r1.request().status === "declined")("text-yellow-400", ctx_r1.request().status === "tentative");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.request().status === "approved" ? "done" : ctx_r1.request().status === "declined" ? "close" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.request().status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 62, "COMMON.APPROVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 64, "COMMON.DECLINE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", tracking_menu_r5)("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 66, ctx_r1.request().extension_data?.tracking) || "In Storage", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 68, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(106, 70, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(109, 72, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION"), " ");
  }
}
var AssetRequestDetailsComponent = class _AssetRequestDetailsComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.requestInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "requestInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "request" }));
    this.request = linkedSignal(
      this.requestInput,
      ...ngDevMode ? [{ debugName: "request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.requestChange = output();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.items = computed(
      () => this.request()?.extension_data?.request?.items || [],
      ...ngDevMode ? [{ debugName: "items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this._settings.time_format,
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async setStatus(status) {
    this.loading.set(true);
    await this._state.setStatus(this.request(), status);
    this.request().status = status;
    this.loading.set(false);
  }
  async setTracking(state) {
    this.loading.set(true);
    await this._state.setTracking(this.request(), state);
    this.request().extension_data.tracking = state;
    this.loading.set(false);
  }
  static {
    this.\u0275fac = function AssetRequestDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetRequestDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetRequestDetailsComponent, selectors: [["asset-request-details"]], inputs: { requestInput: [1, "request", "requestInput"] }, outputs: { requestChange: "requestChange" }, decls: 1, vars: 1, consts: [["menu", "matMenu"], ["tracking_menu", "matMenu"], [1, "fixed", "inset-0", "z-50"], [1, "fixed", "inset-0", "z-50", 3, "click"], [1, "absolute", "inset-0", "bg-black", "opacity-50"], [1, "bg-base-100", "absolute", "inset-y-0", "right-0", "w-[480px]", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "border-base-200", "flex", "space-x-4", "border-b", "px-2", "py-4"], [1, "text-xl", 3, "user"], ["details", "", 1, "space-y-1"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "underline", 3, "href"], [1, "relative", "px-3", "py-4"], [1, "flex", "items-center", "space-x-4"], [1, "bg-base-200", "text-secondary", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-sm"], [1, "mt-1", "flex", "flex-col", "pl-10"], [1, "mt-4", "flex", "items-center", "space-x-4"], [1, "mt-1", "pl-10"], [1, "absolute", "top-4", "right-4", "text-sm"], ["matRipple", "", 1, "!bg-opacity-20", "mb-4", "flex", "w-full", "items-center", "space-x-2", "rounded-3xl", "px-2", "py-1", "text-left", 3, "matMenuTriggerFor", "disabled"], [1, "text-xl"], [1, "flex-1", "capitalize"], [1, "text-2xl"], [1, "w-36"], ["mat-menu-item", "", 3, "click"], ["matRipple", "", 1, "border-base-200", "flex", "w-full", "items-center", "rounded-none", "border", "bg-none", "px-2", "py-1", "text-left", 3, "matMenuTriggerFor", "disabled"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"]], template: function AssetRequestDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, AssetRequestDetailsComponent_Conditional_0_Template, 110, 76, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.request() ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      IconComponent,
      UserAvatarComponent,
      DatePipe,
      TranslatePipe,
      SplitJoinPipe,
      LevelPipe,
      DurationPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetRequestDetailsComponent, [{
    type: Component,
    args: [{ selector: "asset-request-details", template: `
        @if (request()) {
            <div
                class="fixed inset-0 z-50"
                (click)="request.set(null); requestChange.emit(request())"
            >
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div
                    class="bg-base-100 absolute inset-y-0 right-0 w-[480px]"
                    (click)="$event.stopPropagation()"
                >
                    <button
                        icon
                        matRipple
                        (click)="
                            request.set(null); requestChange.emit(request())
                        "
                        class="absolute top-1 right-1"
                    >
                        <icon>close</icon>
                    </button>
                    <div
                        class="border-base-200 flex space-x-4 border-b px-2 py-4"
                    >
                        <a-user-avatar
                            [user]="$any({ name: request().user_name })"
                            class="text-xl"
                        ></a-user-avatar>
                        <div details class="space-y-1">
                            <div class="font-medium">
                                {{ request().user_name }}
                            </div>
                            <div class="flex items-center space-x-2 text-sm">
                                <icon>mail</icon>
                                <a
                                    class="underline"
                                    [href]="'mailto:' + request().user_email"
                                >
                                    {{
                                        request().user_email ||
                                            'staff@place.tech'
                                    }}
                                </a>
                            </div>
                            <div class="flex items-center space-x-2 text-sm">
                                <icon>call</icon>
                                <a
                                    class="underline"
                                    [href]="'tel:' + request().user_phone"
                                >
                                    {{ request().user_phone || '04 1234 5678' }}
                                </a>
                            </div>
                            <div class="flex items-center space-x-2 text-sm">
                                <icon>work_outline</icon>
                                <div>
                                    {{ request().user_company || 'PlaceOS' }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative px-3 py-4">
                        <div class="flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">send</icon>
                            </div>
                            <div class="font-medium">
                                {{
                                    'APP.CONCIERGE.ASSETS_REQUESTS_ITEMS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="mt-1 flex flex-col pl-10">
                            @for (item of items(); track item) {
                                <div>
                                    {{ item.name }}
                                    <span
                                        class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                    >
                                        x{{ item.quantity }}
                                    </span>
                                </div>
                            }
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">event</icon>
                            </div>
                            <div class="font-medium">
                                {{
                                    'APP.CONCIERGE.ASSETS_REQUESTS_DATE'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{ request().date | date: 'EEEE, MMMM d, y' }}
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">schedule</icon>
                            </div>
                            <div class="font-medium">
                                {{ 'FORM.PERIOD' | translate }}
                            </div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{ request().date | date: time_format() }} &ndash;
                            {{
                                request().date + request().duration * 60 * 1000
                                    | date: time_format()
                            }}
                            ({{ request().duration | duration }})
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">place</icon>
                            </div>
                            <div class="font-medium">Floor</div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{
                                (request().zones | level)?.display_name || 'N/A'
                            }}
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">meeting_room</icon>
                            </div>
                            <div class="font-medium">
                                {{ 'RESOURCE.ROOM' | translate }}
                            </div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{ request().description }}
                        </div>
                        <div class="absolute top-4 right-4 text-sm">
                            <button
                                matRipple
                                class="!bg-opacity-20 mb-4 flex w-full items-center space-x-2 rounded-3xl px-2 py-1 text-left"
                                [class.bg-success]="
                                    request().status === 'approved'
                                "
                                [class.bg-error]="
                                    request().status === 'declined'
                                "
                                [class.bg-warning]="
                                    request().status === 'tentative'
                                "
                                [matMenuTriggerFor]="menu"
                                [disabled]="loading()"
                            >
                                <icon
                                    class="text-xl"
                                    [class.text-green-600]="
                                        request().status === 'approved'
                                    "
                                    [class.text-red-600]="
                                        request().status === 'declined'
                                    "
                                    [class.text-yellow-400]="
                                        request().status === 'tentative'
                                    "
                                >
                                    {{
                                        request().status === 'approved'
                                            ? 'done'
                                            : request().status === 'declined'
                                              ? 'close'
                                              : 'warning'
                                    }}
                                </icon>
                                <div class="flex-1 capitalize">
                                    {{ request().status }}
                                </div>
                                <icon class="text-2xl">expand_more</icon>
                            </button>
                            <mat-menu #menu="matMenu" class="w-36">
                                <button
                                    mat-menu-item
                                    (click)="setStatus('approved')"
                                >
                                    {{ 'COMMON.APPROVE' | translate }}
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setStatus('declined')"
                                >
                                    {{ 'COMMON.DECLINE' | translate }}
                                </button>
                            </mat-menu>
                            <button
                                matRipple
                                class="border-base-200 flex w-full items-center rounded-none border bg-none px-2 py-1 text-left"
                                [matMenuTriggerFor]="tracking_menu"
                                [disabled]="loading()"
                            >
                                <div class="flex-1 capitalize">
                                    {{
                                        (request().extension_data?.tracking
                                            | splitjoin) || 'In Storage'
                                    }}
                                </div>
                                <icon class="text-2xl">expand_more</icon>
                            </button>
                            <mat-menu #tracking_menu="matMenu" class="w-36">
                                <button
                                    mat-menu-item
                                    (click)="setTracking('in_storage')"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE'
                                            | translate
                                    }}
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setTracking('in_transit')"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT'
                                            | translate
                                    }}
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setTracking('at_location')"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION'
                                            | translate
                                    }}
                                </button>
                            </mat-menu>
                        </div>
                    </div>
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      MatMenuModule,
      TranslatePipe,
      SplitJoinPipe,
      MatRippleModule,
      IconComponent,
      LevelPipe,
      UserAvatarComponent,
      DurationPipe
    ] }]
  }], null, { requestInput: [{ type: Input, args: [{ isSignal: true, alias: "request", required: false }] }], requestChange: [{ type: Output, args: ["requestChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetRequestDetailsComponent, { className: "AssetRequestDetailsComponent", filePath: "apps/concierge/src/app/asset-manager/asset-request-details.component.ts", lineNumber: 290 });
})();

// apps/concierge/src/app/asset-manager/asset-request-list.component.ts
var _c010 = (a0) => ({ count: a0 });
var _c19 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c27 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "8rem" });
var _c33 = (a0, a1) => ({ key: "assets", name: a0, content: a1, sortable: false });
var _c43 = (a0, a1) => ({ key: "level_code", name: a0, content: a1, size: "9rem" });
var _c53 = (a0) => ({ key: "description", name: a0 });
var _c62 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "11rem" });
var _c7 = (a0, a1) => ({ key: "tracking", name: a0, content: a1, size: "12rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _c9 = () => [];
function AssetRequestListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.user_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 3, ctx_r1.date(row_r1), "MMM d, " + ctx_r1.time_format()), " \u2013 ", \u0275\u0275pipeBind2(6, 6, ctx_r1.date(row_r1) + row_r1.duration * 60 * 1e3, "MMM d, " + ctx_r1.time_format()), " ");
  }
}
function AssetRequestListComponent_ng_template_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r3.quantity || 1, "\xD7 ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r3.name, " ");
  }
}
function AssetRequestListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, AssetRequestListComponent_ng_template_19_For_2_Template, 4, 2, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r4.extension_data?.request?.items || \u0275\u0275pureFunction0(0, _c9));
  }
}
function AssetRequestListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r5.date + row_r5.extension_data?.request?.deliver_offset * 60 * 1e3 + row_r5.extension_data?.request?.deliver_day_offset * 24 * 60 * 60 * 1e3, "MMM d, " + ctx_r1.time_format()), " ");
  }
}
function AssetRequestListComponent_ng_template_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function AssetRequestListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AssetRequestListComponent_ng_template_23_Conditional_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.level(row_r6)?.display_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.level(row_r6) ? 2 : -1);
  }
}
function AssetRequestListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_25_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "icon", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 26);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 6)(10, "button", 27);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_25_Template_button_click_10_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatus(row_r8, "approved"));
    });
    \u0275\u0275elementStart(11, "div", 28)(12, "icon", 26);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 29);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 27);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_25_Template_button_click_17_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatus(row_r8, "declined"));
    });
    \u0275\u0275elementStart(18, "div", 28)(19, "icon", 26);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 29);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const menu_r9 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", row_r8.status === "approved")("bg-error", row_r8.status === "declined")("bg-warning", row_r8.status === "tentative")("text-success-content", row_r8.status === "approved")("text-error-content", row_r8.status === "declined")("text-warning-content", row_r8.status === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r9)("disabled", ctx_r1.loading()[row_r8.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r8.status === "approved" ? "done" : row_r8.status === "declined" ? "close" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.status);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, "APP.CONCIERGE.ASSETS_REQUESTS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 20, "APP.CONCIERGE.ASSETS_REQUESTS_ACTION_DECLINE"), " ");
  }
}
function AssetRequestListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 30);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_27_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "splitjoin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 26);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 7)(9, "button", 27);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_27_Template_button_click_9_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking(row_r11, "in_storage"));
    });
    \u0275\u0275elementStart(10, "div", 28)(11, "icon", 26);
    \u0275\u0275text(12, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 29);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 27);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_27_Template_button_click_16_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking(row_r11, "in_transit"));
    });
    \u0275\u0275elementStart(17, "div", 28)(18, "icon", 26);
    \u0275\u0275text(19, "trolley");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 29);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 27);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_27_Template_button_click_23_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking(row_r11, "at_location"));
    });
    \u0275\u0275elementStart(24, "div", 28)(25, "icon", 26);
    \u0275\u0275text(26, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 29);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const tracking_menu_r12 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", tracking_menu_r12)("disabled", ctx_r1.loading()[row_r11.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, row_r11.extension_data?.tracking) || "In Storage", " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 12, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION"), " ");
  }
}
var AssetRequestListComponent = class _AssetRequestListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.requests = computed(
      () => {
        const list = this._state.filtered_requests();
        list.forEach((request) => this.level(request));
        return list;
      },
      ...ngDevMode ? [{ debugName: "requests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = this._state.options;
    this.request = signal(
      null,
      ...ngDevMode ? [{ debugName: "request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      {},
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this._settings.time_format,
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setDate = (date) => this._state.setOptions({ date });
  }
  date(booking) {
    return booking.all_day ? startOfDay(booking.date).valueOf() : booking.date;
  }
  async setStatus(item, status) {
    this.loading.update((loading) => __spreadProps(__spreadValues({}, loading), { [item.id]: true }));
    await this._state.setStatus(item, status);
    this.loading.update((loading) => __spreadProps(__spreadValues({}, loading), { [item.id]: false }));
  }
  async setTracking(item, state) {
    this.loading.update((loading) => __spreadProps(__spreadValues({}, loading), { [item.id]: true }));
    await this._state.setTracking(item, state);
    this.loading.update((loading) => __spreadProps(__spreadValues({}, loading), { [item.id]: false }));
  }
  level(item) {
    const zones = item.zones;
    const level = this._org.levelWithID(zones);
    item.level = level?.display_name || level?.name || zones[0] || "";
    item.level_code = level?.code || zones[0] || "";
    return level;
  }
  ngOnInit() {
    this.subscription("polling", this._state.startPolling());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetRequestListComponent_BaseFactory;
      return function AssetRequestListComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetRequestListComponent_BaseFactory || (\u0275AssetRequestListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetRequestListComponent)))(__ngFactoryType__ || _AssetRequestListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetRequestListComponent, selectors: [["app-asset-request-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 30, vars: 57, consts: [["user_template", ""], ["assets_template", ""], ["date_template", ""], ["level_template", ""], ["approval_template", ""], ["tracking_template", ""], ["menu", "matMenu"], ["tracking_menu", "matMenu"], [1, "relative", "flex", "h-[calc(100%-1rem)]", "w-full", "flex-col"], [1, "flex", "items-center", "justify-between"], [1, "p-4", "text-sm", "opacity-60"], [3, "dateChange", "date"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "pt-2"], ["asset-requests", "", 1, "block", "min-w-328", "text-sm", 3, "row_clicked", "data", "filter", "columns", "empty_message", "sortable"], [1, "h-20", "w-full"], [3, "requestChange", "request"], [1, "flex", "flex-col", "px-4", "py-2", "text-left"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-col", "p-4"], [1, "font-mono", "text-sm"], [1, "p-4"], [1, "opacity-30"], [1, "px-4", "py-2"], ["matRipple", "", 1, "!bg-opacity-20", "flex", "w-full", "items-center", "space-x-2", "rounded-3xl", "px-2", "py-1", "text-left", 3, "click", "matMenuTriggerFor", "disabled"], [1, "text-xl"], [1, "flex-1", "capitalize"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-sm", "bg-none", "px-2", "py-1", "text-left", 3, "click", "matMenuTriggerFor", "disabled"], [1, "min-w-32", "flex-1", "capitalize"]], template: function AssetRequestListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "date-options", 11);
        \u0275\u0275listener("dateChange", function AssetRequestListComponent_Template_date_options_dateChange_5_listener($event) {
          return ctx.setDate($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 12)(7, "simple-table", 13);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275listener("row_clicked", function AssetRequestListComponent_Template_simple_table_row_clicked_7_listener($event) {
          return ctx.request.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "div", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, AssetRequestListComponent_ng_template_17_Template, 7, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, AssetRequestListComponent_ng_template_19_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, AssetRequestListComponent_ng_template_21_Template, 3, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(23, AssetRequestListComponent_ng_template_23_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(25, AssetRequestListComponent_ng_template_25_Template, 24, 22, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(27, AssetRequestListComponent_ng_template_27_Template, 30, 14, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(29, "asset-request-details", 15);
        \u0275\u0275listener("requestChange", function AssetRequestListComponent_Template_asset_request_details_requestChange_29_listener($event) {
          return ctx.request.set($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const user_template_r13 = \u0275\u0275reference(18);
        const assets_template_r14 = \u0275\u0275reference(20);
        const date_template_r15 = \u0275\u0275reference(22);
        const level_template_r16 = \u0275\u0275reference(24);
        const approval_template_r17 = \u0275\u0275reference(26);
        const tracking_template_r18 = \u0275\u0275reference(28);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 8, "APP.CONCIERGE.ASSETS_REQUESTS_COUNT", \u0275\u0275pureFunction1(27, _c010, ctx.requests().length)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("date", ctx.filters().date);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.requests())("filter", ctx.filters().search)("columns", \u0275\u0275pureFunction7(49, _c8, \u0275\u0275pureFunction2(29, _c19, \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.ASSETS_REQUESTS_USER"), user_template_r13), \u0275\u0275pureFunction2(32, _c27, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.ASSETS_REQUESTS_TIME"), date_template_r15), \u0275\u0275pureFunction2(35, _c33, \u0275\u0275pipeBind1(10, 15, "RESOURCE.ASSETS"), assets_template_r14), \u0275\u0275pureFunction2(38, _c43, \u0275\u0275pipeBind1(11, 17, "RESOURCE.LEVEL"), level_template_r16), \u0275\u0275pureFunction1(41, _c53, \u0275\u0275pipeBind1(12, 19, "COMMON.LOCATION")), \u0275\u0275pureFunction2(43, _c62, \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.ASSETS_REQUESTS_APPROVAL"), approval_template_r17), \u0275\u0275pureFunction2(46, _c7, \u0275\u0275pipeBind1(14, 23, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING"), tracking_template_r18)))("empty_message", \u0275\u0275pipeBind1(15, 25, ctx.filters().search ? "APP.CONCIERGE.ASSETS_REQUESTS_SEARCH_EMPTY" : "APP.CONCIERGE.ASSETS_REQUESTS_EMPTY"))("sortable", true);
        \u0275\u0275advance(22);
        \u0275\u0275property("request", ctx.request());
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      DateOptionsComponent,
      SimpleTableComponent,
      AssetRequestDetailsComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      DatePipe,
      SplitJoinPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=asset-request-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetRequestListComponent, [{
    type: Component,
    args: [{ selector: "app-asset-request-list", template: `
        <div class="relative flex h-[calc(100%-1rem)] w-full flex-col">
            <div class="flex items-center justify-between">
                <div class="p-4 text-sm opacity-60">
                    {{
                        'APP.CONCIERGE.ASSETS_REQUESTS_COUNT'
                            | translate: { count: requests().length }
                    }}
                </div>
                <date-options
                    [date]="filters().date"
                    (dateChange)="setDate($event)"
                ></date-options>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto pt-2">
                <simple-table
                    class="block min-w-328 text-sm"
                    asset-requests
                    [data]="requests()"
                    [filter]="filters().search"
                    [columns]="[
                        {
                            key: 'user_name',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_USER'
                                | translate,
                            content: user_template,
                        },
                        {
                            key: 'date',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_TIME'
                                | translate,
                            content: date_template,
                            size: '8rem',
                        },
                        {
                            key: 'assets',
                            name: 'RESOURCE.ASSETS' | translate,
                            content: assets_template,
                            sortable: false,
                        },
                        {
                            key: 'level_code',
                            name: 'RESOURCE.LEVEL' | translate,
                            content: level_template,
                            size: '9rem',
                        },
                        {
                            key: 'description',
                            name: 'COMMON.LOCATION' | translate,
                        },
                        {
                            key: 'status',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_APPROVAL'
                                | translate,
                            content: approval_template,
                            size: '11rem',
                        },
                        {
                            key: 'tracking',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING'
                                | translate,
                            content: tracking_template,
                            size: '12rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="
                        (filters().search
                            ? 'APP.CONCIERGE.ASSETS_REQUESTS_SEARCH_EMPTY'
                            : 'APP.CONCIERGE.ASSETS_REQUESTS_EMPTY'
                        ) | translate
                    "
                    [sortable]="true"
                    (row_clicked)="request.set($event)"
                ></simple-table>
                <div class="h-20 w-full"></div>
            </div>
        </div>
        <ng-template #user_template let-row="row">
            <div class="flex flex-col px-4 py-2 text-left">
                <div>{{ row.user_name }}</div>
                <div class="text-xs opacity-30">
                    {{ date(row) | date: 'MMM d, ' + time_format() }} &ndash;
                    {{
                        date(row) + row.duration * 60 * 1000
                            | date: 'MMM d, ' + time_format()
                    }}
                </div>
            </div>
        </ng-template>
        <ng-template #assets_template let-row="row">
            <div class="flex flex-col p-4">
                @for (
                    asset of row.extension_data?.request?.items || [];
                    track asset
                ) {
                    <div>
                        <span class="font-mono text-sm">
                            {{ asset.quantity || 1 }}\xD7
                        </span>
                        {{ asset.name }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #date_template let-row="row">
            <div class="p-4">
                {{
                    row.date +
                        row.extension_data?.request?.deliver_offset *
                            60 *
                            1000 +
                        row.extension_data?.request?.deliver_day_offset *
                            24 *
                            60 *
                            60 *
                            1000 | date: 'MMM d, ' + time_format()
                }}
            </div>
        </ng-template>
        <ng-template #level_template let-row="row">
            <div class="p-4">
                {{ level(row)?.display_name }}
                @if (!level(row)) {
                    <span class="opacity-30">N/A</span>
                }
            </div>
        </ng-template>
        <ng-template #approval_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="!bg-opacity-20 flex w-full items-center space-x-2 rounded-3xl px-2 py-1 text-left"
                    [class.bg-success]="row.status === 'approved'"
                    [class.bg-error]="row.status === 'declined'"
                    [class.bg-warning]="row.status === 'tentative'"
                    [class.text-success-content]="row.status === 'approved'"
                    [class.text-error-content]="row.status === 'declined'"
                    [class.text-warning-content]="row.status === 'tentative'"
                    [matMenuTriggerFor]="menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading()[row.id]"
                >
                    <icon class="text-xl">
                        {{
                            row.status === 'approved'
                                ? 'done'
                                : row.status === 'declined'
                                  ? 'close'
                                  : 'warning'
                        }}
                    </icon>
                    <div class="flex-1 capitalize">{{ row.status }}</div>
                    <icon class="text-2xl">expand_more</icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="setStatus(row, 'approved')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_ACTION_APPROVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setStatus(row, 'declined')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_busy</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_ACTION_DECLINE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #tracking_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="flex w-full items-center rounded-sm bg-none px-2 py-1 text-left"
                    [matMenuTriggerFor]="tracking_menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading()[row.id]"
                >
                    <div class="min-w-32 flex-1 capitalize">
                        {{
                            (row.extension_data?.tracking | splitjoin) ||
                                'In Storage'
                        }}
                    </div>
                    <icon class="text-2xl">expand_more</icon>
                </button>
            </div>
            <mat-menu #tracking_menu="matMenu">
                <button mat-menu-item (click)="setTracking(row, 'in_storage')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">inventory</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'in_transit')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">trolley</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'at_location')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">place</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <asset-request-details
            [request]="request()"
            (requestChange)="request.set($event)"
        />
    `, imports: [
      CommonModule,
      MatRippleModule,
      DateOptionsComponent,
      SimpleTableComponent,
      AssetRequestDetailsComponent,
      MatMenuModule,
      IconComponent,
      SplitJoinPipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;6714f28fad7d44bfe3f2ce1c97e51c47788fbc9ca35df075a6079c15b86aa170;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/asset-manager/asset-request-list.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=asset-request-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetRequestListComponent, { className: "AssetRequestListComponent", filePath: "apps/concierge/src/app/asset-manager/asset-request-list.component.ts", lineNumber: 289 });
})();

// apps/concierge/src/app/asset-manager/asset-location-modal.component.ts
var _c011 = (a0) => ({ key: "zone", name: "Level", content: a0 });
var _c110 = () => ({ key: "description", name: "Space" });
var _c28 = (a0) => ({ key: "tracking", name: "Tracking", content: a0 });
var _c34 = () => ({ key: "user_name", name: "Requestee" });
var _c44 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c54 = () => ({ display: "none" });
var _c63 = (a0, a1) => ({ "#Zones": a0, "#zones": a1 });
function AssetLocationModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.level(ctx_r1.selected().zones?.[0])?.display_name || "N/A", " ");
  }
}
function AssetLocationModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.level(ctx_r1.selected().zones?.[0])?.map_id || "")("styles", \u0275\u0275pureFunction2(5, _c63, \u0275\u0275pureFunction0(3, _c54), \u0275\u0275pureFunction0(4, _c54)))("features", ctx_r1.selected_feature());
  }
}
function AssetLocationModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, " Select a space from the list to view map location ");
    \u0275\u0275elementEnd();
  }
}
function AssetLocationModalComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.level(data_r3)?.display_name || "N/A", " ");
  }
}
function AssetLocationModalComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275listener("click", function AssetLocationModalComponent_ng_template_19_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "splitjoin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 20);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 2)(9, "button", 21);
    \u0275\u0275listener("click", function AssetLocationModalComponent_ng_template_19_Template_button_click_9_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking(row_r5, "in_storage"));
    });
    \u0275\u0275elementStart(10, "div", 22)(11, "icon", 20);
    \u0275\u0275text(12, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 23);
    \u0275\u0275text(14, "In Storage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 21);
    \u0275\u0275listener("click", function AssetLocationModalComponent_ng_template_19_Template_button_click_15_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking(row_r5, "in_transit"));
    });
    \u0275\u0275elementStart(16, "div", 22)(17, "icon", 20);
    \u0275\u0275text(18, "trolley");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23);
    \u0275\u0275text(20, "In Transit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 21);
    \u0275\u0275listener("click", function AssetLocationModalComponent_ng_template_19_Template_button_click_21_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTracking(row_r5, "at_location"));
    });
    \u0275\u0275elementStart(22, "div", 22)(23, "icon", 20);
    \u0275\u0275text(24, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 23);
    \u0275\u0275text(26, "At Location");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const tracking_menu_r6 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", tracking_menu_r6)("disabled", ctx_r1.loading()[row_r5.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, row_r5.extension_data?.tracking) || "In Storage", " ");
  }
}
var AssetLocationModalComponent = class _AssetLocationModalComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this._org = inject(OrganisationService);
    this.asset = this._state.active_product;
    this.requests = this._state.active_product_requests;
    this._space = new SpacePipe(this._org);
    this.selected = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_feature = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected_feature" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      {},
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async updateFeatures() {
    const selected = this.selected();
    if (!selected) {
      this.selected_feature.set([]);
      return;
    }
    const space = await this._space.transform(selected.extension_data?.location_id);
    this.selected_feature.set([
      {
        location: space.map_id,
        content: MapPinComponent,
        z_index: 99,
        data: {
          message: `${space.display_name || space.name} is here`
        }
      }
    ]);
  }
  async setTracking(item, state) {
    this.loading.update((loading) => __spreadProps(__spreadValues({}, loading), { [item.id]: true }));
    await this._state.setTracking(item, state);
    this.loading.update((loading) => __spreadProps(__spreadValues({}, loading), { [item.id]: false }));
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  static {
    this.\u0275fac = function AssetLocationModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetLocationModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetLocationModalComponent, selectors: [["asset-location-modal"]], decls: 21, vars: 18, consts: [["level_template", ""], ["tracking_template", ""], ["tracking_menu", "matMenu"], [1, "relative", "p-6"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-4", "right-4"], [1, "mb-2", "font-medium"], ["appearance", "outline", 1, "mb-2", "h-14"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search..."], [1, "flex", "w-[90vw]", "items-center", "space-x-4", "text-sm"], [1, "border-base-200", "bg-base-200", "h-[60vh]", "w-1/2", "flex-1", "overflow-auto", "border"], ["empty_message", "No requested assets for this product", 1, "block", "w-full", 3, "row_clicked", "data", "columns", "sortable"], [1, "border-base-200", "bg-base-200", "relative", "flex", "h-[60vh]", "w-1/2", "flex-1", "items-center", "justify-center", "border"], [1, "border-base-200", "bg-base-100", "absolute", "top-4", "left-4", "rounded-3xl", "border", "px-4", "py-2"], [3, "src", "styles", "features"], [1, "opacity-30"], [1, "p-4"], [1, "px-4", "py-2"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-sm", "bg-none", "px-2", "py-1", "text-left", 3, "click", "matMenuTriggerFor", "disabled"], [1, "min-w-32", "flex-1", "capitalize"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"]], template: function AssetLocationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "button", 4)(2, "icon");
        \u0275\u0275text(3, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "h2", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-form-field", 6)(7, "icon", 7);
        \u0275\u0275text(8, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "simple-table", 11);
        \u0275\u0275listener("row_clicked", function AssetLocationModalComponent_Template_simple_table_row_clicked_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.selected.set($event);
          return \u0275\u0275resetView(ctx.updateFeatures());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 12);
        \u0275\u0275conditionalCreate(14, AssetLocationModalComponent_Conditional_14_Template, 2, 1, "div", 13);
        \u0275\u0275conditionalCreate(15, AssetLocationModalComponent_Conditional_15_Template, 1, 8, "interactive-map", 14)(16, AssetLocationModalComponent_Conditional_16_Template, 2, 0, "p", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, AssetLocationModalComponent_ng_template_17_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, AssetLocationModalComponent_ng_template_19_Template, 27, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const level_template_r7 = \u0275\u0275reference(18);
        const tracking_template_r8 = \u0275\u0275reference(20);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", ctx.asset()?.name, " in use location: ", ctx.requests().length, " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("data", ctx.requests())("columns", \u0275\u0275pureFunction4(13, _c44, \u0275\u0275pureFunction1(7, _c011, level_template_r7), \u0275\u0275pureFunction0(9, _c110), \u0275\u0275pureFunction1(10, _c28, tracking_template_r8), \u0275\u0275pureFunction0(12, _c34)))("sortable", true);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected() ? 15 : 16);
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      InteractiveMapComponent,
      SimpleTableComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      SplitJoinPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetLocationModalComponent, [{
    type: Component,
    args: [{ selector: "asset-location-modal", template: `
        <div class="relative p-6">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-4 right-4"
            >
                <icon>close</icon>
            </button>
            <h2 class="mb-2 font-medium">
                {{ asset()?.name }} in use location:
                {{ requests().length }}
            </h2>
            <mat-form-field appearance="outline" class="mb-2 h-14">
                <icon matPrefix>search</icon>
                <input matInput placeholder="Search..." />
            </mat-form-field>
            <div class="flex w-[90vw] items-center space-x-4 text-sm">
                <div
                    class="border-base-200 bg-base-200 h-[60vh] w-1/2 flex-1 overflow-auto border"
                >
                    <simple-table
                        class="block w-full"
                        [data]="requests()"
                        [columns]="[
                            {
                                key: 'zone',
                                name: 'Level',
                                content: level_template,
                            },
                            { key: 'description', name: 'Space' },
                            {
                                key: 'tracking',
                                name: 'Tracking',
                                content: tracking_template,
                            },
                            { key: 'user_name', name: 'Requestee' },
                        ]"
                        [sortable]="true"
                        empty_message="No requested assets for this product"
                        (row_clicked)="
                            selected.set($any($event)); updateFeatures()
                        "
                    ></simple-table>
                </div>
                <div
                    class="border-base-200 bg-base-200 relative flex h-[60vh] w-1/2 flex-1 items-center justify-center border"
                >
                    @if (selected()) {
                        <div
                            class="border-base-200 bg-base-100 absolute top-4 left-4 rounded-3xl border px-4 py-2"
                        >
                            {{
                                level(selected().zones?.[0])?.display_name ||
                                    'N/A'
                            }}
                        </div>
                    }
                    @if (selected()) {
                        <interactive-map
                            [src]="level(selected().zones?.[0])?.map_id || ''"
                            [styles]="{
                                '#Zones': { display: 'none' },
                                '#zones': { display: 'none' },
                            }"
                            [features]="selected_feature()"
                        ></interactive-map>
                    } @else {
                        <p class="opacity-30">
                            Select a space from the list to view map location
                        </p>
                    }
                </div>
            </div>
        </div>
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ level(data)?.display_name || 'N/A' }}
            </div>
        </ng-template>
        <ng-template #tracking_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="flex w-full items-center rounded-sm bg-none px-2 py-1 text-left"
                    [matMenuTriggerFor]="tracking_menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading()[row.id]"
                >
                    <div class="min-w-32 flex-1 capitalize">
                        {{
                            (row.extension_data?.tracking | splitjoin) ||
                                'In Storage'
                        }}
                    </div>
                    <icon class="text-2xl">expand_more</icon>
                </button>
            </div>
            <mat-menu #tracking_menu="matMenu">
                <button mat-menu-item (click)="setTracking(row, 'in_storage')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">inventory</icon>
                        <div class="pr-2">In Storage</div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'in_transit')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">trolley</icon>
                        <div class="pr-2">In Transit</div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'at_location')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">place</icon>
                        <div class="pr-2">At Location</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `, imports: [
      MatDialogModule,
      MatMenuModule,
      IconComponent,
      SplitJoinPipe,
      InteractiveMapComponent,
      SimpleTableComponent,
      MatFormFieldModule,
      MatInputModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetLocationModalComponent, { className: "AssetLocationModalComponent", filePath: "apps/concierge/src/app/asset-manager/asset-location-modal.component.ts", lineNumber: 153 });
})();

// apps/concierge/src/app/asset-manager/asset-view.component.ts
var _c012 = () => ["/book/assets", "list", "items"];
var _c111 = (a0) => [a0, "manage", "group"];
var _c29 = (a0) => ({ id: a0 });
var _c35 = () => [];
var _c45 = (a0) => ({ count: a0 });
var _c55 = (a0) => [a0, "manage", "asset"];
var _c64 = (a0) => ({ group_id: a0 });
var _c72 = (a0) => [a0, "manage", "asset-bulk"];
var _c82 = (a0) => ({ key: "id", name: a0 });
var _c92 = (a0) => ({ key: "identifier", name: a0 });
var _c10 = (a0) => ({ key: "serial_number", name: a0 });
var _c11 = (a0) => ({ key: "actions", name: " ", content: a0, size: "5.5rem", sortable: false });
var _c122 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c132 = (a0) => [a0, "manage", "purchase-order"];
var _c142 = (a0) => ({ key: "purchase_order_number", name: a0 });
var _c152 = (a0) => ({ key: "invoice_number", name: a0 });
var _c162 = (a0, a1) => ({ key: "expected_service_start_date", name: a0, content: a1 });
var _c172 = (a0, a1) => ({ key: "expected_service_end_date", name: a0, content: a1 });
var _c182 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c192 = (a0, a1) => ({ id: a0, group_id: a1 });
function AssetViewComponent_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item()?.description || "~No Description~", " ");
  }
}
function AssetViewComponent_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.NO_DESCRIPTION"));
  }
}
function AssetViewComponent_Conditional_0_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "a", 39);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AssetViewComponent_Conditional_0_ng_template_61_Template_button_click_5_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeAsset(row_r4));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c55, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction2(10, _c192, row_r4.id, ctx_r1.item()?.id))("matTooltip", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.ASSETS_ITEM_ASSET_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.ASSETS_ITEM_ASSET_REMOVE"));
  }
}
function AssetViewComponent_Conditional_0_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "a", 41)(2, "icon", 42);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function AssetViewComponent_Conditional_0_ng_template_88_Template_button_click_4_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePurchaseOrder(row_r6));
    });
    \u0275\u0275elementStart(5, "icon", 42);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c132, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction2(4, _c192, row_r6.id, row_r6?.id));
  }
}
function AssetViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6)(2, "a", 7)(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "h2", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 10);
    \u0275\u0275elementStart(12, "a", 11)(13, "div", 12)(14, "icon", 13);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 15)(20, "div", 12)(21, "icon", 13);
    \u0275\u0275text(22, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 14);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 17);
    \u0275\u0275element(28, "image-carousel", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19)(30, "div", 20);
    \u0275\u0275conditionalCreate(31, AssetViewComponent_Conditional_0_Conditional_31_Template, 1, 1)(32, AssetViewComponent_Conditional_0_Conditional_32_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 22)(34, "div", 23)(35, "div", 24);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 23)(39, "div", 24);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 25);
    \u0275\u0275listener("click", function AssetViewComponent_Conditional_0_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewLocations());
    });
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(45, "mat-tab-group", 26)(46, "mat-tab", 27);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementStart(48, "div", 28)(49, "div", 29)(50, "a", 30);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "a", 30);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(56, "simple-table", 31);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275template(61, AssetViewComponent_Conditional_0_ng_template_61_Template, 9, 13, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "mat-tab", 27);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementStart(65, "div", 28)(66, "h3", 32);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 33)(70, "div", 34)(71, "div", 35);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(76, "mat-tab", 27);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementStart(78, "div", 28)(79, "a", 36);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "simple-table", 37);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275template(88, AssetViewComponent_Conditional_0_ng_template_88_Template, 7, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const action_template_r7 = \u0275\u0275reference(62);
    const po_action_template_r8 = \u0275\u0275reference(89);
    const ctx_r1 = \u0275\u0275nextContext();
    const date_template_r9 = \u0275\u0275reference(3);
    const delete_tooltip_r10 = \u0275\u0275reference(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(85, _c012));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 37, "APP.CONCIERGE.ASSETS_MANAGE_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.item()?.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(86, _c111, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction1(88, _c29, ctx_r1.item()?.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 39, "COMMON.EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("content", delete_tooltip_r10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 41, "COMMON.DELETE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("images", ctx_r1.item()?.images || \u0275\u0275pureFunction0(90, _c35));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.item()?.description ? 31 : 32);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 43, "APP.CONCIERGE.ASSETS_ITEM_AVAILABLE", \u0275\u0275pureFunction1(91, _c45, ctx_r1.available_count())), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 46, "APP.CONCIERGE.ASSETS_ITEM_IN_USE", \u0275\u0275pureFunction1(93, _c45, ctx_r1.requests().length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.available_count() !== 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 49, "APP.CONCIERGE.ASSETS_ITEM_VIEW_LOCATIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(47, 51, "APP.CONCIERGE.ASSETS_ITEM_TAB_ASSETS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(95, _c55, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction1(97, _c64, ctx_r1.item()?.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 53, "APP.CONCIERGE.ASSETS_ITEM_ASSET_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(99, _c72, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction1(101, _c64, ctx_r1.item()?.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 55, "APP.CONCIERGE.ASSETS_ITEM_ASSET_BULK_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r1.asset_list())("columns", \u0275\u0275pureFunction4(111, _c122, \u0275\u0275pureFunction1(103, _c82, \u0275\u0275pipeBind1(57, 57, "APP.CONCIERGE.ASSETS_ITEM_ASSET_ID")), \u0275\u0275pureFunction1(105, _c92, \u0275\u0275pipeBind1(58, 59, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME")), \u0275\u0275pureFunction1(107, _c10, \u0275\u0275pipeBind1(59, 61, "APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL")), \u0275\u0275pureFunction1(109, _c11, action_template_r7)))("empty_message", \u0275\u0275pipeBind1(60, 63, "APP.CONCIERGE.ASSETS_ITEM_ASSET_EMPTY"))("sortable", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(64, 65, "APP.CONCIERGE.ASSETS_ITEM_TAB_SPECS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 67, "APP.CONCIERGE.ASSETS_ITEM_GENERAL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 69, "APP.CONCIERGE.ASSETS_ITEM_BRAND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item()?.brand || "~None~", " ");
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(77, 71, "APP.CONCIERGE.ASSETS_ITEM_TAB_PURCHASE_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(116, _c132, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction1(118, _c64, ctx_r1.item()?.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 73, "APP.CONCIERGE.ASSETS_PURCHASE_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r1.item()?.purchase_orders || \u0275\u0275pureFunction0(120, _c35))("columns", \u0275\u0275pureFunction5(133, _c182, \u0275\u0275pureFunction1(121, _c142, \u0275\u0275pipeBind1(83, 75, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER")), \u0275\u0275pureFunction1(123, _c152, \u0275\u0275pipeBind1(84, 77, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE")), \u0275\u0275pureFunction2(125, _c162, \u0275\u0275pipeBind1(85, 79, "APP.CONCIERGE.ASSETS_PURCHASE_START"), date_template_r9), \u0275\u0275pureFunction2(128, _c172, \u0275\u0275pipeBind1(86, 81, "APP.CONCIERGE.ASSETS_PURCHASE_END"), date_template_r9), \u0275\u0275pureFunction1(131, _c11, po_action_template_r8)))("empty_message", \u0275\u0275pipeBind1(87, 83, "APP.CONCIERGE.ASSETS_ITEM_PURCHASES_EMPTY"))("sortable", true);
  }
}
function AssetViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 44);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.ASSETS_ITEM_LOADING"));
  }
}
function AssetViewComponent_ng_template_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DATE_EMPTY"), " ");
  }
}
function AssetViewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, AssetViewComponent_ng_template_2_Conditional_3_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, data_r11 * 1e3, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!data_r11 ? 3 : -1);
  }
}
function AssetViewComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48)(5, "button", 49);
    \u0275\u0275listener("click", function AssetViewComponent_ng_template_4_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeTooltip());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275listener("click", function AssetViewComponent_ng_template_4_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAsset());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.ASSETS_ITEM_DELETE_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "COMMON.NO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "APP.CONCIERGE.ASSETS_ITEM_DELETE_ACTION"), " ");
  }
}
function AssetViewComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "mat-spinner", 44);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.ASSETS_ITEM_DELETE_LOADING"), " ");
  }
}
function AssetViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetViewComponent_ng_template_4_Conditional_0_Template, 11, 9, "div", 46)(1, AssetViewComponent_ng_template_4_Conditional_1_Template, 5, 4, "div", 47);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.deleting() ? 0 : 1);
  }
}
var AssetViewComponent = class _AssetViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._state = inject(AssetManagerStateService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._injector = inject(Injector);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deleting = signal(
      false,
      ...ngDevMode ? [{ debugName: "deleting" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item = this._state.active_product;
    this.extra_assets = this._state.extra_assets;
    this.asset_list = computed(
      () => {
        const item = this.item();
        if (!item)
          return [];
        return unique([
          ...item.assets,
          ...this.extra_assets().filter((_) => _.asset_type_id === item.id)
        ], "id");
      },
      ...ngDevMode ? [{ debugName: "asset_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.requests_source = this._state.active_product_requests;
    this.requests = computed(
      () => this.requests_source().filter((_) => _.date <= Date.now() && addMinutes(_.date, _.duration).valueOf() >= Date.now()),
      ...ngDevMode ? [{ debugName: "requests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_count = computed(
      () => this.asset_list().length - this.requests().length,
      ...ngDevMode ? [{ debugName: "available_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._tooltip_el = viewChild(
      CustomTooltipComponent,
      ...ngDevMode ? [{ debugName: "_tooltip_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async deleteAsset() {
    this.deleting.set(true);
    await this._state.deleteActiveProduct();
    this.deleting.set(false);
    this._router.navigate([this._state.base_route, "list", "items"]);
    this.closeTooltip();
  }
  closeTooltip() {
    this._tooltip_el()?.close();
  }
  get code() {
    return this._org.currency_code;
  }
  get base_route() {
    return this._state.base_route;
  }
  viewLocations() {
    this._dialog.open(AssetLocationModalComponent);
  }
  ngOnInit() {
    this.loading.set(true);
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("id")) {
        this._state.setOptions({ active_item: params.get("id") });
      }
    }));
    this.timeout("no_asset", () => this._router.navigate([this._state.base_route]), 1e3);
    const ref = effect(() => {
      if (!this._state.active_product())
        return;
      this.clearTimeout("no_asset");
      this.loading.set(false);
      ref.destroy();
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "ref" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
  }
  async removeAsset(asset) {
    const resp = await openConfirmModal({
      title: "Delete asset",
      content: `Are you sure you want to delete this asset?`,
      confirm_text: "Delete",
      icon: { content: "delete" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading("Deleting asset...");
    await vl(asset.id);
    await removeAssetRequests(asset.id);
    const item = this._state.active_product();
    this._state.setOptions({ active_item: "" });
    setTimeout(() => this._state.setOptions({ active_item: item.id }), 1e3);
    resp.close();
  }
  async removePurchaseOrder(asset) {
    const resp = await openConfirmModal({
      title: "Delete purchase order",
      content: `Are you sure you want to delete this purchase order?`,
      confirm_text: "Delete",
      icon: { content: "delete" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading("Deleting purchase order...");
    await Hl(asset.id);
    const item = this._state.active_product();
    this._state.setOptions({ active_item: "" });
    setTimeout(() => this._state.setOptions({ active_item: item.id }), 1e3);
    resp.close();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AssetViewComponent_BaseFactory;
      return function AssetViewComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetViewComponent_BaseFactory || (\u0275AssetViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetViewComponent)))(__ngFactoryType__ || _AssetViewComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetViewComponent, selectors: [["asset-view"]], viewQuery: function AssetViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._tooltip_el, CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 1, consts: [["date_template", ""], ["delete_tooltip", ""], ["action_template", ""], ["po_action_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "bg-base-100", "flex", "w-full", "space-x-2", "pt-8", "pr-8", "pb-4", "pl-4"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "flex", "flex-col"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", 1, "h-12", "w-32", 3, "routerLink", "queryParams"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "border-error", "bg-base-100", "text-error", "h-12", "w-32", 3, "content"], [1, "mb-4", "flex", "items-center", "space-x-4", "px-8"], [1, "bg-base-200", "h-64", "w-[24rem]", "flex-1", "overflow-hidden", "rounded-xl"], [3, "images"], [1, "border-base-300", "flex", "h-64", "w-1/2", "flex-1", "flex-col", "space-y-4", "rounded-lg", "border", "p-4"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], [1, "opacity-30"], [1, "divide-base-200", "border-base-200", "bg-base-100", "w-full", "divide-y", "rounded-sm", "border"], [1, "flex", "h-16", "items-center", "justify-between", "p-2"], [1, "pl-2"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "h-px", "flex-1"], [3, "label"], [1, "mx-auto", "max-w-[768px]", "px-8", "py-4"], [1, "mb-2", "flex", "w-full", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "routerLink", "queryParams"], [1, "block", "min-w-160", "text-sm", 3, "data", "columns", "empty_message", "sortable"], [1, "p-2"], ["data-table", "", 1, "border-base-200", "bg-base-100", "border"], [1, "even:bg-base-200", "flex", "items-center", "justify-between", "p-2"], [1, "w-32", "flex-1", "text-sm", "font-medium"], ["btn", "", "matRipple", "", 1, "mb-2", 3, "routerLink", "queryParams"], ["asset-purchases", "", 1, "block", "min-w-160", "text-sm", 3, "data", "columns", "empty_message", "sortable"], [1, "flex", "w-full", "items-center", "justify-end", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "routerLink", "queryParams", "matTooltip"], ["icon", "", "default", "", "matRipple", "", "error", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "routerLink", "queryParams"], [1, "text-lg"], ["icon", "", "default", "", "matRipple", "", "error", "", 3, "click"], [3, "diameter"], [1, "p-4"], [1, "bg-base-100", "my-2", "w-[18rem]", "rounded-sm", "p-4", "text-center"], [1, "bg-base-100", "my-2", "flex", "h-36", "w-64", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-sm", "p-4"], [1, "mt-6", "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "inverse", "w-24", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "error", "w-24", "flex-1", 3, "click"]], template: function AssetViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, AssetViewComponent_Conditional_0_Template, 90, 139, "div", 4)(1, AssetViewComponent_Conditional_1_Template, 5, 4, "div", 5);
        \u0275\u0275template(2, AssetViewComponent_ng_template_2_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, AssetViewComponent_ng_template_4_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() && ctx.item() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      SimpleTableComponent,
      MatTabsModule,
      MatTab,
      MatTabGroup,
      MatTooltipModule,
      MatTooltip,
      ImageCarouselComponent,
      IconComponent,
      CustomTooltipComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=asset-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetViewComponent, [{
    type: Component,
    args: [{ selector: "asset-view", template: `
        @if (!loading() && item()) {
            <div class="flex h-full w-full flex-col">
                <div
                    class="bg-base-100 flex w-full space-x-2 pt-8 pr-8 pb-4 pl-4"
                >
                    <a
                        icon
                        matRipple
                        [routerLink]="['/book/assets', 'list', 'items']"
                    >
                        <icon>arrow_back</icon>
                    </a>
                    <div class="flex flex-col">
                        <h2 class="text-2xl font-medium">
                            {{
                                'APP.CONCIERGE.ASSETS_MANAGE_HEADER' | translate
                            }}
                        </h2>
                        <div>{{ item()?.name }}</div>
                    </div>
                    <div class="flex-1"></div>
                    <a
                        btn
                        matRipple
                        class="h-12 w-32"
                        [routerLink]="[base_route, 'manage', 'group']"
                        [queryParams]="{
                            id: item()?.id,
                        }"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <div class="pr-2">
                                {{ 'COMMON.EDIT' | translate }}
                            </div>
                        </div>
                    </a>
                    <button
                        btn
                        matRipple
                        customTooltip
                        class="border-error bg-base-100 text-error h-12 w-32"
                        [content]="delete_tooltip"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">delete</icon>
                            <div class="pr-2">
                                {{ 'COMMON.DELETE' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
                <div class="mb-4 flex items-center space-x-4 px-8">
                    <div
                        class="bg-base-200 h-64 w-[24rem] flex-1 overflow-hidden rounded-xl"
                    >
                        <image-carousel
                            [images]="item()?.images || []"
                        ></image-carousel>
                    </div>
                    <div
                        class="border-base-300 flex h-64 w-1/2 flex-1 flex-col space-y-4 rounded-lg border p-4"
                    >
                        <div class="h-1/2 w-full flex-1 overflow-auto">
                            @if (item()?.description) {
                                {{ item()?.description || '~No Description~' }}
                            } @else {
                                <span class="opacity-30">{{
                                    'COMMON.NO_DESCRIPTION' | translate
                                }}</span>
                            }
                        </div>
                        <div
                            class="divide-base-200 border-base-200 bg-base-100 w-full divide-y rounded-sm border"
                        >
                            <div
                                class="flex h-16 items-center justify-between p-2"
                            >
                                <div class="pl-2">
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_AVAILABLE'
                                            | translate
                                                : {
                                                      count: available_count(),
                                                  }
                                    }}
                                </div>
                                <!-- <button btn matRipple [disabled]="available_count() === 0">
                                    Assign to Location
                                </button> -->
                            </div>
                            <div
                                class="flex h-16 items-center justify-between p-2"
                            >
                                <div class="pl-2">
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_IN_USE'
                                            | translate
                                                : {
                                                      count: requests().length,
                                                  }
                                    }}
                                </div>
                                <button
                                    btn
                                    matRipple
                                    (click)="viewLocations()"
                                    [disabled]="available_count() !== 0"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_VIEW_LOCATIONS'
                                            | translate
                                    }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <mat-tab-group class="h-px flex-1">
                    <mat-tab
                        [label]="
                            'APP.CONCIERGE.ASSETS_ITEM_TAB_ASSETS' | translate
                        "
                    >
                        <div class="mx-auto max-w-[768px] px-8 py-4">
                            <div
                                class="mb-2 flex w-full items-center space-x-2"
                            >
                                <a
                                    btn
                                    matRipple
                                    class="flex-1"
                                    [routerLink]="[
                                        base_route,
                                        'manage',
                                        'asset',
                                    ]"
                                    [queryParams]="{
                                        group_id: item()?.id,
                                    }"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_ADD'
                                            | translate
                                    }}
                                </a>
                                <a
                                    btn
                                    matRipple
                                    class="flex-1"
                                    [routerLink]="[
                                        base_route,
                                        'manage',
                                        'asset-bulk',
                                    ]"
                                    [queryParams]="{
                                        group_id: item()?.id,
                                    }"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_BULK_ADD'
                                            | translate
                                    }}
                                </a>
                            </div>
                            <simple-table
                                class="block min-w-160 text-sm"
                                [data]="asset_list()"
                                [columns]="[
                                    {
                                        key: 'id',
                                        name:
                                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_ID'
                                            | translate,
                                    },
                                    {
                                        key: 'identifier',
                                        name:
                                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                            | translate,
                                    },
                                    {
                                        key: 'serial_number',
                                        name:
                                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL'
                                            | translate,
                                    },
                                    {
                                        key: 'actions',
                                        name: ' ',
                                        content: action_template,
                                        size: '5.5rem',
                                        sortable: false,
                                    },
                                ]"
                                [empty_message]="
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_EMPTY'
                                        | translate
                                "
                                [sortable]="true"
                            ></simple-table>
                            <ng-template #action_template let-row="row">
                                <div
                                    class="flex w-full items-center justify-end p-2"
                                >
                                    <a
                                        icon
                                        default
                                        matRipple
                                        [routerLink]="[
                                            base_route,
                                            'manage',
                                            'asset',
                                        ]"
                                        [queryParams]="{
                                            id: row.id,
                                            group_id: item()?.id,
                                        }"
                                        [matTooltip]="
                                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_EDIT'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </a>
                                    <button
                                        icon
                                        default
                                        matRipple
                                        error
                                        (click)="removeAsset(row)"
                                        [matTooltip]="
                                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_REMOVE'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                </div>
                            </ng-template>
                        </div>
                    </mat-tab>
                    <mat-tab
                        [label]="
                            'APP.CONCIERGE.ASSETS_ITEM_TAB_SPECS' | translate
                        "
                    >
                        <div class="mx-auto max-w-[768px] px-8 py-4">
                            <h3 class="p-2">
                                {{
                                    'APP.CONCIERGE.ASSETS_ITEM_GENERAL'
                                        | translate
                                }}
                            </h3>
                            <div
                                data-table
                                class="border-base-200 bg-base-100 border"
                            >
                                <div
                                    class="even:bg-base-200 flex items-center justify-between p-2"
                                >
                                    <div
                                        class="w-32 flex-1 text-sm font-medium"
                                    >
                                        {{
                                            'APP.CONCIERGE.ASSETS_ITEM_BRAND'
                                                | translate
                                        }}
                                    </div>
                                    <div>
                                        {{ item()?.brand || '~None~' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab
                        [label]="
                            'APP.CONCIERGE.ASSETS_ITEM_TAB_PURCHASE_INFO'
                                | translate
                        "
                    >
                        <div class="mx-auto max-w-[768px] px-8 py-4">
                            <a
                                btn
                                matRipple
                                class="mb-2"
                                [routerLink]="[
                                    base_route,
                                    'manage',
                                    'purchase-order',
                                ]"
                                [queryParams]="{
                                    group_id: item()?.id,
                                }"
                            >
                                {{
                                    'APP.CONCIERGE.ASSETS_PURCHASE_ADD'
                                        | translate
                                }}
                            </a>
                            <simple-table
                                class="block min-w-160 text-sm"
                                asset-purchases
                                [data]="item()?.purchase_orders || []"
                                [columns]="[
                                    {
                                        key: 'purchase_order_number',
                                        name:
                                            'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER'
                                            | translate,
                                    },
                                    {
                                        key: 'invoice_number',
                                        name:
                                            'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE'
                                            | translate,
                                    },
                                    {
                                        key: 'expected_service_start_date',
                                        name:
                                            'APP.CONCIERGE.ASSETS_PURCHASE_START'
                                            | translate,
                                        content: date_template,
                                    },
                                    {
                                        key: 'expected_service_end_date',
                                        name:
                                            'APP.CONCIERGE.ASSETS_PURCHASE_END'
                                            | translate,
                                        content: date_template,
                                    },
                                    {
                                        key: 'actions',
                                        name: ' ',
                                        content: po_action_template,
                                        size: '5.5rem',
                                        sortable: false,
                                    },
                                ]"
                                [empty_message]="
                                    'APP.CONCIERGE.ASSETS_ITEM_PURCHASES_EMPTY'
                                        | translate
                                "
                                [sortable]="true"
                            ></simple-table>
                            <ng-template #po_action_template let-row="row">
                                <div
                                    class="flex w-full items-center justify-end p-2"
                                >
                                    <a
                                        icon
                                        default
                                        matRipple
                                        [routerLink]="[
                                            base_route,
                                            'manage',
                                            'purchase-order',
                                        ]"
                                        [queryParams]="{
                                            id: row.id,
                                            group_id: row?.id,
                                        }"
                                    >
                                        <icon class="text-lg">edit</icon>
                                    </a>
                                    <button
                                        icon
                                        default
                                        matRipple
                                        error
                                        (click)="removePurchaseOrder(row)"
                                    >
                                        <icon class="text-lg">delete</icon>
                                    </button>
                                </div>
                            </ng-template>
                        </div>
                    </mat-tab>
                </mat-tab-group>
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.ASSETS_ITEM_LOADING' | translate }}</p>
            </div>
        }
        <ng-template #date_template let-data="data">
            <div class="p-4">
                {{ data * 1000 | date: 'mediumDate' }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.DATE_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #delete_tooltip>
            @if (!deleting()) {
                <div
                    class="bg-base-100 my-2 w-[18rem] rounded-sm p-4 text-center"
                >
                    <p>
                        {{ 'APP.CONCIERGE.ASSETS_ITEM_DELETE_MSG' | translate }}
                    </p>
                    <div class="mt-6 flex items-center space-x-2">
                        <button
                            btn
                            matRipple
                            class="inverse w-24 flex-1"
                            (click)="closeTooltip()"
                        >
                            {{ 'COMMON.NO' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            class="error w-24 flex-1"
                            (click)="deleteAsset()"
                        >
                            {{
                                'APP.CONCIERGE.ASSETS_ITEM_DELETE_ACTION'
                                    | translate
                            }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-100 my-2 flex h-36 w-64 flex-col items-center justify-center space-y-2 rounded-sm p-4"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>
                        {{
                            'APP.CONCIERGE.ASSETS_ITEM_DELETE_LOADING'
                                | translate
                        }}
                    </p>
                </div>
            }
        </ng-template>
    `, imports: [
      CommonModule,
      RouterModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      MatRippleModule,
      SimpleTableComponent,
      MatTabsModule,
      MatTooltipModule,
      ImageCarouselComponent,
      IconComponent,
      CustomTooltipComponent
    ], styles: ["/* angular:styles/component:css;53020ecd9eec6f24fc2e7595a27ffc73aeee295082b36352e0ab4548108a08a2;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/asset-manager/asset-view.component.ts */\n:host {\n  height: 100%;\n}\n/*# sourceMappingURL=asset-view.component.css.map */\n"] }]
  }], null, { _tooltip_el: [{ type: ViewChild, args: [forwardRef(() => CustomTooltipComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetViewComponent, { className: "AssetViewComponent", filePath: "apps/concierge/src/app/asset-manager/asset-view.component.ts", lineNumber: 507 });
})();

// apps/concierge/src/app/asset-manager/asset-manager.routes.ts
var children = [
  {
    path: "list",
    component: AssetListingComponent,
    children: [
      {
        path: "items",
        component: AssetItemListComponent,
        title: "Assets"
      },
      {
        path: "requests",
        component: AssetRequestListComponent,
        title: "Asset Requests"
      },
      {
        path: "purchase-orders",
        component: AssetPurchaseOrderListComponent,
        title: "Asset Purchase Orders"
      },
      { path: "**", redirectTo: "requests" }
    ]
  },
  { path: "view/:id", component: AssetViewComponent, title: "Asset Details" },
  {
    path: "manage",
    children: [
      {
        path: "group",
        component: AssetGroupFormComponent,
        title: "Asset Groups"
      },
      { path: "asset", component: AssetFormComponent, title: "Assets" },
      {
        path: "asset-bulk",
        component: AssetBulkFormComponent,
        title: "Bulk Assets"
      },
      {
        path: "category",
        component: AssetCategoryFormComponent,
        title: "Asset Categories"
      },
      {
        path: "purchase-order",
        component: AssetPurchaseOrderFormComponent,
        title: "Asset Purchase Orders"
      }
    ]
  },
  { path: "**", redirectTo: "list/requests" }
];
var ROUTES = [
  {
    path: "",
    component: AssetManagerComponent,
    children
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=asset-manager.routes-MEFQ7IJD.js.map
