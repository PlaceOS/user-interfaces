import {
  ApplicationSidebarComponent
} from "./chunk-QWDE7PI3.js";
import "./chunk-QUF2XP5S.js";
import "./chunk-RSAF32S2.js";
import "./chunk-SUINBDAO.js";
import "./chunk-UUAPAHBU.js";
import "./chunk-KP7J4Z3C.js";
import "./chunk-2XWXGUGR.js";
import "./chunk-F3LLTIVO.js";
import "./chunk-REPZMPVD.js";
import "./chunk-ZV6NLKB4.js";
import "./chunk-MQEEHHA6.js";
import "./chunk-I3LAEIE5.js";
import "./chunk-LR55A7MT.js";
import "./chunk-64ZCKMXF.js";
import "./chunk-XXKPMVFX.js";
import "./chunk-DWCIQIE5.js";
import "./chunk-2XQS3TR2.js";
import "./chunk-XJVX67LU.js";
import "./chunk-CGLGSGNO.js";
import "./chunk-FBOYMJKB.js";
import "./chunk-42S2QJDR.js";
import "./chunk-PWIGADFP.js";
import "./chunk-GMB7PC6H.js";
import "./chunk-PKSMF5TE.js";
import "./chunk-5CBTDIIU.js";
import "./chunk-CYBUGQ5C.js";
import "./chunk-OCRUIWUS.js";
import "./chunk-XCUQAAEL.js";
import "./chunk-FEEYRYR2.js";
import "./chunk-4TMK6UP3.js";
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
    loadComponent: () => import("./report-spaces.component-ONDWQRDC.js").then((m) => m.ReportSpacesComponent),
    title: "Booking Reports"
  },
  {
    path: "attendance",
    loadComponent: () => import("./site-attendance-report.component-KZA45OWK.js").then((m) => m.SiteAttendanceReportComponent),
    title: "Attendance Reports"
  },
  {
    path: "desks",
    loadComponent: () => import("./report-desks.component-JC6EEHPL.js").then((m) => m.ReportDesksComponent),
    title: "Desk Reports"
  },
  {
    path: "parking",
    loadComponent: () => import("./parking-report.component-QR5SG6R2.js").then((m) => m.ParkingReportComponent),
    title: "Parking Reports"
  },
  {
    path: "lockers",
    loadComponent: () => import("./lockers-report.component-TTCDU2DW.js").then((m) => m.LockersReportComponent),
    title: "Locker Reports"
  },
  {
    path: "catering",
    loadComponent: () => import("./catering-report.component-G2DY3WXY.js").then((m) => m.CateringReportComponent),
    title: "Catering Reports"
  },
  {
    path: "contact-tracing",
    loadComponent: () => import("./contact-tracing-report.component-SCUWY65H.js").then((m) => m.ContactTracingReportComponent),
    title: "Contact Tracing Reports"
  },
  {
    path: "assets",
    loadComponent: () => import("./assets-report.component-BZQO3K5O.js").then((m) => m.AssetsReportComponent),
    title: "Asset Reports"
  },
  {
    path: "visitors",
    loadComponent: () => import("./visitors-report.component-FKR3BLHY.js").then((m) => m.VisitorsReportComponent),
    title: "Visitor Reports"
  },
  {
    path: "user",
    loadComponent: () => import("./user-report.component-JARHM22O.js").then((m) => m.UserReportComponent),
    title: "User Booking Reports"
  },
  {
    path: ":id",
    loadComponent: () => import("./custom-report.component-2ZXYX2HU.js").then((m) => m.CustomReportComponent),
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
//# sourceMappingURL=reports.routes-GMCRBRQY.js.map
