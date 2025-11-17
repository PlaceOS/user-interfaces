import {
  ActivatedRoute,
  ActiveDescendantKeyManager,
  AssetStateService,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  BreakpointObserver,
  Breakpoints,
  CalendarEvent,
  CdkScrollableModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  CurrencyPipe,
  CustomTooltipComponent,
  DOWN_ARROW,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  Desk,
  Directionality,
  Directive,
  DurationFieldComponent,
  ENTER,
  ESCAPE,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  EventFormService,
  ExploreStateService,
  FocusMonitor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HostAttributeToken,
  IconComponent,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InteractiveMapComponent,
  Iu,
  Jc,
  Ji,
  LevelPipe,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MAT_FORM_FIELD,
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MapPinComponent,
  MapRadiusComponent,
  MapsPeopleService,
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
  MaxLengthValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NgZone,
  Observable,
  OrganisationService,
  Output,
  OverlayConfig,
  OverlayModule,
  Pipe,
  Platform,
  PrintableComponent,
  ReactiveFormsModule,
  Renderer2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  Ru,
  SafePipe,
  SanitizePipe,
  SettingsService,
  SlicePipe,
  Space,
  SpacePipe,
  SpacesService,
  Subject,
  Subscription,
  TAB,
  TemplatePortal,
  TemplateRef,
  TimeFieldComponent,
  TranslatePipe,
  UP_ARROW,
  UpperCasePipe,
  User,
  UserAvatarComponent,
  UserControlsComponent,
  Va,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  VirtualKeyboardComponent,
  Yc,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  __spreadProps,
  __spreadValues,
  _animationsDisabled,
  _countGroupLabelsBeforeOption,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getOptionScrollPosition,
  addAriaReferencedId,
  addDays,
  addMinutes,
  addYears,
  afterNextRender,
  bookedResourceList,
  booleanAttribute,
  catchError,
  coerceArray,
  combineLatest,
  computed,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  currentUser,
  debounceTime,
  defaultIfEmpty,
  defer,
  delay,
  differenceInMinutes,
  distinctUntilKeyChanged,
  endOfDay,
  endOfMinute,
  filter,
  findNearbyFeature,
  first,
  firstTruthyValueFrom,
  flatten,
  forkJoin,
  format,
  formatDistanceToNow,
  formatDuration,
  forwardRef,
  generateBookingForm,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  generateQRCode,
  generateUserForm,
  getInvalidFields,
  getUnixTime,
  hasModifierKey,
  i18n,
  inject,
  input,
  isSameDay,
  kt,
  lastValueFrom,
  loadLockerBanks,
  loadLockers,
  map,
  merge,
  model,
  nextValueFrom,
  notifyError,
  notifySuccess,
  notifyWarn,
  numberAttribute,
  of,
  openConfirmModal,
  output,
  queryBookings,
  queryUserFreeBusy,
  removeAriaReferencedId,
  rulesForResource,
  saveBooking,
  searchGuests,
  searchStaff,
  setClassMetadata,
  setHours,
  setMonth,
  settingSignal,
  shareReplay,
  shiftColorTowards,
  showStaff,
  signal,
  startOfDay,
  startOfMinute,
  startWith,
  switchMap,
  take,
  tap,
  timer,
  toDate,
  unique,
  validateAssetRequestsForResource,
  viewChild,
  xc,
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
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
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
  ɵɵpureFunction3,
  ɵɵpureFunction5,
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
  ɵɵstyleMap,
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
} from "./chunk-2A5OUH7P.js";

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// apps/workplace/src/app/components/footer-menu.component.ts
var _c0 = () => ["/book", "meeting"];
var _c1 = () => ["/book", "desks"];
var _c2 = () => ["/book", "parking"];
var _c3 = () => ["/book", "visitor"];
var _c4 = () => ["/your-bookings"];
var _c5 = () => ["/group-events"];
var _c6 = (a0) => [a0];
var _c7 = () => ["/explore"];
function FooterMenuComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 12);
    \u0275\u0275text(5, "meeting_room");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "APP.WORKPLACE.MENU_ROOMS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 12);
    \u0275\u0275text(5, "desk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "APP.WORKPLACE.MENU_DESKS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 12);
    \u0275\u0275text(5, "directions_car");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "APP.WORKPLACE.MENU_PARKING"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 12);
    \u0275\u0275text(5, "person_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "APP.WORKPLACE.MENU_VISITORS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 12);
    \u0275\u0275text(5, "today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c4));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "APP.WORKPLACE.MENU_SCHEDULE"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "local_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 12);
    \u0275\u0275text(5, "local_activity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "APP.WORKPLACE.MENU_EVENTS"), " ");
  }
}
function FooterMenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function FooterMenuComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_book_items.set(false));
    });
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, FooterMenuComponent_Conditional_0_Conditional_3_Template, 9, 5, "a", 5);
    \u0275\u0275conditionalCreate(4, FooterMenuComponent_Conditional_0_Conditional_4_Template, 9, 5, "a", 6);
    \u0275\u0275conditionalCreate(5, FooterMenuComponent_Conditional_0_Conditional_5_Template, 9, 5, "a", 7);
    \u0275\u0275conditionalCreate(6, FooterMenuComponent_Conditional_0_Conditional_6_Template, 9, 5, "a", 8);
    \u0275\u0275conditionalCreate(7, FooterMenuComponent_Conditional_0_Conditional_7_Template, 9, 5, "a", 9);
    \u0275\u0275conditionalCreate(8, FooterMenuComponent_Conditional_0_Conditional_8_Template, 9, 5, "a", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("dark", ctx_r1.dark_mode());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.features().includes("spaces") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("desks") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("parking") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("visitor-invite") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("schedule") ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("events") ? 8 : -1);
  }
}
function FooterMenuComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 14)(2, "icon", 15);
    \u0275\u0275text(3, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 16);
    \u0275\u0275text(5, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 18);
    \u0275\u0275listener("click", function FooterMenuComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_book_items.set(!ctx_r1.show_book_items()));
    });
    \u0275\u0275elementStart(10, "icon", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 20)(13, "icon", 15);
    \u0275\u0275text(14, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "icon", 16);
    \u0275\u0275text(16, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 17);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 21);
    \u0275\u0275element(21, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("dark", ctx_r1.dark_mode);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c6, ctx_r1.default_page()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, "APP.WORKPLACE.MENU_HOME"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary", ctx_r1.show_book_items())("text-white", ctx_r1.show_book_items())("bg-base-200", !ctx_r1.show_book_items());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_book_items() ? "close" : "add");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !ctx_r1.features().includes("explore"));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c7));
    \u0275\u0275attribute("disabled", !ctx_r1.features().includes("explore"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, "APP.WORKPLACE.MENU_EXPLORE"));
  }
}
var _FooterMenuComponent = class _FooterMenuComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.show_book_items = signal(false);
    this.dark_mode = signal(false);
    this.features = signal([]);
    this.default_page = signal("/landing");
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.subscribe(() => {
      this.dark_mode.set(this._settings.get("app.allow_dark_mode") && this._settings.theme === "dark");
      this.features.set(this._settings.get("app.features") || []);
      this.default_page.set(this._settings.get("app.default_route") || "/landing");
    }));
  }
};
_FooterMenuComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FooterMenuComponent_BaseFactory;
  return function FooterMenuComponent_Factory(__ngFactoryType__) {
    return (\u0275FooterMenuComponent_BaseFactory || (\u0275FooterMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FooterMenuComponent)))(__ngFactoryType__ || _FooterMenuComponent);
  };
})();
_FooterMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterMenuComponent, selectors: [["footer-menu"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [[1, "fixed", "inset-0", "bottom-16", "z-20", "text-white"], [1, "relative", "z-40", "flex", "h-16", "w-full", "items-center", "justify-center", "border-t", "border-base-200", "bg-base-100", "shadow", "sm:hidden"], [1, "fixed", "inset-0", "bottom-16", "z-20", "text-white", 3, "click"], [1, "absolute", "inset-0", "bg-black", "opacity-50"], [1, "absolute", "inset-x-0", "bottom-0", "flex", "flex-wrap", "items-end", "justify-center", "p-4"], ["name", "footer-nav-meeting", "matRipple", "", "routerLinkActive", "active", 1, "m-2", "flex", "w-1/3", "flex-col", "items-center", "justify-center", "space-y-2", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-desks", "routerLinkActive", "active", 1, "m-2", "flex", "w-1/3", "flex-col", "items-center", "justify-center", "space-y-2", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-parking", "routerLinkActive", "active", 1, "m-2", "flex", "w-1/3", "flex-col", "items-center", "justify-center", "space-y-2", "text-base", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-visitor-invite", "routerLinkActive", "active", 1, "m-2", "flex", "w-1/3", "flex-col", "items-center", "justify-center", "space-y-2", 3, "routerLink"], ["matRipple", "", "name", "footer-nav-my-day", "routerLinkActive", "active", 1, "m-2", "flex", "w-1/3", "flex-col", "items-center", "justify-center", "space-y-2", "text-base", 3, "routerLink"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full", "bg-base-100", "text-2xl", "text-base-content"], ["filled", ""], ["outline", "", "className", "material-symbols-outlined", 1, "text-neutral"], [1, "text-xs"], ["matRipple", "", "name", "footer-nav-home", "routerLinkActive", "text-secondary active", 1, "relative", "flex", "flex-1", "flex-col", "items-center", "justify-center", 3, "routerLink"], ["filled", "", 1, "text-2xl"], ["outline", "", "className", "material-symbols-outlined", 1, "!m-0", "text-2xl"], [1, "text-sm"], ["matRipple", "", 1, "z-10", "mb-4", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full", 3, "click"], [1, "text-2xl"], ["matRipple", "", "routerLinkActive", "text-secondary active", 1, "relative", "flex", "flex-1", "flex-col", "items-center", "justify-center", 3, "routerLink"], [1, "absolute", "left-1/2", "top-0", "h-2", "w-24", "-translate-x-1/2", "-translate-y-full", "overflow-hidden"], [1, "mx-auto", "h-16", "w-16", "rounded-full", "border-t", "border-base-200", "bg-base-100", "shadow"]], template: function FooterMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FooterMenuComponent_Conditional_0_Template, 9, 7, "div", 0);
    \u0275\u0275conditionalCreate(1, FooterMenuComponent_Conditional_1_Template, 22, 22, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.show_book_items() && ctx.features().length > 1 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.features().length > 1 ? 1 : -1);
  }
}, dependencies: [TranslatePipe, IconComponent, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\na.active[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\na.active[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\na[_ngcontent-%COMP%]:not(.active)   [filled][_ngcontent-%COMP%], \na.active[_ngcontent-%COMP%]   [outline][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=footer-menu.component.css.map */"] });
var FooterMenuComponent = _FooterMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterMenuComponent, [{
    type: Component,
    args: [{ selector: "footer-menu", template: `
        @if (show_book_items() && features().length > 1) {
            <div
                class="fixed inset-0 bottom-16 z-20 text-white"
                [attr.dark]="dark_mode()"
                (click)="show_book_items.set(false)"
            >
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div
                    class="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-center p-4"
                >
                    @if (features().includes('spaces')) {
                        <a
                            name="footer-nav-meeting"
                            matRipple
                            [routerLink]="['/book', 'meeting']"
                            routerLinkActive="active"
                            class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2"
                        >
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                            >
                                <icon filled>meeting_room</icon>
                                <icon
                                    outline
                                    class="text-neutral"
                                    className="material-symbols-outlined"
                                    >meeting_room</icon
                                >
                            </div>
                            <div class="text-xs">
                                {{ 'APP.WORKPLACE.MENU_ROOMS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('desks')) {
                        <a
                            matRipple
                            name="footer-nav-desks"
                            [routerLink]="['/book', 'desks']"
                            routerLinkActive="active"
                            class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2"
                        >
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                            >
                                <icon filled>desk</icon>
                                <icon
                                    outline
                                    class="text-neutral"
                                    className="material-symbols-outlined"
                                    >desk</icon
                                >
                            </div>
                            <div class="text-xs">
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
                            class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2 text-base"
                        >
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                            >
                                <icon filled>directions_car</icon>
                                <icon
                                    outline
                                    class="text-neutral"
                                    className="material-symbols-outlined"
                                    >directions_car</icon
                                >
                            </div>
                            <div class="text-xs">
                                {{ 'APP.WORKPLACE.MENU_PARKING' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('visitor-invite')) {
                        <a
                            matRipple
                            name="footer-nav-visitor-invite"
                            [routerLink]="['/book', 'visitor']"
                            routerLinkActive="active"
                            class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2"
                        >
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                            >
                                <icon filled>person_add</icon>
                                <icon
                                    outline
                                    class="text-neutral"
                                    className="material-symbols-outlined"
                                    >person_add</icon
                                >
                            </div>
                            <div class="text-xs">
                                {{ 'APP.WORKPLACE.MENU_VISITORS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('schedule')) {
                        <a
                            matRipple
                            name="footer-nav-my-day"
                            [routerLink]="['/your-bookings']"
                            routerLinkActive="active"
                            class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2 text-base"
                        >
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                            >
                                <icon filled>today</icon>
                                <icon
                                    outline
                                    class="text-neutral"
                                    className="material-symbols-outlined"
                                    >today</icon
                                >
                            </div>
                            <div class="text-xs">
                                {{ 'APP.WORKPLACE.MENU_SCHEDULE' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('events')) {
                        <a
                            matRipple
                            name="footer-nav-my-day"
                            [routerLink]="['/group-events']"
                            routerLinkActive="active"
                            class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2 text-base"
                        >
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                            >
                                <icon filled>local_activity</icon>
                                <icon
                                    outline
                                    class="text-neutral"
                                    className="material-symbols-outlined"
                                    >local_activity</icon
                                >
                            </div>
                            <div class="text-xs">
                                {{ 'APP.WORKPLACE.MENU_EVENTS' | translate }}
                            </div>
                        </a>
                    }
                </div>
            </div>
        }
        @if (features().length > 1) {
            <div
                class="relative z-40 flex h-16 w-full items-center justify-center border-t border-base-200 bg-base-100 shadow sm:hidden"
                [attr.dark]="dark_mode"
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
                        class="!m-0 text-2xl"
                        >home</icon
                    >
                    <span class="text-sm">{{
                        'APP.WORKPLACE.MENU_HOME' | translate
                    }}</span>
                </a>
                <button
                    matRipple
                    class="z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                    (click)="show_book_items.set(!show_book_items())"
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
                        class="!m-0 text-2xl"
                        >place</icon
                    >
                    <span class="text-sm">{{
                        'APP.WORKPLACE.MENU_EXPLORE' | translate
                    }}</span>
                </a>
                <div
                    class="absolute left-1/2 top-0 h-2 w-24 -translate-x-1/2 -translate-y-full overflow-hidden"
                >
                    <div
                        class="mx-auto h-16 w-16 rounded-full border-t border-base-200 bg-base-100 shadow"
                    ></div>
                </div>
            </div>
        }
    `, imports: [TranslatePipe, IconComponent, RouterModule], styles: ["/* angular:styles/component:css;284ac002de2eeaa1175fa738ed3719d1108673a10454a9459c4dd2267eb55510;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/footer-menu.component.ts */\na.active icon {\n  color: var(--secondary) !important;\n}\na.active {\n  font-weight: 500;\n}\na:not(.active) [filled],\na.active [outline] {\n  display: none;\n}\n/*# sourceMappingURL=footer-menu.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterMenuComponent, { className: "FooterMenuComponent", filePath: "apps/workplace/src/app/components/footer-menu.component.ts", lineNumber: 252 });
})();

// libs/bookings/src/lib/booking-link-modal.component.ts
var _BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
};
_BookingLinkModalComponent.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingLinkModalComponent)();
};
_BookingLinkModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], decls: 26, vars: 24, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-0", "top-2"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275element(6, "img", 3);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 2);
    \u0275\u0275pipe(11, "sanitize");
    \u0275\u0275element(12, "img", 4);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 2);
    \u0275\u0275pipe(17, "safe");
    \u0275\u0275elementStart(18, "icon", 5);
    \u0275\u0275text(19, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 6)(24, "icon");
    \u0275\u0275text(25, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "BOOKING.LINK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 9, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "BOOKING.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 14, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "BOOKING.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 19, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "BOOKING.LINK_ICAL"));
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
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
var BookingLinkModalComponent = _BookingLinkModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingLinkModalComponent, [{
    type: Component,
    args: [{ selector: "booking-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKING.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button icon matRipple mat-dialog-close class="absolute right-0 top-2">
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLinkModalComponent, { className: "BookingLinkModalComponent", filePath: "libs/bookings/src/lib/booking-link-modal.component.ts", lineNumber: 77 });
})();

// libs/bookings/src/lib/desk-questions-modal.component.ts
function DeskQuestionsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 2);
    \u0275\u0275text(2, "COVID-19 Questionnaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "label");
    \u0275\u0275text(6, " Have you travelled overseas within the last 14 days?");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-radio-group", 5)(10, "mat-radio-button", 6);
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 6);
    \u0275\u0275text(13, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 7)(20, "mat-radio-button", 6);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 6);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 8)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 9)(30, "mat-radio-button", 6);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 6);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "footer", 10)(35, "button", 11);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 12)(38, "icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function DeskQuestionsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "p", 13);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var _DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.form = new FormGroup({
      travelled: new FormControl(false),
      unwell: new FormControl(false),
      contact: new FormControl(false)
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (Object.keys(this.form.value).find((key) => this.form.value[key] === true || this.form.value[key] === "true")) {
      this.failure = true;
      return;
    }
    this.event.emit({ reason: "done" });
  }
};
_DeskQuestionsModalComponent.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
};
_DeskQuestionsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, decls: 2, vars: 1, consts: [[1, "relative"], ["failure", "", 1, "relative", "pt-8"], [1, "p-4", "text-xl"], [1, "p-4", 3, "formGroup"], [1, "mb-4", "flex", "flex-col"], ["formControlName", "travelled", 1, "space-x-2"], [3, "value"], ["formControlName", "unwell", 1, "space-x-2"], [1, "flex", "flex-col"], ["formControlName", "contact", 1, "space-x-2"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskQuestionsModalComponent_Conditional_0_Template, 40, 7, "div", 0)(1, DeskQuestionsModalComponent_Conditional_1_Template, 6, 0, "main", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.failure ? 0 : 1);
  }
}, dependencies: [
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  ReactiveFormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
var DeskQuestionsModalComponent = _DeskQuestionsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQuestionsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-question-modal", template: `
        @if (!failure) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4" [formGroup]="form">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="travelled"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label>
                            Are you unwell or experiencing any cold or flu-like
                            symptoms?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="unwell"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="flex flex-col">
                        <label>
                            Have you had contact with anyone with suspected
                            COVID-19?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="contact"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                </main>
                <footer class="flex items-center justify-center p-2">
                    <button btn matRipple (click)="submit()">Submit</button>
                </footer>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <main failure class="relative pt-8">
                <p class="p-4">
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </main>
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      MatRadioModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;c7f37c1e60a5fae4a31dda6fbae0d3cc845b39f17b3f09824fe872f6bf4e7f79;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-questions-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 111 });
})();

