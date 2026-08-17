import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/book.routes.ts
var canDeactivateVisitorFlow = (component) => component.canDeactivate();
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-HB3Z5EST.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-2WJC4B5N.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-A25OCKKM.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-QHUW44QX.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-ZMQJHEFG.js").then((m) => m.DeskFlowNewComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-TUU7QEHF.js").then((m) => m.MeetingFlowNewComponent),
        title: "Meeting Booking"
      },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-4TYV53FZ.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-E2LBQICD.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-ECKFBWUZ.js").then((m) => m.VisitorFlowNewComponent),
        title: "Visitor Booking",
        canDeactivate: [canDeactivateVisitorFlow]
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-SM2DUDKO.js").then((m) => m.BookLockerFlowComponent),
        title: "Locker Booking"
      },
      { path: "*", redirectTo: "meeting/form" }
    ]
  },
  { path: "*", redirectTo: "meeting/form" }
];
export {
  ROUTES
};
//# sourceMappingURL=book.routes-ZJUUG62B.js.map
