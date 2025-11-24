import "./chunk-EFGU63AF.js";
import {
  SharedUsersModule
} from "./chunk-GOLRZLQR.js";
import {
  AppSettingsModalComponent,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BookingPanelSettingsModalComponent,
  Clipboard,
  CommonModule,
  ConciergeSettingsFormModalComponent,
  DefaultValueAccessor,
  DurationFieldComponent,
  EncryptionLevel,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
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
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  PlaceSettings,
  PlaceZone,
  RouterModule,
  SettingsService,
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
  addSettings,
  addZone,
  authority,
  combineLatest,
  dump,
  getInvalidFields,
  load,
  map,
  notifyError,
  notifySuccess,
  openConfirmModal,
  querySettings,
  removeZone,
  showMetadata,
  updateMetadata,
  updateSettings,
  updateZone,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L3HTKRSL.js";

// apps/concierge/src/app/building-manager/building-form.component.ts
function BuildingFormComponent_ng_container_0_form_1_div_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    \u0275\u0275property("value", region_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", region_r1.display_name || region_r1.name, " ");
  }
}
function BuildingFormComponent_ng_container_0_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 16);
    \u0275\u0275text(2, " Region: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 8)(4, "mat-select", 17)(5, "mat-option", 18);
    \u0275\u0275text(6, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BuildingFormComponent_ng_container_0_form_1_div_1_mat_option_7_Template, 2, 2, "mat-option", 12);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.default_parent);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 2, ctx_r1.region_list));
  }
}
function BuildingFormComponent_ng_container_0_form_1_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r3 = ctx.$implicit;
    \u0275\u0275property("value", tz_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r3);
  }
}
function BuildingFormComponent_ng_container_0_form_1_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1, " No matching timezones ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function BuildingFormComponent_ng_container_0_form_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 4);
    \u0275\u0275template(1, BuildingFormComponent_ng_container_0_form_1_div_1_Template, 9, 4, "div", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 6)(4, "label", 7);
    \u0275\u0275text(5, " Display Name: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 8);
    \u0275\u0275element(7, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "label", 7);
    \u0275\u0275text(10, " Timezone: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 8)(12, "app-icon", 10);
    \u0275\u0275text(13, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-autocomplete", null, 1);
    \u0275\u0275template(17, BuildingFormComponent_ng_container_0_form_1_mat_option_17_Template, 2, 2, "mat-option", 12)(18, BuildingFormComponent_ng_container_0_form_1_mat_option_18_Template, 2, 1, "mat-option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 6)(20, "label", 14);
    \u0275\u0275text(21, " Location: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 8);
    \u0275\u0275element(23, "input", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const auto_r4 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = \u0275\u0275pipeBind1(2, 5, ctx_r1.region_list)) == null ? null : tmp_5_0.length);
    \u0275\u0275advance(13);
    \u0275\u0275property("matAutocomplete", auto_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filtered_timezones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.timezones.length);
  }
}
function BuildingFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BuildingFormComponent_ng_container_0_form_1_Template, 24, 7, "form", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form);
  }
}
function BuildingFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3, "Saving building...");
    \u0275\u0275elementEnd()();
  }
}
var _BuildingFormComponent = class _BuildingFormComponent extends AsyncHandler {
  get default_parent() {
    return this._org.organisation.id;
  }
  constructor(_org) {
    super();
    this._org = _org;
    this.building = null;
    this.save = 0;
    this.loading = false;
    this.loadingChange = new EventEmitter();
    this.done = new EventEmitter();
    this.timezones = [];
    this.filtered_timezones = [];
    this.region_list = this._org.region_list;
    this.form = new FormGroup({
      id: new FormControl(""),
      parent_id: new FormControl(this._org.organisation.id, [
        Validators.required
      ]),
      display_name: new FormControl("", [Validators.required]),
      timezone: new FormControl(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || ""),
      location: new FormControl("")
    });
  }
  ngOnInit() {
    this._updateTimezoneList();
    this.subscription("tz-change", this.form.valueChanges.subscribe(() => this._updateTimezoneList()));
    if (this.building)
      this.form.patchValue(this.building);
  }
  ngOnChanges(changes) {
    if (changes.building && this.building) {
      this.form.patchValue(this.building);
    }
    if (changes.save && this.save)
      this.saveChanges();
  }
  saveChanges() {
    return __async(this, null, function* () {
      this.form.patchValue({
        parent_id: this.form.value.parent_id || this._org.organisation.id
      });
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      const data = this.form.getRawValue();
      this.loading = true;
      this.loadingChange.emit(true);
      const body = __spreadProps(__spreadValues({}, data), {
        tags: ["building"],
        name: `BLD ${authority().description} ${data.display_name}`
      });
      const building = yield (data.id ? updateZone(data.id, body) : addZone(body)).toPromise().catch((e) => {
        notifyError(`Error saving building: ${e.message || e.error || e}`);
        this.loading = false;
        this.loadingChange.emit(false);
        throw e;
      });
      notifySuccess("Successfully saved building.");
      this.loading = false;
      this.loadingChange.emit(false);
      this.done.emit(building);
    });
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
};
_BuildingFormComponent.\u0275fac = function BuildingFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuildingFormComponent)(\u0275\u0275directiveInject(OrganisationService));
};
_BuildingFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingFormComponent, selectors: [["building-form"]], inputs: { building: "building", save: "save", loading: "loading" }, outputs: { loadingChange: "loadingChange", done: "done" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["load_state", ""], ["auto", "matAutocomplete"], [4, "ngIf", "ngIfElse"], ["building", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["building", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matInput", "", "name", "display-name", "placeholder", "Display Name", "formControlName", "display_name"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", "placeholder", "Building timezone", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["for", "address"], ["matInput", "", "name", "address", "placeholder", "Location or Address...", "formControlName", "location"], ["for", "region"], ["name", "region", "formControlName", "parent_id", "placeholder", "Select Region..."], [3, "value"], [3, "disabled"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]], template: function BuildingFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BuildingFormComponent_ng_container_0_Template, 2, 1, "ng-container", 2)(1, BuildingFormComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r5 = \u0275\u0275reference(2);
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r5);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatPrefix, MatInput, MatSelect, MatOption, MatProgressSpinner, MatAutocomplete, MatAutocompleteTrigger, FormGroupDirective, FormControlName, IconComponent, AsyncPipe] });
var BuildingFormComponent = _BuildingFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingFormComponent, { className: "BuildingFormComponent", filePath: "apps/concierge/src/app/building-manager/building-form.component.ts", lineNumber: 107 });
})();

