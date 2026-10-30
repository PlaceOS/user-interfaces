import {
  DateFieldComponent
} from "./chunk-AFV6PWVA.js";
import {
  UserSearchFieldComponent
} from "./chunk-5EGL6PUB.js";
import {
  UserAvatarComponent
} from "./chunk-A4ULKLG5.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  queryUserFreeBusy
} from "./chunk-2EHUPV2S.js";
import {
  setHours
} from "./chunk-3JQPS2OO.js";
import {
  TranslatePipe
} from "./chunk-QGI2HD4I.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  getUnixTime
} from "./chunk-GRXVKFOQ.js";
import {
  IconComponent
} from "./chunk-ABUJTHF5.js";
import {
  AsyncHandler
} from "./chunk-NCRUSG7A.js";
import {
  addMinutes,
  differenceInMinutes,
  endOfDay,
  formatDuration,
  isSameDay,
  startOfDay,
  toDate
} from "./chunk-WSQPQHCZ.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JJMLMF3T.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Injector,
  Input,
  Pipe,
  Renderer2,
  ViewChild,
  computed,
  debounced,
  inject,
  input,
  resource,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-UL33YUHR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// libs/components/src/lib/duration.pipe.ts
var DurationPipe = class _DurationPipe {
  /**
   * Format the duration value
   * @param length Duration to format in minutes
   * @param shorten Whether to shorten the period names e.g. `hours` as `h`
   */
  transform(length, shorten = false) {
    let duration = formatDuration({
      hours: Math.floor(length / 60),
      minutes: length % 60
    });
    if (shorten) {
      duration = duration.replace(" hour", "h").replace(" minute", "m").replace(/s/gi, "");
    }
    return duration;
  }
  static {
    this.\u0275fac = function DurationPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DurationPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "duration", type: _DurationPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationPipe, [{
    type: Pipe,
    args: [{
      name: "duration"
    }]
  }], null, null);
})();

