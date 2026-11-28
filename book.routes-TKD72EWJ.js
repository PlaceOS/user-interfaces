import {
  legacyFlowsGuard
} from "./chunk-JDC4WE7Q.js";
import "./chunk-264JGKPT.js";
import "./chunk-KMUQNQCD.js";
import "./chunk-UQIT3QFI.js";
import "./chunk-UQJ4NR33.js";
import "./chunk-JFVDZBHZ.js";
import "./chunk-RQBZITXC.js";

// apps/workplace/src/app/book/book.routes.ts
var canDeactivateVisitorFlow = (component) => component.canDeactivate();
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-NKNVPY6X.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-ZTZWLJY3.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-AD7VQ27U.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-KVIXNXIT.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./desk-flow.component-2LVZWFQR.js").then((m) => m.NewDeskFlowComponent),
        title: "Desk Booking"
      },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-PZRNU26W.js").then((m) => m.DeskFlowNewComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./meeting-flow.component-6XPXSYGU.js").then((m) => m.BookMeetingFlowComponent),
        title: "Meeting Booking"
      },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-CGVP2GYH.js").then((m) => m.MeetingFlowNewComponent),
        title: "Meeting Booking"
      },
      { path: "spaces", redirectTo: "meeting/form", pathMatch: "full" },
      { path: "spaces/:step", redirectTo: "meeting/:step" },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-JX2WM7R2.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-KTFNH6W5.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./visitor-flow.component-MIUL6CVW.js").then((m) => m.VisitorFlowComponent),
        title: "Visitor Booking"
      },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-AKGE6LRH.js").then((m) => m.VisitorFlowNewComponent),
        title: "Visitor Booking",
        canDeactivate: [canDeactivateVisitorFlow]
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-PERNMU3W.js").then((m) => m.BookLockerFlowComponent),
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
//# debugId=2ac9cf26-819b-52a7-ae5d-9c4c83ed2e39
//# sourceMappingURL=book.routes-TKD72EWJ.js.map
