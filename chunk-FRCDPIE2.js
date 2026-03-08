import {
  $,
  ActiveDescendantKeyManager,
  AssetRequest,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Bl,
  Booking,
  BreakpointObserver,
  Breakpoints,
  Calendar,
  CalendarEvent,
  CdkScrollableModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  CustomTooltipComponent,
  DOWN_ARROW,
  DatePipe,
  DefaultValueAccessor,
  Directionality,
  Directive,
  Dl,
  DurationPipe,
  ENTER,
  ESCAPE,
  Ea,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  ExploreStateService,
  Fl,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  G,
  Gl,
  GuestUser,
  Hl,
  Hn,
  IconComponent,
  Il,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Jl,
  Kl,
  LOCAL_TIMEZONE,
  LevelPipe,
  Ll,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MAT_FORM_FIELD,
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MatCheckbox,
  MatCheckboxModule,
  MatCommonModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSuffix,
  N,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  Ne,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NgZone,
  Nl,
  O,
  Oa,
  Observable,
  Oe,
  OrganisationService,
  Output,
  OverlayConfig,
  OverlayModule,
  Pipe,
  Pl,
  Platform,
  PrintableComponent,
  Ql,
  ReactiveFormsModule,
  Renderer2,
  Rl,
  Router,
  SafePipe,
  SanitizePipe,
  SettingsService,
  SlicePipe,
  Space,
  SpacePipe,
  StaffUser,
  Subject,
  Subscription,
  TAB,
  TemplatePortal,
  TemplateRef,
  Tl,
  TranslatePipe,
  UP_ARROW,
  Ul,
  Un,
  UpperCasePipe,
  User,
  UserAvatarComponent,
  Ut,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  Vl,
  Wr,
  Yl,
  _IdGenerator,
  _animationsDisabled,
  _countGroupLabelsBeforeOption,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getOptionScrollPosition,
  add,
  addAriaReferencedId,
  addDays,
  addHours,
  addMilliseconds,
  addMinutes,
  addMonths,
  addYears,
  afterNextRender,
  booleanAttribute,
  catchError,
  coerceArray,
  combineLatest,
  computed,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  currentUser,
  current_user,
  debounceTime,
  defaultIfEmpty,
  defer,
  delay,
  differenceInMinutes,
  differenceInMonths,
  distinctUntilKeyChanged,
  endOfDay,
  et,
  filter,
  filterResourcesFromRules,
  firstTruthyValueFrom,
  flatten,
  forkJoin,
  format,
  formatDuration,
  forwardRef,
  generateQRCode,
  generateUserForm,
  getInvalidFields,
  getTimezoneOffsetString,
  getUnixTime,
  hasModifierKey,
  i18n,
  inject,
  input,
  isAfter,
  isBefore,
  isSameDay,
  jl,
  lastValueFrom,
  localToTimezone,
  map,
  merge,
  model,
  nc,
  nextValueFrom,
  normalizeDates,
  notifyError,
  notifySuccess,
  of,
  ql,
  removeAriaReferencedId,
  requestSpacesForZone,
  roundToNearestMinutes,
  rulesForResource,
  set,
  setClassMetadata,
  setDefaultCreator,
  settingSignal,
  shareReplay,
  signal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  stringToMinutes,
  switchMap,
  take,
  tap,
  toDate,
  toObservable,
  toQueryString,
  toSignal,
  unique,
  viewChild,
  wh,
  zl,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
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
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-I7WSAWAM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}

// node_modules/date-fns/setMinutes.js
function setMinutes(date, minutes, options) {
  const date_ = toDate(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}

// node_modules/date-fns/subHours.js
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}

// libs/form-fields/src/lib/date-calendar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DateCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, day_r1 == null ? null : day_r1.id, "EE"), " ");
  }
}
function DateCalendarComponent_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateCalendarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DateCalendarComponent_For_18_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, DateCalendarComponent_For_18_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275element(4, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:bg-base-100", day_r3.id !== ctx_r3.active_date)("text-base-300!", !day_r3.is_month)("text-secondary-content", day_r3.id === ctx_r3.active_date)("text-base-content", day_r3.id !== ctx_r3.active_date)("bg-secondary", day_r3.id === ctx_r3.active_date)("font-normal", day_r3.id !== ctx_r3.active_date);
    \u0275\u0275property("disabled", day_r3.id < ctx_r3.from() || day_r3.id > ctx_r3.to());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 15, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.today === day_r3.id ? 3 : -1);
  }
}
var _DateCalendarComponent = class _DateCalendarComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this.from = input(0);
    this.to = input(Date.now() * 10);
    this.offset_weekday = input(0);
    this.today = startOfDay(Date.now()).valueOf();
    this.date = Date.now();
    this.active_date = startOfDay(Date.now()).valueOf();
    this.offset = 0;
    this.date_list = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  ngOnInit() {
    this.generateDates();
  }
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this.generateDates();
    }
  }
  setValue(new_value) {
    if (new_value < this.from() || new_value >= this.to())
      return;
    const date = new Date(new_value);
    this.date = set(this.date, {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }).valueOf();
    this.active_date = startOfDay(this.date).valueOf();
    if (this._onChange)
      this._onChange(new_value);
  }
  writeValue(value) {
    this.date = value;
    this.active_date = startOfDay(value).valueOf();
    this.offset = 0;
    this.generateDates();
  }
  changeMonth(change) {
    this.offset += change;
    this.generateDates();
  }
  setMonthToCurrent() {
    const diff = differenceInMonths(this.date, startOfMonth(Date.now()));
    this.offset = -diff;
    this.generateDates();
  }
  generateDates() {
    const offset = this._settings.get("app.week_start") || this.offset_weekday();
    const date = addMonths(this.date, this.offset);
    let start = startOfWeek(startOfMonth(date), {
      weekStartsOn: offset
    });
    const now = startOfDay(Date.now());
    const list = [];
    while (list.length < 42) {
      list.push({
        id: start.valueOf(),
        is_past: isBefore(start, now),
        is_month: isSameMonth(start, date)
      });
      start = addDays(start, 1);
    }
    this.date_list = list;
  }
};
_DateCalendarComponent.\u0275fac = function DateCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateCalendarComponent)();
};
_DateCalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateCalendarComponent, selectors: [["date-calendar"]], inputs: { from: [1, "from"], to: [1, "to"], offset_weekday: [1, "offset_weekday"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DateCalendarComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 19, vars: 10, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], [1, "pr-2", "pl-1.5", "font-medium", 3, "dblclick"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "name", "schedule-next-month", 3, "click", "disabled"], ["icon", "", "matRipple", "", "name", "schedule-previous-month", 3, "click", "disabled"], [1, "border-base-200", "mb-2", "flex", "items-center", "border-b", "pb-2", "text-sm"], [1, "flex-1", "text-center", "opacity-60"], [1, "flex", "flex-wrap", "items-center", "justify-between"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "hover:bg-base-100", "text-base-300!", "text-secondary-content", "text-base-content", "bg-secondary", "font-normal", "disabled"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "click", "disabled"], ["matRipple", "", 1, "border-secondary", "absolute", "-inset-[2px]", "overflow-hidden", "rounded-full", "border"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-full"]], template: function DateCalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("dblclick", function DateCalendarComponent_Template_button_dblclick_2_listener() {
      return ctx.setMonthToCurrent();
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_6_listener() {
      return ctx.changeMonth(-1);
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_9_listener() {
      return ctx.changeMonth(1);
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275repeaterCreate(13, DateCalendarComponent_For_14_Template, 3, 4, "div", 7, _forTrack0);
    \u0275\u0275pipe(15, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275repeaterCreate(17, DateCalendarComponent_For_18_Template, 5, 18, "button", 9, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, (ctx.date_list[6] == null ? null : ctx.date_list[6].id) || ctx.date, "LLLL yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx.date_list[0] == null ? null : ctx.date_list[0].id) < ctx.from());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx.date_list[34] == null ? null : ctx.date_list[34].id) > ctx.to());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(15, 6, ctx.date_list, 0, 7));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.date_list);
  }
}, dependencies: [CommonModule, SlicePipe, DatePipe, IconComponent], encapsulation: 2 });
var DateCalendarComponent = _DateCalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateCalendarComponent, [{
    type: Component,
    args: [{ selector: "date-calendar", template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <button
                    class="pr-2 pl-1.5 font-medium"
                    (dblclick)="setMonthToCurrent()"
                >
                    {{ date_list[6]?.id || date | date: 'LLLL yyyy' }}
                </button>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        name="schedule-next-month"
                        [disabled]="date_list[0]?.id < from()"
                        (click)="changeMonth(-1)"
                    >
                        <icon>chevron_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        name="schedule-previous-month"
                        [disabled]="date_list[34]?.id > to()"
                        (click)="changeMonth(1)"
                    >
                        <icon>chevron_right</icon>
                    </button>
                </div>
            </div>
            <div
                class="border-base-200 mb-2 flex items-center border-b pb-2 text-sm"
            >
                @for (day of date_list | slice: 0 : 7; track day.id) {
                    <div class="flex-1 text-center opacity-60">
                        {{ day?.id | date: 'EE' }}
                    </div>
                }
            </div>
            <div class="flex flex-wrap items-center justify-between">
                @for (day of date_list; track day.id) {
                    <button
                        icon
                        name="schedule-set-date"
                        class="relative my-0.5 h-9 w-9 min-w-[14%] overflow-visible"
                        [class.hover:bg-base-100]="day.id !== active_date"
                        [class.text-base-300!]="!day.is_month"
                        [class.text-secondary-content]="day.id === active_date"
                        [class.text-base-content]="day.id !== active_date"
                        [class.bg-secondary]="day.id === active_date"
                        [class.font-normal]="day.id !== active_date"
                        (click)="setValue(day.id)"
                        [disabled]="day.id < from() || day.id > to()"
                    >
                        {{ day.id | date: 'd' }}
                        @if (today === day.id) {
                            <div
                                class="border-secondary absolute -inset-[2px] overflow-hidden rounded-full border"
                                matRipple
                            ></div>
                        }
                        <div
                            class="absolute inset-0 overflow-hidden rounded-full"
                            matRipple
                        ></div>
                    </button>
                }
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateCalendarComponent),
        multi: true
      }
    ], imports: [CommonModule, IconComponent] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateCalendarComponent, { className: "DateCalendarComponent", filePath: "libs/form-fields/src/lib/date-calendar.component.ts", lineNumber: 114 });
})();

