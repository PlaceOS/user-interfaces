import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  ComponentsModule,
  DateFieldComponent,
  DatePipe,
  DurationPipe,
  FormFieldsModule,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatMenuModule,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatSelect,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  ReactiveFormsModule,
  Renderer2,
  TimeFieldComponent,
  User,
  UserAvatarComponent,
  UserSearchFieldComponent,
  WFHSettingsModalComponent,
  __async,
  addMinutes,
  catchError,
  combineLatest,
  debounceTime,
  defaultIfEmpty,
  differenceInMinutes,
  endOfDay,
  getUnixTime,
  isSameDay,
  map,
  of,
  queryUserFreeBusy,
  shareReplay,
  showGuest,
  showStaff,
  startOfDay,
  switchMap,
  toDate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsetComponentScope,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-L3HTKRSL.js";

// node_modules/date-fns/fromUnixTime.mjs
function fromUnixTime(unixTime) {
  return toDate(unixTime * 1e3);
}

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var EMPTY_USER = new User();
var _UserPipe = class _UserPipe {
  /**
   * Get details of the user with the given ID
   * @param user_id ID or Email of the user
   */
  transform(user_id) {
    return __async(this, null, function* () {
      if (!user_id)
        return EMPTY_USER;
      let user = USER_LIST.find(({ id, email }) => id === user_id || email === user_id);
      if (user)
        return user;
      user = yield showStaff(user_id).toPromise().catch(() => null);
      if (user) {
        USER_LIST.push(user);
        return user;
      }
      user = yield showGuest(user_id).toPromise().catch(() => null);
      if (user) {
        USER_LIST.push(user);
        return user;
      }
      return EMPTY_USER;
    });
  }
};
_UserPipe.\u0275fac = function UserPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserPipe)();
};
_UserPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
var UserPipe = _UserPipe;

// libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts
var _c0 = ["container"];
var _c1 = () => [];
function FindAvailabilityModalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -ctx_r2.offset_x + "px");
    \u0275\u0275attribute("disabled", ctx_r2.today && ctx_r2.current_hour > hour_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", hour_r2 % 12 === 0 ? "12" : hour_r2 % 12, "", hour_r2 >= 12 ? "pm" : "am", " ");
  }
}
function FindAvailabilityModalComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "a-user-avatar", 12);
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function FindAvailabilityModalComponent_div_18_Template_button_click_4_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeUser(user_r5));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", -ctx_r2.offset_y + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r5.name || ctx_r2.host.email, " ");
  }
}
function FindAvailabilityModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
  if (rf & 2) {
    const h_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -(ctx_r2.offset_x + 1) + "px");
    \u0275\u0275attribute("disabled", ctx_r2.today && ctx_r2.current_hour > h_r6);
  }
}
function FindAvailabilityModalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r2.date, "shortTime"), " ");
  }
}
function FindAvailabilityModalComponent_user_availability_list_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-availability-list", 25);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("user", user_r7)("date", ctx_r2.date)("availability", \u0275\u0275pipeBind1(1, 3, ctx_r2.availability) ? \u0275\u0275pipeBind1(2, 5, ctx_r2.availability)[user_r7.email.toLowerCase()] : \u0275\u0275pureFunction0(7, _c1));
  }
}
var _FindAvailabilityModalComponent = class _FindAvailabilityModalComponent extends AsyncHandler {
  get today() {
    return isSameDay(this.date, Date.now());
  }
  get current_hour() {
    return (/* @__PURE__ */ new Date()).getHours();
  }
  get selection_left() {
    const date = new Date(this.date);
    return (date.getHours() + date.getMinutes() / 60) * 5;
  }
  get selection_width() {
    return this.duration / 60 * 5;
  }
  constructor(_data, _renderer, _dialog_ref) {
    super();
    this._data = _data;
    this._renderer = _renderer;
    this._dialog_ref = _dialog_ref;
    this.users = new BehaviorSubject([]);
    this.search = "";
    this.date = this._data.date || Date.now();
    this.duration = this._data.duration || 60;
    this.offset_y = 0;
    this.offset_x = 0;
    this.host = this._data.host;
    this.hours = new Array(24).fill(0);
    this.on_change = new BehaviorSubject(0);
    this.availability = combineLatest([
      this.users,
      this.on_change
    ]).pipe(debounceTime(300), switchMap(([users]) => {
      return queryUserFreeBusy({
        calendars: [
          this.host.email,
          ...users.map((_) => _.email.toLowerCase())
        ].join(","),
        period_start: getUnixTime(startOfDay(this.date)),
        period_end: getUnixTime(endOfDay(this.date))
      }).pipe(catchError(() => of([])));
    }), map((availability_list) => {
      const availability_map = {};
      for (const item of availability_list) {
        availability_map[item.id.toLowerCase()] = item.availability.filter((_) => _.status === "busy").map((block) => {
          const date = fromUnixTime(block.starts_at);
          const duration = differenceInMinutes(fromUnixTime(block.ends_at), fromUnixTime(block.starts_at));
          return {
            date,
            duration,
            start: (date.getHours() + date.getMinutes() / 60) / 24 * 100,
            size: duration / 60 / 24 * 100
          };
        });
      }
      return availability_map;
    }), defaultIfEmpty({}), shareReplay(1));
    this.move_time = false;
    this._start_time = 0;
    this._move_last = 0;
    this._move_size = 80 * 24;
    this.users.next([...this._data.users]);
  }
  addUser(user) {
    this.users.next([
      ...this.users.getValue().filter((u) => u.email !== user.email),
      user
    ]);
    this.user = null;
  }
  removeUser(user) {
    this.users.next(this.users.getValue().filter((u) => u.email !== user.email));
    this.user = null;
  }
  closeAndUpdate() {
    this._dialog_ref.close(true);
  }
  ngAfterViewInit() {
    const date = new Date(this.date);
    this.timeout("init", () => {
      const el = this._container_el.nativeElement.querySelector(`[hour="${date.getHours()}"]`);
      if (el) {
        const rect = this._container_el.nativeElement.getBoundingClientRect();
        const el_rect = el.getBoundingClientRect();
        this._container_el.nativeElement.scrollTo(el_rect.left - 128 - rect.left, 0);
      }
      this.onScroll();
    }, 300);
  }
  onScroll() {
    this.offset_x = this._container_el.nativeElement.scrollLeft;
    this.offset_y = this._container_el.nativeElement.scrollTop;
  }
  startMovePeriod(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.move_time = true;
    this._start_time = this.date;
    event instanceof MouseEvent ? this.subscription("on_move", this._renderer.listen("window", "mousemove", (e) => this._onMovePeriod(e))) : this.subscription("on_move", this._renderer.listen("window", "touchmove", (e) => this._onMovePeriod(e)));
    event instanceof MouseEvent ? this.subscription("on_move_end", this._renderer.listen("window", "mouseup", () => this._onMoveEnd())) : this.subscription("on_move_end", this._renderer.listen("window", "touchend", () => this._onMoveEnd()));
  }
  startMoveDuration(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this._start_time = this.duration;
    event instanceof MouseEvent ? this.subscription("on_move", this._renderer.listen("window", "mousemove", (e) => this._onMoveDuration(e))) : this.subscription("on_move", this._renderer.listen("window", "touchmove", (e) => this._onMoveDuration(e)));
    event instanceof MouseEvent ? this.subscription("on_move_end", this._renderer.listen("window", "mouseup", () => this._onMoveEnd())) : this.subscription("on_move_end", this._renderer.listen("window", "touchend", () => this._onMoveEnd()));
  }
  _onMovePeriod(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      const old_date = this.date;
      this.date = addMinutes(this._start_time, change_min).valueOf();
      if (this.date < Date.now())
        this.date = old_date;
    }
  }
  _onMoveDuration(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      this.duration = Math.max(30, this._start_time + change_min);
    }
  }
  _onMoveEnd() {
    this.unsub("on_move");
    this.unsub("on_move_end");
    this._move_last = 0;
    this.move_time = false;
  }
};
_FindAvailabilityModalComponent.\u0275fac = function FindAvailabilityModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FindAvailabilityModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(MatDialogRef));
};
_FindAvailabilityModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAvailabilityModalComponent, selectors: [["find-availability-modal"]], viewQuery: function FindAvailabilityModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._container_el = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 45, vars: 31, consts: [["container", ""], [1, "relative", "flex", "items-center", "justify-center", "p-4"], [1, "text-center"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-1/2", "left-1", "-translate-y-1/2"], [1, "flex", "flex-col", "h-[calc(100vh-7rem)]", "sm:h-[65vh]", "overflow-hidden"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "space-y-2", "sm:space-y-0", "sm:space-x-2", "p-2"], [1, "max-h-[3.25rem]", "flex-1", 3, "ngModelChange", "ngModel"], [1, "grid", "flex-1", "h-1/2", "w-full", "border-t", "border-base-200", "relative", "overflow-hidden", "divide-x", "divide-y", "divide-base-200", "max-w-[100vw]", "sm:max-w-[80vw]"], ["times", "", 1, "col-start-2", "h-10", "flex", "overflow-hidden", "border-l", "border-base-200"], ["hour", "", "class", "relative border-r border-base-200 h-10 min-w-[5rem] p-2", 3, "left", 4, "ngFor", "ngForOf"], ["users", "", 1, "row-start-2", "w-24", "overflow-hidden"], ["host", "", 1, "flex", "flex-col", "items-center", "justify-center", "h-32", "w-24", "relative", "border-b", "border-base-200", "py-2"], [1, "text-2xl", 3, "user"], [1, "text-xs", "break-words", "overflow-hidden", "max-w-full", "px-2", "text-center"], ["person", "", "class", "flex flex-col items-center justify-center h-32 w-24 relative border-b border-base-200 py-2", 3, "top", 4, "ngFor", "ngForOf"], ["blocks", "", 1, "relative", "row-start-2", "overflow-hidden"], ["fixed", "", 1, "absolute", "inset-0", "flex", "overflow-hidden"], ["divider", "", "class", "relative h-full min-w-[5rem] border-l border-base-200", 3, "left", 4, "ngFor", "ngForOf"], ["selection", "", 1, "absolute", "inset-y-0", "!border-x-2", "!border-info", "z-20", "cursor-grab", "active:cursor-grabbing", 3, "mousedown", "touchstart"], [1, "absolute", "inset-0", "bg-info", "opacity-30"], ["handle", "", 1, "absolute", "top-1/2", "-left-px", "-translate-x-1/2", "-translate-y-1/2", "h-3", "w-3", "rounded-full", "bg-info"], ["handle", "", 1, "absolute", "top-1/2", "-right-px", "translate-x-1/2", "-translate-y-1/2", "h-3", "w-3", "rounded-full", "bg-info", "hover:h-4", "hover:w-4", "active:bg-secondary", 3, "mousedown", "touchstart"], [1, "bg-base-100", "border", "border-base-200", "p-2", "absolute", "top-2", "left-1/2", "-translate-x-1/2", "shadow", "text-xs", "whitespace-nowrap", "rounded"], ["class", "bg-base-100 border border-base-200 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded", 4, "ngIf"], ["scroll", "", 1, "absolute", "inset-0", "overflow-auto", 3, "scroll"], [1, "pointer-events-none", 3, "user", "date", "availability"], ["class", "pointer-events-none", 3, "user", "date", "availability", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], ["hour", "", 1, "relative", "border-r", "border-base-200", "h-10", "min-w-[5rem]", "p-2"], ["person", "", 1, "flex", "flex-col", "items-center", "justify-center", "h-32", "w-24", "relative", "border-b", "border-base-200", "py-2"], [1, "text-xs", "break-words", "max-w-full", "px-2", "text-center"], ["icon", "", 1, "absolute", "-top-1", "-left-1", 3, "click"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200"], [1, "bg-base-100", "border", "border-base-200", "p-2", "absolute", "top-12", "left-1/2", "-translate-x-1/2", "shadow", "text-xs", "whitespace-nowrap", "rounded"]], template: function FindAvailabilityModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2, "Find Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 4)(7, "div", 5)(8, "a-date-field", 6);
    \u0275\u0275twoWayListener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.date, $event) || (ctx.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.on_change.next(ctx.on_change.getValue() + 1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a-user-search-field", 6);
    \u0275\u0275twoWayListener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.user, $event) || (ctx.user = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addUser($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
    \u0275\u0275template(12, FindAvailabilityModalComponent_div_12_Template, 2, 5, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
    \u0275\u0275element(15, "a-user-avatar", 12);
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, FindAvailabilityModalComponent_div_18_Template, 7, 4, "div", 14);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15)(21, "div", 16);
    \u0275\u0275template(22, FindAvailabilityModalComponent_div_22_Template, 1, 3, "div", 17);
    \u0275\u0275elementStart(23, "div", 18);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    });
    \u0275\u0275element(24, "div", 19)(25, "div", 20);
    \u0275\u0275elementStart(26, "div", 21);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 22);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "duration");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, FindAvailabilityModalComponent_div_30_Template, 3, 4, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 24, 0);
    \u0275\u0275listener("scroll", function FindAvailabilityModalComponent_Template_div_scroll_31_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll());
    });
    \u0275\u0275element(33, "user-availability-list", 25);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275pipe(35, "async");
    \u0275\u0275template(36, FindAvailabilityModalComponent_user_availability_list_36_Template, 3, 8, "user-availability-list", 26);
    \u0275\u0275pipe(37, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "footer", 27)(39, "button", 28)(40, "div", 29)(41, "app-icon", 30);
    \u0275\u0275text(42, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 31);
    \u0275\u0275text(44, "Back to form");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.date);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.user);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("top", -ctx.offset_y + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx.host);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.host.name || ctx.host.email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(19, 20, ctx.users));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.hours);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", "calc(" + ctx.selection_left + "rem - " + ctx.offset_x + "px)")("width", ctx.selection_width + "rem");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 22, ctx.duration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.move_time);
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.host)("date", ctx.date)("availability", \u0275\u0275pipeBind1(34, 24, ctx.availability) ? \u0275\u0275pipeBind1(35, 26, ctx.availability)[ctx.host.email] : \u0275\u0275pureFunction0(30, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(37, 28, ctx.users));
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", true);
  }
}, styles: ["\n\n.grid[_ngcontent-%COMP%] {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true][_ngcontent-%COMP%], \n[disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%] {\n  background: var(--b3) !important;\n  pointer-events: none;\n}\n[disabled=true][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */"] });
var FindAvailabilityModalComponent = _FindAvailabilityModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAvailabilityModalComponent, { className: "FindAvailabilityModalComponent", filePath: "libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts", lineNumber: 243 });
})();

