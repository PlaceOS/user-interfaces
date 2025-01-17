import {
  ScheduleStateService
} from "./chunk-6QXUXNMD.js";
import "./chunk-GSJ6HIM3.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  Booking,
  BookingFormService,
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DefaultValueAccessor,
  EventFormService,
  FooterMenuComponent,
  FormsModule,
  IconComponent,
  MapLocateModalComponent,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDialog,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSuffix,
  MatTooltip,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SanitizePipe,
  ScrollingModule,
  SettingsService,
  SharedComponentModule,
  SharedUsersModule,
  SlicePipe,
  SpacePipe,
  SpacesService,
  TopbarComponent,
  UserAvatarComponent,
  UserPipe,
  addDays,
  addMinutes,
  addMonths,
  currentUser,
  formatDuration,
  isAfter,
  isSameDay,
  map,
  newCalendarEventFromBooking,
  notifyError,
  notifySuccess,
  openConfirmModal,
  rejectBooking,
  removeBooking,
  removeEvent,
  showBooking,
  showEvent,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-IM5PHJ7W.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// apps/workplace/src/app/schedule/schedule-list-item.component.ts
var _c0 = ["schedule-list-item", ""];
var _c1 = (a0, a1) => ["/schedule", "view", a0, a1];
function ScheduleListItemComponent_ng_container_0_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" No events for ", \u0275\u0275pipeBind2(2, 1, ctx_r0.item.date, "longDate"), " ");
  }
}
function ScheduleListItemComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ScheduleListItemComponent_ng_container_0_div_1_div_4_Template, 3, 4, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 3, ctx_r0.item.date, "longDate"), " (", ctx_r0.item.duration, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.item.duration);
  }
}
function ScheduleListItemComponent_ng_container_0_a_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "app-icon", 18);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, (ctx_r0.item == null ? null : ctx_r0.item.location) || (ctx_r0.item == null ? null : ctx_r0.item.description), 0, 255), " ");
  }
}
function ScheduleListItemComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275pipe(1, "space");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "space");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275element(7, "app-icon", 11);
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ScheduleListItemComponent_ng_container_0_a_2_div_16_Template, 6, 5, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-50", ctx_r0.has_ended);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(25, _c1, (ctx_r0.item == null ? null : ctx_r0.item.id) + (((tmp_3_0 = \u0275\u0275pipeBind1(2, 16, \u0275\u0275pipeBind1(1, 14, ctx_r0.item == null ? null : ctx_r0.item.system == null ? null : ctx_r0.item.system.email))) == null ? null : tmp_3_0.id) ? "|" + ((tmp_3_0 = \u0275\u0275pipeBind1(4, 20, \u0275\u0275pipeBind1(3, 18, ctx_r0.item == null ? null : ctx_r0.item.system == null ? null : ctx_r0.item.system.email))) == null ? null : tmp_3_0.id) : ""), ctx_r0.type));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("bg-success", ctx_r0.status === "approved")("bg-warning", ctx_r0.status === "tentative")("bg-error", ctx_r0.status === "declined");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.item == null ? null : ctx_r0.item.all_day) ? "All Day" : \u0275\u0275pipeBind2(10, 22, ctx_r0.item == null ? null : ctx_r0.item.date, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" (", ctx_r0.status, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.item == null ? null : ctx_r0.item.title) || "Untitled Event", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.item == null ? null : ctx_r0.item.location) || (ctx_r0.item == null ? null : ctx_r0.item.description));
  }
}
function ScheduleListItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 1);
    \u0275\u0275template(1, ScheduleListItemComponent_ng_container_0_div_1_Template, 5, 6, "div", 2)(2, ScheduleListItemComponent_ng_container_0_a_2_Template, 17, 28, "a", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSwitch", ctx_r0.item == null ? null : ctx_r0.item.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "date");
  }
}
var _ScheduleListItemComponent = class _ScheduleListItemComponent {
  get type() {
    return this.item instanceof Booking ? "booking" : "event";
  }
  get has_ended() {
    return !this.item || this.item.id === "date" || isAfter(/* @__PURE__ */ new Date(), this.item.date + this.item.duration * 60 * 1e3);
  }
  get icon() {
    if (this.status === "declined")
      return "event_busy";
    if (this.item.asset_id) {
      switch (this.item.booking_type) {
        case "room":
          return { content: "meeting_room" };
        case "desk":
          return { type: "img", src: "assets/img/desk.svg" };
        case "parking":
          return { content: "local_parking" };
      }
    }
    return { content: "event" };
  }
  get status() {
    if (!this.item || this.item.id === "date")
      return "declined";
    return this.item.status;
  }
};
_ScheduleListItemComponent.\u0275fac = function ScheduleListItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleListItemComponent)();
};
_ScheduleListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleListItemComponent, selectors: [["", "schedule-list-item", ""]], inputs: { item: "item" }, attrs: _c0, decls: 1, vars: 1, consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["date", "", 4, "ngSwitchCase"], ["btn", "", "matRipple", "", "item", "", "class", "rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-base-100 hover:shadow p-0", 3, "opacity-50", "routerLink", 4, "ngSwitchDefault"], ["date", ""], [1, "mx-4", "w-full", "h-12", "text-xl", "flex", "items-center"], ["class", "mx-4 w-full h-10 text-lg text-center font-normal opacity-60", 4, "ngIf"], [1, "mx-4", "w-full", "h-10", "text-lg", "text-center", "font-normal", "opacity-60"], ["btn", "", "matRipple", "", "item", "", 1, "rounded-none", "my-1", "mx-4", "w-[calc(100%-2rem)]", "h-20", "bg-base-100", "hover:shadow", "p-0", 3, "routerLink"], [1, "flex", "items-center", "border", "border-base-200"], ["status", "", 1, "h-20", "w-20", "flex", "flex-col", "items-center", "justify-center", "text-white", "leading-tight"], [1, "text-2xl", 3, "icon"], [1, "font-normal"], [1, "capitalize", "text-xs", "font-medium"], [1, "flex-1", "flex", "flex-col", "text-left", "p-2"], [1, "text-xl", "pl-1"], ["class", "flex items-center font-normal", 4, "ngIf"], [1, "flex", "items-center", "font-normal"], [1, "text-lg", "mr-1"]], template: function ScheduleListItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScheduleListItemComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.item);
  }
}, dependencies: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, IconComponent, MatRipple, RouterLink, AsyncPipe, SlicePipe, DatePipe, SpacePipe], encapsulation: 2 });
var ScheduleListItemComponent = _ScheduleListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleListItemComponent, { className: "ScheduleListItemComponent", filePath: "apps/workplace/src/app/schedule/schedule-list-item.component.ts", lineNumber: 81 });
})();