// apps/concierge/src/app/building-manager/building-modal.component.ts
function BuildingModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BuildingModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 6);
    \u0275\u0275listener("click", function BuildingModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
var _BuildingModalComponent = class _BuildingModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.save_state = 0;
    this.building = this._data;
    this.close = (d) => this._dialog_ref.close(d);
    this.save = () => this.save_state = Date.now();
  }
};
_BuildingModalComponent.\u0275fac = function BuildingModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuildingModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_BuildingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingModalComponent, selectors: [["building-modal"]], decls: 7, vars: 6, consts: [["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], [3, "loadingChange", "done", "building", "save", "loading"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"]], template: function BuildingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BuildingModalComponent_button_3_Template, 3, 0, "button", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "main", 1)(5, "building-form", 2);
    \u0275\u0275twoWayListener("loadingChange", function BuildingModalComponent_Template_building_form_loadingChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.loading, $event) || (ctx.loading = $event);
      return $event;
    });
    \u0275\u0275listener("done", function BuildingModalComponent_Template_building_form_done_5_listener($event) {
      return ctx.close($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, BuildingModalComponent_footer_6_Template, 3, 0, "footer", 3);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.building.id ? "Edit" : "Add", " Building");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("building", ctx.building)("save", ctx.save_state);
    \u0275\u0275twoWayProperty("loading", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, MatDialogClose, IconComponent, BuildingFormComponent] });
var BuildingModalComponent = _BuildingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingModalComponent, { className: "BuildingModalComponent", filePath: "apps/concierge/src/app/building-manager/building-modal.component.ts", lineNumber: 31 });
})();

// apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts
function AutoReleaseSettingsModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon", 7);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AutoReleaseSettingsModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "label");
    \u0275\u0275text(2, "Notify Before Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a-duration-field", 9);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_a_duration_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.time_before, $event) || (ctx_r1.settings.time_before = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Cancel Event After");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a-duration-field", 9);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_a_duration_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.time_after, $event) || (ctx_r1.settings.time_after = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Event Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 10)(10, "mat-select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.resources, $event) || (ctx_r1.settings.resources = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "mat-option", 12);
    \u0275\u0275text(12, " Desks ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 13);
    \u0275\u0275text(14, " Visitors ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 14);
    \u0275\u0275text(16, " Parking ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0)("max", 60)("step", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.time_before);
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0)("max", 60)("step", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.time_after);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.resources);
  }
}
function AutoReleaseSettingsModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 15)(1, "button", 16);
    \u0275\u0275listener("click", function AutoReleaseSettingsModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function AutoReleaseSettingsModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 17);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var _AutoReleaseSettingsModalComponent = class _AutoReleaseSettingsModalComponent {
  constructor(_id, _dialog_ref, _settings) {
    this._id = _id;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.loading = "";
    this.id = this._id;
    this.settings = {};
  }
  ngOnInit() {
    this.loadSettings(this.id);
  }
  loadSettings(id) {
    return __async(this, null, function* () {
      this.loading = "Loading auto-release settings for building...";
      this.settings = {};
      const settings = yield querySettings({ parent_id: id }).pipe(map((_) => _.data)).toPromise();
      const unencrypted = settings.find((_) => _.encryption_level === EncryptionLevel.None);
      if (!unencrypted)
        return;
      try {
        this.settings = load(unencrypted.settings_string)?.auto_release || {};
      } catch {
      }
      this.loading = "";
    });
  }
  save() {
    return __async(this, null, function* () {
      this.loading = "Saving changes to auto-release settings...";
      const settings = yield querySettings({ parent_id: this.id }).pipe(map((_) => _.data)).toPromise();
      let unencrypted = settings.find((_) => _.encryption_level === EncryptionLevel.None);
      if (!unencrypted) {
        unencrypted = new PlaceSettings({
          parent_id: this.id,
          encryption_level: EncryptionLevel.None,
          settings_string: ""
        });
      }
      let old_settings = {};
      try {
        old_settings = load(unencrypted.settings_string) || {};
      } catch {
      }
      unencrypted.settings_string = dump(__spreadProps(__spreadValues({}, old_settings), {
        auto_release: this.settings
      }));
      unencrypted.id ? yield updateSettings(unencrypted.id, unencrypted).toPromise() : yield addSettings(unencrypted).toPromise();
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const metadata = yield showMetadata(this.id, metadata_key).toPromise();
      const details = metadata.details || {};
      details.auto_release = this.settings;
      yield updateMetadata(this.id, {
        name: metadata_key,
        details,
        description: ""
      }).toPromise();
      notifySuccess("Auto-release settings updated");
      this.loading = "";
      this._dialog_ref.close();
    });
  }
};
_AutoReleaseSettingsModalComponent.\u0275fac = function AutoReleaseSettingsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoReleaseSettingsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
};
_AutoReleaseSettingsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoReleaseSettingsModalComponent, selectors: [["auto-release-modal"]], decls: 8, vars: 4, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-300", "p-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "px-2 w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "p-4 flex justify-end", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "px-2", "w-[20rem]"], [3, "ngModelChange", "min", "max", "step", "ngModel"], ["appearance", "outline", 1, "w-full"], ["multiple", "", "placeholder", "Set Event Types...", 3, "ngModelChange", "ngModel"], ["value", "desk"], ["value", "visitor"], ["value", "parking"], [1, "p-4", "flex", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-32", "space-y-2"], [3, "diameter"]], template: function AutoReleaseSettingsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h3", 2);
    \u0275\u0275text(2, "Auto-Release Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AutoReleaseSettingsModalComponent_button_3_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AutoReleaseSettingsModalComponent_main_4_Template, 17, 9, "main", 4)(5, AutoReleaseSettingsModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, AutoReleaseSettingsModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, NgControlStatus, NgModel, MatFormField, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatRipple, DurationFieldComponent, IconComponent] });
var AutoReleaseSettingsModalComponent = _AutoReleaseSettingsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoReleaseSettingsModalComponent, { className: "AutoReleaseSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts", lineNumber: 72 });
})();

