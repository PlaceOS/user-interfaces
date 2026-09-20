import {
  currentPeriod,
  nextPeriod
} from "./chunk-OXR65EWE.js";
import {
  PanelStateService,
  getNextFreeTimeSlot,
  subHours
} from "./chunk-CZKYXOQU.js";
import {
  subMinutes
} from "./chunk-GXNZHT5C.js";
import "./chunk-2EGXKPHK.js";
import "./chunk-ZH2YCV3X.js";
import {
  TranslatePipe
} from "./chunk-QQYE4VV6.js";
import {
  ActivatedRoute,
  AsyncHandler,
  ChangeDetectionStrategy,
  Component,
  IconComponent,
  Input,
  MatRipple,
  MatRippleModule,
  Output,
  addHours,
  addMinutes,
  computed,
  differenceInMinutes,
  effect,
  format,
  inject,
  input,
  output,
  roundToNearestMinutes,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAXHJHGO.js";
import "./chunk-KUGYOAP2.js";

// apps/booking-panel/src/app/checkin/checkin-timetable.component.ts
function CheckinTimetableComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const blk_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", blk_r2.hour, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blk_r2.period);
  }
}
function CheckinTimetableComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 8);
  }
  if (rf & 2) {
    const blk_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.height(blk_r2.minutes));
  }
}
function CheckinTimetableComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 4);
    \u0275\u0275domListener("click", function CheckinTimetableComponent_For_2_Template_button_click_0_listener() {
      const blk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.event.emit(blk_r2.id));
    });
    \u0275\u0275conditionalCreate(1, CheckinTimetableComponent_For_2_Conditional_1_Template, 4, 2, "div", 5);
    \u0275\u0275conditionalCreate(2, CheckinTimetableComponent_For_2_Conditional_2_Template, 1, 2, "div", 6);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const blk_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("min-width", 1 * ctx_r2.step() + "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(blk_r2.minutes % 60 === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(blk_r2.minutes % 15 === 0 ? 2 : -1);
  }
}
function CheckinTimetableComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 10);
  }
  if (rf & 2) {
    const blk_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("left", 8 + blk_r4.start + "px")("width", blk_r4.length + "px");
  }
}
function CheckinTimetableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckinTimetableComponent_For_4_Conditional_0_Template, 1, 4, "div", 9);
  }
  if (rf & 2) {
    const blk_r4 = ctx.$implicit;
    \u0275\u0275conditional(blk_r4.start + blk_r4.length >= 0 && blk_r4.start < 24 * 60 ? 0 : -1);
  }
}
var _CheckinTimetableComponent = class _CheckinTimetableComponent extends AsyncHandler {
  constructor() {
    super();
    this.events = input(
      [],
      ...ngDevMode ? [{ debugName: "events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.step = input(
      15,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = output();
    this.current_time = signal(
      0,
      ...ngDevMode ? [{ debugName: "current_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.blocks = signal(
      [],
      ...ngDevMode ? [{ debugName: "blocks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event_blocks = signal(
      [],
      ...ngDevMode ? [{ debugName: "event_blocks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this.events();
      this._processEvents();
    });
  }
  ngOnInit() {
    this._generateTimeBlocks();
    this._updateCurrentTime();
    this.interval("gen-blocks", () => this._generateTimeBlocks(), 1 * 60 * 1e3);
    this.interval("update-current", () => this._updateCurrentTime(), 30 * 1e3);
  }
  height(minutes) {
    switch (minutes) {
      case 0:
        return "2.5rem";
      case 15:
      case 45:
        return "0.75rem";
      case 30:
        return "1.5rem";
    }
    return "";
  }
  _generateTimeBlocks() {
    const blocks = [];
    const start = roundToNearestMinutes(subMinutes(subHours(Date.now(), 1), this.step() / 2), {
      nearestTo: this.step()
    });
    let date = start;
    const end = addHours(start, 24);
    while (date < end) {
      blocks.push({
        id: date.valueOf(),
        minutes: date.getMinutes(),
        hour: format(date, "h"),
        period: format(date, "a")
      });
      date = addMinutes(date, this.step());
    }
    this.blocks.set(blocks);
  }
  _processEvents() {
    if (!this.blocks().length)
      return;
    this.event_blocks.set((this.events() || []).map((_) => ({
      start: differenceInMinutes(_.date, this.blocks()[0].id),
      length: _.duration
    })));
  }
  _updateCurrentTime() {
    if (!this.blocks().length)
      return;
    const time = differenceInMinutes(Date.now(), this.blocks()[0].id);
    this.current_time.set(time);
  }
};
_CheckinTimetableComponent.\u0275fac = function CheckinTimetableComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinTimetableComponent)();
};
_CheckinTimetableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinTimetableComponent, selectors: [["checkin-timetable"]], inputs: { events: [1, "events"], step: [1, "step"] }, outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 2, consts: [[1, "relative", "flex", "h-16", "items-center", "px-2"], [1, "relative", "h-full", 3, "min-width"], ["current", "", 1, "bg-primary", "pointer-events-none", "absolute", "bottom-0", "h-12", "w-0.5"], [1, "bg-primary", "absolute", "top-0", "left-1/2", "h-2", "w-2", "-translate-x-1/2", "-translate-y-1/2", "rounded-full"], [1, "relative", "h-full", 3, "click"], [1, "absolute", "top-1", "left-0", "text-xs", "whitespace-nowrap"], [1, "bg-neutral", "absolute", "bottom-0", "left-0", "w-px", 3, "height"], [1, "text-[0.75em]"], [1, "bg-neutral", "absolute", "bottom-0", "left-0", "w-px"], ["event", "", 1, "bg-base-200", "absolute", "bottom-0", "h-12", "opacity-40", 3, "left", "width"], ["event", "", 1, "bg-base-200", "absolute", "bottom-0", "h-12", "opacity-40"]], template: function CheckinTimetableComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, CheckinTimetableComponent_For_2_Template, 3, 4, "button", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(3, CheckinTimetableComponent_For_4_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementStart(5, "div", 2);
    \u0275\u0275domElement(6, "div", 3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.blocks());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.event_blocks());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("left", 8 + ctx.current_time() + "px");
  }
}, styles: ["\n[event][_ngcontent-%COMP%] {\n  --%NS%color1: #969696;\n  --%NS%color2: #424242;\n  background:\n    repeating-linear-gradient(\n      -45deg,\n      var(--%NS%color1),\n      var(--%NS%color1) 6px,\n      var(--%NS%color2) 6px,\n      var(--%NS%color2) 8px);\n}\n/*# sourceMappingURL=checkin-timetable.component.css.map */"], changeDetection: 1 });
var CheckinTimetableComponent = _CheckinTimetableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinTimetableComponent, [{
    type: Component,
    args: [{ selector: "checkin-timetable", template: `
        <div class="relative flex h-16 items-center px-2">
            @for (blk of blocks(); track blk) {
                <button
                    class="relative h-full"
                    [style.min-width]="1 * step() + 'px'"
                    (click)="event.emit(blk.id)"
                >
                    @if (blk.minutes % 60 === 0) {
                        <div
                            class="absolute top-1 left-0 text-xs whitespace-nowrap"
                        >
                            {{ blk.hour }}
                            <span class="text-[0.75em]">{{ blk.period }}</span>
                        </div>
                    }
                    @if (blk.minutes % 15 === 0) {
                        <div
                            class="bg-neutral absolute bottom-0 left-0 w-px"
                            [style.height]="height(blk.minutes)"
                        ></div>
                    }
                </button>
            }
            @for (blk of event_blocks(); track blk) {
                @if (blk.start + blk.length >= 0 && blk.start < 24 * 60) {
                    <div
                        event
                        class="bg-base-200 absolute bottom-0 h-12 opacity-40"
                        [style.left]="8 + blk.start + 'px'"
                        [style.width]="blk.length + 'px'"
                    ></div>
                }
            }
            <div
                current
                class="bg-primary pointer-events-none absolute bottom-0 h-12 w-0.5"
                [style.left]="8 + current_time() + 'px'"
            >
                <div
                    class="bg-primary absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.Eager, imports: [], styles: ["/* angular:styles/component:css;72d850109ca25647193e9bb25821c91bda71dcd8685eeba7f1c8c5dfa1a1f848;/home/runner/work/user-interfaces/user-interfaces/apps/booking-panel/src/app/checkin/checkin-timetable.component.ts */\n[event] {\n  --color1: #969696;\n  --color2: #424242;\n  background:\n    repeating-linear-gradient(\n      -45deg,\n      var(--color1),\n      var(--color1) 6px,\n      var(--color2) 6px,\n      var(--color2) 8px);\n}\n/*# sourceMappingURL=checkin-timetable.component.css.map */\n"] }]
  }], () => [], { events: [{ type: Input, args: [{ isSignal: true, alias: "events", required: false }] }], step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinTimetableComponent, { className: "CheckinTimetableComponent", filePath: "apps/booking-panel/src/app/checkin/checkin-timetable.component.ts", lineNumber: 97 });
})();

// apps/booking-panel/src/app/checkin/checkin-view.component.ts
var _c0 = (a0, a1) => ({ hour: a0, minute: a1 });
var _c1 = (a0) => ({ minute: a0 });
function CheckinViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r0.room_image + ")");
  }
}
function CheckinViewComponent_Conditional_16_Conditional_0_Conditional_0_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.BOOKING_PANEL.FREE_IN_HOURS_AND_MINUTES", \u0275\u0275pureFunction2(4, _c0, (_a = ctx_r0.event_state()) == null ? void 0 : _a.current[1], (_b = ctx_r0.event_state()) == null ? void 0 : _b.current[2])), " ");
  }
}
function CheckinViewComponent_Conditional_16_Conditional_0_Conditional_1_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.BOOKING_PANEL.FREE_IN_MINUTES", \u0275\u0275pureFunction1(4, _c1, (_a = ctx_r0.event_state()) == null ? void 0 : _a.current[2])), " ");
  }
}
function CheckinViewComponent_Conditional_16_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.BOOKING_PANEL.FREE_IN_LESS_THAN_MINUTE"), " ");
  }
}
function CheckinViewComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  var _a, _b, _c, _d;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckinViewComponent_Conditional_16_Conditional_0_Conditional_0_Template, 2, 7);
    \u0275\u0275conditionalCreate(1, CheckinViewComponent_Conditional_16_Conditional_0_Conditional_1_Template, 2, 6);
    \u0275\u0275conditionalCreate(2, CheckinViewComponent_Conditional_16_Conditional_0_Conditional_2_Template, 2, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((_a = ctx_r0.event_state()) == null ? void 0 : _a.current[1]) > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((_b = ctx_r0.event_state()) == null ? void 0 : _b.current[1]) <= 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((_c = ctx_r0.event_state()) == null ? void 0 : _c.current[1]) <= 0 && ((_d = ctx_r0.event_state()) == null ? void 0 : _d.current[2]) <= 1 ? 2 : -1);
  }
}
function CheckinViewComponent_Conditional_16_Conditional_1_Conditional_0_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.BOOKING_PANEL.FREE_FOR_HOURS_AND_MINUTES", \u0275\u0275pureFunction2(4, _c0, (_a = ctx_r0.event_state()) == null ? void 0 : _a.current[1], (_b = ctx_r0.event_state()) == null ? void 0 : _b.current[2])), " ");
  }
}
function CheckinViewComponent_Conditional_16_Conditional_1_Conditional_1_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.BOOKING_PANEL.FREE_FOR_MINUTES", \u0275\u0275pureFunction1(4, _c1, (_a = ctx_r0.event_state()) == null ? void 0 : _a.current[2])), " ");
  }
}
function CheckinViewComponent_Conditional_16_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.BOOKING_PANEL.FREE_FOR_LESS_THAN_MINUTE"), " ");
  }
}
function CheckinViewComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  var _a, _b, _c, _d;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckinViewComponent_Conditional_16_Conditional_1_Conditional_0_Template, 2, 7);
    \u0275\u0275conditionalCreate(1, CheckinViewComponent_Conditional_16_Conditional_1_Conditional_1_Template, 2, 6);
    \u0275\u0275conditionalCreate(2, CheckinViewComponent_Conditional_16_Conditional_1_Conditional_2_Template, 2, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((_a = ctx_r0.event_state()) == null ? void 0 : _a.current[1]) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((_b = ctx_r0.event_state()) == null ? void 0 : _b.current[1]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((_c = ctx_r0.event_state()) == null ? void 0 : _c.current[1]) && ((_d = ctx_r0.event_state()) == null ? void 0 : _d.current[2]) < 1 ? 2 : -1);
  }
}
function CheckinViewComponent_Conditional_16_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckinViewComponent_Conditional_16_Conditional_0_Template, 3, 3)(1, CheckinViewComponent_Conditional_16_Conditional_1_Template, 3, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((_a = ctx_r0.event_state()) == null ? void 0 : _a.current[0]) ? 0 : 1);
  }
}
function CheckinViewComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.BOOKING_PANEL.NO_CURRENT"), " ");
  }
}
function CheckinViewComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CheckinViewComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkInCurrent());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CHECK_IN"), " ");
  }
}
function CheckinViewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CheckinViewComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newBooking());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BOOK"), " ");
  }
}
function CheckinViewComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CheckinViewComponent_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newBooking(ctx_r0.start(), true));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BOOK"), " ");
  }
}
function CheckinViewComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.FEATURES"), " ");
  }
}
function CheckinViewComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 20)(2, "div", 21)(3, "icon");
    \u0275\u0275text(4, "lightbulb");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 23);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 20)(11, "div", 21)(12, "icon");
    \u0275\u0275text(13, "add_to_queue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "icon", 23);
    \u0275\u0275text(18, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 20)(20, "div", 21)(21, "icon");
    \u0275\u0275text(22, "restaurant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 22);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "icon", 23);
    \u0275\u0275text(27, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 20)(29, "div", 21)(30, "icon");
    \u0275\u0275text(31, "help");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 22);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "icon", 23);
    \u0275\u0275text(36, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.BOOKING_PANEL.LIGHTS_BLINDS"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 6, "APP.BOOKING_PANEL.TV"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 8, "RESOURCE.CATERING"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 10, "APP.BOOKING_PANEL.HELP"), " ");
  }
}
var _CheckinViewComponent = class _CheckinViewComponent extends AsyncHandler {
  get room_image() {
    return this._state.setting("room_image");
  }
  constructor() {
    super();
    this._state = inject(PanelStateService);
    this._route = inject(ActivatedRoute);
    this.state = this._state.status;
    this.system = this._state.space;
    this.bookings = this._state.bookings;
    this.start = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book = computed(
      () => this._state.setting("disable_book_now") !== true,
      ...ngDevMode ? [{ debugName: "can_book" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checkInCurrent = () => this._state.startMeeting();
    this.newBooking = (d = Date.now(), future = false) => {
      if (!this.can_book())
        return;
      this._state.newBooking(d, this.has_user(), future, true);
    };
    this.bookSlot = (d) => this.newBooking(d, d > Date.now());
    this.has_user = signal(
      true,
      ...ngDevMode ? [{ debugName: "has_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event_state = computed(
      () => ({
        current: currentPeriod(this._state.bookings(), this._state.current(), this._state.next()),
        next: nextPeriod(this._state.next())
      }),
      ...ngDevMode ? [{ debugName: "event_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this.start.set(getNextFreeTimeSlot(this._state.bookings()).start);
    });
  }
  ngOnInit() {
    this._state.system = "";
    const params = this._route.snapshot.paramMap;
    if (params.has("system_id")) {
      this._state.system = params.get("system_id");
    }
    const query = this._route.snapshot.queryParamMap;
    this.has_user.set(query.get("user") !== "false");
  }
};
_CheckinViewComponent.\u0275fac = function CheckinViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinViewComponent)();
};
_CheckinViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinViewComponent, selectors: [["checkin-view"]], features: [\u0275\u0275ProvidersFeature([PanelStateService]), \u0275\u0275InheritDefinitionFeature], decls: 36, vars: 32, consts: [[1, "relative", "h-32", "bg-black", "p-4", "text-white"], [1, "absolute", "inset-0", "bg-cover", "bg-center", 3, "background-image"], [1, "absolute", "inset-0", "bg-black", "opacity-50"], ["name", "", 1, "absolute", "bottom-4", "left-4", "z-10", "text-3xl", "font-medium"], [1, "px-4", "pt-4", "text-xl", "font-medium"], [1, "bg-base-100", "space-y-2", "p-2"], [1, "border-base-300", "flex", "items-center", "rounded-sm", "border", "p-2", "shadow-sm"], [1, "h-full", "min-h-12", "w-2", "rounded-sm"], [1, "flex-1", "px-2", "text-sm"], [1, "text-lg", "font-medium", "uppercase"], [1, ""], ["btn", "", "matRipple", "", 1, "w-24"], [1, "bg-error", "h-full", "min-h-12", "w-2", "rounded-sm"], [1, "px-4", "pt-4", "pb-2", "text-xl", "font-medium"], [1, "border-base-300", "mx-2", "flex", "items-center", "overflow-auto", "rounded-sm", "border", "shadow-sm"], [3, "event", "events"], [1, "p-4", "text-xl", "font-medium"], [1, "divide-base-200", "bg-base-100", "h-px", "flex-1", "divide-y", "overflow-auto"], [1, "absolute", "inset-0", "bg-cover", "bg-center"], ["btn", "", "matRipple", "", 1, "w-24", 3, "click"], ["btn", "", "matRipple", "", 1, "flex", "w-full", "items-center", "p-4"], [1, "bg-neutral", "rounded-full", "p-2", "text-2xl", "text-black/40"], [1, "flex-1", "px-4", "text-left", "font-medium"], [1, "text-2xl", "opacity-40"]], template: function CheckinViewComponent_Template(rf, ctx) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, CheckinViewComponent_Conditional_1_Template, 1, 2, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
    \u0275\u0275element(10, "div", 7);
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275conditionalCreate(16, CheckinViewComponent_Conditional_16_Template, 2, 1)(17, CheckinViewComponent_Conditional_17_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, CheckinViewComponent_Conditional_18_Template, 3, 3, "button", 11);
    \u0275\u0275conditionalCreate(19, CheckinViewComponent_Conditional_19_Template, 3, 3, "button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 6);
    \u0275\u0275element(21, "div", 12);
    \u0275\u0275elementStart(22, "div", 8)(23, "div", 9);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 10);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, CheckinViewComponent_Conditional_28_Template, 3, 3, "button", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "h3", 13);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 14)(33, "checkin-timetable", 15);
    \u0275\u0275listener("event", function CheckinViewComponent_Template_checkin_timetable_event_33_listener($event) {
      return ctx.bookSlot($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, CheckinViewComponent_Conditional_34_Template, 3, 3, "h3", 16);
    \u0275\u0275conditionalCreate(35, CheckinViewComponent_Conditional_35_Template, 37, 12, "div", 17);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.room_image ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((_a = ctx.system()) == null ? void 0 : _a.display_name) || ((_b = ctx.system()) == null ? void 0 : _b.name) || "<Unknown Space>", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 24, "APP.BOOKING_PANEL.UPCOMING"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-error", ctx.state() === "busy")("bg-success", ctx.state() === "free")("bg-warning", ctx.state() === "pending");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 26, "APP.BOOKING_PANEL.NOW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((_d = (_c = ctx.event_state()) == null ? void 0 : _c.current) == null ? void 0 : _d.length) ? 16 : 17);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.state() === "pending" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.state() === "free" && ctx.can_book() ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-error", (_e = ctx.event_state()) == null ? void 0 : _e.next)("bg-success", !((_f = ctx.event_state()) == null ? void 0 : _f.next));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 28, "COMMON.NEXT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((_g = ctx.event_state()) == null ? void 0 : _g.next) || "No upcoming event", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!((_h = ctx.event_state()) == null ? void 0 : _h.next) && ctx.can_book() ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 30, "APP.BOOKING_PANEL.SCHEDULE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("events", ctx.bookings());
    \u0275\u0275advance();
    \u0275\u0275conditional(false ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(false ? 35 : -1);
  }
}, dependencies: [
  IconComponent,
  MatRippleModule,
  MatRipple,
  CheckinTimetableComponent,
  TranslatePipe
], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: #f8f8fa;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=checkin-view.component.css.map */"], changeDetection: 1 });
var CheckinViewComponent = _CheckinViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinViewComponent, [{
    type: Component,
    args: [{ selector: "checkin-view", template: `
        <div class="relative h-32 bg-black p-4 text-white">
            @if (room_image) {
                <div
                    class="absolute inset-0 bg-cover bg-center"
                    [style.background-image]="'url(' + room_image + ')'"
                ></div>
            }
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div
                name
                class="absolute bottom-4 left-4 z-10 text-3xl font-medium"
            >
                {{
                    system()?.display_name ||
                        system()?.name ||
                        '&lt;Unknown Space&gt;'
                }}
            </div>
        </div>
        <h3 class="px-4 pt-4 text-xl font-medium">
            {{ 'APP.BOOKING_PANEL.UPCOMING' | translate }}
        </h3>
        <div class="bg-base-100 space-y-2 p-2">
            <div
                class="border-base-300 flex items-center rounded-sm border p-2 shadow-sm"
            >
                <div
                    class="h-full min-h-12 w-2 rounded-sm"
                    [class.bg-error]="state() === 'busy'"
                    [class.bg-success]="state() === 'free'"
                    [class.bg-warning]="state() === 'pending'"
                ></div>
                <div class="flex-1 px-2 text-sm">
                    <div class="text-lg font-medium uppercase">
                        {{ 'APP.BOOKING_PANEL.NOW' | translate }}
                    </div>
                    <div class="">
                        @if (event_state()?.current?.length) {
                            @if (event_state()?.current[0]) {
                                @if (event_state()?.current[1] > 0) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: event_state()
                                                          ?.current[1],
                                                      minute: event_state()
                                                          ?.current[2],
                                                  }
                                    }}
                                }
                                @if (event_state()?.current[1] <= 0) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_MINUTES'
                                            | translate
                                                : {
                                                      minute: event_state()
                                                          ?.current[2],
                                                  }
                                    }}
                                }
                                @if (
                                    event_state()?.current[1] <= 0 &&
                                    event_state()?.current[2] <= 1
                                ) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                }
                            } @else {
                                @if (event_state()?.current[1]) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: event_state()
                                                          ?.current[1],
                                                      minute: event_state()
                                                          ?.current[2],
                                                  }
                                    }}
                                }
                                @if (!event_state()?.current[1]) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_MINUTES'
                                            | translate
                                                : {
                                                      minute: event_state()
                                                          ?.current[2],
                                                  }
                                    }}
                                }
                                @if (
                                    !event_state()?.current[1] &&
                                    event_state()?.current[2] < 1
                                ) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                }
                            }
                        } @else {
                            {{ 'APP.BOOKING_PANEL.NO_CURRENT' | translate }}
                        }
                    </div>
                </div>
                @if (state() === 'pending') {
                    <button
                        btn
                        matRipple
                        class="w-24"
                        (click)="checkInCurrent()"
                    >
                        {{ 'COMMON.CHECK_IN' | translate }}
                    </button>
                }
                @if (state() === 'free' && can_book()) {
                    <button btn matRipple class="w-24" (click)="newBooking()">
                        {{ 'COMMON.BOOK' | translate }}
                    </button>
                }
            </div>
            <div
                class="border-base-300 flex items-center rounded-sm border p-2 shadow-sm"
            >
                <div
                    class="bg-error h-full min-h-12 w-2 rounded-sm"
                    [class.bg-error]="event_state()?.next"
                    [class.bg-success]="!event_state()?.next"
                ></div>
                <div class="flex-1 px-2 text-sm">
                    <div class="text-lg font-medium uppercase">
                        {{ 'COMMON.NEXT' | translate }}
                    </div>
                    <div class="">
                        {{ event_state()?.next || 'No upcoming event' }}
                    </div>
                </div>
                @if (!event_state()?.next && can_book()) {
                    <button
                        btn
                        matRipple
                        class="w-24"
                        (click)="newBooking(start(), true)"
                    >
                        {{ 'COMMON.BOOK' | translate }}
                    </button>
                }
            </div>
        </div>
        <h3 class="px-4 pt-4 pb-2 text-xl font-medium">
            {{ 'APP.BOOKING_PANEL.SCHEDULE' | translate }}
        </h3>
        <div
            class="border-base-300 mx-2 flex items-center overflow-auto rounded-sm border shadow-sm"
        >
            <checkin-timetable
                [events]="bookings()"
                (event)="bookSlot($event)"
            ></checkin-timetable>
        </div>
        @if (false) {
            <h3 class="p-4 text-xl font-medium">
                {{ 'COMMON.FEATURES' | translate }}
            </h3>
        }
        @if (false) {
            <div
                class="divide-base-200 bg-base-100 h-px flex-1 divide-y overflow-auto"
            >
                <button btn matRipple class="flex w-full items-center p-4">
                    <div
                        class="bg-neutral rounded-full p-2 text-2xl text-black/40"
                    >
                        <icon>lightbulb</icon>
                    </div>
                    <div class="flex-1 px-4 text-left font-medium">
                        {{ 'APP.BOOKING_PANEL.LIGHTS_BLINDS' | translate }}
                    </div>
                    <icon class="text-2xl opacity-40">chevron_right</icon>
                </button>
                <button btn matRipple class="flex w-full items-center p-4">
                    <div
                        class="bg-neutral rounded-full p-2 text-2xl text-black/40"
                    >
                        <icon>add_to_queue</icon>
                    </div>
                    <div class="flex-1 px-4 text-left font-medium">
                        {{ 'APP.BOOKING_PANEL.TV' | translate }}
                    </div>
                    <icon class="text-2xl opacity-40">chevron_right</icon>
                </button>
                <button btn matRipple class="flex w-full items-center p-4">
                    <div
                        class="bg-neutral rounded-full p-2 text-2xl text-black/40"
                    >
                        <icon>restaurant</icon>
                    </div>
                    <div class="flex-1 px-4 text-left font-medium">
                        {{ 'RESOURCE.CATERING' | translate }}
                    </div>
                    <icon class="text-2xl opacity-40">chevron_right</icon>
                </button>
                <button btn matRipple class="flex w-full items-center p-4">
                    <div
                        class="bg-neutral rounded-full p-2 text-2xl text-black/40"
                    >
                        <icon>help</icon>
                    </div>
                    <div class="flex-1 px-4 text-left font-medium">
                        {{ 'APP.BOOKING_PANEL.HELP' | translate }}
                    </div>
                    <icon class="text-2xl opacity-40">chevron_right</icon>
                </button>
            </div>
        }
    `, providers: [PanelStateService], changeDetection: ChangeDetectionStrategy.Eager, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      CheckinTimetableComponent
    ], styles: ["/* angular:styles/component:css;3c93e191c6c5800a7531e0260601000df996f1d01dea39ed21f4d83e1c6bb4b1;/home/runner/work/user-interfaces/user-interfaces/apps/booking-panel/src/app/checkin/checkin-view.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  background-color: #f8f8fa;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=checkin-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinViewComponent, { className: "CheckinViewComponent", filePath: "apps/booking-panel/src/app/checkin/checkin-view.component.ts", lineNumber: 263 });
})();
export {
  CheckinViewComponent
};
//# debugId=17cf7ea3-fdd4-5d2a-878c-67cf90a45eb8
//# sourceMappingURL=checkin-view.component-NZPQGU2U.js.map
