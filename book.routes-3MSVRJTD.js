import {
  legacyFlowsGuard
} from "./chunk-3FNI64DN.js";
import "./chunk-FFNH2MP2.js";
import "./chunk-ZSVMOUWV.js";
import "./chunk-UQJ4NR33.js";
import "./chunk-JFVDZBHZ.js";
import "./chunk-RQBZITXC.js";

// apps/workplace/src/app/book/book.routes.ts
var canDeactivateVisitorFlow = (component) => component.canDeactivate();
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-LI7F7APP.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-54Q32A6R.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-YE74JQKG.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-XYIRJWZ3.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./desk-flow.component-XNP2WP7G.js").then((m) => m.NewDeskFlowComponent),
        title: "Desk Booking"
      },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-I4MR34QF.js").then((m) => m.DeskFlowNewComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./meeting-flow.component-JAAKRUVP.js").then((m) => m.BookMeetingFlowComponent),
        title: "Meeting Booking"
      },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-44TRF44D.js").then((m) => m.MeetingFlowNewComponent),
        title: "Meeting Booking"
      },
      { path: "spaces", redirectTo: "meeting/form", pathMatch: "full" },
      { path: "spaces/:step", redirectTo: "meeting/:step" },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-MRBM4BKW.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-GYOUS7C6.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./visitor-flow.component-KIQWEYGS.js").then((m) => m.VisitorFlowComponent),
        title: "Visitor Booking"
      },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-BFQIN55F.js").then((m) => m.VisitorFlowNewComponent),
        title: "Visitor Booking",
        canDeactivate: [canDeactivateVisitorFlow]
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-6NX3WGR5.js").then((m) => m.BookLockerFlowComponent),
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
//# sourceMappingURL=book.routes-3MSVRJTD.js.map
