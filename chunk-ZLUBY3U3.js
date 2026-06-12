import {
  ActivatedRoute,
  AsyncHandler,
  AuthenticatedImageDirective,
  Booking,
  BookingFormService,
  Bu,
  CalendarEvent,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DEFAULT_COLOURS,
  DateFieldComponent,
  DefaultValueAccessor,
  Desk,
  Dl,
  DurationFieldComponent,
  ElementRef,
  EventFormService,
  ExploreBookQrComponent,
  ExploreBookingModalComponent,
  ExploreDeskInfoComponent,
  ExploreIconComponent,
  ExploreParkingInfoComponent,
  ExploreSpaceInfoComponent,
  ExploreSpacesService,
  ExploreStateService,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Fu,
  Ia,
  IconComponent,
  Injectable,
  Injector,
  Input,
  InteractiveMapComponent,
  LockerGridComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapLocation,
  MapPinComponent,
  MapRadiusComponent,
  MapsPeopleService,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  ParkingService,
  Pt,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SettingsService,
  SettingsToggleComponent,
  SlicePipe,
  Space,
  SpacePipe,
  SpacesService,
  TimeFieldComponent,
  TranslatePipe,
  UserAvatarComponent,
  UserControlsComponent,
  UserSearchFieldComponent,
  ViewChild,
  VirtualKeyboardComponent,
  Xc,
  __spreadProps,
  __spreadValues,
  addDays,
  addMinutes,
  addWeeks,
  afterNextRender,
  alignDateToBookableHours,
  catchError,
  checkinBooking,
  combineLatest,
  computed,
  currentUser,
  current_user,
  d,
  debounceTime,
  debouncedSignal,
  differenceInMilliseconds,
  differenceInMinutes,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  effect,
  endOfDay,
  endOfMinute,
  endOfWeek,
  filter,
  firstTruthyValueFrom,
  firstValueFrom,
  firstValueWhere,
  flatten,
  format,
  formatDistanceToNow,
  getUnixTime,
  i18n,
  inject,
  interval,
  isAfter,
  isBefore,
  isSameDay,
  isWithinBookableHours,
  lastValueFrom,
  loadLockerBanks,
  loadLockers,
  lockerBankFromAsset,
  lockerFromAsset,
  map,
  model,
  newCalendarEventFromBooking,
  notifyError,
  notifySuccess,
  notifyWarn,
  observableFromSignal,
  of,
  openConfirmModal,
  queryBookings,
  queryEvents,
  queryLockerAssetsForZones,
  queryLockerBankAssetsForZones,
  queryParkingSpacesForZones,
  removeBooking,
  removeEvent,
  requestSpacesForZone,
  resource,
  rulesForResource,
  searchStaff,
  setClassMetadata,
  setHours,
  settingSignal,
  shareReplay,
  shiftColorTowards,
  showStaff,
  signal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  switchMap,
  tap,
  toObservable,
  toQueryString,
  toSignal,
  unique,
  untracked,
  updateBooking,
  updateBookingInstance,
  userSignal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
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
} from "./chunk-S4NKVKWG.js";