// libs/payments/src/lib/card-input-field.component.ts
var _c02 = ["input"];
function CardInputFieldComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", "assets/icons/" + ctx_r1.card_type + ".svg", \u0275\u0275sanitizeUrl);
  }
}
function CardInputFieldComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r3[1], " (", item_r3[0], ") ");
  }
}
function CardInputFieldComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4);
  }
}
var BLANK_CARD = { card_number: "                ", cardholder: "", cvv: "" };
var DATE_PIPE = new DatePipe("en-us", "");
var _CardInputFieldComponent = class _CardInputFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.details = new FormGroup({
      card_number: new FormControl(Array(16).fill("X").join()),
      cardholder: new FormControl(""),
      exp_month: new FormControl(""),
      exp_year: new FormControl(""),
      cvv: new FormControl("", [
        Validators.minLength(3),
        Validators.maxLength(4)
      ])
    });
    this.disabled = false;
    this.months = Array(12).fill(0).map((_, idx) => [
      DATE_PIPE.transform(setMonth(Date.now(), idx), "MM"),
      DATE_PIPE.transform(setMonth(Date.now(), idx), "MMM")
    ]);
    this.years = Array(12).fill(0).map((_, idx) => DATE_PIPE.transform(addYears(Date.now(), idx), "yyyy"));
    this.digits = Array(16).fill(0);
    this._index = 0;
    this._input_el = viewChild.required("input");
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  get is_amex() {
    const no = this.details.value?.card_number || "";
    return no.startsWith("3");
  }
  get card_type() {
    const no = this.details.value?.card_number || "";
    if (no.startsWith("3"))
      return "amex";
    if (no.startsWith("4"))
      return "visa";
    if (no.startsWith("5"))
      return "mastercard";
    return "";
  }
  get card_display() {
    let no = this.details.value?.card_number || "";
    if (this.card_focused)
      no = no.substring(0, this._index) + "\u2BD0" + no.substring(this._index + 1);
    return this.is_amex ? `${no.substring(0, 4)}-${no.substring(4, 10)}-${no.substring(10)}` : `${no.substring(0, 4)}-${no.substring(4, 8)}-${no.substring(8, 12)}-${no.substring(12)}`;
  }
  get card_focused() {
    const _input_el = this._input_el();
    return document.activeElement === _input_el.nativeElement || document.activeElement === _input_el.nativeElement.parentElement;
  }
  ngOnInit() {
    this.subscription("changes", this.details.valueChanges.subscribe((v) => this.timeout("update", () => this.setValue(this.details.getRawValue()))));
  }
  focusInput() {
    this._input_el().nativeElement.focus();
    this._index = this._input_el().nativeElement.selectionStart || 0;
  }
  onInput(event) {
    if (!event || !this.card_focused)
      return;
    const idx = this._index;
    if (idx < 0 || idx > 16)
      return;
    let card_number = this.details.value.card_number;
    if ((event.code.startsWith("Digit") || event.code.startsWith("Numpad")) && idx < (this.is_amex ? 15 : 16)) {
      card_number = card_number.substring(0, idx) + event.key + card_number.substring(idx + 1);
      this.details.patchValue({ card_number });
      this._focusChange(idx, 1);
    } else if (event.code === "Backspace" && idx > 0) {
      let card_number2 = this.details.value.card_number;
      card_number2 = card_number2.substring(0, idx) + " " + card_number2.substring(idx + 1);
      this.details.patchValue({ card_number: card_number2 });
      this._focusChange(idx, -1);
    } else if (event.code === "ArrowLeft") {
      this._focusChange(idx, -1);
    } else if (event.code === "ArrowRight" && card_number[idx] !== " ") {
      this._focusChange(idx, 1);
    }
  }
  _focusChange(idx, dir) {
    this._index = Math.min(16, Math.max(0, idx + dir));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this._onChange)
      this._onChange(new_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.details.patchValue(value || BLANK_CARD);
  }
};
_CardInputFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CardInputFieldComponent_BaseFactory;
  return function CardInputFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275CardInputFieldComponent_BaseFactory || (\u0275CardInputFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CardInputFieldComponent)))(__ngFactoryType__ || _CardInputFieldComponent);
  };
})();
_CardInputFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardInputFieldComponent, selectors: [["card-input-field"]], viewQuery: function CardInputFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c02, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _CardInputFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 43, vars: 4, consts: [["input", ""], [3, "keyup", "formGroup"], [1, "flex", "flex-col"], ["for", "card-number"], ["tabindex", "0", 1, "relative", "mb-4", "flex", "h-12", "w-full", "items-center", "rounded", "border", "border-base-200", "p-2", "font-mono", "focus-within:border-base-200", "focus-within:shadow", 3, "focus"], [1, "flex-1"], ["type", "tel", "maxlength", "17", 1, "absolute", "hidden", 3, "keydown", "value"], [1, "h-8", 3, "src"], [1, "flex", "flex-1", "flex-col"], ["for", "cardholder"], ["appearance", "outline"], ["name", "cardholder", "matInput", "", "placeholder", "Mr John Smith", "formControlName", "cardholder"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-1/4", "flex-1", "flex-col"], ["placeholder", "MM", "formControlName", "exp_month"], [3, "value"], ["placeholder", "YYYY", "formControlName", "exp_year"], ["for", "cvv"], ["appearance", "outline", 1, "w-20"], ["name", "cvv", "matInput", "", "formControlName", "cvv", "maxlength", "4"]], template: function CardInputFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("keyup", function CardInputFieldComponent_Template_form_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 2)(2, "label", 3);
    \u0275\u0275text(3, "Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275listener("focus", function CardInputFieldComponent_Template_div_focus_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    });
    \u0275\u0275elementStart(5, "pre", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 6, 0);
    \u0275\u0275listener("keydown", function CardInputFieldComponent_Template_input_keydown_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CardInputFieldComponent_Conditional_9_Template, 1, 1, "img", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Name on Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 10);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16, "Cardholder name is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "label", 9);
    \u0275\u0275text(20, "Expiry Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-select", 14);
    \u0275\u0275repeaterCreate(23, CardInputFieldComponent_For_24_Template, 2, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-error");
    \u0275\u0275text(26, "Expiry month is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 13)(28, "label", 9);
    \u0275\u0275text(29, "Expiry Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-select", 16);
    \u0275\u0275repeaterCreate(32, CardInputFieldComponent_For_33_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-error");
    \u0275\u0275text(35, "Expiry year is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 2)(37, "label", 17);
    \u0275\u0275text(38, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 18);
    \u0275\u0275element(40, "input", 19);
    \u0275\u0275elementStart(41, "mat-error");
    \u0275\u0275text(42, "Invalid security code");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.details);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.card_display);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.details.value.card_number == null ? null : ctx.details.value.card_number.trim());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.card_type ? 9 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx.months);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.years);
  }
}, dependencies: [MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */"] });
var CardInputFieldComponent = _CardInputFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardInputFieldComponent, [{
    type: Component,
    args: [{ selector: "card-input-field", template: `
        <form [formGroup]="details" (window:keyup)="onInput($event)">
            <div class="flex flex-col">
                <label for="card-number">Card Number</label>
                <div
                    tabindex="0"
                    class="relative mb-4 flex h-12 w-full items-center rounded border border-base-200 p-2 font-mono focus-within:border-base-200 focus-within:shadow"
                    (focus)="focusInput()"
                >
                    <pre class="flex-1">{{ card_display }}</pre>
                    <input
                        #input
                        class="absolute hidden"
                        type="tel"
                        [value]="details.value.card_number?.trim()"
                        (keydown)="(false)"
                        maxlength="17"
                    />
                    @if (card_type) {
                        <img
                            [src]="'assets/icons/' + card_type + '.svg'"
                            class="h-8"
                        />
                    }
                </div>
            </div>
            <div class="flex flex-1 flex-col">
                <label for="cardholder">Name on Card</label>
                <mat-form-field appearance="outline">
                    <input
                        name="cardholder"
                        matInput
                        placeholder="Mr John Smith"
                        formControlName="cardholder"
                    />
                    <mat-error>Cardholder name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex w-1/4 flex-1 flex-col">
                    <label for="cardholder">Expiry Month</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="MM"
                            formControlName="exp_month"
                        >
                            @for (item of months; track item) {
                                <mat-option [value]="item[0]">
                                    {{ item[1] }} ({{ item[0] }})
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>Expiry month is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex w-1/4 flex-1 flex-col">
                    <label for="cardholder">Expiry Year</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="YYYY"
                            formControlName="exp_year"
                        >
                            @for (item of years; track item) {
                                <mat-option [value]="item">{{
                                    item
                                }}</mat-option>
                            }
                        </mat-select>
                        <mat-error>Expiry year is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="cvv">CVV</label>
                    <mat-form-field appearance="outline" class="w-20">
                        <input
                            name="cvv"
                            matInput
                            formControlName="cvv"
                            maxlength="4"
                        />
                        <mat-error>Invalid security code</mat-error>
                    </mat-form-field>
                </div>
            </div>
        </form>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CardInputFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;2bc8ca7aace10e46f51053cb2cf4127500bd9fcd06c7c0d1d5dc88d70d997800;/home/runner/work/user-interfaces/user-interfaces/libs/payments/src/lib/card-input-field.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardInputFieldComponent, { className: "CardInputFieldComponent", filePath: "libs/payments/src/lib/card-input-field.component.ts", lineNumber: 138 });
})();

// libs/payments/src/lib/payment-modal.component.ts
function PaymentModalComponent_Conditional_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" between ", \u0275\u0275pipeBind2(1, 2, ctx_r1.details.date, "shortTime"), " and ", \u0275\u0275pipeBind2(2, 5, ctx_r1.details.date + ctx_r1.details.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function PaymentModalComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2)(1, "h2", 3);
    \u0275\u0275text(2, "Booking Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 4);
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275conditionalCreate(7, PaymentModalComponent_Conditional_0_Conditional_1_Conditional_7_Template, 3, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "You booking will cost:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "card-input-field", 8);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_Conditional_0_Conditional_1_Template_card_input_field_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.card_details, $event) || (ctx_r1.card_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "footer", 9)(16, "button", 10);
    \u0275\u0275listener("click", function PaymentModalComponent_Conditional_0_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.processPayment());
    });
    \u0275\u0275text(17, " Make Payment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 11)(19, "i", 12);
    \u0275\u0275text(20, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" You are requesting a ", ctx_r1.details.type, " booking in ", ctx_r1.details.resource_name, " for ", \u0275\u0275pipeBind2(6, 6, ctx_r1.details.date, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.details.all_day ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, ctx_r1.details.amount / 100, ctx_r1.code));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.card_details);
  }
}
function PaymentModalComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 13)(1, "h2", 3);
    \u0275\u0275text(2, "Payment Successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "img", 15);
    \u0275\u0275elementStart(18, "footer", 16)(19, "button", 17);
    \u0275\u0275text(20, " Great, thanks. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Ref #", ctx_r1.transaction_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 6, ctx_r1.details.amount / 100, ctx_r1.code), " paid.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.details.resource_name, " booked.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, ctx_r1.details.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 12, ctx_r1.details.date, "shortTime"), " and ", \u0275\u0275pipeBind2(16, 15, ctx_r1.details.date + ctx_r1.details.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function PaymentModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, PaymentModalComponent_Conditional_0_Conditional_1_Template, 21, 12)(2, PaymentModalComponent_Conditional_0_Conditional_2_Template, 21, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.success ? 1 : 2);
  }
}
function PaymentModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r1.loading));
  }
}
var _PaymentModalComponent = class _PaymentModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = output();
    this.details = this._data;
    this.loading = this._data.loading;
    this.success = false;
    this.transaction_id = "12345678";
  }
  get code() {
    return this._org.currency_code;
  }
  async processPayment() {
    if (!this.card_details || !this._validCardDetails())
      return;
    this.event.emit(this.card_details);
    await this._data.makePayment(this.card_details);
    this.success = true;
  }
  _validCardDetails() {
    return (this.card_details?.cardholder.length || 0) > 0 && (this.card_details?.cvv.length || 0) >= 3;
  }
};
_PaymentModalComponent.\u0275fac = function PaymentModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentModalComponent)();
};
_PaymentModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentModalComponent, selectors: [["payment-modal"]], outputs: { event: "event" }, decls: 3, vars: 3, consts: [[1, "relative", "max-h-[100vh]", "overflow-auto"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "p-8"], [1, "relative", "flex", "w-[24rem]", "flex-col", "items-center", "space-y-2", "px-4", "pt-8"], [1, "text-2xl", "font-medium"], ["src", "assets/icons/cost.svg", 1, "w-1/2"], [1, "pb-2", "text-center", "text-sm"], [1, "text-sm"], [1, "text-center", "text-lg", "font-medium"], [1, "w-full", 3, "ngModelChange", "ngModel"], [1, "p-4"], ["matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "left-1", "top-1"], [1, "material-symbols-rounded", "text-2xl"], [1, "relative", "flex", "w-[24rem]", "flex-col", "px-8", "pt-8"], [1, "mb-2", "text-xl", "font-medium"], ["src", "assets/icons/payment-confirmed.svg", 1, "w-full"], [1, "border-t", "border-base-200", "p-4"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-full"], ["diameter", "32"]], template: function PaymentModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentModalComponent_Conditional_0_Template, 3, 1, "div", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, PaymentModalComponent_Conditional_2_Template, 5, 3, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(1, 1, ctx.loading) ? 0 : 2);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  CardInputFieldComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple
], encapsulation: 2 });
var PaymentModalComponent = _PaymentModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentModalComponent, [{
    type: Component,
    args: [{ selector: "payment-modal", template: `
        @if (!(loading | async)) {
            <div class="relative max-h-[100vh] overflow-auto">
                @if (!success) {
                    <main
                        class="relative flex w-[24rem] flex-col items-center space-y-2 px-4 pt-8"
                    >
                        <h2 class="text-2xl font-medium">Booking Payment</h2>
                        <img src="assets/icons/cost.svg" class="w-1/2" />
                        <p class="pb-2 text-center text-sm">
                            You are requesting a {{ details.type }} booking in
                            {{ details.resource_name }} for
                            {{ details.date | date: 'mediumDate' }}
                            @if (!details.all_day) {
                                between
                                {{ details.date | date: 'shortTime' }} and
                                {{
                                    details.date + details.duration * 60 * 1000
                                        | date: 'shortTime'
                                }}
                            }
                        </p>
                        <p class="text-sm">You booking will cost:</p>
                        <p class="text-center text-lg font-medium">
                            <strong>{{
                                details.amount / 100 | currency: code
                            }}</strong>
                        </p>
                        <card-input-field
                            class="w-full"
                            [(ngModel)]="card_details"
                        ></card-input-field>
                    </main>
                    <footer class="p-4">
                        <button
                            matRipple
                            class="w-full"
                            (click)="processPayment()"
                        >
                            Make Payment
                        </button>
                    </footer>
                    <button
                        icon
                        matRipple
                        mat-dialog-close
                        class="absolute left-1 top-1"
                    >
                        <i class="material-symbols-rounded text-2xl">close</i>
                    </button>
                } @else {
                    <main class="relative flex w-[24rem] flex-col px-8 pt-8">
                        <h2 class="text-2xl font-medium">Payment Successful</h2>
                        <h3 class="mb-2 text-xl font-medium">
                            Ref #{{ transaction_id }}
                        </h3>
                        <p>{{ details.amount / 100 | currency: code }} paid.</p>
                        <p>{{ details.resource_name }} booked.</p>
                        <p>{{ details.date | date: 'mediumDate' }}</p>
                        <p>
                            {{ details.date | date: 'shortTime' }} and
                            {{
                                details.date + details.duration * 60 * 1000
                                    | date: 'shortTime'
                            }}
                        </p>
                    </main>
                    <img
                        src="assets/icons/payment-confirmed.svg"
                        class="w-full"
                    />
                    <footer class="border-t border-base-200 p-4">
                        <button btn matRipple mat-dialog-close class="w-full">
                            Great, thanks.
                        </button>
                    </footer>
                }
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      CardInputFieldComponent,
      MatProgressSpinnerModule,
      MatRippleModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentModalComponent, { className: "PaymentModalComponent", filePath: "libs/payments/src/lib/payment-modal.component.ts", lineNumber: 125 });
})();

// libs/payments/src/lib/payments.service.ts
var STRIPE_MODULE = "Payment";
var _PaymentsService = class _PaymentsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._loading = new BehaviorSubject("");
    this._active_card = new BehaviorSubject("");
    this.loading = this._loading.asObservable();
    this.payment_sources = of(1).pipe(switchMap(() => {
      const mod = this._org.module("payments", STRIPE_MODULE);
      if (!mod)
        return of([]);
      return mod.execute("list_payment_methods", ["card"]);
    }), tap((_) => _[0] ? this._active_card.next(_[0].id) : ""), shareReplay(1));
  }
  get enabled() {
    return !!this._org.module("payments", STRIPE_MODULE);
  }
  async makePayment(details) {
    if (!this._org.module("payments", STRIPE_MODULE))
      throw "Payments not enabled";
    const [cost, period] = await this._getCostOfProduct(details?.type).catch((_) => [0, 60]);
    console.log("Cost:", cost, period);
    if (cost <= 0)
      return;
    let customer_id = this._settings.get("STRIPE_Customer_ID");
    if (!customer_id)
      customer_id = await this._newCustomerID();
    this._settings.saveUserSetting("STRIPE_Customer_ID", customer_id);
    const amount = cost * (details.duration / period);
    let result = void 0;
    const makePayment = async (c) => {
      result = await this._processPayment(amount, customer_id, c).catch((e) => {
        this._loading.next("");
        throw e;
      });
    };
    const data = __spreadProps(__spreadValues({}, details), {
      rate: `$${(cost / 100).toFixed(2)} per hour`,
      amount,
      makePayment,
      loading: this.loading
    });
    const ref = this._dialog.open(PaymentModalComponent, { data });
    await ref.afterClosed().toPromise();
    return result;
  }
  async _addPaymentMethod(card) {
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const payment_method = await mod.execute("add_payment_method", [
      "card",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      card
    ]);
    return payment_method.id || payment_method;
  }
  async _getCostOfProduct(type) {
    const price = [0, 60];
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      return price;
    const product_list = await mod.execute("get_product_prices", [
      null,
      null,
      type
    ]);
    if (!product_list.length)
      return price;
    return product_list;
  }
  async _processPayment(amount, customer_id, card_details) {
    this._loading.next("Checking payment method...");
    console.log("Getting payment method...");
    const source = card_details ? await this._addPaymentMethod(card_details) : this._active_card.getValue();
    if (!source)
      throw "No payment source selected";
    this._loading.next("Processing payment...");
    console.log("Processing payment...");
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const id = await mod.execute("create_payment_intent", [
      amount,
      this._org.building.currency || "USD",
      null,
      null,
      customer_id,
      null,
      null,
      null,
      currentUser()?.email
    ]);
    if (!id)
      throw "Failed to create payment";
    console.log("Confirming payment...");
    await mod.execute("confirm_payment_intent", [id, source]);
    this._loading.next("");
    return {
      success: true,
      state: "approved",
      invoice_id: id,
      amount,
      created_at: Date.now(),
      updated_at: Date.now()
    };
  }
  async _newCustomerID() {
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const user = currentUser();
    const id = await mod.execute("create_customer", [
      0,
      null,
      null,
      null,
      `${user.id}|${user.name}|FromPlaceOS`,
      user.email
    ]);
    return id;
  }
};
_PaymentsService.\u0275fac = function PaymentsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentsService)();
};
_PaymentsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentsService, factory: _PaymentsService.\u0275fac, providedIn: "root" });
var PaymentsService = _PaymentsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var _BookingFormService = class _BookingFormService extends AsyncHandler {
  get booking() {
    return this._booking.getValue();
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  newForm(type, booking = new Booking({})) {
    if (type !== this._options.getValue().type)
      this.clearForm();
    this.setOptions({ type });
    if (!booking.id) {
      booking.all_day = this._settings.get(`app.${type}s.all_day_default`) ?? this._settings.get(`app.${type}.all_day_default`) ?? this._settings.get("app.bookings.all_day_default");
    }
    this.form.reset();
    this.form.patchValue(Ji(__spreadValues(__spreadValues({}, booking.extension_data), booking), [null, void 0, ""]));
    this.subscription("form_change", this.form.valueChanges.subscribe(() => {
      const { date, duration } = this.form.getRawValue();
      this._assets.setOptions({ date, duration });
      this.storeForm();
    }));
    this.timeout("date", async () => this.form.patchValue({
      date: booking.date,
      duration: booking.duration
    }));
    this._booking.next(new Booking(booking));
    this._options.next({ type: this._options.getValue().type });
    this.timeout("set-resource", async () => {
      const resources = this.form.getRawValue().resources;
      if (!resources?.length)
        return;
      const item_list = await nextValueFrom(this.resources);
      const new_list = resources.map((asset) => item_list.find((_) => _.id == asset.id) || asset);
      this.form.patchValue({ resources: new_list });
    });
  }
  constructor() {
    super();
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._payments = inject(PaymentsService);
    this._assets = inject(AssetStateService);
    this._options = new BehaviorSubject({
      type: "desk"
    });
    this._booking = new BehaviorSubject(null);
    this._resource_use = {};
    this._loading = new BehaviorSubject("");
    this.last_success = new Booking(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking") || "{}"));
    this.loading = this._loading.asObservable();
    this.options = this._options.pipe(shareReplay(1));
    this.form = generateBookingForm();
    this.view = signal("form");
    this.resources = combineLatest([
      this._org.active_building,
      this.options.pipe(distinctUntilKeyChanged("type"))
    ]).pipe(debounceTime(300), switchMap(([bld, { type }]) => {
      if (!bld)
        return of([]);
      const useRegion = () => this._settings.get("app.use_region");
      switch (type) {
        case "desk":
          this._loading.next(i18n("BOOKINGS.DESKS_LOADING"));
          return this.loadResourceList("desks");
        case "parking":
          this._loading.next(i18n("BOOKINGS.PARKING_LOADING"));
          return this.loadResourceList("parking-spaces");
        case "locker":
          this._loading.next(i18n("BOOKINGS.LOCKERS_LOADING"));
          return loadLockers(this._org, of([bld]), loadLockerBanks(this._org, of([bld]), useRegion), useRegion);
      }
      return of([]);
    }), tap(() => this._loading.next(``)), shareReplay(1));
    this.features = this.resources.pipe(map((resource) => {
      const list = [];
      for (const { features } of resource) {
        features instanceof Array ? features.forEach((_) => list.push(_)) : null;
      }
      return unique(list).sort((a, b) => a.localeCompare(b));
    }), shareReplay(1));
    this.booking_rules = combineLatest([this._org.building_list, this._options]).pipe(switchMap(([list, { type }]) => Promise.all(list.map((bld) => lastValueFrom(Iu(bld.id, `${type}_booking_rules`))))), map((building_rules) => {
      const mapping = {};
      for (const rules of building_rules) {
        mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
      }
      return mapping;
    }), shareReplay(1));
    this.available_resources = combineLatest([
      this.options,
      this.resources,
      this.booking_rules,
      merge(this.form.get("user").valueChanges, timer(1e3)),
      merge(this.form.get("date").valueChanges, timer(1e3)),
      merge(this.form.get("duration").valueChanges, timer(1e3))
    ]).pipe(filter(() => this.form.getRawValue().date > 0 && this.form.getRawValue().duration > 0), debounceTime(500), tap(([{ type }]) => this._loading.next(i18n("BOOKINGS.LOADING_AVAILABILITY", { type }))), switchMap(([options, resources, restrictions]) => {
      let { all_day, date, duration, user } = this.form.getRawValue();
      if (all_day) {
        date = startOfDay(date).valueOf();
        duration = 24 * 60 - 1;
      }
      return bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
        type: options.type,
        zones: options.zone_id || (this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id
      }).pipe(map((booked_ids) => {
        this._resource_use = {};
        for (const id of booked_ids) {
          this._resource_use[id] = " ";
        }
        const available = resources.filter((asset) => {
          const is_restricted = rulesForResource({
            date,
            duration,
            resource: asset,
            host: user || currentUser()
          }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building.id] || []).hidden;
          return !is_restricted && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_) => asset.features.includes(_))) && (!options.zone_id || options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id) && !booked_ids.includes(asset.id);
        });
        return available;
      }), catchError(() => of([])));
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.grouped_availability = combineLatest([
      this.options,
      this.available_resources
    ]).pipe(map(([options, resource]) => {
      const groups = [];
      const asset_list = [...resource].sort((a, b) => a.zone?.id?.localeCompare(b.zone?.id));
      const members = options.members?.length ? options.members : [currentUser()];
      while (asset_list.length) {
        const group = [];
        let asset = asset_list.pop();
        while (group.length < members.length) {
          if (group.length && !group.find((_) => _.zone?.id === asset.zone?.id)) {
            break;
          }
          group.push(asset);
          asset = asset_list.pop();
        }
        if (group.length < members.length)
          continue;
        groups.push(group);
      }
      return groups;
    }));
    this.subscription("router.bookings", this._router.events.subscribe((booking) => {
      if (booking instanceof NavigationEnd && !booking.url.includes("book") && !BOOKING_TYPES.find((_) => booking.url.includes(_))) {
        this.clearForm();
      }
    }));
    this._org.initialised.pipe(first((_) => _)).subscribe(() => this.setOptions({}));
  }
  setView(value) {
    this.view.set(value);
  }
  setOptions(value) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), value));
  }
  setFeature(feature, enable) {
    if (!feature?.length)
      return;
    const features = this._options.getValue()?.features || [];
    if (enable && !features.includes(feature))
      features.push(feature);
    if (!enable && features.includes(feature))
      features.splice(features.findIndex((e) => e === feature), 1);
    this.setOptions({ features });
  }
  resetForm() {
    if (!sessionStorage.getItem("PLACEOS.booking_form")) {
      return this.newForm(this._options.getValue().type);
    }
    const booking = this._booking.getValue();
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    this.form.patchValue(Ji(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), [null, void 0, ""]));
    this._options.next({ type: this._options.getValue().type });
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.booking_form");
    sessionStorage.removeItem("PLACEOS.booking_form_options");
    this.newForm(this._options.getValue().type);
  }
  storeForm() {
    sessionStorage.setItem("PLACEOS.booking_form", JSON.stringify(__spreadValues(__spreadValues({}, this._booking.getValue()), Ji(this.form.getRawValue() || {}, [
      null,
      void 0,
      ""
    ]))));
    sessionStorage.setItem("PLACEOS.booking_form_filters", JSON.stringify(this._options.getValue() || {}));
  }
  loadForm() {
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    const data = JSON.parse(sessionStorage.getItem("PLACEOS.booking_form") || "{}");
    const booking = new Booking(data);
    this._booking.next(booking);
    const booking_data = Ji(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), [null, void 0, ""]);
    this.form.patchValue(booking_data);
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters") || "{}")));
  }
  clearOldState() {
    sessionStorage.removeItem("PLACEOS.last_booked_booking");
    this.last_success = new Booking();
  }
  openBookingLinkModal(force = false) {
    this.form.markAllAsTouched();
    if (!this.form.valid && !force)
      return;
    const event = new Booking(__spreadValues(__spreadValues({}, this.booking), this.form.getRawValue()));
    this._dialog.open(BookingLinkModalComponent, { data: event });
  }
  async confirmPost() {
    await this.checkQuestions();
    const options = this._options.getValue();
    const value = this.form.getRawValue();
    const content = i18n(options.group ? "BOOKINGS.CONFIRM_MSG_GROUP" : "BOOKINGS.CONFIRM_MSG", {
      type: options.type,
      date: format(value.date, "dd MMM yyyy") + (value.duration < 12 * 60 ? " at " + format(value.date, "h:mm a") : "")
    });
    const details = await openConfirmModal({
      title: i18n("BOOKINGS.CONFIRM_TITLE", { type: options.type }),
      content,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details?.reason !== "done")
      throw "User cancelled";
    details.loading(i18n("BOOKINGS.CONFIRM_LOADING"));
    if (options.group) {
      await this.postFormForGroup().catch((_) => {
        notifyError(JSON.stringify(_));
        details.close();
        throw _;
      });
    } else
      await this.postForm().catch((_) => {
        notifyError(JSON.stringify(_));
        details.close();
        throw _;
      });
    details.close();
  }
  async postForm(ignore_check = false) {
    if (!this.form)
      throw "No form for booking";
    if (!this.form.valid)
      throw `Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`;
    this.form.patchValue({
      booking_type: this.form.getRawValue().booking_type || this._options.getValue().type
    });
    const value = this.form.getRawValue();
    const booking = this._booking.getValue() || new Booking();
    if (!ignore_check) {
      const host = value.user?.email || value.user_email || currentUser()?.email;
      await this._checkResourceAvailable(__spreadProps(__spreadValues(__spreadValues({}, booking), value), {
        user_email: host
      }), this._options.getValue().type);
      await this._checkResourceRules(value.resources, value.date, value.duration, host);
    }
    if (this._payments.enabled) {
      const receipt = await this._payments.makePayment({
        type: this._options.getValue().type,
        resource_name: value.asset_name,
        date: value.date,
        duration: value.duration,
        all_day: value.all_day
      });
      if (!receipt?.success)
        return;
      value.extension_data = {
        invoice: receipt,
        invoice_id: receipt.invoice_id
      };
    }
    value.zones = unique([
      ...value?.zones || [],
      ...this._booking.getValue()?.zones || [],
      ...value.booking_asset?.zones || []
    ].filter((_) => _));
    this._loading.next("Saving booking");
    delete value.booking_asset;
    if (value.all_day) {
      value.date = startOfDay(value.date).valueOf();
      value.duration = 24 * 60 - 1;
    }
    const { event_id, parent_id } = value;
    delete value.event_id;
    const resources = value.resources || [];
    const zone = this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
    const zones = zone && zone instanceof Object ? unique([
      this._org.organisation.id,
      this._org.region?.id,
      zone.parent_id,
      zone.id
    ]) : [this._org.organisation.id, this._org.region?.id];
    const q = event_id ? { ical_uid: value.ical_uid, event_id } : parent_id ? { booking_id: parent_id } : {};
    if (booking.instance && !value.update_master) {
      q.instance = true;
      q.start_time = booking.booking_start;
    }
    if (value.recurrence_type && value.recurrence_type !== "none") {
      const available_period = getUnixTime(endOfDay(addDays(Date.now(), this._settings.get(`app.${value.booking_type}s.available_period`) || 90)));
      if (!value.recurrence_end || value.recurrence_end > available_period) {
        value.recurrence_end = available_period;
      }
    }
    const result = await lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues(__spreadValues({}, this._options.getValue()), value), {
      description: value.asset_name || value.description,
      user_name: value.user?.name || value.user_name,
      user_email: value.user?.email || value.user_email,
      extension_data: __spreadProps(__spreadValues({}, value.extension_data || {}), {
        assets: value.assets.map((_) => _.toJSON()),
        group: value.group,
        phone: value.phone,
        department: value.user?.department || currentUser()?.department
      }),
      approved: this._settings.get("app.bookings.no_approval") === true,
      zones: unique([...zones, ...value.zones || []]).filter((_) => _)
    })), q)).catch((e) => {
      this._loading.next("");
      throw e?.error || e;
    });
    if (value.assets?.length || booking.extension_data.assets?.length) {
      const requests = await validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
        date: value.date,
        duration: value.duration,
        all_day: value.all_day,
        host: value.booked_by_email,
        zones: unique([...zones, ...value.zones || []]).filter((_) => _)
      }, value.assets).catch((e) => {
        console.error("Couldn't update asset requests", e);
        if (e?.status === 409) {
          notifyError(i18n("BOOKINGS.ASSETS_CLASH_ERROR"));
        }
        this._loading.next("");
        throw e?.error || e;
      });
      if (!requests)
        throw i18n("BOOKINGS.ASSETS_INVALID_ERROR");
      await requests();
    }
    this._loading.next("");
    const { booking_type } = value;
    this.clearForm();
    this.form?.patchValue({ booking_type });
    this.last_success = result;
    sessionStorage.setItem("PLACEOS.last_booked_booking", JSON.stringify(result));
    this.setView("success");
    return result;
  }
  async postFormForGroup() {
    const { members, group, type } = this._options.getValue();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    const extra_members = members.filter((_) => _.email !== currentUser().email);
    if (extra_members.length <= 0)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form = this.form.getRawValue();
    const asset_list = await nextValueFrom(this.available_resources);
    const active_resource = asset_list.find((_) => _.id === form.asset_id || _.map_id === form.asset_id);
    const level = this._org.levelWithID([active_resource.zone?.id]);
    const resources = [
      active_resource,
      ...await this._getNearbyResources(level.map_id, form.asset_id, asset_list, extra_members.length)
    ];
    const group_members = unique([currentUser(), ...extra_members], "email");
    const available = await Promise.all(group_members.map((_, idx) => this._checkResourceAvailable(__spreadProps(__spreadValues({}, form), {
      asset_id: resources[idx].map_id || resources[idx].id,
      user_email: _.email
    }), type)));
    const unavailable = group_members.filter((_, idx) => !available[idx]);
    const group_name = `${currentUser().email}[${format(Date.now(), "yyyy-MM-dd")}]`;
    let user_booking = null;
    let id = "";
    for (let i = 0; i < group_members.length; i++) {
      if (!available[i])
        continue;
      const user = group_members[i];
      const asset = resources[i];
      const assets = user.email == currentUser().email ? form.assets : [];
      this.form.patchValue(__spreadProps(__spreadValues({}, form), {
        assets,
        parent_id: id,
        user,
        user_email: user.email,
        user_id: user.id,
        asset_id: asset?.id,
        asset_name: asset.name,
        description: asset.name,
        map_id: asset?.map_id || asset?.id,
        group: group_name,
        zones: (asset.zone ? unique([
          this._org.organisation.id,
          this._org.region?.id,
          asset?.zone?.parent_id,
          asset?.zone?.id
        ]) : [this._org.organisation.id, this._org.region?.id]).filter((_) => _)
      }));
      const bkn = await this.postForm(true);
      if (bkn.id && !id)
        id = bkn.id;
      if (bkn.user_email === currentUser().email)
        user_booking = bkn;
    }
    if (unavailable.length) {
      notifyWarn(i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
        members: unavailable.map((_) => _.name || _.email)?.join(", ")
      }));
    }
    return user_booking;
  }
  async checkQuestions() {
    if (this._settings.get("app.desks.ignore_questions") !== false)
      return;
    const ref = this._dialog.open(DeskQuestionsModalComponent);
    const result = await Promise.race([
      lastValueFrom(ref.componentInstance.event.pipe(first((_) => _.reason === "done"))),
      lastValueFrom(ref.afterClosed())
    ]);
    if (result?.reason !== "done")
      throw "User cancelled";
    const form = ref.componentInstance.form.getRawValue();
    for (const key in form) {
      if (form[key])
        throw "User failed questionaire";
    }
    ref.close();
  }
  /** Check if the given resource is available for the selected user to book */
  async _checkResourceAvailable({ id, asset_id, date, duration, user_email }, type) {
    if (!user_email)
      throw i18n("BOOKINGS.NO_USER");
    if (type === "group-event")
      return true;
    const bookings = await lastValueFrom(queryBookings({
      period_start: getUnixTime(date),
      period_end: getUnixTime(date + duration * 60 * 1e3),
      type,
      email: user_email,
      limit: 1e3
    }));
    const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled" && !_.rejected);
    if (active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)) {
      throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
    }
    const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
    if (allowed_bookings > 0 && active_bookings.filter((_) => _.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _.id !== id).length >= allowed_bookings) {
      const current = user_email === currentUser()?.email;
      throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
    }
    return true;
  }
  async _checkResourceRules(assets, date, duration, host) {
    const current_user = currentUser();
    const user = current_user.email === host ? current_user : await lastValueFrom(Jc(host)).catch(() => ({
      email: host
    }));
    if (!assets?.length)
      return true;
    const rules = await nextValueFrom(this.booking_rules);
    const resource_rules = assets?.map((space) => {
      const bld = this._org.buildings.find((b) => space.zone.parent_id === b.id);
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld?.id] || []);
    });
    if (!resource_rules.every((_) => !_.hidden)) {
      throw i18n("BOOKINGS.RULES_HIDDEN", { type: this._options.getValue().type || "resource" }, assets.length);
    }
    return true;
  }
  loadResourceList(type) {
    const use_region = this._settings.get("app.use_region");
    const map_metadata = (_) => (_?.metadata[type]?.details instanceof Array ? _.metadata[type].details : []).map((d) => __spreadProps(__spreadValues({}, d), {
      id: d.id || d.map_id,
      zone: _.zone
    }));
    const id = use_region ? this._org.building.parent_id : this._org.building.id;
    if (use_region) {
      const id2 = this._org.building.parent_id;
      const buildings = this._org.buildings.filter((_) => _.parent_id === id2);
      return forkJoin(buildings.map((_) => Ru(_.id, { name: type }).pipe(map((data) => flatten(data.map(map_metadata)))))).pipe(map((_) => flatten(_)));
    }
    return Ru(id, {
      name: type
    }).pipe(map((data) => flatten(data.map(map_metadata))));
  }
  async _getNearbyResources(map_url, id, resources, count) {
    const nearby_resources = [];
    let asset_list = resources.filter((_) => _.id !== id && _.map_id !== id);
    for (let i = 0; i < count; i++) {
      const item = await findNearbyFeature(map_url, id, asset_list.map((_) => _.map_id || _.id));
      if (item) {
        nearby_resources.push(resources.find((_) => _.id === item || _.map_id === item));
        asset_list = asset_list.filter((_) => _.id !== item && _.map_id !== item);
      }
    }
    return nearby_resources;
  }
};
_BookingFormService.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingFormService)();
};
_BookingFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
var BookingFormService = _BookingFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/components/src/lib/duration.pipe.ts
var _DurationPipe = class _DurationPipe {
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
};
_DurationPipe.\u0275fac = function DurationPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DurationPipe)();
};
_DurationPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "duration", type: _DurationPipe, pure: true });
var DurationPipe = _DurationPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationPipe, [{
    type: Pipe,
    args: [{
      name: "duration"
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/autocomplete.mjs
var _c03 = ["panel"];
var _c12 = ["*"];
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
        \u0275\u0275viewQuery(_c03, 5);
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
    ngContentSelectors: _c12,
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

// libs/form-fields/src/lib/user-search-field.component.ts
var _c04 = ["input"];
var _c13 = (a0) => ({ name: a0 });
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
      ctx_r3.setValue(ctx_r3.search_str);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "FORM.USER_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c13, term_r5)), " ");
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
    this.query_fn = input((q) => this._settings.get("app.basic_user_search") ? Yc({ q, authority_id: kt()?.id }).pipe(map((_) => _.data.map((_2) => new User(_2))), catchError(() => of([]))) : this.guests() ? forkJoin([
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
    \u0275\u0275viewQuerySignal(ctx._input_el, _c04, 5, ElementRef);
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
]), \u0275\u0275InheritDefinitionFeature], decls: 19, vars: 17, consts: [["auto", "matAutocomplete"], [1, "flex", "w-full", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["matPrefix", "", 1, "block", "flex", "w-6", "items-center", "justify-center", "text-2xl"], ["matInput", "", 3, "ngModelChange", "blur", "ngModel", "disabled", "matAutocomplete", "placeholder"], ["matSuffix", "", "diameter", "24"], [3, "optionSelected", "displayWith"], [3, "value"], [1, "pointer-events-none", "relative"], [3, "disabled"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary"], [1, "flex", "items-center", "space-x-2"], [1, "-ml-2", 3, "user"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [1, "pointer-events-auto", "absolute", "inset-0", "px-4", 3, "mousedown", "touchstart", "click"], [1, "pointer-events-none"], [3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary", 3, "click"]], template: function UserSearchFieldComponent_Template(rf, ctx) {
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
                                (click)="
                                    setValue(search_str); stopEvent($event)
                                "
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
                    class="h-12 w-12 rounded border border-secondary text-secondary"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSearchFieldComponent, { className: "UserSearchFieldComponent", filePath: "libs/form-fields/src/lib/user-search-field.component.ts", lineNumber: 164 });
})();

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
_UserAvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvailabilityComponent, selectors: [["user-availability-list"]], inputs: { user: [1, "user"], availability: [1, "availability"], date: [1, "date"] }, decls: 3, vars: 0, consts: [[1, "relative", "inset-y-0", "h-32", "w-[120rem]", "border-b", "border-base-200"], ["event", "", 1, "border-red-700", "absolute", "inset-y-0", "overflow-hidden", "rounded", "border", "bg-error", "p-2", "text-white", 3, "left", "width"], ["event", "", 1, "border-red-700", "absolute", "inset-y-0", "overflow-hidden", "rounded", "border", "bg-error", "p-2", "text-white"], [1, "max-w-full", "text-xs"]], template: function UserAvailabilityComponent_Template(rf, ctx) {
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
        <div
            class="relative inset-y-0 h-32 w-[120rem] border-b border-base-200"
        >
            @for (event of availability(); track event) {
                <div
                    event
                    class="border-red-700 absolute inset-y-0 overflow-hidden rounded border bg-error p-2 text-white"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvailabilityComponent, { className: "UserAvailabilityComponent", filePath: "libs/users/src/lib/find-availability-modal/user-availability.component.ts", lineNumber: 46 });
})();

// libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts
var _c05 = ["container"];
var _c14 = () => [];
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
    \u0275\u0275styleProp("left", -ctx_r3.offset_x + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today && ctx_r3.current_hour > \u0275$index_26_r3);
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
    \u0275\u0275styleProp("top", -ctx_r3.offset_y + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.name || ctx_r3.host.email, " ");
  }
}
function FindAvailabilityModalComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
  if (rf & 2) {
    const \u0275$index_60_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -(ctx_r3.offset_x + 1) + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today && ctx_r3.current_hour > \u0275$index_60_r7);
  }
}
function FindAvailabilityModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r3.date, "shortTime"), " ");
  }
}
function FindAvailabilityModalComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-availability-list", 26);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("user", user_r8)("date", ctx_r3.date)("availability", \u0275\u0275pipeBind1(1, 3, ctx_r3.availability) ? \u0275\u0275pipeBind1(2, 5, ctx_r3.availability)[user_r8.email.toLowerCase()] : \u0275\u0275pureFunction0(7, _c14));
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
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._renderer = inject(Renderer2);
    this._dialog_ref = inject(MatDialogRef);
    this.users = new BehaviorSubject([]);
    this.search = "";
    this.date = this._data.date || Date.now();
    this.duration = this._data.duration || 60;
    this.offset_y = 0;
    this.offset_x = 0;
    this.host = this._data.host;
    this.hours = new Array(24).fill(0).map((_, idx) => setHours(startOfDay(Date.now()), idx).valueOf());
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
    this._container_el = viewChild.required("container");
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
      const el = this._container_el().nativeElement.querySelector(`[hour="${date.getHours()}"]`);
      if (el) {
        const rect = this._container_el().nativeElement.getBoundingClientRect();
        const el_rect = el.getBoundingClientRect();
        this._container_el().nativeElement.scrollTo(el_rect.left - 128 - rect.left, 0);
      }
      this.onScroll();
    }, 300);
  }
  onScroll() {
    this.offset_x = this._container_el().nativeElement.scrollLeft;
    this.offset_y = this._container_el().nativeElement.scrollTop;
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
  return new (__ngFactoryType__ || _FindAvailabilityModalComponent)();
};
_FindAvailabilityModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAvailabilityModalComponent, selectors: [["find-availability-modal"]], viewQuery: function FindAvailabilityModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._container_el, _c05, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 52, vars: 33, consts: [["container", ""], [1, "flex", "flex-col", "space-y-2", "p-2"], [1, "flex", "h-14", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-9rem)]", "flex-col", "overflow-hidden", "rounded", "border", "border-base-300", "sm:h-[65vh]"], [1, "flex", "w-full", "flex-col", "space-y-2", "p-2", "sm:flex-row", "sm:space-x-2", "sm:space-y-0"], [1, "max-h-[3.25rem]", "flex-1", 3, "ngModelChange", "ngModel"], [1, "relative", "grid", "h-1/2", "w-full", "max-w-[100vw]", "flex-1", "divide-x", "divide-y", "divide-base-200", "overflow-hidden", "border-t", "border-base-200", "sm:max-w-[80vw]"], ["times", "", 1, "col-start-2", "flex", "h-10", "overflow-hidden", "border-l", "border-base-200"], ["hour", "", 1, "relative", "h-10", "min-w-[5rem]", "border-r", "border-base-200", "p-2", "text-sm", 3, "left"], ["users", "", 1, "row-start-2", "w-24", "overflow-hidden"], ["host", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2"], [1, "text-2xl", 3, "user"], [1, "max-w-full", "overflow-hidden", "break-words", "px-2", "text-center", "text-xs"], ["person", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2", 3, "top"], ["blocks", "", 1, "relative", "row-start-2", "overflow-hidden"], ["fixed", "", 1, "absolute", "inset-0", "flex", "overflow-hidden"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200", 3, "left"], ["selection", "", 1, "absolute", "inset-y-0", "z-20", "cursor-grab", "!border-x-2", "!border-info", "active:cursor-grabbing", 3, "mousedown", "touchstart"], [1, "absolute", "inset-0", "bg-info", "opacity-30"], ["handle", "", 1, "absolute", "-left-px", "top-1/2", "h-3", "w-3", "-translate-x-1/2", "-translate-y-1/2", "rounded-full", "bg-info"], ["handle", "", 1, "absolute", "-right-px", "top-1/2", "h-3", "w-3", "-translate-y-1/2", "translate-x-1/2", "rounded-full", "bg-info", "hover:h-4", "hover:w-4", "active:bg-secondary", 3, "mousedown", "touchstart"], [1, "absolute", "left-1/2", "top-2", "-translate-x-1/2", "whitespace-nowrap", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "text-xs", "shadow"], [1, "absolute", "left-1/2", "top-12", "-translate-x-1/2", "whitespace-nowrap", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "text-xs", "shadow"], ["scroll", "", 1, "absolute", "inset-0", "overflow-auto", 3, "scroll"], [1, "pointer-events-none", 3, "user", "date", "availability"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], ["hour", "", 1, "relative", "h-10", "min-w-[5rem]", "border-r", "border-base-200", "p-2", "text-sm"], ["person", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2"], [1, "max-w-full", "break-words", "px-2", "text-center", "text-xs"], ["icon", "", 1, "absolute", "-left-1", "-top-1", 3, "click"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200"]], template: function FindAvailabilityModalComponent_Template(rf, ctx) {
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
    \u0275\u0275twoWayListener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.date, $event) || (ctx.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.on_change.next(ctx.on_change.getValue() + 1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a-user-search-field", 7);
    \u0275\u0275twoWayListener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.user, $event) || (ctx.user = $event);
      return \u0275\u0275resetView($event);
    });
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
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16)(25, "div", 17);
    \u0275\u0275repeaterCreate(26, FindAvailabilityModalComponent_For_27_Template, 1, 3, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(28, "div", 19);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    });
    \u0275\u0275element(29, "div", 20)(30, "div", 21);
    \u0275\u0275elementStart(31, "div", 22);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 23);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "duration");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, FindAvailabilityModalComponent_Conditional_35_Template, 3, 4, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 25, 0);
    \u0275\u0275listener("scroll", function FindAvailabilityModalComponent_Template_div_scroll_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll());
    });
    \u0275\u0275element(38, "user-availability-list", 26);
    \u0275\u0275pipe(39, "async");
    \u0275\u0275pipe(40, "async");
    \u0275\u0275repeaterCreate(41, FindAvailabilityModalComponent_For_42_Template, 3, 8, "user-availability-list", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(43, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "footer", 2)(45, "button", 27)(46, "div", 28)(47, "icon", 29);
    \u0275\u0275text(48, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 30);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 18, "CALENDAR_EVENT.FIND_AVAILABILITY"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.date);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.user);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("top", -ctx.offset_y + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx.host);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.host.name || ctx.host.email, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(23, 20, ctx.users));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("left", "calc(" + ctx.selection_left + "rem - " + ctx.offset_x + "px)")("width", ctx.selection_width + "rem");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 22, ctx.duration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.move_time ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.host)("date", ctx.date)("availability", \u0275\u0275pipeBind1(39, 24, ctx.availability) ? \u0275\u0275pipeBind1(40, 26, ctx.availability)[ctx.host.email] : \u0275\u0275pureFunction0(32, _c14));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(43, 28, ctx.users));
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 30, "COMMON.BACK_TO_FORM"), " ");
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
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
], styles: ["\n\n.grid[_ngcontent-%COMP%] {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true][_ngcontent-%COMP%], \n[disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%] {\n  background: var(--base-300) !important;\n  pointer-events: none;\n}\n[disabled=true][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */"] });
var FindAvailabilityModalComponent = _FindAvailabilityModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindAvailabilityModalComponent, [{
    type: Component,
    args: [{ selector: "find-availability-modal", template: `
        <div class="flex flex-col space-y-2 p-2">
            <header
                class="flex h-14 w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CALENDAR_EVENT.FIND_AVAILABILITY' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="flex h-[calc(100vh-9rem)] flex-col overflow-hidden rounded border border-base-300 sm:h-[65vh]"
            >
                <div
                    class="flex w-full flex-col space-y-2 p-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                >
                    <a-date-field
                        [(ngModel)]="date"
                        class="max-h-[3.25rem] flex-1"
                        (ngModelChange)="
                            on_change.next(on_change.getValue() + 1)
                        "
                    ></a-date-field>
                    <a-user-search-field
                        [(ngModel)]="user"
                        (ngModelChange)="addUser($event)"
                        class="max-h-[3.25rem] flex-1"
                    ></a-user-search-field>
                </div>
                <div
                    class="relative grid h-1/2 w-full max-w-[100vw] flex-1 divide-x divide-y divide-base-200 overflow-hidden border-t border-base-200 sm:max-w-[80vw]"
                >
                    <div
                        times
                        class="col-start-2 flex h-10 overflow-hidden border-l border-base-200"
                    >
                        @for (hr of hours; track hr; let hour = $index) {
                            <div
                                hour
                                class="relative h-10 min-w-[5rem] border-r border-base-200 p-2 text-sm"
                                [attr.disabled]="today && current_hour > hour"
                                [style.left]="-offset_x + 'px'"
                            >
                                <span>{{ hr | date: 'haa' }}</span>
                            </div>
                        }
                    </div>
                    <div users class="row-start-2 w-24 overflow-hidden">
                        <div
                            host
                            class="relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2"
                            [style.top]="-offset_y + 'px'"
                        >
                            <a-user-avatar
                                class="text-2xl"
                                [user]="host"
                            ></a-user-avatar>
                            <div
                                class="max-w-full overflow-hidden break-words px-2 text-center text-xs"
                            >
                                {{ host.name || host.email }}
                            </div>
                        </div>
                        @for (user of users | async; track user) {
                            <div
                                person
                                class="relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2"
                                [style.top]="-offset_y + 'px'"
                            >
                                <a-user-avatar
                                    class="text-2xl"
                                    [user]="user"
                                ></a-user-avatar>
                                <div
                                    class="max-w-full break-words px-2 text-center text-xs"
                                >
                                    {{ user.name || host.email }}
                                </div>
                                <button
                                    icon
                                    class="absolute -left-1 -top-1"
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
                                    class="relative h-full min-w-[5rem] border-l border-base-200"
                                    [style.left]="-(offset_x + 1) + 'px'"
                                    [attr.disabled]="today && current_hour > h"
                                ></div>
                            }
                            <div
                                selection
                                class="absolute inset-y-0 z-20 cursor-grab !border-x-2 !border-info active:cursor-grabbing"
                                [style.left]="
                                    'calc(' +
                                    selection_left +
                                    'rem - ' +
                                    offset_x +
                                    'px)'
                                "
                                [style.width]="selection_width + 'rem'"
                                (mousedown)="startMovePeriod($event)"
                                (touchstart)="startMovePeriod($event)"
                            >
                                <div
                                    class="absolute inset-0 bg-info opacity-30"
                                ></div>
                                <div
                                    handle
                                    class="absolute -left-px top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-info"
                                ></div>
                                <div
                                    handle
                                    class="absolute -right-px top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-info hover:h-4 hover:w-4 active:bg-secondary"
                                    (mousedown)="startMoveDuration($event)"
                                    (touchstart)="startMoveDuration($event)"
                                ></div>
                                <div
                                    class="absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow"
                                >
                                    {{ duration | duration }}
                                </div>
                                @if (move_time) {
                                    <div
                                        class="absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow"
                                    >
                                        {{ date | date: 'shortTime' }}
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
                                [date]="date"
                                [availability]="
                                    (availability | async)
                                        ? (availability | async)[host.email]
                                        : []
                                "
                            ></user-availability-list>
                            @for (user of users | async; track user) {
                                <user-availability-list
                                    class="pointer-events-none"
                                    [user]="user"
                                    [date]="date"
                                    [availability]="
                                        (availability | async)
                                            ? (availability | async)[
                                                  user.email.toLowerCase()
                                              ]
                                            : []
                                    "
                                ></user-availability-list>
                            }
                        </div>
                    </div>
                </div>
            </main>
            <footer
                class="flex h-14 w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
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
    ], styles: ["/* angular:styles/component:css;2646a244d0fa7ec069ba0433790c5f048dfd8d83f511e0223ed56c1e20b3274e;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts */\n.grid {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true],\n[disabled=true] [header] {\n  background: var(--base-300) !important;\n  pointer-events: none;\n}\n[disabled=true] > * {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAvailabilityModalComponent, { className: "FindAvailabilityModalComponent", filePath: "libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts", lineNumber: 285 });
})();

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
_NewUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewUserModalComponent, selectors: [["new-user-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [[1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "w-full", "min-w-[24rem]", "flex-col", "items-center", "px-4"], [1, "flex", "w-full", "flex-col", "items-center", "space-y-2", "p-2"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "border-t", "border-base-200", "p-2"], [3, "form"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["btn", "", "matRipple", "", 3, "click"]], template: function NewUserModalComponent_Template(rf, ctx) {
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
  IconComponent
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: 20em !important;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n/*# sourceMappingURL=new-user-modal.component.css.map */"] });
var NewUserModalComponent = _NewUserModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewUserModalComponent, [{
    type: Component,
    args: [{ selector: "new-user-modal", template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
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
                class="flex w-full items-center justify-end space-x-2 border-t border-base-200 p-2"
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
      IconComponent
    ], styles: ["/* angular:styles/component:css;d1500f659b91dd2b74c0cb226624db0e8f324134dbaaf267a69f046570069bff;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/new-user-modal.component.ts */\nmain {\n  min-height: 20em !important;\n  width: 100%;\n}\nfooter button {\n  min-width: 8em;\n}\n/*# sourceMappingURL=new-user-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewUserModalComponent, { className: "NewUserModalComponent", filePath: "libs/users/src/lib/new-user-modal.component.ts", lineNumber: 72 });
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
    this.users = this.search.pipe(debounceTime(300), switchMap((s) => Yc({ q: s }).pipe(map((o) => o.data), catchError(() => of([])))), startWith([]));
  }
  select(user) {
    this._dialog_ref.close(user);
  }
};
_SelectUserModalComponent.\u0275fac = function SelectUserModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectUserModalComponent)();
};
_SelectUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectUserModalComponent, selectors: [["select-user-modal"]], decls: 20, vars: 12, consts: [[1, "w-[28rem]"], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[60vh]", "overflow-auto", "px-2", "pb-2"], ["appearance", "outline", 1, "no-subscript", "sticky", "top-0", "z-10", "mb-2", "w-full", "bg-base-100"], ["matPrefix", "", 1, "relative", "-left-2", "text-2xl"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "relative", "z-0", "w-full", "space-y-2"], ["matRipple", "", 1, "w-full", "rounded", "border", "border-base-300", "p-2", "text-left", "hover:bg-base-200"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "p-8", "opacity-30"], ["matRipple", "", 1, "w-full", "rounded", "border", "border-base-300", "p-2", "text-left", "hover:bg-base-200", 3, "click"], [1, "text-xs", "opacity-30"]], template: function SelectUserModalComponent_Template(rf, ctx) {
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
    args: [{ selector: `select-user-modal`, template: ` <div class="w-[28rem]">
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
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
                class="no-subscript sticky top-0 z-10 mb-2 w-full bg-base-100"
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
                        class="w-full rounded border border-base-300 p-2 text-left hover:bg-base-200"
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

// libs/users/src/lib/user-label.component.ts
var _c06 = (a0) => ({ title: a0 });
var _c15 = (a0) => ({ host_name: a0 });
var _c22 = (a0) => ({ location: a0 });
function UserLabelComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const level_r1 = \u0275\u0275readContextLet(17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "APP.VISITOR_KIOSK.LABEL_LOCATION", \u0275\u0275pureFunction1(4, _c22, level_r1.display_name || level_r1.name)), " ");
  }
}
function UserLabelComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 9);
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
function UserLabelComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
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
_UserLabelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLabelComponent, selectors: [["user-label"]], inputs: { user: [1, "user"], width: [1, "width"], height: [1, "height"] }, decls: 33, vars: 45, consts: [[1, "user-label", "relative", "m-[0.5em]", "rounded-[0.75em]", "border", "border-neutral", "bg-base-100", "p-[1em]"], [1, "flex", "h-full", "flex-col", "leading-tight"], [1, "mb-[0.25em]", "flex", "h-[5em]", "w-[5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border", "border-base-400", "bg-base-200"], [1, "text-[2.25em]", 3, "user"], [1, "mb-[0.25em]", "text-[1.5em]"], [1, "opacity-60"], [1, "absolute", "bottom-[1em]", "left-[1em]", "mt-[0.5em]", "w-[8em]", "rounded-[0.5em]", "border", "border-black", "px-[0.5em]", "py-[0.25em]", "text-center", "font-medium", "uppercase", "text-black"], [1, "absolute", "right-[1em]", "top-[1em]", "flex", "flex-col", "items-end", "space-y-[0.5em]"], ["auth", "", "alt", "Logo", 1, "h-[3em]", "object-contain", 3, "src"], [1, "text-right", "text-[0.75em]"], [1, "text-right"], [1, "absolute", "bottom-[1em]", "right-[1em]", "flex", "items-end"], [1, "text-right", "font-medium", "leading-tight"], [1, "relative", "flex", "h-[4em]", "w-[4em]", "items-center", "justify-center", "rounded-[0.5em]", "border", "border-base-200"], [1, "h-[3.5em]", "w-[3.5em]", "object-contain", "object-center", 3, "src"]], template: function UserLabelComponent_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7);
    \u0275\u0275element(16, "img", 8);
    \u0275\u0275declareLet(17);
    \u0275\u0275pipe(18, "level");
    \u0275\u0275conditionalCreate(19, UserLabelComponent_Conditional_19_Template, 3, 6, "div", 9);
    \u0275\u0275elementStart(20, "pre", 10);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, UserLabelComponent_Conditional_22_Template, 2, 1, "pre", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 11)(24, "div", 12)(25, "div");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13);
    \u0275\u0275conditionalCreate(32, UserLabelComponent_Conditional_32_Template, 1, 1, "img", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_11_0;
    let tmp_12_0;
    \u0275\u0275styleProp("width", ctx.width() + "em")("height", ctx.height() + "em");
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.user());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.user().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 24, "APP.VISITOR_KIOSK.LABEL_FOR", \u0275\u0275pureFunction1(41, _c06, (tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.title)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 27, "APP.VISITOR_KIOSK.LABEL_HOST", \u0275\u0275pureFunction1(43, _c15, (tmp_5_0 = ctx.user()) == null ? null : tmp_5_0.host)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 30, "APP.VISITOR_KIOSK.VISITOR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("max-width", ctx.landscape ? "8em" : "");
    \u0275\u0275property("src", (ctx.logo == null ? null : ctx.logo.src) || ctx.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    const level_r3 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(18, 32, ctx.user().zones));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(level_r3 ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx.user()) == null ? null : tmp_11_0.extra_details);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_12_0 = ctx.user()) == null ? null : tmp_12_0.pass_number) ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("space-x-[0", !ctx.landscape)("space-y-[0", ctx.landscape)("flex-col", ctx.landscape);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 35, ctx.user().date, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 38, ctx.user().date, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.user().qr_code ? 32 : -1);
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
            class="user-label relative m-[0.5em] rounded-[0.75em] border border-neutral bg-base-100 p-[1em]"
            [style.width]="width() + 'em'"
            [style.height]="height() + 'em'"
        >
            <div class="flex h-full flex-col leading-tight">
                <div
                    class="mb-[0.25em] flex h-[5em] w-[5em] items-center justify-center overflow-hidden rounded-full border border-base-400 bg-base-200"
                >
                    <a-user-avatar
                        class="text-[2.25em]"
                        [user]="user()"
                    ></a-user-avatar>
                </div>
                <div class="mb-[0.25em] text-[1.5em]">{{ user().name }}</div>
                <div>
                    {{
                        'APP.VISITOR_KIOSK.LABEL_FOR'
                            | translate: { title: user()?.title }
                    }}
                </div>
                <div class="opacity-60">
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
                class="absolute bottom-[1em] left-[1em] mt-[0.5em] w-[8em] rounded-[0.5em] border border-black px-[0.5em] py-[0.25em] text-center font-medium uppercase text-black"
            >
                {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
            </div>
            <div
                class="absolute right-[1em] top-[1em] flex flex-col items-end space-y-[0.5em]"
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
                    <div class="text-right text-[0.75em]">
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
                <pre class="text-right">{{ user()?.extra_details }}</pre>
                @if (user()?.pass_number) {
                    <pre class="text-right text-[0.75em]">{{
                        user()?.pass_number
                    }}</pre>
                }
            </div>
            <div
                class="absolute bottom-[1em] right-[1em] flex items-end"
                [class.space-x-[0.5em]]="!landscape"
                [class.space-y-[0.5em]]="landscape"
                [class.flex-col]="landscape"
            >
                <div class="text-right font-medium leading-tight">
                    <div>
                        {{ user().date | date: 'shortTime' }}
                    </div>
                    <div>
                        {{ user().date | date: 'mediumDate' }}
                    </div>
                </div>
                <div
                    class="relative flex h-[4em] w-[4em] items-center justify-center rounded-[0.5em] border border-base-200"
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
])], decls: 10, vars: 6, consts: [["counter", "", 1, "flex", "items-center", "text-base", 3, "keydown.shift", "keydown.control", "keydown.meta", "keyup.shift", "keyup.control", "keyup.meta"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "z-10", "h-12", "w-12", "rounded-l", "rounded-r-none", "border", "border-secondary", "text-secondary", 3, "click", "disabled"], ["value", "", 1, "relative", "z-0", "-mx-px", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "rounded-none", "border", "border-secondary", "p-2", "focus-within:z-20"], ["type", "text", "limitInput", "", 1, "absolute", "inset-0", "rounded-none", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "focus", "blur", "ngModel"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "z-10", "h-12", "w-12", "rounded-l-none", "rounded-r", "border", "border-secondary", "text-secondary", 3, "click", "disabled"]], template: function CounterComponent_Template(rf, ctx) {
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
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], styles: ["\n\n[counter].disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n/*# sourceMappingURL=counter.component.css.map */"] });
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
                class="z-10 h-12 w-12 rounded-l rounded-r-none border border-secondary text-secondary"
                [disabled]="!value || value === min()"
                (click)="remove()"
            >
                <icon>remove</icon>
            </button>
            <div
                value
                class="relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center rounded-none border border-secondary p-2 focus-within:z-20"
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
                class="z-10 h-12 w-12 rounded-l-none rounded-r border border-secondary text-secondary"
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
    ], imports: [FormsModule, IconComponent], styles: ["/* angular:styles/component:css;a6b2eba167820a19f3bfe4858772015401d059291041c0f38f39de4e622992d8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/counter.component.ts */\n[counter].disabled {\n  pointer-events: none;\n  opacity: 0.3;\n}\n/*# sourceMappingURL=counter.component.css.map */\n"] }]
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
_UserLabelModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLabelModalComponent, selectors: [["user-label-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 41, vars: 20, consts: [["print_content", ""], [1, "relative", "flex", "h-screen", "w-screen", "flex-col", "items-center", "space-y-4", "overflow-auto", "bg-base-200", "print:hidden"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-2", "top-2", "border", "border-base-300", "bg-base-100"], [1, "rounded-lg", "border", "border-base-300", "bg-base-100", "p-2"], [3, "user", "width", "height"], ["printable", "", 1, "print-only", 3, "content"], [1, "rounded-lg", "border", "border-base-300", "bg-base-100"], [1, "space-y-4", "p-4"], [1, "text-xl", "font-medium"], [1, ""], [3, "ngModelChange", "ngModel", "min", "step", "render_fn"], [1, "flex", "space-x-4"], [3, "ngModelChange", "ngModel", "min", "max", "step"], [1, "font-medium"], [1, "flex", "space-x-4", "p-2"], [1, "flex", "justify-end", "border-t", "border-base-300", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function UserLabelModalComponent_Template(rf, ctx) {
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
            class="relative flex h-screen w-screen flex-col items-center space-y-4 overflow-auto bg-base-200 print:hidden"
        >
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-2 top-2 border border-base-300 bg-base-100"
            >
                <icon>close</icon>
            </button>
            <div class="rounded-lg border border-base-300 bg-base-100 p-2">
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
            <div class="rounded-lg border border-base-300 bg-base-100">
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
                    class="flex justify-end border-t border-base-300 px-4 py-2"
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

// libs/bookings/src/lib/parking.service.ts
var _ParkingService = class _ParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._loading = new BehaviorSubject([]);
    this.loading = this._loading.asObservable();
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id) && lvl.tags.includes("parking"));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id && lvl.tags.includes("parking"));
    }));
    this.spaces = combineLatest([this.levels]).pipe(filter(([lvls]) => !!lvls[0]?.id), switchMap(([levels]) => {
      this._loading.next([...this._loading.getValue(), "spaces"]);
      return forkJoin(levels.map((lvl) => Iu(lvl.id, "parking-spaces").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((s) => __spreadProps(__spreadValues({}, s), {
        zone_id: lvl.id
      }))))));
    }), map((list) => flatten(list)), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([this._org.active_building]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return Iu(bld.id, "parking-users");
    }), map((metadata) => metadata.details instanceof Array ? metadata.details : []), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "users"))), shareReplay(1));
    this.has_booking = queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).pipe(map((_) => _.length > 0), shareReplay(1));
    this.assigned_space = this.spaces.pipe(map((list) => list.find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.user_details = this.users.pipe(map((list) => list.find((_) => _.email?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.deny_parking_access = this.user_details.pipe(map((details) => !!details?.deny));
    this.booked_space = combineLatest([
      this._org.active_building,
      this.spaces
    ]).pipe(map(([_, spaces]) => queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).pipe(catchError(() => of([])), map((booking_list) => booking_list.map((booking) => spaces.find((space) => space.id === booking.asset_id)).filter((space) => !!space)))), map((_) => _[0]), shareReplay(1));
    this.subscription("spaces", this.assigned_space.subscribe());
  }
};
_ParkingService.\u0275fac = function ParkingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingService)();
};
_ParkingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingService, factory: _ParkingService.\u0275fac, providedIn: "root" });
var ParkingService = _ParkingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c07 = ["switch"];
var _c16 = ["*"];
function MatSlideToggle_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  /** Unique ID for the label element. */
  _labelId;
  /** Returns the unique id for the visual hidden button. */
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  /** Reference to the MDC switch element. */
  _switchElement;
  /** Focuses the slide-toggle. */
  focus() {
    this._switchElement.nativeElement.focus();
  }
  /** Whether noop animations are enabled. */
  _noopAnimations = _animationsDisabled();
  /** Whether the slide toggle is currently focused. */
  _focused;
  /** Name value will be applied to the input element if present. */
  name = null;
  /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
  id;
  /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
  labelPosition = "after";
  /** Used to set the aria-label attribute on the underlying input element. */
  ariaLabel = null;
  /** Used to set the aria-labelledby attribute on the underlying input element. */
  ariaLabelledby = null;
  /** Used to set the aria-describedby attribute on the underlying input element. */
  ariaDescribedby;
  /** Whether the slide-toggle is required. */
  required;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the slide toggle. This API is supported in M2 themes only,
   * it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slide-toggle/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the slide toggle is disabled. */
  disabled = false;
  /** Whether the slide toggle has a ripple. */
  disableRipple = false;
  /** Tabindex of slide toggle. */
  tabIndex = 0;
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  /** Whether to hide the icon inside of the slide toggle. */
  hideIcon;
  /** Whether the slide toggle should remain interactive when it is disabled. */
  disabledInteractive;
  /** An event will be dispatched each time the slide-toggle changes its value. */
  change = new EventEmitter();
  /**
   * An event will be dispatched each time the slide-toggle input is toggled.
   * This event is always emitted when the user toggles the slide toggle, but this does not mean
   * the slide toggle's value has changed.
   */
  toggleChange = new EventEmitter();
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of Validator. */
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  /** Implemented as a part of Validator. */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  /** Method being called whenever the underlying button is clicked. */
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSlideToggle),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c16,
    decls: 13,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleClick());
        });
        \u0275\u0275element(3, "span", 3);
        \u0275\u0275elementStart(4, "span", 4)(5, "span", 5)(6, "span", 6);
        \u0275\u0275element(7, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275element(9, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, MatSlideToggle_Conditional_10_Template, 5, 0, "span", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "label", 11);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275projection(12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(8);
        \u0275\u0275property("matRippleTrigger", switch_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSlideToggle),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color)}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle, MatCommonModule],
    exports: [MatSlideToggle, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle, MatCommonModule],
      exports: [MatSlideToggle, MatCommonModule]
    }]
  }], null, null);
})();

