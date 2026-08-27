import {
  DateFieldComponent
} from "./chunk-R6TRT7PX.js";
import {
  UserSearchFieldComponent
} from "./chunk-IXEDNKIR.js";
import {
  UserAvatarComponent
} from "./chunk-MEOQRCJE.js";
import {
  AsyncHandler,
  FormField,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  NO_RECURR,
  addYears,
  disabled,
  firstRecurrenceInstance,
  form,
  formatRecurrence,
  fromBookingRecurrence,
  fromEventRecurrence,
  getUnixTime,
  queryBookings,
  queryUserFreeBusy,
  recurrenceEndDate,
  recurrenceInstanceCount,
  setHours,
  toBookingRecurrence,
  toEventRecurrence
} from "./chunk-VGBRJ5YL.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  Injector,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Output,
  Pipe,
  Renderer2,
  TranslatePipe,
  ViewChild,
  addDays,
  addMinutes,
  computed,
  debounced,
  differenceInMinutes,
  effect,
  endOfDay,
  formatDuration,
  forwardRef,
  inject,
  input,
  isSameDay,
  model,
  onFieldChange,
  output,
  resource,
  setClassMetadata,
  signal,
  startOfDay,
  startOfWeek,
  toDate,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-XUPR3QCE.js";
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
    \u0275\u0275textInterpolate1(" ", user_r5.name || ctx_r2.host.email, " ");
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
        const all_emails = [
          this.host.email,
          ...users.map((_) => _.email.toLowerCase())
        ];
        const period_start = getUnixTime(startOfDay(date));
        const period_end = getUnixTime(endOfDay(date));
        const availability_list = await queryUserFreeBusy({
          calendars: all_emails.join(","),
          period_start,
          period_end
        }).catch(() => []);
        const desk_list = await Promise.all(all_emails.map(async (email) => ({
          email,
          bookings: await queryBookings({
            type: "desk",
            email,
            period_start,
            period_end
          }).catch(() => [])
        })));
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
        for (const { email, bookings } of desk_list) {
          const email_lower = email.toLowerCase();
          for (const booking of bookings) {
            const date2 = new Date(booking.date);
            const duration = booking.duration;
            const block = {
              date: date2.valueOf(),
              duration,
              start: (date2.getHours() + date2.getMinutes() / 60) / 24 * 100,
              size: duration / 60 / 24 * 100
            };
            if (!availability_map[email_lower]) {
              availability_map[email_lower] = [];
            }
            availability_map[email_lower].push(block);
          }
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
    this._container_el = viewChild.required("container");
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
      ...current.filter((u) => u.email !== new_user.email),
      new_user
    ]);
    this.user.set(void 0);
  }
  removeUser(user_to_remove) {
    this.users.update((current) => current.filter((u) => u.email !== user_to_remove.email));
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
      const old_date = this.date();
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
        \u0275\u0275property("user", ctx.host)("date", ctx.date())("availability", ctx.availability()[ctx.host.email] ?? \u0275\u0275pureFunction0(24, _c1));
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
    ], styles: ["\n.grid[_ngcontent-%COMP%] {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true][_ngcontent-%COMP%], \n[disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%] {\n  background: var(--base-200) !important;\n  pointer-events: none;\n}\n[disabled=true][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */"] });
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
                                    {{ user.name || host.email }}
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
                                    availability()[host.email] ?? []
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAvailabilityModalComponent, { className: "FindAvailabilityModalComponent", filePath: "libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts", lineNumber: 283 });
})();

