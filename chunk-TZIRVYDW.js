import {
  DEFAULT_COLOURS,
  DateFieldComponent,
  DurationFieldComponent,
  EventFormService,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  NewUserModalComponent,
  isSameMonth,
  queryCalendars,
  searchGuests,
  searchStaff,
  startOfMonth
} from "./chunk-QH62YOE5.js";
import {
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  COMMA,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  ENTER,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  ImageCarouselComponent,
  InteractiveMapComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapPinComponent,
  MapsPeopleService,
  MatCheckbox,
  MatCheckboxModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NO_RECURR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  Oa,
  OrganisationService,
  ReactiveFormsModule,
  SettingsService,
  SettingsToggleComponent,
  SpacesService,
  StaffUser,
  TimeFieldComponent,
  TranslatePipe,
  UPLOAD_PERMISSIONS_MODAL,
  USER_DOMAIN,
  UploadPermissionsModalComponent,
  User,
  UserAvatarComponent,
  Ut,
  We,
  addDays,
  addMonths,
  addYears,
  catchError,
  combineLatest,
  contentChild,
  csvToJson,
  currentUser,
  debounceTime,
  downloadFile,
  endOfDay,
  first,
  flatten,
  formatRecurrence,
  forwardRef,
  fromBookingRecurrence,
  fromEventRecurrence,
  inject,
  input,
  isAfter,
  isBefore,
  isMobileSafari,
  isSameDay,
  map,
  model,
  nextValueFrom,
  notifyError,
  of,
  output,
  randomInt,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  startOfWeek,
  switchMap,
  takeWhile,
  tap,
  toBookingRecurrence,
  toEventRecurrence,
  unique,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-Q7N7E4GW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// libs/form-fields/src/lib/date-range-calendar.component.ts
function DateRangeCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, weekday_r1, "EEE"), " ");
  }
}
function DateRangeCalendarComponent_For_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function DateRangeCalendarComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function DateRangeCalendarComponent_For_16_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectDate(day_r3.id));
    })("mouseenter", function DateRangeCalendarComponent_For_16_Template_button_mouseenter_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setHoveredDate(day_r3.id));
    });
    \u0275\u0275conditionalCreate(1, DateRangeCalendarComponent_For_16_Conditional_1_Template, 1, 0, "div", 9);
    \u0275\u0275conditionalCreate(2, DateRangeCalendarComponent_For_16_Conditional_2_Template, 1, 0, "div", 10);
    \u0275\u0275conditionalCreate(3, DateRangeCalendarComponent_For_16_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275conditionalCreate(4, DateRangeCalendarComponent_For_16_Conditional_4_Template, 1, 0, "div", 12);
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, DateRangeCalendarComponent_For_16_Conditional_8_Template, 1, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-secondary-content", day_r3.is_start || day_r3.is_end);
    \u0275\u0275property("disabled", day_r3.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_selected && !day_r3.is_start && !day_r3.is_end ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_start && ctx_r3.end_after_start ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_end && ctx_r3.end_after_start ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_start || day_r3.is_end ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !day_r3.is_month);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 11, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r3.is_today ? 8 : -1);
  }
}
var _DateRangeCalendarComponent = class _DateRangeCalendarComponent {
  constructor() {
    this.from_date = input(startOfDay(Date.now()).valueOf(), { alias: "from" });
    this.to_date = input(void 0, { alias: "to" });
    this.offset_weekday = input(0);
    this.start = model(void 0);
    this.end = model(void 0);
    this.month = model(startOfDay(Date.now()).valueOf());
    this.startChange = output();
    this.endChange = output();
    this.hovered_date = null;
    this.weekdays = [];
    this.month_days = [];
  }
  get end_after_start() {
    const end = this.end();
    return end && end > this.start() && !isSameDay(end, this.start());
  }
  ngOnInit() {
    this._setWeekdays();
    this._setMonthDays();
  }
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this._setWeekdays();
      this._setMonthDays();
    }
    if (changes.start) {
      this._setMonthDays();
      this.month.set(this.start() || Date.now());
    }
    if (changes.month) {
      this._setMonthDays();
    }
    if (changes.end)
      this._setMonthDays();
  }
  selectDate(date) {
    const start = this.start();
    if (!start || date < start) {
      this.start.set(date);
      this.startChange.emit(date);
    } else {
      this.end.set(date);
      this.endChange.emit(date);
    }
    this._setMonthDays();
  }
  setHoveredDate(date) {
    if (!this.start())
      return;
    this.end.set(date);
    this._setMonthDays();
  }
  trackByFn(index, day) {
    return day.id;
  }
  nextMonth() {
    this.month.set(addMonths(this.month(), 1).valueOf());
    this._setMonthDays();
  }
  previousMonth() {
    this.month.set(addMonths(this.month(), -1).valueOf());
    this._setMonthDays();
  }
  _setMonthDays() {
    const start = startOfWeek(startOfMonth(this.month()), {
      weekStartsOn: this.offset_weekday()
    });
    this.month_days = Array.from(Array(7 * 6).keys()).map((i) => {
      const date = addDays(start, i).valueOf();
      const end = this.end();
      const from_date = this.from_date();
      const to_date = this.to_date();
      return {
        id: date,
        disabled: from_date && isBefore(date, from_date) || to_date && isAfter(date, to_date),
        is_today: isSameDay(date, Date.now()),
        is_start: isSameDay(date, this.start()),
        is_end: isSameDay(date, this.end()),
        is_month: isSameMonth(date, this.month()),
        is_selected: end && date >= startOfDay(this.start()).valueOf() && date <= endOfDay(end).valueOf()
      };
    });
  }
  _setWeekdays() {
    const start = startOfWeek(Date.now(), {
      weekStartsOn: this.offset_weekday()
    });
    this.weekdays = Array.from(Array(7).keys()).map((i) => addDays(start, i));
  }
};
_DateRangeCalendarComponent.\u0275fac = function DateRangeCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateRangeCalendarComponent)();
};
_DateRangeCalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangeCalendarComponent, selectors: [["date-range-calendar"]], inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], offset_weekday: [1, "offset_weekday"], start: [1, "start"], end: [1, "end"], month: [1, "month"] }, outputs: { start: "startChange", end: "endChange", month: "monthChange", startChange: "startChange", endChange: "endChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 17, vars: 4, consts: [[1, "flex", "items-center", "justify-between"], ["month", "", 1, "px-2", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click"], [1, "grid", "h-69", "w-69", "grid-cols-7", "grid-rows-7", "gap-1"], [1, "border-base-200", "col-span-full", "grid", "grid-cols-7", "border-b"], ["weekday", "", 1, "relative", "flex", "items-center", "justify-center", "text-sm", "opacity-60"], [1, "hover:bg-base-200", "relative", "h-9", "w-9", "rounded-full", 3, "text-secondary-content", "disabled"], [1, "hover:bg-base-200", "relative", "h-9", "w-9", "rounded-full", 3, "click", "mouseenter", "disabled"], [1, "border-base-content", "bg-base-200", "absolute", "-inset-x-0.5", "inset-y-0", "border-y", "border-dashed"], [1, "border-base-content", "bg-base-200", "absolute", "inset-y-0", "-right-0.5", "w-[calc(50%+2px)]", "border-y", "border-dashed"], [1, "border-base-content", "bg-base-200", "absolute", "inset-y-0", "-left-0.5", "w-[calc(50%+2px)]", "border-y", "border-dashed"], [1, "bg-secondary", "absolute", "inset-0", "z-10", "flex", "items-center", "justify-center", "rounded-full"], ["matRipple", "", 1, "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center", "rounded-full"], [1, "border-secondary", "absolute", "-inset-[3px]", "z-10", "flex", "items-center", "justify-center", "rounded-full", "border"]], template: function DateRangeCalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
    \u0275\u0275listener("click", function DateRangeCalendarComponent_Template_button_click_5_listener() {
      return ctx.previousMonth();
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 3);
    \u0275\u0275listener("click", function DateRangeCalendarComponent_Template_button_click_8_listener() {
      return ctx.nextMonth();
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 4)(12, "div", 5);
    \u0275\u0275repeaterCreate(13, DateRangeCalendarComponent_For_14_Template, 3, 4, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, DateRangeCalendarComponent_For_16_Template, 9, 14, "button", 7, ctx.trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx.month(), "MMMM yyyy"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx.weekdays);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.month_days);
  }
}, dependencies: [CommonModule, DatePipe, IconComponent], encapsulation: 2 });
var DateRangeCalendarComponent = _DateRangeCalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeCalendarComponent, [{
    type: Component,
    args: [{ selector: `date-range-calendar`, template: `
        <div class="flex items-center justify-between">
            <div month class="px-2 font-medium">
                {{ month() | date: 'MMMM yyyy' }}
            </div>
            <div class="flex items-center space-x-2">
                <button icon matRipple (click)="previousMonth()">
                    <icon>chevron_left</icon>
                </button>
                <button icon matRipple (click)="nextMonth()">
                    <icon>chevron_right</icon>
                </button>
            </div>
        </div>
        <div class="grid h-69 w-69 grid-cols-7 grid-rows-7 gap-1">
            <div
                class="border-base-200 col-span-full grid grid-cols-7 border-b"
            >
                @for (weekday of weekdays; track weekday) {
                    <div
                        weekday
                        class="relative flex items-center justify-center text-sm opacity-60"
                    >
                        {{ weekday | date: 'EEE' }}
                    </div>
                }
            </div>
            @for (day of month_days; track trackByFn($index, day)) {
                <button
                    class="hover:bg-base-200 relative h-9 w-9 rounded-full"
                    [class.text-secondary-content]="day.is_start || day.is_end"
                    [disabled]="day.disabled"
                    (click)="selectDate(day.id)"
                    (mouseenter)="setHoveredDate(day.id)"
                >
                    @if (day.is_selected && !day.is_start && !day.is_end) {
                        <div
                            class="border-base-content bg-base-200 absolute -inset-x-0.5 inset-y-0 border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_start && end_after_start) {
                        <div
                            class="border-base-content bg-base-200 absolute inset-y-0 -right-0.5 w-[calc(50%+2px)] border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_end && end_after_start) {
                        <div
                            class="border-base-content bg-base-200 absolute inset-y-0 -left-0.5 w-[calc(50%+2px)] border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_start || day.is_end) {
                        <div
                            class="bg-secondary absolute inset-0 z-10 flex items-center justify-center rounded-full"
                        ></div>
                    }
                    <div
                        matRipple
                        class="absolute inset-0 z-20 flex items-center justify-center rounded-full"
                        [class.opacity-30]="!day.is_month"
                    >
                        {{ day.id | date: 'd' }}
                    </div>
                    @if (day.is_today) {
                        <div
                            class="border-secondary absolute -inset-[3px] z-10 flex items-center justify-center rounded-full border"
                        ></div>
                    }
                </button>
            }
        </div>
    `, imports: [CommonModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangeCalendarComponent, { className: "DateRangeCalendarComponent", filePath: "libs/form-fields/src/lib/date-range-calendar.component.ts", lineNumber: 101 });
})();

// libs/form-fields/src/lib/date-range-field.component.ts
var _c0 = ["startDate"];
var _c1 = ["endDate"];
var _c2 = [[["input", "startDate", ""]], [["input", "endDate", ""]]];
var _c3 = ["input[startDate]", "input[endDate]"];
function DateRangeFieldComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "date-range-calendar", 6);
    \u0275\u0275listener("startChange", function DateRangeFieldComponent_ng_template_14_Template_date_range_calendar_startChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStartDate($event));
    })("endChange", function DateRangeFieldComponent_ng_template_14_Template_date_range_calendar_endChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setEndDate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("month", ((tmp_2_0 = ctx_r1.start_date()) == null ? null : tmp_2_0.control == null ? null : tmp_2_0.control.value) || ctx_r1.now)("from", ctx_r1.from)("to", ctx_r1.until)("offset_weekday", ctx_r1.week_start());
  }
}
var _DateRangeFieldComponent = class _DateRangeFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.from_date = input(startOfDay(Date.now()).valueOf(), { alias: "from" });
    this.to_date = input(void 0, { alias: "to" });
    this.week_start = input(0);
    this.disabled = input(false);
    this.short = input(false);
    this.now = Date.now();
    this.start_date = contentChild("startDate", { read: NgControl });
    this.end_date = contentChild("endDate", { read: NgControl });
    this._tooltip = viewChild(CustomTooltipComponent);
  }
  /** First allowed date on the calendar */
  get from() {
    const from = this.from_date();
    return from !== void 0 ? from : startOfDay(/* @__PURE__ */ new Date()).valueOf();
  }
  /** Current date value */
  get until() {
    return this.to_date();
  }
  setStartDate(date) {
    const start_date = this.start_date();
    if (!start_date)
      return;
    start_date.control.setValue(date);
  }
  setEndDate(date) {
    this._tooltip()?.close();
    const end_date = this.end_date();
    if (!end_date)
      return;
    end_date.control.setValue(date);
  }
};
_DateRangeFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DateRangeFieldComponent_BaseFactory;
  return function DateRangeFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275DateRangeFieldComponent_BaseFactory || (\u0275DateRangeFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DateRangeFieldComponent)))(__ngFactoryType__ || _DateRangeFieldComponent);
  };
})();
_DateRangeFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangeFieldComponent, selectors: [["date-range-field"]], contentQueries: function DateRangeFieldComponent_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuerySignal(dirIndex, ctx.start_date, _c0, 5, NgControl);
    \u0275\u0275contentQuerySignal(dirIndex, ctx.end_date, _c1, 5, NgControl);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, viewQuery: function DateRangeFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], week_start: [1, "week_start"], disabled: [1, "disabled"], short: [1, "short"] }, features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c3, decls: 16, vars: 12, consts: [["calendar_picker", ""], ["matRipple", "", "type", "button", "role", "date-picker", "customTooltip", "", "yPosition", "top", 1, "border-neutral", "outline-base-content", "hover:border-base-content", "flex", "min-w-max", "items-center", "space-x-2", "rounded-sm", "border", "px-4", "py-2", "focus:outline-2", 3, "content", "disabled"], [1, "flex-1", "whitespace-nowrap"], [1, "text-2xl"], [1, "hidden"], [1, "bg-base-100", "relative", "w-73", "rounded-sm", "px-2", "py-4"], [3, "startChange", "endChange", "month", "from", "to", "offset_weekday"]], template: function DateRangeFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c2);
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5, "\u2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 2);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 3);
    \u0275\u0275text(10, "today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 4);
    \u0275\u0275projection(12);
    \u0275\u0275projection(13, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DateRangeFieldComponent_ng_template_14_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const calendar_picker_r3 = \u0275\u0275reference(15);
    \u0275\u0275classProp("opacity-30", ctx.disabled());
    \u0275\u0275property("content", calendar_picker_r3)("disabled", ctx.disabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, ((tmp_4_0 = ctx.start_date()) == null ? null : tmp_4_0.value) || ctx.now, "MMM d, yyyy"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 9, ((tmp_5_0 = ctx.end_date()) == null ? null : tmp_5_0.value) || ctx.now, "MMM d, yyyy"), " ");
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  DateRangeCalendarComponent,
  IconComponent,
  CustomTooltipComponent
], encapsulation: 2 });
var DateRangeFieldComponent = _DateRangeFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeFieldComponent, [{
    type: Component,
    args: [{ selector: "date-range-field", template: `
        <button
            matRipple
            class="border-neutral outline-base-content hover:border-base-content flex min-w-max items-center space-x-2 rounded-sm border px-4 py-2 focus:outline-2"
            type="button"
            role="date-picker"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
        >
            <div class="flex-1 whitespace-nowrap">
                {{ start_date()?.value || now | date: 'MMM d, yyyy' }}
            </div>
            <div>&ndash;</div>
            <div class="flex-1 whitespace-nowrap">
                {{ end_date()?.value || now | date: 'MMM d, yyyy' }}
            </div>
            <icon class="text-2xl">today</icon>
        </button>
        <div class="hidden">
            <ng-content select="input[startDate]"></ng-content>
            <ng-content select="input[endDate]"></ng-content>
        </div>
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-73 rounded-sm px-2 py-4">
                <date-range-calendar
                    [month]="start_date()?.control?.value || now"
                    [from]="from"
                    [to]="until"
                    [offset_weekday]="week_start()"
                    (startChange)="setStartDate($event)"
                    (endChange)="setEndDate($event)"
                ></date-range-calendar>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      DateRangeCalendarComponent,
      IconComponent,
      CustomTooltipComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangeFieldComponent, { className: "DateRangeFieldComponent", filePath: "libs/form-fields/src/lib/date-range-field.component.ts", lineNumber: 59 });
})();

// libs/form-fields/src/lib/action-field.component.ts
var _c02 = ["*"];
var _ActionFieldComponent = class _ActionFieldComponent {
  constructor() {
    this.name = input(void 0);
    this.disabled = input(void 0);
    this.on_action = output({ alias: "onAction" });
    this.show_tooltip = false;
  }
  /**
   * Emit that the user has performed an action on the field
   */
  performAction() {
    this.show_tooltip = !this.show_tooltip;
    this.on_action.emit();
  }
};
_ActionFieldComponent.\u0275fac = function ActionFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ActionFieldComponent)();
};
_ActionFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionFieldComponent, selectors: [["an-action-field"]], inputs: { name: [1, "name"], disabled: [1, "disabled"] }, outputs: { on_action: "onAction" }, ngContentSelectors: _c02, decls: 5, vars: 3, consts: [["type", "button", "role", "button", "form-field", "", "tabindex", "0", 1, "border-base-200", "hover:border-base-200", "flex", "w-full", "items-center", "rounded-sm", "border", "p-2", 3, "keydown.enter"], ["placeholder", "", 1, "w-0", "flex-1", "truncate", 3, "click"], [1, "text-xl", 3, "click"]], template: function ActionFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("keydown.enter", function ActionFieldComponent_Template_button_keydown_enter_0_listener() {
      return ctx.performAction();
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function ActionFieldComponent_Template_div_click_1_listener() {
      return ctx.performAction();
    });
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 2);
    \u0275\u0275listener("click", function ActionFieldComponent_Template_icon_click_3_listener() {
      return ctx.performAction();
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("disabled", ctx.disabled())("name", ctx.name());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" arrow_drop_", ctx.show_tooltip ? "up" : "down", " ");
  }
}, dependencies: [IconComponent], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0 0 0 1px #000;\n}\n/*# sourceMappingURL=action-field.component.css.map */"] });
var ActionFieldComponent = _ActionFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionFieldComponent, [{
    type: Component,
    args: [{ selector: "an-action-field", template: `
        <button
            class="border-base-200 hover:border-base-200 flex w-full items-center rounded-sm border p-2"
            type="button"
            role="button"
            [attr.disabled]="disabled()"
            [attr.name]="name()"
            form-field
            tabindex="0"
            (keydown.enter)="performAction()"
        >
            <div
                placeholder
                class="w-0 flex-1 truncate"
                (click)="performAction()"
            >
                <ng-content></ng-content>
            </div>
            <icon class="text-xl" (click)="performAction()">
                arrow_drop_{{ show_tooltip ? 'up' : 'down' }}
            </icon>
        </button>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;9cd9dce2bbb81d8923cf4f4b4c09123e464ba3159f4138eeda239e31ab33a361;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/action-field.component.ts */\n:host > div:hover {\n  box-shadow: inset 0 0 0 1px #000;\n}\n/*# sourceMappingURL=action-field.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionFieldComponent, { className: "ActionFieldComponent", filePath: "libs/form-fields/src/lib/action-field.component.ts", lineNumber: 38 });
})();

// libs/form-fields/src/lib/host-select-field.component.ts
function HostSelectFieldComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 2)(1, "div", 3)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5, "\xA0|\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275property("value", user_r1 == null ? null : user_r1.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", user_r1 == null ? null : user_r1.email, " ");
  }
}
function HostSelectFieldComponent_Conditional_9_Template(rf, ctx) {
}
var _HostSelectFieldComponent = class _HostSelectFieldComponent {
  constructor() {
    this.users = combineLatest([
      queryCalendars().pipe(catchError(() => of([])))
    ]).pipe(map(([list]) => list.filter((_) => _.can_edit).map((_) => _.primary ? currentUser() : {
      id: _.id,
      email: _.id,
      name: _.summary || _.id
    })), map((l) => l.map((_) => new StaffUser(_))), map((_) => unique([currentUser(), ..._], "email")), shareReplay(1));
    this.disabled = false;
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  async setValue(email) {
    const users = await nextValueFrom(this.users) || [];
    this.item = users?.find((_) => _.email === email);
    if (!this.item)
      this.item = new User({ email });
    if (this._onChange)
      this._onChange(this.item);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.item = value;
    if (!value?.email)
      this.item = currentUser();
  }
};
_HostSelectFieldComponent.\u0275fac = function HostSelectFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HostSelectFieldComponent)();
};
_HostSelectFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HostSelectFieldComponent, selectors: [["host-select-field"]], features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _HostSelectFieldComponent),
    multi: true
  }
])], decls: 11, vars: 8, consts: [["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "disabled", "placeholder"], [1, "leading-tight", 3, "value"], [1, "flex", "flex-col"], [1, "hidden"], [1, "text-xs", "opacity-60"]], template: function HostSelectFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-label");
    \u0275\u0275text(2, "Select host");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 1);
    \u0275\u0275listener("ngModelChange", function HostSelectFieldComponent_Template_mat_select_ngModelChange_3_listener($event) {
      return ctx.setValue($event);
    });
    \u0275\u0275repeaterCreate(4, HostSelectFieldComponent_For_5_Template, 8, 3, "mat-option", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8, "Host is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, HostSelectFieldComponent_Conditional_9_Template, 0, 0);
    \u0275\u0275pipe(10, "async");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.item == null ? null : ctx.item.email)("disabled", ctx.disabled)("placeholder", (ctx.item == null ? null : ctx.item.email) ? ctx.item.name || ctx.item.email : "Select host");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 4, ctx.users));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(10, 6, ctx.users) ? 9 : -1);
  }
}, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatError, MatSelectModule, MatSelect, MatOption, CommonModule, AsyncPipe, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
var HostSelectFieldComponent = _HostSelectFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HostSelectFieldComponent, [{
    type: Component,
    args: [{ selector: "host-select-field", template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-label>Select host</mat-label>
            <mat-select
                [ngModel]="this.item?.email"
                (ngModelChange)="setValue($event)"
                [disabled]="disabled"
                [placeholder]="
                    item?.email ? item.name || item.email : 'Select host'
                "
            >
                @for (user of users | async; track user) {
                    <mat-option [value]="user?.email" class="leading-tight">
                        <div class="flex flex-col">
                            <div>{{ user.name }}</div>
                            <span class="hidden">&nbsp;|&nbsp;</span>
                            <div class="text-xs opacity-60">
                                {{ user?.email }}
                            </div>
                        </div>
                    </mat-option>
                }
            </mat-select>
            <mat-error>Host is required</mat-error>
        </mat-form-field>
        @if (users | async) {}
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => HostSelectFieldComponent),
        multi: true
      }
    ], imports: [MatFormFieldModule, MatSelectModule, CommonModule, FormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HostSelectFieldComponent, { className: "HostSelectFieldComponent", filePath: "libs/form-fields/src/lib/host-select-field.component.ts", lineNumber: 61 });
})();

