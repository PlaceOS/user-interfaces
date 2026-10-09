import {
  DateFromPipe,
  isDisplayOnline
} from "./chunk-7PVAEAHI.js";
import {
  GroupBreadcrumbsComponent
} from "./chunk-ESTPCPL6.js";
import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-JMPEKOI2.js";
import "./chunk-PVSZGYWQ.js";
import {
  MINUTES_PER_DAY,
  SignageInventoryService,
  SignagePlaylistService,
  buildDayTimelineBlocks,
  buildDisplayScheduleAssignments,
  buildZoneScheduleAssignments,
  visibleMinutes
} from "./chunk-A3ZHUTED.js";
import "./chunk-SLLMOXD7.js";
import "./chunk-IAA4H3MD.js";
import "./chunk-76L3RQJV.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YVBXI2KA.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-TP37P6LZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-GF5I6UHA.js";
import "./chunk-W7BPHDUZ.js";
import "./chunk-OAWDSWZC.js";
import "./chunk-BAFAQKY6.js";
import "./chunk-AOUA7LSD.js";
import "./chunk-STYUKBG2.js";
import "./chunk-EW627VC3.js";
import "./chunk-NVC2MTBW.js";
import "./chunk-EMBZFGIE.js";
import "./chunk-RR6Z4IN7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-ARJ6GFJX.js";
import "./chunk-B6VCLN4P.js";
import "./chunk-2PPCVPFM.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-KABK725Z.js";
import "./chunk-4BHMYMLA.js";
import "./chunk-HGUL5NVP.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-E72MB55H.js";
import "./chunk-DMUGOB3K.js";
import {
  IconComponent
} from "./chunk-PRJCR3BE.js";
import {
  addDays,
  i18n,
  isSameDay,
  startOfDay
} from "./chunk-UY3BZCXJ.js";
import "./chunk-7QGPCQM3.js";
import "./chunk-TQO6MZFG.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-C2I2ZQPH.js";
import "./chunk-ZJXU3LLP.js";
import {
  Component,
  DatePipe,
  DestroyRef,
  Input,
  LOCALE_ID,
  computed,
  inject,
  input,
  linkedSignal,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/schedules/schedule-timeline.component.ts
var _c0 = (a0) => ["/playlists", a0];
var _forTrack0 = ($index, $item) => $item.row.id;
var _forTrack1 = ($index, $item) => $item.key;
function ScheduleTimelineComponent_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function ScheduleTimelineComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ScheduleTimelineComponent_For_9_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_label_r1 = ctx.$implicit;
    const \u0275$index_15_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.block_width, "rem");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", hour_label_r1, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_15_r2 !== 0 ? 3 : -1);
  }
}
function ScheduleTimelineComponent_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "icon", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r4 = \u0275\u0275nextContext().$implicit;
    const status_r5 = \u0275\u0275readContextLet(2);
    \u0275\u0275classProp("bg-info", status_r5.online)("text-info-content", status_r5.online)("bg-error", !status_r5.online)("text-error-content", !status_r5.online);
    \u0275\u0275property("matTooltip", status_r5.label);
    \u0275\u0275attribute("aria-label", status_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(view_r4.row.icon);
  }
}
function ScheduleTimelineComponent_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(view_r4.row.icon);
  }
}
function ScheduleTimelineComponent_For_11_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 28);
    \u0275\u0275text(1, "bolt");
    \u0275\u0275elementEnd();
  }
}
function ScheduleTimelineComponent_For_11_For_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TAKEOVER_PLAYBACK"), " ");
  }
}
function ScheduleTimelineComponent_For_11_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.AWAITING_APPROVAL"), " ");
  }
}
function ScheduleTimelineComponent_For_11_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r6.source, " ");
  }
}
function ScheduleTimelineComponent_For_11_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25)(1, "div", 26)(2, "div", 27);
    \u0275\u0275conditionalCreate(3, ScheduleTimelineComponent_For_11_For_14_Conditional_3_Template, 2, 0, "icon", 28);
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ScheduleTimelineComponent_For_11_For_14_Conditional_8_Template, 3, 3, "div", 31);
    \u0275\u0275conditionalCreate(9, ScheduleTimelineComponent_For_11_For_14_Conditional_9_Template, 3, 3, "div", 32);
    \u0275\u0275conditionalCreate(10, ScheduleTimelineComponent_For_11_For_14_Conditional_10_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const block_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", block_r6.left, "%")("top", block_r6.top, "rem")("width", block_r6.width, "%")("height", ctx_r2.lane_height, "rem")("min-width", 2, "rem");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(31, _c0, block_r6.playlist_id))("matTooltip", block_r6.tooltip);
    \u0275\u0275attribute("aria-label", block_r6.aria_label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", block_r6.bg_color)("color", block_r6.text_color)("border-color", block_r6.border_color);
    \u0275\u0275classProp("border-dashed", block_r6.from_zone)("takeover", block_r6.takeover);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(block_r6.takeover ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("line-through", !block_r6.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", block_r6.time, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.takeover ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.awaiting_approval ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.source ? 10 : -1);
  }
}
function ScheduleTimelineComponent_For_11_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 34);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS_SCHEDULED"), " ");
  }
}
function ScheduleTimelineComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275declareLet(2);
    \u0275\u0275conditionalCreate(3, ScheduleTimelineComponent_For_11_Conditional_3_Template, 3, 11, "div", 14)(4, ScheduleTimelineComponent_For_11_Conditional_4_Template, 3, 1, "div", 15);
    \u0275\u0275elementStart(5, "div", 16)(6, "a", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20);
    \u0275\u0275repeaterCreate(13, ScheduleTimelineComponent_For_11_For_14_Template, 11, 33, "a", 21, _forTrack1, false, ScheduleTimelineComponent_For_11_ForEmpty_15_Template, 5, 3, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", view_r4.height, "rem");
    \u0275\u0275advance(2);
    const status_r7 = \u0275\u0275storeLet(ctx_r2.row_status().get(view_r4.row.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(status_r7 ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", view_r4.row.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", view_r4.row.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", view_r4.row.subtitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", view_r4.blocks.length, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.timeline_width, "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(view_r4.blocks);
  }
}
function ScheduleTimelineComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36)(2, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", "calc(var(--header-width) + " + ctx_r2.current_offset() + "rem)");
  }
}
var LANE_HEIGHT = 3.25;
var ROW_PADDING = 0.375;
var APPROVAL_COLOURS = { bg: "#fef3c7", text: "#92400e", border: "#f59e0b" };
function dayPercent(minutes) {
  const clamped = Math.min(MINUTES_PER_DAY, Math.max(0, minutes));
  return +(clamped / MINUTES_PER_DAY * 100).toFixed(2);
}
var ScheduleTimelineComponent = class _ScheduleTimelineComponent {
  constructor() {
    this._date_from = new DateFromPipe();
    this._locale = inject(LOCALE_ID);
    this._date = new DatePipe(this._locale);
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
    this.lane_height = LANE_HEIGHT;
    this.hour_labels = (() => {
      const hour_format = new Intl.DateTimeFormat(this._locale, {
        hour: "numeric"
      });
      return Array.from({ length: 24 }, (_, hour) => hour_format.format(new Date(2e3, 0, 1, hour)));
    })();
    this.timeline_width = this.hour_labels.length * this.block_width;
    this.current_offset = computed(
      () => dayPercent(this.current_minutes()) / 100 * this.timeline_width,
      ...ngDevMode ? [{ debugName: "current_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view_rows = computed(
      () => {
        const approvals = this.playlist_approval_status();
        const show_source = this.view_tab() === "displays";
        return this.rows().map((row) => ({
          row,
          height: Math.max(4, row.lane_count * LANE_HEIGHT + 2 * ROW_PADDING),
          blocks: row.blocks.map((block) => this._blockView(row, block, approvals, show_source))
        }));
      },
      ...ngDevMode ? [{ debugName: "view_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.row_status = computed(
      () => {
        this.current_minutes();
        const now = Date.now();
        const statuses = /* @__PURE__ */ new Map();
        if (this.view_tab() !== "displays")
          return statuses;
        for (const row of this.rows()) {
          const online = isDisplayOnline(row.signage_last_seen, now);
          const label = !row.signage_last_seen ? i18n("SIGNAGE_MANAGER.DISPLAY_STATUS_NEVER_SEEN") : i18n(online ? "SIGNAGE_MANAGER.DISPLAY_STATUS_ONLINE" : "SIGNAGE_MANAGER.DISPLAY_STATUS_OFFLINE", {
            time: this._lastSeen(row.signage_last_seen * 1e3, now)
          });
          statuses.set(row.id, { online, label });
        }
        return statuses;
      },
      ...ngDevMode ? [{ debugName: "row_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * When a display last checked in: relative within the last hour, the
   * time earlier today, and the date and time before today. Matches the
   * display list.
   */
  _lastSeen(last_seen, now) {
    if (now - last_seen < 60 * 60 * 1e3) {
      return this._date_from.transform(last_seen);
    }
    const date_format = isSameDay(last_seen, now) ? "shortTime" : "short";
    return this._date.transform(last_seen, date_format) || "";
  }
  _blockView(row, block, approvals, show_source) {
    const { playlist } = block;
    const awaiting_approval = playlist.id in approvals && !approvals[playlist.id];
    const colours = awaiting_approval ? APPROVAL_COLOURS : {
      bg: block.bg_color,
      text: block.text_color,
      border: block.text_color
    };
    const time = block.all_day ? i18n("SIGNAGE_MANAGER.ALL_DAY") : block.label;
    const source = show_source && block.source_label ? block.source_type === "display" ? i18n("SIGNAGE_MANAGER.SOURCE_DIRECT") : i18n("SIGNAGE_MANAGER.SOURCE_VIA", {
      source: block.source_label
    }) : "";
    const takeover = block.takeover ? i18n("SIGNAGE_MANAGER.TAKEOVER_PLAYBACK") : "";
    const approval = awaiting_approval ? i18n("SIGNAGE_MANAGER.AWAITING_APPROVAL") : "";
    const disabled = playlist.enabled ? "" : i18n("COMMON.DISABLED");
    const tooltip_source = show_source && block.source_label ? i18n("SIGNAGE_MANAGER.TOOLTIP_SOURCE", {
      source: block.source_type === "display" ? i18n("SIGNAGE_MANAGER.SOURCE_DISPLAY") : block.source_label
    }) : "";
    return {
      key: `${playlist.id}|${block.takeover}|${block.start_minutes}`,
      playlist_id: playlist.id,
      name: playlist.name,
      enabled: !!playlist.enabled,
      time,
      takeover: block.takeover,
      awaiting_approval,
      source,
      from_zone: show_source && block.source_type === "zone",
      left: dayPercent(block.start_minutes),
      width: dayPercent(visibleMinutes(block)),
      top: ROW_PADDING + block.lane * LANE_HEIGHT,
      bg_color: colours.bg,
      text_color: colours.text,
      border_color: colours.border,
      tooltip: [
        row.name,
        i18n("SIGNAGE_MANAGER.TOOLTIP_PLAYLIST", {
          name: playlist.name
        }),
        i18n("SIGNAGE_MANAGER.TOOLTIP_TIME", { time }),
        disabled,
        takeover,
        tooltip_source,
        awaiting_approval ? i18n("SIGNAGE_MANAGER.TOOLTIP_STATUS_AWAITING") : ""
      ].filter((line) => line).join("\n"),
      aria_label: [
        row.name,
        playlist.name,
        block.all_day ? i18n("SIGNAGE_MANAGER.ALL_DAY_LOWER") : time,
        disabled,
        takeover,
        approval,
        source
      ].filter((part) => part).join(", ")
    };
  }
  static {
    this.\u0275fac = function ScheduleTimelineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleTimelineComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleTimelineComponent, selectors: [["schedule-timeline"]], inputs: { rows: [1, "rows"], view_tab: [1, "view_tab"], current_minutes: [1, "current_minutes"], show_current_time: [1, "show_current_time"], playlist_approval_status: [1, "playlist_approval_status"] }, decls: 13, vars: 6, consts: [[1, "min-h-0", "flex-1", "overflow-auto"], [1, "relative", "w-max", "min-w-full"], [1, "sticky", "top-0", "z-40", "flex"], ["corner", "", 1, "header-cell", "bg-base-100", "border-base-300", "sticky", "left-0", "z-10", "flex", "h-14", "flex-col", "justify-end", "border-r", "border-b", "px-4", "pb-2"], [1, "text-base-content/50", "text-[10px]", "font-semibold", "tracking-[0.2em]", "uppercase"], ["time-headers", "", 1, "border-base-300", "bg-base-100", "flex", "h-14", "items-end", "border-b"], [1, "relative", "flex", "h-full", "items-end", "pb-2", 3, "width"], ["schedule-row", "", 1, "schedule-row", "border-base-200", "flex", "border-b", 3, "height"], [1, "pointer-events-none", "absolute", "top-14", "bottom-0", "z-[25]", 3, "left"], [1, "relative", "flex", "h-full", "items-end", "pb-2"], [1, "text-base-content/50", "w-full", "text-center", "text-[10px]", "tabular-nums"], [1, "bg-base-300/60", "absolute", "top-0", "left-0", "h-2.5", "w-px"], ["schedule-row", "", 1, "schedule-row", "border-base-200", "flex", "border-b"], ["row-header", "", 1, "header-cell", "bg-base-100", "border-base-300", "sticky", "left-0", "z-30", "flex", "items-center", "gap-2", "border-r", "px-2", "sm:gap-3", "sm:px-3"], ["row-status", "", "tabindex", "0", "role", "img", "matTooltipPosition", "right", 1, "hidden", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-md", "sm:flex", 3, "bg-info", "text-info-content", "bg-error", "text-error-content", "matTooltip"], [1, "bg-base-content/6", "hidden", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-md", "sm:flex"], [1, "min-w-0", "flex-1"], [1, "block", "truncate", "text-xs", "font-medium", "hover:underline", "sm:text-sm", 3, "routerLink"], [1, "text-base-content/50", "truncate", "text-[10px]", "sm:text-[11px]"], [1, "bg-base-content/6", "text-base-content/60", "hidden", "rounded-md", "px-1.5", "py-0.5", "text-[10px]", "font-semibold", "tabular-nums", "sm:block"], ["row-timeline", "", 1, "hour-lines", "relative"], ["schedule-block", "", 1, "schedule-block", "absolute", "z-10", "text-left", 3, "left", "top", "width", "height", "min-width", "routerLink", "matTooltip"], [1, "text-base-content/30", "pointer-events-none", "absolute", "inset-y-0", "left-4", "flex", "items-center", "gap-1.5", "text-[11px]"], ["row-status", "", "tabindex", "0", "role", "img", "matTooltipPosition", "right", 1, "hidden", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-md", "sm:flex", 3, "matTooltip"], [1, "text-base", "opacity-60"], ["schedule-block", "", 1, "schedule-block", "absolute", "z-10", "text-left", 3, "routerLink", "matTooltip"], [1, "relative", "flex", "h-full", "w-full", "flex-col", "overflow-hidden", "rounded-md", "border", "px-2", "py-1"], [1, "flex", "items-center", "gap-1", "truncate", "text-[11px]", "leading-tight", "font-semibold"], [1, "shrink-0", "text-xs"], [1, "truncate"], [1, "truncate", "text-[10px]", "leading-tight", "opacity-70"], [1, "truncate", "text-[10px]", "leading-tight", "font-medium"], [1, "mt-auto", "truncate", "text-[10px]", "leading-tight", "font-medium"], [1, "mt-auto", "truncate", "text-[10px]", "leading-tight", "opacity-60"], [1, "text-sm"], [1, "pointer-events-none", "absolute", "top-14", "bottom-0", "z-[25]"], [1, "bg-error", "absolute", "-top-0.5", "left-1/2", "h-2", "w-2", "-translate-x-1/2", "rounded-full"], [1, "bg-error", "h-full", "w-0.5"]], template: function ScheduleTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275repeaterCreate(8, ScheduleTimelineComponent_For_9_Template, 4, 4, "div", 6, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(10, ScheduleTimelineComponent_For_11_Template, 16, 11, "div", 7, _forTrack0);
        \u0275\u0275conditionalCreate(12, ScheduleTimelineComponent_Conditional_12_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx.view_tab() === "displays" ? "SIGNAGE_MANAGER.NAV_DISPLAYS" : "SIGNAGE_MANAGER.NAV_ZONES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.timeline_width, "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.hour_labels);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.view_rows());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_current_time() ? 12 : -1);
      }
    }, dependencies: [MatTooltipModule, MatTooltip, RouterLink, IconComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  --%NS%header-width: 9rem;\n  display: flex;\n  min-height: 0;\n  flex: 1;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%] {\n    --%NS%header-width: 16rem;\n  }\n}\n.header-cell[_ngcontent-%COMP%] {\n  width: var(--%NS%header-width);\n  flex-shrink: 0;\n}\n.hour-lines[_ngcontent-%COMP%] {\n  background-image:\n    repeating-linear-gradient(\n      to right,\n      color-mix(in srgb, var(--%NS%base-content) 6%, transparent) 0 1px,\n      transparent 1px 6rem);\n}\n.schedule-row[_ngcontent-%COMP%]:hover, \n.schedule-row[_ngcontent-%COMP%]:hover    > .header-cell[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--%NS%info) 6%, var(--%NS%base-100));\n}\n.schedule-block[_ngcontent-%COMP%] {\n  transition: transform 120ms ease, z-index 0ms;\n}\n.schedule-block[_ngcontent-%COMP%]:hover, \n.schedule-block[_ngcontent-%COMP%]:focus-visible {\n  z-index: 20;\n  transform: scaleY(1.04);\n}\n.schedule-block[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);\n  transition: box-shadow 120ms ease;\n}\n.schedule-block[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 8px rgb(0 0 0 / 0.12);\n}\n.schedule-block[_ngcontent-%COMP%]    > div.takeover[_ngcontent-%COMP%] {\n  border-left-width: 4px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=schedule-timeline.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleTimelineComponent, [{
    type: Component,
    args: [{ selector: "schedule-timeline", template: `
        <div class="min-h-0 flex-1 overflow-auto">
            <div class="relative w-max min-w-full">
                <div class="sticky top-0 z-40 flex">
                    <div
                        corner
                        class="header-cell bg-base-100 border-base-300 sticky left-0 z-10 flex h-14 flex-col justify-end border-r border-b px-4 pb-2"
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
                        class="border-base-300 bg-base-100 flex h-14 items-end border-b"
                        [style.width.rem]="timeline_width"
                    >
                        @for (
                            hour_label of hour_labels;
                            track $index;
                            let i = $index
                        ) {
                            <div
                                class="relative flex h-full items-end pb-2"
                                [style.width.rem]="block_width"
                            >
                                <div
                                    class="text-base-content/50 w-full text-center text-[10px] tabular-nums"
                                >
                                    {{ hour_label }}
                                </div>
                                @if (i !== 0) {
                                    <div
                                        class="bg-base-300/60 absolute top-0 left-0 h-2.5 w-px"
                                    ></div>
                                }
                            </div>
                        }
                    </div>
                </div>
                @for (view of view_rows(); track view.row.id) {
                    <div
                        schedule-row
                        class="schedule-row border-base-200 flex border-b"
                        [style.height.rem]="view.height"
                    >
                        <div
                            row-header
                            class="header-cell bg-base-100 border-base-300 sticky left-0 z-30 flex items-center gap-2 border-r px-2 sm:gap-3 sm:px-3"
                        >
                            @let status = row_status().get(view.row.id);
                            @if (status) {
                                <div
                                    row-status
                                    tabindex="0"
                                    role="img"
                                    class="hidden h-8 w-8 shrink-0 items-center justify-center rounded-md sm:flex"
                                    [class.bg-info]="status.online"
                                    [class.text-info-content]="status.online"
                                    [class.bg-error]="!status.online"
                                    [class.text-error-content]="!status.online"
                                    [attr.aria-label]="status.label"
                                    [matTooltip]="status.label"
                                    matTooltipPosition="right"
                                >
                                    <icon class="text-base opacity-60">{{
                                        view.row.icon
                                    }}</icon>
                                </div>
                            } @else {
                                <div
                                    class="bg-base-content/6 hidden h-8 w-8 shrink-0 items-center justify-center rounded-md sm:flex"
                                >
                                    <icon class="text-base opacity-60">{{
                                        view.row.icon
                                    }}</icon>
                                </div>
                            }
                            <div class="min-w-0 flex-1">
                                <a
                                    class="block truncate text-xs font-medium hover:underline sm:text-sm"
                                    [routerLink]="view.row.route"
                                >
                                    {{ view.row.name }}
                                </a>
                                <div
                                    class="text-base-content/50 truncate text-[10px] sm:text-[11px]"
                                >
                                    {{ view.row.subtitle }}
                                </div>
                            </div>
                            <div
                                class="bg-base-content/6 text-base-content/60 hidden rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums sm:block"
                            >
                                {{ view.blocks.length }}
                            </div>
                        </div>
                        <div
                            row-timeline
                            class="hour-lines relative"
                            [style.width.rem]="timeline_width"
                        >
                            @for (block of view.blocks; track block.key) {
                                <a
                                    schedule-block
                                    class="schedule-block absolute z-10 text-left"
                                    [style.left.%]="block.left"
                                    [style.top.rem]="block.top"
                                    [style.width.%]="block.width"
                                    [style.height.rem]="lane_height"
                                    [style.min-width.rem]="2"
                                    [routerLink]="[
                                        '/playlists',
                                        block.playlist_id,
                                    ]"
                                    [matTooltip]="block.tooltip"
                                    [attr.aria-label]="block.aria_label"
                                >
                                    <div
                                        class="relative flex h-full w-full flex-col overflow-hidden rounded-md border px-2 py-1"
                                        [class.border-dashed]="block.from_zone"
                                        [class.takeover]="block.takeover"
                                        [style.background-color]="
                                            block.bg_color
                                        "
                                        [style.color]="block.text_color"
                                        [style.border-color]="
                                            block.border_color
                                        "
                                    >
                                        <div
                                            class="flex items-center gap-1 truncate text-[11px] leading-tight font-semibold"
                                        >
                                            @if (block.takeover) {
                                                <icon class="shrink-0 text-xs"
                                                    >bolt</icon
                                                >
                                            }
                                            <span
                                                class="truncate"
                                                [class.line-through]="
                                                    !block.enabled
                                                "
                                                >{{ block.name }}</span
                                            >
                                        </div>
                                        <div
                                            class="truncate text-[10px] leading-tight opacity-70"
                                        >
                                            {{ block.time }}
                                        </div>
                                        @if (block.takeover) {
                                            <div
                                                class="truncate text-[10px] leading-tight font-medium"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.TAKEOVER_PLAYBACK'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        @if (block.awaiting_approval) {
                                            <div
                                                class="mt-auto truncate text-[10px] leading-tight font-medium"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.AWAITING_APPROVAL'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        @if (block.source) {
                                            <div
                                                class="mt-auto truncate text-[10px] leading-tight opacity-60"
                                            >
                                                {{ block.source }}
                                            </div>
                                        }
                                    </div>
                                </a>
                            } @empty {
                                <div
                                    class="text-base-content/30 pointer-events-none absolute inset-y-0 left-4 flex items-center gap-1.5 text-[11px]"
                                >
                                    <icon class="text-sm">event_busy</icon>
                                    {{
                                        'SIGNAGE_MANAGER.NO_PLAYLISTS_SCHEDULED'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (show_current_time()) {
                    <div
                        class="pointer-events-none absolute top-14 bottom-0 z-[25]"
                        [style.left]="
                            'calc(var(--header-width) + ' +
                            current_offset() +
                            'rem)'
                        "
                    >
                        <div
                            class="bg-error absolute -top-0.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
                        ></div>
                        <div class="bg-error h-full w-0.5"></div>
                    </div>
                }
            </div>
        </div>
    `, imports: [MatTooltipModule, RouterLink, IconComponent, TranslatePipe], styles: ["/* angular:styles/component:css;4274417fc0a212bb1255d0f9705588d9642d71a4b7ac564bacaf423d5bc96d60;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/schedules/schedule-timeline.component.ts */\n:host {\n  --header-width: 9rem;\n  display: flex;\n  min-height: 0;\n  flex: 1;\n}\n@media (min-width: 640px) {\n  :host {\n    --header-width: 16rem;\n  }\n}\n.header-cell {\n  width: var(--header-width);\n  flex-shrink: 0;\n}\n.hour-lines {\n  background-image:\n    repeating-linear-gradient(\n      to right,\n      color-mix(in srgb, var(--base-content) 6%, transparent) 0 1px,\n      transparent 1px 6rem);\n}\n.schedule-row:hover,\n.schedule-row:hover > .header-cell {\n  background-color: color-mix(in srgb, var(--info) 6%, var(--base-100));\n}\n.schedule-block {\n  transition: transform 120ms ease, z-index 0ms;\n}\n.schedule-block:hover,\n.schedule-block:focus-visible {\n  z-index: 20;\n  transform: scaleY(1.04);\n}\n.schedule-block > div {\n  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);\n  transition: box-shadow 120ms ease;\n}\n.schedule-block:hover > div {\n  box-shadow: 0 3px 8px rgb(0 0 0 / 0.12);\n}\n.schedule-block > div.takeover {\n  border-left-width: 4px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=schedule-timeline.component.css.map */\n"] }]
  }], null, { rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }], view_tab: [{ type: Input, args: [{ isSignal: true, alias: "view_tab", required: false }] }], current_minutes: [{ type: Input, args: [{ isSignal: true, alias: "current_minutes", required: false }] }], show_current_time: [{ type: Input, args: [{ isSignal: true, alias: "show_current_time", required: false }] }], playlist_approval_status: [{ type: Input, args: [{ isSignal: true, alias: "playlist_approval_status", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleTimelineComponent, { className: "ScheduleTimelineComponent", filePath: "apps/signage-manager/src/app/schedules/schedule-timeline.component.ts", lineNumber: 350 });
})();

// apps/signage-manager/src/app/schedules/schedules.component.ts
function SchedulesSectionComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
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
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "icon", 29);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function SchedulesSectionComponent_Conditional_57_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reload());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "COMMON.LOAD_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"), " ");
  }
}
function SchedulesSectionComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementStart(2, "p", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"), " ");
  }
}
function SchedulesSectionComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "icon", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
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
function SchedulesSectionComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "schedule-timeline", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r1.rows())("view_tab", ctx_r1.view_tab())("current_minutes", ctx_r1.current_minutes())("show_current_time", ctx_r1.show_current_time())("playlist_approval_status", ctx_r1.playlist_approval_status());
  }
}
var TAB_QUERY_PARAM = "tab";
function parseScheduleTab(value) {
  return value === "zones" ? "zones" : "displays";
}
function filterRows(rows, search_term) {
  const search = search_term.trim().toLowerCase();
  return search ? rows.filter((row) => row.search_index.includes(search)) : rows;
}
var SchedulesSectionComponent = class _SchedulesSectionComponent {
  constructor() {
    this._inventory_service = inject(SignageInventoryService);
    this._playlist_service = inject(SignagePlaylistService);
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
    this.view_tab = linkedSignal(
      () => parseScheduleTab(this.tab()),
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
    this._inventory = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_inventory" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._inventory_service.inventory_key(),
      loader: () => this._inventory_service.loadSignageInventory()
    }));
    this._inventory_value = computed(
      () => this._inventory.hasValue() ? this._inventory.value() : void 0,
      ...ngDevMode ? [{ debugName: "_inventory_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlists = computed(
      () => this._inventory_value()?.playlists || [],
      ...ngDevMode ? [{ debugName: "_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._displays = computed(
      () => this._inventory_value()?.displays || [],
      ...ngDevMode ? [{ debugName: "_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._zones = computed(
      () => this._inventory_value()?.zones || [],
      ...ngDevMode ? [{ debugName: "_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inventory_loading = this._inventory.isLoading;
    this.inventory_error = computed(
      () => !!this._inventory.error(),
      ...ngDevMode ? [{ debugName: "inventory_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_approval_status = this._playlist_service.playlist_approval_status;
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
    this._all_display_rows = computed(
      () => {
        const playlists = this._playlists();
        const zones = this._zones();
        const date = this.selected_date();
        const zone_names = new Map(zones.map((zone) => [zone.id, zone.display_name || zone.name]));
        return this._displays().map((display) => {
          const assignments = buildDisplayScheduleAssignments(display, zones, playlists);
          const { blocks, lane_count } = buildDayTimelineBlocks(assignments, date);
          const zone_count = (display.zones || []).length;
          const zone_label = zone_count ? ` \xB7 ${i18n("SIGNAGE_MANAGER.ZONE_COUNT_LABEL", {
            count: zone_count
          }, zone_count)}` : "";
          const search_index = [
            display.display_name || display.name,
            display.description || "",
            ...(display.zones || []).map((id) => zone_names.get(id) || ""),
            ...assignments.map((item) => item.playlist.name),
            ...assignments.map((item) => item.source_label || "")
          ].join(" ").toLowerCase();
          return {
            id: display.id,
            name: display.display_name || display.name,
            subtitle: `${i18n("SIGNAGE_MANAGER.PLAYLIST_COUNT_LABEL", {
              count: assignments.length
            }, assignments.length)}${zone_label}`,
            icon: "tv",
            route: ["/displays", display.id],
            blocks,
            lane_count,
            search_index,
            signage_last_seen: display.signage_last_seen
          };
        });
      },
      ...ngDevMode ? [{ debugName: "_all_display_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._all_zone_rows = computed(
      () => {
        const playlists = this._playlists();
        const displays = this._displays();
        const date = this.selected_date();
        return this._zones().map((zone) => {
          const assignments = buildZoneScheduleAssignments(zone, playlists);
          const { blocks, lane_count } = buildDayTimelineBlocks(assignments, date);
          const display_count = displays.filter((display) => display.zones?.includes(zone.id)).length;
          const search_index = [
            zone.display_name || zone.name,
            zone.description || "",
            ...assignments.map((item) => item.playlist.name)
          ].join(" ").toLowerCase();
          return {
            id: zone.id,
            name: zone.display_name || zone.name,
            subtitle: `${i18n("SIGNAGE_MANAGER.PLAYLIST_COUNT_LABEL", {
              count: assignments.length
            }, assignments.length)} \xB7 ${i18n("SIGNAGE_MANAGER.DISPLAY_COUNT_LABEL", {
              count: display_count
            }, display_count)}`,
            icon: "layers",
            route: ["/zones", zone.id],
            blocks,
            lane_count,
            search_index
          };
        });
      },
      ...ngDevMode ? [{ debugName: "_all_zone_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_rows = computed(
      () => filterRows(this._all_display_rows(), this.search_term()),
      ...ngDevMode ? [{ debugName: "display_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_rows = computed(
      () => filterRows(this._all_zone_rows(), this.search_term()),
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
    const timer = setInterval(() => this.current_time.set(/* @__PURE__ */ new Date()), 6e4);
    this._destroy_ref.onDestroy(() => clearInterval(timer));
  }
  /** Load the schedules again after an error */
  reload() {
    this._inventory.reload();
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
  /** Move between the tabs with the arrow, Home and End keys */
  onTabKeydown(event) {
    const keys = {
      ArrowLeft: "displays",
      Home: "displays",
      ArrowRight: "zones",
      End: "zones"
    };
    const tab = keys[event.key];
    if (!tab)
      return;
    event.preventDefault();
    this.setViewTab(tab);
    document.getElementById(`schedules-tab-${tab}`)?.focus();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchedulesSectionComponent, selectors: [["schedules-section"]], inputs: { tab: [1, "tab"] }, decls: 62, vars: 70, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col", "overflow-hidden"], [1, "bg-base-100", "border-base-300", "relative", "z-10", "border-b", "px-4", "py-3"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center"], [1, "min-w-0", "flex-1"], [1, "text-lg", "font-semibold"], ["role", "tablist", 1, "bg-base-content/5", "flex", "max-w-52", "overflow-hidden", "rounded-lg", "p-1", 3, "keydown"], ["type", "button", "role", "tab", "id", "schedules-tab-displays", "aria-controls", "schedules-panel", 1, "flex", "rounded-md", "p-2", "font-medium", "transition-all", "duration-150", 3, "click"], [1, "px-1"], [1, "bg-base-content/5", "h-6", "min-w-6", "rounded-full", "p-1", "text-xs", "opacity-60"], ["type", "button", "role", "tab", "id", "schedules-tab-zones", "aria-controls", "schedules-panel", 1, "flex", "rounded-md", "p-2", "font-medium", "transition-all", "duration-150", 3, "click"], [1, "mt-2.5", "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "flex", "items-center", "gap-0.5"], ["icon", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "ml-1.5"], [1, "text-sm", "leading-tight", "font-medium"], [1, "text-base-content/45", "text-[11px]"], ["appearance", "outline", 1, "no-subscript", "min-w-1/2"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "type", "search", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "matSuffix", "", "type", "button", "matRipple", ""], [1, "min-h-0", "flex-1", "p-2"], ["id", "schedules-panel", "role", "tabpanel", 1, "bg-base-100", "border-base-300", "flex", "h-full", "min-h-0", "flex-col", "overflow-hidden", "rounded-lg", "border"], ["role", "alert", 1, "text-base-content/60", "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-3"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-3", "opacity-70"], [1, "text-base-content/40", "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-3"], [3, "rows", "view_tab", "current_minutes", "show_current_time", "playlist_approval_status"], ["icon", "", "matSuffix", "", "type", "button", "matRipple", "", 3, "click"], [1, "text-error", "text-4xl"], [1, "text-sm"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click"], ["diameter", "32"], [1, "text-4xl"]], template: function SchedulesSectionComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("keydown", function SchedulesSectionComponent_Template_div_keydown_10_listener($event) {
          return ctx.onTabKeydown($event);
        });
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
        \u0275\u0275elementStart(18, "button", 11);
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
        \u0275\u0275elementStart(24, "div", 12)(25, "div", 13)(26, "button", 14);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275listener("click", function SchedulesSectionComponent_Template_button_click_26_listener() {
          return ctx.previousDay();
        });
        \u0275\u0275elementStart(29, "icon");
        \u0275\u0275text(30, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 14);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275listener("click", function SchedulesSectionComponent_Template_button_click_31_listener() {
          return ctx.goToToday();
        });
        \u0275\u0275elementStart(34, "icon");
        \u0275\u0275text(35, "today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 14);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275listener("click", function SchedulesSectionComponent_Template_button_click_36_listener() {
          return ctx.nextDay();
        });
        \u0275\u0275elementStart(39, "icon");
        \u0275\u0275text(40, "chevron_right");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 15)(42, "div", 16);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 17);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "mat-form-field", 18)(49, "icon", 19);
        \u0275\u0275text(50, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "input", 20);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SchedulesSectionComponent_Template_input_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search_term, $event) || (ctx.search_term = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(54, SchedulesSectionComponent_Conditional_54_Template, 4, 3, "button", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 22)(56, "div", 23);
        \u0275\u0275conditionalCreate(57, SchedulesSectionComponent_Conditional_57_Template, 9, 6, "div", 24)(58, SchedulesSectionComponent_Conditional_58_Template, 5, 3, "div", 25)(59, SchedulesSectionComponent_Conditional_59_Template, 6, 4, "div", 26)(60, SchedulesSectionComponent_Conditional_60_Template, 1, 5, "schedule-timeline", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(61, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 40, "SIGNAGE_MANAGER.NAV_SCHEDULES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 42, "SIGNAGE_MANAGER.SCHEDULE_TYPES"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-base-100", ctx.view_tab() === "displays")("shadow-sm", ctx.view_tab() === "displays")("text-primary", ctx.view_tab() === "displays")("opacity-50", ctx.view_tab() !== "displays");
        \u0275\u0275attribute("tabindex", ctx.view_tab() === "displays" ? 0 : -1)("aria-selected", ctx.view_tab() === "displays");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 44, "SIGNAGE_MANAGER.NAV_DISPLAYS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.display_total(), " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("bg-base-100", ctx.view_tab() === "zones")("shadow-sm", ctx.view_tab() === "zones")("text-primary", ctx.view_tab() === "zones")("opacity-50", ctx.view_tab() !== "zones");
        \u0275\u0275attribute("tabindex", ctx.view_tab() === "zones" ? 0 : -1)("aria-selected", ctx.view_tab() === "zones");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 46, "SIGNAGE_MANAGER.NAV_ZONES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.zone_total(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(27, 48, "SIGNAGE_MANAGER.PREVIOUS_DAY"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 50, "SIGNAGE_MANAGER.SHOW_PREVIOUS_DAY"));
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(32, 52, "COMMON.TODAY"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(33, 54, "SIGNAGE_MANAGER.SHOW_TODAY"));
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(37, 56, "SIGNAGE_MANAGER.NEXT_DAY"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 58, "SIGNAGE_MANAGER.SHOW_NEXT_DAY"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 60, ctx.selected_date(), "EEEE, d MMMM yyyy"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 63, ctx.selected_date(), "EEE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.search_term);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(52, 66, ctx.search_placeholder()));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(53, 68, ctx.search_placeholder()));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.search_term() ? 54 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-labelledby", "schedules-tab-" + ctx.view_tab());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.inventory_error() ? 57 : !ctx.rows().length && ctx.inventory_loading() ? 58 : !ctx.rows().length ? 59 : 60);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
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
      MatProgressSpinnerModule,
      MatProgressSpinner,
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
                            (keydown)="onTabKeydown($event)"
                        >
                            <button
                                type="button"
                                role="tab"
                                id="schedules-tab-displays"
                                aria-controls="schedules-panel"
                                [attr.tabindex]="
                                    view_tab() === 'displays' ? 0 : -1
                                "
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
                                id="schedules-tab-zones"
                                aria-controls="schedules-panel"
                                [attr.tabindex]="
                                    view_tab() === 'zones' ? 0 : -1
                                "
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
                                [(ngModel)]="search_term"
                                [placeholder]="search_placeholder() | translate"
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
                        id="schedules-panel"
                        role="tabpanel"
                        class="bg-base-100 border-base-300 flex h-full min-h-0 flex-col overflow-hidden rounded-lg border"
                        [attr.aria-labelledby]="'schedules-tab-' + view_tab()"
                    >
                        @if (inventory_error()) {
                            <div
                                class="text-base-content/60 flex flex-1 flex-col items-center justify-center gap-3"
                                role="alert"
                            >
                                <icon class="text-error text-4xl">error</icon>
                                <p class="text-sm">
                                    {{ 'COMMON.LOAD_ERROR' | translate }}
                                </p>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    (click)="reload()"
                                >
                                    {{ 'COMMON.RETRY' | translate }}
                                </button>
                            </div>
                        } @else if (!rows().length && inventory_loading()) {
                            <div
                                class="flex flex-1 flex-col items-center justify-center gap-3 opacity-70"
                            >
                                <mat-spinner diameter="32" />
                                <p class="text-sm">
                                    {{ 'COMMON.LOADING' | translate }}
                                </p>
                            </div>
                        } @else if (!rows().length) {
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
      FormsModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      NavSidebarComponent,
      NavFooterComponent,
      GroupBreadcrumbsComponent,
      ScheduleTimelineComponent,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/schedules/schedules.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=schedules.component.css.map */\n"] }]
  }], () => [], { tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchedulesSectionComponent, { className: "SchedulesSectionComponent", filePath: "apps/signage-manager/src/app/schedules/schedules.component.ts", lineNumber: 323 });
})();
export {
  SchedulesSectionComponent
};
//# debugId=3786f44c-fed6-56d4-b42c-6bf915dd1062
//# sourceMappingURL=schedules.component-QSN7DCOX.js.map
