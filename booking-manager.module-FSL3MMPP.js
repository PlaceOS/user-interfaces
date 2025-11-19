import {
  ParkingBookingsListComponent
} from "./chunk-4COUZEKF.js";
import {
  GuestListingComponent,
  InviteVisitorModalComponent,
  VisitorsStateService
} from "./chunk-RXDXL6XM.js";
import {
  ParkingBookingModalComponent,
  ParkingStateService
} from "./chunk-CMVPSXBK.js";
import {
  AssetManagerStateService,
  AssetRequestListComponent
} from "./chunk-ECKWZHM6.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-XL3MDWA6.js";
import {
  DeskBookModalComponent,
  DeskBookingsComponent
} from "./chunk-JO23A3AA.js";
import {
  DesksStateService
} from "./chunk-YLLWODUB.js";
import "./chunk-C3LP5WQR.js";
import {
  LockerBookingsComponent
} from "./chunk-LAYHFBHB.js";
import {
  LockerStateService
} from "./chunk-DQ4VKFVP.js";
import {
  DateOptionsComponent
} from "./chunk-TOCDSBS2.js";
import "./chunk-WNTCVLQI.js";
import {
  SearchbarComponent
} from "./chunk-AGB55ATH.js";
import "./chunk-YIO5MOBF.js";
import "./chunk-M6Q7N2W7.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-67VYHWAM.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BuildingPipe,
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
  RouterModule,
  SettingsService,
  TranslatePipe,
  combineLatest,
  computed,
  first,
  inject,
  input,
  map,
  setClassMetadata,
  settingSignal,
  signal,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I4HSLPYT.js";