// apps/concierge/src/app/building-manager/induction-settings-modal.component.ts
function InductionSettingsModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon", 7);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function InductionSettingsModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "mat-form-field", 9)(2, "textarea", 10);
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_main_4_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.induction_details, $event) || (ctx_r1.induction_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-checkbox", 11);
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_main_4_Template_mat_checkbox_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.is_enabled, $event) || (ctx_r1.is_enabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(4, " Enable Induction for Building ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.induction_details);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.is_enabled);
  }
}
function InductionSettingsModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 12)(1, "button", 13);
    \u0275\u0275listener("click", function InductionSettingsModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function InductionSettingsModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var _InductionSettingsModalComponent = class _InductionSettingsModalComponent {
  constructor(_zone_id, _settings, _org, _dialog_ref) {
    this._zone_id = _zone_id;
    this._settings = _settings;
    this._org = _org;
    this._dialog_ref = _dialog_ref;
    this.loading = "";
    this.induction_details = "";
    this.is_enabled = false;
    this.settings = {};
  }
  ngOnInit() {
    if (!this._zone_id)
      return;
    this.loadSettings();
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.loading = "Loading induction settings for building...";
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      this.settings = {};
      const [bld_metadata, org_metadata, org_settings] = yield Promise.all([
        yield showMetadata(this._zone_id, visitor_kiosk_app).toPromise(),
        yield showMetadata(this._org.organisation.id, visitor_kiosk_app).toPromise(),
        yield showMetadata(this._org.organisation.id, "settings").toPromise()
      ]);
      this.settings = __spreadValues(__spreadValues(__spreadValues({}, org_settings.details), org_metadata.details), bld_metadata.details);
      this.induction_details = this.settings.induction_details || "";
      this.is_enabled = this.settings.induction_enabled ?? false;
      this.loading = "";
    });
  }
  save() {
    return __async(this, null, function* () {
      this.loading = "Saving induction settings...";
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      const concierge_app = this._settings.get("app.concierge_app") || "concierge_app";
      this._dialog_ref.disableClose = true;
      const metadata = yield showMetadata(this._zone_id, visitor_kiosk_app).toPromise();
      const con_metadata = yield showMetadata(this._zone_id, concierge_app).toPromise();
      const visitor_metadata = __spreadProps(__spreadValues({}, metadata.details), {
        induction_details: this.induction_details,
        induction_enabled: this.is_enabled
      });
      const concierge_metadata = __spreadProps(__spreadValues({}, metadata.details), {
        induction_details: this.induction_details,
        induction_enabled: this.is_enabled
      });
      const result = yield updateMetadata(this._zone_id, {
        name: metadata.name || visitor_kiosk_app,
        description: metadata.description || "",
        details: visitor_metadata
      }).toPromise().catch((err) => {
        console.error(err);
        notifyError("Error saving induction settings for visitor kiosk");
      });
      const result2 = yield updateMetadata(this._zone_id, {
        name: con_metadata.name || concierge_app,
        description: con_metadata.description || "",
        details: concierge_metadata
      }).toPromise().catch((err) => {
        console.error(err);
        notifyError("Error saving induction settings for concierge");
      });
      this.loading = "";
      if (result) {
        notifySuccess("Successfully saved induction settings");
        this._dialog_ref.close();
      }
    });
  }
};
_InductionSettingsModalComponent.\u0275fac = function InductionSettingsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InductionSettingsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialogRef));
};
_InductionSettingsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InductionSettingsModalComponent, selectors: [["induction-settings-modal"]], decls: 8, vars: 4, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-300", "p-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col space-y-2", 4, "ngIf", "ngIfElse"], ["class", "px-4 pb-4 flex justify-end", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "p-4", "flex", "flex-col", "space-y-2"], ["appearance", "outline", 1, "w-[36rem]", "max-w-[80vw]", "h-[50vh]"], ["matInput", "", "placeholder", "Induction Details", 1, "w-[34rem]", "max-w-[calc(80vw-2rem)]", "h-[calc(50vh-2rem)]", "resize-none", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [1, "px-4", "pb-4", "flex", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-32", "space-y-2"], [3, "diameter"]], template: function InductionSettingsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h3", 2);
    \u0275\u0275text(2, "Induction Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InductionSettingsModalComponent_button_3_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InductionSettingsModalComponent_main_4_Template, 5, 2, "main", 4)(5, InductionSettingsModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, InductionSettingsModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatCheckbox, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent] });
var InductionSettingsModalComponent = _InductionSettingsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InductionSettingsModalComponent, { className: "InductionSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/induction-settings-modal.component.ts", lineNumber: 55 });
})();

