import {
  AddColleaguesModalComponent,
  TeamScheduleService,
  USER_LOCATIONS
} from "./chunk-UJLQBEV6.js";
import "./chunk-IJOVBUPM.js";
import {
  VirtualConciergeButtonComponent
} from "./chunk-VHKWPRBI.js";
import {
  AutoAssignedDeskModalComponent
} from "./chunk-X2DJQXWI.js";
import "./chunk-ICIEQV5A.js";
import "./chunk-R7NMGDJJ.js";
import "./chunk-V47EOGYK.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-MCUEC3FK.js";
import "./chunk-JNPX4RPT.js";
import "./chunk-G2QIDIZH.js";
import "./chunk-KTCI2VVT.js";
import "./chunk-25Y4PDI3.js";
import "./chunk-NECT2IIR.js";
import "./chunk-WSVNX6WC.js";
import "./chunk-VJWWFIEW.js";
import "./chunk-UABDRBGZ.js";
import {
  BookingFormService
} from "./chunk-BJEHABTQ.js";
import "./chunk-WGZQI6NL.js";
import {
  MatTooltip,
  MatTooltipModule,
  UserAvatarComponent
} from "./chunk-XX2O3ISY.js";
import "./chunk-DQST64FR.js";
import {
  AsyncHandler,
  IconComponent,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  currentUser,
  settingSignal
} from "./chunk-3XNRPS72.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  MatOption,
  NgClass,
  NgControlStatus,
  NgModel,
  Router,
  RouterLink,
  RouterModule,
  TranslatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2XZZDWFL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/team-schedule/team-quick-actions.component.ts
function TeamQuickActionsComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" (", ctx_r0.selected_count(), ") ");
  }
}
function TeamQuickActionsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Book selected ");
    \u0275\u0275conditionalCreate(2, TeamQuickActionsComponent_Conditional_20_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.selected_count() > 0 ? 2 : -1);
  }
}
function TeamQuickActionsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Book for team");
    \u0275\u0275elementEnd();
  }
}
function TeamQuickActionsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3, "Clear");
    \u0275\u0275elementEnd();
  }
}
function TeamQuickActionsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3, "Select Colleagues");
    \u0275\u0275elementEnd();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamQuickActionsComponent, selectors: [["team-quick-actions"]], decls: 25, vars: 2, consts: [[1, "bg-grad", "border-base-300", "relative", "mx-auto", "w-full", "max-w-full", "space-y-2", "rounded-xl", "border", "p-4", "text-white", "shadow"], [1, "flex", "items-center", "justify-between", "pb-2"], [1, "relative", "overflow-hidden", "rounded", "px-2", "py-1", "text-sm", "capitalize"], [1, "bg-brand-content", "absolute", "inset-0", "opacity-20"], [1, "flex", "items-center", "space-x-2"], [1, "text-sm"], [1, "mb-1", "text-2xl", "font-medium"], [1, "flex", "flex-col", "items-center", "space-y-2", "pt-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-4"], ["btn", "", "matRipple", "", 1, "white", "w-full", "flex-1", "space-x-2", 3, "click"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "inverse", "white", "w-full", "flex-1", "space-x-2", 3, "click"]], template: function TeamQuickActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3);
        \u0275\u0275elementStart(4, "div");
        \u0275\u0275text(5, "Quick Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "icon");
        \u0275\u0275text(8, "auto_awesome");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275text(10, "Smart Selection");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div")(12, "h3", 6);
        \u0275\u0275text(13, "Group Desk Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 5);
        \u0275\u0275text(15, " Book desks together with your team or selected colleagues ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7)(17, "button", 8);
        \u0275\u0275listener("click", function TeamQuickActionsComponent_Template_button_click_17_listener() {
          return ctx.bookForGroup();
        });
        \u0275\u0275elementStart(18, "icon", 9);
        \u0275\u0275text(19, "bolt");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(20, TeamQuickActionsComponent_Conditional_20_Template, 3, 1, "div")(21, TeamQuickActionsComponent_Conditional_21_Template, 2, 0, "div");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 10);
        \u0275\u0275listener("click", function TeamQuickActionsComponent_Template_button_click_22_listener() {
          return ctx.toggleSelectMode();
        });
        \u0275\u0275conditionalCreate(23, TeamQuickActionsComponent_Conditional_23_Template, 4, 0)(24, TeamQuickActionsComponent_Conditional_24_Template, 4, 0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275conditional(ctx.select_mode() ? 20 : 21);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.select_mode() ? 23 : 24);
      }
    }, dependencies: [IconComponent], styles: ["\n.bg-grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=team-quick-actions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamQuickActionsComponent, [{
    type: Component,
    args: [{ selector: "team-quick-actions", template: `
        <div
            class="bg-grad border-base-300 relative mx-auto w-full max-w-full space-y-2 rounded-xl border p-4 text-white shadow"
        >
            <div class="flex items-center justify-between pb-2">
                <div
                    class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                >
                    <div
                        class="bg-brand-content absolute inset-0 opacity-20"
                    ></div>
                    <div>Quick Action</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>auto_awesome</icon>
                    <div class="text-sm">Smart Selection</div>
                </div>
            </div>
            <div>
                <h3 class="mb-1 text-2xl font-medium">Group Desk Bookings</h3>
                <p class="text-sm">
                    Book desks together with your team or selected colleagues
                </p>
            </div>
            <div
                class="flex flex-col items-center space-y-2 pt-2 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
                <button
                    btn
                    matRipple
                    class="white w-full flex-1 space-x-2"
                    (click)="bookForGroup()"
                >
                    <icon class="text-2xl">bolt</icon>
                    @if (select_mode()) {
                        <div>
                            Book selected
                            @if (selected_count() > 0) {
                                ({{ selected_count() }})
                            }
                        </div>
                    } @else {
                        <div>Book for team</div>
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
                        <div>Clear</div>
                    } @else {
                        <icon class="text-2xl">group_add</icon>
                        <div>Select Colleagues</div>
                    }
                </button>
            </div>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;c8abda7309ed85adf85fe922798ae661c676d08c3d0155d4e4eb34a85f1a66c1;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/team-schedule/team-quick-actions.component.ts */\n.bg-grad {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=team-quick-actions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamQuickActionsComponent, { className: "TeamQuickActionsComponent", filePath: "apps/workplace/src/app/team-schedule/team-quick-actions.component.ts", lineNumber: 86 });
})();

// apps/workplace/src/app/team-schedule/team-schedule-filters.component.ts
var _c0 = () => [];
var _c1 = () => ({ view: "all" });
var _c2 = () => ({ view: "favorites" });
var _c3 = () => ({ view: "team" });
function TeamScheduleFiltersComponent_For_43_Template(rf, ctx) {
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
function TeamScheduleFiltersComponent_For_51_Template(rf, ctx) {
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
function TeamScheduleFiltersComponent_For_59_Template(rf, ctx) {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamScheduleFiltersComponent, selectors: [["team-schedule-filters"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 60, vars: 55, consts: [[1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "justify-between", "gap-2", "sm:flex-row", "sm:flex-wrap"], ["view", "", 1, "border-base-300", "bg-base-200", "flex", "w-full", "gap-1", "rounded-xl", "border", "p-1", "sm:w-auto"], ["btn", "", "matRipple", "", 1, "hover:bg-base-300", "min-h-10", "flex-1", "gap-2", "whitespace-nowrap", 3, "click", "routerLink", "queryParams"], [1, "text-xl"], [1, "hidden", "sm:block"], [1, "flex", "gap-2"], ["appearance", "outline", 1, "no-subscript", "min-w-64", "flex-1", "sm:flex-0"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-12", "w-28", 3, "click"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-12", "min-w-12", "p-0", 3, "click"], [1, "text-2xl"], [1, "flex", "flex-wrap", "gap-2"], ["appearance", "outline", 1, "no-subscript", "min-w-48", "flex-1", "sm:flex-0"], [3, "ngModelChange", "placeholder", "ngModel"], [3, "value"]], template: function TeamScheduleFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_a_click_3_listener() {
          return ctx.setFilters({ view: "all" });
        });
        \u0275\u0275elementStart(4, "icon", 4);
        \u0275\u0275text(5, "groups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 3);
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_a_click_9_listener() {
          return ctx.setFilters({ view: "favorites" });
        });
        \u0275\u0275elementStart(10, "icon", 4);
        \u0275\u0275text(11, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "a", 3);
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_a_click_15_listener() {
          return ctx.setFilters({ view: "team" });
        });
        \u0275\u0275elementStart(16, "icon", 4);
        \u0275\u0275text(17, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 5);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 6)(22, "mat-form-field", 7)(23, "icon", 8);
        \u0275\u0275text(24, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 9);
        \u0275\u0275listener("ngModelChange", function TeamScheduleFiltersComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.setFilters({ search: $event });
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 10);
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_button_click_26_listener() {
          return ctx.resetToToday();
        });
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 11);
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_button_click_29_listener() {
          return ctx.previousWeek();
        });
        \u0275\u0275elementStart(30, "icon", 12);
        \u0275\u0275text(31, "keyboard_arrow_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 11);
        \u0275\u0275listener("click", function TeamScheduleFiltersComponent_Template_button_click_32_listener() {
          return ctx.nextWeek();
        });
        \u0275\u0275elementStart(33, "icon", 12);
        \u0275\u0275text(34, "keyboard_arrow_right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(35, "div", 13)(36, "mat-form-field", 14)(37, "mat-select", 15);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275listener("ngModelChange", function TeamScheduleFiltersComponent_Template_mat_select_ngModelChange_37_listener($event) {
          return ctx.setFilters({ department: $event });
        });
        \u0275\u0275elementStart(39, "mat-option", 16);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(42, TeamScheduleFiltersComponent_For_43_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-form-field", 14)(45, "mat-select", 15);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275listener("ngModelChange", function TeamScheduleFiltersComponent_Template_mat_select_ngModelChange_45_listener($event) {
          return ctx.setFilters({ office: $event });
        });
        \u0275\u0275elementStart(47, "mat-option", 16);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(50, TeamScheduleFiltersComponent_For_51_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-form-field", 14)(53, "mat-select", 15);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275listener("ngModelChange", function TeamScheduleFiltersComponent_Template_mat_select_ngModelChange_53_listener($event) {
          return ctx.setFilters({ status: $event });
        });
        \u0275\u0275elementStart(55, "mat-option", 16);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(58, TeamScheduleFiltersComponent_For_59_Template, 3, 4, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classProp("clear", ctx.filters().view !== "all");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(49, _c0))("queryParams", \u0275\u0275pureFunction0(50, _c1));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 29, "COMMON.ALL_COLLEAGUES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("clear", ctx.filters().view !== "favorites");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(51, _c0))("queryParams", \u0275\u0275pureFunction0(52, _c2));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 31, "COMMON.FAVOURITES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("clear", ctx.filters().view !== "team");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(53, _c0))("queryParams", \u0275\u0275pureFunction0(54, _c3));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 33, "COMMON.MY_TEAM"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.filters().search);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 35, "COMMON.TODAY"), " ");
        \u0275\u0275advance(10);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 37, "COMMON.ALL_DEPARTMENTS"))("ngModel", ctx.filters().department);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 39, "COMMON.ALL_DEPARTMENTS"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.departments());
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(46, 41, "COMMON.ALL_OFFICES"))("ngModel", ctx.filters().office);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 43, "COMMON.ALL_OFFICES"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.offices());
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(54, 45, "COMMON.ALL_STATUSES"))("ngModel", ctx.filters().status);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 47, "COMMON.ALL_STATUSES"));
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
                        (click)="setFilters({ view: 'team' })"
                    >
                        <icon class="text-xl">person</icon>
                        <div class="hidden sm:block">
                            {{ 'COMMON.MY_TEAM' | translate }}
                        </div>
                    </a>
                </div>
                <div class="flex gap-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript min-w-64 flex-1 sm:flex-0"
                    >
                        <icon matPrefix class="relative -left-1 text-2xl"
                            >search</icon
                        >
                        <input
                            matInput
                            placeholder="Search..."
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
                        (click)="previousWeek()"
                    >
                        <icon class="text-2xl">keyboard_arrow_left</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 min-w-12 p-0"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamScheduleFiltersComponent, { className: "TeamScheduleFiltersComponent", filePath: "apps/workplace/src/app/team-schedule/team-schedule-filters.component.ts", lineNumber: 187 });
})();

// apps/workplace/src/app/team-schedule/team-schedule-list.component.ts
var _c02 = (a0) => ({ "bg-primary/10": a0 });
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
function TeamScheduleListComponent_For_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 20);
    \u0275\u0275text(1, "check_box");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleListComponent_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 21);
    \u0275\u0275text(1, "check_box_outline_blank");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleListComponent_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_5_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const member_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMemberSelection(member_r6));
    });
    \u0275\u0275conditionalCreate(1, TeamScheduleListComponent_For_5_Conditional_1_Conditional_1_Template, 2, 0, "icon", 20)(2, TeamScheduleListComponent_For_5_Conditional_1_Conditional_2_Template, 2, 0, "icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r2.isMemberSelected(member_r6) ? "Deselect" : "Select");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isMemberSelected(member_r6) ? 1 : 2);
  }
}
function TeamScheduleListComponent_For_5_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleListComponent_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 21);
    \u0275\u0275text(1, "star_outline");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleListComponent_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_5_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const member_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavorite(member_r6));
    });
    \u0275\u0275conditionalCreate(1, TeamScheduleListComponent_For_5_Conditional_2_Conditional_1_Template, 2, 0, "icon", 22)(2, TeamScheduleListComponent_For_5_Conditional_2_Conditional_2_Template, 2, 0, "icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", member_r6.is_favorite ? "Remove from favorites" : "Add to favorites");
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r6.is_favorite ? 1 : 2);
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
function TeamScheduleListComponent_For_5_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_5_Conditional_11_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const member_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookNearby(member_r6));
    });
    \u0275\u0275elementStart(1, "div", 26)(2, "icon", 27);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26)(7, "icon", 29);
    \u0275\u0275text(8, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(status_r9.booking.building_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(status_r9.booking.desk_code);
  }
}
function TeamScheduleListComponent_For_5_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TeamScheduleListComponent_For_5_Conditional_11_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const member_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookNearby(member_r6));
    });
    \u0275\u0275elementStart(2, "icon", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const status_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r2.getLocationStyle(status_r9.status).bg_color)("color", ctx_r2.getLocationStyle(status_r9.status).fg_color);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 6, ctx_r2.getLocationStyle(status_r9.status).name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getLocationStyle(status_r9.status).icon, " ");
  }
}
function TeamScheduleListComponent_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TeamScheduleListComponent_For_5_Conditional_11_Conditional_0_Template, 11, 2, "button", 23)(1, TeamScheduleListComponent_For_5_Conditional_11_Conditional_1_Template, 4, 8, "button", 24);
  }
  if (rf & 2) {
    const status_r9 = ctx;
    \u0275\u0275conditional(status_r9.status === "office" && status_r9.booking ? 0 : 1);
  }
}
function TeamScheduleListComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, TeamScheduleListComponent_For_5_Conditional_1_Template, 3, 2, "button", 12)(2, TeamScheduleListComponent_For_5_Conditional_2_Template, 3, 2, "button", 12);
    \u0275\u0275element(3, "a-user-avatar", 13);
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TeamScheduleListComponent_For_5_Conditional_8_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, TeamScheduleListComponent_For_5_Conditional_11_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const member_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.select_mode() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", member_r6.user);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", member_r6.user.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", member_r6.user.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r6.is_my_team ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", member_r6.department, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r2.getMemberStatus(member_r6)) ? 11 : -1, tmp_16_0);
  }
}
function TeamScheduleListComponent_ForEmpty_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
    \u0275\u0275elementStart(1, "p", 32);
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
    \u0275\u0275elementStart(0, "icon", 33);
    \u0275\u0275text(1, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 34);
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
function TeamScheduleListComponent_ForEmpty_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 33);
    \u0275\u0275text(1, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 34);
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
    \u0275\u0275conditionalCreate(1, TeamScheduleListComponent_ForEmpty_6_Conditional_1_Template, 4, 3)(2, TeamScheduleListComponent_ForEmpty_6_Conditional_2_Template, 8, 6)(3, TeamScheduleListComponent_ForEmpty_6_Conditional_3_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading() ? 1 : ctx_r2.total_members() === 0 ? 2 : 3);
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
  bookNearby(member) {
    const day_index = this._service.active_day_index();
    const day = this._service.week_days()[day_index];
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
    this._dialog.open(AddColleaguesModalComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "panel",
      data: {}
    });
  }
  static {
    this.\u0275fac = function TeamScheduleListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamScheduleListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamScheduleListComponent, selectors: [["team-schedule-list"]], decls: 14, vars: 6, consts: [[1, "border-base-300", "flex", "overflow-x-auto", "border-b"], [1, "border-base-300", "flex", "min-w-20", "flex-1", "flex-col", "items-center", "justify-center", "border-r", "border-b-2", "px-3", "py-2", "last:border-r-0", 3, "ngClass", "border-b-transparent", "border-b-primary"], [1, "flex", "flex-col", "gap-3", "p-4"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-3"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16"], [1, "flex", "justify-center", "pt-4"], [1, "border-base-300", "hover:bg-base-200", "flex", "items-center", "gap-2", "rounded-lg", "border", "px-4", "py-2", "transition-colors", 3, "click"], [1, "text-xl"], [1, "border-base-300", "flex", "min-w-20", "flex-1", "flex-col", "items-center", "justify-center", "border-r", "border-b-2", "px-3", "py-2", "last:border-r-0", 3, "click", "ngClass"], [1, "text-xs", "uppercase"], [1, "text-sm", "font-medium"], [1, "text-secondary", "text-xs", "font-medium"], [1, "shrink-0", 3, "matTooltip"], [1, "shrink-0", 3, "user"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "truncate", "font-medium", 3, "title"], [1, "bg-brand-100/20", "text-brand-100", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-xs", "font-medium"], [1, "text-base-content/60", "text-sm"], [1, "shrink-0", 3, "click", "matTooltip"], [1, "text-primary", "text-2xl"], [1, "text-base-content/30", "text-2xl"], [1, "text-warning", "text-2xl"], ["matTooltip", "Book nearby", 1, "bg-info-light/30", "hover:bg-info-light/40", "flex", "shrink-0", "flex-col", "rounded-lg", "px-3", "py-2", "transition-colors"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", 3, "background-color", "color", "matTooltip"], ["matTooltip", "Book nearby", 1, "bg-info-light/30", "hover:bg-info-light/40", "flex", "shrink-0", "flex-col", "rounded-lg", "px-3", "py-2", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-1", "text-xs"], [1, "text-brand-200", "text-sm"], [1, "truncate"], [1, "text-success", "text-sm"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", 3, "click", "matTooltip"], [1, "border-primary", "h-8", "w-8", "animate-spin", "rounded-full", "border-2", "border-t-transparent"], [1, "text-base-content/60", "mt-4", "text-sm"], [1, "text-base-content/30", "text-5xl"], [1, "text-base-content/40", "mt-1", "text-xs"]], template: function TeamScheduleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, TeamScheduleListComponent_For_2_Template, 8, 18, "button", 1, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275repeaterCreate(4, TeamScheduleListComponent_For_5_Template, 12, 7, "div", 3, _forTrack1, false, TeamScheduleListComponent_ForEmpty_6_Template, 4, 1, "div", 4);
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
                        <button
                            class="shrink-0"
                            (click)="toggleMemberSelection(member)"
                            [matTooltip]="
                                isMemberSelected(member) ? 'Deselect' : 'Select'
                            "
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
                        <button
                            class="shrink-0"
                            (click)="toggleFavorite(member)"
                            [matTooltip]="
                                member.is_favorite
                                    ? 'Remove from favorites'
                                    : 'Add to favorites'
                            "
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
                        @if (status.status === 'office' && status.booking) {
                            <button
                                class="bg-info-light/30 hover:bg-info-light/40 flex shrink-0 flex-col rounded-lg px-3 py-2 transition-colors"
                                (click)="bookNearby(member)"
                                matTooltip="Book nearby"
                            >
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
                            <button
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                [style.background-color]="
                                    getLocationStyle(status.status).bg_color
                                "
                                [style.color]="
                                    getLocationStyle(status.status).fg_color
                                "
                                (click)="bookNearby(member)"
                                [matTooltip]="
                                    getLocationStyle(status.status).name
                                        | translate
                                "
                            >
                                <icon class="text-xl">
                                    {{ getLocationStyle(status.status).icon }}
                                </icon>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamScheduleListComponent, { className: "TeamScheduleListComponent", filePath: "apps/workplace/src/app/team-schedule/team-schedule-list.component.ts", lineNumber: 233 });
})();

// apps/workplace/src/app/team-schedule/team-schedule-table.component.ts
var _c03 = (a0) => ({ "bg-brand-200/20": a0 });
var _c12 = (a0) => ({ "bg-brand-200/10": a0 });
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
function TeamScheduleTableComponent_For_23_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 35);
    \u0275\u0275text(1, "check_box");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleTableComponent_For_23_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 36);
    \u0275\u0275text(1, "check_box_outline_blank");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleTableComponent_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function TeamScheduleTableComponent_For_23_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const member_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMemberSelection(member_r5));
    });
    \u0275\u0275conditionalCreate(1, TeamScheduleTableComponent_For_23_Conditional_2_Conditional_1_Template, 2, 0, "icon", 35)(2, TeamScheduleTableComponent_For_23_Conditional_2_Conditional_2_Template, 2, 0, "icon", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r2.isMemberSelected(member_r5) ? "Deselect" : "Select");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isMemberSelected(member_r5) ? 1 : 2);
  }
}
function TeamScheduleTableComponent_For_23_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 37);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleTableComponent_For_23_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 36);
    \u0275\u0275text(1, "star_outline");
    \u0275\u0275elementEnd();
  }
}
function TeamScheduleTableComponent_For_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function TeamScheduleTableComponent_For_23_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const member_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavorite(member_r5));
    });
    \u0275\u0275conditionalCreate(1, TeamScheduleTableComponent_For_23_Conditional_3_Conditional_1_Template, 2, 0, "icon", 37)(2, TeamScheduleTableComponent_For_23_Conditional_3_Conditional_2_Template, 2, 0, "icon", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", member_r5.is_favorite ? "Remove from favorites" : "Add to favorites");
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r5.is_favorite ? 1 : 2);
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
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r5.department);
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
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r5.current_building);
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
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r5.current_desk);
  }
}
function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const day_r8 = \u0275\u0275nextContext(2).$implicit;
      const member_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookNearby(member_r5, day_r8));
    });
    \u0275\u0275elementStart(1, "div", 43)(2, "icon", 44);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "icon", 46);
    \u0275\u0275text(8, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(status_r9.booking.building_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(status_r9.booking.desk_code);
  }
}
function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const day_r8 = \u0275\u0275nextContext(2).$implicit;
      const member_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookNearby(member_r5, day_r8));
    });
    \u0275\u0275elementStart(2, "icon", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const status_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", ctx_r2.getLocationStyle(status_r9.status).bg_color)("color", ctx_r2.getLocationStyle(status_r9.status).fg_color);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 6, ctx_r2.getLocationStyle(status_r9.status).name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getLocationStyle(status_r9.status).icon);
  }
}
function TeamScheduleTableComponent_For_23_For_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_0_Template, 11, 2, "button", 40)(1, TeamScheduleTableComponent_For_23_For_15_Conditional_1_Conditional_1_Template, 4, 8, "button", 41);
  }
  if (rf & 2) {
    const status_r9 = ctx;
    \u0275\u0275conditional(status_r9.status === "office" && status_r9.booking ? 0 : 1);
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
    const day_r8 = ctx.$implicit;
    const \u0275$index_130_r11 = ctx.$index;
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c12, day_r8.is_today));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = member_r5.statuses[\u0275$index_130_r11]) ? 1 : -1, tmp_22_0);
  }
}
function TeamScheduleTableComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 26);
    \u0275\u0275conditionalCreate(2, TeamScheduleTableComponent_For_23_Conditional_2_Template, 3, 2, "button", 27)(3, TeamScheduleTableComponent_For_23_Conditional_3_Template, 3, 2, "button", 27);
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
    const member_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.select_mode() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", member_r5.user);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", member_r5.user.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r5.user.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r5.is_my_team ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(member_r5.department ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r5.current_building ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r5.current_desk ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.week_days());
  }
}
function TeamScheduleTableComponent_ForEmpty_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 49);
    \u0275\u0275elementStart(1, "p", 50);
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
    \u0275\u0275elementStart(0, "icon", 51);
    \u0275\u0275text(1, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 50);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 52);
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
function TeamScheduleTableComponent_ForEmpty_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 51);
    \u0275\u0275text(1, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 54);
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
    \u0275\u0275conditionalCreate(1, TeamScheduleTableComponent_ForEmpty_24_Conditional_1_Template, 4, 3)(2, TeamScheduleTableComponent_ForEmpty_24_Conditional_2_Template, 8, 6)(3, TeamScheduleTableComponent_ForEmpty_24_Conditional_3_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading() ? 1 : ctx_r2.total_members() === 0 ? 2 : 3);
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
  bookNearby(member, day) {
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
    this._dialog.open(AddColleaguesModalComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "panel",
      data: {}
    });
  }
  static {
    this.\u0275fac = function TeamScheduleTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamScheduleTableComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamScheduleTableComponent, selectors: [["team-schedule-table"]], decls: 32, vars: 14, consts: [[1, "flex", "flex-wrap", "justify-between", "gap-4", "p-4"], [1, "flex", "flex-wrap", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "text-base-content/60", "flex", "items-center", "gap-2"], [1, "text-sm"], [1, "ml-4", "font-medium"], [1, "schedule-grid", "border-base-300", "w-full", "overflow-auto", "border-t"], [1, "bg-base-200/50", "text-base-content/70", "contents", "text-sm", "font-medium"], [1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-10", "flex", "items-end", "border-b", "px-4", "py-3"], [1, "font-semibold"], [1, "text-base-content/50", "ml-2"], [1, "border-base-300", "flex", "items-center", "justify-center", "gap-4", "border-b", "border-l", "p-2", 3, "ngClass"], [1, "group", "contents"], [1, "border-base-300", "col-span-full", "flex", "flex-col", "items-center", "justify-center", "border-t", "py-16"], [1, "flex", "justify-center", "p-2"], ["btn", "", 1, "w-48", 3, "click"], [1, "mr-2", "text-xl"], [1, "mr-2"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded", "shadow"], [1, "text-base"], [1, "flex", "flex-col", "items-center", "leading-none"], [1, "text-lg", "uppercase"], [1, "text-secondary", "relative", "-top-1", "text-sm"], [1, "flex", "flex-col", "items-center", "leading-none", "font-medium"], [1, "text-2xl"], [1, "relative", "-top-1", "font-bold"], [1, "border-base-300", "bg-base-100", "group-hover:bg-base-200/50", "sticky", "left-0", "z-10", "flex", "items-center", "gap-3", "border-b", "px-4", "py-3"], [1, "shrink-0", 3, "matTooltip"], [1, "shrink-0", 3, "user"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium", 3, "title"], [1, "bg-brand-100/20", "text-brand-100", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-xs", "font-medium"], [1, "text-base-content/60", "flex", "flex-wrap", "items-center", "gap-1", "text-sm"], [1, "border-base-300", "group-hover:bg-base-200/50", "flex", "items-center", "justify-center", "border-b", "border-l", "p-2", 3, "ngClass"], [1, "shrink-0", 3, "click", "matTooltip"], [1, "text-primary", "text-xl"], [1, "text-base-content/30", "text-xl"], [1, "text-warning", "text-xl"], [1, "text-base-content/40"], [1, "text-primary", "text-sm"], ["matTooltip", "Book nearby", 1, "bg-info-light/30", "hover:bg-info-light/40", "flex", "w-full", "max-w-30", "flex-col", "rounded-lg", "px-3", "py-2", "transition-colors"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "background-color", "color", "matTooltip"], ["matTooltip", "Book nearby", 1, "bg-info-light/30", "hover:bg-info-light/40", "flex", "w-full", "max-w-30", "flex-col", "rounded-lg", "px-3", "py-2", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-1", "text-xs"], [1, "text-brand-200", "text-sm"], [1, "truncate"], [1, "text-success", "text-sm"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click", "matTooltip"], [1, "text-xl"], ["diameter", "32"], [1, "text-base-content/60", "mt-4"], [1, "text-base-content/60", "text-5xl"], [1, "text-base-content/40", "mt-1", "text-sm"], [1, "text-base-content/60", "mt-4", "text-sm"], [1, "text-base-content/40", "mt-1", "text-xs"]], template: function TeamScheduleTableComponent_Template(rf, ctx) {
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
        \u0275\u0275repeaterCreate(22, TeamScheduleTableComponent_For_23_Template, 16, 8, "div", 12, _forTrack2, false, TeamScheduleTableComponent_ForEmpty_24_Template, 4, 1, "div", 13);
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
                            <button
                                class="shrink-0"
                                (click)="toggleMemberSelection(member)"
                                [matTooltip]="
                                    isMemberSelected(member)
                                        ? 'Deselect'
                                        : 'Select'
                                "
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
                            <button
                                class="shrink-0"
                                (click)="toggleFavorite(member)"
                                [matTooltip]="
                                    member.is_favorite
                                        ? 'Remove from favorites'
                                        : 'Add to favorites'
                                "
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
                                        class="bg-info-light/30 hover:bg-info-light/40 flex w-full max-w-30 flex-col rounded-lg px-3 py-2 transition-colors"
                                        (click)="bookNearby(member, day)"
                                        matTooltip="Book nearby"
                                    >
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
                                    <button
                                        class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                                        [style.background-color]="
                                            getLocationStyle(status.status)
                                                .bg_color
                                        "
                                        [style.color]="
                                            getLocationStyle(status.status)
                                                .fg_color
                                        "
                                        (click)="bookNearby(member, day)"
                                        [matTooltip]="
                                            getLocationStyle(status.status).name
                                                | translate
                                        "
                                    >
                                        <icon class="text-xl">{{
                                            getLocationStyle(status.status).icon
                                        }}</icon>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamScheduleTableComponent, { className: "TeamScheduleTableComponent", filePath: "apps/workplace/src/app/team-schedule/team-schedule-table.component.ts", lineNumber: 328 });
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
  constructor() {
    this.hide_nav = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_nav" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function TeamScheduleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamScheduleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamScheduleComponent, selectors: [["team-schedule"]], decls: 13, vars: 2, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden"], [1, "bg-base-200", "relative", "flex", "h-1/2", "flex-1", "overflow-auto"], [1, "mx-auto", "w-fit", "min-w-full", "gap-4", "p-4"], [1, "mb-4", "block"], [1, "bg-base-100", "overflow-hidden", "rounded-lg", "shadow"], [1, "hidden", "sm:block"], [1, "block", "sm:hidden"], [1, "h-4", "min-h-px", "w-full"]], template: function TeamScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, TeamScheduleComponent_Conditional_1_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2);
        \u0275\u0275element(4, "team-quick-actions", 3)(5, "team-schedule-filters", 3);
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "team-schedule-table", 5)(8, "team-schedule-list", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, TeamScheduleComponent_Conditional_11_Template, 1, 0, "footer-menu");
        \u0275\u0275element(12, "div");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_nav() ? 1 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(!ctx.hide_nav() ? 11 : -1);
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
            @if (!hide_nav()) {
                <topbar />
            }
            <div class="bg-base-200 relative flex h-1/2 flex-1 overflow-auto">
                <div class="mx-auto w-fit min-w-full gap-4 p-4">
                    <team-quick-actions class="mb-4 block" />
                    <team-schedule-filters class="mb-4 block" />
                    <div class="bg-base-100 overflow-hidden rounded-lg shadow">
                        <team-schedule-table class="hidden sm:block" />
                        <team-schedule-list class="block sm:hidden" />
                    </div>
                    <div class="h-4 min-h-px w-full"></div>
                </div>
                <virtual-concierge-button />
            </div>
            @if (!hide_nav()) {
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamScheduleComponent, { className: "TeamScheduleComponent", filePath: "apps/workplace/src/app/team-schedule/team-schedule.component.ts", lineNumber: 46 });
})();
export {
  TeamScheduleComponent
};
//# sourceMappingURL=team-schedule.component-D3F72AMJ.js.map