// libs/form-fields/src/lib/item-list-field.component.ts
function ItemListFieldComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 4);
    \u0275\u0275listener("removed", function ItemListFieldComponent_For_6_Template_mat_chip_row_removed_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(item_r3));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6)(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r3);
  }
}
function addChipItem(control, event) {
  if (!control)
    return;
  const input2 = event.input;
  const value = event.value;
  const item_list = control.value;
  if (value.includes(",")) {
    const list = value.split(",");
    for (const item of list) {
      if ((item || "").trim()) {
        item_list.push(item.trim());
        control.setValue(item_list);
      }
    }
  } else {
    if ((value || "").trim()) {
      item_list.push(value.trim());
      control.setValue(item_list);
    }
  }
  if (input2) {
    input2.value = "";
  }
}
function removeChipItem(control, item) {
  if (!control) {
    return;
  }
  const item_list = control.value;
  const index = item_list.indexOf(item);
  if (index >= 0) {
    item_list.splice(index, 1);
    control.setValue(item_list);
  }
}
var _ItemListFieldComponent = class _ItemListFieldComponent {
  constructor() {
    this.separators = input([ENTER, COMMA]);
    this.placeholder = input("");
    this.value = [];
    this.add = (e) => addChipItem({ value: this.value, setValue: (i) => this.setValue(i) }, e);
    this.remove = (item) => removeChipItem({ value: this.value, setValue: (i) => this.setValue(i) }, item);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.value = new_value;
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value = value;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
};
_ItemListFieldComponent.\u0275fac = function ItemListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ItemListFieldComponent)();
};
_ItemListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListFieldComponent, selectors: [["item-list-field"]], inputs: { separators: [1, "separators"], placeholder: [1, "placeholder"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _ItemListFieldComponent),
    multi: true
  }
])], decls: 8, vars: 5, consts: [["chipList", ""], ["appearance", "outline", 1, "w-full"], ["aria-label", "Zone Tags"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function ItemListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-chip-grid", 2, 0);
    \u0275\u0275repeaterCreate(5, ItemListFieldComponent_For_6_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 3);
    \u0275\u0275listener("matChipInputTokenEnd", function ItemListFieldComponent_Template_input_matChipInputTokenEnd_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.add($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.placeholder() || "User groups...");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.value);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", ctx.placeholder() || "User groups...")("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx.separators())("matChipInputAddOnBlur", true);
  }
}, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatChipsModule, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, IconComponent], encapsulation: 2 });
var ItemListFieldComponent = _ItemListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemListFieldComponent, [{
    type: Component,
    args: [{ selector: "item-list-field", template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-label>{{ placeholder() || 'User groups...' }}</mat-label>
            <mat-chip-grid #chipList aria-label="Zone Tags">
                @for (item of value; track item) {
                    <mat-chip-row (removed)="remove(item)">
                        <span class="max-w-md truncate">{{ item }}</span>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                [placeholder]="placeholder() || 'User groups...'"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators()"
                [matChipInputAddOnBlur]="true"
                (matChipInputTokenEnd)="add($event)"
            />
        </mat-form-field>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => ItemListFieldComponent),
        multi: true
      }
    ], imports: [MatFormFieldModule, MatChipsModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListFieldComponent, { className: "ItemListFieldComponent", filePath: "libs/form-fields/src/lib/item-list-field.component.ts", lineNumber: 104 });
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
    \u0275\u0275textInterpolate1(" ", (ctx_r0.render_fn() ? ctx_r0.render_fn()(ctx_r0.value) : ctx_r0.value) || "0", " ");
  }
}
var _CompactCounterComponent = class _CompactCounterComponent {
  constructor() {
    this.step = input(1);
    this.max = input(999);
    this.min = input(0);
    this.render_fn = input(void 0);
    this.disabled = model(void 0);
    this.focused = false;
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (d) => this.disabled.set(d);
  }
  /**
   * Add the `step` to the current value
   */
  add() {
    if (!this.value) {
      this.value = this.min() || 0;
    }
    const step = this.ctrl_key ? 100 * this.step() : this.shift_key ? 10 * this.step() : this.step() || 1;
    this.value += step;
    if (this.value > this.max()) {
      this.value = this.max() || 10;
    }
    this.setValue(this.value);
  }
  /** Remove the `step` from the current value */
  remove() {
    if (!this.value) {
      this.value = this.min() || 0;
    }
    const step = this.ctrl_key ? 100 * this.step() : this.shift_key ? 10 * this.step() : this.step() || 1;
    this.value -= step;
    if (this.value < this.min()) {
      this.value = this.min() || 0;
    }
    this.setValue(this.value);
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
    this.value = new_value;
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value = value;
  }
};
_CompactCounterComponent.\u0275fac = function CompactCounterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CompactCounterComponent)();
};
_CompactCounterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompactCounterComponent, selectors: [["compact-counter"]], inputs: { step: [1, "step"], max: [1, "max"], min: [1, "min"], render_fn: [1, "render_fn"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _CompactCounterComponent),
    multi: true
  }
])], decls: 11, vars: 6, consts: [["counter", "", 1, "flex", "items-center", "space-x-1", "text-base", 3, "keydown.shift", "keydown.control", "keydown.meta", "keyup.shift", "keyup.control", "keyup.meta"], ["value", "", 1, "border-secondary", "relative", "z-0", "-mx-px", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "rounded-sm", "border", "p-1", "focus-within:z-20"], [1, "px-3"], ["type", "text", "limitInput", "", 1, "absolute", "inset-0", "rounded-none", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "focus", "blur", "ngModel"], [1, "flex", "flex-col", "justify-center", "space-y-1"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-5.5", "w-5.5", "min-w-0", "rounded-sm", "border", "text-sm", 3, "click", "disabled"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-5.5", "w-5.5", "min-w-0", "rounded-sm", "border", "text-sm", 3, "click", "disabled"]], template: function CompactCounterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("keydown.shift", function CompactCounterComponent_Template_div_keydown_shift_0_listener() {
      return ctx.shift_key = true;
    }, \u0275\u0275resolveWindow)("keydown.control", function CompactCounterComponent_Template_div_keydown_control_0_listener() {
      return ctx.ctrl_key = true;
    }, \u0275\u0275resolveWindow)("keydown.meta", function CompactCounterComponent_Template_div_keydown_meta_0_listener() {
      return ctx.ctrl_key = true;
    }, \u0275\u0275resolveWindow)("keyup.shift", function CompactCounterComponent_Template_div_keyup_shift_0_listener() {
      return ctx.shift_key = false;
    }, \u0275\u0275resolveWindow)("keyup.control", function CompactCounterComponent_Template_div_keyup_control_0_listener() {
      return ctx.ctrl_key = false;
    }, \u0275\u0275resolveWindow)("keyup.meta", function CompactCounterComponent_Template_div_keyup_meta_0_listener() {
      return ctx.ctrl_key = false;
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275conditionalCreate(2, CompactCounterComponent_Conditional_2_Template, 2, 1, "span", 2);
    \u0275\u0275elementStart(3, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function CompactCounterComponent_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
      return $event;
    });
    \u0275\u0275listener("focus", function CompactCounterComponent_Template_input_focus_3_listener() {
      return ctx.focused = true;
    })("blur", function CompactCounterComponent_Template_input_blur_3_listener() {
      ctx.setValue(+ctx.value);
      return ctx.focused = false;
    });
    \u0275\u0275elementEnd()();
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
    \u0275\u0275conditional(!ctx.focused ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.value);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.value === ctx.max());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.value || ctx.value === ctx.min());
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], styles: ["\n\n[counter].disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 30%;\n}\n\n\n/*# sourceMappingURL=compact-counter.component.css.map */"] });
var CompactCounterComponent = _CompactCounterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompactCounterComponent, [{
    type: Component,
    args: [{ selector: "compact-counter", template: `
        <div
            counter
            class="flex items-center space-x-1 text-base"
            (window:keydown.shift)="shift_key = true"
            (window:keydown.control)="ctrl_key = true"
            (window:keydown.meta)="ctrl_key = true"
            (window:keyup.shift)="shift_key = false"
            (window:keyup.control)="ctrl_key = false"
            (window:keyup.meta)="ctrl_key = false"
            [class.disabled]="disabled()"
        >
            <div
                value
                class="border-secondary relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center rounded-sm border p-1 focus-within:z-20"
            >
                @if (!focused) {
                    <span class="px-3">
                        {{ (render_fn() ? render_fn()(value) : value) || '0' }}
                    </span>
                }
                <input
                    type="text"
                    class="absolute inset-0 rounded-none p-2 opacity-0 focus:opacity-100"
                    [(ngModel)]="value"
                    (focus)="focused = true"
                    (blur)="setValue(+value); focused = false"
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
                    [disabled]="value === max()"
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
                    [disabled]="!value || value === min()"
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
    ], imports: [FormsModule, IconComponent], styles: ["/* angular:styles/component:css;a6b2eba167820a19f3bfe4858772015401d059291041c0f38f39de4e622992d8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/compact-counter.component.ts */\n[counter].disabled {\n  pointer-events: none;\n  opacity: 30%;\n}\n/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=compact-counter.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompactCounterComponent, { className: "CompactCounterComponent", filePath: "libs/form-fields/src/lib/compact-counter.component.ts", lineNumber: 84 });
})();

// libs/form-fields/src/lib/recurrence-modal.component.ts
var _forTrack0 = ($index, $item) => $item[1];
function RecurrenceModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.form.value.interval === 1 ? "FORM.RECURRENCE_WEEK" : "FORM.RECURRENCE_WEEKS"));
  }
}
function RecurrenceModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.form.value.interval === 1 ? "FORM.RECURRENCE_MONTH" : "FORM.RECURRENCE_MONTHS"));
  }
}
function RecurrenceModalComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function RecurrenceModalComponent_Conditional_20_For_5_Template_button_click_0_listener() {
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
function RecurrenceModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275repeaterCreate(4, RecurrenceModalComponent_Conditional_20_For_5_Template, 3, 10, "button", 25, _forTrack0);
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
function RecurrenceModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-label");
    \u0275\u0275text(2, "Monthly Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 27)(4, "mat-option", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 29);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Monthly on day ", \u0275\u0275pipeBind2(6, 3, ctx_r0.date, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Monthly on ", ctx_r0.month_instance, " ", \u0275\u0275pipeBind2(9, 6, ctx_r0.date, "EEEE"));
  }
}
var _RecurrenceModalComponent = class _RecurrenceModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this.instance_fn = (v) => `${v} instances`;
    this.date = this._data.date || Date.now();
    this.week = this._data.iom ?? 1;
    this.available_days = this._data.available_days;
    this.end_date = endOfDay(addDays(this.date, this.available_days)).valueOf();
    this.month_instance = this.week === -1 ? "Last" : this.week === 1 ? "1st" : this.week === 2 ? "2nd" : this.week === 3 ? "3rd" : `${this.week}th`;
    this.weekdays = new Array(7).fill(0).map((_, idx) => {
      const date = addDays(startOfWeek(Date.now()), idx);
      return [date.valueOf(), date.getDay()];
    });
    this.form = new FormGroup({
      _custom: new FormControl(true),
      type: new FormControl("daily"),
      interval: new FormControl(1),
      weekdays: new FormControl(/* @__PURE__ */ new Set([new Date(this.date).getDay()])),
      week: new FormControl(0),
      monthly_type: new FormControl("day_of_month"),
      end_type: new FormControl("never"),
      end_date: new FormControl(addMonths(Date.now(), 3)),
      end_instances: new FormControl(13)
    });
  }
  ngOnInit() {
    if (this.form.value.end_date > this.end_date) {
      this.form.patchValue({ end_date: this.end_date });
    }
    this.subscription("end_type", this.form.controls.end_type.valueChanges.subscribe((type) => this._onEndTypeChange(type)));
    this.subscription("month_type", this.form.controls.monthly_type.valueChanges.subscribe((type) => this._onMonthlyTypeChange(type)));
    this.form.patchValue(__spreadProps(__spreadValues({}, this._data.value), { _custom: true }));
    if (!this.form.value.type || this.form.value.type === "none") {
      this.form.patchValue({ type: "daily" });
    }
    this._onEndTypeChange(this.form.value.end_type);
    if (this.form.value.type === "monthly" && this.form.value.week) {
      const set = this.form.value.weekdays;
      set.clear();
      set.add(new Date(this.date).getDay());
      this.form.patchValue({ weekdays: set });
    }
    if (this.available_days < 14) {
      this.form.controls.type.disable();
    }
  }
  hasDate(idx) {
    return this.form.value.weekdays.has(idx);
  }
  toggleDate(idx) {
    const set = this.form.value.weekdays;
    set.has(idx) ? set.delete(idx) : set.add(idx);
    this.form.patchValue({ weekdays: set });
  }
  _onEndTypeChange(type) {
    type !== "date" ? this.form.controls.end_date.disable() : this.form.controls.end_date.enable();
    type !== "instances" ? this.form.controls.end_instances.disable() : this.form.controls.end_instances.enable();
  }
  _onMonthlyTypeChange(type) {
    if (type === "day_of_month") {
      this.form.patchValue({ week: 0 });
    } else {
      const set = this.form.value.weekdays;
      set.clear();
      set.add(new Date(this.date).getDay());
      this.form.patchValue({ week: this.week, weekdays: set });
    }
  }
};
_RecurrenceModalComponent.\u0275fac = function RecurrenceModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecurrenceModalComponent)();
};
_RecurrenceModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurrenceModalComponent, selectors: [["recurrence-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 43, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], [1, "flex", "min-w-[24rem]", "flex-col", "space-y-2", "px-4", 3, "formGroup"], [1, "w-auto"], [1, "mt-2", "flex", "items-center", "space-x-4", "pb-4"], ["formControlName", "interval", 3, "min", "max", "step"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["formControlName", "type"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["appearance", "outline"], [1, "pb-4"], ["formControlName", "end_type"], [1, "flex", "items-center"], ["value", "never"], [1, "mt-2", "flex", "items-center"], ["value", "date"], ["formControlName", "end_date", 3, "to"], ["value", "instances"], ["formControlName", "end_instances", 1, "flex-1", 3, "render_fn", "min", "max"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["icon", "", "matRipple", "", 1, "border-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "bg-secondary", "text-secondary", "text-base-200"], ["icon", "", "matRipple", "", 1, "border-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["formControlName", "monthly_type"], ["value", "day_of_month"], ["value", "day_of_week"]], template: function RecurrenceModalComponent_Template(rf, ctx) {
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
    \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 7)(15, "mat-option", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, RecurrenceModalComponent_Conditional_18_Template, 3, 3, "mat-option", 9);
    \u0275\u0275conditionalCreate(19, RecurrenceModalComponent_Conditional_19_Template, 3, 3, "mat-option", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(20, RecurrenceModalComponent_Conditional_20_Template, 6, 3);
    \u0275\u0275conditionalCreate(21, RecurrenceModalComponent_Conditional_21_Template, 10, 9, "mat-form-field", 11);
    \u0275\u0275elementStart(22, "label", 3);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 12)(26, "mat-radio-group", 13)(27, "div", 14)(28, "mat-radio-button", 15);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 16)(32, "mat-radio-button", 17);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "a-date-field", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 16)(37, "mat-radio-button", 19);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "compact-counter", 20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "footer", 21)(42, "button", 22);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 23);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 23, "FORM.RECURRENCE_CUSTOM_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 25, "FORM.RECURRENCE_REPEAT_EVERY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 1)("max", ctx.form.value.type === "daily" ? 7 : 12)("step", 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 27, "FORM.RECURRENCE_REPEAT_EVERY"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 29, ctx.form.value.interval === 1 ? "FORM.RECURRENCE_DAY" : "FORM.RECURRENCE_DAYS"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.available_days >= 14 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_days >= 28 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.value.type === "weekly" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.value.type === "monthly" ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 31, "FORM.RECURRENCE_ENDS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 33, "FORM.RECURRENCE_ENDS_NEVER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 35, "FORM.RECURRENCE_ENDS_ON"));
    \u0275\u0275advance(2);
    \u0275\u0275property("to", ctx.end_date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 37, "FORM.RECURRENCE_ENDS_AFTER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("render_fn", ctx.instance_fn)("min", 1)("max", 53);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 39, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.form.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 41, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  ReactiveFormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
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
  TranslatePipe
], styles: ["\n\nmat-form-field[_ngcontent-%COMP%], \na-date-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\nmat-radio-button[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n/*# sourceMappingURL=recurrence-modal.component.css.map */"] });
var RecurrenceModalComponent = _RecurrenceModalComponent;
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
        <main
            class="flex min-w-[24rem] flex-col space-y-2 px-4"
            [formGroup]="form"
        >
            <label class="w-auto">{{
                'FORM.RECURRENCE_REPEAT_EVERY' | translate
            }}</label>
            <div class="mt-2 flex items-center space-x-4 pb-4">
                <compact-counter
                    formControlName="interval"
                    [min]="1"
                    [max]="form.value.type === 'daily' ? 7 : 12"
                    [step]="1"
                ></compact-counter>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-label>{{ 'FORM.RECURRENCE_REPEAT_EVERY' | translate }}</mat-label>
                    <mat-select formControlName="type">
                        <mat-option value="daily">{{
                            (form.value.interval === 1
                                ? 'FORM.RECURRENCE_DAY'
                                : 'FORM.RECURRENCE_DAYS'
                            ) | translate
                        }}</mat-option>
                        @if (available_days >= 14) {
                            <mat-option value="weekly">{{
                                (form.value.interval === 1
                                    ? 'FORM.RECURRENCE_WEEK'
                                    : 'FORM.RECURRENCE_WEEKS'
                                ) | translate
                            }}</mat-option>
                        }
                        @if (available_days >= 28) {
                            <mat-option value="monthly">{{
                                (form.value.interval === 1
                                    ? 'FORM.RECURRENCE_MONTH'
                                    : 'FORM.RECURRENCE_MONTHS'
                                ) | translate
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            @if (form.value.type === 'weekly') {
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
            @if (form.value.type === 'monthly') {
                <mat-form-field appearance="outline">
                    <mat-label>Monthly Type</mat-label>
                    <mat-select formControlName="monthly_type">
                        <mat-option value="day_of_month"
                            >Monthly on day {{ date | date: 'd' }}</mat-option
                        >
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
                <mat-radio-group formControlName="end_type">
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
                            formControlName="end_date"
                            [to]="end_date"
                        ></a-date-field>
                    </div>
                    <div class="mt-2 flex items-center">
                        <mat-radio-button value="instances">{{
                            'FORM.RECURRENCE_ENDS_AFTER' | translate
                        }}</mat-radio-button>
                        <compact-counter
                            class="flex-1"
                            formControlName="end_instances"
                            [render_fn]="instance_fn"
                            [min]="1"
                            [max]="53"
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
            <button btn matRipple class="w-32" [mat-dialog-close]="form.value">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      CommonModule,
      ReactiveFormsModule,
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
var _c03 = (a0) => ({ day: a0 });
var _c12 = (a0, a1) => ({ index: a0, day: a1 });
function RecurrenceFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "FORM.RECURRENCE_WEEKLY_ON", \u0275\u0275pureFunction1(7, _c03, \u0275\u0275pipeBind2(2, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_13_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "FORM.RECURRENCE_MONTH_INSTANCE", \u0275\u0275pureFunction2(7, _c12, ctx_r0.instance_of_month, \u0275\u0275pipeBind2(2, 1, ctx_r0.date(), "EEEE"))), " ");
  }
}
function RecurrenceFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
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
function RecurrenceFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatted_value, " ");
  }
}
var _RecurrenceFieldComponent = class _RecurrenceFieldComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.type = input("booking");
    this.date = input(Date.now());
    this.available_days = input(180);
    this.prev_type = "none";
    this.recurr_type = "none";
    this.iom = 0;
    this.value = NO_RECURR;
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  ngOnChanges(changes) {
    const dateValue = this.date();
    if (changes.date && dateValue) {
      const date = new Date(dateValue).getDate();
      let instance = Math.floor(date / 7) + (date % 7 ? 1 : 0);
      this.instance_of_month = `${instance}${instance === 2 ? "nd" : instance === 3 ? "rd" : "th"}`;
      if (instance === 4 && date >= 25 || instance === 5) {
        this.instance_of_month = "Last";
        instance = -1;
      }
      if (instance === 1)
        this.instance_of_month = "First";
      this.iom = instance;
    }
  }
  get formatted_value() {
    return !this.value ? "" : formatRecurrence(this.value);
  }
  toRaw(data) {
    return this.type() === "event" ? toEventRecurrence(data, this.date()) : toBookingRecurrence(data);
  }
  fromRaw(data) {
    return this.type() === "event" ? fromEventRecurrence(data) : fromBookingRecurrence(data);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.value = new_value;
    if (this._onChange)
      this._onChange(this.toRaw(new_value));
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    if (!value)
      return this.value = NO_RECURR;
    this.value = this.fromRaw(value || {});
    this.recurr_type = this.value._custom ? "custom_display" : this.value.type;
    this.prev_type = this.recurr_type;
  }
  openCustomRecurrenceModal() {
    const ref = this._dialog.open(RecurrenceModalComponent, {
      data: {
        value: this.value,
        iom: this.iom,
        date: this.date(),
        available_days: this.available_days()
      }
    });
    ref.afterClosed().subscribe((d) => setTimeout(() => {
      console.log("Prev Type:", this.prev_type);
      d ? this.setValue(__spreadValues({}, d)) : "";
      this.recurr_type = d ? "custom_display" : this.prev_type;
    }, 10));
  }
  setSimple(pattern) {
    const day_of_week = new Date(this.date()).getDay();
    const default_recurrence = this._settings.get("app.default_recurrence_period") || 180;
    const end_date = endOfDay(addDays(this.date(), default_recurrence)).valueOf();
    if (pattern === "none") {
      this.setValue(NO_RECURR);
      this.prev_type = this.recurr_type;
    } else if (pattern === "daily") {
      this.setValue({
        _custom: false,
        type: "daily",
        interval: 1,
        end_type: "date",
        end_date
      });
      this.prev_type = this.recurr_type;
    } else if (pattern === "weekly") {
      this.setValue({
        _custom: false,
        type: "weekly",
        interval: 1,
        weekdays: /* @__PURE__ */ new Set([day_of_week]),
        end_type: "date",
        end_date
      });
      this.prev_type = this.recurr_type;
    } else if (pattern === "monthly") {
      this.setValue({
        _custom: false,
        type: "monthly",
        interval: 1,
        weekdays: /* @__PURE__ */ new Set([day_of_week]),
        monthly_type: "day_of_week",
        week: this.iom,
        end_type: "date",
        end_date
      });
      this.prev_type = this.recurr_type;
    } else if (pattern === "yearly") {
      this.setValue({
        _custom: false,
        type: "yearly",
        interval: 1,
        end_type: "date",
        end_date: addYears(this.date(), 7).valueOf()
      });
      this.prev_type = this.recurr_type;
    }
  }
};
_RecurrenceFieldComponent.\u0275fac = function RecurrenceFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecurrenceFieldComponent)();
};
_RecurrenceFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurrenceFieldComponent, selectors: [["recurrence-field"]], inputs: { type: [1, "type"], date: [1, "date"], available_days: [1, "available_days"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _RecurrenceFieldComponent),
    multi: true
  }
]), \u0275\u0275NgOnChangesFeature], decls: 19, vars: 20, consts: [["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", "none"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["value", "yearly"], ["value", "custom_display"], ["value", "custom", 3, "click"]], template: function RecurrenceFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 1);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RecurrenceFieldComponent_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.recurr_type, $event) || (ctx.recurr_type = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function RecurrenceFieldComponent_Template_mat_select_ngModelChange_4_listener($event) {
      return ctx.setSimple($event);
    });
    \u0275\u0275elementStart(6, "mat-option", 2);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 3);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, RecurrenceFieldComponent_Conditional_12_Template, 4, 9, "mat-option", 4);
    \u0275\u0275conditionalCreate(13, RecurrenceFieldComponent_Conditional_13_Template, 4, 10, "mat-option", 5);
    \u0275\u0275conditionalCreate(14, RecurrenceFieldComponent_Conditional_14_Template, 3, 4, "mat-option", 6);
    \u0275\u0275conditionalCreate(15, RecurrenceFieldComponent_Conditional_15_Template, 2, 1, "mat-option", 7);
    \u0275\u0275elementStart(16, "mat-option", 8);
    \u0275\u0275listener("click", function RecurrenceFieldComponent_Template_mat_option_click_16_listener() {
      return ctx.openCustomRecurrenceModal();
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 10, "FORM.RECURRENCE_NONE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.recurr_type);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 12, "FORM.RECURRENCE_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 14, "FORM.RECURRENCE_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "FORM.RECURRENCE_DAILY"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.available_days() >= 14 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_days() >= 28 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(false ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.value == null ? null : ctx.value._custom) ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 18, "FORM.RECURRENCE_CUSTOM"), " ");
  }
}, dependencies: [
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSelectModule,
  MatSelect,
  MatOption,
  CommonModule,
  DatePipe,
  TranslatePipe,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n[value][_ngcontent-%COMP%] {\n  min-width: 3em;\n}\n/*# sourceMappingURL=recurrence-field.component.css.map */"] });
var RecurrenceFieldComponent = _RecurrenceFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurrenceFieldComponent, [{
    type: Component,
    args: [{ selector: "recurrence-field", template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-label>{{ 'FORM.RECURRENCE_NONE' | translate }}</mat-label>
            <mat-select
                [(ngModel)]="recurr_type"
                (ngModelChange)="setSimple($event)"
                [placeholder]="'FORM.RECURRENCE_NONE' | translate"
            >
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
                                          index: instance_of_month,
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
                @if (value?._custom) {
                    <mat-option value="custom_display">
                        {{ formatted_value }}
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurrenceFieldComponent, { className: "RecurrenceFieldComponent", filePath: "libs/form-fields/src/lib/recurrence-field.component.ts", lineNumber: 114 });
})();

// libs/events/src/lib/new-space-select-modal/new-space-details.component.ts
var _c04 = (a0) => ({ count: a0 });
var _c13 = () => ({ disable_pan: true, disable_zoom: true });
function NewSpaceDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.space().images);
  }
}
function NewSpaceDetailsComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-info", ctx_r1.alert()[0] === "info")("text-info-content", ctx_r1.alert()[0] === "info")("bg-warning", ctx_r1.alert()[0] === "warn")("text-warning-content", ctx_r1.alert()[0] === "warn")("bg-error", ctx_r1.alert()[0] === "closed")("text-error-content", ctx_r1.alert()[0] === "closed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert()[1], " ");
  }
}
function NewSpaceDetailsComponent_Conditional_0_Conditional_33_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r3, " ");
  }
}
function NewSpaceDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275repeaterCreate(5, NewSpaceDetailsComponent_Conditional_0_Conditional_33_For_6_Template, 2, 1, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CALENDAR_EVENT.FACILITIES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.space().features);
  }
}
function NewSpaceDetailsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275element(1, "interactive-map", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.space().map_id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c13));
  }
}
function NewSpaceDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275conditionalCreate(1, NewSpaceDetailsComponent_Conditional_0_Conditional_1_Template, 1, 1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function NewSpaceDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function NewSpaceDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "favorite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "section", 7)(10, "h2", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, NewSpaceDetailsComponent_Conditional_0_Conditional_12_Template, 2, 13, "div", 9);
    \u0275\u0275elementStart(13, "section", 10)(14, "h2", 11);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "icon");
    \u0275\u0275text(19, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "icon");
    \u0275\u0275text(25, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12)(29, "icon");
    \u0275\u0275text(30, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, NewSpaceDetailsComponent_Conditional_0_Conditional_33_Template, 7, 3, "section", 13);
    \u0275\u0275conditionalCreate(34, NewSpaceDetailsComponent_Conditional_0_Conditional_34_Template, 2, 5, "section", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sm:h-64", (tmp_1_0 = ctx_r1.space().images) == null ? null : tmp_1_0.length)("h-40", (tmp_2_0 = ctx_r1.space().images) == null ? null : tmp_2_0.length)("sm:h-0", !((tmp_3_0 = ctx_r1.space().images) == null ? null : tmp_3_0.length))("h-12", !((tmp_4_0 = ctx_r1.space().images) == null ? null : tmp_4_0.length))("bg-transparent!", !((tmp_5_0 = ctx_r1.space().images) == null ? null : tmp_5_0.length));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.space().images) == null ? null : tmp_6_0.length) ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info", ctx_r1.fav());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav() ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.alert() ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 22, "CALENDAR_EVENT.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 24, "CALENDAR_EVENT.CAPACITY_COUNT", \u0275\u0275pureFunction1(27, _c04, ctx_r1.space().capacity)), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.building == null ? null : ctx_r1.building.address) || (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_15_0 = ctx_r1.space().features) == null ? null : tmp_15_0.length) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_map() ? 34 : -1);
  }
}
function NewSpaceDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CALENDAR_EVENT.SPACE_LIST_INFO"), " ");
  }
}
var _NewSpaceDetailsComponent = class _NewSpaceDetailsComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this.space = input(void 0);
    this.fav = input(false);
    this.active = input(false);
    this.hide_map = input(false);
    this.alert = input(void 0);
    this.activeChange = output();
    this.close = output();
    this.toggleFav = output();
    this.map_url = "";
    this.features = [];
  }
  get level() {
    const space = this.space();
    return this._org.levelWithID(space?.zones) || space?.level;
  }
  get building() {
    return this._org.buildings.find((_) => this.space()?.zones.includes(_.id));
  }
  ngOnChanges(changes) {
    if (changes.space && this.space()) {
      this._updateFeature();
    }
  }
  _updateFeature() {
    this.map_url = this.level?.map_id;
    this.features = [
      {
        location: this.space()?.map_id,
        content: MapPinComponent
      }
    ];
  }
};
_NewSpaceDetailsComponent.\u0275fac = function NewSpaceDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSpaceDetailsComponent)();
};
_NewSpaceDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSpaceDetailsComponent, selectors: [["new-space-details"]], inputs: { space: [1, "space"], fav: [1, "fav"], active: [1, "active"], hide_map: [1, "hide_map"], alert: [1, "alert"] }, outputs: { activeChange: "activeChange", close: "close", toggleFav: "toggleFav" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["image", "", 1, "bg-neutral", "relative", "w-full"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "name", "close-space-details", 1, "bg-base-100", "absolute", "top-2", "left-2", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-space-favourite-details", 1, "bg-base-100", "absolute", "top-2", "right-2", 3, "click"], [3, "className"], [1, "h-1/2", "flex-1", "space-y-2", "p-2"], ["actions", "", 1, "z-0"], [1, "mt-4", "mb-2", "text-xl", "font-medium"], [1, "my-2", "rounded-sm", "px-2", "py-1", "text-xs", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], ["details", "", 1, "border-base-400", "relative", "mt-4!", "space-y-2", "rounded-sm", "border", "px-2", "pt-1", "pb-1"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", 1, "border-base-400", "relative", "mt-4!", "space-y-2", "rounded-sm", "border", "px-2", "pt-1", "pb-1"], ["map", "", 1, "bg-base-200", "relative", "mx-auto", "mb-2!", "h-64", "w-full", "overflow-hidden", "rounded-sm", "sm:h-48"], [1, "my-2", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "flex", "flex-wrap", "items-center"], ["for", "feat", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-2", "text-sm", "capitalize"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function NewSpaceDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewSpaceDetailsComponent_Conditional_0_Template, 35, 29)(1, NewSpaceDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.space() ? 0 : 1);
  }
}, dependencies: [
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  InteractiveMapComponent,
  ImageCarouselComponent,
  IconComponent
], encapsulation: 2 });
var NewSpaceDetailsComponent = _NewSpaceDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSpaceDetailsComponent, [{
    type: Component,
    args: [{ selector: `new-space-details`, template: `
        @if (space()) {
            <section
                image
                class="bg-neutral relative w-full"
                [class.sm:h-64]="space().images?.length"
                [class.h-40]="space().images?.length"
                [class.sm:h-0]="!space().images?.length"
                [class.h-12]="!space().images?.length"
                [class.bg-transparent!]="!space().images?.length"
            >
                @if (space().images?.length) {
                    <image-carousel
                        [images]="space().images"
                        class="absolute inset-0"
                    ></image-carousel>
                }
                <button
                    icon
                    matRipple
                    name="close-space-details"
                    (click)="close.emit()"
                    class="bg-base-100 absolute top-2 left-2 lg:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-space-favourite-details"
                    [class.text-info]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-base-100 absolute top-2 right-2"
                >
                    <icon
                        [className]="
                            fav()
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        "
                        >favorite</icon
                    >
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 p-2">
                <section actions class="z-0">
                    <h2 class="mt-4 mb-2 text-xl font-medium">
                        {{ space().display_name || space().name }}
                    </h2>
                </section>
                @if (alert()) {
                    <div
                        class="my-2 rounded-sm px-2 py-1 text-xs"
                        [class.bg-info]="alert()[0] === 'info'"
                        [class.text-info-content]="alert()[0] === 'info'"
                        [class.bg-warning]="alert()[0] === 'warn'"
                        [class.text-warning-content]="alert()[0] === 'warn'"
                        [class.bg-error]="alert()[0] === 'closed'"
                        [class.text-error-content]="alert()[0] === 'closed'"
                    >
                        {{ alert()[1] }}
                    </div>
                }
                <section
                    details
                    class="border-base-400 relative mt-4! space-y-2 rounded-sm border px-2 pt-1 pb-1"
                >
                    <h2
                        class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 text-lg font-medium"
                    >
                        {{ 'CALENDAR_EVENT.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>people</icon>
                        <p>
                            {{
                                'CALENDAR_EVENT.CAPACITY_COUNT'
                                    | translate: { count: space().capacity }
                            }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>meeting_room</icon>
                        <p>
                            {{ level?.display_name || level?.name }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <p>
                            {{
                                building?.address ||
                                    building?.display_name ||
                                    building?.name
                            }}
                        </p>
                    </div>
                </section>
                @if (space().features?.length) {
                    <section
                        facilities
                        class="border-base-400 relative mt-4! space-y-2 rounded-sm border px-2 pt-1 pb-1"
                    >
                        <h2
                            class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 text-lg font-medium"
                        >
                            {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                        </h2>
                        <div class="flex flex-wrap items-center">
                            @for (feature of space().features; track feature) {
                                <div
                                    for="feat"
                                    class="border-base-300 m-1 rounded-full border px-4 py-2 text-sm capitalize"
                                >
                                    {{ feature }}
                                </div>
                            }
                        </div>
                    </section>
                }
                @if (!hide_map()) {
                    <section
                        map
                        class="bg-base-200 relative mx-auto mb-2! h-64 w-full overflow-hidden rounded-sm sm:h-48"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="map_url"
                            [focus]="space().map_id"
                            [features]="features"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    </section>
                }
            </div>
        } @else {
            <div
                empty
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'CALENDAR_EVENT.SPACE_LIST_INFO' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      InteractiveMapComponent,
      ImageCarouselComponent,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSpaceDetailsComponent, { className: "NewSpaceDetailsComponent", filePath: "libs/events/src/lib/new-space-select-modal/new-space-details.component.ts", lineNumber: 180 });
})();

// libs/events/src/lib/new-space-select-modal/new-space-filters-display.component.ts
var _c05 = (a0) => ({ count: a0 });
function NewSpaceFiltersDisplayComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function NewSpaceFiltersDisplayComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAllFeatures());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.FILTERS_CLEAR"), " ");
  }
}
function NewSpaceFiltersDisplayComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location, " ");
  }
}
function NewSpaceFiltersDisplayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r1.start, ctx_r1.time_format), " \u2014 ", \u0275\u0275pipeBind2(2, 5, ctx_r1.end, ctx_r1.time_format), " ");
  }
}
function NewSpaceFiltersDisplayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewSpaceFiltersDisplayComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function NewSpaceFiltersDisplayComponent_For_15_Template_button_click_3_listener() {
      const feat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFeature(feat_r4));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r4);
  }
}
var _NewSpaceFiltersDisplayComponent = class _NewSpaceFiltersDisplayComponent extends AsyncHandler {
  get all_day() {
    return this._event_form.form.value.all_day;
  }
  get start() {
    return this._event_form.form.value.date;
  }
  get end() {
    const { date, duration } = this._event_form.form.value;
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor() {
    super();
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.view = input("list");
    this.viewChange = output();
    this.options = this._event_form.options$;
    this.filters = this._event_form.filters$;
    this.location = "";
  }
  ngOnInit() {
    this.subscription("opts", this.options.subscribe(({ zones }) => this._updateLocation(zones)));
  }
  async removeFeature(feat) {
    const { features } = this._event_form.filters || {};
    this._event_form.setFilters({
      features: (features || []).filter((_) => _ !== feat)
    });
  }
  async removeAllFeatures() {
    this._event_form.setFilters({ features: [] });
  }
  _updateLocation(zone_ids = []) {
    const level = this._org.levelWithID(zone_ids);
    const item = level || this._org.building;
    this.location = item?.display_name || item?.name || "";
  }
};
_NewSpaceFiltersDisplayComponent.\u0275fac = function NewSpaceFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSpaceFiltersDisplayComponent)();
};
_NewSpaceFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSpaceFiltersDisplayComponent, selectors: [["new-space-filters-display"]], inputs: { view: [1, "view"] }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 20, consts: [["filters", "", 1, "border-base-300", "bg-base-100", "sticky", "-top-1", "z-20", "-mx-1", "mb-4!", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded-sm", "border", "p-1", "pr-10!", "sm:pr-1!"], ["btn", "", "matRipple", "", "name", "clear-space-filters", 1, "mr-2", "mb-2", "min-h-8"], ["filter-item", "", "zone", ""], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "count", ""], ["filter-item", ""], ["btn", "", "matRipple", "", "name", "clear-space-filters", 1, "mr-2", "mb-2", "min-h-8", 3, "click"], [1, "truncate"], ["icon", "", "matRipple", "", "name", "remove-space-filter", 1, "-mr-4", 3, "click"]], template: function NewSpaceFiltersDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275conditionalCreate(1, NewSpaceFiltersDisplayComponent_Conditional_1_Template, 3, 3, "button", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, NewSpaceFiltersDisplayComponent_Conditional_3_Template, 2, 1, "div", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275conditionalCreate(8, NewSpaceFiltersDisplayComponent_Conditional_8_Template, 3, 8);
    \u0275\u0275conditionalCreate(9, NewSpaceFiltersDisplayComponent_Conditional_9_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, NewSpaceFiltersDisplayComponent_For_15_Template, 6, 1, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_5_0;
    let tmp_6_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 6, ctx.filters)) == null ? null : tmp_0_0.features == null ? null : tmp_0_0.features.length) > 1 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.location ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, ctx.start, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.all_day ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.all_day ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 13, "CALENDAR_EVENT.SPACE_SELECT_SIZE_X", \u0275\u0275pureFunction1(18, _c05, ((tmp_5_0 = \u0275\u0275pipeBind1(12, 11, ctx.filters)) == null ? null : tmp_5_0.capacity) || 2)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_6_0 = \u0275\u0275pipeBind1(16, 16, ctx.filters)) == null ? null : tmp_6_0.features);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, MatRippleModule, MatRipple, TranslatePipe, IconComponent], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  max-width: 100%;\n  text-align: center;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-space-filters-display.component.css.map */"] });