// libs/explore/src/lib/set-datetime-modal.component.ts
var _c08 = () => ({ standalone: true });
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.resource.name || ctx_r1.resource.map_id || "Unknown Resource", " ");
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
    \u0275\u0275elementStart(14, "div", 9)(15, "label");
    \u0275\u0275text(16, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "a-duration-field", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.resource ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.host ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("to", ctx_r1.book_until);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(12, _c08))("use_24hr", ctx_r1.use_24hr_time);
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_8_0 = ctx_r1.form.get("date")) == null ? null : tmp_8_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr_time);
  }
}
var _SetDatetimeModalComponent = class _SetDatetimeModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.host = this._data.host;
    this.form = new FormGroup({
      user: new FormControl(this._data.user),
      date: new FormControl(this._data.date),
      duration: new FormControl(this._data.duration)
    });
    this.book_until = this._data.until;
    this.resource = this._data.resource;
  }
  get use_24hr_time() {
    return this._settings.get("app.use_24_hour_time");
  }
};
_SetDatetimeModalComponent.\u0275fac = function SetDatetimeModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SetDatetimeModalComponent)();
};
_SetDatetimeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetDatetimeModalComponent, selectors: [["set-datetime-modal"]], decls: 11, vars: 5, consts: [[1, "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[24rem]", "max-w-[85vw]", 3, "formGroup"], [1, "mx-2", "mb-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-end", "rounded", "border-none", "bg-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "flex-col", "space-x-0", "sm:flex-row", "sm:space-x-2"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], ["formControlName", "date", 3, "to"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], [1, "mb-2", "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], [1, "mb-4", "w-full", "rounded", "border", "border-base-200", "px-4", "py-3"], ["formControlName", "user", 1, "mb-4"]], template: function SetDatetimeModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2, "Set date and time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(6, SetDatetimeModalComponent_Conditional_6_Template, 18, 13, "main", 3);
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
var SetDatetimeModalComponent = _SetDatetimeModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetDatetimeModalComponent, [{
    type: Component,
    args: [{ selector: "set-datetime-modal", template: `
        <header
            class="m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">Set date and time</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="w-[24rem] max-w-[85vw]">
                @if (resource) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="mb-2 flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Resource:</label>
                            <div
                                class="mb-4 w-full rounded border border-base-200 px-4 py-3"
                            >
                                {{
                                    resource.name ||
                                        resource.map_id ||
                                        'Unknown Resource'
                                }}
                            </div>
                        </div>
                    </div>
                }
                @if (host) {
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
                        <a-date-field [to]="book_until" formControlName="date">
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
                            [use_24hr]="use_24hr_time"
                        ></a-time-field>
                    </div>
                    <div class="flex w-full flex-1 flex-col sm:w-1/3">
                        <label>End Time</label>
                        <a-duration-field
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="10 * 60"
                            [min]="60"
                            [step]="60"
                            [use_24hr]="use_24hr_time"
                        >
                        </a-duration-field>
                    </div>
                </div>
            </main>
        }
        <footer
            class="mx-2 mb-2 flex w-[calc(100%-1rem)] items-center justify-end rounded border-none bg-base-200 p-2"
        >
            <button btn matRipple [mat-dialog-close]="form.value" class="w-32">
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </footer>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetDatetimeModalComponent, { className: "SetDatetimeModalComponent", filePath: "libs/explore/src/lib/set-datetime-modal.component.ts", lineNumber: 123 });
})();

// libs/explore/src/lib/explore-desk-info.component.ts
function ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.department(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r1.start(), "shortTime"), " \u2013 ", \u0275\u0275pipeBind2(3, 5, ctx_r1.end(), "shortTime"), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.available_until, " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ExploreDeskInfoComponent_ng_template_1_Conditional_10_Conditional_5_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("text-light rounded border border-base-100 p-1 px-2 capitalize shadow " + ctx_r1.status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, ctx_r1.status() === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(3, 4, ctx_r1.status())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.status() !== "not-bookable" ? 5 : -1);
  }
}
function ExploreDeskInfoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "h4", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template, 2, 1, "p", 8);
    \u0275\u0275conditionalCreate(8, ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template, 2, 1, "p", 8);
    \u0275\u0275conditionalCreate(9, ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template, 4, 8, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template, 6, 8, "div", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("pointer-events-none absolute left-0 top-0 w-64 bg-base-100 p-1 shadow " + ctx_r1.x_pos() + " " + ctx_r1.y_pos());
    \u0275\u0275property("id", ctx_r1.map_id());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.name() || ctx_r1.map_id() || ctx_r1.id(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user() && ctx_r1.department() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.start() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.status() ? 10 : -1);
  }
}
var _ExploreDeskInfoComponent = class _ExploreDeskInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this.status = computed(() => this._details.status?.());
    this.id = signal(this._details.id);
    this.map_id = signal(this._details.map_id);
    this.name = signal(this._details.name);
    this.user = signal(this._details.user);
    this.start = signal(this._details.start);
    this.end = signal(this._details.end);
    this.department = signal(this._details.department);
    this.y_pos = signal("top");
    this.x_pos = signal("left");
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => this.updatePosition(), 200);
  }
  get available_until() {
    return "";
  }
  updatePosition(tries = 0) {
    const parent = this._element.nativeElement.parentElement?.parentElement;
    if (!parent)
      return setTimeout(() => this.updatePosition(++tries), 200);
    const box = parent?.getBoundingClientRect();
    const wbox = document.body?.getBoundingClientRect();
    this.y_pos.set(box.y >= wbox.height / 2 ? "bottom" : "top");
    this.x_pos.set(box.x >= wbox.width / 2 ? "right" : "left");
  }
};
_ExploreDeskInfoComponent.\u0275fac = function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDeskInfoComponent)();
};
_ExploreDeskInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeskInfoComponent, selectors: [["explore-desk-info"]], decls: 3, vars: 8, consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "z-20", "h-full", "w-full", 3, "mouseenter", "touchdown", "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "rounded-md", "border", "border-base-200", "p-1"], [1, "triangle", "absolute"], [1, "flex", "w-full", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col", "px-2", "py-1"], ["map-id", "", 1, "m-0", "truncate", "font-medium"], ["user", "", 1, "text-xs"], ["start", "", 1, "text-xs"], [1, "relative", "flex", "flex-wrap", "text-sm"], ["status", ""], ["available-until", ""]], template: function ExploreDeskInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("mouseenter", function ExploreDeskInfoComponent_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updatePosition());
    })("touchdown", function ExploreDeskInfoComponent_Template_div_touchdown_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updatePosition());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, ExploreDeskInfoComponent_ng_template_1_Template, 11, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const desk_tooltip_r3 = \u0275\u0275reference(2);
    \u0275\u0275property("content", desk_tooltip_r3)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
    \u0275\u0275attribute("id", ctx.id())("map_id", ctx.map_id());
  }
}, dependencies: [CommonModule, UpperCasePipe, DatePipe, CustomTooltipComponent, TranslatePipe], styles: ["\n\n.top.left[_ngcontent-%COMP%] {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status][_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
var ExploreDeskInfoComponent = _ExploreDeskInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeskInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-desk-info", template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id()"
            [attr.map_id]="map_id()"
            (mouseenter)="updatePosition()"
            (touchdown)="updatePosition()"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id()"
                [class]="
                    'pointer-events-none absolute left-0 top-0 w-64 bg-base-100 p-1 shadow ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <div class="rounded-md border border-base-200 p-1">
                    <div class="triangle absolute"></div>
                    <div class="flex w-full items-center space-x-4">
                        <div class="flex flex-1 flex-col px-2 py-1">
                            <h4 map-id class="m-0 truncate font-medium">
                                {{ name() || map_id() || id() }}
                            </h4>
                            @if (user()) {
                                <p user class="text-xs">
                                    {{ user() }}
                                </p>
                            }
                            @if (user() && department()) {
                                <p user class="text-xs">
                                    {{ department() }}
                                </p>
                            }
                            @if (start()) {
                                <p start class="text-xs">
                                    {{ start() | date: 'shortTime' }} &ndash;
                                    {{ end() | date: 'shortTime' }}
                                </p>
                            }
                        </div>
                        @if (status()) {
                            <div class="relative flex flex-wrap text-sm">
                                <div
                                    status
                                    [class]="
                                        'text-light rounded border border-base-100 p-1 px-2 capitalize shadow ' +
                                        status()
                                    "
                                >
                                    {{
                                        (status() === 'not-bookable'
                                            ? 'COMMON.STATUS_NOT_BOOKABLE'
                                            : 'COMMON.STATUS_' +
                                              (status() | uppercase)
                                        ) | translate
                                    }}
                                </div>
                                @if (status() !== 'not-bookable') {
                                    <div available-until>
                                        {{ available_until }}
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `, imports: [CommonModule, CustomTooltipComponent, TranslatePipe], styles: ["/* angular:styles/component:css;be9e427f23d2cfa533bc3f1a2b3a60abe03093f3828dce67e30b4276b95b0771;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-desk-info.component.ts */\n.top.left {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left .triangle {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right .triangle {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left .triangle {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right .triangle {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeskInfoComponent, { className: "ExploreDeskInfoComponent", filePath: "libs/explore/src/lib/explore-desk-info.component.ts", lineNumber: 197 });
})();

// libs/explore/src/lib/explore-device-info.component.ts
var _c09 = ["explore-device-info", ""];
function ExploreDeviceInfoComponent_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MAC"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.mac, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MANUFACTURER"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.manufacturer, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_OS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.os, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_SSID"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ssid, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_USERNAME"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.user == null ? null : ctx_r2.user.name) || (ctx_r2.user == null ? null : ctx_r2.user.username) || ctx_r2.username, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_TYPE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.user.type, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("mouseleave", function ExploreDeviceInfoComponent_ng_template_5_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, ExploreDeviceInfoComponent_ng_template_5_Conditional_3_Template, 5, 4, "p", 9);
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
    \u0275\u0275conditionalCreate(14, ExploreDeviceInfoComponent_ng_template_5_Conditional_14_Template, 5, 4, "p", 10);
    \u0275\u0275conditionalCreate(15, ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template, 5, 4, "p", 11);
    \u0275\u0275conditionalCreate(16, ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template, 5, 4, "p", 12);
    \u0275\u0275conditionalCreate(17, ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template, 5, 4, "p", 13);
    \u0275\u0275conditionalCreate(18, ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template, 5, 4, "p", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.mac && !ctx_r2.hide_fields.includes("mac") ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 10, "EXPLORE.DEVICE_ACCURACY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.variance, "m ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 12, "EXPLORE.DEVICE_LAST_SEEN"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.last_seen, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.manufacturer && !ctx_r2.hide_fields.includes("manufacturer") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.os && !ctx_r2.hide_fields.includes("os") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.ssid && !ctx_r2.hide_fields.includes("ssid") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.username && !ctx_r2.hide_fields.includes("username") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.user && !ctx_r2.hide_fields.includes("user") ? 18 : -1);
  }
}
var EMPTY = [];
var _ExploreDeviceInfoComponent = class _ExploreDeviceInfoComponent extends AsyncHandler {
  get hide_fields() {
    return this._settings.get("app.explore.hide_device_fields") || EMPTY;
  }
  /** Time of the last update */
  get last_seen() {
    return formatDistanceToNow((this._details.last_seen || 0) * 1e3, {
      addSuffix: true
    });
  }
  /** Diameter of the radius circle */
  get diameter() {
    return this._details.variance * 100 * this.zoom;
  }
  get distance() {
    return Math.abs(differenceInMinutes((this._details.last_seen || 0) * 1e3, /* @__PURE__ */ new Date()));
  }
  get distance_color() {
    return this.distance < 10 ? "#43a047" : this.distance < 20 ? "#ffb300" : "#e53935";
  }
  constructor() {
    super();
    this._details = inject(MAP_FEATURE_DATA);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this.username = "";
    this.user = this._details.user;
    this.mac = this._details.mac;
    this.manufacturer = this._details.manufacturer;
    this.os = this._details.os;
    this.ssid = this._details.ssid;
    this.variance = this._details.variance?.toFixed(2);
    this.bg_color = this._details.bg_color || this.distance_color;
    this.zoom = 1;
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
      this.y_pos = position.y >= 0.5 ? "bottom" : "top";
      this.x_pos = position.x >= 0.5 ? "end" : "start";
      this.subscription("zoom", this._details.zoom$.subscribe((_) => this.zoom = _));
    }, 200);
  }
  async loadUser() {
    if (this.username)
      return;
    const mod = Va(this._details.system, "LocationServices");
    if (!mod)
      return;
    this.username = "Loading...";
    const details = await mod.execute("check_ownership_of", [this.mac]).catch(() => null);
    this.username = details && details.assigned_to ? details.assigned_to : "";
  }
};
_ExploreDeviceInfoComponent.\u0275fac = function ExploreDeviceInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDeviceInfoComponent)();
};
_ExploreDeviceInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeviceInfoComponent, selectors: [["", "explore-device-info", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c09, decls: 7, vars: 9, consts: [["dot", ""], ["device_tooltip", ""], ["name", "radius", 1, "radius", "center", "border-blue-600", "absolute", "rounded-full", "border-8", "border-dashed", "bg-info", "opacity-30"], ["shadow", "", 1, "center", "absolute", "h-8", "w-8", "rounded-full", "bg-black", "opacity-30"], ["name", "dot", 1, "center", "absolute", "h-3", "w-3", "rounded-full", "border-2", "border-white", "shadow"], ["customTooltip", "", 1, "pointer-events-auto", "absolute", "inset-0", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "device-info", 1, "pointer-events-none", "left-0", "top-0", "mx-2", "w-64", "rounded", "bg-base-100", "p-4", "shadow", 3, "mouseleave"], [1, "arrow"], [1, "details"], [1, "break-words"], ["type", ""], ["os", ""], ["ssid", ""], ["username", ""], ["user", ""]], template: function ExploreDeviceInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 2)(1, "div", 3)(2, "div", 4, 0);
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.loadUser());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExploreDeviceInfoComponent_ng_template_5_Template, 19, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const device_tooltip_r4 = \u0275\u0275reference(6);
    \u0275\u0275styleMap("height: " + ctx.diameter + "%; width: " + ctx.diameter + "%;");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx.bg_color);
    \u0275\u0275advance(2);
    \u0275\u0275property("content", device_tooltip_r4)("backdrop", false)("xPosition", ctx.x_pos)("yPosition", ctx.y_pos)("hover", true);
  }
}, dependencies: [TranslatePipe, CustomTooltipComponent], styles: ["\n\n[_nghost-%COMP%] {\n  pointer-events: auto;\n}\n[_nghost-%COMP%]    > [name=dot][_ngcontent-%COMP%] {\n  background-color: #616161;\n}\n[_nghost-%COMP%]:hover    > [name=radius][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[name=radius][_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */"] });
var ExploreDeviceInfoComponent = _ExploreDeviceInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeviceInfoComponent, [{
    type: Component,
    args: [{ selector: "[explore-device-info]", template: `
        <div
            name="radius"
            class="radius center border-blue-600 absolute rounded-full border-8 border-dashed bg-info opacity-30"
            [style]="'height: ' + diameter + '%; width: ' + diameter + '%;'"
        ></div>
        <div
            shadow
            class="center absolute h-8 w-8 rounded-full bg-black opacity-30"
        ></div>
        <div
            name="dot"
            #dot
            class="center absolute h-3 w-3 rounded-full border-2 border-white shadow"
            [style.background-color]="bg_color"
        ></div>
        <div
            customTooltip
            [content]="device_tooltip"
            [backdrop]="false"
            [xPosition]="x_pos"
            [yPosition]="y_pos"
            [hover]="true"
            (mouseenter)="loadUser()"
            class="pointer-events-auto absolute inset-0"
        ></div>

        <ng-template #device_tooltip>
            <div
                name="device-info"
                class="pointer-events-none left-0 top-0 mx-2 w-64 rounded bg-base-100 p-4 shadow"
                (mouseleave)="close()"
            >
                <div class="arrow"></div>
                <div class="details">
                    @if (mac && !hide_fields.includes('mac')) {
                        <p class="break-words">
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
                        {{ last_seen }}
                    </p>
                    @if (
                        manufacturer && !hide_fields.includes('manufacturer')
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
                    @if (os && !hide_fields.includes('os')) {
                        <p os>
                            <label
                                >{{ 'EXPLORE.DEVICE_OS' | translate }}:</label
                            >
                            {{ os }}
                        </p>
                    }
                    @if (ssid && !hide_fields.includes('ssid')) {
                        <p ssid>
                            <label
                                >{{ 'EXPLORE.DEVICE_SSID' | translate }}:</label
                            >
                            {{ ssid }}
                        </p>
                    }
                    @if (username && !hide_fields.includes('username')) {
                        <p username>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_USERNAME' | translate
                                }}:</label
                            >
                            {{ user?.name || user?.username || username }}
                        </p>
                    }
                    @if (user && !hide_fields.includes('user')) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeviceInfoComponent, { className: "ExploreDeviceInfoComponent", filePath: "libs/explore/src/lib/explore-device-info.component.ts", lineNumber: 158 });
})();

// libs/explore/src/lib/explore-book-qr.component.ts
var _c010 = (a0) => ({ name: a0 });
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "EXPLORE.BOOK_RESOURCE", \u0275\u0275pureFunction1(5, _c010, ctx.space == null ? null : ctx.space.name)), " ");
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
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "a-user-search-field", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-info", ctx_r1.alert[0] === "info")("text-info-content", ctx_r1.alert[0] === "info")("bg-warning", ctx_r1.alert[0] === "warn")("text-warning-content", ctx_r1.alert[0] === "warn")("bg-error", ctx_r1.alert[0] === "closed")("text-error-content", ctx_r1.alert[0] === "closed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert[1], " ");
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "FORM.DATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 5, ctx_r1.form.value.date, "mediumDate"), " at ", \u0275\u0275pipeBind2(7, 8, ctx_r1.form.value.date, ctx_r1.time_format), " ");
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 19);
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
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 6)(2, "label", 7);
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 8);
    \u0275\u0275element(8, "input", 9);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_12_Template, 8, 3, "div", 6);
    \u0275\u0275elementStart(13, "div", 6)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_19_Template, 2, 13, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275conditionalCreate(21, ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_21_Template, 8, 11, "div", 13);
    \u0275\u0275conditionalCreate(22, ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_22_Template, 5, 6, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "EXPLORE.BOOKING_TITLE_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_book_for_others ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 10, "EXPLORE.BOOKING_SPACE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.form.controls.resources == null ? null : ctx_r1.form.controls.resources.value[0] == null ? null : ctx_r1.form.controls.resources.value[0].display_name) || (ctx_r1.form.controls.resources == null ? null : ctx_r1.form.controls.resources.value[0] == null ? null : ctx_r1.form.controls.resources.value[0].name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.alert ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.date ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.duration ? 22 : -1);
  }
}
function ExploreBookingModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ExploreBookingModalComponent_Conditional_7_Conditional_0_Template, 23, 12, "main", 3);
    \u0275\u0275elementStart(1, "footer", 4)(2, "button", 5);
    \u0275\u0275listener("click", function ExploreBookingModalComponent_Conditional_7_Template_button_click_2_listener() {
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
function ExploreBookingModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r1.loading));
  }
}
var _ExploreBookingModalComponent = class _ExploreBookingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._router = inject(Router);
    this.loading = this._event_form.loading$;
    this.alert = this._data.alert;
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
  ngOnInit() {
    this._event_form.newForm();
    this.form.patchValue({
      resources: [this._data.space],
      host: currentUser().email,
      organiser: currentUser()
    });
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
};
_ExploreBookingModalComponent.\u0275fac = function ExploreBookingModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreBookingModalComponent)();
};
_ExploreBookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookingModalComponent, selectors: [["explore-booking-modal"]], decls: 10, vars: 9, consts: [[1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["load", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "max-w-[85vw]", "p-4", 3, "formGroup"], [1, "flex", "justify-center", "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "Booking Title"], ["name", "space", 1, "mb-4", "w-full", "rounded", "border", "border-base-200", "px-4", "py-3"], [1, "-mt-2", "mb-4", "rounded", "px-2", "py-1", "text-xs", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], [1, "flex", "flex-wrap", "sm:space-x-4"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-auto"], [1, "flex", "w-full", "flex-col", "sm:w-auto"], ["for", "host"], ["name", "host", "formControlName", "organiser", 1, "mb-4"], [1, "-mt-2", "mb-4", "rounded", "px-2", "py-1", "text-xs"], [1, "mb-4", "w-full", "rounded", "border", "border-base-200", "px-4", "py-3"], ["formControlName", "duration", 1, "w-full", 3, "time", "max", "use_24hr"], [1, "m-4", 3, "diameter"]], template: function ExploreBookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 0);
    \u0275\u0275conditionalCreate(5, ExploreBookingModalComponent_Conditional_5_Template, 3, 0, "button", 1);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExploreBookingModalComponent_Conditional_7_Template, 5, 4);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275conditionalBranchCreate(9, ExploreBookingModalComponent_Conditional_9_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "EXPLORE.BOOKING_HEADER"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(6, 5, ctx.loading) ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(8, 7, ctx.loading) ? 7 : 9);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
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
        <header>
            <h2>{{ 'EXPLORE.BOOKING_HEADER' | translate }}</h2>
            <div class="flex-1"></div>
            @if (!(loading | async)) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!(loading | async)) {
            @if (form) {
                <main [formGroup]="form" class="max-w-[85vw] p-4">
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
                            class="mb-4 w-full rounded border border-base-200 px-4 py-3"
                        >
                            {{
                                form.controls.resources?.value[0]
                                    ?.display_name ||
                                    form.controls.resources?.value[0]?.name
                            }}
                        </div>
                        @if (alert) {
                            <div
                                class="-mt-2 mb-4 rounded px-2 py-1 text-xs"
                                [class.bg-info]="alert[0] === 'info'"
                                [class.text-info-content]="alert[0] === 'info'"
                                [class.bg-warning]="alert[0] === 'warn'"
                                [class.text-warning-content]="
                                    alert[0] === 'warn'
                                "
                                [class.bg-error]="alert[0] === 'closed'"
                                [class.text-error-content]="
                                    alert[0] === 'closed'
                                "
                            >
                                {{ alert[1] }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-wrap sm:space-x-4">
                        @if (form.controls.date) {
                            <div class="flex w-full flex-1 flex-col sm:w-auto">
                                <label>{{ 'FORM.DATE' | translate }}:</label>
                                <div
                                    class="mb-4 w-full rounded border border-base-200 px-4 py-3"
                                >
                                    {{ form.value.date | date: 'mediumDate' }}
                                    at
                                    {{ form.value.date | date: time_format }}
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
                </main>
            }
            <footer class="flex justify-center border-t border-base-200 p-2">
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        } @else {
            <div load class="flex h-64 flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookingModalComponent, { className: "ExploreBookingModalComponent", filePath: "libs/explore/src/lib/explore-booking-modal.component.ts", lineNumber: 177 });
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
_ExploreIconComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreIconComponent, selectors: [["explore-icon"]], decls: 2, vars: 5, consts: [[1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "border-base-200", "shadow"], [1, "text-xl", 3, "icon"]], template: function ExploreIconComponent_Template(rf, ctx) {
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
            class="flex h-8 w-8 items-center justify-center rounded-full border border-base-200 shadow"
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

// libs/explore/src/lib/explore-space-info.component.ts
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
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Free ", ctx_r1.next().date > ctx_r1.now() ? "until" : "at", " ", \u0275\u0275pipeBind2(2, 2, ctx_r1.next().date > ctx_r1.now() ? ctx_r1.next().date : ctx_r1.next().date_end, "shortTime"), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "COMMON.CAPACITY"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.space.capacity, " ", ctx_r1.space.capacity === 1 ? "person" : "people", " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_17_For_2_Template(rf, ctx) {
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
function ExploreSpaceInfoComponent_ng_template_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 16);
    \u0275\u0275repeaterCreate(1, ExploreSpaceInfoComponent_ng_template_2_Conditional_17_For_2_Template, 2, 1, "li", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.space.features);
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
    \u0275\u0275conditionalCreate(15, ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template, 3, 5, "div", 14);
    \u0275\u0275conditionalCreate(16, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template, 5, 5, "div", 15);
    \u0275\u0275conditionalCreate(17, ExploreSpaceInfoComponent_ng_template_2_Conditional_17_Template, 3, 0, "ul", 16);
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
    \u0275\u0275classMap("text-light rounded border border-white p-1 px-2 capitalize shadow " + ctx_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 22, ctx_r1.status === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(9, 20, ctx_r1.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.status !== "not-bookable" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space.display_name || ctx_r1.space.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.next() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.space.capacity >= 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.space.features == null ? null : ctx_r1.space.features.length) > 0 && !ctx_r1.hide_features() ? 17 : -1);
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
    this.status = this._details.status;
    this.hide_features = settingSignal("spaces.hide_features", false);
  }
  ngOnInit() {
    this.timeout("update_offset", () => this.updateOffset(), 200);
    const events = this.events.sort((a, b) => a.date - b.date).filter((i) => i.date_end > Date.now());
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
_ExploreSpaceInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSpaceInfoComponent, selectors: [["explore-space-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 7, consts: [["tooltip", ""], ["space_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "hidden", "h-full", "w-full", "cursor-pointer", "sm:block", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 1, "pointer-events-none", "absolute", "left-0", "top-0", "w-64", "transform", "overflow-hidden", "rounded", "bg-base-100", "shadow", 3, "id"], [1, "arrow"], [1, "relative"], [1, "relative", "flex", "w-full", "items-center", "justify-center", "overflow-hidden", "bg-opacity-20"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "absolute", "inset-0", "bg-neutral", "opacity-30"], [1, "absolute", "left-2", "top-2", "flex", "flex-wrap", "text-sm"], ["status", ""], ["available-until", ""], [1, "flex", "flex-col", "px-2", "py-4"], [1, "mb-2", "px-2", "text-xl", "font-medium"], [1, "px-2", "text-base"], ["capacity", "", 1, "mb-2", "px-2", "text-base"], [1, "flex", "flex-wrap"], [1, "m-1", "rounded-2xl", "bg-base-200", "px-2", "py-1", "text-xs", "font-medium"]], template: function ExploreSpaceInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2, 0);
    \u0275\u0275listener("mouseenter", function ExploreSpaceInfoComponent_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateOffset());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ExploreSpaceInfoComponent_ng_template_2_Template, 18, 24, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const space_tooltip_r4 = \u0275\u0275reference(3);
    \u0275\u0275property("content", space_tooltip_r4)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
    \u0275\u0275attribute("id", (ctx.space == null ? null : ctx.space.map_id) || (ctx.space == null ? null : ctx.space.id));
  }
}, dependencies: [
  CommonModule,
  UpperCasePipe,
  DatePipe,
  CustomTooltipComponent,
  TranslatePipe,
  AuthenticatedImageDirective
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
            [delay]="3000"
            [attr.id]="space?.map_id || space?.id"
            (mouseenter)="updateOffset()"
            class="pointer-events-auto relative hidden h-full w-full cursor-pointer sm:block"
        ></div>
        <ng-template #space_tooltip>
            <div
                name="space-info"
                [id]="space?.id"
                class="pointer-events-none absolute left-0 top-0 w-64 transform overflow-hidden rounded bg-base-100 shadow"
                [class.-translate-x-full]="x_pos === 'end'"
                [class.-translate-y-full]="y_pos === 'bottom'"
            >
                <div class="arrow"></div>
                <div class="relative">
                    <div
                        class="relative flex w-full items-center justify-center overflow-hidden bg-opacity-20"
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
                                class="absolute inset-0 bg-neutral opacity-30"
                            ></div>
                        }
                    </div>
                    <div class="absolute left-2 top-2 flex flex-wrap text-sm">
                        <div
                            status
                            [class]="
                                'text-light rounded border border-white p-1 px-2 capitalize shadow ' +
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
                        @if (next()) {
                            <div class="px-2 text-base">
                                Free {{ next().date > now() ? 'until' : 'at' }}
                                {{
                                    (next().date > now()
                                        ? next().date
                                        : next().date_end
                                    ) | date: 'shortTime'
                                }}
                            </div>
                        }
                        @if (space.capacity >= 0) {
                            <div capacity class="mb-2 px-2 text-base">
                                <span
                                    >{{ 'COMMON.CAPACITY' | translate }}: </span
                                >{{ space.capacity }}
                                {{ space.capacity === 1 ? 'person' : 'people' }}
                            </div>
                        }
                        @if (space.features?.length > 0 && !hide_features()) {
                            <ul class="flex flex-wrap">
                                @for (
                                    feature of space.features;
                                    track feature
                                ) {
                                    <li
                                        class="m-1 rounded-2xl bg-base-200 px-2 py-1 text-xs font-medium"
                                    >
                                        {{ feature }}
                                    </li>
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      CustomTooltipComponent,
      TranslatePipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;49d3d38e3c811a7af0b23c1a4eab605a060569aead88ea7b8da86c409617cda8;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-space-info.component.ts */\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSpaceInfoComponent, { className: "ExploreSpaceInfoComponent", filePath: "libs/explore/src/lib/explore-space-info.component.ts", lineNumber: 165 });
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
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Iu(bld.id, `room_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.room_alerts = this._org.active_building.pipe(filter((bld) => !!bld), switchMap(() => Iu(this._org.organisation.id, `room_alerts`).pipe(catchError(() => of({ details: {} })))), map((_) => _.details || {}), shareReplay(1));
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
        const mod = Va(space.id, "Bookings");
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
    this._event_form.newForm();
    this._event_form.form.patchValue({
      host: currentUser()?.email,
      resources: [space]
    });
    if (room_alerts[space.id]?.[0] === "closed") {
      return notifyError(`${room_alerts[space.id][1]}`);
    }
    if (this._settings.get("app.events.booking_unavailable")) {
      return this._event_form.openEventLinkModal();
    }
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

// libs/explore/src/lib/explore-desks.service.ts
var _ExploreDesksService = class _ExploreDesksService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._dialog = inject(MatDialog);
    this._in_use = new BehaviorSubject([]);
    this._options = new BehaviorSubject({});
    this._presence = new BehaviorSubject([]);
    this._signs_of_life = new BehaviorSubject([]);
    this._statuses = {};
    this._users = {};
    this._departments = {};
    this._checked_in = new BehaviorSubject([]);
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Iu(bld.id, `desk_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.desk_list = this._state.level.pipe(debounceTime(50), switchMap((lvl) => Iu(lvl.id, "desks").pipe(catchError(() => of({ details: [] })), map((i) => (i?.details instanceof Array ? i.details : []).map((j) => new Desk(__spreadProps(__spreadValues({}, j), { zone: lvl })))))), catchError((e) => []), shareReplay(1));
    this._bind = combineLatest([
      this._state.level,
      this._state.options
    ]).pipe(debounceTime(300), filter(([_, { is_public }]) => !!_ && !is_public), map(([lvl]) => {
      this._statuses = {};
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return;
      const binding = mod.variable(lvl.id);
      if (!binding)
        return;
      this.subscription(`lvl-in_use`, binding.bindThenSubscribe((d) => this.processBindingChange(d || {}, mod.id)));
    }));
    this._booking_list = combineLatest([
      this._options,
      this._state.level
    ]).pipe(filter(([_, lvl]) => (_.use_api || _.date > endOfDay(Date.now()).valueOf()) && !!lvl), switchMap(([_, level]) => {
      return queryBookings({
        type: "desk",
        period_start: getUnixTime(startOfDay(_.date || Date.now())),
        period_end: getUnixTime(endOfDay(_.date || Date.now())),
        zones: level.id
      });
    }), debounceTime(200), tap((bookings) => {
      this._in_use.next(bookings.map((_) => _.asset_id));
      this._checked_in.next(bookings.filter((_) => _.checked_in).map((_) => _.asset_id));
    }), shareReplay(1));
    this._state_change = combineLatest([
      this.desk_list,
      this._in_use,
      this._presence,
      this._checked_in,
      this._signs_of_life,
      this.booking_rules,
      this._options
    ]).pipe(debounceTime(50), map(async ([desks, in_use, presence, checked_in, signs, restrictions]) => {
      this._statuses = {};
      const level = await nextValueFrom(this._state.level);
      for (const { id, bookable, map_id } of desks) {
        const d_id = map_id || id;
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
            zones: [level.parent_id, level.id]
          }
        }, restrictions)?.hidden;
        if (!this._statuses[d_id])
          this._statuses[d_id] = signal("free");
        this._statuses[d_id].set(bookable && !is_restricted ? !is_used && !has_presence && !is_checked_in ? has_signs ? "signs-of-life" : "free" : !has_presence && !is_checked_in ? "pending" : "busy" : "not-bookable");
      }
      this.processDesks(desks);
    }));
    this.init();
  }
  async init() {
    await firstTruthyValueFrom(this._org.initialised);
    this.setOptions({
      enable_booking: this._settings.get("app.desks.enable_maps") !== false
    });
    this.subscription("bookings", this._booking_list.subscribe());
    this.subscription("bind", this._bind.subscribe());
    this.subscription("booking_rules", this.booking_rules.subscribe());
    this.subscription("changes", this._state_change.subscribe());
    this.subscription("desks", this.desk_list.subscribe((desks) => this.processDesks(desks)));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  processBindingChange({ value }, system_id) {
    const devices = (value || []).filter((v) => !["desk", "booking"].includes(v.location));
    const desks = (value || []).filter((v) => v.location === "desk" || v.location === "booking" && v.type === "desk");
    const date = this._options.getValue().date || Date.now();
    if (date <= endOfDay(Date.now()).valueOf() && !this._options.getValue().use_api) {
      this._in_use.next(desks.filter((v) => v.location === "booking").map((v) => v.map_id || v.asset_id));
      this._checked_in.next(desks.filter((v) => v.location === "booking" && v.checked_in).map((v) => v.map_id || v.asset_id));
      this._presence.next(desks.filter((v) => v.at_location).map((v) => v.map_id || v.asset_id));
      this._signs_of_life.next(desks.filter((v) => v.signs_of_life).map((v) => v.map_id || v.asset_id));
    }
    const departments = this._settings.get("app.department_map") || {};
    for (const desk of desks) {
      this._users[desk.map_id || desk.asset_id] = desk.staff_name;
      this._departments[desk.map_id || desk.asset_id] = departments[desk.department] || "";
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
    const options = this._options.getValue();
    const show_desk_users = this._settings.get("app.desks.show_users") ?? true;
    for (const desk of desks) {
      if (!this._statuses[desk.map_id]) {
        this._statuses[desk.map_id] = signal("free");
      }
      list.push({
        track_id: `desk:hover:${desk.map_id || desk.id}`,
        location: desk.map_id || desk.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: show_desk_users ? this._users[desk.map_id] || desk.staff_name || desk.assigned_name : "",
          status: this._statuses[desk.map_id],
          department: this._departments[desk.map_id] || ""
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
        id: desk.map_id || desk.id,
        action: event,
        priority: 10,
        callback: () => {
          can_book = true;
          this.timeout("booking", () => can_book = false);
        }
      }));
      ["mouseup", "touchend"].forEach((event) => actions.push({
        id: desk.map_id || desk.id,
        action: event,
        priority: 10,
        callback: book_fn
      }));
    }
    this._state.setActions("desks", this._options.getValue().enable_booking ? actions : []);
    this._state.setFeatures("desks", list);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  async _setBookingTime(date, duration, host = false, resource = null) {
    let user = null;
    if (!!this._settings.get("app.desks.allow_time_changes")) {
      const until = endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90));
      const ref = this._dialog.open(SetDatetimeModalComponent, {
        data: { date, duration, until, host, resource }
      });
      const details = await lastValueFrom(ref.afterClosed());
      if (!details)
        throw "User cancelled";
      date = details.date;
      duration = details.duration;
      user = details.user;
    }
    return { date, duration, user };
  }
  async _bookDesk(desk, options) {
    if (this._statuses[desk.id]?.() !== "free") {
      return notifyError(i18n("EXPLORE.DESK_AVAILABLE_ERROR", {
        name: desk.name || "Desk"
      }));
    }
    if (desk.groups?.length && !desk.groups.find((_) => currentUser().groups.includes(_))) {
      return notifyError(i18n("EXPLORE.DESK_GROUP_ERROR", { name: desk.name || "Desk" }));
    }
    this._bookings.newForm("desk");
    this._bookings.setOptions({ type: "desk" });
    if (options.date) {
      this._bookings.form.patchValue({
        date: options.date
      });
      this._bookings.form.patchValue({
        all_day: !!options.all_day
      });
    }
    let { date, duration, user } = await this._setBookingTime(this._bookings.form.value.date, this._bookings.form.value.duration, this._options.getValue()?.custom ?? false, desk);
    user = user || options.host || currentUser();
    const user_email = user?.email;
    this._bookings.form.patchValue({
      resources: [desk],
      asset_id: desk.id,
      asset_name: desk.name,
      date,
      duration: options.all_day ? 12 * 60 : duration,
      map_id: desk?.map_id || desk?.id,
      description: desk.name,
      user,
      user_email,
      booking_type: "desk",
      zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
    });
    const restrictions = await nextValueFrom(this.booking_rules);
    const is_restricted = rulesForResource({
      date,
      duration,
      host: currentUser(),
      resource: {
        id: desk.id,
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
    this._users[desk.map_id] = (options.host || currentUser())?.name;
    notifySuccess(i18n("EXPLORE.DESK_BOOKING_SUCCESS", { name: desk.name || "Desk" }));
  }
};
_ExploreDesksService.\u0275fac = function ExploreDesksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDesksService)();
};
_ExploreDesksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreDesksService, factory: _ExploreDesksService.\u0275fac });
var ExploreDesksService = _ExploreDesksService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDesksService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/bookings/src/lib/locker-grid.component.ts
var _c011 = () => [];
function LockerGridComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function LockerGridComponent_For_2_Template_button_click_0_listener() {
      const locker_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clicked.emit(locker_r2));
    });
    \u0275\u0275element(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column-start", locker_r2.position[0] + 1)("grid-row-start", locker_r2.position[1] + 1)("grid-column-end", locker_r2.position[0] + (locker_r2.size[0] + 1))("background-color", ctx_r2.status(locker_r2))("grid-row-end", locker_r2.position[1] + (locker_r2.size[1] + 1));
    \u0275\u0275classProp("opacity-60", ctx_r2.selected() && ctx_r2.selected() !== locker_r2.id);
    \u0275\u0275property("matTooltip", locker_r2.name)("disabled", locker_r2.bookable === false || (locker_r2 == null ? null : locker_r2.available) === false);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", locker_r2.name, " ");
  }
}
var _LockerGridComponent = class _LockerGridComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.show_name = input(true);
    this.default_status = input("busy");
    this.bank = input(void 0);
    this.bank_status = input({});
    this.selected = input("");
    this.clicked = output();
  }
  get columns() {
    let columns = 1;
    for (const locker of this.bank()?.lockers || []) {
      const x = locker.position[0] + locker.size[0];
      if (x > columns)
        columns = x;
    }
    return columns;
  }
  color(status) {
    const colours = this._settings.get("app.explore.colors") || {};
    return colours[`lockers-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`];
  }
  status(locker) {
    if (!locker)
      return this.color("not-bookable");
    const selected = this.selected();
    if (selected && locker.id === selected) {
      return this.color("pending");
    }
    let value = this.bank_status()[locker.id] || "free";
    if (!this.bank_status()[locker.id] && !locker?.available) {
      value = this.default_status();
    }
    return this.color(value);
  }
};
_LockerGridComponent.\u0275fac = function LockerGridComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerGridComponent)();
};
_LockerGridComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerGridComponent, selectors: [["locker-grid"]], inputs: { show_name: [1, "show_name"], default_status: [1, "default_status"], bank: [1, "bank"], bank_status: [1, "bank_status"], selected: [1, "selected"] }, outputs: { clicked: "clicked" }, decls: 3, vars: 7, consts: [[1, "grid", "flex-1", "gap-2", "p-2"], ["matRipple", "", 1, "relative", "overflow-hidden", "rounded", "border", "border-base-200", 3, "opacity-60", "grid-column-start", "grid-row-start", "grid-column-end", "background-color", "grid-row-end", "matTooltip", "disabled"], ["matRipple", "", 1, "relative", "overflow-hidden", "rounded", "border", "border-base-200", 3, "click", "matTooltip", "disabled"], ["handle", "", 1, "absolute", "left-2", "top-1/2", "h-6", "w-1", "-translate-y-1/2", "rounded", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-4", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-6", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], [1, "absolute", "left-1/2", "top-8", "-translate-x-1/2", "text-[0.6rem]", "font-medium", "text-base-content", "opacity-60"], [1, "absolute", "inset-0", "opacity-10", "hover:bg-base-content"]], template: function LockerGridComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, LockerGridComponent_For_2_Template, 8, 15, "button", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    \u0275\u0275styleProp("width", ctx.columns * 2.5 + "rem")("grid-template-columns", "repeat(" + ctx.columns + ", 5rem)")("grid-template-rows", "repeat(" + ((tmp_2_0 = ctx.bank()) == null ? null : tmp_2_0.height) + ", 5rem)");
    \u0275\u0275advance();
    \u0275\u0275repeater(((tmp_3_0 = ctx.bank()) == null ? null : tmp_3_0.lockers) || \u0275\u0275pureFunction0(6, _c011));
  }
}, dependencies: [MatRippleModule, MatRipple], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */"] });
var LockerGridComponent = _LockerGridComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerGridComponent, [{
    type: Component,
    args: [{ selector: "locker-grid", template: `
        <div
            class="grid flex-1 gap-2 p-2"
            [style.width]="columns * 2.5 + 'rem'"
            [style.grid-template-columns]="'repeat(' + columns + ', 5rem)'"
            [style.grid-template-rows]="'repeat(' + bank()?.height + ', 5rem)'"
        >
            @for (locker of bank()?.lockers || []; track locker) {
                <button
                    matRipple
                    class="relative overflow-hidden rounded border border-base-200"
                    [class.opacity-60]="selected() && selected() !== locker.id"
                    [style.grid-column-start]="locker.position[0] + 1"
                    [style.grid-row-start]="locker.position[1] + 1"
                    [style.grid-column-end]="
                        locker.position[0] + (locker.size[0] + 1)
                    "
                    [style.background-color]="status(locker)"
                    [style.grid-row-end]="
                        locker.position[1] + (locker.size[1] + 1)
                    "
                    [matTooltip]="locker.name"
                    [disabled]="
                        locker.bookable === false || locker?.available === false
                    "
                    (click)="clicked.emit(locker)"
                >
                    <div
                        handle
                        class="absolute left-2 top-1/2 h-6 w-1 -translate-y-1/2 rounded bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-4 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-6 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        class="absolute left-1/2 top-8 -translate-x-1/2 text-[0.6rem] font-medium text-base-content opacity-60"
                    >
                        {{ locker.name }}
                    </div>
                    <div
                        class="absolute inset-0 opacity-10 hover:bg-base-content"
                    ></div>
                </button>
            }
        </div>
    `, imports: [MatRippleModule], styles: ["/* angular:styles/component:css;32afd79bdb50e1a260a311dcbbe42ad630e05ff005c6bd90901be0d3385e4315;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-grid.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerGridComponent, { className: "LockerGridComponent", filePath: "libs/bookings/src/lib/locker-grid.component.ts", lineNumber: 78 });
})();

// libs/explore/src/lib/explore-locker-bank-modal.component.ts
var _ExploreLockerBankModalComponent = class _ExploreLockerBankModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.bank = this._data.bank;
    this.lockers = this._data.lockers.reduce((map2, l) => {
      map2[l.id] = "busy";
      return map2;
    }, {});
  }
};
_ExploreLockerBankModalComponent.\u0275fac = function ExploreLockerBankModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockerBankModalComponent)();
};
_ExploreLockerBankModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankModalComponent, selectors: [["explore-locker-bank-modal"]], decls: 8, vars: 3, consts: [[1, "text-xl", "font-medium"], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "overflow-hidden"], [3, "bank", "bank_status"]], template: function ExploreLockerBankModalComponent_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(ctx.bank.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("bank", ctx.bank)("bank_status", ctx.lockers);
  }
}, dependencies: [MatRippleModule, MatRipple, LockerGridComponent, IconComponent], encapsulation: 2 });
var ExploreLockerBankModalComponent = _ExploreLockerBankModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankModalComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-modal", template: `
        <header>
            <h2 class="text-xl font-medium">{{ bank.name }}</h2>
            <button btn icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[65vh] overflow-hidden">
            <locker-grid [bank]="bank" [bank_status]="lockers"></locker-grid>
        </main>
    `, imports: [MatRippleModule, LockerGridComponent, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankModalComponent, { className: "ExploreLockerBankModalComponent", filePath: "libs/explore/src/lib/explore-locker-bank-modal.component.ts", lineNumber: 29 });
})();

// libs/explore/src/lib/explore-locker-bank-info.component.ts
var _c012 = (a0, a1) => ({ used: a0, count: a1 });
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
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow " + ctx_r1.x_pos + " " + ctx_r1.y_pos);
    \u0275\u0275property("id", ctx_r1.map_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.bank.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "EXPLORE.LOCKERS_USE", \u0275\u0275pureFunction2(8, _c012, ctx_r1.in_use_count, ctx_r1.bank.lockers.length || 1)), " ");
  }
}
var _ExploreLockerBankInfoComponent = class _ExploreLockerBankInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._dialog = inject(MatDialog);
    this.bank = this._details.bank;
    this.in_use_count = this._details.in_use_count;
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
      this.y_pos = position.y >= 0.5 ? "bottom" : "top";
      this.x_pos = position.x >= 0.5 ? "right" : "left";
    }, 200);
  }
  openBankModal() {
    this._dialog.open(ExploreLockerBankModalComponent, {
      data: __spreadValues({}, this._details)
    });
  }
};
_ExploreLockerBankInfoComponent.\u0275fac = function ExploreLockerBankInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockerBankInfoComponent)();
};
_ExploreLockerBankInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankInfoComponent, selectors: [["explore-locker-bank-info"]], decls: 4, vars: 6, consts: [["desk_tooltip", ""], [1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "click"], ["customTooltip", "", 1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "font-medium"], [1, "whitespace-nowrap", "text-sm"]], template: function ExploreLockerBankInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function ExploreLockerBankInfoComponent_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openBankModal());
    });
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ExploreLockerBankInfoComponent_ng_template_2_Template, 6, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const desk_tooltip_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", desk_tooltip_r3)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
  }
}, dependencies: [TranslatePipe, CustomTooltipComponent], encapsulation: 2 });
var ExploreLockerBankInfoComponent = _ExploreLockerBankInfoComponent;
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
                [id]="map_id"
                [class]="
                    'pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <h3 class="font-medium">{{ bank.name }}</h3>
                <p class="whitespace-nowrap text-sm">
                    {{
                        'EXPLORE.LOCKERS_USE'
                            | translate
                                : {
                                      used: in_use_count,
                                      count: bank.lockers.length || 1,
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
var _ExploreLockersService = class _ExploreLockersService extends AsyncHandler {
  constructor() {
    super();
    this._explore = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._status = new BehaviorSubject([]);
    this._change = new BehaviorSubject(0);
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.filtered_lockers = combineLatest([
      this._explore.level,
      this.lockers$
    ]).pipe(map(([level, list]) => list.filter((item) => !level || (item.zones || item.bank?.zones || []).includes(level.id))));
    this.filtered_banks = combineLatest([
      this._explore.level,
      this.lockers_banks$
    ]).pipe(map(([level, list]) => list.filter((item) => !level || item.zones.includes(level.id))));
    this.status = combineLatest([
      this._explore.level,
      this._explore.options,
      this._org.active_building
    ]).pipe(map(([lvl, { is_public }]) => {
      if (!lvl || is_public)
        return [];
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return of({});
      const binding = mod.variable(lvl.id);
      this.subscription(`lvl-in_use`, binding.bindThenSubscribe((data) => this._status.next(data?.value?.filter((_) => _.location === "locker") || [])));
    }));
    this.locker_status = combineLatest([
      this._explore.level,
      this.lockers_banks$,
      this.lockers$,
      this._status
    ]).pipe(map(([lvl, locker_banks, lockers, status]) => {
      if (!lvl)
        return [];
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
        const in_use_percent = in_use_count / bank_lockers.length;
        const value = in_use_percent > 0.8 ? "busy" : in_use_percent > 0.3 ? "pending" : "free";
        map_status[`#${bank_info.map_id}`] = {
          fill: colours[`lockers-${value}`] || colours[`${value}`] || DEFAULT_COLOURS[`${value}`]
        };
      }
      this._explore.setStyles("lockers", map_status);
      this._explore.setFeatures("lockers", features);
    }));
    this.subscription("status", this.status.subscribe());
    this.subscription("locker_status", this.locker_status.subscribe());
  }
};
_ExploreLockersService.\u0275fac = function ExploreLockersService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockersService)();
};
_ExploreLockersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreLockersService, factory: _ExploreLockersService.\u0275fac, providedIn: "root" });
var ExploreLockersService = _ExploreLockersService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-map-control.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExploreMapControlComponent_Conditional_1_For_4_Template(rf, ctx) {
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
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(3, ExploreMapControlComponent_Conditional_1_For_4_Template, 2, 2, "mat-option", 4, _forTrack0);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 1, ctx_r1.building));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 3, ctx_r1.buildings));
  }
}
function ExploreMapControlComponent_Conditional_3_For_5_Template(rf, ctx) {
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
function ExploreMapControlComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "mat-select", 5);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_3_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275repeaterCreate(4, ExploreMapControlComponent_Conditional_3_For_5_Template, 2, 2, "mat-option", 4, _forTrack0);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("has-bld", ((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.buildings)) == null ? null : tmp_1_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 4, ctx_r1.level));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 6, ctx_r1.levels));
  }
}
var _ExploreMapControlComponent = class _ExploreMapControlComponent extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.buildings = this._org.active_buildings;
    this.building = this._org.active_building;
    this.levels = this._org.active_levels;
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
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => params.has("zone") ? this._state.setLevel(params.get("zone")) : ""));
  }
};
_ExploreMapControlComponent.\u0275fac = function ExploreMapControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreMapControlComponent)();
};
_ExploreMapControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapControlComponent, selectors: [["explore-map-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 6, consts: [[1, "flex", "w-full", "space-x-2"], ["overlay", "", "buildings", "", "has-bld", "true", "appearance", "outline", 1, "no-subscript", "min-w-[10.5rem]", "flex-1"], ["overlay", "", "levels", "", "appearance", "outline", 1, "no-subscript", "min-w-[10.25rem]", "flex-1"], ["placeholder", "Select Building...", 3, "ngModelChange", "ngModel"], [3, "value"], ["placeholder", "Select Level...", 3, "ngModelChange", "ngModel"]], template: function ExploreMapControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ExploreMapControlComponent_Conditional_1_Template, 6, 5, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, ExploreMapControlComponent_Conditional_3_Template, 7, 8, "mat-form-field", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 2, ctx.buildings)) == null ? null : tmp_0_0.length) > 1 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(4, 4, ctx.levels)) == null ? null : tmp_1_0.length) ? 3 : -1);
  }
}, dependencies: [CommonModule, AsyncPipe, MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel], styles: ["\n\nmat-form-field[has-bld=true][_ngcontent-%COMP%] {\n  max-width: calc(50vw - 2.5rem);\n}\n[full][_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */"] });
var ExploreMapControlComponent = _ExploreMapControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapControlComponent, [{
    type: Component,
    args: [{ selector: "explore-map-controls", template: `
        <div class="flex w-full space-x-2">
            @if ((buildings | async)?.length > 1) {
                <mat-form-field
                    overlay
                    buildings
                    class="no-subscript min-w-[10.5rem] flex-1"
                    has-bld="true"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Building..."
                        [ngModel]="building | async"
                        (ngModelChange)="setBuilding($event)"
                    >
                        @for (bld of buildings | async; track bld.id) {
                            <mat-option [value]="bld">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if ((levels | async)?.length) {
                <mat-form-field
                    overlay
                    levels
                    class="no-subscript min-w-[10.25rem] flex-1"
                    [attr.has-bld]="(buildings | async)?.length > 1"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Level..."
                        [ngModel]="level | async"
                        (ngModelChange)="setLevel($event)"
                    >
                        @for (lvl of levels | async; track lvl.id) {
                            <mat-option [value]="lvl">
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
    `, imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule], styles: ["/* angular:styles/component:css;09806d4e56396268b721c1e6773559de8fe2445d8858101e567dcb2c1dd21cd7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-control.component.ts */\nmat-form-field[has-bld=true] {\n  max-width: calc(50vw - 2.5rem);\n}\n:host[full] mat-form-field {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapControlComponent, { className: "ExploreMapControlComponent", filePath: "libs/explore/src/lib/explore-map-control.component.ts", lineNumber: 74 });
})();

// libs/explore/src/lib/explore-parking-info.component.ts
function ExploreParkingInfoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "EXPLORE.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.plate_number || "PLATE NO 1", " ");
  }
}
var _ExploreParkingInfoComponent = class _ExploreParkingInfoComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._settings = inject(SettingsService);
    this.status = this._data.assigned_to === this._data.user && this._data.user ? "reserved" : this._data.status;
    this.user = this._data.user;
    this.name = this._data.name;
    this.map_id = this._data.map_id;
    this.plate_number = this._data.plate_number;
  }
  get is_concierge() {
    return this._settings.app_name.toLowerCase().includes("concierge");
  }
};
_ExploreParkingInfoComponent.\u0275fac = function ExploreParkingInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingInfoComponent)();
};
_ExploreParkingInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreParkingInfoComponent, selectors: [["explore-parking-info"]], decls: 9, vars: 15, consts: [[1, "absolute", "left-1/2", "top-1/2", "rounded-lg", "!rounded-tl-none", "bg-base-300", "p-2", "text-left", "shadow"], [1, "triangle", "absolute", "left-0.5", "top-0.5"], [1, "flex", "space-x-2"], [1, "flex", "min-w-24", "flex-col", "pl-1", "leading-tight"], [1, "whitespace-nowrap"], [1, "text-sm", "font-medium", "capitalize"], [1, "relative", "flex", "h-full", "flex-col", "rounded", "bg-base-100", "px-2", "leading-tight", "text-base-content", "shadow"], [1, "w-full", "whitespace-nowrap", "pt-1", "text-center", "text-[0.625rem]", "font-medium"], [1, "w-full", "pb-1", "text-center", "font-mono", "uppercase"]], template: function ExploreParkingInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ExploreParkingInfoComponent_Conditional_8_Template, 6, 4, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("!bg-error", ctx.status === "busy")("!text-error-content", ctx.status === "busy")("!bg-warning", ctx.status === "reserved")("!text-warning-content", ctx.status === "reserved")("!bg-success", ctx.status === "free")("!text-success-content", ctx.status === "free");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.status, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_concierge && ctx.plate_number ? 8 : -1);
  }
}, dependencies: [TranslatePipe], styles: ["\n\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */"] });
var ExploreParkingInfoComponent = _ExploreParkingInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-parking-info", template: `
        <div
            class="absolute left-1/2 top-1/2 rounded-lg !rounded-tl-none bg-base-300 p-2 text-left shadow"
            [class.!bg-error]="status === 'busy'"
            [class.!text-error-content]="status === 'busy'"
            [class.!bg-warning]="status === 'reserved'"
            [class.!text-warning-content]="status === 'reserved'"
            [class.!bg-success]="status === 'free'"
            [class.!text-success-content]="status === 'free'"
        >
            <div class="triangle absolute left-0.5 top-0.5"></div>
            <div class="flex space-x-2">
                <div class="flex min-w-24 flex-col pl-1 leading-tight">
                    <div class="whitespace-nowrap">{{ name }}</div>
                    <div class="text-sm font-medium capitalize">
                        {{ status }}
                    </div>
                </div>
                @if (is_concierge && plate_number) {
                    <div
                        class="relative flex h-full flex-col rounded bg-base-100 px-2 leading-tight text-base-content shadow"
                    >
                        <div
                            class="w-full whitespace-nowrap pt-1 text-center text-[0.625rem] font-medium"
                        >
                            {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                        </div>
                        <div
                            class="w-full pb-1 text-center font-mono uppercase"
                        >
                            {{ plate_number || 'PLATE NO 1' }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;186a95b4c185bcd2753f7ef9d30513d06855e35c348eb8e66dff829f779ea78f;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-parking-info.component.ts */\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreParkingInfoComponent, { className: "ExploreParkingInfoComponent", filePath: "libs/explore/src/lib/explore-parking-info.component.ts", lineNumber: 66 });
})();

