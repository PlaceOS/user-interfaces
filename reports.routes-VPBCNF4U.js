import {
  ApplicationSidebarComponent
} from "./chunk-AUJBCYPD.js";
import "./chunk-KYTE2KTO.js";
import "./chunk-O7LQKV3B.js";
import "./chunk-3M7SJMR2.js";
import "./chunk-JHWP2FLW.js";
import "./chunk-4YKIGRRG.js";
import "./chunk-NN7UG5FX.js";
import "./chunk-3YR4UOZT.js";
import "./chunk-NDRMSJWR.js";
import "./chunk-TF4OOMLP.js";
import "./chunk-D6IG36GJ.js";
import "./chunk-L5J7YFH4.js";
import "./chunk-IGML3NX7.js";
import "./chunk-LCMPWPJ7.js";
import "./chunk-LPEK236K.js";
import "./chunk-IU2VY3EB.js";
import "./chunk-FSFC2WQH.js";
import "./chunk-LOS3TMSZ.js";
import "./chunk-XYKGJJ5O.js";
import "./chunk-3RM6WHQ7.js";
import "./chunk-ULBCHKDT.js";
import "./chunk-KXLDQQFL.js";
import "./chunk-4S73GIOG.js";
import "./chunk-BZZ42NY6.js";
import "./chunk-W47WYZXL.js";
import "./chunk-5JYE5IT3.js";
import "./chunk-XHLNZTFA.js";
import "./chunk-JWZ62QCO.js";
import "./chunk-6KNHOW4V.js";
import "./chunk-G42FWC3G.js";
import "./chunk-KSPAXPMQ.js";
import "./chunk-LWUSUNNB.js";
import "./chunk-GVTMIID5.js";
import "./chunk-NOLYPWCK.js";
import "./chunk-THGATZR4.js";
import "./chunk-O6LGXEN6.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-647F7C2X.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-WP37UGIF.js";
import "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/reports.component.ts
var ReportsComponent = class _ReportsComponent {
  static {
    this.\u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["", "app-new-reports", ""]], decls: 4, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "screen-only"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar", 1);
        \u0275\u0275elementStart(2, "main", 2);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [ApplicationSidebarComponent, RouterModule, RouterOutlet], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-100);\n}\nmain[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
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
            </main>
        </div>
    `, imports: [ApplicationSidebarComponent, RouterModule], styles: ["/* angular:styles/component:css;44e11ff46627a3b2bfefe3a1edd6f5469f436fdf5d9b15ce617acb04266d4e63;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/reports.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nmain > *:not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "apps/concierge/src/app/reports/reports.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/reports/reports.routes.ts
var children = [
  { path: "", redirectTo: "desks", pathMatch: "full" },
  {
    path: "bookings",
    loadComponent: () => import("./report-spaces.component-ARGXMYNC.js").then((m) => m.ReportSpacesComponent),
    title: "Booking Reports"
  },
  {
    path: "attendance",
    loadComponent: () => import("./site-attendance-report.component-GI3NODW7.js").then((m) => m.SiteAttendanceReportComponent),
    title: "Attendance Reports"
  },
  {
    path: "desks",
    loadComponent: () => import("./report-desks.component-KW347DXM.js").then((m) => m.ReportDesksComponent),
    title: "Desk Reports"
  },
  {
    path: "parking",
    loadComponent: () => import("./parking-report.component-VCYT5IZD.js").then((m) => m.ParkingReportComponent),
    title: "Parking Reports"
  },
  {
    path: "lockers",
    loadComponent: () => import("./lockers-report.component-D7KY2YIG.js").then((m) => m.LockersReportComponent),
    title: "Locker Reports"
  },
  {
    path: "catering",
    loadComponent: () => import("./catering-report.component-D3JKOZ6H.js").then((m) => m.CateringReportComponent),
    title: "Catering Reports"
  },
  {
    path: "contact-tracing",
    loadComponent: () => import("./contact-tracing-report.component-RGV4RG7Y.js").then((m) => m.ContactTracingReportComponent),
    title: "Contact Tracing Reports"
  },
  {
    path: "assets",
    loadComponent: () => import("./assets-report.component-TIUIHL3E.js").then((m) => m.AssetsReportComponent),
    title: "Asset Reports"
  },
  {
    path: "visitors",
    loadComponent: () => import("./visitors-report.component-UDZTGRFJ.js").then((m) => m.VisitorsReportComponent),
    title: "Visitor Reports"
  },
  {
    path: "user",
    loadComponent: () => import("./user-report.component-AEJNEFKU.js").then((m) => m.UserReportComponent),
    title: "User Booking Reports"
  },
  {
    path: ":id",
    loadComponent: () => import("./custom-report.component-FWNXOL4L.js").then((m) => m.CustomReportComponent),
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
//# debugId=8cfeb22e-a919-5611-aa74-ae8a3cf630c9
//# sourceMappingURL=reports.routes-VPBCNF4U.js.map