// apps/concierge/src/app/building-manager/item-list-modal.component.ts
function ItemListModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ItemListModalComponent_div_9_Template_input_ngModelChange_1_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.item_list[i_r2].name, $event) || (ctx_r2.item_list[i_r2].name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ItemListModalComponent_div_9_Template_input_ngModelChange_2_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.item_list[i_r2].email, $event) || (ctx_r2.item_list[i_r2].email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ItemListModalComponent_div_9_Template_button_click_3_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.item_list.splice(i_r2, 1));
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.item_list[i_r2].name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.item_list[i_r2].email);
  }
}
var _ItemListModalComponent = class _ItemListModalComponent {
  constructor(_bld_id, _settings, _dialog_ref) {
    this._bld_id = _bld_id;
    this._settings = _settings;
    this._dialog_ref = _dialog_ref;
    this.item_list = [];
    this.loading = false;
    this.identify = (index, item) => index;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const metadata = yield showMetadata(this._bld_id, metadata_key).toPromise();
      const items = metadata?.details?.support_issue_types || [];
      this.item_list = items;
    });
  }
  save() {
    return __async(this, null, function* () {
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const concierge_key = this._settings.get("app.concierge_metadata_key") || "concierge_app";
      this.loading = true;
      const items = this.item_list.filter((_) => _);
      const metadata = yield showMetadata(this._bld_id, metadata_key).toPromise();
      metadata.details.support_issue_types = items;
      let resp = yield updateMetadata(this._bld_id, {
        name: metadata_key,
        details: metadata.details,
        description: metadata.description || ""
      }).toPromise().catch((_) => {
        notifyError(`Failed to save issue types. ${_}`);
      });
      if (!resp) {
        this.loading = false;
        return;
      }
      const concierge_metadata = yield showMetadata(this._bld_id, metadata_key).toPromise();
      concierge_metadata.details.support_issue_types = items;
      resp = yield updateMetadata(this._bld_id, {
        name: concierge_key,
        details: concierge_metadata.details,
        description: concierge_metadata.description || ""
      }).toPromise().catch((_) => {
        notifyError(`Failed to save issue types. ${_}`);
      });
      this.loading = false;
      if (resp)
        this._dialog_ref.close();
    });
  }
};
_ItemListModalComponent.\u0275fac = function ItemListModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ItemListModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialogRef));
};
_ItemListModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListModalComponent, selectors: [["item-list-modal"]], decls: 13, vars: 2, consts: [["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[36rem]", "overflow-auto", "h-[50vh]", "p-2", "space-y-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["class", "w-full flex items-center space-x-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "justify-end", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "w-full", "flex", "items-center", "space-x-2"], ["type", "text", "placeholder", "Issue Name", 1, "flex-1", "border", "border-base-200", "px-4", "py-3", "rounded", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Issue Email", 1, "flex-[2]", "border", "border-base-200", "px-4", "py-3", "rounded", 3, "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", "matTooltip", "Remove Item", 3, "click"]], template: function ItemListModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2, "Support Request Issue Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 0)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 1)(7, "button", 2);
    \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_7_listener() {
      return ctx.item_list.push({ name: "", email: "" });
    });
    \u0275\u0275text(8, " Add Item ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ItemListModalComponent_div_9_Template, 6, 2, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "footer", 4)(11, "button", 5);
    \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_11_listener() {
      return ctx.save();
    });
    \u0275\u0275text(12, "Save");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.item_list)("ngForTrackBy", ctx.identify);
  }
}, dependencies: [NgForOf, DefaultValueAccessor, NgControlStatus, NgModel, MatTooltip, MatDialogClose, MatRipple, IconComponent] });
var ItemListModalComponent = _ItemListModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListModalComponent, { className: "ItemListModalComponent", filePath: "apps/concierge/src/app/building-manager/item-list-modal.component.ts", lineNumber: 59 });
})();