// libs/explore/src/lib/explore-parking.service.ts
var _ExploreParkingService = class _ExploreParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._parking = inject(ParkingService);
    this._dialog = inject(MatDialog);
    this._options = new BehaviorSubject({});
    this._poll = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.on_book = null;
    this.levels = this._org.active_levels.pipe(map((l) => l.filter((_) => _.tags.includes("parking"))));
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Iu(bld.id, `parking_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.events = combineLatest([
      this._org.active_building,
      this._state.options,
      this._options,
      this._poll
    ]).pipe(debounceTime(300), switchMap(([bld, { is_public }, opts]) => is_public ? of([]) : queryBookings({
      period_start: getUnixTime(startOfMinute(opts.date || Date.now())),
      period_end: getUnixTime(endOfMinute(opts.date || Date.now())),
      type: "parking",
      zones: this._settings.get("app.use_region") ? bld?.parent_id : bld?.id,
      rejected: false
    })), shareReplay(1));
    this.user_events = combineLatest([this._options]).pipe(switchMap(([_]) => queryBookings({
      period_start: getUnixTime(startOfDay(_.date || Date.now())),
      period_end: getUnixTime(endOfDay(_.date || Date.now())),
      type: "parking",
      email: _?.user || currentUser()?.email
    })), shareReplay(1));
    this.spaces = this.levels.pipe(switchMap((_) => forkJoin(_.map((l) => Iu(l.id, "parking-spaces").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((s) => __spreadProps(__spreadValues({}, s), { zone_id: l.id }))))))), map((_) => flatten(_)), shareReplay(1));
    this.active_spaces = combineLatest([
      this.spaces,
      this._state.level
    ]).pipe(map(([spaces, level]) => spaces.filter((_) => _.zone_id === level.id)));
    this._users = {};
    this._plate_numbers = {};
    this.available_spaces = combineLatest([
      this.events,
      this.active_spaces,
      this._parking.users,
      this.booking_rules,
      this._options
    ]).pipe(map(([events, spaces, users, rules, { date }]) => {
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
            zones: [level.parent_id, level.id]
          }
        }, rules)?.hidden;
        this._users[space.id] = assigned;
        this._plate_numbers[space.id] = event?.extension_data?.plate_number || user?.plate_number || void 0;
        return !event && !is_restricted;
      });
      this._updateParkingSpaces(spaces, available);
      return available;
    }));
    this.subscription("spaces", this.available_spaces.subscribe());
    this.setOptions({
      enable_booking: this._settings.get("app.parking.enable_maps") !== false
    });
  }
  startPolling() {
    this.interval("poll", () => this._poll.next(Date.now()), 10 * 1e3);
    this._poll.next(Date.now());
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  async _updateParkingSpaces(spaces, available) {
    const styles = {};
    const features = [];
    const actions = [];
    const colours = this._settings.get("app.explore.colors") || {};
    let options = this._options.getValue();
    const assigned_space = await nextValueFrom(this._parking.assigned_space);
    const deny_parking_access = await nextValueFrom(this._parking.deny_parking_access);
    const booked_space = await nextValueFrom(this._parking.booked_space);
    for (const space of spaces) {
      const can_book = !!available.find((_) => _.id === space.id);
      const is_workplace = this._settings.app_name.toLowerCase().includes("workplace") || this._settings.app_name.toLowerCase().includes("staff");
      const is_assigned = is_workplace ? false : !!space.assigned_to;
      const id = space.map_id || space.id;
      const status = is_assigned ? can_book ? "pending" : "busy" : can_book ? "free" : "busy";
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
          this._poll.next(Date.now());
          return;
        }
        if (deny_parking_access) {
          return notifyError(i18n("EXPLORE.PARKING_PERMISSIONS_ERROR", {
            name: space.zone?.display_name || space.zone?.name
          }));
        }
        console.log("Booked Space:", booked_space);
        if (assigned_space && booked_space) {
          return notifyError(i18n("EXPLORE.PARKING_ASSIGNED_ERROR", {
            name: space.name || space.id
          }));
        }
        if (booked_space) {
          return notifyError(i18n("EXPLORE.PARKING_EXISTING_ERROR"));
        }
        if (status !== "free") {
          return notifyError(i18n("EXPLORE.PARKING_AVAILABLE_ERROR", {
            name: space.name || "Parking Space"
          }));
        }
        if (space.groups?.length && !space.groups.find((_) => currentUser().groups.includes(_))) {
          return notifyError(i18n("EXPLORE.PARKING_GROUP_ERROR", {
            name: space.name
          }));
        }
        this._bookings.newForm("parking");
        this._bookings.setOptions({ type: "parking" });
        options = this._options.getValue();
        let user = options.host || currentUser();
        const user_email = user?.email;
        const zone = this._org.levelWithID([
          space.zone_id || space.zone
        ]) || this._state.active_level;
        const date = !options.date || isSameDay(options.date, Date.now()) ? startOfMinute(Date.now()).valueOf() : setHours(options.date, 8).valueOf();
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
            zone.parent_id,
            zone.id
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
        this.timeout("poll", () => this._poll.next(Date.now()), 1e3);
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
  async _setBookingTime(date, duration, host = false, resource = null) {
    let user = null;
    if (!!this._settings.get("app.parking.allow_time_changes")) {
      const until = endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 90));
      const ref = this._dialog.open(SetDatetimeModalComponent, {
        data: { date, duration, until, host, resource }
      });
      const details = await ref.afterClosed().toPromise();
      if (!details)
        throw "User cancelled";
      date = details.date;
      duration = details.duration;
      user = details.user;
    }
    return { date, duration, user };
  }
};
_ExploreParkingService.\u0275fac = function ExploreParkingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingService)();
};
_ExploreParkingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreParkingService, factory: _ExploreParkingService.\u0275fac });
var ExploreParkingService = _ExploreParkingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-poi-modal.component.ts
var _c013 = ["media_el"];
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
var _ExplorePointOfInterestModalComponent = class _ExplorePointOfInterestModalComponent {
  constructor() {
    this.item = inject(MAT_DIALOG_DATA);
    this.playing = signal(false);
    this._media_el = viewChild("media_el");
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
};
_ExplorePointOfInterestModalComponent.\u0275fac = function ExplorePointOfInterestModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExplorePointOfInterestModalComponent)();
};
_ExplorePointOfInterestModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorePointOfInterestModalComponent, selectors: [["explore-poi-modal"]], viewQuery: function ExplorePointOfInterestModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._media_el, _c013, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 12, vars: 5, consts: [["media_el", ""], [1, "h-screen", "w-full", "min-w-[20rem]", "max-w-[28rem]", "overflow-auto", "rounded", "bg-base-100", "sm:h-auto"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "m-4", "flex", "h-[calc(100vh-5.75rem)]", "w-[calc(100%-2rem)]", "items-center", "justify-center", "rounded-lg", "bg-base-200", "p-8", "text-center", "opacity-50", "sm:h-64"], [1, "h-48", "w-full", "bg-base-300", "object-contain", 3, "src", "alt"], [1, "text-sm"], [1, "pointer-events-none", "absolute", "opacity-0"], ["auth", "", "controls", "", 1, "h-full", "w-full", 3, "source"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "border-t", "border-base-200", "p-4"], [1, "relative"], [1, "absolute", "left-2", "top-2", "h-8", "w-8", "animate-ping", "rounded-full", "bg-info"], ["icon", "", "matRipple", "", 1, "relative", "h-12", "w-12", "bg-base-200", 3, "click"], [1, "text-xs", "font-medium"], [1, "flex", "space-x-4", "border-t", "border-base-200", "p-4"], [1, "w-20", "min-w-20", "text-info"]], template: function ExplorePointOfInterestModalComponent_Template(rf, ctx) {
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
  CommonModule,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  IconComponent,
  AuthenticatedImageDirective
], encapsulation: 2 });
var ExplorePointOfInterestModalComponent = _ExplorePointOfInterestModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestModalComponent, [{
    type: Component,
    args: [{ selector: `explore-poi-modal`, template: `
        <div
            class="h-screen w-full min-w-[20rem] max-w-[28rem] overflow-auto rounded bg-base-100 sm:h-auto"
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
                        class="m-4 flex h-[calc(100vh-5.75rem)] w-[calc(100%-2rem)] items-center justify-center rounded-lg bg-base-200 p-8 text-center opacity-50 sm:h-64"
                    >
                        No available details for this point of interest.
                    </p>
                }
                @if (item.image) {
                    <img
                        class="h-48 w-full bg-base-300 object-contain"
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
                        class="flex w-full flex-col items-center justify-center space-y-2 border-t border-base-200 p-4"
                    >
                        <div class="relative">
                            @if (playing()) {
                                <div
                                    class="absolute left-2 top-2 h-8 w-8 animate-ping rounded-full bg-info"
                                ></div>
                            }
                            <button
                                icon
                                matRipple
                                class="relative h-12 w-12 bg-base-200"
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
                                class="flex space-x-4 border-t border-base-200 p-4"
                            >
                                <div class="w-20 min-w-20 text-info">
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
      CommonModule,
      MatRippleModule,
      MatDialogModule,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorePointOfInterestModalComponent, { className: "ExplorePointOfInterestModalComponent", filePath: "libs/explore/src/lib/explore-poi-modal.component.ts", lineNumber: 130 });
})();