var NewSpaceFiltersDisplayComponent = _NewSpaceFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSpaceFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: `new-space-filters-display`, template: `
        <section
            filters
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            @if ((filters | async)?.features?.length > 1) {
                <button
                    btn
                    matRipple
                    name="clear-space-filters"
                    class="mr-2 mb-2 min-h-8"
                    (click)="removeAllFeatures()"
                >
                    {{ 'COMMON.FILTERS_CLEAR' | translate }}
                </button>
            }
            @if (location) {
                <div filter-item zone>
                    {{ location }}
                </div>
            }
            <div filter-item date>
                {{ start | date: 'mediumDate' }}
            </div>
            <div filter-item time>
                @if (!all_day) {
                    {{ start | date: time_format }} &mdash;
                    {{ end | date: time_format }}
                }
                @if (all_day) {
                    {{ 'COMMON.ALL_DAY' | translate }}
                }
            </div>
            <div filter-item count>
                {{
                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                        | translate: { count: (filters | async)?.capacity || 2 }
                }}
            </div>
            @for (feat of (filters | async)?.features; track feat) {
                <div filter-item>
                    <p class="truncate">{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-space-filter"
                        class="-mr-4"
                        (click)="removeFeature(feat)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, MatRippleModule, TranslatePipe, IconComponent], styles: ["/* angular:styles/component:css;f8b9e01403fcfea386d7e305a08b22ed6877191b4091b5eccbb05dcbe269b429;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/new-space-select-modal/new-space-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  max-width: 100%;\n  text-align: center;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-space-filters-display.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSpaceFiltersDisplayComponent, { className: "NewSpaceFiltersDisplayComponent", filePath: "libs/events/src/lib/new-space-select-modal/new-space-filters-display.component.ts", lineNumber: 96 });
})();

// libs/events/src/lib/new-space-select-modal/new-space-filters.component.ts
var _c06 = () => ({ standalone: true });
function NewSpaceFiltersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.SPACE_LOCATION"), " ");
  }
}
function NewSpaceFiltersComponent_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r4 = ctx.$implicit;
    \u0275\u0275property("value", reg_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r4.display_name || reg_r4.name, " ");
  }
}
function NewSpaceFiltersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 18);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Conditional_13_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRegion($event));
    });
    \u0275\u0275repeaterCreate(6, NewSpaceFiltersComponent_Conditional_13_For_7_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "CALENDAR_EVENT.SPACE_LOCATION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.region)("ngModelOptions", \u0275\u0275pureFunction0(10, _c06))("placeholder", \u0275\u0275pipeBind1(5, 6, "CALENDAR_EVENT.SPACE_REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 8, ctx_r2.regions));
  }
}
function NewSpaceFiltersComponent_Conditional_15_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r6 = ctx.$implicit;
    \u0275\u0275property("value", bld_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r6.display_name || bld_r6.name, " ");
  }
}
function NewSpaceFiltersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 20);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Conditional_15_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(8, NewSpaceFiltersComponent_Conditional_15_For_9_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "CALENDAR_EVENT.SPACE_LOCATION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(5, 6, ctx_r2.building))("ngModelOptions", \u0275\u0275pureFunction0(14, _c06))("placeholder", ((tmp_5_0 = \u0275\u0275pipeBind1(6, 8, ctx_r2.building)) == null ? null : tmp_5_0.display_name) || ((tmp_5_0 = \u0275\u0275pipeBind1(7, 10, ctx_r2.building)) == null ? null : tmp_5_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 12, ctx_r2.buildings));
  }
}
function NewSpaceFiltersComponent_Conditional_17_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const lvl_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = \u0275\u0275pipeBind1(2, 1, lvl_r8 == null ? null : lvl_r8.parent_id)) == null ? null : tmp_13_0.display_name, " ");
  }
}
function NewSpaceFiltersComponent_Conditional_17_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 22);
    \u0275\u0275conditionalCreate(2, NewSpaceFiltersComponent_Conditional_17_For_8_Conditional_2_Template, 5, 3, "div", 23);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function NewSpaceFiltersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 21);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Conditional_17_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ zones: $event }));
    });
    \u0275\u0275repeaterCreate(7, NewSpaceFiltersComponent_Conditional_17_For_8_Template, 5, 3, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "CALENDAR_EVENT.SPACE_LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(5, 7, ctx_r2.options)) == null ? null : tmp_3_0.zones)("ngModelOptions", \u0275\u0275pureFunction0(13, _c06))("placeholder", \u0275\u0275pipeBind1(6, 9, "CALENDAR_EVENT.SPACE_LEVEL_ANY"))("multiple", true);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 11, ctx_r2.levels));
  }
}
function NewSpaceFiltersComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-date-field", 25);
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Conditional_28_Template_a_date_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ date_end: $event }));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "FORM.DATE_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form.getRawValue().date_end)("ngModelOptions", \u0275\u0275pureFunction0(13, _c06))("from", ctx_r2.start_date)("to", ctx_r2.end_date)("short", true)("timezone", ctx_r2.timezone)("range", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 11, "FORM.DATE_ERROR"), " ");
  }
}
function NewSpaceFiltersComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-checkbox", 26);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("aria-label", \u0275\u0275pipeBind1(2, 2, "COMMON.ALL_DAY"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.ALL_DAY"), " ");
  }
}
function NewSpaceFiltersComponent_Conditional_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-time-field", 31);
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Conditional_30_Conditional_8_Template_a_time_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ date_end: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form.value.date_end)("ngModelOptions", \u0275\u0275pureFunction0(8, _c06))("from", ctx_r2.form == null ? null : (tmp_6_0 = ctx_r2.form.getRawValue()) == null ? null : tmp_6_0.date)("use_24hr", ctx_r2.use_24hr)("timezone", ctx_r2.timezone);
  }
}
function NewSpaceFiltersComponent_Conditional_30_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-duration-field", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r2.form == null ? null : (tmp_4_0 = ctx_r2.form.getRawValue()) == null ? null : tmp_4_0.date)("max", ctx_r2.max_duration)("use_24hr", ctx_r2.use_24hr)("timezone", ctx_r2.timezone);
  }
}
function NewSpaceFiltersComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 27)(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 29);
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Conditional_30_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, NewSpaceFiltersComponent_Conditional_30_Conditional_8_Template, 7, 9, "div", 27);
    \u0275\u0275conditionalCreate(9, NewSpaceFiltersComponent_Conditional_30_Conditional_9_Template, 7, 7, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(9, _c06))("use_24hr", ctx_r2.use_24hr)("timezone", ctx_r2.timezone);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.multiday() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.multiday() ? 9 : -1);
  }
}
function NewSpaceFiltersComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 15)(1, "h2", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "settings-toggle", 35);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Conditional_33_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilters({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_4_0 = \u0275\u0275pipeBind1(7, 8, ctx_r2.filters)) == null ? null : tmp_4_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c06));
  }
}
function NewSpaceFiltersComponent_Conditional_34_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "settings-toggle", 35);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Conditional_34_For_4_Conditional_0_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const feat_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFeature(feat_r14, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const feat_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.feature_display[feat_r14] || feat_r14)("ngModel", (tmp_14_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.filters)) == null ? null : tmp_14_0.features == null ? null : tmp_14_0.features.includes(feat_r14))("ngModelOptions", \u0275\u0275pureFunction0(5, _c06));
  }
}
function NewSpaceFiltersComponent_Conditional_34_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewSpaceFiltersComponent_Conditional_34_For_4_Conditional_0_Template, 3, 6, "div", 36);
  }
  if (rf & 2) {
    const feat_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r2.hide_features.includes(feat_r14) ? 0 : -1);
  }
}
function NewSpaceFiltersComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "h2", 33);
    \u0275\u0275text(2, "Facilities");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, NewSpaceFiltersComponent_Conditional_34_For_4_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 0, ctx_r2.features));
  }
}
function NewSpaceFiltersComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 37);
    \u0275\u0275listener("click", function NewSpaceFiltersComponent_Conditional_36_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMON.APPLY"), " ");
  }
}
var _NewSpaceFiltersComponent = class _NewSpaceFiltersComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._spaces = inject(SpacesService);
    this._mapspeople = inject(MapsPeopleService);
    this.multiday = input(void 0);
    this.hide_levels = input(void 0);
    this.viewing_map = input(void 0);
    this.can_close = false;
    this.options = this._event_form.options$;
    this.filters = this._event_form.filters$;
    this.building = this._org.active_building;
    this.buildings = this._org.active_buildings;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.regions = this._org.region_list;
    this.using_mapspeople = this._mapspeople.available$;
    this.features = combineLatest([
      this._spaces.features,
      this._event_form.available_spaces
    ]).pipe(map(([features, spaces]) => unique(features.concat(flatten(spaces.map((_) => _.features))))));
    this.setOptions = (o) => this._event_form.setOptions(o);
    this.setFilters = (f) => this._event_form.setFilters(f);
  }
  get allow_all_day() {
    return !!this._settings.get("app.events.allow_all_day");
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get bld() {
    return this._org.building;
  }
  get region() {
    return this._org.region;
  }
  get form() {
    return this._event_form.form;
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 480;
  }
  get feature_display() {
    return this._settings.get("app.events.feature_decriptions") || {};
  }
  get hide_features() {
    return this._settings.get("app.events.hide_features") || [];
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get start_date() {
    return startOfDay(this.form.getRawValue().date).valueOf();
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.events.allowed_future_days") || 180)).valueOf();
  }
  close() {
  }
  setBuilding(bld) {
    this._org.building = bld;
  }
  setRegion(region) {
    this._org.region = region;
  }
  async toggleFeature(feat, state) {
    const { features } = this._event_form.filters;
    const new_list = (features || []).filter((_) => feat !== _);
    if (state)
      new_list.push(feat);
    this._event_form.setFilters({ features: new_list });
  }
};
_NewSpaceFiltersComponent.\u0275fac = function NewSpaceFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSpaceFiltersComponent)();
};
_NewSpaceFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSpaceFiltersComponent, selectors: [["new-space-filters"]], inputs: { multiday: [1, "multiday"], hide_levels: [1, "hide_levels"], viewing_map: [1, "viewing_map"] }, decls: 37, vars: 42, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "divide-base-200", "max-h-[65vh]", "w-full", "max-w-[100vw]", "divide-y", "overflow-x-hidden", "overflow-y-auto", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-32", "flex-1"], ["for", "date"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "short", "timezone", "range"], [1, "relative", "min-w-32", "flex-1"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "pt-2"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder", "multiple"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "to", "short", "timezone", "range"], ["formControlName", "all_day", 3, "aria-label"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "use_24hr", "timezone"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr", "timezone"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "apply-space-filters", 1, "w-full", 3, "click"]], template: function NewSpaceFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275conditionalCreate(10, NewSpaceFiltersComponent_Conditional_10_Template, 3, 3, "label", 6);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "async");
    \u0275\u0275conditionalCreate(13, NewSpaceFiltersComponent_Conditional_13_Template, 9, 11, "mat-form-field", 7);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalCreate(15, NewSpaceFiltersComponent_Conditional_15_Template, 11, 15, "mat-form-field", 7);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275conditionalCreate(17, NewSpaceFiltersComponent_Conditional_17_Template, 10, 14, "mat-form-field", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "label", 10);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a-date-field", 11);
    \u0275\u0275listener("ngModelChange", function NewSpaceFiltersComponent_Template_a_date_field_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.form.patchValue({ date: $event }));
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, NewSpaceFiltersComponent_Conditional_28_Template, 9, 14, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, NewSpaceFiltersComponent_Conditional_29_Template, 5, 6, "div", 13);
    \u0275\u0275conditionalCreate(30, NewSpaceFiltersComponent_Conditional_30_Template, 10, 10, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(31);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275conditionalCreate(33, NewSpaceFiltersComponent_Conditional_33_Template, 8, 11, "section", 15);
    \u0275\u0275conditionalCreate(34, NewSpaceFiltersComponent_Conditional_34_Template, 6, 2, "section", 16);
    \u0275\u0275pipe(35, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, NewSpaceFiltersComponent_Conditional_36_Template, 4, 3, "div", 17);
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_20_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 21, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 23, "CALENDAR_EVENT.DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.hide_levels() && !(ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(11, 25, ctx.regions)) == null ? null : tmp_3_0.length)) && !(!ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(12, 27, ctx.buildings)) == null ? null : tmp_3_0.length) > 1) ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(14, 29, ctx.regions)) == null ? null : tmp_4_0.length) ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(16, 31, ctx.buildings)) == null ? null : tmp_5_0.length) > 1 ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_levels() ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 33, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(41, _c06))("to", ctx.end_date)("short", true)("timezone", ctx.timezone)("range", ctx.multiday() ? 1 : 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 35, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.multiday() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.allow_all_day ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 30 : -1);
    const has_mapspeople_r16 = \u0275\u0275pipeBind1(32, 37, ctx.using_mapspeople);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.hide_levels() && (!ctx.viewing_map() || !has_mapspeople_r16) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_20_0 = \u0275\u0275pipeBind1(35, 39, ctx.features)) == null ? null : tmp_20_0.length) && (!ctx.viewing_map() || !has_mapspeople_r16) && !ctx.hide_levels() ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 36 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  SettingsToggleComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  MatCheckboxModule,
  MatCheckbox,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=new-space-filters.component.css.map */"] });
var NewSpaceFiltersComponent = _NewSpaceFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSpaceFiltersComponent, [{
    type: Component,
    args: [{ selector: `new-space-filters`, template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <form
            class="divide-base-200 max-h-[65vh] w-full max-w-[100vw] divide-y overflow-x-hidden overflow-y-auto p-2"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'CALENDAR_EVENT.DETAILS' | translate }}
                </h2>
                <div class="flex min-w-32 flex-1 flex-col">
                    @if (
                        !hide_levels() &&
                        !(use_region && (regions | async)?.length) &&
                        !(!use_region && (buildings | async)?.length > 1)
                    ) {
                        <label for="location">
                            {{ 'CALENDAR_EVENT.SPACE_LOCATION' | translate }}
                        </label>
                    }
                    @if (use_region && (regions | async)?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{ 'CALENDAR_EVENT.SPACE_LOCATION' | translate }}</mat-label>
                            <mat-select
                                name="region"
                                [ngModel]="region"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'CALENDAR_EVENT.SPACE_REGION_ANY'
                                        | translate
                                "
                            >
                                @for (reg of regions | async; track reg) {
                                    <mat-option [value]="reg">
                                        {{ reg.display_name || reg.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!use_region && (buildings | async)?.length > 1) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{ 'CALENDAR_EVENT.SPACE_LOCATION' | translate }}</mat-label>
                            <mat-select
                                name="building"
                                [ngModel]="building | async"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    (building | async)?.display_name ||
                                    (building | async)?.name
                                "
                            >
                                @for (bld of buildings | async; track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!hide_levels()) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{ 'CALENDAR_EVENT.SPACE_LEVEL_ANY' | translate }}</mat-label>
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zones"
                                (ngModelChange)="setOptions({ zones: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'CALENDAR_EVENT.SPACE_LEVEL_ANY' | translate
                                "
                                [multiple]="true"
                            >
                                @for (lvl of levels | async; track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl?.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    lvl.display_name || lvl.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                </div>
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-32 flex-1">
                        <label for="date">
                            {{ 'FORM.DATE' | translate }}<span>*</span>
                        </label>
                        <a-date-field
                            name="date"
                            [ngModel]="form.getRawValue().date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [to]="end_date"
                            [short]="true"
                            [timezone]="timezone"
                            [range]="multiday() ? 1 : 0"
                        >
                            {{ 'FORM.DATE_ERROR' | translate }}
                        </a-date-field>
                    </div>
                    @if (multiday()) {
                        <div class="relative min-w-32 flex-1">
                            <label for="date">
                                {{ 'FORM.DATE_END' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                [ngModel]="form.getRawValue().date_end"
                                (ngModelChange)="
                                    form.patchValue({ date_end: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [from]="start_date"
                                [to]="end_date"
                                [short]="true"
                                [timezone]="timezone"
                                [range]="2"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                        </div>
                    }
                </div>
                <!-- All Day -->
                @if (allow_all_day) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox formControlName="all_day" [aria-label]="'COMMON.ALL_DAY' | translate">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time">
                                {{ 'FORM.TIME_START' | translate
                                }}<span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.getRawValue().date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        @if (multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="end-time"
                                    [ngModel]="form.value.date_end"
                                    (ngModelChange)="
                                        form.patchValue({ date_end: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="form?.getRawValue()?.date"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                        }
                        @if (!multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form?.getRawValue()?.date"
                                    [max]="max_duration"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                }
            </section>
            @let has_mapspeople = using_mapspeople | async;
            @if (!hide_levels() && (!viewing_map() || !has_mapspeople)) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [name]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="(filters | async)?.show_fav"
                            (ngModelChange)="setFilters({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
                </section>
            }
            @if (
                (features | async)?.length &&
                (!viewing_map() || !has_mapspeople) &&
                !hide_levels()
            ) {
                <section features class="space-y-2">
                    <h2 class="mt-2 text-lg font-medium">Facilities</h2>
                    @for (feat of features | async; track feat) {
                        @if (!hide_features.includes(feat)) {
                            <div class="flex items-center">
                                <settings-toggle
                                    class="w-full"
                                    [name]="feature_display[feat] || feat"
                                    [ngModel]="
                                        (filters | async)?.features?.includes(
                                            feat
                                        )
                                    "
                                    (ngModelChange)="
                                        toggleFeature(feat, $event)
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                ></settings-toggle>
                            </div>
                        }
                    }
                </section>
            }
        </form>
        @if (can_close) {
            <div class="border-base-200 w-full border-t px-2 pt-2">
                <button
                    btn
                    matRipple
                    class="w-full"
                    name="apply-space-filters"
                    (click)="close()"
                >
                    {{ 'COMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      MatCheckboxModule,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/new-space-select-modal/new-space-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=new-space-filters.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSpaceFiltersComponent, { className: "NewSpaceFiltersComponent", filePath: "libs/events/src/lib/new-space-select-modal/new-space-filters.component.ts", lineNumber: 332 });
})();

// libs/events/src/lib/new-space-select-modal/new-space-list.component.ts
var _c07 = (a0) => ({ count: a0 });
function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("click", function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_10_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-error", \u0275\u0275pipeBind1(1, 14, ctx_r2.room_alerts)[space_r2.id][0] === "closed")("bg-info", \u0275\u0275pipeBind1(2, 16, ctx_r2.room_alerts)[space_r2.id][0] === "info")("bg-warning", \u0275\u0275pipeBind1(3, 18, ctx_r2.room_alerts)[space_r2.id][0] === "warn")("text-error-content", \u0275\u0275pipeBind1(4, 20, ctx_r2.room_alerts)[space_r2.id][0] === "closed")("text-info-content", \u0275\u0275pipeBind1(5, 22, ctx_r2.room_alerts)[space_r2.id][0] === "info")("text-warning-content", \u0275\u0275pipeBind1(6, 24, ctx_r2.room_alerts)[space_r2.id][0] === "warn");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 26, ctx_r2.room_alerts)[space_r2.id][1]);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 28, ctx_r2.room_alerts)[space_r2.id][0] === "warn" ? "warning" : \u0275\u0275pipeBind1(11, 30, ctx_r2.room_alerts)[space_r2.id][0] === "info" ? "info" : "close");
  }
}
function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("click", function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Template_button_click_3_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectSpace(space_r2));
    });
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275conditionalCreate(7, NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_7_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(8, NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_8_Template, 1, 1, "img", 10)(9, NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_9_Template, 1, 0, "img", 11);
    \u0275\u0275conditionalCreate(10, NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_10_Template, 12, 32, "div", 12);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15)(16, "icon", 16);
    \u0275\u0275text(17, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 17);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "icon", 16);
    \u0275\u0275text(22, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Template_button_click_26_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(space_r2));
    });
    \u0275\u0275elementStart(27, "icon", 19);
    \u0275\u0275text(28, "favorite");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Conditional_29_Template, 3, 3, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    const space_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info!", ctx_r2.active() === space_r2.id)("bg-error-light!", \u0275\u0275pipeBind1(1, 16, ctx_r2.room_alerts)[space_r2.id] ? \u0275\u0275pipeBind1(2, 18, ctx_r2.room_alerts)[space_r2.id][0] === "closed" : false);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pointer-events-none", \u0275\u0275pipeBind1(4, 20, ctx_r2.room_alerts)[space_r2.id] ? \u0275\u0275pipeBind1(5, 22, ctx_r2.room_alerts)[space_r2.id][0] === "closed" : false);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.selected().includes(space_r2.id) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((space_r2.images == null ? null : space_r2.images.length) ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(11, 24, ctx_r2.room_alerts)[space_r2.id] ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.display_name || space_r2.name || "Meeting Space", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || ((tmp_19_0 = ctx_r2.level(space_r2.zones)) == null ? null : tmp_19_0.display_name) || ((tmp_19_0 = ctx_r2.level(space_r2.zones)) == null ? null : tmp_19_0.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 26, "CALENDAR_EVENT.CAPACITY_COUNT", \u0275\u0275pureFunction1(29, _c07, space_r2.capacity < 1 ? 2 : space_r2.capacity)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(space_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(space_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(space_r2.approval ? 29 : -1);
  }
}
function NewSpaceListComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, NewSpaceListComponent_Conditional_8_Conditional_0_For_2_Template, 30, 31, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.available_spaces));
  }
}
function NewSpaceListComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CALENDAR_EVENT.SPACE_SELECT_EMPTY"), " ");
  }
}
function NewSpaceListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewSpaceListComponent_Conditional_8_Conditional_0_Template, 4, 2, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, NewSpaceListComponent_Conditional_8_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.available_spaces)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function NewSpaceListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "CALENDAR_EVENT.SPACE_SELECT_LOADING"), " ");
  }
}
var _NewSpaceListComponent = class _NewSpaceListComponent {
  constructor() {
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this.active = input("");
    this.selected = input("");
    this.favorites = input([]);
    this.onSelect = output();
    this.toggleFav = output();
    this.loading = this._event_form.loading$;
    this.available_spaces = this._event_form.available_spaces;
    this.room_alerts = this._event_form.room_alerts;
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  ngOnInit() {
    this._event_form.setView("find");
  }
  isFavourite(space_id) {
    return this.favorites().includes(space_id);
  }
  selectSpace(space) {
    this.onSelect.emit(space);
  }
};
_NewSpaceListComponent.\u0275fac = function NewSpaceListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSpaceListComponent)();
};
_NewSpaceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSpaceListComponent, selectors: [["new-space-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 11, vars: 17, consts: [[1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm", 3, "border-info!", "bg-error-light!"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["matRipple", "", "name", "select-space", 1, "flex", "h-full", "w-full", "items-center", "rounded-sm", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "min-w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "pointer-events-auto", "absolute", "bottom-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "matTooltip", "bg-error", "bg-info", "bg-warning", "text-error-content", "text-info-content", "text-warning-content"], [1, "w-full", "space-y-2"], [1, "mr-10", "truncate", "text-left", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, "truncate"], ["icon", "", "matRipple", "", "name", "toggle-space-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "bg-warning", "text-warning-content", "absolute", "right-1", "bottom-1", "w-14", "rounded-sm", "px-2", "py-1", "text-center", "text-[0.625rem]", "leading-tight", "font-medium"], [1, "pointer-events-auto", "absolute", "bottom-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "click", "matTooltip"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function NewSpaceListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, NewSpaceListComponent_Conditional_8_Template, 3, 3);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275conditionalBranchCreate(10, NewSpaceListComponent_Conditional_10_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(7, 9, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(15, _c07, ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.available_spaces)) == null ? null : tmp_1_0.length) || 0), ((tmp_1_0 = \u0275\u0275pipeBind1(6, 7, ctx.available_spaces)) == null ? null : tmp_1_0.length) || 0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(9, 13, ctx.loading) ? 8 : 10);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  AuthenticatedImageDirective,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var NewSpaceListComponent = _NewSpaceListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSpaceListComponent, [{
    type: Component,
    args: [{ selector: `new-space-list`, template: `
        <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 px-2 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate
                        : { count: (available_spaces | async)?.length || 0 }
                        : (available_spaces | async)?.length || 0
            }}
        </p>
        @if (!(loading | async)) {
            @if ((available_spaces | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (space of available_spaces | async; track space) {
                        <li
                            space
                            [class.border-info!]="active() === space.id"
                            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
                            [class.bg-error-light!]="
                                (room_alerts | async)[space.id]
                                    ? (room_alerts | async)[space.id][0] ===
                                      'closed'
                                    : false
                            "
                        >
                            <button
                                matRipple
                                name="select-space"
                                class="flex h-full w-full items-center rounded-sm"
                                (click)="selectSpace(space)"
                                [class.pointer-events-none]="
                                    (room_alerts | async)[space.id]
                                        ? (room_alerts | async)[space.id][0] ===
                                          'closed'
                                        : false
                                "
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 min-w-20 items-center justify-center overflow-hidden rounded-xl"
                                >
                                    @if (selected().includes(space.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (space.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="space.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/room-placeholder.svg"
                                        />
                                    }
                                    @if ((room_alerts | async)[space.id]) {
                                        <div
                                            class="pointer-events-auto absolute bottom-1 left-1 flex h-6 w-6 items-center justify-center rounded-full"
                                            [matTooltip]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][1]
                                            "
                                            [class.bg-error]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'closed'
                                            "
                                            [class.bg-info]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'info'
                                            "
                                            [class.bg-warning]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                            "
                                            [class.text-error-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'closed'
                                            "
                                            [class.text-info-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'info'
                                            "
                                            [class.text-warning-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                            "
                                            (click)="$event.stopPropagation()"
                                        >
                                            <icon>{{
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                                    ? 'warning'
                                                    : (room_alerts | async)[
                                                            space.id
                                                        ][0] === 'info'
                                                      ? 'info'
                                                      : 'close'
                                            }}</icon>
                                        </div>
                                    }
                                </div>
                                <div class="w-full space-y-2">
                                    <div
                                        class="mr-10 truncate text-left font-medium"
                                    >
                                        {{
                                            space.display_name ||
                                                space.name ||
                                                'Meeting Space'
                                        }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p class="truncate">
                                            {{
                                                space.location ||
                                                    level(space.zones)
                                                        ?.display_name ||
                                                    level(space.zones)?.name
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">people</icon>
                                        <p>
                                            {{
                                                'CALENDAR_EVENT.CAPACITY_COUNT'
                                                    | translate
                                                        : {
                                                              count:
                                                                  space.capacity <
                                                                  1
                                                                      ? 2
                                                                      : space.capacity,
                                                          }
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                name="toggle-space-favourite"
                                class="absolute top-1 right-1"
                                [class.text-info]="isFavourite(space.id)"
                                (click)="toggleFav.emit(space)"
                            >
                                <icon
                                    [className]="
                                        isFavourite(space.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                            @if (space.approval) {
                                <div
                                    class="bg-warning text-warning-content absolute right-1 bottom-1 w-14 rounded-sm px-2 py-1 text-center text-[0.625rem] leading-tight font-medium"
                                >
                                    {{ 'COMMON.APPROVAL_REQUIRED' | translate }}
                                </div>
                            }
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'CALENDAR_EVENT.SPACE_SELECT_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_LOADING' | translate }}
                    <!-- <br />
              {{ loading | async | json }} -->
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSpaceListComponent, { className: "NewSpaceListComponent", filePath: "libs/events/src/lib/new-space-select-modal/new-space-list.component.ts", lineNumber: 234 });
})();

// libs/events/src/lib/new-space-select-modal/new-space-location-pin.component.ts
function NewSpaceLocationPinComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function NewSpaceLocationPinComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 15);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
var _NewSpaceLocationPinComponent = class _NewSpaceLocationPinComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this.selected = this._data.selected === true;
    this.active = this._data.active === true;
  }
  get color() {
    return this.active ? "#F4511E" : this.selected ? "#D32F2F" : "#309251";
  }
};
_NewSpaceLocationPinComponent.\u0275fac = function NewSpaceLocationPinComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSpaceLocationPinComponent)();
};
_NewSpaceLocationPinComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSpaceLocationPinComponent, selectors: [["new-space-location-pin"]], decls: 17, vars: 3, consts: [[1, "absolute", "bottom-0", "left-1/2", "-translate-x-1/2"], ["width", "44", "height", "60", "viewBox", "0 0 66 80", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["filter", "url(#filter0_d_1065_10313)"], ["d", "M19.724 53.0408C25.0871 60.3435 30.5582 65.8583 31.0184 66.3178C31.4558 66.755 32.0489 67.0007 32.6674 67.0008H32.6678C33.2863 67.0007 33.8795 66.755 34.3169 66.3178C34.7771 65.8583 40.2481 60.3435 45.6112 53.0408C48.2928 49.3894 50.963 45.2701 52.9663 41.0957C54.9629 36.935 56.3331 32.6459 56.3342 28.6724C56.364 25.5564 55.7725 22.4657 54.5941 19.5809C53.415 16.6946 51.6722 14.0724 49.4675 11.8677C47.2629 9.66308 44.6407 7.92024 41.7544 6.74121C38.8711 5.5634 35.782 4.97184 32.6676 5.00103C29.5533 4.97184 26.4642 5.5634 23.5809 6.74121C20.6946 7.92024 18.0724 9.66308 15.8677 11.8677C13.6631 14.0724 11.9202 16.6946 10.7412 19.5809C9.56278 22.4657 8.97122 25.5565 9.00108 28.6726C9.0022 32.646 10.3724 36.9351 12.369 41.0957C14.3723 45.2701 17.0425 49.3894 19.724 53.0408Z", "stroke", "#0B421D", "stroke-width", "2"], ["id", "filter0_d_1065_10313", "x", "0", "y", "0", "width", "65.3353", "height", "80.001", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", "result", "hardAlpha"], ["dy", "4"], ["stdDeviation", "4"], ["in2", "hardAlpha", "operator", "out"], ["type", "matrix", "values", "0 0 0 0 0.0196078 0 0 0 0 0.109804 0 0 0 0 0.172549 0 0 0 0.2 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow_1065_10313"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow_1065_10313", "result", "shape"], [1, "absolute", "top-0", "left-0", "flex", "h-3/4", "w-full", "items-center", "justify-center"], [1, "bg-base-100", "relative", "z-10", "h-4", "w-4", "rounded-full", "border-2", "border-[#0B421D]"], [1, "relative", "z-10", "text-2xl", "text-white"]], template: function NewSpaceLocationPinComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 1)(2, "g", 2);
    \u0275\u0275element(3, "path", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "defs")(5, "filter", 4);
    \u0275\u0275element(6, "feFlood", 5)(7, "feColorMatrix", 6)(8, "feOffset", 7)(9, "feGaussianBlur", 8)(10, "feComposite", 9)(11, "feColorMatrix", 10)(12, "feBlend", 11)(13, "feBlend", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275conditionalCreate(15, NewSpaceLocationPinComponent_Conditional_15_Template, 1, 0, "div", 14);
    \u0275\u0275conditionalCreate(16, NewSpaceLocationPinComponent_Conditional_16_Template, 2, 0, "icon", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275attribute("fill", ctx.color);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(!ctx.selected ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.selected ? 16 : -1);
  }
}, dependencies: [IconComponent], encapsulation: 2 });
var NewSpaceLocationPinComponent = _NewSpaceLocationPinComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSpaceLocationPinComponent, [{
    type: Component,
    args: [{ selector: "new-space-location-pin", template: `
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <svg
                width="44"
                height="60"
                viewBox="0 0 66 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_1065_10313)">
                    <path
                        d="M19.724 53.0408C25.0871 60.3435 30.5582 65.8583 31.0184 66.3178C31.4558 66.755 32.0489 67.0007 32.6674 67.0008H32.6678C33.2863 67.0007 33.8795 66.755 34.3169 66.3178C34.7771 65.8583 40.2481 60.3435 45.6112 53.0408C48.2928 49.3894 50.963 45.2701 52.9663 41.0957C54.9629 36.935 56.3331 32.6459 56.3342 28.6724C56.364 25.5564 55.7725 22.4657 54.5941 19.5809C53.415 16.6946 51.6722 14.0724 49.4675 11.8677C47.2629 9.66308 44.6407 7.92024 41.7544 6.74121C38.8711 5.5634 35.782 4.97184 32.6676 5.00103C29.5533 4.97184 26.4642 5.5634 23.5809 6.74121C20.6946 7.92024 18.0724 9.66308 15.8677 11.8677C13.6631 14.0724 11.9202 16.6946 10.7412 19.5809C9.56278 22.4657 8.97122 25.5565 9.00108 28.6726C9.0022 32.646 10.3724 36.9351 12.369 41.0957C14.3723 45.2701 17.0425 49.3894 19.724 53.0408Z"
                        [attr.fill]="color"
                        stroke="#0B421D"
                        stroke-width="2"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_1065_10313"
                        x="0"
                        y="0"
                        width="65.3353"
                        height="80.001"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0196078 0 0 0 0 0.109804 0 0 0 0 0.172549 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1065_10313"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1065_10313"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
            <div
                class="absolute top-0 left-0 flex h-3/4 w-full items-center justify-center"
            >
                @if (!selected) {
                    <div
                        class="bg-base-100 relative z-10 h-4 w-4 rounded-full border-2 border-[#0B421D]"
                    ></div>
                }
                @if (selected) {
                    <icon class="relative z-10 text-2xl text-white">
                        done
                    </icon>
                }
            </div>
        </div>
    `, imports: [IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSpaceLocationPinComponent, { className: "NewSpaceLocationPinComponent", filePath: "libs/events/src/lib/new-space-select-modal/new-space-location-pin.component.ts", lineNumber: 84 });
})();

// libs/events/src/lib/new-space-select-modal/new-space-map.component.ts
var _c08 = () => ({ controls: true });
var _c14 = () => ({ standalone: true });
function NewSpaceMapComponent_Conditional_0_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const lvl_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, lvl_r3.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function NewSpaceMapComponent_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, NewSpaceMapComponent_Conditional_0_For_8_Conditional_2_Template, 5, 3, "div", 7);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function NewSpaceMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 3)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 4);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NewSpaceMapComponent_Conditional_0_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewSpaceMapComponent_Conditional_0_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275repeaterCreate(7, NewSpaceMapComponent_Conditional_0_For_8_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "CALENDAR_EVENT.SPACE_LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c14))("placeholder", \u0275\u0275pipeBind1(6, 6, "CALENDAR_EVENT.SPACE_LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 8, ctx_r1.levels));
  }
}
var _NewSpaceMapComponent = class _NewSpaceMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.selected = input([]);
    this.active = input(void 0);
    this.is_displayed = input(false);
    this.onSelect = output();
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
    this._seletedSpace = (s) => () => {
      this.onSelect.emit(s);
      this._change.next(Date.now());
    };
    this.level = null;
    this._change = new BehaviorSubject(0);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      if (!this.level && viewable_levels.length) {
        this.level = viewable_levels[0];
      }
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }), tap((l) => console.log("Levels:", l)));
    this.setOptions = (o) => this._event_form.setOptions(o);
    this.features = combineLatest([
      this._event_form.available_spaces,
      this._change
    ]).pipe(debounceTime(300), map(([l]) => l.map((space) => ({
      location: space.map_id,
      content: NewSpaceLocationPinComponent,
      data: __spreadProps(__spreadValues({}, space), {
        active: this.active() === space.id,
        selected: this.selected().includes(space.id)
      })
    }))));
    this.actions = this._event_form.available_spaces.pipe(map((l) => l.map((space) => ({
      id: space.map_id,
      action: ["touchend", "mouseup"],
      callback: this._seletedSpace(space)
    }))));
    this.styles = combineLatest([
      this._event_form.spaces$,
      this._event_form.available_spaces
    ]).pipe(map(([spaces, free_spaces]) => spaces.reduce((styles, space) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = free_spaces.find((_) => _.id === space.id) ? "free" : "busy";
      styles[`#${space.map_id || space.id}`] = {
        fill: colours[`space-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription("levels_update", this._event_form.options$.subscribe(({ zones }) => {
      const level = this._org.levelWithID(zones);
      if (level)
        this.level = level;
    }));
  }
  setLevel(level) {
    this.setOptions({ zone_ids: [level?.id] });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = (level.location || bld.location).split(",").map((_) => parseFloat(_));
      this.coordinates = { latitude, longitude };
    }
    this.level = level;
  }
  setZoom(new_zoom) {
    this.zoom = Math.max(0.5, Math.min(10, new_zoom));
  }
  resetMap() {
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
  }
};
_NewSpaceMapComponent.\u0275fac = function NewSpaceMapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSpaceMapComponent)();
};
_NewSpaceMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSpaceMapComponent, selectors: [["new-space-map"]], inputs: { selected: [1, "selected"], active: [1, "active"], is_displayed: [1, "is_displayed"] }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 17, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function NewSpaceMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewSpaceMapComponent_Conditional_0_Template, 10, 11, "div", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "div", 1)(3, "interactive-map", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275twoWayListener("zoomChange", function NewSpaceMapComponent_Template_interactive_map_zoomChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
      return $event;
    })("centerChange", function NewSpaceMapComponent_Template_interactive_map_centerChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(1, 8, ctx.levels)) == null ? null : tmp_0_0.length) ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.map_url);
    \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
    \u0275\u0275property("styles", \u0275\u0275pipeBind1(4, 10, ctx.styles))("features", \u0275\u0275pipeBind1(5, 12, ctx.features))("actions", \u0275\u0275pipeBind1(6, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c08));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  InteractiveMapComponent,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=new-space-map.component.css.map */"] });
var NewSpaceMapComponent = _NewSpaceMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSpaceMapComponent, [{
    type: Component,
    args: [{ selector: `new-space-map`, template: `
        @if ((levels | async)?.length) {
            <div class="border-base-200 bg-base-100 w-full border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-label>{{ 'CALENDAR_EVENT.SPACE_LEVEL_ANY' | translate }}</mat-label>
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="
                            'CALENDAR_EVENT.SPACE_LEVEL_ANY' | translate
                        "
                    >
                        @for (lvl of levels | async; track lvl) {
                            <mat-option [value]="lvl">
                                <div class="flex flex-col-reverse">
                                    @if (use_region) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (lvl.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
        <div class="relative w-full flex-1">
            <interactive-map
                [src]="map_url"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
                [options]="{ controls: true }"
            ></interactive-map>
        </div>
    `, imports: [
      CommonModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;5b4ed0a87238b487692a2c306efe479639b0f8e929cffac085c91f6d64279717;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/new-space-select-modal/new-space-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=new-space-map.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSpaceMapComponent, { className: "NewSpaceMapComponent", filePath: "libs/events/src/lib/new-space-select-modal/new-space-map.component.ts", lineNumber: 96 });
})();

// libs/events/src/lib/new-space-select-modal/new-space-select-modal.component.ts
function NewSpaceSelectModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-space-filters-display", 26);
    \u0275\u0275twoWayListener("viewChange", function NewSpaceSelectModalComponent_Conditional_21_Template_new_space_filters_display_viewChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.view, $event) || (ctx_r1.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("view", ctx_r1.view);
  }
}
function NewSpaceSelectModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-space-list", 27);
    \u0275\u0275listener("toggleFav", function NewSpaceSelectModalComponent_Conditional_22_Template_new_space_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function NewSpaceSelectModalComponent_Conditional_22_Template_new_space_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", (tmp_1_0 = ctx_r1.displayed()) == null ? null : tmp_1_0.id)("selected", ctx_r1.selected_ids)("favorites", ctx_r1.favorites);
  }
}
function NewSpaceSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-space-map", 28);
    \u0275\u0275listener("onSelect", function NewSpaceSelectModalComponent_Conditional_23_Template_new_space_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("is_displayed", !!ctx_r1.displayed())("active", (tmp_2_0 = ctx_r1.displayed()) == null ? null : tmp_2_0.id);
  }
}
function NewSpaceSelectModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function NewSpaceSelectModalComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set(null));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewSpaceSelectModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function NewSpaceSelectModalComponent_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_filters = !ctx_r1.show_filters);
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_filters ? "close" : "filter_list");
  }
}
var _NewSpaceSelectModalComponent = class _NewSpaceSelectModalComponent {
  get is_safari() {
    return isMobileSafari();
  }
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get("favourite_spaces") || [];
  }
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this.show_filters = false;
    this.selected = [];
    this.view = signal("list");
    this.displayed = signal(null);
    this.multiday = !!this._data.multiday;
    this.room_alerts = this._event_form.room_alerts;
    const _data = this._data;
    this.selected = [..._data.spaces || []];
    this._event_form.setOptions(_data.options);
    this._event_form.setFilters(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._settings.get("app.events.allow_multiple_spaces") && state) {
      this.selected = [item];
      this._dialog_ref.close([item]);
    }
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_spaces", [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_spaces", fav_list.filter((_) => _ !== item.id));
    }
  }
};
_NewSpaceSelectModalComponent.\u0275fac = function NewSpaceSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSpaceSelectModalComponent)();
};
_NewSpaceSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSpaceSelectModalComponent, selectors: [["new-space-select-modal"]], decls: 43, vars: 63, consts: [[1, "bg-base-100", "mb-18", "flex", "h-[calc(100vh-4.5rem)]", "max-h-[calc(100vh-4.5rem)]", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:m-0", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "max-h-[calc(100vh-7rem)]", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], ["filters", "", 1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-80"], [3, "hide_levels"], ["list", "", 1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "sm:w-80", "md:w-112", "lg:block"], [3, "view"], ["list", "", 3, "active", "selected", "favorites"], ["map", "", 1, "h-full", "min-h-[60vh]", "w-full", 3, "is_displayed", "active"], [1, "border-base-300", "relative", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "z-20", "hidden", "border", "md:flex"], ["details", "", 3, "activeChange", "toggleFav", "close", "space", "active", "hide_map", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "space-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-space", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "viewChange", "view"], ["list", "", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["map", "", 1, "h-full", "min-h-[60vh]", "w-full", 3, "onSelect", "is_displayed", "active"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "z-20", "hidden", "border", "md:flex", 3, "click"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function NewSpaceSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function NewSpaceSelectModalComponent_Template_button_click_6_listener() {
      return ctx.view.set("list");
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function NewSpaceSelectModalComponent_Template_button_click_10_listener() {
      return ctx.view.set("map");
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "map");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 6)(15, "icon");
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "main", 7)(18, "div", 8);
    \u0275\u0275element(19, "new-space-filters", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10);
    \u0275\u0275conditionalCreate(21, NewSpaceSelectModalComponent_Conditional_21_Template, 1, 1, "new-space-filters-display", 11);
    \u0275\u0275conditionalCreate(22, NewSpaceSelectModalComponent_Conditional_22_Template, 1, 3, "new-space-list", 12)(23, NewSpaceSelectModalComponent_Conditional_23_Template, 1, 2, "new-space-map", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275conditionalCreate(25, NewSpaceSelectModalComponent_Conditional_25_Template, 3, 0, "button", 15);
    \u0275\u0275elementStart(26, "new-space-details", 16);
    \u0275\u0275listener("activeChange", function NewSpaceSelectModalComponent_Template_new_space_details_activeChange_26_listener($event) {
      return ctx.setSelected(ctx.displayed(), $event);
    })("toggleFav", function NewSpaceSelectModalComponent_Template_new_space_details_toggleFav_26_listener() {
      return ctx.toggleFavourite(ctx.displayed());
    })("close", function NewSpaceSelectModalComponent_Template_new_space_details_close_26_listener() {
      return ctx.displayed.set(null);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, NewSpaceSelectModalComponent_Conditional_27_Template, 3, 1, "button", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "footer", 18)(29, "button", 19)(30, "div", 20)(31, "icon", 21);
    \u0275\u0275text(32, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 22);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 23);
    \u0275\u0275listener("click", function NewSpaceSelectModalComponent_Template_button_click_36_listener() {
      let tmp_0_0;
      return ctx.setSelected(ctx.displayed(), !ctx.isSelected((tmp_0_0 = ctx.displayed()) == null ? null : tmp_0_0.id));
    });
    \u0275\u0275elementStart(37, "div", 24)(38, "icon", 21);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 25);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_25_0;
    let tmp_27_0;
    let tmp_31_0;
    let tmp_33_0;
    let tmp_34_0;
    \u0275\u0275styleProp("height", ctx.is_safari ? "calc(100vh - 80px)" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 53, "CALENDAR_EVENT.SPACE_SELECT_FIND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-base-100", ctx.view() !== "list")("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 55, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-base-100", ctx.view() !== "map")("bg-secondary", ctx.view() === "map")("text-secondary-content", ctx.view() === "map");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 57, "COMMON.MAP"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("hidden", !ctx.show_filters);
    \u0275\u0275advance();
    \u0275\u0275property("hide_levels", ctx.view() !== "list");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx.view() !== "list" ? ctx.displayed() ? "calc(100vw - 44rem)" : "calc(100vw - 24rem)" : "");
    \u0275\u0275classProp("hidden", ctx.show_filters || ctx.displayed())("sm:hidden", ctx.displayed())("md:block", !ctx.displayed())("p-2", ctx.view() === "list");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "list" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "list" ? 22 : 23);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx.show_filters || !ctx.displayed())("sm:hidden", !ctx.displayed())("md:block", ctx.displayed())("lg:block", ctx.view() === "list");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.displayed() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("space", ctx.displayed())("active", ctx.selected_ids.includes((tmp_25_0 = ctx.displayed()) == null ? null : tmp_25_0.id))("hide_map", ctx.view() === "map")("fav", ctx.displayed && ctx.favorites.includes((tmp_27_0 = ctx.displayed()) == null ? null : tmp_27_0.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.displayed ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 59, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.isSelected((tmp_31_0 = ctx.displayed()) == null ? null : tmp_31_0.id));
    \u0275\u0275property("disabled", !ctx.displayed());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected((tmp_33_0 = ctx.displayed()) == null ? null : tmp_33_0.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 61, ctx.isSelected((tmp_34_0 = ctx.displayed()) == null ? null : tmp_34_0.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
  }
}, dependencies: [
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  MatTooltipModule,
  MatTooltip,
  NewSpaceMapComponent,
  NewSpaceListComponent,
  NewSpaceDetailsComponent,
  NewSpaceFiltersComponent,
  NewSpaceFiltersDisplayComponent
], styles: ["\n\n@media screen and (max-width: 640px) {\n  [list][_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=new-space-select-modal.component.css.map */"] });
var NewSpaceSelectModalComponent = _NewSpaceSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSpaceSelectModalComponent, [{
    type: Component,
    args: [{ selector: "new-space-select-modal", template: `
        <div
            class="bg-base-100 mb-18 flex h-[calc(100vh-4.5rem)] max-h-[calc(100vh-4.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
            [style.height]="is_safari ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_FIND' | translate }}
                </h2>
                <div
                    class="divide-secondary border-secondary flex divide-x rounded-sm border"
                >
                    <button
                        icon
                        matRipple
                        class="rounded-l rounded-r-none"
                        [class.bg-base-100]="view() !== 'list'"
                        [class.bg-secondary]="view() === 'list'"
                        [class.text-secondary-content]="view() === 'list'"
                        [matTooltip]="'COMMON.LIST' | translate"
                        (click)="view.set('list')"
                    >
                        <icon>list</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="rounded-l-none rounded-r"
                        [class.bg-base-100]="view() !== 'map'"
                        [class.bg-secondary]="view() === 'map'"
                        [class.text-secondary-content]="view() === 'map'"
                        [matTooltip]="'COMMON.MAP' | translate"
                        (click)="view.set('map')"
                    >
                        <icon>map</icon>
                    </button>
                </div>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="relative flex h-1/2 max-h-[calc(100vh-7rem)] flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    filters
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-80"
                    [class.hidden]="!show_filters"
                >
                    <new-space-filters
                        [hide_levels]="view() !== 'list'"
                    ></new-space-filters>
                </div>
                <div
                    list
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-80 md:w-112 lg:block"
                    [class.hidden]="show_filters || displayed()"
                    [class.sm:hidden]="displayed()"
                    [class.md:block]="!displayed()"
                    [class.p-2]="view() === 'list'"
                    [style.width]="
                        view() !== 'list'
                            ? displayed()
                                ? 'calc(100vw - 44rem)'
                                : 'calc(100vw - 24rem)'
                            : ''
                    "
                >
                    @if (view() === 'list') {
                        <new-space-filters-display
                            [(view)]="view"
                        ></new-space-filters-display>
                    }
                    @if (view() === 'list') {
                        <new-space-list
                            list
                            [active]="displayed()?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                        ></new-space-list>
                    } @else {
                        <new-space-map
                            map
                            class="h-full min-h-[60vh] w-full"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id"
                            (onSelect)="displayed.set($event)"
                        >
                        </new-space-map>
                    }
                </div>
                <div
                    class="border-base-300 relative h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem]"
                    [class.hidden]="show_filters || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                    [class.lg:block]="view() === 'list'"
                >
                    @if (displayed()) {
                        <button
                            icon
                            matRipple
                            class="border-base-300 bg-base-100 absolute top-2 left-2 z-20 hidden border md:flex"
                            (click)="displayed.set(null)"
                        >
                            <icon>close</icon>
                        </button>
                    }
                    <new-space-details
                        details
                        [space]="displayed()"
                        [active]="selected_ids.includes(displayed()?.id)"
                        [hide_map]="view() === 'map'"
                        (activeChange)="setSelected(displayed(), $event)"
                        [fav]="
                            displayed &&
                            this.favorites.includes(displayed()?.id)
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></new-space-details>
                </div>
                @if (!displayed) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters = !show_filters"
                    >
                        <icon>{{
                            show_filters ? 'close' : 'filter_list'
                        }}</icon>
                    </button>
                }
            </main>
            <footer
                class="bg-base-200 flex w-full items-center justify-between space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    name="space-return"
                    [mat-dialog-close]="selected"
                    class="inverse bg-base-100 text-secondary"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="pr-2">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    name="toggle-space"
                    [disabled]="!displayed()"
                    [class.inverse]="isSelected(displayed()?.id)"
                    (click)="
                        setSelected(displayed(), !isSelected(displayed()?.id))
                    "
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed()?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed()?.id)
                                    ? 'COMMON.REMOVE_FROM'
                                    : 'COMMON.ADD_TO'
                                ) | translate
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      MatTooltipModule,
      NewSpaceMapComponent,
      NewSpaceListComponent,
      NewSpaceDetailsComponent,
      NewSpaceFiltersComponent,
      NewSpaceFiltersDisplayComponent
    ], styles: ["/* angular:styles/component:css;14c104e27b816f236ef6867be998c5d0dffab973e73a494beaad3760a220040a;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/new-space-select-modal/new-space-select-modal.component.ts */\n@media screen and (max-width: 640px) {\n  [list] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=new-space-select-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSpaceSelectModalComponent, { className: "NewSpaceSelectModalComponent", filePath: "libs/events/src/lib/new-space-select-modal/new-space-select-modal.component.ts", lineNumber: 230 });
})();

// libs/form-fields/src/lib/space-list-field.component.ts
var _c09 = () => ({ standalone: true });
var _c15 = () => ({ count: 4 });
var _c22 = () => ({ count: 10 });
var _c32 = (a0) => ({ count: a0 });
function SpaceListFieldComponent_For_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function SpaceListFieldComponent_For_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function SpaceListFieldComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275conditionalCreate(2, SpaceListFieldComponent_For_22_Conditional_2_Template, 1, 1, "img", 10)(3, SpaceListFieldComponent_For_22_Conditional_3_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "icon", 15);
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "icon", 15);
    \u0275\u0275text(14, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 16)(19, "button", 17);
    \u0275\u0275listener("click", function SpaceListFieldComponent_For_22_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeSpaces());
    });
    \u0275\u0275elementStart(20, "div", 18)(21, "icon");
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 19);
    \u0275\u0275listener("click", function SpaceListFieldComponent_For_22_Template_button_click_25_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeSpace(space_r2));
    });
    \u0275\u0275elementStart(26, "div", 18)(27, "icon");
    \u0275\u0275text(28, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "button", 20);
    \u0275\u0275listener("click", function SpaceListFieldComponent_For_22_Template_button_click_31_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite(space_r2));
    });
    \u0275\u0275elementStart(32, "icon", 21);
    \u0275\u0275text(33, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const space_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((space_r2.images == null ? null : space_r2.images.length) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.display_name || space_r2.name || "Meeting Space", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = ctx_r2.level(space_r2.zones)) == null ? null : tmp_12_0.display_name) || ((tmp_12_0 = ctx_r2.level(space_r2.zones)) == null ? null : tmp_12_0.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 9, "CALENDAR_EVENT.CAPACITY_COUNT", \u0275\u0275pureFunction1(16, _c32, space_r2.capacity < 1 ? 2 : space_r2.capacity)), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 12, "COMMON.CHANGE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 14, "COMMON.REMOVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.favorites.includes(space_r2 == null ? null : space_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.favorites.includes(space_r2 == null ? null : space_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
var EMPTY_FAVS = [];
var _SpaceListFieldComponent = class _SpaceListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.multiday = input(false);
    this.room_size = 4;
    this.spaces = new BehaviorSubject([]);
    this.space_list = this.spaces.pipe(debounceTime(300));
    this.disabled = false;
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  get favorites() {
    return this._settings.get("favourite_spaces") || EMPTY_FAVS;
  }
  ngOnDestroy() {
    if (this._dialog_ref)
      this._dialog_ref.close();
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  /** Add or edit selected spaces */
  changeSpaces() {
    this._dialog_ref = this._dialog.open(NewSpaceSelectModalComponent, {
      // this._dialog_ref = this._dialog.open(SpaceSelectModalComponent, {
      data: {
        spaces: this.spaces.getValue(),
        options: { capacity: this.room_size },
        multiday: this.multiday()
      }
    });
    this._dialog_ref.afterClosed().subscribe(() => {
      this.setValue(this._dialog_ref?.componentInstance?.selected);
      this._dialog_ref = void 0;
    });
  }
  /** Remove the selected space from the list */
  removeSpace(space) {
    this.setValue(this.spaces.getValue().filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.spaces.next(new_value || []);
    if (this._onChange)
      this._onChange(new_value || []);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.spaces.next(value || []);
  }
  toggleFavourite(space) {
    if (!space?.id)
      return;
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_spaces", [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_spaces", fav_list.filter((_) => _ !== space.id));
    }
  }
};
_SpaceListFieldComponent.\u0275fac = function SpaceListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpaceListFieldComponent)();
};
_SpaceListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceListFieldComponent, selectors: [["space-list-field"]], inputs: { multiday: [1, "multiday"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _SpaceListFieldComponent),
    multi: true
  }
])], decls: 31, vars: 30, consts: [[1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], [1, "flex", "items-center"], [1, "space-x-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["list", "", 1, "space-y-2"], ["space", "", 1, "border-base-200", "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "p-2", "shadow-sm"], ["btn", "", "matRipple", "", "name", "add-space", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "bg-base-200", "mr-4", "flex", "h-24", "w-24", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "pb-4", "sm:space-y-2"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "absolute", "right-0", "bottom-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-space", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-space", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-space-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"]], template: function SpaceListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 2)(9, "mat-radio-group", 3);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SpaceListFieldComponent_Template_mat_radio_group_ngModelChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.room_size, $event) || (ctx.room_size = $event);
      return $event;
    });
    \u0275\u0275elementStart(11, "mat-radio-button", 4);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-radio-button", 4);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-radio-button", 4);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(20, "div", 5);
    \u0275\u0275repeaterCreate(21, SpaceListFieldComponent_For_22_Template, 34, 18, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 7);
    \u0275\u0275listener("click", function SpaceListFieldComponent_Template_button_click_24_listener() {
      return ctx.changeSpaces();
    });
    \u0275\u0275elementStart(25, "div", 8)(26, "icon");
    \u0275\u0275text(27, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 11, "CALENDAR_EVENT.SPACE_SELECT_SIZE"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.room_size);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(27, _c09));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 13, "CALENDAR_EVENT.SPACE_SELECT_SIZE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "CALENDAR_EVENT.SPACE_SELECT_SIZE_1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 17, "CALENDAR_EVENT.SPACE_SELECT_SIZE_X", \u0275\u0275pureFunction0(28, _c15)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 20, "CALENDAR_EVENT.SPACE_SELECT_SIZE_X", \u0275\u0275pureFunction0(29, _c22)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(23, 23, ctx.space_list));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 25, "CALENDAR_EVENT.SPACE_ADD"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  FormsModule,
  NgControlStatus,
  NgModel,
  IconComponent,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  MatDialogModule,
  AuthenticatedImageDirective
], encapsulation: 2 });
var SpaceListFieldComponent = _SpaceListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpaceListFieldComponent, [{
    type: Component,
    args: [{ selector: `space-list-field`, template: `
        <div>
            <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
                <div class="min-w-[256px] flex-1 space-y-2">
                    <label>
                        {{ 'CALENDAR_EVENT.SPACE_SELECT_SIZE' | translate
                        }}<span>*</span>
                    </label>
                    <div class="flex items-center">
                        <mat-radio-group
                            [attr.aria-label]="
                                'CALENDAR_EVENT.SPACE_SELECT_SIZE' | translate
                            "
                            class="space-x-4"
                            [(ngModel)]="room_size"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-radio-button [value]="1">
                                {{
                                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_1'
                                        | translate
                                }}
                            </mat-radio-button>
                            <mat-radio-button [value]="4">
                                {{
                                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                                        | translate: { count: 4 }
                                }}
                            </mat-radio-button>
                            <mat-radio-button [value]="10">
                                {{
                                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                                        | translate: { count: 10 }
                                }}
                            </mat-radio-button>
                        </mat-radio-group>
                    </div>
                </div>
            </div>
        </div>
        <div list class="space-y-2">
            @for (space of space_list | async; track space) {
                <div
                    space
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    <div
                        class="bg-base-200 mr-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl"
                    >
                        @if (space.images?.length) {
                            <img
                                auth
                                [source]="space.images[0]"
                                class="min-h-full object-cover"
                            />
                        } @else {
                            <img
                                class="m-auto"
                                src="assets/icons/room-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="pb-4 sm:space-y-2">
                        <div class="font-medium">
                            {{
                                space.display_name ||
                                    space.name ||
                                    'Meeting Space'
                            }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">place</icon>
                            <p>
                                {{
                                    level(space.zones)?.display_name ||
                                        level(space.zones)?.name
                                }}
                            </p>
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">people</icon>
                            <p>
                                {{
                                    'CALENDAR_EVENT.CAPACITY_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      space.capacity < 1
                                                          ? 2
                                                          : space.capacity,
                                              }
                                }}
                            </p>
                        </div>
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                name="edit-space"
                                class="clear"
                                (click)="changeSpaces()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>edit</icon>
                                    {{ 'COMMON.CHANGE' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                name="remove-space"
                                class="clear"
                                (click)="removeSpace(space)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>close</icon>
                                    {{ 'COMMON.REMOVE' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <button
                        icon
                        matRipple
                        name="toggle-space-favourite"
                        class="absolute top-1 right-1"
                        [class.text-info]="favorites.includes(space?.id)"
                        (click)="toggleFavourite(space)"
                    >
                        <icon
                            [className]="
                                favorites.includes(space?.id)
                                    ? 'material-symbols-rounded'
                                    : 'material-symbols-outlined'
                            "
                            >favorite</icon
                        >
                    </button>
                </div>
            }
        </div>
        <button
            btn
            matRipple
            name="add-space"
            class="inverse mt-2 w-full"
            (click)="changeSpaces()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'CALENDAR_EVENT.SPACE_ADD' | translate }}</span>
            </div>
        </button>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SpaceListFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      MatRadioModule,
      FormsModule,
      IconComponent,
      MatRippleModule,
      TranslatePipe,
      MatDialogModule,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceListFieldComponent, { className: "SpaceListFieldComponent", filePath: "libs/form-fields/src/lib/space-list-field.component.ts", lineNumber: 203 });
})();

// node_modules/blob-util/dist/blob-util.es.js
function createBlob(parts, properties) {
  parts = parts || [];
  properties = properties || {};
  if (typeof properties === "string") {
    properties = { type: properties };
  }
  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }
    var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
    var builder = new Builder();
    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }
    return builder.getBlob(properties.type);
  }
}
function arrayBufferToBlob(buffer, type) {
  return createBlob([buffer], type);
}

// libs/form-fields/src/lib/upload-file-field.component.ts
function UploadFileFieldComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-progress-spinner", 9);
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32)("value", ctx_r1.item.progress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item.progress, " ");
  }
}
function UploadFileFieldComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "icon");
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.item.url, \u0275\u0275sanitizeUrl);
  }
}
function UploadFileFieldComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, UploadFileFieldComponent_Conditional_2_Conditional_3_Template, 4, 3, "div", 6);
    \u0275\u0275conditionalCreate(4, UploadFileFieldComponent_Conditional_2_Conditional_4_Template, 3, 1, "a", 7);
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function UploadFileFieldComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.writeValue(null));
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-error!", ctx_r1.item.progress < 1)("!bg-opacity-20", ctx_r1.item.progress < 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.item.progress >= 0 && ctx_r1.item.progress < 100 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.item.progress >= 100 ? 4 : -1);
  }
}
function UploadFileFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 11);
    \u0275\u0275text(2, "Drop file or click to upload file");
    \u0275\u0275elementEnd()();
  }
}
var _UploadFileFieldComponent = class _UploadFileFieldComponent {
  constructor() {
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.item = new_value;
    if (this._onChange)
      this._onChange(this.item);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.item = value;
  }
  onFileEvent(event) {
    const element = event.target;
    if (!element?.files?.length)
      return;
    const files = element.files;
    const on_change = (item) => {
      this.item = item;
      this.setValue(this.item);
    };
    this._uploadFile(files[0], on_change);
  }
  _uploadFile(file, on_change) {
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", (e) => {
      const arrayBuffer = e.target.result;
      const blob = arrayBufferToBlob(arrayBuffer, file.type);
      const upload_list = We([blob], { file_name: file.name });
      const upload = upload_list[0];
      const upload_details = {
        id: `${randomInt(999999999999)}`,
        name: file.name,
        progress: 0,
        size: file.size,
        created_at: Date.now(),
        url: ""
      };
      upload.status.pipe(takeWhile((_) => _.status !== "complete", true)).subscribe((state) => {
        if (upload.access_url)
          upload_details.url = upload.access_url;
        upload_details.progress = state.progress;
        if (state.status === "error")
          upload_details.progress = -1;
        on_change(upload_details);
      });
      on_change(upload_details);
    });
    fileReader.readAsArrayBuffer(file);
  }
};
_UploadFileFieldComponent.\u0275fac = function UploadFileFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UploadFileFieldComponent)();
};
_UploadFileFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadFileFieldComponent, selectors: [["upload-file"]], features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UploadFileFieldComponent),
    multi: true
  },
  {
    provide: UPLOAD_PERMISSIONS_MODAL,
    useValue: UploadPermissionsModalComponent
  }
])], decls: 4, vars: 1, consts: [[1, "border-base-200", "bg-base-200", "hover:bg-base-200", "relative", "w-full", "cursor-pointer", "rounded-sm", "border", "p-2"], ["type", "file", 1, "absolute", "inset-0", "z-10", "max-w-full", "opacity-0", 3, "change"], ["item", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "relative", "z-50", "flex", "w-full", "items-center", "rounded-sm", "border", 3, "bg-error!", "!bg-opacity-20"], [1, "z-0", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center"], ["item", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "relative", "z-50", "flex", "w-full", "items-center", "rounded-sm", "border"], [1, "w-px", "flex-1", "truncate", "px-2", "font-mono", "text-sm"], [1, "relative", "mx-1"], ["icon", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["icon", "", 3, "click"], ["mode", "determinate", 3, "diameter", "value"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "text-sm", "font-bold"], [1, "opacity-30"]], template: function UploadFileFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
    \u0275\u0275listener("change", function UploadFileFieldComponent_Template_input_change_1_listener($event) {
      return ctx.onFileEvent($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, UploadFileFieldComponent_Conditional_2_Template, 8, 7, "div", 2)(3, UploadFileFieldComponent_Conditional_3_Template, 3, 0, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.item ? 2 : 3);
  }
}, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, IconComponent], encapsulation: 2 });
var UploadFileFieldComponent = _UploadFileFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadFileFieldComponent, [{
    type: Component,
    args: [{ selector: "upload-file", template: `
        <div
            class="border-base-200 bg-base-200 hover:bg-base-200 relative w-full cursor-pointer rounded-sm border p-2"
        >
            <input
                type="file"
                class="absolute inset-0 z-10 max-w-full opacity-0"
                (change)="onFileEvent($event)"
            />
            @if (item) {
                <div
                    item
                    class="border-base-200 bg-base-100 hover:bg-base-200 relative z-50 flex w-full items-center rounded-sm border"
                    [class.bg-error!]="item.progress < 1"
                    [class.!bg-opacity-20]="item.progress < 1"
                >
                    <div class="w-px flex-1 truncate px-2 font-mono text-sm">
                        {{ item.name }}
                    </div>
                    @if (item.progress >= 0 && item.progress < 100) {
                        <div class="relative mx-1">
                            <mat-progress-spinner
                                [diameter]="32"
                                mode="determinate"
                                [value]="item.progress"
                            ></mat-progress-spinner>
                            <div
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold"
                            >
                                {{ item.progress }}
                            </div>
                        </div>
                    }
                    @if (item.progress >= 100) {
                        <a
                            [href]="item.url"
                            icon
                            matRipple
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <icon>link</icon>
                        </a>
                    }
                    <button icon (click)="writeValue(null)">
                        <icon>close</icon>
                    </button>
                </div>
            } @else {
                <div
                    class="z-0 flex h-full w-full flex-col items-center justify-center"
                >
                    <p class="opacity-30">Drop file or click to upload file</p>
                </div>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UploadFileFieldComponent),
        multi: true
      },
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ], imports: [MatProgressSpinnerModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadFileFieldComponent, { className: "UploadFileFieldComponent", filePath: "libs/form-fields/src/lib/upload-file-field.component.ts", lineNumber: 89 });
})();