// libs/form-fields/src/lib/date-field.component.ts
var _c0 = ["*"];
function DateFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.date(), ctx_r0.date_format), " ");
  }
}
function DateFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FORM.DATE_EMPTY"));
  }
}
function DateFieldComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.start_of_day);
  }
}
function DateFieldComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.end_of_day);
  }
}
function DateFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, DateFieldComponent_Conditional_5_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(2, DateFieldComponent_Conditional_5_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_5_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 1 ? 3 : -1);
  }
}
function DateFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "date-calendar", 9);
    \u0275\u0275listener("ngModelChange", function DateFieldComponent_ng_template_11_Template_date_calendar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.date() || ctx_r0.now)("from", ctx_r0.from.valueOf())("to", ctx_r0.until.valueOf())("offset_weekday", ctx_r0.week_start());
  }
}
var TimezoneDiffRange;
(function(TimezoneDiffRange2) {
  TimezoneDiffRange2[TimezoneDiffRange2["Both"] = 0] = "Both";
  TimezoneDiffRange2[TimezoneDiffRange2["Start"] = 1] = "Start";
  TimezoneDiffRange2[TimezoneDiffRange2["End"] = 2] = "End";
})(TimezoneDiffRange || (TimezoneDiffRange = {}));
var _DateFieldComponent = class _DateFieldComponent extends AsyncHandler {
  get date_format() {
    return this.short() ? "MMM d, yyyy" : "MMMM d, yyyy";
  }
  get time_format() {
    return this.use_24hr() ? "HH : mm" : "h : mm a";
  }
  get start_of_day() {
    const start = startOfDay(this.date()).valueOf();
    const format2 = `MMM d, ${this.time_format}${this.range() === 1 ? " (z)" : ""}`;
    return this._date_pipe.transform(start, format2, this.tz);
  }
  get end_of_day() {
    const end = endOfDay(this.date()).valueOf();
    const format2 = `MMM d, ${this.time_format}${this.range() === 1 ? " (z)" : ""}`;
    return this._date_pipe.transform(end, format2, this.tz);
  }
  get has_error() {
    return this._control?.invalid && this._control?.touched;
  }
  get tz() {
    const tz = this.timezone();
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  constructor() {
    super();
    this._injector = inject(Injector);
    this.from_date = input(startOfDay(Date.now()).valueOf(), { alias: "from" });
    this.to_date = input(void 0, { alias: "to" });
    this.week_start = input(0);
    this.use_24hr = input(false);
    this.disabled = model(void 0);
    this.short = input(false);
    this.timezone = input("");
    this.range = input(TimezoneDiffRange.Both);
    this.date = signal(Date.now());
    this.now = Date.now();
    this._date_pipe = new DatePipe("en");
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._tooltip = viewChild(CustomTooltipComponent);
  }
  /** First allowed date on the calendar */
  get from() {
    return new Date(this.from_date()) || startOfDay(/* @__PURE__ */ new Date());
  }
  /** Current date value */
  get until() {
    return new Date(this.to_date()) || addYears(endOfDay(/* @__PURE__ */ new Date()), 1);
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this.date.set(Date.now());
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const old_date = new Date(this.date() || Date.now());
    let new_date = set(new_value, {
      hours: old_date.getHours(),
      minutes: old_date.getMinutes()
    }).valueOf();
    if (new_date < this.from.valueOf()) {
      new_date = this.from.valueOf();
    }
    this.date.set(new_date);
    if (this._onChange)
      this._onChange(new_date);
    this._tooltip()?.close();
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date.set(value);
    this._tooltip()?.close();
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
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
};
_DateFieldComponent.\u0275fac = function DateFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateFieldComponent)();
};
_DateFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateFieldComponent, selectors: [["a-date-field"], ["date-field"]], viewQuery: function DateFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], week_start: [1, "week_start"], use_24hr: [1, "use_24hr"], disabled: [1, "disabled"], short: [1, "short"], timezone: [1, "timezone"], range: [1, "range"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DateFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c0, decls: 13, vars: 7, consts: [["calendar_picker", ""], ["customTooltip", "", "yPosition", "top", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], [1, "error", "text-error", "h-5", "p-1", "text-xs"], [1, "bg-base-100", "relative", "w-[18rem]", "rounded-sm", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_3_Template, 2, 4)(4, DateFieldComponent_Conditional_4_Template, 3, 3, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DateFieldComponent_Conditional_5_Template, 4, 3, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "icon");
    \u0275\u0275text(8, "today");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275conditionalCreate(10, DateFieldComponent_Conditional_10_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DateFieldComponent_ng_template_11_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const calendar_picker_r3 = \u0275\u0275reference(12);
    \u0275\u0275classProp("opacity-30", ctx.disabled());
    \u0275\u0275property("content", calendar_picker_r3)("disabled", ctx.disabled());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.date() ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.timezone() && ctx.tz ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.has_error ? 10 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  DateCalendarComponent,
  IconComponent,
  CustomTooltipComponent,
  TranslatePipe
], styles: ["\n\n.no-subscript[_nghost-%COMP%]    > .error[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=date-field.component.css.map */"] });
var DateFieldComponent = _DateFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFieldComponent, [{
    type: Component,
    args: [{ selector: "a-date-field,date-field", template: `
        <button
            class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            matRipple
        >
            <div
                class="flex w-1/2 flex-1 flex-col truncate px-4 py-2 text-left leading-tight"
            >
                <div class="text-base font-normal">
                    @if (date()) {
                        {{ date() | date: date_format }}
                    } @else {
                        <span class="opacity-30">{{
                            'FORM.DATE_EMPTY' | translate
                        }}</span>
                    }
                </div>
                @if (timezone() && tz) {
                    <div class="truncate text-xs opacity-30">
                        @if (range() !== 2) {
                            <span>{{ start_of_day }}</span>
                        }
                        @if (range() === 0) {
                            <span> - </span>
                        }
                        @if (range() !== 1) {
                            <span>{{ end_of_day }}</span>
                        }
                    </div>
                }
            </div>
            <div class="flex h-10 w-10 items-center justify-center text-2xl">
                <icon>today</icon>
            </div>
        </button>
        <div class="error text-error h-5 p-1 text-xs">
            @if (has_error) {
                <span><ng-content></ng-content></span>
            }
        </div>
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-[18rem] rounded-sm px-2 py-4">
                <date-calendar
                    [ngModel]="date() || now"
                    [from]="from.valueOf()"
                    [to]="until.valueOf()"
                    [offset_weekday]="week_start()"
                    (ngModelChange)="setValue($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      DateCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;4616f4926c682fe7ceb0f98ecb8aa0ceeb383c5318a41af3f61a9c0da602fb9b;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/date-field.component.ts */\n:host.no-subscript > .error {\n  display: none;\n}\n/*# sourceMappingURL=date-field.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateFieldComponent, { className: "DateFieldComponent", filePath: "libs/form-fields/src/lib/date-field.component.ts", lineNumber: 115 });
})();

// node_modules/@angular/material/fesm2022/autocomplete.mjs
var _c02 = ["panel"];
var _c1 = ["*"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1, 0);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-mdc-autocomplete-visible", ctx_r1.showPanel)("mat-mdc-autocomplete-hidden", !ctx_r1.showPanel)("mat-autocomplete-panel-animations-enabled", !ctx_r1._animationsDisabled)("mat-primary", ctx_r1._color === "primary")("mat-accent", ctx_r1._color === "accent")("mat-warn", ctx_r1._color === "warn");
    \u0275\u0275property("id", ctx_r1.id);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby(formFieldId_r1));
  }
}
var MatAutocompleteSelectedEvent = class {
  source;
  option;
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }
};
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
  providedIn: "root",
  factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
});
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false,
    autoSelectActiveOption: false,
    hideSingleSelectionIndicator: false,
    requireSelection: false,
    hasBackdrop: false
  };
}
var MatAutocomplete = class _MatAutocomplete {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS);
  _animationsDisabled = _animationsDisabled();
  _activeOptionChanges = Subscription.EMPTY;
  /** Manages active item in option list based on key events. */
  _keyManager;
  /** Whether the autocomplete panel should be visible, depending on option length. */
  showPanel = false;
  /** Whether the autocomplete panel is open. */
  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  _isOpen = false;
  /** Latest trigger that opened the autocomplete. */
  _latestOpeningTrigger;
  /** @docs-private Sets the theme color of the panel. */
  _setColor(value) {
    this._color = value;
    this._changeDetectorRef.markForCheck();
  }
  /** @docs-private theme color of the panel */
  _color;
  // The @ViewChild query for TemplateRef here needs to be static because some code paths
  // lead to the overlay being created before change detection has finished for this component.
  // Notably, another component may trigger `focus` on the autocomplete-trigger.
  /** @docs-private */
  template;
  /** Element for the panel containing the autocomplete options. */
  panel;
  /** Reference to all options within the autocomplete. */
  options;
  /** Reference to all option groups within the autocomplete. */
  optionGroups;
  /** Aria label of the autocomplete. */
  ariaLabel;
  /** Input that can be used to specify the `aria-labelledby` attribute. */
  ariaLabelledby;
  /** Function that maps an option's control value to its display value in the trigger. */
  displayWith = null;
  /**
   * Whether the first option should be highlighted when the autocomplete panel is opened.
   * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
   */
  autoActiveFirstOption;
  /** Whether the active option should be selected as the user is navigating. */
  autoSelectActiveOption;
  /**
   * Whether the user is required to make a selection when they're interacting with the
   * autocomplete. If the user moves away from the autocomplete without selecting an option from
   * the list, the value will be reset. If the user opens the panel and closes it without
   * interacting or selecting a value, the initial value will be kept.
   */
  requireSelection;
  /**
   * Specify the width of the autocomplete panel.  Can be any CSS sizing value, otherwise it will
   * match the width of its host.
   */
  panelWidth;
  /** Whether ripples are disabled within the autocomplete panel. */
  disableRipple;
  /** Event that is emitted whenever an option from the list is selected. */
  optionSelected = new EventEmitter();
  /** Event that is emitted when the autocomplete panel is opened. */
  opened = new EventEmitter();
  /** Event that is emitted when the autocomplete panel is closed. */
  closed = new EventEmitter();
  /** Emits whenever an option is activated. */
  optionActivated = new EventEmitter();
  /**
   * Takes classes set on the host mat-autocomplete element and applies them to the panel
   * inside the overlay container to allow for easy styling.
   */
  set classList(value) {
    this._classList = value;
    this._elementRef.nativeElement.className = "";
  }
  _classList;
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator;
  /** Syncs the parent state with the individual options. */
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
  id = inject(_IdGenerator).getId("mat-autocomplete-");
  /**
   * Tells any descendant `mat-optgroup` to use the inert a11y pattern.
   * @docs-private
   */
  inertGroups;
  constructor() {
    const platform = inject(Platform);
    this.inertGroups = platform?.SAFARI || false;
    this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
    this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
    this.requireSelection = !!this._defaults.requireSelection;
    this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
  }
  ngAfterContentInit() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap().skipPredicate(this._skipPredicate);
    this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    });
    this._setVisibility();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._activeOptionChanges.unsubscribe();
  }
  /**
   * Sets the panel scrollTop. This allows us to manually scroll to display options
   * above or below the fold, as they are not actually being focused when active.
   */
  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  /** Returns the panel's scrollTop. */
  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  /** Panel should hide itself when the option list is empty. */
  _setVisibility() {
    this.showPanel = !!this.options?.length;
    this._changeDetectorRef.markForCheck();
  }
  /** Emits the `select` event. */
  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  /** Gets the aria-labelledby for the autocomplete panel. */
  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  // `skipPredicate` determines if key manager should avoid putting a given option in the tab
  // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
  // recommendation.
  //
  // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
  // makes a few exceptions for compound widgets.
  //
  // From [Developing a Keyboard Interface](
  // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
  //   "For the following composite widget elements, keep them focusable when disabled: Options in a
  //   Listbox..."
  //
  // The user can focus disabled options using the keyboard, but the user cannot click disabled
  // options.
  _skipPredicate() {
    return false;
  }
  static \u0275fac = function MatAutocomplete_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocomplete)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatAutocomplete,
    selectors: [["mat-autocomplete"]],
    contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatOption, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.options = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t);
      }
    },
    viewQuery: function MatAutocomplete_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-autocomplete"],
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      displayWith: "displayWith",
      autoActiveFirstOption: [2, "autoActiveFirstOption", "autoActiveFirstOption", booleanAttribute],
      autoSelectActiveOption: [2, "autoSelectActiveOption", "autoSelectActiveOption", booleanAttribute],
      requireSelection: [2, "requireSelection", "requireSelection", booleanAttribute],
      panelWidth: "panelWidth",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      classList: [0, "class", "classList"],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      optionSelected: "optionSelected",
      opened: "opened",
      closed: "closed",
      optionActivated: "optionActivated"
    },
    exportAs: ["matAutocomplete"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatAutocomplete
    }])],
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    consts: [["panel", ""], ["role", "listbox", 1, "mat-mdc-autocomplete-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "id"]],
    template: function MatAutocomplete_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatAutocomplete_ng_template_0_Template, 3, 17, "ng-template");
      }
    },
    styles: ["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocomplete, [{
    type: Component,
    args: [{
      selector: "mat-autocomplete",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "matAutocomplete",
      host: {
        "class": "mat-mdc-autocomplete"
      },
      providers: [{
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      template: `<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [class]="_classList"
    [class.mat-mdc-autocomplete-visible]="showPanel"
    [class.mat-mdc-autocomplete-hidden]="!showPanel"
    [class.mat-autocomplete-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_color === 'primary'"
    [class.mat-accent]="_color === 'accent'"
    [class.mat-warn]="_color === 'warn'"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}\n"]
    }]
  }], () => [], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    displayWith: [{
      type: Input
    }],
    autoActiveFirstOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoSelectActiveOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    requireSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    panelWidth: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    optionActivated: [{
      type: Output
    }],
    classList: [{
      type: Input,
      args: ["class"]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteOrigin = class _MatAutocompleteOrigin {
  elementRef = inject(ElementRef);
  constructor() {
  }
  static \u0275fac = function MatAutocompleteOrigin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteOrigin)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteOrigin,
    selectors: [["", "matAutocompleteOrigin", ""]],
    exportAs: ["matAutocompleteOrigin"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteOrigin, [{
    type: Directive,
    args: [{
      selector: "[matAutocompleteOrigin]",
      exportAs: "matAutocompleteOrigin"
    }]
  }], () => [], null);
})();
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatAutocompleteTrigger),
  multi: true
};
function getMatAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
var MatAutocompleteTrigger = class _MatAutocompleteTrigger {
  _environmentInjector = inject(EnvironmentInjector);
  _element = inject(ElementRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _zone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _formField = inject(MAT_FORM_FIELD, {
    optional: true,
    host: true
  });
  _viewportRuler = inject(ViewportRuler);
  _scrollStrategy = inject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef;
  _portal;
  _componentDestroyed = false;
  _initialized = new Subject();
  _keydownSubscription;
  _outsideClickSubscription;
  _cleanupWindowBlur;
  /** Old value of the native input. Used to work around issues with the `input` event on IE. */
  _previousValue;
  /** Value of the input element when the panel was attached (even if there are no options). */
  _valueOnAttach;
  /** Value on the previous keydown event. */
  _valueOnLastKeydown;
  /** Strategy that is used to position the panel. */
  _positionStrategy;
  /** Whether or not the label state is being overridden. */
  _manuallyFloatingLabel = false;
  /** The subscription for closing actions (some are bound to document). */
  _closingActionsSubscription;
  /** Subscription to viewport size changes. */
  _viewportSubscription = Subscription.EMPTY;
  /** Implements BreakpointObserver to be used to detect handset landscape */
  _breakpointObserver = inject(BreakpointObserver);
  _handsetLandscapeSubscription = Subscription.EMPTY;
  /**
   * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
   * closed autocomplete from being reopened if the user switches to another browser tab and then
   * comes back.
   */
  _canOpenOnNextFocus = true;
  /** Value inside the input before we auto-selected an option. */
  _valueBeforeAutoSelection;
  /**
   * Current option that we have auto-selected as the user is navigating,
   * but which hasn't been propagated to the model value yet.
   */
  _pendingAutoselectedOption;
  /** Stream of keyboard events that can close the panel. */
  _closeKeyEventStream = new Subject();
  /** Classes to apply to the panel. Exposed as a public property for internal usage. */
  _overlayPanelClass = coerceArray(this._defaults?.overlayPanelClass || []);
  /**
   * Event handler for when the window is blurred. Needs to be an
   * arrow function in order to preserve the context.
   */
  _windowBlurHandler = () => {
    this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus();
  };
  /** `View -> model callback called when value changes` */
  _onChange = () => {
  };
  /** `View -> model callback called when autocomplete has been touched` */
  _onTouched = () => {
  };
  /** The autocomplete panel to be attached to this trigger. */
  autocomplete;
  /**
   * Position of the autocomplete panel relative to the trigger element. A position of `auto`
   * will render the panel underneath the trigger if there is enough space for it to fit in
   * the viewport, otherwise the panel will be shown above it. If the position is set to
   * `above` or `below`, the panel will always be shown above or below the trigger. no matter
   * whether it fits completely in the viewport.
   */
  position = "auto";
  /**
   * Reference relative to which to position the autocomplete panel.
   * Defaults to the autocomplete trigger element.
   */
  connectedTo;
  /**
   * `autocomplete` attribute to be set on the input element.
   * @docs-private
   */
  autocompleteAttribute = "off";
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */
  autocompleteDisabled;
  constructor() {
  }
  /** Class to apply to the panel when it's above the input. */
  _aboveClass = "mat-mdc-autocomplete-panel-above";
  ngAfterViewInit() {
    this._initialized.next();
    this._initialized.complete();
    this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler);
  }
  ngOnChanges(changes) {
    if (changes["position"] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }
  ngOnDestroy() {
    this._cleanupWindowBlur?.();
    this._handsetLandscapeSubscription.unsubscribe();
    this._viewportSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
    this._clearFromModal();
  }
  /** Whether or not the autocomplete panel is open. */
  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  _overlayAttached = false;
  /** Opens the autocomplete suggestion panel. */
  openPanel() {
    this._openPanelInternal();
  }
  /** Closes the autocomplete suggestion panel. */
  closePanel() {
    this._resetLabel();
    if (!this._overlayAttached) {
      return;
    }
    if (this.panelOpen) {
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }
    if (this.autocomplete._latestOpeningTrigger === this) {
      this.autocomplete._isOpen = false;
      this.autocomplete._latestOpeningTrigger = null;
    }
    this._overlayAttached = false;
    this._pendingAutoselectedOption = null;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }
    this._updatePanelState();
    if (!this._componentDestroyed) {
      this._changeDetectorRef.detectChanges();
    }
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", this.autocomplete.id);
    }
  }
  /**
   * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
   * within the viewport.
   */
  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  /**
   * A stream of actions that should close the autocomplete panel, including
   * when an option is selected, on blur, and when TAB is pressed.
   */
  get panelClosingActions() {
    return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(
      // Normalize the output so we return a consistent type.
      map((event) => event instanceof MatOptionSelectionChange ? event : null)
    );
  }
  /** Stream of changes to the selection state of the autocomplete options. */
  optionSelections = defer(() => {
    const options = this.autocomplete ? this.autocomplete.options : null;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelections));
  });
  /** The currently active option, coerced to MatOption type. */
  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }
    return null;
  }
  /** Stream of clicks outside of the autocomplete panel. */
  _getOutsideClickStream() {
    return new Observable((observer) => {
      const listener = (event) => {
        const clickTarget = _getEventTarget(event);
        const formField = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null;
        const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
        if (this._overlayAttached && clickTarget !== this._element.nativeElement && // Normally focus moves inside `mousedown` so this condition will almost always be
        // true. Its main purpose is to handle the case where the input is focused from an
        // outside click which propagates up to the `body` listener within the same sequence
        // and causes the panel to close immediately (see #3106).
        !this._hasFocus() && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget)) {
          observer.next(event);
        }
      };
      const cleanups = [this._renderer.listen("document", "click", listener), this._renderer.listen("document", "auxclick", listener), this._renderer.listen("document", "touchend", listener)];
      return () => {
        cleanups.forEach((current) => current());
      };
    });
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    Promise.resolve(null).then(() => this._assignOptionValue(value));
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }
  _handleKeydown(e) {
    const event = e;
    const keyCode = event.keyCode;
    const hasModifier = hasModifierKey(event);
    if (keyCode === ESCAPE && !hasModifier) {
      event.preventDefault();
    }
    this._valueOnLastKeydown = this._element.nativeElement.value;
    if (this.activeOption && keyCode === ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();
      this._resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
      if (keyCode === TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this._openPanelInternal(this._valueOnLastKeydown);
      }
      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
          if (!this._pendingAutoselectedOption) {
            this._valueBeforeAutoSelection = this._valueOnLastKeydown;
          }
          this._pendingAutoselectedOption = this.activeOption;
          this._assignOptionValue(this.activeOption.value);
        }
      }
    }
  }
  _handleInput(event) {
    let target = event.target;
    let value = target.value;
    if (target.type === "number") {
      value = value == "" ? null : parseFloat(value);
    }
    if (this._previousValue !== value) {
      this._previousValue = value;
      this._pendingAutoselectedOption = null;
      if (!this.autocomplete || !this.autocomplete.requireSelection) {
        this._onChange(value);
      }
      if (!value) {
        this._clearPreviousSelectedOption(null, false);
      } else if (this.panelOpen && !this.autocomplete.requireSelection) {
        const selectedOption = this.autocomplete.options?.find((option) => option.selected);
        if (selectedOption) {
          const display = this._getDisplayValue(selectedOption.value);
          if (value !== display) {
            selectedOption.deselect(false);
          }
        }
      }
      if (this._canOpen() && this._hasFocus()) {
        const valueOnAttach = this._valueOnLastKeydown ?? this._element.nativeElement.value;
        this._valueOnLastKeydown = null;
        this._openPanelInternal(valueOnAttach);
      }
    }
  }
  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;
      this._attachOverlay(this._previousValue);
      this._floatLabel(true);
    }
  }
  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this._openPanelInternal();
    }
  }
  /** Whether the input currently has focus. */
  _hasFocus() {
    return _getFocusedElementPierceShadowDom() === this._element.nativeElement;
  }
  /**
   * In "auto" mode, the label will animate down as soon as focus is lost.
   * This causes the value to jump when selecting an option with the mouse.
   * This method manually floats the label until the panel can be closed.
   * @param shouldAnimate Whether the label should be animated when it is floated.
   */
  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === "auto") {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = "always";
      }
      this._manuallyFloatingLabel = true;
    }
  }
  /** If the label has been manually elevated, return it to its normal state. */
  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      if (this._formField) {
        this._formField.floatLabel = "auto";
      }
      this._manuallyFloatingLabel = false;
    }
  }
  /**
   * This method listens to a stream of panel closing actions and resets the
   * stream every time the option list changes.
   */
  _subscribeToClosingActions() {
    const initialRender = new Observable((subscriber) => {
      afterNextRender(() => {
        subscriber.next();
      }, {
        injector: this._environmentInjector
      });
    });
    const optionChanges = this.autocomplete.options?.changes.pipe(
      tap(() => this._positionStrategy.reapplyLastPosition()),
      // Defer emitting to the stream until the next tick, because changing
      // bindings in here will cause "changed after checked" errors.
      delay(0)
    ) ?? of();
    return merge(initialRender, optionChanges).pipe(
      // create a new stream of panelClosingActions, replacing any previous streams
      // that were created, and flatten it so our stream only emits closing events...
      switchMap(() => this._zone.run(() => {
        const wasOpen = this.panelOpen;
        this._resetActiveItem();
        this._updatePanelState();
        this._changeDetectorRef.detectChanges();
        if (this.panelOpen) {
          this._overlayRef.updatePosition();
        }
        if (wasOpen !== this.panelOpen) {
          if (this.panelOpen) {
            this._emitOpened();
          } else {
            this.autocomplete.closed.emit();
          }
        }
        return this.panelClosingActions;
      })),
      // when the first closing event occurs...
      take(1)
    ).subscribe((event) => this._setValueAndClose(event));
  }
  /**
   * Emits the opened event once it's known that the panel will be shown and stores
   * the state of the trigger right before the opening sequence was finished.
   */
  _emitOpened() {
    this.autocomplete.opened.emit();
  }
  /** Destroys the autocomplete suggestion panel. */
  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  /** Given a value, returns the string that should be shown within the input. */
  _getDisplayValue(value) {
    const autocomplete = this.autocomplete;
    return autocomplete && autocomplete.displayWith ? autocomplete.displayWith(value) : value;
  }
  _assignOptionValue(value) {
    const toDisplay = this._getDisplayValue(value);
    if (value == null) {
      this._clearPreviousSelectedOption(null, false);
    }
    this._updateNativeInputValue(toDisplay != null ? toDisplay : "");
  }
  _updateNativeInputValue(value) {
    if (this._formField) {
      this._formField._control.value = value;
    } else {
      this._element.nativeElement.value = value;
    }
    this._previousValue = value;
  }
  /**
   * This method closes the panel, and if a value is specified, also sets the associated
   * control to that value. It will also mark the control as dirty if this interaction
   * stemmed from the user.
   */
  _setValueAndClose(event) {
    const panel = this.autocomplete;
    const toSelect = event ? event.source : this._pendingAutoselectedOption;
    if (toSelect) {
      this._clearPreviousSelectedOption(toSelect);
      this._assignOptionValue(toSelect.value);
      this._onChange(toSelect.value);
      panel._emitSelectEvent(toSelect);
      this._element.nativeElement.focus();
    } else if (panel.requireSelection && this._element.nativeElement.value !== this._valueOnAttach) {
      this._clearPreviousSelectedOption(null);
      this._assignOptionValue(null);
      this._onChange(null);
    }
    this.closePanel();
  }
  /**
   * Clear any previous selected option and emit a selection change event for this option
   */
  _clearPreviousSelectedOption(skip, emitEvent) {
    this.autocomplete?.options?.forEach((option) => {
      if (option !== skip && option.selected) {
        option.deselect(emitEvent);
      }
    });
  }
  _openPanelInternal(valueOnAttach = this._element.nativeElement.value) {
    this._attachOverlay(valueOnAttach);
    this._floatLabel();
    if (this._trackedModal) {
      const panelId = this.autocomplete.id;
      addAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
  }
  _attachOverlay(valueOnAttach) {
    if (!this.autocomplete && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatAutocompleteMissingPanelError();
    }
    let overlayRef = this._overlayRef;
    if (!overlayRef) {
      this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: this._formField?.getLabelId()
      });
      overlayRef = createOverlayRef(this._injector, this._getOverlayConfig());
      this._overlayRef = overlayRef;
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
      this._handsetLandscapeSubscription = this._breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe((result) => {
        const isHandsetLandscape = result.matches;
        if (isHandsetLandscape) {
          this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8);
        } else {
          this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);
        }
      });
    } else {
      this._positionStrategy.setOrigin(this._getConnectedElement());
      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }
    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._valueOnAttach = valueOnAttach;
      this._valueOnLastKeydown = null;
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }
    const wasOpen = this.panelOpen;
    this.autocomplete._isOpen = this._overlayAttached = true;
    this.autocomplete._latestOpeningTrigger = this;
    this.autocomplete._setColor(this._formField?.color);
    this._updatePanelState();
    this._applyModalPanelOwnership();
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this._emitOpened();
    }
  }
  /** Handles keyboard events coming from the overlay panel. */
  _handlePanelKeydown = (event) => {
    if (event.keyCode === ESCAPE && !hasModifierKey(event) || event.keyCode === UP_ARROW && hasModifierKey(event, "altKey")) {
      if (this._pendingAutoselectedOption) {
        this._updateNativeInputValue(this._valueBeforeAutoSelection ?? "");
        this._pendingAutoselectedOption = null;
      }
      this._closeKeyEventStream.next();
      this._resetActiveItem();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  /** Updates the panel's visibility state and any trigger state tied to id. */
  _updatePanelState() {
    this.autocomplete._setVisibility();
    if (this.panelOpen) {
      const overlayRef = this._overlayRef;
      if (!this._keydownSubscription) {
        this._keydownSubscription = overlayRef.keydownEvents().subscribe(this._handlePanelKeydown);
      }
      if (!this._outsideClickSubscription) {
        this._outsideClickSubscription = overlayRef.outsidePointerEvents().subscribe();
      }
    } else {
      this._keydownSubscription?.unsubscribe();
      this._outsideClickSubscription?.unsubscribe();
      this._keydownSubscription = this._outsideClickSubscription = null;
    }
  }
  _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir ?? void 0,
      hasBackdrop: this._defaults?.hasBackdrop,
      backdropClass: this._defaults?.backdropClass,
      panelClass: this._overlayPanelClass,
      disableAnimations: this._animationsDisabled
    });
  }
  _getOverlayPosition() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);
    this._setStrategyPositions(strategy);
    this._positionStrategy = strategy;
    return strategy;
  }
  /** Sets the positions on a position strategy based on the directive's input state. */
  _setStrategyPositions(positionStrategy) {
    const belowPositions = [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }];
    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      panelClass
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom",
      panelClass
    }];
    let positions;
    if (this.position === "above") {
      positions = abovePositions;
    } else if (this.position === "below") {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }
    positionStrategy.withPositions(positions);
  }
  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }
  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  /** Returns the width of the input element, so the panel width can match it. */
  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  /**
   * Reset the active item to -1. This is so that pressing arrow keys will activate the correct
   * option.
   *
   * If the consumer opted-in to automatically activatating the first option, activate the first
   * *enabled* option.
   */
  _resetActiveItem() {
    const autocomplete = this.autocomplete;
    if (autocomplete.autoActiveFirstOption) {
      let firstEnabledOptionIndex = -1;
      for (let index = 0; index < autocomplete.options.length; index++) {
        const option = autocomplete.options.get(index);
        if (!option.disabled) {
          firstEnabledOptionIndex = index;
          break;
        }
      }
      autocomplete._keyManager.setActiveItem(firstEnabledOptionIndex);
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  /** Determines whether the panel can be opened. */
  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
  }
  /** Scrolls to a particular option in the list. */
  _scrollToOption(index) {
    const autocomplete = this.autocomplete;
    const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
    if (index === 0 && labelCount === 1) {
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];
      if (option) {
        const element = option._getHostElement();
        const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }
  /**
   * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
   * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
   * panel. Track the modal we have changed so we can undo the changes on destroy.
   */
  _trackedModal = null;
  /**
   * If the autocomplete trigger is inside of an `aria-modal` element, connect
   * that modal to the options panel with `aria-owns`.
   *
   * For some browser + screen reader combinations, when navigation is inside
   * of an `aria-modal` element, the screen reader treats everything outside
   * of that modal as hidden or invisible.
   *
   * This causes a problem when the combobox trigger is _inside_ of a modal, because the
   * options panel is rendered _outside_ of that modal, preventing screen reader navigation
   * from reaching the panel.
   *
   * We can work around this issue by applying `aria-owns` to the modal with the `id` of
   * the options panel. This effectively communicates to assistive technology that the
   * options panel is part of the same interaction as the modal.
   *
   * At time of this writing, this issue is present in VoiceOver.
   * See https://github.com/angular/components/issues/20694
   */
  _applyModalPanelOwnership() {
    const modal = this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
    if (!modal) {
      return;
    }
    const panelId = this.autocomplete.id;
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
    addAriaReferencedId(modal, "aria-owns", panelId);
    this._trackedModal = modal;
  }
  /** Clears the references to the listbox overlay element from the modal it was added to. */
  _clearFromModal() {
    if (this._trackedModal) {
      const panelId = this.autocomplete.id;
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
      this._trackedModal = null;
    }
  }
  static \u0275fac = function MatAutocompleteTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteTrigger,
    selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
    hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
    hostVars: 7,
    hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
          return ctx._handleFocus();
        })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
          return ctx._onTouched();
        })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
          return ctx._handleInput($event);
        })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-controls", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
      }
    },
    inputs: {
      autocomplete: [0, "matAutocomplete", "autocomplete"],
      position: [0, "matAutocompletePosition", "position"],
      connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"],
      autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"],
      autocompleteDisabled: [2, "matAutocompleteDisabled", "autocompleteDisabled", booleanAttribute]
    },
    exportAs: ["matAutocompleteTrigger"],
    features: [\u0275\u0275ProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteTrigger, [{
    type: Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        "class": "mat-mdc-autocomplete-trigger",
        "[attr.autocomplete]": "autocompleteAttribute",
        "[attr.role]": 'autocompleteDisabled ? null : "combobox"',
        "[attr.aria-autocomplete]": 'autocompleteDisabled ? null : "list"',
        "[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
        "[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
        "[attr.aria-controls]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
        "[attr.aria-haspopup]": 'autocompleteDisabled ? null : "listbox"',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        "(focusin)": "_handleFocus()",
        "(blur)": "_onTouched()",
        "(input)": "_handleInput($event)",
        "(keydown)": "_handleKeydown($event)",
        "(click)": "_handleClick()"
      },
      exportAs: "matAutocompleteTrigger",
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], () => [], {
    autocomplete: [{
      type: Input,
      args: ["matAutocomplete"]
    }],
    position: [{
      type: Input,
      args: ["matAutocompletePosition"]
    }],
    connectedTo: [{
      type: Input,
      args: ["matAutocompleteConnectedTo"]
    }],
    autocompleteAttribute: [{
      type: Input,
      args: ["autocomplete"]
    }],
    autocompleteDisabled: [{
      type: Input,
      args: [{
        alias: "matAutocompleteDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteModule = class _MatAutocompleteModule {
  static \u0275fac = function MatAutocompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatAutocompleteModule,
    imports: [OverlayModule, MatOptionModule, MatCommonModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
    exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, MatCommonModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [OverlayModule, MatOptionModule, MatCommonModule, CdkScrollableModule, MatOptionModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatCommonModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, MatCommonModule, MatAutocompleteTrigger, MatAutocompleteOrigin],
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// libs/events/src/lib/calendar.fn.ts
var CALENDAR_ENDPOINT = "/api/staff/v1/calendars";
function queryCalendars() {
  return N(CALENDAR_ENDPOINT).pipe(map((i) => i.map((c) => new Calendar(c))));
}
function queryCalendarAvailability(q) {
  const query = toQueryString(q);
  return N(`${CALENDAR_ENDPOINT}/availability${query ? "?" + query : ""}`).pipe(map((i) => i.map((c) => new Calendar(c))));
}
var calendarsToSpaces = (org) => map((list) => list.filter((cal) => !!cal.resource).map((cal) => new Space(__spreadProps(__spreadValues({}, cal.resource), {
  level: org?.levelWithID(cal.resource.zones),
  availability: cal.availability
}))).filter((space) => space.bookable));
function queryUserFreeBusy(q) {
  const query = toQueryString(q);
  return N(`${CALENDAR_ENDPOINT}/free_busy${query ? "?" + query : ""}`).pipe(map((i) => i));
}
function querySpaceFreeBusy(q, org) {
  const query = toQueryString(q);
  return N(`${CALENDAR_ENDPOINT}/free_busy${query ? "?" + query : ""}`).pipe(map((i) => i.map((c) => new Calendar(c))), calendarsToSpaces(org));
}

// libs/users/src/lib/find-availability-modal/user-availability.component.ts
function UserAvailabilityComponent_For_2_Template(rf, ctx) {
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
    this.user = input(void 0);
    this.availability = input([]);
    this.date = input(Date.now());
  }
};
_UserAvailabilityComponent.\u0275fac = function UserAvailabilityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserAvailabilityComponent)();
};
_UserAvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvailabilityComponent, selectors: [["user-availability-list"]], inputs: { user: [1, "user"], availability: [1, "availability"], date: [1, "date"] }, decls: 3, vars: 0, consts: [[1, "border-base-300", "relative", "inset-y-0", "h-32", "w-480", "border-b"], ["event", "", 1, "border-error", "bg-error", "absolute", "inset-y-0", "overflow-hidden", "rounded-sm", "border", "p-2", "text-white", 3, "left", "width"], ["event", "", 1, "border-error", "bg-error", "absolute", "inset-y-0", "overflow-hidden", "rounded-sm", "border", "p-2", "text-white"], [1, "max-w-full", "text-xs"]], template: function UserAvailabilityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, UserAvailabilityComponent_For_2_Template, 5, 12, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.availability());
  }
}, dependencies: [CommonModule, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */"] });
var UserAvailabilityComponent = _UserAvailabilityComponent;
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvailabilityComponent, { className: "UserAvailabilityComponent", filePath: "libs/users/src/lib/find-availability-modal/user-availability.component.ts", lineNumber: 44 });
})();

// libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts
var _c03 = ["container"];
var _c12 = () => [];
function FindAvailabilityModalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hr_r2 = ctx.$implicit;
    const \u0275$index_26_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -ctx_r3.offset_x() + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today() && ctx_r3.current_hour() > \u0275$index_26_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, hr_r2, "haa"));
  }
}
function FindAvailabilityModalComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "a-user-avatar", 13);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function FindAvailabilityModalComponent_For_22_Template_button_click_4_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeUser(user_r6));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", -ctx_r3.offset_y() + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.name || ctx_r3.host.email, " ");
  }
}
function FindAvailabilityModalComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
  if (rf & 2) {
    const \u0275$index_59_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -(ctx_r3.offset_x() + 1) + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today() && ctx_r3.current_hour() > \u0275$index_59_r7);
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
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r3.date(), "shortTime"), " ");
  }
}
function FindAvailabilityModalComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-availability-list", 26);
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("user", user_r8)("date", ctx_r3.date())("availability", ctx_r3.availability()[user_r8.email.toLowerCase()] ?? \u0275\u0275pureFunction0(3, _c12));
  }
}
var _FindAvailabilityModalComponent = class _FindAvailabilityModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._renderer = inject(Renderer2);
    this._dialog_ref = inject(MatDialogRef);
    this._injector = inject(Injector);
    this.users = signal([...this._data.users]);
    this.search = signal("");
    this.date = signal(this._data.date || Date.now());
    this.duration = signal(this._data.duration || 60);
    this.user = signal(void 0);
    this.offset_y = signal(0);
    this.offset_x = signal(0);
    this.move_time = signal(false);
    this.host = this._data.host;
    this.hours = new Array(24).fill(0).map((_, idx) => setHours(startOfDay(Date.now()), idx).valueOf());
    this._availability$ = toObservable(this.users, {
      injector: this._injector
    }).pipe(debounceTime(300), switchMap((users) => {
      return queryUserFreeBusy({
        calendars: [
          this.host.email,
          ...users.map((_) => _.email.toLowerCase())
        ].join(","),
        period_start: getUnixTime(startOfDay(this.date())),
        period_end: getUnixTime(endOfDay(this.date()))
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
    this.availability = toSignal(this._availability$, {
      initialValue: {},
      injector: this._injector
    });
    this._container_el = viewChild.required("container");
    this.today = computed(() => isSameDay(this.date(), Date.now()));
    this.current_hour = computed(() => (/* @__PURE__ */ new Date()).getHours());
    this.selection_left = computed(() => {
      const d = new Date(this.date());
      return (d.getHours() + d.getMinutes() / 60) * 5;
    });
    this.selection_width = computed(() => this.duration() / 60 * 5);
    this._start_time = 0;
    this._move_last = 0;
    this._move_size = 80 * 24;
    toObservable(this.date, { injector: this._injector }).pipe(debounceTime(300)).subscribe(() => {
      this.users.update((u) => [...u]);
    });
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
};
_FindAvailabilityModalComponent.\u0275fac = function FindAvailabilityModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FindAvailabilityModalComponent)();
};
_FindAvailabilityModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAvailabilityModalComponent, selectors: [["find-availability-modal"]], viewQuery: function FindAvailabilityModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._container_el, _c03, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 25, consts: [["container", ""], [1, "bg-base-100", "fixed", "inset-0", "flex", "flex-col", "space-y-2", "p-2"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "border-base-300", "flex", "h-[calc(100vh-9rem)]", "flex-1", "flex-col", "overflow-hidden", "rounded-sm", "border", "sm:h-[65vh]"], [1, "flex", "w-full", "flex-col", "space-y-2", "p-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "max-h-13", "flex-1", 3, "ngModelChange", "ngModel"], [1, "divide-base-300", "border-base-300", "relative", "grid", "h-1/2", "w-full", "max-w-full", "flex-1", "divide-x", "divide-y", "overflow-hidden", "border-t"], ["times", "", 1, "border-base-300", "col-start-2", "flex", "h-10", "overflow-hidden", "border-l"], ["hour", "", 1, "border-base-300", "relative", "h-10", "min-w-20", "border-r", "p-2", "text-sm", 3, "left"], ["users", "", 1, "!border-l-none", "row-start-2", "w-24", "overflow-hidden"], ["host", "", 1, "border-base-300", "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "py-2"], [1, "text-2xl", 3, "user"], [1, "max-w-full", "overflow-hidden", "px-2", "text-center", "text-xs", "wrap-break-word"], ["person", "", 1, "border-base-300", "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "py-2", 3, "top"], ["blocks", "", 1, "relative", "row-start-2", "overflow-hidden"], ["fixed", "", 1, "absolute", "inset-0", "flex", "overflow-hidden"], ["divider", "", 1, "border-base-300", "relative", "h-full", "min-w-20", "border-l", 3, "left"], ["selection", "", 1, "border-info!", "absolute", "inset-y-0", "z-20", "cursor-grab", "border-x-2!", "active:cursor-grabbing", 3, "mousedown", "touchstart"], [1, "bg-info", "absolute", "inset-0", "opacity-30"], ["handle", "", 1, "bg-info", "absolute", "top-1/2", "-left-px", "h-3", "w-3", "-translate-x-1/2", "-translate-y-1/2", "rounded-full"], ["handle", "", 1, "bg-info", "active:bg-secondary", "absolute", "top-1/2", "-right-px", "h-3", "w-3", "translate-x-1/2", "-translate-y-1/2", "rounded-full", "hover:h-4", "hover:w-4", 3, "mousedown", "touchstart"], [1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-1/2", "-translate-x-1/2", "rounded-sm", "border", "p-2", "text-xs", "whitespace-nowrap", "shadow-sm"], [1, "border-base-300", "bg-base-100", "absolute", "top-12", "left-1/2", "-translate-x-1/2", "rounded-sm", "border", "p-2", "text-xs", "whitespace-nowrap", "shadow-sm"], ["scroll", "", 1, "absolute", "inset-0", "overflow-auto", 3, "scroll"], [1, "pointer-events-none", 3, "user", "date", "availability"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], ["hour", "", 1, "border-base-300", "relative", "h-10", "min-w-20", "border-r", "p-2", "text-sm"], ["person", "", 1, "border-base-300", "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "py-2"], [1, "max-w-full", "px-2", "text-center", "text-xs", "wrap-break-word"], ["icon", "", 1, "absolute", "-top-1", "-left-1", 3, "click"], ["divider", "", 1, "border-base-300", "relative", "h-full", "min-w-20", "border-l"]], template: function FindAvailabilityModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "main", 5)(9, "div", 6)(10, "a-date-field", 7);
    \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onDateChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a-user-search-field", 7);
    \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addUser($event));
    });
    \u0275\u0275elementEnd()();
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
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    });
    \u0275\u0275element(28, "div", 20)(29, "div", 21);
    \u0275\u0275elementStart(30, "div", 22);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
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
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll());
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
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx.user());
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
    \u0275\u0275property("user", ctx.host)("date", ctx.date())("availability", ctx.availability()[ctx.host.email] ?? \u0275\u0275pureFunction0(24, _c12));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.users());
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 22, "COMMON.BACK_TO_FORM"), " ");
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  UserAvailabilityComponent,
  UserAvatarComponent,
  UserSearchFieldComponent,
  DateFieldComponent,
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  DurationPipe,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n.grid[_ngcontent-%COMP%] {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true][_ngcontent-%COMP%], \n[disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%] {\n  background: var(--base-200) !important;\n  pointer-events: none;\n}\n[disabled=true][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */"] });
var FindAvailabilityModalComponent = _FindAvailabilityModalComponent;
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAvailabilityModalComponent, { className: "FindAvailabilityModalComponent", filePath: "libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts", lineNumber: 290 });
})();

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
function searchGuests(q) {
  const query = toQueryString({ q });
  return N(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`).pipe(map((list) => list.map((item) => new GuestUser(item))));
}
function showGuest(id) {
  return N(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`).pipe(map((item) => new GuestUser(item)));
}

// libs/users/src/lib/location.class.ts
var MapLocation = class {
  constructor(_data = {}) {
    this.type = _data.type || _data.location || "other";
    this.position = _data.position || _data.map_id || _data.asset_id || {
      x: _data.x / _data.map_width || 0,
      y: _data.y / _data.map_height || 0
    };
    this.variance = _data.variance || 0;
    this.last_seen = _data.last_seen || getUnixTime(/* @__PURE__ */ new Date());
    this.level = _data.level;
    this.building = _data.building;
    this.at_location = !!_data.at_location;
    this.coordinates_from = _data.coordinates_from || "top-left";
  }
};

// libs/users/src/lib/user-form.component.ts
function UserFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
    \u0275\u0275text(2, " Name");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 3);
    \u0275\u0275element(7, "input", 4);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("name"));
  }
}
function UserFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 5);
    \u0275\u0275text(2, " Email");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 3);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "A valid email is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("email"));
  }
}
function UserFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 3);
    \u0275\u0275element(8, "input", 8);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("organisation"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.ORGANISATION"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.ORGANISATION"), " is required ");
  }
}
function UserFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 9);
    \u0275\u0275text(2, " Phone: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 3);
    \u0275\u0275element(4, "input", 10);
    \u0275\u0275elementStart(5, "mat-error");
    \u0275\u0275text(6, "Phone format is invalid");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("phone"));
  }
}
function UserFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-checkbox", 11);
    \u0275\u0275text(2, " Assistance required ");
    \u0275\u0275elementEnd()();
  }
}
function UserFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-checkbox", 12);
    \u0275\u0275text(2, " Visit expected ");
    \u0275\u0275elementEnd()();
  }
}
function UserFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, UserFormComponent_Conditional_0_Conditional_1_Template, 10, 2, "div", 1);
    \u0275\u0275conditionalCreate(2, UserFormComponent_Conditional_0_Conditional_2_Template, 10, 2, "div", 1);
    \u0275\u0275conditionalCreate(3, UserFormComponent_Conditional_0_Conditional_3_Template, 12, 8, "div", 1);
    \u0275\u0275conditionalCreate(4, UserFormComponent_Conditional_0_Conditional_4_Template, 7, 2, "div", 1);
    \u0275\u0275conditionalCreate(5, UserFormComponent_Conditional_0_Conditional_5_Template, 3, 0, "div", 1);
    \u0275\u0275conditionalCreate(6, UserFormComponent_Conditional_0_Conditional_6_Template, 3, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.email ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.organisation ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.phone ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.assistance_required ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.visit_expected ? 6 : -1);
  }
}
var _UserFormComponent = class _UserFormComponent {
  constructor() {
    this.form = input(void 0);
  }
  hasError(name) {
    const { invalid, touched } = this.form()?.controls[name] || {};
    return invalid && touched;
  }
};
_UserFormComponent.\u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserFormComponent)();
};
_UserFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["user-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["user-form", "", 1, "w-full", 3, "formGroup"], [1, "flex", "w-full", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], ["for", "email"], ["matInput", "", "name", "email", "placeholder", "Email Address", "formControlName", "email"], ["for", "org"], ["matInput", "", "name", "org", "placeholder", "e.g. Conteso", "formControlName", "organisation"], ["for", "phone"], ["matInput", "", "name", "phone", "type", "tel", "placeholder", "Phone", "formControlName", "phone"], ["name", "assistance-required", "color", "primary", "formControlName", "assistance_required"], ["name", "visit-expected", "color", "primary", "formControlName", "visit_expected"]], template: function UserFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UserFormComponent_Conditional_0_Template, 7, 7, "form", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.form() ? 0 : -1);
  }
}, dependencies: [MatCheckboxModule, MatCheckbox, MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], styles: ["\n\n[_nghost-%COMP%], \nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=user-form.component.css.map */"] });
var UserFormComponent = _UserFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{ selector: "user-form", template: `
        @if (form()) {
            <form user-form [formGroup]="form()" class="w-full">
                @if (form().controls.name) {
                    <div class="flex w-full flex-col">
                        <label for="name" [class.error]="hasError('name')">
                            Name<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                placeholder="Name"
                                formControlName="name"
                            />
                            <mat-error>Name is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.email) {
                    <div class="flex w-full flex-col">
                        <label for="email" [class.error]="hasError('email')">
                            Email<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="email"
                                placeholder="Email Address"
                                formControlName="email"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.organisation) {
                    <div class="flex w-full flex-col">
                        <label
                            for="org"
                            [class.error]="hasError('organisation')"
                        >
                            {{ 'COMMON.ORGANISATION' | translate
                            }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="org"
                                placeholder="e.g. Conteso"
                                formControlName="organisation"
                            />
                            <mat-error>
                                {{ 'COMMON.ORGANISATION' | translate }} is
                                required
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.phone) {
                    <div class="flex w-full flex-col">
                        <label for="phone" [class.error]="hasError('phone')">
                            Phone:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="phone"
                                type="tel"
                                placeholder="Phone"
                                formControlName="phone"
                            />
                            <mat-error>Phone format is invalid</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.assistance_required) {
                    <div class="flex w-full flex-col">
                        <mat-checkbox
                            name="assistance-required"
                            color="primary"
                            formControlName="assistance_required"
                        >
                            Assistance required
                        </mat-checkbox>
                    </div>
                }
                @if (form().controls.visit_expected) {
                    <div class="flex w-full flex-col">
                        <mat-checkbox
                            name="visit-expected"
                            color="primary"
                            formControlName="visit_expected"
                        >
                            Visit expected
                        </mat-checkbox>
                    </div>
                }
            </form>
        }
    `, imports: [
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;fd077178d2e8a022e17f68cb6befbd424b2439b93e8476c2dd172ca203446823;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-form.component.ts */\n:host,\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=user-form.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "libs/users/src/lib/user-form.component.ts", lineNumber: 127 });
})();

