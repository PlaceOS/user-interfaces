import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/book.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-UN46YSGW.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-K6CVN7W5.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-6EL6NTJF.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-5UBSTX64.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-XBC7R5R5.js").then((m) => m.NewDeskFlowComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-IQ3TKAYN.js").then((m) => m.BookMeetingFlowComponent),
        title: "Meeting Booking"
      },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-OS6SQB2E.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-6ZDDRFYI.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-36A5L6ZR.js").then((m) => m.VisitorFlowComponent),
        title: "Visitor Booking"
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-4X2BTBD4.js").then((m) => m.BookLockerFlowComponent),
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
//# sourceMappingURL=book.routes-3OP6SRMJ.js.map
