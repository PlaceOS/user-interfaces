import {
  AssetCategoryFormComponent,
  AssetManagerStateService,
  AssetRequestListComponent,
  SplitJoinPipe
} from "./chunk-F4EJ5LO4.js";
import {
  MatTab,
  MatTabGroup,
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-6ZGQ6MJF.js";
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
  AvailableRoomsStateModalComponent,
  BehaviorSubject,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  ImageCarouselComponent,
  ImageListFieldComponent,
  InteractiveMapComponent,
  MapPinComponent,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatError,
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
  MatProgressBar,
  MatProgressBarModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NumberValueAccessor,
  OrganisationService,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SettingsService,
  SimpleTableComponent,
  SpacePipe,
  TranslatePipe,
  __spreadProps,
  __spreadValues,
  addAssetsInBulk,
  addMinutes,
  addYears,
  combineLatest,
  deleteAsset,
  deleteAssetPurchaseOrder,
  filter,
  first,
  generateAssetForm,
  generateAssetGroupForm,
  generateAssetPurchaseOrderForm,
  getInvalidFields,
  getUnixTime,
  i18n,
  inject,
  input,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  openConfirmModal,
  queryAssetGroups,
  queryAssets,
  removeAssetRequests,
  saveAsset,
  saveAssetGroup,
  saveAssetPurchaseOrder,
  setClassMetadata,
  shareReplay,
  showAsset,
  showAssetGroup,
  showAssetPurchaseOrder,
  signal,
  switchMap,
  unique,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-B2WI2KLR.js";

// apps/concierge/src/app/asset-manager/asset-bulk-form.component.ts
var _c0 = (a0, a1) => [a0, "view", a1];
var _c1 = (a0) => [a0];
var _c2 = () => ({ standalone: true });
function AssetBulkFormComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
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
function AssetBulkFormComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
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
var _AssetBulkFormComponent = class _AssetBulkFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this.form = generateAssetForm();
    this.purchase_orders = this._state.purchase_orders;
    this.count = 2;
    this.loading = "";
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.get("id")) {
        this.loading = i18n("APP.CONCIERGE.ASSETS_BULK_ASSET_LOADING");
        const asset = await showAsset(params.get("id")).toPromise().catch(() => null);
        if (!asset) {
          notifyError("Unable to load asset details.");
          this._router.navigate([this.base_route]);
        }
        this.form.patchValue(asset);
        this.loading = "";
      }
      if (params.get("group_id")) {
        this.loading = i18n("APP.CONCIERGE.ASSETS_BULK_PRODUCT_LOADING");
        const product = await showAssetGroup(params.get("group_id")).toPromise().catch(() => null);
        if (!product) {
          notifyError("Unable to load associated product details.");
          this._router.navigate([this.base_route]);
        }
        this.product = product;
        this.form.patchValue({ asset_type_id: product.id });
        this.loading = "";
      }
    }));
    this._state.setOptions({ active_item: null });
    this.count = 2;
  }
  async save() {
    if (!this.count && this.count < 1) {
      return notifyError(i18n("APP.CONCIERGE.ASSETS_BULK_COUNT_ERROR"));
    }
    if (!this.form.valid) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form)
      }));
    }
    this.loading = i18n("APP.CONCIERGE.ASSETS_BULK_SAVING");
    const data = this.form.value;
    const list = await addAssetsInBulk(new Array(this.count).fill(__spreadProps(__spreadValues({}, data), {
      zone_id: this._org.building.id
    }))).toPromise().catch((e) => {
      this.loading = "";
      notifyError(i18n("APP.CONCIERGE.ASSETS_BULK_COUNT_ERROR", {
        error: e.message
      }));
      throw e;
    });
    this._state.setExtraAssets(list.map((d) => __spreadProps(__spreadValues({}, d), { asset_type_id: this.product.id })));
    this.form.reset();
    this._state.postChange();
    notifySuccess(i18n("APP.CONCIERGE.ASSETS_BULK_SAVE_SUCCESS", {
      count: list.length
    }));
    this._router.navigate([this.base_route, "view", this.product?.id]);
    this.loading = "";
  }
};
_AssetBulkFormComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetBulkFormComponent_BaseFactory;
  return function AssetBulkFormComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetBulkFormComponent_BaseFactory || (\u0275AssetBulkFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetBulkFormComponent)))(__ngFactoryType__ || _AssetBulkFormComponent);
  };
})();
_AssetBulkFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetBulkFormComponent, selectors: [["asset-bulk-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 42, vars: 50, consts: [[3, "confirm", "heading", "close", "loading"], [3, "formGroup"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelOptions", "disabled"], [1, "flex", "items-center", "space-x-2"], ["for", "count"], ["matInput", "", "name", "count", "type", "number", 3, "ngModelChange", "ngModel", "placeholder", "ngModelOptions"], ["for", "identifier"], ["matInput", "", "name", "identifier", "formControlName", "identifier", 3, "placeholder"], ["for", "purchase-order-id"], ["formControlName", "purchase_order_id", 3, "placeholder"], [3, "value"], [1, "opacity-60", 3, "disabled"]], template: function AssetBulkFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("confirm", function AssetBulkFormComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "label", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 4);
    \u0275\u0275element(8, "input", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 2)(11, "label", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 4)(15, "input", 8);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AssetBulkFormComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.count, $event) || (ctx.count = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 2)(18, "label", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 4);
    \u0275\u0275element(22, "input", 10);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "mat-error");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 2)(28, "label", 11);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 4)(32, "mat-select", 12);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275repeaterCreate(34, AssetBulkFormComponent_For_35_Template, 2, 2, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275conditionalCreate(37, AssetBulkFormComponent_Conditional_37_Template, 3, 4, "mat-option", 14);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-error");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_18_0;
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 19, ctx.form.value.id ? "APP.CONCIERGE.ASSETS_BULK_EDIT" : "APP.CONCIERGE.ASSETS_BULK_ADD"))("close", ctx.product ? \u0275\u0275pureFunction2(43, _c0, ctx.base_route, ctx.product.id) : \u0275\u0275pureFunction1(46, _c1, ctx.base_route))("loading", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 21, "APP.CONCIERGE.ASSETS_PRODUCT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", (ctx.product == null ? null : ctx.product.name) || "No Product")("ngModelOptions", \u0275\u0275pureFunction0(48, _c2))("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 23, "APP.CONCIERGE.ASSETS_BULK_COUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.count);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 25, "APP.CONCIERGE.ASSETS_BULK_COUNT"))("ngModelOptions", \u0275\u0275pureFunction0(49, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 27, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 29, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 31, "APP.CONCIERGE.ASSETS_NAME_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 33, "APP.CONCIERGE.ASSETS_ORDER_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 35, "APP.CONCIERGE.ASSETS_ORDER_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(36, 37, ctx.purchase_orders));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_18_0 = \u0275\u0275pipeBind1(38, 39, ctx.purchase_orders)) == null ? null : tmp_18_0.length) ? 37 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 41, "APP.CONCIERGE.ASSETS_ORDER_ID_REQUIRED"));
  }
}, dependencies: [
  FullscreenModalShellComponent,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatSelectModule,
  MatSelect,
  MatOption,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  TranslatePipe,
  CommonModule,
  AsyncPipe,
  MatInputModule,
  MatInput,
  FormsModule,
  NgModel
], encapsulation: 2 });
var AssetBulkFormComponent = _AssetBulkFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetBulkFormComponent, [{
    type: Component,
    args: [{ selector: "asset-bulk-form", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ASSETS_BULK_EDIT'
                    : 'APP.CONCIERGE.ASSETS_BULK_ADD'
                ) | translate
            "
            [close]="product ? [base_route, 'view', product.id] : [base_route]"
            [loading]="loading"
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_PRODUCT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="product?.name || 'No Product'"
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
                                [(ngModel)]="count"
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
                            name="identifier"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                    | translate
                            "
                            formControlName="identifier"
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
                            formControlName="purchase_order_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ORDER_SELECT' | translate
                            "
                        >
                            @for (
                                order of purchase_orders | async;
                                track order
                            ) {
                                <mat-option [value]="order.id">
                                    {{
                                        order.purchase_order_number ||
                                            order.invoice_number
                                    }}
                                </mat-option>
                            }
                            @if (!(purchase_orders | async)?.length) {
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
      ReactiveFormsModule,
      TranslatePipe,
      CommonModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetBulkFormComponent, { className: "AssetBulkFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-bulk-form.component.ts", lineNumber: 153 });
})();

// apps/concierge/src/app/asset-manager/asset-form.component.ts
var _c02 = (a0, a1) => [a0, "view", a1];
var _c12 = (a0) => [a0];
var _c22 = () => ({ standalone: true });
function AssetFormComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
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
function AssetFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
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
var _AssetFormComponent = class _AssetFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this.form = generateAssetForm();
    this.purchase_orders = this._state.purchase_orders;
    this.loading = "";
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.get("id")) {
        this.loading = "Loading Asset Details...";
        const asset = await showAsset(params.get("id")).toPromise().catch(() => null);
        if (!asset) {
          notifyError("Unable to load asset details.");
          this._router.navigate([this.base_route]);
        }
        this.form.patchValue(asset);
        this.loading = "";
      }
      if (params.get("group_id")) {
        this.loading = "Loading Product Details...";
        const product = await showAssetGroup(params.get("group_id")).toPromise().catch(() => null);
        if (!product) {
          notifyError("Unable to load associated product details.");
          this._router.navigate([this.base_route]);
        }
        this.product = product;
        this.form.patchValue({ asset_type_id: product.id });
        this.loading = "";
      }
    }));
    this._state.setOptions({ active_item: null });
  }
  async save() {
    if (!this.form.valid) {
      return notifyError(`Some fields are invalid. [${getInvalidFields(this.form)}]`);
    }
    this.loading = "Saving Product...";
    const data = this.form.value;
    const item = await saveAsset(__spreadProps(__spreadValues({}, data), {
      zone_id: this._org.building.id
    })).toPromise().catch((e) => {
      this.loading = "";
      notifyError(`Error saving asset: ${e.message}`);
      throw e;
    });
    this.form.reset();
    this._state.postChange();
    this._state.setExtraAssets([item].map((d) => __spreadProps(__spreadValues({}, d), { asset_type_id: this.product.id })));
    notifySuccess("Asset saved successfully.");
    this._router.navigate([this.base_route, "view", this.product?.id]);
    this.loading = "";
  }
};
_AssetFormComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetFormComponent_BaseFactory;
  return function AssetFormComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetFormComponent_BaseFactory || (\u0275AssetFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetFormComponent)))(__ngFactoryType__ || _AssetFormComponent);
  };
})();
_AssetFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetFormComponent, selectors: [["asset-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 55, vars: 59, consts: [[3, "confirm", "heading", "close", "loading"], [3, "formGroup"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelOptions", "disabled"], [1, "flex", "items-center", "space-x-2"], ["for", "serial-number"], ["matInput", "", "name", "serial-number", "formControlName", "serial_number", 3, "placeholder"], ["for", "identifier"], ["matInput", "", "name", "identifier", "formControlName", "identifier", 3, "placeholder"], ["for", "purchase-order-id"], ["formControlName", "purchase_order_id", 3, "placeholder"], [3, "value"], [1, "opacity-60", 3, "disabled"], ["matInput", "", "name", "barcode", "formControlName", "barcode", 3, "placeholder"]], template: function AssetFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("confirm", function AssetFormComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "label", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 4);
    \u0275\u0275element(8, "input", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 2)(11, "label", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 4);
    \u0275\u0275element(15, "input", 8);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "mat-error");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 2)(21, "label", 9);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 4);
    \u0275\u0275element(25, "input", 10);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementStart(27, "mat-error");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 2)(31, "label", 11);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 4)(35, "mat-select", 12);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275repeaterCreate(37, AssetFormComponent_For_38_Template, 2, 2, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(39, "async");
    \u0275\u0275conditionalCreate(40, AssetFormComponent_Conditional_40_Template, 3, 4, "mat-option", 14);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-error");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 2)(46, "label", 7);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-form-field", 4);
    \u0275\u0275element(50, "input", 15);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementStart(52, "mat-error");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 21, ctx.form.value.id ? "APP.CONCIERGE.ASSETS_EDIT" : "APP.CONCIERGE.ASSETS_NEW"))("close", ctx.product ? \u0275\u0275pureFunction2(53, _c02, ctx.base_route, ctx.product.id) : \u0275\u0275pureFunction1(56, _c12, ctx.base_route))("loading", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 23, "APP.CONCIERGE.ASSETS_PRODUCT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", (ctx.product == null ? null : ctx.product.name) || "No Product")("ngModelOptions", \u0275\u0275pureFunction0(58, _c22))("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 25, "APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 27, "APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 29, "APP.CONCIERGE.ASSETS_SERIAL_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 31, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 33, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 35, "APP.CONCIERGE.ASSETS_NAME_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 37, "APP.CONCIERGE.ASSETS_ORDER_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(36, 39, "APP.CONCIERGE.ASSETS_ORDER_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(39, 41, ctx.purchase_orders));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_17_0 = \u0275\u0275pipeBind1(41, 43, ctx.purchase_orders)) == null ? null : tmp_17_0.length) ? 40 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 45, "APP.CONCIERGE.ASSETS_ORDER_ID_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 47, "APP.CONCIERGE.ASSETS_BARCODE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 49, "APP.CONCIERGE.ASSETS_BARCODE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 51, "APP.CONCIERGE.ASSETS_BARCODE_REQUIRED"));
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
  TranslatePipe,
  CommonModule,
  AsyncPipe,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName
], encapsulation: 2 });
var AssetFormComponent = _AssetFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetFormComponent, [{
    type: Component,
    args: [{ selector: "asset-form", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ASSETS_EDIT'
                    : 'APP.CONCIERGE.ASSETS_NEW'
                ) | translate
            "
            [close]="product ? [base_route, 'view', product.id] : [base_route]"
            [loading]="loading"
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_PRODUCT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="product?.name || 'No Product'"
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
                                name="serial-number"
                                [placeholder]="
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL'
                                        | translate
                                "
                                formControlName="serial_number"
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
                                name="identifier"
                                [placeholder]="
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                        | translate
                                "
                                formControlName="identifier"
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
                            formControlName="purchase_order_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ORDER_SELECT' | translate
                            "
                        >
                            @for (
                                order of purchase_orders | async;
                                track order
                            ) {
                                <mat-option [value]="order.id">
                                    {{
                                        order.purchase_order_number ||
                                            order.invoice_number
                                    }}
                                </mat-option>
                            }
                            @if (!(purchase_orders | async)?.length) {
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
                            name="barcode"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_BARCODE' | translate
                            "
                            formControlName="barcode"
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
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetFormComponent, { className: "AssetFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-form.component.ts", lineNumber: 172 });
})();

// apps/concierge/src/app/asset-manager/asset-group-form.component.ts
var _c03 = (a0, a1) => [a0, "view", a1];
var _c13 = (a0) => [a0, "list", "items"];
function AssetGroupFormComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
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
var _AssetGroupFormComponent = class _AssetGroupFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this.form = generateAssetGroupForm();
    this.new_category = new BehaviorSubject(null);
    this.categories = combineLatest([
      this._state.categories,
      this.new_category
    ]).pipe(map(([list, item]) => item ? unique([...list, item], "id") : list));
    this.loading = "";
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.get("id")) {
        this.loading = "Loading Product Details...";
        const product = await lastValueFrom(showAssetGroup(params.get("id"))).catch(() => null);
        if (!product) {
          notifyError("Unable to load product details.");
          this._router.navigate([this.base_route]);
        }
        this.form.patchValue(product);
        this.loading = "";
      }
    }));
  }
  async newCategory() {
    this.form.patchValue({ category_id: this.current_category });
    const category = await this._state.editCategory();
    if (!category)
      return;
    this.new_category.next(category);
    this.form.patchValue({ category_id: category.id });
  }
  async save() {
    if (!this.form.valid)
      return;
    this.loading = "Saving Product...";
    const data = this.form.value;
    const item = await lastValueFrom(saveAssetGroup(data)).catch((e) => {
      this.loading = "";
      notifyError(`Error saving Product: ${e.message}`);
      throw e;
    });
    this.form.reset();
    this.loading = "";
    this._state.postChange();
    this._router.navigate([this.base_route, "view", item.id]);
  }
};
_AssetGroupFormComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetGroupFormComponent_BaseFactory;
  return function AssetGroupFormComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetGroupFormComponent_BaseFactory || (\u0275AssetGroupFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetGroupFormComponent)))(__ngFactoryType__ || _AssetGroupFormComponent);
  };
})();
_AssetGroupFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetGroupFormComponent, selectors: [["asset-group-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 63, vars: 52, consts: [[3, "confirm", "heading", "close", "loading"], [3, "formGroup"], [1, "flex", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["formControlName", "category_id", 3, "click", "placeholder"], [3, "value"], [1, "relative", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["for", "brand"], ["matInput", "", "name", "brand", "formControlName", "brand", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description of the product", "formControlName", "description"], ["for", "images"], ["name", "images", "formControlName", "images"]], template: function AssetGroupFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("confirm", function AssetGroupFormComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "label", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 4);
    \u0275\u0275element(10, "input", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 2)(16, "label", 3);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 4)(22, "mat-select", 6);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function AssetGroupFormComponent_Template_mat_select_click_22_listener() {
      return ctx.current_category = ctx.form.value.category_id;
    });
    \u0275\u0275repeaterCreate(24, AssetGroupFormComponent_For_25_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementStart(27, "mat-option", 8);
    \u0275\u0275listener("click", function AssetGroupFormComponent_Template_mat_option_click_27_listener() {
      return ctx.newCategory();
    });
    \u0275\u0275elementStart(28, "div", 9)(29, "icon");
    \u0275\u0275text(30, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "mat-error");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 2)(38, "label", 10);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-form-field", 4);
    \u0275\u0275element(44, "input", 11);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementStart(46, "mat-error");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 2)(50, "label", 12);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-form-field", 4);
    \u0275\u0275element(54, "textarea", 13);
    \u0275\u0275elementStart(55, "mat-error");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 2)(59, "label", 14);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "image-list-field", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 17, ctx.form.value.id ? "APP.CONCIERGE.ASSETS_ITEM_EDIT" : "APP.CONCIERGE.ASSETS_ITEM_NEW"))("close", ctx.form.value.id ? \u0275\u0275pureFunction2(47, _c03, ctx.base_route, ctx.form.value.id) : \u0275\u0275pureFunction1(50, _c13, ctx.base_route))("loading", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 19, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 21, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 23, "FORM.NAME_REQUIED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 25, "COMMON.CATEGORY"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 27, "COMMON.CATEGORY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(26, 29, ctx.categories));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 31, "COMMON.CATEGORY_NEW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 33, "COMMON.CATEGORY_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 35, "APP.CONCIERGE.ASSETS_ITEM_BRAND"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 37, "APP.CONCIERGE.ASSETS_ITEM_BRAND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 39, "APP.CONCIERGE.ASSETS_ITEM_BRAND_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 41, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 43, "COMMON.DESCRIPTION_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 45, "COMMON.IMAGES"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  FullscreenModalShellComponent,
  ImageListFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatError,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  TranslatePipe,
  IconComponent
], encapsulation: 2 });
var AssetGroupFormComponent = _AssetGroupFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupFormComponent, [{
    type: Component,
    args: [{ selector: "asset-group-form", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ASSETS_ITEM_EDIT'
                    : 'APP.CONCIERGE.ASSETS_ITEM_NEW'
                ) | translate
            "
            [close]="
                form.value.id
                    ? [base_route, 'view', form.value.id]
                    : [base_route, 'list', 'items']
            "
            [loading]="loading"
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <div class="flex flex-col space-y-2">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            [placeholder]="'FORM.NAME' | translate"
                            formControlName="name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIED' | translate
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
                            formControlName="category_id"
                            [placeholder]="'COMMON.CATEGORY' | translate"
                            (click)="current_category = form.value.category_id"
                        >
                            @for (
                                category of categories | async;
                                track category
                            ) {
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
                            name="brand"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ITEM_BRAND' | translate
                            "
                            formControlName="brand"
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
                            name="description"
                            placeholder="Description of the product"
                            formControlName="description"
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
                        name="images"
                        formControlName="images"
                    ></image-list-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      CommonModule,
      FullscreenModalShellComponent,
      ImageListFieldComponent,
      MatFormFieldModule,
      ReactiveFormsModule,
      MatInputModule,
      MatSelectModule,
      TranslatePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetGroupFormComponent, { className: "AssetGroupFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-group-form.component.ts", lineNumber: 162 });
})();

// apps/concierge/src/app/asset-manager/asset-item-list.component.ts
var _c04 = (a0) => ({ count: a0 });
var _c14 = (a0, a1) => [a0, "view", a1];
var _c23 = (a0) => [a0, "manage", "group"];
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const asset_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", asset_r1.images[0]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Assets: ", asset_r1.asset_count || (asset_r1.assets == null ? null : asset_r1.assets.length) || 0, " ");
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16)(1, "div", 17);
    \u0275\u0275template(2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_img_2_Template, 1, 1, "img", 18)(3, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_div_8_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r1 = ctx.$implicit;
    const placeholder_r2 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(5, _c14, ctx_r2.base_route, asset_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", asset_r1.images == null ? null : asset_r1.images.length)("ngIfElse", placeholder_r2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", asset_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asset_r1.asset_count || (asset_r1.assets == null ? null : asset_r1.assets.length));
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275template(2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_Template, 9, 8, "a", 15);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 1, ctx_r2.products)[group_r4.id]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const asset_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", asset_r5.images[0]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Assets: ", asset_r5.asset_count || (asset_r5.assets == null ? null : asset_r5.assets.length) || 0, " ");
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27)(1, "div", 28);
    \u0275\u0275template(2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_img_2_Template, 1, 1, "img", 18)(3, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_div_8_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r5 = ctx.$implicit;
    const placeholder_r6 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(5, _c14, ctx_r2.base_route, asset_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", asset_r5.images == null ? null : asset_r5.images.length)("ngIfElse", placeholder_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", asset_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asset_r5.asset_count || (asset_r5.assets == null ? null : asset_r5.assets.length));
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275template(2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_Template, 9, 8, "a", 26);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 1, ctx_r2.products)[group_r4.id]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerStart(8, 11);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275template(10, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_Template, 4, 3, "ng-container", 12)(11, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_Template, 4, 3, "ng-container", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const group_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r4 == null ? null : group_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind2(7, 6, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(11, _c04, (tmp_6_0 = \u0275\u0275pipeBind1(6, 4, ctx_r2.products)[group_r4.id]) == null ? null : tmp_6_0.length)), ") ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", \u0275\u0275pipeBind1(9, 9, ctx_r2.options).view);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitchCase", "list");
  }
}
function AssetItemListComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AssetItemListComponent_div_0_ng_container_1_div_1_Template, 12, 13, "div", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const group_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, ctx_r2.products)[group_r4.id]) == null ? null : tmp_4_0.length);
  }
}
function AssetItemListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, AssetItemListComponent_div_0_ng_container_1_Template, 3, 3, "ng-container", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.categories));
  }
}
function AssetItemListComponent_mat_progress_bar_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 31);
  }
}
function AssetItemListComponent_ng_template_5_a_4_Template(rf, ctx) {
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
function AssetItemListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AssetItemListComponent_ng_template_5_a_4_Template, 2, 3, "a", 34);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(3, 2, ctx_r2.options)) == null ? null : tmp_2_0.search) ? "No matching assets found" : "No assets available. Create a new asset with the button below", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_3_0 = \u0275\u0275pipeBind1(5, 4, ctx_r2.options)) == null ? null : tmp_3_0.search));
  }
}
var _AssetItemListComponent = class _AssetItemListComponent {
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
};
_AssetItemListComponent.\u0275fac = function AssetItemListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetItemListComponent)();
};
_AssetItemListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetItemListComponent, selectors: [["app-asset-item-list"]], decls: 7, vars: 9, consts: [["empty_state", ""], ["placeholder", ""], ["class", "h-full w-full overflow-auto pb-2", 4, "ngIf", "ngIfElse"], ["mode", "indeterminate", 4, "ngIf"], [1, "h-full", "w-full", "overflow-auto", "pb-2"], [4, "ngFor", "ngForOf"], ["class", "", 4, "ngIf"], [1, ""], [1, "py-2"], [1, "font-medium"], [1, "text-xs"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "divide-y", "divide-base-200", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], ["matRipple", "", "class", "hover:border-indigo-400 flex items-center space-x-4 rounded-sm border border-base-200 p-4 text-left", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "hover:border-indigo-400", "flex", "items-center", "space-x-4", "rounded-sm", "border", "border-base-200", "p-4", "text-left", 3, "routerLink"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "overflow-hidden", "border", "border-base-200", "bg-base-200"], ["auth", "", "class", "min-h-full min-w-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "flex", "flex-1", "flex-col", "justify-center"], [1, "truncate"], ["class", "text-xs opacity-60", 4, "ngIf"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], ["src", "assets/icons/asset-placeholder.svg", 1, "m-auto"], [1, "text-xs", "opacity-60"], [1, "-mx-2", "flex", "w-full", "flex-wrap", "items-center", "overflow-hidden"], ["matRipple", "", "class", "hover:border-indigo-400 m-2 flex h-44 w-40 flex-col rounded-sm border border-base-200 bg-base-100 text-left shadow-sm", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "hover:border-indigo-400", "m-2", "flex", "h-44", "w-40", "flex-col", "rounded-sm", "border", "border-base-200", "bg-base-100", "text-left", "shadow-sm", 3, "routerLink"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "overflow-hidden", "bg-base-200"], [1, "flex", "w-full", "flex-1", "flex-col", "justify-center", "border-t", "border-base-200", "px-3", "py-1"], ["src", "assets/icons/asset-placeholder.svg", 1, "m-auto", "w-16"], ["mode", "indeterminate"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], [1, "opacity-40"], ["btn", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["btn", "", "matRipple", "", 3, "routerLink"]], template: function AssetItemListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AssetItemListComponent_div_0_Template, 3, 3, "div", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, AssetItemListComponent_mat_progress_bar_3_Template, 1, 0, "mat-progress-bar", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, AssetItemListComponent_ng_template_5_Template, 6, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_1_0;
    const empty_state_r7 = \u0275\u0275reference(6);
    \u0275\u0275property("ngIf", ((tmp_1_0 = \u0275\u0275pipeBind1(1, 3, ctx.categories)) == null ? null : tmp_1_0.length) && ((tmp_1_0 = \u0275\u0275pipeBind1(2, 5, ctx.products)) == null ? null : tmp_1_0._count))("ngIfElse", empty_state_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 7, ctx.loading));
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  AsyncPipe,
  MatProgressBarModule,
  MatProgressBar,
  MatRippleModule,
  MatRipple,
  RouterModule,
  RouterLink,
  TranslatePipe,
  AuthenticatedImageDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=asset-item-list.component.css.map */"] });
var AssetItemListComponent = _AssetItemListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetItemListComponent, [{
    type: Component,
    args: [{ selector: "app-asset-item-list", template: `
        <div
            class="h-full w-full overflow-auto pb-2"
            *ngIf="
                (categories | async)?.length && (products | async)?._count;
                else empty_state
            "
        >
            <ng-container *ngFor="let group of categories | async">
                <div class="" *ngIf="(products | async)[group.id]?.length">
                    <h2 class="py-2">
                        <span class="font-medium">{{ group?.name }}</span>
                        <span class="text-xs">
                            ({{
                                'COMMON.ITEM_COUNT'
                                    | translate
                                        : {
                                              count: (products | async)[
                                                  group.id
                                              ]?.length,
                                          }
                            }})
                        </span>
                    </h2>
                    <ng-container [ngSwitch]="(options | async).view">
                        <ng-container *ngSwitchCase="'list'">
                            <div
                                class="divide-y divide-base-200 overflow-hidden rounded-sm border border-base-200 bg-base-100"
                            >
                                <a
                                    matRipple
                                    class="hover:border-indigo-400 flex items-center space-x-4 rounded-sm border border-base-200 p-4 text-left"
                                    *ngFor="
                                        let asset of (products | async)[
                                            group.id
                                        ]
                                    "
                                    [routerLink]="[
                                        base_route,
                                        'view',
                                        asset.id,
                                    ]"
                                >
                                    <div
                                        class="flex h-12 w-12 items-center justify-center overflow-hidden border border-base-200 bg-base-200"
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
                                    class="hover:border-indigo-400 m-2 flex h-44 w-40 flex-col rounded-sm border border-base-200 bg-base-100 text-left shadow-sm"
                                    *ngFor="
                                        let asset of (products | async)[
                                            group.id
                                        ]
                                    "
                                    [routerLink]="[
                                        base_route,
                                        'view',
                                        asset.id,
                                    ]"
                                >
                                    <div
                                        class="flex h-32 w-full items-center justify-center overflow-hidden bg-base-200"
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
                                        class="flex w-full flex-1 flex-col justify-center border-t border-base-200 px-3 py-1"
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
        <mat-progress-bar *ngIf="loading | async" mode="indeterminate" />
        <ng-template #empty_state>
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-4 p-8"
            >
                <p class="opacity-40">
                    {{
                        (options | async)?.search
                            ? 'No matching assets found'
                            : 'No assets available. Create a new asset with the button below'
                    }}
                </p>
                <a
                    btn
                    matRipple
                    *ngIf="!(options | async)?.search"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetItemListComponent, { className: "AssetItemListComponent", filePath: "apps/concierge/src/app/asset-manager/asset-item-list.component.ts", lineNumber: 206 });
})();

// apps/concierge/src/app/asset-manager/asset-manager-topbar.component.ts
var _c05 = (a0) => [a0, "manage", "group"];
var _c15 = (a0) => [a0, "manage", "purchase-order"];
function AssetManagerTopbarComponent_Conditional_11_Template(rf, ctx) {
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
function AssetManagerTopbarComponent_Conditional_12_Template(rf, ctx) {
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
function AssetManagerTopbarComponent_Conditional_13_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_13_Conditional_23_Template_button_click_0_listener() {
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
function AssetManagerTopbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "button", 11);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ view: "grid" }));
    });
    \u0275\u0275elementStart(6, "icon", 12);
    \u0275\u0275text(7, "view_module");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ view: "list" }));
    });
    \u0275\u0275elementStart(12, "icon", 12);
    \u0275\u0275text(13, "view_list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "div", 14);
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_13_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editConfig());
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "menu_book");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("click", function AssetManagerTopbarComponent_Conditional_13_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRoomAvailability());
    });
    \u0275\u0275elementStart(21, "icon");
    \u0275\u0275text(22, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, AssetManagerTopbarComponent_Conditional_13_Conditional_23_Template, 4, 3, "button", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary", ((tmp_1_0 = \u0275\u0275pipeBind1(3, 13, ctx_r0.options)) == null ? null : tmp_1_0.view) === "grid")("text-secondary-content", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 15, ctx_r0.options)) == null ? null : tmp_2_0.view) === "grid");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 17, "COMMON.VIEW_AS_GRID"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("bg-secondary", ((tmp_4_0 = \u0275\u0275pipeBind1(9, 19, ctx_r0.options)) == null ? null : tmp_4_0.view) === "list")("text-secondary-content", ((tmp_5_0 = \u0275\u0275pipeBind1(10, 21, ctx_r0.options)) == null ? null : tmp_5_0.view) === "list");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 23, "COMMON.VIEW_AS_LIST"));
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 25, "APP.CONCIERGE.ASSETS_MANAGE_CONFIG"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(20, 27, "APP.CONCIERGE.ASSETS_MANAGE_BOOKING_RULES"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.active() === "items" ? 23 : -1);
  }
}
function AssetManagerTopbarComponent_Conditional_14_For_6_Template(rf, ctx) {
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
function AssetManagerTopbarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-form-field", 17)(2, "mat-select", 18);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function AssetManagerTopbarComponent_Conditional_14_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(5, AssetManagerTopbarComponent_Conditional_14_For_6_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(3, 2, ctx_r0.building)) == null ? null : tmp_1_0.id)("placeholder", \u0275\u0275pipeBind1(4, 4, "COMMON.BUILDINGS_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(7, 6, ctx_r0.buildings));
  }
}
var _AssetManagerTopbarComponent = class _AssetManagerTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.active = input("");
    this.options = this._state.options;
    this.region = this._org.active_region;
    this.building = this._org.active_building;
    this.buildings = this._org.active_buildings;
    this.setOptions = (o) => this._state.setOptions(o);
    this.manageCategories = () => this._state.manageCategories();
    this.editConfig = () => this._state.editConfig();
  }
  get base_route() {
    return this._state.base_route;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
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
        disabled_rooms: await nextValueFrom(this._state.availability)
      }
    });
    this.subscription("room-availability", ref.componentInstance.change.subscribe(async (list) => {
      await this._state.saveSettings({ disabled_rooms: list }).catch();
      ref.componentInstance.loading.set(false);
      notifySuccess("Room availability settings saved");
    }));
  }
};
_AssetManagerTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetManagerTopbarComponent_BaseFactory;
  return function AssetManagerTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetManagerTopbarComponent_BaseFactory || (\u0275AssetManagerTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetManagerTopbarComponent)))(__ngFactoryType__ || _AssetManagerTopbarComponent);
  };
})();
_AssetManagerTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetManagerTopbarComponent, selectors: [["asset-manager-topbar"]], inputs: { active: [1, "active"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 15, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "bg-base-100", "px-8", "pb-2", "pt-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "relative", "-left-1", "top-1", "text-2xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-40", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-48", 3, "routerLink"], [1, "mb-2", "flex", "items-center", "space-x-2", "px-8"], [1, "flex", "items-center", "space-x-2", "px-4", "pb-2"], [1, "flex", "items-center", "rounded-sm", "border", "border-secondary"], ["icon", "", "matRipple", "", 1, "h-12", "w-14", "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], [1, "text-2xl"], ["icon", "", "matRipple", "", 1, "h-12", "w-14", "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], [1, "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "matTooltip"], ["appearance", "outline", 1, "no-subscript", "w-48"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"]], template: function AssetManagerTopbarComponent_Template(rf, ctx) {
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
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("ngModelChange", function AssetManagerTopbarComponent_Template_input_ngModelChange_8_listener($event) {
      return ctx.setOptions({ search: $event });
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, AssetManagerTopbarComponent_Conditional_11_Template, 3, 6, "a", 6);
    \u0275\u0275conditionalCreate(12, AssetManagerTopbarComponent_Conditional_12_Template, 3, 6, "a", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AssetManagerTopbarComponent_Conditional_13_Template, 24, 29, "div", 8);
    \u0275\u0275conditionalCreate(14, AssetManagerTopbarComponent_Conditional_14_Template, 8, 8, "div", 9);
    \u0275\u0275pipe(15, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_6_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, ctx.active() !== "items" && ctx.active() !== "purchase-orders" ? "APP.CONCIERGE.ASSETS_HEADER" : "APP.CONCIERGE.ASSETS_MANAGE_HEADER"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(9, 9, ctx.options)) == null ? null : tmp_1_0.search)("placeholder", \u0275\u0275pipeBind1(10, 11, ctx.active() === "items" ? "APP.CONCIERGE.ASSETS_ITEM_SEARCH" : ctx.active() === "purchase-orders" ? "APP.CONCIERGE.ASSETS_ITEM_SEARCH" : "APP.CONCIERGE.ASSETS_REQUESTS_SEARCH"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.active() === "items" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.active() === "purchase-orders" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.active() === "items" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.use_region && ((tmp_6_0 = \u0275\u0275pipeBind1(15, 13, ctx.building)) == null ? null : tmp_6_0.length) ? 14 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  TranslatePipe,
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
  MatInput
], encapsulation: 2 });
var AssetManagerTopbarComponent = _AssetManagerTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetManagerTopbarComponent, [{
    type: Component,
    args: [{ selector: "asset-manager-topbar", template: `
        <div
            class="flex w-full items-center space-x-2 bg-base-100 px-8 pb-2 pt-4"
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
                <icon matPrefix class="relative -left-1 top-1 text-2xl">
                    search
                </icon>
                <input
                    matInput
                    [ngModel]="(options | async)?.search"
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
                <div class="flex items-center rounded-sm border border-secondary">
                    <button
                        icon
                        matRipple
                        class="h-12 w-14 rounded-l rounded-r-none"
                        [class.bg-secondary]="
                            (options | async)?.view === 'grid'
                        "
                        [class.text-secondary-content]="
                            (options | async)?.view === 'grid'
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
                        [class.bg-secondary]="
                            (options | async)?.view === 'list'
                        "
                        [class.text-secondary-content]="
                            (options | async)?.view === 'list'
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
                    class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
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
                    class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
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
                        class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
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
        @if (use_region && (building | async)?.length) {
            <div class="flex items-center space-x-2 px-4 pb-2">
                <mat-form-field appearance="outline" class="no-subscript w-48">
                    <mat-select
                        [ngModel]="(building | async)?.id"
                        (ngModelChange)="setBuilding($event)"
                        [placeholder]="'COMMON.BUILDINGS_ALL' | translate"
                    >
                        @for (bld of buildings | async; track bld) {
                            <mat-option [value]="bld.id">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
    `, imports: [
      CommonModule,
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetManagerTopbarComponent, { className: "AssetManagerTopbarComponent", filePath: "apps/concierge/src/app/asset-manager/asset-manager-topbar.component.ts", lineNumber: 183 });
})();

// apps/concierge/src/app/asset-manager/asset-listing.component.ts
var _c06 = (a0) => [a0, "list", "items"];
var _c16 = (a0) => [a0, "list", "purchase-orders"];
var _c24 = (a0) => [a0, "list", "requests"];
function AssetListingComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275listener("click", function AssetListingComponent_Conditional_2_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.active = "requests");
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c24, ctx_r2.base_route))("routerLinkActive", "active")("active", ctx_r2.active === "requests");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.ASSETS_REQUESTS"), " ");
  }
}
function AssetListingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 3);
    \u0275\u0275conditionalCreate(1, AssetListingComponent_Conditional_2_Conditional_1_Template, 3, 8, "a", 5);
    \u0275\u0275elementStart(2, "a", 6);
    \u0275\u0275listener("click", function AssetListingComponent_Conditional_2_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.active = "items");
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275listener("click", function AssetListingComponent_Conditional_2_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.active = "purchase-orders");
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const tabPanel_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("tabPanel", tabPanel_r4);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.is_new ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c06, ctx_r2.base_route))("active", ctx_r2.active === "items");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.ASSETS_PRODUCTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c16, ctx_r2.base_route))("active", ctx_r2.active === "purchase-orders");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "APP.CONCIERGE.ASSETS_PO"), " ");
  }
}
var _AssetListingComponent = class _AssetListingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._router = inject(Router);
    this._state = inject(AssetManagerStateService);
    this.active = "requests";
    this.is_new = true;
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.active = this._router.url.includes("requests") ? "requests" : this._router.url.includes("items") ? "items" : "purchase-orders";
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.active = this._router.url.includes("requests") ? "requests" : this._router.url.includes("items") ? "items" : "purchase-orders";
      }
    }));
  }
};
_AssetListingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetListingComponent_BaseFactory;
  return function AssetListingComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetListingComponent_BaseFactory || (\u0275AssetListingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetListingComponent)))(__ngFactoryType__ || _AssetListingComponent);
  };
})();
_AssetListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetListingComponent, selectors: [["asset-listing"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 2, consts: [["tabPanel", ""], [3, "active"], [1, "flex", "h-1/2", "w-full", "flex-1", "flex-col", "px-8"], ["mat-tab-nav-bar", "", 3, "tabPanel"], [1, "h-1/2", "w-full", "flex-1", "overflow-visible"], ["mat-tab-link", "", 3, "routerLink", "routerLinkActive", "active"], ["mat-tab-link", "", 3, "click", "routerLink", "active"], ["mat-tab-link", "", 3, "click", "routerLink", "routerLinkActive", "active"]], template: function AssetListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "asset-manager-topbar", 1);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275conditionalCreate(2, AssetListingComponent_Conditional_2_Template, 8, 16, "nav", 3);
    \u0275\u0275elementStart(3, "mat-tab-nav-panel", 4, 0);
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("active", ctx.active);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.is_new || ctx.active !== "requests" ? 2 : -1);
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
  TranslatePipe,
  AssetManagerTopbarComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=asset-listing.component.css.map */"] });
var AssetListingComponent = _AssetListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetListingComponent, [{
    type: Component,
    args: [{ selector: "asset-listing", template: `
        <asset-manager-topbar [active]="active" />
        <div class="flex h-1/2 w-full flex-1 flex-col px-8">
            @if (!is_new || active !== 'requests') {
                <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                    @if (!is_new) {
                        <a
                            mat-tab-link
                            [routerLink]="[base_route, 'list', 'requests']"
                            [routerLinkActive]="'active'"
                            [active]="active === 'requests'"
                            (click)="active = 'requests'"
                        >
                            {{ 'APP.CONCIERGE.ASSETS_REQUESTS' | translate }}
                        </a>
                    }
                    <a
                        mat-tab-link
                        [routerLink]="[base_route, 'list', 'items']"
                        [active]="active === 'items'"
                        (click)="active = 'items'"
                    >
                        {{ 'APP.CONCIERGE.ASSETS_PRODUCTS' | translate }}
                    </a>
                    <a
                        mat-tab-link
                        [routerLink]="[base_route, 'list', 'purchase-orders']"
                        [active]="active === 'purchase-orders'"
                        (click)="active = 'purchase-orders'"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetListingComponent, { className: "AssetListingComponent", filePath: "apps/concierge/src/app/asset-manager/asset-listing.component.ts", lineNumber: 70 });
})();

// apps/concierge/src/app/asset-manager/asset-manager.component.ts
var _c07 = ["asset-manager", ""];
var _AssetManagerComponent = class _AssetManagerComponent {
};
_AssetManagerComponent.\u0275fac = function AssetManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetManagerComponent)();
};
_AssetManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetManagerComponent, selectors: [["", "asset-manager", ""]], attrs: _c07, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function AssetManagerComponent_Template(rf, ctx) {
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
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=asset-manager.component.css.map */"] });
var AssetManagerComponent = _AssetManagerComponent;
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetManagerComponent, { className: "AssetManagerComponent", filePath: "apps/concierge/src/app/asset-manager/asset-manager.component.ts", lineNumber: 34 });
})();

// apps/concierge/src/app/asset-manager/asset-purchase-order-form.component.ts
var _c08 = (a0, a1) => [a0, "view", a1];
var _c17 = (a0) => [a0, "list", "purchase-orders"];
var _c25 = (a0) => ({ count: a0 });
var _c3 = () => [];
var _c4 = (a0) => ({ key: "name", name: a0 });
var _c5 = (a0) => ({ key: "identifier", name: a0 });
var _c6 = (a0) => ({ key: "serial_number", name: a0 });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0 });
var _c8 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AssetPurchaseOrderFormComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "APP.CONCIERGE.ASSETS_PURCHASE_ASSETS", \u0275\u0275pureFunction1(6, _c25, ((tmp_1_0 = \u0275\u0275pipeBind1(2, 1, ctx_r0.asset_list)) == null ? null : tmp_1_0.length) || "0")), " ");
  }
}
function AssetPurchaseOrderFormComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 21);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", \u0275\u0275pipeBind1(1, 3, ctx_r0.asset_list) || \u0275\u0275pureFunction0(13, _c3))("columns", \u0275\u0275pureFunction4(22, _c8, \u0275\u0275pureFunction1(14, _c4, \u0275\u0275pipeBind1(2, 5, "FORM.NAME")), \u0275\u0275pureFunction1(16, _c5, \u0275\u0275pipeBind1(3, 7, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME")), \u0275\u0275pureFunction1(18, _c6, \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL")), \u0275\u0275pureFunction1(20, _c7, ctx_r0.action_template)))("empty_message", \u0275\u0275pipeBind1(5, 11, "APP.CONCIERGE.ASSETS_PURCHASE_ASSETS_EMPTY"));
  }
}
var _AssetPurchaseOrderFormComponent = class _AssetPurchaseOrderFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this.form = generateAssetPurchaseOrderForm();
    this.loading = "";
    this._id = new BehaviorSubject("");
    this.from = addYears(Date.now(), -5);
    this.asset_list = combineLatest([
      this._id,
      this._org.active_building
    ]).pipe(filter(([_, bld]) => !!_ && !!bld), switchMap(([id]) => queryAssets({ order_id: id })), switchMap(async (asset_list) => {
      const groups = await queryAssetGroups({
        zone_id: this._org.building.id,
        limit: 500
      }).toPromise();
      return asset_list.map((asset) => __spreadProps(__spreadValues({}, asset), {
        name: groups.find((_) => _.id === asset.asset_type_id)?.name || asset.id
      }));
    }), shareReplay(1));
  }
  get base_route() {
    return this._state.base_route;
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.get("id")) {
        this.loading = i18n("APP.CONCIERGE.ASSETS_PURCHASE_LOADING");
        const asset = await showAssetPurchaseOrder(params.get("id")).toPromise().catch(() => null);
        if (!asset) {
          notifyError(i18n("APP.CONCIERGE.ASSETS_PURCHASE_LOAD_ERROR"));
          this._router.navigate([this.base_route]);
        }
        this.form.patchValue(__spreadProps(__spreadValues({}, asset), {
          purchase_date: asset.purchase_date * 1e3,
          expected_service_end_date: asset.expected_service_end_date * 1e3,
          expected_service_start_date: asset.expected_service_start_date * 1e3
        }));
        this.item = asset;
        this._id.next(asset.id);
        this.loading = "";
      }
      if (params.get("group_id")) {
        this.product_id = params.get("group_id");
      }
    }));
    this._state.setOptions({ active_item: null });
  }
  async save() {
    if (!this.form.valid)
      return;
    this.loading = i18n("APP.CONCIERGE.ASSETS_PURCHASE_SAVING");
    const data = this.form.value;
    data.purchase_date = getUnixTime(data.purchase_date) || null;
    data.expected_service_start_date = getUnixTime(data.expected_service_start_date) || this.item?.expected_service_start_date || null;
    data.expected_service_end_date = getUnixTime(data.expected_service_end_date) || this.item?.expected_service_end_date || null;
    data.unit_price = +data.unit_price;
    const item = await saveAssetPurchaseOrder(data).toPromise().catch((e) => {
      this.loading = "";
      notifyError(i18n("APP.CONCIERGE.ASSETS_PURCHASE_SAVE_ERROR", {
        error: e.message || e
      }));
      throw e;
    });
    this.form.reset();
    notifySuccess(i18n("APP.CONCIERGE.ASSETS_PURCHASE_SAVE_SUCCESS"));
    this._state.postChange();
    if (this.product_id) {
      this._router.navigate([this.base_route, "view", this.product_id]);
    } else {
      this._router.navigate([this.base_route, "list", "purchase-orders"]);
    }
    this.loading = "";
  }
};
_AssetPurchaseOrderFormComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetPurchaseOrderFormComponent_BaseFactory;
  return function AssetPurchaseOrderFormComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetPurchaseOrderFormComponent_BaseFactory || (\u0275AssetPurchaseOrderFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetPurchaseOrderFormComponent)))(__ngFactoryType__ || _AssetPurchaseOrderFormComponent);
  };
})();
_AssetPurchaseOrderFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetPurchaseOrderFormComponent, selectors: [["asset-purchase-order-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 52, vars: 45, consts: [[3, "confirm", "heading", "close", "loading"], [3, "formGroup"], [1, "flex", "flex-col", "space-y-2"], ["for", "order-number"], ["appearance", "outline"], ["matInput", "", "name", "order-number", "formControlName", "purchase_order_number", 3, "placeholder"], ["for", "invoice-number"], ["matInput", "", "name", "invoice-number", "formControlName", "invoice_number", 3, "placeholder"], [1, "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "purchase-date"], ["name", "purchase-date", "formControlName", "purchase_date", 3, "from"], ["for", "unit-price"], ["appearance", "outline", 1, "w-full"], ["matPrefix", ""], ["matInput", "", "name", "unit-price", "formControlName", "unit_price"], ["for", "depreciation-start-date"], ["name", "depreciation-start-date", "formControlName", "expected_service_start_date", 3, "from"], ["for", "depreciation-end-date"], ["name", "depreciation-end-date", "formControlName", "expected_service_end_date"], [1, "mb-2", "font-medium"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "empty_message"]], template: function AssetPurchaseOrderFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("confirm", function AssetPurchaseOrderFormComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "label", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 4);
    \u0275\u0275element(10, "input", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 2)(16, "label", 6);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 4);
    \u0275\u0275element(20, "input", 7);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 8)(26, "div", 9)(27, "label", 10);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "a-date-field", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 9)(32, "label", 12);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 13)(36, "div", 14);
    \u0275\u0275text(37, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 8)(40, "div", 9)(41, "label", 16);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "a-date-field", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 9)(46, "label", 18);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "a-date-field", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(50, AssetPurchaseOrderFormComponent_Conditional_50_Template, 4, 8, "h3", 20);
    \u0275\u0275conditionalCreate(51, AssetPurchaseOrderFormComponent_Conditional_51_Template, 6, 27, "simple-table", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 18, ctx.form.value.id ? "APP.CONCIERGE.ASSETS_PURCHASE_EDIT" : "APP.CONCIERGE.ASSETS_PURCHASE_NEW"))("close", ctx.product_id ? \u0275\u0275pureFunction2(40, _c08, ctx.base_route, ctx.product_id) : \u0275\u0275pureFunction1(43, _c17, ctx.base_route))("loading", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 20, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 22, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 24, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 26, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 28, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 30, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 32, "APP.CONCIERGE.ASSETS_PURCHASE_DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("from", ctx.from);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 34, "APP.CONCIERGE.ASSETS_PURCHASE_PRICE"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 36, "APP.CONCIERGE.ASSETS_PURCHASE_START"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("from", ctx.from);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 38, "APP.CONCIERGE.ASSETS_PURCHASE_END"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx.item == null ? null : ctx.item.id) ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.item == null ? null : ctx.item.id) ? 51 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  FullscreenModalShellComponent,
  SimpleTableComponent,
  TranslatePipe,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatPrefix,
  MatInputModule,
  MatInput,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], encapsulation: 2 });