// libs/users/src/lib/new-user-modal.component.ts
function NewUserModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewUserModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "user-form", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function NewUserModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.USER_SAVING"));
  }
}
function NewUserModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function NewUserModalComponent_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "COMMON.SAVE"), " ");
  }
}
var _NewUserModalComponent = class _NewUserModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.form = generateUserForm(this.user || new User());
    this.loading = false;
    this.user = this._data.user || {};
    this.form = generateUserForm(this.user);
  }
  ngOnInit() {
  }
  saveChanges() {
    if (!this.form)
      return;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const new_user = new User(__spreadProps(__spreadValues({}, this.form.value), {
        is_external: true
      }));
      this.event.emit({ reason: "done", metadata: new_user });
    }
  }
};
_NewUserModalComponent.\u0275fac = function NewUserModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewUserModalComponent)();
};
_NewUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewUserModalComponent, selectors: [["new-user-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "w-full", "min-w-[24rem]", "flex-col", "items-center", "px-4"], [1, "flex", "w-full", "flex-col", "items-center", "space-y-2", "p-2"], [1, "border-base-200", "flex", "w-full", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], [3, "form"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["btn", "", "matRipple", "", 3, "click"]], template: function NewUserModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NewUserModalComponent_Conditional_4_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, NewUserModalComponent_Conditional_5_Template, 2, 1, "main", 3)(6, NewUserModalComponent_Conditional_6_Template, 5, 3, "main", 4);
    \u0275\u0275conditionalCreate(7, NewUserModalComponent_Conditional_7_Template, 7, 6, "footer", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, (ctx.user == null ? null : ctx.user.id) ? "COMMON.USER_EDIT" : "COMMON.USER_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 7 : -1);
  }
}, dependencies: [
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  UserFormComponent,
  MatDialogModule,
  MatDialogClose,
  IconComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: 20em !important;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n/*# sourceMappingURL=new-user-modal.component.css.map */"] });
var NewUserModalComponent = _NewUserModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewUserModalComponent, [{
    type: Component,
    args: [{ selector: "new-user-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (user?.id ? 'COMMON.USER_EDIT' : 'COMMON.USER_NEW')
                        | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="flex w-full min-w-[24rem] flex-col items-center px-4">
                <user-form [form]="form"></user-form>
            </main>
        } @else {
            <main class="flex w-full flex-col items-center space-y-2 p-2">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'COMMON.USER_SAVING' | translate }}</p>
            </main>
        }
        @if (!loading) {
            <footer
                class="border-base-200 flex w-full items-center justify-end space-x-2 border-t p-2"
            >
                <button btn matRipple class="inverse" mat-dialog-close>
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple (click)="saveChanges()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      UserFormComponent,
      MatDialogModule,
      IconComponent,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;d1500f659b91dd2b74c0cb226624db0e8f324134dbaaf267a69f046570069bff;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/new-user-modal.component.ts */\nmain {\n  min-height: 20em !important;\n  width: 100%;\n}\nfooter button {\n  min-width: 8em;\n}\n/*# sourceMappingURL=new-user-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewUserModalComponent, { className: "NewUserModalComponent", filePath: "libs/users/src/lib/new-user-modal.component.ts", lineNumber: 74 });
})();

// libs/users/src/lib/select-user-modal.component.ts
function SelectUserModalComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SelectUserModalComponent_For_16_Template_button_click_0_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(user_r2));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
  }
}
function SelectUserModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.search.value ? "COMMON.SELECT_USER_EMPTY_MATCHES" : "COMMON.SELECT_USER_EMPTY"), " ");
  }
}
var _SelectUserModalComponent = class _SelectUserModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this.search = new BehaviorSubject("");
    this.users = this.search.pipe(debounceTime(300), switchMap((s) => Oa({ q: s }).pipe(map((o) => o.data), catchError(() => of([])))), startWith([]));
  }
  select(user) {
    this._dialog_ref.close(user);
  }
};
_SelectUserModalComponent.\u0275fac = function SelectUserModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectUserModalComponent)();
};
_SelectUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectUserModalComponent, selectors: [["select-user-modal"]], decls: 20, vars: 12, consts: [[1, "w-md"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[60vh]", "overflow-auto", "px-2", "pb-2"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "mb-2", "w-full"], ["matPrefix", "", 1, "relative", "-left-2", "text-2xl"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "relative", "z-0", "w-full", "space-y-2"], ["matRipple", "", 1, "border-base-300", "hover:bg-base-200", "w-full", "rounded-sm", "border", "p-2", "text-left"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "p-8", "opacity-30"], ["matRipple", "", 1, "border-base-300", "hover:bg-base-200", "w-full", "rounded-sm", "border", "p-2", "text-left", 3, "click"], [1, "text-xs", "opacity-30"]], template: function SelectUserModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "main", 4)(9, "mat-form-field", 5)(10, "icon", 6);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 7);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("ngModelChange", function SelectUserModalComponent_Template_input_ngModelChange_12_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275repeaterCreate(15, SelectUserModalComponent_For_16_Template, 5, 2, "button", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275conditionalCreate(18, SelectUserModalComponent_Conditional_18_Template, 3, 3, "div", 10);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.SELECT_USER_TITLE"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 6, "COMMON.SELECT_USER_SEARCH"))("ngModel", ctx.search.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(17, 8, ctx.users));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(19, 10, ctx.users).length ? 18 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatInputModule,
  MatInput,
  MatDialogModule,
  MatDialogClose,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent
], encapsulation: 2 });
var SelectUserModalComponent = _SelectUserModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectUserModalComponent, [{
    type: Component,
    args: [{ selector: `select-user-modal`, template: ` <div class="w-md">
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.SELECT_USER_TITLE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[60vh] overflow-auto px-2 pb-2">
            <mat-form-field
                class="no-subscript bg-base-100 sticky top-0 z-10 mb-2 w-full"
                appearance="outline"
            >
                <icon class="relative -left-2 text-2xl" matPrefix>search</icon>
                <input
                    matInput
                    [placeholder]="'COMMON.SELECT_USER_SEARCH' | translate"
                    [ngModel]="search.value"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
            <div class="relative z-0 w-full space-y-2">
                @for (user of users | async; track user) {
                    <button
                        class="border-base-300 hover:bg-base-200 w-full rounded-sm border p-2 text-left"
                        matRipple
                        (click)="select(user)"
                    >
                        <div>{{ user.name }}</div>
                        <div class="text-xs opacity-30">{{ user.email }}</div>
                    </button>
                }
                @if (!(users | async).length) {
                    <div
                        class="flex h-32 w-full items-center justify-center p-8 opacity-30"
                    >
                        {{
                            (search.value
                                ? 'COMMON.SELECT_USER_EMPTY_MATCHES'
                                : 'COMMON.SELECT_USER_EMPTY'
                            ) | translate
                        }}
                    </div>
                }
            </div>
        </main>
    </div>`, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
      FormsModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectUserModalComponent, { className: "SelectUserModalComponent", filePath: "libs/users/src/lib/select-user-modal.component.ts", lineNumber: 85 });
})();

// libs/users/src/lib/staff.fn.ts
var STAFF_ENDPOINT = "/api/staff/v1/people";
function searchStaff(q) {
  const query = toQueryString({
    q,
    fields: [
      "id",
      "name",
      "email",
      "username",
      "organisation",
      "department"
    ].join(",")
  });
  return N(`${STAFF_ENDPOINT}${q ? "?" + query : ""}`).pipe(map((list) => list.map((item) => new StaffUser(item))));
}
function showStaff(id) {
  return N(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`).pipe(map((item) => new StaffUser(item)));
}

// libs/users/src/lib/user-label.component.ts
var _c04 = (a0) => ({ host_name: a0 });
var _c13 = (a0) => ({ location: a0 });
function UserLabelComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const level_r1 = \u0275\u0275readContextLet(14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "APP.VISITOR_KIOSK.LABEL_LOCATION", \u0275\u0275pureFunction1(4, _c13, level_r1.display_name || level_r1.name)), " ");
  }
}
function UserLabelComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.pass_number);
  }
}
function UserLabelComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.user().qr_code, \u0275\u0275sanitizeUrl);
  }
}
var _UserLabelComponent = class _UserLabelComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.user = input({});
    this.width = input(25);
    this.height = input(15);
    this.landscape = computed(() => this.width() > this.height());
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
  print() {
    console.log("Printing user label...");
  }
};
_UserLabelComponent.\u0275fac = function UserLabelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserLabelComponent)();
};
_UserLabelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLabelComponent, selectors: [["user-label"]], inputs: { user: [1, "user"], width: [1, "width"], height: [1, "height"] }, decls: 30, vars: 39, consts: [[1, "user-label", "border-neutral", "bg-base-100", "relative", "m-[0.5em]", "rounded-[0.75em]", "border", "p-[1em]"], [1, "flex", "h-full", "flex-col", "leading-tight"], [1, "border-base-400", "bg-base-200", "mb-[0.25em]", "flex", "h-[5em]", "w-[5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border"], [1, "text-[2.25em]", 3, "user"], [1, "mb-[0.25em]", "text-[1.5em]", "text-black"], [1, "absolute", "bottom-[1em]", "left-[1em]", "mt-[0.5em]", "w-[8em]", "rounded-[0.5em]", "border", "border-black", "px-[0.5em]", "py-[0.25em]", "text-center", "font-medium", "text-black", "uppercase"], [1, "absolute", "top-[1em]", "right-[1em]", "flex", "flex-col", "items-end", "space-y-[0.5em]"], ["auth", "", "alt", "Logo", 1, "h-[3em]", "object-contain", 3, "src"], [1, "text-right", "text-[0.75em]", "text-black"], [1, "text-right", "text-black"], [1, "absolute", "right-[1em]", "bottom-[1em]", "flex", "items-end"], [1, "text-right", "leading-tight", "font-medium", "text-black"], [1, "border-base-200", "relative", "flex", "h-[4em]", "w-[4em]", "items-center", "justify-center", "rounded-[0.5em]", "border"], [1, "h-[3.5em]", "w-[3.5em]", "object-contain", "object-center", 3, "src"]], template: function UserLabelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "a-user-avatar", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275element(13, "img", 7);
    \u0275\u0275declareLet(14);
    \u0275\u0275pipe(15, "level");
    \u0275\u0275conditionalCreate(16, UserLabelComponent_Conditional_16_Template, 3, 6, "div", 8);
    \u0275\u0275elementStart(17, "pre", 9);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, UserLabelComponent_Conditional_19_Template, 2, 1, "pre", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "div");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12);
    \u0275\u0275conditionalCreate(29, UserLabelComponent_Conditional_29_Template, 1, 1, "img", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_10_0;
    let tmp_11_0;
    \u0275\u0275styleProp("width", ctx.width() + "em")("height", ctx.height() + "em");
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.user());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.user().name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 23, "APP.VISITOR_KIOSK.LABEL_HOST", \u0275\u0275pureFunction1(37, _c04, (tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.host)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 26, "APP.VISITOR_KIOSK.VISITOR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("max-width", ctx.landscape ? "8em" : "");
    \u0275\u0275property("src", (ctx.logo == null ? null : ctx.logo.src) || ctx.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    const level_r3 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(15, 28, ctx.user().zones));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(level_r3 ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx.user()) == null ? null : tmp_10_0.extra_details);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx.user()) == null ? null : tmp_11_0.pass_number) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("space-x-[0", !ctx.landscape())("space-y-[0", ctx.landscape())("flex-col", ctx.landscape());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 31, ctx.user().date, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 34, ctx.user().date, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.user().qr_code ? 29 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  UserAvatarComponent,
  TranslatePipe,
  LevelPipe,
  AuthenticatedImageDirective
], styles: ["/* angular:styles/component:css;725153a99cf1545964099fddfcea602bed4f1c33b32c3fcd6d11ef23d4316b5e;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-label.component.ts */\n:host {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=user-label.component.css.map */\n"], encapsulation: 2 });
var UserLabelComponent = _UserLabelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserLabelComponent, [{
    type: Component,
    args: [{ selector: `user-label`, template: `
        <div
            class="user-label border-neutral bg-base-100 relative m-[0.5em] rounded-[0.75em] border p-[1em]"
            [style.width]="width() + 'em'"
            [style.height]="height() + 'em'"
        >
            <div class="flex h-full flex-col leading-tight">
                <div
                    class="border-base-400 bg-base-200 mb-[0.25em] flex h-[5em] w-[5em] items-center justify-center overflow-hidden rounded-full border"
                >
                    <a-user-avatar
                        class="text-[2.25em]"
                        [user]="user()"
                    ></a-user-avatar>
                </div>
                <div class="mb-[0.25em] text-[1.5em] text-black">
                    {{ user().name }}
                </div>
                <div>
                    {{
                        'APP.VISITOR_KIOSK.LABEL_HOST'
                            | translate
                                : {
                                      host_name: user()?.host,
                                  }
                    }}
                </div>
            </div>
            <div
                class="absolute bottom-[1em] left-[1em] mt-[0.5em] w-[8em] rounded-[0.5em] border border-black px-[0.5em] py-[0.25em] text-center font-medium text-black uppercase"
            >
                {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
            </div>
            <div
                class="absolute top-[1em] right-[1em] flex flex-col items-end space-y-[0.5em]"
            >
                <img
                    auth
                    class="h-[3em] object-contain"
                    [style.max-width]="landscape ? '8em' : ''"
                    alt="Logo"
                    [src]="logo?.src || logo"
                />
                @let level = user().zones | level;
                @if (level) {
                    <div class="text-right text-[0.75em] text-black">
                        {{
                            'APP.VISITOR_KIOSK.LABEL_LOCATION'
                                | translate
                                    : {
                                          location:
                                              level.display_name || level.name,
                                      }
                        }}
                    </div>
                }
                <pre class="text-right text-black">{{
                    user()?.extra_details
                }}</pre>
                @if (user()?.pass_number) {
                    <pre class="text-right text-[0.75em] text-black">{{
                        user()?.pass_number
                    }}</pre>
                }
            </div>
            <div
                class="absolute right-[1em] bottom-[1em] flex items-end"
                [class.space-x-[0.5em]]="!landscape()"
                [class.space-y-[0.5em]]="landscape()"
                [class.flex-col]="landscape()"
            >
                <div class="text-right leading-tight font-medium text-black">
                    <div>
                        {{ user().date | date: 'shortTime' }}
                    </div>
                    <div>
                        {{ user().date | date: 'mediumDate' }}
                    </div>
                </div>
                <div
                    class="border-base-200 relative flex h-[4em] w-[4em] items-center justify-center rounded-[0.5em] border"
                >
                    @if (user().qr_code) {
                        <img
                            class="h-[3.5em] w-[3.5em] object-contain object-center"
                            [src]="user().qr_code"
                        />
                    }
                </div>
            </div>
        </div>
    `, encapsulation: ViewEncapsulation.None, imports: [
      CommonModule,
      UserAvatarComponent,
      TranslatePipe,
      LevelPipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;725153a99cf1545964099fddfcea602bed4f1c33b32c3fcd6d11ef23d4316b5e;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-label.component.ts */\n:host {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=user-label.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLabelComponent, { className: "UserLabelComponent", filePath: "libs/users/src/lib/user-label.component.ts", lineNumber: 141 });
})();

// libs/form-fields/src/lib/counter.component.ts
function CounterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.render_fn() ? ctx_r0.render_fn()(ctx_r0.value) : ctx_r0.value) || "0", " ");
  }
}
var _CounterComponent = class _CounterComponent {
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
_CounterComponent.\u0275fac = function CounterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CounterComponent)();
};
_CounterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CounterComponent, selectors: [["a-counter"]], inputs: { step: [1, "step"], max: [1, "max"], min: [1, "min"], render_fn: [1, "render_fn"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _CounterComponent),
    multi: true
  }
])], decls: 10, vars: 6, consts: [["counter", "", 1, "flex", "items-center", "text-base", 3, "keydown.shift", "keydown.control", "keydown.meta", "keyup.shift", "keyup.control", "keyup.meta"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l", "rounded-r-none", "border", 3, "click", "disabled"], ["value", "", 1, "border-secondary", "relative", "z-0", "-mx-px", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "rounded-none", "border", "p-2", "focus-within:z-20"], ["type", "text", "limitInput", "", 1, "absolute", "inset-0", "rounded-none", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "focus", "blur", "ngModel"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l-none", "rounded-r", "border", 3, "click", "disabled"]], template: function CounterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("keydown.shift", function CounterComponent_Template_div_keydown_shift_0_listener() {
      return ctx.shift_key = true;
    }, \u0275\u0275resolveWindow)("keydown.control", function CounterComponent_Template_div_keydown_control_0_listener() {
      return ctx.ctrl_key = true;
    }, \u0275\u0275resolveWindow)("keydown.meta", function CounterComponent_Template_div_keydown_meta_0_listener() {
      return ctx.ctrl_key = true;
    }, \u0275\u0275resolveWindow)("keyup.shift", function CounterComponent_Template_div_keyup_shift_0_listener() {
      return ctx.shift_key = false;
    }, \u0275\u0275resolveWindow)("keyup.control", function CounterComponent_Template_div_keyup_control_0_listener() {
      return ctx.ctrl_key = false;
    }, \u0275\u0275resolveWindow)("keyup.meta", function CounterComponent_Template_div_keyup_meta_0_listener() {
      return ctx.ctrl_key = false;
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "button", 1);
    \u0275\u0275listener("click", function CounterComponent_Template_button_click_1_listener() {
      return ctx.remove();
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275conditionalCreate(5, CounterComponent_Conditional_5_Template, 2, 1, "span");
    \u0275\u0275elementStart(6, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function CounterComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
      return $event;
    });
    \u0275\u0275listener("focus", function CounterComponent_Template_input_focus_6_listener() {
      return ctx.focused = true;
    })("blur", function CounterComponent_Template_input_blur_6_listener() {
      ctx.setValue(+ctx.value);
      return ctx.focused = false;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function CounterComponent_Template_button_click_7_listener() {
      return ctx.add();
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("disabled", ctx.disabled());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.value || ctx.value === ctx.min());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.focused ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.value);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.value === ctx.max());
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], styles: ["\n\n[counter].disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 30%;\n}\n\n\n/*# sourceMappingURL=counter.component.css.map */"] });
var CounterComponent = _CounterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterComponent, [{
    type: Component,
    args: [{ selector: "a-counter", template: `
        <div
            counter
            class="flex items-center text-base"
            (window:keydown.shift)="shift_key = true"
            (window:keydown.control)="ctrl_key = true"
            (window:keydown.meta)="ctrl_key = true"
            (window:keyup.shift)="shift_key = false"
            (window:keyup.control)="ctrl_key = false"
            (window:keyup.meta)="ctrl_key = false"
            [class.disabled]="disabled()"
        >
            <button
                decrease
                icon
                matRipple
                type="button"
                class="border-secondary text-secondary z-10 h-12 w-12 rounded-l rounded-r-none border"
                [disabled]="!value || value === min()"
                (click)="remove()"
            >
                <icon>remove</icon>
            </button>
            <div
                value
                class="border-secondary relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center rounded-none border p-2 focus-within:z-20"
            >
                @if (!focused) {
                    <span>
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
            <button
                increase
                icon
                matRipple
                type="button"
                class="border-secondary text-secondary z-10 h-12 w-12 rounded-l-none rounded-r border"
                [disabled]="value === max()"
                (click)="add()"
            >
                <icon>add</icon>
            </button>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CounterComponent),
        multi: true
      }
    ], imports: [FormsModule, IconComponent], styles: ["/* angular:styles/component:css;a6b2eba167820a19f3bfe4858772015401d059291041c0f38f39de4e622992d8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/counter.component.ts */\n[counter].disabled {\n  pointer-events: none;\n  opacity: 30%;\n}\n/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=counter.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CounterComponent, { className: "CounterComponent", filePath: "libs/form-fields/src/lib/counter.component.ts", lineNumber: 82 });
})();

// libs/users/src/lib/user-label-modal.component.ts
function UserLabelModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-label", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-size", ctx_r1.scale() + "mm");
    \u0275\u0275property("user", ctx_r1.details)("width", ctx_r1.width())("height", ctx_r1.height());
  }
}
var _UserLabelModalComponent = class _UserLabelModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.STORAGE_KEY = "PlaceOS.User.LabelSettings";
    this.details = inject(MAT_DIALOG_DATA);
    this.scale = signal(4);
    this.width = signal(25);
    this.height = signal(15);
    this.format_mm = (value) => `${Math.floor(value * 10) / 10}mm`;
    this.print = () => {
      this.saveSettings();
      this.timeout("print", () => window.print());
    };
  }
  ngOnInit() {
    this.loadSettings();
  }
  loadSettings() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const settings = JSON.parse(stored);
        this.scale.set(settings.scale);
        this.width.set(settings.width);
        this.height.set(settings.height);
      }
    } catch (error) {
      console.warn("Failed to load user label settings from localStorage:", error);
    }
  }
  saveSettings() {
    try {
      const settings = {
        scale: this.scale(),
        width: this.width(),
        height: this.height()
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn("Failed to save user label settings to localStorage:", error);
    }
  }
};
_UserLabelModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UserLabelModalComponent_BaseFactory;
  return function UserLabelModalComponent_Factory(__ngFactoryType__) {
    return (\u0275UserLabelModalComponent_BaseFactory || (\u0275UserLabelModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UserLabelModalComponent)))(__ngFactoryType__ || _UserLabelModalComponent);
  };
})();
_UserLabelModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLabelModalComponent, selectors: [["user-label-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 41, vars: 20, consts: [["print_content", ""], [1, "bg-base-200", "relative", "flex", "h-screen", "w-screen", "flex-col", "items-center", "space-y-4", "overflow-auto", "print:hidden"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "border"], [1, "border-base-300", "bg-base-100", "rounded-lg", "border", "p-2"], [3, "user", "width", "height"], ["printable", "", 1, "print-only", 3, "content"], [1, "border-base-300", "bg-base-100", "rounded-lg", "border"], [1, "space-y-4", "p-4"], [1, "text-xl", "font-medium"], [1, ""], [3, "ngModelChange", "ngModel", "min", "step", "render_fn"], [1, "flex", "space-x-4"], [3, "ngModelChange", "ngModel", "min", "max", "step"], [1, "font-medium"], [1, "flex", "space-x-4", "p-2"], [1, "border-base-300", "flex", "justify-end", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function UserLabelModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2)(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "user-label", 4);
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275template(7, UserLabelModalComponent_ng_template_7_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "h3", 8);
    \u0275\u0275text(12, "Label Properties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "label");
    \u0275\u0275text(15, "Unit Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a-counter", 10);
    \u0275\u0275twoWayListener("ngModelChange", function UserLabelModalComponent_Template_a_counter_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.scale, $event) || (ctx.scale = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "div", 9)(19, "label");
    \u0275\u0275text(20, "Width");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a-counter", 12);
    \u0275\u0275twoWayListener("ngModelChange", function UserLabelModalComponent_Template_a_counter_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.width, $event) || (ctx.width = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 9)(23, "label");
    \u0275\u0275text(24, "Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a-counter", 12);
    \u0275\u0275twoWayListener("ngModelChange", function UserLabelModalComponent_Template_a_counter_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.height, $event) || (ctx.height = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "h3", 13);
    \u0275\u0275text(28, "Output size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 14)(30, "div", 9)(31, "label");
    \u0275\u0275text(32, "Width:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 9)(35, "label");
    \u0275\u0275text(36, "Height:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 15)(39, "button", 16);
    \u0275\u0275listener("click", function UserLabelModalComponent_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.print());
    });
    \u0275\u0275text(40, " Print ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const print_content_r3 = \u0275\u0275reference(8);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("font-size", ctx.scale() + "mm");
    \u0275\u0275property("user", ctx.details)("width", ctx.width())("height", ctx.height());
    \u0275\u0275advance();
    \u0275\u0275property("content", print_content_r3);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.scale);
    \u0275\u0275property("min", 1)("step", 0.1)("render_fn", ctx.format_mm);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.width);
    \u0275\u0275property("min", 1)("max", 100)("step", 1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.height);
    \u0275\u0275property("min", 1)("max", 100)("step", 1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx.format_mm(ctx.width() * ctx.scale()), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.format_mm(ctx.height() * ctx.scale()), " ");
  }
}, dependencies: [
  CommonModule,
  UserLabelComponent,
  MatDialogModule,
  MatDialogClose,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  CounterComponent,
  IconComponent,
  PrintableComponent
], encapsulation: 2 });
var UserLabelModalComponent = _UserLabelModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserLabelModalComponent, [{
    type: Component,
    args: [{ selector: `user-label-modal`, template: `
        <div
            class="bg-base-200 relative flex h-screen w-screen flex-col items-center space-y-4 overflow-auto print:hidden"
        >
            <button
                icon
                matRipple
                mat-dialog-close
                class="border-base-300 bg-base-100 absolute top-2 right-2 border"
            >
                <icon>close</icon>
            </button>
            <div class="border-base-300 bg-base-100 rounded-lg border p-2">
                <user-label
                    [user]="details"
                    [width]="width()"
                    [height]="height()"
                    [style.font-size]="scale() + 'mm'"
                />
                <div printable class="print-only" [content]="print_content">
                    <ng-template #print_content>
                        <user-label
                            [user]="details"
                            [width]="width()"
                            [height]="height()"
                            [style.font-size]="scale() + 'mm'"
                        />
                    </ng-template>
                </div>
            </div>
            <div class="border-base-300 bg-base-100 rounded-lg border">
                <div class="space-y-4 p-4">
                    <h3 class="text-xl font-medium">Label Properties</h3>
                    <div class="">
                        <label>Unit Size</label>
                        <a-counter
                            [(ngModel)]="scale"
                            [min]="1"
                            [step]="0.1"
                            [render_fn]="format_mm"
                        />
                    </div>
                    <div class="flex space-x-4">
                        <div class="">
                            <label>Width</label>
                            <a-counter
                                [(ngModel)]="width"
                                [min]="1"
                                [max]="100"
                                [step]="1"
                            />
                        </div>
                        <div class="">
                            <label>Height</label>
                            <a-counter
                                [(ngModel)]="height"
                                [min]="1"
                                [max]="100"
                                [step]="1"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 class="font-medium">Output size</h3>
                        <div class="flex space-x-4 p-2">
                            <div class="">
                                <label>Width:</label>
                                {{ format_mm(width() * scale()) }}
                            </div>
                            <div class="">
                                <label>Height:</label>
                                {{ format_mm(height() * scale()) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="border-base-300 flex justify-end border-t px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="print()">
                        Print
                    </button>
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      UserLabelComponent,
      MatDialogModule,
      FormsModule,
      MatRippleModule,
      CounterComponent,
      IconComponent,
      PrintableComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLabelModalComponent, { className: "UserLabelModalComponent", filePath: "libs/users/src/lib/user-label-modal.component.ts", lineNumber: 119 });
})();

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var EMPTY_USER = {};
var _UserPipe = class _UserPipe {
  /**
   * Get details of the user with the given ID
   * @param user_id ID or Email of the user
   */
  async transform(user_id) {
    if (!user_id)
      return EMPTY_USER;
    let user = USER_LIST.find(({ id, email }) => id === user_id || email === user_id);
    if (user)
      return user;
    user = await lastValueFrom(showStaff(user_id)).catch(() => null);
    if (user) {
      USER_LIST.push(user);
      return user;
    }
    user = await lastValueFrom(showGuest(user_id)).catch(() => null);
    if (user) {
      USER_LIST.push(user);
      return user;
    }
    return EMPTY_USER;
  }
};
_UserPipe.\u0275fac = function UserPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserPipe)();
};
_UserPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
var UserPipe = _UserPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

// libs/form-fields/src/lib/user-search-field.component.ts
var _c05 = ["input"];
var _c14 = (a0) => ({ name: a0 });
function UserSearchFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 5);
  }
}
function UserSearchFieldComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 11);
    \u0275\u0275element(2, "a-user-avatar", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275property("value", user_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.email, " ");
  }
}
function UserSearchFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 8)(1, "div", 15);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_14_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.stopEvent($event));
    })("touchstart", function UserSearchFieldComponent_Conditional_14_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.stopEvent($event));
    })("click", function UserSearchFieldComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      const term_r5 = \u0275\u0275readContextLet(11);
      ctx_r3.setValue(term_r5);
      return \u0275\u0275resetView(ctx_r3.stopEvent($event));
    });
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r5 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "FORM.USER_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c14, term_r5)), " ");
  }
}
function UserSearchFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_15_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.empty_fn()());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const term_r5 = \u0275\u0275readContextLet(11);
    \u0275\u0275property("disabled", !ctx_r3.empty_fn());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, term_r5 ? "FORM.USER_EMPTY" : ""), " ", ctx_r3.error(), " ");
  }
}
function UserSearchFieldComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearUser());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "person_cancel");
    \u0275\u0275elementEnd()();
  }
}
var _UserSearchFieldComponent = class _UserSearchFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this.search_term = new BehaviorSubject("");
    this.loading = signal(false);
    this.user = signal(null);
    this.disabled = model(void 0);
    this.placeholder = input("FORM.USER_SEARCH");
    this.options = input(void 0);
    this.guests = input(void 0);
    this.clear = input(false);
    this.error = input("");
    this.validate = input(void 0);
    this.empty_fn = input(void 0);
    this.filter = input(void 0);
    this.query_fn = input((q) => this._settings.get("app.basic_user_search") ? Oa({ q, authority_id: Ut()?.id }).pipe(map((_) => _.data.map((_2) => new User(_2))), catchError(() => of([]))) : this.guests() ? forkJoin([
      searchStaff(q).pipe(catchError(() => of([]))),
      searchGuests(q).pipe(catchError(() => of([])))
    ]) : searchStaff(q).pipe(catchError(() => of([]))));
    this.search_results = this.search_term.pipe(debounceTime(300), switchMap((term) => {
      if (term && typeof term !== "string")
        return of([term]);
      if (term === this.user()?.name)
        return of([this.user()]);
      this.loading.set(true);
      const s = (term || "").toLowerCase();
      return this.options()?.length ? of(this.options().filter((_) => _.name.toLowerCase().includes(s) || _.email.toLowerCase().includes(s))) : s.length > 2 ? this.query_fn()(s) : of([]);
    }), map((_) => _.filter((_2) => !!_2)), tap(() => this.loading.set(false)), startWith([]), shareReplay(1));
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
    this._input_el = viewChild("input", { read: ElementRef });
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value, email) {
    const value = typeof new_value === "string" ? new User({ name: new_value, email }) : new_value;
    this._onChange ? this._onChange(value) : null;
    this._onTouch ? this._onTouch(value) : null;
    this.user.set(value);
    console.log("Set User:", value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.user.set(value);
    this.resetTerm();
  }
  displayFn(user) {
    return user && user.name ? user.name : "";
  }
  stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  clearUser() {
    this.user.set(null);
    this._onChange ? this._onChange(null) : null;
    this._onTouch ? this._onTouch(null) : null;
    this.resetTerm();
  }
  resetTerm() {
    this.search_term.next(this.user());
    const input2 = this._input_el()?.nativeElement;
    if (input2)
      input2.value = this.search_term.getValue();
  }
};
_UserSearchFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UserSearchFieldComponent_BaseFactory;
  return function UserSearchFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275UserSearchFieldComponent_BaseFactory || (\u0275UserSearchFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UserSearchFieldComponent)))(__ngFactoryType__ || _UserSearchFieldComponent);
  };
})();
_UserSearchFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSearchFieldComponent, selectors: [["a-user-search-field"]], viewQuery: function UserSearchFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c05, 5, ElementRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { disabled: [1, "disabled"], placeholder: [1, "placeholder"], options: [1, "options"], guests: [1, "guests"], clear: [1, "clear"], error: [1, "error"], validate: [1, "validate"], empty_fn: [1, "empty_fn"], filter: [1, "filter"], query_fn: [1, "query_fn"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UserSearchFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 19, vars: 17, consts: [["auto", "matAutocomplete"], [1, "flex", "w-full", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["matPrefix", "", 1, "block", "flex", "w-6", "items-center", "justify-center", "text-2xl"], ["matInput", "", 3, "ngModelChange", "blur", "ngModel", "disabled", "matAutocomplete", "placeholder"], ["matSuffix", "", "diameter", "24"], [3, "optionSelected", "displayWith"], [3, "value"], [1, "pointer-events-none", "relative"], [3, "disabled"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border"], [1, "flex", "items-center", "space-x-2"], [1, "-ml-2", 3, "user"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [1, "pointer-events-auto", "absolute", "inset-0", "px-4", 3, "mousedown", "touchstart", "click"], [1, "pointer-events-none"], [3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function UserSearchFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-form-field", 2)(2, "icon", 3);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search_term.next($event));
    })("blur", function UserSearchFieldComponent_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.resetTerm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, UserSearchFieldComponent_Conditional_6_Template, 1, 0, "mat-spinner", 5);
    \u0275\u0275elementStart(7, "mat-autocomplete", 6, 0);
    \u0275\u0275listener("optionSelected", function UserSearchFieldComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setValue($event.option.value));
    });
    \u0275\u0275declareLet(9);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275declareLet(11);
    \u0275\u0275repeaterCreate(12, UserSearchFieldComponent_For_13_Template, 8, 4, "mat-option", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(14, UserSearchFieldComponent_Conditional_14_Template, 5, 6, "mat-option", 8);
    \u0275\u0275conditionalCreate(15, UserSearchFieldComponent_Conditional_15_Template, 3, 5, "mat-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, UserSearchFieldComponent_Conditional_18_Template, 3, 0, "button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r8 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("no-subscript", !ctx.error());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.search_term.getValue())("disabled", ctx.disabled())("matAutocomplete", auto_r8)("placeholder", \u0275\u0275pipeBind1(5, 12, ctx.placeholder()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("displayWith", ctx.displayFn);
    const user_list_r9 = \u0275\u0275pipeBind1(10, 14, ctx.search_results);
    \u0275\u0275advance(4);
    const term_r10 = \u0275\u0275storeLet(ctx.search_term.getValue());
    \u0275\u0275advance();
    \u0275\u0275repeater(user_list_r9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(term_r10 && ctx.validate() && ctx.validate()(term_r10) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(user_list_r9 == null ? null : user_list_r9.length) && (ctx.search_term.getValue() || ctx.error()) ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.error());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.clear() ? 18 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatPrefix,
  MatSuffix,
  MatInputModule,
  MatInput,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe,
  UserAvatarComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\nicon[_ngcontent-%COMP%] {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */"] });
var UserSearchFieldComponent = _UserSearchFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-search-field", template: `
        <div class="flex w-full space-x-2">
            <mat-form-field
                appearance="outline"
                class="w-1/2 flex-1"
                [class.no-subscript]="!error()"
            >
                <icon
                    matPrefix
                    class="block flex w-6 items-center justify-center text-2xl"
                    >search</icon
                >
                <input
                    matInput
                    [ngModel]="search_term.getValue()"
                    (ngModelChange)="search_term.next($event)"
                    [disabled]="disabled()"
                    [matAutocomplete]="auto"
                    [placeholder]="placeholder() | translate"
                    (blur)="resetTerm()"
                />
                @if (loading()) {
                    <mat-spinner matSuffix diameter="24"></mat-spinner>
                }
                <mat-autocomplete
                    #auto="matAutocomplete"
                    [displayWith]="displayFn"
                    (optionSelected)="setValue($event.option.value)"
                >
                    @let user_list = search_results | async;
                    @let term = search_term.getValue();
                    @for (user of user_list; track $index) {
                        <mat-option [value]="user">
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (term && validate() && validate()(term)) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="setValue(term); stopEvent($event)"
                            >
                                <div class="pointer-events-none">
                                    {{
                                        'FORM.USER_ADD_EXTERNAL'
                                            | translate: { name: term }
                                    }}
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (
                        !user_list?.length &&
                        (search_term.getValue() || error())
                    ) {
                        <mat-option
                            [disabled]="!empty_fn()"
                            (click)="empty_fn()()"
                        >
                            {{ (term ? 'FORM.USER_EMPTY' : '') | translate }}
                            {{ error() }}
                        </mat-option>
                    }
                </mat-autocomplete>
                <mat-error>{{ error() }}</mat-error>
            </mat-form-field>
            @if (clear()) {
                <button
                    icon
                    matRipple
                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                    (click)="clearUser()"
                >
                    <icon>person_cancel</icon>
                </button>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserSearchFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      UserAvatarComponent
    ], styles: ["/* angular:styles/component:css;d84628be6394a4ab204c469dc548d2d04b7c619d7a49b10690a47d4a374a3d83;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/user-search-field.component.ts */\n:host {\n  display: block;\n}\nicon {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSearchFieldComponent, { className: "UserSearchFieldComponent", filePath: "libs/form-fields/src/lib/user-search-field.component.ts", lineNumber: 162 });
})();

// libs/events/src/lib/events.fn.ts
var EVENTS_ENDPOINT = `/api/staff/v1/events`;
function queryEvents(q) {
  const query = toQueryString(q);
  return N(`${EVENTS_ENDPOINT}${query ? "?" + query : ""}`).pipe(map((list) => list.map((e) => new CalendarEvent(e))), catchError((_) => of([])));
}
function queryAllEvents(q) {
  return O({
    query_params: q,
    fn: (item) => new CalendarEvent(item),
    endpoint: EVENTS_ENDPOINT,
    path: ""
  }).pipe(switchMap(async ({ data, next }) => {
    let list = [...data];
    while (next) {
      const resp = await next().toPromise();
      data = resp.data;
      next = resp.next;
      list = [...list, ...data];
    }
    return list;
  }), catchError((_) => of([])));
}
function showEvent(id, q = {}) {
  const query = toQueryString(q);
  return N(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`).pipe(map((item) => new CalendarEvent(item)));
}
function createEvent(data) {
  return G(`${EVENTS_ENDPOINT}`, new CalendarEvent(data).toJSON()).pipe(map((item) => new CalendarEvent(item)));
}
function updateEvent(id, data, q = {}, method = "patch") {
  const query = toQueryString(q);
  return (method === "patch" ? et : Ne)(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, new CalendarEvent(data).toJSON()).pipe(map((item) => new CalendarEvent(item)));
}
var saveEvent = (data, q) => {
  const id = data.update_master ? data.recurring_event_id || data.id : data.id;
  delete data?.status;
  return id ? updateEvent(id, __spreadProps(__spreadValues({}, data), { id }), q) : createEvent(data);
};
function removeEvent(id, q = {}) {
  const query = toQueryString(q);
  return Oe(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, {
    response_type: "void"
  });
}
function declineEvent(id, query = {}) {
  const q = toQueryString(query);
  return G(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/decline${q ? "?" + q : ""}`, "").pipe(map((item) => new CalendarEvent(item)));
}
function checkinEventGuest(id, guest_id, state, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { state }));
  return G(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/guests/${guest_id}/checkin${query ? "?" + query : ""}`, "").pipe(map((item) => new GuestUser(item)));
}
function addEventGuest(id, guest, q = {}) {
  const query = toQueryString(q);
  return G(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/attendee${query ? "?" + query : ""}`, guest).pipe(map((item) => new GuestUser(item)));
}
function removeEventGuest(id, guest, q = {}) {
  const query = toQueryString(q);
  return Oe(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/attendee/${encodeURIComponent(guest.email)}${query ? "?" + query : ""}`).pipe(map((item) => new GuestUser(item)));
}
function getEventMetadata(id, system_id, query = {}) {
  const q = toQueryString(__spreadValues({}, query));
  return N(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/metadata/${encodeURIComponent(system_id)}${q ? "?" + q : ""}`).pipe(map((item) => item));
}
function showEventMetadata(id, system_id, query = {}) {
  const q = toQueryString(__spreadValues({}, query));
  return N(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/metadata/${encodeURIComponent(system_id)}${q ? "?" + q : ""}`).pipe(map((item) => item));
}
function updateEventMetadata(id, system_id, metadata, query = {}) {
  const q = toQueryString(__spreadValues({}, query));
  return et(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/metadata/${encodeURIComponent(system_id)}${q ? "?" + q : ""}`, metadata).pipe(map((item) => item));
}
function querySpaceAvailability(id_list, start, duration, ignore, type, ignore_period = [0, 0]) {
  const end = addMinutes(start, duration).valueOf();
  return combineLatest([
    queryCalendarAvailability({
      system_ids: id_list.join(),
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    }).pipe(catchError((_) => of([]))),
    ignore && id_list.includes(ignore) ? querySpaceFreeBusy({
      period_start: getUnixTime(start),
      period_end: getUnixTime(end),
      system_ids: ignore
    }) : of([])
  ]).pipe(map(([spaces, ignore_check]) => {
    const short_list = id_list.map((id) => !!spaces.find((s) => s.id === id || s.resource?.id === id));
    for (const space of ignore_check) {
      if (!id_list.includes(space.id))
        continue;
      const availability = space.availability.filter((i) => !(i.date === ignore_period[0] && i.duration === ignore_period[1]));
      short_list[id_list.indexOf(space.id)] = !availability.find((i) => i.status !== "free");
    }
    return short_list;
  }));
}

// libs/bookings/src/lib/bookings.fn.ts
var BOOKINGS_ENDPOINT = `/api/staff/v1/bookings`;
function queryBookings(q) {
  const query = toQueryString(q);
  return N(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`).pipe(map((list) => list.map((item) => new Booking(item))), catchError((_) => of([])));
}
function bookedResourceList(q) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e4 }));
  return N(`${BOOKINGS_ENDPOINT}/booked${query ? "?" + query : ""}`).pipe(map((list) => list), catchError((_) => of([])));
}
function findBookingClashes(booking, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e4 }));
  return G(`${BOOKINGS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, booking.toJSON()).pipe(map((list) => q.include_clash_time ? list : list), catchError((_) => of([])));
}
function queryPagedBookings(q) {
  return O({
    query_params: q,
    fn: (item) => new Booking(item),
    endpoint: BOOKINGS_ENDPOINT,
    path: ""
  });
}
var MAX_PAGES = 50;
function queryAllBookings(q) {
  return O({
    query_params: q,
    fn: (item) => new Booking(item),
    endpoint: BOOKINGS_ENDPOINT,
    path: ""
  }).pipe(switchMap(async ({ data, next }) => {
    let list = [...data];
    let count = 1;
    while (next && count <= MAX_PAGES) {
      const resp = await next().toPromise();
      data = resp.data;
      next = resp.next;
      list = [...list, ...data];
      count += 1;
    }
    return unique(list, "id");
  }), catchError((_) => of([])));
}
function createBooking(data, q) {
  const query = toQueryString(q);
  return G(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`, data).pipe(map((item) => new Booking(item)));
}
function updateBooking(id, data, method = "patch") {
  return (method === "patch" ? et : Ne)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`, data).pipe(map((item) => new Booking(item)));
}
function updateBookingInductionStatus(id, status) {
  return G(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/update_induction?induction=${encodeURIComponent(status)}`, {}).pipe(map((item) => new Booking(item)));
}
function updateBookingInstance(id, start_time, data, method = "patch") {
  return (method === "patch" ? et : Ne)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}`, data).pipe(map((item) => new Booking(item)));
}
var saveBooking = (data, q) => {
  const id = data.id;
  delete data.id;
  const instance = q?.instance;
  if (q)
    delete q.instance;
  return id ? instance ? updateBookingInstance(id, data.instance || data.booking_start, data) : updateBooking(id, data) : createBooking(data, q);
};
function removeBooking(id, q = {}) {
  if (q.instance) {
    return removeBookingInstance(id, q.start_time);
  }
  return Oe(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`, {
    response_type: "void"
  });
}
function removeBookingInstance(id, start_time) {
  return Oe(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}`, {
    response_type: "void"
  });
}
function approveBooking(id) {
  return G(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve`, "").pipe(map((item) => new Booking(item)));
}
function approveBookingInstance(id, start_time) {
  return G(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve`, "").pipe(map((item) => new Booking(item)));
}
function rejectBooking(id) {
  return G(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject`, "").pipe(map((item) => new Booking(item)));
}
function rejectBookingInstance(id, start_time) {
  return G(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject`, "").pipe(map((item) => new Booking(item)));
}
function checkinBooking(id, state) {
  const query = toQueryString({ state });
  return G(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in?${query}`, "").pipe(map((item) => new Booking(item)), catchError(async (e) => {
    const body = await e.json();
    throw body.error || body.message || body;
  }));
}
function checkinBookingInstance(id, start_time, state) {
  const query = toQueryString({ state });
  return G(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in/${start_time}?${query}`, "").pipe(map((item) => new Booking(item)), catchError(async (e) => {
    const body = await e.json();
    throw body.error || body.message || body;
  }));
}
function queryResourceAvailability(id_list, start, duration, ignore, type = "room", ignore_period = [0, 0]) {
  return queryBookings({
    type,
    period_start: getUnixTime(start),
    period_end: getUnixTime(addMinutes(start, duration))
  }).pipe(map((_) => id_list.map((id) => !_.find((b) => b.asset_id === id && (!ignore || ignore !== b.id)))));
}
async function createBookingsForEvent(event, type, resources) {
  const bookings = await queryBookings({
    type,
    period_start: getUnixTime(event.date),
    period_end: getUnixTime(addMinutes(event.date, event.duration))
  }).pipe(map((_) => _.filter((_2) => _2.parent_id === event.id))).toPromise();
  await Promise.all(bookings.map((_) => removeBooking(_.id).toPromise()));
  await Promise.all(event.linked_bookings.filter((_) => _.booking_type === type).map((_) => removeBooking(_.id).toPromise()));
  const zones = event.system?.zones || unique(flatten(event.resources.map((_) => _.zones))) || [];
  await Promise.all(resources.map((item) => {
    const booking = bookings.find((_) => _.asset_ids.find((id) => item.items?.find((i) => i.item_ids.includes(id))));
    return lastValueFrom(createBooking(new Booking({
      type,
      booking_type: type,
      date: event.date,
      duration: event.duration,
      description: event.title || item.name,
      user_email: event.host,
      asset_id: item.email || item.id,
      asset_name: item.name,
      title: event.title,
      attendees: item.email ? [item] : [],
      approved: booking?.approved && !item._changed,
      rejected: booking?.rejected && !item._changed,
      extension_data: {
        parent_id: event.id,
        name: item.name,
        location_id: event.location,
        details: item
      },
      zones
    }), { ical_uid: event.ical_uid, event_id: event.id }));
  }));
}

// libs/assets/src/lib/assets.fn.ts
function queryAssetCategories(query = {}) {
  return Hl(query).pipe(map((res) => res.data));
}
function addAssetCategory(category) {
  return Bl(category);
}
function updateAssetCategory(id, category) {
  return Ll(id, category);
}
function saveAssetCategory(category) {
  return category.id ? updateAssetCategory(category.id, category) : addAssetCategory(category);
}
function deleteAssetCategory(id) {
  return Vl(id);
}
function queryAssetGroups(query = {}) {
  return Dl(query).pipe(map((res) => res.data));
}
var groups_cache = /* @__PURE__ */ new Map();
function queryAssetGroupsExtended(query = {}) {
  if (groups_cache.has(query.zones)) {
    return of(groups_cache.get(query.zones));
  }
  return Dl(query).pipe(map((res) => res.data), switchMap((list) => list.length ? forkJoin(list.map((group) => queryAssets(__spreadProps(__spreadValues({
    limit: 200
  }, query), {
    type_id: group.id
  })).pipe(map((assets) => __spreadProps(__spreadValues({}, group), { assets }))))) : of([])), tap((_) => {
    groups_cache.set(query.zones, _);
    setTimeout(() => groups_cache.delete(query.zones), 5 * 60 * 1e3);
  }));
}
function addAssetGroup(product) {
  return jl(product).pipe(map((_) => _));
}
function updateAssetGroup(id, product) {
  return Fl(id, product).pipe(map((_) => _));
}
function saveAssetGroup(product) {
  return product.id ? updateAssetGroup(product.id, product) : addAssetGroup(product);
}
function showAssetGroup(id) {
  return Nl(id).pipe(map((_) => _));
}
function deleteAssetGroup(id) {
  return zl(id);
}
function queryAssets(query = {}) {
  return Il(query).pipe(map((res) => res.data));
}
function addAsset(asset) {
  return ql(asset);
}
function updateAsset(id, asset) {
  return Tl(id, asset);
}
function saveAsset(asset) {
  return asset.id ? updateAsset(asset.id, asset) : addAsset(asset);
}
function showAsset(id) {
  return Pl(id);
}
function deleteAsset(id) {
  return Ul(id);
}
function addAssetsInBulk(assets) {
  return Rl(assets);
}
function queryAssetPurchaseOrders(query = {}) {
  return Ql(query).pipe(map((res) => res.data));
}
function addAssetPurchaseOrder(order) {
  return Jl(order);
}
function updateAssetPurchaseOrder(id, order) {
  return Gl(id, order);
}
function saveAssetPurchaseOrder(order) {
  return order.id ? updateAssetPurchaseOrder(order.id, order) : addAssetPurchaseOrder(order);
}
function showAssetPurchaseOrder(id) {
  return Yl(id);
}
function deleteAssetPurchaseOrder(id) {
  return Kl(id);
}
function getGroupsWithAssets(query = {}) {
  return combineLatest([queryAssetGroups(query)]).pipe(map(([products]) => products));
}
function showGroupFull(id, query = {}) {
  return combineLatest([
    showAssetGroup(id),
    queryAssetCategories(),
    queryAssets(__spreadProps(__spreadValues({}, query), { type_id: id, limit: 2e3 })),
    queryAssetPurchaseOrders()
  ]).pipe(map(([product, categories, assets, purchase_orders]) => {
    product.category = categories.find((category) => category.id === product.category_id);
    product.assets = assets.filter((asset) => asset.asset_type_id === product.id);
    for (const asset of product.assets) {
      asset.purchase_order_number = purchase_orders.find((_) => _.id === asset.purchase_order_id)?.purchase_order_number;
    }
    product.purchase_orders = purchase_orders.filter((order) => product.assets.find((asset) => asset.purchase_order_id === order.id));
    return product;
  }));
}
function queryGroupAvailability(query, ignore = []) {
  query.type = "asset-request";
  return combineLatest([
    queryAssetGroupsExtended(query),
    queryBookings(query)
  ]).pipe(map(([products, bookings]) => {
    bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled");
    return products.map((product) => __spreadProps(__spreadValues({}, product), {
      assets: product.assets.filter((asset) => ignore?.includes(asset.id) || !bookings.find((booking) => !ignore.includes(booking.id) && (booking.asset_id === asset.id || booking.asset_ids?.includes(asset.id))))
    }));
  }));
}
async function removeAssetRequests(id) {
  const requests = await queryBookings({
    period_start: getUnixTime(startOfDay(/* @__PURE__ */ new Date())),
    period_end: getUnixTime(endOfDay(/* @__PURE__ */ new Date())),
    type: "asset-request"
  }).toPromise();
  return Promise.all(requests.filter((_) => _.asset_id === id || _.asset_ids?.includes(id)).map((request) => removeBooking(request.id).toPromise()));
}
function differenceBetweenAssetRequests(new_assets, old_assets, reset_state = false) {
  if ((!new_assets || new_assets?.length <= 0) && old_assets?.length)
    return [];
  if (!old_assets)
    return [];
  const changed = [];
  for (const request of new_assets) {
    const match = old_assets.find((_) => _.id === request.id);
    if (!match || match.ref_id !== request.ref_id) {
      changed.push(request.id);
    }
  }
  return changed;
}
async function validateAssetRequestsForResource({ id, ical_uid, from_booking }, { date, duration, all_day, host, location_name, location_id, zones, reset_state }, new_assets = [], force_create = false) {
  const requests = await queryBookings({
    period_start: getUnixTime(all_day ? startOfDay(date) : date),
    period_end: getUnixTime(all_day ? endOfDay(addMinutes(date, duration)) : addMinutes(date, duration)),
    type: "asset-request",
    zones: zones.join(",")
  }).toPromise();
  const bookings = id && ical_uid ? await queryBookings({
    period_start: getUnixTime(startOfDay(date)),
    period_end: getUnixTime(endOfDay(date)),
    type: "asset-request",
    email: host,
    event_id: from_booking ? "" : id,
    booking_id: from_booking ? id : "",
    ical_uid
  }).toPromise() : [];
  const booking_list = bookings.map((_) => [
    _.id,
    new AssetRequest(_.extension_data.request)
  ]);
  new_assets?.forEach((_) => _.conflict = false);
  let changed = force_create ? new_assets.map((_) => _.id) : differenceBetweenAssetRequests(new_assets, booking_list.map(([_, r]) => r), reset_state);
  if (reset_state) {
    const has_state = bookings.filter((_) => _.approved || _.rejected);
    changed = unique([
      ...changed,
      ...has_state.map((_) => _.extension_data.request_id)
    ]);
  }
  const unchanged = booking_list.filter(([_, request]) => !changed.includes(request.id));
  const changed_requests = booking_list.filter(([_, { id: id2 }]) => changed.includes(id2));
  const changed_assets = new_assets.filter(({ id: id2 }) => changed.includes(id2));
  const filtered = requests.filter((req) => !req.rejected && (!bookings.find((b) => b.id === req.id) || unchanged.find(([id2]) => req.event_id === id2)));
  let used_ids = flatten(filtered.map((_) => _.asset_ids));
  for (const [_, request] of unchanged) {
    used_ids = [
      ...used_ids,
      ...flatten(request.items.map((_2) => _2.item_ids))
    ];
  }
  const available_groups = await queryGroupAvailability({
    period_start: getUnixTime(all_day ? startOfDay(date) : date),
    period_end: getUnixTime(all_day ? endOfDay(addMinutes(date, duration)) : addMinutes(date, duration)),
    type: "asset-request"
  }, bookings.map((_) => _.id)).toPromise();
  const processed_requests = changed_assets.map((request) => {
    let asset_ids = flatten(request.items.map(({ id: id2, item_ids, quantity }) => {
      const assets = available_groups.find((_) => _.id === id2)?.assets;
      if (!assets)
        return item_ids;
      const list = [];
      return new Array(quantity).fill(0).map((_, idx) => {
        const item = used_ids.includes(item_ids[idx]) || list.includes(item_ids[idx]) || !item_ids[idx] ? assets?.find(({ id: id3 }) => {
          return !used_ids.includes(id3) && !list.includes(id3);
        })?.id : item_ids[idx];
        if (!item) {
          request.conflict = true;
          throw "Unable to find available asset for request";
        }
        list.push(item);
        return item;
      });
    }));
    const booking = bookings.find((_) => _.asset_ids.find((id2) => request.items?.find((i) => i.item_ids.includes(id2))));
    used_ids = [...used_ids, ...asset_ids];
    const asset_data = {
      type: "asset-request",
      booking_type: "asset-request",
      date,
      duration,
      all_day,
      description: location_name,
      user_email: host,
      asset_id: asset_ids[0],
      asset_ids,
      asset_name: request.items.map((_) => _.name).join(", "),
      title: request.items.map((_) => _.name).join(", "),
      approved: !reset_state && booking?.approved && !request._changed,
      rejected: !reset_state && booking?.rejected && !request._changed,
      extension_data: {
        parent_id: id,
        request_id: request.id,
        location_id,
        request: new AssetRequest(__spreadProps(__spreadValues({}, request), { event: null }))
      },
      zones: zones || []
    };
    if (from_booking)
      asset_data.parent_id = id;
    return createBooking(new Booking(asset_data), {
      ical_uid,
      event_id: from_booking ? "" : id
    });
  });
  return async () => {
    await Promise.all(changed_requests.map(([id2]) => removeBooking(id2).toPromise()));
    await Promise.all(processed_requests.map((r) => r.toPromise()));
  };
}

// libs/assets/src/lib/asset.utilities.ts
function generateAssetCategoryForm(category = {}) {
  return new FormGroup({
    id: new FormControl(category.id),
    name: new FormControl(category.name || "", [Validators.required]),
    parent_category_id: new FormControl(category.parent_category_id)
  });
}
function generateAssetPurchaseOrderForm(order = {}) {
  return new FormGroup({
    id: new FormControl(order.id),
    purchase_order_number: new FormControl(order.purchase_order_number || "", [Validators.required]),
    invoice_number: new FormControl(order.invoice_number || ""),
    unit_price: new FormControl(order.unit_price || 0),
    purchase_date: new FormControl(order.purchase_date ? order.purchase_date * 1e3 : null),
    expected_service_start_date: new FormControl(order.expected_service_start_date ? order.expected_service_start_date * 1e3 : null),
    expected_service_end_date: new FormControl(order.expected_service_end_date ? order.expected_service_end_date * 1e3 : null)
  });
}
function generateAssetGroupForm(group = {}) {
  return new FormGroup({
    id: new FormControl(group.id),
    category_id: new FormControl(group.category_id || "", [
      Validators.required
    ]),
    images: new FormControl(group.images || []),
    brand: new FormControl(group.brand || ""),
    name: new FormControl(group.name || "", [Validators.required]),
    description: new FormControl(group.description || "")
  });
}
function generateAssetForm(asset = {}) {
  return new FormGroup({
    id: new FormControl(asset.id),
    asset_type_id: new FormControl(asset.asset_type_id || "", [
      Validators.required
    ]),
    name: new FormControl(asset.name || ""),
    serial_number: new FormControl(asset.serial_number || ""),
    barcode: new FormControl(asset.barcode || ""),
    identifier: new FormControl(asset.identifier || ""),
    other_data: new FormControl(asset.other_data || {}),
    purchase_order_id: new FormControl(asset.purchase_order_id)
  });
}
var RULE_REQUESTS = {};
function getAssetRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return of([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = nc(zone_id, "assets_config").pipe(map((_) => _.details instanceof Array ? _.details : []), catchError((e) => of([])));
  return RULE_REQUESTS[zone_id];
}
function assetAvailable(item, rules, event) {
  const current_date = Date.now();
  const event_date = new Date(event.date);
  const isRuleMatch = (rule) => item.name === rule.name || item.category?.name.includes(rule.name) || event.resources?.some((resource) => resource.zones?.includes(rule.name)) || event.space?.zones?.includes(rule.name) || rule.name === "*";
  const countMatches = (rule) => rule.rules.reduce((matches, condition) => {
    switch (condition[0]) {
      case "is_before":
        return matches + (isBefore(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "within_hours":
        return matches + (isAfter(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "after_hour":
        return matches + (isAfter(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "before_hour":
        return matches + (isBefore(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "min_length":
        return matches + (event.duration >= stringToMinutes(condition[1]) ? 1 : 0);
      case "max_length":
        return matches + (event.duration <= stringToMinutes(condition[1]) ? 1 : 0);
      case "visitor_type":
        return matches + (event.ext("visitor_type") === condition[1] ? 1 : 0);
      default:
        return matches + 1;
    }
  }, 0);
  for (const rule of rules) {
    if (isRuleMatch(rule)) {
      if (countMatches(rule) < rule.rules.length) {
        return false;
      }
    }
  }
  return true;
}

// libs/assets/src/lib/asset-group.pipe.ts
var ASSET_GROUP_LIST = [];
var EMPTY_ASSET_GROUP = {};
function updateAssetGroupList(assetgroup_list) {
  for (const assetgroup of assetgroup_list) {
    if (!ASSET_GROUP_LIST.find(({ id }) => id === assetgroup.id)) {
      ASSET_GROUP_LIST.push(assetgroup);
    }
  }
}
var _AssetGroupPipe = class _AssetGroupPipe {
  /**
   * Get details of the assetgroup with the given ID
   * @param assetgroup_id ID or Email of the assetgroup
   */
  async transform(group_id) {
    if (!group_id)
      return EMPTY_ASSET_GROUP;
    let asset_group = ASSET_GROUP_LIST.find(({ id }) => id === group_id);
    if (asset_group)
      return asset_group;
    const group = await lastValueFrom(showAssetGroup(group_id)).catch(() => null);
    if (group) {
      asset_group = __spreadValues({}, group);
      ASSET_GROUP_LIST.push(asset_group);
      return asset_group;
    }
    return EMPTY_ASSET_GROUP;
  }
  updateAssetGroupList(assetgroup_list) {
    updateAssetGroupList(assetgroup_list);
  }
};
_AssetGroupPipe.\u0275fac = function AssetGroupPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetGroupPipe)();
};
_AssetGroupPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "assetgroup", type: _AssetGroupPipe, pure: true });
var AssetGroupPipe = _AssetGroupPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupPipe, [{
    type: Pipe,
    args: [{
      name: "assetgroup"
    }]
  }], null, null);
})();

// libs/assets/src/lib/asset-state.service.ts
var _AssetStateService = class _AssetStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._options = new BehaviorSubject({ date: Date.now() });
    this._search = new BehaviorSubject("");
    this._category = new BehaviorSubject([]);
    this._loading = new BehaviorSubject("");
    this.search = this._search.asObservable();
    this.category = this._category.asObservable();
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.rules = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(filter(([_, bld]) => !!bld), debounceTime(300), switchMap(([options, bld]) => {
      this._loading.next(this._loading.getValue() + "[Rules]");
      return getAssetRulesForZone(bld.id || options.zone || "");
    }), tap((_) => this._loading.next(this._loading.getValue().replace(/\[Rules\]/g, ""))), shareReplay(1));
    this.asset_list = of(0).pipe(switchMap(() => {
      this._loading.next(this._loading.getValue() + "[Assets]");
      return queryAssets();
    }), tap((_) => this._loading.next(this._loading.getValue().replace(/\[Assets\]/g, ""))), shareReplay(1));
    this.asset_bookings = this._options.pipe(debounceTime(300), switchMap(({ zone, date }) => {
      this._loading.next(this._loading.getValue() + "[Bookings]");
      return queryBookings({
        zones: zone || "",
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "asset-request"
      });
    }), tap((_) => this._loading.next(this._loading.getValue().replace(/\[Bookings\]/g, ""))), shareReplay(1));
    this.available_groups = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(debounceTime(300), switchMap(([{ zone, date, duration, ignore }, bld]) => {
      return queryGroupAvailability({
        zones: bld.id || zone || "",
        period_start: getUnixTime(startOfMinute(date)),
        period_end: getUnixTime(endOfMinute(addMinutes(date, duration || 30))),
        type: "asset-request",
        rejected: false
      }, ignore).pipe(catchError(() => of([])));
    }), map((list) => list.sort((a, b) => a.name.localeCompare(b.name))), tap((_) => updateAssetGroupList(_)), shareReplay(1));
    this.category_list = this._org.active_building.pipe(switchMap((bld) => queryAssetCategories({ zone_id: bld.id })), map((_) => _.sort((a, b) => a.name.localeCompare(b.name))), shareReplay(1));
    this.filtered_assets = combineLatest([
      this._search,
      this._category,
      this.available_groups,
      this.rules
    ]).pipe(map(([search, category, assets, rules]) => {
      const s = search.toLowerCase();
      console.log("Rules:", rules);
      const list = assets.filter((_) => _.assets?.length && (!category.length || category.includes(_.category_id)) && (_.name.toLowerCase().includes(s) || _.description.toLowerCase().includes(s)) && assetAvailable(_, rules, this._options.getValue()));
      return list;
    }), shareReplay(1));
    this.settings = combineLatest([this._org.active_building]).pipe(filter(([_]) => !!_), switchMap(([_]) => nc(_.id, "assets-settings").pipe(catchError((_2) => of({})))), map((_) => _.details || {}), shareReplay(1));
    this.disabled_rooms = this.settings.pipe(map((_) => _.disabled_rooms || []));
  }
  setSearch(value) {
    this._search.next(`${value}`);
  }
  toggleCategory(value) {
    const categories = this._category.getValue();
    if (categories.includes(value)) {
      this._category.next(categories.filter((_) => _ !== value));
    } else {
      this._category.next([...categories, value]);
    }
  }
  getOptions() {
    return this._options.getValue();
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.value), options));
  }
};
_AssetStateService.\u0275fac = function AssetStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetStateService)();
};
_AssetStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetStateService, factory: _AssetStateService.\u0275fac, providedIn: "root" });
var AssetStateService = _AssetStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/events/src/lib/validators.ts
var endInFuture = (control) => {
  const date = control.parent?.get("date");
  if (date && isAfter(Date.now(), addMinutes(date.value, control.value))) {
    return { duration: true };
  }
  return null;
};