// apps/concierge/src/app/building-manager/building-management.service.ts
var _BuildingManagementService = class _BuildingManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.filtered_buildings = combineLatest([
      this._org.region_list,
      this._org.building_list,
      this._options,
      this._org.initialised
    ]).pipe(map(([regions, list, options]) => {
      if (options.zone) {
        list = list.filter((_) => _.parent_id === options.zone);
      }
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const bld of list) {
        const parent = regions.find((_) => _.id === bld.parent_id);
        if (parent) {
          bld.region = parent.display_name || parent.name;
        }
        bld.level_count = this._org.levelsForBuilding(bld)?.length || 0;
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
  editBuilding(building = new PlaceZone()) {
    const ref = this._dialog.open(BuildingModalComponent, {
      data: building
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  editBuildingMetadata(zone = new PlaceZone()) {
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  setAutoRelease(building) {
    if (!building?.id)
      return;
    this._dialog.open(AutoReleaseSettingsModalComponent, {
      data: building.id
    });
  }
  setInduction(building) {
    if (!building?.id)
      return;
    this._dialog.open(InductionSettingsModalComponent, {
      data: building.id
    });
  }
  setSupportIssueTypes(building) {
    if (!building?.id)
      return;
    this._dialog.open(ItemListModalComponent, {
      data: building.id
    });
  }
  removeBuilding(building) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: "Remove Building",
        content: `Are you sure you want to remove the building "${building.name}"?`,
        icon: { content: "delete_forever" },
        confirm_text: "Remove"
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading("Removing building...");
      yield removeZone(building.id).toPromise();
      this._org.removeZone({ id: building.id, tags: ["building"] });
      notifySuccess("Successfully removed building.");
      ref.close();
    });
  }
};
_BuildingManagementService.\u0275fac = function BuildingManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuildingManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
};
_BuildingManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuildingManagementService, factory: _BuildingManagementService.\u0275fac, providedIn: "root" });
var BuildingManagementService = _BuildingManagementService;

// apps/concierge/src/app/building-manager/building-list.component.ts
var _c0 = (a0) => ({ key: "display_name", name: "Building Name", content: a0 });
var _c1 = () => ({ key: "location", name: "Location", size: "16rem" });
var _c2 = (a0) => ({ key: "timezone", name: "Timezone", size: "14rem", content: a0 });
var _c3 = () => ({ key: "region", name: "Region", size: "11rem", sortable: false });
var _c4 = () => ({ key: "level_count", name: "Levels", size: "6rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function BuildingListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_3_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
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
function BuildingListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5);
  }
}
function BuildingListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "level");
    \u0275\u0275pipe(2, "level");
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r6 = ctx.data;
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(1, 1, data_r6)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = \u0275\u0275pipeBind1(2, 3, data_r6)) == null ? null : tmp_7_0.name), " ");
  }
}
function BuildingListComponent_ng_template_9_img_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext().data;
    \u0275\u0275property("source", data_r7[0]);
  }
}
function BuildingListComponent_ng_template_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "No Images");
    \u0275\u0275elementEnd();
  }
}
function BuildingListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BuildingListComponent_ng_template_9_img_0_Template, 1, 1, "img", 14)(1, BuildingListComponent_ng_template_9_span_1_Template, 2, 0, "span", 15);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275property("ngIf", data_r7.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !data_r7.length);
  }
}
function BuildingListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 20)(7, "div", 21)(8, "app-icon", 22);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Application Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-menu", null, 6)(14, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_14_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r9));
    });
    \u0275\u0275elementStart(15, "div", 21)(16, "app-icon", 22);
    \u0275\u0275text(17, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Workplace Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_20_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r9));
    });
    \u0275\u0275elementStart(21, "div", 21)(22, "app-icon", 22);
    \u0275\u0275text(23, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Concierge Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_26_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r9));
    });
    \u0275\u0275elementStart(27, "div", 21)(28, "app-icon", 22);
    \u0275\u0275text(29, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Booking Panel Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_32_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r9));
    });
    \u0275\u0275elementStart(33, "div", 21)(34, "app-icon", 22);
    \u0275\u0275text(35, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Visitor Kiosk Settings");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_38_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBuilding(row_r9));
    });
    \u0275\u0275elementStart(39, "div", 21)(40, "app-icon", 22);
    \u0275\u0275text(41, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "Edit Building");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_44_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAutoRelease(row_r9));
    });
    \u0275\u0275elementStart(45, "div", 21)(46, "app-icon", 24);
    \u0275\u0275text(47, " release_alert ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Auto-release Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_50_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setInduction(row_r9));
    });
    \u0275\u0275elementStart(51, "div", 21)(52, "app-icon", 24);
    \u0275\u0275text(53, " badge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Induction Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_56_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSupportIssueTypes(row_r9));
    });
    \u0275\u0275elementStart(57, "div", 21)(58, "app-icon", 24);
    \u0275\u0275text(59, " support_agent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61, "Support Request Types");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_11_Template_button_click_62_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeBuilding(row_r9));
    });
    \u0275\u0275elementStart(63, "div", 25)(64, "app-icon", 26);
    \u0275\u0275text(65, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67, "Delete Building");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275reference(5);
    const app_settings_menu_r11 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r11);
  }
}
var _BuildingListComponent = class _BuildingListComponent {
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
    this.buildings = this._manager.filtered_buildings;
    this.settings = {};
    this.editBuilding = (building) => this._manager.editBuilding(building);
    this.editBuildingMetadata = (building) => this._manager.editBuildingMetadata(building);
    this.removeBuilding = (building) => this._manager.removeBuilding(building);
    this.setAutoRelease = (building) => this._manager.setAutoRelease(building);
    this.setInduction = (building) => this._manager.setInduction(building);
    this.setSupportIssueTypes = (building) => this._manager.setSupportIssueTypes(building);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Building ID copied to clipboard.");
    };
  }
};
_BuildingListComponent.\u0275fac = function BuildingListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuildingListComponent)(\u0275\u0275directiveInject(BuildingManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(MatDialog));
};
_BuildingListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingListComponent, selectors: [["building-list"]], decls: 13, vars: 19, consts: [["name_template", ""], ["timezone_template", ""], ["level_template", ""], ["image_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Buildings", 1, "min-w-[62rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "p-4", "font-mono", "text-sm"], ["auth", "", "class", "max-h-[3rem] max-w-[8rem]", 3, "source", 4, "ngIf"], ["class", "opacity-30", 4, "ngIf"], ["auth", "", 1, "max-h-[3rem]", "max-w-[8rem]", 3, "source"], [1, "opacity-30"], [1, "w-full", "flex", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded", 1, "text-xl"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]], template: function BuildingListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "simple-table", 8)(2, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BuildingListComponent_ng_template_3_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, BuildingListComponent_ng_template_5_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, BuildingListComponent_ng_template_7_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(9, BuildingListComponent_ng_template_9_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, BuildingListComponent_ng_template_11_Template, 68, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const name_template_r12 = \u0275\u0275reference(4);
    const timezone_template_r13 = \u0275\u0275reference(6);
    const action_template_r14 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.buildings)("columns", \u0275\u0275pureFunction6(12, _c6, \u0275\u0275pureFunction1(3, _c0, name_template_r12), \u0275\u0275pureFunction0(5, _c1), \u0275\u0275pureFunction1(6, _c2, timezone_template_r13), \u0275\u0275pureFunction0(8, _c3), \u0275\u0275pureFunction0(9, _c4), \u0275\u0275pureFunction1(10, _c5, action_template_r14)))("sortable", true);
  }
}, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, AuthenticatedImageDirective, LevelPipe] });
var BuildingListComponent = _BuildingListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingListComponent, { className: "BuildingListComponent", filePath: "apps/concierge/src/app/building-manager/building-list.component.ts", lineNumber: 197 });
})();