// apps/concierge/src/app/booking-manager/booking-manager-topbar.component.ts
function BookingManagerTopbarComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function BookingManagerTopbarComponent_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newDeskBooking());
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 9);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function BookingManagerTopbarComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function BookingManagerTopbarComponent_Conditional_0_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newParkingBooking());
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 9);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function BookingManagerTopbarComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function BookingManagerTopbarComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.inviteVisitor());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.VISITOR_INVITE_TITLE"), " ");
  }
}
function BookingManagerTopbarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 3);
    \u0275\u0275elementStart(5, "searchbar", 4);
    \u0275\u0275listener("modelChange", function BookingManagerTopbarComponent_Conditional_0_Template_searchbar_modelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, BookingManagerTopbarComponent_Conditional_0_Conditional_6_Template, 6, 3, "button", 5)(7, BookingManagerTopbarComponent_Conditional_0_Conditional_7_Template, 6, 3, "button", 5)(8, BookingManagerTopbarComponent_Conditional_0_Conditional_8_Template, 3, 3, "button", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.BOOKINGS_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", ctx_r1.search_value);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tab_name() === "desks" ? 6 : ctx_r1.tab_name() === "parking" ? 7 : ctx_r1.tab_name() === "visitors" ? 8 : -1);
  }
}
function BookingManagerTopbarComponent_Conditional_1_Conditional_1_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const level_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = \u0275\u0275pipeBind1(2, 1, level_r8.parent_id)) == null ? null : tmp_13_0.display_name, " ");
  }
}
function BookingManagerTopbarComponent_Conditional_1_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, BookingManagerTopbarComponent_Conditional_1_Conditional_1_For_7_Conditional_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", level_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r8.display_name || level_r8.name, " ");
  }
}
function BookingManagerTopbarComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function BookingManagerTopbarComponent_Conditional_1_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, BookingManagerTopbarComponent_Conditional_1_Conditional_1_For_7_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.selected_zones)("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "COMMON.LEVEL_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 7, ctx_r1.levels));
  }
}
function BookingManagerTopbarComponent_Conditional_1_Conditional_2_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const level_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = \u0275\u0275pipeBind1(2, 1, level_r10.parent_id)) == null ? null : tmp_13_0.display_name, " ");
  }
}
function BookingManagerTopbarComponent_Conditional_1_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, BookingManagerTopbarComponent_Conditional_1_Conditional_2_For_4_Conditional_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", level_r10.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r10.display_name || level_r10.name, " ");
  }
}
function BookingManagerTopbarComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function BookingManagerTopbarComponent_Conditional_1_Conditional_2_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275repeaterCreate(3, BookingManagerTopbarComponent_Conditional_1_Conditional_2_For_4_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.selected_zones)("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 4, ctx_r1.levels));
  }
}
function BookingManagerTopbarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, BookingManagerTopbarComponent_Conditional_1_Conditional_1_Template, 9, 9, "mat-form-field", 11)(2, BookingManagerTopbarComponent_Conditional_1_Conditional_2_Template, 6, 6, "mat-form-field", 11);
    \u0275\u0275element(3, "div", 3);
    \u0275\u0275elementStart(4, "date-options", 12);
    \u0275\u0275listener("dateChange", function BookingManagerTopbarComponent_Conditional_1_Template_date_options_dateChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function BookingManagerTopbarComponent_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "refresh");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tab_name() === "assets" ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 2, "COMMON.REFRESH"));
  }
}
var _BookingManagerTopbarComponent = class _BookingManagerTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._desk_service = inject(DesksStateService);
    this._parking_service = inject(ParkingStateService);
    this._locker_service = inject(LockerStateService);
    this._asset_service = inject(AssetManagerStateService);
    this._visitors_service = inject(VisitorsStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.tab_index = input.required();
    this.tab_name = input("");
    this.show_header = input.required();
    this.selected_zones = [];
    this.search_value = "";
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = (date) => {
      const tab = this.tab_name();
      if (tab === "desks")
        this._desk_service.setFilters({ date });
      else if (tab === "parking")
        this._parking_service.setOptions({ date });
      else if (tab === "lockers")
        this._locker_service.setFilters({ date });
      else if (tab === "assets")
        this._asset_service.setOptions({ date });
      else if (tab === "visitors")
        this._visitors_service.setFilters({ date });
    };
    this.updateZones = (zones) => {
      const zone_array = Array.isArray(zones) ? zones : [zones];
      const filtered_zones = zone_array.filter((z) => z !== "All");
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: filtered_zones.join(",") },
        queryParamsHandling: "merge"
      });
      const tab = this.tab_name();
      if (tab === "desks") {
        this._desk_service.setFilters({ zones: filtered_zones });
      } else if (tab === "parking") {
        this._parking_service.setOptions({ zones: filtered_zones });
      } else if (tab === "lockers") {
        this._locker_service.setFilters({ zones: filtered_zones });
      } else if (tab === "visitors") {
        this._visitors_service.setFilters({ zones: filtered_zones });
      }
    };
    this.setSearch = (str) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { search: str || null },
        queryParamsHandling: "merge"
      });
      const tab = this.tab_name();
      if (tab === "desks") {
        this._desk_service.setFilters({ search: str });
      } else if (tab === "parking") {
        this._parking_service.setOptions({ search: str });
      } else if (tab === "lockers") {
        this._locker_service.setSearch(str);
      } else if (tab === "assets") {
        this._asset_service.setOptions({ search: str });
      } else if (tab === "visitors") {
        this._visitors_service.setSearchString(str);
      }
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  refresh() {
    const tab = this.tab_name();
    if (tab === "desks")
      this._desk_service.refresh();
    else if (tab === "parking")
      this._parking_service.startPolling();
    else if (tab === "lockers")
      this._locker_service.refresh();
    else if (tab === "assets")
      this._asset_service.startPolling();
    else if (tab === "visitors")
      this._visitors_service.startPolling();
  }
  newDeskBooking() {
    const ref = this._dialog.open(DeskBookModalComponent, {});
    ref.afterClosed().subscribe((_) => {
      this._desk_service.refresh();
    });
  }
  newParkingBooking() {
    this._dialog.open(ParkingBookingModalComponent, {});
  }
  inviteVisitor() {
    this._dialog.open(InviteVisitorModalComponent, {});
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("zone_ids")) {
        const zone_list = (params.get("zone_ids") || "").split(",");
        const zones = zone_list.filter((z) => z);
        this.selected_zones = this.tab_name() === "assets" && zones.length ? zones[0] : zones;
      }
      if (params.has("search")) {
        const search = params.get("search") || "";
        this.search_value = search;
      } else {
        this.search_value = "";
      }
    }));
  }
};
_BookingManagerTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BookingManagerTopbarComponent_BaseFactory;
  return function BookingManagerTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275BookingManagerTopbarComponent_BaseFactory || (\u0275BookingManagerTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BookingManagerTopbarComponent)))(__ngFactoryType__ || _BookingManagerTopbarComponent);
  };
})();
_BookingManagerTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingManagerTopbarComponent, selectors: [["booking-manager-topbar"]], inputs: { tab_index: [1, "tab_index"], tab_name: [1, "tab_name"], show_header: [1, "show_header"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "flex", "items-center", "space-x-2", "px-8", "py-4"], [1, "mb-4", "flex", "flex-nowrap", "items-center", "space-x-2", "bg-base-100", "px-8"], [1, "text-2xl", "font-medium"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-40"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2", 3, "click"], [1, "pl-2"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["appearance", "outline", 1, "no-subscript", "w-60"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "matTooltip"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", "All"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"]], template: function BookingManagerTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BookingManagerTopbarComponent_Conditional_0_Template, 9, 5, "div", 0)(1, BookingManagerTopbarComponent_Conditional_1_Template, 9, 4, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.show_header() ? 0 : 1);
  }
}, dependencies: [
  AsyncPipe,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  BuildingPipe,
  SearchbarComponent,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatTooltipModule,
  MatTooltip,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe,
  DateOptionsComponent
], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=booking-manager-topbar.component.css.map */"] });
var BookingManagerTopbarComponent = _BookingManagerTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingManagerTopbarComponent, [{
    type: Component,
    args: [{ selector: "booking-manager-topbar", template: `
        @if (show_header()) {
            <div class="flex items-center space-x-2 px-8 py-4">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.BOOKINGS_HEADER' | translate }}
                </h2>
                <div class="w-2 flex-1"></div>
                <searchbar
                    class="mr-2"
                    [model]="search_value"
                    (modelChange)="setSearch($event)"
                ></searchbar>
                @if (tab_name() === 'desks') {
                    <button
                        btn
                        matRipple
                        class="w-44 space-x-2"
                        (click)="newDeskBooking()"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </button>
                } @else if (tab_name() === 'parking') {
                    <button
                        btn
                        matRipple
                        class="w-44 space-x-2"
                        (click)="newParkingBooking()"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </button>
                } @else if (tab_name() === 'visitors') {
                    <button
                        btn
                        matRipple
                        class="w-40"
                        (click)="inviteVisitor()"
                    >
                        {{ 'BOOKINGS.VISITOR_INVITE_TITLE' | translate }}
                    </button>
                }
            </div>
        } @else {
            <div
                class="mb-4 flex flex-nowrap items-center space-x-2 bg-base-100 px-8"
            >
                @if (tab_name() === 'assets') {
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="selected_zones"
                            (ngModelChange)="updateZones($event)"
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        >
                            <mat-option value="All">
                                {{ 'COMMON.LEVEL_ALL' | translate }}
                            </mat-option>
                            @for (level of levels | async; track level) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-30">
                                                {{
                                                    (level.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                } @else {
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="selected_zones"
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
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
                <div class="w-2 flex-1"></div>
                <date-options (dateChange)="setDate($event)"></date-options>
                <button
                    btn
                    icon
                    matRipple
                    [matTooltip]="'COMMON.REFRESH' | translate"
                    class="ml-2 rounded border border-base-200"
                    (click)="refresh()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
        }
    `, imports: [
      AsyncPipe,
      MatFormFieldModule,
      MatSelectModule,
      BuildingPipe,
      SearchbarComponent,
      FormsModule,
      MatTooltipModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      DateOptionsComponent
    ], styles: ["/* angular:styles/component:css;2bc8ca7aace10e46f51053cb2cf4127500bd9fcd06c7c0d1d5dc88d70d997800;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/booking-manager/booking-manager-topbar.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=booking-manager-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingManagerTopbarComponent, { className: "BookingManagerTopbarComponent", filePath: "apps/concierge/src/app/booking-manager/booking-manager-topbar.component.ts", lineNumber: 195 });
})();

// apps/concierge/src/app/booking-manager/booking-manager.component.ts
var _c0 = ["app-booking-manager", ""];
function BookingManagerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 4);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_DESKS"));
  }
}
function BookingManagerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 4);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_PARKING"));
  }
}
function BookingManagerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 4);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_LOCKERS"));
  }
}
function BookingManagerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 4);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_ASSETS"));
  }
}
function BookingManagerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 4);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_VISITORS"));
  }
}
function BookingManagerComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desk-bookings", 6);
  }
}
function BookingManagerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-bookings-list", 6);
  }
}
function BookingManagerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "locker-bookings", 6);
  }
}
function BookingManagerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-asset-request-list", 6);
  }
}
function BookingManagerComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "guest-listings", 6);
  }
}
var _BookingManagerComponent = class _BookingManagerComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._desk_service = inject(DesksStateService);
    this._parking_service = inject(ParkingStateService);
    this._locker_service = inject(LockerStateService);
    this._visitors_service = inject(VisitorsStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.selected_tab = signal(0);
    this.feature_list = settingSignal("features", []);
    this.show_desks = computed(() => this.feature_list().includes("desks"));
    this.show_parking = computed(() => this.feature_list().includes("parking"));
    this.show_lockers = computed(() => this.feature_list().includes("lockers"));
    this.show_assets = computed(() => this.feature_list().includes("assets"));
    this.show_visitors = computed(() => this.feature_list().includes("visitors"));
    this.available_tabs = computed(() => {
      const tabs = [];
      if (this.show_desks())
        tabs.push({ name: "desks", feature: "desks" });
      if (this.show_parking())
        tabs.push({ name: "parking", feature: "parking" });
      if (this.show_lockers())
        tabs.push({ name: "lockers", feature: "lockers" });
      if (this.show_assets())
        tabs.push({ name: "assets", feature: "assets" });
      if (this.show_visitors())
        tabs.push({ name: "visitors", feature: "visitors" });
      return tabs;
    });
    this.current_tab_name = computed(() => {
      const available = this.available_tabs();
      const index = this.selected_tab();
      return available[index]?.name || "";
    });
    this.TAB_NAMES = [
      "desks",
      "parking",
      "lockers",
      "assets",
      "visitors"
    ];
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
_BookingManagerComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BookingManagerComponent_BaseFactory;
  return function BookingManagerComponent_Factory(__ngFactoryType__) {
    return (\u0275BookingManagerComponent_BaseFactory || (\u0275BookingManagerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BookingManagerComponent)))(__ngFactoryType__ || _BookingManagerComponent);
  };
})();
_BookingManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingManagerComponent, selectors: [["", "app-booking-manager", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 18, vars: 13, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [3, "tab_index", "tab_name", "show_header"], [1, "mx-8", "mb-4", "overflow-hidden", "rounded-md", "bg-base-200", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "relative", "w-full", "flex-1"], [1, "relative", "block", "h-full", "w-full"]], template: function BookingManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "booking-manager-topbar", 2);
    \u0275\u0275elementStart(5, "mat-tab-group", 3);
    \u0275\u0275twoWayListener("selectedIndexChange", function BookingManagerComponent_Template_mat_tab_group_selectedIndexChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selected_tab, $event) || (ctx.selected_tab = $event);
      return $event;
    });
    \u0275\u0275listener("selectedIndexChange", function BookingManagerComponent_Template_mat_tab_group_selectedIndexChange_5_listener($event) {
      return ctx.onTabChange($event);
    });
    \u0275\u0275conditionalCreate(6, BookingManagerComponent_Conditional_6_Template, 2, 3, "mat-tab", 4);
    \u0275\u0275conditionalCreate(7, BookingManagerComponent_Conditional_7_Template, 2, 3, "mat-tab", 4);
    \u0275\u0275conditionalCreate(8, BookingManagerComponent_Conditional_8_Template, 2, 3, "mat-tab", 4);
    \u0275\u0275conditionalCreate(9, BookingManagerComponent_Conditional_9_Template, 2, 3, "mat-tab", 4);
    \u0275\u0275conditionalCreate(10, BookingManagerComponent_Conditional_10_Template, 2, 3, "mat-tab", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "booking-manager-topbar", 2);
    \u0275\u0275elementStart(12, "div", 5);
    \u0275\u0275conditionalCreate(13, BookingManagerComponent_Conditional_13_Template, 1, 0, "desk-bookings", 6)(14, BookingManagerComponent_Conditional_14_Template, 1, 0, "parking-bookings-list", 6)(15, BookingManagerComponent_Conditional_15_Template, 1, 0, "locker-bookings", 6)(16, BookingManagerComponent_Conditional_16_Template, 1, 0, "app-asset-request-list", 6)(17, BookingManagerComponent_Conditional_17_Template, 1, 0, "guest-listings", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("tab_index", ctx.selected_tab())("tab_name", ctx.current_tab_name())("show_header", true);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("selectedIndex", ctx.selected_tab);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_desks() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_parking() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_lockers() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_assets() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_visitors() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("tab_index", ctx.selected_tab())("tab_name", ctx.current_tab_name())("show_header", false);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.current_tab_name() === "desks" ? 13 : ctx.current_tab_name() === "parking" ? 14 : ctx.current_tab_name() === "lockers" ? 15 : ctx.current_tab_name() === "assets" ? 16 : ctx.current_tab_name() === "visitors" ? 17 : -1);
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  MatTabsModule,
  MatTab,
  MatTabGroup,
  MatRippleModule,
  TranslatePipe,
  BookingManagerTopbarComponent,
  DeskBookingsComponent,
  ParkingBookingsListComponent,
  LockerBookingsComponent,
  AssetRequestListComponent,
  GuestListingComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=booking-manager.component.css.map */"] });