var AssetPurchaseOrderFormComponent = _AssetPurchaseOrderFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetPurchaseOrderFormComponent, [{
    type: Component,
    args: [{ selector: "asset-purchase-order-form", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ASSETS_PURCHASE_EDIT'
                    : 'APP.CONCIERGE.ASSETS_PURCHASE_NEW'
                ) | translate
            "
            [close]="
                product_id
                    ? [base_route, 'view', product_id]
                    : [base_route, 'list', 'purchase-orders']
            "
            [loading]="loading"
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <div class="flex flex-col space-y-2">
                    <label for="order-number">
                        {{ 'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER' | translate
                        }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="order-number"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER'
                                    | translate
                            "
                            formControlName="purchase_order_number"
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
                            name="invoice-number"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE'
                                    | translate
                            "
                            formControlName="invoice_number"
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
                            name="purchase-date"
                            [from]="from"
                            formControlName="purchase_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="unit-price">{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_PRICE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <div matPrefix>$</div>
                            <input
                                matInput
                                name="unit-price"
                                formControlName="unit_price"
                            />
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
                            name="depreciation-start-date"
                            [from]="from"
                            formControlName="expected_service_start_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="depreciation-end-date">
                            {{
                                'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate
                            }}
                        </label>
                        <a-date-field
                            name="depreciation-end-date"
                            formControlName="expected_service_end_date"
                        ></a-date-field>
                    </div>
                </div>
                @if (item?.id) {
                    <h3 class="mb-2 font-medium">
                        {{
                            'APP.CONCIERGE.ASSETS_PURCHASE_ASSETS'
                                | translate
                                    : {
                                          count:
                                              (asset_list | async)?.length ||
                                              '0',
                                      }
                        }}
                    </h3>
                }
                @if (item?.id) {
                    <simple-table
                        class="block w-full text-sm"
                        [data]="(asset_list | async) || []"
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
                            {
                                key: 'actions',
                                name: ' ',
                                content: action_template,
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
      CommonModule,
      FullscreenModalShellComponent,
      SimpleTableComponent,
      TranslatePipe,
      DateFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetPurchaseOrderFormComponent, { className: "AssetPurchaseOrderFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-purchase-order-form.component.ts", lineNumber: 202 });
})();

// apps/concierge/src/app/asset-manager/asset-purchase-order-list.component.ts
var _c09 = (a0) => ({ key: "purchase_order_number", name: a0 });
var _c18 = (a0) => ({ key: "invoice_number", name: a0 });
var _c26 = (a0, a1) => ({ key: "purchase_date", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "expected_service_start_date", name: a0, content: a1 });
var _c42 = (a0, a1) => ({ key: "expected_service_end_date", name: a0, content: a1 });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function AssetPurchaseOrderListComponent_ng_template_11_Conditional_1_Template(rf, ctx) {
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
function AssetPurchaseOrderListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, AssetPurchaseOrderListComponent_ng_template_11_Conditional_1_Template, 3, 3, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2 ? \u0275\u0275pipeBind2(3, 2, data_r2 * 1e3, "mediumDate") : "", " ");
  }
}
var _AssetPurchaseOrderListComponent = class _AssetPurchaseOrderListComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this._router = inject(Router);
    this.now = Date.now();
    this.purchase_orders = combineLatest([
      this._state.options,
      this._state.purchase_orders
    ]).pipe(map(([{ search }, list]) => list.filter((_) => !search || _.purchase_order_number.toLowerCase().includes(search.toLowerCase()) || _.invoice_number?.toLowerCase().includes(search.toLowerCase()))));
    this.filters = this._state.options;
  }
  editOrder(order) {
    this._router.navigate([this._state.base_route, "manage", "purchase-order"], {
      queryParams: { id: order.id }
    });
  }
};
_AssetPurchaseOrderListComponent.\u0275fac = function AssetPurchaseOrderListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetPurchaseOrderListComponent)();
};
_AssetPurchaseOrderListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetPurchaseOrderListComponent, selectors: [["app-asset-purchase-order-list"]], decls: 13, vars: 40, consts: [["date_template", ""], [1, "relative", "-left-4", "mt-4", "flex", "h-[calc(100%-1rem)]", "w-[calc(100%+2rem)]", "flex-col"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4"], ["purchase-orders", "", 1, "block", "min-w-208", "text-sm", 3, "row_clicked", "data", "columns", "empty_message", "filter", "sortable"], [1, "p-4"], [1, "opacity-30"]], template: function AssetPurchaseOrderListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "simple-table", 3);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("row_clicked", function AssetPurchaseOrderListComponent_Template_simple_table_row_clicked_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.editOrder($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, AssetPurchaseOrderListComponent_ng_template_11_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const date_template_r3 = \u0275\u0275reference(12);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.purchase_orders)("columns", \u0275\u0275pureFunction5(34, _c52, \u0275\u0275pureFunction1(21, _c09, \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER")), \u0275\u0275pureFunction1(23, _c18, \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE")), \u0275\u0275pureFunction2(25, _c26, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.ASSETS_PURCHASE_DATE"), date_template_r3), \u0275\u0275pureFunction2(28, _c32, \u0275\u0275pipeBind1(6, 11, "APP.CONCIERGE.ASSETS_PURCHASE_START"), date_template_r3), \u0275\u0275pureFunction2(31, _c42, \u0275\u0275pipeBind1(7, 13, "APP.CONCIERGE.ASSETS_PURCHASE_END"), date_template_r3)))("empty_message", \u0275\u0275pipeBind1(9, 17, ((tmp_3_0 = \u0275\u0275pipeBind1(8, 15, ctx.filters)) == null ? null : tmp_3_0.search) ? "APP.CONCIERGE.ASSETS_PURCHASE_SEARCH_EMPTY" : "APP.CONCIERGE.ASSETS_PURCHASE_EMPTY"))("filter", (tmp_4_0 = \u0275\u0275pipeBind1(10, 19, ctx.filters)) == null ? null : tmp_4_0.search)("sortable", true);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, SimpleTableComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=asset-purchase-order-list.component.css.map */"] });
var AssetPurchaseOrderListComponent = _AssetPurchaseOrderListComponent;
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
                    [data]="purchase_orders"
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
                        ((filters | async)?.search
                            ? 'APP.CONCIERGE.ASSETS_PURCHASE_SEARCH_EMPTY'
                            : 'APP.CONCIERGE.ASSETS_PURCHASE_EMPTY'
                        ) | translate
                    "
                    [filter]="(filters | async)?.search"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetPurchaseOrderListComponent, { className: "AssetPurchaseOrderListComponent", filePath: "apps/concierge/src/app/asset-manager/asset-purchase-order-list.component.ts", lineNumber: 88 });
})();

