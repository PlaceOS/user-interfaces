import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/book.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-LOITLBG5.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-2NCTTR4F.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-3KTWDPFE.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-DOBNQJMM.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-E4KQUOSN.js").then((m) => m.NewDeskFlowComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-BH65WSW4.js").then((m) => m.BookMeetingFlowComponent),
        title: "Meeting Booking"
      },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-3YRHFGEY.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-B3O5Q25G.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-EISNP3FJ.js").then((m) => m.VisitorFlowComponent),
        title: "Visitor Booking"
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-4DPAO3RK.js").then((m) => m.BookLockerFlowComponent),
        title: "Locker Booking"
      },
      { path: "*", redirectTo: "spaces/form" }
    ]
  },
  { path: "*", redirectTo: "spaces/form" }
];
export {
  ROUTES
};
//# sourceMappingURL=book.routes-ZRKNG2TZ.js.map