// apps/workplace/src/app/components/footer-menu.component.ts
var _c0 = () => ["/book", "meeting"];
var _c1 = () => ["/book", "desk"];
var _c2 = () => ["/book", "parking"];
var _c3 = () => ["/book", "parking-request"];
var _c4 = () => ["/book", "visitor"];
var _c5 = () => ["/book", "vip-visitor"];
var _c6 = () => ["/your-bookings"];
var _c7 = () => ["/group-events"];
var _c8 = () => ["/book", "locker"];
var _c9 = () => ["/control"];
var _c10 = () => ["/deals-n-offers"];
var _c11 = () => ["/team-schedule"];
var _c12 = (a0) => [a0];
var _c13 = () => ["/explore"];
function FooterMenuComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "icon", 16);
    \u0275\u0275text(2, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_ROOMS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon", 16);
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_DESKS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "icon", 16);
    \u0275\u0275text(2, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_PARKING"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "icon", 16);
    \u0275\u0275text(2, "local_parking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_PARKING_REQUESTS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "icon", 16);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c4));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_VISITORS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "icon", 16);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_VIP_VISITORS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "icon", 16);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c6));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_SCHEDULE"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "icon", 16);
    \u0275\u0275text(2, "local_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c7));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_EVENTS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12)(1, "icon", 16);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c8));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_LOCKERS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13)(1, "icon", 16);
    \u0275\u0275text(2, "remote_gen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c9));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_CONTROL"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "icon", 16);
    \u0275\u0275text(2, "confirmation_number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c10));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_DEALS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "icon", 16);
    \u0275\u0275text(2, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c11));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.MENU_TEAM_SCHEDULE"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function FooterMenuComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.show_book_items.set(false);
      return \u0275\u0275resetView(ctx_r1.blur_backdrop.set(false));
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275conditionalCreate(2, FooterMenuComponent_Conditional_0_Conditional_2_Template, 6, 5, "a", 4);
    \u0275\u0275conditionalCreate(3, FooterMenuComponent_Conditional_0_Conditional_3_Template, 6, 5, "a", 5);
    \u0275\u0275conditionalCreate(4, FooterMenuComponent_Conditional_0_Conditional_4_Template, 6, 5, "a", 6);
    \u0275\u0275conditionalCreate(5, FooterMenuComponent_Conditional_0_Conditional_5_Template, 6, 5, "a", 7);
    \u0275\u0275conditionalCreate(6, FooterMenuComponent_Conditional_0_Conditional_6_Template, 6, 5, "a", 8);
    \u0275\u0275conditionalCreate(7, FooterMenuComponent_Conditional_0_Conditional_7_Template, 6, 5, "a", 9);
    \u0275\u0275conditionalCreate(8, FooterMenuComponent_Conditional_0_Conditional_8_Template, 6, 5, "a", 10);
    \u0275\u0275conditionalCreate(9, FooterMenuComponent_Conditional_0_Conditional_9_Template, 6, 5, "a", 11);
    \u0275\u0275conditionalCreate(10, FooterMenuComponent_Conditional_0_Conditional_10_Template, 6, 5, "a", 12);
    \u0275\u0275conditionalCreate(11, FooterMenuComponent_Conditional_0_Conditional_11_Template, 6, 5, "a", 13);
    \u0275\u0275conditionalCreate(12, FooterMenuComponent_Conditional_0_Conditional_12_Template, 6, 5, "a", 14);
    \u0275\u0275conditionalCreate(13, FooterMenuComponent_Conditional_0_Conditional_13_Template, 6, 5, "a", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("dark", ctx_r1.dark_mode());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.features().includes("spaces") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("desks") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("parking") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("parking-requests") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("visitor-invite") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_see_vip_visitor() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("schedule") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("group-events") ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("lockers") ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("control") ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("deals-n-offers") ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("team-schedule") ? 13 : -1);
  }
}
function FooterMenuComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 17)(2, "icon", 18);
    \u0275\u0275text(3, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 19);
    \u0275\u0275text(5, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 21);
    \u0275\u0275listener("click", function FooterMenuComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.show_book_items.set(!ctx_r1.show_book_items());
      return \u0275\u0275resetView(ctx_r1.blur_backdrop.set(ctx_r1.show_book_items()));
    });
    \u0275\u0275elementStart(10, "icon", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 23)(13, "icon", 18);
    \u0275\u0275text(14, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "icon", 19);
    \u0275\u0275text(16, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 20);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 24);
    \u0275\u0275element(21, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("dark", ctx_r1.dark_mode());
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c12, ctx_r1.default_page()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, "APP.WORKPLACE.MENU_HOME"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary", ctx_r1.show_book_items())("text-white", ctx_r1.show_book_items())("bg-base-200", !ctx_r1.show_book_items());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_book_items() ? "close" : "add");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !ctx_r1.features().includes("explore"));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c13));
    \u0275\u0275attribute("disabled", !ctx_r1.features().includes("explore"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, "APP.WORKPLACE.MENU_EXPLORE"));
  }
}
var FooterMenuComponent = class _FooterMenuComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.blur_backdrop = model(false, ...ngDevMode ? [{ debugName: "blur_backdrop" }] : (
      /* istanbul ignore next */
      []
    ));
    this.show_book_items = signal(false, ...ngDevMode ? [{ debugName: "show_book_items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dark_mode = signal(false, ...ngDevMode ? [{ debugName: "dark_mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.features = signal([], ...ngDevMode ? [{ debugName: "features" }] : (
      /* istanbul ignore next */
      []
    ));
    this.default_page = signal("/landing", ...ngDevMode ? [{ debugName: "default_page" }] : (
      /* istanbul ignore next */
      []
    ));
    this.vip_visitor_booker_group = signal("", ...ngDevMode ? [{ debugName: "vip_visitor_booker_group" }] : (
      /* istanbul ignore next */
      []
    ));
    this.user = userSignal();
    this.can_see_vip_visitor = computed(() => {
      const features = this.features();
      if (!features.includes("vip-visitor-invite"))
        return false;
      const vip_group = this.vip_visitor_booker_group();
      if (!vip_group)
        return true;
      const groups = this.user().groups;
      return groups.includes(vip_group);
    }, ...ngDevMode ? [{ debugName: "can_see_vip_visitor" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.subscribe(() => {
      this.dark_mode.set(this._settings.get("app.allow_dark_mode") && this._settings.theme === "dark");
      this.features.set(this._settings.get("app.features") || []);
      this.default_page.set(this._settings.get("app.default_route") || "/landing");
      this.vip_visitor_booker_group.set(this._settings.get("vip_visitor_booker_group") || "");
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275FooterMenuComponent_BaseFactory;
      return function FooterMenuComponent_Factory(__ngFactoryType__) {
        return (\u0275FooterMenuComponent_BaseFactory || (\u0275FooterMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FooterMenuComponent)))(__ngFactoryType__ || _FooterMenuComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterMenuComponent, selectors: [["footer-menu"]], inputs: { blur_backdrop: [1, "blur_backdrop"] }, outputs: { blur_backdrop: "blur_backdropChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [[1, "fixed", "inset-0", "bottom-16", "z-30"], [1, "border-base-200", "bg-base-100", "relative", "z-[60]", "flex", "h-16", "w-full", "items-center", "justify-center", "border-t", "shadow-sm", "sm:hidden"], [1, "fixed", "inset-0", "bottom-16", "z-30", 3, "click"], [1, "border-base-200", "bg-base-100", "absolute", "inset-x-0", "bottom-0", "grid", "max-h-[60vh]", "grid-cols-2", "gap-4", "overflow-y-auto", "rounded-t-xl", "border-t", "p-4"], ["name", "footer-nav-meeting", "matRipple", "", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-desks", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-parking", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-parking-requests", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-visitor-invite", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-vip-visitor-invite", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-my-day", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-group-events", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-lockers", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-control", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-deals", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-team-schedule", "routerLinkActive", "active", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-4", "py-8", 3, "routerLink"], [1, "text-secondary", "text-6xl"], ["matRipple", "", "name", "footer-nav-home", "routerLinkActive", "text-secondary active", 1, "relative", "flex", "flex-1", "flex-col", "items-center", "justify-center", 3, "routerLink"], ["filled", "", 1, "text-2xl"], ["outline", "", "className", "material-symbols-outlined", 1, "m-0!", "text-2xl"], [1, "text-sm"], ["matRipple", "", 1, "z-10", "mb-4", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full", 3, "click"], [1, "text-2xl"], ["matRipple", "", "routerLinkActive", "text-secondary active", 1, "relative", "flex", "flex-1", "flex-col", "items-center", "justify-center", 3, "routerLink"], [1, "absolute", "top-0", "left-1/2", "h-2", "w-24", "-translate-x-1/2", "-translate-y-full", "overflow-hidden"], [1, "border-base-200", "bg-base-100", "mx-auto", "h-16", "w-16", "rounded-full", "border-t", "shadow-sm"]], template: function FooterMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, FooterMenuComponent_Conditional_0_Template, 14, 13, "div", 0);
        \u0275\u0275conditionalCreate(1, FooterMenuComponent_Conditional_1_Template, 22, 22, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show_book_items() && ctx.features().length > 1 ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().length > 1 ? 1 : -1);
      }
    }, dependencies: [IconComponent, RouterModule, RouterLink, RouterLinkActive, MatRippleModule, MatRipple, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  z-index: 200;\n}\na.active[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\na.active[_ngcontent-%COMP%] {\n  background-color: var(--brand-200) !important;\n  color: #fff !important;\n}\na.active[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na[_ngcontent-%COMP%]:not(.active)   [filled][_ngcontent-%COMP%], \na.active[_ngcontent-%COMP%]   [outline][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=footer-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterMenuComponent, [{
    type: Component,
    args: [{ selector: "footer-menu", template: `
        @if (show_book_items() && features().length > 1) {
            <div
                class="fixed inset-0 bottom-16 z-30"
                [attr.dark]="dark_mode()"
                (click)="show_book_items.set(false); blur_backdrop.set(false)"
            >
                <div
                    class="border-base-200 bg-base-100 absolute inset-x-0 bottom-0 grid max-h-[60vh] grid-cols-2 gap-4 overflow-y-auto rounded-t-xl border-t p-4"
                >
                    @if (features().includes('spaces')) {
                        <a
                            name="footer-nav-meeting"
                            matRipple
                            [routerLink]="['/book', 'meeting']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >meeting_room</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_ROOMS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('desks')) {
                        <a
                            matRipple
                            name="footer-nav-desks"
                            [routerLink]="['/book', 'desk']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">desk</icon>
                            <div>
                                {{ 'APP.WORKPLACE.MENU_DESKS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('parking')) {
                        <a
                            matRipple
                            name="footer-nav-parking"
                            [routerLink]="['/book', 'parking']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >directions_car</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_PARKING' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('parking-requests')) {
                        <a
                            matRipple
                            name="footer-nav-parking-requests"
                            [routerLink]="['/book', 'parking-request']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >local_parking</icon
                            >
                            <div>
                                {{
                                    'APP.WORKPLACE.MENU_PARKING_REQUESTS'
                                        | translate
                                }}
                            </div>
                        </a>
                    }
                    @if (features().includes('visitor-invite')) {
                        <a
                            matRipple
                            name="footer-nav-visitor-invite"
                            [routerLink]="['/book', 'visitor']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">person</icon>
                            <div>
                                {{ 'APP.WORKPLACE.MENU_VISITORS' | translate }}
                            </div>
                        </a>
                    }
                    @if (can_see_vip_visitor()) {
                        <a
                            matRipple
                            name="footer-nav-vip-visitor-invite"
                            [routerLink]="['/book', 'vip-visitor']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">star</icon>
                            <div>
                                {{
                                    'APP.WORKPLACE.MENU_VIP_VISITORS'
                                        | translate
                                }}
                            </div>
                        </a>
                    }
                    @if (features().includes('schedule')) {
                        <a
                            matRipple
                            name="footer-nav-my-day"
                            [routerLink]="['/your-bookings']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">event</icon>
                            <div>
                                {{ 'APP.WORKPLACE.MENU_SCHEDULE' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('group-events')) {
                        <a
                            matRipple
                            name="footer-nav-group-events"
                            [routerLink]="['/group-events']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >local_activity</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_EVENTS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('lockers')) {
                        <a
                            matRipple
                            name="footer-nav-lockers"
                            [routerLink]="['/book', 'locker']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">lock</icon>
                            <div>
                                {{ 'APP.WORKPLACE.MENU_LOCKERS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('control')) {
                        <a
                            matRipple
                            name="footer-nav-control"
                            [routerLink]="['/control']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >remote_gen</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_CONTROL' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('deals-n-offers')) {
                        <a
                            matRipple
                            name="footer-nav-deals"
                            [routerLink]="['/deals-n-offers']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >confirmation_number</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_DEALS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('team-schedule')) {
                        <a
                            matRipple
                            name="footer-nav-team-schedule"
                            [routerLink]="['/team-schedule']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">groups</icon>
                            <div>
                                {{
                                    'APP.WORKPLACE.MENU_TEAM_SCHEDULE'
                                        | translate
                                }}
                            </div>
                        </a>
                    }
                </div>
            </div>
        }
        @if (features().length > 1) {
            <div
                class="border-base-200 bg-base-100 relative z-[60] flex h-16 w-full items-center justify-center border-t shadow-sm sm:hidden"
                [attr.dark]="dark_mode()"
            >
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center"
                    [routerLink]="[default_page()]"
                    name="footer-nav-home"
                    routerLinkActive="text-secondary active"
                >
                    <icon filled class="text-2xl">home</icon>
                    <icon
                        outline
                        className="material-symbols-outlined"
                        class="m-0! text-2xl"
                        >home</icon
                    >
                    <span class="text-sm">{{
                        'APP.WORKPLACE.MENU_HOME' | translate
                    }}</span>
                </a>
                <button
                    matRipple
                    class="z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                    (click)="
                        show_book_items.set(!show_book_items());
                        blur_backdrop.set(show_book_items())
                    "
                    [class.bg-secondary]="show_book_items()"
                    [class.text-white]="show_book_items()"
                    [class.bg-base-200]="!show_book_items()"
                >
                    <icon class="text-2xl">{{
                        show_book_items() ? 'close' : 'add'
                    }}</icon>
                </button>
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center"
                    [routerLink]="['/explore']"
                    [attr.disabled]="!features().includes('explore')"
                    [class.opacity-0]="!features().includes('explore')"
                    routerLinkActive="text-secondary active"
                >
                    <icon filled class="text-2xl">place</icon>
                    <icon
                        outline
                        className="material-symbols-outlined"
                        class="m-0! text-2xl"
                        >place</icon
                    >
                    <span class="text-sm">{{
                        'APP.WORKPLACE.MENU_EXPLORE' | translate
                    }}</span>
                </a>
                <div
                    class="absolute top-0 left-1/2 h-2 w-24 -translate-x-1/2 -translate-y-full overflow-hidden"
                >
                    <div
                        class="border-base-200 bg-base-100 mx-auto h-16 w-16 rounded-full border-t shadow-sm"
                    ></div>
                </div>
            </div>
        }
    `, imports: [TranslatePipe, IconComponent, RouterModule, MatRippleModule], styles: ["/* angular:styles/component:css;f81661ef19dd2d16a7c0f01e07207302d8e25f9a4e241527ccdb59d00b13dc4c;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/footer-menu.component.ts */\n:host {\n  position: relative;\n  z-index: 200;\n}\na.active icon {\n  color: var(--secondary) !important;\n}\na.active {\n  background-color: var(--brand-200) !important;\n  color: #fff !important;\n}\na.active icon {\n  color: #fff !important;\n}\na:not(.active) [filled],\na.active [outline] {\n  display: none;\n}\n/*# sourceMappingURL=footer-menu.component.css.map */\n"] }]
  }], null, { blur_backdrop: [{ type: Input, args: [{ isSignal: true, alias: "blur_backdrop", required: false }] }, { type: Output, args: ["blur_backdropChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterMenuComponent, { className: "FooterMenuComponent", filePath: "apps/workplace/src/app/components/footer-menu.component.ts", lineNumber: 310 });
})();

// libs/explore/src/lib/set-datetime-modal.component.ts
var _c02 = () => ({ standalone: true });
function SetDatetimeModalComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12)(2, "label");
    \u0275\u0275text(3, "Resource:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resource().name || ctx_r1.resource().map_id || "Unknown Resource", " ");
  }
}
function SetDatetimeModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "label");
    \u0275\u0275text(3, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 14);
    \u0275\u0275elementEnd()();
  }
}
function SetDatetimeModalComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label");
    \u0275\u0275text(2, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "a-duration-field", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("time", (tmp_2_0 = ctx_r1.form.get("date")) == null ? null : tmp_2_0.value)("max", 10 * 60)("min", 60)("step", 60)("end_time", (tmp_6_0 = ctx_r1.bookable_hours()) == null ? null : tmp_6_0.end)("use_24hr", ctx_r1.use_24hr_time());
  }
}
function SetDatetimeModalComponent_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-checkbox", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function SetDatetimeModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, SetDatetimeModalComponent_Conditional_6_Conditional_1_Template, 6, 1, "div", 6);
    \u0275\u0275conditionalCreate(2, SetDatetimeModalComponent_Conditional_6_Conditional_2_Template, 5, 0, "div", 6);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "label");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-date-field", 8);
    \u0275\u0275text(8, " Date and time must be in the future ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 9)(11, "label");
    \u0275\u0275text(12, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a-time-field", 10);
    \u0275\u0275listener("ngModelChange", function SetDatetimeModalComponent_Conditional_6_Template_a_time_field_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, SetDatetimeModalComponent_Conditional_6_Conditional_14_Template, 4, 6, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, SetDatetimeModalComponent_Conditional_6_Conditional_15_Template, 4, 3, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.resource() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.host() ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("to", ctx_r1.book_until());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(10, _c02))("range", ctx_r1.bookable_hours())("use_24hr", ctx_r1.use_24hr_time());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.all_day() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_all_day() ? 15 : -1);
  }
}
var SetDatetimeModalComponent = class _SetDatetimeModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.host = signal(this._data.host, ...ngDevMode ? [{ debugName: "host" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = new FormGroup({
      user: new FormControl(this._data.user),
      date: new FormControl(this._data.date),
      duration: new FormControl(this._data.duration),
      all_day: new FormControl(this._data.all_day ?? false)
    });
    this.book_until = signal(this._data.until, ...ngDevMode ? [{ debugName: "book_until" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resource = signal(this._data.resource, ...ngDevMode ? [{ debugName: "resource" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allow_all_day = signal(this._data.allow_all_day ?? false, ...ngDevMode ? [{ debugName: "allow_all_day" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bookable_hours = signal(this._data.bookable_hours ?? null, ...ngDevMode ? [{ debugName: "bookable_hours" }] : (
      /* istanbul ignore next */
      []
    ));
    this.all_day = toSignal(this.form.controls.all_day.valueChanges, {
      initialValue: this.form.controls.all_day.value
    });
    this.use_24hr_time = settingSignal("use_24_hour_time", false);
  }
  ngOnInit() {
    if (this.bookable_hours()) {
      const aligned_date = alignDateToBookableHours(this.form.value.date, this.bookable_hours());
      if (aligned_date !== this.form.value.date) {
        this.form.patchValue({ date: aligned_date });
      }
    }
    this.form.controls.date.valueChanges.subscribe((date) => {
      if (this.bookable_hours() && date) {
        const aligned = alignDateToBookableHours(date, this.bookable_hours(), this._data.date);
        if (aligned !== date) {
          this.form.patchValue({ date: aligned });
        }
      }
    });
    this.form.controls.all_day.valueChanges.subscribe((all_day) => {
      if (all_day) {
        this.form.controls.duration.disable();
      } else {
        this.form.controls.duration.enable();
      }
    });
    if (this._data.all_day) {
      this.form.controls.duration.disable();
    }
  }
  static {
    this.\u0275fac = function SetDatetimeModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetDatetimeModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetDatetimeModalComponent, selectors: [["set-datetime-modal"]], decls: 11, vars: 5, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[24rem]", "max-w-[85vw]", 3, "formGroup"], [1, "bg-base-200", "mx-2", "mb-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-end", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "flex-col", "space-x-0", "sm:flex-row", "sm:space-x-2"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], ["formControlName", "date", 3, "to"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions", "range", "use_24hr"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "justify-end"], [1, "mb-2", "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], [1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], ["formControlName", "user", 1, "mb-4"], ["formControlName", "duration", 3, "time", "max", "min", "step", "end_time", "use_24hr"], ["formControlName", "all_day"]], template: function SetDatetimeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Set date and time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2)(4, "icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(6, SetDatetimeModalComponent_Conditional_6_Template, 16, 11, "main", 3);
        \u0275\u0275elementStart(7, "footer", 4)(8, "button", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.form ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.form.value);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 3, "COMMON.CONTINUE"), " ");
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatCheckboxModule,
      MatCheckbox,
      IconComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      FormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetDatetimeModalComponent, [{
    type: Component,
    args: [{ selector: "set-datetime-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">Set date and time</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="w-[24rem] max-w-[85vw]">
                @if (resource()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="mb-2 flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Resource:</label>
                            <div
                                class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                            >
                                {{
                                    resource().name ||
                                        resource().map_id ||
                                        'Unknown Resource'
                                }}
                            </div>
                        </div>
                    </div>
                }
                @if (host()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Host</label>
                            <a-user-search-field
                                formControlName="user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    </div>
                }
                <div
                    class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                >
                    <div class="flex w-full flex-1 flex-col sm:w-1/4">
                        <label>Date</label>
                        <a-date-field
                            [to]="book_until()"
                            formControlName="date"
                        >
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                <div
                    class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                >
                    <div class="flex w-full flex-1 flex-col sm:w-1/3">
                        <label>Start Time</label>
                        <a-time-field
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [range]="bookable_hours()"
                            [use_24hr]="use_24hr_time()"
                        ></a-time-field>
                    </div>
                    @if (!all_day()) {
                        <div class="flex w-full flex-1 flex-col sm:w-1/3">
                            <label>End Time</label>
                            <a-duration-field
                                formControlName="duration"
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [end_time]="bookable_hours()?.end"
                                [use_24hr]="use_24hr_time()"
                            >
                            </a-duration-field>
                        </div>
                    }
                </div>
                @if (allow_all_day()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] justify-end"
                    >
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
            </main>
        }
        <footer
            class="bg-base-200 mx-2 mb-2 flex w-[calc(100%-1rem)] items-center justify-end rounded-sm border-none p-2"
        >
            <button btn matRipple [mat-dialog-close]="form.value" class="w-32">
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </footer>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      MatCheckboxModule,
      IconComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      FormsModule,
      ReactiveFormsModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetDatetimeModalComponent, { className: "SetDatetimeModalComponent", filePath: "libs/explore/src/lib/set-datetime-modal.component.ts", lineNumber: 148 });
})();

// libs/explore/src/lib/explore-device-info.component.ts
var _c03 = ["explore-device-info", ""];
function ExploreDeviceInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap("height: " + ctx_r0.diameter() + "%; width: " + ctx_r0.diameter() + "%;");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MAC"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.mac, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MANUFACTURER"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.manufacturer, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_OS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.os, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_SSID"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ssid, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_USERNAME"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.user == null ? null : ctx_r0.user.name) || (ctx_r0.user == null ? null : ctx_r0.user.username) || ctx_r0.username(), " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_TYPE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.type, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275conditionalCreate(3, ExploreDeviceInfoComponent_ng_template_5_Conditional_3_Template, 5, 4, "p", 10);
    \u0275\u0275elementStart(4, "p")(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, ExploreDeviceInfoComponent_ng_template_5_Conditional_14_Template, 5, 4, "p", 11);
    \u0275\u0275conditionalCreate(15, ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template, 5, 4, "p", 12);
    \u0275\u0275conditionalCreate(16, ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template, 5, 4, "p", 13);
    \u0275\u0275conditionalCreate(17, ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template, 5, 4, "p", 14);
    \u0275\u0275conditionalCreate(18, ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template, 5, 4, "p", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.mac && !ctx_r0.hide_fields().includes("mac") ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 10, "EXPLORE.DEVICE_ACCURACY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.variance, "m ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 12, "EXPLORE.DEVICE_LAST_SEEN"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.last_seen(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.manufacturer && !ctx_r0.hide_fields().includes("manufacturer") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.os && !ctx_r0.hide_fields().includes("os") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ssid && !ctx_r0.hide_fields().includes("ssid") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.username() && !ctx_r0.hide_fields().includes("username") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.user && !ctx_r0.hide_fields().includes("user") ? 18 : -1);
  }
}
var EMPTY = [];
var ExploreDeviceInfoComponent = class _ExploreDeviceInfoComponent {
  get _distance() {
    return Math.abs(differenceInMinutes((this._details.last_seen || 0) * 1e3, /* @__PURE__ */ new Date()));
  }
  get _distance_color() {
    return this._distance < 10 ? "#43a047" : this._distance < 20 ? "#ffb300" : "#e53935";
  }
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this.username = signal("", ...ngDevMode ? [{ debugName: "username" }] : (
      /* istanbul ignore next */
      []
    ));
    this.show_radius = signal(false, ...ngDevMode ? [{ debugName: "show_radius" }] : (
      /* istanbul ignore next */
      []
    ));
    this.user = this._details.user;
    this.mac = this._details.mac;
    this.manufacturer = this._details.manufacturer;
    this.os = this._details.os;
    this.ssid = this._details.ssid;
    this.variance = this._details.variance?.toFixed(2);
    this.bg_color = this._details.bg_color || this._distance_color;
    this.zoom = signal(1, ...ngDevMode ? [{ debugName: "zoom" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hide_fields = computed(() => {
      return this._settings.get("app.explore.hide_device_fields") || EMPTY;
    }, ...ngDevMode ? [{ debugName: "hide_fields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.last_seen = computed(() => {
      return formatDistanceToNow((this._details.last_seen || 0) * 1e3, {
        addSuffix: true
      });
    }, ...ngDevMode ? [{ debugName: "last_seen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.y_pos = signal("top", ...ngDevMode ? [{ debugName: "y_pos" }] : (
      /* istanbul ignore next */
      []
    ));
    this.x_pos = signal("start", ...ngDevMode ? [{ debugName: "x_pos" }] : (
      /* istanbul ignore next */
      []
    ));
    this.diameter = computed(() => {
      return this._details.variance * 100 * this.zoom();
    }, ...ngDevMode ? [{ debugName: "diameter" }] : (
      /* istanbul ignore next */
      []
    ));
    afterNextRender(() => this._initPosition());
  }
  _initPosition(tries = 0) {
    if (tries > 10)
      return;
    const parent = this._element.nativeElement.parentElement?.parentElement;
    if (!parent) {
      setTimeout(() => this._initPosition(++tries), 200);
      return;
    }
    const position = {
      y: parseInt(parent.style.top, 10) / 100,
      x: parseInt(parent.style.left, 10) / 100
    };
    this.y_pos.set(position.y >= 0.5 ? "bottom" : "top");
    this.x_pos.set(position.x >= 0.5 ? "end" : "start");
  }
  async loadUser() {
    if (this.username())
      return;
    const mod = Dl(this._details.system, "LocationServices");
    if (!mod)
      return;
    this.username.set("Loading...");
    const details = await mod.execute("check_ownership_of", [this.mac]).catch(() => null);
    this.username.set(details && details.assigned_to ? details.assigned_to : "");
  }
  static {
    this.\u0275fac = function ExploreDeviceInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreDeviceInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeviceInfoComponent, selectors: [["", "explore-device-info", ""]], attrs: _c03, decls: 7, vars: 8, consts: [["dot", ""], ["device_tooltip", ""], ["name", "radius", 1, "radius", "center", "border-info", "bg-info", "absolute", "rounded-full", "border-8", "border-dashed", "border-blue-600", "opacity-30", 3, "style"], ["shadow", "", 1, "center", "pointer-events-auto", "absolute", "h-8", "w-8", "rounded-full", "bg-black", "opacity-30", 3, "mouseenter", "click", "mouseleave"], ["name", "dot", 1, "center", "absolute", "h-3", "w-3", "rounded-full", "border-2", "border-white", "shadow-sm"], ["customTooltip", "", 1, "pointer-events-auto", "absolute", "inset-0", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "radius", 1, "radius", "center", "border-info", "bg-info", "absolute", "rounded-full", "border-8", "border-dashed", "border-blue-600", "opacity-30"], ["name", "device-info", 1, "bg-base-100", "pointer-events-none", "top-0", "left-0", "mx-2", "w-64", "rounded-sm", "p-4", "shadow-sm"], [1, "arrow"], [1, "details"], [1, "wrap-break-word"], ["type", ""], ["os", ""], ["ssid", ""], ["username", ""], ["user", ""]], template: function ExploreDeviceInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ExploreDeviceInfoComponent_Conditional_0_Template, 1, 2, "div", 2);
        \u0275\u0275elementStart(1, "div", 3);
        \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_1_listener() {
          return ctx.show_radius.set(true);
        })("click", function ExploreDeviceInfoComponent_Template_div_click_1_listener() {
          return ctx.show_radius.set(false);
        }, \u0275\u0275resolveWindow)("click", function ExploreDeviceInfoComponent_Template_div_click_1_listener() {
          return ctx.show_radius.set(true);
        })("mouseleave", function ExploreDeviceInfoComponent_Template_div_mouseleave_1_listener() {
          return ctx.show_radius.set(false);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(2, "div", 4, 0);
        \u0275\u0275elementStart(4, "div", 5);
        \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_4_listener() {
          return ctx.loadUser();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ExploreDeviceInfoComponent_ng_template_5_Template, 19, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const device_tooltip_r2 = \u0275\u0275reference(6);
        \u0275\u0275conditional(ctx.show_radius() ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background-color", ctx.bg_color);
        \u0275\u0275advance(2);
        \u0275\u0275property("content", device_tooltip_r2)("backdrop", false)("xPosition", ctx.x_pos())("yPosition", ctx.y_pos())("hover", true);
      }
    }, dependencies: [CustomTooltipComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: auto;\n}\n[_nghost-%COMP%]    > [name=dot][_ngcontent-%COMP%] {\n  background-color: #616161;\n}\n[_nghost-%COMP%]:hover    > [name=radius][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[name=radius][_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeviceInfoComponent, [{
    type: Component,
    args: [{ selector: "[explore-device-info]", template: `
        @if (show_radius()) {
            <div
                name="radius"
                class="radius center border-info bg-info absolute rounded-full border-8 border-dashed border-blue-600 opacity-30"
                [style]="
                    'height: ' + diameter() + '%; width: ' + diameter() + '%;'
                "
            ></div>
        }
        <div
            shadow
            class="center pointer-events-auto absolute h-8 w-8 rounded-full bg-black opacity-30"
            (mouseenter)="show_radius.set(true)"
            (window:click)="show_radius.set(false)"
            (click)="show_radius.set(true)"
            (mouseleave)="show_radius.set(false)"
        ></div>
        <div
            name="dot"
            #dot
            class="center absolute h-3 w-3 rounded-full border-2 border-white shadow-sm"
            [style.background-color]="bg_color"
        ></div>
        <div
            customTooltip
            [content]="device_tooltip"
            [backdrop]="false"
            [xPosition]="x_pos()"
            [yPosition]="y_pos()"
            [hover]="true"
            (mouseenter)="loadUser()"
            class="pointer-events-auto absolute inset-0"
        ></div>

        <ng-template #device_tooltip>
            <div
                name="device-info"
                class="bg-base-100 pointer-events-none top-0 left-0 mx-2 w-64 rounded-sm p-4 shadow-sm"
            >
                <div class="arrow"></div>
                <div class="details">
                    @if (mac && !hide_fields().includes('mac')) {
                        <p class="wrap-break-word">
                            <label
                                >{{ 'EXPLORE.DEVICE_MAC' | translate }}:</label
                            >
                            {{ mac }}
                        </p>
                    }
                    <p>
                        <label
                            >{{ 'EXPLORE.DEVICE_ACCURACY' | translate }}:</label
                        >
                        {{ variance }}m
                    </p>
                    <p>
                        <label
                            >{{
                                'EXPLORE.DEVICE_LAST_SEEN' | translate
                            }}:</label
                        >
                        {{ last_seen() }}
                    </p>
                    @if (
                        manufacturer && !hide_fields().includes('manufacturer')
                    ) {
                        <p type>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_MANUFACTURER' | translate
                                }}:</label
                            >
                            {{ manufacturer }}
                        </p>
                    }
                    @if (os && !hide_fields().includes('os')) {
                        <p os>
                            <label
                                >{{ 'EXPLORE.DEVICE_OS' | translate }}:</label
                            >
                            {{ os }}
                        </p>
                    }
                    @if (ssid && !hide_fields().includes('ssid')) {
                        <p ssid>
                            <label
                                >{{ 'EXPLORE.DEVICE_SSID' | translate }}:</label
                            >
                            {{ ssid }}
                        </p>
                    }
                    @if (username() && !hide_fields().includes('username')) {
                        <p username>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_USERNAME' | translate
                                }}:</label
                            >
                            {{ user?.name || user?.username || username() }}
                        </p>
                    }
                    @if (user && !hide_fields().includes('user')) {
                        <p user>
                            <label
                                >{{ 'EXPLORE.DEVICE_TYPE' | translate }}:</label
                            >
                            {{ user.type }}
                        </p>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [TranslatePipe, CustomTooltipComponent], styles: ["/* angular:styles/component:css;9939b96a3826add6f4c5b0fbbef0c7444ff148d81d00a9d87a90d1a088d1447c;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-device-info.component.ts */\n:host {\n  pointer-events: auto;\n}\n:host > [name=dot] {\n  background-color: #616161;\n}\n:host:hover > [name=radius] {\n  opacity: 1;\n}\n[name=radius] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeviceInfoComponent, { className: "ExploreDeviceInfoComponent", filePath: "libs/explore/src/lib/explore-device-info.component.ts", lineNumber: 170 });
})();

// libs/explore/src/lib/explore-desks.service.ts
var ExploreDesksService = class _ExploreDesksService extends AsyncHandler {
  _desk_key(desk) {
    return desk?.map_id || desk?.id || "";
  }
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._dialog = inject(MatDialog);
    this._injector = inject(Injector);
    this._org_initialised = toSignal(this._org.initialised, {
      initialValue: false
    });
    this._building = toSignal(this._org.active_building, {
      initialValue: null
    });
    this._in_use = signal([], ...ngDevMode ? [{ debugName: "_in_use" }] : (
      /* istanbul ignore next */
      []
    ));
    this._options = signal({}, ...ngDevMode ? [{ debugName: "_options" }] : (
      /* istanbul ignore next */
      []
    ));
    this._presence = signal([], ...ngDevMode ? [{ debugName: "_presence" }] : (
      /* istanbul ignore next */
      []
    ));
    this._signs_of_life = signal([], ...ngDevMode ? [{ debugName: "_signs_of_life" }] : (
      /* istanbul ignore next */
      []
    ));
    this._checked_in = signal([], ...ngDevMode ? [{ debugName: "_checked_in" }] : (
      /* istanbul ignore next */
      []
    ));
    this._statuses = {};
    this._users = {};
    this._departments = {};
    this._desk_bookings = {};
    this._booking_rules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Fu(bld.id, `desk_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
    }));
    this.booking_rules = computed(() => this._booking_rules.value() ?? [], ...ngDevMode ? [{ debugName: "booking_rules" }] : (
      /* istanbul ignore next */
      []
    ));
    this._desk_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._state.level() || void 0,
      loader: ({ params: lvl }) => Fu(lvl.id, "desks").catch(() => ({ details: [] })).then((i) => (i?.details instanceof Array ? i.details : []).map((j) => new Desk(__spreadProps(__spreadValues({}, j), { zone: lvl }))))
    }));
    this.desk_list = computed(() => this._desk_list.value() ?? [], ...ngDevMode ? [{ debugName: "desk_list" }] : (
      /* istanbul ignore next */
      []
    ));
    this._booking_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const options = this._options();
        const level = this._state.level();
        const wanted = options.use_api || options.date > endOfDay(Date.now()).valueOf();
        return wanted && level ? { date: options.date, zone: level.id } : void 0;
      },
      loader: ({ params: { date, zone } }) => firstValueFrom(queryBookings({
        type: "desk",
        period_start: getUnixTime(startOfDay(date || Date.now())),
        period_end: getUnixTime(endOfDay(date || Date.now())),
        zones: zone
      })).catch(() => [])
    }));
    effect(() => {
      const lvl = this._state.level();
      const { is_public } = this._state.options();
      if (!this._org_initialised() || !lvl || is_public)
        return;
      this.timeout("bind", () => this._bindToLevel(lvl.id), 300);
    });
    effect(() => {
      const bookings = this._booking_list.value();
      if (!bookings)
        return;
      untracked(() => {
        this._in_use.set(bookings.map((_) => _.asset_id));
        this._checked_in.set(bookings.filter((_) => _.checked_in).map((_) => _.asset_id));
      });
    });
    effect(() => {
      const desks = this.desk_list();
      const in_use = this._in_use();
      const presence = this._presence();
      const checked_in = this._checked_in();
      const signs = this._signs_of_life();
      const restrictions = this.booking_rules();
      this._options();
      this.timeout("state_change", () => this._updateDeskStatuses(desks, in_use, presence, checked_in, signs, restrictions), 50);
    });
    this.init();
  }
  async init() {
    await firstValueWhere(this._org_initialised, (_) => !!_, this._injector);
    this.setOptions({
      enable_booking: this._settings.get("app.desks.enable_maps") !== false
    });
  }
  setOptions(options) {
    this._options.update((value) => __spreadValues(__spreadValues({}, value), options));
  }
  _bindToLevel(zone_id) {
    const mod = this._org.module("area_management", "AreaManagement");
    if (!mod)
      return;
    const binding = mod.variable(zone_id);
    if (binding) {
      this.subscription(`lvl-in_use`, binding.bindThenSubscribe((d2) => this.processBindingChange(d2 || {}, mod.id)));
    }
    const bookings_binding = mod.variable(`${zone_id}:desk_bookings`);
    if (bookings_binding) {
      this.subscription(`lvl-desk_bookings`, bookings_binding.bindThenSubscribe((d2) => {
        const value = __spreadValues({}, d2 || {});
        for (const id in value) {
          const new_bookings = value[id].map((_) => new Booking(__spreadProps(__spreadValues({}, _), {
            booking_start: _.booking_start || _.started_at,
            booking_end: _.booking_end || _.ends_at,
            duration: _.duration / 60
          })));
          if (!this._desk_bookings[id]) {
            this._desk_bookings[id] = signal(new_bookings);
          } else {
            this._desk_bookings[id].set(new_bookings);
          }
        }
      }));
    }
  }
  _updateDeskStatuses(desks, in_use, presence, checked_in, signs, restrictions) {
    const level = this._state.level();
    const active_keys = /* @__PURE__ */ new Set();
    for (const { id, bookable, map_id } of desks) {
      const d_id = map_id || id;
      active_keys.add(d_id);
      const is_used = in_use.some((i) => d_id === i);
      const has_presence = presence.some((i) => d_id === i);
      const has_signs = signs.some((i) => d_id === i);
      const is_checked_in = checked_in.some((i) => d_id === i) || is_used && this._settings.get(`app.desks.auto_checkin`);
      const is_restricted = rulesForResource({
        date: Date.now(),
        duration: 60,
        host: currentUser(),
        resource: {
          id,
          zones: [level?.parent_id, level?.id]
        }
      }, restrictions)?.hidden;
      if (!this._statuses[d_id])
        this._statuses[d_id] = signal("free");
      this._statuses[d_id].set(bookable && !is_restricted ? !is_used && !has_presence && !is_checked_in ? has_signs ? "signs-of-life" : "free" : !has_presence && !is_checked_in ? "pending" : "busy" : "not-bookable");
    }
    for (const d_id in this._statuses) {
      if (!active_keys.has(d_id))
        delete this._statuses[d_id];
    }
    this.processDesks(desks);
  }
  processBindingChange({ value }, system_id) {
    const devices = (value || []).filter((v) => !["desk", "booking"].includes(v.location));
    const desks = (value || []).filter((v) => v.location === "desk" || v.location === "booking" && v.type === "desk");
    const date = this._options().date || Date.now();
    if (date <= endOfDay(Date.now()).valueOf() && !this._options().use_api) {
      this._in_use.set(desks.filter((v) => v.location === "booking").map((v) => v.map_id || v.asset_id));
      this._checked_in.set(desks.filter((v) => v.location === "booking" && v.checked_in).map((v) => v.map_id || v.asset_id));
      this._presence.set(desks.filter((v) => v.at_location).map((v) => v.map_id || v.asset_id));
      this._signs_of_life.set(desks.filter((v) => v.signs_of_life).map((v) => v.map_id || v.asset_id));
    }
    const departments = this._settings.get("app.department_map") || {};
    for (const desk of desks) {
      const d_id = desk.map_id || desk.asset_id;
      if (!this._users[d_id]) {
        this._users[d_id] = signal("");
      }
      this._users[d_id].set(desk.staff_name);
      this._departments[d_id] = departments[desk.department] || "";
    }
    this.processDevices(devices, system_id);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  updateStatus() {
    const style_map = {};
    const colours = this._settings.get("app.explore.colors") || {};
    for (const desk_id in this._statuses) {
      if (!this._statuses[desk_id])
        this._statuses[desk_id] = signal("free");
      const s = this._statuses[desk_id]();
      style_map[`#${desk_id}`] = {
        fill: colours[`desk-${s}`] || colours[`${s}`] || DEFAULT_COLOURS[`${s}`]
      };
    }
    this._state.setStyles("desks", style_map);
  }
  processDevices(devices, system_id) {
    const list = [];
    for (const device of devices) {
      const x = device.x / device.map_width;
      const y = device.y / device.map_height;
      list.push({
        track_id: `device:hover:${x},${y}`,
        location: {
          x: device.coordinates_from?.includes("right") ? 1 - x : x,
          y: device.coordinates_from?.includes("bottom") ? 1 - y : y
        },
        content: ExploreDeviceInfoComponent,
        z_index: 20,
        data: __spreadProps(__spreadValues({}, device), { system: system_id })
      });
    }
    this._state.setFeatures("devices", list);
  }
  processDesks(desks) {
    const list = [];
    const actions = [];
    const options = this._options();
    const show_desk_users = this._settings.get("app.desks.show_users") ?? true;
    for (const desk of desks) {
      const d_id = this._desk_key(desk);
      if (!this._statuses[d_id]) {
        this._statuses[d_id] = signal("free");
      }
      if (!this._desk_bookings[d_id])
        this._desk_bookings[d_id] = signal([]);
      if (!this._users[d_id]) {
        this._users[d_id] = signal("");
      }
      if (show_desk_users) {
        const user_value = this._users[d_id]() || desk.staff_name || desk.assigned_name || "";
        this._users[d_id].set(user_value);
      } else {
        this._users[d_id].set("");
      }
      list.push({
        track_id: `desk:hover:${d_id}`,
        location: d_id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: d_id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: this._users[d_id],
          status: this._statuses[d_id],
          department: this._departments[d_id] || "",
          bookings: this._desk_bookings[d_id],
          date: options.date || Date.now()
        },
        z_index: 20
      });
      if (!desk.bookable)
        continue;
      let can_book = true;
      const book_fn = async () => {
        if (!can_book)
          return;
        await this._bookDesk(desk, options);
      };
      ["mousedown", "touchstart"].forEach((event) => actions.push({
        id: d_id,
        action: event,
        priority: 10,
        callback: () => {
          can_book = true;
          this.timeout("booking", () => can_book = false);
        }
      }));
      ["mouseup", "touchend"].forEach((event) => actions.push({
        id: d_id,
        action: event,
        priority: 10,
        callback: book_fn
      }));
    }
    this._state.setActions("desks", this._options().enable_booking ? actions : []);
    this._state.setFeatures("desks", list);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  async _setBookingTime(date, duration, host = false, resource2 = null, all_day = false, bookable_hours = null) {
    let user = null;
    if (this._settings.get("app.desks.allow_time_changes")) {
      const until = endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90));
      const allow_all_day = !!this._settings.get("app.desks.allow_all_day");
      const ref = this._dialog.open(SetDatetimeModalComponent, {
        data: {
          date,
          duration,
          until,
          host,
          resource: resource2,
          all_day,
          allow_all_day,
          bookable_hours
        }
      });
      const details = await lastValueFrom(ref.afterClosed());
      if (!details)
        throw "User cancelled";
      date = details.date;
      duration = details.duration;
      user = details.user;
      all_day = details.all_day;
    }
    return { date, duration, user, all_day };
  }
  async _bookDesk(desk, options) {
    const d_id = this._desk_key(desk);
    const asset_id = desk.id || desk.map_id;
    const resource2 = __spreadProps(__spreadValues({}, desk), { id: asset_id });
    if (this._statuses[d_id]?.() !== "free") {
      return notifyError(i18n("EXPLORE.DESK_AVAILABLE_ERROR", {
        name: desk.name || "Desk"
      }));
    }
    if (desk.groups?.length && !desk.groups.find((_) => currentUser().groups.includes(_))) {
      return notifyError(i18n("EXPLORE.DESK_GROUP_ERROR", { name: desk.name || "Desk" }));
    }
    this._bookings.newForm("desk");
    this._bookings.setOptions({ type: "desk" });
    const bookable_hours = this._settings.get("app.desks.bookable_hours") || this._settings.get("app.bookings.bookable_hours") || null;
    if (bookable_hours && !this._settings.get("app.desks.allow_time_changes") && !isWithinBookableHours(Date.now(), bookable_hours)) {
      return notifyError(i18n("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));
    }
    if (options.date) {
      this._bookings.form.patchValue({
        date: bookable_hours ? alignDateToBookableHours(options.date, bookable_hours) : options.date
      });
      this._bookings.form.patchValue({
        all_day: !!options.all_day
      });
    } else if (bookable_hours) {
      this._bookings.form.patchValue({
        date: alignDateToBookableHours(this._bookings.form.value.date, bookable_hours)
      });
    }
    let { date, duration, user, all_day } = await this._setBookingTime(this._bookings.form.value.date, this._bookings.form.value.duration, this._options()?.custom ?? false, desk, !!options.all_day, bookable_hours);
    user = user || options.host || currentUser();
    const user_email = user?.email;
    this._bookings.form.patchValue({
      resources: [resource2],
      asset_id,
      asset_name: desk.name,
      date,
      duration: all_day ? 12 * 60 : duration,
      all_day,
      map_id: desk?.map_id || desk?.id,
      description: desk.name,
      user,
      user_email,
      booking_type: "desk",
      zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
    });
    const restrictions = this.booking_rules();
    const is_restricted = rulesForResource({
      date,
      duration,
      host: currentUser(),
      resource: {
        id: asset_id,
        zones: [desk.zone?.parent_id, desk.zone?.id]
      }
    }, restrictions)?.hidden;
    if (is_restricted) {
      return notifyError(i18n("EXPLORE.DESK_RESTRICTION_ERROR", {
        name: desk.name || "Desk"
      }));
    }
    await this._bookings.confirmPost().catch((e) => {
      console.log(e);
      notifyError(i18n("EXPLORE.DESK_BOOKING_ERROR", {
        name: desk.name || "Desk",
        error: e.message || e.error || e
      }));
      throw e;
    });
    if (!this._users[d_id]) {
      this._users[d_id] = signal("");
    }
    this._users[d_id].set((options.host || currentUser())?.name);
    notifySuccess(i18n("EXPLORE.DESK_BOOKING_SUCCESS", { name: desk.name || "Desk" }));
  }
  static {
    this.\u0275fac = function ExploreDesksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreDesksService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreDesksService, factory: _ExploreDesksService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDesksService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-map-control.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExploreMapControlComponent_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function ExploreMapControlComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 3);
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, ExploreMapControlComponent_Conditional_1_For_3_Template, 2, 2, "mat-option", 4, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function ExploreMapControlComponent_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r5 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r5.display_name || lvl_r5.name, " ");
  }
}
function ExploreMapControlComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 2)(1, "mat-select", 5);
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_2_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275repeaterCreate(2, ExploreMapControlComponent_Conditional_2_For_3_Template, 2, 2, "mat-option", 4, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("has-bld", ctx_r1.buildings().length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.level());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
var ExploreMapControlComponent = class _ExploreMapControlComponent extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.buildings = toSignal(this._org.active_buildings, {
      initialValue: []
    });
    this.building = toSignal(this._org.active_building, {
      initialValue: null
    });
    this.levels = toSignal(this._org.active_levels, {
      initialValue: []
    });
    this.level = this._state.level;
    this.setLevel = (lvl) => {
      this._state.setFeatures("_located", []);
      this.timeout("set_level", () => this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone: lvl.id }
      }), 201);
    };
    this.setBuilding = (bld) => this._org.building = bld;
  }
  async ngOnInit() {
    await firstTruthyValueFrom(this._org.initialised);
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => params.has("zone") ? this._state.setLevel(params.get("zone")) : ""));
  }
  static {
    this.\u0275fac = function ExploreMapControlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreMapControlComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapControlComponent, selectors: [["explore-map-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "flex", "w-full", "space-x-2"], ["overlay", "", "buildings", "", "has-bld", "true", "appearance", "outline", 1, "no-subscript", "min-w-42", "flex-1"], ["overlay", "", "levels", "", "appearance", "outline", 1, "no-subscript", "min-w-41", "flex-1"], ["placeholder", "Select Building...", 3, "ngModelChange", "ngModel"], [3, "value"], ["placeholder", "Select Level...", 3, "ngModelChange", "ngModel"]], template: function ExploreMapControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, ExploreMapControlComponent_Conditional_1_Template, 4, 1, "mat-form-field", 1);
        \u0275\u0275conditionalCreate(2, ExploreMapControlComponent_Conditional_2_Template, 4, 2, "mat-form-field", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.buildings().length > 1 ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.levels().length ? 2 : -1);
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel], styles: ["\nmat-form-field[has-bld=true][_ngcontent-%COMP%] {\n  max-width: calc(50vw - 2.5rem);\n}\n[full][_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapControlComponent, [{
    type: Component,
    args: [{ selector: "explore-map-controls", template: `
        <div class="flex w-full space-x-2">
            @if (buildings().length > 1) {
                <mat-form-field
                    overlay
                    buildings
                    class="no-subscript min-w-42 flex-1"
                    has-bld="true"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Building..."
                        [ngModel]="building()"
                        (ngModelChange)="setBuilding($event)"
                    >
                        @for (bld of buildings(); track bld.id) {
                            <mat-option [value]="bld">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (levels().length) {
                <mat-form-field
                    overlay
                    levels
                    class="no-subscript min-w-41 flex-1"
                    [attr.has-bld]="buildings().length > 1"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Level..."
                        [ngModel]="level()"
                        (ngModelChange)="setLevel($event)"
                    >
                        @for (lvl of levels(); track lvl.id) {
                            <mat-option [value]="lvl">
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
    `, imports: [MatFormFieldModule, MatSelectModule, FormsModule], styles: ["/* angular:styles/component:css;09806d4e56396268b721c1e6773559de8fe2445d8858101e567dcb2c1dd21cd7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-control.component.ts */\nmat-form-field[has-bld=true] {\n  max-width: calc(50vw - 2.5rem);\n}\n:host[full] mat-form-field {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapControlComponent, { className: "ExploreMapControlComponent", filePath: "libs/explore/src/lib/explore-map-control.component.ts", lineNumber: 73 });
})();

// libs/explore/src/lib/explore-locker-bank-modal.component.ts
var ExploreLockerBankModalComponent = class _ExploreLockerBankModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.bank = signal(this._data.bank, ...ngDevMode ? [{ debugName: "bank" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lockers = computed(() => this._data.lockers.reduce((map2, locker) => {
      map2[locker.id] = "busy";
      return map2;
    }, {}), ...ngDevMode ? [{ debugName: "lockers" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function ExploreLockerBankModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreLockerBankModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankModalComponent, selectors: [["explore-locker-bank-modal"]], decls: 8, vars: 3, consts: [[1, "text-xl", "font-medium"], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "overflow-hidden"], [3, "bank", "bank_status"]], template: function ExploreLockerBankModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2", 0);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1)(4, "icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "main", 2);
        \u0275\u0275element(7, "locker-grid", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.bank().name);
        \u0275\u0275advance(5);
        \u0275\u0275property("bank", ctx.bank())("bank_status", ctx.lockers());
      }
    }, dependencies: [MatRippleModule, MatRipple, LockerGridComponent, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankModalComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-modal", template: `
        <header>
            <h2 class="text-xl font-medium">{{ bank().name }}</h2>
            <button btn icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[65vh] overflow-hidden">
            <locker-grid
                [bank]="bank()"
                [bank_status]="lockers()"
            ></locker-grid>
        </main>
    `, imports: [MatRippleModule, LockerGridComponent, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankModalComponent, { className: "ExploreLockerBankModalComponent", filePath: "libs/explore/src/lib/explore-locker-bank-modal.component.ts", lineNumber: 32 });
})();

// libs/explore/src/lib/explore-locker-bank-info.component.ts
var _c04 = (a0, a1) => ({ used: a0, count: a1 });
function ExploreLockerBankInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h3", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-base-100 pointer-events-none absolute top-0 left-0 rounded-sm p-4 shadow-sm " + ctx_r0.x_pos() + " " + ctx_r0.y_pos());
    \u0275\u0275property("id", ctx_r0.bank().map_id || ctx_r0.bank().id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.bank().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "EXPLORE.LOCKERS_USE", \u0275\u0275pureFunction2(8, _c04, ctx_r0.in_use_count(), ctx_r0.bank().lockers.length || 1)), " ");
  }
}
var ExploreLockerBankInfoComponent = class _ExploreLockerBankInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._dialog = inject(MatDialog);
    this.bank = signal(this._details.bank, ...ngDevMode ? [{ debugName: "bank" }] : (
      /* istanbul ignore next */
      []
    ));
    this.in_use_count = signal(this._details.in_use_count, ...ngDevMode ? [{ debugName: "in_use_count" }] : (
      /* istanbul ignore next */
      []
    ));
    this.y_pos = signal("top", ...ngDevMode ? [{ debugName: "y_pos" }] : (
      /* istanbul ignore next */
      []
    ));
    this.x_pos = signal("left", ...ngDevMode ? [{ debugName: "x_pos" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent)
        return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos.set(position.y >= 0.5 ? "bottom" : "top");
      this.x_pos.set(position.x >= 0.5 ? "right" : "left");
    }, 200);
  }
  openBankModal() {
    this._dialog.open(ExploreLockerBankModalComponent, {
      data: __spreadValues({}, this._details)
    });
  }
  static {
    this.\u0275fac = function ExploreLockerBankInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreLockerBankInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankInfoComponent, selectors: [["explore-locker-bank-info"]], decls: 4, vars: 6, consts: [["desk_tooltip", ""], [1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "click"], ["customTooltip", "", 1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "font-medium"], [1, "text-sm", "whitespace-nowrap"]], template: function ExploreLockerBankInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 1);
        \u0275\u0275listener("click", function ExploreLockerBankInfoComponent_Template_button_click_0_listener() {
          return ctx.openBankModal();
        });
        \u0275\u0275element(1, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, ExploreLockerBankInfoComponent_ng_template_2_Template, 6, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const desk_tooltip_r2 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
      }
    }, dependencies: [CustomTooltipComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-info", template: `
        <button
            class="pointer-events-auto relative h-full w-full"
            (click)="openBankModal()"
        >
            <div
                customTooltip
                [content]="desk_tooltip"
                [backdrop]="false"
                [xPosition]="'center'"
                [yPosition]="'center'"
                [hover]="true"
                [delay]="3000"
                class="pointer-events-auto relative h-full w-full"
            ></div>
        </button>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="bank().map_id || bank().id"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 rounded-sm p-4 shadow-sm ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <h3 class="font-medium">{{ bank().name }}</h3>
                <p class="text-sm whitespace-nowrap">
                    {{
                        'EXPLORE.LOCKERS_USE'
                            | translate
                                : {
                                      used: in_use_count(),
                                      count: bank().lockers.length || 1,
                                  }
                    }}
                </p>
            </div></ng-template
        >
    `, imports: [TranslatePipe, CustomTooltipComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankInfoComponent, { className: "ExploreLockerBankInfoComponent", filePath: "libs/explore/src/lib/explore-locker-bank-info.component.ts", lineNumber: 64 });
})();

// libs/explore/src/lib/explore-lockers.service.ts
var ExploreLockersService = class _ExploreLockersService extends AsyncHandler {
  constructor() {
    super();
    this._explore = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._building = toSignal(this._org.active_building, {
      initialValue: null
    });
    this._region = toSignal(this._org.active_region, {
      initialValue: null
    });
    this._status = signal([], ...ngDevMode ? [{ debugName: "_status" }] : (
      /* istanbul ignore next */
      []
    ));
    this._change = signal(0, ...ngDevMode ? [{ debugName: "_change" }] : (
      /* istanbul ignore next */
      []
    ));
    this._scope_id = computed(() => {
      const bld = this._building();
      const region = this._region();
      return this._settings.get("app.use_region") ? region?.id || this._org.region?.id : bld?.id;
    }, ...ngDevMode ? [{ debugName: "_scope_id" }] : (
      /* istanbul ignore next */
      []
    ));
    this._locker_banks = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_locker_banks" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const scope_id = this._scope_id();
        const changed = this._change();
        return scope_id ? { scope_id, changed } : void 0;
      },
      loader: async ({ params: { scope_id } }) => {
        const assets = await firstValueFrom(queryLockerBankAssetsForZones([scope_id])).catch(() => []);
        const banks = assets.map(lockerBankFromAsset);
        for (const bank of banks) {
          bank.zone = this._org.levelWithID(bank.zones || []);
        }
        return banks;
      }
    }));
    this.locker_banks = computed(() => this._locker_banks.value() ?? [], ...ngDevMode ? [{ debugName: "locker_banks" }] : (
      /* istanbul ignore next */
      []
    ));
    this._lockers = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_lockers" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const scope_id = this._scope_id();
        const banks = this.locker_banks();
        return scope_id && banks.length ? { scope_id, banks } : void 0;
      },
      loader: async ({ params: { scope_id, banks } }) => {
        const assets = await firstValueFrom(queryLockerAssetsForZones([scope_id])).catch(() => []);
        const lockers = assets.map((_) => lockerFromAsset(_, banks));
        for (const bank of banks) {
          bank.lockers = lockers.filter((_) => _.bank_id === bank.id).map((_) => __spreadValues({}, _));
        }
        return lockers.filter((_) => _.bank);
      }
    }));
    this.lockers = computed(() => this._lockers.value() ?? [], ...ngDevMode ? [{ debugName: "lockers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered_lockers = computed(() => {
      const level = this._explore.level();
      return this.lockers().filter((item) => !level || (item.zones || item.bank?.zones || []).includes(level.id));
    }, ...ngDevMode ? [{ debugName: "filtered_lockers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered_banks = computed(() => {
      const level = this._explore.level();
      return this.locker_banks().filter((item) => !level || item.zones.includes(level.id));
    }, ...ngDevMode ? [{ debugName: "filtered_banks" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const lvl = this._explore.level();
      const { is_public } = this._explore.options();
      this._building();
      if (!lvl || is_public)
        return;
      untracked(() => {
        const mod = this._org.module("area_management", "AreaManagement");
        if (!mod)
          return;
        const binding = mod.variable(lvl.id);
        this.subscription(`lvl-in_use`, binding.bindThenSubscribe((data) => this._status.set(data?.value?.filter((_) => _.location === "locker") || [])));
      });
    });
    effect(() => {
      const lvl = this._explore.level();
      const locker_banks = this.locker_banks();
      const lockers = this.lockers();
      const status = this._status();
      if (!lvl)
        return;
      untracked(() => {
        const features = [];
        const map_status = {};
        const colours = this._settings.get("app.explore.colors") || {};
        const banks = unique(locker_banks.filter((_) => _.level_id === lvl.id).map((_) => _.id));
        for (const bank of banks) {
          const bank_lockers = lockers.filter((_) => _.bank_id === bank);
          let in_use_count = 0;
          for (const locker of bank_lockers) {
            const in_use = status.find((_) => _.locker_id === locker.id && _.allocated);
            in_use_count += in_use ? 1 : 0;
          }
          const bank_info = locker_banks.find((_) => _.id === bank);
          features.push({
            location: bank_info.map_id,
            content: ExploreLockerBankInfoComponent,
            full_size: true,
            no_scale: true,
            z_index: 20,
            data: {
              bank: bank_info,
              lockers,
              in_use_count,
              locker_count: bank_lockers.length,
              system: this._org.binding("area_management")
            }
          });
          const in_use_percent = bank_lockers.length ? in_use_count / bank_lockers.length : 0;
          const value = in_use_percent > 0.8 ? "busy" : in_use_percent > 0.3 ? "pending" : "free";
          map_status[`#${bank_info.map_id}`] = {
            fill: colours[`lockers-${value}`] || colours[`${value}`] || DEFAULT_COLOURS[`${value}`]
          };
        }
        this._explore.setStyles("lockers", map_status);
        this._explore.setFeatures("lockers", features);
      });
    });
  }
  static {
    this.\u0275fac = function ExploreLockersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreLockersService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreLockersService, factory: _ExploreLockersService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-parking.service.ts
var ExploreParkingService = class _ExploreParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._parking = inject(ParkingService);
    this._options = signal({}, ...ngDevMode ? [{ debugName: "_options" }] : (
      /* istanbul ignore next */
      []
    ));
    this._poll = signal(0, ...ngDevMode ? [{ debugName: "_poll" }] : (
      /* istanbul ignore next */
      []
    ));
    this._building = toSignal(this._org.active_building, {
      initialValue: null
    });
    this._active_levels = toSignal(this._org.active_levels, {
      initialValue: []
    });
    this._parking_users = toSignal(this._parking.users, {
      initialValue: []
    });
    this._assigned_space = toSignal(this._parking.assigned_space, {
      initialValue: null
    });
    this._deny_parking_access = toSignal(this._parking.deny_parking_access, {
      initialValue: false
    });
    this._booked_space = toSignal(this._parking.booked_space, {
      initialValue: null
    });
    this.options = this._options.asReadonly();
    this.on_book = null;
    this.levels = computed(() => this._active_levels().filter((_) => _.tags.includes("parking")), ...ngDevMode ? [{ debugName: "levels" }] : (
      /* istanbul ignore next */
      []
    ));
    this._booking_rules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Fu(bld.id, `parking_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
    }));
    this.booking_rules = computed(() => this._booking_rules.value() ?? [], ...ngDevMode ? [{ debugName: "booking_rules" }] : (
      /* istanbul ignore next */
      []
    ));
    this._events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        bld: this._building(),
        is_public: this._state.options().is_public,
        date: this._options().date,
        poll: this._poll()
      }),
      loader: ({ params: { bld, is_public, date } }) => is_public ? Promise.resolve([]) : firstValueFrom(queryBookings({
        period_start: getUnixTime(startOfMinute(date || Date.now())),
        period_end: getUnixTime(endOfMinute(date || Date.now())),
        type: "parking",
        zones: this._settings.get("app.use_region") ? bld?.parent_id : bld?.id,
        rejected: false
      })).catch(() => [])
    }));
    this.events = computed(() => this._events.value() ?? [], ...ngDevMode ? [{ debugName: "events" }] : (
      /* istanbul ignore next */
      []
    ));
    this._user_events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        date: this._options().date,
        user: this._options().user
      }),
      loader: ({ params: { date, user } }) => firstValueFrom(queryBookings({
        period_start: getUnixTime(startOfDay(date || Date.now())),
        period_end: getUnixTime(endOfDay(date || Date.now())),
        type: "parking",
        email: user || currentUser()?.email
      })).catch(() => [])
    }));
    this.user_events = computed(() => this._user_events.value() ?? [], ...ngDevMode ? [{ debugName: "user_events" }] : (
      /* istanbul ignore next */
      []
    ));
    this._spaces = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const levels = this.levels();
        return levels.length ? levels.map((l) => l.id) : void 0;
      },
      loader: ({ params: zones }) => firstValueFrom(queryParkingSpacesForZones(zones)).catch(() => [])
    }));
    this.spaces = computed(() => this._spaces.value() ?? [], ...ngDevMode ? [{ debugName: "spaces" }] : (
      /* istanbul ignore next */
      []
    ));
    this.active_spaces = computed(() => {
      const level = this._state.level();
      return level ? this.spaces().filter((_) => _.zone_id === level.id) : [];
    }, ...ngDevMode ? [{ debugName: "active_spaces" }] : (
      /* istanbul ignore next */
      []
    ));
    this._users = {};
    this._plate_numbers = {};
    this._available_spaces = signal([], ...ngDevMode ? [{ debugName: "_available_spaces" }] : (
      /* istanbul ignore next */
      []
    ));
    this.available_spaces = this._available_spaces.asReadonly();
    effect(() => {
      const events = this.events();
      const spaces = this.active_spaces();
      const users = this._parking_users();
      const rules = this.booking_rules();
      const { date } = this._options();
      untracked(() => {
        const available = spaces.filter((space) => {
          const event = events.find((e) => e.asset_id === space.id && !e.rejected);
          const level = this._org.levelWithID([space.zone_id]);
          const assigned = `${event?.user_email || space.assigned_to || ""}`.toLowerCase();
          const user = users.find((u) => u.email.toLowerCase() === assigned.toLowerCase());
          const is_restricted = rulesForResource({
            date: date || Date.now(),
            duration: 60,
            host: currentUser(),
            resource: {
              id: space.id,
              zones: [level?.parent_id, level?.id]
            }
          }, rules)?.hidden;
          this._users[space.id] = assigned;
          this._plate_numbers[space.id] = event?.extension_data?.plate_number || user?.plate_number || void 0;
          return !event && !is_restricted && space.bookable !== false;
        });
        this._available_spaces.set(available);
        this._updateParkingSpaces(spaces, available);
      });
    });
    this.setOptions({
      enable_booking: this._settings.get("app.parking.enable_maps") !== false
    });
  }
  startPolling() {
    this.interval("poll", () => this._poll.set(Date.now()), 10 * 1e3);
    this._poll.set(Date.now());
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.update((value) => __spreadValues(__spreadValues({}, value), options));
  }
  _updateParkingSpaces(spaces, available) {
    const styles = {};
    const features = [];
    const actions = [];
    const colours = this._settings.get("app.explore.colors") || {};
    let options = this._options();
    for (const space of spaces) {
      const can_book = !!available.find((_) => _.id === space.id);
      const is_workplace = this._settings.app_name.toLowerCase().includes("workplace") || this._settings.app_name.toLowerCase().includes("staff");
      const is_assigned = is_workplace ? false : !!space.assigned_to;
      const id = space.map_id || space.id;
      const status = space.bookable === false ? "not-bookable" : is_assigned ? can_book ? "pending" : "busy" : can_book ? "free" : "busy";
      styles[`#${id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
        opacity: 0.6
      };
      features.push({
        location: `${id}`,
        content: ExploreParkingInfoComponent,
        z_index: 20,
        hover: true,
        data: __spreadProps(__spreadValues({}, space), {
          user: this._users[space.id],
          plate_number: this._plate_numbers[space.id],
          status: status === "pending" && is_assigned ? "reserved" : status
        })
      });
      if (!can_book)
        continue;
      const book_fn = async () => {
        if (this.on_book) {
          await this.on_book(space);
          this._poll.set(Date.now());
          return;
        }
        if (this._deny_parking_access()) {
          const space_zone = this._org.levelWithID([space.zone_id]);
          return notifyError(i18n("EXPLORE.PARKING_PERMISSIONS_ERROR", {
            name: space_zone?.display_name || space_zone?.name
          }));
        }
        if (this._assigned_space() && this._booked_space()) {
          return notifyError(i18n("EXPLORE.PARKING_ASSIGNED_ERROR", {
            name: space.name || space.id
          }));
        }
        if (this._booked_space()) {
          return notifyError(i18n("EXPLORE.PARKING_EXISTING_ERROR"));
        }
        if (status !== "free") {
          return notifyError(i18n("EXPLORE.PARKING_AVAILABLE_ERROR", {
            name: space.name || "Parking Space"
          }));
        }
        if (space.place_groups?.length && !space.place_groups.find((_) => currentUser().groups.includes(_))) {
          return notifyError(i18n("EXPLORE.PARKING_GROUP_ERROR", {
            name: space.name
          }));
        }
        this._bookings.newForm("parking");
        this._bookings.setOptions({ type: "parking" });
        options = this._options();
        const bookable_hours = this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours") || null;
        if (bookable_hours && !this._settings.get("app.parking.allow_time_changes") && !isWithinBookableHours(Date.now(), bookable_hours)) {
          return notifyError(i18n("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));
        }
        let user = options.host || currentUser();
        const user_email = user?.email;
        const zone = this._org.levelWithID([
          space.zone_id || space.zone
        ]) || this._state.active_level;
        let date = !options.date || isSameDay(options.date, Date.now()) ? startOfMinute(Date.now()).valueOf() : setHours(options.date, 8).valueOf();
        if (bookable_hours) {
          date = alignDateToBookableHours(date, bookable_hours);
        }
        this._bookings.form.patchValue({
          resources: [space],
          asset_id: space.id,
          asset_name: space.name,
          date,
          duration: 11 * 60,
          all_day: true,
          map_id: space?.map_id || space?.id,
          description: space.name,
          user,
          user_email,
          booking_type: "parking",
          zones: [
            this._org.organisation.id,
            this._org.region?.id,
            zone?.parent_id,
            zone?.id
          ]
        });
        await this._bookings.confirmPost().catch((e) => {
          if (e === "User cancelled")
            throw e;
          notifyError(i18n("EXPLORE.PARKING_BOOKING_ERROR", {
            name: space.name || space.id,
            error: e.message || e.error || e
          }));
          throw e;
        });
        notifySuccess(i18n("EXPLORE.PARKING_BOOKING_SUCCESS", {
          name: space.name || space.id
        }));
        this.timeout("poll", () => this._poll.set(Date.now()), 1e3);
      };
      actions.push({
        id,
        action: "click",
        priority: 10,
        callback: book_fn
      });
    }
    this._state.setActions("parking", options.enable_booking ? actions : []);
    this._state.setStyles("parking", styles);
    this._state.setFeatures("parking", features);
  }
  static {
    this.\u0275fac = function ExploreParkingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreParkingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreParkingService, factory: _ExploreParkingService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-poi-modal.component.ts
var _c05 = ["media_el"];
function ExplorePointOfInterestModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, " No available details for this point of interest. ");
    \u0275\u0275elementEnd();
  }
}
function ExplorePointOfInterestModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.item.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.item.name);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 7, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.item.media_url);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "audio", 7, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.item.media_url);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_1_Template, 2, 1, "video", 7)(2, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_2_Template, 2, 1, "audio", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9);
    \u0275\u0275conditionalCreate(5, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_5_Template, 1, 0, "div", 10);
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function ExplorePointOfInterestModalComponent_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePlay());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 12);
    \u0275\u0275text(10, "Read Aloud");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.media_type === "video" ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.playing() ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.playing() ? "stop" : "volume_up");
  }
}
function ExplorePointOfInterestModalComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const details_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", details_r3 == null ? null : details_r3[0], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(details_r3 == null ? null : details_r3[1]);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ExplorePointOfInterestModalComponent_Conditional_11_For_2_Template, 5, 2, "div", 13, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item.extra_details);
  }
}
var ExplorePointOfInterestModalComponent = class _ExplorePointOfInterestModalComponent {
  constructor() {
    this.item = inject(MAT_DIALOG_DATA);
    this.playing = signal(false, ...ngDevMode ? [{ debugName: "playing" }] : (
      /* istanbul ignore next */
      []
    ));
    this._media_el = viewChild("media_el", ...ngDevMode ? [{ debugName: "_media_el" }] : (
      /* istanbul ignore next */
      []
    ));
    this._on_ended = () => {
      this.playing.set(false);
      this._media_el()?.nativeElement.removeEventListener("ended", this._on_ended);
    };
  }
  togglePlay() {
    const el = this._media_el()?.nativeElement;
    if (!el)
      return;
    if (this.playing()) {
      el.pause();
    } else {
      el.addEventListener("ended", this._on_ended);
      el.currentTime = 0;
      el.play();
    }
    this.playing.set(!this.playing());
  }
  static {
    this.\u0275fac = function ExplorePointOfInterestModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExplorePointOfInterestModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorePointOfInterestModalComponent, selectors: [["explore-poi-modal"]], viewQuery: function ExplorePointOfInterestModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._media_el, _c05, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 12, vars: 5, consts: [["media_el", ""], [1, "bg-base-100", "h-screen", "w-full", "max-w-md", "min-w-[20rem]", "overflow-auto", "rounded-sm", "sm:h-auto"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "bg-base-200", "m-4", "flex", "h-[calc(100vh-5.75rem)]", "w-[calc(100%-2rem)]", "items-center", "justify-center", "rounded-lg", "p-8", "text-center", "opacity-50", "sm:h-64"], [1, "bg-base-300", "h-48", "w-full", "object-contain", 3, "src", "alt"], [1, "text-sm"], [1, "pointer-events-none", "absolute", "opacity-0"], ["auth", "", "controls", "", 1, "h-full", "w-full", 3, "source"], [1, "border-base-200", "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "border-t", "p-4"], [1, "relative"], [1, "bg-info", "absolute", "top-2", "left-2", "h-8", "w-8", "animate-ping", "rounded-full"], ["icon", "", "matRipple", "", 1, "bg-base-200", "relative", "h-12", "w-12", 3, "click"], [1, "text-xs", "font-medium"], [1, "border-base-200", "flex", "space-x-4", "border-t", "p-4"], [1, "text-info", "w-20", "min-w-20"]], template: function ExplorePointOfInterestModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header")(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main");
        \u0275\u0275conditionalCreate(8, ExplorePointOfInterestModalComponent_Conditional_8_Template, 2, 0, "p", 3);
        \u0275\u0275conditionalCreate(9, ExplorePointOfInterestModalComponent_Conditional_9_Template, 1, 2, "img", 4);
        \u0275\u0275conditionalCreate(10, ExplorePointOfInterestModalComponent_Conditional_10_Template, 11, 3);
        \u0275\u0275conditionalCreate(11, ExplorePointOfInterestModalComponent_Conditional_11_Template, 3, 0, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.item.name);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.item.image && !ctx.item.media_url && !(ctx.item.extra_details == null ? null : ctx.item.extra_details.length) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.image ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.media_url ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.item.extra_details == null ? null : ctx.item.extra_details.length) ? 11 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      AuthenticatedImageDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestModalComponent, [{
    type: Component,
    args: [{ selector: `explore-poi-modal`, template: `
        <div
            class="bg-base-100 h-screen w-full max-w-md min-w-[20rem] overflow-auto rounded-sm sm:h-auto"
        >
            <header>
                <h2>{{ item.name }}</h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main>
                @if (
                    !item.image &&
                    !item.media_url &&
                    !item.extra_details?.length
                ) {
                    <p
                        class="bg-base-200 m-4 flex h-[calc(100vh-5.75rem)] w-[calc(100%-2rem)] items-center justify-center rounded-lg p-8 text-center opacity-50 sm:h-64"
                    >
                        No available details for this point of interest.
                    </p>
                }
                @if (item.image) {
                    <img
                        class="bg-base-300 h-48 w-full object-contain"
                        [src]="item.image"
                        [alt]="item.name"
                    />
                }
                @if (item.media_url) {
                    <div class="pointer-events-none absolute opacity-0">
                        @if (item.media_type === 'video') {
                            <video
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item.media_url"
                                controls
                            ></video>
                        } @else {
                            <audio
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item.media_url"
                                controls
                            ></audio>
                        }
                    </div>
                    <div
                        class="border-base-200 flex w-full flex-col items-center justify-center space-y-2 border-t p-4"
                    >
                        <div class="relative">
                            @if (playing()) {
                                <div
                                    class="bg-info absolute top-2 left-2 h-8 w-8 animate-ping rounded-full"
                                ></div>
                            }
                            <button
                                icon
                                matRipple
                                class="bg-base-200 relative h-12 w-12"
                                (click)="togglePlay()"
                            >
                                <icon>{{
                                    playing() ? 'stop' : 'volume_up'
                                }}</icon>
                            </button>
                        </div>
                        <p class="text-xs font-medium">Read Aloud</p>
                    </div>
                }
                @if (item.extra_details?.length) {
                    <div class="text-sm">
                        @for (details of item.extra_details; track $index) {
                            <div
                                class="border-base-200 flex space-x-4 border-t p-4"
                            >
                                <div class="text-info w-20 min-w-20">
                                    {{ details?.[0] }}
                                </div>
                                <div>{{ details?.[1] }}</div>
                            </div>
                        }
                    </div>
                }
            </main>
        </div>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, { _media_el: [{ type: ViewChild, args: ["media_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorePointOfInterestModalComponent, { className: "ExplorePointOfInterestModalComponent", filePath: "libs/explore/src/lib/explore-poi-modal.component.ts", lineNumber: 128 });
})();

// libs/explore/src/lib/explore-poi.service.ts
var ExplorePointOfInterestService = class _ExplorePointOfInterestService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._explore = inject(ExploreStateService);
    this._dialog = inject(MatDialog);
    this._building = toSignal(this._org.active_building, {
      initialValue: null
    });
    this._features = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_features" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: async () => {
        const metadata = await Fu(this._org.organisation.id, "points-of-interest").catch((_) => ({ details: {} }));
        const mapping = metadata.details || {};
        const levels = this._org.levelsForBuilding(this._org.building);
        const list = flatten(levels.map((lvl) => (mapping[lvl.id] || []).map((_) => __spreadProps(__spreadValues({}, _), {
          zone_id: lvl.id
        }))));
        return list;
      }
    }));
    this._poi_list = computed(() => {
      const features = this._features.value() ?? [];
      const level = this._explore.level();
      return level ? features.filter((poi) => poi.zone_id === level.id) : [];
    }, ...ngDevMode ? [{ debugName: "_poi_list" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const list = this._poi_list();
      untracked(() => this._updateMapDetails(list));
    });
  }
  _updateMapDetails(list) {
    const features = [];
    const actions = [];
    for (const item of list) {
      if (!item.location)
        continue;
      if (!(item.extra_details?.length > 0 || item.image || item.media_url)) {
        continue;
      }
      let can_act = true;
      ["mousedown", "touchstart"].forEach((event) => actions.push({
        id: item.location,
        action: event,
        priority: 10,
        callback: () => {
          can_act = true;
          this.timeout("act", () => can_act = false);
        }
      }));
      ["mouseup", "touchend"].forEach((event) => actions.push({
        id: item.location,
        action: event,
        priority: 10,
        callback: () => {
          if (can_act)
            this.viewDetails(item);
        }
      }));
      features.push({
        track_id: `poi:hover:${item.location}`,
        location: item.location,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: item.location,
          map_id: item.location,
          name: item.name
        },
        z_index: 20
      });
    }
    this._explore.setActions("poi", actions || []);
    this._explore.setFeatures("poi", features || []);
  }
  viewDetails(item) {
    this._dialog.open(ExplorePointOfInterestModalComponent, {
      data: item
    });
  }
  static {
    this.\u0275fac = function ExplorePointOfInterestService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExplorePointOfInterestService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExplorePointOfInterestService, factory: _ExplorePointOfInterestService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/components/src/lib/map-canvas.component.ts
var _c06 = ["canvas"];
var _c14 = ["map-canvas", ""];
var MapCanvasComponent = class _MapCanvasComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this.zoom = signal(1, ...ngDevMode ? [{ debugName: "zoom" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ratio = signal(1, ...ngDevMode ? [{ debugName: "ratio" }] : (
      /* istanbul ignore next */
      []
    ));
    this.svg_ratio = signal(1, ...ngDevMode ? [{ debugName: "svg_ratio" }] : (
      /* istanbul ignore next */
      []
    ));
    this.width = signal(1e4, ...ngDevMode ? [{ debugName: "width" }] : (
      /* istanbul ignore next */
      []
    ));
    this.canvas_element = viewChild("canvas", ...ngDevMode ? [{ debugName: "canvas_element" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ratioed_height = computed(() => +(this.width() * this.ratio()).toFixed(2), ...ngDevMode ? [{ debugName: "ratioed_height" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const canvas = this.canvas_element();
      const polygons = this._data.polygons();
      if (!canvas)
        return;
      this._handleStateChange(polygons);
    });
  }
  _handleStateChange(polygon_list) {
    const canvas = this.canvas_element().nativeElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    polygon_list.forEach((poly) => this._drawPolygon(poly));
  }
  _drawPolygon(polygon) {
    const points = polygon.points;
    if (!points?.length)
      return;
    const canvas = this.canvas_element().nativeElement;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.fillStyle = polygon.color + "80";
    ctx.beginPath();
    ctx.moveTo(points[0][0] * width, points[0][1] * height);
    points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = shiftColorTowards(polygon.color, "#888888", 0.5);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0][0] * width, points[0][1] * height);
    points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
    ctx.closePath();
    ctx.stroke();
    if (this._data.draw_points !== false) {
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = polygon.color;
      ctx.lineWidth = 4;
      points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x * width, y * height, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }
    if (this._data.draw_labels !== false) {
      const center = points.reduce((acc, [x, y]) => [acc[0] + x, acc[1] + y], [0, 0]);
      center[0] /= points.length;
      center[1] /= points.length;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFF";
      ctx.font = "32px sans-serif";
      ctx.fillText(polygon.name, center[0] * width + 1, center[1] * height + 2);
      ctx.fillStyle = "#000";
      ctx.fillText(polygon.name, center[0] * width, center[1] * height);
    }
  }
  static {
    this.\u0275fac = function MapCanvasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapCanvasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapCanvasComponent, selectors: [["", "map-canvas", ""]], viewQuery: function MapCanvasComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.canvas_element, _c06, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, attrs: _c14, decls: 2, vars: 4, consts: [["canvas", ""], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2"]], template: function MapCanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.width() * ctx.svg_ratio() * ctx.zoom() + "%")("height", ctx.width() * ctx.svg_ratio() * ctx.ratio() * ctx.zoom() + "%");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapCanvasComponent, [{
    type: Component,
    args: [{ selector: "[map-canvas]", template: `
        <canvas
            #canvas
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            [style.width]="width() * svg_ratio() * zoom() + '%'"
            [style.height]="width() * svg_ratio() * ratio() * zoom() + '%'"
        ></canvas>
    ` }]
  }], () => [], { canvas_element: [{ type: ViewChild, args: ["canvas", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapCanvasComponent, { className: "MapCanvasComponent", filePath: "libs/components/src/lib/map-canvas.component.ts", lineNumber: 42 });
})();

// libs/explore/src/lib/explore-sensor-info.component.ts
function ExploreSensorInfoComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "thermostat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.temp(), "\u02DA", ctx_r0.temp_unit());
  }
}
function ExploreSensorInfoComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "opacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.humidity(), "%");
  }
}
function ExploreSensorInfoComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "icon", 6);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd()();
  }
}
function ExploreSensorInfoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, ExploreSensorInfoComponent_ng_template_3_Conditional_1_Template, 5, 2, "div", 3);
    \u0275\u0275conditionalCreate(2, ExploreSensorInfoComponent_ng_template_3_Conditional_2_Template, 5, 1, "div", 3);
    \u0275\u0275conditionalCreate(3, ExploreSensorInfoComponent_ng_template_3_Conditional_3_Template, 3, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.humidity() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp() > 82 ? 3 : -1);
  }
}
var shown_id = "";
var ExploreSensorInfoComponent = class _ExploreSensorInfoComponent extends AsyncHandler {
  constructor() {
    super();
    this._details = inject(MAP_FEATURE_DATA);
    this.temp = signal(this._details.temp || 0, ...ngDevMode ? [{ debugName: "temp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.temp_unit = signal(this._details.temp_unit || "C", ...ngDevMode ? [{ debugName: "temp_unit" }] : (
      /* istanbul ignore next */
      []
    ));
    this.humidity = signal(this._details.humidity || 0, ...ngDevMode ? [{ debugName: "humidity" }] : (
      /* istanbul ignore next */
      []
    ));
    this.show = computed(() => shown_id === this._details.id, ...ngDevMode ? [{ debugName: "show" }] : (
      /* istanbul ignore next */
      []
    ));
    this.setShow = (value) => {
      this.timeout("show", () => shown_id = value ? this._details.id : "");
    };
  }
  static {
    this.\u0275fac = function ExploreSensorInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSensorInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSensorInfoComponent, selectors: [["explore-sensor-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [["stats", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "center", "xPosition", "center", 1, "bg-base-100", "pointer-events-auto", "absolute", "top-1/2", "left-1/2", "h-7", "w-7", "min-w-0", "-translate-x-1/2", "-translate-y-1/2", "shadow-sm", 3, "content"], [1, "border-base-200", "bg-base-100", "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "rounded-lg", "border", "p-2", "text-xl"], [1, "flex", "items-center", "space-x-2", "pr-2", "whitespace-nowrap"], [1, "border-base-200", "bg-base-100", "absolute", "top-0", "right-0", "translate-x-1/2", "-translate-y-1/2", "rounded-full", "border"], [1, ""], [1, "text-error", "text-xl"]], template: function ExploreSensorInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 1)(1, "icon");
        \u0275\u0275text(2, " visibility ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, ExploreSensorInfoComponent_ng_template_3_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const stats_r2 = \u0275\u0275reference(4);
        \u0275\u0275property("content", stats_r2);
      }
    }, dependencies: [CustomTooltipComponent, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSensorInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-sensor-info", template: `
        <button
            icon
            matRipple
            customTooltip
            [content]="stats"
            yPosition="center"
            xPosition="center"
            class="bg-base-100 pointer-events-auto absolute top-1/2 left-1/2 h-7 w-7 min-w-0 -translate-x-1/2 -translate-y-1/2 shadow-sm"
        >
            <icon> visibility </icon>
        </button>
        <ng-template #stats>
            <div
                class="border-base-200 bg-base-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border p-2 text-xl"
            >
                @if (temp()) {
                    <div
                        class="flex items-center space-x-2 pr-2 whitespace-nowrap"
                    >
                        <icon>thermostat</icon>
                        <div class="">{{ temp() }}\u02DA{{ temp_unit() }}</div>
                    </div>
                }
                @if (humidity()) {
                    <div
                        class="flex items-center space-x-2 pr-2 whitespace-nowrap"
                    >
                        <icon>opacity</icon>
                        <div class="">{{ humidity() }}%</div>
                    </div>
                }
                @if (temp() > 82) {
                    <div
                        class="border-base-200 bg-base-100 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full border"
                    >
                        <icon class="text-error text-xl">error</icon>
                    </div>
                }
            </div>
        </ng-template>
    `, imports: [CustomTooltipComponent, IconComponent] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSensorInfoComponent, { className: "ExploreSensorInfoComponent", filePath: "libs/explore/src/lib/explore-sensor-info.component.ts", lineNumber: 63 });
})();

// libs/explore/src/lib/explore-zones.service.ts
var ExploreZonesService = class _ExploreZonesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._injector = inject(Injector);
    this._org_initialised = toSignal(this._org.initialised, {
      initialValue: false
    });
    this._building = toSignal(this._org.active_building, {
      initialValue: null
    });
    this._area_list = [];
    this._statuses = {};
    this._count_key = {};
    this._location = {};
    this._label_location = {};
    this._capacity = {};
    this._draw = {};
    this._points = {};
    this._features = [];
    this._polygons = signal([], ...ngDevMode ? [{ debugName: "_polygons" }] : (
      /* istanbul ignore next */
      []
    ));
    this._area_data = signal(null, ...ngDevMode ? [{ debugName: "_area_data" }] : (
      /* istanbul ignore next */
      []
    ));
    this._zone_data = signal(null, ...ngDevMode ? [{ debugName: "_zone_data" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const bld = this._building();
      const lvl = this._state.level();
      const { is_public } = this._state.options();
      if (!bld || !lvl || is_public)
        return;
      untracked(() => this._bindToLevel(lvl.id));
    });
    effect(() => {
      const areas = this._area_data();
      const zone = this._zone_data();
      this.timeout("parse_data", () => this.parseData([
        ...areas?.value || [],
        ...(zone?.value || []).filter((_) => _.location === "area")
      ]), 100);
    });
    this.init();
  }
  async init() {
    await firstValueWhere(this._org_initialised, (_) => !!_, this._injector);
    const zone_metadata = await Promise.all(this._org.levels.map((bld) => Fu(bld.id, "map_regions").catch(() => null)));
    this._area_list = [];
    for (const zone of zone_metadata) {
      const areas = zone?.details?.areas;
      if (!areas)
        continue;
      for (const area of areas) {
        const { capacity, hide_label, label_location, draw_polygon, area_count_key } = area.properties || {};
        const { coordinates } = area.geometry || {};
        this._capacity[area.id] = capacity || 100;
        this._count_key[area.id] = area_count_key || "";
        this._location[area.id] = coordinates?.length ? getCenterPoint(coordinates) : null;
        this._label_location[area.id] = hide_label === false ? label_location || this._location[area.id] : null;
        this._draw[area.id] = !!draw_polygon || this._settings.get("app.explore.use_zone_polygons");
        this._points[area.id] = coordinates || [];
        this._area_list.push(area.map_id || area.id);
      }
    }
    this._state.setFeatures("zones-canvas", [
      {
        track_id: "zones-canvas",
        location: { x: 0.5, y: 0.5 },
        content: MapCanvasComponent,
        data: {
          polygons: this._polygons.asReadonly(),
          draw_points: false,
          draw_labels: false
        }
      }
    ]);
    this.updateStatus();
  }
  _bindToLevel(zone_id) {
    this._statuses = {};
    const mod = this._org.module("area_management", "AreaManagement");
    if (!mod)
      return;
    const bind_areas = mod.variable(`${zone_id}:areas`);
    const bind_zone = mod.variable(`${zone_id}`);
    this.subscription("binding", bind_areas.bindThenSubscribe((d2) => this._area_data.set(d2)));
    this.subscription("zone-binding", bind_zone.bindThenSubscribe((d2) => this._zone_data.set(d2)));
  }
  parseData(value = []) {
    const labels = [];
    const features = [];
    const temp_unit = this._settings.get("app.use_imperial_units") ? "F" : "C";
    for (const zone of value) {
      const id = zone.map_id || zone.area_id;
      const capacity = zone.capacity || this._capacity[id] || 100;
      const count = zone[this._count_key[id] || this._settings.get("app.explore.area_count_key") || "count"] || 0;
      const filled = count / capacity;
      this._statuses[id] = zone.at_location ? "busy" : filled < 0.4 ? "free" : filled < 0.75 ? "pending" : "busy";
      if (!this._location[id])
        continue;
      let content = "";
      if (zone.count) {
        content += i18n("EXPLORE.DEVICE_COUNT", { count: zone.count }) + "\n";
      }
      if (zone.temperature)
        content += i18n("EXPLORE.SENSORS_TEMP", {
          value: `${zone.temperature} \xB0${temp_unit}
`
        });
      if (zone.people_count > 0)
        content += i18n("EXPLORE.SENSORS_PEOPLE", {
          count: `${zone.people_count_sum}
`
        });
      if (zone.humidity)
        content += i18n("EXPLORE.SENSORS_HUMIDITY", {
          value: `${zone.humidity}
`
        });
      if (zone.queue_size)
        content += i18n("EXPLORE.SENSORS_QUEUE", {
          value: `${zone.queue_size}
`
        });
      if (zone.counter)
        content += i18n("EXPLORE.SENSORS_COUNT", {
          value: `${zone.counter}
`
        });
      if (this._label_location[id] && !this._settings.get("app.explore.show_zone_labels")) {
        labels.push({
          location: this._label_location[id],
          content,
          z_index: 100
        });
      }
      if (this._settings.get("app.explore.show_zone_sensor_info") && (zone.temperature || zone.humidity)) {
        features.push({
          track_id: `sensors:${id}`,
          location: this._location[id],
          content: ExploreSensorInfoComponent,
          data: {
            id,
            temp: zone.temperature || 10,
            temp_unit,
            humidity: zone.humidity || 10
          },
          z_index: 98
        });
      }
    }
    this._features = features;
    this._state.setLabels("zones", labels);
    this.updateStatus();
  }
  updateStatus() {
    const style_map = {};
    const features = [];
    const colours = this._settings.get("app.explore.colors") || {};
    const polygons = [];
    for (const zone_id in this._statuses) {
      const colour = colours[`zone-${this._statuses[zone_id]}`] || colours[`${this._statuses[zone_id]}`] || DEFAULT_COLOURS[`${this._statuses[zone_id]}`];
      if (this._draw[zone_id]) {
        polygons.push({
          name: zone_id,
          points: this._points[zone_id],
          color: colour
        });
      } else {
        if (this._state.has("style", zone_id, ["zones", "zones-styles"])) {
          features.push({
            location: zone_id,
            content: ExploreIconComponent,
            data: {
              icon: { content: "pin_drop" }
            },
            full_size: true,
            z_index: 98
          });
        } else {
          style_map[`#${zone_id}`] = {
            fill: colour,
            opacity: 0.6
          };
        }
      }
    }
    this._polygons.set(polygons);
    this._state.setFeatures("zones", [...features, ...this._features]);
    this._state.setStyles("zones-styles", style_map);
  }
  static {
    this.\u0275fac = function ExploreZonesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreZonesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreZonesService, factory: _ExploreZonesService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZonesService, [{
    type: Injectable
  }], () => [], null);
})();
function getCenterPoint(points) {
  const diff = (points || []).reduce((m, [x, y]) => ({
    x_min: x < m.x_min ? x : m.x_min,
    x_max: x > m.x_max ? x : m.x_max,
    y_min: y < m.y_min ? y : m.y_min,
    y_max: y > m.y_max ? y : m.y_max
  }), {
    x_min: 100,
    x_max: -100,
    y_min: 100,
    y_max: -100
  });
  return {
    x: diff.x_min + (diff.x_max - diff.x_min) / 2,
    y: diff.y_min + (diff.y_max - diff.y_min) / 2
  };
}

