import {
  CateringMenuComponent,
  CateringOrderListComponent,
  CateringOrdersService,
  CateringStateService,
  ChargeCodeListModalComponent
} from "./chunk-MN5CGTAK.js";
import "./chunk-H2ESPPSD.js";
import "./chunk-W6KV2Y4F.js";
import {
  DateOptionsComponent
} from "./chunk-4ZQFB6YD.js";
import "./chunk-4Y4OUXDK.js";
import {
  SearchbarComponent
} from "./chunk-2SV46IU6.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-G36UUYE3.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AvailableRoomsStateModalComponent,
  CommonModule,
  Component,
  FormsModule,
  IconComponent,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  SettingsService,
  TranslatePipe,
  __spreadProps,
  __spreadValues,
  combineLatest,
  first,
  inject,
  map,
  nextValueFrom,
  notifySuccess,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JMWE3Z3Z.js";

// apps/concierge/src/app/catering/catering-topbar.component.ts
function CateringTopbarComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function CateringTopbarComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, CateringTopbarComponent_For_11_Conditional_2_Template, 5, 3, "div", 11);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function CateringTopbarComponent_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caterer_r4 = ctx.$implicit;
    \u0275\u0275property("value", caterer_r4 || "<empty>");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caterer_r4 || "[" + \u0275\u0275pipeBind1(2, 2, "CATERING.CATERER_EMPTY") + "]", " ");
  }
}
function CateringTopbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-select", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_Conditional_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCaterer($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, CateringTopbarComponent_Conditional_13_For_7_Template, 3, 4, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.filters == null ? null : ctx_r1.filters.caterer)("placeholder", \u0275\u0275pipeBind1(2, 3, "CATERING.CATERERS_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "CATERING.CATERERS_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 7, ctx_r1.caterers));
  }
}
function CateringTopbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function CateringTopbarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItem());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.MENU_ADD"));
  }
}
function CateringTopbarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editConfig());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.BOOKING_RULES"));
  }
}
function CateringTopbarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.importMenu());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.MENU_IMPORT"));
  }
}
function CateringTopbarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRoomAvailability());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.ROOM_AVAILABILITY"));
  }
}
function CateringTopbarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setChargeCodes());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "payments");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.CHARGE_CODES"));
  }
}
function CateringTopbarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function CateringTopbarComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 17);
    \u0275\u0275listener("dateChange", function CateringTopbarComponent_Conditional_22_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var _CateringTopbarComponent = class _CateringTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._orders = inject(CateringOrdersService);
    this._catering = inject(CateringStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
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
  get building() {
    return this._org.building;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
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
  }
  async setRoomAvailability() {
    const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
      data: {
        type: "Catering",
        disabled_rooms: await nextValueFrom(this._catering.availability)
      }
    });
    this.subscription("room-availability", ref.componentInstance.change.subscribe(async (list) => {
      console.log("List:", list);
      await this._catering.saveSettings({ disabled_rooms: list }).catch();
      ref.componentInstance.loading.set(false);
      notifySuccess("Room availability settings saved");
    }));
  }
  setChargeCodes() {
    this._dialog.open(ChargeCodeListModalComponent);
  }
};
_CateringTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CateringTopbarComponent_BaseFactory;
  return function CateringTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275CateringTopbarComponent_BaseFactory || (\u0275CateringTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CateringTopbarComponent)))(__ngFactoryType__ || _CateringTopbarComponent);
  };
})();
_CateringTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringTopbarComponent, selectors: [["catering-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 21, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "pb-2", "pt-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [1, "flex", "h-20", "items-center", "space-x-2", "bg-base-100", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "w-2", "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "matTooltip"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], [1, "text-2xl"], [3, "dateChange"]], template: function CateringTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275elementStart(5, "searchbar", 3);
    \u0275\u0275listener("modelChange", function CateringTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-select", 6);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_Template_mat_select_ngModelChange_8_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(10, CateringTopbarComponent_For_11_Template, 5, 3, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, CateringTopbarComponent_Conditional_13_Template, 9, 9, "mat-form-field", 5);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalCreate(15, CateringTopbarComponent_Conditional_15_Template, 1, 0, "div", 8);
    \u0275\u0275conditionalCreate(16, CateringTopbarComponent_Conditional_16_Template, 4, 3, "button", 9);
    \u0275\u0275conditionalCreate(17, CateringTopbarComponent_Conditional_17_Template, 4, 3, "button", 9);
    \u0275\u0275conditionalCreate(18, CateringTopbarComponent_Conditional_18_Template, 4, 3, "button", 9);
    \u0275\u0275conditionalCreate(19, CateringTopbarComponent_Conditional_19_Template, 4, 3, "button", 9);
    \u0275\u0275conditionalCreate(20, CateringTopbarComponent_Conditional_20_Template, 4, 3, "button", 9);
    \u0275\u0275conditionalCreate(21, CateringTopbarComponent_Conditional_21_Template, 1, 0, "div", 8);
    \u0275\u0275conditionalCreate(22, CateringTopbarComponent_Conditional_22_Template, 1, 0, "date-options");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, ctx.page === "menu" ? "CATERING.MENU" : "CATERING.ORDER_LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", ctx.filters == null ? null : ctx.filters.search);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.filters == null ? null : ctx.filters.zones)("placeholder", \u0275\u0275pipeBind1(9, 15, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 17, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(14, 19, ctx.caterers)) == null ? null : tmp_5_0.length) > 1 ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.page === "menu" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.page === "menu" && (!ctx.zones[0] || ctx.zones[0] === (ctx.building == null ? null : ctx.building.id)) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.page === "menu" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.page === "menu" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.page === "menu" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.page === "menu" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.page !== "menu" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.page !== "menu" ? 22 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DateOptionsComponent,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  SearchbarComponent,
  TranslatePipe
], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=catering-topbar.component.css.map */"] });
var CateringTopbarComponent = _CateringTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringTopbarComponent, [{
    type: Component,
    args: [{ selector: "catering-topbar", template: `
        <div class="flex w-full items-center space-x-2 px-8 pb-2 pt-4">
            <h2 class="text-2xl font-medium">
                {{
                    (page === 'menu' ? 'CATERING.MENU' : 'CATERING.ORDER_LIST')
                        | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="filters?.search"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
        <div class="flex h-20 items-center space-x-2 bg-base-100 px-8">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="filters?.zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            <div class="flex flex-col-reverse">
                                @if (use_region) {
                                    <div class="text-xs opacity-30">
                                        {{
                                            (level.parent_id | building)
                                                ?.display_name
                                        }}
                                        <span class="opacity-0"> - </span>
                                    </div>
                                }
                                <div>
                                    {{ level.display_name || level.name }}
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            @if ((caterers | async)?.length > 1) {
                <mat-form-field appearance="outline" class="no-subscript w-60">
                    <mat-select
                        [ngModel]="filters?.caterer"
                        (ngModelChange)="setCaterer($event)"
                        [placeholder]="'CATERING.CATERERS_ALL' | translate"
                    >
                        <mat-option value="">{{
                            'CATERING.CATERERS_ALL' | translate
                        }}</mat-option>
                        @for (caterer of caterers | async; track caterer) {
                            <mat-option [value]="caterer || '<empty>'">
                                {{
                                    caterer ||
                                        '[' +
                                            ('CATERING.CATERER_EMPTY'
                                                | translate) +
                                            ']'
                                }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (page === 'menu') {
                <div class="w-2 flex-1"></div>
            }
            @if (page === 'menu' && (!zones[0] || zones[0] === building?.id)) {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.MENU_ADD' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="addItem()"
                >
                    <icon class="text-2xl">add</icon>
                </button>
            }
            @if (page === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.BOOKING_RULES' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="editConfig()"
                >
                    <icon class="text-2xl">menu_book</icon>
                </button>
            }
            @if (page === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.MENU_IMPORT' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="importMenu()"
                >
                    <icon class="text-2xl">cloud_upload</icon>
                </button>
            }
            @if (page === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.ROOM_AVAILABILITY' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="setRoomAvailability()"
                >
                    <icon class="text-2xl">event_available</icon>
                </button>
            }
            @if (page === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.CHARGE_CODES' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="setChargeCodes()"
                >
                    <icon class="text-2xl">payments</icon>
                </button>
            }
            @if (page !== 'menu') {
                <div class="w-2 flex-1"></div>
            }
            <!-- <searchbar class="mr-2"></searchbar> -->
            @if (page !== 'menu') {
                <date-options (dateChange)="setDate($event)"></date-options>
            }
        </div>
    `, imports: [
      CommonModule,
      DateOptionsComponent,
      MatRippleModule,
      IconComponent,
      MatTooltipModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      SearchbarComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/catering/catering-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=catering-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringTopbarComponent, { className: "CateringTopbarComponent", filePath: "apps/concierge/src/app/catering/catering-topbar.component.ts", lineNumber: 190 });
})();

// apps/concierge/src/app/catering/catering.component.ts
var _c0 = ["app-new-catering", ""];
var _c1 = () => ["/catering", "menu"];
var _c2 = () => ["/catering", "orders"];
function CateringComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.MENU_EDIT_INFO"), " ");
  }
}
function CateringComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-order-list", 6);
  }
}
function CateringComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-menu", 6);
  }
}
function CateringComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "a", 8)(2, "div", 9);
    \u0275\u0275element(3, "div", 10);
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5, "Menus and Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7, " View and Edit Menus and Pricing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 8)(9, "div", 9);
    \u0275\u0275element(10, "div", 10);
    \u0275\u0275elementStart(11, "span", 11);
    \u0275\u0275text(12, "Today's Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12);
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
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => this.page = params.has("view") ? params.get("view") : ""));
  }
};
_CateringComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CateringComponent_BaseFactory;
  return function CateringComponent_Factory(__ngFactoryType__) {
    return (\u0275CateringComponent_BaseFactory || (\u0275CateringComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CateringComponent)))(__ngFactoryType__ || _CateringComponent);
  };
})();
_CateringComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringComponent, selectors: [["", "app-new-catering", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 11, vars: 2, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "h-1/2", "flex-1", "flex-col", "px-8"], [1, "mb-4", "flex", "items-center", "justify-center", "rounded", "bg-info", "p-2", "text-sm", "text-white"], [1, "flex", "h-1/2", "w-full", "flex-1", "overflow-auto"], [1, "flex-1"], [1, "flex", "flex-1", "flex-wrap", "items-center", "justify-center"], ["matRipple", "", 1, "flex", "flex-col", "items-center", "rounded", "bg-base-100", "text-black", "shadow", 3, "routerLink"], ["name", "img", 1, "relative", "flex", "w-full", "flex-1", "items-center", "justify-center", "bg-cover", "bg-center", "text-2xl", "text-white"], [1, "absolute", "inset-0", "z-0", "bg-neutral", "opacity-60"], [1, "z-10"], [1, "flex", "h-14", "w-full", "items-center", "justify-center", "p-2", "text-center", "text-sm"]], template: function CateringComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "catering-topbar", 2);
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275conditionalCreate(6, CateringComponent_Conditional_6_Template, 3, 3, "div", 4);
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275conditionalCreate(8, CateringComponent_Case_8_Template, 1, 0, "catering-order-list", 6)(9, CateringComponent_Case_9_Template, 1, 0, "catering-menu", 6)(10, CateringComponent_Case_10_Template, 15, 8, "div", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.page === "menu" ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx.page) === "orders" ? 8 : tmp_1_0 === "menu" ? 9 : 10);
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  MatRippleModule,
  MatRipple,
  RouterModule,
  RouterLink,
  CateringTopbarComponent,
  TranslatePipe,
  CateringOrderListComponent,
  CateringMenuComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\na[_ngcontent-%COMP%] {\n  width: 28rem;\n  height: 16rem;\n  margin-left: 0.5rem;\n  text-decoration: none;\n  transition: background 200ms;\n}\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\na[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=catering.component.css.map */"] });
var CateringComponent = _CateringComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringComponent, [{
    type: Component,
    args: [{ selector: "[app-new-catering]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <catering-topbar class="relative z-10"></catering-topbar>
                <div class="flex h-1/2 flex-1 flex-col px-8">
                    @if (page === 'menu') {
                        <div
                            class="mb-4 flex items-center justify-center rounded bg-info p-2 text-sm text-white"
                        >
                            {{ 'CATERING.MENU_EDIT_INFO' | translate }}
                        </div>
                    }
                    <div class="flex h-1/2 w-full flex-1 overflow-auto">
                        @switch (page) {
                            @case ('orders') {
                                <catering-order-list
                                    class="flex-1"
                                ></catering-order-list>
                            }
                            @case ('menu') {
                                <catering-menu class="flex-1"></catering-menu>
                            }
                            @default {
                                <div
                                    class="flex flex-1 flex-wrap items-center justify-center"
                                >
                                    <a
                                        matRipple
                                        class="flex flex-col items-center rounded bg-base-100 text-black shadow"
                                        [routerLink]="['/catering', 'menu']"
                                    >
                                        <div
                                            name="img"
                                            class="relative flex w-full flex-1 items-center justify-center bg-cover bg-center text-2xl text-white"
                                            [style.background-image]="
                                                'url(assets/menus.jpg)'
                                            "
                                        >
                                            <div
                                                class="absolute inset-0 z-0 bg-neutral opacity-60"
                                            ></div>
                                            <span class="z-10"
                                                >Menus and Pricing</span
                                            >
                                        </div>
                                        <div
                                            class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                        >
                                            View and Edit Menus and Pricing
                                        </div>
                                    </a>
                                    <a
                                        matRipple
                                        class="flex flex-col items-center rounded bg-base-100 text-black shadow"
                                        [routerLink]="['/catering', 'orders']"
                                    >
                                        <div
                                            name="img"
                                            class="relative flex w-full flex-1 items-center justify-center bg-cover bg-center text-2xl text-white"
                                            [style.background-image]="
                                                'url(assets/orders.jpg)'
                                            "
                                        >
                                            <div
                                                class="absolute inset-0 z-0 bg-neutral opacity-60"
                                            ></div>
                                            <span class="z-10"
                                                >Today's Orders</span
                                            >
                                        </div>
                                        <div
                                            class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                        >
                                            View Catering Orders and their
                                            statuses upon arrival
                                        </div>
                                    </a>
                                </div>
                            }
                        }
                    </div>
                </div>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatRippleModule,
      RouterModule,
      CateringTopbarComponent,
      TranslatePipe,
      CateringOrderListComponent,
      CateringMenuComponent
    ], styles: ["/* angular:styles/component:css;629681061b05a28352f48e1ad8d36915b259415db14a6ffbae9bce1777fac102;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/catering/catering.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\na {\n  width: 28rem;\n  height: 16rem;\n  margin-left: 0.5rem;\n  text-decoration: none;\n  transition: background 200ms;\n}\na:hover {\n  opacity: 0.8;\n}\na:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=catering.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringComponent, { className: "CateringComponent", filePath: "apps/concierge/src/app/catering/catering.component.ts", lineNumber: 142 });
})();

// apps/concierge/src/app/catering/catering.module.ts
var ROUTES = [
  { path: "", component: CateringComponent },
  { path: ":view", component: CateringComponent }
];
var _CateringModule = class _CateringModule {
};
_CateringModule.\u0275fac = function CateringModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringModule)();
};
_CateringModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CateringModule });
_CateringModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CateringComponent, RouterModule.forChild(ROUTES)] });
var CateringModule = _CateringModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CateringComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  CateringModule
};
//# sourceMappingURL=catering.module-3PSKOJ6J.js.map