// libs/users/src/lib/find-availability-modal/user-availability.component.ts
function UserAvailabilityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", event_r1.start + "%")("width", event_r1.size + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 6, event_r1.date, "shortTime"), " - ", \u0275\u0275pipeBind2(4, 9, event_r1.date.valueOf() + event_r1.duration * 60 * 1e3, "shortTime"), " ");
  }
}
var _UserAvailabilityComponent = class _UserAvailabilityComponent {
  constructor() {
    this.availability = [];
    this.date = Date.now();
  }
};
_UserAvailabilityComponent.\u0275fac = function UserAvailabilityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserAvailabilityComponent)();
};
_UserAvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvailabilityComponent, selectors: [["user-availability-list"]], inputs: { user: "user", availability: "availability", date: "date" }, decls: 2, vars: 1, consts: [[1, "relative", "w-[120rem]", "h-32", "inset-y-0", "border-b", "border-base-200"], ["event", "", "class", "absolute inset-y-0 bg-error text-white p-2 overflow-hidden border border-red-700 rounded", 3, "left", "width", 4, "ngFor", "ngForOf"], ["event", "", 1, "absolute", "inset-y-0", "bg-error", "text-white", "p-2", "overflow-hidden", "border", "border-red-700", "rounded"], [1, "text-xs", "max-w-full"]], template: function UserAvailabilityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, UserAvailabilityComponent_div_1_Template, 5, 12, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.availability);
  }
}, dependencies: [NgForOf, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */"] });
var UserAvailabilityComponent = _UserAvailabilityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvailabilityComponent, { className: "UserAvailabilityComponent", filePath: "libs/users/src/lib/find-availability-modal/user-availability.component.ts", lineNumber: 43 });
})();

// libs/users/src/lib/users.module.ts
var _SharedUsersModule = class _SharedUsersModule {
};
_SharedUsersModule.\u0275fac = function SharedUsersModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedUsersModule)();
};
_SharedUsersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedUsersModule });
_SharedUsersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatDialogModule,
  FormFieldsModule,
  ComponentsModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatMenuModule
] });
var SharedUsersModule = _SharedUsersModule;
\u0275\u0275setComponentScope(WFHSettingsModalComponent, [NgForOf, NgIf, NgControlStatus, NgModel, MatDialogClose, TimeFieldComponent, IconComponent, MatOption, MatFormField, MatSelect, MatRipple, MatProgressSpinner, MatCheckbox], [DatePipe]);
\u0275\u0275setComponentScope(FindAvailabilityModalComponent, [NgForOf, NgIf, NgControlStatus, NgModel, MatDialogClose, DateFieldComponent, UserSearchFieldComponent, IconComponent, UserAvatarComponent, MatRipple, UserAvailabilityComponent], [AsyncPipe, DatePipe, DurationPipe]);

export {
  UserPipe,
  SharedUsersModule
};
//# sourceMappingURL=chunk-GOLRZLQR.js.map
