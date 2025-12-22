import {
  LockerListComponent
} from "./chunk-5LEM5NIV.js";
import {
  LockerBookingsComponent
} from "./chunk-BTXYBSN3.js";
import {
  LockerStateService
} from "./chunk-GUUXBIRX.js";
import {
  BookingRulesModalComponent
} from "./chunk-UBA7OHH7.js";
import {
  DateOptionsComponent
} from "./chunk-NWV4SCGX.js";
import "./chunk-JDNC5NBL.js";
import {
  SearchbarComponent
} from "./chunk-DOB7TZHS.js";
import "./chunk-4TKH7LIR.js";
import "./chunk-XCGU5XIL.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-4RG2QD2S.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BuildingPipe,
  CommonModule,
  Component,
  FormsModule,
  IconComponent,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatProgressBar,
  MatProgressBarModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterModule,
  RouterOutlet,
  SettingsService,
  TranslatePipe,
  firstTruthyValueFrom,
  inject,
  lastValueFrom,
  nextValueFrom,
  setClassMetadata,
  signal,
  timer,
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
} from "./chunk-Z5DSMDUT.js";

// apps/concierge/src/app/lockers/locker-topbar.component.ts
function LockersTopbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function LockersTopbarComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newLockerBank());
    });
    \u0275\u0275elementStart(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 16);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.options)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.LOCKERS_BANK_ADD"), " ");
  }
}
function LockersTopbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LockersTopbarComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newBooking());
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 16);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function LockersTopbarComponent_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r4.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function LockersTopbarComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 19);
    \u0275\u0275conditionalCreate(2, LockersTopbarComponent_For_17_Conditional_2_Template, 5, 3, "div", 20);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r4.display_name || level_r4.name, " ");
  }
}
function LockersTopbarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function LockersTopbarComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.releaseAllLockers());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.LOCKERS_RELEASE_ALL"));
  }
}
function LockersTopbarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function LockersTopbarComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.LOCKERS_BOOKING_RULES"));
  }
}
function LockersTopbarComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 24);
    \u0275\u0275listener("dateChange", function LockersTopbarComponent_Conditional_22_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var _LockersTopbarComponent = class _LockersTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LockerStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.path = signal("");
    this.zones = signal([]);
    this.levels = this._state.levels;
    this.options = this._state.filters;
    this.search = this._state.search;
    this.setDate = (d) => this._state.setFilters({ date: d });
    this.setSearch = (str) => this._state.setSearch(str);
    this.newLockerBank = () => this._state.editLockerBank();
    this.releaseAllLockers = () => this._state.releaseAllLockers(true);
    this.updateZones = (z) => {
      if (!this._router.url.includes("lockers"))
        return;
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones: z });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "locker" }
    });
  }
  async ngOnInit() {
    this._updatePath();
    await firstTruthyValueFrom(this._org.initialised);
    await lastValueFrom(timer(1e3));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids") && this._router.url.includes("locker")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          this.zones.set(zones);
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this._state.setFilters({ zones });
        }
      }
    }));
    this.subscription("levels", this._state.levels.subscribe((levels) => {
      if (this.use_region)
        return;
      this.zones.update((zones) => zones.filter((z) => levels.find((lvl) => lvl.id === z)));
      if (!this.zones().length && levels.length) {
        this.zones.update((zones) => {
          zones.push(levels[0].id);
          return zones;
        });
      }
      this.updateZones(this.zones());
    }));
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  async newBooking() {
    const { date } = await nextValueFrom(this.options);
    this._state.editBooking(void 0, {
      date: date || Date.now(),
      allow_time_changes: true
    });
  }
  _updatePath() {
    this.timeout("path", () => {
      const parts = this._router.url?.split("/") || [""];
      this.path.set(parts[parts.length - 1].split("?")[0]);
    }, 20);
  }
};
_LockersTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockersTopbarComponent_BaseFactory;
  return function LockersTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275LockersTopbarComponent_BaseFactory || (\u0275LockersTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockersTopbarComponent)))(__ngFactoryType__ || _LockersTopbarComponent);
  };
})();
_LockersTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersTopbarComponent, selectors: [["lockers-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 22, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "disabled"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2"], [1, "bg-base-100", "mb-2", "flex", "h-14", "items-center", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "w-0", "flex-1"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "mr-2", "h-12", "w-12", "rounded-sm", "border", 3, "matTooltip"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click", "disabled"], [1, "pl-4"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2", 3, "click"], [1, "pl-2"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "mr-2", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], [3, "dateChange"]], template: function LockersTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275elementStart(5, "searchbar", 3);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("modelChange", function LockersTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, LockersTopbarComponent_Conditional_10_Template, 7, 6, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, LockersTopbarComponent_Conditional_11_Template, 6, 3, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-select", 9);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function LockersTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function LockersTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(16, LockersTopbarComponent_For_17_Template, 5, 3, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "div", 11);
    \u0275\u0275conditionalCreate(20, LockersTopbarComponent_Conditional_20_Template, 4, 3, "button", 12);
    \u0275\u0275conditionalCreate(21, LockersTopbarComponent_Conditional_21_Template, 4, 3, "button", 13);
    \u0275\u0275conditionalCreate(22, LockersTopbarComponent_Conditional_22_Template, 1, 0, "date-options");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, ctx.path() !== "events" ? "APP.CONCIERGE.LOCKERS_HEADER" : "APP.CONCIERGE.LOCKERS_BOOK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", \u0275\u0275pipeBind1(6, 12, ctx.search));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 16, ((tmp_2_0 = \u0275\u0275pipeBind1(8, 14, ctx.options)) == null ? null : tmp_2_0.zones == null ? null : tmp_2_0.zones.length) ? "" : "APP.CONCIERGE.LOCKERS_LEVEL_SELECT"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.path() === "manage" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path() === "events" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 18, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 20, ctx.levels));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.path() !== "events" && ctx.path() !== "map" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path() !== "events" && ctx.path() !== "map" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path() === "events" || ctx.path() === "map" ? 22 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DateOptionsComponent,
  IconComponent,
  MatRippleModule,
  MatRipple,
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
  TranslatePipe,
  BuildingPipe
], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=locker-topbar.component.css.map */"] });
var LockersTopbarComponent = _LockersTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersTopbarComponent, [{
    type: Component,
    args: [{ selector: "lockers-topbar", template: `
        <div class="flex w-full items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (path() !== 'events'
                        ? 'APP.CONCIERGE.LOCKERS_HEADER'
                        : 'APP.CONCIERGE.LOCKERS_BOOK_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="search | async"
                (modelChange)="setSearch($event)"
            ></searchbar>
            <div
                [matTooltip]="
                    ((options | async)?.zones?.length
                        ? ''
                        : 'APP.CONCIERGE.LOCKERS_LEVEL_SELECT'
                    ) | translate
                "
            >
                @if (path() === 'manage') {
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newLockerBank()"
                        [disabled]="!(options | async)?.zones?.length"
                    >
                        <div class="pl-4">
                            {{ 'APP.CONCIERGE.LOCKERS_BANK_ADD' | translate }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </button>
                }
            </div>
            @if (path() === 'events') {
                <button
                    btn
                    matRipple
                    class="w-48 space-x-2"
                    (click)="newBooking()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </button>
            }
        </div>
        <div class="bg-base-100 mb-2 flex h-14 items-center px-8">
            <mat-form-field appearance="outline" class="no-subscript w-56">
                <mat-select
                    [(ngModel)]="zones"
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
            <div class="w-0 flex-1"></div>
            @if (path() !== 'events' && path() !== 'map') {
                <button
                    icon
                    matRipple
                    class="border-error text-error mr-2 h-12 w-12 rounded-sm border"
                    (click)="releaseAllLockers()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_RELEASE_ALL' | translate
                    "
                >
                    <icon>open_in_new</icon>
                </button>
            }
            @if (path() !== 'events' && path() !== 'map') {
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="manageRestrictions()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_BOOKING_RULES' | translate
                    "
                >
                    <icon>lock_open</icon>
                </button>
            }
            @if (path() === 'events' || path() === 'map') {
                <date-options (dateChange)="setDate($event)"></date-options>
            }
        </div>
    `, imports: [
      CommonModule,
      DateOptionsComponent,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      SearchbarComponent,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;4bb26a1eb5035846e32fdbd8af6a308e831b6910e15ebdbaee0887184c668792;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/lockers/locker-topbar.component.ts */\nbutton {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=locker-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersTopbarComponent, { className: "LockersTopbarComponent", filePath: "apps/concierge/src/app/lockers/locker-topbar.component.ts", lineNumber: 172 });
})();

// apps/concierge/src/app/lockers/lockers.component.ts
var _c0 = ["app-new-lockers", ""];
function LockersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 5);
  }
}
var _LockersComponent = class _LockersComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LockerStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.loading = this._state.loading;
    this.path = signal("");
    this.filters = this._state.filters;
    this.levels = this._state.levels;
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (o) => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.rejectAll = () => this._state.rejectAllLockers();
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "locker" }
    });
  }
  _updatePath() {
    const parts = this._router.url?.split("/") || [""];
    this.path.set(parts[parts.length - 1].split("?")[0]);
  }
};
_LockersComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockersComponent_BaseFactory;
  return function LockersComponent_Factory(__ngFactoryType__) {
    return (\u0275LockersComponent_BaseFactory || (\u0275LockersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockersComponent)))(__ngFactoryType__ || _LockersComponent);
  };
})();
_LockersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersComponent, selectors: [["", "app-new-lockers", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 10, vars: 3, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "w-full"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "h-full", "w-full", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"]], template: function LockersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "lockers-topbar", 2);
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
    \u0275\u0275element(7, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, LockersComponent_Conditional_8_Template, 1, 0, "mat-progress-bar", 5);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 1, ctx.loading) && ctx.path() === "events" ? 8 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  LockersTopbarComponent,
  RouterModule,
  RouterOutlet,
  MatProgressBarModule,
  MatProgressBar
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=lockers.component.css.map */"] });
var LockersComponent = _LockersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersComponent, [{
    type: Component,
    args: [{ selector: "[app-new-lockers]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <lockers-topbar class="w-full"></lockers-topbar>
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <div class="h-full w-full overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                @if ((loading | async) && path() === 'events') {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      CommonModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      LockersTopbarComponent,
      RouterModule,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/lockers/lockers.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=lockers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersComponent, { className: "LockersComponent", filePath: "apps/concierge/src/app/lockers/lockers.component.ts", lineNumber: 61 });
})();

// apps/concierge/src/app/lockers/lockers.module.ts
var ROUTES = [
  {
    path: "",
    component: LockersComponent,
    children: [
      { path: "events", component: LockerBookingsComponent },
      { path: "manage", component: LockerListComponent },
      { path: "**", redirectTo: "events" }
    ]
  }
];
var _LockersModule = class _LockersModule {
};
_LockersModule.\u0275fac = function LockersModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersModule)();
};
_LockersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LockersModule });
_LockersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  LockersComponent,
  LockerBookingsComponent,
  LockerListComponent,
  RouterModule.forChild(ROUTES)
] });
var LockersModule = _LockersModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        LockersComponent,
        LockerBookingsComponent,
        LockerListComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  LockersModule
};
//# sourceMappingURL=lockers.module-BOU6L545.js.map
