import {
  GuestListingComponent,
  InviteVisitorModalComponent,
  VisitorsStateService
} from "./chunk-RXDXL6XM.js";
import "./chunk-CMVPSXBK.js";
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
  AsyncPipe,
  CommonModule,
  Component,
  FormsModule,
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
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterModule,
  SettingsService,
  TranslatePipe,
  combineLatest,
  inject,
  map,
  nextValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-I4HSLPYT.js";

// apps/concierge/src/app/visitors/visitors.component.ts
var _c0 = ["app-new-visitors", ""];
function VisitorsComponent_For_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 17);
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
function VisitorsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 15);
    \u0275\u0275conditionalCreate(2, VisitorsComponent_For_20_Conditional_2_Template, 5, 3, "div", 16);
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
function VisitorsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 14);
  }
}
var _VisitorsComponent = class _VisitorsComponent {
  constructor() {
    this._state = inject(VisitorsStateService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    this.zones = [];
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (filters) => this._state.setFilters(filters);
    this.setSearch = (str) => this._state.setSearchString(str);
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
  async inviteVisitor() {
    this._dialog.open(InviteVisitorModalComponent, {
      data: {
        date: await nextValueFrom(this._state.filters.pipe(map((f) => f.date || Date.now())))
      }
    });
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
};
_VisitorsComponent.\u0275fac = function VisitorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsComponent)();
};
_VisitorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsComponent, selectors: [["", "app-new-visitors", ""]], attrs: _c0, decls: 28, vars: 17, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "flex", "items-center", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "dateChange"], [1, "mx-8", "h-1/2", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function VisitorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-topbar", 0);
    \u0275\u0275text(1, ">");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275element(3, "app-sidebar");
    \u0275\u0275elementStart(4, "main", 2)(5, "div", 3)(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "searchbar", 6);
    \u0275\u0275listener("modelChange", function VisitorsComponent_Template_searchbar_modelChange_10_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function VisitorsComponent_Template_button_click_11_listener() {
      return ctx.inviteVisitor();
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "mat-form-field", 9)(16, "mat-select", 10);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("ngModelChange", function VisitorsComponent_Template_mat_select_ngModelChange_16_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(19, VisitorsComponent_For_20_Template, 5, 3, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 5);
    \u0275\u0275elementStart(23, "date-options", 12);
    \u0275\u0275listener("dateChange", function VisitorsComponent_Template_date_options_dateChange_23_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275element(25, "guest-listings");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, VisitorsComponent_Conditional_26_Template, 1, 0, "mat-progress-bar", 14);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "BOOKINGS.VISITOR_INVITE_TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(17, 9, ctx.filters)) == null ? null : tmp_2_0.zones)("placeholder", \u0275\u0275pipeBind1(18, 11, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 13, ctx.levels));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(27, 15, ctx.loading) ? 26 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressBarModule,
  MatProgressBar,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  DateOptionsComponent,
  GuestListingComponent,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  SearchbarComponent,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=visitors.component.css.map */"] });
var VisitorsComponent = _VisitorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsComponent, [{
    type: Component,
    args: [{ selector: "[app-new-visitors]", template: `
        <app-topbar class="print:hidden">></app-topbar>
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex items-center space-x-2 px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{ 'RESOURCE.VISITORS' | translate }}
                    </h2>
                    <div class="w-2 flex-1"></div>
                    <searchbar
                        class="mr-2"
                        (modelChange)="setSearch($event)"
                    ></searchbar>
                    <button
                        btn
                        matRipple
                        class="w-40"
                        (click)="inviteVisitor()"
                    >
                        {{ 'BOOKINGS.VISITOR_INVITE_TITLE' | translate }}
                    </button>
                </div>
                <div class="flex items-center px-8 pb-4">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="(filters | async)?.zones"
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
                    <div class="w-2 flex-1"></div>
                    <date-options (dateChange)="setDate($event)"></date-options>
                </div>
                <div class="mx-8 h-1/2 flex-1 overflow-auto">
                    <guest-listings></guest-listings>
                </div>
                @if (loading | async) {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatSelectModule,
      DateOptionsComponent,
      GuestListingComponent,
      FormsModule,
      MatRippleModule,
      SearchbarComponent,
      ApplicationSidebarComponent,
      ApplicationTopbarComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/visitors/visitors.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=visitors.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsComponent, { className: "VisitorsComponent", filePath: "apps/concierge/src/app/visitors/visitors.component.ts", lineNumber: 127 });
})();

// apps/concierge/src/app/visitors/visitors.module.ts
var ROUTES = [{ path: "", component: VisitorsComponent }];
var _VisitorsModule = class _VisitorsModule {
};
_VisitorsModule.\u0275fac = function VisitorsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsModule)();
};
_VisitorsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitorsModule });
_VisitorsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [VisitorsComponent, RouterModule.forChild(ROUTES)] });
var VisitorsModule = _VisitorsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [VisitorsComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  VisitorsModule
};
//# sourceMappingURL=visitors.module-GAO2FYAT.js.map
