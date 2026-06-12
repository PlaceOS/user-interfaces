import {
  subDays
} from "./chunk-VILWVZCX.js";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "./chunk-YL3BX47R.js";
import {
  FooterMenuComponent,
  ScheduleStateService,
  TopbarComponent
} from "./chunk-ZLUBY3U3.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BOOKING_TYPE_COLORS,
  Booking,
  BookingCardComponent,
  BookingDetailsModalComponent,
  CalendarEvent,
  CommonModule,
  Component,
  DateCalendarComponent,
  DatePipe,
  DateRangeCalendarComponent,
  EventCardComponent,
  EventDetailsModalComponent,
  FormsModule,
  GroupEventDetailsModalComponent,
  IconComponent,
  Input,
  MatCheckboxModule,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatProgressBar,
  MatProgressBarModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  RouterLink,
  RouterModule,
  SettingsService,
  SettingsToggleComponent,
  TranslatePipe,
  UserPipe,
  ViewChild,
  addDays,
  computed,
  debounceTime,
  effect,
  endOfDay,
  filter,
  format,
  inject,
  input,
  isAfter,
  isBefore,
  isSameDay,
  model,
  parse,
  setClassMetadata,
  setHours,
  setMinutes,
  settingSignal,
  signal,
  startOfDay,
  startOfWeek,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-S4NKVKWG.js";