// apps/workplace/src/app/schedule/schedule-list.component.ts
function ScheduleListComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const cal_r2 = ctx.$implicit;
    \u0275\u0275property("value", cal_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_6_0 = \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, cal_r2.id))) == null ? null : tmp_6_0.name) || cal_r2.id);
  }
}
function ScheduleListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("item", item_r3);
  }
}
function ScheduleListComponent_mat_progress_bar_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 23);
  }
}
var _ScheduleListComponent = class _ScheduleListComponent {
  get user() {
    return currentUser();
  }
  constructor(_state) {
    this._state = _state;
    this.today = /* @__PURE__ */ new Date();
    this.max_date = addMonths(this.today, 4);
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.calendars = this._state.calendars;
    this.date = this.options.pipe(map((_) => new Date(_.start)));
    this.setOptions = (o) => this._state.setOptions(o);
    this.event_list = this._state.events.pipe(map((list) => {
      let items = [];
      let start = new Date(this.today);
      while (start < this.max_date) {
        const found = list.filter((_) => isSameDay(start, _.date));
        items = found.length ? [
          ...items,
          {
            id: "date",
            date: start.valueOf(),
            duration: found.length
          },
          ...found
        ] : [
          ...items,
          { id: "date", date: start.valueOf(), duration: 0 }
        ];
        start = addDays(start, 1);
      }
      return items;
    }));
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  setDate(date) {
    this._state.setOptions({ start: date.valueOf() });
  }
  updateDate(index) {
    return __async(this, null, function* () {
      const events = (yield this.event_list.pipe(take(1)).toPromise()) || [];
      const event = events[index] || {};
      if (event)
        this.setDate(event.date);
    });
  }
  scrollTo(date) {
    return __async(this, null, function* () {
      const events = yield this.event_list.pipe(take(1)).toPromise();
      const index = events.findIndex((_) => _.id === "date" && isSameDay(_.date, date));
      if (index >= 0 && this._viewport) {
        let position = 0;
        for (let i = 0; i < events.length && i < index; i++) {
          if (events[i].id === "date" && events[i].duration > 0)
            position += 88 / 88;
          else
            position += 1;
        }
        this._viewport.scrollTo({
          top: Math.round(position * 88),
          behavior: "smooth"
        });
      }
      this.setDate(date);
    });
  }
  /* istanbul ignore next */
  trackByFn(idx, event) {
    return event ? `${event.id}|${event.date}` : void 0;
  }
};
_ScheduleListComponent.\u0275fac = function ScheduleListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleListComponent)(\u0275\u0275directiveInject(ScheduleStateService));
};
_ScheduleListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleListComponent, selectors: [["schedule-list"]], viewQuery: function ScheduleListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(CdkVirtualScrollViewport, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._viewport = _t.first);
  }
}, decls: 35, vars: 22, consts: [["dateMenu", ""], ["picker", ""], ["legend", "matMenu"], [1, "w-full", "h-16", "flex", "items-center", "justify-between", "bg-base-100", "border-b", "border-base-200", "shadow", "p-2"], ["appearance", "outline", 1, "h-[3.25rem]"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-2"], ["matRipple", "", 1, "clear", "underline", 3, "matMenuTriggerFor"], ["icon", "", 1, "relative"], ["matInput", "", 1, "opacity-0", "absolute", "inset-0", 3, "ngModelChange", "ngModel", "matDatepicker", "min", "max"], ["matSuffix", "", 1, "opacity-0", "absolute", "inset-0", 3, "for"], [1, "w-full", "flex-1", "overflow-hidden", "bg-base-200"], ["itemSize", "88", 1, "h-full", "w-full", 3, "scrolledIndexChange"], ["schedule-list-item", "", 3, "item", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], ["mode", "indeterminate", "class", "w-full", 4, "ngIf"], ["xPosition", "before"], [1, "flex", "items-center", "px-4", "py-2", "hover:bg-neutral"], [1, "bg-success", "h-2", "w-2", "rounded-full", "mr-4"], [1, "bg-warning", "h-2", "w-2", "rounded-full", "mr-4"], [1, "bg-error", "h-2", "w-2", "rounded-full", "mr-4"], [3, "value"], ["schedule-list-item", "", 3, "item"], ["mode", "indeterminate", 1, "w-full"]], template: function ScheduleListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-form-field", 4)(2, "mat-select", 5);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function ScheduleListComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setOptions({ calendar: $event }));
    });
    \u0275\u0275template(4, ScheduleListComponent_mat_option_4_Template, 4, 6, "mat-option", 6);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "button", 8);
    \u0275\u0275text(8, " Legend ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9, 0)(11, "app-icon");
    \u0275\u0275text(12, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 10);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275listener("ngModelChange", function ScheduleListComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scrollTo($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "mat-datepicker-toggle", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12)(19, "cdk-virtual-scroll-viewport", 13);
    \u0275\u0275listener("scrolledIndexChange", function ScheduleListComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateDate($event));
    });
    \u0275\u0275template(20, ScheduleListComponent_div_20_Template, 1, 1, "div", 14);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ScheduleListComponent_mat_progress_bar_22_Template, 1, 0, "mat-progress-bar", 15);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementStart(24, "mat-menu", 16, 2)(26, "div", 17);
    \u0275\u0275element(27, "div", 18);
    \u0275\u0275text(28, " Approved ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17);
    \u0275\u0275element(30, "div", 19);
    \u0275\u0275text(31, " Tentative ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 17);
    \u0275\u0275element(33, "div", 20);
    \u0275\u0275text(34, " Declined ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const picker_r4 = \u0275\u0275reference(17);
    const legend_r5 = \u0275\u0275reference(25);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(3, 12, ctx.options)) == null ? null : tmp_3_0.calendar)("placeholder", ctx.user == null ? null : ctx.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 14, ctx.calendars));
    \u0275\u0275advance(3);
    \u0275\u0275property("matMenuTriggerFor", legend_r5);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(14, 16, ctx.date))("matDatepicker", picker_r4)("min", ctx.today)("max", ctx.max_date);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", picker_r4);
    \u0275\u0275advance(5);
    \u0275\u0275property("cdkVirtualForOf", \u0275\u0275pipeBind1(21, 18, ctx.event_list))("cdkVirtualForTrackBy", ctx.trackByFn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 20, ctx.loading));
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatOption, MatMenu, MatMenuTrigger, MatFormField, MatSuffix, MatSelect, MatRipple, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatInput, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, MatProgressBar, ScheduleListItemComponent, AsyncPipe, UserPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule-list.component.css.map */"] });
var ScheduleListComponent = _ScheduleListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleListComponent, { className: "ScheduleListComponent", filePath: "apps/workplace/src/app/schedule/schedule-list.component.ts", lineNumber: 105 });
})();