// libs/bookings/src/lib/booking.utilities.ts
function setBookingAsset(form, resource) {
  if (!resource)
    return form.patchValue({ asset_id: void 0 });
  form.patchValue({
    asset_id: resource.id,
    asset_name: resource.name,
    map_id: resource.map_id || resource.id,
    description: resource.name,
    zones: resource.zone ? [resource.zone?.parent_id, resource.zone?.id] : [],
    booking_asset: resource
  }, { emitEvent: false });
}
function generateBookingForm(booking = new Booking()) {
  const form = new FormGroup({
    id: new FormControl(booking.id || ""),
    parent_id: new FormControl(booking.parent_id || ""),
    event_id: new FormControl(booking.event_id || ""),
    ical_uid: new FormControl(booking.extension_data.ical_uid || ""),
    date: new FormControl(booking.date, [Validators.required]),
    date_end: new FormControl(booking.date_end),
    all_day: new FormControl(booking.all_day ?? false),
    name: new FormControl(booking.extension_data.name || booking.asset_name || ""),
    duration: new FormControl(booking.duration, [endInFuture]),
    booking_type: new FormControl(booking.booking_type),
    zones: new FormControl(booking.zones),
    title: new FormControl(booking.title),
    description: new FormControl(booking.description),
    booking_asset: new FormControl(null),
    resources: new FormControl([]),
    company: new FormControl(booking.extension_data?.company || ""),
    asset_id: new FormControl(booking.asset_id, [Validators.required]),
    asset_name: new FormControl(booking.asset_name || booking.description),
    assets: new FormControl(booking.extension_data?.assets || []),
    attendees: new FormControl(booking.attendees || []),
    map_id: new FormControl(booking.extension_data?.map_id),
    featured: new FormControl(booking.extension_data?.featured || false),
    user: new FormControl(currentUser()),
    user_id: new FormControl(booking.user_id),
    group: new FormControl(booking.group),
    user_email: new FormControl(booking.user_email),
    user_name: new FormControl(booking.user_name),
    timezone: new FormControl(booking.timezone || ""),
    booked_by: new FormControl(currentUser()),
    booked_by_id: new FormControl(booking.booked_by_id),
    booked_by_email: new FormControl(booking.booked_by_email),
    secondary_resource: new FormControl(booking.extension_data?.other_asset_type || booking.extension_data?.secondary_resource),
    location: new FormControl(booking.extension_data.location || ""),
    attendance_type: new FormControl(booking.extension_data.attendance_type || "ANY"),
    phone: new FormControl(booking.extension_data.phone || ""),
    permission: new FormControl(booking.permission || "PRIVATE"),
    images: new FormControl(booking.images || []),
    tags: new FormControl(booking?.tags || []),
    plate_number: new FormControl(booking.extension_data.plate_number || ""),
    pass_number: new FormControl(booking.extension_data.pass_number || ""),
    recurrence_custom: new FormControl(booking.extension_data.recurrence_custom ?? false),
    recurrence_type: new FormControl(booking.recurrence_type || "none"),
    recurrence_days: new FormControl(booking.recurrence_days),
    recurrence_nth_of_month: new FormControl(booking.recurrence_nth_of_month),
    recurrence_interval: new FormControl(booking.recurrence_interval),
    recurrence_end: new FormControl(booking.recurrence_end),
    notes: new FormControl(booking.extension_data.notes || ""),
    update_master: new FormControl(false),
    self_registered: new FormControl(false),
    is_assgined: new FormControl(false)
  });
  form.valueChanges.subscribe(() => {
    if (form.getRawValue().date < Date.now() && form.value.id) {
      form.get("date")?.disable({ emitEvent: false });
    } else {
      form.get("date")?.enable({ emitEvent: false });
    }
  });
  form.controls.user.valueChanges.subscribe((user) => {
    if (!user)
      return;
    form.patchValue({
      user,
      user_id: user?.id,
      user_email: user?.email,
      user_name: user?.name
    }, { emitEvent: false });
  });
  current_user.subscribe((user) => {
    if (!user)
      return;
    form.patchValue({
      booked_by: user,
      booked_by_id: user?.id,
      booked_by_email: user?.email,
      name: user?.name
    }, { emitEvent: false });
  });
  form.controls.resources.valueChanges.subscribe((resources) => setBookingAsset(form, (resources || [])[0]));
  form.controls.duration.valueChanges.subscribe((duration) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
  });
  form.controls.date_end.valueChanges.subscribe((date) => {
    if (date < addMinutes(form.getRawValue().date, 30).valueOf()) {
      form.patchValue({
        date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, 30), { nearestTo: 5, roundingMethod: "ceil" }).valueOf(),
        duration: 30
      }, { emitEvent: false });
    } else {
      form.patchValue({
        duration: differenceInMinutes(date, form.getRawValue().date)
      }, { emitEvent: false });
    }
  });
  form.controls.date.valueChanges.subscribe((date) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(date, form.value.duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
    if (date < Date.now() && !form.value.id) {
      form.patchValue({
        date: roundToNearestMinutes(Date.now(), {
          nearestTo: 5,
          roundingMethod: "ceil"
        }).valueOf()
      }, { emitEvent: false });
    }
  });
  if (booking.state === "started")
    form.get("date").disable();
  return form;
}
async function findNearbyFeature(map_url, centered_at, desk_ids = []) {
  const element = document.createElement("div");
  element.style.position = "absolute";
  element.style.top = "-9999px";
  element.style.width = "1000px";
  element.style.height = "1000px";
  document.body.appendChild(element);
  const id = await Un({
    url: map_url,
    element
  });
  const viewer = $(id);
  const point = (typeof centered_at === "string" ? viewer.mappings[centered_at] : centered_at) || { x: 0.5, y: 0.5 };
  let dist = 10;
  let closest = "";
  for (const desk of desk_ids) {
    const { x, y } = viewer.mappings[desk] || { x: 2, y: 2 };
    const d = Math.sqrt((x - point.x) * (x - point.x) + (y - point.y) * (y - point.y));
    if (d < dist) {
      dist = d;
      closest = desk;
    }
  }
  document.body.removeChild(element);
  Hn(id);
  return closest;
}
function newBookingFromCalendarEvent(event) {
  return new Booking({
    id: event.id,
    user_email: event.host,
    asset_id: event.system?.id,
    asset_name: event.system?.display_name || event.system?.name,
    booking_type: "room",
    approved: event.status === "approved",
    extension_data: __spreadValues({}, event)
  });
}
function loadLockerBanks(org, obs, useRegion) {
  return obs.pipe(filter(([bld]) => !!bld), switchMap(([bld]) => useRegion() ? forkJoin(org.buildingsForRegion().map((building) => nc(building.id, "locker_banks").pipe(catchError(() => of(new Wr())), map((_) => _.details instanceof Array ? _.details : [])))).pipe(map((_) => flatten(_))) : nc(bld.id, "locker_banks").pipe(catchError(() => of(new Wr())), map((_) => _.details instanceof Array ? _.details : []))), shareReplay(1));
}
function loadLockers(org, obs, banks$, useRegion) {
  return obs.pipe(filter(([bld]) => !!bld), switchMap(([bld]) => combineLatest([
    useRegion() ? forkJoin(org.buildingsForRegion().map((building) => nc(building.id, "lockers").pipe(catchError(() => of(new Wr())), map((_) => _.details instanceof Array ? _.details : [])))).pipe(map((_) => flatten(_))) : nc(bld.id, "lockers").pipe(catchError(() => of(new Wr())), map((_) => _.details instanceof Array ? _.details : [])),
    banks$
  ])), map(([lockers, banks]) => {
    const locker_list = lockers;
    for (const bank of banks) {
      bank.lockers = lockers.filter((_) => _.bank_id === bank.id).map((_) => __spreadValues({}, _));
    }
    for (const locker of locker_list) {
      const bank = banks.find((b) => b.id === locker.bank_id);
      locker.bank = bank;
      locker.tags = bank?.tags || [];
      locker.zone = org.levelWithID(bank?.zones || []);
    }
    return lockers.filter((_) => _.bank);
  }), shareReplay(1));
}