// libs/explore/src/lib/explore-map-view.component.ts
var _c07 = () => ({ controls: true });
function ExploreMapViewComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function ExploreMapViewComponent_Conditional_1_Conditional_2_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleZones($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 2, "EXPLORE.AREAS"))("ngModel", !((tmp_3_0 = ctx_r1.options()) == null ? null : tmp_3_0.disable == null ? null : tmp_3_0.disable.includes("zones")));
  }
}
function ExploreMapViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "explore-map-controls");
    \u0275\u0275conditionalCreate(2, ExploreMapViewComponent_Conditional_1_Conditional_2_Template, 2, 4, "settings-toggle", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_zones() ? 2 : -1);
  }
}
function ExploreMapViewComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ExploreMapViewComponent_Conditional_2_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.legend_collapsed.set(!ctx_r1.legend_collapsed()));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-expanded", !ctx_r1.legend_collapsed());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "EXPLORE.LEGEND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.legend_collapsed() ? "Show" : "Hide", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "EXPLORE.LEGEND"), " ");
  }
}
function ExploreMapViewComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "EXPLORE.LEGEND"), " ");
  }
}
function ExploreMapViewComponent_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pair_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", pair_r4[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r4[0]);
  }
}
function ExploreMapViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, ExploreMapViewComponent_Conditional_2_Conditional_1_Template, 9, 8)(2, ExploreMapViewComponent_Conditional_2_Conditional_2_Template, 3, 3, "h3", 6);
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275repeaterCreate(4, ExploreMapViewComponent_Conditional_2_For_5_Template, 4, 3, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.legend().length > 3 ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r1.legend_collapsed() && ctx_r1.legend().length > 3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.legend());
  }
}
function ExploreMapViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ExploreMapViewComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearLocate());
    });
    \u0275\u0275text(1, " Clear Pin ");
    \u0275\u0275elementEnd();
  }
}
var EMPTY2 = [];
var ExploreMapViewComponent = class _ExploreMapViewComponent extends AsyncHandler {
  async toggleZones(enabled) {
    const options = this.options();
    const disable = !enabled ? unique([...options?.disable || [], "zones", "devices"]) : options?.disable?.filter((_) => _ !== "zones" && _ !== "devices") || [];
    this.setOptions({ disable });
  }
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._s = inject(ExploreSpacesService);
    this._desks = inject(ExploreDesksService);
    this._zones = inject(ExploreZonesService);
    this._parking = inject(ExploreParkingService);
    this._lockers = inject(ExploreLockersService);
    this._pois = inject(ExplorePointOfInterestService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._spaces = inject(SpacesService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._space_pipe = inject(SpacePipe);
    this._maps = inject(MapsPeopleService);
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.message = this._state.message;
    this.setOptions = (o) => this._state.setOptions(o);
    this.locate = signal("", ...ngDevMode ? [{ debugName: "locate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.map_info = signal({}, ...ngDevMode ? [{ debugName: "map_info" }] : (
      /* istanbul ignore next */
      []
    ));
    this.legend_collapsed = signal(true, ...ngDevMode ? [{ debugName: "legend_collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.show_legend = settingSignal("explore.show_legend", false);
    this.hide_zones = settingSignal("explore.hide_zones", false);
    this.legend = settingSignal("explore.legend", EMPTY2);
    this.use_mapsindoors = toSignal(this._maps.available$ || this._maps.use_mapspeople$, { initialValue: false });
  }
  async ngOnInit() {
    this._state.reset();
    await firstTruthyValueFrom(this._spaces.initialised);
    this.toggleZones(false);
    this.subscription("parking_poll", this._parking.startPolling?.() || { unsubscribe: () => null });
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("level") || params.has("zone")) {
        this._state.setLevel(params.get("level") || params.get("zone"));
      }
      this._state.setFeatures("_located", []);
      if (params.has("space")) {
        this.locateSpace(params.get("space"));
      } else if (params.has("user")) {
        let user = this._settings.value("last_search");
        if (!user || params.get("user") !== user.email) {
          user = null;
          user = await showStaff(params.get("user")).toPromise();
        }
        if (!user)
          return notifyError(i18n("EXPLORE.LOCATE_USER_FAILED", {
            name: params.get("user")
          }));
        this.locateUser(user instanceof Array ? user[0] : user).catch((e) => {
          notifyError(e);
          this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { user: "" },
            queryParamsHandling: "preserve"
          });
        });
      } else if (params.has("locate")) {
        this._locateFeature(params.get("locate"), params.get("name"));
      } else {
        this.timeout("update_location", () => {
          this._state.setFeatures("_located", []);
        });
      }
    }));
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  clearLocate() {
    this.locate.set("");
    this._state.setFeatures("_located", []);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        user: void 0,
        space: void 0,
        locate: void 0,
        name: void 0
      },
      queryParamsHandling: "merge"
    });
  }
  _locateFeature(id, name = "") {
    const has_coordinates = id.includes(",");
    const parts = id.split(",");
    const feature = {
      track_id: `locate-${id}`,
      location: has_coordinates ? { x: parseFloat(parts[0]), y: parseFloat(parts[1]) } : id,
      content: MapPinComponent,
      z_index: 99,
      data: { message: name }
    };
    this.timeout("update_location", () => {
      this.locate.set(id);
      this._state.setFeatures("_located", [feature]);
    });
  }
  async locateSpace(id) {
    const space = await this._space_pipe.transform(id);
    if (!space)
      return notifyError(i18n("EXPLORE.LOCATE_SPACE_DETAILS_FAILED"));
    this._state.setLevel(this._org.levelWithID(space.zones)?.id);
    const feature = {
      track_id: `locate-${space.id}`,
      location: space.map_id,
      content: MapPinComponent,
      z_index: 99,
      data: {
        message: `${space.display_name || space.name} is here`
      }
    };
    this.timeout("update_location", () => {
      this.locate.set(id);
      this._state.setFeatures("_located", [feature]);
    });
  }
  async locateUser(user) {
    const binding = this._org.binding("location_services");
    const mod = this._org.module("location_services", "LocationServices");
    if (!mod)
      throw i18n("EXPLORE.LOCATE_SERVICE_UNAVAILABLE");
    const priority = binding?.priority || [];
    const locations = (await mod.execute("locate_user", [
      user.email,
      user.username || user.id
    ])).map((i) => new MapLocation(i));
    locations.sort((a, b) => (priority.includes(a.type) ? priority.indexOf(a.type) : 999) - (priority.includes(b.type) ? priority.indexOf(b.type) : 999));
    if (!locations?.length)
      throw i18n("EXPLORE.LOCATE_USER_NOT_FOUND");
    let loc = locations.find(({ position }) => typeof position !== "string" || position in this.map_info());
    if (!loc)
      loc = locations[0];
    if (typeof loc.position !== "string") {
      notifyWarn(i18n(`EXPLORE.LOCATE_USER_FOUND_NO_PIN`, { type: loc.type }));
    }
    this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
    const pos = loc.position;
    const { coordinates_from } = loc;
    const feature = {
      track_id: `locate-${user.id}`,
      location: locations[0].type === "wireless" ? {
        x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
        y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
      } : pos,
      content: loc.type === "wireless" ? MapRadiusComponent : MapPinComponent,
      z_index: 99,
      data: {
        message: i18n("EXPLORE.LOCATE_USER", { name: user.name }),
        radius: loc.variance,
        last_seen: loc.last_seen
      }
    };
    this.timeout("update_location", () => {
      this.locate.set(user.id || user.email);
      this._state.setFeatures("_located", [feature]);
    });
  }
  static {
    this.\u0275fac = function ExploreMapViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreMapViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapViewComponent, selectors: [["explore-map-view"]], features: [\u0275\u0275ProvidersFeature([
      ExploreDesksService,
      ExploreSpacesService,
      ExploreZonesService,
      ExploreParkingService,
      ExploreLockersService,
      ExplorePointOfInterestService,
      SpacePipe
    ]), \u0275\u0275InheritDefinitionFeature], decls: 4, vars: 11, consts: [[3, "mapInfo", "src", "styles", "features", "actions", "labels", "focus", "options"], ["controls", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "max-w-[calc(100vw-1rem)]", "space-y-2", "overflow-hidden", "rounded-lg", "border", "p-2", "shadow-xl"], ["legend", "", 1, "border-base-300", "bg-base-100", "absolute", "bottom-2", "left-2", "gap-2", "rounded-lg", "border"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "h-12", "min-w-32", "rounded-lg", "border", "px-4", "shadow-sm"], [1, "mt-2", 3, "name", "ngModel"], [1, "mt-2", 3, "ngModelChange", "name", "ngModel"], [1, "min-w-64", "p-3", "font-medium"], ["id", "explore-map-legend-items", 1, "space-y-1", "px-4", "pb-3", "sm:block"], [1, "flex", "items-center", "space-x-2"], ["type", "button", "aria-controls", "explore-map-legend-items", 1, "flex", "w-full", "min-w-64", "items-center", "justify-between", "space-x-4", "p-3", "text-left", "font-medium", "sm:hidden", 3, "click"], [1, "text-sm", "underline", "sm:hidden"], [1, "hidden", "min-w-64", "p-3", "font-medium", "sm:block"], [1, "border-base-200", "h-3", "w-3", "rounded-full", "border"], [1, "text-sm"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "h-12", "min-w-32", "rounded-lg", "border", "px-4", "shadow-sm", 3, "click"]], template: function ExploreMapViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "interactive-map", 0);
        \u0275\u0275listener("mapInfo", function ExploreMapViewComponent_Template_interactive_map_mapInfo_0_listener($event) {
          return ctx.map_info.set($event ?? {});
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(1, ExploreMapViewComponent_Conditional_1_Template, 3, 1, "div", 1);
        \u0275\u0275conditionalCreate(2, ExploreMapViewComponent_Conditional_2_Template, 6, 3, "div", 2);
        \u0275\u0275conditionalCreate(3, ExploreMapViewComponent_Conditional_3_Template, 2, 0, "button", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("src", ctx.url())("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("labels", ctx.labels())("focus", ctx.locate())("options", \u0275\u0275pureFunction0(10, _c07));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.use_mapsindoors() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_legend() && ctx.legend().length ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.locate() ? 3 : -1);
      }
    }, dependencies: [
      InteractiveMapComponent,
      MatRippleModule,
      MatRipple,
      ExploreMapControlComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      SettingsToggleComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[zones][_ngcontent-%COMP%] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapViewComponent, [{
    type: Component,
    args: [{ selector: "explore-map-view", template: `
        <interactive-map
            [src]="url()"
            [styles]="styles()"
            [features]="features()"
            [actions]="actions()"
            [labels]="labels()"
            [focus]="locate()"
            [options]="{ controls: true }"
            (mapInfo)="map_info.set($event ?? $any({}))"
        />
        @if (!use_mapsindoors()) {
            <div
                controls
                class="border-base-300 bg-base-100 absolute top-2 left-2 max-w-[calc(100vw-1rem)] space-y-2 overflow-hidden rounded-lg border p-2 shadow-xl"
            >
                <explore-map-controls></explore-map-controls>
                @if (!hide_zones()) {
                    <settings-toggle
                        class="mt-2"
                        [name]="'EXPLORE.AREAS' | translate"
                        [ngModel]="!options()?.disable?.includes('zones')"
                        (ngModelChange)="toggleZones($event)"
                    />
                }
            </div>
        }
        @if (show_legend() && legend().length) {
            <div
                legend
                class="border-base-300 bg-base-100 absolute bottom-2 left-2 gap-2 rounded-lg border"
            >
                @if (legend().length > 3) {
                    <button
                        type="button"
                        class="flex w-full min-w-64 items-center justify-between space-x-4 p-3 text-left font-medium sm:hidden"
                        [attr.aria-expanded]="!legend_collapsed()"
                        aria-controls="explore-map-legend-items"
                        (click)="legend_collapsed.set(!legend_collapsed())"
                    >
                        <div>{{ 'EXPLORE.LEGEND' | translate }}</div>
                        <div class="text-sm underline sm:hidden">
                            {{ legend_collapsed() ? 'Show' : 'Hide' }}
                        </div>
                    </button>
                    <h3 class="hidden min-w-64 p-3 font-medium sm:block">
                        {{ 'EXPLORE.LEGEND' | translate }}
                    </h3>
                } @else {
                    <h3 class="min-w-64 p-3 font-medium">
                        {{ 'EXPLORE.LEGEND' | translate }}
                    </h3>
                }
                <div
                    id="explore-map-legend-items"
                    class="space-y-1 px-4 pb-3 sm:block"
                    [class.hidden]="legend_collapsed() && legend().length > 3"
                >
                    @for (pair of legend(); track pair) {
                        <div class="flex items-center space-x-2">
                            <div
                                class="border-base-200 h-3 w-3 rounded-full border"
                                [style.background-color]="pair[1]"
                            ></div>
                            <div class="text-sm">{{ pair[0] }}</div>
                        </div>
                    }
                </div>
            </div>
        }
        @if (locate()) {
            <button
                class="border-base-300 bg-base-100 absolute top-2 right-2 h-12 min-w-32 rounded-lg border px-4 shadow-sm"
                matRipple
                (click)="clearLocate()"
            >
                Clear Pin
            </button>
        }
    `, providers: [
      ExploreDesksService,
      ExploreSpacesService,
      ExploreZonesService,
      ExploreParkingService,
      ExploreLockersService,
      ExplorePointOfInterestService,
      SpacePipe
    ], imports: [
      TranslatePipe,
      InteractiveMapComponent,
      MatRippleModule,
      ExploreMapControlComponent,
      FormsModule,
      SettingsToggleComponent
    ], styles: ["/* angular:styles/component:css;f0dd04a674d5d39d9f19b967c64f941cbd15e6ed17e75f4055e915dd830afa8d;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-view.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[zones] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapViewComponent, { className: "ExploreMapViewComponent", filePath: "libs/explore/src/lib/explore-map-view.component.ts", lineNumber: 156 });
})();

// libs/explore/src/lib/explore-search.service.ts
var EMERGENCY_CONTACTS_CATEGORY_NAME = "_EMERGENCY_CONTACTS_";
var BASE_ENDPOINT = "/api/engine/v2";
var ASCENDING_NAME_SORTER = new Intl.Collator(void 0, {
  numeric: true,
  sensitivity: "base"
});
function queryAssetCategoriesLocal(query = {}) {
  const q = toQueryString(query);
  return d(`${BASE_ENDPOINT}/asset_categories${q ? "?" + q : ""}`).then((_) => _);
}
function queryAssetTypesLocal(query = {}) {
  const q = toQueryString(query);
  return d(`${BASE_ENDPOINT}/asset_types${q ? "?" + q : ""}`).then((_) => _);
}
function queryAssetsLocal(query = {}) {
  const q = toQueryString(query);
  return d(`${BASE_ENDPOINT}/assets${q ? "?" + q : ""}`).then((_) => _);
}
var TYPES = ["space", "feature", "contact", "user"];
function typeIndex(item) {
  return TYPES.indexOf(item.is_role ? "contact" : item.type);
}
function compareSearchResultsAscending(item_a, item_b) {
  return ASCENDING_NAME_SORTER.compare(item_a.name || "", item_b.name || "") || ASCENDING_NAME_SORTER.compare(item_a.description || "", item_b.description || "") || typeIndex(item_a) - typeIndex(item_b);
}
function sortGlobalSearchResults(results, local_zones) {
  const local_zone_set = new Set(local_zones.filter((_) => !!_));
  const local_contacts = results.filter((_) => _.is_role && !!_.zone && local_zone_set.has(_.zone || "")).sort(compareSearchResultsAscending);
  const remaining_results = results.filter((_) => !(_.is_role && !!_.zone && local_zone_set.has(_.zone || ""))).sort(compareSearchResultsAscending);
  return [...local_contacts, ...remaining_results];
}
var ExploreSearchService = class _ExploreSearchService {
  /** Extract zones from in-progress bookings */
  _getInProgressZones(bookings) {
    if (!bookings?.length)
      return [];
    const zones = [];
    for (const booking of bookings) {
      if (booking instanceof CalendarEvent) {
        if (booking.system?.zones?.length) {
          zones.push(...booking.system.zones);
        }
        booking.resources?.forEach((r) => {
          if (r.zones?.length) {
            zones.push(...r.zones);
          }
        });
      } else if (booking instanceof Booking) {
        if (booking.zones?.length) {
          zones.push(...booking.zones);
        }
      }
    }
    return zones.filter((z) => this._org.levelWithID([z]));
  }
  _getPriorityZones(bookings, current_level_id) {
    return Array.from(/* @__PURE__ */ new Set([
      ...current_level_id ? [current_level_id] : [],
      ...this._getInProgressZones(bookings)
    ]));
  }
  hideItem(name) {
    const hide_items = this._settings.get("app.hide_global_search_items") || [];
    return hide_items.includes(name);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._maps_people = inject(MapsPeopleService);
    this._state = inject(ExploreStateService);
    this._injector = inject(Injector);
    this._initialised = toSignal(this._org.initialised, {
      initialValue: false
    });
    this._building = toSignal(this._org.active_building, {
      initialValue: null
    });
    this._maps_people_available = toSignal(this._maps_people.available$, {
      initialValue: false
    });
    this._in_progress_bookings = signal([], ...ngDevMode ? [{ debugName: "_in_progress_bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this._emergency_contacts = signal([], ...ngDevMode ? [{ debugName: "_emergency_contacts" }] : (
      /* istanbul ignore next */
      []
    ));
    this._filter = signal("", ...ngDevMode ? [{ debugName: "_filter" }] : (
      /* istanbul ignore next */
      []
    ));
    this._debounced_filter = debouncedSignal(this._filter, 400);
    this._slow_debounced_filter = debouncedSignal(this._filter, 1e3);
    this.emergency_contacts = this._emergency_contacts.asReadonly();
    this._asset_based_contacts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_asset_based_contacts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const bld = this._building();
        return bld ? { bld, search: this._debounced_filter() } : void 0;
      },
      loader: async ({ params: { bld } }) => {
        const categories = await queryAssetCategoriesLocal({
          zone_id: bld.id
        }).catch(() => []);
        const category = categories.find((c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME) || null;
        if (!category)
          return [];
        const groups = await queryAssetTypesLocal({
          zone_id: bld.id,
          q: `"${category.name}"`
        }).catch(() => []);
        const asset_type = groups.find((g) => g.name === EMERGENCY_CONTACTS_CATEGORY_NAME && g.category_id === category.id) || null;
        if (!asset_type)
          return [];
        const assets = await queryAssetsLocal({
          zone_id: bld.id,
          type_id: asset_type.id,
          limit: 200
        }).catch(() => []);
        return assets.filter((a) => a.asset_type_id === asset_type.id).map((a) => {
          const zone = this._org.levelWithID(a.zones) || this._org.buildings.find((_) => a.zones.includes(_.id));
          return {
            id: a.id,
            name: a.identifier || "",
            email: a.other_data?.email || "",
            phone: a.other_data?.phone || "",
            roles: a.other_data?.roles || [],
            zone: zone?.id,
            zone_name: zone?.display_name || zone?.name
          };
        });
      }
    }));
    this._legacy_metadata_contacts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_legacy_metadata_contacts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: async ({ params: bld }) => {
        const { details } = await Fu(bld.id, "emergency_contacts").catch(() => ({
          details: { contacts: [], migrated: false }
        }));
        const data = details;
        if (data?.migrated)
          return [];
        return data?.contacts || [];
      }
    }));
    this._role_assigned_contacts = computed(() => {
      const asset_contacts = this._asset_based_contacts.value() ?? [];
      if (asset_contacts.length > 0)
        return asset_contacts;
      return this._legacy_metadata_contacts.value() ?? [];
    }, ...ngDevMode ? [{ debugName: "_role_assigned_contacts" }] : (
      /* istanbul ignore next */
      []
    ));
    this._user_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ q: this._debounced_filter() }),
      loader: ({ params: { q } }) => q?.length > 2 ? this.search_fn(q).catch(() => []) : Promise.resolve([])
    }));
    this._space_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_space_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ q: this._debounced_filter() }),
      loader: ({ params: { q } }) => q?.length > 2 ? Xc({ q, zone_id: this._org.organisation.id }).then(({ data }) => data.filter((_) => _.map_id).map((_) => new Space(__spreadProps(__spreadValues({}, _), {
        level: this._org.levelWithID(_.zones)
      })))).catch(() => []) : Promise.resolve([])
    }));
    this._desk_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Bu(bld.id, { name: "desks" }).then((i) => flatten(i.map((j) => (j.metadata.desks?.details || []).map((k) => new Desk(__spreadProps(__spreadValues({}, k), { zone: j.zone })))))).catch(() => [])
    }));
    this._maps_people_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_maps_people_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        available: this._maps_people_available(),
        q: this._slow_debounced_filter(),
        bld: this._building()
      }),
      loader: async ({ params: { available, q } }) => {
        const list = available && q.length > 2 ? await mapsindoors?.services.LocationsService.getLocations({ q }) : [];
        return (list || []).map((_) => ({
          id: _.properties?.externalId || _.properties?.roomId || _.roomId || _.id,
          map_id: _.properties?.externalId || _.properties?.roomId || _.roomId || "",
          type: "feature",
          name: _.properties?.name || "",
          description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`
        }));
      }
    }));
    this._map_features = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_map_features" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: async () => {
        const data = await Bu(this._org.building.id, {
          name: "map_features"
        }).catch(() => []);
        const list = [];
        for (const item of data) {
          const metadata = item.metadata.map_features;
          if (!metadata)
            continue;
          const feature_list = metadata.details instanceof Array ? metadata.details : [];
          for (const feature of feature_list) {
            list.push({
              id: feature.id,
              type: "feature",
              name: feature.name,
              description: "",
              zone: item.zone
            });
          }
        }
        return list;
      }
    }));
    this._poi_metadata = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_poi_metadata" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._initialised() || void 0,
      loader: () => Fu(this._org.organisation.id, "points-of-interest").catch((_) => ({ details: {} }))
    }));
    this._poi_list = computed(() => {
      const bld = this._building();
      const metadata = this._poi_metadata.value();
      if (!bld?.id || !metadata)
        return [];
      const mapping = metadata.details || {};
      const levels = this._org.levelsForBuilding(bld);
      const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
      return list.filter((_) => _.can_search);
    }, ...ngDevMode ? [{ debugName: "_poi_list" }] : (
      /* istanbul ignore next */
      []
    ));
    this._points_of_interest = computed(() => this._poi_list().map((item) => ({
      id: item.location || item.id,
      type: "feature",
      name: item.name,
      description: "",
      zone: item.level_id
    })), ...ngDevMode ? [{ debugName: "_points_of_interest" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search_results = computed(() => {
      const search = this._filter().toLowerCase();
      const spaces = this._space_search.value() ?? [];
      const desks = this._desk_search.value() ?? [];
      const users = this._user_search.value() ?? [];
      const contacts = this._emergency_contacts();
      const roled_contacts = this._role_assigned_contacts();
      const features = this._map_features.value() ?? [];
      const mapspeople_items = this._maps_people_search.value() ?? [];
      const points_of_interest = this._points_of_interest();
      const current_level = this._state.level();
      const in_progress_bookings = this._in_progress_bookings();
      let results = [];
      if (!this.hideItem("mapspeople"))
        results = results.concat(mapspeople_items);
      if (!this.hideItem("spaces")) {
        results = results.concat(spaces.map((s) => ({
          id: s.id,
          type: "space",
          email: s.email,
          name: s.display_name || s.name,
          description: `Capacity: ${s.capacity} `,
          zone: s.level?.id || ""
        })));
      }
      if (!this.hideItem("desks")) {
        results = results.concat(desks.map((s) => ({
          id: s.id,
          type: "feature",
          email: s.assigned_to,
          description: s.id,
          name: s.name || s.id,
          zone: s.zone?.id || ""
        })));
      }
      if (!this.hideItem("emergency_contacts")) {
        results = results.concat(flatten(roled_contacts.map((u) => u.roles.map((role) => ({
          id: u.email,
          type: role || "contact",
          is_role: true,
          name: u.name,
          email: u.email,
          description: u.email,
          zone: u.zone,
          zone_name: u.zone_name
        })))));
      }
      if (!this.hideItem("features")) {
        results = results.concat(features.filter((_) => _.name.toLowerCase().includes(search)).map((s) => ({
          id: s.id,
          type: "feature",
          name: s.name,
          description: "",
          zone: s.zone?.id,
          level_name: s.zone?.display_name || s.zone?.name
        })));
      }
      if (!this.hideItem("points_of_interest"))
        results = results.concat(points_of_interest);
      if (!this.hideItem("contacts")) {
        results = results.concat(contacts.map((u) => ({
          id: u.email,
          type: u.type || "contact",
          is_role: true,
          name: u.name,
          email: u.email,
          description: u.email
        })));
      }
      if (!this.hideItem("users")) {
        results = results.concat(users.map((u) => ({
          id: u.email,
          type: "user",
          name: u.name,
          email: u.email,
          description: u.email
        })));
      }
      results = results.filter((_) => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || (_.email || "").toLowerCase().includes(search) || _.type.toLowerCase().includes(search) || _.zone_name?.toLowerCase().includes(search));
      const in_progress_zones = this._getInProgressZones(in_progress_bookings);
      results.sort((a, b) => {
        if (current_level?.id) {
          const a_on_level = a.zone === current_level.id;
          const b_on_level = b.zone === current_level.id;
          if (a_on_level && !b_on_level)
            return -1;
          if (!a_on_level && b_on_level)
            return 1;
        }
        if (in_progress_zones.length > 0) {
          const a_near_booking = in_progress_zones.includes(a.zone);
          const b_near_booking = in_progress_zones.includes(b.zone);
          if (a_near_booking && !b_near_booking)
            return -1;
          if (!a_near_booking && b_near_booking)
            return 1;
        }
        return typeIndex(a) - typeIndex(b) || a.name.localeCompare(b.name);
      });
      return results;
    }, ...ngDevMode ? [{ debugName: "search_results" }] : (
      /* istanbul ignore next */
      []
    ));
    this.global_search_results = computed(() => sortGlobalSearchResults(this.search_results(), this._getPriorityZones(this._in_progress_bookings(), this._state.level()?.id)), ...ngDevMode ? [{ debugName: "global_search_results" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = computed(() => this._filter() !== this._debounced_filter() || this._user_search.isLoading() || this._space_search.isLoading(), ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search_fn = (q) => this._settings.get("app.basic_user_search") ? Ia({ q, authority_id: Pt()?.id }).then((_) => _.data) : firstValueFrom(searchStaff(q));
    this.init();
  }
  async init() {
    await firstValueWhere(this._initialised, (_) => !!_, this._injector);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const { is_public } = this._state.options();
    if (is_public)
      return;
    const mod = this._org.module("location_services", "LocationServices");
    if (mod) {
      const binding = mod.variable("emergency_contacts");
      binding.bindThenSubscribe((contacts_map) => {
        const list = [];
        for (const type in contacts_map) {
          for (const user of contacts_map[type]) {
            list.push(__spreadProps(__spreadValues({}, user), { type }));
          }
        }
        this._emergency_contacts.set(list);
      });
    }
  }
  setFilter(str) {
    this._filter.set(str);
  }
  /**
   * Set in-progress bookings for proximity-based sorting
   * @param bookings List of bookings/events that are currently in progress
   */
  setInProgressBookings(bookings) {
    this._in_progress_bookings.set(bookings || []);
  }
  static {
    this.\u0275fac = function ExploreSearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSearchService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSearchService, factory: _ExploreSearchService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-search.component.ts
var _c08 = ["input"];
var _c15 = ["button"];
var _forTrack02 = ($index, $item) => $item.name;
function ExploreSearchComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ExploreSearchComponent_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SEARCH_EMPTY"), " ");
  }
}
function ExploreSearchComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275listener("click", function ExploreSearchComponent_Conditional_12_For_2_Template_mat_option_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.select(option_r2));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", option_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r2.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r2.type, " ");
  }
}
function ExploreSearchComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExploreSearchComponent_Conditional_12_Conditional_0_Template, 3, 3, "mat-option", 8);
    \u0275\u0275repeaterCreate(1, ExploreSearchComponent_Conditional_12_For_2_Template, 9, 4, "mat-option", 9, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.results_list().length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.results_list().slice(0, 5));
  }
}
var ExploreSearchComponent = class _ExploreSearchComponent extends AsyncHandler {
  get show() {
    return this._show();
  }
  set show(value) {
    this._show.set(value);
  }
  get search_str() {
    return this._search_str();
  }
  set search_str(value) {
    this._search_str.set(value || "");
  }
  get right_size() {
    return this._right_size();
  }
  set right_size(value) {
    this._right_size.set(value);
  }
  constructor() {
    super();
    this._el = inject(ElementRef);
    this._search = inject(ExploreSearchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._show = signal(false, ...ngDevMode ? [{ debugName: "_show" }] : (
      /* istanbul ignore next */
      []
    ));
    this._search_str = signal("", ...ngDevMode ? [{ debugName: "_search_str" }] : (
      /* istanbul ignore next */
      []
    ));
    this._right_size = signal(false, ...ngDevMode ? [{ debugName: "_right_size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.results = this._search.search_results;
    this.results_list = computed(() => this.results() || [], ...ngDevMode ? [{ debugName: "results_list" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = this._search.loading;
    this.setFilter = (value) => {
      this.search_str = value || "";
      this._search.setFilter(value);
    };
    this._input_el = viewChild("input", ...ngDevMode ? [{ debugName: "_input_el" }] : (
      /* istanbul ignore next */
      []
    ));
    this._button_el = viewChild("button", ...ngDevMode ? [{ debugName: "_button_el" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.checkButtonPosition();
  }
  clear() {
    this.timeout("clear", () => {
      this.show = false;
      this.setFilter("");
    });
  }
  cancelClear() {
    this.clearTimeout("clear");
  }
  focusInput() {
    if (this._input_el()?.nativeElement) {
      this.timeout("focus", () => this._input_el().nativeElement.focus(), 300);
    }
  }
  showSearch() {
    this.show = true;
    this.focusInput();
  }
  closeSearch(e) {
    this.show = false;
    this.setFilter("");
    const _input_el = this._input_el();
    if (_input_el?.nativeElement) {
      _input_el.nativeElement.focus();
      _input_el.nativeElement.blur();
    }
  }
  select(item) {
    this.search_str = item.name;
    const query = {};
    const type = item.type === "space" ? "space" : item.type === "feature" ? "locate" : "user";
    query[type] = item.id;
    if (type === "locate") {
      query.name = item.name;
      query.zone = item.zone;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: query
    });
    this.focusInput();
  }
  checkButtonPosition() {
    const window_width = window.innerWidth;
    const button_rect = this._button_el().nativeElement.getBoundingClientRect();
    const x_center = button_rect.left + button_rect.width / 2;
    this.right_size = x_center > window_width / 2;
  }
  static {
    this.\u0275fac = function ExploreSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c08, 5)(ctx._button_el, _c15, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 19, consts: [["button", ""], ["origin", "matAutocompleteOrigin"], ["input", ""], ["auto", "matAutocomplete"], ["icon", "", "matRipple", "", 1, "bg-base-200", "m-2", 3, "resize", "click"], ["role", "search", "tabindex", "0", "matRipple", "", "matAutocompleteOrigin", "", 1, "bg-base-100", "absolute", "top-1/2", "z-10", "flex", "max-w-[calc(100vw-7rem)]", "-translate-y-1/2", "items-center", "overflow-hidden", "px-4", "outline-hidden", 3, "click"], ["keyboard", "", 1, "flex-1", "border-none", "text-base", "outline-hidden", 3, "ngModelChange", "focus", "blur", "ngModel", "placeholder", "matAutocomplete", "matAutocompleteConnectedTo"], [1, "mr-2", 3, "diameter"], [1, "pointer-events-none"], [3, "value"], [3, "click", "value"], [1, "flex", "w-88", "max-w-[calc(100vw-2rem)]", "items-center", "leading-tight"], [1, "w-1/2", "flex-1", "overflow-hidden"], [1, "w-full", "truncate"], [1, "text-xs"], [1, "bg-base-300", "rounded-sm", "p-2", "text-xs", "font-bold", "text-white", "capitalize"]], template: function ExploreSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 4, 0);
        \u0275\u0275listener("resize", function ExploreSearchComponent_Template_button_resize_0_listener() {
          return ctx.checkButtonPosition();
        }, \u0275\u0275resolveWindow)("click", function ExploreSearchComponent_Template_button_click_0_listener($event) {
          return ctx.show ? ctx.closeSearch($event) : ctx.showSearch();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 5, 1);
        \u0275\u0275listener("click", function ExploreSearchComponent_Template_div_click_4_listener() {
          return ctx.focusInput();
        });
        \u0275\u0275elementStart(6, "input", 6, 2);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275listener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.setFilter($event);
        })("focus", function ExploreSearchComponent_Template_input_focus_6_listener() {
          return ctx.cancelClear();
        })("blur", function ExploreSearchComponent_Template_input_blur_6_listener() {
          return ctx.clear();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, ExploreSearchComponent_Conditional_9_Template, 1, 1, "mat-spinner", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-autocomplete", null, 3);
        \u0275\u0275conditionalCreate(12, ExploreSearchComponent_Conditional_12_Template, 3, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const origin_r4 = \u0275\u0275reference(5);
        const auto_r5 = \u0275\u0275reference(11);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.show || ctx.search_str ? "close" : "search");
        \u0275\u0275advance();
        \u0275\u0275classProp("right-0", ctx.right_size)("-translate-x-14", ctx.right_size)("left-0", !ctx.right_size)("translate-x-14", !ctx.right_size)("show", ctx.show || ctx.search_str);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.search_str)("placeholder", \u0275\u0275pipeBind1(8, 17, "COMMON.SEARCH"))("matAutocomplete", auto_r5)("matAutocompleteConnectedTo", origin_r4);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 9 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() !== true && (ctx.show || ctx.search_str) ? 12 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatAutocompleteOrigin,
      VirtualKeyboardComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  z-index: 99;\n  position: relative;\n}\n[role=search][_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show[_ngcontent-%COMP%] {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchComponent, [{
    type: Component,
    args: [{ selector: "explore-search", template: `
        <button
            #button
            icon
            matRipple
            class="bg-base-200 m-2"
            (window:resize)="checkButtonPosition()"
            (click)="show ? closeSearch($event) : showSearch()"
        >
            <icon>{{ show || search_str ? 'close' : 'search' }}</icon>
        </button>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="bg-base-100 absolute top-1/2 z-10 flex max-w-[calc(100vw-7rem)] -translate-y-1/2 items-center overflow-hidden px-4 outline-hidden"
            [class.right-0]="right_size"
            [class.-translate-x-14]="right_size"
            [class.left-0]="!right_size"
            [class.translate-x-14]="!right_size"
            [class.show]="show || search_str"
            (click)="focusInput()"
            matAutocompleteOrigin
            #origin="matAutocompleteOrigin"
        >
            <input
                #input
                keyboard
                class="flex-1 border-none text-base outline-hidden"
                [ngModel]="search_str"
                (ngModelChange)="setFilter($event)"
                [placeholder]="'COMMON.SEARCH' | translate"
                (focus)="cancelClear()"
                (blur)="clear()"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            @if (loading()) {
                <mat-spinner class="mr-2" [diameter]="32"></mat-spinner>
            }
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            @if (loading() !== true && (show || search_str)) {
                @if (!results_list().length) {
                    <mat-option class="pointer-events-none">
                        {{ 'COMMON.SEARCH_EMPTY' | translate }}
                    </mat-option>
                }
                @for (option of results_list().slice(0, 5); track option.name) {
                    <mat-option [value]="option.name" (click)="select(option)">
                        <div
                            class="flex w-88 max-w-[calc(100vw-2rem)] items-center leading-tight"
                        >
                            <div class="w-1/2 flex-1 overflow-hidden">
                                <div class="w-full truncate">
                                    {{ option.name }}
                                </div>
                                <div class="text-xs">
                                    {{ option.description }}
                                </div>
                            </div>
                            <div
                                class="bg-base-300 rounded-sm p-2 text-xs font-bold text-white capitalize"
                            >
                                {{ option.type }}
                            </div>
                        </div>
                    </mat-option>
                }
            }
        </mat-autocomplete>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      VirtualKeyboardComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;9f4945b2ccd61cdbcc08723b98fac624bfd389374b9fee892262ad25a3c5edf0;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-search.component.ts */\n:host {\n  z-index: 99;\n  position: relative;\n}\n[role=search] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */\n"] }]
  }], () => [], { _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }], _button_el: [{ type: ViewChild, args: ["button", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSearchComponent, { className: "ExploreSearchComponent", filePath: "libs/explore/src/lib/explore-search.component.ts", lineNumber: 130 });
})();

// libs/explore/src/lib/explore-zoom-control.component.ts
var ExploreZoomControlComponent = class _ExploreZoomControlComponent {
  constructor() {
    this._state = inject(ExploreStateService);
    this.zoomIn = () => this._state.setPositions(Math.min(10, this._state.positions.zoom * 1.2), this._state.positions.center);
    this.zoomOut = () => this._state.setPositions(Math.max(1, this._state.positions.zoom * (1 / 1.2)), this._state.positions.center);
    this.reset = () => this._state.setPositions(1, { x: 0.5, y: 0.5 });
  }
  static {
    this.\u0275fac = function ExploreZoomControlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreZoomControlComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 12, vars: 9, consts: [["z-in", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["z-out", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["reset", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"]], template: function ExploreZoomControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_0_listener() {
          return ctx.zoomIn();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "button", 1);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_4_listener() {
          return ctx.zoomOut();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "remove");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_8_listener() {
          return ctx.reset();
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "autorenew");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 3, "EXPLORE.ZOOM_IN"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "EXPLORE.ZOOM_OUT"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 7, "EXPLORE.ZOOM_RESET"));
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, MatTooltipModule, MatTooltip, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZoomControlComponent, [{
    type: Component,
    args: [{ selector: `explore-zoom-controls`, template: `
        <button
            z-in
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomIn()"
            [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
        >
            <icon>add</icon>
        </button>
        <button
            z-out
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomOut()"
            [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
        >
            <icon>remove</icon>
        </button>
        <button
            reset
            icon
            matRipple
            class="bg-base-100"
            (click)="reset()"
            [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
        >
            <icon>autorenew</icon>
        </button>
    `, imports: [MatRippleModule, TranslatePipe, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;3d42ea289b866ee23d2075663b931fa5501aa5a1e18f8af721ddfffbd945ad48;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-zoom-control.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreZoomControlComponent, { className: "ExploreZoomControlComponent", filePath: "libs/explore/src/lib/explore-zoom-control.component.ts", lineNumber: 67 });
})();

// libs/explore/src/lib/explore.module.ts
var STANDALONE_COMPONENTS = [
  ExploreMapControlComponent,
  ExploreMapViewComponent,
  ExploreSearchComponent,
  ExploreSpaceInfoComponent,
  ExploreDeviceInfoComponent,
  ExploreDeskInfoComponent,
  ExploreZoomControlComponent,
  ExploreBookingModalComponent,
  SetDatetimeModalComponent,
  ExploreBookQrComponent,
  ExploreSensorInfoComponent,
  ExploreLockerBankInfoComponent,
  ExploreLockerBankModalComponent,
  ExploreParkingInfoComponent
];
var SharedExploreModule = class _SharedExploreModule {
  static {
    this.\u0275fac = function SharedExploreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedExploreModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedExploreModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      ExploreMapControlComponent,
      ExploreMapViewComponent,
      ExploreSearchComponent,
      ExploreSpaceInfoComponent,
      ExploreDeviceInfoComponent,
      ExploreDeskInfoComponent,
      ExploreZoomControlComponent,
      ExploreBookingModalComponent,
      SetDatetimeModalComponent,
      ExploreBookQrComponent,
      ExploreSensorInfoComponent,
      ExploreLockerBankInfoComponent,
      ExploreLockerBankModalComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedExploreModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...STANDALONE_COMPONENTS],
      exports: [...STANDALONE_COMPONENTS]
    }]
  }], null, null);
})();