// apps/workplace/src/app/schedule/schedule-view-booking.component.ts
var _c02 = () => ["/schedule"];
function ScheduleViewBookingComponent_div_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" at ", \u0275\u0275pipeBind2(2, 2, ctx_r0.event.date, "shortTime"), " ~ ", \u0275\u0275pipeBind2(3, 5, ctx_r0.event.date + ctx_r0.event.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function ScheduleViewBookingComponent_div_8_div_17_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ScheduleViewBookingComponent_div_8_div_17_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewLocation());
    });
    \u0275\u0275text(1, " Map ");
    \u0275\u0275elementEnd();
  }
}
function ScheduleViewBookingComponent_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 11)(2, "app-icon");
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ScheduleViewBookingComponent_div_8_div_17_button_6_Template, 2, 0, "button", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.event.description || "<No Asset>", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.extension_data.map_id && ctx_r0.can_view_location);
  }
}
function ScheduleViewBookingComponent_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275listener("click", function ScheduleViewBookingComponent_div_8_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.is_host ? "Delete" : "Decline", " Event ");
  }
}
function ScheduleViewBookingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h2", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "app-icon");
    \u0275\u0275text(6, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275template(10, ScheduleViewBookingComponent_div_8_span_10_Template, 4, 8, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 11)(13, "app-icon");
    \u0275\u0275text(14, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ScheduleViewBookingComponent_div_8_div_17_Template, 7, 2, "div", 15)(18, ScheduleViewBookingComponent_div_8_div_18_Template, 3, 2, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.event.title, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 6, ctx_r0.event.date, "longDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.event.all_day && ctx_r0.event.duration < 12 * 60);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", !ctx_r0.event.all_day && ctx_r0.event.duration < 12 * 60 ? ctx_r0.duration : "All Day", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.asset_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.has_ended && ctx_r0.is_host);
  }
}
function ScheduleViewBookingComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "mat-spinner", 22);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading booking data...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
var _ScheduleViewBookingComponent = class _ScheduleViewBookingComponent extends AsyncHandler {
  get is_host() {
    return this.event?.user_email === currentUser()?.email;
  }
  get can_view_location() {
    return !this._settings.get("app.no_maps");
  }
  get duration() {
    return this.event.all_day || this.event.duration >= 12 * 60 ? "All Day" : formatDuration({
      hours: Math.floor(this.event?.duration / 60),
      minutes: this.event?.duration % 60
    });
  }
  get has_ended() {
    return this.event && isAfter(/* @__PURE__ */ new Date(), addMinutes(this.event.date, this.event.duration));
  }
  constructor(_route, _router, _dialog, _bookings, _settings) {
    super();
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._bookings = _bookings;
    this._settings = _settings;
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => __async(this, null, function* () {
      if (params.has("id")) {
        this.event = yield showBooking(params.get("id")).toPromise().catch(() => null);
      }
    })));
    this.timeout("return", () => !this.event ? this._router.navigate(["/schedule"]) : "", 8 * 1e3);
  }
  viewLocation() {
    this._dialog.open(MapLocateModalComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: {
        item: {
          id: this.event.asset_id,
          map_id: this.event.extension_data.map_id,
          name: this.event.description,
          zones: this.event.zones
        }
      }
    });
  }
  editEvent() {
    this._bookings.newForm(this.event);
    this._router.navigate(["/book", "desks", "form"]);
  }
  confirmDelete() {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: `${this.is_host ? "Delete" : "Decline"} event`,
        content: `Are you sure you wish to ${this.is_host ? "delete" : "decline"} this event?`,
        icon: { content: this.is_host ? "delete" : "event_busy" }
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.loading("Removing booking...");
      yield rejectBooking(this.event.id).toPromise().catch((e) => {
        details.loading("");
        notifyError(`Error removing booking. ${e}`);
        throw e;
      });
      notifySuccess("Successfully removed booking.");
      this._router.navigate(["/schedule"]);
      details.close();
    });
  }
};
_ScheduleViewBookingComponent.\u0275fac = function ScheduleViewBookingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleViewBookingComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService));
};
_ScheduleViewBookingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleViewBookingComponent, selectors: [["schedule-view-booking"]], inputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 4, consts: [["load_state", ""], ["topbar", "", 1, ""], ["btn", "", "matRipple", "", 1, "clear", "h-[2.75rem]", "text-white", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "text-xl"], [1, "ml-2", "mx-4"], [1, "flex-1", "w-full", "flex", "flex-col", "items-center", "bg-base-200", "p-4", "overflow-auto"], ["class", "max-w-full w-[28rem] bg-base-100 border border-base-200 px-4 pb-4 divide-y divide-base-200", 4, "ngIf", "ngIfElse"], [1, "max-w-full", "w-[28rem]", "bg-base-100", "border", "border-base-200", "px-4", "pb-4", "divide-y", "divide-base-200"], [1, "text-xl", "uppercase", "font-medium", "w-full", "my-4"], [1, "flex", "items-center", "py-2", "space-x-2", "w-full", "!border-none"], [1, "p-2", "rounded-full", "bg-base-200", "mr-2"], [1, "flex-1", "truncate"], [4, "ngIf"], [1, "flex", "items-center", "py-2", "space-x-2", "w-full"], ["class", "flex items-center py-2 space-x-2 w-full", 4, "ngIf"], ["class", "flex items-center justify-center space-x-2 mt-4 !border-none", 4, "ngIf"], ["matRipple", "", "locate", "", "class", "bg-transparent border-none underline text-black", 3, "click", 4, "ngIf"], ["matRipple", "", "locate", "", 1, "bg-transparent", "border-none", "underline", "text-black", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "mt-4", "!border-none"], ["matRipple", "", "remove", "", 1, "w-32", "error", "inverse", 3, "click", "disabled"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function ScheduleViewBookingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 2)(2, "div", 3)(3, "app-icon", 4);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "Back");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, ScheduleViewBookingComponent_div_8_Template, 19, 9, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ScheduleViewBookingComponent_ng_template_9_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r4 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c02));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.event)("ngIfElse", load_state_r4);
  }
}, dependencies: [NgIf, IconComponent, MatRipple, MatProgressSpinner, RouterLink, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[topbar][_ngcontent-%COMP%] {\n  background-color: #00539f;\n}\n[list][_ngcontent-%COMP%] {\n  transition: height 200ms;\n}\n/*# sourceMappingURL=schedule-view-booking.component.css.map */"] });
var ScheduleViewBookingComponent = _ScheduleViewBookingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleViewBookingComponent, { className: "ScheduleViewBookingComponent", filePath: "apps/workplace/src/app/schedule/schedule-view-booking.component.ts", lineNumber: 142 });
})();

