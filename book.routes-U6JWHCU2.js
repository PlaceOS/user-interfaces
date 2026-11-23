import {
  legacyFlowsGuard
} from "./chunk-55KLBW2H.js";
import "./chunk-UYBCKDT4.js";
import "./chunk-DKHUXGTD.js";
import "./chunk-UQJ4NR33.js";
import "./chunk-JFVDZBHZ.js";
import "./chunk-RQBZITXC.js";

// apps/workplace/src/app/book/book.routes.ts
var canDeactivateVisitorFlow = (component) => component.canDeactivate();
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-53YUY4AT.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-Y7GBW5HM.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-5KZHHZCW.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-WKRAQMHI.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./desk-flow.component-YTVRLQQA.js").then((m) => m.NewDeskFlowComponent),
        title: "Desk Booking"
      },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-MTO2EZLF.js").then((m) => m.DeskFlowNewComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./meeting-flow.component-D55QECYH.js").then((m) => m.BookMeetingFlowComponent),
        title: "Meeting Booking"
      },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-XKG3SIY2.js").then((m) => m.MeetingFlowNewComponent),
        title: "Meeting Booking"
      },
      { path: "spaces", redirectTo: "meeting/form", pathMatch: "full" },
      { path: "spaces/:step", redirectTo: "meeting/:step" },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-OLPFSUWB.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-WJ4ZGCIV.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        canMatch: [legacyFlowsGuard],
        loadComponent: () => import("./visitor-flow.component-SLEQAH7F.js").then((m) => m.VisitorFlowComponent),
        title: "Visitor Booking"
      },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-O2IDCOEX.js").then((m) => m.VisitorFlowNewComponent),
        title: "Visitor Booking",
        canDeactivate: [canDeactivateVisitorFlow]
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-R647OSLY.js").then((m) => m.BookLockerFlowComponent),
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
//# sourceMappingURL=book.routes-U6JWHCU2.js.map
