import "./chunk-DBMZBDCA.js";
import {
  SharedUsersModule
} from "./chunk-4Q6FM26T.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncPipe,
  BehaviorSubject,
  BookingPanelSettingsModalComponent,
  Clipboard,
  CommonModule,
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
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  OrganisationService,
  PlaceZone,
  RouterModule,
  SharedSpacesModule,
  SimpleTableComponent,
  UIModule,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  addZone,
  authority,
  combineLatest,
  getInvalidFields,
  notifyError,
  notifySuccess,
  openConfirmModal,
  removeZone,
  requestSpacesForZone,
  shareReplay,
  switchMap,
  updateZone,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LCTDH2CE.js";

// apps/concierge/src/app/level-manager/level-modal.component.ts
function LevelModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function LevelModalComponent_main_4_form_1_div_1_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const building_r1 = ctx.$implicit;
    \u0275\u0275property("value", building_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", building_r1.display_name || building_r1.name, " ");
  }
}
function LevelModalComponent_main_4_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 11);
    \u0275\u0275text(2, " Building");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 12)(7, "mat-select", 13);
    \u0275\u0275template(8, LevelModalComponent_main_4_form_1_div_1_mat_option_8_Template, 2, 2, "mat-option", 14);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11, "Building is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.parent_id.invalid && ctx_r1.form.controls.parent_id.touched);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 3, ctx_r1.building_list));
  }
}
function LevelModalComponent_main_4_form_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 16);
    \u0275\u0275text(2, " Display Name: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12);
    \u0275\u0275element(4, "input", 17);
    \u0275\u0275elementEnd()();
  }
}
function LevelModalComponent_main_4_form_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 18);
    \u0275\u0275text(2, " Map URL: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12);
    \u0275\u0275element(4, "input", 19);
    \u0275\u0275elementEnd()();
  }
}
function LevelModalComponent_main_4_form_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-checkbox", 21);
    \u0275\u0275text(2, " Has Parking Spaces ");
    \u0275\u0275elementEnd()();
  }
}
function LevelModalComponent_main_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275template(1, LevelModalComponent_main_4_form_1_div_1_Template, 12, 5, "div", 8)(2, LevelModalComponent_main_4_form_1_div_2_Template, 5, 0, "div", 8)(3, LevelModalComponent_main_4_form_1_div_3_Template, 5, 0, "div", 8)(4, LevelModalComponent_main_4_form_1_div_4_Template, 3, 0, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.parent_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.display_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.map_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.parking);
  }
}
function LevelModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275template(1, LevelModalComponent_main_4_form_1_Template, 5, 5, "form", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form);
  }
}
function LevelModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 22)(1, "button", 23);
    \u0275\u0275listener("click", function LevelModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function LevelModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3, "Saving level...");
    \u0275\u0275elementEnd()();
  }
}
var _LevelModalComponent = class _LevelModalComponent {
  constructor(_org, _data, _dialog_ref) {
    this._org = _org;
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.building_list = this._org.building_list;
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      display_name: new FormControl(this._data?.display_name || "", [
        Validators.required
      ]),
      parent_id: new FormControl(this._data?.parent_id || "", [
        Validators.required
      ]),
      map_id: new FormControl(this._data?.map_id || "", [
        Validators.required
      ]),
      parking: new FormControl(this._data?.tags?.includes("parking") || false)
    });
  }
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      this.loading = true;
      const data = this.form.getRawValue();
      data.tags = data.parking ? ["level", "parking"] : ["level"];
      const resp = yield (data.id ? updateZone(data.id, __spreadProps(__spreadValues({}, data), {
        name: `LEVEL ${authority().description} ${data.display_name}`
      })) : addZone(__spreadProps(__spreadValues({}, data), {
        name: `LEVEL ${authority().description} ${data.display_name}`
      }))).toPromise().catch();
      if (resp.id)
        this._dialog_ref.close(resp);
      this.loading = false;
    });
  }
};
_LevelModalComponent.\u0275fac = function LevelModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_LevelModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelModalComponent, selectors: [["level-modal"]], decls: 8, vars: 5, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_0 = goog.getMsg("Display Name");
    i18n_0 = MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_1 = goog.getMsg("URL of the Map SVG file");
    i18n_1 = MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:@@mapIdPlaceholder␟f78f3836515ccc83a36f25d9174f585019d54341␟1505388289077394171:URL of the Map SVG file`;
  }
  return [["load_state", ""], ["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], ["system", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["system", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], ["class", "flex flex-col py-2", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "zone"], ["appearance", "outline"], ["formControlName", "parent_id", "placeholder", "Select Building"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "display-name"], ["matInput", "", "name", "display-name", "placeholder", i18n_0, "formControlName", "display_name"], ["for", "map-id"], ["matInput", "", "name", "map-id", "placeholder", i18n_1, "formControlName", "map_id"], [1, "flex", "flex-col", "py-2"], ["name", "parking", "formControlName", "parking"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
}, template: function LevelModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LevelModalComponent_button_3_Template, 3, 0, "button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LevelModalComponent_main_4_Template, 2, 1, "main", 2)(5, LevelModalComponent_footer_5_Template, 3, 0, "footer", 3)(6, LevelModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.form.value.id ? "Edit" : "Add", " Level");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatInput, MatSelect, MatOption, MatCheckbox, MatProgressSpinner, MatDialogClose, FormGroupDirective, FormControlName, IconComponent, AsyncPipe] });
var LevelModalComponent = _LevelModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelModalComponent, { className: "LevelModalComponent", filePath: "apps/concierge/src/app/level-manager/level-modal.component.ts", lineNumber: 98 });
})();

// apps/concierge/src/app/level-manager/level-management.service.ts
var _LevelManagementService = class _LevelManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.level_list = this._org.level_list;
    this.filtered_levels = combineLatest([
      this._org.building_list,
      this.level_list,
      this._options
    ]).pipe(switchMap((_0) => __async(this, [_0], function* ([buildings, list, options]) {
      list = list.filter((_) => buildings.find((bld) => bld.id === _.parent_id));
      if (options.zone) {
        list = list.filter((_) => _.parent_id === options.zone);
      }
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const level of list) {
        const parent = this._org.buildings.find((bld) => bld.id === level.parent_id);
        if (parent) {
          level.building = parent.display_name || parent.name;
        }
        level.room_count = yield requestSpacesForZone(level.id).toPromise().then((spaces) => spaces.length);
      }
      return list;
    })), shareReplay(1));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editLevel(level = new PlaceZone()) {
    const ref = this._dialog.open(LevelModalComponent, {
      data: level
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  removeLevel(level) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: "Remove Building",
        content: `Are you sure you want to remove the building "${level.name}"?`,
        icon: { content: "delete_forever" },
        confirm_text: "Remove"
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading("Removing building...");
      yield removeZone(level.id).toPromise();
      this._org.removeZone({ id: level.id, tags: ["level"] });
      notifySuccess("Successfully removed building.");
      ref.close();
    });
  }
};
_LevelManagementService.\u0275fac = function LevelManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
};
_LevelManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LevelManagementService, factory: _LevelManagementService.\u0275fac, providedIn: "root" });
var LevelManagementService = _LevelManagementService;

// apps/concierge/src/app/level-manager/level-list.component.ts
var _c0 = (a0) => ({ key: "display_name", name: "Level Name", content: a0 });
var _c1 = () => ({ key: "building", name: "Building", size: "16rem" });
var _c2 = (a0) => ({ key: "parking", name: "Parking", content: a0, size: "5rem", sortable: false });
var _c3 = () => ({ key: "room_count", name: "Rooms", size: "6rem" });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.75rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function LevelListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_3_Template_button_click_0_listener() {
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
function LevelListComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "app-icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function LevelListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LevelListComponent_ng_template_5_div_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275property("ngIf", row_r5.tags == null ? null : row_r5.tags.includes("parking"));
  }
}
function LevelListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 3)(6, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_7_Template_button_click_6_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevel(row_r7));
    });
    \u0275\u0275elementStart(7, "div", 15)(8, "app-icon", 16);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Edit Level");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_7_Template_button_click_12_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r7));
    });
    \u0275\u0275elementStart(13, "div", 15)(14, "app-icon", 17);
    \u0275\u0275text(15, " top_panel_open ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Edit Booking Panel Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_7_Template_button_click_18_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLevel(row_r7));
    });
    \u0275\u0275elementStart(19, "div", 15)(20, "app-icon", 18);
    \u0275\u0275text(21, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Remove Level");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r8 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
  }
}
var _LevelListComponent = class _LevelListComponent {
  constructor(_manager, _clipboard, _dialog) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this._dialog = _dialog;
    this.levels = this._manager.filtered_levels;
    this.editLevel = (level) => this._manager.editLevel(level);
    this.removeLevel = (level) => this._manager.removeLevel(level);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Level ID copied to clipboard.");
    };
  }
  editBookingPanelSettings(level) {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone: level }
    });
  }
};
_LevelListComponent.\u0275fac = function LevelListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelListComponent)(\u0275\u0275directiveInject(LevelManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(MatDialog));
};
_LevelListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelListComponent, selectors: [["level-list"]], decls: 9, vars: 17, consts: [["name_template", ""], ["parking_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No levels", 1, "min-w-[48rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto"], [1, "w-full", "flex", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["className", "material-symbols-rounded", 1, "text-2xl"], [1, "text-2xl", "text-error"]], template: function LevelListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "simple-table", 5)(2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LevelListComponent_ng_template_3_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, LevelListComponent_ng_template_5_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, LevelListComponent_ng_template_7_Template, 24, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const name_template_r9 = \u0275\u0275reference(4);
    const parking_template_r10 = \u0275\u0275reference(6);
    const action_template_r11 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.levels)("columns", \u0275\u0275pureFunction5(11, _c5, \u0275\u0275pureFunction1(3, _c0, name_template_r9), \u0275\u0275pureFunction0(5, _c1), \u0275\u0275pureFunction1(6, _c2, parking_template_r10), \u0275\u0275pureFunction0(8, _c3), \u0275\u0275pureFunction1(9, _c4, action_template_r11)))("sortable", true);
  }
}, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent] });
var LevelListComponent = _LevelListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelListComponent, { className: "LevelListComponent", filePath: "apps/concierge/src/app/level-manager/level-list.component.ts", lineNumber: 107 });
})();

// apps/concierge/src/app/level-manager/level-manager.component.ts
var _c02 = ["app-level-manager", ""];
var _LevelManagerComponent = class _LevelManagerComponent {
  constructor(_manager) {
    this._manager = _manager;
    this.newLevel = () => this._manager.editLevel();
  }
};
_LevelManagerComponent.\u0275fac = function LevelManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelManagerComponent)(\u0275\u0275directiveInject(LevelManagementService));
};
_LevelManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelManagerComponent, selectors: [["", "app-level-manager", ""]], attrs: _c02, decls: 10, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8", "pt-4", "pb-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function LevelManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
    \u0275\u0275text(6, "Level Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function LevelManagerComponent_Template_button_click_7_listener() {
      return ctx.newLevel();
    });
    \u0275\u0275text(8, " Add Level ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "level-list", 5);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, LevelListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=level-manager.component.css.map */"] });
var LevelManagerComponent = _LevelManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelManagerComponent, { className: "LevelManagerComponent", filePath: "apps/concierge/src/app/level-manager/level-manager.component.ts", lineNumber: 49 });
})();

// apps/concierge/src/app/level-manager/level-manager.module.ts
var ROUTES = [
  { path: "", component: LevelManagerComponent },
  { path: "new", component: LevelManagerComponent }
];
var _LevelManagerModule = class _LevelManagerModule {
};
_LevelManagerModule.\u0275fac = function LevelManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelManagerModule)();
};
_LevelManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LevelManagerModule });
_LevelManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var LevelManagerModule = _LevelManagerModule;
export {
  LevelManagerModule
};
//# sourceMappingURL=level-manager.module-BT4VKN6Z.js.map
