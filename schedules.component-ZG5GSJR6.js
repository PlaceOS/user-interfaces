import {
  MINUTES_PER_DAY,
  buildDisplayScheduleAssignments,
  buildScheduleBlocks,
  buildZoneScheduleAssignments
} from "./chunk-MIO2572A.js";
import {
  GroupBreadcrumbsComponent,
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-Q7SQZLCT.js";
import {
  ActivatedRoute,
  Component,
  DatePipe,
  DestroyRef,
  IconComponent,
  Input,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatSuffix,
  MatTooltip,
  MatTooltipModule,
  Pipe,
  Router,
  RouterLink,
  SignageService,
  TranslatePipe,
  addDays,
  computed,
  differenceInMinutes,
  effect,
  format,
  i18n,
  inject,
  input,
  isSameDay,
  setClassMetadata,
  signal,
  startOfDay,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2FXQT5UN.js";
import "./chunk-653SOEEV.js";

// libs/components/src/lib/date-from.pipe.ts
var DateFromPipe = class _DateFromPipe {
  transform(date) {
    const now = Date.now();
    let diff = differenceInMinutes(now, date);
    const direction = diff < 0;
    diff = Math.abs(diff);
    if (diff < 1) {
      return direction ? "Soon" : "Now";
    } else if (diff === 1) {
      return direction ? "In 1 min" : "1 min";
    } else if (diff < 60) {
      return direction ? `In ${diff} min` : `${diff} min`;
    } else if (diff < 24 * 60) {
      const hours = Math.floor(diff / 60);
      return direction ? `In ${hours} hour${hours === 1 ? "" : "s"}` : format(date, "H:mm");
    } else if (diff < 7 * 24 * 60) {
      const days = Math.floor(diff / (24 * 60));
      return direction ? format(date, "dd MMM yyyy") : format(date, "E H:mm");
    } else if (diff < 365 * 24 * 60) {
      const days = Math.floor(diff / (24 * 60));
      return direction ? format(date, "dd MMM yyyy") : format(date, "LLL d H:mm");
    }
    return "Just now";
  }
  static {
    this.\u0275fac = function DateFromPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateFromPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "dateFrom", type: _DateFromPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFromPipe, [{
    type: Pipe,
    args: [{
      name: "dateFrom"
    }]
  }], null, null);
})();

// apps/signage-manager/src/app/schedules/schedule-timeline.component.ts
var _c0 = (a0) => ["/playlists", a0];
var _c1 = (a0) => ({ source: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.playlist.id + "_" + $item.start_minutes + "_" + ($item.source_label || "") + "_" + $index;
function ScheduleTimelineComponent_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function ScheduleTimelineComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ScheduleTimelineComponent_For_7_Conditional_3_Template, 1, 0, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    const \u0275$index_11_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.block_width + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatHour(hour_r1), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_11_r2 !== 0 ? 3 : -1);
  }
}
function ScheduleTimelineComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("mouseenter", function ScheduleTimelineComponent_For_10_Template_div_mouseenter_0_listener() {
      const \u0275$index_22_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hovered_row.set(\u0275$index_22_r5));
    })("mouseleave", function ScheduleTimelineComponent_For_10_Template_div_mouseleave_0_listener() {
      const \u0275$index_22_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearHoveredRow(\u0275$index_22_r5));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementStart(3, "icon", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16)(6, "a", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const \u0275$index_22_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.row_height + "rem");
    \u0275\u0275classProp("row-highlight", ctx_r2.hovered_row() === \u0275$index_22_r5);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", ctx_r2.displayRowStatus(row_r6) === "success")("bg-error", ctx_r2.displayRowStatus(row_r6) === "error")("text-info-content", ctx_r2.displayRowStatus(row_r6) === "success")("text-error-content", ctx_r2.displayRowStatus(row_r6) === "error");
    \u0275\u0275property("matTooltip", ctx_r2.displayRowStatus(row_r6) ? \u0275\u0275pipeBind1(2, 18, row_r6.signage_last_seen * 1e3) : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", row_r6.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.subtitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.blocks.length, " ");
  }
}
function ScheduleTimelineComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 20);
  }
  if (rf & 2) {
    const \u0275$index_44_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", \u0275$index_44_r7 * ctx_r2.block_width + "rem");
  }
}
function ScheduleTimelineComponent_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "icon", 26);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_47_r9 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", \u0275$index_47_r9 * ctx_r2.row_height + "rem")("height", ctx_r2.row_height + "rem");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "SIGNAGE_MANAGER.NO_PLAYLISTS_SCHEDULED"), " ");
  }
}
function ScheduleTimelineComponent_For_15_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.AWAITING_APPROVAL"), " ");
  }
}
function ScheduleTimelineComponent_For_15_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r11.source_type === "display" ? \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.SOURCE_DIRECT") : \u0275\u0275pipeBind2(3, 3, "SIGNAGE_MANAGER.SOURCE_VIA", \u0275\u0275pureFunction1(6, _c1, block_r11.source_label)), " ");
  }
}
function ScheduleTimelineComponent_For_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275listener("mouseenter", function ScheduleTimelineComponent_For_15_For_4_Template_a_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_47_r9 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hovered_row.set(\u0275$index_47_r9));
    })("mouseleave", function ScheduleTimelineComponent_For_15_For_4_Template_a_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_47_r9 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearHoveredRow(\u0275$index_47_r9));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ScheduleTimelineComponent_For_15_For_4_Conditional_7_Template, 3, 3, "div", 31);
    \u0275\u0275conditionalCreate(8, ScheduleTimelineComponent_For_15_For_4_Conditional_8_Template, 4, 8, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const block_r11 = ctx.$implicit;
    const ctx_r11 = \u0275\u0275nextContext();
    const row_r13 = ctx_r11.$implicit;
    const \u0275$index_47_r9 = ctx_r11.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r2.timeToOffset(block_r11.start_minutes) + "%")("top", \u0275$index_47_r9 * ctx_r2.row_height + 0.375 + "rem")("width", ctx_r2.durationToOffset(ctx_r2.visibleDuration(block_r11)) + "%")("height", ctx_r2.row_height - 0.75 + "rem")("min-width", 2, "rem");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c0, block_r11.playlist.id))("matTooltip", ctx_r2.blockTooltip(row_r13, block_r11));
    \u0275\u0275attribute("aria-label", ctx_r2.blockAriaLabel(row_r13, block_r11));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.blockBackgroundColor(block_r11))("color", ctx_r2.blockTextColor(block_r11))("border-color", ctx_r2.blockBorderColor(block_r11));
    \u0275\u0275classProp("border-dashed", block_r11.source_type === "zone" && ctx_r2.view_tab() === "displays");
    \u0275\u0275advance();
    \u0275\u0275classProp("line-through", !block_r11.playlist.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r11.playlist.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", block_r11.all_day ? \u0275\u0275pipeBind1(6, 27, "SIGNAGE_MANAGER.ALL_DAY") : block_r11.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.requiresApproval(block_r11) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r11.source_label && ctx_r2.view_tab() === "displays" ? 8 : -1);
  }
}
function ScheduleTimelineComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("mouseenter", function ScheduleTimelineComponent_For_15_Template_div_mouseenter_0_listener() {
      const \u0275$index_47_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hovered_row.set(\u0275$index_47_r9));
    })("mouseleave", function ScheduleTimelineComponent_For_15_Template_div_mouseleave_0_listener() {
      const \u0275$index_47_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearHoveredRow(\u0275$index_47_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275conditionalCreate(2, ScheduleTimelineComponent_For_15_Conditional_2_Template, 5, 7, "div", 23);
    \u0275\u0275repeaterCreate(3, ScheduleTimelineComponent_For_15_For_4_Template, 9, 31, "a", 24, _forTrack1);
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const \u0275$index_47_r9 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", \u0275$index_47_r9 * ctx_r2.row_height + "rem")("height", ctx_r2.row_height + "rem");
    \u0275\u0275classProp("row-highlight", ctx_r2.hovered_row() === \u0275$index_47_r9);
    \u0275\u0275advance();
    \u0275\u0275styleProp("top", \u0275$index_47_r9 * ctx_r2.row_height + ctx_r2.row_height + "rem");
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r13.blocks.length ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r13.blocks);
  }
}
function ScheduleTimelineComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 34)(2, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r2.timeToOffset(ctx_r2.current_minutes()) + "%");
  }
}
var ScheduleTimelineComponent = class _ScheduleTimelineComponent {
  constructor() {
    this.rows = input(
      [],
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view_tab = input(
      "displays",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_date = input.required(
      ...ngDevMode ? [{ debugName: "selected_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_minutes = input(
      0,
      ...ngDevMode ? [{ debugName: "current_minutes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_current_time = input(
      false,
      ...ngDevMode ? [{ debugName: "show_current_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_approval_status = input(
      {},
      ...ngDevMode ? [{ debugName: "playlist_approval_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.block_width = 6;
    this.row_height = 4;
    this.hours = Array.from({ length: 24 }, (_, index) => index);
    this.timeline_width = this.hours.length * this.block_width;
    this.hovered_row = signal(
      -1,
      ...ngDevMode ? [{ debugName: "hovered_row" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  displayRowStatus(row) {
    if (this.view_tab() !== "displays")
      return "";
    const diff = Math.abs(differenceInMinutes(row.signage_last_seen * 1e3, Date.now()));
    return diff > 5 ? "error" : "success";
  }
  clearHoveredRow(index) {
    if (this.hovered_row() === index)
      this.hovered_row.set(-1);
  }
  formatHour(hour) {
    const date = startOfDay(/* @__PURE__ */ new Date());
    date.setHours(hour);
    return format(date, "haaa").replace("AM", "am").replace("PM", "pm");
  }
  timeToOffset(minutes) {
    return +(Math.max(0, minutes) / MINUTES_PER_DAY * 100).toFixed(2);
  }
  durationToOffset(duration) {
    return +(Math.min(MINUTES_PER_DAY, Math.max(duration, 0)) / MINUTES_PER_DAY * 100).toFixed(2);
  }
  visibleDuration(block) {
    return block.all_day ? MINUTES_PER_DAY : Math.max(15, Math.min(block.duration_minutes, MINUTES_PER_DAY - block.start_minutes));
  }
  requiresApproval(block) {
    const approvals = this.playlist_approval_status();
    return block.playlist.id in approvals && !approvals[block.playlist.id];
  }
  blockBackgroundColor(block) {
    return this.requiresApproval(block) ? "#fef3c7" : block.bg_color;
  }
  blockTextColor(block) {
    return this.requiresApproval(block) ? "#92400e" : block.text_color;
  }
  blockBorderColor(block) {
    return this.requiresApproval(block) ? "#f59e0b" : block.text_color;
  }
  blockTooltip(row, block) {
    const source = block.source_label && this.view_tab() === "displays" ? `
${i18n("SIGNAGE_MANAGER.TOOLTIP_SOURCE", {
      source: block.source_type === "display" ? i18n("SIGNAGE_MANAGER.SOURCE_DISPLAY") : block.source_label
    })}` : "";
    const approval = this.requiresApproval(block) ? `
${i18n("SIGNAGE_MANAGER.TOOLTIP_STATUS_AWAITING")}` : "";
    const time = block.all_day ? i18n("SIGNAGE_MANAGER.ALL_DAY") : block.label;
    return `${row.name}
${i18n("SIGNAGE_MANAGER.TOOLTIP_PLAYLIST", {
      name: block.playlist.name
    })}
${i18n("SIGNAGE_MANAGER.TOOLTIP_TIME", {
      time
    })}${source}${approval}`;
  }
  blockAriaLabel(row, block) {
    const time = block.all_day ? i18n("SIGNAGE_MANAGER.ALL_DAY_LOWER") : block.label;
    return `${row.name}, ${block.playlist.name}, ${time}`;
  }
  static {
    this.\u0275fac = function ScheduleTimelineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleTimelineComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleTimelineComponent, selectors: [["schedule-timeline"]], inputs: { rows: [1, "rows"], view_tab: [1, "view_tab"], selected_date: [1, "selected_date"], current_minutes: [1, "current_minutes"], show_current_time: [1, "show_current_time"], playlist_approval_status: [1, "playlist_approval_status"] }, decls: 17, vars: 12, consts: [["timeline", "", 1, "z-0", "grid", "min-h-0", "flex-1", "overflow-auto"], ["corner", "", 1, "bg-base-100", "border-base-300", "sticky", "top-0", "left-0", "z-40", "flex", "flex-col", "justify-end", "border-r", "border-b", "px-4", "pb-2"], [1, "text-base-content/50", "text-[10px]", "font-semibold", "tracking-[0.2em]", "uppercase"], ["time-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-30", "flex", "h-14", "items-end", "border-b"], [1, "relative", "flex", "h-full", "items-end", "pb-2", 3, "width"], ["row-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-40", "border-r"], [1, "border-base-200", "flex", "w-full", "items-center", "gap-2", "border-b", "px-2", "transition-colors", "duration-100", "sm:gap-3", "sm:px-3", 3, "height", "row-highlight"], ["timeline-grid", "", 1, "relative", "z-0", "overflow-hidden"], [1, "bg-base-content/6", "absolute", "top-0", "h-full", "w-px", 3, "left"], [1, "pointer-events-none", "absolute", "inset-y-0", "z-30", 3, "left"], [1, "relative", "flex", "h-full", "items-end", "pb-2"], [1, "text-base-content/50", "w-full", "text-center", "text-[10px]", "tabular-nums"], [1, "bg-base-300/60", "absolute", "top-0", "left-0", "h-2.5", "w-px"], [1, "border-base-200", "flex", "w-full", "items-center", "gap-2", "border-b", "px-2", "transition-colors", "duration-100", "sm:gap-3", "sm:px-3", 3, "mouseenter", "mouseleave"], ["matTooltipPosition", "right", 1, "bg-base-content/6", "hidden", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-md", "sm:flex", 3, "matTooltip"], [1, "text-base", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "block", "truncate", "text-xs", "font-medium", "hover:underline", "sm:text-sm", 3, "routerLink"], [1, "text-base-content/50", "truncate", "text-[10px]", "sm:text-[11px]"], [1, "bg-base-content/6", "text-base-content/60", "hidden", "rounded-md", "px-1.5", "py-0.5", "text-[10px]", "font-semibold", "tabular-nums", "sm:block"], [1, "bg-base-content/6", "absolute", "top-0", "h-full", "w-px"], [1, "absolute", "left-0", "w-full", "transition-colors", "duration-100", 3, "mouseenter", "mouseleave"], [1, "border-base-content/6", "absolute", "left-0", "w-full", "border-b"], [1, "text-base-content/30", "pointer-events-none", "absolute", "left-4", "flex", "items-center", "gap-1.5", "text-[11px]", 3, "top", "height"], ["matRipple", "", 1, "schedule-block", "absolute", "z-10", "text-left", 3, "left", "top", "width", "height", "min-width", "routerLink", "matTooltip"], [1, "text-base-content/30", "pointer-events-none", "absolute", "left-4", "flex", "items-center", "gap-1.5", "text-[11px]"], [1, "text-sm"], ["matRipple", "", 1, "schedule-block", "absolute", "z-10", "text-left", 3, "mouseenter", "mouseleave", "routerLink", "matTooltip"], [1, "relative", "flex", "h-full", "w-full", "flex-col", "overflow-hidden", "rounded-md", "border", "px-2", "py-1"], [1, "truncate", "text-[11px]", "leading-tight", "font-semibold"], [1, "truncate", "text-[10px]", "leading-tight", "opacity-70"], [1, "mt-auto", "truncate", "text-[10px]", "leading-tight", "font-medium"], [1, "mt-auto", "truncate", "text-[10px]", "leading-tight", "opacity-60"], [1, "pointer-events-none", "absolute", "inset-y-0", "z-30"], [1, "bg-error", "absolute", "-top-0.5", "left-1/2", "h-2", "w-2", "-translate-x-1/2", "rounded-full"], [1, "bg-error", "h-full", "w-0.5"]], template: function ScheduleTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275repeaterCreate(6, ScheduleTimelineComponent_For_7_Template, 4, 4, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275repeaterCreate(9, ScheduleTimelineComponent_For_10_Template, 12, 20, "div", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275repeaterCreate(12, ScheduleTimelineComponent_For_13_Template, 1, 2, "div", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(14, ScheduleTimelineComponent_For_15_Template, 5, 9, null, null, _forTrack0);
        \u0275\u0275conditionalCreate(16, ScheduleTimelineComponent_Conditional_16_Template, 3, 2, "div", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, ctx.view_tab() === "displays" ? "SIGNAGE_MANAGER.NAV_DISPLAYS" : "SIGNAGE_MANAGER.NAV_ZONES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.timeline_width + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.hours);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("height", ctx.rows().length * ctx.row_height + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.timeline_width + "rem")("height", ctx.rows().length * ctx.row_height + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.hours);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_current_time() ? 16 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      IconComponent,
      DateFromPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  min-height: 0;\n  flex: 1;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 9rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n@media (min-width: 640px) {\n  [timeline][_ngcontent-%COMP%] {\n    grid-template-columns: 16rem auto;\n  }\n}\n.row-highlight[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--info) 6%, transparent);\n}\n.schedule-block[_ngcontent-%COMP%] {\n  transition: transform 120ms ease, z-index 0ms;\n}\n.schedule-block[_ngcontent-%COMP%]:hover {\n  z-index: 20;\n  transform: scaleY(1.04);\n}\n.schedule-block[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);\n  transition: box-shadow 120ms ease;\n}\n.schedule-block[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 8px rgb(0 0 0 / 0.12);\n}\n/*# sourceMappingURL=schedule-timeline.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleTimelineComponent, [{
    type: Component,
    args: [{ selector: "schedule-timeline", template: `
        <div timeline class="z-0 grid min-h-0 flex-1 overflow-auto">
            <div
                corner
                class="bg-base-100 border-base-300 sticky top-0 left-0 z-40 flex flex-col justify-end border-r border-b px-4 pb-2"
            >
                <div
                    class="text-base-content/50 text-[10px] font-semibold tracking-[0.2em] uppercase"
                >
                    {{
                        (view_tab() === 'displays'
                            ? 'SIGNAGE_MANAGER.NAV_DISPLAYS'
                            : 'SIGNAGE_MANAGER.NAV_ZONES'
                        ) | translate
                    }}
                </div>
            </div>
            <div
                time-headers
                class="border-base-300 bg-base-100 sticky top-0 z-30 flex h-14 items-end border-b"
                [style.width]="timeline_width + 'rem'"
            >
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="relative flex h-full items-end pb-2"
                        [style.width]="block_width + 'rem'"
                    >
                        <div
                            class="text-base-content/50 w-full text-center text-[10px] tabular-nums"
                        >
                            {{ formatHour(hour) }}
                        </div>
                        @if (i !== 0) {
                            <div
                                class="bg-base-300/60 absolute top-0 left-0 h-2.5 w-px"
                            ></div>
                        }
                    </div>
                }
            </div>
            <div
                row-headers
                class="border-base-300 bg-base-100 sticky left-0 z-40 border-r"
                [style.height]="rows().length * row_height + 'rem'"
            >
                @for (row of rows(); track row.id; let i = $index) {
                    <div
                        class="border-base-200 flex w-full items-center gap-2 border-b px-2 transition-colors duration-100 sm:gap-3 sm:px-3"
                        [style.height]="row_height + 'rem'"
                        [class.row-highlight]="hovered_row() === i"
                        (mouseenter)="hovered_row.set(i)"
                        (mouseleave)="clearHoveredRow(i)"
                    >
                        <div
                            class="bg-base-content/6 hidden h-8 w-8 shrink-0 items-center justify-center rounded-md sm:flex"
                            [class.bg-info]="
                                displayRowStatus(row) === 'success'
                            "
                            [class.bg-error]="displayRowStatus(row) === 'error'"
                            [class.text-info-content]="
                                displayRowStatus(row) === 'success'
                            "
                            [class.text-error-content]="
                                displayRowStatus(row) === 'error'
                            "
                            [matTooltip]="
                                displayRowStatus(row)
                                    ? (row.signage_last_seen * 1000 | dateFrom)
                                    : ''
                            "
                            matTooltipPosition="right"
                        >
                            <icon class="text-base opacity-60">{{
                                row.icon
                            }}</icon>
                        </div>
                        <div class="min-w-0 flex-1">
                            <a
                                class="block truncate text-xs font-medium hover:underline sm:text-sm"
                                [routerLink]="row.route"
                            >
                                {{ row.name }}
                            </a>
                            <div
                                class="text-base-content/50 truncate text-[10px] sm:text-[11px]"
                            >
                                {{ row.subtitle }}
                            </div>
                        </div>
                        <div
                            class="bg-base-content/6 text-base-content/60 hidden rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums sm:block"
                        >
                            {{ row.blocks.length }}
                        </div>
                    </div>
                }
            </div>
            <div
                timeline-grid
                class="relative z-0 overflow-hidden"
                [style.width]="timeline_width + 'rem'"
                [style.height]="rows().length * row_height + 'rem'"
            >
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="bg-base-content/6 absolute top-0 h-full w-px"
                        [style.left]="i * block_width + 'rem'"
                    ></div>
                }
                @for (row of rows(); track row.id; let i = $index) {
                    <div
                        class="absolute left-0 w-full transition-colors duration-100"
                        [style.top]="i * row_height + 'rem'"
                        [style.height]="row_height + 'rem'"
                        [class.row-highlight]="hovered_row() === i"
                        (mouseenter)="hovered_row.set(i)"
                        (mouseleave)="clearHoveredRow(i)"
                    ></div>
                    <div
                        class="border-base-content/6 absolute left-0 w-full border-b"
                        [style.top]="i * row_height + row_height + 'rem'"
                    ></div>

                    @if (!row.blocks.length) {
                        <div
                            class="text-base-content/30 pointer-events-none absolute left-4 flex items-center gap-1.5 text-[11px]"
                            [style.top]="i * row_height + 'rem'"
                            [style.height]="row_height + 'rem'"
                        >
                            <icon class="text-sm">event_busy</icon>
                            {{
                                'SIGNAGE_MANAGER.NO_PLAYLISTS_SCHEDULED'
                                    | translate
                            }}
                        </div>
                    }

                    @for (
                        block of row.blocks;
                        track block.playlist.id +
                            '_' +
                            block.start_minutes +
                            '_' +
                            (block.source_label || '') +
                            '_' +
                            $index
                    ) {
                        <a
                            matRipple
                            class="schedule-block absolute z-10 text-left"
                            [style.left]="
                                timeToOffset(block.start_minutes) + '%'
                            "
                            [style.top]="i * row_height + 0.375 + 'rem'"
                            [style.width]="
                                durationToOffset(visibleDuration(block)) + '%'
                            "
                            [style.height]="row_height - 0.75 + 'rem'"
                            [style.min-width.rem]="2"
                            [routerLink]="['/playlists', block.playlist.id]"
                            [matTooltip]="blockTooltip(row, block)"
                            [attr.aria-label]="blockAriaLabel(row, block)"
                            (mouseenter)="hovered_row.set(i)"
                            (mouseleave)="clearHoveredRow(i)"
                        >
                            <div
                                class="relative flex h-full w-full flex-col overflow-hidden rounded-md border px-2 py-1"
                                [style.background-color]="
                                    blockBackgroundColor(block)
                                "
                                [style.color]="blockTextColor(block)"
                                [style.border-color]="blockBorderColor(block)"
                                [class.border-dashed]="
                                    block.source_type === 'zone' &&
                                    view_tab() === 'displays'
                                "
                            >
                                <div
                                    class="truncate text-[11px] leading-tight font-semibold"
                                    [class.line-through]="!block.playlist.enabled"
                                >
                                    {{ block.playlist.name }}
                                </div>
                                <div
                                    class="truncate text-[10px] leading-tight opacity-70"
                                >
                                    {{
                                        block.all_day
                                            ? ('SIGNAGE_MANAGER.ALL_DAY'
                                              | translate)
                                            : block.label
                                    }}
                                </div>
                                @if (requiresApproval(block)) {
                                    <div
                                        class="mt-auto truncate text-[10px] leading-tight font-medium"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.AWAITING_APPROVAL'
                                                | translate
                                        }}
                                    </div>
                                }
                                @if (
                                    block.source_label &&
                                    view_tab() === 'displays'
                                ) {
                                    <div
                                        class="mt-auto truncate text-[10px] leading-tight opacity-60"
                                    >
                                        {{
                                            block.source_type === 'display'
                                                ? ('SIGNAGE_MANAGER.SOURCE_DIRECT'
                                                  | translate)
                                                : ('SIGNAGE_MANAGER.SOURCE_VIA'
                                                  | translate
                                                      : {
                                                            source: block.source_label,
                                                        })
                                        }}
                                    </div>
                                }
                            </div>
                        </a>
                    }
                }

                @if (show_current_time()) {
                    <div
                        class="pointer-events-none absolute inset-y-0 z-30"
                        [style.left]="timeToOffset(current_minutes()) + '%'"
                    >
                        <div
                            class="bg-error absolute -top-0.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
                        ></div>
                        <div class="bg-error h-full w-0.5"></div>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      MatTooltipModule,
      RouterLink,
      IconComponent,
      DateFromPipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;45815bc6d04474a393fe419598d10a495a9ce15188acd78c3568586ceadfa17e;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/schedules/schedule-timeline.component.ts */\n:host {\n  display: flex;\n  min-height: 0;\n  flex: 1;\n}\n[timeline] {\n  grid-template-columns: 9rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n@media (min-width: 640px) {\n  [timeline] {\n    grid-template-columns: 16rem auto;\n  }\n}\n.row-highlight {\n  background-color: color-mix(in srgb, var(--info) 6%, transparent);\n}\n.schedule-block {\n  transition: transform 120ms ease, z-index 0ms;\n}\n.schedule-block:hover {\n  z-index: 20;\n  transform: scaleY(1.04);\n}\n.schedule-block > div {\n  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);\n  transition: box-shadow 120ms ease;\n}\n.schedule-block:hover > div {\n  box-shadow: 0 3px 8px rgb(0 0 0 / 0.12);\n}\n/*# sourceMappingURL=schedule-timeline.component.css.map */\n"] }]
  }], null, { rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }], view_tab: [{ type: Input, args: [{ isSignal: true, alias: "view_tab", required: false }] }], selected_date: [{ type: Input, args: [{ isSignal: true, alias: "selected_date", required: true }] }], current_minutes: [{ type: Input, args: [{ isSignal: true, alias: "current_minutes", required: false }] }], show_current_time: [{ type: Input, args: [{ isSignal: true, alias: "show_current_time", required: false }] }], playlist_approval_status: [{ type: Input, args: [{ isSignal: true, alias: "playlist_approval_status", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleTimelineComponent, { className: "ScheduleTimelineComponent", filePath: "apps/signage-manager/src/app/schedules/schedule-timeline.component.ts", lineNumber: 315 });
})();

// apps/signage-manager/src/app/schedules/schedules.component.ts
function SchedulesSectionComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SchedulesSectionComponent_Conditional_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.CLEAR_SCHEDULE_SEARCH"));
  }
}
function SchedulesSectionComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "icon", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.view_tab() === "displays" ? "tv_off" : "layers_clear", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r1.search_term() ? "SIGNAGE_MANAGER.NO_SCHEDULES_MATCH" : ctx_r1.view_tab() === "displays" ? "SIGNAGE_MANAGER.NO_DISPLAYS_AVAILABLE" : "SIGNAGE_MANAGER.NO_ZONES_AVAILABLE"), " ");
  }
}
function SchedulesSectionComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "schedule-timeline", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r1.rows())("view_tab", ctx_r1.view_tab())("selected_date", ctx_r1.selected_date())("current_minutes", ctx_r1.current_minutes())("show_current_time", ctx_r1.show_current_time())("playlist_approval_status", ctx_r1.playlist_approval_status());
  }
}
var TAB_QUERY_PARAM = "tab";
function parseScheduleTab(value) {
  return value === "zones" ? "zones" : "displays";
}
var SchedulesSectionComponent = class _SchedulesSectionComponent {
  constructor() {
    this._service = inject(SignageService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._destroy_ref = inject(DestroyRef);
    this.tab = input(
      null,
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view_tab = signal(
      "displays",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_date = signal(
      startOfDay(/* @__PURE__ */ new Date()),
      ...ngDevMode ? [{ debugName: "selected_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_time = signal(
      /* @__PURE__ */ new Date(),
      ...ngDevMode ? [{ debugName: "current_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlists = this._service.playlists;
    this._displays = this._service.displays;
    this._zones = this._service.zones;
    this.playlist_approval_status = this._service.playlist_approval_status;
    this.display_total = computed(
      () => this._displays().length,
      ...ngDevMode ? [{ debugName: "display_total" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_total = computed(
      () => this._zones().length,
      ...ngDevMode ? [{ debugName: "zone_total" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_placeholder = computed(
      () => this.view_tab() === "displays" ? "SIGNAGE_MANAGER.SEARCH_DISPLAYS_ZONES_PLAYLISTS" : "SIGNAGE_MANAGER.SEARCH_ZONES_PLAYLISTS",
      ...ngDevMode ? [{ debugName: "search_placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_minutes = computed(
      () => {
        const now = this.current_time();
        return now.getHours() * 60 + now.getMinutes();
      },
      ...ngDevMode ? [{ debugName: "current_minutes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_current_time = computed(
      () => isSameDay(this.selected_date(), this.current_time()),
      ...ngDevMode ? [{ debugName: "show_current_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_rows = computed(
      () => {
        const playlists = this._playlists();
        const zones = this._zones();
        const date = this.selected_date();
        const search = this.search_term().trim().toLowerCase();
        return this._displays().map((display) => {
          const assignments = buildDisplayScheduleAssignments(display, zones, playlists);
          const blocks = buildScheduleBlocks(assignments, [date]).sort((left, right) => left.start_minutes - right.start_minutes || left.playlist.name.localeCompare(right.playlist.name));
          const zone_count = (display.zones || []).length;
          const zone_label = zone_count ? ` \xB7 ${i18n("SIGNAGE_MANAGER.ZONE_COUNT_LABEL", {
            count: zone_count
          }, zone_count)}` : "";
          const search_index = [
            display.display_name || display.name,
            display.description || "",
            ...assignments.map((item) => item.playlist.name),
            ...assignments.map((item) => item.source_label || "")
          ].join(" ").toLowerCase();
          return {
            id: display.id,
            name: display.display_name || display.name,
            description: display.description || "",
            subtitle: `${i18n("SIGNAGE_MANAGER.PLAYLIST_COUNT_LABEL", {
              count: assignments.length
            }, assignments.length)}${zone_label}`,
            icon: "tv",
            route: ["/displays", display.id],
            blocks,
            search_index,
            signage_last_seen: display.signage_last_seen,
            updated_at: display.updated_at
          };
        }).filter((row) => !search || row.search_index.includes(search));
      },
      ...ngDevMode ? [{ debugName: "display_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_rows = computed(
      () => {
        const playlists = this._playlists();
        const displays = this._displays();
        const date = this.selected_date();
        const search = this.search_term().trim().toLowerCase();
        return this._zones().map((zone) => {
          const assignments = buildZoneScheduleAssignments(zone, playlists);
          const blocks = buildScheduleBlocks(assignments, [date]).sort((left, right) => left.start_minutes - right.start_minutes || left.playlist.name.localeCompare(right.playlist.name));
          const display_count = displays.filter((display) => display.zones?.includes(zone.id)).length;
          const search_index = [
            zone.display_name || zone.name,
            zone.description || "",
            ...assignments.map((item) => item.playlist.name)
          ].join(" ").toLowerCase();
          return {
            id: zone.id,
            name: zone.display_name || zone.name,
            description: zone.description || "",
            subtitle: `${i18n("SIGNAGE_MANAGER.PLAYLIST_COUNT_LABEL", {
              count: assignments.length
            }, assignments.length)} \xB7 ${i18n("SIGNAGE_MANAGER.DISPLAY_COUNT_LABEL", {
              count: display_count
            }, display_count)}`,
            icon: "layers",
            route: ["/zones", zone.id],
            blocks,
            search_index,
            updated_at: zone.updated_at
          };
        }).filter((row) => !search || row.search_index.includes(search));
      },
      ...ngDevMode ? [{ debugName: "zone_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rows = computed(
      () => this.view_tab() === "displays" ? this.display_rows() : this.zone_rows(),
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const route_tab = parseScheduleTab(this.tab());
      if (route_tab !== this.view_tab()) {
        this.view_tab.set(route_tab);
      }
    });
    const timer = setInterval(() => this.current_time.set(/* @__PURE__ */ new Date()), 6e4);
    this._destroy_ref.onDestroy(() => clearInterval(timer));
  }
  setSearch(event) {
    const target = event.target;
    this.search_term.set(target?.value || "");
  }
  clearSearch() {
    this.search_term.set("");
  }
  setViewTab(tab) {
    if (tab === this.view_tab())
      return;
    this.view_tab.set(tab);
    void this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { [TAB_QUERY_PARAM]: tab },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  previousDay() {
    this.selected_date.update((date) => addDays(date, -1));
  }
  nextDay() {
    this.selected_date.update((date) => addDays(date, 1));
  }
  goToToday() {
    this.selected_date.set(startOfDay(/* @__PURE__ */ new Date()));
  }
  static {
    this.\u0275fac = function SchedulesSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SchedulesSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchedulesSectionComponent, selectors: [["schedules-section"]], inputs: { tab: [1, "tab"] }, decls: 60, vars: 67, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col", "overflow-hidden"], [1, "bg-base-100", "border-base-300", "relative", "z-10", "border-b", "px-4", "py-3"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center"], [1, "min-w-0", "flex-1"], [1, "text-lg", "font-semibold"], ["role", "tablist", 1, "bg-base-content/5", "flex", "max-w-52", "overflow-hidden", "rounded-lg", "p-1"], ["type", "button", "role", "tab", 1, "flex", "rounded-md", "p-2", "font-medium", "transition-all", "duration-150", 3, "click"], [1, "px-1"], [1, "bg-base-content/5", "h-6", "min-w-6", "rounded-full", "p-1", "text-xs", "opacity-60"], [1, "mt-2.5", "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "flex", "items-center", "gap-0.5"], ["icon", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "ml-1.5"], [1, "text-sm", "leading-tight", "font-medium"], [1, "text-base-content/45", "text-[11px]"], ["appearance", "outline", 1, "no-subscript", "min-w-1/2"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "type", "search", 3, "input", "value", "placeholder"], ["icon", "", "matSuffix", "", "type", "button", "matRipple", ""], [1, "min-h-0", "flex-1", "p-2"], [1, "bg-base-100", "border-base-300", "flex", "h-full", "min-h-0", "flex-col", "overflow-hidden", "rounded-lg", "border"], [1, "text-base-content/40", "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-3"], [3, "rows", "view_tab", "selected_date", "current_minutes", "show_current_time", "playlist_approval_status"], ["icon", "", "matSuffix", "", "type", "button", "matRipple", "", 3, "click"], [1, "text-4xl"], [1, "text-sm"]], template: function SchedulesSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "group-breadcrumbs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function SchedulesSectionComponent_Template_button_click_12_listener() {
          return ctx.setViewTab("displays");
        });
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 8);
        \u0275\u0275listener("click", function SchedulesSectionComponent_Template_button_click_18_listener() {
          return ctx.setViewTab("zones");
        });
        \u0275\u0275elementStart(19, "div", 9);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 10);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 11)(25, "div", 12)(26, "button", 13);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275listener("click", function SchedulesSectionComponent_Template_button_click_26_listener() {
          return ctx.previousDay();
        });
        \u0275\u0275elementStart(29, "icon");
        \u0275\u0275text(30, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 13);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275listener("click", function SchedulesSectionComponent_Template_button_click_31_listener() {
          return ctx.goToToday();
        });
        \u0275\u0275elementStart(34, "icon");
        \u0275\u0275text(35, "today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 13);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275listener("click", function SchedulesSectionComponent_Template_button_click_36_listener() {
          return ctx.nextDay();
        });
        \u0275\u0275elementStart(39, "icon");
        \u0275\u0275text(40, "chevron_right");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 14)(42, "div", 15);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 16);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "mat-form-field", 17)(49, "icon", 18);
        \u0275\u0275text(50, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "input", 19);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275listener("input", function SchedulesSectionComponent_Template_input_input_51_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(54, SchedulesSectionComponent_Conditional_54_Template, 4, 3, "button", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 21)(56, "div", 22);
        \u0275\u0275conditionalCreate(57, SchedulesSectionComponent_Conditional_57_Template, 6, 4, "div", 23)(58, SchedulesSectionComponent_Conditional_58_Template, 1, 6, "schedule-timeline", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(59, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 37, "SIGNAGE_MANAGER.NAV_SCHEDULES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 39, "SIGNAGE_MANAGER.SCHEDULE_TYPES"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-base-100", ctx.view_tab() === "displays")("shadow-sm", ctx.view_tab() === "displays")("text-primary", ctx.view_tab() === "displays")("opacity-50", ctx.view_tab() !== "displays");
        \u0275\u0275attribute("aria-selected", ctx.view_tab() === "displays");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 41, "SIGNAGE_MANAGER.NAV_DISPLAYS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.display_total(), " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("bg-base-100", ctx.view_tab() === "zones")("shadow-sm", ctx.view_tab() === "zones")("text-primary", ctx.view_tab() === "zones")("opacity-50", ctx.view_tab() !== "zones");
        \u0275\u0275attribute("aria-selected", ctx.view_tab() === "zones");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 43, "SIGNAGE_MANAGER.NAV_ZONES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.zone_total(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(27, 45, "SIGNAGE_MANAGER.PREVIOUS_DAY"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 47, "SIGNAGE_MANAGER.SHOW_PREVIOUS_DAY"));
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(32, 49, "COMMON.TODAY"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(33, 51, "SIGNAGE_MANAGER.SHOW_TODAY"));
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(37, 53, "SIGNAGE_MANAGER.NEXT_DAY"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 55, "SIGNAGE_MANAGER.SHOW_NEXT_DAY"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 57, ctx.selected_date(), "EEEE, d MMMM yyyy"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 60, ctx.selected_date(), "EEE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.search_term())("placeholder", \u0275\u0275pipeBind1(52, 63, ctx.search_placeholder()));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(53, 65, ctx.search_placeholder()));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.search_term() ? 54 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.rows().length === 0 ? 57 : 58);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      NavSidebarComponent,
      NavFooterComponent,
      GroupBreadcrumbsComponent,
      ScheduleTimelineComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=schedules.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchedulesSectionComponent, [{
    type: Component,
    args: [{ selector: "schedules-section", template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <div
                    class="bg-base-100 border-base-300 relative z-10 border-b px-4 py-3"
                >
                    <div
                        class="flex flex-col gap-3 sm:flex-row sm:items-center"
                    >
                        <div class="min-w-0 flex-1">
                            <h2 class="text-lg font-semibold">
                                {{
                                    'SIGNAGE_MANAGER.NAV_SCHEDULES' | translate
                                }}
                            </h2>
                            <group-breadcrumbs />
                        </div>
                        <div
                            class="bg-base-content/5 flex max-w-52 overflow-hidden rounded-lg p-1"
                            role="tablist"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SCHEDULE_TYPES' | translate
                            "
                        >
                            <button
                                type="button"
                                role="tab"
                                class="flex rounded-md p-2 font-medium transition-all duration-150"
                                [class.bg-base-100]="view_tab() === 'displays'"
                                [class.shadow-sm]="view_tab() === 'displays'"
                                [class.text-primary]="view_tab() === 'displays'"
                                [class.opacity-50]="view_tab() !== 'displays'"
                                [attr.aria-selected]="view_tab() === 'displays'"
                                (click)="setViewTab('displays')"
                            >
                                <div class="px-1">
                                    {{
                                        'SIGNAGE_MANAGER.NAV_DISPLAYS'
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-content/5 h-6 min-w-6 rounded-full p-1 text-xs opacity-60"
                                >
                                    {{ display_total() }}
                                </div>
                            </button>
                            <button
                                type="button"
                                role="tab"
                                class="flex rounded-md p-2 font-medium transition-all duration-150"
                                [class.bg-base-100]="view_tab() === 'zones'"
                                [class.shadow-sm]="view_tab() === 'zones'"
                                [class.text-primary]="view_tab() === 'zones'"
                                [class.opacity-50]="view_tab() !== 'zones'"
                                [attr.aria-selected]="view_tab() === 'zones'"
                                (click)="setViewTab('zones')"
                            >
                                <div class="px-1">
                                    {{
                                        'SIGNAGE_MANAGER.NAV_ZONES' | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-content/5 h-6 min-w-6 rounded-full p-1 text-xs opacity-60"
                                >
                                    {{ zone_total() }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        class="mt-2.5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
                    >
                        <div class="flex items-center gap-0.5">
                            <button
                                icon
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.PREVIOUS_DAY' | translate
                                "
                                (click)="previousDay()"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHOW_PREVIOUS_DAY'
                                        | translate
                                "
                            >
                                <icon>chevron_left</icon>
                            </button>
                            <button
                                icon
                                type="button"
                                matRipple
                                [matTooltip]="'COMMON.TODAY' | translate"
                                (click)="goToToday()"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHOW_TODAY' | translate
                                "
                            >
                                <icon>today</icon>
                            </button>
                            <button
                                icon
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.NEXT_DAY' | translate
                                "
                                (click)="nextDay()"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHOW_NEXT_DAY' | translate
                                "
                            >
                                <icon>chevron_right</icon>
                            </button>
                            <div class="ml-1.5">
                                <div class="text-sm leading-tight font-medium">
                                    {{
                                        selected_date()
                                            | date: 'EEEE, d MMMM yyyy'
                                    }}
                                </div>
                                <div class="text-base-content/45 text-[11px]">
                                    {{ selected_date() | date: 'EEE' }}
                                </div>
                            </div>
                        </div>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript min-w-1/2"
                        >
                            <icon matPrefix class="text-2xl">search</icon>
                            <input
                                matInput
                                type="search"
                                [value]="search_term()"
                                [placeholder]="search_placeholder() | translate"
                                (input)="setSearch($event)"
                                [attr.aria-label]="
                                    search_placeholder() | translate
                                "
                            />
                            @if (search_term()) {
                                <button
                                    icon
                                    matSuffix
                                    type="button"
                                    matRipple
                                    (click)="clearSearch()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.CLEAR_SCHEDULE_SEARCH'
                                            | translate
                                    "
                                >
                                    <icon>close</icon>
                                </button>
                            }
                        </mat-form-field>
                    </div>
                </div>

                <div class="min-h-0 flex-1 p-2">
                    <div
                        class="bg-base-100 border-base-300 flex h-full min-h-0 flex-col overflow-hidden rounded-lg border"
                    >
                        @if (rows().length === 0) {
                            <div
                                class="text-base-content/40 flex flex-1 flex-col items-center justify-center gap-3"
                            >
                                <icon class="text-4xl">
                                    {{
                                        view_tab() === 'displays'
                                            ? 'tv_off'
                                            : 'layers_clear'
                                    }}
                                </icon>
                                <p class="text-sm">
                                    {{
                                        (search_term()
                                            ? 'SIGNAGE_MANAGER.NO_SCHEDULES_MATCH'
                                            : view_tab() === 'displays'
                                              ? 'SIGNAGE_MANAGER.NO_DISPLAYS_AVAILABLE'
                                              : 'SIGNAGE_MANAGER.NO_ZONES_AVAILABLE'
                                        ) | translate
                                    }}
                                </p>
                            </div>
                        } @else {
                            <schedule-timeline
                                [rows]="rows()"
                                [view_tab]="view_tab()"
                                [selected_date]="selected_date()"
                                [current_minutes]="current_minutes()"
                                [show_current_time]="show_current_time()"
                                [playlist_approval_status]="
                                    playlist_approval_status()
                                "
                            />
                        }
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `, imports: [
      DatePipe,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      NavSidebarComponent,
      NavFooterComponent,
      GroupBreadcrumbsComponent,
      ScheduleTimelineComponent,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/schedules/schedules.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=schedules.component.css.map */\n"] }]
  }], () => [], { tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchedulesSectionComponent, { className: "SchedulesSectionComponent", filePath: "apps/signage-manager/src/app/schedules/schedules.component.ts", lineNumber: 269 });
})();
export {
  SchedulesSectionComponent
};
//# sourceMappingURL=schedules.component-ZG5GSJR6.js.map
