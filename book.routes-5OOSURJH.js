import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/book.routes.ts
var canDeactivateVisitorFlow = (component) => component.canDeactivate();
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-W63QVSHG.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-XE57TD3I.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-VTHJZAMY.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-3RQ42TIW.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-4C7HGMMH.js").then((m) => m.DeskFlowNewComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-SFAAWOSB.js").then((m) => m.MeetingFlowNewComponent),
        title: "Meeting Booking"
      },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-EVJ66BP5.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-JPEQLRT6.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-HX4OZ6WQ.js").then((m) => m.VisitorFlowNewComponent),
        title: "Visitor Booking",
        canDeactivate: [canDeactivateVisitorFlow]
      },
      { path: "vip-visitor", redirectTo: "vip-visitor/form" },
      {
        path: "vip-visitor/:step",
        loadComponent: () => import("./vip-visitor-flow.component-YBD3WVEJ.js").then((m) => m.VipVisitorFlowComponent),
        title: "VIP Visitor Booking"
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-RWXXPOGR.js").then((m) => m.BookLockerFlowComponent),
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
//# sourceMappingURL=book.routes-5OOSURJH.js.map
