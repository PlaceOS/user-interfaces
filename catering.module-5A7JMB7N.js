import {
  CateringMenuComponent,
  CateringOrderListComponent,
  CateringOrdersService,
  CateringStateService,
  ChargeCodeListModalComponent,
  SharedCateringModule
} from "./chunk-3YAZR46K.js";
import {
  MatTabsModule
} from "./chunk-NHEPNTM5.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AvailableRoomsStateModalComponent,
  BuildingPipe,
  CommonModule,
  DateOptionsComponent,
  FormsModule,
  IconComponent,
  MatChipsModule,
  MatDialog,
  MatFormField,
  MatOption,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  SearchbarComponent,
  SettingsService,
  SidebarComponent,
  UIModule,
  __async,
  __spreadProps,
  __spreadValues,
  combineLatest,
  first,
  map,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5OFBRWDR.js";

// apps/concierge/src/app/catering/catering-topbar.component.ts
function CateringTopbarComponent_mat_option_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_3_0.display_name, " ");
  }
}
function CateringTopbarComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275template(2, CateringTopbarComponent_mat_option_8_div_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function CateringTopbarComponent_mat_form_field_10_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caterer_r4 = ctx.$implicit;
    \u0275\u0275property("value", caterer_r4 || "<empty>");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caterer_r4 || "[No Caterer]", " ");
  }
}
function CateringTopbarComponent_mat_form_field_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-select", 21);
    \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_mat_form_field_10_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCaterer($event));
    });
    \u0275\u0275elementStart(2, "mat-option", 22);
    \u0275\u0275text(3, "All Caterers");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringTopbarComponent_mat_form_field_10_mat_option_4_Template, 2, 2, "mat-option", 7);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.filters == null ? null : ctx_r1.filters.caterer);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 2, ctx_r1.caterers));
  }
}
function CateringTopbarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function CateringTopbarComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function CateringTopbarComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItem());
    });
    \u0275\u0275elementStart(1, "app-icon", 25);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function CateringTopbarComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function CateringTopbarComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editConfig());
    });
    \u0275\u0275elementStart(1, "app-icon", 25);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd()();
  }
}
function CateringTopbarComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function CateringTopbarComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.importMenu());
    });
    \u0275\u0275elementStart(1, "app-icon", 25);
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd()();
  }
}
function CateringTopbarComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CateringTopbarComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRoomAvailability());
    });
    \u0275\u0275elementStart(1, "app-icon", 25);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd()();
  }
}
function CateringTopbarComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function CateringTopbarComponent_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setChargeCodes());
    });
    \u0275\u0275elementStart(1, "app-icon", 25);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd()();
  }
}
function CateringTopbarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function CateringTopbarComponent_date_options_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 30);
    \u0275\u0275listener("dateChange", function CateringTopbarComponent_date_options_19_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var _CateringTopbarComponent = class _CateringTopbarComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_orders, _catering, _org, _route, _router, _dialog, _settings) {
    super();
    this._orders = _orders;
    this._catering = _catering;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.zones = [];
    this.filters = this._orders.filters;
    this.caterers = this._catering.caterers;
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = (date) => this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { date });
    this.setCaterer = (caterer) => this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { caterer });
    this.setSearch = (str) => this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { search: str });
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { zones: [z] });
      this._catering.zone = z[0];
    };
    this.addItem = () => this._catering.addItem();
    this.editConfig = () => this._catering.editConfig();
    this.importMenu = () => this._catering.importMenu();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this._catering.zone = (this._orders.filters?.zones || [])[0] || this._org.building?.id;
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (!zones.length)
            return;
          const level = this._org.levelWithID(zones);
          this.zones = zones;
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
        }
      }));
      this.subscription("route.params", this._route.paramMap.subscribe((params) => this.page = params.has("view") ? params.get("view") : ""));
    });
  }
  setRoomAvailability() {
    return __async(this, null, function* () {
      const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
        data: {
          type: "Catering",
          disabled_rooms: yield this._catering.availability.pipe(take(1)).toPromise()
        }
      });
      this.subscription("room-availability", ref.componentInstance.change.subscribe((list) => __async(this, null, function* () {
        yield this._catering.saveSettings({ disabled_rooms: list }).catch();
        ref.componentInstance.loading = false;
      })));
    });
  }
  setChargeCodes() {
    this._dialog.open(ChargeCodeListModalComponent);
  }
};
_CateringTopbarComponent.\u0275fac = function CateringTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringTopbarComponent)(\u0275\u0275directiveInject(CateringOrdersService), \u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
};
_CateringTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringTopbarComponent, selectors: [["catering-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 17, consts: [[1, "flex", "items-center", "w-full", "pt-4", "pb-2", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "modelChange", "model"], [1, "flex", "items-center", "bg-base-100", "h-20", "px-8", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "class", "no-subscript w-60", 4, "ngIf"], ["class", "flex-1 w-2", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Add Item", "class", "bg-secondary text-secondary-content rounded h-12 w-12", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Edit Config", "class", "bg-secondary text-secondary-content rounded h-12 w-12", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Import Menu", "class", "bg-secondary text-secondary-content rounded h-12 w-12", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Room Availability", "class", "bg-secondary text-secondary-content rounded h-12 w-12", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Charge Codes", "class", "bg-secondary text-secondary-content rounded h-12 w-12", 3, "click", 4, "ngIf"], [3, "dateChange", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["placeholder", "All Caterers", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "flex-1", "w-2"], ["icon", "", "matRipple", "", "matTooltip", "Add Item", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], [1, "text-2xl"], ["icon", "", "matRipple", "", "matTooltip", "Edit Config", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Import Menu", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Room Availability", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Charge Codes", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], [3, "dateChange"]], template: function CateringTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 2);
    \u0275\u0275elementStart(4, "searchbar", 3);
    \u0275\u0275listener("modelChange", function CateringTopbarComponent_Template_searchbar_modelChange_4_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "mat-form-field", 5)(7, "mat-select", 6);
    \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(8, CateringTopbarComponent_mat_option_8_Template, 5, 3, "mat-option", 7);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, CateringTopbarComponent_mat_form_field_10_Template, 6, 4, "mat-form-field", 8);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275template(12, CateringTopbarComponent_div_12_Template, 1, 0, "div", 9)(13, CateringTopbarComponent_button_13_Template, 3, 0, "button", 10)(14, CateringTopbarComponent_button_14_Template, 3, 0, "button", 11)(15, CateringTopbarComponent_button_15_Template, 3, 0, "button", 12)(16, CateringTopbarComponent_button_16_Template, 3, 0, "button", 13)(17, CateringTopbarComponent_button_17_Template, 3, 0, "button", 14)(18, CateringTopbarComponent_div_18_Template, 1, 0, "div", 9)(19, CateringTopbarComponent_date_options_19_Template, 1, 0, "date-options", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Catering ", ctx.page === "menu" ? "Menu" : "Orders", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("model", ctx.filters == null ? null : ctx.filters.search);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.filters == null ? null : ctx.filters.zones);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 13, ctx.levels));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_4_0 = \u0275\u0275pipeBind1(11, 15, ctx.caterers)) == null ? null : tmp_4_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.page === "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.page === "menu" && (!ctx.zones[0] || ctx.zones[0] === (ctx.building == null ? null : ctx.building.id)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.page === "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.page === "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.page === "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.page === "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.page !== "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.page !== "menu");
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe, BuildingPipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=catering-topbar.component.css.map */"] });
var CateringTopbarComponent = _CateringTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringTopbarComponent, { className: "CateringTopbarComponent", filePath: "apps/concierge/src/app/catering/catering-topbar.component.ts", lineNumber: 143 });
})();

// apps/concierge/src/app/catering/catering.component.ts
var _c0 = ["app-catering", ""];
var _c1 = () => ["/book", "catering", "menu"];
var _c2 = () => ["/book", "catering", "orders"];
function CateringComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, ' To edit the menu select "All Levels" from the top left ');
    \u0275\u0275elementEnd();
  }
}
function CateringComponent_catering_order_list_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-order-list", 8);
  }
}
function CateringComponent_catering_menu_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-menu", 8);
  }
}
function CateringComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 10)(2, "div", 11);
    \u0275\u0275element(3, "div", 12);
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5, "Menus and Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7, " View and Edit Menus and Pricing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 10)(9, "div", 11);
    \u0275\u0275element(10, "div", 12);
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12, "Today's Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14);
    \u0275\u0275text(14, " View Catering Orders and their statuses upon arrival ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/menus.jpg)");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c2));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/orders.jpg)");
  }
}
var _CateringComponent = class _CateringComponent extends AsyncHandler {
  constructor(_route) {
    super();
    this._route = _route;
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => this.page = params.has("view") ? params.get("view") : ""));
  }
};
_CateringComponent.\u0275fac = function CateringComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringComponent)(\u0275\u0275directiveInject(ActivatedRoute));
};
_CateringComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringComponent, selectors: [["", "app-catering", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 9, vars: 4, consts: [[1, "relative", "w-full", "flex", "flex-col", "bg-base-200"], [1, "relative", "z-10"], ["class", "p-2 flex items-center justify-center bg-info text-info-content text-sm", 4, "ngIf"], [1, "flex", "flex-1", "h-1/2", "w-full", "overflow-auto"], [3, "ngSwitch"], ["class", "flex-1", 4, "ngSwitchCase"], ["class", "flex flex-1 flex-wrap items-center justify-center", 4, "ngSwitchDefault"], [1, "p-2", "flex", "items-center", "justify-center", "bg-info", "text-info-content", "text-sm"], [1, "flex-1"], [1, "flex", "flex-1", "flex-wrap", "items-center", "justify-center"], ["matRipple", "", 1, "rounded", "flex", "flex-col", "items-center", "bg-base-100", "shadow", "text-black", 3, "routerLink"], ["name", "img", 1, "relative", "w-full", "flex", "flex-1", "items-center", "justify-center", "text-2xl", "text-white", "bg-center", "bg-cover"], [1, "absolute", "inset-0", "bg-neutral", "opacity-60", "z-0"], [1, "z-10"], [1, "p-2", "h-14", "w-full", "text-sm", "text-center", "flex", "items-center", "justify-center"]], template: function CateringComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "catering-topbar", 1);
    \u0275\u0275template(3, CateringComponent_div_3_Template, 2, 0, "div", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275elementContainerStart(5, 4);
    \u0275\u0275template(6, CateringComponent_catering_order_list_6_Template, 1, 0, "catering-order-list", 5)(7, CateringComponent_catering_menu_7_Template, 1, 0, "catering-menu", 5)(8, CateringComponent_div_8_Template, 15, 8, "div", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.page === "menu");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", ctx.page);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "orders");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "menu");
  }
}, dependencies: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, SidebarComponent, MatRipple, CateringMenuComponent, CateringOrderListComponent, RouterLink, CateringTopbarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\na[_ngcontent-%COMP%] {\n  width: 28rem;\n  height: 16rem;\n  margin-left: 0.5rem;\n  text-decoration: none;\n  transition: background 200ms;\n}\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\na[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=catering.component.css.map */"] });
var CateringComponent = _CateringComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringComponent, { className: "CateringComponent", filePath: "apps/concierge/src/app/catering/catering.component.ts", lineNumber: 109 });
})();