// apps/concierge/src/app/building-manager/building-manager.component.ts
var _c02 = ["app-building-manager", ""];
var _BuildingManagerComponent = class _BuildingManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.newBuilding = () => this._state.editBuilding();
  }
};
_BuildingManagerComponent.\u0275fac = function BuildingManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuildingManagerComponent)(\u0275\u0275directiveInject(BuildingManagementService));
};
_BuildingManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingManagerComponent, selectors: [["", "app-building-manager", ""]], attrs: _c02, decls: 10, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8", "pt-4", "pb-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function BuildingManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
    \u0275\u0275text(6, "Building Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function BuildingManagerComponent_Template_button_click_7_listener() {
      return ctx.newBuilding();
    });
    \u0275\u0275text(8, " Add Building ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "building-list", 5);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, BuildingListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=building-manager.component.css.map */"] });
var BuildingManagerComponent = _BuildingManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingManagerComponent, { className: "BuildingManagerComponent", filePath: "apps/concierge/src/app/building-manager/building-manager.component.ts", lineNumber: 50 });
})();

// apps/concierge/src/app/building-manager/building-manager.module.ts
var ROUTES = [
  { path: "", component: BuildingManagerComponent },
  { path: "new", component: BuildingManagerComponent }
];
var _BuildingManagerModule = class _BuildingManagerModule {
};
_BuildingManagerModule.\u0275fac = function BuildingManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuildingManagerModule)();
};
_BuildingManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BuildingManagerModule });
_BuildingManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var BuildingManagerModule = _BuildingManagerModule;
export {
  BuildingManagerModule
};
//# sourceMappingURL=building-manager.module-H6GFVQGZ.js.map
