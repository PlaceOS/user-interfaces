import {
  DAY_COUNT,
  buildScheduleBlocks
} from "./chunk-L5LTTAWY.js";
import {
  PlaylistThumbnailComponent
} from "./chunk-A3SWE7OZ.js";
import {
  GroupBreadcrumbsComponent,
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-GEA2O543.js";
import {
  ActivatedRoute,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  IntersectDirective,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  Router,
  RouterLink,
  SignageService,
  TranslatePipe,
  ViewChildren,
  addDays,
  afterRenderEffect,
  computed,
  effect,
  format,
  inject,
  input,
  isSameDay,
  setClassMetadata,
  settingSignal,
  signal,
  startOfWeek,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-37TZYTLG.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/displays/display-schedule.component.ts
var _c0 = (a0) => ["/playlists", a0];
var _forTrack0 = ($index, $item) => $item.playlist.id + "_" + $item.day_index;
var _forTrack1 = ($index, $item) => $item.playlist.id + "_" + $item.day_index + "_" + $item.start_minutes;
function DisplayScheduleComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "icon", 6);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS_DISPLAY"), " ");
  }
}
function DisplayScheduleComponent_Conditional_20_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function DisplayScheduleComponent_Conditional_20_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DisplayScheduleComponent_Conditional_20_For_3_Conditional_7_Template, 1, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today-column", ctx_r2.isToday(day_r1));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isToday(day_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 11, day_r1, "EEE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.isToday(day_r1))("font-semibold", ctx_r2.isToday(day_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 14, day_r1, "MMM d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional($index_r2 !== 0 ? 7 : -1);
  }
}
function DisplayScheduleComponent_Conditional_20_For_6_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const block_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, block_r4.playlist.id))("matTooltip", ctx_r2.block_tooltip(block_r4));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", block_r4.text_color);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", !block_r4.playlist.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r4.playlist.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "SIGNAGE_MANAGER.ALL_DAY"), " ");
  }
}
function DisplayScheduleComponent_Conditional_20_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, DisplayScheduleComponent_Conditional_20_For_6_Conditional_1_For_2_Template, 8, 12, "a", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_60_r5 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.day_blocks()[\u0275$index_60_r5].all_day);
  }
}
function DisplayScheduleComponent_Conditional_20_For_6_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const block_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, block_r6.playlist.id))("matTooltip", ctx_r2.block_tooltip(block_r6));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", block_r6.text_color);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", !block_r6.playlist.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r6.playlist.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", block_r6.label, " ");
  }
}
function DisplayScheduleComponent_Conditional_20_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, DisplayScheduleComponent_Conditional_20_For_6_Conditional_2_For_2_Template, 7, 10, "a", 25, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_60_r5 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.day_blocks()[\u0275$index_60_r5].timed);
  }
}
function DisplayScheduleComponent_Conditional_20_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "icon", 29);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS_SHORT"), " ");
  }
}
function DisplayScheduleComponent_Conditional_20_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, DisplayScheduleComponent_Conditional_20_For_6_Conditional_1_Template, 3, 0, "div", 17);
    \u0275\u0275conditionalCreate(2, DisplayScheduleComponent_Conditional_20_For_6_Conditional_2_Template, 3, 0, "div", 18);
    \u0275\u0275conditionalCreate(3, DisplayScheduleComponent_Conditional_20_For_6_Conditional_3_Template, 6, 3, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const \u0275$index_60_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today-column", ctx_r2.isToday(day_r7));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.day_blocks()[\u0275$index_60_r5].all_day.length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.day_blocks()[\u0275$index_60_r5].timed.length ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.day_blocks()[\u0275$index_60_r5].all_day.length && !ctx_r2.day_blocks()[\u0275$index_60_r5].timed.length ? 3 : -1);
  }
}
function DisplayScheduleComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8);
    \u0275\u0275repeaterCreate(2, DisplayScheduleComponent_Conditional_20_For_3_Template, 8, 17, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275repeaterCreate(5, DisplayScheduleComponent_Conditional_20_For_6_Template, 4, 5, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.days().length * 12 + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.days());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.days().length * 12 + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.days());
  }
}
var DisplayScheduleComponent = class _DisplayScheduleComponent {
  constructor() {
    this._service = inject(SignageService);
    this.selected_display = this._service.selected_display;
    this._playlists = this._service.playlists;
    this.week_offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "week_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.week_start = computed(
      () => {
        const base = startOfWeek(/* @__PURE__ */ new Date(), { weekStartsOn: 1 });
        return addDays(base, this.week_offset() * 7);
      },
      ...ngDevMode ? [{ debugName: "week_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.days = computed(
      () => Array.from({ length: DAY_COUNT }, (_, i) => addDays(this.week_start(), i)),
      ...ngDevMode ? [{ debugName: "days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_playlists = computed(
      () => {
        const display = this.selected_display();
        if (!display)
          return [];
        return this._playlists().filter((p) => display.playlists?.includes(p.id));
      },
      ...ngDevMode ? [{ debugName: "display_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_assignments = computed(
      () => this.display_playlists().map((playlist) => ({ playlist })),
      ...ngDevMode ? [{ debugName: "display_assignments" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schedule_entries = computed(
      () => {
        const days = this.days();
        return buildScheduleBlocks(this.display_assignments(), days);
      },
      ...ngDevMode ? [{ debugName: "schedule_entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.day_blocks = computed(
      () => {
        const result = Array.from({ length: DAY_COUNT }, () => ({
          all_day: [],
          timed: []
        }));
        for (const block of this.schedule_entries()) {
          if (block.all_day) {
            result[block.day_index].all_day.push(block);
          } else {
            result[block.day_index].timed.push(block);
          }
        }
        for (const day_blocks of result) {
          day_blocks.all_day.sort((left, right) => left.playlist.name.localeCompare(right.playlist.name));
          day_blocks.timed.sort((left, right) => left.start_minutes - right.start_minutes);
        }
        return result;
      },
      ...ngDevMode ? [{ debugName: "day_blocks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekLabel = computed(
      () => {
        const start = this.week_start();
        const end = addDays(start, 6);
        if (start.getFullYear() !== end.getFullYear()) {
          return `${format(start, "MMM d, yyyy")} \u2013 ${format(end, "MMM d, yyyy")}`;
        }
        if (start.getMonth() !== end.getMonth()) {
          return `${format(start, "MMM d")} \u2013 ${format(end, "MMM d, yyyy")}`;
        }
        return `${format(start, "MMM d")} \u2013 ${format(end, "d, yyyy")}`;
      },
      ...ngDevMode ? [{ debugName: "weekLabel" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  isToday(day) {
    return isSameDay(day, /* @__PURE__ */ new Date());
  }
  block_tooltip(block) {
    return `${block.playlist.name} \xB7 ${block.label}`;
  }
  previousWeek() {
    this.week_offset.update((v) => v - 1);
  }
  nextWeek() {
    this.week_offset.update((v) => v + 1);
  }
  goToToday() {
    this.week_offset.set(0);
  }
  static {
    this.\u0275fac = function DisplayScheduleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayScheduleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayScheduleComponent, selectors: [["display-schedule"]], decls: 21, vars: 20, consts: [[1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "border-base-200", "flex", "items-center", "justify-center", "gap-0.5", "border-b", "px-3", "py-2"], ["icon", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "ml-1.5", "text-sm", "font-medium"], [1, "text-base-content/40", "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-3"], ["timeline", "", 1, "z-0", "grid", "min-h-0", "flex-1", "overflow-auto"], [1, "text-4xl"], [1, "text-sm"], ["day-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-w-[calc(100%-5rem)]", "items-center", "border-b"], [1, "relative", "flex", "h-full", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "py-2", "leading-tight", 3, "today-column"], ["date-blocks", "", 1, "relative", "flex", "min-w-[calc(100%-5rem)]"], [1, "border-base-content/[0.06]", "min-w-48", "flex-1", "border-r", "p-2", "last:border-none", 3, "today-column"], [1, "relative", "flex", "h-full", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "py-2", "leading-tight"], [1, "text-base-content/45", "text-[10px]", "font-medium", "tracking-wide", "uppercase"], [1, "truncate", "text-sm"], [1, "bg-base-content/10", "absolute", "top-0", "-left-px", "h-2", "w-px"], [1, "border-base-content/[0.06]", "min-w-48", "flex-1", "border-r", "p-2", "last:border-none"], [1, "mb-2", "space-y-1"], [1, "space-y-0.5"], [1, "border-base-content/10", "text-base-content/25", "flex", "min-h-20", "flex-col", "items-center", "justify-center", "gap-1", "rounded-md", "border", "border-dashed"], [1, "border-base-content/10", "hover:border-info/40", "flex", "w-full", "items-center", "gap-2", "rounded-md", "border", "px-2", "py-1.5", "text-left", "no-underline", "transition-colors", 3, "routerLink", "matTooltip"], [1, "h-1.5", "w-1.5", "shrink-0", "rounded-full"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-[13px]", "leading-tight", "font-medium"], [1, "text-base-content/45", "text-[11px]"], [1, "hover:bg-base-content/[0.04]", "flex", "w-full", "gap-2", "rounded-md", "px-2", "py-1.5", "text-left", "no-underline", "transition-colors", 3, "routerLink", "matTooltip"], [1, "mt-1", "h-1.5", "w-1.5", "shrink-0", "rounded-full"], [1, "truncate", "text-[13px]", "leading-tight"], [1, "text-base-content/45", "text-[11px]", "tabular-nums"], [1, "text-base"], [1, "text-[11px]"]], template: function DisplayScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275listener("click", function DisplayScheduleComponent_Template_button_click_2_listener() {
          return ctx.previousWeek();
        });
        \u0275\u0275elementStart(5, "icon");
        \u0275\u0275text(6, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("click", function DisplayScheduleComponent_Template_button_click_7_listener() {
          return ctx.goToToday();
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "span", 3);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 2);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275listener("click", function DisplayScheduleComponent_Template_button_click_14_listener() {
          return ctx.nextWeek();
        });
        \u0275\u0275elementStart(17, "icon");
        \u0275\u0275text(18, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(19, DisplayScheduleComponent_Conditional_19_Template, 6, 3, "div", 4)(20, DisplayScheduleComponent_Conditional_20_Template, 7, 4, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 8, "SIGNAGE_MANAGER.PREV_WEEK"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 10, "SIGNAGE_MANAGER.PREV_WEEK_ARIA"));
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 12, "COMMON.WEEK_THIS"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 14, "SIGNAGE_MANAGER.THIS_WEEK_ARIA"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.weekLabel(), " ");
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 16, "SIGNAGE_MANAGER.NEXT_WEEK"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 18, "SIGNAGE_MANAGER.NEXT_WEEK_ARIA"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.display_playlists().length === 0 ? 19 : 20);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 5rem;\n  grid-template-rows: 3.5rem;\n}\n.today-column[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--info) 4%, transparent);\n}\n/*# sourceMappingURL=display-schedule.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayScheduleComponent, [{
    type: Component,
    args: [{ selector: "display-schedule", template: `
        <div class="flex h-full flex-col overflow-hidden">
            <div
                class="border-base-200 flex items-center justify-center gap-0.5 border-b px-3 py-2"
            >
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'SIGNAGE_MANAGER.PREV_WEEK' | translate"
                    (click)="previousWeek()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PREV_WEEK_ARIA' | translate
                    "
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'COMMON.WEEK_THIS' | translate"
                    (click)="goToToday()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.THIS_WEEK_ARIA' | translate
                    "
                >
                    <icon>today</icon>
                </button>
                <span class="ml-1.5 text-sm font-medium">
                    {{ weekLabel() }}
                </span>
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'SIGNAGE_MANAGER.NEXT_WEEK' | translate"
                    (click)="nextWeek()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.NEXT_WEEK_ARIA' | translate
                    "
                >
                    <icon>chevron_right</icon>
                </button>
            </div>

            @if (display_playlists().length === 0) {
                <div
                    class="text-base-content/40 flex flex-1 flex-col items-center justify-center gap-3"
                >
                    <icon class="text-4xl">event_busy</icon>
                    <p class="text-sm">
                        {{ 'SIGNAGE_MANAGER.NO_PLAYLISTS_DISPLAY' | translate }}
                    </p>
                </div>
            } @else {
                <div timeline class="z-0 grid min-h-0 flex-1 overflow-auto">
                    <div
                        day-headers
                        class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-[calc(100%-5rem)] items-center border-b"
                        [style.width]="days().length * 12 + 'rem'"
                    >
                        @for (day of days(); track day) {
                            <div
                                class="relative flex h-full min-w-48 flex-1 flex-col items-center justify-center py-2 leading-tight"
                                [class.today-column]="isToday(day)"
                            >
                                <div
                                    class="text-base-content/45 text-[10px] font-medium tracking-wide uppercase"
                                    [class.text-info]="isToday(day)"
                                >
                                    {{ day | date: 'EEE' }}
                                </div>
                                <div
                                    class="truncate text-sm"
                                    [class.text-info]="isToday(day)"
                                    [class.font-semibold]="isToday(day)"
                                >
                                    {{ day | date: 'MMM d' }}
                                </div>
                                @if ($index !== 0) {
                                    <div
                                        class="bg-base-content/10 absolute top-0 -left-px h-2 w-px"
                                    ></div>
                                }
                            </div>
                        }
                    </div>
                    <div
                        date-blocks
                        class="relative flex min-w-[calc(100%-5rem)]"
                        [style.width]="days().length * 12 + 'rem'"
                    >
                        @for (
                            day of days();
                            track day;
                            let day_index = $index
                        ) {
                            <div
                                class="border-base-content/[0.06] min-w-48 flex-1 border-r p-2 last:border-none"
                                [class.today-column]="isToday(day)"
                            >
                                @if (day_blocks()[day_index].all_day.length) {
                                    <div class="mb-2 space-y-1">
                                        @for (
                                            block of day_blocks()[day_index]
                                                .all_day;
                                            track block.playlist.id +
                                                '_' +
                                                block.day_index
                                        ) {
                                            <a
                                                [routerLink]="[
                                                    '/playlists',
                                                    block.playlist.id,
                                                ]"
                                                class="border-base-content/10 hover:border-info/40 flex w-full items-center gap-2 rounded-md border px-2 py-1.5 text-left no-underline transition-colors"
                                                [matTooltip]="
                                                    block_tooltip(block)
                                                "
                                            >
                                                <div
                                                    class="h-1.5 w-1.5 shrink-0 rounded-full"
                                                    [style.background-color]="
                                                        block.text_color
                                                    "
                                                ></div>
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-[13px] leading-tight font-medium"
                                                        [class.line-through]="
                                                            !block.playlist
                                                                .enabled
                                                        "
                                                    >
                                                        {{
                                                            block.playlist.name
                                                        }}
                                                    </div>
                                                    <div
                                                        class="text-base-content/45 text-[11px]"
                                                    >
                                                        {{
                                                            'SIGNAGE_MANAGER.ALL_DAY'
                                                                | translate
                                                        }}
                                                    </div>
                                                </div>
                                            </a>
                                        }
                                    </div>
                                }
                                @if (day_blocks()[day_index].timed.length) {
                                    <div class="space-y-0.5">
                                        @for (
                                            block of day_blocks()[day_index]
                                                .timed;
                                            track block.playlist.id +
                                                '_' +
                                                block.day_index +
                                                '_' +
                                                block.start_minutes
                                        ) {
                                            <a
                                                [routerLink]="[
                                                    '/playlists',
                                                    block.playlist.id,
                                                ]"
                                                class="hover:bg-base-content/[0.04] flex w-full gap-2 rounded-md px-2 py-1.5 text-left no-underline transition-colors"
                                                [matTooltip]="
                                                    block_tooltip(block)
                                                "
                                            >
                                                <div
                                                    class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                                                    [style.background-color]="
                                                        block.text_color
                                                    "
                                                ></div>
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-[13px] leading-tight"
                                                        [class.line-through]="
                                                            !block.playlist
                                                                .enabled
                                                        "
                                                    >
                                                        {{
                                                            block.playlist.name
                                                        }}
                                                    </div>
                                                    <div
                                                        class="text-base-content/45 text-[11px] tabular-nums"
                                                    >
                                                        {{ block.label }}
                                                    </div>
                                                </div>
                                            </a>
                                        }
                                    </div>
                                }
                                @if (
                                    !day_blocks()[day_index].all_day.length &&
                                    !day_blocks()[day_index].timed.length
                                ) {
                                    <div
                                        class="border-base-content/10 text-base-content/25 flex min-h-20 flex-col items-center justify-center gap-1 rounded-md border border-dashed"
                                    >
                                        <icon class="text-base"
                                            >event_busy</icon
                                        >
                                        <span class="text-[11px]">
                                            {{
                                                'SIGNAGE_MANAGER.NO_PLAYLISTS_SHORT'
                                                    | translate
                                            }}
                                        </span>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `, imports: [
      DatePipe,
      MatRippleModule,
      MatTooltipModule,
      RouterLink,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;6515e1f60dc646bcef03aea7e4c5d4f9043f829bbffa433d83cbb01f4c0bbb81;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/displays/display-schedule.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[timeline] {\n  grid-template-columns: 5rem;\n  grid-template-rows: 3.5rem;\n}\n.today-column {\n  background-color: color-mix(in srgb, var(--info) 4%, transparent);\n}\n/*# sourceMappingURL=display-schedule.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayScheduleComponent, { className: "DisplayScheduleComponent", filePath: "apps/signage-manager/src/app/displays/display-schedule.component.ts", lineNumber: 274 });
})();

// apps/signage-manager/src/app/displays/display-content.component.ts
var _c02 = (a0) => ({ count: a0 });
var _c1 = (a0) => ["/playlists", a0];
var _c2 = (a0) => ({ name: a0 });
var _c3 = (a0) => ["/zones", a0];
var _forTrack02 = ($index, $item) => $item.id;
function DisplayContentComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "display-schedule");
    \u0275\u0275elementEnd();
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ADD_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.ADD_PLAYLIST_TO_DISPLAY_ARIA"));
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_EXPIRED"), " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.PENDING"), " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_AWAITING_APPROVAL"), " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r3.description, " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Conditional_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const playlist_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removePlaylist($event, playlist_r3.id));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const playlist_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.REMOVE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 4, "SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_DISPLAY", \u0275\u0275pureFunction1(7, _c2, playlist_r3.name)));
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "playlist-thumbnail", 15);
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275conditionalCreate(8, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Conditional_8_Template, 3, 3, "span", 19);
    \u0275\u0275conditionalCreate(9, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Case_9_Template, 3, 3, "span", 20)(10, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Case_10_Template, 3, 3, "span", 21)(11, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Case_11_Template, 3, 3, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Conditional_12_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Conditional_13_Template, 5, 9, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const playlist_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, playlist_r3.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 8, "SIGNAGE_MANAGER.OPEN_PLAYLIST", \u0275\u0275pureFunction1(13, _c2, playlist_r3.name)));
    \u0275\u0275advance(2);
    \u0275\u0275property("playlist", playlist_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", playlist_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!playlist_r3.enabled ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = ctx_r1.getStatus(playlist_r3)) === "expired" ? 9 : tmp_18_0 === "pending" ? 10 : tmp_18_0 === "awaiting_approval" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(playlist_r3.description ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 13 : -1);
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_For_1_Template, 14, 15, "div", 13, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.display_playlists());
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 26);
    \u0275\u0275text(2, "playlist_remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS_DISPLAY"), " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6)(2, "h5", 7)(3, "icon", 8);
    \u0275\u0275text(4, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_7_Template, 5, 6, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10);
    \u0275\u0275conditionalCreate(9, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_9_Template, 2, 0)(10, DisplayContentComponent_Conditional_0_Conditional_3_Conditional_10_Template, 6, 3, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(6, 3, "SIGNAGE_MANAGER.PLAYLISTS_COUNT", \u0275\u0275pureFunction1(7, _c02, ctx_r1.display_playlists().length), ctx_r1.display_playlists().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.display_playlists().length > 0 ? 9 : 10);
  }
}
function DisplayContentComponent_Conditional_0_Conditional_4_Conditional_8_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", zone_r5.description, " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_4_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 29);
    \u0275\u0275text(3, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DisplayContentComponent_Conditional_0_Conditional_4_Conditional_8_For_1_Conditional_7_Template, 2, 1, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c3, zone_r5.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 4, "SIGNAGE_MANAGER.OPEN_ZONE", \u0275\u0275pureFunction1(9, _c2, zone_r5.display_name || zone_r5.name)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", zone_r5.display_name || zone_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(zone_r5.description ? 7 : -1);
  }
}
function DisplayContentComponent_Conditional_0_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DisplayContentComponent_Conditional_0_Conditional_4_Conditional_8_For_1_Template, 8, 11, "a", 28, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.display_zones());
  }
}
function DisplayContentComponent_Conditional_0_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 26);
    \u0275\u0275text(2, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.DISPLAY_NO_ZONES"), " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h5", 7)(3, "icon", 8);
    \u0275\u0275text(4, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275conditionalCreate(8, DisplayContentComponent_Conditional_0_Conditional_4_Conditional_8_Template, 2, 0)(9, DisplayContentComponent_Conditional_0_Conditional_4_Conditional_9_Template, 6, 3, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(6, 2, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(6, _c02, ctx_r1.display_zones().length), ctx_r1.display_zones().length), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.display_zones().length > 0 ? 8 : 9);
  }
}
function DisplayContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, DisplayContentComponent_Conditional_0_Conditional_2_Template, 2, 0, "div", 3);
    \u0275\u0275conditionalCreate(3, DisplayContentComponent_Conditional_0_Conditional_3_Template, 11, 9, "div", 4);
    \u0275\u0275conditionalCreate(4, DisplayContentComponent_Conditional_0_Conditional_4_Template, 10, 8, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeTab() === "schedule" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "playlists" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "zones" ? 4 : -1);
  }
}
function DisplayContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 31);
    \u0275\u0275text(2, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.DISPLAY_SELECT_DETAILS"), " ");
  }
}
var DisplayContentComponent = class _DisplayContentComponent {
  constructor() {
    this._service = inject(SignageService);
    this.activeTab = input(
      "schedule",
      ...ngDevMode ? [{ debugName: "activeTab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_display = this._service.selected_display;
    this.playlist_approval_status = this._service.playlist_approval_status;
    this.can_update = this._service.can_update;
    this._playlists = this._service.playlists;
    this._zones = this._service.zones;
    this.display_playlists = computed(
      () => {
        const display = this.selected_display();
        if (!display)
          return [];
        return this._playlists().filter((p) => display.playlists?.includes(p.id));
      },
      ...ngDevMode ? [{ debugName: "display_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_zones = computed(
      () => {
        const display = this.selected_display();
        if (!display)
          return [];
        return this._zones().filter((z) => display.zones?.includes(z.id));
      },
      ...ngDevMode ? [{ debugName: "display_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  addPlaylist() {
    const display = this.selected_display();
    if (display)
      this._service.addPlaylistToDisplay(display);
  }
  removePlaylist(event, playlist_id) {
    event.preventDefault();
    event.stopPropagation();
    const display = this.selected_display();
    if (display)
      this._service.removePlaylistFromDisplay(display, playlist_id);
  }
  getStatus(playlist) {
    const now_s = Math.floor(Date.now() / 1e3);
    if (playlist.valid_until && playlist.valid_until < now_s)
      return "expired";
    if (playlist.valid_from && playlist.valid_from > now_s)
      return "pending";
    const approvals = this.playlist_approval_status();
    if (playlist.id in approvals && !approvals[playlist.id])
      return "awaiting_approval";
    return null;
  }
  static {
    this.\u0275fac = function DisplayContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayContentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayContentComponent, selectors: [["display-content"]], inputs: { activeTab: [1, "activeTab"] }, decls: 2, vars: 1, consts: [[1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-3", "p-3"], ["id", "display-schedule-panel", "role", "tabpanel", "aria-labelledby", "display-schedule-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-hidden", "rounded-lg", "border"], ["id", "display-playlists-panel", "role", "tabpanel", "aria-labelledby", "display-playlists-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], ["id", "display-zones-panel", "role", "tabpanel", "aria-labelledby", "display-zones-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], [1, "gap-2", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-0.5", "pl-1"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-w-0", "flex-1", "items-center", "gap-3", "rounded-lg", "p-1", "no-underline", "transition-colors", 3, "routerLink"], [1, "border-base-200", "relative", "h-12", "w-12", "shrink-0", "overflow-hidden", "rounded-md", "border", 3, "playlist"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "mt-1", "flex", "flex-wrap", "gap-1"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-error", "text-error-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-info", "text-info-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-secondary", "text-secondary-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "text-base-content/70", "mt-0.5", "truncate", "text-xs"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-4xl"], [1, "text-sm"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:bg-base-200", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-3", "no-underline", "transition-colors", 3, "routerLink"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "text-base-content/70", "truncate", "text-xs"], [1, "text-6xl"]], template: function DisplayContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DisplayContentComponent_Conditional_0_Template, 5, 3, "div", 0)(1, DisplayContentComponent_Conditional_1_Template, 6, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.selected_display() ? 0 : 1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      IconComponent,
      DisplayScheduleComponent,
      PlaylistThumbnailComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=display-content.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayContentComponent, [{
    type: Component,
    args: [{ selector: "display-content", template: `
        @if (selected_display()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3">
                    @if (activeTab() === 'schedule') {
                        <!-- Schedule panel -->
                        <div
                            id="display-schedule-panel"
                            role="tabpanel"
                            aria-labelledby="display-schedule-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-hidden rounded-lg border"
                        >
                            <display-schedule />
                        </div>
                    }

                    @if (activeTab() === 'playlists') {
                        <!-- Playlists panel -->
                        <div
                            id="display-playlists-panel"
                            role="tabpanel"
                            aria-labelledby="display-playlists-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">playlist_play</icon>
                                    {{
                                        'SIGNAGE_MANAGER.PLAYLISTS_COUNT'
                                            | translate
                                                : {
                                                      count: display_playlists()
                                                          .length,
                                                  }
                                                : display_playlists().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_PLAYLIST_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addPlaylist()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_PLAYLIST_TO_DISPLAY_ARIA'
                                                | translate
                                        "
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="gap-2 p-2">
                                @if (display_playlists().length > 0) {
                                    @for (
                                        playlist of display_playlists();
                                        track playlist.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/playlists',
                                                    playlist.id,
                                                ]"
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                                        | translate
                                                            : {
                                                                  name: playlist.name,
                                                              }
                                                "
                                            >
                                                <playlist-thumbnail
                                                    [playlist]="playlist"
                                                    class="border-base-200 relative h-12 w-12 shrink-0 overflow-hidden rounded-md border"
                                                />
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm font-medium"
                                                    >
                                                        {{ playlist.name }}
                                                    </div>
                                                    <div
                                                        class="mt-1 flex flex-wrap gap-1"
                                                    >
                                                        @if (
                                                            !playlist.enabled
                                                        ) {
                                                            <span
                                                                class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                            >
                                                                {{
                                                                    'COMMON.DISABLED'
                                                                        | translate
                                                                }}
                                                            </span>
                                                        }
                                                        @switch (
                                                            getStatus(playlist)
                                                        ) {
                                                            @case ('expired') {
                                                                <span
                                                                    class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                                >
                                                                    {{
                                                                        'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                                            | translate
                                                                    }}
                                                                </span>
                                                            }
                                                            @case ('pending') {
                                                                <span
                                                                    class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                                >
                                                                    {{
                                                                        'COMMON.PENDING'
                                                                            | translate
                                                                    }}
                                                                </span>
                                                            }
                                                            @case ('awaiting_approval') {
                                                                <span
                                                                    class="bg-secondary text-secondary-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                                >
                                                                    {{
                                                                        'SIGNAGE_MANAGER.STATUS_AWAITING_APPROVAL'
                                                                            | translate
                                                                    }}
                                                                </span>
                                                            }
                                                        }
                                                    </div>
                                                    @if (playlist.description) {
                                                        <div
                                                            class="text-base-content/70 mt-0.5 truncate text-xs"
                                                        >
                                                            {{
                                                                playlist.description
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (can_update()) {
                                                <button
                                                    icon
                                                    default
                                                    error
                                                    type="button"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_PLAYLIST_TOOLTIP'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removePlaylist(
                                                            $event,
                                                            playlist.id
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_DISPLAY'
                                                            | translate
                                                                : {
                                                                      name: playlist.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                    >
                                        <icon class="text-4xl"
                                            >playlist_remove</icon
                                        >
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.NO_PLAYLISTS_DISPLAY'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    @if (activeTab() === 'zones') {
                        <!-- Zones panel -->
                        <div
                            id="display-zones-panel"
                            role="tabpanel"
                            aria-labelledby="display-zones-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">layers</icon>
                                    {{
                                        'SIGNAGE_MANAGER.ZONES_COUNT'
                                            | translate
                                                : {
                                                      count: display_zones()
                                                          .length,
                                                  }
                                                : display_zones().length
                                    }}
                                </h5>
                            </div>
                            <div class="gap-2 p-2">
                                @if (display_zones().length > 0) {
                                    @for (
                                        zone of display_zones();
                                        track zone.id
                                    ) {
                                        <a
                                            matRipple
                                            class="border-base-300 bg-base-100 hover:bg-base-200 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3 no-underline transition-colors"
                                            [routerLink]="['/zones', zone.id]"
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.OPEN_ZONE'
                                                    | translate
                                                        : {
                                                              name:
                                                                  zone.display_name ||
                                                                  zone.name,
                                                          }
                                            "
                                        >
                                            <icon
                                                class="shrink-0 text-xl opacity-60"
                                                >layers</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div
                                                    class="truncate text-sm font-medium"
                                                >
                                                    {{
                                                        zone.display_name ||
                                                            zone.name
                                                    }}
                                                </div>
                                                @if (zone.description) {
                                                    <div
                                                        class="text-base-content/70 truncate text-xs"
                                                    >
                                                        {{ zone.description }}
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                    >
                                        <icon class="text-4xl"
                                            >layers_clear</icon
                                        >
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.DISPLAY_NO_ZONES'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">tv</icon>
                <p>
                    {{ 'SIGNAGE_MANAGER.DISPLAY_SELECT_DETAILS' | translate }}
                </p>
            </div>
        }
    `, imports: [
      MatRippleModule,
      MatTooltipModule,
      RouterLink,
      IconComponent,
      DisplayScheduleComponent,
      TranslatePipe,
      PlaylistThumbnailComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/displays/display-content.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=display-content.component.css.map */\n"] }]
  }], null, { activeTab: [{ type: Input, args: [{ isSignal: true, alias: "activeTab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayContentComponent, { className: "DisplayContentComponent", filePath: "apps/signage-manager/src/app/displays/display-content.component.ts", lineNumber: 339 });
})();

// apps/signage-manager/src/app/displays/display-header.component.ts
var _c03 = (a0) => ({ count: a0 });
var DisplayHeaderComponent = class _DisplayHeaderComponent {
  constructor() {
    this._service = inject(SignageService);
    this.total_count = computed(
      () => this._service.filtered_displays().length,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function DisplayHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayHeaderComponent, selectors: [["display-header"]], decls: 11, vars: 10, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"]], template: function DisplayHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "group-breadcrumbs");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "SIGNAGE_MANAGER.DISPLAYS_TITLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 4, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(8, _c03, ctx.total_count()), ctx.total_count()), " ");
      }
    }, dependencies: [GroupBreadcrumbsComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayHeaderComponent, [{
    type: Component,
    args: [{
      selector: "display-header",
      template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.DISPLAYS_TITLE' | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    <div class="text-sm opacity-60">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate
                                    : { count: total_count() }
                                    : total_count()
                        }}
                    </div>
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
        </div>
    `,
      imports: [TranslatePipe, GroupBreadcrumbsComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayHeaderComponent, { className: "DisplayHeaderComponent", filePath: "apps/signage-manager/src/app/displays/display-header.component.ts", lineNumber: 33 });
})();

// apps/signage-manager/src/app/displays/display-list.component.ts
var _c04 = ["display_item"];
var _c12 = (a0) => ["/displays", a0];
var _c22 = (a0) => ({ name: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function DisplayListComponent_Conditional_6_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", ctx_r1.selected()?.id !== display_r1.id)("opacity-90", ctx_r1.selected()?.id === display_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r1.description, " ");
  }
}
function DisplayListComponent_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9, 0);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 10);
    \u0275\u0275text(4, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, DisplayListComponent_Conditional_6_For_1_Conditional_8_Template, 2, 5, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const display_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.selected()?.id === display_r1.id)("text-primary-content", ctx_r1.selected()?.id === display_r1.id)("hover:bg-base-200", ctx_r1.selected()?.id !== display_r1.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c12, display_r1.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 10, "SIGNAGE_MANAGER.OPEN_DISPLAY", \u0275\u0275pureFunction1(15, _c22, display_r1.display_name || display_r1.name)));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", display_r1.display_name || display_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(display_r1.description ? 8 : -1);
  }
}
function DisplayListComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("intersect", function DisplayListComponent_Conditional_6_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function DisplayListComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function DisplayListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DisplayListComponent_Conditional_6_For_1_Template, 9, 17, "a", 6, _forTrack03);
    \u0275\u0275conditionalCreate(2, DisplayListComponent_Conditional_6_Conditional_2_Template, 1, 0, "div", 7)(3, DisplayListComponent_Conditional_6_Conditional_3_Template, 3, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.displays());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_more() ? 2 : 3);
  }
}
function DisplayListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 16);
    \u0275\u0275text(2, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_DISPLAYS"));
  }
}
var DisplayListComponent = class _DisplayListComponent {
  constructor() {
    this._service = inject(SignageService);
    this._display_items = viewChildren(
      "display_item",
      ...ngDevMode ? [{ debugName: "_display_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._service.display_search_term;
    this.displays = this._service.filtered_displays;
    this.selected = this._service.selected_display;
    this.has_more = this._service.displays_has_more;
    afterRenderEffect({
      earlyRead: () => {
        const selected_id = this.selected()?.id;
        if (!selected_id)
          return;
        const display_index = this.displays().findIndex(({ id }) => id === selected_id);
        return this._display_items()[display_index]?.nativeElement;
      },
      write: (selected_item) => {
        selected_item()?.scrollIntoView?.({
          behavior: "instant",
          block: "nearest",
          inline: "nearest"
        });
      }
    });
  }
  loadMore() {
    this._service.loadMoreDisplays();
  }
  static {
    this.\u0275fac = function DisplayListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayListComponent, selectors: [["display-list"]], viewQuery: function DisplayListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._display_items, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 8, vars: 8, consts: [["display_item", ""], [1, "bg-base-100", "border-base-300", "h-full", "min-w-64", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-4", "py-3", "text-left", "no-underline", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200", "routerLink"], ["intersect", "", 1, "h-px", "w-full"], [1, "text-base-content/50", "p-3", "text-center", "text-xs"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-4", "py-3", "text-left", "no-underline", "transition-colors", 3, "routerLink"], [1, "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], [1, "mt-0.5", "truncate", "text-xs"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [1, "text-6xl"]], template: function DisplayListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "input", 4);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275listener("ngModelChange", function DisplayListComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, DisplayListComponent_Conditional_6_Template, 4, 1)(7, DisplayListComponent_Conditional_7_Template, 6, 3, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 4, "SIGNAGE_MANAGER.SEARCH_DISPLAYS"))("ngModel", ctx.search());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.SEARCH_DISPLAYS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.displays().length > 0 ? 6 : 7);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      IconComponent,
      IntersectDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=display-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayListComponent, [{
    type: Component,
    args: [{ selector: "display-list", template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div class="border-base-300 border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                        "
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                        "
                    />
                </mat-form-field>
            </div>
            @if (displays().length > 0) {
                @for (display of displays(); track display.id) {
                    <a
                        #display_item
                        matRipple
                        class="border-base-300 flex w-full cursor-pointer items-center gap-3 border-b px-4 py-3 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === display.id"
                        [class.text-primary-content]="
                            selected()?.id === display.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== display.id
                        "
                        [routerLink]="['/displays', display.id]"
                        queryParamsHandling="merge"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.OPEN_DISPLAY'
                                | translate
                                    : {
                                          name:
                                              display.display_name ||
                                              display.name,
                                      }
                        "
                    >
                        <icon class="shrink-0 text-2xl">tv</icon>
                        <div class="min-w-0 flex-1">
                            <div class="truncate font-medium">
                                {{ display.display_name || display.name }}
                            </div>
                            @if (display.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== display.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === display.id
                                    "
                                >
                                    {{ display.description }}
                                </div>
                            }
                        </div>
                    </a>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                } @else {
                    <div class="text-base-content/50 p-3 text-center text-xs">
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">tv</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_DISPLAYS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      RouterLink,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      TranslatePipe,
      IntersectDirective
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/displays/display-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=display-list.component.css.map */\n"] }]
  }], () => [], { _display_items: [{ type: ViewChildren, args: ["display_item", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayListComponent, { className: "DisplayListComponent", filePath: "apps/signage-manager/src/app/displays/display-list.component.ts", lineNumber: 128 });
})();

// apps/signage-manager/src/app/displays/displays.component.ts
var _c05 = (a0) => ({ count: a0 });
function DisplaysSectionComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_display().description, " ");
  }
}
function DisplaysSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DisplaysSectionComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deselectDisplay());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "icon", 10);
    \u0275\u0275text(6, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "h4", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, DisplaysSectionComponent_Conditional_7_Conditional_10_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 14);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "open_in_new");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "button", 16);
    \u0275\u0275listener("click", function DisplaysSectionComponent_Conditional_7_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("schedule"));
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 17);
    \u0275\u0275listener("click", function DisplaysSectionComponent_Conditional_7_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("playlists"));
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 18);
    \u0275\u0275listener("click", function DisplaysSectionComponent_Conditional_7_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("zones"));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 37, "SIGNAGE_MANAGER.BACK_TO_DISPLAYS"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_display().display_name || ctx_r1.selected_display().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selected_display().description ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 39, "SIGNAGE_MANAGER.OPEN_PANEL"))("href", ctx_r1.panel_link(), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 41, "SIGNAGE_MANAGER.OPEN_PANEL_NEW_TAB"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 43, "SIGNAGE_MANAGER.DISPLAY_DETAILS_TABS"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "schedule")("border-b-2", ctx_r1.view_tab() === "schedule")("text-primary", ctx_r1.view_tab() === "schedule")("opacity-60", ctx_r1.view_tab() !== "schedule");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "schedule");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 45, "SIGNAGE_MANAGER.SCHEDULE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "playlists")("border-b-2", ctx_r1.view_tab() === "playlists")("text-primary", ctx_r1.view_tab() === "playlists")("opacity-60", ctx_r1.view_tab() !== "playlists");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "playlists");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(23, 47, "SIGNAGE_MANAGER.PLAYLISTS_COUNT", \u0275\u0275pureFunction1(55, _c05, ctx_r1.playlist_count()), ctx_r1.playlist_count()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "zones")("border-b-2", ctx_r1.view_tab() === "zones")("text-primary", ctx_r1.view_tab() === "zones")("opacity-60", ctx_r1.view_tab() !== "zones");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "zones");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(26, 51, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(57, _c05, ctx_r1.zone_count()), ctx_r1.zone_count()), " ");
  }
}
var TAB_QUERY_PARAM = "tab";
function parseDisplayTab(value) {
  if (value === "playlists" || value === "zones") {
    return value;
  }
  return "schedule";
}
var DisplaysSectionComponent = class _DisplaysSectionComponent {
  constructor() {
    this._service = inject(SignageService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.id = input(
      "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tab = input(
      null,
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.signage_path = settingSignal("signage_path");
    this.view_tab = signal(
      "schedule",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_display = this._service.selected_display;
    this._displays = this._service.displays;
    this._playlists = this._service.playlists;
    this._zones = this._service.zones;
    this.playlist_count = computed(
      () => {
        const display = this.selected_display();
        if (!display)
          return 0;
        return this._playlists().filter((p) => display.playlists?.includes(p.id)).length;
      },
      ...ngDevMode ? [{ debugName: "playlist_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_count = computed(
      () => {
        const display = this.selected_display();
        if (!display)
          return 0;
        return this._zones().filter((z) => display.zones?.includes(z.id)).length;
      },
      ...ngDevMode ? [{ debugName: "zone_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panel_link = computed(
      () => {
        const display = this.selected_display();
        if (!display?.id)
          return "";
        const signage_path = this.signage_path() || "/signage";
        return `${signage_path.replace(/\/$/, "")}/#/signage/${encodeURIComponent(display.id)}?debug=true`;
      },
      ...ngDevMode ? [{ debugName: "panel_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._route_resolved = false;
    effect(() => {
      const route_tab = parseDisplayTab(this.tab());
      if (route_tab !== this.view_tab()) {
        this.view_tab.set(route_tab);
      }
    });
    effect(() => {
      const id = this.id();
      const list = this._displays();
      if (!list.length)
        return;
      if (id) {
        const match = list.find((d) => d.id === id);
        if (match && this._service.selected_display()?.id !== match.id) {
          this._service.selected_display.set(match);
        }
        this._route_resolved = true;
      } else if (this._route_resolved) {
        this._service.selected_display.set(null);
      }
    });
  }
  deselectDisplay() {
    this._service.selected_display.set(null);
    this._router.navigate(["/displays"], {});
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
  static {
    this.\u0275fac = function DisplaysSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplaysSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplaysSectionComponent, selectors: [["displays-section"]], inputs: { id: [1, "id"], tab: [1, "tab"] }, decls: 10, vars: 6, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col", "overflow-hidden"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "mobile-full"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col"], [1, "h-1/2", "flex-1", 3, "activeTab"], [1, "bg-base-100", "border-base-300", "mx-2", "flex", "items-center", "gap-2", "rounded-b-lg", "border", "px-2", "py-1"], ["icon", "", "type", "button", "matRipple", "", 1, "sm:hidden", 3, "click"], [1, "shrink-0", "text-2xl", "opacity-60"], [1, "min-w-0", "flex-1", "py-2"], [1, "truncate", "text-lg", "font-medium"], [1, "text-base-content/80", "truncate", "text-sm"], ["icon", "", "default", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 3, "matTooltip", "href"], ["role", "tablist", 1, "bg-base-100", "border-base-300", "mx-2", "mt-2", "flex", "overflow-hidden", "rounded-lg", "border"], ["type", "button", "role", "tab", "aria-controls", "display-schedule-panel", "id", "display-schedule-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", "role", "tab", "aria-controls", "display-playlists-panel", "id", "display-playlists-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", "role", "tab", "aria-controls", "display-zones-panel", "id", "display-zones-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"]], template: function DisplaysSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "display-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "display-list", 5);
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, DisplaysSectionComponent_Conditional_7_Template, 27, 59);
        \u0275\u0275element(8, "display-content", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(9, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mobile-hidden", !!ctx.selected_display());
        \u0275\u0275advance();
        \u0275\u0275classProp("mobile-hidden", !ctx.selected_display());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_display() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("activeTab", ctx.view_tab());
      }
    }, dependencies: [
      NavSidebarComponent,
      NavFooterComponent,
      DisplayHeaderComponent,
      DisplayListComponent,
      DisplayContentComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], styles: ["\n@media (max-width: 639px) {\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=displays.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplaysSectionComponent, [{
    type: Component,
    args: [{ selector: "displays-section", template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <display-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <display-list
                        [class.mobile-hidden]="!!selected_display()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_display()"
                    >
                        @if (selected_display()) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border px-2 py-1"
                            >
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="sm:hidden"
                                    (click)="deselectDisplay()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_DISPLAYS'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <icon class="shrink-0 text-2xl opacity-60"
                                    >tv</icon
                                >
                                <div class="min-w-0 flex-1 py-2">
                                    <h4 class="truncate text-lg font-medium">
                                        {{
                                            selected_display().display_name ||
                                                selected_display().name
                                        }}
                                    </h4>
                                    @if (selected_display().description) {
                                        <div
                                            class="text-base-content/80 truncate text-sm"
                                        >
                                            {{ selected_display().description }}
                                        </div>
                                    }
                                </div>
                                <a
                                    icon
                                    default
                                    matRipple
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.OPEN_PANEL' | translate
                                    "
                                    [href]="panel_link()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.OPEN_PANEL_NEW_TAB'
                                            | translate
                                    "
                                >
                                    <icon>open_in_new</icon>
                                </a>
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
                                role="tablist"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.DISPLAY_DETAILS_TABS'
                                        | translate
                                "
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'schedule'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'schedule'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'schedule'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'schedule'
                                    "
                                    (click)="setViewTab('schedule')"
                                    [attr.aria-selected]="
                                        view_tab() === 'schedule'
                                    "
                                    aria-controls="display-schedule-panel"
                                    id="display-schedule-tab"
                                >
                                    {{ 'SIGNAGE_MANAGER.SCHEDULE' | translate }}
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'playlists'
                                    "
                                    (click)="setViewTab('playlists')"
                                    [attr.aria-selected]="
                                        view_tab() === 'playlists'
                                    "
                                    aria-controls="display-playlists-panel"
                                    id="display-playlists-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.PLAYLISTS_COUNT'
                                            | translate
                                                : { count: playlist_count() }
                                                : playlist_count()
                                    }}
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'zones'
                                    "
                                    [class.border-b-2]="view_tab() === 'zones'"
                                    [class.text-primary]="
                                        view_tab() === 'zones'
                                    "
                                    [class.opacity-60]="view_tab() !== 'zones'"
                                    (click)="setViewTab('zones')"
                                    [attr.aria-selected]="
                                        view_tab() === 'zones'
                                    "
                                    aria-controls="display-zones-panel"
                                    id="display-zones-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.ZONES_COUNT'
                                            | translate
                                                : { count: zone_count() }
                                                : zone_count()
                                    }}
                                </button>
                            </div>
                        }
                        <display-content
                            class="h-1/2 flex-1"
                            [activeTab]="view_tab()"
                        />
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `, imports: [
      NavSidebarComponent,
      NavFooterComponent,
      DisplayHeaderComponent,
      DisplayListComponent,
      DisplayContentComponent,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8eac906e2c3493bde876d274a7a1452ede86c23d5ec71ac8ae62cdbdcc4a851c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/displays/displays.component.ts */\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=displays.component.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplaysSectionComponent, { className: "DisplaysSectionComponent", filePath: "apps/signage-manager/src/app/displays/displays.component.ts", lineNumber: 229 });
})();
export {
  DisplaysSectionComponent
};
//# sourceMappingURL=displays.component-VC2JD7MJ.js.map