// libs/events/src/lib/calendar-links.ts
function formatUTC(date) {
  const utc_date = localToTimezone(date, "UTC");
  return `${format(utc_date, "yyyyMMdd")}T${format(utc_date, "HHmmss")}Z`;
}
function formatAllDay(date) {
  return `${format(date, "yyyyMMdd")}`;
}
function escapeText(text) {
  return (text || "").replace(/\\|;|,|\n/g, (match) => {
    switch (match) {
      case "\\":
        return "\\\\";
      case ";":
        return "\\;";
      case ",":
        return "\\,";
      case "\n":
        return "\\n";
      default:
        return match;
    }
  });
}
function generateCalendarFileLink(event) {
  if (!event)
    return "data:text/calendar;charset=utf8,";
  const chunks = [];
  const description = escapeText(`${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`);
  const location2 = escapeText(`${event.location}`);
  chunks.push(["BEGIN", "VCALENDAR"]);
  chunks.push(["VERSION", "2.0"]);
  chunks.push(["BEGIN", "VEVENT"]);
  chunks.push(["UID", `${event.id || "uid-" + Date.now()}`]);
  chunks.push(["DTSTAMP", formatUTC(/* @__PURE__ */ new Date())]);
  if (event.meeting_url) {
    chunks.push(["URL", `${event.meeting_url}`]);
  }
  if (event.all_day) {
    chunks.push(["DTSTART;VALUE=DATE", formatAllDay(event.date)]);
    chunks.push(["DTEND;VALUE=DATE", formatAllDay(addDays(event.date, 1))]);
  } else {
    chunks.push(["DTSTART", formatUTC(event.date)]);
    chunks.push([
      "DTEND",
      formatUTC(addMinutes(event.date, event.duration || 60))
    ]);
  }
  chunks.push(["SUMMARY", escapeText(event.title)]);
  chunks.push(["DESCRIPTION", description]);
  chunks.push(["LOCATION", location2]);
  const hostEmail = event.host || event.user_email || `no-reply@place.tech`;
  const hostName = event.organiser?.name || hostEmail.split("@")[0] || "Staff";
  chunks.push([
    "ORGANIZER",
    `CN=${escapeText(hostName)}:mailto:${hostEmail}`
  ]);
  chunks.push(["END", "VEVENT"]);
  chunks.push(["END", "VCALENDAR"]);
  const content = chunks.map(([key, value]) => `${key}:${value}`).join("\r\n");
  const url_data = encodeURIComponent(content);
  return `data:text/calendar;charset=utf8,${url_data}`;
}
function generateGoogleCalendarLink(event) {
  const fmt = event.all_day ? formatAllDay : formatUTC;
  const details = {
    action: "TEMPLATE",
    text: event.title,
    details: `${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    trp: false,
    dates: `${fmt(event.date)}/${fmt(addMinutes(event.date, event.duration ?? 60))}`
  };
  const emails = (event.attendees || []).map((_) => _.email || _);
  const resources = ((event.resources?.length ? event.resources : null) || [event.system]).map((_) => _?.email || _);
  if (emails.length || resources.length)
    details.add = unique([...emails, ...resources]).join();
  return `https://calendar.google.com/calendar/render?${toQueryString(details)}`;
}
function dateToISO(date) {
  return `${format(date, "yyyy-MM-dd")}T${format(date, "HH:mm:ss")}`;
}
function generateMicrosoftCalendarLink(event, type = "office", status = "free") {
  if (!event.date)
    event.date = Date.now();
  const data = {
    // path: '/calendar/deeplink/compose',
    // rru: 'addevent',
    startdt: dateToISO(event.date),
    enddt: dateToISO(addMinutes(event.date, event.duration ?? 60)),
    subject: event.title,
    body: `${event.body || ""}${event.id ? "\n\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    allday: event.all_day ?? false
    // availability: status,
    // freebusy: status,
  };
  if (event.all_day)
    delete data.enddt;
  const emails = (event.attendees || []).map((_) => _.email || _);
  const resources = ((event.resources?.length ? event.resources : null) || [event.system]).map((_) => _?.email || _);
  if (emails.length || resources.length)
    data.to = unique([...emails, ...resources]).filter((_) => !!_).join(",");
  return type === "office" ? `https://outlook.office.com/calendar/deeplink/compose?${toQueryString(data)}` : `https://outlook.live.com/calendar/deeplink/compose?${toQueryString(data)}`;
}

// libs/events/src/lib/event-link-modal.component.ts
var _EventLinkModalComponent = class _EventLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._dialog = inject(MatDialogRef);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
    this.has_actioned = false;
  }
  close() {
    if (!this.has_actioned) {
      return notifyError("You need to select a calendar option to finish creating this booking");
    }
    this._dialog.close(true);
  }
};
_EventLinkModalComponent.\u0275fac = function EventLinkModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventLinkModalComponent)();
};
_EventLinkModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventLinkModalComponent, selectors: [["event-link-modal"]], decls: 29, vars: 28, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "click", "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["btn", "", "matRipple", "", 1, "w-64", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-0", 3, "mat-dialog-close"]], template: function EventLinkModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_4_listener() {
      return ctx.has_actioned = true;
    });
    \u0275\u0275element(6, "img", 3);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 2);
    \u0275\u0275pipe(11, "sanitize");
    \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_10_listener() {
      return ctx.has_actioned = true;
    });
    \u0275\u0275element(12, "img", 4);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 2);
    \u0275\u0275pipe(17, "safe");
    \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_16_listener() {
      return ctx.has_actioned = true;
    });
    \u0275\u0275elementStart(18, "icon", 5);
    \u0275\u0275text(19, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 6);
    \u0275\u0275listener("click", function EventLinkModalComponent_Template_button_click_23_listener() {
      return ctx.close();
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 7)(27, "icon");
    \u0275\u0275text(28, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "BOOKINGS.LINK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 11, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 16, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 21, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 24, "BOOKINGS.LINK_ICAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "COMMON.CLOSE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.has_actioned);
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  SafePipe,
  SanitizePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=event-link-modal.component.css.map */"] });
var EventLinkModalComponent = _EventLinkModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventLinkModalComponent, [{
    type: Component,
    args: [{ selector: "event-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKINGS.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKINGS.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKINGS.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
            </a>
            <button class="w-64" btn matRipple (click)="close()">
                {{ 'COMMON.CLOSE' | translate }}
            </button>
        </div>
        <button
            icon
            matRipple
            [mat-dialog-close]="has_actioned"
            class="absolute top-2 right-0"
        >
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=event-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventLinkModalComponent, { className: "EventLinkModalComponent", filePath: "libs/events/src/lib/event-link-modal.component.ts", lineNumber: 91 });
})();

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
var validateCateringField = (catering_control) => (control) => {
  if (catering_control.value?.length && !control.value) {
    return { catering_field: "Catering sub-fields are required" };
  }
  return null;
};
function generateEventForm(event = new CalendarEvent(), settings) {
  if (!event)
    event = new CalendarEvent();
  const form = new FormGroup({
    id: new FormControl(event.id),
    ical_uid: new FormControl(event.ical_uid),
    host: new FormControl(event.host || event.organiser?.email || currentUser()?.email || "", [Validators.required]),
    organiser: new FormControl(event.organiser || { email: event.host || "" }),
    creator: new FormControl(event.creator || currentUser()?.email),
    calendar: new FormControl(event.calendar),
    attendees: new FormControl(event.attendees || []),
    resources: new FormControl(event.resources || []),
    title: new FormControl(event.title),
    body: new FormControl(event.body),
    private: new FormControl(event.private),
    date: new FormControl(event.date, [Validators.required]),
    duration: new FormControl(event.duration, [endInFuture]),
    all_day: new FormControl(event.all_day),
    date_end: new FormControl(event.date_end),
    recurring: new FormControl(event.recurring),
    recurrence: new FormControl(event.recurrence),
    recurring_event_id: new FormControl(event.recurring_event_id),
    master: new FormControl(event.master),
    attachments: new FormControl(event.attachments),
    catering: new FormControl(event.extension_data?.catering),
    catering_notes: new FormControl(event.extension_data?.catering[0]?.notes || ""),
    catering_charge_code: new FormControl(event.extension_data?.catering[0]?.charge_code || ""),
    setup_time: new FormControl(event.setup_time || 0),
    breakdown_time: new FormControl(event.breakdown_time || 0),
    assets: new FormControl(event.extension_data?.assets),
    // has_catering: new FormControl(event.has_catering || false),
    visitor_type: new FormControl(event.extension_data?.visitor_type),
    location: new FormControl(event.location),
    visibility: new FormControl(event.visibility || "normal"),
    needs_space: new FormControl(true),
    needs_parking: new FormControl(event.extension_data?.needs_parking || false),
    event_type: new FormControl(event.extension_data?.event_type || ""),
    category: new FormControl(event.extension_data?.category || ""),
    tags: new FormControl(event.extension_data?.tags || []),
    update_master: new FormControl(false),
    system: new FormControl(event.system),
    attendance_type: new FormControl(event.extension_data?.attendance_type || "ONSITE"),
    timezone: new FormControl(event.timezone || LOCAL_TIMEZONE),
    shared_event: new FormControl(event.extension_data?.shared_event || false),
    view_access: new FormControl(event.extension_data?.view_access || "OPEN"),
    images: new FormControl(event.extension_data?.images || []),
    featured: new FormControl(event.extension_data?.featured || false),
    event_services: new FormControl(event.extension_data?.event_services || [])
  });
  form.get("organiser").valueChanges.subscribe((o) => form.controls.host.setValue(o?.email));
  form.get("resources").valueChanges.subscribe((l) => {
    form.controls.system.setValue(l?.length ? l[0] : null);
    form.controls.assets[l?.length ? "enable" : "disable"]();
  });
  const setCateringTime = () => {
    if (!form.value.catering?.length || !form.getRawValue().date)
      return;
    form.patchValue({
      catering: form.value.catering.map((order) => __spreadProps(__spreadValues({}, order), {
        event: {
          date: form.value.all_day ? startOfDay(form.getRawValue().date) : form.getRawValue().date,
          duration: form.value.all_day ? 24 * 60 : form.value.duration
        }
      }))
    }, { emitEvent: false });
  };
  form.valueChanges.subscribe((v) => {
    if (form.getRawValue().date < Date.now() && form.value.id) {
      form.get("date")?.disable({ emitEvent: false });
    } else {
      form.get("date")?.enable({ emitEvent: false });
    }
    if (v.date || v.duration || v.all_day)
      setCateringTime();
  });
  form.controls.duration.valueChanges.subscribe((duration) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
    setCateringTime();
  });
  form.controls.date_end.valueChanges.subscribe((date) => {
    if (date < addMinutes(form.getRawValue().date, 30).valueOf()) {
      form.patchValue({
        date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, 30), { nearestTo: 5, roundingMethod: "ceil" }).valueOf(),
        duration: 30
      }, { emitEvent: false });
    } else {
      form.patchValue({
        duration: differenceInMinutes(date, form.getRawValue().date)
      }, { emitEvent: false });
    }
    setCateringTime();
  });
  form.controls.date.valueChanges.subscribe((date) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(date, form.value.duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
    if (date < Date.now() && !form.value.id) {
      form.patchValue({
        date: roundToNearestMinutes(Date.now(), {
          nearestTo: 5,
          roundingMethod: "ceil"
        }).valueOf()
      }, { emitEvent: false });
    }
    if (form.value.recurrence?._pattern !== "custom_display" && form.value.recurrence?._pattern !== "none") {
      form.patchValue({
        recurrence: __spreadProps(__spreadValues({}, form.value.recurrence), {
          days_of_week: [new Date(date).getDay()]
        })
      });
    }
    setCateringTime();
  });
  form.controls.catering.valueChanges.subscribe((_) => {
    const catering = form.getRawValue().catering || [];
    if (catering?.length && (settings?.get("app.events.catering_notes_required") || settings.value("require_catering_notes"))) {
      form.get("catering_notes")?.setValidators([Validators.required]);
      form.get("catering_notes").patchValue(form.value.catering_notes);
    } else {
      form.get("catering_notes")?.clearValidators();
      form.get("catering_notes").setErrors(null);
    }
    form.updateValueAndValidity();
  });
  form.get("catering_charge_code").setValidators([
    validateCateringField(form.get("catering"))
  ]);
  if (event.id) {
    form.get("host").disable();
    form.get("organiser").disable();
  }
  if (event.state === "started")
    form.get("date").disable();
  return form;
}
function newCalendarEventFromBooking(booking) {
  let attendees = [
    {
      id: booking.user_id,
      name: booking.user_name,
      email: booking.user_email,
      organizer: true
    }
  ];
  if (booking.booking_type === "visitor") {
    attendees.push(new User({
      name: booking.asset_name || booking.description,
      email: booking.asset_id,
      checked_in: booking.checked_in
    }));
  }
  attendees = attendees.concat(booking.attendees);
  return new CalendarEvent(__spreadProps(__spreadValues(__spreadValues({}, booking), booking.extension_data), {
    attendees,
    id: booking.id || booking.extension_data.id,
    host: booking.user_email,
    from_bookings: true
  }));
}