// apps/workplace/src/app/schedule/schedule-view-event.component.ts
var _c03 = () => ["/schedule"];
function ScheduleViewEventComponent_div_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("at ", \u0275\u0275pipeBind2(2, 2, ctx_r1.event.date, "shortTime"), " ~ ", \u0275\u0275pipeBind2(3, 5, ctx_r1.event.date + ctx_r1.event.duration * 60 * 1e3, "shortTime"), "");
  }
}
function ScheduleViewEventComponent_div_8_div_27_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ScheduleViewEventComponent_div_8_div_27_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const space_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewLocation(space_r4));
    });
    \u0275\u0275text(1, " Map ");
    \u0275\u0275elementEnd();
  }
}
function ScheduleViewEventComponent_div_8_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 25);
    \u0275\u0275template(4, ScheduleViewEventComponent_div_8_div_27_button_4_Template, 2, 0, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", space_r4.display_name || space_r4.name, " [", (space_r4.level == null ? null : space_r4.level.display_name) || (space_r4.level == null ? null : space_r4.level.name), "] ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", space_r4.response_status === "accepted")("bg-warning", space_r4.response_status === "tentative")("bg-error", space_r4.response_status === "declined");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_view_location);
  }
}
function ScheduleViewEventComponent_div_8_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "a-user-avatar", 29);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.name || user_r5.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", user_r5.response_status === "accepted")("bg-warning", user_r5.response_status === "tentative")("bg-error", user_r5.response_status === "declined");
  }
}
function ScheduleViewEventComponent_div_8_div_39_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r1.optionsFor(item_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r7.options.length, " option", item_r7.options.length === 1 ? "" : "s", " selected ");
  }
}
function ScheduleViewEventComponent_div_8_div_39_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ScheduleViewEventComponent_div_8_div_39_div_11_div_4_Template, 2, 3, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.options.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, item_r7.total_cost / 100), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r7.quantity, " ");
  }
}
function ScheduleViewEventComponent_div_8_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 31)(2, "div", 16)(3, "div", 11)(4, "app-icon");
    \u0275\u0275text(5, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 32);
    \u0275\u0275listener("click", function ScheduleViewEventComponent_div_8_div_39_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.show_catering = !ctx_r1.show_catering);
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275template(11, ScheduleViewEventComponent_div_8_div_39_div_11_Template, 10, 6, "div", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.event.extension_data.catering[0] == null ? null : ctx_r1.event.extension_data.catering[0].item_count) || 0, " Catering Item(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_people ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", !ctx_r1.show_catering ? "0" : (ctx_r1.event.extension_data.catering[0] == null ? null : ctx_r1.event.extension_data.catering[0].items.length) * 3 + "rem");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.event.extension_data.catering[0] == null ? null : ctx_r1.event.extension_data.catering[0].items);
  }
}
function ScheduleViewEventComponent_div_8_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 11)(2, "app-icon");
    \u0275\u0275text(3, "event_note");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "div", 40);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 1, ctx_r1.event.body), \u0275\u0275sanitizeHtml);
  }
}
function ScheduleViewEventComponent_div_8_div_42_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ScheduleViewEventComponent_div_8_div_42_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editEvent());
    });
    \u0275\u0275text(1, " Edit Event ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function ScheduleViewEventComponent_div_8_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, ScheduleViewEventComponent_div_8_div_42_button_1_Template, 2, 1, "button", 42);
    \u0275\u0275elementStart(2, "button", 43);
    \u0275\u0275listener("click", function ScheduleViewEventComponent_div_8_div_42_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.is_host);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.is_host ? "Delete" : "Decline", " Event ");
  }
}
function ScheduleViewEventComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h2", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "app-icon");
    \u0275\u0275text(6, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275template(10, ScheduleViewEventComponent_div_8_span_10_Template, 4, 8, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 11)(13, "app-icon");
    \u0275\u0275text(14, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 15)(18, "div", 16)(19, "div", 11)(20, "app-icon");
    \u0275\u0275text(21, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 17);
    \u0275\u0275listener("click", function ScheduleViewEventComponent_div_8_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_spaces = !ctx_r1.show_spaces);
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 18);
    \u0275\u0275template(27, ScheduleViewEventComponent_div_8_div_27_Template, 5, 9, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 15)(29, "div", 16)(30, "div", 11)(31, "app-icon");
    \u0275\u0275text(32, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 12);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 17);
    \u0275\u0275listener("click", function ScheduleViewEventComponent_div_8_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_people = !ctx_r1.show_people);
    });
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 18);
    \u0275\u0275template(38, ScheduleViewEventComponent_div_8_div_38_Template, 5, 8, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, ScheduleViewEventComponent_div_8_div_39_Template, 12, 5, "div", 21);
    \u0275\u0275elementStart(40, "div", 15);
    \u0275\u0275template(41, ScheduleViewEventComponent_div_8_div_41_Template, 6, 3, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, ScheduleViewEventComponent_div_8_div_42_Template, 4, 3, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.event.title, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 19, ctx_r1.event.date, "longDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.event.all_day);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.duration);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.event.resources == null ? null : ctx_r1.event.resources.length, " Space(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r1.event.resources == null ? null : ctx_r1.event.resources.length));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_spaces ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", !ctx_r1.show_spaces ? "0" : (ctx_r1.event.resources == null ? null : ctx_r1.event.resources.length) * 2.5 + "rem");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.event.resources);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.event.attendees == null ? null : ctx_r1.event.attendees.length) || 0, " Attendee(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r1.event.attendees == null ? null : ctx_r1.event.attendees.length));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_people ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", !ctx_r1.show_people ? "0" : ctx_r1.event.attendees.length * 3 + "rem");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.event.attendees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.event.extension_data.catering == null ? null : ctx_r1.event.extension_data.catering.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.event.body);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.event.state !== "done");
  }
}
function ScheduleViewEventComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "mat-spinner", 46);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading event data...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
var _ScheduleViewEventComponent = class _ScheduleViewEventComponent extends AsyncHandler {
  get is_host() {
    return this.event?.host;
  }
  get can_view_location() {
    return !this._settings.get("app.no_maps");
  }
  get duration() {
    return this.event.all_day ? "All Day" : formatDuration({
      hours: Math.floor(this.event?.duration / 60),
      minutes: this.event?.duration % 60
    });
  }
  constructor(_route, _router, _dialog, _events, _spaces, _settings) {
    super();
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._events = _events;
    this._spaces = _spaces;
    this._settings = _settings;
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => __async(this, null, function* () {
      if (params.has("id")) {
        const parts = params.get("id").split("|");
        this.event = this._settings.get("app.events.use_bookings") ? yield showBooking(parts[0]).pipe(map((_) => newCalendarEventFromBooking(_))).toPromise() : yield showEvent(parts[0], {
          system_id: parts[1]
        }).toPromise();
      }
    })));
    this.timeout("return", () => !this.event ? this._router.navigate(["/schedule"]) : "", 8 * 1e3);
  }
  optionsFor(item) {
    return item.options.map((i) => i.name).join("\n");
  }
  viewLocation(space) {
    space = this._spaces.find(space.id || space.email) || space;
    this._dialog.open(MapLocateModalComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: { item: space }
    });
  }
  editEvent() {
    if ("event_start" in this.event) {
      this._events.newForm(this.event);
      this._router.navigate(["/book", "spaces", "form"]);
    }
  }
  confirmDelete() {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: `${this.is_host ? "Delete" : "Decline"} event`,
        content: `Are you sure you wish to ${this.is_host ? "delete" : "decline"} this event?`,
        icon: { content: this.is_host ? "delete" : "event_busy" }
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.loading("Removing event...");
      yield (this._settings.get("app.events.use_bookings") ? removeBooking : removeEvent)(this.event.id).toPromise().catch((e) => {
        details.loading("");
        notifyError(`Error removing event. ${e}`);
        throw e;
      });
      notifySuccess("Successfully removed event.");
      this._router.navigate(["/schedule"]);
      details.close();
    });
  }
};
_ScheduleViewEventComponent.\u0275fac = function ScheduleViewEventComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleViewEventComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(SpacesService), \u0275\u0275directiveInject(SettingsService));
};
_ScheduleViewEventComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleViewEventComponent, selectors: [["schedule-view-event"]], inputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 4, consts: [["load_state", ""], ["topbar", "", 1, ""], ["btn", "", "matRipple", "", 1, "clear", "h-[2.75rem]", "text-white", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "text-xl"], [1, "ml-2", "mx-4"], [1, "flex-1", "w-full", "flex", "flex-col", "items-center", "bg-base-200", "p-4", "overflow-auto"], ["class", "max-w-full w-[28rem] bg-base-100 border border-base-200 px-4 pb-4 divide-y divide-base-200", 4, "ngIf", "ngIfElse"], [1, "max-w-full", "w-[28rem]", "bg-base-100", "border", "border-base-200", "px-4", "pb-4", "divide-y", "divide-base-200"], [1, "text-xl", "uppercase", "font-medium", "w-full", "my-4"], [1, "flex", "items-center", "py-2", "space-x-2", "w-full", "!border-none"], [1, "p-2", "rounded-full", "bg-base-200", "mr-2"], [1, "flex-1", "truncate"], [4, "ngIf"], [1, "flex", "items-center", "py-2", "space-x-2", "w-full"], [1, "w-full"], [1, "flex", "items-center", "py-2", "space-x-2"], ["matRipple", "", 1, "clear", "bg-transparent", "border-none", "underline", 3, "click", "disabled"], ["list", "", 1, "overflow-hidden"], ["class", "flex items-center h-10 pl-12", 4, "ngFor", "ngForOf"], ["class", "flex items-center h-12 pl-12 pr-2 space-x-2", 4, "ngFor", "ngForOf"], ["class", "w-full", 4, "ngIf"], ["class", "flex items-center py-2 space-x-2 w-full", 4, "ngIf"], ["class", "flex items-center justify-center space-x-2 mt-4 !border-none", 4, "ngIf"], [1, "flex", "items-center", "h-10", "pl-12"], [1, "h-2", "w-2", "rounded", "mr-2"], ["matRipple", "", "locate", "", "class", "bg-transparent border-none underline text-black", 3, "click", 4, "ngIf"], ["matRipple", "", "locate", "", 1, "bg-transparent", "border-none", "underline", "text-black", 3, "click"], [1, "flex", "items-center", "h-12", "pl-12", "pr-2", "space-x-2"], [1, "text-sm", 3, "user"], [1, "h-2", "w-2", "rounded", "mr-4"], [1, "border-b", "border-base-200", "w-full"], ["matRipple", "", 1, "clear", "bg-transparent", "border-none", "underline", 3, "click"], ["class", "flex items-center h-12 pl-12 space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "h-12", "pl-12", "space-x-2"], [1, "flex-1", "w-1/2"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [1, "bg-primary", "text-xs", "rounded", "px-4", "py-2", "mx-2", "text-white", "font-medium"], [1, "m-2", "bg-neutral-500", "text-white", "h-8", "w-8", "rounded-full", "flex", "items-center", "justify-center", "text-sm"], [1, "text-xs", "underline", 3, "matTooltip"], ["notes", "", 1, "flex-1", "w-1/2", "overflow-auto", 3, "innerHTML"], [1, "flex", "items-center", "justify-center", "space-x-2", "mt-4", "!border-none"], ["matRipple", "", "edit", "", "class", "w-32", 3, "disabled", "click", 4, "ngIf"], ["matRipple", "", "remove", "", 1, "w-32", "error", "inverse", 3, "click", "disabled"], ["matRipple", "", "edit", "", 1, "w-32", 3, "click", "disabled"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function ScheduleViewEventComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 2)(2, "div", 3)(3, "app-icon", 4);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "Back");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, ScheduleViewEventComponent_div_8_Template, 43, 22, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ScheduleViewEventComponent_ng_template_9_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r10 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c03));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.event)("ngIfElse", load_state_r10);
  }
}, dependencies: [NgForOf, NgIf, IconComponent, UserAvatarComponent, MatRipple, MatProgressSpinner, MatTooltip, RouterLink, CurrencyPipe, DatePipe, SanitizePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[topbar][_ngcontent-%COMP%] {\n  background-color: #00539f;\n}\n[list][_ngcontent-%COMP%] {\n  transition: height 200ms;\n}\n/*# sourceMappingURL=schedule-view-event.component.css.map */"] });
var ScheduleViewEventComponent = _ScheduleViewEventComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleViewEventComponent, { className: "ScheduleViewEventComponent", filePath: "apps/workplace/src/app/schedule/schedule-view-event.component.ts", lineNumber: 328 });
})();

