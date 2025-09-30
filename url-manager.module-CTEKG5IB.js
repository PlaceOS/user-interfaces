import "./chunk-7G4R745F.js";
import {
  SharedUsersModule
} from "./chunk-IPLJBDCQ.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  BehaviorSubject,
  CommonModule,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatProgressSpinner,
  MatRipple,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  OrganisationService,
  PrintableComponent,
  RichTextInputComponent,
  RouterModule,
  SafePipe,
  SettingsService,
  SharedSpacesModule,
  SimpleTableComponent,
  UIModule,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  combineLatest,
  deleteShortURL,
  getInvalidFields,
  getShortUrlQRCode,
  map,
  notifyError,
  notifySuccess,
  openConfirmModal,
  queryShortURLs,
  saveShortURL,
  shareReplay,
  switchMap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-TTHABZPK.js";

// apps/concierge/src/app/url-management/url-modal.component.ts
function ShortUrlModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ShortUrlModalComponent_main_4_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 11);
    \u0275\u0275text(2, " Name");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 12);
    \u0275\u0275element(7, "input", 13);
    \u0275\u0275elementEnd()();
  }
}
function ShortUrlModalComponent_main_4_form_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, " Description: ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "rich-text-input", 16);
    \u0275\u0275elementEnd();
  }
}
function ShortUrlModalComponent_main_4_form_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 17);
    \u0275\u0275text(2, " URI");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 12);
    \u0275\u0275element(7, "input", 18);
    \u0275\u0275elementEnd()();
  }
}
function ShortUrlModalComponent_main_4_form_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-checkbox", 19);
    \u0275\u0275text(2, " Enabled ");
    \u0275\u0275elementEnd()();
  }
}
function ShortUrlModalComponent_main_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275template(1, ShortUrlModalComponent_main_4_form_1_div_1_Template, 8, 0, "div", 8)(2, ShortUrlModalComponent_main_4_form_1_div_2_Template, 4, 0, "div", 9)(3, ShortUrlModalComponent_main_4_form_1_div_3_Template, 8, 0, "div", 8)(4, ShortUrlModalComponent_main_4_form_1_div_4_Template, 3, 0, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.uri);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.enabled);
  }
}
function ShortUrlModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275template(1, ShortUrlModalComponent_main_4_form_1_Template, 5, 5, "form", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form);
  }
}
function ShortUrlModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 20)(1, "button", 21);
    \u0275\u0275listener("click", function ShortUrlModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function ShortUrlModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3, "Saving Short URL...");
    \u0275\u0275elementEnd()();
  }
}
var _ShortUrlModalComponent = class _ShortUrlModalComponent extends AsyncHandler {
  constructor(_data, _dialog_ref) {
    super();
    this._data = _data;
    this._dialog_ref = _dialog_ref;
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
  ngOnInit() {
    return __async(this, null, function* () {
    });
  }
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      const data = this.form.getRawValue();
      this.loading = true;
      const resp = yield saveShortURL(data).toPromise().catch((e) => notifyError(`Error saving Short URL: ${e.message}`));
      if (resp.id)
        this._dialog_ref.close(resp);
      this.loading = false;
    });
  }
};
_ShortUrlModalComponent.\u0275fac = function ShortUrlModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ShortUrlModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_ShortUrlModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShortUrlModalComponent, selectors: [["short-url-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 5, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_namePlaceholder$$APPS_CONCIERGE_SRC_APP_URL_MANAGEMENT_URL_MODAL_COMPONENT_TS_0 = goog.getMsg("Name");
    i18n_0 = MSG_EXTERNAL_namePlaceholder$$APPS_CONCIERGE_SRC_APP_URL_MANAGEMENT_URL_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:@@namePlaceholder␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_uriPlaceholder$$APPS_CONCIERGE_SRC_APP_URL_MANAGEMENT_URL_MODAL_COMPONENT_TS_1 = goog.getMsg("URI");
    i18n_1 = MSG_EXTERNAL_uriPlaceholder$$APPS_CONCIERGE_SRC_APP_URL_MANAGEMENT_URL_MODAL_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:@@uriPlaceholder␟6afb9c1cbd2b73b7a916ca72a1827142d917dc51␟4044274328469675696:URI`;
  }
  return [["load_state", ""], ["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], ["system", "", "class", "flex flex-col w-[28rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["system", "", 1, "flex", "flex-col", "w-[28rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], ["class", "flex flex-col pb-4", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", i18n_0, "formControlName", "name"], [1, "flex", "flex-col", "pb-4"], ["for", "description"], ["name", "description", "formControlName", "description"], ["for", "uri"], ["matInput", "", "name", "uri", "placeholder", i18n_1, "formControlName", "uri"], ["formControlName", "enabled"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
}, template: function ShortUrlModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ShortUrlModalComponent_button_3_Template, 3, 0, "button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ShortUrlModalComponent_main_4_Template, 2, 1, "main", 2)(5, ShortUrlModalComponent_footer_5_Template, 3, 0, "footer", 3)(6, ShortUrlModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.form.value.id ? "Edit" : "Add", " Short URL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatInput, MatCheckbox, MatProgressSpinner, MatDialogClose, FormGroupDirective, FormControlName, RichTextInputComponent, IconComponent] });
var ShortUrlModalComponent = _ShortUrlModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShortUrlModalComponent, { className: "ShortUrlModalComponent", filePath: "apps/concierge/src/app/url-management/url-modal.component.ts", lineNumber: 105 });
})();

// apps/concierge/src/app/url-management/url-management.service.ts
var _UrlManagementService = class _UrlManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this._url_list = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(switchMap(([bld]) => queryShortURLs({})), shareReplay(1));
    this.filtered_urls = combineLatest([
      this._url_list,
      this._options
    ]).pipe(map(([list, options]) => list.filter((i) => !options.search || i.name.toLowerCase().includes(options.search.toLowerCase()))));
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
  removeURL(url) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: "Remove Short URL",
        content: `Are you sure you want to remove the Short URL "${url.name}"?`,
        icon: { content: "delete_forever" },
        confirm_text: "Remove"
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading("Removing Short URL...");
      yield deleteShortURL(url.id).toPromise().catch((e) => {
        notifyError(`Error removing Short URL: ${e.message}`);
        ref.close();
        throw e;
      });
      notifySuccess("Successfully removed Short URL.");
      ref.close();
      this._change.next(Date.now());
    });
  }
};
_UrlManagementService.\u0275fac = function UrlManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
};
_UrlManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UrlManagementService, factory: _UrlManagementService.\u0275fac, providedIn: "root" });
var UrlManagementService = _UrlManagementService;

// apps/concierge/src/app/url-management/url-list.component.ts
var _c0 = () => ({ key: "name", name: "Name" });
var _c1 = (a0) => ({ key: "uri", name: "URI", content: a0 });
var _c2 = () => ({ key: "user_name", name: "User Name" });
var _c3 = () => ({ key: "description", name: "Description" });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "7rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function UrlListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
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
function UrlListComponent_ng_template_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "a", 17);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275element(4, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_5_ng_template_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.print());
    });
    \u0275\u0275text(8, " Print QR Code ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(3, 3, row_r3.uri, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", row_r3.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r3.name || row_r3.id, " ");
  }
}
function UrlListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_5_Template_button_click_1_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadQrCode(row_r3));
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UrlListComponent_ng_template_5_ng_template_4_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 10)(7, "app-icon");
    \u0275\u0275text(8, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-menu", null, 3)(11, "button", 11);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_5_Template_button_click_11_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.edit(row_r3));
    });
    \u0275\u0275elementStart(12, "div", 12)(13, "app-icon");
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Edit Short URL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 11);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_5_Template_button_click_17_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(row_r3));
    });
    \u0275\u0275elementStart(18, "div", 13)(19, "app-icon", 14);
    \u0275\u0275text(20, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Delete Short URL");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const qr_menu_r6 = \u0275\u0275reference(5);
    const menu_r7 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("content", qr_menu_r6);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
  }
}
var _UrlListComponent = class _UrlListComponent {
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    return __async(this, null, function* () {
      item.qr_code = yield getShortUrlQRCode(item.id);
    });
  }
  constructor(_manager, _settings) {
    this._manager = _manager;
    this._settings = _settings;
    this.features = this._manager.filtered_urls;
    this.edit = (region) => this._manager.editURL(region);
    this.remove = (region) => this._manager.removeURL(region);
  }
};
_UrlListComponent.\u0275fac = function UrlListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlListComponent)(\u0275\u0275directiveInject(UrlManagementService), \u0275\u0275directiveInject(SettingsService));
};
_UrlListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlListComponent, selectors: [["short-url-list"]], decls: 7, vars: 16, consts: [["url_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "min-w-[64rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-12"], ["link", "", 1, "p-4", "truncate", "max-w-[32rem]", 3, "href"], [1, "w-full", "flex", "justify-end", "space-x-2", "px-4", "py-2", "mx-auto"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error"], [1, "bg-base-100", "py-2", "shadow", "rounded"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100", 3, "href"], [1, "w-48", "mx-auto", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "mt-2", "font-mono", "text-sm", "bg-base-200", "rounded", "p-2", "mx-4"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-2rem)]", "mx-4", "my-2", 3, "click"]], template: function UrlListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "simple-table", 5)(2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UrlListComponent_ng_template_3_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, UrlListComponent_ng_template_5_Template, 23, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const url_template_r8 = \u0275\u0275reference(4);
    const action_template_r9 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.features)("columns", \u0275\u0275pureFunction5(10, _c5, \u0275\u0275pureFunction0(3, _c0), \u0275\u0275pureFunction1(4, _c1, url_template_r8), \u0275\u0275pureFunction0(6, _c2), \u0275\u0275pureFunction0(7, _c3), \u0275\u0275pureFunction1(8, _c4, action_template_r9)))("sortable", true);
  }
}, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, SafePipe] });
var UrlListComponent = _UrlListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlListComponent, { className: "UrlListComponent", filePath: "apps/concierge/src/app/url-management/url-list.component.ts", lineNumber: 95 });
})();

// apps/concierge/src/app/url-management/url-manager.component.ts
var _c02 = ["app-short-url-manager", ""];
var _UrlManagerComponent = class _UrlManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.new = () => this._state.editURL();
  }
};
_UrlManagerComponent.\u0275fac = function UrlManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlManagerComponent)(\u0275\u0275directiveInject(UrlManagementService));
};
_UrlManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlManagerComponent, selectors: [["", "app-short-url-manager", ""]], attrs: _c02, decls: 10, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function UrlManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
    \u0275\u0275text(6, "Short URL Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function UrlManagerComponent_Template_button_click_7_listener() {
      return ctx.new();
    });
    \u0275\u0275text(8, "Add Short URL");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "short-url-list", 5);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, UrlListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=url-manager.component.css.map */"] });
var UrlManagerComponent = _UrlManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlManagerComponent, { className: "UrlManagerComponent", filePath: "apps/concierge/src/app/url-management/url-manager.component.ts", lineNumber: 47 });
})();

// apps/concierge/src/app/url-management/url-manager.module.ts
var ROUTES = [
  { path: "", component: UrlManagerComponent },
  { path: "new", component: UrlManagerComponent }
];
var _UrlManagerModule = class _UrlManagerModule {
};
_UrlManagerModule.\u0275fac = function UrlManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlManagerModule)();
};
_UrlManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UrlManagerModule });
_UrlManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var UrlManagerModule = _UrlManagerModule;
export {
  UrlManagerModule
};
//# sourceMappingURL=url-manager.module-CTEKG5IB.js.map
