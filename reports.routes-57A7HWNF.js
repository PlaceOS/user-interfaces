import {
  ApplicationSidebarComponent
} from "./chunk-X666DTLU.js";
import "./chunk-QVCRQLNG.js";
import "./chunk-XRRXSG3U.js";
import "./chunk-5TNCF35M.js";
import "./chunk-5DKZ7Y65.js";
import "./chunk-X334PNSI.js";
import "./chunk-TK25IJLB.js";
import "./chunk-75Z7RSWH.js";
import "./chunk-X4OZ4KDH.js";
import "./chunk-BBHY76T7.js";
import "./chunk-MQEEHHA6.js";
import "./chunk-I3LAEIE5.js";
import "./chunk-FVRTW2IK.js";
import "./chunk-CL2MFSTF.js";
import "./chunk-XXKPMVFX.js";
import "./chunk-DWCIQIE5.js";
import "./chunk-K6OHRVQL.js";
import "./chunk-XJVX67LU.js";
import "./chunk-R2YAV4K4.js";
import "./chunk-SDQDMNOO.js";
import "./chunk-42S2QJDR.js";
import "./chunk-PWIGADFP.js";
import "./chunk-GMB7PC6H.js";
import "./chunk-3LJJQKGO.js";
import "./chunk-6OIMOV2R.js";
import "./chunk-7HQDX7PG.js";
import "./chunk-OCRUIWUS.js";
import "./chunk-XCUQAAEL.js";
import "./chunk-PGIU34W2.js";
import "./chunk-IW3L46LQ.js";
import "./chunk-7FFQK53L.js";
import "./chunk-CWCNI2O4.js";
import "./chunk-DPVBDHKH.js";
import "./chunk-THGATZR4.js";
import "./chunk-C474S4JC.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-EWNKJBAV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-J4V3B3VF.js";
import "./chunk-RQBZITXC.js";

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
    loadComponent: () => import("./report-spaces.component-4MW5TLDB.js").then((m) => m.ReportSpacesComponent),
    title: "Booking Reports"
  },
  {
    path: "attendance",
    loadComponent: () => import("./site-attendance-report.component-PB6WNEPX.js").then((m) => m.SiteAttendanceReportComponent),
    title: "Attendance Reports"
  },
  {
    path: "desks",
    loadComponent: () => import("./report-desks.component-56NXIALJ.js").then((m) => m.ReportDesksComponent),
    title: "Desk Reports"
  },
  {
    path: "parking",
    loadComponent: () => import("./parking-report.component-YFIKI4A6.js").then((m) => m.ParkingReportComponent),
    title: "Parking Reports"
  },
  {
    path: "lockers",
    loadComponent: () => import("./lockers-report.component-KAYQHKLA.js").then((m) => m.LockersReportComponent),
    title: "Locker Reports"
  },
  {
    path: "catering",
    loadComponent: () => import("./catering-report.component-WMU57ADU.js").then((m) => m.CateringReportComponent),
    title: "Catering Reports"
  },
  {
    path: "contact-tracing",
    loadComponent: () => import("./contact-tracing-report.component-UNP35WQP.js").then((m) => m.ContactTracingReportComponent),
    title: "Contact Tracing Reports"
  },
  {
    path: "assets",
    loadComponent: () => import("./assets-report.component-GU2RMLXI.js").then((m) => m.AssetsReportComponent),
    title: "Asset Reports"
  },
  {
    path: "visitors",
    loadComponent: () => import("./visitors-report.component-T55VTZKU.js").then((m) => m.VisitorsReportComponent),
    title: "Visitor Reports"
  },
  {
    path: "user",
    loadComponent: () => import("./user-report.component-DFW6X5ME.js").then((m) => m.UserReportComponent),
    title: "User Booking Reports"
  },
  {
    path: ":id",
    loadComponent: () => import("./custom-report.component-5QFAYDSY.js").then((m) => m.CustomReportComponent),
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
//# debugId=78c5d7ee-b3b4-59e4-8023-d850b6ff7473
//# sourceMappingURL=reports.routes-57A7HWNF.js.map
