import {
  AddColleaguesModalComponent,
  TeamScheduleService,
  USER_LOCATIONS
} from "./chunk-3W7GH3SR.js";
import "./chunk-KTRXRIOF.js";
import {
  AutoAssignedDeskModalComponent
} from "./chunk-TDFENCSL.js";
import "./chunk-D6RI74QI.js";
import "./chunk-SWGDBPVT.js";
import {
  VirtualConciergeButtonComponent
} from "./chunk-LUIPEHT2.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-IY4LPDTW.js";
import "./chunk-UODLNYTJ.js";
import "./chunk-2GRBD76Z.js";
import "./chunk-H2DZYM74.js";
import "./chunk-HHH2GUUY.js";
import "./chunk-MZN7WG5R.js";
import "./chunk-6GIBONXV.js";
import "./chunk-TC3NM2KE.js";
import "./chunk-HEWP2W5O.js";
import {
  UserAvatarComponent
} from "./chunk-D3VYGJ6G.js";
import "./chunk-RVKWVUYC.js";
import "./chunk-U66A4PGJ.js";
import "./chunk-I3OEOK2P.js";
import {
  BookingFormService
} from "./chunk-56C27J3X.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule
} from "./chunk-IVWYWRG7.js";
import {
  MatDialog
} from "./chunk-YEF7L372.js";
import "./chunk-2QAVTKHL.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix
} from "./chunk-GBEZ2XD5.js";
import "./chunk-N4IXGM4A.js";
import "./chunk-DVFRHLZI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-I5IZZO3Z.js";
import {
  MatOption
} from "./chunk-AFTIF56Q.js";
import "./chunk-5XMRXOYP.js";
import "./chunk-CRZDCPNP.js";
import "./chunk-7VF5TD5Y.js";
import {
  TranslatePipe
} from "./chunk-VZSWYXPT.js";
import "./chunk-IB6WR7JO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JZU6NIMO.js";
import {
  currentUser,
  settingSignal
} from "./chunk-KTADYPHH.js";
import {
  IconComponent
} from "./chunk-3ZDLFGP6.js";
import {
  AsyncHandler
} from "./chunk-2FYBYRLM.js";
import "./chunk-LSVIIU5S.js";
import "./chunk-3E4LH6FR.js";
import "./chunk-CL7UDZVD.js";
import "./chunk-FFDIHN6G.js";
import "./chunk-CENZX4JC.js";
import "./chunk-WWAEQFU7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-ZTX66HDZ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  NgClass,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-6OEACKVR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/team-schedule/team-quick-actions.component.ts
function TeamQuickActionsComponent_Conditional_0_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" (", ctx_r1.selected_count(), ") ");
  }
}
function TeamQuickActionsComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275conditionalCreate(3, TeamQuickActionsComponent_Conditional_0_Conditional_24_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.WORKPLACE.TEAM_BOOK_SELECTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selected_count() > 0 ? 3 : -1);
  }
}
function TeamQuickActionsComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.TEAM_BOOK_TEAM"), " ");
  }
}
function TeamQuickActionsComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.CLEAR"));
  }
}
function TeamQuickActionsComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.TEAM_SELECT_COLLEAGUES"), " ");
  }
}
function TeamQuickActionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "div", 3);
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "icon");
    \u0275\u0275text(9, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div")(14, "h3", 6);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 5);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 7)(21, "button", 8);
    \u0275\u0275listener("click", function TeamQuickActionsComponent_Conditional_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bookForGroup());
    });
    \u0275\u0275elementStart(22, "icon", 9);
    \u0275\u0275text(23, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, TeamQuickActionsComponent_Conditional_0_Conditional_24_Template, 4, 4, "div")(25, TeamQuickActionsComponent_Conditional_0_Conditional_25_Template, 3, 3, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 10);
    \u0275\u0275listener("click", function TeamQuickActionsComponent_Conditional_0_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectMode());
    });
    \u0275\u0275conditionalCreate(27, TeamQuickActionsComponent_Conditional_0_Conditional_27_Template, 5, 3)(28, TeamQuickActionsComponent_Conditional_0_Conditional_28_Template, 5, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "APP.WORKPLACE.TEAM_QUICK_ACTION"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "APP.WORKPLACE.TEAM_SMART_SELECTION"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "APP.WORKPLACE.TEAM_GROUP_DESKS_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 13, "APP.WORKPLACE.TEAM_GROUP_DESKS_HINT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.select_mode() && ctx_r1.selected_count() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.select_mode() ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.select_mode() ? 27 : 28);
  }
}
var TeamQuickActionsComponent = class _TeamQuickActionsComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this._booking_form = inject(BookingFormService);
    this._service = inject(TeamScheduleService);
    this.features = settingSignal("features", []);
    this.select_mode = this._service.select_mode;
    this.selected_count = this._service.selected_count;
  }
  toggleSelectMode() {
    if (this._service.select_mode()) {
      this._service.clearSelection();
    } else {
      this._service.toggleSelectMode();
    }
  }
  bookForGroup() {
    let members;
    if (this._service.select_mode() && this._service.selected_count() > 0) {
      members = this._service.selected_members().map((m) => m.user);
    } else {
      members = this._service.getTeamMembers().map((m) => m.user);
    }
    const current = currentUser();
    if (!members.find((m) => m.email === current.email)) {
      members = [current, ...members];
    }
    this._service.clearSelection();
    this._booking_form.setOptions({
      type: "desk",
      group: true,
      members
    });
    this._router.navigate(["/book", "desks"]);
  }
  static {
    this.\u0275fac = function TeamQuickActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamQuickActionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamQuickActionsComponent, selectors: [["team-quick-actions"]], decls: 1, vars: 1, consts: [[1, "bg-grad", "border-base-300", "relative", "mx-auto", "mb-4", "w-full", "max-w-full", "space-y-2", "rounded-xl", "border", "p-4", "text-white", "shadow"], [1, "flex", "items-center", "justify-between", "pb-2"], [1, "relative", "overflow-hidden", "rounded", "px-2", "py-1", "text-sm", "capitalize"], [1, "bg-brand-content", "absolute", "inset-0", "opacity-20"], [1, "flex", "items-center", "space-x-2"], [1, "text-sm"], [1, "mb-1", "text-2xl", "font-medium"], [1, "flex", "flex-col", "items-center", "space-y-2", "pt-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-4"], ["btn", "", "matRipple", "", 1, "white", "w-full", "flex-1", "space-x-2", 3, "click", "disabled"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "inverse", "white", "w-full", "flex-1", "space-x-2", 3, "click"]], template: function TeamQuickActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, TeamQuickActionsComponent_Conditional_0_Template, 29, 15, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.features().includes("desks") ? 0 : -1);
      }
    }, dependencies: [IconComponent, TranslatePipe], styles: ["\n.bg-grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--%NS%brand-100) 0%,\n      var(--%NS%brand-200) 100%);\n}\n/*# sourceMappingURL=team-quick-actions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamQuickActionsComponent, [{
    type: Component,
    args: [{ selector: "team-quick-actions", template: `
        @if (features().includes('desks')) {
            <div
                class="bg-grad border-base-300 relative mx-auto mb-4 w-full max-w-full space-y-2 rounded-xl border p-4 text-white shadow"
            >
                <div class="flex items-center justify-between pb-2">
                    <div
                        class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                    >
                        <div
                            class="bg-brand-content absolute inset-0 opacity-20"
                        ></div>
                        <div>
                            {{ 'APP.WORKPLACE.TEAM_QUICK_ACTION' | translate }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>auto_awesome</icon>
                        <div class="text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SMART_SELECTION' | translate
                            }}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="mb-1 text-2xl font-medium">
                        {{ 'APP.WORKPLACE.TEAM_GROUP_DESKS_TITLE' | translate }}
                    </h3>
                    <p class="text-sm">
                        {{ 'APP.WORKPLACE.TEAM_GROUP_DESKS_HINT' | translate }}
                    </p>
                </div>
                <div
                    class="flex flex-col items-center space-y-2 pt-2 sm:flex-row sm:space-y-0 sm:space-x-4"
                >
                    <button
                        btn
                        matRipple
                        class="white w-full flex-1 space-x-2"
                        [disabled]="select_mode() && selected_count() === 0"
                        (click)="bookForGroup()"
                    >
                        <icon class="text-2xl">bolt</icon>
                        @if (select_mode()) {
                            <div>
                                {{
                                    'APP.WORKPLACE.TEAM_BOOK_SELECTED'
                                        | translate
                                }}
                                @if (selected_count() > 0) {
                                    ({{ selected_count() }})
                                }
                            </div>
                        } @else {
                            <div>
                                {{ 'APP.WORKPLACE.TEAM_BOOK_TEAM' | translate }}
                            </div>
                        }
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse white w-full flex-1 space-x-2"
                        (click)="toggleSelectMode()"
                    >
                        @if (select_mode()) {
                            <icon class="text-2xl">close</icon>
                            <div>{{ 'COMMON.CLEAR' | translate }}</div>
                        } @else {
                            <icon class="text-2xl">group_add</icon>
                            <div>
                                {{
                                    'APP.WORKPLACE.TEAM_SELECT_COLLEAGUES'
                                        | translate
                                }}
                            </div>
                        }
                    </button>
                </div>
            </div>
        }
    `, imports: [IconComponent, TranslatePipe], styles: ["/* angular:styles/component:css;c8abda7309ed85adf85fe922798ae661c676d08c3d0155d4e4eb34a85f1a66c1;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/team-schedule/team-quick-actions.component.ts */\n.bg-grad {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=team-quick-actions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamQuickActionsComponent, { className: "TeamQuickActionsComponent", filePath: "apps/workplace/src/app/team-schedule/team-quick-actions.component.ts", lineNumber: 107 });
})();

// apps/workplace/src/app/team-schedule/team-schedule-filters.component.ts
var _c0 = () => [];
var _c1 = () => ({ view: "all" });
var _c2 = () => ({ view: "favorites" });
var _c3 = () => ({ view: "team" });
function TeamScheduleFiltersComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r1 = ctx.$implicit;
    \u0275\u0275property("value", dept_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r1);
  }
}
function TeamScheduleFiltersComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const office_r2 = ctx.$implicit;
    \u0275\u0275property("value", office_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(office_r2);
  }
}
function TeamScheduleFiltersComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", status_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r3.user_locations[status_r3].name));
  }
}
var TeamScheduleFiltersComponent = class _TeamScheduleFiltersComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._service = inject(TeamScheduleService);
    this.user_locations = USER_LOCATIONS;
    this.filters = this._service.filters;
    this.departments = this._service.departments;
    this.offices = this._service.offices;
    this.statuses = this._service.statuses;
  }
  // Actions
  setFilters(filters) {
    this._service.setFilters(filters);
  }
  previousWeek() {
    this._service.previousWeek();
  }
  nextWeek() {
    this._service.nextWeek();
  }
  resetToToday() {
    this._service.setFilters({ date: Date.now(), day_index: -1 });
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("view")) {
        this._service.setFilters({
          view: params.get("view")
        });
      }
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275TeamScheduleFiltersComponent_BaseFactory;
      return function TeamScheduleFiltersComponent_Factory(__ngFactoryType__) {
        return (\u0275TeamScheduleFiltersComponent_BaseFactory || (\u0275TeamScheduleFiltersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TeamScheduleFiltersComponent)))(__ngFactoryType__ || _TeamScheduleFiltersComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamScheduleFiltersComponent, selectors: [["team-schedule-filters"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 66, vars: 73, consts: [[1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "justify-between", "gap-2", "sm:flex-row", "sm:flex-wrap"], ["view", "", 1, "border-base-300", "bg-base-200", "flex", "w-full", "gap-1", "rounded-xl", "border", "p-1", "sm:w-auto"], ["btn", "", "matRipple", "", 1, "hover:bg-base-300", "min-h-10", "flex-1", "gap-2", "whitespace-nowrap", 3, "click", "routerLink", "queryParams"], [1, "text-xl"], [1, "hidden", "sm:block"], [1, "flex", "flex-wrap", "gap-2", "sm:flex-nowrap"], ["appearance", "outline", 1, "no-subscript", "w-full", "sm:w-auto", "sm:min-w-64", "sm:flex-0"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-12", "w-28", 3, "click"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-12", "min-w-12", "p-0", 3, "click"], [1, "text-2xl"], [1, "flex", "flex-wrap", "gap-2"], ["appearance", "outline", 1, "no-subscript", "min-w-48", "flex-1", "sm:flex-0"], [3, "ngModelChange", "placeholder", "ngModel"], [3, "value"]], template: function TeamScheduleFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_a_click_3_listener() {
          return ctx.setFilters({ view: "all" });
        });
        \u0275\u0275elementStart(5, "icon", 4);
        \u0275\u0275text(6, "groups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "a", 3);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_a_click_10_listener() {
          return ctx.setFilters({ view: "favorites" });
        });
        \u0275\u0275elementStart(12, "icon", 4);
        \u0275\u0275text(13, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 5);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "a", 3);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_a_click_17_listener() {
          return ctx.setFilters({ view: "team" });
        });
        \u0275\u0275elementStart(19, "icon", 4);
        \u0275\u0275text(20, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 5);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 6)(25, "mat-form-field", 7)(26, "icon", 8);
        \u0275\u0275text(27, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275listener("ngModelChange", function TeamScheduleFiltersComponent_Template_input_ngModelChange_28_listener($event) {
          return ctx.setFilters({ search: $event });
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 10);
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_button_click_30_listener() {
          return ctx.resetToToday();
        });
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 11);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_button_click_33_listener() {
          return ctx.previousWeek();
        });
        \u0275\u0275elementStart(35, "icon", 12);
        \u0275\u0275text(36, "keyboard_arrow_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "button", 11);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_button_click_37_listener() {
          return ctx.nextWeek();
        });
        \u0275\u0275elementStart(39, "icon", 12);
        \u0275\u0275text(40, "keyboard_arrow_right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 13)(42, "mat-form-field", 14)(43, "mat-select", 15);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275listener("ngModelChange", function TeamScheduleFiltersComponent_Template_mat_select_ngModelChange_43_listener($event) {
          return ctx.setFilters({ department: $event });
        });
        \u0275\u0275elementStart(45, "mat-option", 16);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(48, TeamScheduleFiltersComponent_For_49_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-form-field", 14)(51, "mat-select", 15);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275listener("ngModelChange", function TeamScheduleFiltersComponent_Template_mat_select_ngModelChange_51_listener($event) {
          return ctx.setFilters({ office: $event });
        });
        \u0275\u0275elementStart(53, "mat-option", 16);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(56, TeamScheduleFiltersComponent_For_57_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-form-field", 14)(59, "mat-select", 15);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275listener("ngModelChange", function TeamScheduleFiltersComponent_Template_mat_select_ngModelChange_59_listener($event) {
          return ctx.setFilters({ status: $event });
        });
        \u0275\u0275elementStart(61, "mat-option", 16);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(64, TeamScheduleFiltersComponent_For_65_Template, 3, 4, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classProp("clear", ctx.filters().view !== "all");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(67, _c0))("queryParams", \u0275\u0275pureFunction0(68, _c1));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 35, "COMMON.ALL_COLLEAGUES"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 37, "COMMON.ALL_COLLEAGUES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("clear", ctx.filters().view !== "favorites");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(69, _c0))("queryParams", \u0275\u0275pureFunction0(70, _c2));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 39, "COMMON.FAVOURITES"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 41, "COMMON.FAVOURITES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("clear", ctx.filters().view !== "team");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(71, _c0))("queryParams", \u0275\u0275pureFunction0(72, _c3));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 43, "COMMON.MY_TEAM"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 45, "COMMON.MY_TEAM"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 47, "COMMON.SEARCH"))("ngModel", ctx.filters().search);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 49, "COMMON.TODAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 51, "APP.WORKPLACE.DESK_WEEK_PREVIOUS"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 53, "APP.WORKPLACE.DESK_WEEK_NEXT"));
        \u0275\u0275advance(6);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(44, 55, "COMMON.ALL_DEPARTMENTS"))("ngModel", ctx.filters().department);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 57, "COMMON.ALL_DEPARTMENTS"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.departments());
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(52, 59, "COMMON.ALL_OFFICES"))("ngModel", ctx.filters().office);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 61, "COMMON.ALL_OFFICES"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.offices());
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(60, 63, "COMMON.ALL_STATUSES"))("ngModel", ctx.filters().status);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 65, "COMMON.ALL_STATUSES"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.statuses());
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], styles: ["\na[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n/*# sourceMappingURL=team-schedule-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamScheduleFiltersComponent, [{
    type: Component,
    args: [{ selector: "team-schedule-filters", template: `
        <div class="flex flex-col gap-4">
            <div
                class="flex flex-col justify-between gap-2 sm:flex-row sm:flex-wrap"
            >
                <div
                    view
                    class="border-base-300 bg-base-200 flex w-full gap-1 rounded-xl border p-1 sm:w-auto"
                >
                    <a
                        btn
                        matRipple
                        class="hover:bg-base-300 min-h-10 flex-1 gap-2 whitespace-nowrap"
                        [class.clear]="filters().view !== 'all'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'all' }"
                        [attr.aria-label]="'COMMON.ALL_COLLEAGUES' | translate"
                        (click)="setFilters({ view: 'all' })"
                    >
                        <icon class="text-xl">groups</icon>
                        <div class="hidden sm:block">
                            {{ 'COMMON.ALL_COLLEAGUES' | translate }}
                        </div>
                    </a>
                    <a
                        btn
                        matRipple
                        class="hover:bg-base-300 min-h-10 flex-1 gap-2 whitespace-nowrap"
                        [class.clear]="filters().view !== 'favorites'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'favorites' }"
                        [attr.aria-label]="'COMMON.FAVOURITES' | translate"
                        (click)="setFilters({ view: 'favorites' })"
                    >
                        <icon class="text-xl">star</icon>
                        <div class="hidden sm:block">
                            {{ 'COMMON.FAVOURITES' | translate }}
                        </div>
                    </a>
                    <a
                        btn
                        matRipple
                        class="hover:bg-base-300 min-h-10 flex-1 gap-2 whitespace-nowrap"
                        [class.clear]="filters().view !== 'team'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'team' }"
                        [attr.aria-label]="'COMMON.MY_TEAM' | translate"
                        (click)="setFilters({ view: 'team' })"
                    >
                        <icon class="text-xl">person</icon>
                        <div class="hidden sm:block">
                            {{ 'COMMON.MY_TEAM' | translate }}
                        </div>
                    </a>
                </div>
                <div class="flex flex-wrap gap-2 sm:flex-nowrap">
                    <!-- The search has its own line on small screens -->
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full sm:w-auto sm:min-w-64 sm:flex-0"
                    >
                        <icon matPrefix class="relative -left-1 text-2xl"
                            >search</icon
                        >
                        <input
                            matInput
                            [placeholder]="'COMMON.SEARCH' | translate"
                            [ngModel]="filters().search"
                            (ngModelChange)="setFilters({ search: $event })"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 w-28"
                        (click)="resetToToday()"
                    >
                        {{ 'COMMON.TODAY' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 min-w-12 p-0"
                        [attr.aria-label]="
                            'APP.WORKPLACE.DESK_WEEK_PREVIOUS' | translate
                        "
                        (click)="previousWeek()"
                    >
                        <icon class="text-2xl">keyboard_arrow_left</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 min-w-12 p-0"
                        [attr.aria-label]="
                            'APP.WORKPLACE.DESK_WEEK_NEXT' | translate
                        "
                        (click)="nextWeek()"
                    >
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </button>
                </div>
            </div>
            <div class="flex flex-wrap gap-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript min-w-48 flex-1 sm:flex-0"
                >
                    <mat-select
                        [placeholder]="'COMMON.ALL_DEPARTMENTS' | translate"
                        [ngModel]="filters().department"
                        (ngModelChange)="setFilters({ department: $event })"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_DEPARTMENTS' | translate
                        }}</mat-option>
                        @for (dept of departments(); track dept) {
                            <mat-option [value]="dept">{{ dept }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript min-w-48 flex-1 sm:flex-0"
                >
                    <mat-select
                        [placeholder]="'COMMON.ALL_OFFICES' | translate"
                        [ngModel]="filters().office"
                        (ngModelChange)="setFilters({ office: $event })"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_OFFICES' | translate
                        }}</mat-option>
                        @for (office of offices(); track office) {
                            <mat-option [value]="office">{{
                                office
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript min-w-48 flex-1 sm:flex-0"
                >
                    <mat-select
                        [placeholder]="'COMMON.ALL_STATUSES' | translate"
                        [ngModel]="filters().status"
                        (ngModelChange)="setFilters({ status: $event })"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_STATUSES' | translate
                        }}</mat-option>
                        @for (status of statuses(); track status) {
                            <mat-option [value]="status">{{
                                user_locations[status].name | translate
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
    `, imports: [
      TranslatePipe,
      RouterModule,
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;974d8768d742f82c9f682e567eb1bd700c64d7d4ccd2535e21c67ffe395b0112;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/team-schedule/team-schedule-filters.component.ts */\na {\n  border-width: 1px;\n}\n/*# sourceMappingURL=team-schedule-filters.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamScheduleFiltersComponent, { className: "TeamScheduleFiltersComponent", filePath: "apps/workplace/src/app/team-schedule/team-schedule-filters.component.ts", lineNumber: 197 });
})();

// apps/workplace/src/app/team-schedule/team-schedule-list.component.ts
var _c02 = (a0) => ({ "bg-primary/10": a0 });
var _c12 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.user.id;
function TeamScheduleListComponent_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function TeamScheduleListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_2_Template_button_click_0_listener() {
      const \u0275$index_3_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDayIndex(\u0275$index_3_r2));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TeamScheduleListComponent_For_2_Conditional_7_Template, 3, 3, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const \u0275$index_3_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-b-transparent", ctx_r2.active_day_index() !== \u0275$index_3_r2)("border-b-primary", ctx_r2.active_day_index() === \u0275$index_3_r2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c02, ctx_r2.active_day_index() === \u0275$index_3_r2));
    \u0275\u0275advance();
    \u0275\u0275classProp("font-medium", day_r4.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 10, day_r4.date, "EEE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 13, day_r4.date, "MMM d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r4.is_today ? 7 : -1);
  }
}
function TeamScheduleListComponent_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 20);
    \u0275\u0275text(1, "check_box");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleListComponent_For_5_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 21);
    \u0275\u0275text(1, "check_box_outline_blank");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleListComponent_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "button", 19);
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_5_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const member_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMemberSelection(member_r7));
    });
    \u0275\u0275conditionalCreate(3, TeamScheduleListComponent_For_5_Conditional_1_Conditional_3_Template, 2, 0, "icon", 20)(4, TeamScheduleListComponent_For_5_Conditional_1_Conditional_4_Template, 2, 0, "icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    const select_label_r8 = \u0275\u0275pipeBind2(1, 4, ctx_r2.isMemberSelected(member_r7) ? "APP.WORKPLACE.TEAM_SCHEDULE_DESELECT" : "APP.WORKPLACE.TEAM_SCHEDULE_SELECT", \u0275\u0275pureFunction1(7, _c12, member_r7.user.name));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", select_label_r8);
    \u0275\u0275attribute("aria-label", select_label_r8)("aria-pressed", ctx_r2.isMemberSelected(member_r7));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isMemberSelected(member_r7) ? 3 : 4);
  }
}
function TeamScheduleListComponent_For_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleListComponent_For_5_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 21);
    \u0275\u0275text(1, "star_outline");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleListComponent_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "button", 19);
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_5_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const member_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavorite(member_r7));
    });
    \u0275\u0275conditionalCreate(3, TeamScheduleListComponent_For_5_Conditional_2_Conditional_3_Template, 2, 0, "icon", 22)(4, TeamScheduleListComponent_For_5_Conditional_2_Conditional_4_Template, 2, 0, "icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r7 = \u0275\u0275nextContext().$implicit;
    const favourite_label_r10 = \u0275\u0275pipeBind1(1, 3, member_r7.is_favorite ? "COMMON.FAVOURITES_REMOVE" : "COMMON.FAVOURITES_ADD");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", favourite_label_r10);
    \u0275\u0275attribute("aria-label", favourite_label_r10);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r7.is_favorite ? 3 : 4);
  }
}
function TeamScheduleListComponent_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.MY_TEAM"), " ");
  }
}
function TeamScheduleListComponent_For_5_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_5_Conditional_11_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const member_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookNearby(member_r7));
    });
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "icon", 28);
    \u0275\u0275text(6, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 27)(10, "icon", 30);
    \u0275\u0275text(11, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r12 = \u0275\u0275nextContext();
    const is_past_r13 = \u0275\u0275readContextLet(0);
    const status_name_r14 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("disabled", is_past_r13)("matTooltip", \u0275\u0275pipeBind1(1, 6, "APP.WORKPLACE.TEAM_SCHEDULE_BOOK_NEARBY"))("matTooltipDisabled", is_past_r13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(status_name_r14);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(status_r12.booking.building_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(status_r12.booking.desk_code);
  }
}
function TeamScheduleListComponent_For_5_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_5_Conditional_11_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const member_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookNearby(member_r7));
    });
    \u0275\u0275elementStart(1, "icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const status_r12 = \u0275\u0275nextContext();
    const is_past_r13 = \u0275\u0275readContextLet(0);
    const status_name_r14 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r2.getLocationStyle(status_r12.status).bg_color)("color", ctx_r2.getLocationStyle(status_r12.status).fg_color);
    \u0275\u0275classProp("cursor-default", is_past_r13);
    \u0275\u0275property("matTooltip", status_name_r14);
    \u0275\u0275attribute("aria-disabled", is_past_r13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getLocationStyle(status_r12.status).icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_name_r14);
  }
}
function TeamScheduleListComponent_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275conditionalCreate(3, TeamScheduleListComponent_For_5_Conditional_11_Conditional_3_Template, 14, 8, "button", 23)(4, TeamScheduleListComponent_For_5_Conditional_11_Conditional_4_Template, 5, 10, "button", 24);
  }
  if (rf & 2) {
    const status_r12 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275storeLet(ctx_r2.active_day()?.is_past);
    \u0275\u0275advance();
    \u0275\u0275storeLet(\u0275\u0275pipeBind1(2, 2, ctx_r2.getLocationStyle(status_r12.status).name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(status_r12.status === "office" && status_r12.booking ? 3 : 4);
  }
}
function TeamScheduleListComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, TeamScheduleListComponent_For_5_Conditional_1_Template, 5, 9, "button", 12)(2, TeamScheduleListComponent_For_5_Conditional_2_Template, 5, 5, "button", 12);
    \u0275\u0275element(3, "a-user-avatar", 13);
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TeamScheduleListComponent_For_5_Conditional_8_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, TeamScheduleListComponent_For_5_Conditional_11_Template, 5, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const member_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.select_mode() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", member_r7.user);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", member_r7.user.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", member_r7.user.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r7.is_my_team ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", member_r7.department, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r2.getMemberStatus(member_r7)) ? 11 : -1, tmp_16_0);
  }
}
function TeamScheduleListComponent_ForEmpty_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
    \u0275\u0275elementStart(1, "p", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"), "... ");
  }
}
function TeamScheduleListComponent_ForEmpty_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "icon", 34);
    \u0275\u0275text(1, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function TeamScheduleListComponent_ForEmpty_6_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.retry());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.LOAD_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "COMMON.RETRY"), " ");
  }
}
function TeamScheduleListComponent_ForEmpty_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 34);
    \u0275\u0275text(1, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS_HINT"), " ");
  }
}
function TeamScheduleListComponent_ForEmpty_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 34);
    \u0275\u0275text(1, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS_HINT"), " ");
  }
}
function TeamScheduleListComponent_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, TeamScheduleListComponent_ForEmpty_6_Conditional_1_Template, 4, 3)(2, TeamScheduleListComponent_ForEmpty_6_Conditional_2_Template, 8, 6)(3, TeamScheduleListComponent_ForEmpty_6_Conditional_3_Template, 8, 6)(4, TeamScheduleListComponent_ForEmpty_6_Conditional_4_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading() ? 1 : ctx_r2.failed() ? 2 : ctx_r2.total_members() === 0 ? 3 : 4);
  }
}
var TeamScheduleListComponent = class _TeamScheduleListComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._service = inject(TeamScheduleService);
    this.week_days = this._service.week_days;
    this.active_day_index = this._service.active_day_index;
    this.filtered_members = this._service.filtered_members;
    this.total_members = this._service.total_members;
    this.select_mode = this._service.select_mode;
    this.loading = this._service.loading;
    this.failed = this._service.failed;
    this.active_day = computed(
      () => this.week_days()[this.active_day_index()],
      ...ngDevMode ? [{ debugName: "active_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  // Actions
  setDayIndex(index) {
    this._service.setFilters({ day_index: index });
  }
  toggleMemberSelection(member) {
    this._service.toggleMemberSelection(member);
  }
  isMemberSelected(member) {
    return this._service.isMemberSelected(member);
  }
  toggleFavorite(member) {
    this._service.toggleFavorite(member);
  }
  getMemberStatus(member) {
    return this._service.getMemberStatus(member);
  }
  getLocationStyle(status) {
    return this._service.getLocationStyle(status);
  }
  retry() {
    this._service.refresh();
  }
  bookNearby(member) {
    const day_index = this._service.active_day_index();
    const day = this._service.week_days()[day_index];
    if (!day || day.is_past)
      return;
    const status = member.statuses[day_index];
    const booking = status?.booking;
    const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "auto-assigned-desk-modal"
    });
    dialog_ref.componentInstance.show_close.set(true);
    dialog_ref.componentInstance.date.set(day.date);
    if (booking?.desk_id) {
      dialog_ref.componentInstance.nearby_desk_id.set(booking.desk_id);
      if (booking.level_id) {
        dialog_ref.componentInstance.level_id.set(booking.level_id);
      }
      if (booking.duration) {
        dialog_ref.componentInstance.duration.set(booking.duration);
      }
    }
  }
  openAddColleaguesModal() {
    const dialog_ref = this._dialog.open(AddColleaguesModalComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "panel",
      data: {}
    });
    dialog_ref.afterClosed().subscribe((added) => {
      if (added)
        this._service.refresh();
    });
  }
  static {
    this.\u0275fac = function TeamScheduleListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamScheduleListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamScheduleListComponent, selectors: [["team-schedule-list"]], decls: 14, vars: 6, consts: [[1, "border-base-300", "flex", "overflow-x-auto", "border-b"], [1, "border-base-300", "flex", "min-w-20", "flex-1", "flex-col", "items-center", "justify-center", "border-r", "border-b-2", "px-3", "py-2", "last:border-r-0", 3, "ngClass", "border-b-transparent", "border-b-primary"], [1, "flex", "flex-col", "gap-3", "p-4"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-3"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16"], [1, "flex", "justify-center", "pt-4"], [1, "border-base-300", "hover:bg-base-200", "flex", "items-center", "gap-2", "rounded-lg", "border", "px-4", "py-2", "transition-colors", 3, "click"], [1, "text-xl"], [1, "border-base-300", "flex", "min-w-20", "flex-1", "flex-col", "items-center", "justify-center", "border-r", "border-b-2", "px-3", "py-2", "last:border-r-0", 3, "click", "ngClass"], [1, "text-xs", "uppercase"], [1, "text-sm", "font-medium"], [1, "text-secondary", "text-xs", "font-medium"], [1, "shrink-0", 3, "matTooltip"], [1, "shrink-0", 3, "user"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "truncate", "font-medium", 3, "title"], [1, "bg-brand-100/20", "text-brand-100", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-xs", "font-medium"], [1, "text-base-content/60", "text-sm"], [1, "shrink-0", 3, "click", "matTooltip"], [1, "text-primary", "text-2xl"], [1, "text-base-content/30", "text-2xl"], [1, "text-warning", "text-2xl"], [1, "bg-info-light/30", "hover:bg-info-light/40", "flex", "shrink-0", "flex-col", "rounded-lg", "px-3", "py-2", "transition-colors", "disabled:cursor-default", 3, "disabled", "matTooltip", "matTooltipDisabled"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", 3, "cursor-default", "background-color", "color", "matTooltip"], [1, "bg-info-light/30", "hover:bg-info-light/40", "flex", "shrink-0", "flex-col", "rounded-lg", "px-3", "py-2", "transition-colors", "disabled:cursor-default", 3, "click", "disabled", "matTooltip", "matTooltipDisabled"], [1, "sr-only"], [1, "flex", "items-center", "gap-1", "text-xs"], [1, "text-brand-200", "text-sm"], [1, "truncate"], [1, "text-success", "text-sm"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", 3, "click", "matTooltip"], [1, "border-primary", "h-8", "w-8", "animate-spin", "rounded-full", "border-2", "border-t-transparent"], [1, "text-base-content/60", "mt-4", "text-sm"], [1, "text-base-content/30", "text-5xl"], ["role", "alert", 1, "text-base-content/60", "mt-4", "text-sm"], ["btn", "", "matRipple", "", 1, "mt-4", 3, "click"], [1, "text-base-content/40", "mt-1", "text-xs"]], template: function TeamScheduleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, TeamScheduleListComponent_For_2_Template, 8, 18, "button", 1, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275repeaterCreate(4, TeamScheduleListComponent_For_5_Template, 12, 7, "div", 3, _forTrack1, false, TeamScheduleListComponent_ForEmpty_6_Template, 5, 1, "div", 4);
        \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
        \u0275\u0275listener("click", function TeamScheduleListComponent_Template_button_click_8_listener() {
          return ctx.openAddColleaguesModal();
        });
        \u0275\u0275elementStart(9, "icon", 7);
        \u0275\u0275text(10, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("scrollbar-width", "none");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.week_days());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.filtered_members());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 4, "APP.WORKPLACE.COLLEAGUES_ADD"));
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      UserAvatarComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamScheduleListComponent, [{
    type: Component,
    args: [{ selector: "team-schedule-list", template: `
        <!-- Week Day Strip -->
        <div
            class="border-base-300 flex overflow-x-auto border-b"
            [style.scrollbar-width]="'none'"
        >
            @for (day of week_days(); track day.date; let i = $index) {
                <button
                    class="border-base-300 flex min-w-20 flex-1 flex-col items-center justify-center border-r border-b-2 px-3 py-2 last:border-r-0"
                    [ngClass]="{
                        'bg-primary/10': active_day_index() === i,
                    }"
                    [class.border-b-transparent]="active_day_index() !== i"
                    [class.border-b-primary]="active_day_index() === i"
                    (click)="setDayIndex(i)"
                >
                    <div
                        class="text-xs uppercase"
                        [class.font-medium]="day.is_today"
                    >
                        {{ day.date | date: 'EEE' }}
                    </div>
                    <div class="text-sm font-medium">
                        {{ day.date | date: 'MMM d' }}
                    </div>
                    @if (day.is_today) {
                        <div class="text-secondary text-xs font-medium">
                            {{ 'COMMON.TODAY' | translate }}
                        </div>
                    }
                </button>
            }
        </div>

        <!-- Team Member List -->
        <div class="flex flex-col gap-3 p-4">
            @for (member of filtered_members(); track member.user.id) {
                <div
                    class="border-base-300 bg-base-100 flex items-center gap-3 rounded-lg border p-3"
                >
                    <!-- Favorite Star / Selection Checkbox -->
                    @if (select_mode()) {
                        @let select_label =
                            (isMemberSelected(member)
                                ? 'APP.WORKPLACE.TEAM_SCHEDULE_DESELECT'
                                : 'APP.WORKPLACE.TEAM_SCHEDULE_SELECT'
                            ) | translate: { name: member.user.name };
                        <button
                            class="shrink-0"
                            (click)="toggleMemberSelection(member)"
                            [matTooltip]="select_label"
                            [attr.aria-label]="select_label"
                            [attr.aria-pressed]="isMemberSelected(member)"
                        >
                            @if (isMemberSelected(member)) {
                                <icon class="text-primary text-2xl"
                                    >check_box</icon
                                >
                            } @else {
                                <icon class="text-base-content/30 text-2xl"
                                    >check_box_outline_blank</icon
                                >
                            }
                        </button>
                    } @else {
                        @let favourite_label =
                            (member.is_favorite
                                ? 'COMMON.FAVOURITES_REMOVE'
                                : 'COMMON.FAVOURITES_ADD'
                            ) | translate;
                        <button
                            class="shrink-0"
                            (click)="toggleFavorite(member)"
                            [matTooltip]="favourite_label"
                            [attr.aria-label]="favourite_label"
                        >
                            @if (member.is_favorite) {
                                <icon class="text-warning text-2xl">star</icon>
                            } @else {
                                <icon class="text-base-content/30 text-2xl"
                                    >star_outline</icon
                                >
                            }
                        </button>
                    }

                    <!-- Avatar -->
                    <a-user-avatar class="shrink-0" [user]="member.user" />

                    <!-- Name & Department -->
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2">
                            <span
                                class="truncate font-medium"
                                [title]="member.user.name"
                            >
                                {{ member.user.name }}
                            </span>
                            @if (member.is_my_team) {
                                <span
                                    class="bg-brand-100/20 text-brand-100 shrink-0 rounded px-1.5 py-0.5 text-xs font-medium"
                                >
                                    {{ 'COMMON.MY_TEAM' | translate }}
                                </span>
                            }
                        </div>
                        <div class="text-base-content/60 text-sm">
                            {{ member.department }}
                        </div>
                    </div>

                    <!-- Status Icon / Book Nearby -->
                    @if (getMemberStatus(member); as status) {
                        @let is_past = active_day()?.is_past;
                        @let status_name =
                            getLocationStyle(status.status).name | translate;
                        @if (status.status === 'office' && status.booking) {
                            <button
                                class="bg-info-light/30 hover:bg-info-light/40 flex shrink-0 flex-col rounded-lg px-3 py-2 transition-colors disabled:cursor-default"
                                [disabled]="is_past"
                                (click)="bookNearby(member)"
                                [matTooltip]="
                                    'APP.WORKPLACE.TEAM_SCHEDULE_BOOK_NEARBY'
                                        | translate
                                "
                                [matTooltipDisabled]="is_past"
                            >
                                <span class="sr-only">{{ status_name }}</span>
                                <div class="flex items-center gap-1 text-xs">
                                    <icon class="text-brand-200 text-sm"
                                        >location_on</icon
                                    >
                                    <span class="truncate">{{
                                        status.booking.building_name
                                    }}</span>
                                </div>
                                <div class="flex items-center gap-1 text-xs">
                                    <icon class="text-success text-sm"
                                        >check_circle</icon
                                    >
                                    <span>{{ status.booking.desk_code }}</span>
                                </div>
                            </button>
                        } @else {
                            <!-- Not disabled on past days, so the tooltip still shows the status -->
                            <button
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                [class.cursor-default]="is_past"
                                [style.background-color]="
                                    getLocationStyle(status.status).bg_color
                                "
                                [style.color]="
                                    getLocationStyle(status.status).fg_color
                                "
                                [attr.aria-disabled]="is_past"
                                (click)="bookNearby(member)"
                                [matTooltip]="status_name"
                            >
                                <icon class="text-xl">
                                    {{ getLocationStyle(status.status).icon }}
                                </icon>
                                <span class="sr-only">{{ status_name }}</span>
                            </button>
                        }
                    }
                </div>
            } @empty {
                <!-- Empty State -->
                <div class="flex flex-col items-center justify-center py-16">
                    @if (loading()) {
                        <div
                            class="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"
                        ></div>
                        <p class="text-base-content/60 mt-4 text-sm">
                            {{ 'COMMON.LOADING' | translate }}...
                        </p>
                    } @else if (failed()) {
                        <icon class="text-base-content/30 text-5xl">error</icon>
                        <p
                            class="text-base-content/60 mt-4 text-sm"
                            role="alert"
                        >
                            {{ 'COMMON.LOAD_ERROR' | translate }}
                        </p>
                        <button btn matRipple class="mt-4" (click)="retry()">
                            {{ 'COMMON.RETRY' | translate }}
                        </button>
                    } @else if (total_members() === 0) {
                        <icon class="text-base-content/30 text-5xl"
                            >group_off</icon
                        >
                        <p class="text-base-content/60 mt-4 text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS'
                                    | translate
                            }}
                        </p>
                        <p class="text-base-content/40 mt-1 text-xs">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS_HINT'
                                    | translate
                            }}
                        </p>
                    } @else {
                        <icon class="text-base-content/30 text-5xl"
                            >filter_list_off</icon
                        >
                        <p class="text-base-content/60 mt-4 text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS'
                                    | translate
                            }}
                        </p>
                        <p class="text-base-content/40 mt-1 text-xs">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS_HINT'
                                    | translate
                            }}
                        </p>
                    }
                </div>
            }

            <!-- Add Colleagues Button -->
            <div class="flex justify-center pt-4">
                <button
                    class="border-base-300 hover:bg-base-200 flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
                    (click)="openAddColleaguesModal()"
                >
                    <icon class="text-xl">person_add</icon>
                    <span>{{ 'APP.WORKPLACE.COLLEAGUES_ADD' | translate }}</span>
                </button>
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatTooltipModule,
      TranslatePipe,
      IconComponent,
      UserAvatarComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamScheduleListComponent, { className: "TeamScheduleListComponent", filePath: "apps/workplace/src/app/team-schedule/team-schedule-list.component.ts", lineNumber: 261 });
})();

// apps/workplace/src/app/team-schedule/team-schedule-table.component.ts
var _c03 = (a0) => ({ "bg-brand-200/20": a0 });
var _c13 = (a0) => ({ name: a0 });
var _c22 = (a0) => ({ "bg-brand-200/10": a0 });
var _forTrack02 = ($index, $item) => $item.name;
var _forTrack12 = ($index, $item) => $item.date;
var _forTrack2 = ($index, $item) => $item.user.id;
function TeamScheduleTableComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 18)(2, "icon", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const location_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", location_r1.bg_color)("color", location_r1.fg_color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(location_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, location_r1.name), " ");
  }
}
function TeamScheduleTableComponent_For_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function TeamScheduleTableComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 20)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, TeamScheduleTableComponent_For_21_Conditional_5_Template, 3, 3, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "div", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c03, day_r2.is_today));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, day_r2.date, "EEE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r2.is_today ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 8, day_r2.date, "d"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 11, day_r2.date, "MMM"), " ");
  }
}
function TeamScheduleTableComponent_For_23_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 35);
    \u0275\u0275text(1, "check_box");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleTableComponent_For_23_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 36);
    \u0275\u0275text(1, "check_box_outline_blank");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleTableComponent_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "button", 34);
    \u0275\u0275listener("click", function TeamScheduleTableComponent_For_23_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const member_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleMemberSelection(member_r6));
    });
    \u0275\u0275conditionalCreate(3, TeamScheduleTableComponent_For_23_Conditional_2_Conditional_3_Template, 2, 0, "icon", 35)(4, TeamScheduleTableComponent_For_23_Conditional_2_Conditional_4_Template, 2, 0, "icon", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    const select_label_r7 = \u0275\u0275pipeBind2(1, 4, ctx_r3.isMemberSelected(member_r6) ? "APP.WORKPLACE.TEAM_SCHEDULE_DESELECT" : "APP.WORKPLACE.TEAM_SCHEDULE_SELECT", \u0275\u0275pureFunction1(7, _c13, member_r6.user.name));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", select_label_r7);
    \u0275\u0275attribute("aria-label", select_label_r7)("aria-pressed", ctx_r3.isMemberSelected(member_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isMemberSelected(member_r6) ? 3 : 4);
  }
}
function TeamScheduleTableComponent_For_23_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 37);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleTableComponent_For_23_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 36);
    \u0275\u0275text(1, "star_outline");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleTableComponent_For_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "button", 34);
    \u0275\u0275listener("click", function TeamScheduleTableComponent_For_23_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const member_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFavorite(member_r6));
    });
    \u0275\u0275conditionalCreate(3, TeamScheduleTableComponent_For_23_Conditional_3_Conditional_3_Template, 2, 0, "icon", 37)(4, TeamScheduleTableComponent_For_23_Conditional_3_Conditional_4_Template, 2, 0, "icon", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    const favourite_label_r9 = \u0275\u0275pipeBind1(1, 3, member_r6.is_favorite ? "COMMON.FAVOURITES_REMOVE" : "COMMON.FAVOURITES_ADD");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", favourite_label_r9);
    \u0275\u0275attribute("aria-label", favourite_label_r9);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r6.is_favorite ? 3 : 4);
  }
}
function TeamScheduleTableComponent_For_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.MY_TEAM"));
  }
}
function TeamScheduleTableComponent_For_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r6.department);
  }
}
function TeamScheduleTableComponent_For_23_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "icon", 39);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r6.current_building);
  }
}
function TeamScheduleTableComponent_For_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r6.current_desk);
  }
}
function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const day_r11 = \u0275\u0275nextContext(2).$implicit;
      const member_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.bookNearby(member_r6, day_r11));
    });
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44)(6, "icon", 45);
    \u0275\u0275text(7, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 44)(11, "icon", 47);
    \u0275\u0275text(12, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r12 = \u0275\u0275nextContext();
    const day_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", day_r11.is_past)("matTooltip", \u0275\u0275pipeBind1(1, 6, "APP.WORKPLACE.TEAM_SCHEDULE_BOOK_NEARBY"))("matTooltipDisabled", day_r11.is_past);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, ctx_r3.getLocationStyle(status_r12.status).name));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(status_r12.booking.building_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(status_r12.booking.desk_code);
  }
}
function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275listener("click", function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const day_r11 = \u0275\u0275nextContext(2).$implicit;
      const member_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.bookNearby(member_r6, day_r11));
    });
    \u0275\u0275elementStart(3, "icon", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const status_r12 = \u0275\u0275nextContext();
    const day_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    const status_name_r14 = \u0275\u0275pipeBind1(1, 10, ctx_r3.getLocationStyle(status_r12.status).name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r3.getLocationStyle(status_r12.status).bg_color)("color", ctx_r3.getLocationStyle(status_r12.status).fg_color);
    \u0275\u0275classProp("cursor-default", day_r11.is_past);
    \u0275\u0275property("matTooltip", status_name_r14);
    \u0275\u0275attribute("aria-disabled", day_r11.is_past);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getLocationStyle(status_r12.status).icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_name_r14);
  }
}
function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_0_Template, 15, 10, "button", 40)(1, TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_1_Template, 7, 12, "button", 41);
  }
  if (rf & 2) {
    const status_r12 = ctx;
    \u0275\u0275conditional(status_r12.status === "office" && status_r12.booking ? 0 : 1);
  }
}
function TeamScheduleTableComponent_For_23_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275conditionalCreate(1, TeamScheduleTableComponent_For_23_For_15_Conditional_1_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const day_r11 = ctx.$implicit;
    const \u0275$index_134_r15 = ctx.$index;
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c22, day_r11.is_today));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = member_r6.statuses[\u0275$index_134_r15]) ? 1 : -1, tmp_22_0);
  }
}
function TeamScheduleTableComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 26);
    \u0275\u0275conditionalCreate(2, TeamScheduleTableComponent_For_23_Conditional_2_Template, 5, 9, "button", 27)(3, TeamScheduleTableComponent_For_23_Conditional_3_Template, 5, 5, "button", 27);
    \u0275\u0275element(4, "a-user-avatar", 28);
    \u0275\u0275elementStart(5, "div", 29)(6, "div", 2)(7, "span", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, TeamScheduleTableComponent_For_23_Conditional_9_Template, 3, 3, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 32);
    \u0275\u0275conditionalCreate(11, TeamScheduleTableComponent_For_23_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(12, TeamScheduleTableComponent_For_23_Conditional_12_Template, 6, 1);
    \u0275\u0275conditionalCreate(13, TeamScheduleTableComponent_For_23_Conditional_13_Template, 4, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(14, TeamScheduleTableComponent_For_23_For_15_Template, 2, 4, "div", 33, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.select_mode() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", member_r6.user);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", member_r6.user.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r6.user.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r6.is_my_team ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(member_r6.department ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r6.current_building ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r6.current_desk ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.week_days());
  }
}
function TeamScheduleTableComponent_ForEmpty_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 50);
    \u0275\u0275elementStart(1, "p", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"), "... ");
  }
}
function TeamScheduleTableComponent_ForEmpty_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "icon", 52);
    \u0275\u0275text(1, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function TeamScheduleTableComponent_ForEmpty_24_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.retry());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.LOAD_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "COMMON.RETRY"), " ");
  }
}
function TeamScheduleTableComponent_ForEmpty_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 52);
    \u0275\u0275text(1, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 55);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS_HINT"), " ");
  }
}
function TeamScheduleTableComponent_ForEmpty_24_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 52);
    \u0275\u0275text(1, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 56);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 57);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS_HINT"), " ");
  }
}
function TeamScheduleTableComponent_ForEmpty_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, TeamScheduleTableComponent_ForEmpty_24_Conditional_1_Template, 4, 3)(2, TeamScheduleTableComponent_ForEmpty_24_Conditional_2_Template, 8, 6)(3, TeamScheduleTableComponent_ForEmpty_24_Conditional_3_Template, 8, 6)(4, TeamScheduleTableComponent_ForEmpty_24_Conditional_4_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.loading() ? 1 : ctx_r3.failed() ? 2 : ctx_r3.total_members() === 0 ? 3 : 4);
  }
}
var TeamScheduleTableComponent = class _TeamScheduleTableComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._service = inject(TeamScheduleService);
    this.user_locations = Object.keys(USER_LOCATIONS).map((key) => __spreadProps(__spreadValues({}, USER_LOCATIONS[key]), {
      key
    }));
    this.week_days = this._service.week_days;
    this.filtered_members = this._service.filtered_members;
    this.total_members = this._service.total_members;
    this.booked_count = this._service.booked_count;
    this.select_mode = this._service.select_mode;
    this.loading = this._service.loading;
    this.failed = this._service.failed;
  }
  // Actions
  toggleMemberSelection(member) {
    this._service.toggleMemberSelection(member);
  }
  isMemberSelected(member) {
    return this._service.isMemberSelected(member);
  }
  toggleFavorite(member) {
    this._service.toggleFavorite(member);
  }
  getLocationStyle(status) {
    return this._service.getLocationStyle(status);
  }
  retry() {
    this._service.refresh();
  }
  bookNearby(member, day) {
    if (day.is_past)
      return;
    const day_index = this._service.week_days().findIndex((d) => d.date === day.date);
    const status = member.statuses[day_index];
    const booking = status?.booking;
    const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "auto-assigned-desk-modal"
    });
    dialog_ref.componentInstance.show_close.set(true);
    dialog_ref.componentInstance.date.set(day.date);
    if (booking?.desk_id) {
      dialog_ref.componentInstance.nearby_desk_id.set(booking.desk_id);
      if (booking.level_id) {
        dialog_ref.componentInstance.level_id.set(booking.level_id);
      }
      if (booking.duration) {
        dialog_ref.componentInstance.duration.set(booking.duration);
      }
    }
  }
  openAddColleaguesModal() {
    const dialog_ref = this._dialog.open(AddColleaguesModalComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "panel",
      data: {}
    });
    dialog_ref.afterClosed().subscribe((added) => {
      if (added)
        this._service.refresh();
    });
  }
  static {
    this.\u0275fac = function TeamScheduleTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamScheduleTableComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamScheduleTableComponent, selectors: [["team-schedule-table"]], decls: 32, vars: 14, consts: [[1, "flex", "flex-wrap", "justify-between", "gap-4", "p-4"], [1, "flex", "flex-wrap", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "text-base-content/60", "flex", "items-center", "gap-2"], [1, "text-sm"], [1, "ml-4", "font-medium"], [1, "schedule-grid", "border-base-300", "w-full", "overflow-auto", "border-t"], [1, "bg-base-200/50", "text-base-content/70", "contents", "text-sm", "font-medium"], [1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-10", "flex", "items-end", "border-b", "px-4", "py-3"], [1, "font-semibold"], [1, "text-base-content/50", "ml-2"], [1, "border-base-300", "flex", "items-center", "justify-center", "gap-4", "border-b", "border-l", "p-2", 3, "ngClass"], [1, "group", "contents"], [1, "border-base-300", "col-span-full", "flex", "flex-col", "items-center", "justify-center", "border-t", "py-16"], [1, "flex", "justify-center", "p-2"], ["btn", "", 1, "w-48", 3, "click"], [1, "mr-2", "text-xl"], [1, "mr-2"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded", "shadow"], [1, "text-base"], [1, "flex", "flex-col", "items-center", "leading-none"], [1, "text-lg", "uppercase"], [1, "text-secondary", "relative", "-top-1", "text-sm"], [1, "flex", "flex-col", "items-center", "leading-none", "font-medium"], [1, "text-2xl"], [1, "relative", "-top-1", "font-bold"], [1, "border-base-300", "bg-base-100", "group-hover:bg-base-200/50", "sticky", "left-0", "z-10", "flex", "items-center", "gap-3", "border-b", "px-4", "py-3"], [1, "shrink-0", 3, "matTooltip"], [1, "shrink-0", 3, "user"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium", 3, "title"], [1, "bg-brand-100/20", "text-brand-100", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-xs", "font-medium"], [1, "text-base-content/60", "flex", "flex-wrap", "items-center", "gap-1", "text-sm"], [1, "border-base-300", "group-hover:bg-base-200/50", "flex", "items-center", "justify-center", "border-b", "border-l", "p-2", 3, "ngClass"], [1, "shrink-0", 3, "click", "matTooltip"], [1, "text-primary", "text-xl"], [1, "text-base-content/30", "text-xl"], [1, "text-warning", "text-xl"], [1, "text-base-content/40"], [1, "text-primary", "text-sm"], [1, "bg-info-light/30", "hover:bg-info-light/40", "flex", "w-full", "max-w-30", "flex-col", "rounded-lg", "px-3", "py-2", "transition-colors", "disabled:cursor-default", 3, "disabled", "matTooltip", "matTooltipDisabled"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "cursor-default", "background-color", "color", "matTooltip"], [1, "bg-info-light/30", "hover:bg-info-light/40", "flex", "w-full", "max-w-30", "flex-col", "rounded-lg", "px-3", "py-2", "transition-colors", "disabled:cursor-default", 3, "click", "disabled", "matTooltip", "matTooltipDisabled"], [1, "sr-only"], [1, "flex", "items-center", "gap-1", "text-xs"], [1, "text-brand-200", "text-sm"], [1, "truncate"], [1, "text-success", "text-sm"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click", "matTooltip"], [1, "text-xl"], ["diameter", "32"], [1, "text-base-content/60", "mt-4"], [1, "text-base-content/60", "text-5xl"], ["role", "alert", 1, "text-base-content/60", "mt-4"], ["btn", "", "matRipple", "", 1, "mt-4", 3, "click"], [1, "text-base-content/40", "mt-1", "text-sm"], [1, "text-base-content/60", "mt-4", "text-sm"], [1, "text-base-content/40", "mt-1", "text-xs"]], template: function TeamScheduleTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, TeamScheduleTableComponent_For_3_Template, 7, 8, "div", 2, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "icon");
        \u0275\u0275text(6, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 5);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "span", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 10);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(20, TeamScheduleTableComponent_For_21_Template, 13, 16, "div", 11, _forTrack12);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(22, TeamScheduleTableComponent_For_23_Template, 16, 8, "div", 12, _forTrack2, false, TeamScheduleTableComponent_ForEmpty_24_Template, 5, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
        \u0275\u0275listener("click", function TeamScheduleTableComponent_Template_button_click_26_listener() {
          return ctx.openAddColleaguesModal();
        });
        \u0275\u0275elementStart(27, "icon", 16);
        \u0275\u0275text(28, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 17);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.user_locations);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "APP.WORKPLACE.TEAM_SCHEDULE_BOOK_HINT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.booked_count(), "/", ctx.total_members());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "APP.WORKPLACE.TEAM_SCHEDULE_EMPLOYEE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.filtered_members().length, "/", ctx.total_members());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.week_days());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.filtered_members());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 12, "APP.WORKPLACE.COLLEAGUES_ADD"));
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      UserAvatarComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.schedule-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(18rem, 20rem) repeat(5, minmax(7rem, 1fr));\n}\n/*# sourceMappingURL=team-schedule-table.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamScheduleTableComponent, [{
    type: Component,
    args: [{ selector: "team-schedule-table", template: `
        <!-- Legend Row -->
        <div class="flex flex-wrap justify-between gap-4 p-4">
            <div class="flex flex-wrap gap-4">
                @for (location of user_locations; track location.name) {
                    <div class="flex items-center gap-2">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded shadow"
                            [style.background-color]="location.bg_color"
                            [style.color]="location.fg_color"
                        >
                            <icon class="text-base">{{ location.icon }}</icon>
                        </div>
                        <div class="text-sm">
                            {{ location.name | translate }}
                        </div>
                    </div>
                }
            </div>
            <div class="text-base-content/60 flex items-center gap-2">
                <icon>info</icon>
                <p class="text-sm">
                    {{ 'APP.WORKPLACE.TEAM_SCHEDULE_BOOK_HINT' | translate }}
                </p>
                <span class="ml-4 font-medium"
                    >{{ booked_count() }}/{{ total_members() }}</span
                >
            </div>
        </div>

        <!-- Table Grid -->
        <div
            class="schedule-grid border-base-300 w-full overflow-auto border-t"
        >
            <!-- Header Row -->
            <div
                class="bg-base-200/50 text-base-content/70 contents text-sm font-medium"
            >
                <div
                    class="border-base-300 bg-base-100 sticky left-0 z-10 flex items-end border-b px-4 py-3"
                >
                    <span class="font-semibold">{{
                        'APP.WORKPLACE.TEAM_SCHEDULE_EMPLOYEE' | translate
                    }}</span>
                    <span class="text-base-content/50 ml-2"
                        >{{ filtered_members().length }}/{{
                            total_members()
                        }}</span
                    >
                </div>
                @for (day of week_days(); track day.date) {
                    <div
                        class="border-base-300 flex items-center justify-center gap-4 border-b border-l p-2"
                        [ngClass]="{ 'bg-brand-200/20': day.is_today }"
                    >
                        <div class="flex flex-col items-center leading-none">
                            <div class="text-lg uppercase">
                                {{ day.date | date: 'EEE' }}
                            </div>
                            @if (day.is_today) {
                                <div
                                    class="text-secondary relative -top-1 text-sm"
                                >
                                    {{ 'COMMON.TODAY' | translate }}
                                </div>
                            }
                        </div>
                        <div
                            class="flex flex-col items-center leading-none font-medium"
                        >
                            <div class="text-2xl">
                                {{ day.date | date: 'd' }}
                            </div>
                            <div class="relative -top-1 font-bold">
                                {{ day.date | date: 'MMM' }}
                            </div>
                        </div>
                    </div>
                }
            </div>

            <!-- Data Rows -->
            @for (member of filtered_members(); track member.user.id) {
                <div class="group contents">
                    <!-- Employee Cell -->
                    <div
                        class="border-base-300 bg-base-100 group-hover:bg-base-200/50 sticky left-0 z-10 flex items-center gap-3 border-b px-4 py-3"
                    >
                        @if (select_mode()) {
                            @let select_label =
                                (isMemberSelected(member)
                                    ? 'APP.WORKPLACE.TEAM_SCHEDULE_DESELECT'
                                    : 'APP.WORKPLACE.TEAM_SCHEDULE_SELECT'
                                ) | translate: { name: member.user.name };
                            <button
                                class="shrink-0"
                                (click)="toggleMemberSelection(member)"
                                [matTooltip]="select_label"
                                [attr.aria-label]="select_label"
                                [attr.aria-pressed]="isMemberSelected(member)"
                            >
                                @if (isMemberSelected(member)) {
                                    <icon class="text-primary text-xl"
                                        >check_box</icon
                                    >
                                } @else {
                                    <icon class="text-base-content/30 text-xl"
                                        >check_box_outline_blank</icon
                                    >
                                }
                            </button>
                        } @else {
                            @let favourite_label =
                                (member.is_favorite
                                    ? 'COMMON.FAVOURITES_REMOVE'
                                    : 'COMMON.FAVOURITES_ADD'
                                ) | translate;
                            <button
                                class="shrink-0"
                                (click)="toggleFavorite(member)"
                                [matTooltip]="favourite_label"
                                [attr.aria-label]="favourite_label"
                            >
                                @if (member.is_favorite) {
                                    <icon class="text-warning text-xl"
                                        >star</icon
                                    >
                                } @else {
                                    <icon class="text-base-content/30 text-xl"
                                        >star_outline</icon
                                    >
                                }
                            </button>
                        }
                        <a-user-avatar class="shrink-0" [user]="member.user" />
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2">
                                <span
                                    class="truncate font-medium"
                                    [title]="member.user.name"
                                    >{{ member.user.name }}</span
                                >
                                @if (member.is_my_team) {
                                    <span
                                        class="bg-brand-100/20 text-brand-100 shrink-0 rounded px-1.5 py-0.5 text-xs font-medium"
                                        >{{
                                            'COMMON.MY_TEAM' | translate
                                        }}</span
                                    >
                                }
                            </div>
                            <div
                                class="text-base-content/60 flex flex-wrap items-center gap-1 text-sm"
                            >
                                @if (member.department) {
                                    <span>{{ member.department }}</span>
                                }
                                @if (member.current_building) {
                                    <span class="text-base-content/40">\u2022</span>
                                    <icon class="text-primary text-sm"
                                        >location_on</icon
                                    >
                                    <span>{{ member.current_building }}</span>
                                }
                                @if (member.current_desk) {
                                    <span class="text-base-content/40">\u2022</span>
                                    <span>{{ member.current_desk }}</span>
                                }
                            </div>
                        </div>
                    </div>

                    <!-- Day Cells -->
                    @for (day of week_days(); track day.date; let i = $index) {
                        <div
                            class="border-base-300 group-hover:bg-base-200/50 flex items-center justify-center border-b border-l p-2"
                            [ngClass]="{ 'bg-brand-200/10': day.is_today }"
                        >
                            @if (member.statuses[i]; as status) {
                                @if (
                                    status.status === 'office' && status.booking
                                ) {
                                    <button
                                        class="bg-info-light/30 hover:bg-info-light/40 flex w-full max-w-30 flex-col rounded-lg px-3 py-2 transition-colors disabled:cursor-default"
                                        [disabled]="day.is_past"
                                        (click)="bookNearby(member, day)"
                                        [matTooltip]="
                                            'APP.WORKPLACE.TEAM_SCHEDULE_BOOK_NEARBY'
                                                | translate
                                        "
                                        [matTooltipDisabled]="day.is_past"
                                    >
                                        <span class="sr-only">{{
                                            getLocationStyle(status.status).name
                                                | translate
                                        }}</span>
                                        <div
                                            class="flex items-center gap-1 text-xs"
                                        >
                                            <icon class="text-brand-200 text-sm"
                                                >location_on</icon
                                            >
                                            <span class="truncate">{{
                                                status.booking.building_name
                                            }}</span>
                                        </div>
                                        <div
                                            class="flex items-center gap-1 text-xs"
                                        >
                                            <icon class="text-success text-sm"
                                                >check_circle</icon
                                            >
                                            <span>{{
                                                status.booking.desk_code
                                            }}</span>
                                        </div>
                                    </button>
                                } @else {
                                    @let status_name =
                                        getLocationStyle(status.status).name
                                            | translate;
                                    <!-- Not disabled on past days, so the tooltip still shows the status -->
                                    <button
                                        class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                                        [class.cursor-default]="day.is_past"
                                        [style.background-color]="
                                            getLocationStyle(status.status)
                                                .bg_color
                                        "
                                        [style.color]="
                                            getLocationStyle(status.status)
                                                .fg_color
                                        "
                                        [attr.aria-disabled]="day.is_past"
                                        (click)="bookNearby(member, day)"
                                        [matTooltip]="status_name"
                                    >
                                        <icon class="text-xl">{{
                                            getLocationStyle(status.status).icon
                                        }}</icon>
                                        <span class="sr-only">{{
                                            status_name
                                        }}</span>
                                    </button>
                                }
                            }
                        </div>
                    }
                </div>
            } @empty {
                <!-- Empty State -->
                <div
                    class="border-base-300 col-span-full flex flex-col items-center justify-center border-t py-16"
                >
                    @if (loading()) {
                        <mat-spinner diameter="32" />
                        <p class="text-base-content/60 mt-4">
                            {{ 'COMMON.LOADING' | translate }}...
                        </p>
                    } @else if (failed()) {
                        <icon class="text-base-content/60 text-5xl">error</icon>
                        <p class="text-base-content/60 mt-4" role="alert">
                            {{ 'COMMON.LOAD_ERROR' | translate }}
                        </p>
                        <button btn matRipple class="mt-4" (click)="retry()">
                            {{ 'COMMON.RETRY' | translate }}
                        </button>
                    } @else if (total_members() === 0) {
                        <icon class="text-base-content/60 text-5xl"
                            >group_off</icon
                        >
                        <p class="text-base-content/60 mt-4">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS'
                                    | translate
                            }}
                        </p>
                        <p class="text-base-content/40 mt-1 text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS_HINT'
                                    | translate
                            }}
                        </p>
                    } @else {
                        <icon class="text-base-content/60 text-5xl"
                            >filter_list_off</icon
                        >
                        <p class="text-base-content/60 mt-4 text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS'
                                    | translate
                            }}
                        </p>
                        <p class="text-base-content/40 mt-1 text-xs">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS_HINT'
                                    | translate
                            }}
                        </p>
                    }
                </div>
            }
        </div>

        <!-- Add Colleagues Button -->
        <div class="flex justify-center p-2">
            <button btn class="w-48" (click)="openAddColleaguesModal()">
                <icon class="mr-2 text-xl">person_add</icon>
                <span class="mr-2">{{
                    'APP.WORKPLACE.COLLEAGUES_ADD' | translate
                }}</span>
            </button>
        </div>
    `, imports: [
      CommonModule,
      MatTooltipModule,
      TranslatePipe,
      IconComponent,
      UserAvatarComponent,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;7a5f19ef5fd838ce615a0ab6fcf190cf360a6dc920106e6d3ac6c89ea03ff526;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/team-schedule/team-schedule-table.component.ts */\n.schedule-grid {\n  display: grid;\n  grid-template-columns: minmax(18rem, 20rem) repeat(5, minmax(7rem, 1fr));\n}\n/*# sourceMappingURL=team-schedule-table.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamScheduleTableComponent, { className: "TeamScheduleTableComponent", filePath: "apps/workplace/src/app/team-schedule/team-schedule-table.component.ts", lineNumber: 356 });
})();

// apps/workplace/src/app/team-schedule/team-schedule.component.ts
function TeamScheduleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function TeamScheduleComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var TeamScheduleComponent = class _TeamScheduleComponent {
  /** Set from the `hide_nav` URL parameter when the app is embedded */
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  constructor() {
    const release = inject(TeamScheduleService).watch();
    inject(DestroyRef).onDestroy(release);
  }
  static {
    this.\u0275fac = function TeamScheduleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamScheduleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamScheduleComponent, selectors: [["team-schedule"]], decls: 13, vars: 2, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden"], [1, "bg-base-200", "relative", "flex", "h-1/2", "flex-1", "overflow-auto"], [1, "mx-auto", "w-fit", "min-w-full", "gap-4", "p-4"], [1, "block"], [1, "mb-4", "block"], [1, "bg-base-100", "overflow-hidden", "rounded-lg", "shadow"], [1, "hidden", "sm:block"], [1, "block", "sm:hidden"], [1, "h-4", "min-h-px", "w-full"]], template: function TeamScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, TeamScheduleComponent_Conditional_1_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2);
        \u0275\u0275element(4, "team-quick-actions", 3)(5, "team-schedule-filters", 4);
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "team-schedule-table", 6)(8, "team-schedule-list", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, TeamScheduleComponent_Conditional_11_Template, 1, 0, "footer-menu");
        \u0275\u0275element(12, "div");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_nav ? 1 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(!ctx.hide_nav ? 11 : -1);
      }
    }, dependencies: [
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      TeamQuickActionsComponent,
      TeamScheduleFiltersComponent,
      TeamScheduleTableComponent,
      TeamScheduleListComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamScheduleComponent, [{
    type: Component,
    args: [{ selector: "team-schedule", template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav) {
                <topbar />
            }
            <div class="bg-base-200 relative flex h-1/2 flex-1 overflow-auto">
                <div class="mx-auto w-fit min-w-full gap-4 p-4">
                    <!-- The card sets its own margin, as it is hidden without the desks feature -->
                    <team-quick-actions class="block" />
                    <team-schedule-filters class="mb-4 block" />
                    <div class="bg-base-100 overflow-hidden rounded-lg shadow">
                        <team-schedule-table class="hidden sm:block" />
                        <team-schedule-list class="block sm:hidden" />
                    </div>
                    <div class="h-4 min-h-px w-full"></div>
                </div>
                <virtual-concierge-button />
            </div>
            @if (!hide_nav) {
                <footer-menu />
            }
            <div></div>
        </div>
    `, imports: [
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      TeamQuickActionsComponent,
      TeamScheduleFiltersComponent,
      TeamScheduleTableComponent,
      TeamScheduleListComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamScheduleComponent, { className: "TeamScheduleComponent", filePath: "apps/workplace/src/app/team-schedule/team-schedule.component.ts", lineNumber: 48 });
})();
export {
  TeamScheduleComponent
};
//# debugId=7a387554-9c6f-5fcd-9788-5517d88ea3ad
//# sourceMappingURL=team-schedule.component-DG5NZSLV.js.map