// apps/concierge/src/app/catering/new-catering.component.ts
var _c02 = ["app-new-catering", ""];
var _c12 = () => ["/catering", "menu"];
var _c22 = () => ["/catering", "orders"];
function NewCateringComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, " To edit the menu de-select all levels from the top left ");
    \u0275\u0275elementEnd();
  }
}
function NewCateringComponent_catering_order_list_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-order-list", 10);
  }
}
function NewCateringComponent_catering_menu_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-menu", 10);
  }
}
function NewCateringComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "a", 12)(2, "div", 13);
    \u0275\u0275element(3, "div", 14);
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, "Menus and Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275text(7, " View and Edit Menus and Pricing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 12)(9, "div", 13);
    \u0275\u0275element(10, "div", 14);
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12, "Today's Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16);
    \u0275\u0275text(14, " View Catering Orders and their statuses upon arrival ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c12));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/menus.jpg)");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c22));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/orders.jpg)");
  }
}
var _NewCateringComponent = class _NewCateringComponent extends AsyncHandler {
  constructor(_route) {
    super();
    this._route = _route;
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => this.page = params.has("view") ? params.get("view") : ""));
  }
};
_NewCateringComponent.\u0275fac = function NewCateringComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewCateringComponent)(\u0275\u0275directiveInject(ActivatedRoute));
};
_NewCateringComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCateringComponent, selectors: [["", "app-new-catering", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c02, decls: 12, vars: 4, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "relative", "z-10"], [1, "flex", "flex-col", "px-8", "flex-1", "h-1/2"], ["class", "p-2 flex items-center justify-center bg-info text-white text-sm mb-4 rounded", 4, "ngIf"], [1, "flex", "flex-1", "h-1/2", "w-full", "overflow-auto"], [3, "ngSwitch"], ["class", "flex-1", 4, "ngSwitchCase"], ["class", "flex flex-1 flex-wrap items-center justify-center", 4, "ngSwitchDefault"], [1, "p-2", "flex", "items-center", "justify-center", "bg-info", "text-white", "text-sm", "mb-4", "rounded"], [1, "flex-1"], [1, "flex", "flex-1", "flex-wrap", "items-center", "justify-center"], ["matRipple", "", 1, "rounded", "flex", "flex-col", "items-center", "bg-base-100", "shadow", "text-black", 3, "routerLink"], ["name", "img", 1, "relative", "w-full", "flex", "flex-1", "items-center", "justify-center", "text-2xl", "text-white", "bg-center", "bg-cover"], [1, "absolute", "inset-0", "bg-neutral", "opacity-60", "z-0"], [1, "z-10"], [1, "p-2", "h-14", "w-full", "text-sm", "text-center", "flex", "items-center", "justify-center"]], template: function NewCateringComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "catering-topbar", 2);
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275template(6, NewCateringComponent_div_6_Template, 2, 0, "div", 4);
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275elementContainerStart(8, 6);
    \u0275\u0275template(9, NewCateringComponent_catering_order_list_9_Template, 1, 0, "catering-order-list", 7)(10, NewCateringComponent_catering_menu_10_Template, 1, 0, "catering-menu", 7)(11, NewCateringComponent_div_11_Template, 15, 8, "div", 8);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.page === "menu");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", ctx.page);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "orders");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "menu");
  }
}, dependencies: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, CateringMenuComponent, CateringOrderListComponent, RouterLink, CateringTopbarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\na[_ngcontent-%COMP%] {\n  width: 28rem;\n  height: 16rem;\n  margin-left: 0.5rem;\n  text-decoration: none;\n  transition: background 200ms;\n}\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\na[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=new-catering.component.css.map */"] });
var NewCateringComponent = _NewCateringComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCateringComponent, { className: "NewCateringComponent", filePath: "apps/concierge/src/app/catering/new-catering.component.ts", lineNumber: 118 });
})();

// apps/concierge/src/app/catering/catering.module.ts
var ROUTES = [
  { path: "", component: CateringComponent },
  { path: "new", component: NewCateringComponent },
  { path: ":view", component: CateringComponent },
  { path: "new/:view", component: NewCateringComponent }
];
var _CateringModule = class _CateringModule {
};
_CateringModule.\u0275fac = function CateringModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringModule)();
};
_CateringModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CateringModule });
_CateringModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  MatTabsModule,
  MatChipsModule,
  SharedCateringModule,
  RouterModule.forChild(ROUTES)
] });
var CateringModule = _CateringModule;
export {
  CateringModule
};
//# sourceMappingURL=catering.module-5A7JMB7N.js.map