// libs/events/src/lib/new-event-form.service.ts
var BOOKING_URLS = [
  "book/rooms",
  "book/spaces",
  "book/meeting",
  "schedule/view",
  "confirm/success",
  "upcoming"
];
var Tags;
(function(Tags2) {
  Tags2["Availability"] = "AVAILABILITY";
  Tags2["BookingRules"] = "BOOKING_RULES";
  Tags2["ListingRooms"] = "LIST_ROOMS";
  Tags2["PostBooking"] = "MAKING_BOOKING";
})(Tags || (Tags = {}));
var _EventFormService = class _EventFormService extends AsyncHandler {
  loadLastSuccess() {
    const event = new CalendarEvent(JSON.parse(sessionStorage?.getItem("PLACEOS.last_modified_event") || "{}"));
    if (this.last_success()?.date === event.date)
      return this.last_success();
    this.last_success.set(event);
    return event;
  }
  get form() {
    return this._form;
  }
  get view() {
    return this._view.getValue();
  }
  get options() {
    return this._options.getValue();
  }
  get filters() {
    return this._filters.getValue();
  }
  get event() {
    return this._event.getValue();
  }
  get is_multiday() {
    return this._event.getValue()?.duration > 24 * 60;
  }
  get favorite_spaces() {
    return this._settings.get("favourite_spaces") || [];
  }
  get book_internal() {
    return this._settings.get("app.events.use_bookings") === true;
  }
  get lone_space() {
    return this._settings.get("app.events.no_space_resource");
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._assets = inject(AssetStateService);
    this._dialog = inject(MatDialog);
    this._view = new BehaviorSubject("form");
    this._options = new BehaviorSubject({
      date: Date.now(),
      zones: []
    });
    this._filters = new BehaviorSubject({
      capacity: -1,
      features: []
    });
    this._loading = new BehaviorSubject("");
    this._changed = new BehaviorSubject(0);
    this._event = new BehaviorSubject(new CalendarEvent());
    this._form = generateEventForm(void 0, this._settings);
    this._space_pipe = new SpacePipe();
    this.removeLoadingTag = (t) => this._loading.next(this._loading.getValue().replace(`[${t}]`, "").trim());
    this.addLoadingTag = (t) => t ? this._loading.next(`${this._loading.getValue().replace(`[${t}]`, "")}[${t}]`.trim()) : "";
    this._overflow = (id = "") => id ? this._settings.get(`app.events.overflow.${id}`) || {} : {
      setup: this._settings.get(`app.events.setup`) || 0,
      breakdown: this._settings.get(`app.events.breakdown`) || 0
    };
    this._host = (host, space) => this._settings.get("app.events.force_host") || (this._settings.get("app.events.room_as_host") ? space : "") || host;
    this.options$ = this._options.asObservable();
    this.filters$ = this._filters.asObservable();
    this.loading$ = this._loading.asObservable();
    this.booking_rules$ = this._org.building_list.pipe(switchMap((list) => {
      this.addLoadingTag(Tags.BookingRules);
      return forkJoin(list.map((bld) => nc(bld.id, "room_booking_rules").pipe(map((_) => ({
        id: bld.id,
        details: _.details instanceof Array ? _.details : []
      })), catchError(() => of({ id: bld.id, details: [] })))));
    }), map((building_rules) => {
      const mapping = {};
      for (const rules of building_rules) {
        mapping[rules.id] = rules?.details;
      }
      return mapping;
    }), tap(() => this.removeLoadingTag(Tags.BookingRules)), shareReplay(1));
    this.spaces$ = this._org.active_building.pipe(switchMap(() => this._settings.get("app.use_region") ? this._org.active_region.pipe(filter((_) => !!_)) : this._org.active_building.pipe(filter((_) => !!_))), distinctUntilKeyChanged("id"), switchMap((zone) => {
      if (!zone)
        return of([]);
      this.addLoadingTag(Tags.ListingRooms);
      return requestSpacesForZone(zone.id).pipe(catchError(() => of([])));
    }), map((list) => list.filter((_) => _.bookable && _.email && !_.room_booking_url)), tap(() => this.removeLoadingTag(Tags.ListingRooms)), startWith([]), shareReplay(1));
    this.features = this.spaces$.pipe(map((l) => unique(flatten(l.map((_) => _.features)))));
    this.room_alerts = this._changed.pipe(switchMap(() => nc(this._org.organisation.id, "room_alerts")), map((r) => r.details), startWith({}), shareReplay(1));
    this.filtered_spaces = combineLatest([
      this.spaces$,
      this._options,
      this._filters,
      this._org.initialised.pipe(filter((_) => _))
    ]).pipe(map(([list, { zones }, filters]) => {
      if (!list.length)
        return list;
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
      }
      if (zones.length) {
        list = list.filter((space) => zones.find((id) => space.zones.includes(id)));
      }
      if (filters.show_fav) {
        list = list.filter(({ id }) => this.favorite_spaces.includes(id));
      }
      if (filters.capacity > 0) {
        list = list.filter(({ capacity }) => filters.capacity <= capacity || capacity < 0);
      }
      if (filters.features) {
        list = list.filter(({ features }) => filters.features.every((f) => features.includes(f)));
      }
      return list;
    }));
    this.available_spaces = combineLatest([
      this.filtered_spaces,
      this.booking_rules$,
      this._event,
      this._options
    ]).pipe(debounceTime(300), switchMap(([spaces, rules, event, { date, duration, all_day }]) => {
      this.addLoadingTag(Tags.Availability);
      const method = this.book_internal ? queryResourceAvailability : querySpaceAvailability;
      spaces = filterResourcesFromRules(spaces, { date, duration, resource: null, host: currentUser() }, rules[this._org.building?.id] || []);
      return method(spaces.map(({ id }) => id), (all_day ? startOfDay(date).valueOf() : date) || 60, (all_day ? Math.max(24 * 60, duration) : duration) || 60, event?.resources[0]?.id || event?.system?.id || event?.id, void 0, [event?.date, event?.duration]).pipe(map((availability) => {
        let list = spaces.filter((_, i) => availability[i]);
        list = filterResourcesFromRules(list, {
          date,
          duration,
          resource: null,
          host: currentUser()
        }, rules[this._org.building?.id] || []);
        return list;
      }), catchError(() => of([])));
    }), tap(() => this.removeLoadingTag(Tags.Availability)), startWith([]), shareReplay(1));
    this.view$ = this._view.asObservable();
    this.last_success = signal(null);
    this._space_pipe.org = this._org;
    this.init();
  }
  async init() {
    await firstTruthyValueFrom(current_user);
    setDefaultCreator(currentUser());
    this.form.controls.date.valueChanges.subscribe((date) => this.setOptions({ date }));
    this.form.controls.duration.valueChanges.subscribe((duration) => this.setOptions({ duration }));
    this.subscription("router.events", this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !BOOKING_URLS.some((_) => event.url.includes(_))) {
        this.clearForm();
      }
    }));
    const previous = {};
    this.form.valueChanges.subscribe(({ date, duration }) => {
      if (date && date !== previous["date"] || duration && duration !== previous["duration"]) {
        this._assets.setOptions({
          date: this.form.value.date,
          duration: this.form.value.duration
        });
        previous["date"] = date;
        previous["duration"] = duration;
      }
      this.storeForm();
    });
    this.loadLastSuccess();
  }
  setView(value) {
    this.timeout("set_view", () => this._view.next(value), 50);
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  newForm(event = new CalendarEvent()) {
    this._loading.next("");
    this._form.reset(__spreadProps(__spreadValues({}, event), {
      catering: event.extension_data.catering,
      catering_charge_code: event.extension_data.catering?.[0]?.charge_code,
      catering_notes: event.extension_data.catering?.[0]?.notes
    }));
    if (!event.id)
      return;
    sessionStorage.setItem("PLACEOS.event", JSON.stringify(event.toJSON()));
    this._event.next(event);
  }
  resetForm() {
    this._form.reset(this._event.getValue() || {});
  }
  storeForm() {
    this.timeout("store", () => {
      sessionStorage.setItem("PLACEOS.event_form", JSON.stringify(this._form.getRawValue() || {}));
    });
  }
  loadForm() {
    const event_data = JSON.parse(sessionStorage.getItem("PLACEOS.event") || "{}");
    const event = new CalendarEvent(event_data);
    this._event.next(event);
    const form_data = JSON.parse(sessionStorage.getItem("PLACEOS.event_form") || "{}");
    this._form.patchValue(__spreadValues(__spreadValues({}, event), form_data));
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.event");
    sessionStorage.removeItem("PLACEOS.event_form");
    this.newForm();
  }
  openEventLinkModal(force = false) {
    const form = this._form;
    form.markAllAsTouched();
    if (!form.valid && !force)
      return;
    const event = new CalendarEvent(__spreadProps(__spreadValues({}, form.getRawValue()), { assets: [] }));
    const ref = this._dialog.open(EventLinkModalComponent, { data: event });
    ref.afterClosed().subscribe((d) => d ? this._router.navigate(["/"]) : "");
  }
  cancelPostForm() {
  }
  async postForm(force = false, ignore_space_check = [], ignore_owner = false, force_calendar = false) {
    this.form.markAllAsTouched();
    if (this.form.invalid && !force) {
      throw i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      });
    }
    const on_error = (e) => {
      this.removeLoadingTag(Tags.PostBooking);
      throw e;
    };
    this.addLoadingTag(Tags.PostBooking);
    const event = this._event.getValue();
    const space_list = this.form.value.resources || [];
    let spaces = space_list.filter((_) => !ignore_space_check.includes(_.id));
    const recurr = this.form.value.recurrence;
    this.form.patchValue({
      recurring: recurr?._pattern && recurr?._pattern !== "none"
    });
    if (!this.form.value.recurring) {
      this.form.patchValue({ recurrence: null });
    }
    const changed_spaces = spaces.filter((_) => !event.resources.find((s) => s.id === _.id));
    const has_time_changed = !event.id || event.date !== this.form.value.date || event.duration !== this.form.value.duration;
    if (spaces.length && has_time_changed) {
      const space_list2 = await Promise.all(changed_spaces.map((_) => this._space_pipe.transform(_.email)));
      const date = this.form.value.all_day ? startOfDay(this.form.value.date).valueOf() : this.form.value.date;
      const duration = this.form.value.all_day ? Math.max(24 * 60, this.form.value.duration) : this.form.value.duration;
      await this._checkResourcesAvailable(space_list2, date, duration, event.ical_uid || event.id || "").catch(on_error);
      await this._checkResourceRules(space_list2, date, duration, this._host(this.form.value.host, spaces[0]?.email)).catch(on_error);
    } else if (!space_list.length && this.lone_space) {
      spaces = [await this._space_pipe.transform(this.lone_space)];
      this.form.patchValue({ resources: spaces });
    }
    this.form.patchValue({
      attendees: unique([
        ...this.form.value.attendees,
        this.form.value.organiser || currentUser()
      ], "email")
    });
    if (!spaces.length && this.form.value.attendees.find((_) => _.is_external)) {
      this.removeLoadingTag(Tags.PostBooking);
      throw i18n("CALENDAR_EVENT.SPACE_EXTERNALS_ERROR");
    }
    const default_oflow = this._overflow();
    let [setup, breakdown] = [
      this.form.value.setup_time || default_oflow.setup,
      this.form.value.breakdown_time || default_oflow.breakdown
    ];
    for (const space of spaces) {
      const overflow = this._overflow(space.id);
      setup = Math.max(overflow.setup || 0, setup);
      breakdown = Math.max(overflow.breakdown || 0, breakdown);
    }
    this.form.patchValue({ setup_time: setup, breakdown_time: breakdown });
    for (const order of this.form.value.catering || []) {
      order.notes = this.form.value.catering_notes;
      order.charge_code = this.form.value.catering_charge_code;
    }
    const query = event.id ? {
      system_id: event?.resources[0]?.id || event?.system?.id || spaces[0]?.id
    } : {};
    const is_owner = this.form.value.host === currentUser()?.email || this.form.value.creator === currentUser()?.email;
    if (is_owner && !ignore_owner || force_calendar)
      query.calendar = this.form.value.host || this.form.value.creator;
    if (force_calendar)
      delete query.system_id;
    const processed_assets = (this.form.value.assets || []).map((_) => new AssetRequest(_).toJSON());
    const host = this._host(this.form.value.host, spaces[0]?.email);
    const ext = {
      department: this.form.value.organiser?.department || currentUser()?.department
    };
    if (this.form.value.host !== host)
      ext.host_override = this.form.value.host;
    const value = this.form.getRawValue();
    const created_event = await this._performBooking(new CalendarEvent(__spreadProps(__spreadValues({}, this.form.getRawValue()), {
      old_system: event?.system,
      host,
      title: this.form.value.title || "Space Booking",
      attendees: this.form.value.attendees.map((_) => {
        const v = __spreadValues({}, _);
        delete v.visit_expected;
        delete v.extension_data;
        return v;
      }),
      assets: processed_assets,
      extension_data: ext
    })), query).catch(on_error);
    const domain = (currentUser()?.email || "@").split("@")[1];
    const visitors = this.form.value.attendees.filter((user) => user.is_external && user.email !== event.host && !user.email.includes(domain) && user.visit_expected);
    if (visitors.length) {
      await createBookingsForEvent(created_event, "visitor", visitors).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
    }
    if (this.form.value.catering?.length) {
      await createBookingsForEvent(created_event, "catering-order", this.form.value.catering).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
    }
    const assets = this.form.value.assets || event.extension_data.assets || [];
    if (assets.length) {
      const requests = await validateAssetRequestsForResource(created_event, {
        date: value.date,
        duration: value.duration,
        host: value.host,
        all_day: value.all_day,
        location_name: spaces[0]?.display_name || spaces[0]?.name || "",
        location_id: spaces[0]?.id || "",
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id,
          ...spaces[0]?.zones || []
        ]).filter((_) => !!_),
        reset_state: has_time_changed
      }, assets, changed_spaces.length > 0 || has_time_changed).catch((e) => this._removeBookingAfterError(!event.id, created_event, true, e));
      if (!requests)
        throw i18n("CALENDAR_EVENT.ASSETS_INVALID_ERROR");
      await requests();
    }
    this.clearForm();
    sessionStorage.setItem("PLACEOS.last_modified_event", JSON.stringify(created_event.toJSON()));
    this.loadLastSuccess();
    return true;
  }
  async _handlePayments() {
    return "INV-000_001";
  }
  async _checkResourcesAvailable(spaces, date, duration, ignore) {
    if (!spaces?.length)
      return true;
    const event = this._event.getValue();
    const id_list = spaces.map((_) => _.id);
    const response = await lastValueFrom(this.book_internal ? queryResourceAvailability(id_list, date, duration, ignore) : querySpaceAvailability(id_list, date, duration, event?.resources[0]?.id || event?.system?.id || event?.id || void 0, void 0, [event?.date, event?.duration]));
    if (!response.every((_) => _)) {
      throw i18n(spaces.length > 1 ? "CALENDAR_EVENT.SPACES_UNAVAILABLE" : "CALENDAR_EVENT.SPACE_UNAVAILABLE");
    }
    return true;
  }
  async _checkResourceRules(spaces, date, duration, host) {
    const user = await lastValueFrom(Ea(host)).catch(() => ({
      email: host
    }));
    const rules = await nextValueFrom(this.booking_rules$);
    const space_rules = spaces.map((space) => {
      const bld = this._org.buildings.find((b) => space.zones.includes(b.id));
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld.id]);
    });
    if (!space_rules.every((_) => !_.hidden)) {
      throw i18n("CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN", void 0, spaces.length);
    }
    return true;
  }
  async _performBooking(event, query) {
    this._updateVisitorList(event.attendees);
    const old_system = event.old_system?.id || event.old_system?.email || event.resources[0]?.email;
    const system_id = event.system?.id || event.system?.email || event.resources[0]?.email;
    if (old_system !== system_id) {
      event.attendees = event.attendees.filter((_) => _.email !== old_system || _.id !== old_system);
    }
    return lastValueFrom(this.book_internal ? saveBooking(newBookingFromCalendarEvent(__spreadProps(__spreadValues({}, event.toJSON()), {
      status: this._settings.get("app.bookings.no_approval") === true ? "approved" : "tentative"
    }))).pipe(map((_) => newCalendarEventFromBooking(_))) : saveEvent(event, query));
  }
  async _removeBookingAfterError(is_new, event, assets = false, e) {
    if (is_new) {
      await lastValueFrom(removeEvent(event.id, event.resources.length ? {
        calendar: this.form.value.host || currentUser()?.email,
        system_id: event.resources[0].id
      } : {}));
      throw e?.status === 409 ? i18n("CALENDAR_EVENT.ASSETS_CLASH_ERROR") : i18n("CALENDAR_EVENT.ASSETS_ERROR");
    } else if (assets) {
      throw i18n("CALENDAR_EVENT.ASSETS_PARTIAL_ERROR", {
        error: e
      });
    }
    this.removeLoadingTag(Tags.PostBooking);
    throw e;
  }
  _updateVisitorList(attendees) {
    const visitors = attendees.filter((user) => user.is_external);
    if (!visitors?.length)
      return;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", unique([
      ...old_visitors.filter((_) => !_.includes(_.email)),
      ...visitors.map((_) => `${_.email}|${_.name}|${_.organisation}`)
    ]));
  }
};
_EventFormService.\u0275fac = function EventFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventFormService)();
};
_EventFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventFormService, factory: _EventFormService.\u0275fac, providedIn: "root" });
var EventFormService = _EventFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/form-fields/src/lib/duration-field.component.ts
var _c06 = ["*"];
var _forTrack02 = ($index, $item) => $item.id;
function DurationFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.selected == null ? null : ctx_r0.selected.date, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function DurationFieldComponent_For_11_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r3.date, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function DurationFieldComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DurationFieldComponent_For_11_Conditional_2_Conditional_4_Template, 3, 5, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", option_r3.date ? \u0275\u0275pipeBind2(3, 4, option_r3.date, option_r3.id >= 24 * 60 ? "mediumDate" : ctx_r0.time_format) + " (" : "", "", option_r3.name, "", option_r3.date ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz ? 4 : -1);
  }
}
function DurationFieldComponent_For_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function DurationFieldComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function DurationFieldComponent_For_11_Template_button_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(option_r3.id));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275conditionalCreate(2, DurationFieldComponent_For_11_Conditional_2_Template, 5, 7, "div", 10);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DurationFieldComponent_For_11_Conditional_5_Template, 2, 0, "icon", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.force() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.force());
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.selected == null ? null : ctx_r0.selected.id) === option_r3.id ? 5 : -1);
  }
}
var _DurationFieldComponent = class _DurationFieldComponent {
  constructor() {
    this.max = input(240);
    this.min = input(30);
    this.step = input(15);
    this.time = input(void 0);
    this.disabled = model(void 0);
    this.custom_options = input([]);
    this.force = input(void 0);
    this.use_24hr = input(false);
    this.timezone = input("");
    this.duration = 60;
    this.duration_options = [];
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get time_format() {
    return this.use_24hr() ? "HH : mm" : "h : mm a";
  }
  get selected() {
    return this.duration_options.find((_) => _.id === this.duration);
  }
  get tz() {
    const tz = this.timezone();
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  ngOnInit() {
    this.duration_options = this.generateDurationOptions(this.max(), this.min(), this.step());
    this._updateOption();
  }
  ngOnChanges(changes) {
    if (changes.max || changes.min || changes.step || changes.time || changes.custom_options) {
      this.duration_options = this.generateDurationOptions(this.max(), this.min(), this.step());
      this._updateOption();
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.duration = new_value;
    if (this._onChange) {
      this._onChange(+new_value);
    }
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.duration = value;
    this._updateOption();
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
  generateDurationOptions(max, min, step) {
    const blocks = [];
    let time = min;
    const timeValue = this.time();
    const date = timeValue ? timeValue : null;
    for (const option of this.custom_options()) {
      blocks.push({
        id: option,
        date: date ? addMinutes(date, option).valueOf() : void 0,
        name: option >= 24 * 60 ? `${formatDuration({
          days: Math.floor(option / (24 * 60))
        })}` : `${formatDuration({
          hours: Math.floor(option / 60),
          minutes: option % 60
        })}`
      });
    }
    while (time <= max) {
      blocks.push({
        id: time,
        date: date ? addMinutes(date, time).valueOf() : void 0,
        name: time === 0 ? formatDuration({ minutes: 0 }, { zero: true }) : time >= 24 * 60 ? `${formatDuration({
          days: Math.floor(time / (24 * 60))
        })}` : `${formatDuration({
          hours: Math.floor(Math.abs(time) / 60),
          minutes: time % 60
        })}`
      });
      time += step;
    }
    blocks.sort((a, b) => a.id - b.id);
    return blocks;
  }
  _updateOption() {
    if (!this.duration_options?.length)
      return;
    const idx = this.duration_options.findIndex((_) => _.id === this.duration);
    if (idx < 0)
      this.setValue(this.min());
  }
};
_DurationFieldComponent.\u0275fac = function DurationFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DurationFieldComponent)();
};
_DurationFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DurationFieldComponent, selectors: [["a-duration-field"], ["duration-field"]], inputs: { max: [1, "max"], min: [1, "min"], step: [1, "step"], time: [1, "time"], disabled: [1, "disabled"], custom_options: [1, "custom_options"], force: [1, "force"], use_24hr: [1, "use_24hr"], timezone: [1, "timezone"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DurationFieldComponent),
    multi: true
  }
]), \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c06, decls: 14, vars: 11, consts: [["menu", "matMenu"], ["duration-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], [1, "text-2xl"], [1, "max-h-60", "min-w-[18rem]"], ["mat-menu-item", "", 1, "text-left"], ["mat-menu-item", "", 1, "text-left", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, "ml-2", "text-2xl"]], template: function DurationFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DurationFieldComponent_Conditional_5_Template, 3, 5, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-menu", 6, 0);
    \u0275\u0275repeaterCreate(10, DurationFieldComponent_For_11_Template, 6, 3, "button", 7, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275projection(13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r4 = \u0275\u0275reference(9);
    \u0275\u0275classProp("opacity-30", ctx.disabled());
    \u0275\u0275property("disabled", ctx.disabled())("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", (ctx.selected == null ? null : ctx.selected.date) ? \u0275\u0275pipeBind2(4, 8, ctx.selected == null ? null : ctx.selected.date, ctx.selected.id >= 24 * 60 ? "mediumDate" : ctx.time_format) + " (" : "", "", ctx.selected == null ? null : ctx.selected.name, "", (ctx.selected == null ? null : ctx.selected.date) ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.timezone() && ctx.tz ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.duration_options);
  }
}, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, CommonModule, DatePipe, IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */"] });
var DurationFieldComponent = _DurationFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationFieldComponent, [{
    type: Component,
    args: [{ selector: "a-duration-field,duration-field", template: `
        <button
            duration-field
            class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border px-2"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            matRipple
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{
                        selected?.date
                            ? (selected?.date
                                  | date
                                      : (selected.id >= 24 * 60
                                            ? 'mediumDate'
                                            : time_format)) + ' ('
                            : ''
                    }}{{ selected?.name }}{{ selected?.date ? ')' : '' }}
                </div>
                @if (timezone() && tz) {
                    <div class="truncate text-xs opacity-30">
                        {{ selected?.date | date: time_format + ' (z)' : tz }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-60 min-w-[18rem]">
            @for (option of duration_options; track option.id) {
                <button
                    mat-menu-item
                    class="text-left"
                    (click)="setValue(option.id)"
                >
                    <div class="flex items-center justify-between">
                        @if (!force()) {
                            <div class="flex flex-col leading-tight">
                                <div class="truncate">
                                    {{
                                        option.date
                                            ? (option.date
                                                  | date
                                                      : (option.id >= 24 * 60
                                                            ? 'mediumDate'
                                                            : time_format)) +
                                              ' ('
                                            : ''
                                    }}{{ option.name
                                    }}{{ option.date ? ')' : '' }}
                                </div>
                                @if (timezone() && tz) {
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            option.date
                                                | date
                                                    : time_format + ' (z)'
                                                    : tz
                                        }}
                                    </div>
                                }
                            </div>
                        }
                        <div>{{ force() }}</div>
                        @if (selected?.id === option.id) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
        </mat-menu>
        <mat-error><ng-content /></mat-error>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DurationFieldComponent),
        multi: true
      }
    ], imports: [MatMenuModule, MatFormFieldModule, CommonModule, IconComponent], styles: ["/* angular:styles/component:css;82179a093a1237a0219e0de14f115a8c6a107062508b871f4aa73c902619b2f8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/duration-field.component.ts */\n:host {\n  width: 100%;\n}\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DurationFieldComponent, { className: "DurationFieldComponent", filePath: "libs/form-fields/src/lib/duration-field.component.ts", lineNumber: 122 });
})();

// libs/explore/src/lib/explore-space-info.component.ts
var _c07 = (a0) => ({ count: a0 });
function ExploreSpaceInfoComponent_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.space.images[0]);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.available_until, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, "COMMON.PEOPLE_COUNT", \u0275\u0275pureFunction1(5, _c07, ctx_r1.space.capacity), ctx_r1.space.capacity), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r3, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 15);
    \u0275\u0275repeaterCreate(1, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_For_2_Template, 2, 1, "li", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.space.features);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const host_r4 = \u0275\u0275pipeBind1(2, 5, \u0275\u0275pipeBind1(1, 3, ctx_r1.next().host));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.current() ? "Current" : "Upcoming", " booking ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.next().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (host_r4 == null ? null : host_r4.name) || ctx_r1.next().host, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon");
    \u0275\u0275text(2, "alarm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Free ", ctx_r1.next().date > ctx_r1.now() ? "until" : "at", " ", \u0275\u0275pipeBind2(5, 2, ctx_r1.next().date > ctx_r1.now() ? ctx_r1.next().date : ctx_r1.next().date_end, "shortTime"), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6);
    \u0275\u0275conditionalCreate(4, ExploreSpaceInfoComponent_ng_template_2_Conditional_4_Template, 1, 1, "img", 7)(5, ExploreSpaceInfoComponent_ng_template_2_Conditional_5_Template, 1, 0, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "div", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ExploreSpaceInfoComponent_ng_template_2_Conditional_11_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12)(13, "h4", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template, 6, 7, "div", 14);
    \u0275\u0275conditionalCreate(16, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template, 3, 0, "ul", 15);
    \u0275\u0275conditionalCreate(17, ExploreSpaceInfoComponent_ng_template_2_Conditional_17_Template, 10, 7);
    \u0275\u0275conditionalCreate(18, ExploreSpaceInfoComponent_ng_template_2_Conditional_18_Template, 6, 5, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("-translate-x-full", ctx_r1.x_pos === "end")("-translate-y-full", ctx_r1.y_pos === "bottom");
    \u0275\u0275property("id", ctx_r1.space == null ? null : ctx_r1.space.id);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-neutral", ctx_r1.space.images[0])("h-32", ctx_r1.space.images[0])("h-8", !ctx_r1.space.images[0]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.space.images[0] ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("text-light rounded-sm border border-white p-1 px-2 capitalize shadow-sm " + ctx_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 23, ctx_r1.status === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(9, 21, ctx_r1.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.status !== "not-bookable" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space.display_name || ctx_r1.space.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.space.capacity >= 0 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.space.features == null ? null : ctx_r1.space.features.length) > 0 && !ctx_r1.hide_features() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.show_event_details() && ctx_r1.next() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.next() ? 18 : -1);
  }
}
var _ExploreSpaceInfoComponent = class _ExploreSpaceInfoComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this.space = this._details.space;
    this.events = this._details.events;
    this.now = signal(Date.now());
    this.next = signal(null);
    this.current = computed(() => this.next() ? this.next()?.date <= Date.now() && this.next()?.date_end > Date.now() : false);
    this.show_event_details = settingSignal("explore.show_event_details", true);
    this.status = this._details.status;
    this.hide_features = settingSignal("spaces.hide_features", false);
  }
  ngOnInit() {
    this.timeout("update_offset", () => this.updateOffset(), 200);
    const events = (this.events || []).sort((a, b) => a.date - b.date).filter((i) => i.date_end > Date.now() && isSameDay(i.date, Date.now()));
    this.next.set(events[0]);
    this.interval("time", () => this.now.set(Date.now()), 5e3);
  }
  updateOffset() {
    const pos = this._element.nativeElement.getBoundingClientRect();
    this.x_pos = pos.x < document.body.clientWidth / 2 ? "start" : "end";
    this.y_pos = pos.y < document.body.clientHeight / 2 ? "top" : "bottom";
  }
  get available_until() {
    return "";
  }
};
_ExploreSpaceInfoComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ExploreSpaceInfoComponent_BaseFactory;
  return function ExploreSpaceInfoComponent_Factory(__ngFactoryType__) {
    return (\u0275ExploreSpaceInfoComponent_BaseFactory || (\u0275ExploreSpaceInfoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreSpaceInfoComponent)))(__ngFactoryType__ || _ExploreSpaceInfoComponent);
  };
})();
_ExploreSpaceInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSpaceInfoComponent, selectors: [["explore-space-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 6, consts: [["tooltip", ""], ["space_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "hidden", "h-full", "w-full", "cursor-pointer", "sm:block", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "space-info", 1, "border-base-300", "bg-base-100", "pointer-events-none", "absolute", "top-0", "left-0", "w-64", "transform", "overflow-hidden", "rounded-sm", "border", "shadow-sm", 3, "id"], [1, "arrow"], [1, "relative"], [1, "bg-opacity-20", "relative", "flex", "w-full", "items-center", "justify-center", "overflow-hidden"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "bg-base-200", "absolute", "inset-0", "opacity-30"], [1, "absolute", "top-2", "left-2", "flex", "flex-wrap", "text-sm"], ["status", ""], ["available-until", ""], [1, "flex", "flex-col", "px-2", "py-4"], [1, "mb-2", "px-2", "text-xl", "font-medium"], ["capacity", "", 1, "mb-2", "flex", "items-center", "space-x-2", "px-2", "text-base"], [1, "flex", "flex-wrap"], [1, "mt-1", "flex", "items-center", "space-x-2", "px-2", "text-base"], [1, "bg-base-200", "m-1", "rounded-2xl", "px-2", "py-1", "text-xs", "font-medium"], [1, "rounded-sm", "px-2", "pb-1", "text-xs", "opacity-30"], [1, "border-base-300", "mb-1", "flex", "flex-col", "rounded-lg", "border", "p-2"], [1, "text-xs", "opacity-50"]], template: function ExploreSpaceInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2, 0);
    \u0275\u0275listener("mouseenter", function ExploreSpaceInfoComponent_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateOffset());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ExploreSpaceInfoComponent_ng_template_2_Template, 19, 25, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const space_tooltip_r5 = \u0275\u0275reference(3);
    \u0275\u0275property("content", space_tooltip_r5)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true);
    \u0275\u0275attribute("id", (ctx.space == null ? null : ctx.space.map_id) || (ctx.space == null ? null : ctx.space.id));
  }
}, dependencies: [
  AsyncPipe,
  DatePipe,
  UpperCasePipe,
  IconComponent,
  CustomTooltipComponent,
  TranslatePipe,
  AuthenticatedImageDirective,
  UserPipe
], styles: ["\n\n[status][_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */"] });
var ExploreSpaceInfoComponent = _ExploreSpaceInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSpaceInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-space-info", template: `
        <div
            #tooltip
            customTooltip
            [content]="space_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [attr.id]="space?.map_id || space?.id"
            (mouseenter)="updateOffset()"
            class="pointer-events-auto relative hidden h-full w-full cursor-pointer sm:block"
        ></div>
        <ng-template #space_tooltip>
            <div
                name="space-info"
                [id]="space?.id"
                class="border-base-300 bg-base-100 pointer-events-none absolute top-0 left-0 w-64 transform overflow-hidden rounded-sm border shadow-sm"
                [class.-translate-x-full]="x_pos === 'end'"
                [class.-translate-y-full]="y_pos === 'bottom'"
            >
                <div class="arrow"></div>
                <div class="relative">
                    <div
                        class="bg-opacity-20 relative flex w-full items-center justify-center overflow-hidden"
                        [class.bg-neutral]="space.images[0]"
                        [class.h-32]="space.images[0]"
                        [class.h-8]="!space.images[0]"
                    >
                        @if (space.images[0]) {
                            <img
                                auth
                                [source]="space.images[0]"
                                class="min-h-full min-w-full object-cover"
                            />
                        } @else {
                            <div
                                class="bg-base-200 absolute inset-0 opacity-30"
                            ></div>
                        }
                    </div>
                    <div class="absolute top-2 left-2 flex flex-wrap text-sm">
                        <div
                            status
                            [class]="
                                'text-light rounded-sm border border-white p-1 px-2 capitalize shadow-sm ' +
                                status
                            "
                        >
                            {{
                                (status === 'not-bookable'
                                    ? 'COMMON.STATUS_NOT_BOOKABLE'
                                    : 'COMMON.STATUS_' + (status | uppercase)
                                ) | translate
                            }}
                        </div>
                        @if (status !== 'not-bookable') {
                            <div available-until>
                                {{ available_until }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-col px-2 py-4">
                        <h4 class="mb-2 px-2 text-xl font-medium">
                            {{ space.display_name || space.name }}
                        </h4>
                        @if (space.capacity >= 0) {
                            <div
                                capacity
                                class="mb-2 flex items-center space-x-2 px-2 text-base"
                            >
                                <icon>group</icon>
                                <div>
                                    {{
                                        'COMMON.PEOPLE_COUNT'
                                            | translate
                                                : { count: space.capacity }
                                                : space.capacity
                                    }}
                                </div>
                            </div>
                        }
                        @if (space.features?.length > 0 && !hide_features()) {
                            <ul class="flex flex-wrap">
                                @for (
                                    feature of space.features;
                                    track feature
                                ) {
                                    <li
                                        class="bg-base-200 m-1 rounded-2xl px-2 py-1 text-xs font-medium"
                                    >
                                        {{ feature }}
                                    </li>
                                }
                            </ul>
                        }
                        @if (show_event_details() && next()) {
                            @let host = next().host | user | async;
                            <div
                                class="rounded-sm px-2 pb-1 text-xs opacity-30"
                            >
                                {{ current() ? 'Current' : 'Upcoming' }}
                                booking
                            </div>
                            <div
                                class="border-base-300 mb-1 flex flex-col rounded-lg border p-2"
                            >
                                <h3>{{ next().title }}</h3>
                                <div class="text-xs opacity-50">
                                    {{ host?.name || next().host }}
                                </div>
                            </div>
                        }
                        @if (next()) {
                            <div
                                class="mt-1 flex items-center space-x-2 px-2 text-base"
                            >
                                <icon>alarm</icon>
                                <div>
                                    Free
                                    {{ next().date > now() ? 'until' : 'at' }}
                                    {{
                                        (next().date > now()
                                            ? next().date
                                            : next().date_end
                                        ) | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `, imports: [
      AsyncPipe,
      DatePipe,
      UpperCasePipe,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe,
      AuthenticatedImageDirective,
      UserPipe
    ], styles: ["/* angular:styles/component:css;49d3d38e3c811a7af0b23c1a4eab605a060569aead88ea7b8da86c409617cda8;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-space-info.component.ts */\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSpaceInfoComponent, { className: "ExploreSpaceInfoComponent", filePath: "libs/explore/src/lib/explore-space-info.component.ts", lineNumber: 209 });
})();

// libs/explore/src/lib/explore-book-qr.component.ts
var _c08 = (a0) => ({ name: a0 });
var DEFAULT_PATH = `workplace/#/explore?space={{id}}`;
var _ExploreBookQrComponent = class _ExploreBookQrComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.space = this._data.space;
    this.qr_code = generateQRCode(`${location.origin}${(this._settings.get("app.booking_qr_path") || DEFAULT_PATH).replace("{{id}}", this._data.space?.email)}`);
  }
};
_ExploreBookQrComponent.\u0275fac = function ExploreBookQrComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreBookQrComponent)();
};
_ExploreBookQrComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookQrComponent, selectors: [["explore-book-qr"]], decls: 10, vars: 7, consts: [[1, "truncate"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"], [1, "m-auto", "h-64", "w-64", 3, "src"]], template: function ExploreBookQrComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2", 0);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 1);
    \u0275\u0275elementStart(5, "button", 2)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "main", 3);
    \u0275\u0275element(9, "img", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "EXPLORE.BOOK_RESOURCE", \u0275\u0275pureFunction1(5, _c08, ctx.space == null ? null : ctx.space.name)), " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx.qr_code, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [TranslatePipe, MatRippleModule, MatRipple, IconComponent], encapsulation: 2 });
var ExploreBookQrComponent = _ExploreBookQrComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreBookQrComponent, [{
    type: Component,
    args: [{ selector: "explore-book-qr", template: `
        <header>
            <h2 class="truncate">
                {{ 'EXPLORE.BOOK_RESOURCE' | translate: { name: space?.name } }}
            </h2>
            <div class="flex-1"></div>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="p-4">
            <img class="m-auto h-64 w-64" [src]="qr_code" />
        </main>
    `, imports: [TranslatePipe, MatRippleModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookQrComponent, { className: "ExploreBookQrComponent", filePath: "libs/explore/src/lib/explore-book-qr.component.ts", lineNumber: 30 });
})();

// libs/explore/src/lib/explore-booking-modal.component.ts
function ExploreBookingModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "a-user-search-field", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-info", ctx_r1.alert()[0] === "info")("text-info-content", ctx_r1.alert()[0] === "info")("bg-warning", ctx_r1.alert()[0] === "warn")("text-warning-content", ctx_r1.alert()[0] === "warn")("bg-error", ctx_r1.alert()[0] === "closed")("text-error-content", ctx_r1.alert()[0] === "closed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert()[1], " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" at ", \u0275\u0275pipeBind2(1, 1, ctx_r1.form.value.date, ctx_r1.time_format), " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275conditionalCreate(7, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Conditional_7_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "FORM.DATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, ctx_r1.form.value.date, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.form.value.all_day ? 7 : -1);
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "FORM.DURATION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("time", ctx_r1.form.value.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr_time);
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-checkbox", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 10);
    \u0275\u0275element(8, "input", 11);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_12_Template, 8, 3, "div", 8);
    \u0275\u0275elementStart(13, "div", 8)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_19_Template, 2, 13, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14);
    \u0275\u0275conditionalCreate(21, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Template, 8, 8, "div", 15);
    \u0275\u0275conditionalCreate(22, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_22_Template, 5, 6, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_23_Template, 4, 3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "EXPLORE.BOOKING_TITLE_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_book_for_others ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 11, "EXPLORE.BOOKING_SPACE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.form.controls.resources == null ? null : ctx_r1.form.controls.resources.value[0] == null ? null : ctx_r1.form.controls.resources.value[0].display_name) || (ctx_r1.form.controls.resources == null ? null : ctx_r1.form.controls.resources.value[0] == null ? null : ctx_r1.form.controls.resources.value[0].name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r1.alert()) == null ? null : tmp_7_0[0]) ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.date ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.duration ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_all_day ? 23 : -1);
  }
}
function ExploreBookingModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ExploreBookingModalComponent_Conditional_6_Conditional_0_Template, 24, 13, "main", 5);
    \u0275\u0275elementStart(1, "footer", 6)(2, "button", 7);
    \u0275\u0275listener("click", function ExploreBookingModalComponent_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.form ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.SAVE"), " ");
  }
}
function ExploreBookingModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "CALENDAR_EVENT.CHECKING_AVAILABILITY"));
  }
}
var _ExploreBookingModalComponent = class _ExploreBookingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._router = inject(Router);
    this.loading = toSignal(this._event_form.loading$);
    this.alert = signal(this._data.alert);
  }
  get form() {
    return this._event_form.form;
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 4 * 60;
  }
  get can_book_for_others() {
    return this._settings.get("app.events.can_book_for_others");
  }
  get use_24hr_time() {
    return this._settings.get("app.use_24_hour_time");
  }
  get time_format() {
    return this._settings.time_format;
  }
  get allow_all_day() {
    return this._settings.get("app.events.allow_all_day");
  }
  ngOnInit() {
    this._event_form.newForm();
    this.form.patchValue({
      resources: [this._data.space],
      host: currentUser().email,
      organiser: currentUser()
    });
    this.form.valueChanges.subscribe((v) => {
      this._checkAllDay(v.all_day);
    });
    this._checkAllDay(this.form.value.all_day);
  }
  async save() {
    await this._event_form.postForm().catch((_) => {
      notifyError(_);
      throw _;
    });
    if (this._settings.app_name.toLowerCase().includes("workplace")) {
      this._router.navigate(["/book", "meeting", "success"]);
    } else {
      notifySuccess(i18n("EXPLORE.BOOKING_SUCCESS"));
    }
    this._dialog_ref.close();
  }
  _checkAllDay(value) {
    if (value) {
      this.form.controls.duration.disable({ emitEvent: false });
    } else {
      this.form.controls.duration.enable({ emitEvent: false });
    }
  }
};
_ExploreBookingModalComponent.\u0275fac = function ExploreBookingModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreBookingModalComponent)();
};
_ExploreBookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookingModalComponent, selectors: [["explore-booking-modal"]], decls: 8, vars: 5, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["load", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "max-w-[85vw]", "px-4", 3, "formGroup"], [1, "border-base-300", "flex", "justify-end", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "mx-2", "w-32", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "Booking Title"], ["name", "space", 1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], [1, "-mt-2", "mb-4", "rounded-sm", "px-2", "py-1", "text-xs", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], [1, "flex", "flex-wrap", "sm:space-x-4"], [1, "flex", "w-full", "min-w-48", "flex-1", "flex-col", "sm:w-auto"], [1, "flex", "w-full", "flex-col", "sm:w-auto"], [1, "-mt-2", "mb-2", "flex", "justify-end"], ["for", "host"], ["name", "host", "formControlName", "organiser", 1, "mb-4"], [1, "-mt-2", "mb-4", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], ["formControlName", "duration", 1, "w-full", 3, "time", "max", "use_24hr"], ["formControlName", "all_day"], [1, "m-4", 3, "diameter"]], template: function ExploreBookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275conditionalCreate(5, ExploreBookingModalComponent_Conditional_5_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ExploreBookingModalComponent_Conditional_6_Template, 5, 4)(7, ExploreBookingModalComponent_Conditional_7_Template, 5, 4, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "EXPLORE.BOOKING_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
  }
}, dependencies: [
  DatePipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatCheckboxModule,
  MatCheckbox,
  DurationFieldComponent,
  UserSearchFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  IconComponent,
  MatDialogModule,
  MatDialogClose
], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  max-width: calc(100vw + 100%);\n}\n[load][_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=explore-booking-modal.component.css.map */"] });
var ExploreBookingModalComponent = _ExploreBookingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreBookingModalComponent, [{
    type: Component,
    args: [{ selector: "explore-booking-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'EXPLORE.BOOKING_HEADER' | translate }}
            </h2>
            <div class="flex-1"></div>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            @if (form) {
                <main [formGroup]="form" class="max-w-[85vw] px-4">
                    <div class="flex flex-col">
                        <label for="title">Title<span>*</span>:</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                placeholder="Booking Title"
                            />
                            <mat-error>{{
                                'EXPLORE.BOOKING_TITLE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    @if (can_book_for_others) {
                        <div class="flex flex-col">
                            <label for="host"
                                >{{ 'FORM.HOST' | translate
                                }}<span>*</span>:</label
                            >
                            <a-user-search-field
                                name="host"
                                formControlName="organiser"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-col">
                        <label
                            >{{ 'EXPLORE.BOOKING_SPACE' | translate }}:</label
                        >
                        <div
                            name="space"
                            class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                        >
                            {{
                                form.controls.resources?.value[0]
                                    ?.display_name ||
                                    form.controls.resources?.value[0]?.name
                            }}
                        </div>
                        @if (alert()?.[0]) {
                            <div
                                class="-mt-2 mb-4 rounded-sm px-2 py-1 text-xs"
                                [class.bg-info]="alert()[0] === 'info'"
                                [class.text-info-content]="
                                    alert()[0] === 'info'
                                "
                                [class.bg-warning]="alert()[0] === 'warn'"
                                [class.text-warning-content]="
                                    alert()[0] === 'warn'
                                "
                                [class.bg-error]="alert()[0] === 'closed'"
                                [class.text-error-content]="
                                    alert()[0] === 'closed'
                                "
                            >
                                {{ alert()[1] }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-wrap sm:space-x-4">
                        @if (form.controls.date) {
                            <div
                                class="flex w-full min-w-48 flex-1 flex-col sm:w-auto"
                            >
                                <label>{{ 'FORM.DATE' | translate }}:</label>
                                <div
                                    class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                                >
                                    {{ form.value.date | date: 'mediumDate' }}
                                    @if (!form.value.all_day) {
                                        at
                                        {{
                                            form.value.date | date: time_format
                                        }}
                                    }
                                </div>
                            </div>
                        }
                        @if (form.controls.duration) {
                            <div class="flex w-full flex-col sm:w-auto">
                                <label
                                    >{{ 'FORM.DURATION' | translate }}:</label
                                >
                                <a-duration-field
                                    formControlName="duration"
                                    [time]="form.value.date"
                                    [max]="max_duration"
                                    class="w-full"
                                    [use_24hr]="use_24hr_time"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                    @if (allow_all_day) {
                        <div class="-mt-2 mb-2 flex justify-end">
                            <mat-checkbox formControlName="all_day">
                                {{ 'COMMON.ALL_DAY' | translate }}
                            </mat-checkbox>
                        </div>
                    }
                </main>
            }
            <footer class="border-base-300 flex justify-end border-t p-2">
                <button btn matRipple class="mx-2 w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        } @else {
            <div load class="flex h-64 flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ 'CALENDAR_EVENT.CHECKING_AVAILABILITY' | translate }}</p>
            </div>
        }
    `, imports: [
      DatePipe,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      DurationFieldComponent,
      UserSearchFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      IconComponent,
      MatDialogModule
    ], styles: ["/* angular:styles/component:css;92dc203883c2e157fe6d9f315fef4a02ef7ca3572d438813349331b81da507b4;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-booking-modal.component.ts */\nheader {\n  max-width: calc(100vw + 100%);\n}\n[load] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=explore-booking-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookingModalComponent, { className: "ExploreBookingModalComponent", filePath: "libs/explore/src/lib/explore-booking-modal.component.ts", lineNumber: 199 });
})();

// libs/explore/src/lib/explore-icon.component.ts
var _ExploreIconComponent = class _ExploreIconComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this.icon = this._details.icon || { content: "done" };
    this.color = this._details.color || "var(--info)";
    this.text_color = this._details.text_color || "var(--info-content)";
  }
};
_ExploreIconComponent.\u0275fac = function ExploreIconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreIconComponent)();
};
_ExploreIconComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreIconComponent, selectors: [["explore-icon"]], decls: 2, vars: 5, consts: [[1, "border-base-200", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "shadow-sm"], [1, "text-xl", 3, "icon"]], template: function ExploreIconComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "icon", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("background-color", ctx.color)("color", ctx.text_color);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx.icon);
  }
}, dependencies: [IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=explore-icon.component.css.map */"] });
var ExploreIconComponent = _ExploreIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreIconComponent, [{
    type: Component,
    args: [{ selector: `explore-icon`, template: `
        <div
            class="border-base-200 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm"
            [style.background-color]="color"
            [style.color]="text_color"
        >
            <icon [icon]="icon" class="text-xl"></icon>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;8d603d396af10dde7f45bddce919375913a5c5b09729ee8e6482881d125d62c7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-icon.component.ts */\n:host {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=explore-icon.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreIconComponent, { className: "ExploreIconComponent", filePath: "libs/explore/src/lib/explore-icon.component.ts", lineNumber: 30 });
})();

// libs/explore/src/lib/explore-spaces.service.ts
var DEFAULT_COLOURS = {
  free: "#43a047",
  pending: "#ffb300",
  reserved: "#e65100",
  busy: "#e53935",
  "signs-of-life": "#1565c0",
  "not-bookable": "#757575",
  unknown: "#757575"
};
var _ExploreSpacesService = class _ExploreSpacesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._bookings = {};
    this._statuses = {};
    this._presence = {};
    this._panning = true;
    this._last_action = "";
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => nc(bld.id, `room_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.room_alerts = this._org.active_building.pipe(filter((bld) => !!bld), switchMap(() => nc(this._org.organisation.id, `room_alerts`).pipe(catchError(() => of({ details: {} })))), map((_) => _.details || {}), shareReplay(1));
    this._bind = combineLatest([
      this._state.spaces,
      this._state.options
    ]).pipe(filter(([_, { is_public }]) => !is_public), map(([list]) => {
      this.unsubWith("b-");
      this.unsubWith("s-");
      this.unsubWith("c-");
      this._statuses = {};
      if (!list?.length)
        return;
      for (const space of list) {
        const mod = wh(space.id, "Bookings");
        let binding = mod.variable("bookings");
        this.subscription(`b-${space.id}`, binding.bindThenSubscribe((d) => this.handleBookingsChange(list, space, d)));
        binding = mod.variable("status");
        this.subscription(`s-${space.id}`, binding.bindThenSubscribe((d) => this.handleStatusChange(list, space, d)));
        binding = mod.variable("presence");
        this.subscription(`c-${space.id}`, binding.bindThenSubscribe((d) => this.handlePresenceChange(list, space, d)));
      }
      this.updateActions(list);
      this._updateHoverElements(list);
    }));
    this.subscription("spaces", this._bind.subscribe());
  }
  async bookSpace(space, force = false) {
    if (this._panning && this._last_action === "down")
      return;
    const booking_rules = await nextValueFrom(this.booking_rules);
    const room_alerts = await nextValueFrom(this.room_alerts);
    const { hidden } = rulesForResource({
      date: Date.now(),
      duration: 60,
      resource: space,
      host: currentUser()
    }, booking_rules) || {};
    if (hidden) {
      return notifyError(i18n("EXPLORE.SPACES_PERMISSIONS_ERROR"));
    }
    if (this._statuses[space.id] !== "free" && !force || !space.bookable) {
      return notifyError(i18n("EXPLORE.SPACES_UNAVAILABLE_ERROR", {
        name: space.display_name || space.name
      }));
    }
    if (room_alerts[space.id]?.[0] === "closed") {
      return notifyError(`${room_alerts[space.id][1]}`);
    }
    if (this._settings.get("app.events.booking_unavailable")) {
      return this._event_form.openEventLinkModal();
    }
    if (space.room_booking_url) {
      const [email_start, email_end] = space.email.split("@");
      const url = space.room_booking_url.replace(/\{id\}/g, encodeURIComponent(space.id)).replace(/\{name\}/g, encodeURIComponent(space.display_name || space.name)).replace(/\{map_id\}/g, encodeURIComponent(space.map_id)).replace(/\{email\}/g, encodeURIComponent(space.email)).replace(/\{email_start\}/g, encodeURIComponent(email_start || "")).replace(/\{email_end\}/g, encodeURIComponent(email_end || ""));
      window.open(url, "_blank", "noopener noreferer");
      return;
    }
    this._event_form.newForm();
    this._event_form.form.patchValue({
      host: currentUser()?.email,
      resources: [space]
    });
    this._dialog.open(this._settings.get("app.explore.show_booking_qr") ? ExploreBookQrComponent : ExploreBookingModalComponent, {
      data: { space, alert: room_alerts[space.id] }
    });
  }
  handleBookingsChange(spaces, space, bookings) {
    if (!bookings)
      return;
    this._bookings[space.id] = bookings.map((i) => new CalendarEvent(i));
    this.timeout("update_hover_els", () => this._updateHoverElements(spaces), 100);
  }
  handleStatusChange(spaces, space, status) {
    if (space.bookable)
      this._statuses[space.id] = status || "free";
    else
      delete this._statuses[space.id];
    this.timeout("update_statuses", () => {
      this.clearTimeout("update_hover_els");
      this._updateStatus(spaces);
      this._updateHoverElements(spaces);
    }, 100);
  }
  handlePresenceChange(spaces, space, presence) {
    this._presence[space.id] = presence;
    this.timeout("update_icons", () => this._updateIcons(spaces), 100);
  }
  async _updateStatus(spaces) {
    const style_map = {};
    const colours = this._settings.get("app.explore.colors") || {};
    for (const space of spaces) {
      if (!this._statuses[space.id])
        continue;
      const status = this._statuses[space.id];
      style_map[`#${space.map_id}`] = {
        fill: colours[`space-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
        opacity: 0.6
      };
    }
    this._state.setStyles("spaces", style_map);
  }
  _updateHoverElements(spaces) {
    const features = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      features.push({
        location: space.map_id,
        full_size: true,
        no_scale: true,
        content: ExploreSpaceInfoComponent,
        z_index: 10,
        data: {
          space: new Space(space),
          events: this._bookings[space.id],
          status: this._statuses[space.id] || "not-bookable"
        }
      });
    }
    this._state.setFeatures("spaces", features);
  }
  _updateIcons(spaces) {
    if (!this._settings.get("app.show_presence_indicators"))
      return;
    const features = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      features.push({
        location: space.map_id,
        content: ExploreIconComponent,
        data: {
          icon: {
            class: "material-symbols-rounded",
            content: "sensor_occupied"
          },
          color: this._presence[space.id] ? "var(--success)" : "var(--base-content)",
          text_color: this._presence[space.id] ? "var(--success-content)" : "var(--base-100)"
        },
        z_index: 98
      });
    }
    this._state.setFeatures("spaces-presence", features);
  }
  updateActions(spaces) {
    const actions = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      for (const action of ["mousedown", "touchstart"]) {
        actions.push({
          id: space.map_id,
          action,
          priority: 5,
          callback: () => {
            this._panning = false;
            this.timeout("panning", () => this._panning = true, 300);
            this._last_action = "down";
          }
        });
      }
      for (const action of ["mouseup", "touchend"]) {
        actions.push({
          id: space.map_id,
          action,
          priority: 5,
          callback: () => {
            this.bookSpace(space);
            this._last_action = "up";
          }
        });
      }
    }
    this.timeout("set-actions", () => this._state.setActions("spaces", actions), 50);
  }
};
_ExploreSpacesService.\u0275fac = function ExploreSpacesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSpacesService)();
};
_ExploreSpacesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSpacesService, factory: _ExploreSpacesService.\u0275fac });
var ExploreSpacesService = _ExploreSpacesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSpacesService, [{
    type: Injectable
  }], () => [], null);
})();

export {
  addSeconds,
  startOfMonth,
  endOfMinute,
  isSameMonth,
  setHours,
  setMinutes,
  queryCalendars,
  queryCalendarAvailability,
  querySpaceFreeBusy,
  DateCalendarComponent,
  DateFieldComponent,
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatAutocompleteModule,
  UserSearchFieldComponent,
  FindAvailabilityModalComponent,
  searchGuests,
  MapLocation,
  NewUserModalComponent,
  SelectUserModalComponent,
  searchStaff,
  showStaff,
  CounterComponent,
  UserLabelModalComponent,
  UserPipe,
  queryEvents,
  queryAllEvents,
  showEvent,
  saveEvent,
  removeEvent,
  declineEvent,
  checkinEventGuest,
  addEventGuest,
  removeEventGuest,
  getEventMetadata,
  showEventMetadata,
  updateEventMetadata,
  newCalendarEventFromBooking,
  queryBookings,
  bookedResourceList,
  findBookingClashes,
  queryPagedBookings,
  queryAllBookings,
  updateBooking,
  updateBookingInductionStatus,
  saveBooking,
  removeBooking,
  approveBooking,
  approveBookingInstance,
  rejectBooking,
  rejectBookingInstance,
  checkinBooking,
  checkinBookingInstance,
  queryAssetCategories,
  saveAssetCategory,
  deleteAssetCategory,
  queryAssetGroups,
  queryAssetGroupsExtended,
  saveAssetGroup,
  showAssetGroup,
  deleteAssetGroup,
  queryAssets,
  saveAsset,
  showAsset,
  deleteAsset,
  addAssetsInBulk,
  queryAssetPurchaseOrders,
  saveAssetPurchaseOrder,
  showAssetPurchaseOrder,
  deleteAssetPurchaseOrder,
  getGroupsWithAssets,
  showGroupFull,
  removeAssetRequests,
  validateAssetRequestsForResource,
  generateAssetCategoryForm,
  generateAssetPurchaseOrderForm,
  generateAssetGroupForm,
  generateAssetForm,
  AssetStateService,
  generateBookingForm,
  findNearbyFeature,
  loadLockerBanks,
  loadLockers,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  EventFormService,
  DurationFieldComponent,
  ExploreBookQrComponent,
  ExploreBookingModalComponent,
  ExploreIconComponent,
  ExploreSpaceInfoComponent,
  DEFAULT_COLOURS,
  ExploreSpacesService
};
//# sourceMappingURL=chunk-FRCDPIE2.js.map
