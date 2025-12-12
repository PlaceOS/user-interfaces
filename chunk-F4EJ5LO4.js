import {
  AssetRequest,
  AsyncHandler,
  AsyncPipe,
  AttachedResourceConfigModalComponent,
  BehaviorSubject,
  Booking,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  EventEmitter,
  FormControlName,
  FormGroupDirective,
  IconComponent,
  Injectable,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
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
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  OrganisationService,
  Pipe,
  ReactiveFormsModule,
  SettingsService,
  SimpleTableComponent,
  SpacesService,
  TranslatePipe,
  Xu,
  __spreadProps,
  __spreadValues,
  approveBooking,
  as,
  catchError,
  combineLatest,
  debounceTime,
  deleteAssetCategory,
  deleteAssetGroup,
  distinctUntilChanged,
  ec,
  endOfDay,
  filter,
  first,
  flatten,
  generateAssetCategoryForm,
  generateAssetForm,
  getGroupsWithAssets,
  getUnixTime,
  i18n,
  inject,
  lo,
  map,
  model,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  output,
  queryAssetCategories,
  queryAssetPurchaseOrders,
  queryBookings,
  rejectBooking,
  saveAsset,
  saveAssetCategory,
  setClassMetadata,
  shareReplay,
  showGroupFull,
  startOfDay,
  switchMap,
  tap,
  unique,
  updateBooking,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
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
  ɵɵpureFunction7,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-B2WI2KLR.js";

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
var _AssetCategoryManagementModalComponent = class _AssetCategoryManagementModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.changed = new EventEmitter();
    this.list = this._data.list;
    this.edit = this._data.edit;
    this.remove = async (category) => {
      await deleteAssetCategory(category.id).toPromise();
      this.changed.emit();
    };
  }
};
_AssetCategoryManagementModalComponent.\u0275fac = function AssetCategoryManagementModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetCategoryManagementModalComponent)();
};
_AssetCategoryManagementModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetCategoryManagementModalComponent, selectors: [["asset-category-management-modal"]], decls: 17, vars: 8, consts: [[1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-128", "max-h-[65vh]", "min-w-md"], ["btn", "", "matRipple", "", 1, "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "truncate", "pl-2"], [1, "text-2xl"], [1, "hover:bg-base-200:bg-base-300", "m-2", "flex", "items-center", "space-x-2", "rounded-sm", "border", "border-base-200", "p-2"], [1, "flex-1", "truncate", "px-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "border", "border-secondary", "text-secondary", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "border", "border-error", "text-error", 3, "click", "matTooltip"]], template: function AssetCategoryManagementModalComponent_Template(rf, ctx) {
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
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 4);
    \u0275\u0275listener("click", function AssetCategoryManagementModalComponent_Template_button_click_11_listener() {
      return ctx.edit();
    });
    \u0275\u0275elementStart(12, "div", 5);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "icon", 6);
    \u0275\u0275text(16, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 4, ctx.list));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 6, "APP.CONCIERGE.ASSETS_CATEGORY_NEW"), " ");
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  MatDialogModule,
  MatDialogClose
], encapsulation: 2 });
var AssetCategoryManagementModalComponent = _AssetCategoryManagementModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetCategoryManagementModalComponent, [{
    type: Component,
    args: [{ selector: "asset-category-management-modal", template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-128 max-h-[65vh] min-w-md">
            @for (category of list | async; track category) {
                @if (category.id) {
                    <div
                        class="hover:bg-base-200:bg-base-300 m-2 flex items-center space-x-2 rounded-sm border border-base-200 p-2"
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
                            class="h-12 w-12 rounded-sm border border-secondary text-secondary"
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
                            class="h-12 w-12 rounded-sm border border-error text-error"
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
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatTooltipModule,
      MatDialogModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetCategoryManagementModalComponent, { className: "AssetCategoryManagementModalComponent", filePath: "apps/concierge/src/app/asset-manager/asset-category-management-modal.component.ts", lineNumber: 86 });
})();

// apps/concierge/src/app/asset-manager/asset-manager-state.service.ts
var _AssetManagerStateService = class _AssetManagerStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._spaces = inject(SpacesService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._options = new BehaviorSubject({ view: "grid" });
    this._change = new BehaviorSubject(0);
    this._poll = new BehaviorSubject(0);
    this._extra_assets = new BehaviorSubject([]);
    this._form = generateAssetForm();
    this._loading = new BehaviorSubject(false);
    this.loading = this._loading.asObservable();
    this.options = this._options.asObservable();
    this.extra_assets = this._extra_assets.asObservable();
    this.products = combineLatest([
      this._change,
      this._org.active_building
    ]).pipe(switchMap(() => {
      this._loading.next(true);
      return getGroupsWithAssets({ zone_id: this._org.building?.id });
    }), tap((_) => this._loading.next(false)), shareReplay(1));
    this.purchase_orders = this._change.pipe(switchMap(() => {
      this._loading.next(true);
      return queryAssetPurchaseOrders();
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.requests = combineLatest([
      this._options,
      this._org.active_building,
      this._org.active_region,
      this._poll,
      this._change,
      this._spaces.initialised
    ]).pipe(debounceTime(200), switchMap(([{ date }, bld, region]) => {
      const start = startOfDay(date || Date.now()).valueOf();
      const end = endOfDay(date || Date.now()).valueOf();
      const zones = this._settings.get("app.use_region") ? this._org.buildingsForRegion().map((_) => _.id).join(",") : bld?.id;
      return queryBookings({
        zones,
        period_start: getUnixTime(start),
        period_end: getUnixTime(end),
        include_parent_bookings: true,
        type: "asset-request"
      }).pipe(map((_) => _.map((b) => new Booking(__spreadProps(__spreadValues({}, b), {
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
      })));
    }), shareReplay(1));
    this.filtered_requests = combineLatest([
      this.requests,
      this._options
    ]).pipe(map(([list, options]) => {
      const search = (options.search || "").toLowerCase();
      return search ? list.filter((i) => i.user_name.toLowerCase().includes(search) || i.title.toLowerCase().includes(search) || i.extension_data.location_name?.toLowerCase().includes(search) || i.extension_data.assets?.find((_) => _.name.toLowerCase().includes(search)) || i.status.includes(search) || i.extension_data.tracking?.includes(search)) : list;
    }));
    this.categories = combineLatest([
      this._options,
      this._change
    ]).pipe(switchMap(() => queryAssetCategories()), map((list) => [
      new lo({ id: "", name: "Uncategorised" }),
      ...list
    ]), shareReplay(1));
    this.active_product = combineLatest([
      this._options,
      this._org.active_building,
      this._change
    ]).pipe(filter(([{ active_item }, bld]) => !!active_item && !!bld), map(([options, t]) => [options.active_item, t]), distinctUntilChanged(), switchMap(([active_item, bld]) => showGroupFull(active_item, { zone_id: bld.id })), shareReplay(1));
    this.active_product_requests = this.active_product.pipe(switchMap((item) => {
      return this.requests.pipe(map((_) => _.filter((i) => item.assets.find((asset) => asset.id === i.asset_id))));
    }), map((_) => _.filter((i) => i.status !== "declined")));
    this.filtered_products = combineLatest([
      this.products,
      this._options
    ]).pipe(map(([list, options]) => options.search ? list.filter((i) => i.name.toLowerCase().includes(options.search.toLowerCase())) : list));
    this.product_mapping = combineLatest([
      this.filtered_products,
      this.categories
    ]).pipe(map(([products, category_list]) => {
      const map2 = { _count: products.length };
      const mapped_products = products.map((item) => __spreadProps(__spreadValues({}, item), {
        category_id: category_list.find((_) => _.id === item.category_id) ? item.category_id : ""
      }));
      const categories = unique(mapped_products.map((i) => i.category_id));
      for (const group of categories) {
        map2[group] = mapped_products.filter((i) => i.category_id === group);
      }
      return map2;
    }));
    this.settings = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_), switchMap(([_]) => Xu(_.id, "assets-settings").pipe(catchError((_2) => of({})))), map((_) => _.details || {}), shareReplay(1));
    this.availability = this.settings.pipe(map((_) => _.disabled_rooms || []));
  }
  get form() {
    return this._form;
  }
  get is_new_ui() {
    return true;
  }
  get base_route() {
    return "/book/assets";
  }
  startPolling(delay = 15 * 1e3) {
    this.interval("polling", () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("polling");
  }
  resetForm() {
    this._form = generateAssetForm();
  }
  manageCategories() {
    const ref = this._dialog.open(AssetCategoryManagementModalComponent, {
      data: { list: this.categories, edit: (i) => this.editCategory(i) }
    });
    this.subscription("category_modal", ref.componentInstance.changed.subscribe(() => this._change.next(Date.now())));
    ref.afterClosed().subscribe(() => this.unsub("category_modal"));
  }
  async editCategory(category = {}) {
    const ref = this._dialog.open(AssetCategoryFormComponent, {
      data: { category }
    });
    const result = await ref.afterClosed().toPromise();
    if (!result)
      return null;
    this._change.next(Date.now());
    return result;
  }
  setExtraAssets(list) {
    this._extra_assets.next(list);
  }
  /** Update the set view options */
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  postChange() {
    this.timeout("change", () => this._change.next(Date.now()), 1e3);
  }
  async setStatus(item, status) {
    let result = item;
    if (status === "declined") {
      result = await rejectBooking(item.id).toPromise();
    } else if (status === "approved") {
      result = await approveBooking(item.id).toPromise();
    }
    this._change.next(Date.now());
    return result;
  }
  async setTracking(item, tracking) {
    const result = await updateBooking(item.id, __spreadProps(__spreadValues({}, item.toJSON()), {
      extension_data: __spreadProps(__spreadValues({}, item.extension_data), { tracking })
    })).toPromise();
    this._change.next(Date.now());
    return result;
  }
  async deleteActiveProduct() {
    const item = await nextValueFrom(this.active_product);
    if (!item?.id)
      return;
    await deleteAssetGroup(item.id).toPromise();
    this._change.next(Date.now());
    notifySuccess("Successfully deleted asset");
  }
  async postForm() {
    if (!this.form?.valid)
      return;
    const data = this.form.value;
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
    data.other_data = as(other_data, [void 0, null, ""]);
    const asset = await saveAsset(data).toPromise();
    this._change.next(Date.now());
    notifySuccess(`Successfully ${data.id ? "updated" : "created"} asset`);
    this.resetForm();
    return asset.id;
  }
  async editConfig() {
    const config = await this.getConfig(this._org.building.id);
    const items = await nextValueFrom(this.products);
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
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (details?.reason !== "done")
      return;
    this.updateConfig(this._org.building.id, details.metadata).then(() => ref.close(), () => ref.componentInstance.loading = false);
  }
  async getConfig(zone_id = this._org.building.id) {
    const rules = (await Xu(zone_id, "assets_config").toPromise()).details;
    return rules instanceof Array ? rules : [];
  }
  updateConfig(zone_id, config) {
    return ec(zone_id, {
      id: zone_id,
      name: "assets_config",
      details: config,
      description: `Assets config for ${zone_id}`
    }).toPromise();
  }
  async saveSettings(settings) {
    const old_settings = await nextValueFrom(this.settings);
    const result = await ec(this._org.building.id, {
      id: this._org.building.id,
      name: "assets-settings",
      details: __spreadValues(__spreadValues({}, old_settings), settings),
      description: `Assets settings for ${this._org.building.id}`
    }).toPromise();
    this._change.next(Date.now());
    return result;
  }
};
_AssetManagerStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetManagerStateService_BaseFactory;
  return function AssetManagerStateService_Factory(__ngFactoryType__) {
    return (\u0275AssetManagerStateService_BaseFactory || (\u0275AssetManagerStateService_BaseFactory = \u0275\u0275getInheritedFactory(_AssetManagerStateService)))(__ngFactoryType__ || _AssetManagerStateService);
  };
})();
_AssetManagerStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetManagerStateService, factory: _AssetManagerStateService.\u0275fac, providedIn: "root" });
var AssetManagerStateService = _AssetManagerStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetManagerStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/asset-manager/asset-category-form.component.ts
function AssetCategoryFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AssetCategoryFormComponent_Conditional_5_For_22_Template(rf, ctx) {
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
    \u0275\u0275pipe(20, "async");
    \u0275\u0275repeaterCreate(21, AssetCategoryFormComponent_Conditional_5_For_22_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 9, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "APP.CONCIERGE.ASSETS_CATEGORY_PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 15, "APP.CONCIERGE.ASSETS_CATEGORY_PARENT_EMPTY"))("disabled", !((tmp_7_0 = \u0275\u0275pipeBind1(20, 17, ctx_r1.categories)) == null ? null : tmp_7_0.length));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(23, 19, ctx_r1.categories));
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
var _AssetCategoryFormComponent = class _AssetCategoryFormComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = false;
    this.form = generateAssetCategoryForm();
    this.categories = this._state.categories.pipe(map((list) => list.filter((_) => _.parent_category_id !== this.form.value.id)));
    const _data = inject(MAT_DIALOG_DATA);
    if (_data?.category)
      this.form.patchValue(_data.category);
  }
  async save() {
    if (!this.form.valid)
      return;
    this.loading = true;
    this._dialog_ref.disableClose = true;
    const data = this.form.value;
    const item = await saveAssetCategory(data).toPromise().catch((e) => {
      this.loading = false;
      this._dialog_ref.disableClose = false;
      notifyError(i18n("APP.CONCIERGE.ASSETS_CATEGORY_SAVE_ERROR", {
        error: e.message
      }));
      throw e;
    });
    this.form.reset();
    this.loading = false;
    this._dialog_ref.close(item);
  }
};
_AssetCategoryFormComponent.\u0275fac = function AssetCategoryFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetCategoryFormComponent)();
};
_AssetCategoryFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetCategoryFormComponent, selectors: [["asset-category-form"]], decls: 8, vars: 6, consts: [[1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-1/2", "w-[24rem]", "max-w-[80vw]", "flex-1", "overflow-auto", "p-2", 3, "formGroup"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "flex", "justify-end", "space-x-2", "border-t", "border-base-200", "p-2"], [1, "flex", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["formControlName", "parent_category_id", 3, "placeholder", "disabled"], [3, "value"], [3, "diameter"], [1, "mt-4"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function AssetCategoryFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AssetCategoryFormComponent_Conditional_4_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AssetCategoryFormComponent_Conditional_5_Template, 24, 21, "main", 3)(6, AssetCategoryFormComponent_Conditional_6_Template, 5, 4, "div", 4);
    \u0275\u0275conditionalCreate(7, AssetCategoryFormComponent_Conditional_7_Template, 4, 3, "footer", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.form.value.id ? "APP.CONCIERGE.ASSETS_CATEGORY_EDIT" : "APP.CONCIERGE.ASSETS_CATEGORY_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 7 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  IconComponent,
  TranslatePipe,
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
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatInputModule,
  MatInput
], encapsulation: 2 });
var AssetCategoryFormComponent = _AssetCategoryFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetCategoryFormComponent, [{
    type: Component,
    args: [{ selector: "asset-category-form", template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (form.value.id
                        ? 'APP.CONCIERGE.ASSETS_CATEGORY_EDIT'
                        : 'APP.CONCIERGE.ASSETS_CATEGORY_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main
                class="h-1/2 w-[24rem] max-w-[80vw] flex-1 overflow-auto p-2"
                [formGroup]="form"
            >
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
                            formControlName="parent_category_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_CATEGORY_PARENT_EMPTY'
                                    | translate
                            "
                            [disabled]="!(categories | async)?.length"
                        >
                            @for (
                                category of categories | async;
                                track category
                            ) {
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
        @if (!loading) {
            <footer
                class="flex justify-end space-x-2 border-t border-base-200 p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatDialogModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatInputModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetCategoryFormComponent, { className: "AssetCategoryFormComponent", filePath: "apps/concierge/src/app/asset-manager/asset-category-form.component.ts", lineNumber: 117 });
})();

// apps/concierge/src/app/asset-manager/split-join.pipe.ts
var _SplitJoinPipe = class _SplitJoinPipe {
  transform(value, split = "_", join = " ") {
    return (value || "").split(split).join(join);
  }
};
_SplitJoinPipe.\u0275fac = function SplitJoinPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SplitJoinPipe)();
};
_SplitJoinPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "splitjoin", type: _SplitJoinPipe, pure: true });
var SplitJoinPipe = _SplitJoinPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitJoinPipe, [{
    type: Pipe,
    args: [{
      name: "splitjoin"
    }]
  }], null, null);
})();

