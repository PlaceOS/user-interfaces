import {
  ApplicationSidebarComponent
} from "./chunk-7FHGU6SB.js";
import "./chunk-XTY2KQMP.js";
import "./chunk-UAXJHIYU.js";
import "./chunk-MBTT2I5V.js";
import "./chunk-4YDFXALI.js";
import "./chunk-MBWPL2KS.js";
import "./chunk-7LDHXOXB.js";
import "./chunk-DX7Y4JVK.js";
import "./chunk-CHMDCM47.js";
import "./chunk-I52JNSOJ.js";
import "./chunk-PAJWQ7AP.js";
import "./chunk-OPRY76KM.js";
import "./chunk-UDPUXKZJ.js";
import "./chunk-2K5G7CFD.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-C6YYRFK6.js";
import "./chunk-54KE5JKV.js";
import "./chunk-3Y7PKCSJ.js";
import "./chunk-OX3RHFRB.js";
import "./chunk-QWYXFXJS.js";
import "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import "./chunk-J6ZMUSVI.js";
import "./chunk-SWZTUYHJ.js";
import "./chunk-MBEGKN3O.js";
import "./chunk-E5WLQ6H2.js";
import "./chunk-NE545G3N.js";
import "./chunk-XMOMB3G6.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-ZEZKWG7M.js";
import "./chunk-3WBJTYSG.js";
import "./chunk-QSD4JXRO.js";
import "./chunk-GTXMU3AV.js";
import "./chunk-DK3CVVJN.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-N4RTV55R.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-QAVCSYNX.js";
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
    loadComponent: () => import("./report-spaces.component-EKAEF3SZ.js").then((m) => m.ReportSpacesComponent),
    title: "Booking Reports"
  },
  {
    path: "attendance",
    loadComponent: () => import("./site-attendance-report.component-W56UBHNP.js").then((m) => m.SiteAttendanceReportComponent),
    title: "Attendance Reports"
  },
  {
    path: "desks",
    loadComponent: () => import("./report-desks.component-ZR6HV77S.js").then((m) => m.ReportDesksComponent),
    title: "Desk Reports"
  },
  {
    path: "parking",
    loadComponent: () => import("./parking-report.component-ST6ERVNW.js").then((m) => m.ParkingReportComponent),
    title: "Parking Reports"
  },
  {
    path: "lockers",
    loadComponent: () => import("./lockers-report.component-IMDSR7MA.js").then((m) => m.LockersReportComponent),
    title: "Locker Reports"
  },
  {
    path: "catering",
    loadComponent: () => import("./catering-report.component-MPQWQWAJ.js").then((m) => m.CateringReportComponent),
    title: "Catering Reports"
  },
  {
    path: "contact-tracing",
    loadComponent: () => import("./contact-tracing-report.component-ILM43XWW.js").then((m) => m.ContactTracingReportComponent),
    title: "Contact Tracing Reports"
  },
  {
    path: "assets",
    loadComponent: () => import("./assets-report.component-LSGWBNSK.js").then((m) => m.AssetsReportComponent),
    title: "Asset Reports"
  },
  {
    path: "visitors",
    loadComponent: () => import("./visitors-report.component-MN2WDCNV.js").then((m) => m.VisitorsReportComponent),
    title: "Visitor Reports"
  },
  {
    path: "user",
    loadComponent: () => import("./user-report.component-TDMDVM5X.js").then((m) => m.UserReportComponent),
    title: "User Booking Reports"
  },
  {
    path: ":id",
    loadComponent: () => import("./custom-report.component-GJ4MXT3C.js").then((m) => m.CustomReportComponent),
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
//# debugId=904ae360-861e-5925-8c9d-232471667bec
//# sourceMappingURL=reports.routes-BMDC5EDH.js.map
