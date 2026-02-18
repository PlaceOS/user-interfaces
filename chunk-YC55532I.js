import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AsyncHandler,
  AuthenticatedImageDirective,
  Component,
  ElementRef,
  IconComponent,
  MatRipple,
  MatRippleModule,
  OrganisationService,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SettingsService,
  UserAvatarComponent,
  UserControlsSidebarComponent,
  currentUser,
  debounceTime,
  filter,
  firstTruthyValueFrom,
  i18n,
  inject,
  setClassMetadata,
  signal,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CABWWIQI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// apps/concierge/src/app/ui/app-sidebar.component.ts
var _forTrack0 = ($index, $item) => $item.id + "" + $index;
function ApplicationSidebarComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1)(1, "icon", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", link_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.name);
  }
}
function ApplicationSidebarComponent_For_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ApplicationSidebarComponent_For_2_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const link_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_block[link_r1.id || link_r1._id] = !ctx_r2.show_block[link_r1.id || link_r1._id]);
    });
    \u0275\u0275elementStart(1, "icon", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 8);
    \u0275\u0275text(6, "arrow_drop_down");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r1.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r1.name, " ");
  }
}
function ApplicationSidebarComponent_For_2_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275element(1, "icon", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", child_r4.route);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r4.name);
  }
}
function ApplicationSidebarComponent_For_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275repeaterCreate(1, ApplicationSidebarComponent_For_2_Conditional_1_Conditional_1_For_2_Template, 4, 2, "a", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@show", !ctx_r2.show_block[link_r1.id || link_r1._id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(link_r1.children);
  }
}
function ApplicationSidebarComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApplicationSidebarComponent_For_2_Conditional_1_Conditional_0_Template, 7, 2, "button", 4);
    \u0275\u0275conditionalCreate(1, ApplicationSidebarComponent_For_2_Conditional_1_Conditional_1_Template, 3, 1, "section", 5);
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((link_r1.children == null ? null : link_r1.children.length) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((link_r1.children == null ? null : link_r1.children.length) ? 1 : -1);
  }
}
function ApplicationSidebarComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApplicationSidebarComponent_For_2_Conditional_0_Template, 5, 3, "a", 1)(1, ApplicationSidebarComponent_For_2_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275conditional(!link_r1.children ? 0 : 1);
  }
}
var _ApplicationSidebarComponent = class _ApplicationSidebarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._element_ref = inject(ElementRef);
    this.show_block = {};
    this.links = [];
    this.filtered_links = signal([]);
  }
  get feature_list() {
    return this._settings.get("app.features") || [];
  }
  get feature_groups() {
    return this._settings.get("app.feature_groups") || {};
  }
  get is_admin() {
    const groups = currentUser().groups || [];
    const admin_group = this._settings.get("app.admin_group") || "admin";
    return groups.includes(admin_group) || groups.includes("placeos_admin") || groups.includes("placeos_support");
  }
  async ngOnInit() {
    await firstTruthyValueFrom(this._org.initialised);
    this.links = [
      {
        name: i18n("APP.CONCIERGE.MENU_BOOKINGS"),
        icon: "add_circle",
        children: [
          {
            id: "spaces",
            name: i18n("APP.CONCIERGE.MENU_ROOM_BOOKINGS"),
            route: ["/book/rooms"]
          },
          {
            id: "parking",
            name: i18n("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),
            route: ["/book/parking/events"]
          },
          {
            id: "parking-bookings",
            name: i18n("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),
            route: ["/book/parking/events"]
          },
          {
            id: "lockers",
            name: i18n("APP.CONCIERGE.MENU_LOCKER_BOOKINGS"),
            route: ["/book/lockers/events"]
          },
          {
            id: "assets",
            name: i18n("APP.CONCIERGE.MENU_ASSET_BOOKINGS"),
            route: ["/book/assets/list/requests"]
          },
          {
            id: "catering",
            name: i18n("APP.CONCIERGE.MENU_CATERING_BOOKINGS"),
            route: ["/book/catering/orders"]
          },
          {
            id: "visitors",
            name: i18n("APP.CONCIERGE.MENU_VISITOR_BOOKINGS"),
            route: ["/book/visitors"]
          },
          {
            id: "visitor-rules",
            name: i18n("APP.CONCIERGE.MENU_VISITOR_RULES"),
            route: ["/book/visitors/rules"]
          }
        ]
      },
      {
        id: "facilities",
        name: i18n("APP.CONCIERGE.MENU_MANAGEMENT"),
        icon: "place",
        children: [
          // {
          //     id: 'facilities',
          //     name: 'Building Map',
          //     route: ['/facilities'],
          // },
          {
            id: "zones",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_ZONES"),
            route: ["/zone-management"]
          },
          {
            id: "spaces",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_ROOMS"),
            route: ["/room-management"]
          },
          {
            id: "parking",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_PARKING"),
            route: ["/book/parking/manage"]
          },
          {
            id: "parking-manage",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_PARKING"),
            route: ["/book/parking/manage"]
          },
          {
            id: "lockers",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_LOCKERS"),
            route: ["/book/lockers/manage"]
          },
          {
            id: "catering",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_CATERING"),
            route: ["/book/catering/menu"]
          },
          {
            id: "points",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_POINTS"),
            route: ["/points-management"]
          },
          {
            id: "emergency-contacts",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_CONTACTS"),
            icon: "assignment_ind",
            route: ["/users/staff/emergency-contacts"]
          },
          {
            id: "signage",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_SIGNAGE"),
            route: ["/signage"]
          },
          {
            id: "points-of-interest",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES"),
            route: ["/points-of-interest"]
          },
          {
            id: "url-management",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_URLS"),
            route: ["/url-management"]
          },
          {
            id: "email-templates",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_EMAILS"),
            route: ["/email-templates"]
          },
          {
            id: "deals-n-offers",
            name: i18n("APP.CONCIERGE.MENU_MANAGE_DEALS"),
            route: ["/deals-n-offers"]
          }
        ]
      },
      {
        id: "assets",
        name: i18n("APP.CONCIERGE.MENU_ASSETS"),
        route: ["/book/assets/list/items"],
        icon: "vibration"
      },
      {
        name: "Service Management",
        route: ["/services"],
        icon: "home_repair_service"
      },
      {
        id: "internal-users",
        name: i18n("APP.CONCIERGE.MENU_USER_LIST"),
        icon: "assignment_ind",
        route: ["/users/staff"]
      },
      {
        id: "events",
        name: i18n("APP.CONCIERGE.MENU_EVENTS"),
        route: ["/entertainment/events"],
        icon: "confirmation_number"
      },
      {
        id: "surveys",
        name: i18n("APP.CONCIERGE.MENU_SURVEYS"),
        route: ["/surveys"],
        icon: "add_reaction"
      },
      {
        _id: "reports",
        name: i18n("APP.CONCIERGE.MENU_REPORTS"),
        icon: "analytics",
        children: [
          {
            id: "booking-report",
            name: "Venue Bookings",
            route: ["/reports/bookings"]
          },
          {
            id: "parking-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_PARKING"),
            route: ["/reports/parking"]
          },
          {
            id: "lockers-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_LOCKERS"),
            route: ["/reports/lockers"]
          },
          {
            id: "catering-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_CATERING"),
            route: ["/reports/catering"]
          },
          {
            id: "contact-tracing-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING"),
            route: ["/reports/contact-tracing"]
          },
          {
            id: "assets-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_ASSETS"),
            route: ["/reports/assets"]
          },
          {
            id: "visitors-report",
            name: i18n("APP.CONCIERGE.MENU_REPORT_VISITORS"),
            route: ["/reports/visitors"]
          }
        ]
      }
    ];
    this.updateFilteredLinks();
    this.subscription("building", this._org.active_building.pipe(filter((_) => !!_), debounceTime(100)).subscribe(() => this.timeout("update_links", () => this.updateFilteredLinks(), 500)));
    this.timeout("update_inview", () => this._moveActiveLinkIntoView(), 50);
    this.timeout("update_links", () => this.updateFilteredLinks(), 500);
  }
  _isFeatureAvailable(name) {
    if (name.startsWith("*")) {
      return true;
    }
    const has_feature = this.feature_list.includes(name);
    const feature_groups = this.feature_groups[name] || [];
    const groups = currentUser().groups;
    if (has_feature && (this.is_admin || !feature_groups.length || groups.find((grp) => feature_groups.includes(grp)))) {
      return true;
    }
    return false;
  }
  updateFilteredLinks() {
    const custom_reports = this._settings.get("app.custom_reports") || [];
    if (custom_reports.length && this.links.find((_) => _._id === "reports")) {
      const reports = this.links.find((_) => _._id === "reports");
      reports.children = unique(reports.children.concat(custom_reports.map((_) => __spreadProps(__spreadValues({}, _), {
        id: `*${_.id}`,
        route: ["/reports", _.id]
      }))), "id");
    }
    this.filtered_links.set(this.links.map((link) => __spreadProps(__spreadValues({}, link), {
      children: link.children ? link.children.filter((_) => this._isFeatureAvailable(_.id)) : null
    })).filter((_) => (!_.id || _.id === "home" || this._isFeatureAvailable(_.id)) && _.route || _.children?.length));
    if (this.filtered_links().find((_) => _.id === "home")) {
      const link = this.filtered_links().find((_) => _.id === "home");
      link.route = this._settings.get("app.default_route") || ["/"];
    }
    if (!this.is_admin) {
      this.filtered_links.update((links) => links.filter((_) => _.id !== "facilities"));
    }
  }
  _moveActiveLinkIntoView() {
    const active_link = this._element_ref.nativeElement.querySelector("a.active");
    if (!active_link)
      return;
    active_link.scrollIntoView({
      block: "center",
      behavior: "instant"
    });
  }
};
_ApplicationSidebarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ApplicationSidebarComponent_BaseFactory;
  return function ApplicationSidebarComponent_Factory(__ngFactoryType__) {
    return (\u0275ApplicationSidebarComponent_BaseFactory || (\u0275ApplicationSidebarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ApplicationSidebarComponent)))(__ngFactoryType__ || _ApplicationSidebarComponent);
  };
})();
_ApplicationSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationSidebarComponent, selectors: [["app-sidebar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [[1, "border-base-200", "h-full", "w-64", "overflow-auto", "border-r", "py-2", "pr-3"], ["matRipple", "", "routerLinkActive", "active", 1, "hover:bg-base-200", "my-1", "flex", "w-full", "items-center", "space-x-2", "rounded-r-full", "p-1", 3, "routerLink"], [1, "text-2xl", "opacity-60"], [1, "font-medium"], ["matRipple", "", 1, "hover:bg-base-200", "my-1", "flex", "w-full", "items-center", "space-x-2", "rounded-r-full", "p-1"], [1, "w-full", "overflow-hidden"], ["matRipple", "", 1, "hover:bg-base-200", "my-1", "flex", "w-full", "items-center", "space-x-2", "rounded-r-full", "p-1", 3, "click"], [1, "flex-1", "text-left", "font-medium"], [1, "text-2xl"], ["routerLinkActive", "active", 1, "hover:bg-base-200", "my-1", "flex", "w-full", "items-center", "space-x-2", "rounded-r-full", "p-1", 3, "routerLink"]], template: function ApplicationSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ApplicationSidebarComponent_For_2_Template, 2, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.filtered_links());
  }
}, dependencies: [RouterModule, RouterLink, RouterLinkActive, MatRippleModule, MatRipple, IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\na.active[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\na.active[_ngcontent-%COMP%]:hover {\n  color: var(--base-content);\n  opacity: 0.75;\n}\n/*# sourceMappingURL=app-sidebar.component.css.map */"], data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var ApplicationSidebarComponent = _ApplicationSidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", template: `
        <div
            class="border-base-200 h-full w-64 overflow-auto border-r py-2 pr-3"
        >
            @for (link of filtered_links(); track link.id + '' + $index) {
                @if (!link.children) {
                    <a
                        matRipple
                        class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                        [routerLink]="link.route"
                        routerLinkActive="active"
                    >
                        <icon class="text-2xl opacity-60">{{ link.icon }}</icon>
                        <span class="font-medium">{{ link.name }}</span>
                    </a>
                } @else {
                    @if (link.children?.length) {
                        <button
                            matRipple
                            class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                            (click)="
                                show_block[link.id || link._id] =
                                    !show_block[link.id || link._id]
                            "
                        >
                            <icon class="text-2xl opacity-60">
                                {{ link.icon }}
                            </icon>
                            <div class="flex-1 text-left font-medium">
                                {{ link.name }}
                            </div>
                            <icon class="text-2xl">arrow_drop_down</icon>
                        </button>
                    }
                    @if (link.children?.length) {
                        <section
                            class="w-full overflow-hidden"
                            [@show]="
                                !show_block[link.id || link._id]
                                    ? 'show'
                                    : 'hide'
                            "
                        >
                            @for (child of link.children; track child) {
                                <a
                                    class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                                    [routerLink]="child.route"
                                    routerLinkActive="active"
                                >
                                    <icon class="text-2xl"></icon>
                                    <span>{{ child.name }}</span>
                                </a>
                            }
                        </section>
                    }
                }
            }
        </div>
    `, animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [RouterModule, MatRippleModule, IconComponent], styles: ["/* angular:styles/component:css;16f026b0cd79cf99fd5847e1262b1714d61b9cb4f6a812ea3e15fe855e48f1d1;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-sidebar.component.ts */\n:host {\n  height: 100%;\n}\na.active {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\na.active:hover {\n  color: var(--base-content);\n  opacity: 0.75;\n}\n/*# sourceMappingURL=app-sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationSidebarComponent, { className: "ApplicationSidebarComponent", filePath: "apps/concierge/src/app/ui/app-sidebar.component.ts", lineNumber: 98 });
})();

// apps/concierge/src/app/ui/app-topbar.component.ts
var _c0 = () => ["/"];
var _ApplicationTopbarComponent = class _ApplicationTopbarComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
  }
  get logo() {
    return (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {};
  }
  get user() {
    return currentUser();
  }
};
_ApplicationTopbarComponent.\u0275fac = function ApplicationTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApplicationTopbarComponent)();
};
_ApplicationTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationTopbarComponent, selectors: [["app-topbar"]], decls: 10, vars: 4, consts: [[1, "border-base-200", "flex", "items-center", "border-b", "p-2"], [1, "w-64"], [3, "routerLink"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex", "flex-1", "items-center", "justify-end", "space-x-2"], ["btn", "", "icon", "", "matRipple", ""], [1, "text-2xl"], [1, "mr-2"], [3, "user"]], template: function ApplicationTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "button", 5)(6, "icon", 6);
    \u0275\u0275text(7, "notifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "user-controls-sidebar", 7);
    \u0275\u0275element(9, "a-user-avatar", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("source", (ctx.logo == null ? null : ctx.logo.src) || ctx.logo);
    \u0275\u0275advance(6);
    \u0275\u0275property("user", ctx.user);
  }
}, dependencies: [
  RouterModule,
  RouterLink,
  UserAvatarComponent,
  MatRippleModule,
  MatRipple,
  AuthenticatedImageDirective,
  IconComponent,
  UserControlsSidebarComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=app-topbar.component.css.map */"] });
var ApplicationTopbarComponent = _ApplicationTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationTopbarComponent, [{
    type: Component,
    args: [{ selector: "app-topbar", template: `
        <div class="border-base-200 flex items-center border-b p-2">
            <div class="w-64">
                <a [routerLink]="['/']">
                    <img auth class="h-12" [source]="logo?.src || logo" />
                </a>
            </div>
            <!-- <mat-form-field
                appearance="outline"
                class="flex-1 max-w-[65vw] h-13"
            >
                <icon matPrefix class="text-2xl relative -left-1">
                    search
                </icon>
                <input
                    matInput
                    placeholder="Search for bookings, people or locations"
                />
            </mat-form-field> -->
            <div class="flex flex-1 items-center justify-end space-x-2">
                <button btn icon matRipple>
                    <icon class="text-2xl">notifications</icon>
                </button>
                <user-controls-sidebar class="mr-2">
                    <a-user-avatar [user]="user"></a-user-avatar>
                </user-controls-sidebar>
            </div>
        </div>
    `, imports: [
      RouterModule,
      UserAvatarComponent,
      MatRippleModule,
      AuthenticatedImageDirective,
      IconComponent,
      UserControlsSidebarComponent
    ], styles: ["/* angular:styles/component:css;8f1598eabb5851faa0aa50753a7849bdec2ea83af5dd5d861f90aba4becc5d8c;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-topbar.component.ts */\n:host {\n  width: 100%;\n}\n/*# sourceMappingURL=app-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationTopbarComponent, { className: "ApplicationTopbarComponent", filePath: "apps/concierge/src/app/ui/app-topbar.component.ts", lineNumber: 63 });
})();

export {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
};
//# sourceMappingURL=chunk-YC55532I.js.map