// libs/form-fields/src/lib/compact-counter.component.ts
function CompactCounterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.render_fn() ? ctx_r0.render_fn()(ctx_r0.value()) : ctx_r0.value()) || "0", " ");
  }
}
var CompactCounterComponent = class _CompactCounterComponent {
  constructor() {
    this.step = input(
      1,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max = input(
      999,
      ...ngDevMode ? [{ debugName: "max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min = input(
      0,
      ...ngDevMode ? [{ debugName: "min" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.render_fn = input(
      void 0,
      ...ngDevMode ? [{ debugName: "render_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shift_key = signal(
      false,
      ...ngDevMode ? [{ debugName: "shift_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ctrl_key = signal(
      false,
      ...ngDevMode ? [{ debugName: "ctrl_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.focused = signal(
      false,
      ...ngDevMode ? [{ debugName: "focused" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (d) => this.disabled.set(d);
  }
  /**
   * Add the `step` to the current value
   */
  add() {
    let value = this.value();
    if (!value) {
      value = this.min() || 0;
    }
    const step = this.ctrl_key() ? 100 * this.step() : this.shift_key() ? 10 * this.step() : this.step() || 1;
    value += step;
    if (value > this.max()) {
      value = this.max() || 10;
    }
    this.setValue(value);
  }
  /** Remove the `step` from the current value */
  remove() {
    let value = this.value();
    if (!value) {
      value = this.min() || 0;
    }
    const step = this.ctrl_key() ? 100 * this.step() : this.shift_key() ? 10 * this.step() : this.step() || 1;
    value -= step;
    if (value < this.min()) {
      value = this.min() || 0;
    }
    this.setValue(value);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (new_value < this.min())
      new_value = this.min();
    if (new_value > this.max())
      new_value = this.max();
    if (new_value / this.step() % 1 !== 0) {
      new_value = Math.round(new_value * (1 / this.step())) / (1 / this.step());
    }
    this.value.set(new_value);
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
  static {
    this.\u0275fac = function CompactCounterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompactCounterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompactCounterComponent, selectors: [["compact-counter"]], inputs: { step: [1, "step"], max: [1, "max"], min: [1, "min"], render_fn: [1, "render_fn"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _CompactCounterComponent),
        multi: true
      }
    ])], decls: 11, vars: 6, consts: [["counter", "", 1, "flex", "items-center", "gap-1", "text-base", 3, "keydown.shift", "keydown.control", "keydown.meta", "keyup.shift", "keyup.control", "keyup.meta"], ["value", "", 1, "border-secondary", "relative", "z-0", "-mx-px", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "rounded-sm", "border", "p-1", "focus-within:z-20"], [1, "px-3"], ["type", "text", "limitInput", "", 1, "absolute", "inset-0", "rounded-none", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "focus", "blur", "ngModel"], [1, "flex", "flex-col", "justify-center", "space-y-1"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-5.5", "w-5.5", "min-w-0", "rounded-sm", "border", "text-sm", 3, "click", "disabled"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-5.5", "w-5.5", "min-w-0", "rounded-sm", "border", "text-sm", 3, "click", "disabled"]], template: function CompactCounterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("keydown.shift", function CompactCounterComponent_Template_div_keydown_shift_0_listener() {
          return ctx.shift_key.set(true);
        }, \u0275\u0275resolveWindow)("keydown.control", function CompactCounterComponent_Template_div_keydown_control_0_listener() {
          return ctx.ctrl_key.set(true);
        }, \u0275\u0275resolveWindow)("keydown.meta", function CompactCounterComponent_Template_div_keydown_meta_0_listener() {
          return ctx.ctrl_key.set(true);
        }, \u0275\u0275resolveWindow)("keyup.shift", function CompactCounterComponent_Template_div_keyup_shift_0_listener() {
          return ctx.shift_key.set(false);
        }, \u0275\u0275resolveWindow)("keyup.control", function CompactCounterComponent_Template_div_keyup_control_0_listener() {
          return ctx.ctrl_key.set(false);
        }, \u0275\u0275resolveWindow)("keyup.meta", function CompactCounterComponent_Template_div_keyup_meta_0_listener() {
          return ctx.ctrl_key.set(false);
        }, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275conditionalCreate(2, CompactCounterComponent_Conditional_2_Template, 2, 1, "span", 2);
        \u0275\u0275elementStart(3, "input", 3);
        \u0275\u0275listener("ngModelChange", function CompactCounterComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.value.set($event);
        })("focus", function CompactCounterComponent_Template_input_focus_3_listener() {
          return ctx.focused.set(true);
        })("blur", function CompactCounterComponent_Template_input_blur_3_listener() {
          ctx.setValue(+ctx.value());
          return ctx.focused.set(false);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "button", 5);
        \u0275\u0275listener("click", function CompactCounterComponent_Template_button_click_5_listener() {
          return ctx.add();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function CompactCounterComponent_Template_button_click_8_listener() {
          return ctx.remove();
        });
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "remove");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("disabled", ctx.disabled());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.focused() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.value());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.value() === ctx.max());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.value() || ctx.value() === ctx.min());
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], styles: ["\n[counter].disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 30%;\n}\n\n/*# sourceMappingURL=compact-counter.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompactCounterComponent, [{
    type: Component,
    args: [{ selector: "compact-counter", template: `
        <div
            counter
            class="flex items-center gap-1 text-base"
            (window:keydown.shift)="shift_key.set(true)"
            (window:keydown.control)="ctrl_key.set(true)"
            (window:keydown.meta)="ctrl_key.set(true)"
            (window:keyup.shift)="shift_key.set(false)"
            (window:keyup.control)="ctrl_key.set(false)"
            (window:keyup.meta)="ctrl_key.set(false)"
            [class.disabled]="disabled()"
        >
            <div
                value
                class="border-secondary relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center rounded-sm border p-1 focus-within:z-20"
            >
                @if (!focused()) {
                    <span class="px-3">
                        {{
                            (render_fn() ? render_fn()(value()) : value()) ||
                                '0'
                        }}
                    </span>
                }
                <input
                    type="text"
                    class="absolute inset-0 rounded-none p-2 opacity-0 focus:opacity-100"
                    [ngModel]="value()"
                    (ngModelChange)="value.set($event)"
                    (focus)="focused.set(true)"
                    (blur)="setValue(+value()); focused.set(false)"
                    limitInput
                />
            </div>
            <div class="flex flex-col justify-center space-y-1">
                <button
                    increase
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                    [disabled]="value() === max()"
                    (click)="add()"
                >
                    <icon>add</icon>
                </button>
                <button
                    decrease
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                    [disabled]="!value() || value() === min()"
                    (click)="remove()"
                >
                    <icon>remove</icon>
                </button>
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CompactCounterComponent),
        multi: true
      }
    ], imports: [FormsModule, IconComponent], styles: ["/* angular:styles/component:css;a6b2eba167820a19f3bfe4858772015401d059291041c0f38f39de4e622992d8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/compact-counter.component.ts */\n[counter].disabled {\n  pointer-events: none;\n  opacity: 30%;\n}\n/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=compact-counter.component.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], render_fn: [{ type: Input, args: [{ isSignal: true, alias: "render_fn", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompactCounterComponent, { className: "CompactCounterComponent", filePath: "libs/form-fields/src/lib/compact-counter.component.ts", lineNumber: 88 });
})();

// libs/form-fields/src/lib/recurrence-modal.component.ts
var _forTrack0 = ($index, $item) => $item[1];
function RecurrenceModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.model().interval === 1 ? "FORM.RECURRENCE_WEEK" : "FORM.RECURRENCE_WEEKS"));
  }
}
function RecurrenceModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.model().interval === 1 ? "FORM.RECURRENCE_MONTH" : "FORM.RECURRENCE_MONTHS"));
  }
}
function RecurrenceModalComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function RecurrenceModalComponent_Conditional_17_For_5_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDate(day_r3[1]));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const has_date_r4 = \u0275\u0275nextContext(2).hasDate(day_r3[1]);
    \u0275\u0275classProp("bg-secondary", has_date_r4)("text-secondary", !has_date_r4)("text-base-200", has_date_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 7, day_r3[0], "EEEEE"), " ");
  }
}
function RecurrenceModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275repeaterCreate(4, RecurrenceModalComponent_Conditional_17_For_5_Template, 3, 10, "button", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FORM.RECURRENCE_REPEAT_ON"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.weekdays);
  }
}
function RecurrenceModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 7)(2, "mat-option", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form.monthly_type);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Monthly on ", ctx_r0.month_instance, " ", \u0275\u0275pipeBind2(4, 3, ctx_r0.date, "EEEE"));
  }
}
var RecurrenceModalComponent = class _RecurrenceModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this.instance_fn = (v) => `${v ?? 13} instances`;
    this.date = this._data.date || Date.now();
    this.week = this._data.iom ?? 1;
    this.available_days = this._data.available_days;
    this.end_date = endOfDay(addDays(Date.now(), this.available_days)).valueOf();
    this.month_instance = this.week === -1 ? "Last" : this.week === 1 ? "1st" : this.week === 2 ? "2nd" : this.week === 3 ? "3rd" : `${this.week}th`;
    this.weekdays = new Array(7).fill(0).map((_, idx) => {
      const date = addDays(startOfWeek(Date.now()), idx);
      return [date.valueOf(), date.getDay()];
    });
    this._injector = inject(Injector);
    this.model = signal(
      {
        _custom: true,
        type: "daily",
        interval: 1,
        weekdays: /* @__PURE__ */ new Set([new Date(this.date).getDay()]),
        week: 0,
        monthly_type: "day_of_week",
        end_type: "never",
        end_date: this._defaultEndDate(),
        end_instances: 13
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      disabled(p.end_date, {
        when: () => this.model().end_type !== "date"
      });
      disabled(p.end_instances, {
        when: () => this.model().end_type !== "instances"
      });
      disabled(p.type, { when: () => this.available_days < 14 });
    });
    onFieldChange(this.model, (m) => m.type, (type) => this._onTypeChange(type), this._injector);
    onFieldChange(this.model, (m) => m, () => this._clampEndInstances(), this._injector);
  }
  ngOnInit() {
    this.model.update((m) => __spreadProps(__spreadValues(__spreadValues({}, m), this._data.value), {
      _custom: true
    }));
    if (!this.model().type || this.model().type === "none") {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { type: "daily" }));
    }
    const default_end_date = this._defaultEndDate();
    if (!this.model().end_date) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_date: default_end_date }));
    }
    if (!this.model().end_instances) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_instances: 13 }));
    }
    if (this.model().end_date < this.date) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_date: this.date }));
    } else if (this.model().end_date > this.end_date) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_date: this.end_date }));
    }
    if (this.model().type === "monthly") {
      this._setMonthlyWeekday();
    }
    this._clampEndInstances();
  }
  hasDate(idx) {
    return this.model().weekdays.has(idx);
  }
  toggleDate(idx) {
    this.model.update((m) => {
      const set = new Set(m.weekdays);
      set.has(idx) ? set.delete(idx) : set.add(idx);
      return __spreadProps(__spreadValues({}, m), { weekdays: set });
    });
  }
  confirmValue() {
    const value = __spreadValues({}, this.model());
    value.end_date = value.end_date || this._defaultEndDate();
    if (value.end_type === "instances" && value.end_instances) {
      value.end_date = recurrenceEndDate(value, this.date);
      while (value.end_instances > 1 && value.end_date > this.end_date) {
        value.end_instances--;
        value.end_date = recurrenceEndDate(value, this.date);
      }
      value.end_date = Math.min(value.end_date, this.end_date);
    }
    if (value.end_type !== "instances") {
      value.end_instances = void 0;
    }
    if (value.end_type !== "date") {
      value.end_date = value.end_type === "instances" ? value.end_date : void 0;
    }
    return value;
  }
  maxInstances() {
    const value = this.model();
    let max_instances = 1;
    for (let count = 1; count <= 53; count++) {
      const end_date = recurrenceEndDate(__spreadProps(__spreadValues({}, value), { end_instances: count }), this.date);
      if (end_date > this.end_date)
        break;
      max_instances = count;
    }
    return max_instances;
  }
  _onTypeChange(type) {
    if (type === "monthly")
      this._setMonthlyWeekday();
  }
  _setMonthlyWeekday() {
    const set = /* @__PURE__ */ new Set();
    set.add(new Date(this.date).getDay());
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      monthly_type: "day_of_week",
      week: this.week,
      weekdays: set
    }));
  }
  _clampEndInstances() {
    if (this.model().end_type !== "instances")
      return;
    const max_instances = this.maxInstances();
    if (this.model().end_instances <= max_instances)
      return;
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { end_instances: max_instances }));
  }
  _defaultEndDate() {
    return this.end_date;
  }
  static {
    this.\u0275fac = function RecurrenceModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecurrenceModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurrenceModalComponent, selectors: [["recurrence-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 45, vars: 45, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], [1, "flex", "min-w-[24rem]", "flex-col", "space-y-2", "px-4"], [1, "w-auto"], [1, "mt-2", "flex", "items-center", "space-x-4", "pb-4"], [3, "formField", "min", "max", "step"], ["appearance", "outline", 1, "no-subscript", "flex-1"], [3, "formField"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["appearance", "outline"], [1, "pb-4"], [1, "flex", "items-center"], ["value", "never"], [1, "mt-2", "flex", "items-center"], ["value", "date"], [3, "formField", "from", "to"], ["value", "instances"], [1, "flex-1", 3, "formField", "render_fn", "min", "max"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["icon", "", "matRipple", "", 1, "border-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "bg-secondary", "text-secondary", "text-base-200"], ["icon", "", "matRipple", "", 1, "border-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["value", "day_of_week"]], template: function RecurrenceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "main", 2)(5, "label", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "compact-counter", 5);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-select", 7)(12, "mat-option", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, RecurrenceModalComponent_Conditional_15_Template, 3, 3, "mat-option", 9);
        \u0275\u0275conditionalCreate(16, RecurrenceModalComponent_Conditional_16_Template, 3, 3, "mat-option", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, RecurrenceModalComponent_Conditional_17_Template, 6, 3);
        \u0275\u0275conditionalCreate(18, RecurrenceModalComponent_Conditional_18_Template, 5, 6, "mat-form-field", 11);
        \u0275\u0275elementStart(19, "label", 3);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 12)(23, "mat-radio-group", 7)(24, "div", 13)(25, "mat-radio-button", 14);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 15)(29, "mat-radio-button", 16);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "a-date-field", 17);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 15)(34, "mat-radio-button", 18);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "compact-counter", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "footer", 20)(39, "button", 21);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 22);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 27, "FORM.RECURRENCE_CUSTOM_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 29, "FORM.RECURRENCE_REPEAT_EVERY"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.interval)("min", 1)("max", ctx.model().type === "daily" ? 7 : 12)("step", 1);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.type);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 31, ctx.model().interval === 1 ? "FORM.RECURRENCE_DAY" : "FORM.RECURRENCE_DAYS"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.available_days >= 14 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_days >= 28 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().type === "weekly" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().type === "monthly" ? 18 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 33, "FORM.RECURRENCE_ENDS"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.end_type);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 35, "FORM.RECURRENCE_ENDS_NEVER"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 37, "FORM.RECURRENCE_ENDS_ON"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.end_date)("from", ctx.date)("to", ctx.end_date);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 39, "FORM.RECURRENCE_ENDS_AFTER"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.end_instances)("render_fn", ctx.instance_fn)("min", 1)("max", ctx.maxInstances());
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 41, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.confirmValue());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 43, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      CommonModule,
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatDialogModule,
      MatDialogClose,
      CompactCounterComponent,
      DateFieldComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%], \na-date-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\nmat-radio-button[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n/*# sourceMappingURL=recurrence-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurrenceModalComponent, [{
    type: Component,
    args: [{ selector: "recurrence-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'FORM.RECURRENCE_CUSTOM_HEADER' | translate }}
            </h3>
        </header>
        <main class="flex min-w-[24rem] flex-col space-y-2 px-4">
            <label class="w-auto">{{
                'FORM.RECURRENCE_REPEAT_EVERY' | translate
            }}</label>
            <div class="mt-2 flex items-center space-x-4 pb-4">
                <compact-counter
                    [formField]="form.interval"
                    [min]="1"
                    [max]="model().type === 'daily' ? 7 : 12"
                    [step]="1"
                ></compact-counter>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select [formField]="form.type">
                        <mat-option value="daily">{{
                            (model().interval === 1
                                ? 'FORM.RECURRENCE_DAY'
                                : 'FORM.RECURRENCE_DAYS'
                            ) | translate
                        }}</mat-option>
                        @if (available_days >= 14) {
                            <mat-option value="weekly">{{
                                (model().interval === 1
                                    ? 'FORM.RECURRENCE_WEEK'
                                    : 'FORM.RECURRENCE_WEEKS'
                                ) | translate
                            }}</mat-option>
                        }
                        @if (available_days >= 28) {
                            <mat-option value="monthly">{{
                                (model().interval === 1
                                    ? 'FORM.RECURRENCE_MONTH'
                                    : 'FORM.RECURRENCE_MONTHS'
                                ) | translate
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            @if (model().type === 'weekly') {
                <label class="w-auto">{{
                    'FORM.RECURRENCE_REPEAT_ON' | translate
                }}</label>
                <div class="flex items-center space-x-2 pb-4">
                    @for (day of weekdays; track day[1]) {
                        @let has_date = hasDate(day[1]);
                        <button
                            icon
                            matRipple
                            class="border-secondary h-12 w-12 rounded-sm border"
                            [class.bg-secondary]="has_date"
                            [class.text-secondary]="!has_date"
                            [class.text-base-200]="has_date"
                            (click)="toggleDate(day[1])"
                        >
                            {{ day[0] | date: 'EEEEE' }}
                        </button>
                    }
                </div>
            }
            @if (model().type === 'monthly') {
                <mat-form-field appearance="outline">
                    <mat-select [formField]="form.monthly_type">
                        <mat-option value="day_of_week"
                            >Monthly on {{ month_instance }}
                            {{ date | date: 'EEEE' }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
            }
            <label class="w-auto">{{
                'FORM.RECURRENCE_ENDS' | translate
            }}</label>
            <div class="pb-4">
                <mat-radio-group [formField]="form.end_type">
                    <div class="flex items-center">
                        <mat-radio-button value="never">{{
                            'FORM.RECURRENCE_ENDS_NEVER' | translate
                        }}</mat-radio-button>
                    </div>
                    <div class="mt-2 flex items-center">
                        <mat-radio-button value="date">{{
                            'FORM.RECURRENCE_ENDS_ON' | translate
                        }}</mat-radio-button>
                        <a-date-field
                            [formField]="form.end_date"
                            [from]="date"
                            [to]="end_date"
                        ></a-date-field>
                    </div>
                    <div class="mt-2 flex items-center">
                        <mat-radio-button value="instances">{{
                            'FORM.RECURRENCE_ENDS_AFTER' | translate
                        }}</mat-radio-button>
                        <compact-counter
                            class="flex-1"
                            [formField]="form.end_instances"
                            [render_fn]="instance_fn"
                            [min]="1"
                            [max]="maxInstances()"
                        ></compact-counter>
                    </div>
                </mat-radio-group>
            </div>
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                class="w-32"
                [mat-dialog-close]="confirmValue()"
            >
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      CommonModule,
      FormField,
      MatFormFieldModule,
      MatRadioModule,
      MatSelectModule,
      MatDialogModule,
      CompactCounterComponent,
      DateFieldComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;08e87cc84ad893ed080b10ccb1ca1d9025acb8f4d3e0d639abb60b4f021cfe92;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/recurrence-modal.component.ts */\nmat-form-field,\na-date-field {\n  height: 3.25rem;\n}\nmat-radio-button {\n  width: 8rem;\n}\n/*# sourceMappingURL=recurrence-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurrenceModalComponent, { className: "RecurrenceModalComponent", filePath: "libs/form-fields/src/lib/recurrence-modal.component.ts", lineNumber: 180 });
})();

// libs/form-fields/src/lib/recurrence-field.component.ts
var _c02 = (a0) => ({ day: a0 });
var _c12 = (a0, a1) => ({ index: a0, day: a1 });
function RecurrenceFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatted_value(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "FORM.RECURRENCE_CUSTOM"), " ");
  }
}
function RecurrenceFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "FORM.RECURRENCE_DAILY"), " ");
  }
}
function RecurrenceFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "FORM.RECURRENCE_WEEKLY_ON", \u0275\u0275pureFunction1(7, _c02, \u0275\u0275pipeBind2(1, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "FORM.RECURRENCE_MONTH_INSTANCE", \u0275\u0275pureFunction2(7, _c12, ctx_r0.instance_of_month(), \u0275\u0275pipeBind2(1, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "FORM.RECURRENCE_NONE"), " ");
  }
}
function RecurrenceFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "FORM.RECURRENCE_WEEKLY_ON", \u0275\u0275pureFunction1(7, _c02, \u0275\u0275pipeBind2(2, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "FORM.RECURRENCE_MONTH_INSTANCE", \u0275\u0275pureFunction2(7, _c12, ctx_r0.instance_of_month(), \u0275\u0275pipeBind2(2, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Anually on ", \u0275\u0275pipeBind2(2, 1, ctx_r0.date(), "LLLL dd"), " ");
  }
}
function RecurrenceFieldComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8)(1, "div", 2)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatted_value(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "FORM.RECURRENCE_CUSTOM"), " ");
  }
}
var RecurrenceFieldComponent = class _RecurrenceFieldComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this.type = input(
      "booking",
      ...ngDevMode ? [{ debugName: "type" }] : (
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
    this.available_days = input(
      180,
      ...ngDevMode ? [{ debugName: "available_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.first_instance = output();
    this.prev_type = signal(
      "none",
      ...ngDevMode ? [{ debugName: "prev_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recurr_type = signal(
      "none",
      ...ngDevMode ? [{ debugName: "recurr_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.iom = signal(
      0,
      ...ngDevMode ? [{ debugName: "iom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.instance_of_month = signal(
      "",
      ...ngDevMode ? [{ debugName: "instance_of_month" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = signal(
      NO_RECURR,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._custom_cache = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "_custom_cache" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formatted_value = computed(
      () => {
        const val = this.value();
        if (!val)
          return "";
        if (val.end_type === "instances" && recurrenceInstanceCount(val.end_instances)) {
          return formatRecurrence(__spreadProps(__spreadValues({}, val), {
            end_date: recurrenceEndDate(val, this.date())
          }), this.date());
        }
        return formatRecurrence(val, this.date());
      },
      ...ngDevMode ? [{ debugName: "formatted_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    effect(() => {
      const date_value = this.date();
      if (!date_value)
        return;
      untracked(() => this._onDateChange(date_value));
    });
  }
  toRaw(data) {
    return this.type() === "event" ? toEventRecurrence(data, this.date()) : toBookingRecurrence(data, this.date());
  }
  fromRaw(data) {
    return this.type() === "event" ? fromEventRecurrence(data) : fromBookingRecurrence(data);
  }
  /** Update the form field value. */
  setValue(new_value) {
    new_value = this._clampValueEnd(new_value);
    this.value.set(new_value);
    this._custom_cache.set(new_value?._custom ? __spreadValues({}, new_value) : void 0);
    this._emitFirstInstance(new_value);
    if (this._onChange)
      this._onChange(this.toRaw(new_value));
  }
  /** Update local value when form control value is changed externally. */
  writeValue(value) {
    if (!value) {
      this.value.set(NO_RECURR);
      this._custom_cache.set(void 0);
      this.recurr_type.set("none");
      this.prev_type.set("none");
      return;
    }
    const next_value = this.fromRaw(value || {});
    const restored_value = this._restoreCustomEnd(next_value);
    this.value.set(restored_value);
    this._custom_cache.set(restored_value?._custom ? __spreadValues({}, restored_value) : void 0);
    this.recurr_type.set(this.value()._custom ? "custom_display" : this.value().type);
    this.prev_type.set(this.recurr_type());
  }
  openCustomRecurrenceModal() {
    const ref = this._dialog.open(RecurrenceModalComponent, {
      data: {
        value: this.value(),
        iom: this.iom(),
        date: this.date(),
        available_days: this.available_days()
      }
    });
    ref.afterClosed().subscribe((d) => setTimeout(() => {
      d ? this.setValue(__spreadValues({}, d)) : "";
      this.recurr_type.set(d ? "custom_display" : this.prev_type());
    }, 10));
  }
  setSimple(pattern) {
    const day_of_week = new Date(this.date()).getDay();
    const end_date = endOfDay(addDays(Date.now(), this.available_days())).valueOf();
    if (pattern === "none") {
      this.setValue(NO_RECURR);
    } else if (pattern === "daily") {
      this.setValue({
        _custom: false,
        type: "daily",
        interval: 1,
        end_type: "date",
        end_date
      });
    } else if (pattern === "weekly") {
      this.setValue({
        _custom: false,
        type: "weekly",
        interval: 1,
        weekdays: /* @__PURE__ */ new Set([day_of_week]),
        end_type: "date",
        end_date
      });
    } else if (pattern === "monthly") {
      this.setValue({
        _custom: false,
        type: "monthly",
        interval: 1,
        weekdays: /* @__PURE__ */ new Set([day_of_week]),
        monthly_type: "day_of_week",
        week: this.iom(),
        end_type: "date",
        end_date
      });
    } else if (pattern === "yearly") {
      this.setValue({
        _custom: false,
        type: "yearly",
        interval: 1,
        end_type: "date",
        end_date: addYears(this.date(), 7).valueOf()
      });
    }
    this.recurr_type.set(pattern === "custom" || pattern === "custom_display" ? this.recurr_type() : pattern);
    this.prev_type.set(this.recurr_type());
  }
  // -----------------------------------------------------------------------
  // Private helpers
  // -----------------------------------------------------------------------
  /** React to a date change from either the signal input or the parent form. */
  _onDateChange(date_value) {
    const day = new Date(date_value).getDate();
    let week = Math.floor(day / 7) + (day % 7 ? 1 : 0);
    let label = `${week}${week === 2 ? "nd" : week === 3 ? "rd" : "th"}`;
    if (week === 4 && day >= 25 || week === 5) {
      label = "Last";
      week = -1;
    }
    if (week === 1)
      label = "First";
    this.instance_of_month.set(label);
    this.iom.set(week);
    if (this._prev_date && this._prev_date !== date_value) {
      this._recalculateValue(date_value, week);
    }
    this._prev_date = date_value;
  }
  /**
   * Recalculate the stored recurrence value to match the new date.
   * Updates weekday, week-of-month, and instance-based end dates.
   * Multi-day custom weekly selections are preserved.
   */
  _recalculateValue(date_value, week) {
    const current = this.value();
    if (!current || current.type === "none")
      return;
    const day_of_week = new Date(date_value).getDay();
    const updated = {};
    const has_multi_day_custom = current._custom && current.weekdays?.size > 1;
    if (!has_multi_day_custom && (current.type === "weekly" || current.type === "monthly" && current.monthly_type === "day_of_week")) {
      updated.weekdays = /* @__PURE__ */ new Set([day_of_week]);
    }
    if (current.type === "monthly" && current.monthly_type === "day_of_week") {
      updated.week = week;
    }
    if (current.end_type === "instances" && current.end_instances) {
      updated.end_date = recurrenceEndDate(current, date_value);
    } else if (current.end_type === "date" && current.end_date && // end_date is always stored as endOfDay(), so this comparison
    // is effectively a day-boundary check: reset only when
    // the entire end day is before the new booking date.
    current.end_date < date_value) {
      updated.end_date = this._allowedEndDate();
    }
    if (Object.keys(updated).length) {
      this.setValue(__spreadValues(__spreadValues({}, current), updated));
    }
  }
  _emitFirstInstance(value) {
    if (!value || value.type === "none")
      return;
    const date_value = this.date();
    if (!date_value)
      return;
    const first_instance = firstRecurrenceInstance(value, date_value);
    if (startOfDay(first_instance).valueOf() === startOfDay(date_value).valueOf()) {
      return;
    }
    this.first_instance.emit(first_instance);
  }
  _clampValueEnd(value) {
    if (!value || value.type === "none")
      return value;
    const max_end_date = this._allowedEndDate();
    if (value.end_type === "date" && value.end_date > max_end_date) {
      return __spreadProps(__spreadValues({}, value), { end_date: max_end_date });
    }
    if (value.end_type !== "instances" || !value.end_instances) {
      return value;
    }
    const updated = __spreadValues({}, value);
    while (updated.end_instances > 1 && recurrenceEndDate(updated, this.date()) > max_end_date) {
      updated.end_instances--;
    }
    updated.end_date = Math.min(recurrenceEndDate(updated, this.date()), max_end_date);
    return updated;
  }
  _allowedEndDate() {
    return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
  }
  /**
   * When a round-tripped value comes back through writeValue, the
   * serialisation/deserialisation may lose the end_instances fields.
   * Restore them from the cached custom value when the pattern matches.
   */
  _restoreCustomEnd(next_value) {
    const custom_value = this._custom_cache() || this.value();
    if (!next_value?._custom || next_value.end_instances || !custom_value?._custom || custom_value.end_type !== "instances" || !this._samePattern(next_value, custom_value)) {
      return next_value;
    }
    return __spreadProps(__spreadValues({}, next_value), {
      end_type: "instances",
      end_instances: custom_value.end_instances,
      end_date: custom_value.end_date || next_value.end_date
    });
  }
  _samePattern(a, b) {
    const same_days = a.type === "weekly" ? this._sameWeekdays(a.weekdays, b.weekdays) : a.type === "monthly" && a.monthly_type === "day_of_week" ? this._sameWeekdays(a.weekdays, b.weekdays) : true;
    return a.type === b.type && a.interval === b.interval && a.week === b.week && a.monthly_type === b.monthly_type && same_days;
  }
  _sameWeekdays(a, b) {
    if (!a?.size && !b?.size)
      return true;
    if (!a || !b || a.size !== b.size)
      return false;
    return Array.from(a).every((day) => b.has(day));
  }
  static {
    this.\u0275fac = function RecurrenceFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecurrenceFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurrenceFieldComponent, selectors: [["recurrence-field"]], inputs: { type: [1, "type"], date: [1, "date"], available_days: [1, "available_days"] }, outputs: { first_instance: "first_instance" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _RecurrenceFieldComponent),
        multi: true
      }
    ])], decls: 22, vars: 18, consts: [["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "w-full"], ["value", "none"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["value", "yearly"], ["value", "custom_display"], ["value", "custom", 3, "click"], [1, "w-1/2", "flex-1", "truncate"], [1, "bg-base-200", "border-base-300/30", "mr-2", "rounded", "border", "px-2", "py-1", "text-xs", "uppercase"]], template: function RecurrenceFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-select", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("ngModelChange", function RecurrenceFieldComponent_Template_mat_select_ngModelChange_1_listener($event) {
          return ctx.setSimple($event);
        });
        \u0275\u0275elementStart(3, "mat-select-trigger");
        \u0275\u0275conditionalCreate(4, RecurrenceFieldComponent_Conditional_4_Template, 6, 4, "div", 2)(5, RecurrenceFieldComponent_Conditional_5_Template, 2, 3)(6, RecurrenceFieldComponent_Conditional_6_Template, 3, 9)(7, RecurrenceFieldComponent_Conditional_7_Template, 3, 10)(8, RecurrenceFieldComponent_Conditional_8_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-option", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-option", 4);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, RecurrenceFieldComponent_Conditional_15_Template, 4, 9, "mat-option", 5);
        \u0275\u0275conditionalCreate(16, RecurrenceFieldComponent_Conditional_16_Template, 4, 10, "mat-option", 6);
        \u0275\u0275conditionalCreate(17, RecurrenceFieldComponent_Conditional_17_Template, 3, 4, "mat-option", 7);
        \u0275\u0275conditionalCreate(18, RecurrenceFieldComponent_Conditional_18_Template, 7, 4, "mat-option", 8);
        \u0275\u0275elementStart(19, "mat-option", 9);
        \u0275\u0275listener("click", function RecurrenceFieldComponent_Template_mat_option_click_19_listener() {
          return ctx.openCustomRecurrenceModal();
        });
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.recurr_type())("placeholder", \u0275\u0275pipeBind1(2, 10, "FORM.RECURRENCE_NONE"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.value()?._custom ? 4 : ctx.recurr_type() === "daily" ? 5 : ctx.recurr_type() === "weekly" ? 6 : ctx.recurr_type() === "monthly" ? 7 : 8);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "FORM.RECURRENCE_NONE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "FORM.RECURRENCE_DAILY"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.available_days() >= 14 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_days() >= 28 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(false ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value()?._custom ? 18 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 16, "FORM.RECURRENCE_CUSTOM"), " ");
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[value][_ngcontent-%COMP%] {\n  min-width: 3em;\n}\n/*# sourceMappingURL=recurrence-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurrenceFieldComponent, [{
    type: Component,
    args: [{ selector: "recurrence-field", template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [ngModel]="recurr_type()"
                (ngModelChange)="setSimple($event)"
                [placeholder]="'FORM.RECURRENCE_NONE' | translate"
            >
                <mat-select-trigger>
                    @if (value()?._custom) {
                        <div class="flex w-full">
                            <div class="w-1/2 flex-1 truncate">
                                {{ formatted_value() }}
                            </div>
                            <div
                                class="bg-base-200 border-base-300/30 mr-2 rounded border px-2 py-1 text-xs uppercase"
                            >
                                {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
                            </div>
                        </div>
                    } @else if (recurr_type() === 'daily') {
                        {{ 'FORM.RECURRENCE_DAILY' | translate }}
                    } @else if (recurr_type() === 'weekly') {
                        {{
                            'FORM.RECURRENCE_WEEKLY_ON'
                                | translate: { day: date() | date: 'EEEE' }
                        }}
                    } @else if (recurr_type() === 'monthly') {
                        {{
                            'FORM.RECURRENCE_MONTH_INSTANCE'
                                | translate
                                    : {
                                          index: instance_of_month(),
                                          day: date() | date: 'EEEE',
                                      }
                        }}
                    } @else {
                        {{ 'FORM.RECURRENCE_NONE' | translate }}
                    }
                </mat-select-trigger>
                <mat-option value="none">{{
                    'FORM.RECURRENCE_NONE' | translate
                }}</mat-option>
                <mat-option value="daily">{{
                    'FORM.RECURRENCE_DAILY' | translate
                }}</mat-option>
                @if (available_days() >= 14) {
                    <mat-option value="weekly">
                        {{
                            'FORM.RECURRENCE_WEEKLY_ON'
                                | translate: { day: date() | date: 'EEEE' }
                        }}
                    </mat-option>
                }
                @if (available_days() >= 28) {
                    <mat-option value="monthly">
                        {{
                            'FORM.RECURRENCE_MONTH_INSTANCE'
                                | translate
                                    : {
                                          index: instance_of_month(),
                                          day: date() | date: 'EEEE',
                                      }
                        }}
                    </mat-option>
                }
                @if (false) {
                    <mat-option value="yearly">
                        Anually on {{ date() | date: 'LLLL dd' }}
                    </mat-option>
                }
                @if (value()?._custom) {
                    <mat-option value="custom_display">
                        <div class="flex w-full">
                            <div class="w-1/2 flex-1 truncate">
                                {{ formatted_value() }}
                            </div>
                            <div
                                class="bg-base-200 border-base-300/30 mr-2 rounded border px-2 py-1 text-xs uppercase"
                            >
                                {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
                            </div>
                        </div>
                    </mat-option>
                }
                <mat-option
                    value="custom"
                    (click)="openCustomRecurrenceModal()"
                >
                    {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
                </mat-option>
            </mat-select>
        </mat-form-field>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => RecurrenceFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatSelectModule,
      CommonModule,
      TranslatePipe,
      FormsModule
    ], styles: ["/* angular:styles/component:css;e72ff6499190df1a26a0774bf65fe07318d67ad23844c1c7de3f5b2dfdc807aa;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/recurrence-field.component.ts */\n[value] {\n  min-width: 3em;\n}\n/*# sourceMappingURL=recurrence-field.component.css.map */\n"] }]
  }], () => [], { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], available_days: [{ type: Input, args: [{ isSignal: true, alias: "available_days", required: false }] }], first_instance: [{ type: Output, args: ["first_instance"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurrenceFieldComponent, { className: "RecurrenceFieldComponent", filePath: "libs/form-fields/src/lib/recurrence-field.component.ts", lineNumber: 158 });
})();

export {
  FindAvailabilityModalComponent,
  RecurrenceFieldComponent
};
//# sourceMappingURL=chunk-WY3W7JMJ.js.map