// apps/workplace/src/app/schedule/schedule-day-view.component.ts
var _c0 = ["scrollContainer"];
var _c1 = ["currentTimeMarker"];
var _forTrack0 = ($index, $item) => $item.hour;
var _forTrack1 = ($index, $item) => $item.booking.id;
function ScheduleDayViewComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", slot_r1.label, " ");
  }
}
function ScheduleDayViewComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 17)(2, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function ScheduleDayViewComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19, 1);
    \u0275\u0275element(2, "div", 20)(3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r1.currentTimePosition(), "%");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.location(item_r4.booking), " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, item_r4.booking.date, "shortTime"), " - ", \u0275\u0275pipeBind2(3, 5, item_r4.booking.date_end, "shortTime"), " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location(item_r4.booking), " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, item_r4.booking.host))) == null ? null : tmp_12_0.name) || (item_r4.booking.organiser == null ? null : item_r4.booking.organiser.name) || item_r4.booking.host, " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Booked by ", item_r4.booking.booked_by_name || ((tmp_12_0 = \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, item_r4.booking.booked_by_email))) == null ? null : tmp_12_0.name) || item_r4.booking.booked_by_email, " ");
  }
}
function ScheduleDayViewComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275listener("click", function ScheduleDayViewComponent_For_20_Template_button_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewBooking(item_r4.booking));
    });
    \u0275\u0275elementStart(5, "div", 23)(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ScheduleDayViewComponent_For_20_Conditional_8_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ScheduleDayViewComponent_For_20_Conditional_9_Template, 4, 8, "div", 25);
    \u0275\u0275conditionalCreate(10, ScheduleDayViewComponent_For_20_Conditional_10_Template, 2, 1, "div", 26);
    \u0275\u0275conditionalCreate(11, ScheduleDayViewComponent_For_20_Conditional_11_Template, 4, 5, "div", 26);
    \u0275\u0275conditionalCreate(12, ScheduleDayViewComponent_For_20_Conditional_12_Template, 4, 5, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", item_r4.top, "%")("height", item_r4.height, "%")("left", item_r4.left, "%")("width", item_r4.width, "%")("border-color", ctx_r1.colors[ctx_r1.type(item_r4.booking)][1])("background-color", ctx_r1.colors[ctx_r1.type(item_r4.booking)][0])("z-index", 10);
    \u0275\u0275property("matTooltip", item_r4.booking.title + (ctx_r1.location(item_r4.booking) ? "\n" + ctx_r1.location(item_r4.booking) : "") + "\n" + (item_r4.booking.user_name || ((tmp_18_0 = \u0275\u0275pipeBind1(2, 23, \u0275\u0275pipeBind1(1, 21, item_r4.booking.host))) == null ? null : tmp_18_0.name) || item_r4.booking.host) + "\n" + \u0275\u0275pipeBind2(3, 25, item_r4.booking.date, "shortTime") + " - " + \u0275\u0275pipeBind2(4, 28, item_r4.booking.date_end, "shortTime"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r4.booking.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height <= 5 && ctx_r1.location(item_r4.booking) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 3 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 5 && ctx_r1.location(item_r4.booking) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 7 && item_r4.booking.host ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 7 && !item_r4.booking.host && item_r4.booking.user_email !== item_r4.booking.booked_by_email ? 12 : -1);
  }
}
var ScheduleDayViewComponent = class _ScheduleDayViewComponent extends AsyncHandler {
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._state = inject(ScheduleStateService);
    this._org = inject(OrganisationService);
    this.date = input(Date.now(), ...ngDevMode ? [{ debugName: "date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bookings = input([], ...ngDevMode ? [{ debugName: "bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colors = BOOKING_TYPE_COLORS;
    this._changed = signal(0, ...ngDevMode ? [{ debugName: "_changed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.scrollContainer = viewChild("scrollContainer", ...ngDevMode ? [{ debugName: "scrollContainer" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currentTimeMarker = viewChild("currentTimeMarker", ...ngDevMode ? [{ debugName: "currentTimeMarker" }] : (
      /* istanbul ignore next */
      []
    ));
    this.START_HOUR = 0;
    this.END_HOUR = 23;
    this.HOUR_HEIGHT = 64;
    this.timeSlots = computed(() => {
      const slots = [];
      for (let hour = this.START_HOUR; hour <= this.END_HOUR; hour++) {
        const date = setHours(setMinutes(/* @__PURE__ */ new Date(), 0), hour);
        slots.push({
          hour,
          label: format(date, "h a")
        });
      }
      return slots;
    }, ...ngDevMode ? [{ debugName: "timeSlots" }] : (
      /* istanbul ignore next */
      []
    ));
    this.gridHeight = computed(() => {
      return (this.END_HOUR - this.START_HOUR + 1) * this.HOUR_HEIGHT;
    }, ...ngDevMode ? [{ debugName: "gridHeight" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isToday = computed(() => {
      return isSameDay(this.date(), Date.now());
    }, ...ngDevMode ? [{ debugName: "isToday" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currentTimePosition = computed(() => {
      if (!this.isToday())
        return null;
      this._changed();
      const now = Date.now();
      const dayStart = setHours(setMinutes(startOfDay(this.date()), 0), this.START_HOUR).valueOf();
      const dayEnd = setHours(setMinutes(startOfDay(this.date()), 0), this.END_HOUR + 1).valueOf();
      if (now < dayStart || now > dayEnd)
        return null;
      const totalMinutes = (dayEnd - dayStart) / (1e3 * 60);
      const currentOffset = (now - dayStart) / (1e3 * 60);
      const position = currentOffset / totalMinutes * 100;
      return position;
    }, ...ngDevMode ? [{ debugName: "currentTimePosition" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dayBookings = computed(() => {
      const targetDate = this.date();
      return this.bookings().filter((booking) => isSameDay(booking.date, targetDate));
    }, ...ngDevMode ? [{ debugName: "dayBookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.positionedBookings = computed(() => {
      const bookings = this.dayBookings();
      if (!bookings.length)
        return [];
      const sorted = [...bookings].sort((a, b) => {
        if (a.date !== b.date)
          return a.date - b.date;
        return b.duration - a.duration;
      });
      const positioned = [];
      const columns = [];
      for (const booking of sorted) {
        let columnIndex = 0;
        let placed = false;
        while (!placed) {
          if (!columns[columnIndex]) {
            columns[columnIndex] = [];
          }
          const hasOverlap = columns[columnIndex].some((existing) => this.checkOverlap(booking, existing));
          if (!hasOverlap) {
            columns[columnIndex].push(booking);
            placed = true;
          } else {
            columnIndex++;
          }
        }
      }
      for (const booking of sorted) {
        let columnIndex = 0;
        for (let i = 0; i < columns.length; i++) {
          if (columns[i].includes(booking)) {
            columnIndex = i;
            break;
          }
        }
        let totalColumns = 1;
        for (let i = 0; i < columns.length; i++) {
          if (columns[i].some((b) => this.checkOverlap(booking, b) || b === booking)) {
            totalColumns = Math.max(totalColumns, i + 1);
          }
        }
        const position = this.calculatePosition(booking, columnIndex, totalColumns);
        positioned.push(position);
      }
      return positioned;
    }, ...ngDevMode ? [{ debugName: "positionedBookings" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const position = this.currentTimePosition();
      const marker = this.currentTimeMarker()?.nativeElement;
      const container = this.scrollContainer()?.nativeElement;
      if (position !== null && marker && container) {
        setTimeout(() => {
          marker.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 100);
      }
    });
  }
  ngOnInit() {
    this.interval("time", () => this._changed.set(Date.now()), 10 * 1e3);
  }
  checkOverlap(a, b) {
    return a.date < b.date_end && a.date_end > b.date;
  }
  calculatePosition(booking, column, totalColumns) {
    const dayStart = setHours(setMinutes(startOfDay(this.date()), 0), this.START_HOUR).valueOf();
    const dayEnd = setHours(setMinutes(startOfDay(this.date()), 0), this.END_HOUR + 1).valueOf();
    const totalMinutes = (dayEnd - dayStart) / (1e3 * 60);
    const bookingStart = Math.max(booking.date, dayStart);
    const bookingEnd = Math.min(booking.date_end, dayEnd);
    const startOffset = (bookingStart - dayStart) / (1e3 * 60);
    const duration = (bookingEnd - bookingStart) / (1e3 * 60);
    const top = startOffset / totalMinutes * 100;
    const height = Math.max(duration / totalMinutes * 100, 1);
    const gap = 0.5;
    const availableWidth = 100 - gap * (totalColumns - 1);
    const columnWidth = availableWidth / totalColumns;
    const left = column * (columnWidth + gap);
    const width = columnWidth;
    return {
      booking,
      top,
      height,
      left,
      width,
      column,
      totalColumns
    };
  }
  type(booking) {
    if (booking instanceof Booking)
      return booking.booking_type;
    return booking.extension_data?.shared_event ? "group-event" : "event";
  }
  location(booking) {
    let location = "";
    let level_name = "";
    if (booking instanceof Booking) {
      location = booking.booking_type === "visitor" ? booking.extension_data?.location || "" : booking.location || booking.asset_name || "";
      const level = this._org.levelWithID(booking.zones);
      level_name = level?.display_name || level?.name || "";
    } else {
      location = booking.location || booking.space?.display_name || booking.space?.name || booking.system?.name || "";
      level_name = booking.space?.level?.display_name || booking.space?.level?.name || booking.system?.zones ? this._org.levelWithID(booking.system?.zones || [])?.display_name || this._org.levelWithID(booking.system?.zones || [])?.name : "";
    }
    if (location && level_name) {
      return `${location} - ${level_name}`;
    }
    return location || level_name || "";
  }
  viewBooking(bkn) {
    this._dialog.closeAll();
    if (bkn instanceof CalendarEvent) {
      if (bkn.extension_data?.shared_event) {
        this._dialog.open(GroupEventDetailsModalComponent, {
          data: {
            event: bkn,
            edit_fn: (i) => this._state.edit(i),
            remove_fn: (i, t) => this._state.remove(i, t),
            concierge: false
          }
        });
      } else {
        this._dialog.open(EventDetailsModalComponent, {
          data: {
            event: bkn,
            edit_fn: (i) => this._state.edit(i),
            remove_fn: (i, t) => this._state.remove(i, t)
          }
        });
      }
    } else {
      const view_component = bkn.booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
      const data = {
        booking: bkn.booking_type === "group-event" ? { booking: bkn, concierge: false } : bkn,
        edit_fn: (i) => this._state.editBooking(i),
        remove_fn: (i, t) => this._state.remove(i, t),
        end_fn: (i) => this._state.end(i)
      };
      this._dialog.open(view_component, { data });
    }
  }
  static {
    this.\u0275fac = function ScheduleDayViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleDayViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleDayViewComponent, selectors: [["schedule-day-view"]], viewQuery: function ScheduleDayViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.scrollContainer, _c0, 5)(ctx.currentTimeMarker, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { date: [1, "date"], bookings: [1, "bookings"], loading: [1, "loading"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 7, consts: [["scrollContainer", ""], ["currentTimeMarker", ""], [1, "h-full", "w-full", "overflow-auto"], [1, "m-2"], [1, "mb-4", "flex", "items-center", "justify-between", "px-4", "py-2"], [1, "text-xl", "font-medium"], [1, "rounded-md", "border", "border-base-300", "bg-base-100", "px-2", "py-1", "text-sm", "text-base-content"], [1, "relative", "flex"], [1, "w-12", "flex-shrink-0", "pr-2"], [1, "flex", "h-16", "items-start", "justify-end", "text-xs", "text-base-content", "opacity-60"], [1, "relative", "flex-1", "overflow-hidden", "rounded-xl", "border-x", "border-b", "border-base-300", "bg-base-100"], [1, "absolute", "inset-0"], [1, "relative", "h-16"], [1, "pointer-events-none", "absolute", "inset-x-0", "z-20", "flex", "items-center", 3, "top"], [1, "relative", "h-full"], ["matRipple", "", 1, "absolute", "overflow-hidden", "rounded-lg", "border", "p-2", "text-left", "text-black", "shadow-sm", "transition-shadow", "hover:shadow-md", 3, "top", "height", "left", "width", "border-color", "background-color", "z-index", "matTooltip"], [1, "relative", "-translate-y-1/2"], [1, "absolute", "inset-x-0", "top-0", "border-t", "border-base-300"], [1, "absolute", "inset-x-0", "top-8", "border-t", "border-dashed", "border-base-300"], [1, "pointer-events-none", "absolute", "inset-x-0", "z-20", "flex", "items-center"], [1, "-ml-1", "h-2", "w-2", "rounded-full", "bg-error"], [1, "flex-1", "border-t-2", "border-error"], ["matRipple", "", 1, "absolute", "overflow-hidden", "rounded-lg", "border", "p-2", "text-left", "text-black", "shadow-sm", "transition-shadow", "hover:shadow-md", 3, "click", "matTooltip"], [1, "flex", "items-center", "space-x-1", "truncate", "text-sm", "font-medium"], [1, "text-xs", "opacity-60"], [1, "text-xs", "opacity-75"], [1, "mt-1", "truncate", "text-xs", "opacity-60"]], template: function ScheduleDayViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4)(4, "h2", 5);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
        \u0275\u0275repeaterCreate(11, ScheduleDayViewComponent_For_12_Template, 3, 1, "div", 9, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
        \u0275\u0275repeaterCreate(15, ScheduleDayViewComponent_For_16_Template, 3, 0, "div", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, ScheduleDayViewComponent_Conditional_17_Template, 4, 2, "div", 13);
        \u0275\u0275elementStart(18, "div", 14);
        \u0275\u0275repeaterCreate(19, ScheduleDayViewComponent_For_20_Template, 13, 31, "button", 15, _forTrack1);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx.date(), "EEEE, MMMM d, yyyy"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", ((tmp_2_0 = ctx.bookings()) == null ? null : tmp_2_0.length) || 0, " booking", ((tmp_2_0 = ctx.bookings()) == null ? null : tmp_2_0.length) !== 1 ? "s" : "", " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.timeSlots());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.timeSlots());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.currentTimePosition() !== null ? 17 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.positionedBookings());
      }
    }, dependencies: [CommonModule, MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, AsyncPipe, DatePipe, UserPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleDayViewComponent, [{
    type: Component,
    args: [{ selector: `schedule-day-view`, template: `
        <div class="h-full w-full overflow-auto" #scrollContainer>
            <div class="m-2">
                <div class="mb-4 flex items-center justify-between px-4 py-2">
                    <h2 class="text-xl font-medium">
                        {{ date() | date: 'EEEE, MMMM d, yyyy' }}
                    </h2>
                    <div
                        class="rounded-md border border-base-300 bg-base-100 px-2 py-1 text-sm text-base-content"
                    >
                        {{ bookings()?.length || 0 }} booking{{
                            bookings()?.length !== 1 ? 's' : ''
                        }}
                    </div>
                </div>
                <div class="relative flex">
                    <!-- Time labels -->
                    <div class="w-12 flex-shrink-0 pr-2">
                        @for (slot of timeSlots(); track slot.hour) {
                            <div
                                class="flex h-16 items-start justify-end text-xs text-base-content opacity-60"
                            >
                                <div class="relative -translate-y-1/2">
                                    {{ slot.label }}
                                </div>
                            </div>
                        }
                    </div>

                    <!-- Calendar grid -->
                    <div
                        class="relative flex-1 overflow-hidden rounded-xl border-x border-b border-base-300 bg-base-100"
                    >
                        <!-- Grid lines -->
                        <div class="absolute inset-0">
                            @for (slot of timeSlots(); track slot.hour) {
                                <div class="relative h-16">
                                    <div
                                        class="absolute inset-x-0 top-0 border-t border-base-300"
                                    ></div>
                                    <div
                                        class="absolute inset-x-0 top-8 border-t border-dashed border-base-300"
                                    ></div>
                                </div>
                            }
                        </div>

                        <!-- Current time marker -->
                        @if (currentTimePosition() !== null) {
                            <div
                                #currentTimeMarker
                                class="pointer-events-none absolute inset-x-0 z-20 flex items-center"
                                [style.top.%]="currentTimePosition()"
                            >
                                <div
                                    class="-ml-1 h-2 w-2 rounded-full bg-error"
                                ></div>
                                <div
                                    class="flex-1 border-t-2 border-error"
                                ></div>
                            </div>
                        }

                        <!-- Bookings -->
                        <div class="relative h-full">
                            @for (
                                item of positionedBookings();
                                track item.booking.id
                            ) {
                                <button
                                    matRipple
                                    class="absolute overflow-hidden rounded-lg border p-2 text-left text-black shadow-sm transition-shadow hover:shadow-md"
                                    [style.top.%]="item.top"
                                    [style.height.%]="item.height"
                                    [style.left.%]="item.left"
                                    [style.width.%]="item.width"
                                    [style.border-color]="
                                        colors[type(item.booking)][1]
                                    "
                                    [style.background-color]="
                                        colors[type(item.booking)][0]
                                    "
                                    [style.z-index]="10"
                                    (click)="viewBooking(item.booking)"
                                    [matTooltip]="
                                        item.booking.title +
                                        (location(item.booking)
                                            ? '
' + location(item.booking)
                                            : '') +
                                        '
' +
                                        ($any(item.booking).user_name ||
                                            ($any(item.booking).host | user | async)
                                                ?.name ||
                                            $any(item.booking).host) +
                                        '
' +
                                        (item.booking.date
                                            | date: 'shortTime') +
                                        ' - ' +
                                        (item.booking.date_end
                                            | date: 'shortTime')
                                    "
                                >
                                    <div
                                        class="flex items-center space-x-1 truncate text-sm font-medium"
                                    >
                                        <div>{{ item.booking.title }}</div>
                                        @if (
                                            item.height <= 5 &&
                                            location(item.booking)
                                        ) {
                                            <div class="text-xs opacity-60">
                                                \xB7 {{ location(item.booking) }}
                                            </div>
                                        }
                                    </div>
                                    @if (item.height > 3) {
                                        <div class="text-xs opacity-75">
                                            {{
                                                item.booking.date
                                                    | date: 'shortTime'
                                            }}
                                            -
                                            {{
                                                item.booking.date_end
                                                    | date: 'shortTime'
                                            }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 5 &&
                                        location(item.booking)
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{ location(item.booking) }}
                                        </div>
                                    }
                                    @if (item.height > 7 && $any(item.booking).host) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{
                                                (
                                                    $any(item.booking).host
                                                    | user
                                                    | async
                                                )?.name ||
                                                    $any(item.booking).organiser
                                                        ?.name ||
                                                    $any(item.booking).host
                                            }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 7 &&
                                        !$any(item.booking).host &&
                                        $any(item.booking).user_email !==
                                            $any(item.booking).booked_by_email
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            Booked by
                                            {{
                                                $any(item.booking).booked_by_name ||
                                                    (
                                                        $any(item.booking)
                                                            .booked_by_email
                                                        | user
                                                        | async
                                                    )?.name ||
                                                    $any(item.booking).booked_by_email
                                            }}
                                        </div>
                                    }
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `, imports: [CommonModule, MatRippleModule, MatTooltipModule, UserPipe] }]
  }], () => [], { date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], scrollContainer: [{ type: ViewChild, args: ["scrollContainer", { isSignal: true }] }], currentTimeMarker: [{ type: ViewChild, args: ["currentTimeMarker", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleDayViewComponent, { className: "ScheduleDayViewComponent", filePath: "apps/workplace/src/app/schedule/schedule-day-view.component.ts", lineNumber: 239 });
})();

// apps/workplace/src/app/schedule/schedule-filter-card.component.ts
var _forTrack02 = ($index, $item) => $item.type;
function ScheduleFilterCardComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 7);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_For_10_Conditional_0_Template_settings_toggle_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleType(item_r2.type));
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", (tmp_11_0 = ctx_r2.filters()) == null ? null : tmp_11_0.shown_types == null ? null : tmp_11_0.shown_types.includes(item_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.colors[item_r2.type][0])("color", ctx_r2.colors[item_r2.type][1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, item_r2.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counts()[item_r2.type] || 0, " ");
  }
}
function ScheduleFilterCardComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleFilterCardComponent_For_10_Conditional_0_Template, 10, 10, "settings-toggle", 6);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.hasFeature(item_r2.feat) ? 0 : -1);
  }
}
var ScheduleFilterCardComponent = class _ScheduleFilterCardComponent {
  constructor() {
    this._state = inject(ScheduleStateService);
    this._settings = inject(SettingsService);
    this._sheet_ref = inject(MatBottomSheetRef);
    this.filters = this._state.filters;
    this.colors = BOOKING_TYPE_COLORS;
    this.bookings = model([], ...ngDevMode ? [{ debugName: "bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.feature_list = [
      { type: "desk", feat: "desks", icon: "desk", name: "RESOURCE.DESKS" },
      {
        type: "event",
        feat: "spaces",
        icon: "meeting_room",
        name: "RESOURCE.ROOMS"
      },
      {
        type: "parking",
        feat: "parking",
        icon: "drive_eta",
        name: "RESOURCE.PARKING"
      },
      {
        type: "visitor",
        feat: "visitor-invite",
        icon: "people",
        name: "RESOURCE.VISITORS"
      },
      {
        type: "locker",
        feat: "lockers",
        icon: "lock",
        name: "RESOURCE.LOCKERS"
      },
      {
        type: "group-event",
        feat: "group-events",
        icon: "event_available",
        name: "RESOURCE.EVENTS"
      },
      {
        type: "vip-visitor",
        feat: "vip-visitor-invite",
        icon: "star",
        name: "RESOURCE.VIP_VISITORS"
      }
    ];
    this.counts = computed(() => {
      const mapping = {};
      const bkn_list = this.bookings() || [];
      for (const bkn of bkn_list) {
        if (bkn instanceof CalendarEvent) {
          const type = bkn.extension_data?.shared_event ? "group-event" : "event";
          mapping[type] = (mapping[type] || 0) + 1;
        } else {
          const type = bkn.booking_type;
          mapping[type] = (mapping[type] || 0) + 1;
        }
      }
      return mapping;
    }, ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toggleType = (t) => this._state.toggleType(t);
    this.dismiss = () => this._sheet_ref.dismiss();
  }
  hasFeature(feature) {
    return this._settings.get("app.features")?.includes(feature);
  }
  static {
    this.\u0275fac = function ScheduleFilterCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleFilterCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleFilterCardComponent, selectors: [["schedule-filter-card"]], inputs: { bookings: [1, "bookings"] }, outputs: { bookings: "bookingsChange" }, decls: 15, vars: 6, consts: [[1, "border-base-200", "mb-4", "flex", "items-center", "space-x-2", "border-b", "text-xl"], ["icon", "", "matRipple", "", 3, "click"], [1, "w-1/2", "flex-1", "text-center"], [1, "mb-4", "space-y-2", "border-b", "border-base-200", "px-4", "pb-4"], [1, "px-4", "pb-4"], ["btn", "", "matRipple", "", "name", "schedule-apply-filter", 1, "w-full", 3, "click"], [3, "ngModel"], [3, "click", "ngModel"], [1, "-my-2", "-ml-2", "flex", "items-center", "space-x-2"], [1, "rounded-full", "bg-base-300", "p-1", "text-2xl"], [1, "flex-1", "font-medium"], [1, "font-mono", "text-xs"]], template: function ScheduleFilterCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ScheduleFilterCardComponent_Template_button_click_1_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "h2", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "icon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275repeaterCreate(9, ScheduleFilterCardComponent_For_10_Template, 1, 1, null, null, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "button", 5);
        \u0275\u0275listener("click", function ScheduleFilterCardComponent_Template_button_click_12_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.WORKPLACE.SCHEDULE_FILTERS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.feature_list);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 4, "COMMON.APPLY"), " ");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatCheckboxModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      SettingsToggleComponent,
      TranslatePipe
    ], styles: ["\nmat-checkbox[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-filter-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleFilterCardComponent, [{
    type: Component,
    args: [{ selector: "schedule-filter-card", template: `
        <div
            class="border-base-200 mb-4 flex items-center space-x-2 border-b text-xl"
        >
            <button icon matRipple (click)="dismiss()">
                <icon>chevron_left</icon>
            </button>
            <h2 class="w-1/2 flex-1 text-center">
                {{ 'APP.WORKPLACE.SCHEDULE_FILTERS' | translate }}
            </h2>
            <icon></icon>
        </div>
        <div class="mb-4 space-y-2 border-b border-base-200 px-4 pb-4">
            @for (item of feature_list; track item.type) {
                @if (hasFeature(item.feat)) {
                    <settings-toggle
                        [ngModel]="
                            filters()?.shown_types?.includes(item.type)
                        "
                        (click)="toggleType(item.type)"
                    >
                        <div class="-my-2 -ml-2 flex items-center space-x-2">
                            <div
                                class="rounded-full bg-base-300 p-1 text-2xl"
                                [style.background-color]="colors[item.type][0]"
                                [style.color]="colors[item.type][1]"
                            >
                                <icon>{{ item.icon }}</icon>
                            </div>
                            <div class="flex-1 font-medium">
                                {{ item.name | translate }}
                            </div>
                            <div class="font-mono text-xs">
                                {{ counts()[item.type] || 0 }}
                            </div>
                        </div>
                    </settings-toggle>
                }
            }
        </div>
        <div class="px-4 pb-4">
            <button
                btn
                matRipple
                name="schedule-apply-filter"
                class="w-full"
                (click)="dismiss()"
            >
                {{ 'COMMON.APPLY' | translate }}
            </button>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatCheckboxModule,
      FormsModule,
      MatRippleModule,
      SettingsToggleComponent
    ], styles: ["/* angular:styles/component:css;c8f9d18253326e4ed43aff56311c0651df3afa940b60387869cba90c71ede5e2;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule-filter-card.component.ts */\nmat-checkbox {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-filter-card.component.css.map */\n"] }]
  }], null, { bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }, { type: Output, args: ["bookingsChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleFilterCardComponent, { className: "ScheduleFilterCardComponent", filePath: "apps/workplace/src/app/schedule/schedule-filter-card.component.ts", lineNumber: 91 });
})();

// apps/workplace/src/app/schedule/schedule-filters.component.ts
var _forTrack03 = ($index, $item) => $item.type;
function ScheduleFiltersComponent_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 9);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_For_3_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleType(item_r2.type, true));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, item_r2.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counts()[item_r2.type] || 0, " ");
    \u0275\u0275advance();
    \u0275\u0275property("name", "schedule-remove-" + item_r2.type + "-filter-mobile");
  }
}
function ScheduleFiltersComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleFiltersComponent_For_3_Conditional_0_Template, 9, 5, "div", 6);
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r2.filters()) == null ? null : tmp_10_0.shown_types == null ? null : tmp_10_0.shown_types.includes(item_r2.type)) && ctx_r2.hasFeature(item_r2.feat) ? 0 : -1);
  }
}
function ScheduleFiltersComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 9);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_For_10_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleType(item_r5.type, true));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, item_r5.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counts()[item_r5.type] || 0, " ");
    \u0275\u0275advance();
    \u0275\u0275property("name", "schedule-remove-" + item_r5.type + "-filter-mobile");
  }
}
function ScheduleFiltersComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleFiltersComponent_For_10_Conditional_0_Template, 9, 5, "div", 10);
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r2.filters()) == null ? null : tmp_10_0.shown_types == null ? null : tmp_10_0.shown_types.includes(item_r5.type)) && ctx_r2.hasFeature(item_r5.feat) ? 0 : -1);
  }
}
var ScheduleFiltersComponent = class _ScheduleFiltersComponent {
  constructor() {
    this._sheet = inject(MatBottomSheet);
    this._state = inject(ScheduleStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.bookings = input([], ...ngDevMode ? [{ debugName: "bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.features = settingSignal("features", []);
    this.counts = computed(() => {
      const mapping = {};
      const bkn_list = this.bookings() || [];
      for (const bkn of bkn_list) {
        if (bkn instanceof CalendarEvent) {
          const type = bkn.extension_data?.shared_event ? "group-event" : "event";
          mapping[type] = (mapping[type] || 0) + 1;
        } else {
          const type = bkn.booking_type;
          mapping[type] = (mapping[type] || 0) + 1;
        }
      }
      return mapping;
    }, ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.feature_list = [
      { type: "desk", feat: "desks", name: "RESOURCE.DESKS" },
      { type: "event", feat: "spaces", name: "RESOURCE.MEETINGS" },
      { type: "parking", feat: "parking", name: "RESOURCE.PARKING" },
      { type: "visitor", feat: "visitor-invite", name: "RESOURCE.VISITORS" },
      { type: "locker", feat: "lockers", name: "RESOURCE.LOCKERS" },
      { type: "group-event", feat: "group-events", name: "RESOURCE.EVENTS" },
      {
        type: "vip-visitor",
        feat: "vip-visitor-invite",
        name: "RESOURCE.VIP_VISITORS"
      }
    ];
    this.toggleType = (t, c = false) => this._state.toggleType(t, c);
  }
  hasFeature(feature) {
    return this.features()?.includes(feature);
  }
  openFilters() {
    const ref = this._sheet.open(ScheduleFilterCardComponent);
    ref.instance.bookings.set(this.bookings());
  }
  static {
    this.\u0275fac = function ScheduleFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleFiltersComponent, selectors: [["schedule-filters"]], inputs: { bookings: [1, "bookings"] }, decls: 11, vars: 0, consts: [[1, "hidden", "border-b", "border-base-300", "bg-base-100", "p-1", "sm:block"], [1, "flex", "flex-wrap"], [1, "flex", "items-center", "space-x-2", "overflow-auto", "border-b", "border-base-300", "bg-base-100", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "schedule-open-filter-edit", 1, "h-10", "min-h-10", "min-w-10", "sm:min-h-12", "sm:w-24", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl"], [1, "m-0.5", "flex", "items-center", "rounded-3xl", "border", "border-base-200", "bg-base-100", "pl-2", "text-sm"], [1, "px-2"], [1, "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "bg-base-200", "font-mono", "text-[0.625rem]", "opacity-50"], ["icon", "", "matRipple", "", 3, "click", "name"], [1, "flex", "items-center", "rounded-3xl", "border", "border-base-200", "bg-base-100", "pl-2", "text-sm"]], template: function ScheduleFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, ScheduleFiltersComponent_For_3_Template, 1, 1, null, null, _forTrack03);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
        \u0275\u0275listener("click", function ScheduleFiltersComponent_Template_button_click_5_listener() {
          return ctx.openFilters();
        });
        \u0275\u0275elementStart(6, "div", 4)(7, "icon", 5);
        \u0275\u0275text(8, "filter_list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(9, ScheduleFiltersComponent_For_10_Template, 1, 1, null, null, _forTrack03);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.feature_list);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.feature_list);
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleFiltersComponent, [{
    type: Component,
    args: [{ selector: "schedule-filters", template: `
        <div class="hidden border-b border-base-300 bg-base-100 p-1 sm:block">
            <div class="flex flex-wrap">
                @for (item of feature_list; track item.type) {
                    @if (
                        filters()?.shown_types?.includes(item.type) &&
                        hasFeature(item.feat)
                    ) {
                        <div
                            class="m-0.5 flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                        >
                            <div class="px-2">{{ item.name | translate }}</div>
                            <div
                                class="flex h-5 w-5 items-center justify-center rounded-full bg-base-200 font-mono text-[0.625rem] opacity-50"
                            >
                                {{ counts()[item.type] || 0 }}
                            </div>
                            <button
                                icon
                                matRipple
                                [name]="
                                    'schedule-remove-' +
                                    item.type +
                                    '-filter-mobile'
                                "
                                (click)="toggleType(item.type, true)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    }
                }
            </div>
        </div>
        <div
            class="flex items-center space-x-2 overflow-auto border-b border-base-300 bg-base-100 p-2 sm:hidden"
        >
            <button
                btn
                matRipple
                name="schedule-open-filter-edit"
                class="h-10 min-h-10 min-w-10 sm:min-h-12 sm:w-24"
                (click)="openFilters()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <icon class="text-xl">filter_list</icon>
                </div>
            </button>
            @for (item of feature_list; track item.type) {
                @if (
                    filters()?.shown_types?.includes(item.type) &&
                    hasFeature(item.feat)
                ) {
                    <div
                        class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                    >
                        <div class="px-2">{{ item.name | translate }}</div>
                        <div
                            class="flex h-5 w-5 items-center justify-center rounded-full bg-base-200 font-mono text-[0.625rem] opacity-50"
                        >
                            {{ counts()[item.type] || 0 }}
                        </div>
                        <button
                            icon
                            matRipple
                            [name]="
                                'schedule-remove-' +
                                item.type +
                                '-filter-mobile'
                            "
                            (click)="toggleType(item.type, true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
            }
        </div>
    `, imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule] }]
  }], null, { bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleFiltersComponent, { className: "ScheduleFiltersComponent", filePath: "apps/workplace/src/app/schedule/schedule-filters.component.ts", lineNumber: 99 });
})();

// apps/workplace/src/app/schedule/schedule-list-view.component.ts
var _forTrack04 = ($index, $item) => $item.date;
var _forTrack12 = ($index, $item) => $item.id;
function ScheduleListViewComponent_Conditional_0_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), ") ");
  }
}
function ScheduleListViewComponent_Conditional_0_For_1_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-card", 2);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("event", item_r1)("edit_fn", ctx_r1.edit_fn)("remove_fn", ctx_r1.remove_fn);
  }
}
function ScheduleListViewComponent_Conditional_0_For_1_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "booking-card", 3);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("booking", item_r1)("edit_fn", ctx_r1.edit_booking_fn)("remove_fn", ctx_r1.remove_fn)("end_fn", ctx_r1.end_fn);
  }
}
function ScheduleListViewComponent_Conditional_0_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleListViewComponent_Conditional_0_For_1_For_5_Conditional_0_Template, 1, 3, "event-card", 2)(1, ScheduleListViewComponent_Conditional_0_For_1_For_5_Conditional_1_Template, 1, 4, "booking-card", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.isEvent(item_r1) ? 0 : 1);
  }
}
function ScheduleListViewComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, ScheduleListViewComponent_Conditional_0_For_1_Conditional_3_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ScheduleListViewComponent_Conditional_0_For_1_For_5_Template, 2, 1, null, null, _forTrack12);
  }
  if (rf & 2) {
    const date_block_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, date_block_r3.date, "EEE dd LLL yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(date_block_r3.is_today ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(date_block_r3.bookings);
  }
}
function ScheduleListViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ScheduleListViewComponent_Conditional_0_For_1_Template, 6, 5, null, null, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.booking_dates());
  }
}
function ScheduleListViewComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r1.date(), "dd LLL yyyy"), " - ", \u0275\u0275pipeBind2(2, 5, ctx_r1.end_date(), "dd LLL yyyy"), " ");
  }
}
function ScheduleListViewComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.date(), "EEEE, dd LLL yyyy"), " ");
  }
}
function ScheduleListViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementStart(2, "p", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275conditionalCreate(5, ScheduleListViewComponent_Conditional_1_Conditional_5_Template, 3, 8)(6, ScheduleListViewComponent_Conditional_1_Conditional_6_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.SCHEDULE_EMPTY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.end_date() && !ctx_r1.isSameDayCheck(ctx_r1.date(), ctx_r1.end_date()) ? 5 : 6);
  }
}
var ScheduleListViewComponent = class _ScheduleListViewComponent {
  constructor() {
    this._state = inject(ScheduleStateService);
    this.date = input(Date.now(), ...ngDevMode ? [{ debugName: "date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.end_date = input(null, ...ngDevMode ? [{ debugName: "end_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bookings = input([], ...ngDevMode ? [{ debugName: "bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isEvent = (i) => i instanceof CalendarEvent;
    this.isSameDayCheck = (a, b) => isSameDay(a, b);
    this.edit_fn = (i) => this._state.edit(i);
    this.edit_booking_fn = (i) => this._state.editBooking(i);
    this.remove_fn = (i, t) => this._state.remove(i, t);
    this.end_fn = (i) => this._state.end(i);
    this.booking_dates = computed(() => {
      if (this.loading())
        return [];
      const sorted = (this.bookings() || []).sort((a, b) => a.date - b.date);
      const start = this.date();
      const end = this.end_date();
      const filtered = sorted.filter((b) => {
        if (end && !isSameDay(start, end)) {
          const booking_date = b.date;
          return (isAfter(booking_date, startOfDay(start)) || isSameDay(booking_date, start)) && (isBefore(booking_date, endOfDay(end)) || isSameDay(booking_date, end));
        }
        return isSameDay(b.date, start);
      });
      const dates = /* @__PURE__ */ new Set();
      for (const booking of filtered) {
        const date = format(booking.date, "yyyy-MM-dd");
        if (!dates.has(date))
          dates.add(date);
      }
      const list = [];
      for (const date of dates) {
        const day = parse(date, "yyyy-MM-dd", 0);
        list.push({
          id: date,
          date: day.valueOf(),
          bookings: filtered.filter((booking) => isSameDay(booking.date, day)),
          is_today: isSameDay(day, Date.now())
        });
      }
      return list;
    }, ...ngDevMode ? [{ debugName: "booking_dates" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function ScheduleListViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleListViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleListViewComponent, selectors: [["schedule-list-view"]], inputs: { date: [1, "date"], end_date: [1, "end_date"], bookings: [1, "bookings"], loading: [1, "loading"] }, decls: 2, vars: 1, consts: [[1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], [1, "mb-2", "font-medium"], [3, "event", "edit_fn", "remove_fn"], [3, "booking", "edit_fn", "remove_fn", "end_fn"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]], template: function ScheduleListViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ScheduleListViewComponent_Conditional_0_Template, 2, 0)(1, ScheduleListViewComponent_Conditional_1_Template, 7, 4, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(((tmp_0_0 = ctx.booking_dates()) == null ? null : tmp_0_0.length) ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      EventCardComponent,
      BookingCardComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleListViewComponent, [{
    type: Component,
    args: [{ selector: `schedule-list-view`, template: `
        @if (booking_dates()?.length) {
            @for (date_block of booking_dates(); track date_block.date) {
                <h3 class="mb-2 font-medium">
                    {{ date_block.date | date: 'EEE dd LLL yyyy' }}
                    @if (date_block.is_today) {
                        <span> ({{ 'COMMON.TODAY' | translate }}) </span>
                    }
                </h3>
                @for (item of date_block.bookings; track item.id) {
                    @if (isEvent(item)) {
                        <event-card
                            [event]="item"
                            [edit_fn]="edit_fn"
                            [remove_fn]="remove_fn"
                        ></event-card>
                    } @else {
                        <booking-card
                            [booking]="item"
                            [edit_fn]="edit_booking_fn"
                            [remove_fn]="remove_fn"
                            [end_fn]="end_fn"
                        ></booking-card>
                    }
                }
            }
        } @else {
            <div
                class="flex w-full flex-col items-center justify-center space-y-4 p-8"
            >
                <img src="assets/img/no-events.svg" class="mr-4" />
                <p class="opacity-30">
                    {{ 'APP.WORKPLACE.SCHEDULE_EMPTY' | translate }}
                    @if (end_date() && !isSameDayCheck(date(), end_date())) {
                        {{ date() | date: 'dd LLL yyyy' }} -
                        {{ end_date() | date: 'dd LLL yyyy' }}
                    } @else {
                        {{ date() | date: 'EEEE, dd LLL yyyy' }}
                    }
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      EventCardComponent,
      BookingCardComponent
    ] }]
  }], null, { date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], end_date: [{ type: Input, args: [{ isSignal: true, alias: "end_date", required: false }] }], bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleListViewComponent, { className: "ScheduleListViewComponent", filePath: "apps/workplace/src/app/schedule/schedule-list-view.component.ts", lineNumber: 71 });
})();

// apps/workplace/src/app/schedule/schedule-sidebar.component.ts
var _forTrack05 = ($index, $item) => $item.type;
function ScheduleSidebarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-calendar", 5);
    \u0275\u0275listener("ngModelChange", function ScheduleSidebarComponent_Conditional_1_Template_date_calendar_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.date())("offset_weekday", ctx_r1.offset_weekday);
  }
}
function ScheduleSidebarComponent_Conditional_2_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "(C)");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.WEEK_THIS"));
  }
}
function ScheduleSidebarComponent_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ScheduleSidebarComponent_Conditional_2_For_4_Conditional_2_Template, 3, 3, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r4.this_week ? 2 : -1);
  }
}
function ScheduleSidebarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 6)(2, "mat-select", 7);
    \u0275\u0275listener("ngModelChange", function ScheduleSidebarComponent_Conditional_2_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275repeaterCreate(3, ScheduleSidebarComponent_Conditional_2_For_4_Template, 3, 3, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.week_date());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.week_options());
  }
}
function ScheduleSidebarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-range-calendar", 10);
    \u0275\u0275listener("startChange", function ScheduleSidebarComponent_Conditional_3_Template_date_range_calendar_startChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStartDate($event));
    })("endChange", function ScheduleSidebarComponent_Conditional_3_Template_date_range_calendar_endChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setEndDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2, " Pick a date range selecting the start then end date. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("from", null)("start", (tmp_2_0 = ctx_r1.date()) == null ? null : tmp_2_0.valueOf())("end", (tmp_3_0 = ctx_r1.end_date()) == null ? null : tmp_3_0.valueOf())("offset_weekday", ctx_r1.offset_weekday);
  }
}
function ScheduleSidebarComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 13);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_For_9_Conditional_0_Template_settings_toggle_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType(item_r7.type));
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 15)(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", (tmp_11_0 = ctx_r1.filters()) == null ? null : tmp_11_0.shown_types == null ? null : tmp_11_0.shown_types.includes(item_r7.type));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r1.colors[item_r7.type][0])("color", ctx_r1.colors[item_r7.type][1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, item_r7.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.counts()[item_r7.type] || 0, " ");
  }
}
function ScheduleSidebarComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleSidebarComponent_For_9_Conditional_0_Template, 10, 10, "settings-toggle", 12);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hasFeature(item_r7.feat) ? 0 : -1);
  }
}
var ScheduleSidebarComponent = class _ScheduleSidebarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._state = inject(ScheduleStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.date = computed(() => startOfDay(this._state.date()), ...ngDevMode ? [{ debugName: "date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.end_date = computed(() => {
      const end = this._state.end_date();
      return end ? endOfDay(end) : null;
    }, ...ngDevMode ? [{ debugName: "end_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toggleType = (t) => this._state.toggleType(t);
    this.setDate = (d) => this._state.setDate(d);
    this.bookings = input([], ...ngDevMode ? [{ debugName: "bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = input("day", ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colors = BOOKING_TYPE_COLORS;
    this.week_date = this._state.week_date;
    this.week_options = this._state.week_options;
    this.feature_list = [
      { type: "desk", feat: "desks", icon: "desk", name: "RESOURCE.DESKS" },
      {
        type: "event",
        feat: "spaces",
        icon: "meeting_room",
        name: "RESOURCE.MEETINGS"
      },
      {
        type: "parking",
        feat: "parking",
        icon: "drive_eta",
        name: "RESOURCE.PARKING"
      },
      {
        type: "visitor",
        feat: "visitor-invite",
        icon: "people",
        name: "RESOURCE.VISITORS"
      },
      {
        type: "locker",
        feat: "lockers",
        icon: "lock",
        name: "RESOURCE.LOCKERS"
      },
      {
        type: "group-event",
        feat: "group-events",
        icon: "event_available",
        name: "RESOURCE.EVENTS"
      },
      {
        type: "vip-visitor",
        feat: "vip-visitor-invite",
        icon: "star",
        name: "RESOURCE.VIP_VISITORS"
      }
    ];
    this.counts = computed(() => {
      const mapping = {};
      const bkn_list = this.bookings() || [];
      for (const bkn of bkn_list) {
        if (bkn instanceof CalendarEvent) {
          const type = bkn.extension_data?.shared_event ? "group-event" : "event";
          mapping[type] = (mapping[type] || 0) + 1;
        } else {
          const type = bkn.booking_type;
          mapping[type] = (mapping[type] || 0) + 1;
        }
      }
      return mapping;
    }, ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  get period() {
    const current_view = this.view();
    if (current_view === "list")
      return "list";
    return this._state.getOptions()?.period;
  }
  setStartDate(date) {
    this._state.setDate(date);
    this._state.setEndDate(null);
  }
  setEndDate(date) {
    this._state.setEndDate(date);
  }
  get is_today() {
    return isSameDay(this._state.dateValue, Date.now());
  }
  setDateToToday() {
    this._state.setDate(Date.now());
  }
  setOptions(options) {
    this._state.setOptions(options);
  }
  hasFeature(feature) {
    return (this._settings.get("app.features") || []).includes(feature);
  }
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.pipe(filter((_) => !!_), debounceTime(1e3)).subscribe((_) => {
      this._state.setType("event", this.hasFeature("spaces"));
      this._state.setType("desk", this.hasFeature("desks"));
      this._state.setType("parking", this.hasFeature("parking"));
      this._state.setType("visitor", this.hasFeature("visitor-invite"));
      this._state.setType("locker", this.hasFeature("lockers"));
      this._state.setType("group-event", this.hasFeature("group-events"));
      this._state.setType("vip-visitor", this.hasFeature("vip-visitor-invite"));
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ScheduleSidebarComponent_BaseFactory;
      return function ScheduleSidebarComponent_Factory(__ngFactoryType__) {
        return (\u0275ScheduleSidebarComponent_BaseFactory || (\u0275ScheduleSidebarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ScheduleSidebarComponent)))(__ngFactoryType__ || _ScheduleSidebarComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleSidebarComponent, selectors: [["schedule-sidebar"]], inputs: { bookings: [1, "bookings"], view: [1, "view"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 6, consts: [[1, "flex", "h-full", "w-[18rem]", "flex-col", "overflow-hidden", "border-r", "border-base-300", "bg-base-100"], [1, "border-b", "border-base-200", 3, "ngModel", "offset_weekday"], [1, "w-full", "p-2"], [1, "mx-4", "mt-4", "pb-2", "font-medium", "uppercase"], [1, "h-1/2", "flex-1", "space-y-1", "overflow-auto", "px-4"], [1, "border-b", "border-base-200", 3, "ngModelChange", "ngModel", "offset_weekday"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Week...", 3, "ngModelChange", "ngModel"], [1, "leading-tight", 3, "value"], [1, "text-info", "px-1", "text-xs", 3, "matTooltip"], [1, "border-b", "border-base-200", "p-2", 3, "startChange", "endChange", "from", "start", "end", "offset_weekday"], [1, "m-2", "w-[calc(100%-1rem)]", "rounded", "bg-info", "p-1", "text-xs", "text-info-content", "text-center"], [3, "ngModel"], [3, "click", "ngModel"], [1, "-my-2", "-ml-2", "flex", "items-center", "space-x-2"], [1, "rounded-full", "bg-base-300", "p-1", "text-2xl"], [1, "flex-1", "font-medium"], [1, "font-mono", "text-xs"]], template: function ScheduleSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, ScheduleSidebarComponent_Conditional_1_Template, 1, 2, "date-calendar", 1);
        \u0275\u0275conditionalCreate(2, ScheduleSidebarComponent_Conditional_2_Template, 5, 1, "div", 2);
        \u0275\u0275conditionalCreate(3, ScheduleSidebarComponent_Conditional_3_Template, 3, 4);
        \u0275\u0275elementStart(4, "h3", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275repeaterCreate(8, ScheduleSidebarComponent_For_9_Template, 1, 1, null, null, _forTrack05);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "day" ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "week" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "list" ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "APP.WORKPLACE.SCHEDULE_FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.feature_list);
      }
    }, dependencies: [
      CommonModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      MatRippleModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      DateCalendarComponent,
      DateRangeCalendarComponent,
      SettingsToggleComponent,
      TranslatePipe
    ], styles: ["\nmat-checkbox[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleSidebarComponent, [{
    type: Component,
    args: [{ selector: "schedule-sidebar", template: `
        <div
            class="flex h-full w-[18rem] flex-col overflow-hidden border-r border-base-300 bg-base-100"
        >
            @if (period === 'day') {
                <date-calendar
                    class="border-b border-base-200"
                    [ngModel]="date()"
                    (ngModelChange)="setDate($event)"
                    [offset_weekday]="offset_weekday"
                ></date-calendar>
            }
            @if (period === 'week') {
                <div class="w-full p-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [ngModel]="week_date()"
                            (ngModelChange)="setDate($event)"
                            placeholder="Select Week..."
                        >
                            @for (option of week_options(); track option) {
                                <mat-option
                                    [value]="option.id"
                                    class="leading-tight"
                                >
                                    {{ option.name }}
                                    @if (option.this_week) {
                                        <span
                                            class="text-info px-1 text-xs"
                                            [matTooltip]="
                                                'COMMON.WEEK_THIS' | translate
                                            "
                                            >(C)</span
                                        >
                                    }
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            @if (period === 'list') {
                <date-range-calendar
                    class="border-b border-base-200 p-2"
                    [from]="null"
                    [start]="date()?.valueOf()"
                    [end]="end_date()?.valueOf()"
                    [offset_weekday]="offset_weekday"
                    (startChange)="setStartDate($event)"
                    (endChange)="setEndDate($event)"
                ></date-range-calendar>
                <div class="m-2 w-[calc(100%-1rem)] rounded bg-info p-1 text-xs text-info-content text-center">
                    Pick a date range selecting the start then end date.
                </div>
            }
            <h3 class="mx-4 mt-4 pb-2 font-medium uppercase">
                {{ 'APP.WORKPLACE.SCHEDULE_FILTERS' | translate }}
            </h3>
            <div class="h-1/2 flex-1 space-y-1 overflow-auto px-4">
                @for (item of feature_list; track item.type) {
                    @if (hasFeature(item.feat)) {
                        <settings-toggle
                            [ngModel]="
                                filters()?.shown_types?.includes(item.type)
                            "
                            (click)="toggleType(item.type)"
                        >
                            <div
                                class="-my-2 -ml-2 flex items-center space-x-2"
                            >
                                <div
                                    class="rounded-full bg-base-300 p-1 text-2xl"
                                    [style.background-color]="
                                        colors[item.type][0]
                                    "
                                    [style.color]="colors[item.type][1]"
                                >
                                    <icon>{{ item.icon }}</icon>
                                </div>
                                <div class="flex-1 font-medium">
                                    {{ item.name | translate }}
                                </div>
                                <div class="font-mono text-xs">
                                    {{ counts()[item.type] || 0 }}
                                </div>
                            </div>
                        </settings-toggle>
                    }
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatCheckboxModule,
      MatTooltipModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatTooltipModule,
      DateCalendarComponent,
      DateRangeCalendarComponent,
      SettingsToggleComponent
    ], styles: ["/* angular:styles/component:css;c8f9d18253326e4ed43aff56311c0651df3afa940b60387869cba90c71ede5e2;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule-sidebar.component.ts */\nmat-checkbox {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-sidebar.component.css.map */\n"] }]
  }], null, { bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }], view: [{ type: Input, args: [{ isSignal: true, alias: "view", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleSidebarComponent, { className: "ScheduleSidebarComponent", filePath: "apps/workplace/src/app/schedule/schedule-sidebar.component.ts", lineNumber: 153 });
})();

// apps/workplace/src/app/schedule/schedule-topbar.component.ts
var _c02 = () => [];
var _c12 = () => ({ view: "day" });
var _c2 = () => ({ view: "week" });
var _c3 = () => ({ view: "list" });
function ScheduleTopbarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ScheduleTopbarComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousDate());
    });
    \u0275\u0275elementStart(1, "icon", 7);
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function ScheduleTopbarComponent_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextDate());
    });
    \u0275\u0275elementStart(4, "icon", 7);
    \u0275\u0275text(5, "keyboard_arrow_right");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleTopbarComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r1.date(), "dd MMM"), " - ", \u0275\u0275pipeBind2(3, 5, ctx_r1.end_date(), "dd MMM yyyy"), " ");
  }
}
function ScheduleTopbarComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r1.date(), "EEE, dd MMM"));
  }
}
var ScheduleTopbarComponent = class _ScheduleTopbarComponent {
  constructor() {
    this.view = model("list", ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
    this.date = model(Date.now(), ...ngDevMode ? [{ debugName: "date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.end_date = model(null, ...ngDevMode ? [{ debugName: "end_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.has_date_range = computed(() => {
      const end = this.end_date();
      const start = this.date();
      return this.view() === "list" && end !== null && !isSameDay(start, end);
    }, ...ngDevMode ? [{ debugName: "has_date_range" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resetDate = () => {
      this.date.set(Date.now());
      this.end_date.set(null);
    };
    this.previousDate = () => this.date.set(subDays(this.date(), this.view() === "week" ? 7 : 1).valueOf());
    this.nextDate = () => this.date.set(addDays(this.date(), this.view() === "week" ? 7 : 1).valueOf());
  }
  static {
    this.\u0275fac = function ScheduleTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleTopbarComponent, selectors: [["schedule-topbar"]], inputs: { view: [1, "view"], date: [1, "date"], end_date: [1, "end_date"] }, outputs: { view: "viewChange", date: "dateChange", end_date: "end_dateChange" }, decls: 21, vars: 36, consts: [[1, "border-base-300", "bg-base-100", "flex", "w-full", "flex-col", "items-center", "justify-between", "space-y-2", "border-b", "p-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], ["date", "", 1, "flex", "w-full", "items-center", "space-x-2", "sm:w-auto"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-11", 3, "click"], [1, "border-base-300", "rounded-lg", "border", "px-2", "py-1", "text-xs"], ["view", "", 1, "border-base-300", "bg-base-200", "flex", "w-full", "space-x-1", "rounded-xl", "border", "p-1", "sm:w-auto"], ["btn", "", "matRipple", "", 1, "hover:bg-base-300", "min-h-10", "flex-1", 3, "click", "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-11", "min-w-11", "p-0", 3, "click"], [1, "text-2xl"]], template: function ScheduleTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ScheduleTopbarComponent_Template_button_click_2_listener() {
          return ctx.resetDate();
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ScheduleTopbarComponent_Conditional_5_Template, 6, 0);
        \u0275\u0275conditionalCreate(6, ScheduleTopbarComponent_Conditional_6_Template, 4, 8, "div")(7, ScheduleTopbarComponent_Conditional_7_Template, 3, 4, "div");
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "a", 5);
        \u0275\u0275listener("click", function ScheduleTopbarComponent_Template_a_click_12_listener() {
          return ctx.view.set("day");
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 5);
        \u0275\u0275listener("click", function ScheduleTopbarComponent_Template_a_click_15_listener() {
          return ctx.view.set("week");
        });
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 5);
        \u0275\u0275listener("click", function ScheduleTopbarComponent_Template_a_click_18_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 19, "COMMON.TODAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view() !== "list" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_date_range() ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 21, ctx.date(), "z"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("clear", ctx.view() !== "day");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(30, _c02))("queryParams", \u0275\u0275pureFunction0(31, _c12));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 24, "COMMON.DAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("clear", ctx.view() !== "week");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(32, _c02))("queryParams", \u0275\u0275pureFunction0(33, _c2));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 26, "COMMON.WEEK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("clear", ctx.view() !== "list");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(34, _c02))("queryParams", \u0275\u0275pureFunction0(35, _c3));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 28, "COMMON.LIST"), " ");
      }
    }, dependencies: [CommonModule, IconComponent, RouterModule, RouterLink, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleTopbarComponent, [{
    type: Component,
    args: [{ selector: `schedule-topbar`, template: `
        <div
            class="border-base-300 bg-base-100 flex w-full flex-col items-center justify-between space-y-2 border-b p-2 sm:flex-row sm:space-y-0 sm:space-x-2"
        >
            <div date class="flex w-full items-center space-x-2 sm:w-auto">
                <button
                    btn
                    matRipple
                    class="inverse min-h-11"
                    (click)="resetDate()"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </button>
                @if (view() !== 'list') {
                    <button
                        btn
                        matRipple
                        class="inverse min-h-11 min-w-11 p-0"
                        (click)="previousDate()"
                    >
                        <icon class="text-2xl">keyboard_arrow_left</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-11 min-w-11 p-0"
                        (click)="nextDate()"
                    >
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </button>
                }
                @if (has_date_range()) {
                    <div>
                        {{ date() | date: 'dd MMM' }} -
                        {{ end_date() | date: 'dd MMM yyyy' }}
                    </div>
                } @else {
                    <div>{{ date() | date: 'EEE, dd MMM' }}</div>
                }
                <div
                    class="border-base-300 rounded-lg border px-2 py-1 text-xs"
                >
                    {{ date() | date: 'z' }}
                </div>
            </div>
            <div
                view
                class="border-base-300 bg-base-200 flex w-full space-x-1 rounded-xl border p-1 sm:w-auto"
            >
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'day'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'day' }"
                    (click)="view.set('day')"
                >
                    {{ 'COMMON.DAY' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'week'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'week' }"
                    (click)="view.set('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'list'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'list' }"
                    (click)="view.set('list')"
                >
                    {{ 'COMMON.LIST' | translate }}
                </a>
            </div>
        </div>
    `, imports: [CommonModule, TranslatePipe, IconComponent, RouterModule] }]
  }], null, { view: [{ type: Input, args: [{ isSignal: true, alias: "view", required: false }] }, { type: Output, args: ["viewChange"] }], date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }, { type: Output, args: ["dateChange"] }], end_date: [{ type: Input, args: [{ isSignal: true, alias: "end_date", required: false }] }, { type: Output, args: ["end_dateChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleTopbarComponent, { className: "ScheduleTopbarComponent", filePath: "apps/workplace/src/app/schedule/schedule-topbar.component.ts", lineNumber: 97 });
})();

// apps/workplace/src/app/schedule/schedule-week-view.component.ts
var _c03 = ["scrollContainer"];
var _c13 = () => [];
var _forTrack06 = ($index, $item) => $item.id;
function ScheduleWeekViewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5, 1)(2, "div", 7);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_18_0;
    let tmp_19_0;
    const day_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-is-today", day_r1.is_today);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", day_r1.is_today ? "Today" : \u0275\u0275pipeBind2(3, 11, day_r1.date, "fullDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 14, day_r1.date, "EEE, dd"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-300", !day_r1.is_today)("bg-info", day_r1.is_today)("text-info-content", day_r1.is_today);
    \u0275\u0275property("matTooltip", (((tmp_18_0 = ctx_r1.bookings_by_date()[day_r1.id]) == null ? null : tmp_18_0.length) || 0) + " bookings");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_19_0 = ctx_r1.bookings_by_date()[day_r1.id]) == null ? null : tmp_19_0.length) || 0, " ");
  }
}
function ScheduleWeekViewComponent_For_7_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bkn_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location(bkn_r4), " ");
  }
}
function ScheduleWeekViewComponent_For_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275listener("click", function ScheduleWeekViewComponent_For_7_For_2_Template_button_click_0_listener() {
      const bkn_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewBooking(bkn_r4));
    });
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ScheduleWeekViewComponent_For_7_For_2_Conditional_7_Template, 2, 1, "div", 14);
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const bkn_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ctx_r1.colors[ctx_r1.type(bkn_r4)][1])("background-color", ctx_r1.colors[ctx_r1.type(bkn_r4)][0]);
    \u0275\u0275property("matTooltip", bkn_r4.title + (ctx_r1.location(bkn_r4) ? "\n" + ctx_r1.location(bkn_r4) : "") + "\n" + (bkn_r4.user_name || ((tmp_23_0 = \u0275\u0275pipeBind1(2, 10, \u0275\u0275pipeBind1(1, 8, bkn_r4.host))) == null ? null : tmp_23_0.name) || bkn_r4.host) + "\n" + \u0275\u0275pipeBind2(3, 12, bkn_r4.date, "shortTime") + " - " + \u0275\u0275pipeBind2(4, 15, bkn_r4.date_end, "shortTime"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", bkn_r4.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.location(bkn_r4) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 18, bkn_r4.date, "shortTime"), " ");
  }
}
function ScheduleWeekViewComponent_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 16);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4, "No bookings");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleWeekViewComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ScheduleWeekViewComponent_For_7_For_2_Template, 11, 21, "button", 10, _forTrack06);
    \u0275\u0275conditionalCreate(3, ScheduleWeekViewComponent_For_7_Conditional_3_Template, 5, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const day_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-30", day_r5.is_past);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.bookings_by_date()[day_r5.id] || \u0275\u0275pureFunction0(3, _c13));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_13_0 = ctx_r1.bookings_by_date()[day_r5.id]) == null ? null : tmp_13_0.length) ? 3 : -1);
  }
}
var ScheduleWeekViewComponent = class _ScheduleWeekViewComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._state = inject(ScheduleStateService);
    this._org = inject(OrganisationService);
    this.date = input(Date.now(), ...ngDevMode ? [{ debugName: "date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bookings = input([], ...ngDevMode ? [{ debugName: "bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colors = BOOKING_TYPE_COLORS;
    this._scroll_container = viewChild("scrollContainer", ...ngDevMode ? [{ debugName: "_scroll_container" }] : (
      /* istanbul ignore next */
      []
    ));
    this.weekdays = computed(() => {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const date = addDays(startOfWeek(this.date()), i);
        days.push({
          id: format(date, "yyyy-MM-dd"),
          date: date.valueOf(),
          is_past: isBefore(date, startOfDay(Date.now())),
          is_today: isSameDay(date, Date.now())
        });
      }
      return days;
    }, ...ngDevMode ? [{ debugName: "weekdays" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bookings_by_date = computed(() => {
      const date_map = {};
      for (const bkn of this.bookings() || []) {
        const date = format(bkn.date, "yyyy-MM-dd");
        if (!date_map[date])
          date_map[date] = [];
        date_map[date].push(bkn);
      }
      return date_map;
    }, ...ngDevMode ? [{ debugName: "bookings_by_date" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      this.weekdays();
      this._scrollToCurrentDay();
    });
  }
  _scrollToCurrentDay() {
    const container = this._scroll_container()?.nativeElement;
    if (!container)
      return;
    setTimeout(() => {
      const today_column = container.querySelector('[data-is-today="true"]');
      if (!today_column)
        return;
      const container_rect = container.getBoundingClientRect();
      const column_rect = today_column.getBoundingClientRect();
      const current_scroll = container.scrollLeft;
      const column_relative_to_container = column_rect.left - container_rect.left + current_scroll;
      const container_center = container.clientWidth / 2;
      const column_center = column_rect.width / 2;
      const scroll_position = column_relative_to_container - container_center + column_center;
      container.scrollTo({
        left: scroll_position,
        behavior: "smooth"
      });
    }, 0);
  }
  type(booking) {
    if (booking instanceof Booking)
      return booking.booking_type;
    return booking.extension_data?.shared_event ? "group-event" : "event";
  }
  location(booking) {
    let location = "";
    let level_name = "";
    if (booking instanceof Booking) {
      location = booking.location || booking.asset_name || "";
      const level = this._org.levelWithID(booking.zones);
      level_name = level?.display_name || level?.name || "";
    } else {
      location = booking.location || booking.space?.display_name || booking.space?.name || booking.system?.name || "";
      level_name = booking.space?.level?.display_name || booking.space?.level?.name || booking.system?.zones ? this._org.levelWithID(booking.system?.zones || [])?.display_name || this._org.levelWithID(booking.system?.zones || [])?.name : "";
    }
    if (location && level_name) {
      return `${location} - ${level_name}`;
    }
    return location || level_name || "";
  }
  viewBooking(bkn) {
    this._dialog.closeAll();
    if (bkn instanceof CalendarEvent) {
      if (bkn.extension_data?.shared_event) {
        this._dialog.open(GroupEventDetailsModalComponent, {
          data: {
            event: bkn,
            edit_fn: (i) => this._state.edit(i),
            remove_fn: (i, t) => this._state.remove(i, t),
            concierge: false
          }
        });
      } else {
        this._dialog.open(EventDetailsModalComponent, {
          data: {
            event: bkn,
            edit_fn: (i) => this._state.edit(i),
            remove_fn: (i, t) => this._state.remove(i, t)
          }
        });
      }
    } else {
      const view_component = bkn.booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
      const data = {
        booking: bkn.booking_type === "group-event" ? { booking: bkn, concierge: false } : bkn,
        edit_fn: (i) => this._state.editBooking(i),
        remove_fn: (i, t) => this._state.remove(i, t),
        end_fn: (i) => this._state.end(i)
      };
      this._dialog.open(view_component, { data });
    }
  }
  static {
    this.\u0275fac = function ScheduleWeekViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleWeekViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleWeekViewComponent, selectors: [["schedule-week-view"]], viewQuery: function ScheduleWeekViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._scroll_container, _c03, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { date: [1, "date"], bookings: [1, "bookings"], loading: [1, "loading"] }, decls: 8, vars: 0, consts: [["scrollContainer", ""], ["dayColumn", ""], [1, "h-full", "w-full", "overflow-auto"], [1, "m-2"], [1, "grid", "w-full", "min-w-[87.5rem]", "grid-cols-7", "gap-2"], ["header", "", 1, "flex", "items-center", "justify-center", "space-x-2", "py-2"], ["body", "", 1, "flex", "min-h-[calc(100vh-15rem)]", "flex-col", "space-y-2", "rounded-xl", "border", "border-base-300", "bg-base-100", "p-2", 3, "opacity-30"], [3, "matTooltip"], [1, "relative", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "font-mono", "text-xs", 3, "matTooltip"], ["body", "", 1, "flex", "min-h-[calc(100vh-15rem)]", "flex-col", "space-y-2", "rounded-xl", "border", "border-base-300", "bg-base-100", "p-2"], ["matRipple", "", 1, "w-full", "rounded-lg", "border", "bg-base-100", "p-2", "text-left", "text-black", 3, "border-color", "background-color", "matTooltip"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "opacity-30"], ["matRipple", "", 1, "w-full", "rounded-lg", "border", "bg-base-100", "p-2", "text-left", "text-black", 3, "click", "matTooltip"], [1, "truncate", "text-sm"], [1, "truncate", "text-xs", "opacity-75"], [1, "text-xs"], [1, "text-4xl"]], template: function ScheduleWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
        \u0275\u0275repeaterCreate(4, ScheduleWeekViewComponent_For_5_Template, 8, 17, "div", 5, _forTrack06);
        \u0275\u0275repeaterCreate(6, ScheduleWeekViewComponent_For_7_Template, 4, 4, "div", 6, _forTrack06);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.weekdays());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.weekdays());
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      AsyncPipe,
      DatePipe,
      UserPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleWeekViewComponent, [{
    type: Component,
    args: [{ selector: `schedule-week-view`, template: `
        <div #scrollContainer class="h-full w-full overflow-auto">
            <div class="m-2">
                <div class="grid w-full min-w-[87.5rem] grid-cols-7 gap-2">
                    @for (day of weekdays(); track day.id) {
                        <div
                            #dayColumn
                            header
                            class="flex items-center justify-center space-x-2 py-2"
                            [attr.data-is-today]="day.is_today"
                        >
                            <div
                                [matTooltip]="
                                    day.is_today
                                        ? 'Today'
                                        : (day.date | date: 'fullDate')
                                "
                            >
                                {{ day.date | date: 'EEE, dd' }}
                            </div>
                            <div
                                class="relative flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs"
                                [class.bg-base-300]="!day.is_today"
                                [class.bg-info]="day.is_today"
                                [class.text-info-content]="day.is_today"
                                [matTooltip]="
                                    (bookings_by_date()[day.id]?.length || 0) +
                                    ' bookings'
                                "
                            >
                                {{ bookings_by_date()[day.id]?.length || 0 }}
                            </div>
                        </div>
                    }
                    @for (day of weekdays(); track day.id) {
                        <div
                            body
                            class="flex min-h-[calc(100vh-15rem)] flex-col space-y-2 rounded-xl border border-base-300 bg-base-100 p-2"
                            [class.opacity-30]="day.is_past"
                        >
                            @for (
                                bkn of bookings_by_date()[day.id] || [];
                                track bkn.id
                            ) {
                                <button
                                    matRipple
                                    class="w-full rounded-lg border bg-base-100 p-2 text-left text-black"
                                    [style.border-color]="colors[type(bkn)][1]"
                                    [style.background-color]="
                                        colors[type(bkn)][0]
                                    "
                                    (click)="viewBooking(bkn)"
                                    [matTooltip]="
                                        bkn.title +
                                        (location(bkn)
                                            ? '
' + location(bkn)
                                            : '') +
                                        '
' +
                                        ($any(bkn).user_name ||
                                            ($any(bkn).host | user | async)?.name ||
                                            $any(bkn).host) +
                                        '
' +
                                        (bkn.date | date: 'shortTime') +
                                        ' - ' +
                                        (bkn.date_end | date: 'shortTime')
                                    "
                                >
                                    <div class="truncate text-sm">
                                        {{ bkn.title }}
                                    </div>
                                    @if (location(bkn)) {
                                        <div
                                            class="truncate text-xs opacity-75"
                                        >
                                            {{ location(bkn) }}
                                        </div>
                                    }
                                    <div class="text-xs">
                                        {{ bkn.date | date: 'shortTime' }}
                                    </div>
                                </button>
                            }
                            @if (!bookings_by_date()[day.id]?.length) {
                                <div
                                    class="flex h-full w-full flex-col items-center justify-center opacity-30"
                                >
                                    <icon class="text-4xl">event_busy</icon>
                                    <div>No bookings</div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      UserPipe
    ] }]
  }], () => [], { date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], _scroll_container: [{ type: ViewChild, args: ["scrollContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleWeekViewComponent, { className: "ScheduleWeekViewComponent", filePath: "apps/workplace/src/app/schedule/schedule-week-view.component.ts", lineNumber: 154 });
})();

// apps/workplace/src/app/schedule/schedule.component.ts
function ScheduleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function ScheduleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "schedule-day-view", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("date", ctx_r0.date())("bookings", ctx_r0.bookings())("loading", ctx_r0.loading());
  }
}
function ScheduleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "schedule-week-view", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("date", ctx_r0.date())("bookings", ctx_r0.bookings())("loading", ctx_r0.loading());
  }
}
function ScheduleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "schedule-list-view", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("date", ctx_r0.date())("end_date", ctx_r0.end_date())("bookings", ctx_r0.bookings())("loading", ctx_r0.loading());
  }
}
function ScheduleComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 8);
  }
}
function ScheduleComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var ScheduleComponent = class _ScheduleComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ScheduleStateService);
    this._route = inject(ActivatedRoute);
    this.b_list = this._state.bookings;
    this.bookings = this._state.filtered_bookings;
    this.loading = this._state.loading;
    this.view = signal("day", ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
    this.date = this._state.date;
    this.end_date = this._state.end_date;
    this.setDate = (d) => this._state.setDate(d);
    this.setEndDate = (d) => this._state.setEndDate(d);
  }
  get period() {
    return this._state.getOptions().period;
  }
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  ngOnInit() {
    this.setOptions({ period: "day" });
    this._state.triggerPoll();
    this.subscription("poll", this._state.startPolling());
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("view")) {
        this.view.set(params.get("view"));
        if (this.view() === "week") {
          this.setOptions({ period: "week" });
        } else if (this.view() === "list") {
          this.setOptions({ period: "range" });
        } else {
          this.setOptions({ period: "day" });
        }
      }
    }));
  }
  setOptions(options) {
    this._state.setOptions(options);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ScheduleComponent_BaseFactory;
      return function ScheduleComponent_Factory(__ngFactoryType__) {
        return (\u0275ScheduleComponent_BaseFactory || (\u0275ScheduleComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ScheduleComponent)))(__ngFactoryType__ || _ScheduleComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleComponent, selectors: [["app-schedule"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 10, consts: [[3, "viewChange", "dateChange", "end_dateChange", "view", "date", "end_date"], [1, "bg-base-200", "relative", "flex", "h-1/2", "flex-1", "flex-col", "sm:flex-row"], [1, "relative", "z-50", "hidden", "bg-base-100", "sm:block", 3, "bookings", "view"], [1, "flex", "h-full", "flex-1", "flex-col", "overflow-auto"], [1, "sticky", "top-0", "z-20", 3, "bookings"], [1, "relative", "z-10", 3, "date", "bookings", "loading"], [1, "h-1/2", "flex-1", 3, "date", "bookings", "loading"], [1, "p-4"], ["mode", "indeterminate", 1, "absolute", "inset-x-0", "bottom-0"], [1, "space-y-3", 3, "date", "end_date", "bookings", "loading"]], template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ScheduleComponent_Conditional_0_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(1, "schedule-topbar", 0);
        \u0275\u0275twoWayListener("viewChange", function ScheduleComponent_Template_schedule_topbar_viewChange_1_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return $event;
        });
        \u0275\u0275listener("dateChange", function ScheduleComponent_Template_schedule_topbar_dateChange_1_listener($event) {
          return ctx.setDate($event);
        })("end_dateChange", function ScheduleComponent_Template_schedule_topbar_end_dateChange_1_listener($event) {
          return ctx.setEndDate($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275element(3, "schedule-sidebar", 2);
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "schedule-filters", 4);
        \u0275\u0275conditionalCreate(6, ScheduleComponent_Conditional_6_Template, 1, 3, "schedule-day-view", 5)(7, ScheduleComponent_Conditional_7_Template, 1, 3, "schedule-week-view", 6)(8, ScheduleComponent_Conditional_8_Template, 2, 4, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, ScheduleComponent_Conditional_9_Template, 1, 0, "mat-progress-bar", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, ScheduleComponent_Conditional_10_Template, 1, 0, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.hide_nav ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("view", ctx.view);
        \u0275\u0275property("date", ctx.date())("end_date", ctx.end_date());
        \u0275\u0275advance(2);
        \u0275\u0275property("bookings", ctx.b_list())("view", ctx.view());
        \u0275\u0275advance(2);
        \u0275\u0275property("bookings", ctx.b_list());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "day" ? 6 : ctx.view() === "week" ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_nav ? 10 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      MatRippleModule,
      MatProgressBarModule,
      MatProgressBar,
      MatFormFieldModule,
      MatSelectModule,
      FooterMenuComponent,
      ScheduleFiltersComponent,
      ScheduleSidebarComponent,
      TopbarComponent,
      ScheduleTopbarComponent,
      ScheduleListViewComponent,
      ScheduleWeekViewComponent,
      ScheduleDayViewComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleComponent, [{
    type: Component,
    args: [{ selector: "app-schedule", template: `
        @if (!hide_nav) {
            <topbar />
        }
        <schedule-topbar
            [(view)]="view"
            [date]="date()"
            (dateChange)="setDate($event)"
            [end_date]="end_date()"
            (end_dateChange)="setEndDate($event)"
        />
        <div
            class="bg-base-200 relative flex h-1/2 flex-1 flex-col sm:flex-row"
        >
            <schedule-sidebar
                class="relative z-50 hidden bg-base-100 sm:block"
                [bookings]="b_list()"
                [view]="view()"
            ></schedule-sidebar>
            <div class="flex h-full flex-1 flex-col overflow-auto">
                <schedule-filters
                    class="sticky top-0 z-20"
                    [bookings]="b_list()"
                ></schedule-filters>
                @if (view() === 'day') {
                    <schedule-day-view
                        [date]="date()"
                        [bookings]="bookings()"
                        [loading]="loading()"
                        class="relative z-10"
                    />
                } @else if (view() === 'week') {
                    <schedule-week-view
                        class="h-1/2 flex-1"
                        [date]="date()"
                        [bookings]="bookings()"
                        [loading]="loading()"
                    />
                } @else {
                    <div class="p-4">
                        <schedule-list-view
                            [date]="date()"
                            [end_date]="end_date()"
                            [bookings]="bookings()"
                            [loading]="loading()"
                            class="space-y-3"
                        />
                    </div>
                }
            </div>
            @if (loading()) {
                <mat-progress-bar
                    class="absolute inset-x-0 bottom-0"
                    mode="indeterminate"
                ></mat-progress-bar>
            }
        </div>
        @if (!hide_nav) {
            <footer-menu />
        }
    `, imports: [
      CommonModule,
      FormsModule,
      MatRippleModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatSelectModule,
      FooterMenuComponent,
      ScheduleFiltersComponent,
      ScheduleSidebarComponent,
      TopbarComponent,
      ScheduleTopbarComponent,
      ScheduleListViewComponent,
      ScheduleWeekViewComponent,
      ScheduleDayViewComponent
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleComponent, { className: "ScheduleComponent", filePath: "apps/workplace/src/app/schedule/schedule.component.ts", lineNumber: 113 });
})();

// apps/workplace/src/app/schedule/schedule.module.ts
var ROUTES = [
  {
    path: "",
    component: ScheduleComponent,
    title: "Your Bookings"
  },
  { path: "**", redirectTo: "" }
];
var AppScheduleModule = class _AppScheduleModule {
  static {
    this.\u0275fac = function AppScheduleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppScheduleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppScheduleModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [ScheduleComponent, RouterModule.forChild(ROUTES)] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppScheduleModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [ScheduleComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppScheduleModule
};
//# sourceMappingURL=schedule.module-UG2T2FGE.js.map