// apps/concierge/src/app/asset-manager/asset-location-modal.component.ts
var _c010 = (a0) => ({ key: "zone", name: "Level", content: a0 });
var _c19 = () => ({ key: "description", name: "Space" });
var _c27 = (a0) => ({ key: "tracking", name: "Tracking", content: a0 });
var _c33 = () => ({ key: "user_name", name: "Requestee" });
var _c43 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c53 = () => ({ display: "none" });
var _c62 = (a0, a1) => ({ "#Zones": a0, "#zones": a1 });
function AssetLocationModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.level(ctx_r1.selected.zone)) == null ? null : tmp_3_0.display_name) || "N/A", " ");
  }
}
function AssetLocationModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 14);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ((tmp_3_0 = ctx_r1.level(ctx_r1.selected.zone)) == null ? null : tmp_3_0.map_id) || "")("styles", \u0275\u0275pureFunction2(5, _c62, \u0275\u0275pureFunction0(3, _c53), \u0275\u0275pureFunction0(4, _c53)))("features", ctx_r1.selected_feature);
  }
}
function AssetLocationModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, " Select a space from the list to view map location ");
    \u0275\u0275elementEnd();
  }
}
function AssetLocationModalComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const data_r3 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r1.level(data_r3)) == null ? null : tmp_4_0.display_name) || "N/A", " ");
  }
}
function AssetLocationModalComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275listener("click", function AssetLocationModalComponent_ng_template_21_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "splitjoin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 20);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 2)(9, "button", 21);
    \u0275\u0275listener("click", function AssetLocationModalComponent_ng_template_21_Template_button_click_9_listener() {
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
    \u0275\u0275listener("click", function AssetLocationModalComponent_ng_template_21_Template_button_click_15_listener() {
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
    \u0275\u0275listener("click", function AssetLocationModalComponent_ng_template_21_Template_button_click_21_listener() {
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
    \u0275\u0275property("matMenuTriggerFor", tracking_menu_r6)("disabled", ctx_r1.loading[row_r5.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, row_r5.extension_data == null ? null : row_r5.extension_data.tracking) || "In Storage", " ");
  }
}
var _AssetLocationModalComponent = class _AssetLocationModalComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this._org = inject(OrganisationService);
    this.asset = this._state.active_product;
    this.requests = this._state.active_product_requests;
    this._space = new SpacePipe(this._org);
    this.loading = {};
  }
  async updateFeatures() {
    const space = await this._space.transform(this.selected.extension_data?.location_id);
    this.selected_feature = this.selected ? [
      {
        location: space.map_id,
        content: MapPinComponent,
        z_index: 99,
        data: {
          message: `${space.display_name || space.name} is here`
        }
      }
    ] : [];
  }
  async setTracking(item, state) {
    this.loading[item.id] = true;
    await this._state.setTracking(item, state);
    this.loading[item.id] = false;
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
};
_AssetLocationModalComponent.\u0275fac = function AssetLocationModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetLocationModalComponent)();
};
_AssetLocationModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetLocationModalComponent, selectors: [["asset-location-modal"]], decls: 23, vars: 22, consts: [["level_template", ""], ["tracking_template", ""], ["tracking_menu", "matMenu"], [1, "relative", "p-6"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-4", "top-4"], [1, "mb-2", "font-medium"], ["appearance", "outline", 1, "mb-2", "h-14"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search..."], [1, "flex", "w-[90vw]", "items-center", "space-x-4", "text-sm"], [1, "h-[60vh]", "w-1/2", "flex-1", "overflow-auto", "border", "border-base-200", "bg-base-200"], ["empty_message", "No requested assets for this product", 1, "block", "w-full", 3, "row_clicked", "data", "columns", "sortable"], [1, "relative", "flex", "h-[60vh]", "w-1/2", "flex-1", "items-center", "justify-center", "border", "border-base-200", "bg-base-200"], [1, "absolute", "left-4", "top-4", "rounded-3xl", "border", "border-base-200", "bg-base-100", "px-4", "py-2"], [3, "src", "styles", "features"], [1, "opacity-30"], [1, "p-4"], [1, "px-4", "py-2"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-sm", "bg-none", "px-2", "py-1", "text-left", 3, "click", "matMenuTriggerFor", "disabled"], [1, "min-w-32", "flex-1", "capitalize"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"]], template: function AssetLocationModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 4)(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 6)(9, "icon", 7);
    \u0275\u0275text(10, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "simple-table", 11);
    \u0275\u0275listener("row_clicked", function AssetLocationModalComponent_Template_simple_table_row_clicked_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      ctx.selected = $event;
      return \u0275\u0275resetView(ctx.updateFeatures());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275conditionalCreate(16, AssetLocationModalComponent_Conditional_16_Template, 2, 1, "div", 13);
    \u0275\u0275conditionalCreate(17, AssetLocationModalComponent_Conditional_17_Template, 1, 8, "interactive-map", 14)(18, AssetLocationModalComponent_Conditional_18_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, AssetLocationModalComponent_ng_template_19_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(21, AssetLocationModalComponent_ng_template_21_Template, 27, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_2_0;
    const level_template_r7 = \u0275\u0275reference(20);
    const tracking_template_r8 = \u0275\u0275reference(22);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", (tmp_2_0 = \u0275\u0275pipeBind1(6, 7, ctx.asset)) == null ? null : tmp_2_0.name, " in use location: ", (tmp_2_0 = \u0275\u0275pipeBind1(7, 9, ctx.requests)) == null ? null : tmp_2_0.length, " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("data", ctx.requests)("columns", \u0275\u0275pureFunction4(17, _c43, \u0275\u0275pureFunction1(11, _c010, level_template_r7), \u0275\u0275pureFunction0(13, _c19), \u0275\u0275pureFunction1(14, _c27, tracking_template_r8), \u0275\u0275pureFunction0(16, _c33)))("sortable", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.selected ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.selected ? 17 : 18);
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  CommonModule,
  AsyncPipe,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  IconComponent,
  SplitJoinPipe,
  InteractiveMapComponent,
  SimpleTableComponent,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatInputModule,
  MatInput
], encapsulation: 2 });
var AssetLocationModalComponent = _AssetLocationModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetLocationModalComponent, [{
    type: Component,
    args: [{ selector: "asset-location-modal", template: `
        <div class="relative p-6">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-4 top-4"
            >
                <icon>close</icon>
            </button>
            <h2 class="mb-2 font-medium">
                {{ (asset | async)?.name }} in use location:
                {{ (requests | async)?.length }}
            </h2>
            <mat-form-field appearance="outline" class="mb-2 h-14">
                <icon matPrefix>search</icon>
                <input matInput placeholder="Search..." />
            </mat-form-field>
            <div class="flex w-[90vw] items-center space-x-4 text-sm">
                <div
                    class="h-[60vh] w-1/2 flex-1 overflow-auto border border-base-200 bg-base-200"
                >
                    <simple-table
                        class="block w-full"
                        [data]="requests"
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
                        (row_clicked)="selected = $event; updateFeatures()"
                    ></simple-table>
                </div>
                <div
                    class="relative flex h-[60vh] w-1/2 flex-1 items-center justify-center border border-base-200 bg-base-200"
                >
                    @if (selected) {
                        <div
                            class="absolute left-4 top-4 rounded-3xl border border-base-200 bg-base-100 px-4 py-2"
                        >
                            {{ level(selected.zone)?.display_name || 'N/A' }}
                        </div>
                    }
                    @if (selected) {
                        <interactive-map
                            [src]="level(selected.zone)?.map_id || ''"
                            [styles]="{
                                '#Zones': { display: 'none' },
                                '#zones': { display: 'none' },
                            }"
                            [features]="selected_feature"
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
                    [disabled]="loading[row.id]"
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
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetLocationModalComponent, { className: "AssetLocationModalComponent", filePath: "apps/concierge/src/app/asset-manager/asset-location-modal.component.ts", lineNumber: 150 });
})();

// apps/concierge/src/app/asset-manager/asset-view.component.ts
var _c011 = () => ["/book/assets", "list", "items"];
var _c110 = (a0) => [a0, "manage", "group"];
var _c28 = (a0) => ({ id: a0 });
var _c34 = () => [];
var _c44 = (a0) => ({ count: a0 });
var _c54 = (a0) => [a0, "manage", "asset"];
var _c63 = (a0) => ({ group_id: a0 });
var _c72 = (a0) => [a0, "manage", "asset-bulk"];
var _c82 = (a0) => ({ key: "id", name: a0 });
var _c9 = (a0) => ({ key: "identifier", name: a0 });
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
function AssetViewComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.item)) == null ? null : tmp_6_0.description) || "~No Description~", " ");
  }
}
function AssetViewComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"));
  }
}
function AssetViewComponent_Conditional_0_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "a", 39);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 40);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function AssetViewComponent_Conditional_0_ng_template_72_Template_button_click_6_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeAsset(row_r4));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const row_r4 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c54, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction2(12, _c192, row_r4.id, (tmp_8_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.item)) == null ? null : tmp_8_0.id))("matTooltip", \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.ASSETS_ITEM_ASSET_EDIT"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 8, "APP.CONCIERGE.ASSETS_ITEM_ASSET_REMOVE"));
  }
}
function AssetViewComponent_Conditional_0_ng_template_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "a", 41)(2, "icon", 42);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function AssetViewComponent_Conditional_0_ng_template_102_Template_button_click_4_listener() {
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c132, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction2(4, _c192, row_r6.id, row_r6 == null ? null : row_r6.id));
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
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 10);
    \u0275\u0275elementStart(13, "a", 11);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementStart(15, "div", 12)(16, "icon", 13);
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 15)(22, "div", 12)(23, "icon", 13);
    \u0275\u0275text(24, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 14);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "div", 17);
    \u0275\u0275element(30, "image-carousel", 18);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "div", 20);
    \u0275\u0275conditionalCreate(34, AssetViewComponent_Conditional_0_Conditional_34_Template, 2, 3);
    \u0275\u0275pipe(35, "async");
    \u0275\u0275conditionalBranchCreate(36, AssetViewComponent_Conditional_0_Conditional_36_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 22)(38, "div", 23)(39, "div", 24);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275pipe(42, "async");
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 23)(45, "div", 24);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "async");
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 25);
    \u0275\u0275pipe(50, "async");
    \u0275\u0275pipe(51, "async");
    \u0275\u0275listener("click", function AssetViewComponent_Conditional_0_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewLocations());
    });
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(54, "mat-tab-group", 26)(55, "mat-tab", 27);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementStart(57, "div", 28)(58, "div", 29)(59, "a", 30);
    \u0275\u0275pipe(60, "async");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "a", 30);
    \u0275\u0275pipe(64, "async");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(67, "simple-table", 31);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275template(72, AssetViewComponent_Conditional_0_ng_template_72_Template, 10, 15, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "mat-tab", 27);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementStart(76, "div", 28)(77, "h3", 32);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 33)(81, "div", 34)(82, "div", 35);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "async");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(88, "mat-tab", 27);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementStart(90, "div", 28)(91, "a", 36);
    \u0275\u0275pipe(92, "async");
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "simple-table", 37);
    \u0275\u0275pipe(96, "async");
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275template(102, AssetViewComponent_Conditional_0_ng_template_102_Template, 7, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_21_0;
    let tmp_24_0;
    let tmp_33_0;
    let tmp_36_0;
    let tmp_38_0;
    const action_template_r7 = \u0275\u0275reference(73);
    const po_action_template_r8 = \u0275\u0275reference(103);
    const ctx_r1 = \u0275\u0275nextContext();
    const date_template_r9 = \u0275\u0275reference(4);
    const delete_tooltip_r10 = \u0275\u0275reference(6);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(113, _c011));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 37, "APP.CONCIERGE.ASSETS_MANAGE_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_7_0 = \u0275\u0275pipeBind1(11, 39, ctx_r1.item)) == null ? null : tmp_7_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(114, _c110, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction1(116, _c28, (tmp_9_0 = \u0275\u0275pipeBind1(14, 41, ctx_r1.item)) == null ? null : tmp_9_0.id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 43, "COMMON.EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("content", delete_tooltip_r10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 45, "COMMON.DELETE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("images", ((tmp_13_0 = \u0275\u0275pipeBind1(31, 47, ctx_r1.item)) == null ? null : tmp_13_0.images) || \u0275\u0275pureFunction0(118, _c34));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_14_0 = \u0275\u0275pipeBind1(35, 49, ctx_r1.item)) == null ? null : tmp_14_0.description) ? 34 : 36);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(43, 55, "APP.CONCIERGE.ASSETS_ITEM_AVAILABLE", \u0275\u0275pureFunction1(119, _c44, \u0275\u0275pipeBind1(41, 51, ctx_r1.asset_list).length - ((tmp_15_0 = \u0275\u0275pipeBind1(42, 53, ctx_r1.requests)) == null ? null : tmp_15_0.length) || 0)), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(48, 60, "APP.CONCIERGE.ASSETS_ITEM_IN_USE", \u0275\u0275pureFunction1(121, _c44, ((tmp_16_0 = \u0275\u0275pipeBind1(47, 58, ctx_r1.requests)) == null ? null : tmp_16_0.length) || 0)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(50, 63, ctx_r1.asset_list).length - ((tmp_17_0 = \u0275\u0275pipeBind1(51, 65, ctx_r1.requests)) == null ? null : tmp_17_0.length) !== 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 67, "APP.CONCIERGE.ASSETS_ITEM_VIEW_LOCATIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(56, 69, "APP.CONCIERGE.ASSETS_ITEM_TAB_ASSETS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(123, _c54, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction1(125, _c63, (tmp_21_0 = \u0275\u0275pipeBind1(60, 71, ctx_r1.item)) == null ? null : tmp_21_0.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 73, "APP.CONCIERGE.ASSETS_ITEM_ASSET_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(127, _c72, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction1(129, _c63, (tmp_24_0 = \u0275\u0275pipeBind1(64, 75, ctx_r1.item)) == null ? null : tmp_24_0.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 77, "APP.CONCIERGE.ASSETS_ITEM_ASSET_BULK_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r1.asset_list)("columns", \u0275\u0275pureFunction4(139, _c122, \u0275\u0275pureFunction1(131, _c82, \u0275\u0275pipeBind1(68, 79, "APP.CONCIERGE.ASSETS_ITEM_ASSET_ID")), \u0275\u0275pureFunction1(133, _c9, \u0275\u0275pipeBind1(69, 81, "APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME")), \u0275\u0275pureFunction1(135, _c10, \u0275\u0275pipeBind1(70, 83, "APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL")), \u0275\u0275pureFunction1(137, _c11, action_template_r7)))("empty_message", \u0275\u0275pipeBind1(71, 85, "APP.CONCIERGE.ASSETS_ITEM_ASSET_EMPTY"))("sortable", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(75, 87, "APP.CONCIERGE.ASSETS_ITEM_TAB_SPECS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 89, "APP.CONCIERGE.ASSETS_ITEM_GENERAL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 91, "APP.CONCIERGE.ASSETS_ITEM_BRAND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_33_0 = \u0275\u0275pipeBind1(87, 93, ctx_r1.item)) == null ? null : tmp_33_0.brand) || "~None~", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(89, 95, "APP.CONCIERGE.ASSETS_ITEM_TAB_PURCHASE_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(144, _c132, ctx_r1.base_route))("queryParams", \u0275\u0275pureFunction1(146, _c63, (tmp_36_0 = \u0275\u0275pipeBind1(92, 97, ctx_r1.item)) == null ? null : tmp_36_0.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(94, 99, "APP.CONCIERGE.ASSETS_PURCHASE_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("data", (tmp_38_0 = \u0275\u0275pipeBind1(96, 101, ctx_r1.item)) == null ? null : tmp_38_0.purchase_orders)("columns", \u0275\u0275pureFunction5(160, _c182, \u0275\u0275pureFunction1(148, _c142, \u0275\u0275pipeBind1(97, 103, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER")), \u0275\u0275pureFunction1(150, _c152, \u0275\u0275pipeBind1(98, 105, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE")), \u0275\u0275pureFunction2(152, _c162, \u0275\u0275pipeBind1(99, 107, "APP.CONCIERGE.ASSETS_PURCHASE_START"), date_template_r9), \u0275\u0275pureFunction2(155, _c172, \u0275\u0275pipeBind1(100, 109, "APP.CONCIERGE.ASSETS_PURCHASE_END"), date_template_r9), \u0275\u0275pureFunction1(158, _c11, po_action_template_r8)))("empty_message", \u0275\u0275pipeBind1(101, 111, "APP.CONCIERGE.ASSETS_ITEM_PURCHASES_EMPTY"))("sortable", true);
  }
}
function AssetViewComponent_Conditional_2_Template(rf, ctx) {
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
function AssetViewComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
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
function AssetViewComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, AssetViewComponent_ng_template_3_Conditional_3_Template, 3, 3, "span", 21);
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
function AssetViewComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48)(5, "button", 49);
    \u0275\u0275listener("click", function AssetViewComponent_ng_template_5_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeTooltip());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275listener("click", function AssetViewComponent_ng_template_5_Conditional_0_Template_button_click_8_listener() {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "COMMON.FALSE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "APP.CONCIERGE.ASSETS_ITEM_DELETE_ACTION"), " ");
  }
}
function AssetViewComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
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
function AssetViewComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetViewComponent_ng_template_5_Conditional_0_Template, 11, 9, "div", 46)(1, AssetViewComponent_ng_template_5_Conditional_1_Template, 5, 4, "div", 47);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.deleting() ? 0 : 1);
  }
}
var _AssetViewComponent = class _AssetViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._state = inject(AssetManagerStateService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this.loading = signal(false);
    this.deleting = signal(false);
    this.item = this._state.active_product;
    this.asset_list = combineLatest([
      this.item,
      this._state.extra_assets
    ]).pipe(map(([item, assets]) => {
      if (!item)
        return [];
      return unique([
        ...item.assets,
        ...assets.filter((_) => _.asset_type_id === item.id)
      ], "id");
    }));
    this.requests = this._state.active_product_requests.pipe(map((req) => req.filter((_) => _.date <= Date.now() && addMinutes(_.date, _.duration).valueOf() >= Date.now())));
    this._tooltip_el = viewChild(CustomTooltipComponent);
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
    this._state.active_product.pipe(first((_) => !!_)).subscribe(() => {
      this.clearTimeout("no_asset");
      this.loading.set(false);
    });
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
    await lastValueFrom(deleteAsset(asset.id));
    await removeAssetRequests(asset.id);
    const item = await lastValueFrom(this._state.active_product.pipe(first()));
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
    await lastValueFrom(deleteAssetPurchaseOrder(asset.id));
    const item = await lastValueFrom(this._state.active_product.pipe(first()));
    this._state.setOptions({ active_item: "" });
    setTimeout(() => this._state.setOptions({ active_item: item.id }), 1e3);
    resp.close();
  }
};
_AssetViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetViewComponent_BaseFactory;
  return function AssetViewComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetViewComponent_BaseFactory || (\u0275AssetViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetViewComponent)))(__ngFactoryType__ || _AssetViewComponent);
  };
})();
_AssetViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetViewComponent, selectors: [["asset-view"]], viewQuery: function AssetViewComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._tooltip_el, CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [["date_template", ""], ["delete_tooltip", ""], ["action_template", ""], ["po_action_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "flex", "w-full", "space-x-2", "bg-base-100", "pb-4", "pl-4", "pr-8", "pt-8"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "flex", "flex-col"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", 1, "h-12", "w-32", 3, "routerLink", "queryParams"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "h-12", "w-32", "border-error", "bg-base-100", "text-error", 3, "content"], [1, "mb-4", "flex", "items-center", "space-x-4", "px-8"], [1, "h-64", "w-[24rem]", "flex-1", "overflow-hidden", "rounded-xl", "bg-base-200"], [3, "images"], [1, "flex", "h-64", "w-1/2", "flex-1", "flex-col", "space-y-4", "rounded-lg", "border", "border-base-300", "p-4"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], [1, "opacity-30"], [1, "w-full", "divide-y", "divide-base-200", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "h-16", "items-center", "justify-between", "p-2"], [1, "pl-2"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "h-px", "flex-1"], [3, "label"], [1, "mx-auto", "max-w-[768px]", "px-8", "py-4"], [1, "mb-2", "flex", "w-full", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "routerLink", "queryParams"], [1, "block", "min-w-160", "text-sm", 3, "data", "columns", "empty_message", "sortable"], [1, "p-2"], ["data-table", "", 1, "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "justify-between", "p-2", "even:bg-base-200"], [1, "w-32", "flex-1", "text-sm", "font-medium"], ["btn", "", "matRipple", "", 1, "mb-2", 3, "routerLink", "queryParams"], ["asset-purchases", "", 1, "block", "min-w-160", "text-sm", 3, "data", "columns", "empty_message", "sortable"], [1, "flex", "w-full", "items-center", "justify-end", "p-2"], ["icon", "", "matRipple", "", 3, "routerLink", "queryParams", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 3, "routerLink", "queryParams"], [1, "text-lg"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click"], [3, "diameter"], [1, "p-4"], [1, "my-2", "w-[18rem]", "rounded-sm", "bg-base-100", "p-4", "text-center"], [1, "my-2", "flex", "h-36", "w-64", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-sm", "bg-base-100", "p-4"], [1, "mt-6", "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "inverse", "w-24", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "error", "w-24", "flex-1", 3, "click"]], template: function AssetViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetViewComponent_Conditional_0_Template, 104, 166, "div", 4);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, AssetViewComponent_Conditional_2_Template, 5, 4, "div", 5);
    \u0275\u0275template(3, AssetViewComponent_ng_template_3_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, AssetViewComponent_ng_template_5_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.loading() && \u0275\u0275pipeBind1(1, 1, ctx.item) ? 0 : 2);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  RouterModule,
  RouterLink,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  SimpleTableComponent,
  MatTabsModule,
  MatTab,
  MatTabGroup,
  MatTooltipModule,
  MatTooltip,
  ImageCarouselComponent,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=asset-view.component.css.map */"] });
var AssetViewComponent = _AssetViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetViewComponent, [{
    type: Component,
    args: [{ selector: "asset-view", template: `
        @if (!loading() && (item | async)) {
            <div class="flex h-full w-full flex-col">
                <div
                    class="flex w-full space-x-2 bg-base-100 pb-4 pl-4 pr-8 pt-8"
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
                        <div>{{ (item | async)?.name }}</div>
                    </div>
                    <div class="flex-1"></div>
                    <a
                        btn
                        matRipple
                        class="h-12 w-32"
                        [routerLink]="[base_route, 'manage', 'group']"
                        [queryParams]="{ id: (item | async)?.id }"
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
                        class="h-12 w-32 border-error bg-base-100 text-error"
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
                        class="h-64 w-[24rem] flex-1 overflow-hidden rounded-xl bg-base-200"
                    >
                        <image-carousel
                            [images]="(item | async)?.images || []"
                        ></image-carousel>
                    </div>
                    <div
                        class="flex h-64 w-1/2 flex-1 flex-col space-y-4 rounded-lg border border-base-300 p-4"
                    >
                        <div class="h-1/2 w-full flex-1 overflow-auto">
                            @if ((item | async)?.description) {
                                {{
                                    (item | async)?.description ||
                                        '~No Description~'
                                }}
                            } @else {
                                <span class="opacity-30">{{
                                    'COMMON.DESCRIPTION_EMPTY' | translate
                                }}</span>
                            }
                        </div>
                        <div
                            class="w-full divide-y divide-base-200 rounded-sm border border-base-200 bg-base-100"
                        >
                            <div
                                class="flex h-16 items-center justify-between p-2"
                            >
                                <div class="pl-2">
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_AVAILABLE'
                                            | translate
                                                : {
                                                      count:
                                                          (asset_list | async)
                                                              .length -
                                                              (requests | async)
                                                                  ?.length || 0,
                                                  }
                                    }}
                                </div>
                                <!-- <button
                  btn
                  matRipple
                                [disabled]="
                                    (asset_list | async).length -
                                        (requests | async)?.length ===
                                    0
                                "
                  >
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
                                                      count:
                                                          (requests | async)
                                                              ?.length || 0,
                                                  }
                                    }}
                                </div>
                                <button
                                    btn
                                    matRipple
                                    (click)="viewLocations()"
                                    [disabled]="
                                        (asset_list | async).length -
                                            (requests | async)?.length !==
                                        0
                                    "
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
                                        group_id: (item | async)?.id,
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
                                        group_id: (item | async)?.id,
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
                                [data]="asset_list"
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
                                        matRipple
                                        [routerLink]="[
                                            base_route,
                                            'manage',
                                            'asset',
                                        ]"
                                        [queryParams]="{
                                            id: row.id,
                                            group_id: (item | async)?.id,
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
                                        matRipple
                                        class="text-error"
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
                                class="border border-base-200 bg-base-100"
                            >
                                <div
                                    class="flex items-center justify-between p-2 even:bg-base-200"
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
                                        {{ (item | async)?.brand || '~None~' }}
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
                                [queryParams]="{ group_id: (item | async)?.id }"
                            >
                                {{
                                    'APP.CONCIERGE.ASSETS_PURCHASE_ADD'
                                        | translate
                                }}
                            </a>
                            <simple-table
                                class="block min-w-160 text-sm"
                                asset-purchases
                                [data]="(item | async)?.purchase_orders"
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
                                        matRipple
                                        class="text-error"
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
                <div class="my-2 w-[18rem] rounded-sm bg-base-100 p-4 text-center">
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
                            {{ 'COMMON.FALSE' | translate }}
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
                    class="my-2 flex h-36 w-64 flex-col items-center justify-center space-y-2 rounded-sm bg-base-100 p-4"
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
      IconComponent
    ], styles: ["/* angular:styles/component:css;53020ecd9eec6f24fc2e7595a27ffc73aeee295082b36352e0ab4548108a08a2;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/asset-manager/asset-view.component.ts */\n:host {\n  height: 100%;\n}\n/*# sourceMappingURL=asset-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetViewComponent, { className: "AssetViewComponent", filePath: "apps/concierge/src/app/asset-manager/asset-view.component.ts", lineNumber: 513 });
})();

