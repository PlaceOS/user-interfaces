import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-LRMKYHLV.js";
import {
  ControlStateService,
  queryEvents
} from "./chunk-UL6NDOAC.js";
import {
  TranslatePipe
} from "./chunk-KUOPNTYV.js";
import {
  AsyncHandler,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  computed,
  differenceInMinutes,
  endOfDay,
  getUnixTime,
  inject,
  input,
  log,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CE5NOWRL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/control/src/app/ui/next-meeting.component.ts
var _c0 = (a0) => ({ count: a0 });
function NextMeetingComponent_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.CONTROL.MEETING_NOW"), " ");
  }
}
function NextMeetingComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "APP.CONTROL.MEETING_STARTS_IN", \u0275\u0275pureFunction1(4, _c0, ctx_r0.minutes_until())), " ");
  }
}
function NextMeetingComponent_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "APP.CONTROL.MEETING_NEXT"), " ");
  }
}
function NextMeetingComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("touchend", function NextMeetingComponent_Conditional_0_Conditional_11_Template_button_touchend_0_listener($event) {
      return $event.stopPropagation();
    })("click", function NextMeetingComponent_Conditional_0_Conditional_11_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const event_r3 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startAndJoin($event, event_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.MEETING_START_JOIN"), " ");
  }
}
function NextMeetingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, NextMeetingComponent_Conditional_0_Case_2_Template, 2, 3)(3, NextMeetingComponent_Conditional_0_Case_3_Template, 2, 6)(4, NextMeetingComponent_Conditional_0_Case_4_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, NextMeetingComponent_Conditional_0_Conditional_11_Template, 3, 3, "button", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const event_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.status()) === "now" ? 2 : tmp_2_0 === "soon" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 5, event_r3.date, "shortTime"), " \u2013 ", \u0275\u0275pipeBind2(10, 8, event_r3.date_end, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.can_join() ? 11 : -1);
  }
}
var REFRESH_MS = 5 * 60 * 1e3;
var TICK_MS = 30 * 1e3;
var COUNTDOWN_MINUTES = 60;
var _NextMeetingComponent = class _NextMeetingComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ControlStateService);
    this._now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._state.system_id(),
      loader: async ({ params: id }) => {
        if (!id)
          return [];
        try {
          return await queryEvents({
            system_ids: id,
            period_start: getUnixTime(Date.now()),
            period_end: getUnixTime(endOfDay(Date.now()))
          });
        } catch (error) {
          log("Control", "Error loading room meetings:", error, "warn");
          return [];
        }
      }
    }));
    this.meeting = computed(
      () => {
        const now = this._now();
        const events = this._events.hasValue() ? this._events.value() : [];
        return events.filter((_) => _.type !== "cancelled" && _.date_end > now).sort((a, b) => a.date - b.date)[0] ?? null;
      },
      ...ngDevMode ? [{ debugName: "meeting" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.minutes_until = computed(
      () => {
        var _a;
        return Math.max(1, differenceInMinutes((_a = this.meeting()) == null ? void 0 : _a.date, this._now()));
      },
      ...ngDevMode ? [{ debugName: "minutes_until" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status = computed(
      () => {
        const event = this.meeting();
        if (!event)
          return "later";
        if (event.date <= this._now())
          return "now";
        return this.minutes_until() <= COUNTDOWN_MINUTES ? "soon" : "later";
      },
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_join = computed(
      () => {
        var _a, _b, _c;
        const url = (_a = this._state.system()) == null ? void 0 : _a.meeting_url;
        return !!url && !!((_c = (_b = this.meeting()) == null ? void 0 : _b.meeting_url) == null ? void 0 : _c.startsWith(url));
      },
      ...ngDevMode ? [{ debugName: "can_join" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.interval("tick", () => this._now.set(Date.now()), TICK_MS);
    this.interval("refresh", () => this._events.reload(), REFRESH_MS);
  }
  /** Power on the room and push the meeting to it */
  startAndJoin(e, event) {
    e.stopPropagation();
    this._state.powerOn();
    this._state.setEvent(event);
  }
};
_NextMeetingComponent.\u0275fac = function NextMeetingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NextMeetingComponent)();
};
_NextMeetingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextMeetingComponent, selectors: [["next-meeting"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "flex", "max-w-[32rem]", "flex-col", "items-center", "rounded-sm", "bg-black/30", "px-6", "py-4", "text-center"], [1, "text-sm", "uppercase", "opacity-80"], [1, "w-full", "truncate", "text-2xl"], [1, "text-sm", "opacity-80"], ["btn", "", "matRipple", "", 1, "mt-4"], ["btn", "", "matRipple", "", 1, "mt-4", 3, "touchend", "click"]], template: function NextMeetingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NextMeetingComponent_Conditional_0_Template, 12, 11, "div", 0);
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional((tmp_0_0 = ctx.meeting()) ? 0 : -1, tmp_0_0);
  }
}, dependencies: [MatRippleModule, MatRipple, DatePipe, TranslatePipe], encapsulation: 2 });
var NextMeetingComponent = _NextMeetingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NextMeetingComponent, [{
    type: Component,
    args: [{
      selector: "next-meeting",
      template: `
        @if (meeting(); as event) {
            <div
                class="flex max-w-[32rem] flex-col items-center rounded-sm bg-black/30 px-6 py-4 text-center"
            >
                <div class="text-sm uppercase opacity-80">
                    @switch (status()) {
                        @case ('now') {
                            {{ 'APP.CONTROL.MEETING_NOW' | translate }}
                        }
                        @case ('soon') {
                            {{
                                'APP.CONTROL.MEETING_STARTS_IN'
                                    | translate: { count: minutes_until() }
                            }}
                        }
                        @default {
                            {{ 'APP.CONTROL.MEETING_NEXT' | translate }}
                        }
                    }
                </div>
                <div class="w-full truncate text-2xl">{{ event.title }}</div>
                <div class="text-sm opacity-80">
                    {{ event.date | date: 'shortTime' }} \u2013
                    {{ event.date_end | date: 'shortTime' }}
                </div>
                @if (can_join()) {
                    <button
                        btn
                        matRipple
                        class="mt-4"
                        (touchend)="$event.stopPropagation()"
                        (click)="startAndJoin($event, event)"
                    >
                        {{ 'APP.CONTROL.MEETING_START_JOIN' | translate }}
                    </button>
                }
            </div>
        }
    `,
      imports: [DatePipe, MatRippleModule, TranslatePipe]
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextMeetingComponent, { className: "NextMeetingComponent", filePath: "apps/control/src/app/ui/next-meeting.component.ts", lineNumber: 66 });
})();

// apps/control/src/app/ui/output-display.component.ts
function OutputDisplayComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONTROL.OUTPUT_SWITCH"), " ");
  }
}
function OutputDisplayComponent_Conditional_0_Template(rf, ctx) {
  var _a, _b, _c, _d, _e;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function OutputDisplayComponent_Conditional_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchSource());
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275conditionalCreate(9, OutputDisplayComponent_Conditional_0_Conditional_9_Template, 3, 3, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
    \u0275\u0275listener("click", function OutputDisplayComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMute(!ctx_r1.item().mute));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-slider", 9)(15, "input", 10);
    \u0275\u0275listener("ngModelChange", function OutputDisplayComponent_Conditional_0_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVolume($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", !ctx_r1.input())("bg-base-200", !ctx_r1.input());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (_a = ctx_r1.item()) == null ? void 0 : _a.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((_b = ctx_r1.input()) == null ? void 0 : _b.icon) || ctx_r1.icons[(_c = ctx_r1.input()) == null ? void 0 : _c.type] || "add_to_queue");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((_d = ctx_r1.input()) == null ? void 0 : _d.name) || "Click to select input source", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_e = ctx_r1.input()) == null ? void 0 : _e.name) ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.item().mute ? "volume_off" : ctx_r1.item().volume > 0 ? "volume_up" : "volume_mute");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !ctx_r1.item().mute ? ctx_r1.item().volume : 0);
    \u0275\u0275control();
  }
}
var ICON_MAP = {
  Display: "deskotp_windows",
  PC: "desktop_windows",
  Laptop: "laptop_chromebook",
  Camera: "videocam",
  TV: "tv"
};
var _OutputDisplayComponent = class _OutputDisplayComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ControlStateService);
    this._available_inputs = this._state.available_inputs;
    this.item = input(
      void 0,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.input = computed(
      () => {
        var _a;
        const input_id = ((_a = this.item()) == null ? void 0 : _a.source) || "";
        return this._available_inputs().find((_) => _.id === input_id || _.ref === input_id);
      },
      ...ngDevMode ? [{ debugName: "input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icons = ICON_MAP;
    this.switchSource = () => this._state.switchSource(this.item().id);
    this.setVolume = (v) => this.timeout("volume", () => this._state.setVolume(v, this.item().id));
    this.setMute = (s) => this._state.setMute(s, this.item().id);
  }
  get id() {
    return this._state.id;
  }
};
_OutputDisplayComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275OutputDisplayComponent_BaseFactory;
  return function OutputDisplayComponent_Factory(__ngFactoryType__) {
    return (\u0275OutputDisplayComponent_BaseFactory || (\u0275OutputDisplayComponent_BaseFactory = \u0275\u0275getInheritedFactory(_OutputDisplayComponent)))(__ngFactoryType__ || _OutputDisplayComponent);
  };
})();
_OutputDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutputDisplayComponent, selectors: [["output-display"]], inputs: { item: [1, "item"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "bg-base-100", "m-2", "rounded-sm", "p-4", "text-black", "shadow-sm"], ["view", "", "matRipple", "", 1, "border-base-200", "relative", "mb-2", "flex", "h-48", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-sm", "border", 3, "click"], [1, "bg-secondary", "absolute", "top-1", "left-1", "rounded-sm", "px-2", "py-1", "text-white", "shadow-sm"], [1, "text-7xl"], [1, "font-medium"], [1, "text-xs"], [1, "opacity-50"], [1, "flex", "w-full", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex-1"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"]], template: function OutputDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, OutputDisplayComponent_Conditional_0_Template, 16, 10, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.item() ? 0 : -1);
  }
}, dependencies: [
  MatSliderModule,
  MatSlider,
  MatSliderThumb,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent,
  MatRippleModule,
  MatRipple,
  TranslatePipe
], styles: ["\n[view][_ngcontent-%COMP%] {\n  width: 28vw;\n}\n/*# sourceMappingURL=output-display.component.css.map */"] });
var OutputDisplayComponent = _OutputDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OutputDisplayComponent, [{
    type: Component,
    args: [{ selector: "output-display", template: `
        @if (item()) {
            <div class="bg-base-100 m-2 rounded-sm p-4 text-black shadow-sm">
                <div
                    view
                    matRipple
                    class="border-base-200 relative mb-2 flex h-48 flex-col items-center justify-center space-y-2 rounded-sm border"
                    [class.opacity-60]="!input()"
                    [class.bg-base-200]="!input()"
                    (click)="switchSource()"
                >
                    <div
                        class="bg-secondary absolute top-1 left-1 rounded-sm px-2 py-1 text-white shadow-sm"
                    >
                        {{ item()?.name }}
                    </div>
                    <icon class="text-7xl">{{
                        input()?.icon || icons[input()?.type] || 'add_to_queue'
                    }}</icon>
                    <p class="font-medium">
                        {{ input()?.name || 'Click to select input source' }}
                    </p>
                    <p class="text-xs">
                        @if (input()?.name) {
                            <span class="opacity-50">
                                {{ 'APP.CONTROL.OUTPUT_SWITCH' | translate }}
                            </span>
                        }
                    </p>
                </div>
                <div class="flex w-full items-center space-x-2">
                    <button icon matRipple (click)="setMute(!item().mute)">
                        <icon>{{
                            item().mute
                                ? 'volume_off'
                                : item().volume > 0
                                  ? 'volume_up'
                                  : 'volume_mute'
                        }}</icon>
                    </button>
                    <mat-slider class="flex-1"
                        ><input
                            matSliderThumb
                            [ngModel]="!item().mute ? item().volume : 0"
                            (ngModelChange)="setVolume($event)"
                    /></mat-slider>
                </div>
            </div>
        }
    `, imports: [
      MatSliderModule,
      FormsModule,
      IconComponent,
      MatRippleModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;f55a4bf39067e90ed3019f5becc3dc90a5ce31ed785856557a0b9e4c225fc6f8;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/ui/output-display.component.ts */\n[view] {\n  width: 28vw;\n}\n/*# sourceMappingURL=output-display.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutputDisplayComponent, { className: "OutputDisplayComponent", filePath: "apps/control/src/app/ui/output-display.component.ts", lineNumber: 85 });
})();

export {
  ICON_MAP,
  OutputDisplayComponent,
  NextMeetingComponent
};
//# debugId=42219120-5948-56de-a416-a07cd1f328fe
//# sourceMappingURL=chunk-6FCLBXGG.js.map