// libs/explore/src/lib/explore-poi.service.ts
var _ExplorePointOfInterestService = class _ExplorePointOfInterestService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._explore = inject(ExploreStateService);
    this._dialog = inject(MatDialog);
    this._features = this._org.active_building.pipe(switchMap(() => Iu(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), map((_) => {
      const mapping = _.details || {};
      const levels = this._org.levelsForBuilding(this._org.building);
      const list = flatten(levels.map((lvl) => (mapping[lvl.id] || []).map((_2) => __spreadProps(__spreadValues({}, _2), {
        zone_id: lvl.id
      }))));
      return list;
    }), shareReplay(1));
    this._poi_list = combineLatest([
      this._features,
      this._explore.level
    ]).pipe(map(([features, level]) => features.filter((poi) => poi.zone_id === level.id)), shareReplay(1));
    this.subscription("poi_list", this._poi_list.subscribe((list) => {
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
            console.log("Mouse down or touch start");
            can_act = true;
            this.timeout("act", () => can_act = false);
          }
        }));
        ["mouseup", "touchend"].forEach((event) => actions.push({
          id: item.location,
          action: event,
          priority: 10,
          callback: () => {
            console.log("Mouse up or touch end");
            can_act ? this.viewDetails(item) : null;
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
    }));
  }
  viewDetails(item) {
    this._dialog.open(ExplorePointOfInterestModalComponent, {
      data: item
    });
  }
};
_ExplorePointOfInterestService.\u0275fac = function ExplorePointOfInterestService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExplorePointOfInterestService)();
};
_ExplorePointOfInterestService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExplorePointOfInterestService, factory: _ExplorePointOfInterestService.\u0275fac, providedIn: "root" });
var ExplorePointOfInterestService = _ExplorePointOfInterestService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/components/src/lib/map-canvas.component.ts
var _c014 = ["canvas"];
var _c17 = ["map-canvas", ""];
var _MapCanvasComponent = class _MapCanvasComponent extends AsyncHandler {
  get ratioed_height() {
    return +(this.width * this.ratio).toFixed(2);
  }
  constructor() {
    super();
    this._data = inject(MAP_FEATURE_DATA);
    this.zoom = 1;
    this.ratio = 1;
    this.svg_ratio = 1;
    this.width = 1e4;
    this.canvas_element = viewChild("canvas");
  }
  ngOnInit() {
    this.subscription("state", combineLatest([
      this._data.ratio$,
      this._data.zoom$,
      this._data.svg_ratio$
    ]).subscribe(([ratio, zoom, sr]) => this._handleMapChange(ratio, zoom, sr)));
    this.subscription("polygons", this._data.polygons$.subscribe((list) => this._handleStateChange(list)));
  }
  async _handleMapChange(ratio, zoom, svg_ratio) {
    const old_ratio = this.ratio;
    this.zoom = zoom;
    this.ratio = ratio;
    this.svg_ratio = svg_ratio;
    const width = this.width / 10;
    const height = this.width * this.ratio / 10;
    if (old_ratio === ratio)
      return;
    const canvas = this.canvas_element().nativeElement;
    canvas.width = width;
    canvas.height = height;
    const polygons = await nextValueFrom(this._data.polygons$);
    this._handleStateChange(polygons);
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
};
_MapCanvasComponent.\u0275fac = function MapCanvasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapCanvasComponent)();
};
_MapCanvasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapCanvasComponent, selectors: [["", "map-canvas", ""]], viewQuery: function MapCanvasComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.canvas_element, _c014, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c17, decls: 2, vars: 4, consts: [["canvas", ""], [1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2"]], template: function MapCanvasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "canvas", 1, 0);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("width", ctx.width * ctx.svg_ratio * ctx.zoom + "%")("height", ctx.width * ctx.svg_ratio * ctx.ratio * ctx.zoom + "%");
  }
}, encapsulation: 2 });
var MapCanvasComponent = _MapCanvasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapCanvasComponent, [{
    type: Component,
    args: [{ selector: "[map-canvas]", template: `
        <canvas
            #canvas
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            [style.width]="width * svg_ratio * zoom + '%'"
            [style.height]="width * svg_ratio * ratio * zoom + '%'"
        ></canvas>
    ` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapCanvasComponent, { className: "MapCanvasComponent", filePath: "libs/components/src/lib/map-canvas.component.ts", lineNumber: 48 });
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
    \u0275\u0275textInterpolate2("", ctx_r0.temp, "\u02DA", ctx_r0.temp_unit);
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
    \u0275\u0275textInterpolate1("", ctx_r0.humidity, "%");
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
    \u0275\u0275conditional(ctx_r0.temp ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.humidity ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp > 82 ? 3 : -1);
  }
}
var shown_id = "";
var _ExploreSensorInfoComponent = class _ExploreSensorInfoComponent extends AsyncHandler {
  get show() {
    return shown_id === this._details.id;
  }
  set show(value) {
    this.timeout("show", () => shown_id = value ? this._details.id : "");
  }
  constructor() {
    super();
    this._details = inject(MAP_FEATURE_DATA);
    this.temp = this._details.temp || 0;
    this.temp_unit = this._details.temp_unit || "C";
    this.humidity = this._details.humidity || 0;
  }
};
_ExploreSensorInfoComponent.\u0275fac = function ExploreSensorInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSensorInfoComponent)();
};
_ExploreSensorInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSensorInfoComponent, selectors: [["explore-sensor-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [["stats", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "center", "xPosition", "center", 1, "pointer-events-auto", "absolute", "left-1/2", "top-1/2", "h-7", "w-7", "min-w-0", "-translate-x-1/2", "-translate-y-1/2", "bg-base-100", "shadow", 3, "content"], [1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", "text-xl"], [1, "flex", "items-center", "space-x-2", "whitespace-nowrap", "pr-2"], [1, "absolute", "right-0", "top-0", "-translate-y-1/2", "translate-x-1/2", "rounded-full", "border", "border-base-200", "bg-base-100"], [1, ""], [1, "text-xl", "text-error"]], template: function ExploreSensorInfoComponent_Template(rf, ctx) {
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
var ExploreSensorInfoComponent = _ExploreSensorInfoComponent;
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
            class="pointer-events-auto absolute left-1/2 top-1/2 h-7 w-7 min-w-0 -translate-x-1/2 -translate-y-1/2 bg-base-100 shadow"
        >
            <icon> visibility </icon>
        </button>
        <ng-template #stats>
            <div
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-base-200 bg-base-100 p-2 text-xl"
            >
                @if (temp) {
                    <div
                        class="flex items-center space-x-2 whitespace-nowrap pr-2"
                    >
                        <icon>thermostat</icon>
                        <div class="">{{ temp }}\u02DA{{ temp_unit }}</div>
                    </div>
                }
                @if (humidity) {
                    <div
                        class="flex items-center space-x-2 whitespace-nowrap pr-2"
                    >
                        <icon>opacity</icon>
                        <div class="">{{ humidity }}%</div>
                    </div>
                }
                @if (temp > 82) {
                    <div
                        class="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full border border-base-200 bg-base-100"
                    >
                        <icon class="text-xl text-error">error</icon>
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
var _ExploreZonesService = class _ExploreZonesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._area_list = [];
    this._statuses = {};
    this._count_key = {};
    this._location = {};
    this._label_location = {};
    this._capacity = {};
    this._draw = {};
    this._points = {};
    this._features = [];
    this._polygons$ = new BehaviorSubject([]);
    this._bind = combineLatest([
      this._org.active_building,
      this._state.level,
      this._state.options
    ]).pipe(filter(([bld, lvl, { is_public }]) => !!bld && !!lvl && !is_public), map(([_, lvl]) => {
      this._statuses = {};
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return;
      const bind_areas = mod.variable(`${lvl.id}:areas`);
      const bind_zone = mod.variable(`${lvl.id}`);
      const zones = combineLatest([
        bind_areas.listen(),
        bind_zone.listen()
      ]).pipe(debounceTime(100), map(([a, z]) => [
        ...a?.value || [],
        ...(z?.value || []).filter((_2) => _2.location === "area")
      ]));
      this.subscription(`zones-status`, zones.subscribe((l) => this.parseData(l)));
      this.subscription("binding", bind_areas.bind());
      this.subscription("zone-binding", bind_zone.bind());
    }));
    this.init();
  }
  async init() {
    await firstTruthyValueFrom(this._org.initialised);
    const zone_metadata = await Promise.all(this._org.levels.map((bld) => Iu(bld.id, "map_regions").toPromise()));
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
          polygons$: this._polygons$,
          draw_points: false,
          draw_labels: false
        }
      }
    ]);
    this.updateStatus();
    this.subscription("bind", this._bind.subscribe());
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
          value: `${zone.humidity}
`
        });
      if (zone.counter)
        content += i18n("EXPLORE.SENSORS_COUNT", {
          value: `${zone.humidity}
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
    this._polygons$.next(polygons);
    this._state.setFeatures("zones", [...features, ...this._features]);
    this._state.setStyles("zones-styles", style_map);
  }
};
_ExploreZonesService.\u0275fac = function ExploreZonesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreZonesService)();
};
_ExploreZonesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreZonesService, factory: _ExploreZonesService.\u0275fac });
var ExploreZonesService = _ExploreZonesService;
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
var _c015 = () => ({ controls: true });
function ExploreMapViewComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-slide-toggle", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapViewComponent_Conditional_6_Conditional_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleZones($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.options)) == null ? null : tmp_2_0.disable == null ? null : tmp_2_0.disable.includes("zones")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "EXPLORE.AREAS"));
  }
}
function ExploreMapViewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "explore-map-controls");
    \u0275\u0275conditionalCreate(2, ExploreMapViewComponent_Conditional_6_Conditional_2_Template, 6, 6, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_zones ? 2 : -1);
  }
}
function ExploreMapViewComponent_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pair_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", pair_r3[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r3[0]);
  }
}
function ExploreMapViewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ExploreMapViewComponent_Conditional_8_For_5_Template, 4, 3, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.LEGEND"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.legend);
  }
}
function ExploreMapViewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ExploreMapViewComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearLocate());
    });
    \u0275\u0275text(1, " Clear Pin ");
    \u0275\u0275elementEnd();
  }
}
var EMPTY2 = [];
var _ExploreMapViewComponent = class _ExploreMapViewComponent extends AsyncHandler {
  async toggleZones(enabled) {
    const options = await nextValueFrom(this.options);
    const disable = !enabled ? unique([...options?.disable || [], "zones", "devices"]) : options?.disable?.filter((_) => _ !== "zones" && _ !== "devices") || [];
    this.setOptions({ disable });
  }
  get show_legend() {
    return !!this._settings.get("app.explore.show_legend");
  }
  get hide_zones() {
    return !!this._settings.get("app.explore.hide_zones");
  }
  get legend() {
    return this._settings.get("app.explore.legend") || EMPTY2;
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
    this.locate = "";
    this.map_info = {};
    this.use_mapsindoors$ = this._maps.available$;
  }
  async ngOnInit() {
    this._state.reset();
    await this._spaces.initialised.pipe(first((_) => _)).toPromise();
    this.toggleZones(false);
    this.subscription("parking_poll", this._parking.startPolling());
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
    this.locate = "";
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
      this.locate = id;
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
      this.locate = id;
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
    let loc = locations.find(({ position }) => typeof position !== "string" || position in this.map_info);
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
      this.locate = user.id || user.email;
      this._state.setFeatures("_located", [feature]);
    });
  }
};
_ExploreMapViewComponent.\u0275fac = function ExploreMapViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreMapViewComponent)();
};
_ExploreMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapViewComponent, selectors: [["explore-map-view"]], features: [\u0275\u0275ProvidersFeature([
  ExploreDesksService,
  ExploreSpacesService,
  ExploreZonesService,
  ExploreParkingService,
  ExploreLockersService,
  ExplorePointOfInterestService,
  SpacePipe
]), \u0275\u0275InheritDefinitionFeature], decls: 10, vars: 23, consts: [[3, "mapInfo", "src", "styles", "features", "actions", "labels", "focus", "options"], ["controls", "", 1, "absolute", "left-2", "top-2", "max-w-[calc(100vw-1rem)]", "space-y-2", "overflow-hidden", "rounded", "border", "border-base-200", "bg-base-100", "p-2"], ["legend", "", 1, "absolute", "bottom-2", "left-2", "rounded", "border", "border-base-200", "bg-base-100", "p-2"], ["matRipple", "", 1, "absolute", "right-2", "top-2", "h-12", "min-w-32", "rounded-lg", "border", "border-base-300", "bg-base-100", "px-4", "shadow"], [1, "flex", "items-center", "space-x-2"], ["name", "zones", 1, "ml-2", 3, "ngModelChange", "ngModel"], ["for", "zones", 1, "mb-0"], [1, "mb-2", "font-medium"], [1, "h-3", "w-3", "rounded-full", "border", "border-base-200"], [1, "text-sm"], ["matRipple", "", 1, "absolute", "right-2", "top-2", "h-12", "min-w-32", "rounded-lg", "border", "border-base-300", "bg-base-100", "px-4", "shadow", 3, "click"]], template: function ExploreMapViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "interactive-map", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("mapInfo", function ExploreMapViewComponent_Template_interactive_map_mapInfo_0_listener($event) {
      return ctx.map_info = $event || {};
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ExploreMapViewComponent_Conditional_6_Template, 3, 1, "div", 1);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalCreate(8, ExploreMapViewComponent_Conditional_8_Template, 6, 3, "div", 2);
    \u0275\u0275conditionalCreate(9, ExploreMapViewComponent_Conditional_9_Template, 2, 0, "button", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 10, ctx.url))("styles", \u0275\u0275pipeBind1(2, 12, ctx.styles))("features", \u0275\u0275pipeBind1(3, 14, ctx.features))("actions", \u0275\u0275pipeBind1(4, 16, ctx.actions))("labels", \u0275\u0275pipeBind1(5, 18, ctx.labels))("focus", ctx.locate)("options", \u0275\u0275pureFunction0(22, _c015));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(7, 20, ctx.use_mapsindoors$) ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.show_legend && ctx.legend.length ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.locate ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  InteractiveMapComponent,
  MatSlideToggle,
  MatRippleModule,
  MatRipple,
  ExploreMapControlComponent,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[zones][_ngcontent-%COMP%] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */"] });
var ExploreMapViewComponent = _ExploreMapViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapViewComponent, [{
    type: Component,
    args: [{ selector: "explore-map-view", template: `
        <interactive-map
            [src]="url | async"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
            [labels]="labels | async"
            [focus]="locate"
            [options]="{ controls: true }"
            (mapInfo)="map_info = $event || {}"
        />
        @if (!(use_mapsindoors$ | async)) {
            <div
                controls
                class="absolute left-2 top-2 max-w-[calc(100vw-1rem)] space-y-2 overflow-hidden rounded border border-base-200 bg-base-100 p-2"
            >
                <explore-map-controls></explore-map-controls>
                @if (!hide_zones) {
                    <div class="flex items-center space-x-2">
                        <mat-slide-toggle
                            name="zones"
                            class="ml-2"
                            [ngModel]="
                                !(options | async)?.disable?.includes('zones')
                            "
                            (ngModelChange)="toggleZones($event)"
                        ></mat-slide-toggle>
                        <label for="zones" class="mb-0">{{
                            'EXPLORE.AREAS' | translate
                        }}</label>
                    </div>
                }
            </div>
        }
        @if (show_legend && legend.length) {
            <div
                legend
                class="absolute bottom-2 left-2 rounded border border-base-200 bg-base-100 p-2"
            >
                <h3 class="mb-2 font-medium">
                    {{ 'EXPLORE.LEGEND' | translate }}
                </h3>
                @for (pair of legend; track pair) {
                    <div class="flex items-center space-x-2">
                        <div
                            class="h-3 w-3 rounded-full border border-base-200"
                            [style.background-color]="pair[1]"
                        ></div>
                        <div class="text-sm">{{ pair[0] }}</div>
                    </div>
                }
            </div>
        }
        @if (locate) {
            <button
                class="absolute right-2 top-2 h-12 min-w-32 rounded-lg border border-base-300 bg-base-100 px-4 shadow"
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
      CommonModule,
      TranslatePipe,
      InteractiveMapComponent,
      MatSlideToggle,
      MatRippleModule,
      ExploreMapControlComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;f0dd04a674d5d39d9f19b967c64f941cbd15e6ed17e75f4055e915dd830afa8d;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-view.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[zones] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapViewComponent, { className: "ExploreMapViewComponent", filePath: "libs/explore/src/lib/explore-map-view.component.ts", lineNumber: 142 });
})();

