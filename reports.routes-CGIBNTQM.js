import {
  ApplicationSidebarComponent
} from "./chunk-4672ILAR.js";
import "./chunk-FI33EV2G.js";
import "./chunk-TN5N7BOW.js";
import "./chunk-XF7VXPW2.js";
import "./chunk-XHHUJX6A.js";
import "./chunk-NZLGCZU2.js";
import "./chunk-56OYX3BL.js";
import "./chunk-FZ7AIFRE.js";
import "./chunk-BMQKHWAC.js";
import "./chunk-EPT6QV6G.js";
import "./chunk-TZ5JUV4G.js";
import "./chunk-UHYZ3QEX.js";
import "./chunk-CAAMUB2D.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-YVNE7QXT.js";
import "./chunk-ZVSHIGFS.js";
import "./chunk-3DBDHK6S.js";
import "./chunk-4VWJLUSZ.js";
import "./chunk-HLTSGFYE.js";
import "./chunk-JQJNBBNN.js";
import "./chunk-DQE2CGAH.js";
import {
  TranslatePipe
} from "./chunk-JCEMX2GO.js";
import "./chunk-MCWEYL2F.js";
import "./chunk-C5SFKFXB.js";
import {
  SettingsService
} from "./chunk-DOLIX6FW.js";
import {
  AsyncHandler
} from "./chunk-ZBK6XVOU.js";
import {
  IconComponent
} from "./chunk-BSQA34BX.js";
import "./chunk-PYWAX25U.js";
import "./chunk-QQKECY2M.js";
import "./chunk-F5BJYE7W.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import "./chunk-BF2TDFXD.js";
import "./chunk-R7WRISTA.js";
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-TFYF4ALL.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EOGESHX7.js";
import "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/reports-menu.component.ts
var _c0 = () => ["/reports", "desks"];
var _c1 = () => ["/reports", "bookings"];
var _c2 = () => ["/reports", "attendance"];
var _c3 = () => ["/reports", "catering"];
var _c4 = () => ["/reports", "contact-tracing"];
var _c5 = () => ["/reports", "user"];
var _c6 = (a0) => ["/reports", a0];
function ReportsMenuComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "icon", 3);
    \u0275\u0275text(2, "room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 4);
    \u0275\u0275text(4, "Desks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 6);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ReportsMenuComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "icon", 3);
    \u0275\u0275text(2, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 4);
    \u0275\u0275text(4, "Rooms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 6);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c1));
  }
}
function ReportsMenuComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "icon", 3);
    \u0275\u0275text(2, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "p");
    \u0275\u0275text(8, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 6);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE"), " ");
  }
}
function ReportsMenuComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "icon", 3);
    \u0275\u0275text(2, "room_service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 4);
    \u0275\u0275text(4, "Catering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 6);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c3));
  }
}
function ReportsMenuComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "icon", 3);
    \u0275\u0275text(2, "connect_without_contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 4);
    \u0275\u0275text(4, "Contact Tracing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 6);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c4));
  }
}
function ReportsMenuComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "icon", 3);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "p");
    \u0275\u0275text(8, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 6);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.CONCIERGE.MENU_REPORT_USER"), " ");
  }
}
function ReportsMenuComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "icon", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 6);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const report_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c6, report_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", report_r1.name, " ");
  }
}
var DEFAULT_FEATURES = [
  "attendance",
  "desks",
  "spaces",
  "catering",
  "contact-tracing"
];
var ReportsMenuComponent = class _ReportsMenuComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.custom_reports = this._settings.signal("app.custom_reports", [], true);
    this.features = this._settings.signal("app.reports.features", DEFAULT_FEATURES, true);
  }
  static {
    this.\u0275fac = function ReportsMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportsMenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsMenuComponent, selectors: [["reports-menu"], ["", "reports-menu", ""]], decls: 10, vars: 6, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "items-center", "justify-center", "overflow-auto"], [1, "grid", "w-full", "justify-items-center"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center", "rounded-sm", "border", "p-4", "shadow-sm", "hover:opacity-80", 3, "routerLink"], [1, "text-8xl"], [1, "mb-4", "text-xl", "font-bold"], [1, "flex", "items-center"], [1, "ml-2"], [1, "mb-4", "text-center", "text-xl", "font-bold"]], template: function ReportsMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, ReportsMenuComponent_Conditional_2_Template, 10, 2, "a", 2);
        \u0275\u0275conditionalCreate(3, ReportsMenuComponent_Conditional_3_Template, 10, 2, "a", 2);
        \u0275\u0275conditionalCreate(4, ReportsMenuComponent_Conditional_4_Template, 11, 5, "a", 2);
        \u0275\u0275conditionalCreate(5, ReportsMenuComponent_Conditional_5_Template, 10, 2, "a", 2);
        \u0275\u0275conditionalCreate(6, ReportsMenuComponent_Conditional_6_Template, 10, 2, "a", 2);
        \u0275\u0275conditionalCreate(7, ReportsMenuComponent_Conditional_7_Template, 11, 5, "a", 2);
        \u0275\u0275repeaterCreate(8, ReportsMenuComponent_For_9_Template, 10, 5, "a", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.features().includes("desks") ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("spaces") ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("attendance") ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("catering") ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("contact-tracing") ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("user") ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.custom_reports());
      }
    }, dependencies: [RouterModule, RouterLink, IconComponent, MatRippleModule, MatRipple, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row !important;\n  align-items: center;\n  justify-content: center;\n  background: inherit;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  gap: 1rem;\n}\n/*# sourceMappingURL=reports-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsMenuComponent, [{
    type: Component,
    args: [{ selector: "reports-menu,[reports-menu]", template: `
        <div
            class="bg-base-200 absolute inset-0 flex items-center justify-center overflow-auto"
        >
            <div class="grid w-full justify-items-center">
                @if (features().includes('desks')) {
                    <a
                        [routerLink]="['/reports', 'desks']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">room</icon>
                        <h3 class="mb-4 text-xl font-bold">Desks</h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @if (features().includes('spaces')) {
                    <a
                        [routerLink]="['/reports', 'bookings']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">meeting_room</icon>
                        <h3 class="mb-4 text-xl font-bold">Rooms</h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @if (features().includes('attendance')) {
                    <a
                        [routerLink]="['/reports', 'attendance']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">groups</icon>
                        <h3 class="mb-4 text-center text-xl font-bold">
                            {{
                                'APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE'
                                    | translate
                            }}
                        </h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @if (features().includes('catering')) {
                    <a
                        [routerLink]="['/reports', 'catering']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">room_service</icon>
                        <h3 class="mb-4 text-xl font-bold">Catering</h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @if (features().includes('contact-tracing')) {
                    <a
                        [routerLink]="['/reports', 'contact-tracing']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">connect_without_contact</icon>
                        <h3 class="mb-4 text-xl font-bold">Contact Tracing</h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @if (features().includes('user')) {
                    <a
                        [routerLink]="['/reports', 'user']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">person_search</icon>
                        <h3 class="mb-4 text-center text-xl font-bold">
                            {{ 'APP.CONCIERGE.MENU_REPORT_USER' | translate }}
                        </h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @for (report of custom_reports(); track report) {
                    <a
                        [routerLink]="['/reports', report.id]"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">{{ report.icon }}</icon>
                        <h3 class="mb-4 text-xl font-bold">
                            {{ report.name }}
                        </h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
            </div>
        </div>
    `, imports: [RouterModule, IconComponent, MatRippleModule, TranslatePipe], styles: ["/* angular:styles/component:css;3c3888f97d5b926a129adcc993c79eb028bb1478338967948b4453c5e0720738;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/reports-menu.component.ts */\n:host {\n  display: flex;\n  flex-direction: row !important;\n  align-items: center;\n  justify-content: center;\n  background: inherit;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  gap: 1rem;\n}\n/*# sourceMappingURL=reports-menu.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsMenuComponent, { className: "ReportsMenuComponent", filePath: "apps/concierge/src/app/reports/reports-menu.component.ts", lineNumber: 153 });
})();

// apps/concierge/src/app/reports/reports.component.ts
function ReportsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
var ReportsComponent = class _ReportsComponent extends AsyncHandler {
  constructor() {
    super();
    this._router = inject(Router);
    this._url = signal(
      null,
      ...ngDevMode ? [{ debugName: "_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.path = computed(
      () => {
        this._url();
        const parts = this._router.url.split("/");
        return parts[parts.length - 1];
      },
      ...ngDevMode ? [{ debugName: "path" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("router", this._router.events.subscribe((event) => this._url.set(event)));
  }
  static {
    this.\u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["", "app-new-reports", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [[1, "flex", "h-px", "flex-1"], [1, "screen-only"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], ["reports-menu", "", 1, "screen-only", "absolute", "inset-0"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar", 1);
        \u0275\u0275elementStart(2, "main", 2);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275conditionalCreate(4, ReportsComponent_Conditional_4_Template, 1, 0, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.path() === "reports" ? 4 : -1);
      }
    }, dependencies: [ApplicationSidebarComponent, RouterModule, RouterOutlet, ReportsMenuComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-100);\n}\nmain[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "[app-new-reports]", template: `
        <div class="flex h-px flex-1">
            <app-sidebar class="screen-only"></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
                @if (path() === 'reports') {
                    <div
                        reports-menu
                        class="screen-only absolute inset-0"
                    ></div>
                }
            </main>
        </div>
    `, imports: [ApplicationSidebarComponent, RouterModule, ReportsMenuComponent], styles: ["/* angular:styles/component:css;44e11ff46627a3b2bfefe3a1edd6f5469f436fdf5d9b15ce617acb04266d4e63;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/reports.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nmain > *:not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "apps/concierge/src/app/reports/reports.component.ts", lineNumber: 43 });
})();

// apps/concierge/src/app/reports/reports.routes.ts
var children = [
  { path: "", redirectTo: "desks", pathMatch: "full" },
  {
    path: "bookings",
    loadComponent: () => import("./report-spaces.component-JHSU7K6Z.js").then((m) => m.ReportSpacesComponent),
    title: "Booking Reports"
  },
  {
    path: "attendance",
    loadComponent: () => import("./site-attendance-report.component-AROVYCCZ.js").then((m) => m.SiteAttendanceReportComponent),
    title: "Attendance Reports"
  },
  {
    path: "desks",
    loadComponent: () => import("./report-desks.component-SJ3R3SE3.js").then((m) => m.ReportDesksComponent),
    title: "Desk Reports"
  },
  {
    path: "parking",
    loadComponent: () => import("./parking-report.component-2DJ7C563.js").then((m) => m.ParkingReportComponent),
    title: "Parking Reports"
  },
  {
    path: "lockers",
    loadComponent: () => import("./lockers-report.component-XZ3AR6J2.js").then((m) => m.LockersReportComponent),
    title: "Locker Reports"
  },
  {
    path: "catering",
    loadComponent: () => import("./catering-report.component-DI2HJQV6.js").then((m) => m.CateringReportComponent),
    title: "Catering Reports"
  },
  {
    path: "contact-tracing",
    loadComponent: () => import("./contact-tracing-report.component-WKQ6CG4T.js").then((m) => m.ContactTracingReportComponent),
    title: "Contact Tracing Reports"
  },
  {
    path: "assets",
    loadComponent: () => import("./assets-report.component-KYR442KC.js").then((m) => m.AssetsReportComponent),
    title: "Asset Reports"
  },
  {
    path: "visitors",
    loadComponent: () => import("./visitors-report.component-ETYFJ4RW.js").then((m) => m.VisitorsReportComponent),
    title: "Visitor Reports"
  },
  {
    path: "user",
    loadComponent: () => import("./user-report.component-OJLFJBBL.js").then((m) => m.UserReportComponent),
    title: "User Booking Reports"
  },
  {
    path: ":id",
    loadComponent: () => import("./custom-report.component-E7TEJNVW.js").then((m) => m.CustomReportComponent),
    title: "Reports"
  },
  { path: "**", redirectTo: "desks", pathMatch: "full" }
];
var ROUTES = [
  { path: "", component: ReportsComponent, children }
];
export {
  ROUTES
};
//# debugId=3a4f947a-6648-562a-8d80-497ae22f45ac
//# sourceMappingURL=reports.routes-CGIBNTQM.js.map
