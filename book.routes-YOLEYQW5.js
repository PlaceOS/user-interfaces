import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/book.routes.ts
var canDeactivateVisitorFlow = (component) => component.canDeactivate();
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./book.component-MWQ326AE.js").then((m) => m.BookComponent),
    children: [
      {
        path: "code",
        loadComponent: () => import("./code-flow.component-HZHMVHID.js").then((m) => m.BookCodeFlowComponent),
        title: "Code Booking"
      },
      {
        path: "code/success",
        loadComponent: () => import("./code-flow-success.component-ZLDQYSGS.js").then((m) => m.CodeFlowSuccessComponent),
        title: "Booking Confirmed"
      },
      {
        path: "code/error",
        loadComponent: () => import("./code-flow-error.component-PHBGLYDE.js").then((m) => m.CodeFlowErrorComponent),
        title: "Booking Error"
      },
      { path: "desk", redirectTo: "desk/form" },
      { path: "desks", redirectTo: "desk/form" },
      {
        path: "desk/:step",
        loadComponent: () => import("./desk-flow.component-QFFSWOQ3.js").then((m) => m.DeskFlowNewComponent),
        title: "Desk Booking"
      },
      { path: "meeting", redirectTo: "meeting/form" },
      {
        path: "meeting/:step",
        loadComponent: () => import("./meeting-flow.component-AB2MSXE6.js").then((m) => m.MeetingFlowNewComponent),
        title: "Meeting Booking"
      },
      { path: "spaces", redirectTo: "meeting/form", pathMatch: "full" },
      { path: "spaces/:step", redirectTo: "meeting/:step" },
      { path: "parking", redirectTo: "parking/form" },
      {
        path: "parking/:step",
        loadComponent: () => import("./parking-flow.component-4PAMTWZH.js").then((m) => m.NewParkingFlowComponent),
        title: "Parking Booking"
      },
      { path: "parking-request", redirectTo: "parking-request/form" },
      {
        path: "parking-request/:step",
        loadComponent: () => import("./parking-request-flow.component-DTRURUDK.js").then((m) => m.ParkingRequestFlowComponent),
        title: "Parking Request"
      },
      { path: "visitor", redirectTo: "visitor/form" },
      {
        path: "visitor/:step",
        loadComponent: () => import("./visitor-flow.component-YLYHD3SL.js").then((m) => m.VisitorFlowNewComponent),
        title: "Visitor Booking",
        canDeactivate: [canDeactivateVisitorFlow]
      },
      { path: "locker", redirectTo: "locker/form" },
      {
        path: "locker/:step",
        loadComponent: () => import("./locker-flow.component-MEADFTSL.js").then((m) => m.BookLockerFlowComponent),
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
//# debugId=09b2f5df-ed96-5021-b578-3d928d489da8
//# sourceMappingURL=book.routes-YOLEYQW5.js.map