// apps/concierge/src/app/asset-manager/asset-request-details.component.ts
var _c0 = (a0) => ({ name: a0 });
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
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
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
    let tmp_16_0;
    let tmp_33_0;
    const menu_r4 = \u0275\u0275reference(86);
    const tracking_menu_r5 = \u0275\u0275reference(100);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("user", \u0275\u0275pureFunction1(74, _c0, ctx_r1.request().user_name));
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
    \u0275\u0275repeater(ctx_r1.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 43, "APP.CONCIERGE.ASSETS_REQUESTS_DATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 45, ctx_r1.request().date, "EEEE, MMMM d, y"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 48, "COMMON.PERIOD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(56, 50, ctx_r1.request().date, ctx_r1.time_format), " \u2013 ", \u0275\u0275pipeBind2(57, 53, ctx_r1.request().date + ctx_r1.request().duration * 60 * 1e3, ctx_r1.time_format), " (", \u0275\u0275pipeBind1(58, 56, ctx_r1.request().duration), ") ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ((tmp_16_0 = \u0275\u0275pipeBind1(67, 58, ctx_r1.request().zones)) == null ? null : tmp_16_0.display_name) || "N/A", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 60, "RESOURCE.ROOM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.request().description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", ctx_r1.request().status === "approved")("bg-error", ctx_r1.request().status === "declined")("bg-warning", ctx_r1.request().status === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r4)("disabled", ctx_r1.loading);
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
    \u0275\u0275property("matMenuTriggerFor", tracking_menu_r5)("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 66, (tmp_33_0 = ctx_r1.request().extension_data) == null ? null : tmp_33_0.tracking) || "In Storage", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 68, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(106, 70, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(109, 72, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION"), " ");
  }
}
var _AssetRequestDetailsComponent = class _AssetRequestDetailsComponent {
  constructor() {
    this._state = inject(AssetManagerStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.request = model(void 0);
    this.requestChange = output();
    this.loading = false;
  }
  get items() {
    return this.request()?.extension_data?.request?.items || [];
  }
  get time_format() {
    return this._settings.time_format;
  }
  async setStatus(status) {
    this.loading = true;
    await this._state.setStatus(this.request(), status);
    this.request().status = status;
    this.loading = false;
  }
  async setTracking(state) {
    this.loading = true;
    await this._state.setTracking(this.request(), state);
    this.request().extension_data.tracking = state;
    this.loading = false;
  }
};
_AssetRequestDetailsComponent.\u0275fac = function AssetRequestDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetRequestDetailsComponent)();
};
_AssetRequestDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetRequestDetailsComponent, selectors: [["asset-request-details"]], inputs: { request: [1, "request"] }, outputs: { request: "requestChange", requestChange: "requestChange" }, decls: 1, vars: 1, consts: [["menu", "matMenu"], ["tracking_menu", "matMenu"], [1, "fixed", "inset-0", "z-50"], [1, "fixed", "inset-0", "z-50", 3, "click"], [1, "absolute", "inset-0", "bg-black", "opacity-50"], [1, "absolute", "inset-y-0", "right-0", "w-[480px]", "bg-base-100", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "right-1", "top-1", 3, "click"], [1, "flex", "space-x-4", "border-b", "border-base-200", "px-2", "py-4"], [1, "text-xl", 3, "user"], ["details", "", 1, "space-y-1"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "underline", 3, "href"], [1, "relative", "px-3", "py-4"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "bg-base-200", "text-secondary"], [1, "text-sm"], [1, "mt-1", "flex", "flex-col", "pl-10"], [1, "mt-4", "flex", "items-center", "space-x-4"], [1, "mt-1", "pl-10"], [1, "absolute", "right-4", "top-4", "text-sm"], ["matRipple", "", 1, "mb-4", "flex", "w-full", "items-center", "space-x-2", "rounded-3xl", "!bg-opacity-20", "px-2", "py-1", "text-left", 3, "matMenuTriggerFor", "disabled"], [1, "text-xl"], [1, "flex-1", "capitalize"], [1, "text-2xl"], [1, "w-36"], ["mat-menu-item", "", 3, "click"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-none", "border", "border-base-200", "bg-none", "px-2", "py-1", "text-left", 3, "matMenuTriggerFor", "disabled"], [1, "rounded-sm", "bg-success", "px-2", "py-1", "text-xs", "text-success-content"]], template: function AssetRequestDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetRequestDetailsComponent_Conditional_0_Template, 110, 76, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.request() ? 0 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  TranslatePipe,
  SplitJoinPipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  LevelPipe
], encapsulation: 2 });
var AssetRequestDetailsComponent = _AssetRequestDetailsComponent;
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
                    class="absolute inset-y-0 right-0 w-[480px] bg-base-100"
                    (click)="$event.stopPropagation()"
                >
                    <button
                        icon
                        matRipple
                        (click)="
                            request.set(null); requestChange.emit(request())
                        "
                        class="absolute right-1 top-1"
                    >
                        <icon>close</icon>
                    </button>
                    <div
                        class="flex space-x-4 border-b border-base-200 px-2 py-4"
                    >
                        <a-user-avatar
                            [user]="{ name: request().user_name }"
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
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200 text-secondary"
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
                            @for (item of items; track item) {
                                <div>
                                    {{ item.name }}
                                    <span
                                        class="rounded-sm bg-success px-2 py-1 text-xs text-success-content"
                                    >
                                        x{{ item.quantity }}
                                    </span>
                                </div>
                            }
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200 text-secondary"
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
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200 text-secondary"
                            >
                                <icon class="text-sm">schedule</icon>
                            </div>
                            <div class="font-medium">
                                {{ 'COMMON.PERIOD' | translate }}
                            </div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{ request().date | date: time_format }} &ndash;
                            {{
                                request().date + request().duration * 60 * 1000
                                    | date: time_format
                            }}
                            ({{ request().duration | duration }})
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200 text-secondary"
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
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200 text-secondary"
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
                        <div class="absolute right-4 top-4 text-sm">
                            <button
                                matRipple
                                class="mb-4 flex w-full items-center space-x-2 rounded-3xl !bg-opacity-20 px-2 py-1 text-left"
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
                                [disabled]="loading"
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
                                class="flex w-full items-center rounded-none border border-base-200 bg-none px-2 py-1 text-left"
                                [matMenuTriggerFor]="tracking_menu"
                                [disabled]="loading"
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
      LevelPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetRequestDetailsComponent, { className: "AssetRequestDetailsComponent", filePath: "apps/concierge/src/app/asset-manager/asset-request-details.component.ts", lineNumber: 274 });
})();

