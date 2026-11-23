import {
  legacyFlowsGuard
} from "./chunk-CGBGUG4K.js";
import "./chunk-27D75VLC.js";
import "./chunk-DKHUXGTD.js";
import "./chunk-UQJ4NR33.js";
import "./chunk-JFVDZBHZ.js";
import "./chunk-RQBZITXC.js";

// apps/workplace/src/app/book/book.routes.ts
var canDeactivateVisitorFlow = (component) => component.canDeactivate();
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-W3Q33IQW.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-YAWZWVVF.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-5KZHHZCW.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-ZFJVFBOJ.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./desk-flow.component-SKFWY4CY.js").then((m) => m.NewDeskFlowComponent),
        title: "Desk Booking"
      },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-LA5BI3ZI.js").then((m) => m.DeskFlowNewComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./meeting-flow.component-7Y3VCIRW.js").then((m) => m.BookMeetingFlowComponent),
        title: "Meeting Booking"
      },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-JBRZGT4D.js").then((m) => m.MeetingFlowNewComponent),
        title: "Meeting Booking"
      },
      { path: "spaces", redirectTo: "meeting/form", pathMatch: "full" },
      { path: "spaces/:step", redirectTo: "meeting/:step" },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-5FMRD5EU.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-XM22A6ZG.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./visitor-flow.component-FZM334UU.js").then((m) => m.VisitorFlowComponent),
        title: "Visitor Booking"
      },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-PNPURGKU.js").then((m) => m.VisitorFlowNewComponent),
        title: "Visitor Booking",
        canDeactivate: [canDeactivateVisitorFlow]
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-2VK6Q7UE.js").then((m) => m.BookLockerFlowComponent),
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
//# sourceMappingURL=book.routes-MBJ42N7E.js.map
