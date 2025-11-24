import "./chunk-EFGU63AF.js";
import {
  SharedUsersModule
} from "./chunk-GOLRZLQR.js";
import {
  AppSettingsModalComponent,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  BehaviorSubject,
  BookingPanelSettingsModalComponent,
  Clipboard,
  CommonModule,
  ConciergeSettingsFormModalComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  OrganisationService,
  PlaceZone,
  RouterModule,
  SharedSpacesModule,
  SimpleTableComponent,
  TIMEZONES_IANA,
  UIModule,
  Validators,
  VisitorKioskSettingsFormModalComponent,
  WorkplaceSettingsFormModalComponent,
  __async,
  __spreadProps,
  __spreadValues,
  addZone,
  authority,
  combineLatest,
  getInvalidFields,
  map,
  notifyError,
  notifySuccess,
  openConfirmModal,
  removeZone,
  updateZone,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L3HTKRSL.js";

// apps/concierge/src/app/region-manager/region-modal.component.ts
function RegionModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function RegionModalComponent_main_4_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 11);
    \u0275\u0275text(2, " Display Name: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12);
    \u0275\u0275element(4, "input", 17);
    \u0275\u0275elementEnd()();
  }
}
function RegionModalComponent_main_4_form_1_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r1 = ctx.$implicit;
    \u0275\u0275property("value", tz_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r1);
  }
}
function RegionModalComponent_main_4_form_1_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1, " No matching timezones ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function RegionModalComponent_main_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275template(1, RegionModalComponent_main_4_form_1_div_1_Template, 5, 0, "div", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "label", 11);
    \u0275\u0275text(4, " Timezone: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 12)(6, "app-icon", 13);
    \u0275\u0275text(7, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-autocomplete", null, 1);
    \u0275\u0275template(11, RegionModalComponent_main_4_form_1_mat_option_11_Template, 2, 2, "mat-option", 15)(12, RegionModalComponent_main_4_form_1_mat_option_12_Template, 2, 1, "mat-option", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const auto_r2 = \u0275\u0275reference(10);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.controls.display_name);
    \u0275\u0275advance(7);
    \u0275\u0275property("matAutocomplete", auto_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.filtered_timezones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.timezones.length);
  }
}
function RegionModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 6);
    \u0275\u0275template(1, RegionModalComponent_main_4_form_1_Template, 13, 5, "form", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form);
  }
}
function RegionModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 20)(1, "button", 21);
    \u0275\u0275listener("click", function RegionModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function RegionModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3, "Saving region...");
    \u0275\u0275elementEnd()();
  }
}
var _RegionModalComponent = class _RegionModalComponent extends AsyncHandler {
  constructor(_org, _data, _dialog_ref) {
    super();
    this._org = _org;
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.building_list = this._org.building_list;
    this.timezones = [];
    this.filtered_timezones = [];
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      display_name: new FormControl(this._data?.display_name || "", [
        Validators.required
      ]),
      timezone: new FormControl(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || ""),
      parent_id: new FormControl(this._org.organisation.id)
    });
  }
  ngOnInit() {
    this._updateTimezoneList();
    this.subscription("tz-change", this.form.valueChanges.subscribe(({ timezone }) => this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()))));
  }
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      const data = this.form.getRawValue();
      data.tags = ["region"];
      this.loading = true;
      const resp = yield (data.id ? updateZone(data.id, __spreadProps(__spreadValues({}, data), {
        name: `REGION ${authority().description} ${data.display_name}`
      })) : addZone(__spreadProps(__spreadValues({}, data), {
        name: `REGION ${authority().description} ${data.display_name}`
      }))).toPromise().catch();
      if (resp.id)
        this._dialog_ref.close(resp);
      this.loading = false;
    });
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
};
_RegionModalComponent.\u0275fac = function RegionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegionModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_RegionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionModalComponent, selectors: [["region-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 5, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_REGION_MANAGER_REGION_MODAL_COMPONENT_TS_0 = goog.getMsg("Display Name");
    i18n_0 = MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_REGION_MANAGER_REGION_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`;
  }
  return [["load_state", ""], ["auto", "matAutocomplete"], ["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], ["system", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["system", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", "placeholder", "Building timezone", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["matInput", "", "name", "display-name", "placeholder", i18n_0, "formControlName", "display_name"], [3, "value"], [3, "disabled"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
}, template: function RegionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RegionModalComponent_button_3_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RegionModalComponent_main_4_Template, 2, 1, "main", 3)(5, RegionModalComponent_footer_5_Template, 3, 0, "footer", 4)(6, RegionModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r5 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.form.value.id ? "Edit" : "Add", " Region");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatPrefix, MatInput, MatOption, MatProgressSpinner, MatDialogClose, MatAutocomplete, MatAutocompleteTrigger, FormGroupDirective, FormControlName, IconComponent] });
var RegionModalComponent = _RegionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionModalComponent, { className: "RegionModalComponent", filePath: "apps/concierge/src/app/region-manager/region-modal.component.ts", lineNumber: 83 });
})();

// apps/concierge/src/app/region-manager/region-management.service.ts
var _RegionManagementService = class _RegionManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.filtered_regions = combineLatest([
      this._org.building_list,
      this._org.region_list,
      this._options
    ]).pipe(map(([buildings, list, options]) => {
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const region of list) {
        region.building_count = buildings.filter((bld) => bld.parent_id === region.id).length;
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
  editRegion(region = new PlaceZone()) {
    const ref = this._dialog.open(RegionModalComponent, {
      data: region
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  editRegionMetadata(region = new PlaceZone()) {
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone: region }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  removeRegion(region) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: "Remove Building",
        content: `Are you sure you want to remove the building "${region.name}"?`,
        icon: { content: "delete_forever" },
        confirm_text: "Remove"
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading("Removing building...");
      yield removeZone(region.id).toPromise();
      this._org.removeZone({ id: region.id, tags: ["region"] });
      notifySuccess("Successfully removed building.");
      ref.close();
    });
  }
};
_RegionManagementService.\u0275fac = function RegionManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegionManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
};
_RegionManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegionManagementService, factory: _RegionManagementService.\u0275fac, providedIn: "root" });
var RegionManagementService = _RegionManagementService;

// apps/concierge/src/app/region-manager/region-list.component.ts
var _c0 = (a0) => ({ key: "display_name", name: "Building Name", content: a0 });
var _c1 = () => ({ key: "building_count", name: "Buildings", size: "8rem" });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function RegionListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_3_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function RegionListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 2)(6, "button", 12)(7, "div", 13)(8, "app-icon", 14);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Application Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-menu", null, 3)(14, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_5_Template_button_click_14_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r6));
    });
    \u0275\u0275elementStart(15, "div", 13)(16, "app-icon", 14);
    \u0275\u0275text(17, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Workplace Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_5_Template_button_click_20_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r6));
    });
    \u0275\u0275elementStart(21, "div", 13)(22, "app-icon", 14);
    \u0275\u0275text(23, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Concierge Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_5_Template_button_click_26_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r6));
    });
    \u0275\u0275elementStart(27, "div", 13)(28, "app-icon", 14);
    \u0275\u0275text(29, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Booking Panel Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_5_Template_button_click_32_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r6));
    });
    \u0275\u0275elementStart(33, "div", 13)(34, "app-icon", 14);
    \u0275\u0275text(35, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Visitor Kiosk Settings");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_5_Template_button_click_38_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRegion(row_r6));
    });
    \u0275\u0275elementStart(39, "div", 13)(40, "app-icon");
    \u0275\u0275text(41, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "Edit Region");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_5_Template_button_click_44_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRegion(row_r6));
    });
    \u0275\u0275elementStart(45, "div", 16)(46, "app-icon", 17);
    \u0275\u0275text(47, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Delete Region");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275reference(5);
    const app_settings_menu_r8 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r8);
  }
}
var _RegionListComponent = class _RegionListComponent {
  editWorkplaceSettings(building) {
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone: building }
    });
  }
  editConciergeSettings(building) {
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone: building }
    });
  }
  editBookingPanelSettings(building) {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone: building }
    });
  }
  editVisitorKioskSettings(building) {
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone: building }
    });
  }
  constructor(_manager, _clipboard, _dialog) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this._dialog = _dialog;
    this.regions = this._manager.filtered_regions;
    this.editRegion = (region) => this._manager.editRegion(region);
    this.removeRegion = (region) => this._manager.removeRegion(region);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Region ID copied to clipboard.");
    };
  }
};
_RegionListComponent.\u0275fac = function RegionListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegionListComponent)(\u0275\u0275directiveInject(RegionManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(MatDialog));
};
_RegionListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionListComponent, selectors: [["region-list"]], decls: 7, vars: 12, consts: [["name_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Regions", 1, "min-w-[32rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "w-full", "flex", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error"]], template: function RegionListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "simple-table", 5)(2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RegionListComponent_ng_template_3_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, RegionListComponent_ng_template_5_Template, 50, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const name_template_r9 = \u0275\u0275reference(4);
    const action_template_r10 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.regions)("columns", \u0275\u0275pureFunction3(8, _c3, \u0275\u0275pureFunction1(3, _c0, name_template_r9), \u0275\u0275pureFunction0(5, _c1), \u0275\u0275pureFunction1(6, _c2, action_template_r10)))("sortable", true);
  }
}, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent] });
var RegionListComponent = _RegionListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionListComponent, { className: "RegionListComponent", filePath: "apps/concierge/src/app/region-manager/region-list.component.ts", lineNumber: 131 });
})();

// apps/concierge/src/app/region-manager/region-manager.component.ts
var _c02 = ["app-region-manager", ""];
var _RegionManagerComponent = class _RegionManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.newRegion = () => this._state.editRegion();
  }
};
_RegionManagerComponent.\u0275fac = function RegionManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegionManagerComponent)(\u0275\u0275directiveInject(RegionManagementService));
};
_RegionManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionManagerComponent, selectors: [["", "app-region-manager", ""]], attrs: _c02, decls: 10, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8", "pt-4", "pb-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function RegionManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
    \u0275\u0275text(6, "Region Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function RegionManagerComponent_Template_button_click_7_listener() {
      return ctx.newRegion();
    });
    \u0275\u0275text(8, " Add Region ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "region-list", 5);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, RegionListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=region-manager.component.css.map */"] });
var RegionManagerComponent = _RegionManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionManagerComponent, { className: "RegionManagerComponent", filePath: "apps/concierge/src/app/region-manager/region-manager.component.ts", lineNumber: 49 });
})();

// apps/concierge/src/app/region-manager/region-manager.module.ts
var ROUTES = [
  { path: "", component: RegionManagerComponent },
  { path: "new", component: RegionManagerComponent }
];
var _RegionManagerModule = class _RegionManagerModule {
};
_RegionManagerModule.\u0275fac = function RegionManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegionManagerModule)();
};
_RegionManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RegionManagerModule });
_RegionManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var RegionManagerModule = _RegionManagerModule;
export {
  RegionManagerModule
};
//# sourceMappingURL=region-manager.module-WYAHNUD6.js.map