// apps/concierge/src/app/asset-manager/asset-manager.module.ts
var children = [
  {
    path: "list",
    component: AssetListingComponent,
    children: [
      { path: "items", component: AssetItemListComponent },
      { path: "requests", component: AssetRequestListComponent },
      {
        path: "purchase-orders",
        component: AssetPurchaseOrderListComponent
      },
      { path: "**", redirectTo: "requests" }
    ]
  },
  { path: "view/:id", component: AssetViewComponent },
  {
    path: "manage",
    children: [
      { path: "group", component: AssetGroupFormComponent },
      { path: "asset", component: AssetFormComponent },
      { path: "asset-bulk", component: AssetBulkFormComponent },
      { path: "category", component: AssetCategoryFormComponent },
      {
        path: "purchase-order",
        component: AssetPurchaseOrderFormComponent
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
var _AppAssetManangerModule = class _AppAssetManangerModule {
};
_AppAssetManangerModule.\u0275fac = function AppAssetManangerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppAssetManangerModule)();
};
_AppAssetManangerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppAssetManangerModule });
_AppAssetManangerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  AssetManagerComponent,
  AssetItemListComponent,
  AssetRequestListComponent,
  AssetPurchaseOrderListComponent,
  AssetViewComponent,
  AssetGroupFormComponent,
  AssetFormComponent,
  AssetBulkFormComponent,
  AssetCategoryFormComponent,
  AssetPurchaseOrderFormComponent,
  RouterModule.forChild(ROUTES)
] });
var AppAssetManangerModule = _AppAssetManangerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppAssetManangerModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        AssetManagerComponent,
        AssetItemListComponent,
        AssetRequestListComponent,
        AssetPurchaseOrderListComponent,
        AssetViewComponent,
        AssetGroupFormComponent,
        AssetFormComponent,
        AssetBulkFormComponent,
        AssetCategoryFormComponent,
        AssetPurchaseOrderFormComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  AppAssetManangerModule
};
//# sourceMappingURL=asset-manager.module-3ZQJD26K.js.map