// libs/explore/src/lib/explore-search.service.ts
var TYPES = ["space", "contact", "feature", "user"];
function typeIndex(item) {
  return TYPES.indexOf(item.is_role ? "contact" : item.type);
}
var _ExploreSearchService = class _ExploreSearchService {
  hideItem(name) {
    const hide_items = this._settings.get("app.hide_global_search_items") || [];
    return hide_items.includes(name);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._maps_people = inject(MapsPeopleService);
    this._state = inject(ExploreStateService);
    this._emergency_contacts = new BehaviorSubject([]);
    this._filter = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.emergency_contacts = this._emergency_contacts.asObservable();
    this._role_assigned_contacts = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Iu(bld.id, "emergency_contacts")), map(({ details }) => details?.contacts || []), shareReplay(1));
    this._user_search = this._filter.pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap((q) => q?.length > 2 ? this.search_fn(q).pipe(catchError(() => of([]))) : of([])), shareReplay(1));
    this._space_search = this._filter.pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap((q) => q?.length > 2 ? xc({ q, zone_id: this._org.organisation.id }).pipe(map(({ data }) => data.filter((_) => _.map_id).map((_) => new Space(__spreadProps(__spreadValues({}, _), {
      level: this._org.levelWithID(_.zones)
    }))))) : of([])), catchError(() => []));
    this._desk_search = combineLatest([
      this._org.active_building
    ]).pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap(([bld]) => bld ? Ru(bld.id, { name: "desks" }).pipe(catchError(() => of([])), map((i) => flatten(i.map((j) => (j.metadata.desks?.details || []).map((k) => new Desk(__spreadProps(__spreadValues({}, k), { zone: j.zone }))))))) : of([])), catchError(() => []));
    this._maps_people_search = combineLatest([
      this._maps_people.available$,
      this._filter,
      this._org.active_building
    ]).pipe(debounceTime(1e3), switchMap(([available, q]) => available && q.length > 2 ? mapsindoors?.services.LocationsService.getLocations({ q }) : of([])), map((list) => {
      return list.map((_) => ({
        id: _.properties?.externalId || _.properties?.roomId || _.roomId || _.id,
        map_id: _.properties?.externalId || _.properties?.roomId || _.roomId || "",
        type: "feature",
        name: _.properties?.name || "",
        description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`
      }));
    }), shareReplay(1));
    this._map_features = this._org.active_building.pipe(filter((bld) => !!bld), switchMap(() => Ru(this._org.building.id, {
      name: "map_features"
    }).pipe(catchError(() => of({ details: [] })))), map((data) => {
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
    }));
    this._poi_metadata = this._org.initialised.pipe(filter((_) => _), switchMap(() => Iu(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), shareReplay(1));
    this._poi_list = combineLatest([
      this._org.active_building,
      this._poi_metadata
    ]).pipe(filter(([bld]) => !!bld?.id), map(([bld, metadata]) => {
      const mapping = metadata.details || {};
      const levels = this._org.levelsForBuilding(bld);
      const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
      return list.filter((_) => _.can_search);
    }));
    this._points_of_interest = this._poi_list.pipe(map((poi_list) => {
      return poi_list.map((item) => ({
        id: item.location || item.id,
        type: "feature",
        name: item.name,
        description: "",
        zone: item.level_id
      }));
    }));
    this.search_results = combineLatest([
      this._filter,
      this._space_search,
      this._desk_search,
      this._user_search,
      this._emergency_contacts,
      this._role_assigned_contacts,
      this._map_features,
      this._maps_people_search,
      this._points_of_interest
    ]).pipe(map(([filter2, spaces, desks, users, contacts, roled_contacts, features, mapspeople_items, points_of_interest]) => {
      const search = filter2.toLowerCase();
      let results = [];
      if (!this.hideItem("mapspeople"))
        results = results.concat(mapspeople_items);
      if (!this.hideItem("spaces")) {
        results = results.concat(spaces.map((s) => ({
          id: s.id,
          type: "space",
          email: s.email,
          name: s.display_name || s.name,
          description: `Capacity: ${s.capacity} `
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
          description: u.email
        })))));
      }
      if (!this.hideItem("features")) {
        results = results.concat(features.filter((_) => _.name.toLowerCase().includes(search)).map((s) => ({
          id: s.id,
          type: "feature",
          name: s.name,
          description: "",
          zone: s.zone?.id
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
      results = results.filter((_) => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || (_.email || "").toLowerCase().includes(search) || _.type.toLowerCase().includes(search));
      results.sort((a, b) => typeIndex(a) - typeIndex(b) || a.name.localeCompare(b.name));
      return results;
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.search_fn = (q) => this._settings.get("app.basic_user_search") ? Yc({ q, authority_id: kt()?.id }).pipe(map((_) => _.data)) : searchStaff(q);
    this.search_results.subscribe();
    this.init();
  }
  async init() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    await timer(500).toPromise();
    const { is_public } = await nextValueFrom(this._state.options);
    if (is_public)
      return;
    const mod = this._org.module("location_services", "LocationServices");
    if (mod) {
      const binding = mod.variable("emergency_contacts");
      binding.listen().subscribe((contacts_map) => {
        const list = [];
        for (const type in contacts_map) {
          for (const user of contacts_map[type]) {
            list.push(__spreadProps(__spreadValues({}, user), { type }));
          }
        }
        this._emergency_contacts.next(list);
      });
      binding.bind();
    }
  }
  setFilter(str) {
    this._filter.next(str);
  }
};
_ExploreSearchService.\u0275fac = function ExploreSearchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSearchService)();
};
_ExploreSearchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSearchService, factory: _ExploreSearchService.\u0275fac, providedIn: "root" });
var ExploreSearchService = _ExploreSearchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-search.component.ts
var _c016 = ["input"];
var _c18 = ["button"];
var _forTrack02 = ($index, $item) => $item.name;
function ExploreSearchComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ExploreSearchComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
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
function ExploreSearchComponent_Conditional_13_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275listener("click", function ExploreSearchComponent_Conditional_13_For_3_Template_mat_option_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.select(option_r3));
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
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.type, " ");
  }
}
function ExploreSearchComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExploreSearchComponent_Conditional_13_Conditional_0_Template, 3, 3, "mat-option", 8);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275repeaterCreate(2, ExploreSearchComponent_Conditional_13_For_3_Template, 9, 4, "mat-option", 9, _forTrack02);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "slice");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!((tmp_5_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.results)) == null ? null : tmp_5_0.length) ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(5, 5, \u0275\u0275pipeBind1(4, 3, ctx_r3.results), 0, 5));
  }
}
var _ExploreSearchComponent = class _ExploreSearchComponent extends AsyncHandler {
  constructor() {
    super();
    this._el = inject(ElementRef);
    this._search = inject(ExploreSearchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.show = false;
    this.search_str = "";
    this.right_size = false;
    this.results = this._search.search_results;
    this.loading = this._search.loading;
    this.setFilter = (s) => this._search.setFilter(s);
    this._input_el = viewChild("input");
    this._button_el = viewChild("button");
  }
  ngOnInit() {
    this.checkButtonPosition();
  }
  clear() {
    this.timeout("clear", () => {
      this.show = false;
      this.search_str = "";
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
    this.search_str = "";
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
};
_ExploreSearchComponent.\u0275fac = function ExploreSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSearchComponent)();
};
_ExploreSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c016, 5);
    \u0275\u0275viewQuerySignal(ctx._button_el, _c18, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 23, consts: [["button", ""], ["origin", "matAutocompleteOrigin"], ["input", ""], ["auto", "matAutocomplete"], ["icon", "", "matRipple", "", 1, "m-2", "bg-base-200", 3, "resize", "click"], ["role", "search", "tabindex", "0", "matRipple", "", "matAutocompleteOrigin", "", 1, "absolute", "top-1/2", "z-10", "flex", "max-w-[calc(100vw-7rem)]", "-translate-y-1/2", "items-center", "overflow-hidden", "bg-base-100", "px-4", "outline-none", 3, "click"], ["keyboard", "", 1, "flex-1", "border-none", "text-base", "outline-none", 3, "ngModelChange", "focus", "blur", "ngModel", "placeholder", "matAutocomplete", "matAutocompleteConnectedTo"], [1, "mr-2", 3, "diameter"], [1, "pointer-events-none"], [3, "value"], [3, "click", "value"], [1, "flex", "w-[22rem]", "max-w-[calc(100vw-2rem)]", "items-center", "leading-tight"], [1, "w-1/2", "flex-1", "overflow-hidden"], [1, "w-full", "truncate"], [1, "text-xs"], [1, "rounded", "bg-base-300", "p-2", "text-xs", "font-bold", "capitalize", "text-white"]], template: function ExploreSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4, 0);
    \u0275\u0275listener("resize", function ExploreSearchComponent_Template_button_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkButtonPosition());
    }, \u0275\u0275resolveWindow)("click", function ExploreSearchComponent_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show ? ctx.closeSearch($event) : ctx.showSearch());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5, 1);
    \u0275\u0275listener("click", function ExploreSearchComponent_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    });
    \u0275\u0275elementStart(6, "input", 6, 2);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFilter($event));
    })("focus", function ExploreSearchComponent_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cancelClear());
    })("blur", function ExploreSearchComponent_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clear());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExploreSearchComponent_Conditional_9_Template, 1, 1, "mat-spinner", 7);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-autocomplete", null, 3);
    \u0275\u0275conditionalCreate(13, ExploreSearchComponent_Conditional_13_Template, 6, 9);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const origin_r5 = \u0275\u0275reference(5);
    const auto_r6 = \u0275\u0275reference(12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.show || ctx.search_str ? "close" : "search");
    \u0275\u0275advance();
    \u0275\u0275classProp("right-0", ctx.right_size)("-translate-x-14", ctx.right_size)("left-0", !ctx.right_size)("translate-x-14", !ctx.right_size)("show", ctx.show || ctx.search_str);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 17, "COMMON.SEARCH"))("matAutocomplete", auto_r6)("matAutocompleteConnectedTo", origin_r5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(10, 19, ctx.loading) ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(14, 21, ctx.loading) !== true && (ctx.show || ctx.search_str) ? 13 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  SlicePipe,
  IconComponent,
  TranslatePipe,
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
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  z-index: 99;\n  position: relative;\n}\n[role=search][_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show[_ngcontent-%COMP%] {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */"] });
var ExploreSearchComponent = _ExploreSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchComponent, [{
    type: Component,
    args: [{ selector: "explore-search", template: `
        <button
            #button
            icon
            matRipple
            class="m-2 bg-base-200"
            (window:resize)="checkButtonPosition()"
            (click)="show ? closeSearch($event) : showSearch()"
        >
            <icon>{{ show || search_str ? 'close' : 'search' }}</icon>
        </button>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="absolute top-1/2 z-10 flex max-w-[calc(100vw-7rem)] -translate-y-1/2 items-center overflow-hidden bg-base-100 px-4 outline-none"
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
                class="flex-1 border-none text-base outline-none"
                [(ngModel)]="search_str"
                (ngModelChange)="setFilter($event)"
                [placeholder]="'COMMON.SEARCH' | translate"
                (focus)="cancelClear()"
                (blur)="clear()"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            @if (loading | async) {
                <mat-spinner class="mr-2" [diameter]="32"></mat-spinner>
            }
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            @if ((loading | async) !== true && (show || search_str)) {
                @if (!(results | async)?.length) {
                    <mat-option class="pointer-events-none">
                        {{ 'COMMON.SEARCH_EMPTY' | translate }}
                    </mat-option>
                }
                @for (
                    option of results | async | slice: 0 : 5;
                    track option.name
                ) {
                    <mat-option [value]="option.name" (click)="select(option)">
                        <div
                            class="flex w-[22rem] max-w-[calc(100vw-2rem)] items-center leading-tight"
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
                                class="rounded bg-base-300 p-2 text-xs font-bold capitalize text-white"
                            >
                                {{ option.type }}
                            </div>
                        </div>
                    </mat-option>
                }
            }
        </mat-autocomplete>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      VirtualKeyboardComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;9f4945b2ccd61cdbcc08723b98fac624bfd389374b9fee892262ad25a3c5edf0;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-search.component.ts */\n:host {\n  z-index: 99;\n  position: relative;\n}\n[role=search] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSearchComponent, { className: "ExploreSearchComponent", filePath: "libs/explore/src/lib/explore-search.component.ts", lineNumber: 133 });
})();

// libs/explore/src/lib/explore-zoom-control.component.ts
var _ExploreZoomControlComponent = class _ExploreZoomControlComponent {
  constructor() {
    this._state = inject(ExploreStateService);
    this.zoomIn = () => this._state.setPositions(Math.min(10, this._state.positions.zoom * 1.2), this._state.positions.center);
    this.zoomOut = () => this._state.setPositions(Math.max(1, this._state.positions.zoom * (1 / 1.2)), this._state.positions.center);
    this.reset = () => this._state.setPositions(1, { x: 0.5, y: 0.5 });
  }
};
_ExploreZoomControlComponent.\u0275fac = function ExploreZoomControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreZoomControlComponent)();
};
_ExploreZoomControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 12, vars: 9, consts: [["z-in", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["z-out", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["reset", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"]], template: function ExploreZoomControlComponent_Template(rf, ctx) {
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
}, dependencies: [MatRippleModule, MatRipple, TranslatePipe, IconComponent, MatTooltipModule, MatTooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */"] });
var ExploreZoomControlComponent = _ExploreZoomControlComponent;
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
var _SharedExploreModule = class _SharedExploreModule {
};
_SharedExploreModule.\u0275fac = function SharedExploreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedExploreModule)();
};
_SharedExploreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedExploreModule });
_SharedExploreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
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
var SharedExploreModule = _SharedExploreModule;
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

// apps/workplace/src/app/components/global-search.component.ts
var _c017 = ["input"];
var _c19 = (a0, a1, a2, a3, a4) => ({ "w-[32rem]": a0, "w-px": a1, "opacity-100": a2, "opacity-0": a3, "pointer-events-none": a4 });
var _c23 = () => ["/explore"];
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
function GlobalSearchComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
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
function GlobalSearchComponent_Conditional_12_Conditional_3_Conditional_0_Template(rf, ctx) {
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
function GlobalSearchComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GlobalSearchComponent_Conditional_12_Conditional_3_Conditional_0_Template, 3, 3, "div", 8);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!((tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.results)) == null ? null : tmp_3_0.length) ? 0 : -1);
  }
}
function GlobalSearchComponent_Conditional_12_Conditional_4_For_1_Template(rf, ctx) {
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c23))("queryParams", option_r3.type === "space" ? \u0275\u0275pureFunction1(6, _c32, option_r3.id) : option_r3.type === "user" || option_r3.is_role ? \u0275\u0275pureFunction1(8, _c42, option_r3.id) : \u0275\u0275pureFunction3(10, _c52, option_r3.id, option_r3.name, option_r3.zone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.type, " ");
  }
}
function GlobalSearchComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GlobalSearchComponent_Conditional_12_Conditional_4_For_1_Template, 8, 14, "a", 9, _forTrack03);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "slice");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 2, \u0275\u0275pipeBind1(2, 0, ctx_r1.results), 0, 100));
  }
}
function GlobalSearchComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, GlobalSearchComponent_Conditional_12_Conditional_1_Template, 3, 3, "div", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalBranchCreate(3, GlobalSearchComponent_Conditional_12_Conditional_3_Template, 2, 3);
    \u0275\u0275conditionalCreate(4, GlobalSearchComponent_Conditional_12_Conditional_4_Template, 4, 6);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(7, _c19, ctx_r1.show(), !ctx_r1.show(), ctx_r1.show(), !ctx_r1.show(), !ctx_r1.show()));
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_3_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.results)) == null ? null : tmp_3_0.length) && ctx_r1.filter_str() ? 1 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(5, 5, ctx_r1.loading) && ctx_r1.filter_str() ? 4 : -1);
  }
}
var _GlobalSearchComponent = class _GlobalSearchComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._service = inject(ExploreSearchService);
    this.results = this._service.search_results;
    this.loading = this._service.loading;
    this.show = signal(false);
    this.filter_str = signal("");
    this.setFilter = (s) => s instanceof Object ? this.filter_str.set("") : this._service.setFilter(s);
    this._input_el = viewChild("input");
  }
  showInput() {
    this.show.set(true);
    this._input_el().nativeElement.focus();
    this.clearTimeout("close");
  }
  hideInput() {
    this.timeout("close", () => this.show.set(false));
  }
};
_GlobalSearchComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275GlobalSearchComponent_BaseFactory;
  return function GlobalSearchComponent_Factory(__ngFactoryType__) {
    return (\u0275GlobalSearchComponent_BaseFactory || (\u0275GlobalSearchComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GlobalSearchComponent)))(__ngFactoryType__ || _GlobalSearchComponent);
  };
})();
_GlobalSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalSearchComponent, selectors: [["global-search"]], viewQuery: function GlobalSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c017, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 15, consts: [["input", ""], [1, "relative", "h-full", "w-12"], ["icon", "", "name", "global-search", "matRipple", "", 1, "h-10", "w-10", "rounded-full", "bg-base-200", 3, "click"], [1, "text-2xl"], ["search", "", 1, "absolute", "right-2", "top-1/2", "z-50", "flex", "h-12", "max-w-[calc(100vw-4rem)]", "-translate-y-1/2", "items-center", "space-x-2", "rounded-[24px]", "border-2", "border-neutral", "bg-base-100", "px-2", "shadow", 3, "click", "ngClass"], [1, "w-1/2", "flex-1", "py-2", "outline-none", 3, "ngModelChange", "blur", "placeholder", "ngModel"], [3, "diameter"], ["search", "", 1, "absolute", "bottom-0", "right-2", "flex", "max-h-[40vh]", "max-w-[calc(100vw-4rem)]", "translate-y-[calc(100%-1rem)]", "flex-col", "items-center", "overflow-auto", "rounded-b", "border", "border-base-200", "bg-base-100", "pt-4", "shadow", 3, "ngClass"], ["empty", "", 1, "w-full", "p-4", "text-center", "opacity-60"], ["matRipple", "", 1, "flex", "h-14", "min-h-14", "w-full", "items-center", "px-4", "py-2", "leading-tight", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "flex-1", "overflow-hidden"], [1, "w-full", "truncate"], [1, "text-xs", "opacity-60"], [1, "rounded", "bg-secondary", "p-2", "text-xs", "font-medium", "capitalize", "text-secondary-content", "text-white"]], template: function GlobalSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function GlobalSearchComponent_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showInput());
    });
    \u0275\u0275elementStart(2, "icon", 3);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275listener("click", function GlobalSearchComponent_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showInput());
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
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFilter($event));
    })("blur", function GlobalSearchComponent_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.hideInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, GlobalSearchComponent_Conditional_10_Template, 1, 1, "mat-spinner", 6);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, GlobalSearchComponent_Conditional_12_Template, 6, 13, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(9, _c19, ctx.show(), !ctx.show(), ctx.show(), !ctx.show(), !ctx.show()));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 5, "APP.WORKPLACE.GLOBAL_SEARCH"));
    \u0275\u0275twoWayProperty("ngModel", ctx.filter_str);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(11, 7, ctx.loading) ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.filter_str() ? 12 : -1);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  AsyncPipe,
  SlicePipe,
  RouterModule,
  RouterLink,
  TranslatePipe,
  IconComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatProgressSpinnerModule,
  MatProgressSpinner
], styles: ["\n\n[search][_ngcontent-%COMP%] {\n  transition: width 200ms, opacity 200ms;\n}\n/*# sourceMappingURL=global-search.component.css.map */"] });
var GlobalSearchComponent = _GlobalSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalSearchComponent, [{
    type: Component,
    args: [{ selector: "global-search", template: `
        <div class="relative h-full w-12">
            <button
                icon
                name="global-search"
                matRipple
                class="h-10 w-10 rounded-full bg-base-200"
                (click)="showInput()"
            >
                <icon class="text-2xl">search</icon>
            </button>
            <div
                search
                class="absolute right-2 top-1/2 z-50 flex h-12 max-w-[calc(100vw-4rem)] -translate-y-1/2 items-center space-x-2 rounded-[24px] border-2 border-neutral bg-base-100 px-2 shadow"
                [ngClass]="{
                    'w-[32rem]': show(),
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
                    class="w-1/2 flex-1 py-2 outline-none"
                    [(ngModel)]="filter_str"
                    (ngModelChange)="setFilter($event)"
                    (blur)="hideInput()"
                />
                @if (loading | async) {
                    <mat-spinner [diameter]="32"></mat-spinner>
                }
            </div>
            @if (filter_str()) {
                <div
                    search
                    class="absolute bottom-0 right-2 flex max-h-[40vh] max-w-[calc(100vw-4rem)] translate-y-[calc(100%-1rem)] flex-col items-center overflow-auto rounded-b border border-base-200 bg-base-100 pt-4 shadow"
                    [ngClass]="{
                        'w-[32rem]': show(),
                        'w-px': !show(),
                        'opacity-100': show(),
                        'opacity-0': !show(),
                        'pointer-events-none': !show(),
                    }"
                >
                    @if (!(results | async)?.length && filter_str()) {
                        <div empty class="w-full p-4 text-center opacity-60">
                            {{
                                'APP.WORKPLACE.GLOBAL_SEARCH_EMPTY' | translate
                            }}
                        </div>
                    } @else {
                        @if (!(results | async)?.length) {
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
                    @if (!(loading | async) && filter_str()) {
                        @for (
                            option of results | async | slice: 0 : 100;
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
                                class="flex h-14 min-h-14 w-full items-center px-4 py-2 leading-tight hover:bg-base-200"
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
                                    class="rounded bg-secondary p-2 text-xs font-medium capitalize text-secondary-content text-white"
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalSearchComponent, { className: "GlobalSearchComponent", filePath: "apps/workplace/src/app/components/global-search.component.ts", lineNumber: 146 });
})();

// apps/workplace/src/app/components/top-menu.component.ts
var _c018 = ["menuContainer"];
var _c110 = (a0) => [a0];
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
    \u0275\u0275property("name", "nav-" + route_r3.id)("routerLink", \u0275\u0275pureFunction1(6, _c110, route_r3.route))("matTooltip", route_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(route_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", route_r3.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_text() ? 5 : -1);
  }
}
function TopMenuComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TopMenuComponent_Conditional_0_For_3_Conditional_0_Template, 7, 8, "a", 5);
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
    \u0275\u0275classProp("opacity-0", ctx_r1.mobile_menu() || ctx_r1.checking())("!h-0", ctx_r1.mobile_menu());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.routes);
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
    \u0275\u0275elementStart(4, "icon", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13);
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
var _TopMenuComponent = class _TopMenuComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._element = inject(ElementRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this.buildings = this._org.building_list;
    this.building = this._org.active_building;
    this.previous_size = 9999;
    this.checking = signal(false);
    this.mobile_menu = signal(false);
    this.hide_text = signal(false);
    this.features = signal([]);
    this.setBuilding = (b) => this._org.building = b;
    this.routes = [];
    this.menu = viewChild("menuContainer");
  }
  get feature_list() {
    return this._settings.get("app.features") || [];
  }
  get available_features() {
    const feature_list = this.feature_list;
    const feature_groups = this._settings.get("app.feature_groups") || {};
    const groups = currentUser().groups;
    return feature_list.filter((name) => (
      // this.is_admin ||
      !feature_groups[name]?.length || feature_groups[name].find((_) => groups.includes(_))
    ));
  }
  get is_admin() {
    const groups = currentUser().groups;
    return groups.includes("placeos_admin") || groups.includes("placeos_support");
  }
  get default_page() {
    return this._settings.get("app.default_route") || "/landing";
  }
  get new_features() {
    return !!this._settings.get("app.new_features");
  }
  get type() {
    const url = this._router.url;
    if (url.includes(this.default_page))
      return "home";
    if (url.includes("book/spaces"))
      return "spaces";
    if (url.includes("book/desk"))
      return "desks";
    if (url.includes("book/locker"))
      return "lockers";
    if (url.includes("book/parking"))
      return "parking";
    if (url.includes("explore"))
      return "explore";
    if (url.includes("schedule"))
      return "schedule";
    return "";
  }
  ngOnInit() {
    this.checking.set(true);
    this.subscription("building", this._org.active_building.subscribe(() => this.timeout("check_route", () => this._checkRoute())));
    this.routes = [
      {
        id: "home",
        route: this.default_page,
        icon: "home",
        name: i18n("APP.WORKPLACE.MENU_HOME")
      },
      {
        id: "spaces",
        route: "/book/meeting",
        icon: "meeting_room",
        name: i18n("APP.WORKPLACE.MENU_ROOMS")
      },
      {
        id: "desks",
        route: "/book/desk",
        icon: "desk",
        name: i18n("APP.WORKPLACE.MENU_DESKS")
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
        id: "visitor-invite",
        route: "/book/visitor",
        icon: "person",
        name: i18n("APP.WORKPLACE.MENU_VISITORS")
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
      }
    ];
  }
  ngAfterViewInit() {
    this.timeout("check_menu", () => this.checkMenu(), 300);
  }
  _checkRoute() {
    this.features.set(this.available_features);
    if (this.type && this.type !== "home" && !this.features().includes(this.type)) {
      this._router.navigate(["/"]);
    }
    this.timeout("check_menu", () => this.checkMenu(), 300);
  }
  checkMenu() {
    const menu_width = this.menu().nativeElement?.offsetWidth || 0;
    const container_width = this._element.nativeElement.parentElement.offsetWidth;
    this.checking.set(false);
    if (menu_width > container_width && !this.hide_text()) {
      this.hide_text.set(true);
      this.timeout("check_menu", () => this.checkMenu(), 20);
      this.checking.set(true);
      this.previous_size = container_width;
      return;
    }
    if (this.hide_text())
      this.mobile_menu.set(menu_width > container_width);
    if (container_width > this.previous_size && this.hide_text()) {
      this.hide_text.set(false);
      this.timeout("check_menu", () => this.checkMenu(), 20);
      this.checking.set(true);
    }
    this.previous_size = container_width;
  }
};
_TopMenuComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TopMenuComponent_BaseFactory;
  return function TopMenuComponent_Factory(__ngFactoryType__) {
    return (\u0275TopMenuComponent_BaseFactory || (\u0275TopMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TopMenuComponent)))(__ngFactoryType__ || _TopMenuComponent);
  };
})();
_TopMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopMenuComponent, selectors: [["top-menu"]], viewQuery: function TopMenuComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.menu, _c018, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 2, consts: [["menu", "matMenu"], ["menuContainer", ""], ["menu", "", 1, "flex", "h-full", "w-full", "min-w-full", "items-center", "justify-center", "overflow-hidden", "text-base-content", 3, "opacity-0", "!h-0"], [1, "absolute", "inset-y-0", "-right-16", "left-0", "flex", "items-center", "justify-end"], ["menu", "", 1, "flex", "h-full", "w-full", "min-w-full", "items-center", "justify-center", "overflow-hidden", "text-base-content", 3, "resize"], ["matRipple", "", "routerLinkActive", "text-secondary active", "matTooltipPosition", "below", 1, "relative", "flex", "items-center", "justify-center", "space-x-2", "px-8", 3, "name", "routerLink", "matTooltip"], ["filled", "", 1, "text-xl"], ["outline", "", "className", "material-symbols-outlined", 1, "!m-0", "text-xl"], [1, "truncate"], ["bar", "", 1, "absolute", "inset-x-0", "bottom-0", "h-0.5", "bg-secondary"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "routerLinkActive", "text-secondary active", 3, "routerLink"], [1, "flex", "items-center", "space-x-2"], [1, "truncate", "pr-4"]], template: function TopMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TopMenuComponent_Conditional_0_Template, 4, 4, "div", 2);
    \u0275\u0275conditionalCreate(1, TopMenuComponent_Conditional_1_Template, 4, 1, "div", 3);
    \u0275\u0275elementStart(2, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(4, TopMenuComponent_For_5_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.routes.length > 1 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.mobile_menu() ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.routes);
  }
}, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent, RouterModule, RouterLink, RouterLinkActive, MatTooltipModule, MatTooltip], styles: ["\n\n[menu][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  flex-shrink: 1;\n}\n[bar][_ngcontent-%COMP%] {\n  display: none;\n}\n.active[_ngcontent-%COMP%]    > [bar][_ngcontent-%COMP%] {\n  display: block;\n}\na[_ngcontent-%COMP%]:not([mat-menu-item]):not(.active) {\n  opacity: 0.6;\n}\na[_ngcontent-%COMP%]:not([mat-menu-item]):not(.active):hover {\n  border-radius: 0.5rem;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  height: 3rem;\n  background-color: var(--base-200);\n  opacity: 0.4;\n}\na[_ngcontent-%COMP%]:not(.active)   [filled][_ngcontent-%COMP%], \na.active[_ngcontent-%COMP%]   [outline][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=top-menu.component.css.map */"] });
var TopMenuComponent = _TopMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopMenuComponent, [{
    type: Component,
    args: [{ selector: "top-menu", template: `
        @if (routes.length > 1) {
            <div
                #menuContainer
                menu
                [class.opacity-0]="mobile_menu() || checking()"
                [class.!h-0]="mobile_menu()"
                (window:resize)="checkMenu()"
                class="flex h-full w-full min-w-full items-center justify-center overflow-hidden text-base-content"
            >
                @for (route of routes; track route) {
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
                            <icon filled class="text-xl">{{ route.icon }}</icon>
                            <icon
                                outline
                                className="material-symbols-outlined"
                                class="!m-0 text-xl"
                            >
                                {{ route.icon }}
                            </icon>
                            @if (!hide_text()) {
                                <span class="truncate">{{ route.name }}</span>
                            }
                            <div
                                bar
                                class="absolute inset-x-0 bottom-0 h-0.5 bg-secondary"
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
            @for (route of routes; track route) {
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
                                class="!m-0 text-xl"
                            >
                                {{ route.icon }}
                            </icon>
                            <div class="truncate pr-4">{{ route.name }}</div>
                        </div>
                    </a>
                }
            }
        </mat-menu>
    `, imports: [MatMenuModule, IconComponent, RouterModule, MatTooltipModule], styles: ["/* angular:styles/component:css;c35170c29e1377a72fa8410a393c45a435aaefd61b2e0ebeb5b003a09e4c8d5d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/top-menu.component.ts */\n[menu] > * {\n  height: 3.5rem;\n  flex-shrink: 1;\n}\n[bar] {\n  display: none;\n}\n.active > [bar] {\n  display: block;\n}\na:not([mat-menu-item]):not(.active) {\n  opacity: 0.6;\n}\na:not([mat-menu-item]):not(.active):hover {\n  border-radius: 0.5rem;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  height: 3rem;\n  background-color: var(--base-200);\n  opacity: 0.4;\n}\na:not(.active) [filled],\na.active [outline] {\n  display: none;\n}\n/*# sourceMappingURL=top-menu.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopMenuComponent, { className: "TopMenuComponent", filePath: "apps/workplace/src/app/components/top-menu.component.ts", lineNumber: 135 });
})();

// apps/workplace/src/app/components/topbar.component.ts
var _c019 = () => ["/-"];
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
var _TopbarComponent = class _TopbarComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.user_controls = UserControlsComponent;
  }
  get logo() {
    return (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {};
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
  get user() {
    return currentUser();
  }
  get features() {
    return this._settings.get("app.features") || EMPTY3;
  }
};
_TopbarComponent.\u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TopbarComponent)();
};
_TopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["topbar"]], decls: 11, vars: 8, consts: [["topbar", "", 1, "relative", "z-50", "flex", "h-[3.5rem]", "items-center", "justify-between", "border-b", "border-base-200", "bg-base-100", "shadow"], ["name", "nav-logo", 1, "flex", "h-full", "w-48", "items-center", "p-2", 3, "routerLink"], ["auth", "", "alt", "Logo", 1, "h-10", "sm:block", 3, "source"], [1, "relative", "hidden", "h-full", "w-1/2", "flex-1", "items-center", "justify-center", "sm:flex"], [1, "flex", "w-48", "items-center", "justify-end"], ["icon", "", "matRipple", "", "avatar", "", "name", "user-controls", "customTooltip", "", 1, "mr-2", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-base-200", 3, "content"], [1, "text-2xl"]], template: function TopbarComponent_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "button", 5)(9, "icon", 6);
    \u0275\u0275text(10, "person");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c019));
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx.title);
    \u0275\u0275property("source", (ctx.logo == null ? null : ctx.logo.src) || ctx.logo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.title ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.search ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx.user_controls);
  }
}, dependencies: [
  IconComponent,
  MatRippleModule,
  MatRipple,
  CustomTooltipComponent,
  GlobalSearchComponent,
  TopMenuComponent,
  AuthenticatedImageDirective,
  RouterModule,
  RouterLink
], styles: ["\n\n.flex-3[_ngcontent-%COMP%] {\n  flex: 3 3 0%;\n}\n/*# sourceMappingURL=topbar.component.css.map */"] });
var TopbarComponent = _TopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarComponent, [{
    type: Component,
    args: [{ selector: "topbar", template: `
        <div
            topbar
            class="relative z-50 flex h-[3.5rem] items-center justify-between border-b border-base-200 bg-base-100 shadow"
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
                    [source]="logo?.src || logo"
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
                    class="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                    customTooltip
                    [content]="user_controls"
                >
                    <icon class="text-2xl">person</icon>
                </button>
            </div>
        </div>
    `, imports: [
      IconComponent,
      MatRippleModule,
      CustomTooltipComponent,
      GlobalSearchComponent,
      TopMenuComponent,
      AuthenticatedImageDirective,
      RouterModule
    ], styles: ["/* angular:styles/component:css;a44fe1a1620c24b3fe7fa535fb11a46fbe2a82fc133187e049f6c240e05155eb;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/components/topbar.component.ts */\n.flex-3 {\n  flex: 3 3 0%;\n}\n/*# sourceMappingURL=topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "apps/workplace/src/app/components/topbar.component.ts", lineNumber: 83 });
})();

export {
  FooterMenuComponent,
  DeskQuestionsModalComponent,
  BookingFormService,
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatAutocompleteModule,
  FindAvailabilityModalComponent,
  NewUserModalComponent,
  CounterComponent,
  UserSearchFieldComponent,
  ExploreDeskInfoComponent,
  DEFAULT_COLOURS,
  ExploreSpacesService,
  LockerGridComponent,
  ParkingService,
  ExploreParkingInfoComponent,
  ExploreMapViewComponent,
  TopbarComponent
};
//# sourceMappingURL=chunk-ISUINKPX.js.map
