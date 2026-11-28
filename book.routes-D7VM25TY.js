import {
  legacyFlowsGuard
} from "./chunk-Q5QSKPVR.js";
import "./chunk-NBEZ5STC.js";
import "./chunk-5FYRTGWS.js";
import "./chunk-UQJ4NR33.js";
import "./chunk-JFVDZBHZ.js";
import "./chunk-RQBZITXC.js";

// apps/workplace/src/app/book/book.routes.ts
var canDeactivateVisitorFlow = (component) => component.canDeactivate();
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-E5YYEKIX.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-2ERYQTZ2.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-EQBPKR7A.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-VWBJTGTK.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./desk-flow.component-Q2Q4WUZM.js").then((m) => m.NewDeskFlowComponent),
        title: "Desk Booking"
      },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-JCLC3AOC.js").then((m) => m.DeskFlowNewComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./meeting-flow.component-GNXQTFLU.js").then((m) => m.BookMeetingFlowComponent),
        title: "Meeting Booking"
      },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-ZTGWRNUX.js").then((m) => m.MeetingFlowNewComponent),
        title: "Meeting Booking"
      },
      { path: "spaces", redirectTo: "meeting/form", pathMatch: "full" },
      { path: "spaces/:step", redirectTo: "meeting/:step" },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-5BTCJT3X.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-Q56WFKAZ.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./visitor-flow.component-XGIBOX4C.js").then((m) => m.VisitorFlowComponent),
        title: "Visitor Booking"
      },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-C27NACC3.js").then((m) => m.VisitorFlowNewComponent),
        title: "Visitor Booking",
        canDeactivate: [canDeactivateVisitorFlow]
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-KOTCXOXR.js").then((m) => m.BookLockerFlowComponent),
        title: "Locker Booking"
      },
      { path: "**", redirectTo: "meeting/form" }
    ]
  },
  { path: "**", redirectTo: "meeting/form" }
];
export {
  ROUTES
};
//# debugId=3038f301-df8c-51ee-a5bc-107a096f958c
//# sourceMappingURL=book.routes-D7VM25TY.js.map