// apps/concierge/src/app/asset-manager/asset-request-list.component.ts
var _c02 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "8rem" });
var _c2 = (a0, a1) => ({ key: "assets", name: a0, content: a1, sortable: false });
var _c3 = (a0, a1) => ({ key: "level_code", name: a0, content: a1, size: "9rem" });
var _c4 = (a0) => ({ key: "description", name: a0 });
var _c5 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "11rem" });
var _c6 = (a0, a1) => ({ key: "tracking", name: a0, content: a1, size: "12rem", sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _c8 = () => [];
function AssetRequestListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.user_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 3, ctx_r2.date(row_r2), "MMM d, " + ctx_r2.time_format), " \u2013 ", \u0275\u0275pipeBind2(6, 6, ctx_r2.date(row_r2) + row_r2.duration * 60 * 1e3, "MMM d, " + ctx_r2.time_format), " ");
  }
}
function AssetRequestListComponent_ng_template_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r4.quantity || 1, "\xD7 ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r4.name, " ");
  }
}
function AssetRequestListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, AssetRequestListComponent_ng_template_15_For_2_Template, 4, 2, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275repeater((row_r5.extension_data == null ? null : row_r5.extension_data.request == null ? null : row_r5.extension_data.request.items) || \u0275\u0275pureFunction0(0, _c8));
  }
}
function AssetRequestListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r6.date + (row_r6.extension_data == null ? null : row_r6.extension_data.request == null ? null : row_r6.extension_data.request.deliver_offset) * 60 * 1e3 + (row_r6.extension_data == null ? null : row_r6.extension_data.request == null ? null : row_r6.extension_data.request.deliver_day_offset) * 24 * 60 * 60 * 1e3, "MMM d, " + ctx_r2.time_format), " ");
  }
}
function AssetRequestListComponent_ng_template_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function AssetRequestListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AssetRequestListComponent_ng_template_19_Conditional_2_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const row_r7 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_8_0 = ctx_r2.level(row_r7)) == null ? null : tmp_8_0.display_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.level(row_r7) ? 2 : -1);
  }
}
function AssetRequestListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_21_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 22);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 6)(10, "button", 23);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_21_Template_button_click_10_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setStatus(row_r9, "approved"));
    });
    \u0275\u0275elementStart(11, "div", 24)(12, "icon", 22);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 23);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_21_Template_button_click_17_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setStatus(row_r9, "declined"));
    });
    \u0275\u0275elementStart(18, "div", 24)(19, "icon", 22);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 25);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const menu_r10 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", row_r9.status === "approved")("bg-error", row_r9.status === "declined")("bg-warning", row_r9.status === "tentative")("text-success-content", row_r9.status === "approved")("text-error-content", row_r9.status === "declined")("text-warning-content", row_r9.status === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r10)("disabled", ctx_r2.loading[row_r9.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r9.status === "approved" ? "done" : row_r9.status === "declined" ? "close" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.status);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, "APP.CONCIERGE.ASSETS_REQUESTS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 20, "APP.CONCIERGE.ASSETS_REQUESTS_ACTION_DECLINE"), " ");
  }
}
function AssetRequestListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 26);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_23_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "splitjoin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 22);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 7)(9, "button", 23);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_23_Template_button_click_9_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTracking(row_r12, "in_storage"));
    });
    \u0275\u0275elementStart(10, "div", 24)(11, "icon", 22);
    \u0275\u0275text(12, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 25);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 23);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_23_Template_button_click_16_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTracking(row_r12, "in_transit"));
    });
    \u0275\u0275elementStart(17, "div", 24)(18, "icon", 22);
    \u0275\u0275text(19, "trolley");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 23);
    \u0275\u0275listener("click", function AssetRequestListComponent_ng_template_23_Template_button_click_23_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTracking(row_r12, "at_location"));
    });
    \u0275\u0275elementStart(24, "div", 24)(25, "icon", 22);
    \u0275\u0275text(26, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 25);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const tracking_menu_r13 = \u0275\u0275reference(8);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", tracking_menu_r13)("disabled", ctx_r2.loading[row_r12.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, row_r12.extension_data == null ? null : row_r12.extension_data.tracking) || "In Storage", " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 12, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION"), " ");
  }
}
var _AssetRequestListComponent = class _AssetRequestListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetManagerStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.requests = this._state.filtered_requests.pipe(map((l) => {
      l.forEach((r) => this.level(r));
      return l;
    }));
    this.filters = this._state.options;
    this.loading = {};
    this.setDate = (date) => this._state.setOptions({ date });
  }
  date(booking) {
    return booking.all_day ? startOfDay(booking.date).valueOf() : booking.date;
  }
  async setStatus(item, status) {
    this.loading[item.id] = true;
    await this._state.setStatus(item, status);
    this.loading[item.id] = false;
  }
  async setTracking(item, state) {
    this.loading[item.id] = true;
    await this._state.setTracking(item, state);
    this.loading[item.id] = false;
  }
  get time_format() {
    return this._settings.time_format;
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
};
_AssetRequestListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetRequestListComponent_BaseFactory;
  return function AssetRequestListComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetRequestListComponent_BaseFactory || (\u0275AssetRequestListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetRequestListComponent)))(__ngFactoryType__ || _AssetRequestListComponent);
  };
})();
_AssetRequestListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetRequestListComponent, selectors: [["app-asset-request-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 54, consts: [["user_template", ""], ["assets_template", ""], ["date_template", ""], ["level_template", ""], ["approval_template", ""], ["tracking_template", ""], ["menu", "matMenu"], ["tracking_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["asset-requests", "", 1, "block", "min-w-[82rem]", "text-sm", 3, "row_clicked", "data", "filter", "columns", "empty_message", "sortable"], [1, "h-8", "w-full"], [3, "requestChange", "request"], [1, "flex", "flex-col", "px-4", "py-2", "text-left"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-col", "p-4"], [1, "font-mono", "text-sm"], [1, "p-4"], [1, "opacity-30"], [1, "px-4", "py-2"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "rounded-3xl", "!bg-opacity-20", "px-2", "py-1", "text-left", 3, "click", "matMenuTriggerFor", "disabled"], [1, "text-xl"], [1, "flex-1", "capitalize"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-sm", "bg-none", "px-2", "py-1", "text-left", 3, "click", "matMenuTriggerFor", "disabled"], [1, "min-w-32", "flex-1", "capitalize"]], template: function AssetRequestListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "simple-table", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("row_clicked", function AssetRequestListComponent_Template_simple_table_row_clicked_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.request = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AssetRequestListComponent_ng_template_13_Template, 7, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, AssetRequestListComponent_ng_template_15_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, AssetRequestListComponent_ng_template_17_Template, 3, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, AssetRequestListComponent_ng_template_19_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, AssetRequestListComponent_ng_template_21_Template, 24, 22, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, AssetRequestListComponent_ng_template_23_Template, 30, 14, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(25, "asset-request-details", 11);
    \u0275\u0275twoWayListener("requestChange", function AssetRequestListComponent_Template_asset_request_details_requestChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.request, $event) || (ctx.request = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    const user_template_r14 = \u0275\u0275reference(14);
    const assets_template_r15 = \u0275\u0275reference(16);
    const date_template_r16 = \u0275\u0275reference(18);
    const level_template_r17 = \u0275\u0275reference(20);
    const approval_template_r18 = \u0275\u0275reference(22);
    const tracking_template_r19 = \u0275\u0275reference(24);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.requests)("filter", (tmp_7_0 = \u0275\u0275pipeBind1(2, 6, ctx.filters)) == null ? null : tmp_7_0.search)("columns", \u0275\u0275pureFunction7(46, _c7, \u0275\u0275pureFunction2(26, _c02, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.ASSETS_REQUESTS_USER"), user_template_r14), \u0275\u0275pureFunction2(29, _c1, \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.ASSETS_REQUESTS_TIME"), date_template_r16), \u0275\u0275pureFunction2(32, _c2, \u0275\u0275pipeBind1(5, 12, "RESOURCE.ASSETS"), assets_template_r15), \u0275\u0275pureFunction2(35, _c3, \u0275\u0275pipeBind1(6, 14, "RESOURCE.LEVEL"), level_template_r17), \u0275\u0275pureFunction1(38, _c4, \u0275\u0275pipeBind1(7, 16, "COMMON.LOCATION")), \u0275\u0275pureFunction2(40, _c5, \u0275\u0275pipeBind1(8, 18, "APP.CONCIERGE.ASSETS_REQUESTS_APPROVAL"), approval_template_r18), \u0275\u0275pureFunction2(43, _c6, \u0275\u0275pipeBind1(9, 20, "APP.CONCIERGE.ASSETS_REQUESTS_TRACKING"), tracking_template_r19)))("empty_message", \u0275\u0275pipeBind1(11, 24, ((tmp_9_0 = \u0275\u0275pipeBind1(10, 22, ctx.filters)) == null ? null : tmp_9_0.search) ? "APP.CONCIERGE.ASSETS_REQUESTS_SEARCH_EMPTY" : "APP.CONCIERGE.ASSETS_REQUESTS_EMPTY"))("sortable", true);
    \u0275\u0275advance(24);
    \u0275\u0275twoWayProperty("request", ctx.request);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatRippleModule,
  MatRipple,
  SimpleTableComponent,
  AssetRequestDetailsComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  IconComponent,
  SplitJoinPipe,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=asset-request-list.component.css.map */"] });
var AssetRequestListComponent = _AssetRequestListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetRequestListComponent, [{
    type: Component,
    args: [{ selector: "app-asset-request-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[82rem] text-sm"
                asset-requests
                [data]="requests"
                [filter]="(filters | async)?.search"
                [columns]="[
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.ASSETS_REQUESTS_USER' | translate,
                        content: user_template,
                    },
                    {
                        key: 'date',
                        name: 'APP.CONCIERGE.ASSETS_REQUESTS_TIME' | translate,
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
                    ((filters | async)?.search
                        ? 'APP.CONCIERGE.ASSETS_REQUESTS_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.ASSETS_REQUESTS_EMPTY'
                    ) | translate
                "
                [sortable]="true"
                (row_clicked)="request = $event"
            ></simple-table>
            <div class="h-8 w-full"></div>
        </div>
        <ng-template #user_template let-row="row">
            <div class="flex flex-col px-4 py-2 text-left">
                <div>{{ row.user_name }}</div>
                <div class="text-xs opacity-30">
                    {{ date(row) | date: 'MMM d, ' + time_format }} &ndash;
                    {{
                        date(row) + row.duration * 60 * 1000
                            | date: 'MMM d, ' + time_format
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
                            1000 | date: 'MMM d, ' + time_format
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
                    class="flex w-full items-center space-x-2 rounded-3xl !bg-opacity-20 px-2 py-1 text-left"
                    [class.bg-success]="row.status === 'approved'"
                    [class.bg-error]="row.status === 'declined'"
                    [class.bg-warning]="row.status === 'tentative'"
                    [class.text-success-content]="row.status === 'approved'"
                    [class.text-error-content]="row.status === 'declined'"
                    [class.text-warning-content]="row.status === 'tentative'"
                    [matMenuTriggerFor]="menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading[row.id]"
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
        <asset-request-details [(request)]="request" />
    `, imports: [
      CommonModule,
      MatRippleModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetRequestListComponent, { className: "AssetRequestListComponent", filePath: "apps/concierge/src/app/asset-manager/asset-request-list.component.ts", lineNumber: 267 });
})();

export {
  AssetCategoryFormComponent,
  AssetManagerStateService,
  SplitJoinPipe,
  AssetRequestListComponent
};
//# sourceMappingURL=chunk-F4EJ5LO4.js.map