// apps/workplace/src/app/schedule/schedule.component.ts
var _ScheduleComponent = class _ScheduleComponent {
};
_ScheduleComponent.\u0275fac = function ScheduleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleComponent)();
};
_ScheduleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleComponent, selectors: [["schedule"]], decls: 5, vars: 0, consts: [[1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2"], [1, "relative", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"]], template: function ScheduleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "footer-menu");
  }
}, dependencies: [TopbarComponent, FooterMenuComponent, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule.component.css.map */"] });
var ScheduleComponent = _ScheduleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleComponent, { className: "ScheduleComponent", filePath: "apps/workplace/src/app/schedule/schedule.component.ts", lineNumber: 27 });
})();

// apps/workplace/src/app/schedule/schedule.module.ts
var ROUTES = [
  {
    path: "",
    component: ScheduleComponent,
    children: [
      { path: "", component: ScheduleListComponent },
      { path: "view/:id/booking", component: ScheduleViewBookingComponent },
      { path: "view/:id/event", component: ScheduleViewEventComponent }
    ]
  },
  { path: "*", redirectTo: "" }
];
var _AppScheduleModule = class _AppScheduleModule {
};
_AppScheduleModule.\u0275fac = function AppScheduleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppScheduleModule)();
};
_AppScheduleModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppScheduleModule });
_AppScheduleModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  SharedComponentModule,
  SharedUsersModule,
  ScrollingModule,
  RouterModule.forChild(ROUTES)
] });
var AppScheduleModule = _AppScheduleModule;
export {
  AppScheduleModule
};
//# sourceMappingURL=schedule.module-ENJ3LSDR.js.map
