import {
  LockerStateService
} from "./chunk-GUUXBIRX.js";
import {
  AsyncHandler,
  AsyncPipe,
  Clipboard,
  CommonModule,
  Component,
  IconComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressBar,
  MatProgressBarModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  SimpleTableComponent,
  TranslatePipe,
  combineLatest,
  i18n,
  inject,
  notifySuccess,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z5DSMDUT.js";

// apps/concierge/src/app/lockers/locker-list.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "map_id", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "height", name: a0, size: "6rem", content: a1 });
var _c3 = (a0) => ({ key: "tags", name: a0, size: "8rem" });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6rem" });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c6 = () => ({ key: "name", name: "Locker" });
var _c7 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c8 = (a0) => ({ key: "position", name: "Position", content: a0, size: "7.5rem" });
var _c9 = (a0) => ({ key: "size", name: "Size", content: a0, size: "7.5rem" });
var _c10 = (a0) => ({ key: "accessible", name: "Accessible", content: a0, size: "4rem" });
var _c11 = (a0) => ({ key: "bookable", name: "Bookable", content: a0, size: "4rem" });
var _c12 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "5.9rem" });
var _c13 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function LockerListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r1 || 1, "u");
  }
}
function LockerListComponent_ng_template_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "EXPLORE.MAP_ID_EMPTY"));
  }
}
function LockerListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_13_Template_button_click_0_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).data;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, LockerListComponent_ng_template_13_Conditional_2_Template, 3, 3, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 2 : -1);
  }
}
function LockerListComponent_ng_template_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.id, " ");
  }
}
function LockerListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_15_Template_button_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LockerListComponent_ng_template_15_Conditional_3_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const data_r7 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.id !== row_r6.map_id ? 3 : -1);
  }
}
function LockerListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_17_Template_button_click_6_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLocker(row_r9));
    });
    \u0275\u0275elementStart(7, "div", 26)(8, "icon", 27);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_17_Template_button_click_13_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewBank(row_r9));
    });
    \u0275\u0275elementStart(14, "div", 26)(15, "icon", 27);
    \u0275\u0275text(16, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "View Locker Bank Layout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_17_Template_button_click_19_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLockerBank(row_r9));
    });
    \u0275\u0275elementStart(20, "div", 26)(21, "icon", 27);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_17_Template_button_click_26_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeLockerBank(row_r9));
    });
    \u0275\u0275elementStart(27, "div", 26)(28, "icon", 28);
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "button", 29);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_17_Template_button_click_33_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_children[row_r9.id] = !ctx_r3.show_children[row_r9.id]);
    });
    \u0275\u0275elementStart(34, "icon", 30);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const menu_r10 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "APP.CONCIERGE.LOCKERS_ADD"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 8, "APP.CONCIERGE.LOCKERS_BANK_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 10, "APP.CONCIERGE.LOCKERS_BANK_REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(row_r9.lockers == null ? null : row_r9.lockers.length));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.show_children[row_r9.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function LockerListComponent_ng_template_19_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function LockerListComponent_ng_template_19_ng_template_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r12 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r12, " ");
  }
}
function LockerListComponent_ng_template_19_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_19_ng_template_3_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const data_r12 = \u0275\u0275nextContext().data;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r12, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LockerListComponent_ng_template_19_ng_template_3_Conditional_1_Conditional_3_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const row_r14 = ctx_r12.row;
    const data_r12 = ctx_r12.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.assigned_name || data_r12);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r14.assigned_name ? 3 : -1);
  }
}
function LockerListComponent_ng_template_19_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockerListComponent_ng_template_19_ng_template_3_Conditional_0_Template, 3, 3, "div", 32);
    \u0275\u0275conditionalCreate(1, LockerListComponent_ng_template_19_ng_template_3_Conditional_1_Template, 4, 2, "button", 33);
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    \u0275\u0275conditional(!data_r12 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r12 ? 1 : -1);
  }
}
function LockerListComponent_ng_template_19_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r15 = ctx.data;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.COLUMN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r15[0] + 1, "u ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "COMMON.ROW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r15[1] + 1, "u ");
  }
}
function LockerListComponent_ng_template_19_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r16 = ctx.data;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.WIDTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r16[0], "u ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "COMMON.HEIGHT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r16[1], "u ");
  }
}
function LockerListComponent_ng_template_19_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 30);
    \u0275\u0275text(3, "accessible");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.LOCKERS_ACCESSIBLE_INFO"));
  }
}
function LockerListComponent_ng_template_19_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275conditionalCreate(1, LockerListComponent_ng_template_19_ng_template_9_Conditional_1_Template, 4, 3, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r17 ? 1 : -1);
  }
}
function LockerListComponent_ng_template_19_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.BOOKABLE"));
  }
}
function LockerListComponent_ng_template_19_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockerListComponent_ng_template_19_ng_template_11_Conditional_0_Template, 4, 3, "div", 40);
  }
  if (rf & 2) {
    const data_r18 = ctx.data;
    \u0275\u0275conditional(data_r18 ? 0 : -1);
  }
}
function LockerListComponent_ng_template_19_ng_template_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_19_ng_template_13_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openLocker(row_r20));
    });
    \u0275\u0275elementStart(1, "div", 26)(2, "icon", 27);
    \u0275\u0275text(3, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_19_ng_template_13_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.shareLocker(row_r20));
    });
    \u0275\u0275elementStart(8, "div", 26)(9, "icon", 27);
    \u0275\u0275text(10, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_19_ng_template_13_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.releaseLocker(row_r20));
    });
    \u0275\u0275elementStart(15, "div", 26)(16, "icon", 27);
    \u0275\u0275text(17, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "APP.CONCIERGE.LOCKERS_OPEN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 5, "APP.CONCIERGE.LOCKERS_SHARE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 7, "APP.CONCIERGE.LOCKERS_RELEASE"));
  }
}
function LockerListComponent_ng_template_19_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 12)(6, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_19_ng_template_13_Template_button_click_6_listener() {
      const row_r20 = \u0275\u0275restoreView(_r19).row;
      const bank_r21 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLocker(bank_r21, row_r20));
    });
    \u0275\u0275elementStart(7, "div", 26)(8, "icon", 27);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, LockerListComponent_ng_template_19_ng_template_13_Conditional_13_Template, 21, 9);
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_19_ng_template_13_Template_button_click_14_listener() {
      const row_r20 = \u0275\u0275restoreView(_r19).row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeLocker(row_r20));
    });
    \u0275\u0275elementStart(15, "div", 26)(16, "icon", 28);
    \u0275\u0275text(17, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const locker_menu_r23 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", locker_menu_r23);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, "APP.CONCIERGE.LOCKERS_EDIT"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.has_driver ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 6, "APP.CONCIERGE.LOCKERS_REMOVE"));
  }
}
function LockerListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 31);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275template(3, LockerListComponent_ng_template_19_ng_template_3_Template, 2, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(5, LockerListComponent_ng_template_19_ng_template_5_Template, 13, 8, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(7, LockerListComponent_ng_template_19_ng_template_7_Template, 13, 8, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(9, LockerListComponent_ng_template_19_ng_template_9_Template, 2, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(11, LockerListComponent_ng_template_19_ng_template_11_Template, 1, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(13, LockerListComponent_ng_template_19_ng_template_13_Template, 21, 8, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const bank_r21 = ctx.row;
    const assigned_template_r24 = \u0275\u0275reference(4);
    const pos_template_r25 = \u0275\u0275reference(6);
    const size_template_r26 = \u0275\u0275reference(8);
    const accessible_template_r27 = \u0275\u0275reference(10);
    const bool_template_r28 = \u0275\u0275reference(12);
    const locker_action_template_r29 = \u0275\u0275reference(14);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("data", bank_r21.lockers)("show_header", false)("columns", \u0275\u0275pureFunction7(22, _c13, \u0275\u0275pureFunction0(9, _c6), \u0275\u0275pureFunction1(10, _c7, assigned_template_r24), \u0275\u0275pureFunction1(12, _c8, pos_template_r25), \u0275\u0275pureFunction1(14, _c9, size_template_r26), \u0275\u0275pureFunction1(16, _c10, accessible_template_r27), \u0275\u0275pureFunction1(18, _c11, bool_template_r28), \u0275\u0275pureFunction1(20, _c12, locker_action_template_r29)))("filter", \u0275\u0275pipeBind1(1, 5, ctx_r3.search))("empty_message", \u0275\u0275pipeBind1(2, 7, "APP.CONCIERGE.LOCKERS_EMPTY"));
  }
}
var _LockerListComponent = class _LockerListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LockerStateService);
    this._clipboard = inject(Clipboard);
    this.show_children = {};
    this.locker_banks = this._state.filtered_banks;
    this.lockers = this._state.filtered_lockers;
    this.options = this._state.filters;
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.search = this._state.search;
    this.locker_status = {};
    this.viewBank = (b) => this._state.viewLockerBank(b);
    this.editLocker = (bid, s) => this._state.editLocker(bid, s);
    this.editLockerBank = (b) => this._state.editLockerBank(b);
    this.removeLocker = (s) => this._state.removeLocker(s);
    this.removeLockerBank = (b) => this._state.removeLockerBank(b);
    this.shareLocker = (l) => this._state.shareLocker(l);
    this.releaseLocker = (l) => this._state.releaseLocker(l, true);
    this.openLocker = (l) => this._state.openLocker(l, true);
  }
  get has_driver() {
    return this._state.has_driver;
  }
  ngOnInit() {
    this.subscription("bookings", combineLatest([this.lockers, this.bookings]).subscribe(([lockers, bookings]) => this._updateStatusList(lockers, bookings)));
  }
  copyToClipboard(id, type) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n(type ? "APP.CONCIERGE.LOCKERS_COPIED_USER" : "APP.CONCIERGE.LOCKERS_COPIED_ID"));
  }
  statusTooltip(status) {
    switch (status) {
      case "assigned_free":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_FREE";
      case "assigned_busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_BUSY";
      case "reuse_busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_OTHER";
      case "busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_BUSY";
      case "free":
        return "APP.CONCIERGE.LOCKERS_STATUS_FREE";
    }
    return "APP.CONCIERGE.LOCKERS_STATUS_FREE";
  }
  _updateStatusList(lockers, bookings) {
    for (const locker of lockers) {
      const booking = bookings.find((_) => _.asset_id === locker.id && _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended");
      if (locker.assigned_to && !booking) {
        this.locker_status[locker.id] = "assigned_free";
      } else if (locker.assigned_to && booking && booking.user_email === locker.assigned_to) {
        this.locker_status[locker.id] = "assigned_busy";
      } else if (locker.assigned_to && booking && booking.user_email !== locker.assigned_to) {
        this.locker_status[locker.id] = "reuse_busy";
      } else if (!locker.assigned_to && booking) {
        this.locker_status[locker.id] = "busy";
      } else {
        this.locker_status[locker.id] = "free";
      }
    }
  }
};
_LockerListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockerListComponent_BaseFactory;
  return function LockerListComponent_Factory(__ngFactoryType__) {
    return (\u0275LockerListComponent_BaseFactory || (\u0275LockerListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockerListComponent)))(__ngFactoryType__ || _LockerListComponent);
  };
})();
_LockerListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerListComponent, selectors: [["locker-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 42, consts: [["height_template", ""], ["id_template", ""], ["name_template", ""], ["action_template", ""], ["locker_list_template", ""], ["menu", "matMenu"], ["assigned_template", ""], ["pos_template", ""], ["size_template", ""], ["accessible_template", ""], ["bool_template", ""], ["locker_action_template", ""], ["locker_menu", "matMenu"], [1, "h-full", "w-full", "overflow-auto", "px-8"], [1, "w-full"], [1, "block", "min-w-[52rem]", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable", "empty_message"], [1, "h-20", "w-full"], [1, "px-4", "font-mono"], [1, "px-4", "py-2", "text-left", "font-mono", "leading-tight", 3, "click"], [1, "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "px-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "text-xl", "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled"], [1, "text-2xl"], [3, "data", "show_header", "columns", "filter", "empty_message"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "flex", "w-full", "space-x-2", "p-2"], [1, "flex", "flex-col"], [1, "text-xs", "opacity-30"], [1, "w-12", "rounded", "bg-base-200", "px-2", "py-1", "text-center"], [1, "flex", "w-full", "items-center", "justify-center", "p-2"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-info", "text-info-content", 3, "matTooltip"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content", 3, "matTooltip"]], template: function LockerListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-progress-bar", 14);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275element(3, "simple-table", 15);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275element(10, "div", 16);
    \u0275\u0275template(11, LockerListComponent_ng_template_11_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, LockerListComponent_ng_template_13_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, LockerListComponent_ng_template_15_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(17, LockerListComponent_ng_template_17_Template, 36, 12, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(19, LockerListComponent_ng_template_19_Template, 15, 30, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(21, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const height_template_r30 = \u0275\u0275reference(12);
    const id_template_r31 = \u0275\u0275reference(14);
    const name_template_r32 = \u0275\u0275reference(16);
    const action_template_r33 = \u0275\u0275reference(18);
    const locker_list_template_r34 = \u0275\u0275reference(20);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !((tmp_5_0 = \u0275\u0275pipeBind1(2, 9, ctx.loading)) == null ? null : tmp_5_0.includes("lockers")));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.locker_banks)("columns", \u0275\u0275pureFunction5(36, _c5, \u0275\u0275pureFunction2(23, _c0, \u0275\u0275pipeBind1(4, 11, "APP.CONCIERGE.LOCKERS_BANK"), name_template_r32), \u0275\u0275pureFunction2(26, _c1, \u0275\u0275pipeBind1(5, 13, "EXPLORE.MAP_ID"), id_template_r31), \u0275\u0275pureFunction2(29, _c2, \u0275\u0275pipeBind1(6, 15, "COMMON.HEIGHT"), height_template_r30), \u0275\u0275pureFunction1(32, _c3, \u0275\u0275pipeBind1(7, 17, "COMMON.TAGS")), \u0275\u0275pureFunction1(34, _c4, action_template_r33)))("filter", \u0275\u0275pipeBind1(8, 19, ctx.search))("show_children", ctx.show_children)("child_template", locker_list_template_r34)("sortable", true)("empty_message", \u0275\u0275pipeBind1(9, 21, "APP.CONCIERGE.LOCKERS_BANK_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  TranslatePipe,
  SimpleTableComponent,
  MatProgressBarModule,
  MatProgressBar
], encapsulation: 2 });
var LockerListComponent = _LockerListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerListComponent, [{
    type: Component,
    args: [{ selector: "locker-list", template: `
        <div class="h-full w-full overflow-auto px-8">
            <mat-progress-bar
                [class.opacity-0]="!(loading | async)?.includes('lockers')"
                class="w-full"
            />
            <simple-table
                class="block min-w-[52rem] text-sm"
                [data]="locker_banks"
                [columns]="[
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.LOCKERS_BANK' | translate,
                        content: name_template,
                    },
                    {
                        key: 'map_id',
                        name: 'EXPLORE.MAP_ID' | translate,
                        content: id_template,
                    },
                    {
                        key: 'height',
                        name: 'COMMON.HEIGHT' | translate,
                        size: '6rem',
                        content: height_template,
                    },
                    {
                        key: 'tags',
                        name: 'COMMON.TAGS' | translate,
                        size: '8rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        sortable: false,
                        size: '6rem',
                    },
                ]"
                [filter]="search | async"
                [show_children]="show_children"
                [child_template]="locker_list_template"
                [sortable]="true"
                [empty_message]="'APP.CONCIERGE.LOCKERS_BANK_EMPTY' | translate"
            />
            <div class="h-20 w-full"></div>
            <ng-template #height_template let-data="data">
                <div class="px-4 font-mono">{{ data || 1 }}u</div>
            </ng-template>
            <ng-template #id_template let-row="row" let-data="data">
                <button
                    class="px-4 py-2 text-left font-mono leading-tight"
                    (click)="copyToClipboard(data)"
                >
                    {{ data }}
                    @if (!data) {
                        <span class="opacity-30">{{
                            'EXPLORE.MAP_ID_EMPTY' | translate
                        }}</span>
                    }
                </button>
            </ng-template>
            <ng-template #name_template let-row="row" let-data="data">
                <button
                    class="px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.id)"
                >
                    <div class="">{{ data }}</div>
                    @if (row.id !== row.map_id) {
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    }
                </button>
            </ng-template>
            <ng-template #action_template let-row="row" let-data="data">
                <div
                    class="flex w-full items-center justify-end space-x-2 px-2"
                >
                    <button icon matRipple [matMenuTriggerFor]="menu">
                        <icon>more_vert</icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item (click)="editLocker(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">add</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_ADD' | translate
                                }}</span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="viewBank(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">visibility</icon>
                                <span>View Locker Bank Layout</span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="editLockerBank(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">edit</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_BANK_EDIT'
                                        | translate
                                }}</span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="removeLockerBank(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl text-error">delete</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_BANK_REMOVE'
                                        | translate
                                }}</span>
                            </div>
                        </button>
                    </mat-menu>
                    <button
                        icon
                        matRipple
                        [disabled]="!row.lockers?.length"
                        (click)="show_children[row.id] = !show_children[row.id]"
                    >
                        <icon class="text-2xl">
                            {{
                                show_children[row.id]
                                    ? 'keyboard_arrow_down'
                                    : 'chevron_right'
                            }}
                        </icon>
                    </button>
                </div>
            </ng-template>
            <ng-template #locker_list_template let-bank="row">
                <simple-table
                    [data]="bank.lockers"
                    [show_header]="false"
                    [columns]="[
                        { key: 'name', name: 'Locker' },
                        {
                            key: 'assigned_to',
                            name: 'Assigned',
                            content: assigned_template,
                        },
                        {
                            key: 'position',
                            name: 'Position',
                            content: pos_template,
                            size: '7.5rem',
                        },
                        {
                            key: 'size',
                            name: 'Size',
                            content: size_template,
                            size: '7.5rem',
                        },
                        {
                            key: 'accessible',
                            name: 'Accessible',
                            content: accessible_template,
                            size: '4rem',
                        },
                        {
                            key: 'bookable',
                            name: 'Bookable',
                            content: bool_template,
                            size: '4rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: locker_action_template,
                            sortable: false,
                            size: '5.9rem',
                        },
                    ]"
                    [filter]="search | async"
                    [empty_message]="'APP.CONCIERGE.LOCKERS_EMPTY' | translate"
                />
                <ng-template #assigned_template let-row="row" let-data="data">
                    @if (!data) {
                        <div class="p-4 opacity-30">
                            {{ 'APP.CONCIERGE.UNASSIGNED' | translate }}
                        </div>
                    }
                    @if (data) {
                        <button
                            class="px-4 py-2 text-left leading-tight"
                            (click)="copyToClipboard(data, 'assigned')"
                        >
                            <div class="">{{ row.assigned_name || data }}</div>
                            @if (row.assigned_name) {
                                <div
                                    class="font-mono text-[0.625rem] opacity-30"
                                >
                                    {{ data }}
                                </div>
                            }
                        </button>
                    }
                </ng-template>
                <ng-template #pos_template let-data="data">
                    <div class="flex w-full space-x-2 p-2">
                        <div class="flex flex-col">
                            <div class="text-xs opacity-30">
                                {{ 'COMMON.COLUMN' | translate }}
                            </div>
                            <div
                                class="w-12 rounded bg-base-200 px-2 py-1 text-center"
                            >
                                {{ data[0] + 1 }}u
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-xs opacity-30">
                                {{ 'COMMON.ROW' | translate }}
                            </div>
                            <div
                                class="w-12 rounded bg-base-200 px-2 py-1 text-center"
                            >
                                {{ data[1] + 1 }}u
                            </div>
                        </div>
                    </div>
                </ng-template>
                <ng-template #size_template let-data="data">
                    <div class="flex w-full space-x-2 p-2">
                        <div class="flex flex-col">
                            <div class="text-xs opacity-30">
                                {{ 'COMMON.WIDTH' | translate }}
                            </div>
                            <div
                                class="w-12 rounded bg-base-200 px-2 py-1 text-center"
                            >
                                {{ data[0] }}u
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-xs opacity-30">
                                {{ 'COMMON.HEIGHT' | translate }}
                            </div>
                            <div
                                class="w-12 rounded bg-base-200 px-2 py-1 text-center"
                            >
                                {{ data[1] }}u
                            </div>
                        </div>
                    </div>
                </ng-template>
                <ng-template #accessible_template let-data="data">
                    <div class="flex w-full items-center justify-center p-2">
                        @if (data) {
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded bg-info text-info-content"
                                [matTooltip]="
                                    'APP.CONCIERGE.LOCKERS_ACCESSIBLE_INFO'
                                        | translate
                                "
                            >
                                <icon class="text-2xl">accessible</icon>
                            </div>
                        }
                    </div>
                </ng-template>
                <ng-template #bool_template let-data="data">
                    @if (data) {
                        <div
                            class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                            [matTooltip]="'COMMON.BOOKABLE' | translate"
                        >
                            <icon>done</icon>
                        </div>
                    }
                </ng-template>
                <ng-template #locker_action_template let-row="row">
                    <div
                        class="flex w-full items-center justify-end space-x-2 px-2"
                    >
                        <button
                            icon
                            matRipple
                            [matMenuTriggerFor]="locker_menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                    </div>
                    <mat-menu #locker_menu="matMenu">
                        <button mat-menu-item (click)="editLocker(bank, row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">edit</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_EDIT' | translate
                                }}</span>
                            </div>
                        </button>
                        @if (has_driver) {
                            <button mat-menu-item (click)="openLocker(row)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">meeting_room</icon>
                                    <span>{{
                                        'APP.CONCIERGE.LOCKERS_OPEN' | translate
                                    }}</span>
                                </div>
                            </button>
                            <button mat-menu-item (click)="shareLocker(row)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">share</icon>
                                    <span>{{
                                        'APP.CONCIERGE.LOCKERS_SHARE'
                                            | translate
                                    }}</span>
                                </div>
                            </button>
                            <button mat-menu-item (click)="releaseLocker(row)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">event_busy</icon>
                                    <span>{{
                                        'APP.CONCIERGE.LOCKERS_RELEASE'
                                            | translate
                                    }}</span>
                                </div>
                            </button>
                        }
                        <button mat-menu-item (click)="removeLocker(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl text-error">delete</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_REMOVE' | translate
                                }}</span>
                            </div>
                        </button>
                    </mat-menu>
                </ng-template>
            </ng-template>
            <div class="h-20 w-full"></div>
        </div>
    `, imports: [
      CommonModule,
      MatMenuModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      SimpleTableComponent,
      MatProgressBarModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerListComponent, { className: "LockerListComponent", filePath: "apps/concierge/src/app/lockers/locker-list.component.ts", lineNumber: 368 });
})();

export {
  LockerListComponent
};
//# sourceMappingURL=chunk-5LEM5NIV.js.map