// apps/workplace/src/app/schedule/schedule-state.service.ts
var ScheduleStateService = class _ScheduleStateService extends AsyncHandler {
  setOptions(options) {
    this._options.set(options);
  }
  getOptions() {
    return this._options();
  }
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  get dateValue() {
    return this._date();
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._parking = inject(ParkingService);
    this._spaces = inject(SpacesService);
    this._poll = signal(0, ...ngDevMode ? [{ debugName: "_poll" }] : (
      /* istanbul ignore next */
      []
    ));
    this._poll_type = signal("api", ...ngDevMode ? [{ debugName: "_poll_type" }] : (
      /* istanbul ignore next */
      []
    ));
    this._loading = signal(false, ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this._options = signal({ period: "day" }, ...ngDevMode ? [{ debugName: "_options" }] : (
      /* istanbul ignore next */
      []
    ));
    this._filters = signal({
      shown_types: [
        "event",
        "desk",
        "parking",
        "visitor",
        "locker",
        "group-event",
        "vip-visitor"
      ]
    }, ...ngDevMode ? [{ debugName: "_filters" }] : (
      /* istanbul ignore next */
      []
    ));
    this._date = signal(Date.now(), ...ngDevMode ? [{ debugName: "_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this._end_date = signal(null, ...ngDevMode ? [{ debugName: "_end_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this._deleted = [];
    this._active_building = toSignal(this._org.active_building.pipe(filter((_) => !!_)), { requireSync: false });
    this._space_bookings = this._org.active_building.pipe(
      filter((_) => !!_),
      distinctUntilKeyChanged("id"),
      debounceTime(300),
      tap((_) => this.unsubWith("bind:")),
      switchMap(({ id }) => {
        this._loading.set(true);
        return requestSpacesForZone(id);
      }),
      // Get list of spaces for building
      distinctUntilChanged(([s1], [s2]) => s1 !== s2),
      switchMap((list) => {
        this._loading.set(false);
        return combineLatest((list || []).map((space) => {
          const binding = Dl(space.id, "Bookings").variable("bookings");
          const obs = observableFromSignal(binding.listen()).pipe(map((event_list) => (event_list || []).map((i) => new CalendarEvent(__spreadProps(__spreadValues({}, i), {
            resources: i.attendees.filter((_) => _.email === space.email || _.resource),
            system: space
          })))), catchError((_) => of([])));
          if (!this.hasSubscription(`bind:${space.id}`)) {
            this.subscription(`bind:${space.id}`, binding.bind());
          }
          return obs;
        }));
      }),
      map((_) => flatten(_)),
      shareReplay(1)
    );
    this._user_bookings = combineLatest([
      this._org.active_building,
      toObservable(this._poll)
    ]).pipe(filter(([bld]) => !!bld), debounceTime(300), switchMap(() => {
      this._loading.set(true);
      const mod = this._org.module("location_services", "LocationServices");
      if (!mod?.system)
        return of([]);
      return mod.execute("my_bookings").catch((_) => []);
    }), map((_) => (_ || []).map((_2) => new CalendarEvent(_2))), shareReplay(1));
    this.options = this._options.asReadonly();
    this.filters = this._filters.asReadonly();
    this.date = this._date.asReadonly();
    this.end_date = this._end_date.asReadonly();
    this.loading = this._loading.asReadonly();
    this.week_date = computed(() => {
      const building = this._active_building();
      const date = this.date();
      if (!building)
        return Date.now();
      return startOfWeek(date, {
        weekStartsOn: this.offset_weekday
      }).valueOf();
    }, ...ngDevMode ? [{ debugName: "week_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.week_options = computed(() => {
      const building = this._active_building();
      const date = this.date();
      if (!building)
        return [];
      const options = [];
      const start_date = startOfDay(Date.now());
      for (let i = -4; i < 48; i++) {
        const day = addWeeks(start_date, i);
        const week_s_date = startOfWeek(day, {
          weekStartsOn: this.offset_weekday
        });
        const week_e_date = endOfWeek(day, {
          weekStartsOn: this.offset_weekday
        });
        const this_week = isAfter(Date.now(), week_s_date) && isBefore(Date.now(), week_e_date);
        const week_start = format(week_s_date, "dd MMM");
        const week_end = format(week_e_date, "dd MMM");
        options.push({
          id: week_s_date.valueOf(),
          name: `${week_start} - ${week_end}`,
          this_week
        });
      }
      return options;
    }, ...ngDevMode ? [{ debugName: "week_options" }] : (
      /* istanbul ignore next */
      []
    ));
    this._update$ = combineLatest([
      toObservable(this._date),
      toObservable(this._end_date),
      toObservable(this._poll)
    ]).pipe(debounceTime(500), tap((_) => this._loading.set(true)));
    this.driver_events = toSignal(combineLatest([this._user_bookings, this._update$]).pipe(map(([_, [date, _end_date]]) => {
      const user = currentUser();
      return _.filter((_2) => isSameDay(_2.date, date) && (_2.host.toLowerCase() === user.email.toLowerCase() || _2.attendees.find((a) => a.email.toLowerCase() === user.email.toLowerCase())) && !_2.linked_bookings?.find((b) => b.booking_type === "group-event"));
    })), { initialValue: [] });
    this.ws_events = toSignal(combineLatest([this._space_bookings, this._update$]).pipe(map(([_, [date, _end_date]]) => {
      const user = currentUser();
      return _.filter((_2) => isSameDay(_2.date, date) && (_2.host.toLowerCase() === user.email.toLowerCase() || _2.attendees.find((a) => a.email.toLowerCase() === user.email.toLowerCase())) && !_2.linked_bookings?.find((b) => b.booking_type === "group-event"));
    })), { initialValue: [] });
    this.api_events = toSignal(combineLatest([this._update$, toObservable(this._options)]).pipe(switchMap(([[date, end_date], options]) => {
      const period = options.period;
      const query = {
        period_start: getUnixTime(period === "range" ? startOfDay(date) : period === "day" ? startOfDay(date) : startOfWeek(date, {
          weekStartsOn: this.offset_weekday
        })),
        period_end: getUnixTime(period === "range" ? endOfDay(end_date || date) : period === "day" ? endOfDay(date) : endOfWeek(date, {
          weekStartsOn: this.offset_weekday
        }))
      };
      return this._settings.get("app.events.use_bookings") ? queryBookings(__spreadProps(__spreadValues({}, query), { type: "room" })).pipe(map((_) => _.map((i) => newCalendarEventFromBooking(i))), catchError((_) => of([]))) : queryEvents(__spreadValues({}, query)).pipe(catchError((_) => of([])));
    }), shareReplay(1)), { initialValue: [] });
    this.raw_events = computed(() => {
      const poll_type = this._poll_type();
      const period = this._options().period;
      const events = poll_type === "driver" ? this.driver_events() : poll_type === "api" || period !== "week" ? this.api_events() : this.ws_events();
      this.timeout("end_loading", () => this._loading.set(false));
      return events || [];
    }, ...ngDevMode ? [{ debugName: "raw_events" }] : (
      /* istanbul ignore next */
      []
    ));
    this.events = computed(() => this.raw_events().filter((_) => !_.extension_data?.shared_event), ...ngDevMode ? [{ debugName: "events" }] : (
      /* istanbul ignore next */
      []
    ));
    this.vip_visitors = toSignal(combineLatest([this._update$, toObservable(this.options)]).pipe(switchMap(([[date, end_date], options]) => this._bookingQuery("vip-visitor", options.period, date, end_date)), map((_) => _.filter((_2) => !_2.parent_id && !_2.linked_event)), tap(() => this.timeout("end_loading", () => this._loading.set(false))), shareReplay(1)), { initialValue: [] });
    this.visitors = toSignal(combineLatest([this._update$, toObservable(this.options)]).pipe(switchMap(([[date, end_date], options]) => this._bookingQuery("visitor", options.period, date, end_date)), map((_) => _.filter((_2) => !_2.linked_event)), tap(() => this.timeout("end_loading", () => this._loading.set(false))), shareReplay(1)), { initialValue: [] });
    this.desks = toSignal(combineLatest([this._update$, toObservable(this.options)]).pipe(switchMap(([[date, end_date], options]) => this._bookingQuery("desk", options.period, date, end_date)), map((_) => _.filter((item) => !item.linked_event)), tap(() => this.timeout("end_loading", () => this._loading.set(false))), shareReplay(1)), { initialValue: [] });
    this.parking = toSignal(combineLatest([this._update$, toObservable(this.options)]).pipe(switchMap(([[date, end_date], options]) => this._bookingQuery("parking", options.period, date, end_date)), tap(() => this.timeout("end_loading", () => this._loading.set(false))), shareReplay(1)), { initialValue: [] });
    this.group_events = computed(() => this.raw_events().filter((_) => _.extension_data?.shared_event), ...ngDevMode ? [{ debugName: "group_events" }] : (
      /* istanbul ignore next */
      []
    ));
    this.locker_bookings = toSignal(combineLatest([this._update$, toObservable(this.options)]).pipe(switchMap(([[date, end_date], options]) => this._bookingQuery("locker", options.period, date, end_date)), tap(() => this.timeout("end_loading", () => this._loading.set(false))), shareReplay(1)), { initialValue: [] });
    this._lockers_banks = loadLockerBanks(this._org, combineLatest([this._org.active_building, this._org.active_region]), () => this._settings.get("app.use_region"));
    this._lockers = loadLockers(this._org, combineLatest([this._org.active_building, this._org.active_region]), this._lockers_banks, () => this._settings.get("app.use_region"));
    this.lockers = toSignal(combineLatest([
      this._lockers,
      this._org.active_building.pipe(filter((_) => !!_), distinctUntilKeyChanged("id"))
    ]).pipe(debounceTime(300), switchMap(async ([lockers]) => {
      const mod = this._org.module("lockers", "LockerLocations");
      if (!mod)
        return [[], lockers];
      const my_lockers = await mod.execute("lockers_allocated_to_me").catch(() => []);
      return [my_lockers, lockers];
    }), map(([my_lockers, lockers]) => {
      return my_lockers.map((i) => {
        const locker = lockers.find((lkr) => lkr.id === i.locker_id);
        if (!locker && (!i.level || !i.building))
          return null;
        return new Booking({
          date: startOfDay(Date.now()).valueOf(),
          duration: 24 * 60 - 1,
          title: "Locker Booking",
          description: i.locker_name,
          booking_type: "locker",
          all_day: true,
          asset_id: locker.map_id,
          asset_name: i.locker_name,
          zones: [...locker.bank?.zones || []],
          extension_data: {
            // map_id: i.locker_id || locker.map_id,
          }
        });
      }).filter((item) => item);
    }), catchError((e) => {
      console.error(e);
      return of([]);
    }), tap(() => this.timeout("end_loading", () => this._loading.set(false))), shareReplay(1)), { initialValue: [] });
    this.bookings = computed(() => {
      const events = this.events() || [];
      const visitors = this.visitors() || [];
      const vip_visitors = this.vip_visitors() || [];
      const desks = this.desks() || [];
      const parking = this.parking() || [];
      const lockers = this.lockers() || [];
      const locker_bookings = this.locker_bookings() || [];
      const group_events = this.group_events() || [];
      const filtered_events = events.filter((ev) => !desks.find((bkn) => ev.meeting_id && `${ev.meeting_id}` === `${bkn.id}`) && ev.linked_bookings[0]?.booking_type !== "group-event");
      return [
        ...filtered_events,
        ...visitors,
        ...vip_visitors,
        ...desks,
        ...parking,
        ...lockers,
        ...locker_bookings,
        ...group_events
      ].sort((a, b) => a.date - b.date);
    }, ...ngDevMode ? [{ debugName: "bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered_bookings = computed(() => {
      const booking_list = this.bookings();
      const filters = this.filters();
      return booking_list.filter((_) => {
        if (this._deleted.includes(_.instance ? `${_.id}|${_.instance}` : _.id))
          return false;
        if (_.extension_data?.shared_event && !filters?.shown_types?.includes("group-event")) {
          return false;
        }
        if (_ instanceof CalendarEvent && !_.extension_data?.shared_event && !filters?.shown_types?.includes("event")) {
          return false;
        } else if (_ instanceof CalendarEvent)
          return true;
        return filters?.shown_types?.includes(_.booking_type);
      });
    }, ...ngDevMode ? [{ debugName: "filtered_bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this._ignore_cancel = [];
    this._checkCancel = combineLatest([
      current_user,
      interval(60 * 1e3).pipe(startWith(0))
    ]).pipe(filter(([u]) => !!u), map(async ([user]) => {
      const is_home = user.location !== "wfo";
      const auto_release = this._settings.get("app.auto_release");
      if (auto_release && is_home && (auto_release.time_after || auto_release.time_before) && auto_release.resources?.length) {
        for (const type of auto_release.resources) {
          const time_after = auto_release[`${type}_time_after`] || auto_release.time_after;
          const time_before = Math.min(60, auto_release[`${type}_time_before`] || auto_release.time_before || 0);
          const bookings = await lastValueFrom(queryBookings({
            period_start: getUnixTime(startOfMinute(Date.now())),
            period_end: getUnixTime(addMinutes(Date.now(), (time_after || 5) + time_before)),
            type
          }));
          const check_block = (time_after || 0) + time_before;
          for (const booking of bookings) {
            if (this._ignore_cancel.includes(booking.id) || booking.checked_in || booking.rejected) {
              continue;
            }
            const start_time = booking.is_all_day ? setHours(booking.date, auto_release.all_day_start) : booking.date;
            this._dialog.closeAll();
            const diff = differenceInMinutes(addMinutes(start_time, time_after || 0), Date.now());
            if (diff > check_block || diff < 0)
              continue;
            const time = addMinutes(start_time, time_after || 0);
            const close_after = differenceInMilliseconds(time.getTime() + 60 * 1e3, Date.now());
            const wording = type === "parking" ? "reservation" : "booking";
            const result = await openConfirmModal({
              title: `Keep ${type} ${wording}`,
              content: `You have indicated you are not in the office.
                                Your  ${wording} for "<i>${booking.asset_name || booking.title}</i>" at ${format(booking.date, this._settings.time_format)} will be cancelled at ${format(time, this._settings.time_format)}.<br/><br/>
                                Do you wish to keep this ${wording}?`,
              icon: { content: "event_busy" },
              confirm_text: "Keep",
              close_delay: close_after
            }, this._dialog);
            if (result.reason !== "done") {
              this._ignore_cancel.push(booking.id);
              continue;
            }
            result.loading("Checking in booking...");
            await lastValueFrom(checkinBooking(booking.id, true));
            result.close();
          }
        }
      }
    }));
    this.subscription("poll_type", this._org.active_building.subscribe(() => this._poll_type.set(this._settings.get("app.schedule.use_driver") ? "driver" : this._settings.get("app.schedule.use_websocket") ? "ws" : "api")));
    this.subscription("chat_event", this._settings.listen("CHAT:task_complete").subscribe(() => this.triggerPoll()));
    this.subscription("wfh_checks", this._checkCancel.subscribe());
    this._deleted = JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted") || "[]");
  }
  triggerPoll() {
    this._poll.set(Date.now());
  }
  startPolling(delay = 60 * 1e3) {
    this.interval("poll", () => this._poll.set(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setDate(date) {
    this._date.set(date);
  }
  setEndDate(date) {
    this._end_date.set(date);
  }
  setDateRange(start, end) {
    this._date.set(start);
    this._end_date.set(end);
  }
  removeItem(item) {
    this.setAsDeleted(item.instance ? `${item.id}|${item.instance}` : item.id);
    this._poll.set(Date.now());
  }
  setAsDeleted(id) {
    this._deleted.push(id);
    sessionStorage.setItem("PLACEOS.events.deleted", JSON.stringify(this._deleted));
  }
  setType(name, state) {
    const filters = this._filters();
    const { shown_types } = filters;
    if (shown_types.includes(name) === state)
      return;
    const new_types = state ? unique([...shown_types, name]) : shown_types.filter((_) => _ !== name);
    this._filters.set(__spreadProps(__spreadValues({}, filters), {
      shown_types: new_types
    }));
  }
  async toggleType(name, clear = false) {
    const filters = this._filters();
    const { shown_types } = filters;
    if (shown_types && (shown_types.includes(name) || clear)) {
      this._filters.set(__spreadProps(__spreadValues({}, filters), {
        shown_types: shown_types.filter((_) => _ !== name)
      }));
    } else {
      this._filters.set(__spreadProps(__spreadValues({}, filters), {
        shown_types: [...shown_types, name]
      }));
    }
  }
  _bookingQuery(type, period, date, end_date) {
    return queryBookings({
      period_start: getUnixTime(period === "range" ? startOfDay(date) : period === "day" ? startOfDay(date) : startOfWeek(date, {
        weekStartsOn: this.offset_weekday
      })),
      period_end: getUnixTime(period === "range" ? endOfDay(end_date || date) : period === "day" ? endOfDay(date) : endOfWeek(date, {
        weekStartsOn: this.offset_weekday
      })),
      type,
      include_checked_out: true,
      include_deleted: "recurring"
    }).pipe(catchError(() => of([])));
  }
  ///////////////////////////////////////////////////////////////
  async edit(event) {
    console.log("Edit Event:", event);
    this._router.navigate(["/book", "meeting", "form"]);
    if (event.creator !== event.mailbox) {
      event = (await queryEvents({
        period_start: event.event_start,
        period_end: event.event_end,
        ical_uid: event.ical_uid
      }).toPromise()).find((_) => _.ical_uid === event.ical_uid) || event;
    }
    if (event.resources?.length) {
      const full_resources = await Promise.all(event.resources.map(async (resource2) => {
        const lookup_key = resource2.email || resource2.id;
        if (!lookup_key)
          return resource2;
        let space = this._spaces.find(lookup_key);
        if (!space) {
          try {
            await this._spaces.loadSpace(lookup_key);
            space = this._spaces.find(lookup_key);
          } catch (err) {
            console.warn(`Failed to load space ${lookup_key}:`, err);
          }
        }
        return space || resource2;
      }));
      event = new CalendarEvent(__spreadProps(__spreadValues({}, event.toJSON()), {
        resources: full_resources
      }));
    }
    setTimeout(() => this._event_form.newForm(event), 300);
  }
  editBooking(event) {
    console.log("Edit Booking:", event.type);
    const booking_type = `${event.booking_type || ""}`.trim() || event.type;
    this._router.navigate(["/book", `${event.type}`]);
    this._booking_form.newForm(booking_type, event);
    if (booking_type === "visitor")
      return;
    setTimeout(() => {
      this._booking_form.form.patchValue({
        resources: [
          {
            id: event.asset_id,
            name: event.asset_name || event.description
          }
        ],
        asset_id: event.asset_id
      });
    }, 100);
  }
  async remove(item, remove_series = false) {
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
    const resource_name = item instanceof CalendarEvent ? item.title || item.space?.display_name : item.title || item.asset_name || item.asset_id;
    const resp = await openConfirmModal({
      title: i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_TITLE" : "APP.WORKPLACE.SCHEDULE_REMOVE_TITLE", { name: resource_name, time }),
      content: i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_MSG" : "APP.WORKPLACE.SCHEDULE_REMOVE_MSG", { name: resource_name, time }),
      icon: { content: "delete" }
    }, this._dialog);
    if (item instanceof CalendarEvent && item.creator !== item.mailbox) {
      item = (await queryEvents({
        period_start: item.event_start,
        period_end: item.event_end,
        ical_uid: item.ical_uid
      }).toPromise()).find((_) => _.ical_uid === item.ical_uid) || item;
    }
    if (resp.reason !== "done")
      return;
    resp.loading(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_LOADING" : "APP.WORKPLACE.SCHEDULE_REMOVE_LOADING"));
    await (item instanceof CalendarEvent ? removeEvent : removeBooking)(remove_series ? item.recurring_event_id || item.id : item.id, {
      calendar: this._settings.get("app.events.use_bookings") ? null : item.calendar || currentUser()?.email,
      system_id: item.system?.id,
      instance: remove_series ? void 0 : !!item.instance,
      start_time: item.instance ? item.instance : void 0
    }).toPromise().catch((e) => {
      notifyError(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_ERROR" : "APP.WORKPLACE.SCHEDULE_REMOVE_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    notifySuccess(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_SUCCESS" : "APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS"));
    this.removeItem(item);
    this._dialog.closeAll();
  }
  async end(item) {
    const now = Date.now();
    const resource_name = item.asset_name || item.asset_id;
    if (isAfter(now, item.date_end)) {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ALREADY_ENDED_ERROR"));
      return;
    }
    if (isBefore(now, item.date)) {
      return this.remove(item);
    }
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
    const resp = await openConfirmModal({
      title: i18n("APP.WORKPLACE.SCHEDULE_END_TITLE"),
      content: i18n("APP.WORKPLACE.SCHEDULE_END_MSG", {
        name: resource_name,
        time
      }),
      icon: { content: "event_busy" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.WORKPLACE.SCHEDULE_END_LOADING"));
    const changes = {
      booking_end: getUnixTime(now),
      all_day: false
    };
    const promise = (item.instance ? updateBookingInstance(item.id, item.instance, changes) : updateBooking(item.id, changes)).toPromise().catch((e) => {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    await promise;
    notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_END_SUCCESS"));
    this._poll.set(Date.now());
    this._dialog.closeAll();
  }
  static {
    this.\u0275fac = function ScheduleStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleStateService, factory: _ScheduleStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/workplace/src/app/components/global-search.component.ts
var _c09 = ["input"];
var _c16 = (a0, a1, a2, a3, a4) => ({ "w-lg": a0, "w-px": a1, "opacity-100": a2, "opacity-0": a3, "pointer-events-none": a4 });
var _c22 = () => ["/explore"];
var _c32 = (a0) => ({ space: a0 });
var _c42 = (a0) => ({ user: a0 });
var _c52 = (a0, a1, a2) => ({ locate: a0, name: a1, zone: a2 });
var _forTrack03 = ($index, $item) => $item.id + $index;
function GlobalSearchComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.GLOBAL_SEARCH_EMPTY"), " ");
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.GLOBAL_SEARCH_START"), " ");
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GlobalSearchComponent_Conditional_11_Conditional_2_Conditional_0_Template, 3, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.results().length ? 0 : -1);
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c22))("queryParams", option_r3.type === "space" ? \u0275\u0275pureFunction1(6, _c32, option_r3.id) : option_r3.type === "user" || option_r3.is_role ? \u0275\u0275pureFunction1(8, _c42, option_r3.id) : \u0275\u0275pureFunction3(10, _c52, option_r3.id, option_r3.name, option_r3.zone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.type, " ");
  }
}
function GlobalSearchComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GlobalSearchComponent_Conditional_11_Conditional_3_For_1_Template, 8, 14, "a", 9, _forTrack03);
    \u0275\u0275pipe(2, "slice");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, ctx_r1.results(), 0, 100));
  }
}
function GlobalSearchComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, GlobalSearchComponent_Conditional_11_Conditional_1_Template, 3, 3, "div", 8)(2, GlobalSearchComponent_Conditional_11_Conditional_2_Template, 1, 1);
    \u0275\u0275conditionalCreate(3, GlobalSearchComponent_Conditional_11_Conditional_3_Template, 3, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(3, _c16, ctx_r1.show(), !ctx_r1.show(), ctx_r1.show(), !ctx_r1.show(), !ctx_r1.show()));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.results().length && ctx_r1.filter_str() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.loading() && ctx_r1.filter_str() ? 3 : -1);
  }
}
var GlobalSearchComponent = class _GlobalSearchComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._service = inject(ExploreSearchService);
    this._schedule = inject(ScheduleStateService);
    this.results = this._service.global_search_results;
    this.loading = this._service.loading;
    this.show = signal(false, ...ngDevMode ? [{ debugName: "show" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filter_str = signal("", ...ngDevMode ? [{ debugName: "filter_str" }] : (
      /* istanbul ignore next */
      []
    ));
    this.setFilter = (s) => s instanceof Object ? this.filter_str.set("") : this._service.setFilter(s);
    this._input_el = viewChild("input", ...ngDevMode ? [{ debugName: "_input_el" }] : (
      /* istanbul ignore next */
      []
    ));
    this._bookings$ = toObservable(this._schedule.bookings);
  }
  ngOnInit() {
    this.subscription("in_progress_bookings", this._bookings$.subscribe((bookings) => {
      const in_progress = bookings.filter((b) => {
        const state = b.state;
        return state === "in_progress" || state === "started";
      });
      this._service.setInProgressBookings(in_progress);
    }));
  }
  showInput() {
    this.show.set(true);
    this._input_el().nativeElement.focus();
    this.clearTimeout("close");
  }
  hideInput() {
    this.timeout("close", () => this.show.set(false));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275GlobalSearchComponent_BaseFactory;
      return function GlobalSearchComponent_Factory(__ngFactoryType__) {
        return (\u0275GlobalSearchComponent_BaseFactory || (\u0275GlobalSearchComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GlobalSearchComponent)))(__ngFactoryType__ || _GlobalSearchComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalSearchComponent, selectors: [["global-search"]], viewQuery: function GlobalSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c09, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 13, consts: [["input", ""], [1, "relative", "h-full", "w-12"], ["icon", "", "name", "global-search", "matRipple", "", 1, "bg-base-200", "h-10", "w-10", "rounded-full", 3, "click"], [1, "text-2xl"], ["search", "", 1, "border-neutral", "bg-base-100", "absolute", "top-1/2", "right-2", "z-50", "flex", "h-12", "max-w-[calc(100vw-4rem)]", "-translate-y-1/2", "items-center", "space-x-2", "rounded-[24px]", "border-2", "px-2", "shadow-sm", 3, "click", "ngClass"], [1, "w-1/2", "flex-1", "py-2", "outline-hidden", 3, "ngModelChange", "blur", "placeholder", "ngModel"], [3, "diameter"], ["search", "", 1, "border-base-200", "bg-base-100", "absolute", "right-2", "bottom-0", "flex", "max-h-[40vh]", "max-w-[calc(100vw-4rem)]", "translate-y-[calc(100%-1rem)]", "flex-col", "items-center", "overflow-auto", "rounded-b", "border", "pt-4", "shadow-sm", 3, "ngClass"], ["empty", "", 1, "w-full", "p-4", "text-center", "opacity-60"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "h-14", "min-h-14", "w-full", "items-center", "px-4", "py-2", "leading-tight", 3, "routerLink", "queryParams"], [1, "flex-1", "overflow-hidden"], [1, "w-full", "truncate"], [1, "text-xs", "opacity-60"], [1, "bg-secondary", "text-secondary-content", "rounded-sm", "p-2", "text-xs", "font-medium", "text-white", "capitalize"]], template: function GlobalSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
        \u0275\u0275listener("click", function GlobalSearchComponent_Template_button_click_1_listener() {
          return ctx.showInput();
        });
        \u0275\u0275elementStart(2, "icon", 3);
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275listener("click", function GlobalSearchComponent_Template_div_click_4_listener() {
          return ctx.showInput();
        });
        \u0275\u0275elementStart(5, "icon", 3);
        \u0275\u0275text(6, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5, 0);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function GlobalSearchComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filter_str, $event) || (ctx.filter_str = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function GlobalSearchComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.setFilter($event);
        })("blur", function GlobalSearchComponent_Template_input_blur_7_listener() {
          return ctx.hideInput();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, GlobalSearchComponent_Conditional_10_Template, 1, 1, "mat-spinner", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, GlobalSearchComponent_Conditional_11_Template, 4, 9, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(7, _c16, ctx.show(), !ctx.show(), ctx.show(), !ctx.show(), !ctx.show()));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 5, "APP.WORKPLACE.GLOBAL_SEARCH"));
        \u0275\u0275twoWayProperty("ngModel", ctx.filter_str);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filter_str() ? 11 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      RouterModule,
      RouterLink,
      IconComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      SlicePipe,
      TranslatePipe
    ], styles: ["\n[search][_ngcontent-%COMP%] {\n  transition: width 200ms, opacity 200ms;\n}\n/*# sourceMappingURL=global-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalSearchComponent, [{
    type: Component,
    args: [{ selector: "global-search", template: `
        <div class="relative h-full w-12">
            <button
                icon
                name="global-search"
                matRipple
                class="bg-base-200 h-10 w-10 rounded-full"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
            </button>
            <div
                search
                class="border-neutral bg-base-100 absolute top-1/2 right-2 z-50 flex h-12 max-w-[calc(100vw-4rem)] -translate-y-1/2 items-center space-x-2 rounded-[24px] border-2 px-2 shadow-sm"
                [ngClass]="{
                    'w-lg': show(),
                    'w-px': !show(),
                    'opacity-100': show(),
                    'opacity-0': !show(),
                    'pointer-events-none': !show(),
                }"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
                <input
                    #input
                    [placeholder]="'APP.WORKPLACE.GLOBAL_SEARCH' | translate"
                    class="w-1/2 flex-1 py-2 outline-hidden"
                    [(ngModel)]="filter_str"
                    (ngModelChange)="setFilter($event)"
                    (blur)="hideInput()"
                />
                @if (loading()) {
                    <mat-spinner [diameter]="32"></mat-spinner>
                }
            </div>
            @if (filter_str()) {
                <div
                    search
                    class="border-base-200 bg-base-100 absolute right-2 bottom-0 flex max-h-[40vh] max-w-[calc(100vw-4rem)] translate-y-[calc(100%-1rem)] flex-col items-center overflow-auto rounded-b border pt-4 shadow-sm"
                    [ngClass]="{
                        'w-lg': show(),
                        'w-px': !show(),
                        'opacity-100': show(),
                        'opacity-0': !show(),
                        'pointer-events-none': !show(),
                    }"
                >
                    @if (!results().length && filter_str()) {
                        <div empty class="w-full p-4 text-center opacity-60">
                            {{
                                'APP.WORKPLACE.GLOBAL_SEARCH_EMPTY' | translate
                            }}
                        </div>
                    } @else {
                        @if (!results().length) {
                            <div
                                empty
                                class="w-full p-4 text-center opacity-60"
                            >
                                {{
                                    'APP.WORKPLACE.GLOBAL_SEARCH_START'
                                        | translate
                                }}
                            </div>
                        }
                    }
                    @if (!loading() && filter_str()) {
                        @for (
                            option of results() | slice: 0 : 100;
                            track option.id + $index
                        ) {
                            <a
                                matRipple
                                [routerLink]="['/explore']"
                                [queryParams]="
                                    option.type === 'space'
                                        ? { space: option.id }
                                        : option.type === 'user' ||
                                            option.is_role
                                          ? { user: option.id }
                                          : {
                                                locate: option.id,
                                                name: option.name,
                                                zone: option.zone,
                                            }
                                "
                                class="hover:bg-base-200 flex h-14 min-h-14 w-full items-center px-4 py-2 leading-tight"
                            >
                                <div class="flex-1 overflow-hidden">
                                    <div class="w-full truncate">
                                        {{ option.name }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        {{ option.description }}
                                    </div>
                                </div>
                                <div
                                    class="bg-secondary text-secondary-content rounded-sm p-2 text-xs font-medium text-white capitalize"
                                >
                                    {{ option.type }}
                                </div>
                            </a>
                        }
                    }
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      RouterModule,
      TranslatePipe,
      IconComponent,
      FormsModule,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;93a17e879cef8830636056d807f72c99ce4bb4ed196b6e7cbfb8c72b5ee506df;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/global-search.component.ts */\n[search] {\n  transition: width 200ms, opacity 200ms;\n}\n/*# sourceMappingURL=global-search.component.css.map */\n"] }]
  }], null, { _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalSearchComponent, { className: "GlobalSearchComponent", filePath: "apps/workplace/src/app/components/global-search.component.ts", lineNumber: 149 });
})();

// apps/workplace/src/app/components/top-menu.component.ts
var _c010 = ["menuContainer"];
var _c17 = (a0) => [a0];
function TopMenuComponent_Conditional_0_For_3_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(route_r3.name);
  }
}
function TopMenuComponent_Conditional_0_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, TopMenuComponent_Conditional_0_For_3_Conditional_0_Conditional_5_Template, 2, 1, "span", 8);
    \u0275\u0275element(6, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", "nav-" + route_r3.id)("routerLink", \u0275\u0275pureFunction1(10, _c17, route_r3.route))("matTooltip", route_r3.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("mx-auto", ctx_r1.hide_text());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(route_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("mx-auto", ctx_r1.hide_text());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", route_r3.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_text() ? 5 : -1);
  }
}
function TopMenuComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TopMenuComponent_Conditional_0_For_3_Conditional_0_Template, 7, 12, "a", 5);
  }
  if (rf & 2) {
    const route_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.features().includes(route_r3.id) || route_r3.id === "home" ? 0 : -1);
  }
}
function TopMenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4, 1);
    \u0275\u0275listener("resize", function TopMenuComponent_Conditional_0_Template_div_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkMenu());
    }, \u0275\u0275resolveWindow);
    \u0275\u0275repeaterCreate(2, TopMenuComponent_Conditional_0_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-0", ctx_r1.mobile_menu() || ctx_r1.checking())("h-0!", ctx_r1.mobile_menu());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.routes());
  }
}
function TopMenuComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 10)(2, "icon");
    \u0275\u0275text(3, "menu");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const menu_r4 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r4);
  }
}
function TopMenuComponent_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "div", 12)(2, "icon", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const route_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", route_r5.route);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(route_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", route_r5.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(route_r5.name);
  }
}
function TopMenuComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TopMenuComponent_For_5_Conditional_0_Template, 8, 4, "a", 11);
  }
  if (rf & 2) {
    const route_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.features().includes(route_r5.id) || route_r5.id === "home" ? 0 : -1);
  }
}
var TopMenuComponent = class _TopMenuComponent {
  constructor() {
    this._element = inject(ElementRef);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this.menu = viewChild("menuContainer", ...ngDevMode ? [{ debugName: "menu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.buildings = this._org.building_list;
    this.building = toSignal(this._org.active_building);
    this.previous_size = signal(9999, ...ngDevMode ? [{ debugName: "previous_size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.checking = signal(false, ...ngDevMode ? [{ debugName: "checking" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mobile_menu = signal(false, ...ngDevMode ? [{ debugName: "mobile_menu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hide_text = signal(false, ...ngDevMode ? [{ debugName: "hide_text" }] : (
      /* istanbul ignore next */
      []
    ));
    this.setBuilding = (b) => this._org.building = b;
    this.user = userSignal();
    this.feature_list = settingSignal("features", []);
    this.feature_groups = settingSignal("feature_groups", {});
    this.default_page = settingSignal("app.default_route", "/landing");
    this.new_features = settingSignal("app.new_features", false);
    this.vip_visitor_booker_group = settingSignal("vip_visitor_booker_group", "");
    this.is_admin = computed(() => {
      const groups = this.user().groups;
      return groups.includes("placeos_admin") || groups.includes("placeos_support");
    }, ...ngDevMode ? [{ debugName: "is_admin" }] : (
      /* istanbul ignore next */
      []
    ));
    this.features = computed(() => {
      const feature_list = this.feature_list();
      const feature_groups = this.feature_groups();
      const groups = this.user().groups;
      const vip_group = this.vip_visitor_booker_group();
      return feature_list.filter((name) => {
        if (name === "vip-visitor-invite") {
          if (vip_group && !groups.includes(vip_group)) {
            return false;
          }
        }
        return !feature_groups[name]?.length || feature_groups[name].find((_) => groups.includes(_));
      });
    }, ...ngDevMode ? [{ debugName: "features" }] : (
      /* istanbul ignore next */
      []
    ));
    this.url = toSignal(this._router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this._router.url)), { initialValue: this._router.url });
    this.type = computed(() => {
      const url = this.url();
      const default_page = this.default_page();
      if (url.includes(default_page))
        return "home";
      if (url.includes("book/spaces"))
        return "spaces";
      if (url.includes("book/desk"))
        return "desks";
      if (url.includes("book/locker"))
        return "lockers";
      if (url.includes("book/parking-request"))
        return "parking-requests";
      if (url.includes("book/parking"))
        return "parking";
      if (url.includes("explore"))
        return "explore";
      if (url.includes("schedule"))
        return "schedule";
      return "";
    }, ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    ));
    this.routes = computed(() => [
      {
        id: "home",
        route: this.default_page(),
        icon: "home",
        name: i18n("APP.WORKPLACE.MENU_HOME")
      },
      {
        id: "desks",
        route: "/book/desk",
        icon: "desk",
        name: i18n("APP.WORKPLACE.MENU_DESKS")
      },
      {
        id: "spaces",
        route: "/book/meeting",
        icon: "meeting_room",
        name: i18n("APP.WORKPLACE.MENU_ROOMS")
      },
      {
        id: "lockers",
        route: "/book/locker",
        icon: "lock",
        name: i18n("APP.WORKPLACE.MENU_LOCKERS")
      },
      {
        id: "parking",
        route: "/book/parking",
        icon: "directions_car",
        name: i18n("APP.WORKPLACE.MENU_PARKING")
      },
      {
        id: "parking-requests",
        route: "/book/parking-request",
        icon: "local_parking",
        name: i18n("APP.WORKPLACE.MENU_PARKING_REQUESTS")
      },
      {
        id: "visitor-invite",
        route: "/book/visitor",
        icon: "person",
        name: i18n("APP.WORKPLACE.MENU_VISITORS")
      },
      {
        id: "vip-visitor-invite",
        route: "/book/vip-visitor",
        icon: "star",
        name: i18n("APP.WORKPLACE.MENU_VIP_VISITORS")
      },
      {
        id: "explore",
        route: "/explore",
        icon: "place",
        name: i18n("APP.WORKPLACE.MENU_EXPLORE")
      },
      {
        id: "schedule",
        route: "/your-bookings",
        icon: "event",
        name: i18n("APP.WORKPLACE.MENU_SCHEDULE")
      },
      {
        id: "control",
        route: "/control",
        icon: "remote_gen",
        name: i18n("APP.WORKPLACE.MENU_CONTROL")
      },
      {
        id: "group-events",
        route: "/group-events",
        icon: "local_activity",
        name: i18n("APP.WORKPLACE.MENU_EVENTS")
      },
      {
        id: "deals-n-offers",
        route: "/deals-n-offers",
        icon: "confirmation_number",
        name: i18n("APP.WORKPLACE.MENU_DEALS")
      },
      {
        id: "team-schedule",
        route: "/team-schedule",
        icon: "groups",
        name: i18n("APP.WORKPLACE.MENU_TEAM_SCHEDULE")
      }
    ], ...ngDevMode ? [{ debugName: "routes" }] : (
      /* istanbul ignore next */
      []
    ));
    this._check_menu_timer = null;
    this.checking.set(true);
    effect(() => {
      this.building();
      this._checkRoute();
    });
    afterNextRender(() => {
      this._scheduleCheckMenu(300);
    });
  }
  _checkRoute() {
    const type = this.type();
    const features = this.features();
    if (type && type !== "home" && !features.includes(type)) {
      this._router.navigate(["/"]);
    }
    this._scheduleCheckMenu(300);
  }
  _scheduleCheckMenu(delay) {
    if (this._check_menu_timer) {
      clearTimeout(this._check_menu_timer);
    }
    this._check_menu_timer = setTimeout(() => this.checkMenu(), delay);
  }
  checkMenu() {
    const menu_el = this.menu();
    const menu_width = menu_el?.nativeElement?.offsetWidth || 0;
    const container_width = this._element.nativeElement.parentElement?.offsetWidth || 0;
    this.checking.set(false);
    if (menu_width > container_width && !this.hide_text()) {
      this.hide_text.set(true);
      this._scheduleCheckMenu(20);
      this.checking.set(true);
      this.previous_size.set(container_width);
      return;
    }
    if (this.hide_text()) {
      this.mobile_menu.set(menu_width > container_width);
    }
    if (container_width > this.previous_size() && this.hide_text()) {
      this.hide_text.set(false);
      this._scheduleCheckMenu(20);
      this.checking.set(true);
    }
    this.previous_size.set(container_width);
  }
  static {
    this.\u0275fac = function TopMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopMenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopMenuComponent, selectors: [["top-menu"]], viewQuery: function TopMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.menu, _c010, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 6, vars: 2, consts: [["menu", "matMenu"], ["menuContainer", ""], ["menu", "", 1, "text-base-content", "flex", "h-full", "w-full", "min-w-full", "items-center", "justify-center", "overflow-hidden", 3, "opacity-0", "h-0!"], [1, "absolute", "inset-y-0", "-right-16", "left-0", "flex", "items-center", "justify-end"], ["menu", "", 1, "text-base-content", "flex", "h-full", "w-full", "min-w-full", "items-center", "justify-center", "overflow-hidden", 3, "resize"], ["matRipple", "", "routerLinkActive", "text-secondary active", "matTooltipPosition", "below", 1, "relative", "flex", "items-center", "justify-center", "space-x-2", "px-8", 3, "name", "routerLink", "matTooltip"], ["filled", "", 1, "text-xl"], ["outline", "", "className", "material-symbols-outlined", 1, "m-0!", "text-xl"], [1, "truncate"], ["bar", "", 1, "bg-secondary", "absolute", "inset-x-0", "bottom-0", "h-0.5"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "routerLinkActive", "text-secondary active", 3, "routerLink"], [1, "flex", "items-center", "space-x-2"], ["outline", "", "className", "material-symbols-outlined", 1, "text-xl"], [1, "truncate", "pr-4"]], template: function TopMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, TopMenuComponent_Conditional_0_Template, 4, 4, "div", 2);
        \u0275\u0275conditionalCreate(1, TopMenuComponent_Conditional_1_Template, 4, 1, "div", 3);
        \u0275\u0275elementStart(2, "mat-menu", null, 0);
        \u0275\u0275repeaterCreate(4, TopMenuComponent_For_5_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.routes().length > 1 ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mobile_menu() ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.routes());
      }
    }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent, RouterModule, RouterLink, RouterLinkActive, MatTooltipModule, MatTooltip], styles: ["\n[menu][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  shrink: 1;\n}\n[bar][_ngcontent-%COMP%] {\n  display: none;\n}\n.active[_ngcontent-%COMP%]    > [bar][_ngcontent-%COMP%] {\n  display: block;\n}\na[_ngcontent-%COMP%]:not([mat-menu-item]):not(.active) {\n  opacity: 0.6;\n}\na[_ngcontent-%COMP%]:not([mat-menu-item]):not(.active):hover {\n  border-radius: 0.5rem;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  height: 3rem;\n  background-color: var(--base-200);\n  opacity: 0.4;\n}\na[_ngcontent-%COMP%]:not(.active)   [filled][_ngcontent-%COMP%], \na.active[_ngcontent-%COMP%]   [outline][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=top-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopMenuComponent, [{
    type: Component,
    args: [{ selector: "top-menu", template: `
        @if (routes().length > 1) {
            <div
                #menuContainer
                menu
                [class.opacity-0]="mobile_menu() || checking()"
                [class.h-0!]="mobile_menu()"
                (window:resize)="checkMenu()"
                class="text-base-content flex h-full w-full min-w-full items-center justify-center overflow-hidden"
            >
                @for (route of routes(); track route) {
                    @if (features().includes(route.id) || route.id === 'home') {
                        <a
                            matRipple
                            [name]="'nav-' + route.id"
                            class="relative flex items-center justify-center space-x-2 px-8"
                            [routerLink]="[route.route]"
                            routerLinkActive="text-secondary active"
                            [matTooltip]="route.name"
                            matTooltipPosition="below"
                        >
                            <icon
                                filled
                                class="text-xl"
                                [class.mx-auto]="hide_text()"
                                >{{ route.icon }}</icon
                            >
                            <icon
                                outline
                                className="material-symbols-outlined"
                                [class.mx-auto]="hide_text()"
                                class="m-0! text-xl"
                            >
                                {{ route.icon }}
                            </icon>
                            @if (!hide_text()) {
                                <span class="truncate">{{ route.name }}</span>
                            }
                            <div
                                bar
                                class="bg-secondary absolute inset-x-0 bottom-0 h-0.5"
                            ></div>
                        </a>
                    }
                }
            </div>
        }
        @if (mobile_menu()) {
            <div
                class="absolute inset-y-0 -right-16 left-0 flex items-center justify-end"
            >
                <button icon matRipple [matMenuTriggerFor]="menu">
                    <icon>menu</icon>
                </button>
            </div>
        }
        <mat-menu #menu="matMenu">
            @for (route of routes(); track route) {
                @if (features().includes(route.id) || route.id === 'home') {
                    <a
                        mat-menu-item
                        [routerLink]="route.route"
                        routerLinkActive="text-secondary active"
                    >
                        <div class="flex items-center space-x-2">
                            <icon filled class="text-xl">{{ route.icon }}</icon>
                            <icon
                                outline
                                className="material-symbols-outlined"
                                class="text-xl"
                            >
                                {{ route.icon }}
                            </icon>
                            <div class="truncate pr-4">{{ route.name }}</div>
                        </div>
                    </a>
                }
            }
        </mat-menu>
    `, imports: [MatMenuModule, IconComponent, RouterModule, MatTooltipModule], styles: ["/* angular:styles/component:css;491d90d0153103a1df6c44daff3b497dac0fd06098e453fa2c33b0bea4e6cebc;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/top-menu.component.ts */\n[menu] > * {\n  height: 3.5rem;\n  shrink: 1;\n}\n[bar] {\n  display: none;\n}\n.active > [bar] {\n  display: block;\n}\na:not([mat-menu-item]):not(.active) {\n  opacity: 0.6;\n}\na:not([mat-menu-item]):not(.active):hover {\n  border-radius: 0.5rem;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  height: 3rem;\n  background-color: var(--base-200);\n  opacity: 0.4;\n}\na:not(.active) [filled],\na.active [outline] {\n  display: none;\n}\n/*# sourceMappingURL=top-menu.component.css.map */\n"] }]
  }], () => [], { menu: [{ type: ViewChild, args: ["menuContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopMenuComponent, { className: "TopMenuComponent", filePath: "apps/workplace/src/app/components/top-menu.component.ts", lineNumber: 143 });
})();

// apps/workplace/src/app/components/topbar.component.ts
var _c011 = () => ["/-"];
function TopbarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function TopbarComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "global-search");
  }
}
var EMPTY3 = [];
var TopbarComponent = class _TopbarComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.user_controls = UserControlsComponent;
    this.user = userSignal();
    this.logo = computed(() => {
      return this._settings.theme_signal() === "dark" ? settingSignal("logo_dark", "")() : settingSignal("logo_light", "")();
    }, ...ngDevMode ? [{ debugName: "logo" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Text to display for page title */
  get title() {
    return this._settings.value("page_title");
  }
  /** Text to display for page title */
  get search() {
    return this._settings.get("app.global_search") !== false;
  }
  get new_features() {
    return !!this._settings.get("app.new_features");
  }
  get features() {
    return this._settings.get("app.features") || EMPTY3;
  }
  static {
    this.\u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["topbar"]], decls: 10, vars: 9, consts: [["topbar", "", 1, "border-base-200", "bg-base-100", "relative", "z-50", "flex", "h-14", "items-center", "justify-between", "border-b", "shadow-sm"], ["name", "nav-logo", 1, "flex", "h-full", "w-48", "items-center", "p-2", 3, "routerLink"], ["auth", "", "alt", "Logo", 1, "h-10", "sm:block", 3, "source"], [1, "relative", "hidden", "h-full", "w-1/2", "flex-1", "items-center", "justify-center", "sm:flex"], [1, "flex", "w-48", "items-center", "justify-end"], ["icon", "", "matRipple", "", "avatar", "", "name", "user-controls", "customTooltip", "", 1, "bg-base-200", "mr-2", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", 3, "content"], [3, "user"]], template: function TopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275conditionalCreate(3, TopbarComponent_Conditional_3_Template, 2, 1, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "top-menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275conditionalCreate(7, TopbarComponent_Conditional_7_Template, 1, 0, "global-search");
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275element(9, "a-user-avatar", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c011));
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.title);
        \u0275\u0275property("source", ((tmp_2_0 = ctx.logo()) == null ? null : tmp_2_0.src) || ctx.logo());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.title ? 3 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.search ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("content", ctx.user_controls);
        \u0275\u0275advance();
        \u0275\u0275property("user", ctx.user());
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      GlobalSearchComponent,
      TopMenuComponent,
      AuthenticatedImageDirective,
      RouterModule,
      RouterLink,
      UserAvatarComponent,
      CustomTooltipComponent
    ], styles: ["\n.flex-3[_ngcontent-%COMP%] {\n  flex: 3 3 0%;\n}\n/*# sourceMappingURL=topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarComponent, [{
    type: Component,
    args: [{ selector: "topbar", template: `
        <div
            topbar
            class="border-base-200 bg-base-100 relative z-50 flex h-14 items-center justify-between border-b shadow-sm"
        >
            <a
                name="nav-logo"
                class="flex h-full w-48 items-center p-2"
                [routerLink]="['/-']"
            >
                <img
                    auth
                    class="h-10 sm:block"
                    [class.hidden]="title"
                    alt="Logo"
                    [source]="$any(logo())?.src || logo()"
                />
                @if (title) {
                    <span>{{ title }}</span>
                }
            </a>
            <div
                class="relative hidden h-full w-1/2 flex-1 items-center justify-center sm:flex"
            >
                <top-menu></top-menu>
            </div>
            <div class="flex w-48 items-center justify-end">
                @if (search) {
                    <global-search></global-search>
                }
                <button
                    icon
                    matRipple
                    avatar
                    name="user-controls"
                    class="bg-base-200 mr-2 flex h-10 w-10 items-center justify-center rounded-full"
                    customTooltip
                    [content]="user_controls"
                >
                    <a-user-avatar [user]="user()" />
                </button>
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      GlobalSearchComponent,
      TopMenuComponent,
      AuthenticatedImageDirective,
      RouterModule,
      UserAvatarComponent,
      CustomTooltipComponent
    ], styles: ["/* angular:styles/component:css;a44fe1a1620c24b3fe7fa535fb11a46fbe2a82fc133187e049f6c240e05155eb;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/topbar.component.ts */\n.flex-3 {\n  flex: 3 3 0%;\n}\n/*# sourceMappingURL=topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "apps/workplace/src/app/components/topbar.component.ts", lineNumber: 84 });
})();

export {
  FooterMenuComponent,
  ExploreMapViewComponent,
  ScheduleStateService,
  TopbarComponent
};
//# sourceMappingURL=chunk-ZLUBY3U3.js.map