var BookingManagerComponent = _BookingManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-booking-manager]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <booking-manager-topbar
                    [tab_index]="selected_tab()"
                    [tab_name]="current_tab_name()"
                    [show_header]="true"
                ></booking-manager-topbar>
                <mat-tab-group
                    class="mx-8 mb-4 overflow-hidden rounded-md bg-base-200"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    @if (show_desks()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_DESKS' | translate"
                        ></mat-tab>
                    }
                    @if (show_parking()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_PARKING' | translate"
                        ></mat-tab>
                    }
                    @if (show_lockers()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_LOCKERS' | translate"
                        ></mat-tab>
                    }
                    @if (show_assets()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_ASSETS' | translate"
                        ></mat-tab>
                    }
                    @if (show_visitors()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_VISITORS' | translate"
                        ></mat-tab>
                    }
                </mat-tab-group>
                <booking-manager-topbar
                    [tab_index]="selected_tab()"
                    [tab_name]="current_tab_name()"
                    [show_header]="false"
                ></booking-manager-topbar>
                <div class="relative w-full flex-1">
                    @if (current_tab_name() === 'desks') {
                        <desk-bookings
                            class="relative block h-full w-full"
                        ></desk-bookings>
                    } @else if (current_tab_name() === 'parking') {
                        <parking-bookings-list
                            class="relative block h-full w-full"
                        ></parking-bookings-list>
                    } @else if (current_tab_name() === 'lockers') {
                        <locker-bookings
                            class="relative block h-full w-full"
                        ></locker-bookings>
                    } @else if (current_tab_name() === 'assets') {
                        <app-asset-request-list
                            class="relative block h-full w-full"
                        ></app-asset-request-list>
                    } @else if (current_tab_name() === 'visitors') {
                        <guest-listings
                            class="relative block h-full w-full"
                        ></guest-listings>
                    }
                </div>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatTabsModule,
      MatRippleModule,
      TranslatePipe,
      BookingManagerTopbarComponent,
      DeskBookingsComponent,
      ParkingBookingsListComponent,
      LockerBookingsComponent,
      AssetRequestListComponent,
      GuestListingComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/booking-manager/booking-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=booking-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingManagerComponent, { className: "BookingManagerComponent", filePath: "apps/concierge/src/app/booking-manager/booking-manager.component.ts", lineNumber: 124 });
})();

// apps/concierge/src/app/booking-manager/booking-manager.module.ts
var routes = [
  {
    path: "",
    component: BookingManagerComponent
  }
];
var _BookingManagerModule = class _BookingManagerModule {
};
_BookingManagerModule.\u0275fac = function BookingManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingManagerModule)();
};
_BookingManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BookingManagerModule });
_BookingManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [BookingManagerComponent, RouterModule.forChild(routes)] });
var BookingManagerModule = _BookingManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingManagerModule, [{
    type: NgModule,
    args: [{
      imports: [BookingManagerComponent, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  BookingManagerModule
};
//# sourceMappingURL=booking-manager.module-FSL3MMPP.js.map