// libs/users/src/lib/find-availability-modal/user-availability.component.ts
function UserAvailabilityComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", event_r1.start + "%")("width", event_r1.size + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 6, event_r1.date, "shortTime"), " - ", \u0275\u0275pipeBind2(4, 9, event_r1.date.valueOf() + event_r1.duration * 60 * 1e3, "shortTime"), " ");
  }
}
var UserAvailabilityComponent = class _UserAvailabilityComponent {
  constructor() {
    this.user = input(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.availability = input(
      [],
      ...ngDevMode ? [{ debugName: "availability" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = input(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function UserAvailabilityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAvailabilityComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvailabilityComponent, selectors: [["user-availability-list"]], inputs: { user: [1, "user"], availability: [1, "availability"], date: [1, "date"] }, decls: 3, vars: 0, consts: [[1, "border-base-300", "relative", "inset-y-0", "h-32", "w-480", "border-b"], ["event", "", 1, "border-error", "bg-error", "absolute", "inset-y-0", "overflow-hidden", "rounded-sm", "border", "p-2", "text-white", 3, "left", "width"], ["event", "", 1, "border-error", "bg-error", "absolute", "inset-y-0", "overflow-hidden", "rounded-sm", "border", "p-2", "text-white"], [1, "max-w-full", "text-xs"]], template: function UserAvailabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, UserAvailabilityComponent_For_2_Template, 5, 12, "div", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.availability());
      }
    }, dependencies: [CommonModule, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvailabilityComponent, [{
    type: Component,
    args: [{ selector: "user-availability-list", template: `
        <div class="border-base-300 relative inset-y-0 h-32 w-480 border-b">
            @for (event of availability(); track event) {
                <div
                    event
                    class="border-error bg-error absolute inset-y-0 overflow-hidden rounded-sm border p-2 text-white"
                    [style.left]="event.start + '%'"
                    [style.width]="event.size + '%'"
                >
                    <div class="max-w-full text-xs">
                        {{ event.date | date: 'shortTime' }} -
                        {{
                            event.date.valueOf() + event.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                    </div>
                </div>
            }
        </div>
    `, imports: [CommonModule], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/find-availability-modal/user-availability.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */\n"] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }], availability: [{ type: Input, args: [{ isSignal: true, alias: "availability", required: false }] }], date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvailabilityComponent, { className: "UserAvailabilityComponent", filePath: "libs/users/src/lib/find-availability-modal/user-availability.component.ts", lineNumber: 44 });
})();

// libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts
var _c0 = ["container"];
var _c1 = () => [];
function FindAvailabilityModalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hr_r1 = ctx.$implicit;
    const \u0275$index_26_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -ctx_r2.offset_x() + "px");
    \u0275\u0275attribute("disabled", ctx_r2.today() && ctx_r2.current_hour() > \u0275$index_26_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, hr_r1, "haa"));
  }
}
function FindAvailabilityModalComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "a-user-avatar", 13);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function FindAvailabilityModalComponent_For_22_Template_button_click_4_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeUser(user_r5));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", -ctx_r2.offset_y() + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r5.name || user_r5.email, " ");
  }
}
function FindAvailabilityModalComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
  if (rf & 2) {
    const \u0275$index_59_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -(ctx_r2.offset_x() + 1) + "px");
    \u0275\u0275attribute("disabled", ctx_r2.today() && ctx_r2.current_hour() > \u0275$index_59_r6);
  }
}
function FindAvailabilityModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r2.date(), "shortTime"), " ");
  }
}
function FindAvailabilityModalComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-availability-list", 26);
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("user", user_r7)("date", ctx_r2.date())("availability", ctx_r2.availability()[user_r7.email.toLowerCase()] ?? \u0275\u0275pureFunction0(3, _c1));
  }
}
function sameEmail(a, b) {
  return (a || "").toLowerCase() === (b || "").toLowerCase();
}
var FindAvailabilityModalComponent = class _FindAvailabilityModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._renderer = inject(Renderer2);
    this._dialog_ref = inject(MatDialogRef);
    this._injector = inject(Injector);
    this.users = signal(
      [...this._data.users],
      ...ngDevMode ? [{ debugName: "users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = signal(
      this._data.date || Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration = signal(
      this._data.duration || 60,
      ...ngDevMode ? [{ debugName: "duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_y = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset_y" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_x = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset_x" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.move_time = signal(
      false,
      ...ngDevMode ? [{ debugName: "move_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.host = this._data.host;
    this.hours = new Array(24).fill(0).map((_, idx) => setHours(startOfDay(Date.now()), idx).valueOf());
    this._debounced_users = debounced(this.users, 300);
    this._debounced_date = debounced(this.date, 300);
    this._availability_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_availability_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      injector: this._injector,
      params: () => ({
        users: this._debounced_users.value(),
        date: this._debounced_date.value()
      }),
      loader: async ({ params: { users, date } }) => {
        const availability_list = await queryUserFreeBusy({
          calendars: [
            this.host.email,
            ...users.map((_) => _.email.toLowerCase())
          ].join(","),
          period_start: getUnixTime(startOfDay(date)),
          period_end: getUnixTime(endOfDay(date))
        }).catch(() => []);
        const availability_map = {};
        for (const item of availability_list) {
          availability_map[item.id.toLowerCase()] = item.availability.filter((_) => _.status === "busy").map((block) => {
            const date2 = fromUnixTime(block.starts_at);
            const duration = differenceInMinutes(fromUnixTime(block.ends_at), fromUnixTime(block.starts_at));
            return {
              date: date2.valueOf(),
              duration,
              start: (date2.getHours() + date2.getMinutes() / 60) / 24 * 100,
              size: duration / 60 / 24 * 100
            };
          });
        }
        return availability_map;
      }
    }));
    this.availability = computed(
      () => this._availability_resource.value() ?? {},
      ...ngDevMode ? [{ debugName: "availability" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._container_el = viewChild.required(
      "container",
      ...ngDevMode ? [{ debugName: "_container_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.today = computed(
      () => isSameDay(this.date(), Date.now()),
      ...ngDevMode ? [{ debugName: "today" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_hour = computed(
      () => (/* @__PURE__ */ new Date()).getHours(),
      ...ngDevMode ? [{ debugName: "current_hour" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selection_left = computed(
      () => {
        const d = new Date(this.date());
        return (d.getHours() + d.getMinutes() / 60) * 5;
      },
      ...ngDevMode ? [{ debugName: "selection_left" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selection_width = computed(
      () => this.duration() / 60 * 5,
      ...ngDevMode ? [{ debugName: "selection_width" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._start_time = 0;
    this._move_last = 0;
    this._move_size = 80 * 24;
  }
  onDateChange(new_date) {
    this.date.set(new_date);
  }
  addUser(new_user) {
    if (!new_user)
      return;
    this.users.update((current) => [
      ...current.filter((u) => !sameEmail(u.email, new_user.email)),
      new_user
    ]);
    this.user.set(void 0);
  }
  removeUser(user_to_remove) {
    this.users.update((current) => current.filter((u) => !sameEmail(u.email, user_to_remove.email)));
    this.user.set(void 0);
  }
  closeAndUpdate() {
    this._dialog_ref.close(true);
  }
  ngAfterViewInit() {
    const d = new Date(this.date());
    const hour_width = 80;
    this.timeout("init", () => {
      const selected_hour = d.getHours() + d.getMinutes() / 60;
      const scroll_x = Math.max(0, selected_hour * hour_width - 48);
      this._container_el().nativeElement.scrollTo(scroll_x, 0);
      this.onScroll();
    }, 300);
  }
  onScroll() {
    this.offset_x.set(this._container_el().nativeElement.scrollLeft);
    this.offset_y.set(this._container_el().nativeElement.scrollTop);
  }
  startMovePeriod(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.move_time.set(true);
    this._start_time = this.date();
    event instanceof MouseEvent ? this.subscription("on_move", this._renderer.listen("window", "mousemove", (e) => this._onMovePeriod(e))) : this.subscription("on_move", this._renderer.listen("window", "touchmove", (e) => this._onMovePeriod(e)));
    event instanceof MouseEvent ? this.subscription("on_move_end", this._renderer.listen("window", "mouseup", () => this._onMoveEnd())) : this.subscription("on_move_end", this._renderer.listen("window", "touchend", () => this._onMoveEnd()));
  }
  startMoveDuration(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this._start_time = this.duration();
    event instanceof MouseEvent ? this.subscription("on_move", this._renderer.listen("window", "mousemove", (e) => this._onMoveDuration(e))) : this.subscription("on_move", this._renderer.listen("window", "touchmove", (e) => this._onMoveDuration(e)));
    event instanceof MouseEvent ? this.subscription("on_move_end", this._renderer.listen("window", "mouseup", () => this._onMoveEnd())) : this.subscription("on_move_end", this._renderer.listen("window", "touchend", () => this._onMoveEnd()));
  }
  _onMovePeriod(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      this.date();
      const new_date = addMinutes(this._start_time, change_min).valueOf();
      if (new_date >= Date.now()) {
        this.date.set(new_date);
      }
    }
  }
  _onMoveDuration(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      this.duration.set(Math.max(30, this._start_time + change_min));
    }
  }
  _onMoveEnd() {
    this.unsub("on_move");
    this.unsub("on_move_end");
    this._move_last = 0;
    this.move_time.set(false);
  }
  static {
    this.\u0275fac = function FindAvailabilityModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FindAvailabilityModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAvailabilityModalComponent, selectors: [["find-availability-modal"]], viewQuery: function FindAvailabilityModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._container_el, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 25, consts: [["container", ""], [1, "bg-base-100", "fixed", "inset-0", "flex", "flex-col", "space-y-2", "p-2"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "border-base-300", "flex", "h-[calc(100vh-9rem)]", "flex-1", "flex-col", "overflow-hidden", "rounded-sm", "border", "sm:h-[65vh]"], [1, "flex", "w-full", "flex-col", "space-y-2", "p-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "max-h-13", "flex-1", 3, "ngModelChange", "ngModel"], [1, "divide-base-300", "border-base-300", "relative", "grid", "h-1/2", "w-full", "max-w-full", "flex-1", "divide-x", "divide-y", "overflow-hidden", "border-t"], ["times", "", 1, "border-base-300", "col-start-2", "flex", "h-10", "overflow-hidden", "border-l"], ["hour", "", 1, "border-base-300", "relative", "h-10", "min-w-20", "border-r", "p-2", "text-sm", 3, "left"], ["users", "", 1, "!border-l-none", "row-start-2", "w-24", "overflow-hidden"], ["host", "", 1, "border-base-300", "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "py-2"], [1, "text-2xl", 3, "user"], [1, "max-w-full", "overflow-hidden", "px-2", "text-center", "text-xs", "wrap-break-word"], ["person", "", 1, "border-base-300", "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "py-2", 3, "top"], ["blocks", "", 1, "relative", "row-start-2", "overflow-hidden"], ["fixed", "", 1, "absolute", "inset-0", "flex", "overflow-hidden"], ["divider", "", 1, "border-base-300", "relative", "h-full", "min-w-20", "border-l", 3, "left"], ["selection", "", 1, "border-info!", "absolute", "inset-y-0", "z-20", "cursor-grab", "border-x-2!", "active:cursor-grabbing", 3, "mousedown", "touchstart"], [1, "bg-info", "absolute", "inset-0", "opacity-30"], ["handle", "", 1, "bg-info", "absolute", "top-1/2", "-left-px", "h-3", "w-3", "-translate-x-1/2", "-translate-y-1/2", "rounded-full"], ["handle", "", 1, "bg-info", "active:bg-secondary", "absolute", "top-1/2", "-right-px", "h-3", "w-3", "translate-x-1/2", "-translate-y-1/2", "rounded-full", "hover:h-4", "hover:w-4", 3, "mousedown", "touchstart"], [1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-1/2", "-translate-x-1/2", "rounded-sm", "border", "p-2", "text-xs", "whitespace-nowrap", "shadow-sm"], [1, "border-base-300", "bg-base-100", "absolute", "top-12", "left-1/2", "-translate-x-1/2", "rounded-sm", "border", "p-2", "text-xs", "whitespace-nowrap", "shadow-sm"], ["scroll", "", 1, "absolute", "inset-0", "overflow-auto", 3, "scroll"], [1, "pointer-events-none", 3, "user", "date", "availability"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], ["hour", "", 1, "border-base-300", "relative", "h-10", "min-w-20", "border-r", "p-2", "text-sm"], ["person", "", 1, "border-base-300", "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "py-2"], [1, "max-w-full", "px-2", "text-center", "text-xs", "wrap-break-word"], ["icon", "", 1, "absolute", "-top-1", "-left-1", 3, "click"], ["divider", "", 1, "border-base-300", "relative", "h-full", "min-w-20", "border-l"]], template: function FindAvailabilityModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4)(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 5)(9, "div", 6)(10, "a-date-field", 7);
        \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_10_listener($event) {
          return ctx.onDateChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(11, "a-user-search-field", 7);
        \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_11_listener($event) {
          return ctx.addUser($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
        \u0275\u0275repeaterCreate(14, FindAvailabilityModalComponent_For_15_Template, 4, 7, "div", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
        \u0275\u0275element(18, "a-user-avatar", 13);
        \u0275\u0275elementStart(19, "div", 14);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(21, FindAvailabilityModalComponent_For_22_Template, 7, 4, "div", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 16)(24, "div", 17);
        \u0275\u0275repeaterCreate(25, FindAvailabilityModalComponent_For_26_Template, 1, 3, "div", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(27, "div", 19);
        \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_27_listener($event) {
          return ctx.startMovePeriod($event);
        })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_27_listener($event) {
          return ctx.startMovePeriod($event);
        });
        \u0275\u0275element(28, "div", 20)(29, "div", 21);
        \u0275\u0275elementStart(30, "div", 22);
        \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_30_listener($event) {
          return ctx.startMoveDuration($event);
        })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_30_listener($event) {
          return ctx.startMoveDuration($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 23);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "duration");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(34, FindAvailabilityModalComponent_Conditional_34_Template, 3, 4, "div", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 25, 0);
        \u0275\u0275listener("scroll", function FindAvailabilityModalComponent_Template_div_scroll_35_listener() {
          return ctx.onScroll();
        });
        \u0275\u0275element(37, "user-availability-list", 26);
        \u0275\u0275repeaterCreate(38, FindAvailabilityModalComponent_For_39_Template, 1, 4, "user-availability-list", 26, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "footer", 2)(41, "button", 27)(42, "div", 28)(43, "icon", 29);
        \u0275\u0275text(44, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 30);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 18, "CALENDAR_EVENT.FIND_AVAILABILITY"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.date());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.user());
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.hours);
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("top", -ctx.offset_y() + "px");
        \u0275\u0275advance();
        \u0275\u0275property("user", ctx.host);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.host.name || ctx.host.email, " ");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.users());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.hours);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", "calc(" + ctx.selection_left() + "rem - " + ctx.offset_x() + "px)")("width", ctx.selection_width() + "rem");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 20, ctx.duration()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.move_time() ? 34 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("user", ctx.host)("date", ctx.date())("availability", ctx.availability()[ctx.host.email.toLowerCase()] ?? \u0275\u0275pureFunction0(24, _c1));
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.users());
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 22, "COMMON.BACK_TO_FORM"), " ");
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      UserAvailabilityComponent,
      UserAvatarComponent,
      UserSearchFieldComponent,
      DateFieldComponent,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      FormsModule,
      NgControlStatus,
      NgModel,
      DatePipe,
      TranslatePipe,
      DurationPipe
    ], styles: ["\n.grid[_ngcontent-%COMP%] {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true][_ngcontent-%COMP%], \n[disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%] {\n  background: var(--%NS%base-200) !important;\n  pointer-events: none;\n}\n[disabled=true][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindAvailabilityModalComponent, [{
    type: Component,
    args: [{ selector: "find-availability-modal", template: `
        <div class="bg-base-100 fixed inset-0 flex flex-col space-y-2 p-2">
            <header
                class="bg-base-200 flex h-14 w-full items-center justify-between space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CALENDAR_EVENT.FIND_AVAILABILITY' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="border-base-300 flex h-[calc(100vh-9rem)] flex-1 flex-col overflow-hidden rounded-sm border sm:h-[65vh]"
            >
                <div
                    class="flex w-full flex-col space-y-2 p-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                >
                    <a-date-field
                        [ngModel]="date()"
                        (ngModelChange)="onDateChange($event)"
                        class="max-h-13 flex-1"
                    ></a-date-field>
                    <a-user-search-field
                        [ngModel]="user()"
                        (ngModelChange)="addUser($event)"
                        class="max-h-13 flex-1"
                    ></a-user-search-field>
                </div>
                <div
                    class="divide-base-300 border-base-300 relative grid h-1/2 w-full max-w-full flex-1 divide-x divide-y overflow-hidden border-t"
                >
                    <div
                        times
                        class="border-base-300 col-start-2 flex h-10 overflow-hidden border-l"
                    >
                        @for (hr of hours; track hr; let hour = $index) {
                            <div
                                hour
                                class="border-base-300 relative h-10 min-w-20 border-r p-2 text-sm"
                                [attr.disabled]="
                                    today() && current_hour() > hour
                                "
                                [style.left]="-offset_x() + 'px'"
                            >
                                <span>{{ hr | date: 'haa' }}</span>
                            </div>
                        }
                    </div>
                    <div
                        users
                        class="!border-l-none row-start-2 w-24 overflow-hidden"
                    >
                        <div
                            host
                            class="border-base-300 relative flex h-32 w-24 flex-col items-center justify-center border-b py-2"
                            [style.top]="-offset_y() + 'px'"
                        >
                            <a-user-avatar
                                class="text-2xl"
                                [user]="host"
                            ></a-user-avatar>
                            <div
                                class="max-w-full overflow-hidden px-2 text-center text-xs wrap-break-word"
                            >
                                {{ host.name || host.email }}
                            </div>
                        </div>
                        @for (user of users(); track user) {
                            <div
                                person
                                class="border-base-300 relative flex h-32 w-24 flex-col items-center justify-center border-b py-2"
                                [style.top]="-offset_y() + 'px'"
                            >
                                <a-user-avatar
                                    class="text-2xl"
                                    [user]="user"
                                ></a-user-avatar>
                                <div
                                    class="max-w-full px-2 text-center text-xs wrap-break-word"
                                >
                                    {{ user.name || user.email }}
                                </div>
                                <button
                                    icon
                                    class="absolute -top-1 -left-1"
                                    (click)="removeUser(user)"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                    <div blocks class="relative row-start-2 overflow-hidden">
                        <div
                            fixed
                            class="absolute inset-0 flex overflow-hidden"
                        >
                            @for (_ of hours; track _; let h = $index) {
                                <div
                                    divider
                                    class="border-base-300 relative h-full min-w-20 border-l"
                                    [style.left]="-(offset_x() + 1) + 'px'"
                                    [attr.disabled]="
                                        today() && current_hour() > h
                                    "
                                ></div>
                            }
                            <div
                                selection
                                class="border-info! absolute inset-y-0 z-20 cursor-grab border-x-2! active:cursor-grabbing"
                                [style.left]="
                                    'calc(' +
                                    selection_left() +
                                    'rem - ' +
                                    offset_x() +
                                    'px)'
                                "
                                [style.width]="selection_width() + 'rem'"
                                (mousedown)="startMovePeriod($event)"
                                (touchstart)="startMovePeriod($event)"
                            >
                                <div
                                    class="bg-info absolute inset-0 opacity-30"
                                ></div>
                                <div
                                    handle
                                    class="bg-info absolute top-1/2 -left-px h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                ></div>
                                <div
                                    handle
                                    class="bg-info active:bg-secondary absolute top-1/2 -right-px h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full hover:h-4 hover:w-4"
                                    (mousedown)="startMoveDuration($event)"
                                    (touchstart)="startMoveDuration($event)"
                                ></div>
                                <div
                                    class="border-base-300 bg-base-100 absolute top-2 left-1/2 -translate-x-1/2 rounded-sm border p-2 text-xs whitespace-nowrap shadow-sm"
                                >
                                    {{ duration() | duration }}
                                </div>
                                @if (move_time()) {
                                    <div
                                        class="border-base-300 bg-base-100 absolute top-12 left-1/2 -translate-x-1/2 rounded-sm border p-2 text-xs whitespace-nowrap shadow-sm"
                                    >
                                        {{ date() | date: 'shortTime' }}
                                    </div>
                                }
                            </div>
                        </div>
                        <div
                            scroll
                            #container
                            class="absolute inset-0 overflow-auto"
                            (scroll)="onScroll()"
                        >
                            <user-availability-list
                                class="pointer-events-none"
                                [user]="host"
                                [date]="date()"
                                [availability]="
                                    availability()[host.email.toLowerCase()] ??
                                    []
                                "
                            ></user-availability-list>
                            @for (user of users(); track user) {
                                <user-availability-list
                                    class="pointer-events-none"
                                    [user]="user"
                                    [date]="date()"
                                    [availability]="
                                        availability()[
                                            user.email.toLowerCase()
                                        ] ?? []
                                    "
                                ></user-availability-list>
                            }
                        </div>
                    </div>
                </div>
            </main>
            <footer
                class="bg-base-200 flex h-14 w-full items-center justify-between space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    [mat-dialog-close]="true"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      UserAvailabilityComponent,
      UserAvatarComponent,
      UserSearchFieldComponent,
      DateFieldComponent,
      IconComponent,
      MatDialogModule,
      DurationPipe,
      FormsModule
    ], styles: ["/* angular:styles/component:css;888dbc5d227535aa4dc78103e3874c11f0661b1fbddbdf0c44c8b6afe46623ee;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts */\n.grid {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true],\n[disabled=true] [header] {\n  background: var(--base-200) !important;\n  pointer-events: none;\n}\n[disabled=true] > * {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */\n"] }]
  }], () => [], { _container_el: [{ type: ViewChild, args: ["container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAvailabilityModalComponent, { className: "FindAvailabilityModalComponent", filePath: "libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts", lineNumber: 288 });
})();

export {
  FindAvailabilityModalComponent
};
//# debugId=98a365c8-f6e1-52dc-894d-6e5676959c50
//# sourceMappingURL=chunk-DJZVYAEC.js.map