// libs/form-fields/src/lib/upload-list-field.component.ts
function UploadListFieldComponent_Conditional_12_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-progress-spinner", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32)("value", item_r2.progress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.progress, " ");
  }
}
function UploadListFieldComponent_Conditional_12_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "icon");
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", item_r2.url, \u0275\u0275sanitizeUrl);
  }
}
function UploadListFieldComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, UploadListFieldComponent_Conditional_12_For_2_Conditional_3_Template, 4, 3, "div", 13);
    \u0275\u0275conditionalCreate(4, UploadListFieldComponent_Conditional_12_For_2_Conditional_4_Template, 3, 1, "a", 14);
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function UploadListFieldComponent_Conditional_12_For_2_Template_button_click_5_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFile(item_r2));
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275classProp("bg-error!", item_r2.progress < 1)("!bg-opacity-20", item_r2.progress < 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.progress >= 0 && item_r2.progress < 100 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.progress >= 100 ? 4 : -1);
  }
}
function UploadListFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, UploadListFieldComponent_Conditional_12_For_2_Template, 8, 7, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.list);
  }
}
function UploadListFieldComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 18);
    \u0275\u0275text(2, "No uploaded files");
    \u0275\u0275elementEnd()();
  }
}
var _UploadListFieldComponent = class _UploadListFieldComponent {
  constructor() {
    this.list = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.list = new_value.filter((_) => _.url && _.progress >= 100);
    if (this._onChange)
      this._onChange(this.list);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.list = value.map((_) => __spreadValues({
      id: `file-${randomInt(999999999)}`
    }, _));
  }
  removeFile(item) {
    this.list = this.list.filter((_) => _.id !== item.id);
  }
  onFileEvent(event) {
    const element = event.target;
    if (!element?.files?.length)
      return;
    const files = element.files;
    const on_change = (item) => {
      this.list = [
        ...(this.list || []).filter((_) => _.id !== item.id)
      ].sort((a, b) => a.created_at - b.created_at);
      this.setValue(this.list);
    };
    for (let i = 0; i < files.length; i++) {
      this._uploadFile(files[i], on_change);
    }
  }
  _uploadFile(file, on_change) {
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", (e) => {
      const arrayBuffer = e.target.result;
      const blob = arrayBufferToBlob(arrayBuffer, file.type);
      const upload_list = We([blob], { file_name: file.name });
      const upload = upload_list[0];
      const upload_details = {
        id: `${randomInt(999999999999)}`,
        name: file.name,
        progress: 0,
        size: file.size,
        created_at: Date.now(),
        url: ""
      };
      upload.status.pipe(takeWhile((_) => _.status !== "complete", true)).subscribe((state) => {
        if (upload.access_url)
          upload_details.url = upload.access_url;
        upload_details.progress = state.progress;
        if (state.status === "error")
          upload_details.progress = -1;
        on_change(upload_details);
      });
      on_change(upload_details);
    });
    fileReader.readAsArrayBuffer(file);
  }
};
_UploadListFieldComponent.\u0275fac = function UploadListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UploadListFieldComponent)();
};
_UploadListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadListFieldComponent, selectors: [["upload-list"]], features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UploadListFieldComponent),
    multi: true
  },
  {
    provide: UPLOAD_PERMISSIONS_MODAL,
    useValue: UploadPermissionsModalComponent
  }
])], decls: 14, vars: 1, consts: [[1, "flex", "items-center", "space-x-2"], [1, "border-base-200", "hover:bg-neutral", "relative", "flex", "h-48", "w-52", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-sm", "border-2", "border-dashed"], [1, "mb-2", "text-3xl"], [1, "text-center"], [1, "my-1", "text-center", "text-xs"], ["btn", "", "matRipple", "", 1, "w-28"], ["multiple", "true", "type", "file", 1, "absolute", "inset-0", "max-w-full", "opacity-0", 3, "change"], [1, "flex", "h-48", "w-1/2", "flex-1", "flex-col", "items-center"], ["list", "", 1, "h-full", "w-full", "space-y-2", "overflow-auto"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center"], ["item", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "border", 3, "bg-error!", "!bg-opacity-20"], ["item", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "border"], [1, "w-px", "flex-1", "truncate", "px-2", "font-mono", "text-sm"], [1, "relative", "mx-1"], ["icon", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["icon", "", 3, "click"], ["mode", "determinate", 3, "diameter", "value"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "text-sm", "font-bold"], [1, "opacity-30"]], template: function UploadListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "icon", 2);
    \u0275\u0275text(3, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "Drop files");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, "or");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275text(9, "Browse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 6);
    \u0275\u0275listener("change", function UploadListFieldComponent_Template_input_change_10_listener($event) {
      return ctx.onFileEvent($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275conditionalCreate(12, UploadListFieldComponent_Conditional_12_Template, 3, 0, "div", 8)(13, UploadListFieldComponent_Conditional_13_Template, 3, 0, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275conditional((ctx.list == null ? null : ctx.list.length) ? 12 : 13);
  }
}, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, IconComponent, MatRippleModule, MatRipple], encapsulation: 2 });
var UploadListFieldComponent = _UploadListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadListFieldComponent, [{
    type: Component,
    args: [{ selector: "upload-list", template: `
        <div class="flex items-center space-x-2">
            <div
                class="border-base-200 hover:bg-neutral relative flex h-48 w-52 cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed"
            >
                <icon class="mb-2 text-3xl">upload_file</icon>
                <p class="text-center">Drop files</p>
                <p class="my-1 text-center text-xs">or</p>
                <button btn matRipple class="w-28">Browse</button>
                <input
                    multiple="true"
                    type="file"
                    class="absolute inset-0 max-w-full opacity-0"
                    (change)="onFileEvent($event)"
                />
            </div>
            <div class="flex h-48 w-1/2 flex-1 flex-col items-center">
                @if (list?.length) {
                    <div list class="h-full w-full space-y-2 overflow-auto">
                        @for (item of list; track item) {
                            <div
                                item
                                class="border-base-200 bg-base-100 hover:bg-base-200 flex w-full items-center rounded-sm border"
                                [class.bg-error!]="item.progress < 1"
                                [class.!bg-opacity-20]="item.progress < 1"
                            >
                                <div
                                    class="w-px flex-1 truncate px-2 font-mono text-sm"
                                >
                                    {{ item.name }}
                                </div>
                                @if (
                                    item.progress >= 0 && item.progress < 100
                                ) {
                                    <div class="relative mx-1">
                                        <mat-progress-spinner
                                            [diameter]="32"
                                            mode="determinate"
                                            [value]="item.progress"
                                        ></mat-progress-spinner>
                                        <div
                                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold"
                                        >
                                            {{ item.progress }}
                                        </div>
                                    </div>
                                }
                                @if (item.progress >= 100) {
                                    <a
                                        [href]="item.url"
                                        icon
                                        matRipple
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <icon>link</icon>
                                    </a>
                                }
                                <button icon (click)="removeFile(item)">
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center"
                    >
                        <p class="opacity-30">No uploaded files</p>
                    </div>
                }
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UploadListFieldComponent),
        multi: true
      },
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ], imports: [MatProgressSpinnerModule, IconComponent, MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadListFieldComponent, { className: "UploadListFieldComponent", filePath: "libs/form-fields/src/lib/upload-list-field.component.ts", lineNumber: 108 });
})();

// libs/form-fields/src/lib/user-list-field.component.ts
var _c010 = ["search_field"];
var _c16 = (a0) => ({ name: a0 });
var _c23 = (a0) => ({ email: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function UserListFieldComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 13);
    \u0275\u0275listener("removed", function UserListFieldComponent_For_10_Template_mat_chip_row_removed_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeUser(item_r3));
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", item_r3.is_external);
    \u0275\u0275property("matTooltip", item_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name || item_r3.email);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 5, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(8, _c16, item_r3.name || item_r3.email)));
  }
}
function UserListFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function UserListFieldComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_18_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addUserFromEmail());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "FORM.USER_LIST_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c23, ctx_r3.search$.getValue())), " ");
  }
}
function UserListFieldComponent_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " (");
    \u0275\u0275elementStart(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, ") ");
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.username);
  }
}
function UserListFieldComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275listener("click", function UserListFieldComponent_For_20_Template_mat_option_click_0_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addUser(user_r7));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "a-user-avatar", 18);
    \u0275\u0275elementStart(3, "div", 11)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, UserListFieldComponent_For_20_Conditional_8_Template, 4, 1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r7.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r7.username && user_r7.username !== user_r7.email ? 8 : -1);
  }
}
function UserListFieldComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 21);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openNewUserModal());
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 25)(10, "div", 22)(11, "span", 23);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 26);
    \u0275\u0275listener("change", function UserListFieldComponent_Conditional_22_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addUsersFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 27);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_22_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.downloadCSVTemplate();
      return \u0275\u0275resetView(ctx_r3.download.emit());
    });
    \u0275\u0275elementStart(19, "div", 22)(20, "span", 23);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 24);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "FORM.USER_BTN_ADD_EXTERNAL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "FORM.USER_BTN_ADD_EXTERNAL_SIMPLE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "FORM.USER_BTN_UPLOAD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "FORM.USER_BTN_UPLOAD_SIMPLE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 14, "FORM.USER_BTN_TEMPLATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, "FORM.USER_BTN_TEMPLATE_SIMPLE"), " ");
  }
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
var ACCEPTED_FILE_TYPES = ["text/csv", "text/plain"];
var DENIED_FILE_TYPES = [
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
];
var _UserListFieldComponent = class _UserListFieldComponent extends AsyncHandler {
  searchStaff(q) {
    return this._settings.get("app.basic_user_search") ? Oa({ q, authority_id: Ut()?.id }).pipe(map((_) => _.data.map((u) => new User(u)))) : searchStaff(q);
  }
  get search_valid_email() {
    return validateEmail(this.search$.getValue());
  }
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.time = input(Date.now());
    this.disabled = model(void 0);
    this.limit = input(3);
    this.guests = input(false);
    this.guests_only = input(false);
    this.hide_actions = input(false);
    this.custom_template = input(false);
    this.filter = input(void 0);
    this.new_user = output();
    this.download = output();
    this.separatorKeysCodes = [ENTER, COMMA];
    this.loading = false;
    this.search$ = new BehaviorSubject("");
    this._search_el = viewChild("search_field");
    this.user_list$ = this.search$.pipe(debounceTime(300), switchMap((_) => {
      this.loading = true;
      return (_ ? this.guests() ? combineLatest([
        this.searchStaff(_),
        searchGuests(_)
      ]).pipe(map(([staff, guests]) => {
        if (this.guests_only())
          staff = [];
        const visitors_list = [];
        const visitors = this._settings.get("visitor-invitees") || [];
        for (const item of visitors) {
          const [email, name, company] = item.split("|");
          visitors_list.push({
            email,
            name,
            company
          });
        }
        return unique(staff.concat(guests).concat(visitors_list), "email");
      })) : this.searchStaff(_) : of([])).pipe(catchError((_2) => of([])));
    }), tap((_) => this.loading = false));
    this.active_list = [];
    this.validFn = (s) => validateEmail(s);
    this.emptyClick = () => this.openNewUserModal(new User());
  }
  updateSearch(new_value = "") {
    this.timeout("search", () => this.search$.next(new_value));
  }
  addUserFromEmail(email = "") {
    if (!email)
      email = this.search$.getValue();
    if (!validateEmail(email))
      return;
    const user = new User({ id: email, email, name: email.split("@")[0] });
    this.addUser(user);
    const { name, organisation } = user;
    const visitor_details = `${email}|${name}|${organisation}`;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", [
      ...old_visitors.filter((_) => !_.includes(email)),
      visitor_details
    ]);
    this.timeout("clear_search", () => {
      this.search$.next("");
      this._search_el().nativeElement.value = "";
    }, 100);
  }
  /**
   * Add user to the user list
   * @param user
   */
  addUser(user) {
    const list = this.active_list?.filter((_) => _.id !== user.id) || [];
    this.setValue([
      ...list,
      new User(__spreadProps(__spreadValues({}, user), {
        id: user.id || user.email,
        visit_expected: (!user.id && user.is_external !== true ? user.visit_expected : null) ?? true
      }))
    ]);
    this.timeout("clear_search", () => {
      this.search$.next("");
      this._search_el().nativeElement.value = "";
    }, 100);
  }
  /**
   * Remove user from the user list
   * @param user
   */
  removeUser(user) {
    const list = this.active_list.filter((a_user) => a_user.id !== user.id);
    this.setValue(list);
  }
  /**
   * Load CSV file and populate the user list with the contents
   * @param event File input field event
   */
  addUsersFromFile(event) {
    if (event.target) {
      const file = event.target.files[0];
      if (file) {
        if (!ACCEPTED_FILE_TYPES.includes(file.type) || DENIED_FILE_TYPES.includes(file.type)) {
          notifyError("Only CSV files are supported");
          return;
        }
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          this.processCsvData(evt.srcElement.result);
          event.target.value = "";
        });
        reader.addEventListener("error", (_) => notifyError("Error reading file."));
      }
    }
  }
  /**
   * Process raw CSV data and save user data to attendee list
   * @param data CSV data
   */
  processCsvData(data) {
    const list = csvToJson(data) || [];
    const id = currentUser()?.staff_id || "unknown";
    for (const el of list) {
      el.name = el.name || `${el.first_name} ${el.last_name}`;
      const display = (el.name || `${Math.floor(Math.random() * 99999999)}`).split(" ").join("_").toLowerCase();
      if (!el.email) {
        el.email = `${display}+${id}@guest.${USER_DOMAIN}`;
      }
      const internal_emails = this._settings.get("app.bookings.internal_emails") || ["place.tech"];
      el.visit_expected = el.visit_expected ?? !internal_emails.find((_) => el.email.endsWith(_));
      el.phone = "" + el.phone;
      this.addUser(new User(el));
    }
  }
  /* istanbul ignore next */
  /** Download template CSV file */
  downloadCSVTemplate() {
    if (this.custom_template())
      return;
    const template = `Organisation,First Name,Last Name,Email,Phone,Assistance Required,Visit Expected
Fake Org,John,Smith,john.smith@example.com,01234567898,false,true`;
    downloadFile("template.csv", template);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.active_list = new_value;
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_list = value;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  displayFn(item) {
    return item?.name || "";
  }
  /**
   * Open modal to add or update user details
   */
  openNewUserModal(user = new User()) {
    const ref = this._dialog.open(NewUserModalComponent, {
      width: "auto",
      height: "auto",
      data: { user }
    });
    ref.componentInstance?.event.pipe(first((_) => _.reason === "done")).subscribe((event) => {
      this.addUser(event.metadata);
      ref.close();
    });
  }
};
_UserListFieldComponent.\u0275fac = function UserListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserListFieldComponent)();
};
_UserListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListFieldComponent, selectors: [["a-user-list-field"]], viewQuery: function UserListFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._search_el, _c010, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { time: [1, "time"], disabled: [1, "disabled"], limit: [1, "limit"], guests: [1, "guests"], guests_only: [1, "guests_only"], hide_actions: [1, "hide_actions"], custom_template: [1, "custom_template"], filter: [1, "filter"] }, outputs: { disabled: "disabledChange", new_user: "new_user", download: "download" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UserListFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 23, vars: 18, consts: [["origin", "matAutocompleteOrigin"], ["chipList", ""], ["search_field", ""], ["auto", "matAutocomplete"], ["form-field", "", 1, "mb-4"], ["search", ""], ["appearance", "outline", "matAutocompleteOrigin", "", 1, "w-full"], ["aria-label", "User Seleciom"], ["user", "", 3, "bg-warning", "matTooltip"], ["name", "user_email", 3, "ngModelChange", "matChipInputTokenEnd", "placeholder", "ngModel", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["diameter", "24", "matSuffix", ""], [1, "leading-tight"], ["actions", "", 1, "-mt-4", "flex", "items-center", "space-x-2"], ["user", "", 3, "removed", "matTooltip"], [1, "flex", "items-center", "space-x-2"], ["matChipRemove", "", "remove", ""], [3, "click"], [1, "leading-tight", 3, "click"], [1, "-ml-2", 3, "user"], [1, "text-xs", "opacity-30"], [1, "truncate"], ["btn", "", "matRipple", "", "type", "button", "name", "new-contact", 1, "inverse", "flex-1", "sm:flex-none", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "hidden", "sm:inline"], [1, "inline", "sm:hidden"], ["btn", "", "matRipple", "", "type", "button", "name", "upload-csv", 1, "inverse", "relative", "flex-1", "sm:flex-none"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "matRipple", "", "type", "button", "name", "download-template", 1, "inverse", "flex-1", "sm:flex-none", 3, "click"]], template: function UserListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "mat-form-field", 6, 0)(4, "mat-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-chip-grid", 7, 1);
    \u0275\u0275repeaterCreate(9, UserListFieldComponent_For_10_Template, 8, 10, "mat-chip-row", 8, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 9, 2);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275listener("ngModelChange", function UserListFieldComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateSearch($event));
    })("matChipInputTokenEnd", function UserListFieldComponent_Template_input_matChipInputTokenEnd_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addUserFromEmail($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, UserListFieldComponent_Conditional_15_Template, 1, 0, "mat-spinner", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-autocomplete", null, 3);
    \u0275\u0275conditionalCreate(18, UserListFieldComponent_Conditional_18_Template, 3, 6, "mat-option");
    \u0275\u0275repeaterCreate(19, UserListFieldComponent_For_20_Template, 9, 4, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, UserListFieldComponent_Conditional_22_Template, 26, 18, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chipList_r9 = \u0275\u0275reference(8);
    const auto_r10 = \u0275\u0275reference(17);
    \u0275\u0275attribute("disabled", ctx.disabled());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "FORM.USER_LIST_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.active_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 12, "FORM.USER_LIST_PLACEHOLDER"))("ngModel", \u0275\u0275pipeBind1(14, 14, ctx.search$))("matAutocomplete", auto_r10)("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.loading ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.search_valid_email ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 16, ctx.user_list$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.hide_actions() ? 22 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSuffix,
  MatChipsModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatAutocompleteOrigin,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  UserAvatarComponent
], encapsulation: 2 });
var UserListFieldComponent = _UserListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-list-field", template: `
        <div class="mb-4" form-field [attr.disabled]="disabled()">
            <div search>
                <mat-form-field
                    class="w-full"
                    appearance="outline"
                    matAutocompleteOrigin
                    #origin="matAutocompleteOrigin"
                >
                    <mat-label>{{ 'FORM.USER_LIST_PLACEHOLDER' | translate }}</mat-label>
                    <mat-chip-grid #chipList aria-label="User Seleciom">
                        @for (item of active_list; track item.id) {
                            <mat-chip-row
                                user
                                [class.bg-warning]="item.is_external"
                                (removed)="removeUser(item)"
                                [matTooltip]="item.email"
                            >
                                <div class="flex items-center space-x-2">
                                    <div>{{ item.name || item.email }}</div>
                                </div>
                                <button
                                    matChipRemove
                                    remove
                                    [attr.aria-label]="
                                        'COMMON.REMOVE_ITEM'
                                            | translate
                                                : {
                                                      name:
                                                          item.name ||
                                                          item.email,
                                                  }
                                    "
                                >
                                    <icon>cancel</icon>
                                </button>
                            </mat-chip-row>
                        }
                    </mat-chip-grid>
                    <input
                        #search_field
                        [placeholder]="'FORM.USER_LIST_PLACEHOLDER' | translate"
                        name="user_email"
                        [ngModel]="search$ | async"
                        (ngModelChange)="updateSearch($event)"
                        [matAutocomplete]="auto"
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                        (matChipInputTokenEnd)="addUserFromEmail($event.value)"
                    />
                    @if (loading) {
                        <mat-spinner diameter="24" matSuffix></mat-spinner>
                    }
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    @if (search_valid_email) {
                        <mat-option (click)="addUserFromEmail()">
                            {{
                                'FORM.USER_LIST_ADD_EXTERNAL'
                                    | translate: { email: search$.getValue() }
                            }}
                        </mat-option>
                    }
                    @for (user of user_list$ | async; track user) {
                        <mat-option
                            (click)="addUser(user)"
                            class="leading-tight"
                        >
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                        @if (
                                            user.username &&
                                            user.username !== user.email
                                        ) {
                                            (<span class="truncate">{{
                                                user.username
                                            }}</span
                                            >)
                                        }
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-autocomplete>
            </div>
            @if (!hide_actions()) {
                <div class="-mt-4 flex items-center space-x-2" actions>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="new-contact"
                        class="inverse flex-1 sm:flex-none"
                        (click)="openNewUserModal()"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_ADD_EXTERNAL' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{
                                    'FORM.USER_BTN_ADD_EXTERNAL_SIMPLE'
                                        | translate
                                }}
                            </span>
                        </div>
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="upload-csv"
                        class="inverse relative flex-1 sm:flex-none"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_UPLOAD' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{ 'FORM.USER_BTN_UPLOAD_SIMPLE' | translate }}
                            </span>
                        </div>
                        <input
                            class="absolute inset-0 opacity-0"
                            type="file"
                            (change)="addUsersFromFile($event)"
                        />
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="download-template"
                        class="inverse flex-1 sm:flex-none"
                        (click)="downloadCSVTemplate(); download.emit()"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_TEMPLATE' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{
                                    'FORM.USER_BTN_TEMPLATE_SIMPLE' | translate
                                }}
                            </span>
                        </div>
                    </button>
                </div>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserListFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      FormsModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatTooltipModule,
      UserAvatarComponent,
      MatTooltipModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListFieldComponent, { className: "UserListFieldComponent", filePath: "libs/form-fields/src/lib/user-list-field.component.ts", lineNumber: 246 });
})();

export {
  DateRangeFieldComponent,
  HostSelectFieldComponent,
  addChipItem,
  removeChipItem,
  ItemListFieldComponent,
  RecurrenceFieldComponent,
  SpaceListFieldComponent,
  UserListFieldComponent
};
//# sourceMappingURL=chunk-TZIRVYDW.js.map
