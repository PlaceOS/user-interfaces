import {
  DateRangeFieldComponent
} from "./chunk-E7GHJWJV.js";
import {
  queryDeskAssetsForZones
} from "./chunk-3HGA2V4A.js";
import {
  queryParkingSpacesForZones
} from "./chunk-2Z4YN3BG.js";
import {
  BuildingPipe
} from "./chunk-KN24TXIB.js";
import {
  queryLockerAssetsForZones,
  queryLockerBankAssetsForZones
} from "./chunk-MEE7FNS5.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-EPT6QV6G.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-TZ5JUV4G.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-ZVSHIGFS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLTSGFYE.js";
import {
  MatOption
} from "./chunk-JQJNBBNN.js";
import {
  requestSpacesForZone
} from "./chunk-PJTOWFBM.js";
import {
  TranslatePipe
} from "./chunk-JCEMX2GO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-C5SFKFXB.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-DOLIX6FW.js";
import {
  AsyncHandler
} from "./chunk-ZBK6XVOU.js";
import {
  IconComponent
} from "./chunk-BSQA34BX.js";
import {
  endOfDay,
  fc,
  nextValueFrom,
  startOfDay
} from "./chunk-PYWAX25U.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-TFYF4ALL.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  input,
  output,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/reports-options.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReportsOptionsComponent_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, level_r3.parent_id)?.display_name, " ");
  }
}
function ReportsOptionsComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 12);
    \u0275\u0275conditionalCreate(2, ReportsOptionsComponent_Conditional_1_For_4_Conditional_2_Template, 5, 3, "div", 13);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r3.display_name || level_r3.name, " ");
  }
}
function ReportsOptionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 3)(1, "mat-select", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setZones($event));
    });
    \u0275\u0275repeaterCreate(3, ReportsOptionsComponent_Conditional_1_For_4_Template, 5, 3, "mat-option", 11, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.zones())("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.LEVEL_ALL"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function ReportsOptionsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ReportsOptionsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.REPORTS_GENERATE"), " ");
  }
}
var RESOURCE_LEVEL_CACHE_PREFIX = "concierge:reports:resource-level:";
var resource_level_cache = /* @__PURE__ */ new Map();
var ReportsOptionsComponent = class _ReportsOptionsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.loading = input(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_data = input(
      false,
      ...ngDevMode ? [{ debugName: "has_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_type = input(
      ...ngDevMode ? [void 0, { debugName: "resource_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_level_selector = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_level_selector" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.printing = output();
    this.generate = output();
    this.download = output();
    this.zones = signal(
      [],
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start = signal(
      startOfDay(Date.now()).getTime(),
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end = signal(
      endOfDay(Date.now()).getTime(),
      ...ngDevMode ? [{ debugName: "end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.types = [
      { id: "internal", name: "Internal" },
      { id: "external", name: "External" },
      { id: "cancelled", name: "Cancelled" }
    ];
    this.type_list = this.types.map((i) => `${i.id}`);
    this._levels = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_levels" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        bld: this._org.active_building(),
        region: this._org.active_region(),
        resource_type: this.resource_type()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        const { bld, region, resource_type } = params;
        const use_region = this._settings.get("app.use_region");
        const scope_id = use_region ? region?.id : bld?.id;
        const levels = use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
        return this._levelsWithResources(levels, resource_type, scope_id);
      }
    }));
    this.levels = computed(
      () => {
        if (this.resource_type() !== "parking" || !this._levels.isLoading()) {
          return this._levels.value();
        }
        const use_region = this._settings.get("app.use_region");
        const levels = use_region ? this._org.levelsForRegion(this._org.active_region()) : this._org.levelsForBuilding(this._org.active_building());
        return this._parkingLevels(levels);
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setStartDate = (date) => {
      if (date instanceof Date)
        date = date.valueOf();
      this.start.set(date);
      this._navigateToDates();
    };
    this.setEndDate = (date) => {
      if (date instanceof Date)
        date = date.valueOf();
      this.end.set(endOfDay(date).valueOf());
      this._navigateToDates();
    };
    this.setZones = (zones) => {
      this.zones.set(zones);
      const q = __spreadValues({}, this._route.snapshot.queryParams);
      q.zone_ids = zones.join(",");
      if (!q.zone_ids)
        delete q.zone_ids;
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: q
      });
    };
  }
  /**
   * Write both dates to the URL. The date field can change the start and
   * end in the same tick, and separate merges would each start from the
   * old URL, so the second would restore the old value.
   */
  _navigateToDates() {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { start: this.start(), end: this.end() },
      queryParamsHandling: "merge"
    });
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get week_start() {
    return this._settings.get("app.week_start");
  }
  async _levelsWithResources(levels, resource_type, scope_id) {
    if (!resource_type)
      return levels;
    if (resource_type === "parking") {
      levels = this._parkingLevels(levels);
    }
    if (!levels.length || !scope_id)
      return [];
    const resource_zones = await this._levelResourceZones(levels, resource_type, scope_id);
    const filtered_levels = levels.filter((level) => resource_zones.has(level.id));
    return resource_type === "parking" && !filtered_levels.length ? levels : filtered_levels;
  }
  _parkingLevels(levels) {
    return levels.filter((level) => level.tags?.includes("parking"));
  }
  _levelResourceZones(levels, resource_type, scope_id) {
    const desk_store = this._settings.get("app.desks.use_assets") ? "assets" : "metadata";
    const key = `${RESOURCE_LEVEL_CACHE_PREFIX}${resource_type}:${scope_id}:${desk_store}`;
    const cached = sessionStorage.getItem(key);
    if (cached !== null) {
      return Promise.resolve(new Set(JSON.parse(cached)));
    }
    if (!resource_level_cache.has(key)) {
      resource_level_cache.set(key, this._requestResourceZones(levels, resource_type, scope_id).then((zones) => {
        sessionStorage.setItem(key, JSON.stringify([...zones]));
        return zones;
      }).catch(() => /* @__PURE__ */ new Set()));
    }
    return resource_level_cache.get(key);
  }
  async _requestResourceZones(levels, resource_type, scope_id) {
    switch (resource_type) {
      case "desks": {
        if (this._settings.get("app.desks.use_assets")) {
          const desks = await queryDeskAssetsForZones([scope_id]);
          return this._zonesForResources(desks.filter((desk) => desk.bookable));
        }
        const list = await fc(scope_id, {
          name: "desks"
        });
        const zones = /* @__PURE__ */ new Set();
        for (const meta of list) {
          const details = meta.metadata?.desks?.details;
          if (details instanceof Array && details.some((desk) => desk.bookable)) {
            if (meta.zone?.id)
              zones.add(meta.zone.id);
          }
        }
        return zones;
      }
      case "events":
      case "catering": {
        const spaces = await nextValueFrom(requestSpacesForZone(scope_id));
        return this._zonesForResources(spaces);
      }
      case "parking": {
        const spaces = await queryParkingSpacesForZones([scope_id]);
        return this._zonesForResources(spaces);
      }
      case "lockers": {
        const [banks, lockers] = await Promise.all([
          queryLockerBankAssetsForZones([scope_id]),
          queryLockerAssetsForZones([scope_id])
        ]);
        const zones = /* @__PURE__ */ new Set();
        const bookable_bank_ids = new Set(lockers.filter((locker) => locker.bookable !== false).map((locker) => locker.parent_id));
        banks.filter((bank) => bookable_bank_ids.has(bank.id)).forEach((bank) => (bank.zones || []).forEach((zone) => zones.add(zone)));
        return zones;
      }
      default:
        return new Set(levels.map((level) => level.id));
    }
  }
  _zonesForResources(resources) {
    const zones = /* @__PURE__ */ new Set();
    for (const resource2 of resources || []) {
      for (const zone of resource2.zones || [])
        zones.add(zone);
    }
    return zones;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      const zones = params.get("zone_ids")?.split(",") || [];
      const level = zones.length ? this._org.levelWithID(zones) : null;
      if (level) {
        this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
        this.zones.set(zones);
      }
      if (params.has("start"))
        this.start.set(+params.get("start"));
      if (params.has("end"))
        this.end.set(+params.get("end"));
    }));
  }
  print() {
    this.printing.emit(true);
    setTimeout(() => {
      window.print();
      this.printing.emit(false);
    }, 300);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ReportsOptionsComponent_BaseFactory;
      return function ReportsOptionsComponent_Factory(__ngFactoryType__) {
        return (\u0275ReportsOptionsComponent_BaseFactory || (\u0275ReportsOptionsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ReportsOptionsComponent)))(__ngFactoryType__ || _ReportsOptionsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsOptionsComponent, selectors: [["reports-options"]], inputs: { loading: [1, "loading"], has_data: [1, "has_data"], resource_type: [1, "resource_type"], hide_level_selector: [1, "hide_level_selector"] }, outputs: { printing: "printing", generate: "generate", download: "download" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 16, consts: [["startDate", ""], ["endDate", ""], [1, "border-base-200", "bg-base-100", "z-20", "flex", "h-20", "w-full", "items-center", "space-x-2", "border-b", "p-4", "print:hidden"], ["appearance", "outline", 1, "no-subscript", "w-60"], [3, "week_start", "from"], [3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [3, "diameter"], [1, "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "disabled", "matTooltip"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function ReportsOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275conditionalCreate(1, ReportsOptionsComponent_Conditional_1_Template, 5, 4, "mat-form-field", 3);
        \u0275\u0275elementStart(2, "date-range-field", 4)(3, "input", 5, 0);
        \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Template_input_ngModelChange_3_listener($event) {
          return $event ? ctx.setStartDate($event) : "";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(5, "input", 5, 1);
        \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Template_input_ngModelChange_5_listener($event) {
          return $event ? ctx.setEndDate($event) : "";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_7_listener() {
          return ctx.generate.emit();
        });
        \u0275\u0275conditionalCreate(8, ReportsOptionsComponent_Conditional_8_Template, 1, 1, "mat-spinner", 7);
        \u0275\u0275conditionalCreate(9, ReportsOptionsComponent_Conditional_9_Template, 3, 3, "p");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "div", 8);
        \u0275\u0275elementStart(11, "button", 9);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_11_listener() {
          return ctx.download.emit();
        });
        \u0275\u0275elementStart(13, "icon");
        \u0275\u0275text(14, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 9);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_15_listener() {
          return ctx.print();
        });
        \u0275\u0275elementStart(17, "icon");
        \u0275\u0275text(18, "print");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_level_selector() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("week_start", ctx.week_start)("from", 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.start());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.end());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !!ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.has_data())("matTooltip", \u0275\u0275pipeBind1(12, 12, "APP.CONCIERGE.REPORTS_DOWNLOAD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.has_data())("matTooltip", \u0275\u0275pipeBind1(16, 14, "APP.CONCIERGE.REPORTS_PRINT"));
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      DateRangeFieldComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      TranslatePipe,
      BuildingPipe
    ], styles: ["\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nbutton[icon][disabled][_ngcontent-%COMP%] {\n  background-color: var(--%NS%neutral) !important;\n}\nmat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 5.5em;\n  white-space: initial;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=reports-options.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsOptionsComponent, [{
    type: Component,
    args: [{ selector: "reports-options", template: `
        <div
            class="border-base-200 bg-base-100 z-20 flex h-20 w-full items-center space-x-2 border-b p-4 print:hidden"
        >
            @if (!hide_level_selector()) {
                <mat-form-field appearance="outline" class="no-subscript w-60">
                    <mat-select
                        [ngModel]="zones()"
                        (ngModelChange)="setZones($event)"
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        multiple
                    >
                        @for (level of levels(); track level.id) {
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
            }
            <date-range-field [week_start]="week_start" [from]="0">
                <input
                    #startDate
                    [ngModel]="start()"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="end()"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                />
            </date-range-field>
            <button
                btn
                matRipple
                [disabled]="!!loading()"
                (click)="generate.emit()"
            >
                @if (loading()) {
                    <mat-spinner [diameter]="32"></mat-spinner>
                }
                @if (!loading()) {
                    <p>
                        {{ 'APP.CONCIERGE.REPORTS_GENERATE' | translate }}
                    </p>
                }
            </button>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!has_data()"
                [matTooltip]="'APP.CONCIERGE.REPORTS_DOWNLOAD' | translate"
                (click)="download.emit()"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!has_data()"
                [matTooltip]="'APP.CONCIERGE.REPORTS_PRINT' | translate"
                (click)="print()"
            >
                <icon>print</icon>
            </button>
        </div>
    `, imports: [
      MatFormFieldModule,
      MatSelectModule,
      DateRangeFieldComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      FormsModule,
      IconComponent,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;5beef9fc17361dba7103fc63eb6b8000bb9bd367cf9540d850dd274e91b56384;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/reports-options.component.ts */\nbutton {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nbutton[icon][disabled] {\n  background-color: var(--neutral) !important;\n}\nmat-slide-toggle div {\n  width: 5.5em;\n  white-space: initial;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=reports-options.component.css.map */\n"] }]
  }], null, { loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], has_data: [{ type: Input, args: [{ isSignal: true, alias: "has_data", required: false }] }], resource_type: [{ type: Input, args: [{ isSignal: true, alias: "resource_type", required: false }] }], hide_level_selector: [{ type: Input, args: [{ isSignal: true, alias: "hide_level_selector", required: false }] }], printing: [{ type: Output, args: ["printing"] }], generate: [{ type: Output, args: ["generate"] }], download: [{ type: Output, args: ["download"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsOptionsComponent, { className: "ReportsOptionsComponent", filePath: "apps/concierge/src/app/reports/reports-options.component.ts", lineNumber: 165 });
})();

export {
  ReportsOptionsComponent
};
//# debugId=d7c3d3f7-ff84-56dc-8228-d7ba055f25a1
//# sourceMappingURL=chunk-BLW6B2VU.js.map
