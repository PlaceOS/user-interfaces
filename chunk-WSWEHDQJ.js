import {
  BookingFormService,
  DeskQuestionsModalComponent,
  ExploreDeskInfoComponent,
  ExploreParkingInfoComponent,
  LockerGridComponent,
  ParkingService
} from "./chunk-UPJELUYD.js";
import {
  UserListFieldComponent
} from "./chunk-65SFGYP5.js";
import {
  GroupEventDetailsModalComponent,
  MatBottomSheet,
  MatBottomSheetRef,
  StatusPillComponent
} from "./chunk-WJ4HCFQX.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  CommonModule,
  Component,
  DEFAULT_COLOURS,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  DeskHeightPresetsComponent,
  DurationFieldComponent,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  ImageCarouselComponent,
  Injectable,
  InteractiveMapComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MapLocateModalComponent,
  MapPinComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatCheckboxModule,
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
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSlider,
  MatSliderModule,
  MatSliderThumb,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  RouterLink,
  RouterModule,
  SafePipe,
  SanitizePipe,
  SettingsService,
  SettingsToggleComponent,
  TimeFieldComponent,
  TranslatePipe,
  User,
  UserPipe,
  UserSearchFieldComponent,
  Validators,
  __spreadProps,
  __spreadValues,
  addDays,
  addMinutes,
  checkinBooking,
  checkinBookingInstance,
  combineLatest,
  computed,
  currentUser,
  endOfDay,
  first,
  firstTruthyValueFrom,
  format,
  formatDuration,
  formatRecurrence,
  forwardRef,
  fromBookingRecurrence,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getInvalidFields,
  getUnixTime,
  i18n,
  inject,
  input,
  isMobileSafari,
  isSameDay,
  lastValueFrom,
  loadLockerBanks,
  loadLockers,
  map,
  model,
  nextValueFrom,
  notifyError,
  notifySuccess,
  output,
  queryBookings,
  randomString,
  saveBooking,
  setClassMetadata,
  settingSignal,
  signal,
  startOfDay,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U2QHPUHR.js";

// libs/bookings/src/lib/visitor-invite-form.component.ts
var _c0 = () => ({ standalone: true });
function VisitorInviteFormComponent_Conditional_0_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r4 = ctx.$implicit;
    \u0275\u0275property("value", bld_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r4.display_name || bld_r4.name, " ");
  }
}
function VisitorInviteFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15)(7, "mat-select", 18);
    \u0275\u0275listener("ngModelChange", function VisitorInviteFormComponent_Conditional_0_Conditional_1_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ zones: [$event] }));
    });
    \u0275\u0275repeaterCreate(8, VisitorInviteFormComponent_Conditional_0_Conditional_1_For_9_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.form.value.zones[0])("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 5, ctx_r2.buildings));
  }
}
function VisitorInviteFormComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function VisitorInviteFormComponent_Conditional_0_Conditional_26_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275listener("click", function VisitorInviteFormComponent_Conditional_0_Conditional_26_For_12_Template_mat_option_click_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVisitor(item_r7));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("value", item_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r7.email, " ", item_r7.organisation ? "| " + item_r7.organisation : "", " ");
  }
}
function VisitorInviteFormComponent_Conditional_0_Conditional_26_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275listener("click", function VisitorInviteFormComponent_Conditional_0_Conditional_26_For_28_Template_mat_option_click_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVisitor(item_r9));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("value", item_r9.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r9.email, " ", item_r9.organisation ? "| " + item_r9.organisation : "", " ");
  }
}
function VisitorInviteFormComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15)(7, "input", 23);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("focus", function VisitorInviteFormComponent_Conditional_0_Conditional_26_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.search_term.set(ctx_r2.form.value.asset_name));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(11, VisitorInviteFormComponent_Conditional_0_Conditional_26_For_12_Template, 6, 4, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 3)(14, "label", 24);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 15)(20, "input", 25);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("focus", function VisitorInviteFormComponent_Conditional_0_Conditional_26_Template_input_focus_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.search_term.set(ctx_r2.form.value.asset_id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-autocomplete", null, 1);
    \u0275\u0275repeaterCreate(27, VisitorInviteFormComponent_Conditional_0_Conditional_26_For_28_Template, 6, 4, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 3)(30, "label", 22);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 15);
    \u0275\u0275element(34, "input", 26);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const name_auto_r10 = \u0275\u0275reference(10);
    const email_auto_r11 = \u0275\u0275reference(26);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "BOOKINGS.VISITOR_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 11, "BOOKINGS.VISITOR_NAME_PLACEHOLDER"))("matAutocomplete", name_auto_r10);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.filtered_visitors());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "BOOKINGS.VISITOR_EMAIL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 15, "BOOKINGS.VISITOR_EMAIL_PLACEHOLDER"))("matAutocomplete", email_auto_r11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 17, "FORM.EMAIL_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.filtered_visitors());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 19, "BOOKINGS.VISITOR_COMPANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 21, "BOOKINGS.VISITOR_COMPANY"));
  }
}
function VisitorInviteFormComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-list-field", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOOKINGS.VISITOR_LIST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("guests_only", true);
  }
}
function VisitorInviteFormComponent_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "BOOKINGS.VISITOR_PASS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "BOOKINGS.VISITOR_PASS_PLACEHOLDER"));
  }
}
function VisitorInviteFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275conditionalCreate(1, VisitorInviteFormComponent_Conditional_0_Conditional_1_Template, 11, 8, "div", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 3)(4, "label", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "a-date-field", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "label", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a-time-field", 9);
    \u0275\u0275listener("ngModelChange", function VisitorInviteFormComponent_Conditional_0_Template_a_time_field_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 7)(19, "label", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "a-duration-field", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, VisitorInviteFormComponent_Conditional_0_Conditional_25_Template, 7, 3, "div", 12);
    \u0275\u0275conditionalCreate(26, VisitorInviteFormComponent_Conditional_0_Conditional_26_Template, 36, 23)(27, VisitorInviteFormComponent_Conditional_0_Conditional_27_Template, 7, 5, "div", 13);
    \u0275\u0275elementStart(28, "div", 3)(29, "label", 14);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 15);
    \u0275\u0275element(33, "input", 16);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, VisitorInviteFormComponent_Conditional_0_Conditional_35_Template, 7, 6, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(2, 17, ctx_r2.buildings)) == null ? null : tmp_2_0.length) > 1 ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 19, "FORM.DATE"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 21, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(29, _c0))("disabled", ctx_r2.form.value.all_day)("use_24hr", ctx_r2.use_24hr());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 23, "FORM.TIME_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r2.form.value.date)("max", ctx_r2.max_duration())("use_24hr", ctx_r2.use_24hr());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_book_for_others() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.multiple() ? 26 : 27);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 25, "BOOKINGS.VISITOR_REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 27, "BOOKINGS.VISITOR_REASON_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.allow_pass_number() ? 35 : -1);
  }
}
var _VisitorInviteFormComponent = class _VisitorInviteFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._service = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.date = input(Date.now());
    this.confirm = input(0);
    this.done = output();
    this.search_term = signal("");
    this.visitors = signal([]);
    this.filtered_visitors = computed(() => {
      const s = this.search_term().toLowerCase();
      return this.visitors().filter(({ email, name, company }) => email.toLowerCase().includes(s) || name.toLowerCase().includes(s) || company.toLowerCase().includes(s));
    });
    this.allow_pass_number = settingSignal("visitors.allow_pass_number", false);
    this.can_book_for_others = settingSignal("bookings.can_book_for_others", false);
    this.max_duration = computed(() => Math.min(settingSignal("visitors.max_duration", 180)(), settingSignal("bookings.max_duration", 180)()));
    this.multiple = settingSignal("bookings.multiple_visitors", false);
    this.use_24hr = settingSignal("use_24_hour_time", false);
    this.buildings = this._org.active_buildings;
    this.building = computed(() => settingSignal("use_region", false)() ? this._org.region : this._org.building);
  }
  get form() {
    return this._service.form;
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    this._service.clearOldState();
    await this.initFormZone();
    this.form.get("asset_id").setValidators([Validators.required, Validators.email]);
    const visitors = this._settings.get("visitor-invitees") || [];
    this.visitors.update((list) => {
      for (const item of visitors) {
        const [email, name, company] = item.split("|");
        list.push({ email, name, company });
      }
      return list;
    });
    this.search_term.set("");
    this.subscription("email", this.form.get("asset_id").valueChanges.subscribe((_) => this.search_term.set(_)));
    this.subscription("name", this.form.get("asset_name").valueChanges.subscribe((_) => this.search_term.set(_)));
    if (this.multiple())
      this.form.patchValue({ asset_id: "multiple@place.tech" });
    this.form.patchValue({ title: "Visit" });
  }
  ngOnChanges(changes) {
    if (changes.date && this.date()) {
      this.form.patchValue({ date: this.date() });
    }
    if (changes.confirm && this.confirm() > 0) {
      this.sendInvite();
    }
  }
  setVisitor(item) {
    this.form.patchValue({
      asset_id: item.email,
      asset_name: item.name,
      company: item.company,
      phone: item.phone
    });
  }
  async sendInvite() {
    this.form.markAllAsTouched();
    if (!this.form.valid || this.multiple() && !this.form.value.assets.length) {
      return notifyError(`Some fields are invalid. [${getInvalidFields(this.form).join(", ") || "visitors"}]`);
    }
    if (!this.form.value.user_email || !this.can_book_for_others) {
      this.form.patchValue({ user: currentUser() });
    }
    this.form.patchValue({
      description: this.form.value.description || this.form.value.title
    });
    const { asset_id, asset_name, company, assets } = this.form.value;
    const visitor_details = `${asset_id}|${asset_name}|${company}`;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", [
      ...old_visitors.filter((_) => !_.includes(asset_id)),
      visitor_details
    ]);
    await (this.multiple() ? this._bookForMany() : this._bookForOne());
    notifySuccess(i18n(this.multiple() ? "BOOKINGS.VISITOR_SENT_MULTIPLE" : "BOOKINGS.VISITOR_SENT_SINGLE", { name: asset_name, count: this.form.value.attendees?.length }));
    this.done.emit(this.form.value.attendees?.length || 1);
  }
  async initFormZone() {
    await firstTruthyValueFrom(this._org.initialised);
    this._service.loadForm();
    this._service.setOptions({ type: "visitor" });
    if (!this.form.value.id)
      this._service.newForm("visitor");
    this.form.patchValue({
      booking_type: "visitor",
      zones: [this._org.building?.id]
    });
    if (this.multiple())
      this.form.patchValue({ asset_id: "multiple@place.tech" });
  }
  async _bookForOne() {
    const value = this.form.value;
    this.form.patchValue({
      name: value.asset_name,
      attendees: [
        new User({
          name: value.asset_name,
          email: value.asset_id,
          organisation: value.company,
          phone: value.phone
        })
      ]
    });
    await this._service.postForm().catch((e) => {
      notifyError(e);
      throw e;
    });
  }
  async _bookForMany() {
    const group = `grp-${randomString(8)}`;
    const value = this.form.value;
    const assets = value.assets;
    for (const user of assets) {
      if (!user.email)
        continue;
      this.form.patchValue(__spreadProps(__spreadValues({}, value), {
        booking_type: "visitor",
        asset_id: user.email,
        asset_name: user.name,
        user: currentUser(),
        description: group,
        name: user.name,
        assets: [],
        attendees: [
          new User({
            name: user.name,
            email: user.email,
            organisation: user.company || user.organisation,
            phone: user.phone
          })
        ]
      }));
      await this._service.postForm().catch((e) => {
        notifyError(e);
        throw e;
      });
    }
  }
};
_VisitorInviteFormComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275VisitorInviteFormComponent_BaseFactory;
  return function VisitorInviteFormComponent_Factory(__ngFactoryType__) {
    return (\u0275VisitorInviteFormComponent_BaseFactory || (\u0275VisitorInviteFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorInviteFormComponent)))(__ngFactoryType__ || _VisitorInviteFormComponent);
  };
})();
_VisitorInviteFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorInviteFormComponent, selectors: [["visitor-invite-form"]], inputs: { date: [1, "date"], confirm: [1, "confirm"] }, outputs: { done: "done" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["name_auto", "matAutocomplete"], ["email_auto", "matAutocomplete"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "date"], ["name", "date", "formControlName", "date"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-1/3", "flex-1", "flex-col"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"], [1, "flex", "w-full", "flex-col"], [1, "flex", "flex-col", 3, "formGroup"], ["for", "reason"], ["appearance", "outline"], ["name", "reason", "matInput", "", "formControlName", "title", 3, "placeholder"], ["for", "building"], ["name", "building", "placeholder", "Select building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["for", "host"], ["name", "host", "formControlName", "user", 1, "mb-4"], ["for", "visitor-name"], ["matInput", "", "name", "visitor-name", "formControlName", "asset_name", 3, "focus", "placeholder", "matAutocomplete"], ["for", "visitor-email"], ["matInput", "", "name", "visitor-email", "type", "email", "formControlName", "asset_id", 3, "focus", "placeholder", "matAutocomplete"], ["matInput", "", "name", "company", "formControlName", "company", 3, "placeholder"], [3, "click", "value"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-60"], ["formControlName", "assets", 3, "guests_only"], ["for", "pass"], ["name", "pass", "matInput", "", "formControlName", "pass_number", 3, "placeholder"]], template: function VisitorInviteFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VisitorInviteFormComponent_Conditional_0_Template, 36, 30, "form", 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.form ? 0 : -1);
  }
}, dependencies: [
  AsyncPipe,
  TranslatePipe,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  UserListFieldComponent,
  MatAutocompleteModule,
  MatAutocomplete,
  MatAutocompleteTrigger,
  UserSearchFieldComponent,
  DateFieldComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel
], encapsulation: 2 });
var VisitorInviteFormComponent = _VisitorInviteFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorInviteFormComponent, [{
    type: Component,
    args: [{ selector: "visitor-invite-form", template: `
        @if (form) {
            <form [formGroup]="form">
                @if ((buildings | async)?.length > 1) {
                    <div class="flex flex-col">
                        <label for="building">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [ngModel]="form.value.zones[0]"
                                (ngModelChange)="
                                    form.patchValue({
                                        zones: [$event],
                                    })
                                "
                                [ngModelOptions]="{
                                    standalone: true,
                                }"
                                name="building"
                                placeholder="Select building"
                            >
                                @for (bld of buildings | async; track bld) {
                                    <mat-option [value]="bld.id">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="date">
                        {{ 'FORM.DATE' | translate }}<span>*</span>
                    </label>
                    <a-date-field
                        name="date"
                        formControlName="date"
                    ></a-date-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex w-1/3 flex-1 flex-col">
                        <label for="start-time">
                            {{ 'FORM.TIME_START' | translate }}
                            <span>*</span>
                        </label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [disabled]="form.value.all_day"
                            [use_24hr]="use_24hr()"
                        ></a-time-field>
                    </div>
                    <div class="flex w-1/3 flex-1 flex-col">
                        <label for="end-time">
                            {{ 'FORM.TIME_END' | translate }}
                            <span>*</span>
                        </label>
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form.value.date"
                            [max]="max_duration()"
                            [use_24hr]="use_24hr()"
                        ></a-duration-field>
                    </div>
                </div>
                @if (can_book_for_others()) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            name="host"
                            class="mb-4"
                            formControlName="user"
                        ></a-user-search-field>
                    </div>
                }
                @if (!multiple()) {
                    <div class="flex flex-col">
                        <label for="visitor-name">
                            {{ 'BOOKINGS.VISITOR_NAME' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="visitor-name"
                                formControlName="asset_name"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                        | translate
                                "
                                (focus)="search_term.set(form.value.asset_name)"
                                [matAutocomplete]="name_auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #name_auto="matAutocomplete">
                            @for (item of filtered_visitors(); track item) {
                                <mat-option
                                    [value]="item.name"
                                    (click)="setVisitor(item)"
                                >
                                    <div class="flex flex-col leading-tight">
                                        <div>{{ item.name }}</div>
                                        <div class="text-xs opacity-60">
                                            {{ item.email }}
                                            {{
                                                item.organisation
                                                    ? '| ' + item.organisation
                                                    : ''
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                    <div class="flex flex-col">
                        <label for="visitor-email">
                            {{ 'BOOKINGS.VISITOR_EMAIL' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="visitor-email"
                                type="email"
                                formControlName="asset_id"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                        | translate
                                "
                                (focus)="search_term.set(form.value.asset_id)"
                                [matAutocomplete]="email_auto"
                            />
                            <mat-error>
                                {{ 'FORM.EMAIL_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                        <mat-autocomplete #email_auto="matAutocomplete">
                            @for (item of filtered_visitors(); track item) {
                                <mat-option
                                    [value]="item.email"
                                    (click)="setVisitor(item)"
                                >
                                    <div class="flex flex-col leading-tight">
                                        <div>{{ item.name }}</div>
                                        <div class="text-xs opacity-60">
                                            {{ item.email }}
                                            {{
                                                item.organisation
                                                    ? '| ' + item.organisation
                                                    : ''
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                    <div class="flex flex-col">
                        <label for="visitor-name">{{
                            'BOOKINGS.VISITOR_COMPANY' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="company"
                                formControlName="company"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_COMPANY' | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                } @else {
                    <div class="flex flex-col" [formGroup]="form">
                        <label for="visitor-name">
                            {{ 'BOOKINGS.VISITOR_LIST' | translate }}
                            <span>*</span>
                        </label>
                        <a-user-list-field
                            formControlName="assets"
                            [guests_only]="true"
                        ></a-user-list-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="reason">{{
                        'BOOKINGS.VISITOR_REASON' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            name="reason"
                            matInput
                            formControlName="title"
                            [placeholder]="
                                'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                    | translate
                            "
                        />
                    </mat-form-field>
                </div>
                @if (allow_pass_number()) {
                    <div class="flex flex-col">
                        <label for="pass">{{
                            'BOOKINGS.VISITOR_PASS' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                name="pass"
                                matInput
                                formControlName="pass_number"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `, imports: [
      AsyncPipe,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      UserListFieldComponent,
      MatAutocompleteModule,
      UserSearchFieldComponent,
      DateFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      ReactiveFormsModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorInviteFormComponent, { className: "VisitorInviteFormComponent", filePath: "libs/bookings/src/lib/visitor-invite-form.component.ts", lineNumber: 287 });
})();

// libs/bookings/src/lib/visitor-invite-success.component.ts
var _c02 = (a0, a1) => ({ name: a0, count: a1 });
var _c1 = (a0, a1, a2) => ({ location: a0, date: a1, time: a2 });
function VisitorInviteSuccessComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "a", 8);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 9);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 10);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 11);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 12);
    \u0275\u0275pipe(14, "sanitize");
    \u0275\u0275elementStart(15, "icon", 13);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r0.outlook_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r0.google_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r0.ical_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
var _VisitorInviteSuccessComponent = class _VisitorInviteSuccessComponent {
  constructor() {
    this._form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.last_count = input(1);
    this.done = output();
    this.another = output();
    this.multiple = settingSignal("bookings.multiple_visitors", false);
    this.show_links = settingSignal("visitors.show_calendar_links", false);
    this.last_success = signal(null);
    this.building = computed(() => !this.last_success() ? this._org.building : this._org.buildings.find((b) => this.last_success().zones.includes(b.id)));
    this.cal_event = computed(() => {
      if (!this.last_success())
        return null;
      const event = __spreadProps(__spreadValues({}, this.last_success()), {
        host: this.last_success().user_email,
        organiser: {
          name: this.last_success().user_name,
          email: this.last_success().user_email
        },
        attendees: this.last_success().attendees.map((_) => _.email),
        body: this.last_success().description,
        location: this._org.building.display_name || this._org.building.name
      });
      event.attendees.push(this.last_success().asset_id);
      return event;
    });
    this.outlook_link = computed(() => this.cal_event() ? generateMicrosoftCalendarLink(this.cal_event()) : "");
    this.google_link = computed(() => this.cal_event() ? generateGoogleCalendarLink(this.cal_event()) : "");
    this.ical_link = computed(() => this.cal_event() ? generateCalendarFileLink(this.cal_event()) : "");
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnInit() {
    this.last_success.set(this._form.last_success);
  }
};
_VisitorInviteSuccessComponent.\u0275fac = function VisitorInviteSuccessComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorInviteSuccessComponent)();
};
_VisitorInviteSuccessComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorInviteSuccessComponent, selectors: [["visitor-invite-success"]], inputs: { last_count: [1, "last_count"] }, outputs: { done: "done", another: "another" }, decls: 20, vars: 28, consts: [["sent", "", 1, "bg-base-100", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "text-center"], [1, "z-0", "m-8", "h-1/2", "w-full", "max-w-lg", "flex-1", "space-y-2", "overflow-auto"], [1, "text-3xl"], ["src", "assets/icons/sent.svg", 1, "mx-auto"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "z-10", "w-full", "border-t", "p-2"], [1, "mx-auto", "flex", "w-full", "max-w-lg", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], [1, "text-xl"]], template: function VisitorInviteSuccessComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "img", 3);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, VisitorInviteSuccessComponent_Conditional_11_Template, 20, 21, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "button", 7);
    \u0275\u0275listener("click", function VisitorInviteSuccessComponent_Template_button_click_14_listener() {
      return ctx.done.emit();
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 7);
    \u0275\u0275listener("click", function VisitorInviteSuccessComponent_Template_button_click_17_listener() {
      return ctx.another.emit();
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, ctx.multiple() ? "BOOKINGS.VISITOR_SENT_MULTIPLE" : "BOOKINGS.VISITOR_SENT_SINGLE", \u0275\u0275pureFunction2(21, _c02, ((tmp_0_0 = ctx.last_success()) == null ? null : tmp_0_0.asset_name) || ((tmp_0_0 = ctx.last_success()) == null ? null : tmp_0_0.asset_id), ctx.last_count() || 1)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 14, "BOOKINGS.VISITOR_SENT_MSG", \u0275\u0275pureFunction3(24, _c1, ((tmp_1_0 = ctx.building()) == null ? null : tmp_1_0.display_name) || ((tmp_1_0 = ctx.building()) == null ? null : tmp_1_0.name), \u0275\u0275pipeBind2(8, 8, (tmp_1_0 = ctx.last_success()) == null ? null : tmp_1_0.date, "mediumDate"), \u0275\u0275pipeBind2(9, 11, (tmp_1_0 = ctx.last_success()) == null ? null : tmp_1_0.date, ctx.time_format))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.show_links() ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "BOOKINGS.VISITOR_BOOK_ANOTHER"), " ");
  }
}, dependencies: [
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe,
  DatePipe,
  SanitizePipe
], encapsulation: 2 });
var VisitorInviteSuccessComponent = _VisitorInviteSuccessComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorInviteSuccessComponent, [{
    type: Component,
    args: [{ selector: "visitor-invite-success", template: `
        <div
            sent
            class="bg-base-100 flex h-full w-full flex-col items-center justify-center text-center"
        >
            <div
                class="z-0 m-8 h-1/2 w-full max-w-lg flex-1 space-y-2 overflow-auto"
            >
                <h2 class="text-3xl">
                    {{
                        (multiple()
                            ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                            : 'BOOKINGS.VISITOR_SENT_SINGLE'
                        )
                            | translate
                                : {
                                      name:
                                          last_success()?.asset_name ||
                                          last_success()?.asset_id,
                                      count: last_count() || 1,
                                  }
                    }}
                </h2>
                <img class="mx-auto" src="assets/icons/sent.svg" />
                <p>
                    {{
                        'BOOKINGS.VISITOR_SENT_MSG'
                            | translate
                                : {
                                      location:
                                          building()?.display_name ||
                                          building()?.name,
                                      date:
                                          last_success()?.date
                                          | date: 'mediumDate',
                                      time:
                                          last_success()?.date
                                          | date: time_format,
                                  }
                    }}
                </p>
                @if (show_links()) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="desk-outlook-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="outlook_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/outlook.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_OUTLOOK' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="desk-google-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="google_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/gcal.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_GOOGLE' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="desk-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="ical_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <icon class="text-xl">download</icon>
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </div>
            <div class="border-base-200 bg-base-100 z-10 w-full border-t p-2">
                <div
                    class="mx-auto flex w-full max-w-lg items-center space-x-2"
                >
                    <button btn matRipple class="flex-1" (click)="done.emit()">
                        {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        (click)="another.emit()"
                    >
                        {{ 'BOOKINGS.VISITOR_BOOK_ANOTHER' | translate }}
                    </button>
                </div>
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      DatePipe,
      SanitizePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorInviteSuccessComponent, { className: "VisitorInviteSuccessComponent", filePath: "libs/bookings/src/lib/visitor-invite-success.component.ts", lineNumber: 149 });
})();

// libs/bookings/src/lib/desk-settings-modal.component.ts
function DeskSettingsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275text(2, "Desk Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4, " Set your desk height for the best experience ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "label");
    \u0275\u0275text(7, "Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function DeskSettingsModalComponent_Conditional_0_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preset, $event) || (ctx_r1.preset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DeskSettingsModalComponent_Conditional_0_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPreset($event));
    });
    \u0275\u0275elementStart(11, "mat-option", 8);
    \u0275\u0275text(12, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 9);
    \u0275\u0275text(14, "Standing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 10);
    \u0275\u0275text(16, "Seated");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 11);
    \u0275\u0275listener("click", function DeskSettingsModalComponent_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit_presets = true);
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21, "Current Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12)(23, "mat-slider", 13)(24, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function DeskSettingsModalComponent_Conditional_0_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.height, $event) || (ctx_r1.height = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DeskSettingsModalComponent_Conditional_0_Template_input_ngModelChange_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePreset(ctx_r1.height));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 16);
    \u0275\u0275listener("click", function DeskSettingsModalComponent_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeskHeight());
    });
    \u0275\u0275text(28, " Apply Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 17)(30, "icon");
    \u0275\u0275text(31, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preset);
    \u0275\u0275advance(13);
    \u0275\u0275property("displayWith", ctx_r1.formatLabel);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.height);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.height.toFixed(1), "cm ");
  }
}
function DeskSettingsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-height-presets", 18);
    \u0275\u0275listener("close", function DeskSettingsModalComponent_Conditional_1_Template_desk_height_presets_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit_presets = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show_close", true);
  }
}
var _DeskSettingsModalComponent = class _DeskSettingsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog_ref = inject(MatDialogRef);
    this.desk_id = this._data.id;
    this.edit_presets = false;
    this.height = 71;
  }
  ngOnInit() {
    const sitting_height = this._settings.get("desk_sitting_height");
    const standing_height = this._settings.get("desk_standing_height");
    if (!sitting_height && !standing_height) {
      this.edit_presets = true;
    }
    const last_height = parseInt(localStorage.getItem("PLACEOS.last_desk_height"), 10);
    this.height = last_height || sitting_height || 71;
    if (this.height === sitting_height) {
      this.preset = "sitting";
    } else if (this.height === standing_height) {
      this.preset = "standing";
    }
  }
  updatePreset(new_height) {
    const sitting_height = this._settings.get("desk_sitting_height") || 71;
    const standing_height = this._settings.get("desk_standing_height") || 102;
    if (new_height === sitting_height) {
      this.preset = "sitting";
    } else if (new_height === standing_height) {
      this.preset = "standing";
    } else {
      this.preset = null;
    }
  }
  setPreset(value) {
    switch (value) {
      case "standing":
        this.height = this._settings.get("desk_standing_height") || 102;
        break;
      case "sitting":
        this.height = this._settings.get("desk_sitting_height") || 71;
        break;
      default:
        this.height = 70;
        break;
    }
  }
  async setDeskHeight() {
    const mod = this._org.module("desks", "DeskControl");
    localStorage.setItem("PLACEOS.last_desk_height", `${this.height}`);
    if (!mod)
      return this._dialog_ref.close();
    await mod.execute("set_desk_height", [this.desk_id, this.height]).catch((_) => {
      notifyError("Error setting desk height." + _);
      throw _;
    });
    notifySuccess("Successfully set desk height");
    this._dialog_ref.close();
  }
  formatLabel(value) {
    return `${value.toFixed(1)}cm`;
  }
};
_DeskSettingsModalComponent.\u0275fac = function DeskSettingsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskSettingsModalComponent)();
};
_DeskSettingsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSettingsModalComponent, selectors: [["desk-settings-modal"]], decls: 2, vars: 1, consts: [[1, "bg-base-100", "relative", "w-[20rem]", "rounded-sm", "p-4", "shadow-sm"], [3, "show_close"], [1, "text-lg"], [1, "mb-4", "text-xs", "opacity-60"], [1, "mt-2", "mb-4", "flex", "flex-col"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-1/2", "flex-1"], ["placeholder", "No selected preset", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "standing"], ["value", "sitting"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["min", "60", "max", "120", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "w-12", "text-right", "text-sm"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-2"], [3, "close", "show_close"]], template: function DeskSettingsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskSettingsModalComponent_Conditional_0_Template, 32, 4, "div", 0)(1, DeskSettingsModalComponent_Conditional_1_Template, 1, 1, "desk-height-presets", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.edit_presets ? 0 : 1);
  }
}, dependencies: [
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatSliderModule,
  MatSlider,
  MatSliderThumb,
  MatRippleModule,
  MatRipple,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  DeskHeightPresetsComponent
], encapsulation: 2 });
var DeskSettingsModalComponent = _DeskSettingsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskSettingsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-settings-modal", template: `
        @if (!edit_presets) {
            <div
                class="bg-base-100 relative w-[20rem] rounded-sm p-4 shadow-sm"
            >
                <div class="text-lg">Desk Height</div>
                <div class="mb-4 text-xs opacity-60">
                    Set your desk height for the best experience
                </div>
                <div class="mt-2 mb-4 flex flex-col">
                    <label>Presets</label>
                    <div class="flex items-center space-x-2 pb-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-1/2 flex-1"
                        >
                            <mat-select
                                placeholder="No selected preset"
                                [(ngModel)]="preset"
                                (ngModelChange)="setPreset($event)"
                            >
                                <mat-option value="">None</mat-option>
                                <mat-option value="standing"
                                    >Standing</mat-option
                                >
                                <mat-option value="sitting">Seated</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            (click)="edit_presets = true"
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                        >
                            <icon>edit</icon>
                        </button>
                    </div>
                    <label>Current Height</label>
                    <div class="flex items-center space-x-2">
                        <mat-slider
                            min="60"
                            max="120"
                            step="0.5"
                            discrete
                            class="flex-1"
                            [displayWith]="formatLabel"
                        >
                            <input
                                matSliderThumb
                                [(ngModel)]="height"
                                (ngModelChange)="updatePreset(height)"
                            />
                        </mat-slider>
                        <div class="w-12 text-right text-sm">
                            {{ height.toFixed(1) }}cm
                        </div>
                    </div>
                </div>
                <button btn matRipple (click)="setDeskHeight()" class="w-full">
                    Apply Settings
                </button>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    class="absolute top-2 right-2"
                >
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <desk-height-presets
                [show_close]="true"
                (close)="edit_presets = false"
            />
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSliderModule,
      MatRippleModule,
      FormsModule,
      DeskHeightPresetsComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSettingsModalComponent, { className: "DeskSettingsModalComponent", filePath: "libs/bookings/src/lib/desk-settings-modal.component.ts", lineNumber: 112 });
})();

// libs/bookings/src/lib/booking-details-modal.component.ts
var _c03 = (a0) => ({ time: a0 });
var _c12 = () => ({ disable_pan: true, disable_zoom: true });
function BookingDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function BookingDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "image-carousel", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", (tmp_2_0 = ctx_r0.booking()) == null ? null : tmp_2_0.extension_data == null ? null : tmp_2_0.extension_data.images);
  }
}
function BookingDetailsModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip);
  }
}
function BookingDetailsModalComponent_Conditional_11_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.booking().checked_in ? "done" : "arrow_back");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r0.booking().checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECK_IN"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_11_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 30);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function BookingDetailsModalComponent_Conditional_11_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_11_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleCheckedIn());
    });
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_11_Conditional_1_Conditional_0_Conditional_1_Template, 6, 4, "div", 29)(2, BookingDetailsModalComponent_Conditional_11_Conditional_1_Conditional_0_Conditional_2_Template, 1, 1, "mat-spinner", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-success", ctx_r0.booking().checked_in)("text-success-content", ctx_r0.booking().checked_in);
    \u0275\u0275property("disabled", ctx_r0.checking_in());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.checking_in() ? 1 : 2);
  }
}
function BookingDetailsModalComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BookingDetailsModalComponent_Conditional_11_Conditional_1_Conditional_0_Template, 3, 6, "button", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.booking().checked_out_at && !ctx_r0.checked_out() && !ctx_r0.auto_checkin() && (ctx_r0.booking().state === "upcoming" || ctx_r0.booking().state === "started" || ctx_r0.booking().state === "in_progress") && ctx_r0.booking().status !== "declined" ? 0 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_11_Conditional_1_Template, 1, 1);
    \u0275\u0275elementStart(2, "button", 26)(3, "icon");
    \u0275\u0275text(4, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const menu_r3 = \u0275\u0275reference(45);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.can_checkin() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r3);
  }
}
function BookingDetailsModalComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon", 32);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "user");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, \u0275\u0275pipeBind1(5, 1, ctx_r0.booking().booked_by_email))) == null ? null : tmp_2_0.name) || ctx_r0.booking().booked_by_name, " ");
  }
}
function BookingDetailsModalComponent_Conditional_39_For_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r6.quantity, " ");
  }
}
function BookingDetailsModalComponent_Conditional_39_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "button", 36);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_39_For_6_Template_button_click_1_listener() {
      const request_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.show_request[request_r5.id] = !ctx_r0.show_request[request_r5.id]);
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 40)(11, "icon", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 42);
    \u0275\u0275repeaterCreate(14, BookingDetailsModalComponent_Conditional_39_For_6_For_15_Template, 6, 2, "div", 43, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 20, "BOOKINGS.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(23, _c03, \u0275\u0275pipeBind2(5, 17, request_r5.deliver_at, "MMM d, " + ctx_r0.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", request_r5.state === "approved")("text-success-content", request_r5.state === "approved")("bg-warning", request_r5.state !== "approved" && request_r5.state !== "rejected")("text-warning-content", request_r5.state !== "approved" && request_r5.state !== "rejected")("bg-error", request_r5.state === "rejected")("text-error-content", request_r5.state === "rejected");
    \u0275\u0275property("matTooltip", request_r5.state || "Tentative");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r5.state === "approved" ? "done" : request_r5.state === "rejected" ? "close" : "schedule", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.show_request[request_r5.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r0.show_request[request_r5.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(request_r5.items);
  }
}
function BookingDetailsModalComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34);
    \u0275\u0275repeaterCreate(5, BookingDetailsModalComponent_Conditional_39_For_6_Template, 16, 25, "div", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "RESOURCE.ASSETS"), " (", ((tmp_2_0 = ctx_r0.booking().valid_assets) == null ? null : tmp_2_0.length) || 0, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.booking().valid_assets);
  }
}
function BookingDetailsModalComponent_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 47);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", (tmp_3_0 = ctx_r0.level()) == null ? null : tmp_3_0.map_id)("features", ctx_r0.features())("options", \u0275\u0275pureFunction0(3, _c12));
  }
}
function BookingDetailsModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewLocation());
    });
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_40_Conditional_1_Template, 1, 4, "interactive-map", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hide_map() ? 1 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.edit(ctx_r0.booking()));
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_EDIT"));
  }
}
function BookingDetailsModalComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setDeskHeight());
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "icon", 51);
    \u0275\u0275text(3, " height ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_SET_DESK_HEIGHT"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.booking(), false));
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "icon", 52);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_DELETE"));
  }
}
function BookingDetailsModalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.booking(), true));
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "icon", 52);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_DELETE_SERIES"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.end(ctx_r0.booking()));
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "icon", 52);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_END"));
  }
}
var _BookingDetailsModalComponent = class _BookingDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.hide_map = signal(false);
    this.checked_out = signal(false);
    this.checking_in = signal(false);
    this.booking = signal(this._data.booking);
    this.edit = this._data.edit_fn;
    this.remove = this._data.remove_fn;
    this.end = this._data.end_fn;
    this.show_request = {};
    this.features = computed(() => [
      {
        location: this.booking()?.extension_data?.map_id || this.booking()?.asset_id,
        content: MapPinComponent
      }
    ]);
    this.has_assets = computed(() => !!this.booking()?.valid_assets.length);
    this.level = computed(() => this._org.levelWithID(this.booking()?.zones || []));
    this.building = computed(() => {
      const building = this._org.buildings.find((bld) => (this.booking()?.zones || []).includes(bld.id));
      if (this._settings.get("app.use_region")) {
        const region = this._org.regions.find((region2) => (this.booking()?.zones || []).includes(region2.id) || region2.id === building?.parent_id);
        if (region)
          return region;
      }
      return building;
    });
    this.can_edit = computed(() => {
      return !this.booking().is_done && !this.booking().checked_in && this.booking().booking_type !== "visitor";
    });
    this.can_checkin = computed(() => !settingSignal(`${(this.booking()?.type || "booking") + "s"}.hide_checkin`)() && !settingSignal(`${this.booking()?.type || "bookings"}.hide_checkin`)() && !settingSignal("bookings.hide_checkin")());
    this.allow_series_delete = computed(() => {
      const is_assigned = this.booking().extension_data.is_assigned;
      const check_list = [
        `${this.booking()?.type}s`,
        this.booking()?.type,
        "bookings"
      ];
      const key = is_assigned ? `app.{v}.allow_assigned_series_delete` : `app.{v}.allow_series_delete`;
      for (const check of check_list) {
        const check_key = key.replace("{v}", check);
        const value = this._settings.get(check_key);
        if (value != null)
          return !!value;
      }
      return false;
    });
    this.auto_checkin = settingSignal(`${this.booking()?.type || "bookings"}.auto_checkin`, false);
    this.is_checked_in = computed(() => this.booking().checked_in);
    this.desk_height_enabled = computed(() => this.booking()?.type === "desk" && settingSignal("desks.height_enabled")());
    this.is_in_progress = computed(() => {
      const ts = Date.now();
      const start = this.booking()?.booking_start * 1e3;
      const end = this.booking()?.booking_end * 1e3;
      if (this.booking()?.all_day)
        return start <= ts;
      return start <= ts && ts <= end;
    });
    this.booking_status = computed(() => {
      if (this.booking()?.is_done)
        return "neutral";
      if (this.booking()?.status === "approved")
        return "success";
      if (this.booking()?.status === "declined")
        return "error";
      if (this.booking()?.status === "tentative")
        return "warning";
      return "warning";
    });
    this.period = computed(() => {
      if (this.booking()?.is_all_day)
        return i18n("COMMON.ALL_DAY");
      const start = this.booking()?.date || Date.now();
      const duration = this.booking()?.duration || 60;
      const end = addMinutes(start, duration);
      const dur = formatDuration({
        hours: Math.floor(duration / 60),
        minutes: duration % 60
      }).replace(" hour", "hr").replace(" minute", "min");
      return `${format(start, this.time_format)} - ${format(end, this.time_format)} (${dur})`;
    });
  }
  get time_format() {
    return this._settings.time_format;
  }
  async toggleCheckedIn() {
    this.checking_in.set(true);
    const bkn = this.booking();
    const promise = lastValueFrom(bkn.instance ? checkinBookingInstance(bkn.id, bkn.instance, !this.booking().checked_in) : checkinBooking(this.booking().id, !this.booking().checked_in)).catch((_) => {
      notifyError(i18n("BOOKINGS.CHECK_IN_ERROR"));
      this.checking_in.set(false);
      throw _;
    });
    await promise;
    this.booking.update((b) => {
      b.checked_in = !b.checked_in;
      return b;
    });
    this.checked_out.set(!this.booking().checked_in);
    notifySuccess(i18n(this.booking().checked_in ? "BOOKINGS.CHECK_IN_SUCCESS" : "BOOKINGS.CHECK_OUT_SUCCESS"));
    this.checking_in.set(false);
  }
  get recurr_tooltip() {
    return formatRecurrence(fromBookingRecurrence(this.booking())) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP");
  }
  status(id) {
    const booking = this.booking().linked_bookings.find((_) => _.asset_id === id);
    if (booking.status)
      return booking.status;
    return booking ? booking.approved ? "approved" : booking.rejected ? "rejected" : "pending" : "pending";
  }
  viewLocation() {
    this.hide_map.set(true);
    const ref = this._dialog.open(MapLocateModalComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: {
        item: {
          id: this.booking().asset_id,
          name: this.booking().asset_name,
          map_id: this.booking().extension_data.map_id || this.booking().asset_id,
          level: this.level
        }
      }
    });
    ref.afterClosed().subscribe(() => this.hide_map.set(false));
  }
  setDeskHeight() {
    this._dialog.open(DeskSettingsModalComponent, {
      data: {
        id: this.booking().asset_ids[0] || this.booking().asset_id
      }
    });
  }
};
_BookingDetailsModalComponent.\u0275fac = function BookingDetailsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingDetailsModalComponent)();
};
_BookingDetailsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingDetailsModalComponent, selectors: [["booking-details-modal"]], decls: 51, vars: 29, consts: [["menu", "matMenu"], [1, "bg-base-100", "sm:bg-base-200", "h-screen", "w-screen", "space-y-2", "overflow-auto", "pb-2", "sm:relative", "sm:inset-auto", "sm:h-auto", "sm:max-h-[80vh]", "sm:w-204", "sm:rounded-sm"], [1, "border-base-200", "bg-base-100", "max-h-screen", "flex-col", "items-center", "pb-4", "sm:flex", "sm:max-h-[80vh]", "sm:border-b", "sm:px-16"], [1, "block", "h-8", "w-full", "sm:hidden"], [1, "bg-neutral", "h-64", "w-full", "overflow-hidden", "sm:rounded-b"], ["title", "", 1, "mt-2", "w-full", "px-3", "text-xl", "font-medium"], [1, "w-full", "items-center", "justify-between", "sm:flex"], [1, "m-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "text-2xl", 3, "matTooltip"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2"], [1, "flex-wrap", "sm:flex", "sm:px-12"], [1, "border-base-200", "sm:bg-base-100", "min-w-1/3", "grow-4", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "mt-2", "mb-2", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2"], ["matTooltip", "Date"], ["matTooltip", "Time"], ["matTooltip", "Level and Resource"], ["matTooltip", "Location"], [1, "border-base-200", "sm:bg-base-100", "mt-4", "min-w-1/3", "grow-3", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:my-2", "sm:h-48", "sm:w-[16rem]"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-neutral", "absolute", "top-0", "left-2", "text-white"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", ""], ["mat-menu-item", ""], [1, "h-64", "w-full", 3, "images"], ["icon", "", "matRipple", "", 1, "bg-secondary", "h-12", "w-12", "rounded-sm", "text-white", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", "border-none", 3, "bg-success", "text-success-content", "disabled"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", "border-none", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "mx-auto", 3, "diameter"], [1, "mr-4"], ["matTooltip", "Booked By"], [1, "mx-3", "py-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["request", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "p-3", 3, "click"], [1, "flex-1", "text-left"], [1, "text-sm"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"], [1, "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-3", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:my-2", "sm:h-48", "sm:w-[16rem]", 3, "click"], [1, "pointer-events-none", 3, "src", "features", "options"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-base"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded"], [1, "text-error"]], template: function BookingDetailsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, BookingDetailsModalComponent_Conditional_2_Template, 1, 0, "div", 3);
    \u0275\u0275conditionalCreate(3, BookingDetailsModalComponent_Conditional_3_Template, 2, 1, "div", 4);
    \u0275\u0275elementStart(4, "h3", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "status-pill", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, BookingDetailsModalComponent_Conditional_10_Template, 2, 1, "icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, BookingDetailsModalComponent_Conditional_11_Template, 5, 2, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "h3", 13);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14)(18, "icon", 15);
    \u0275\u0275text(19, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 14)(24, "icon", 16);
    \u0275\u0275text(25, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 14)(29, "icon", 17);
    \u0275\u0275text(30, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 14)(34, "icon", 18);
    \u0275\u0275text(35, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, BookingDetailsModalComponent_Conditional_38_Template, 7, 5, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, BookingDetailsModalComponent_Conditional_39_Template, 7, 4, "div", 19);
    \u0275\u0275conditionalCreate(40, BookingDetailsModalComponent_Conditional_40_Template, 2, 1, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 21)(42, "icon");
    \u0275\u0275text(43, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "mat-menu", 22, 0);
    \u0275\u0275conditionalCreate(46, BookingDetailsModalComponent_Conditional_46_Template, 7, 3, "button", 23);
    \u0275\u0275conditionalCreate(47, BookingDetailsModalComponent_Conditional_47_Template, 7, 3, "button", 24);
    \u0275\u0275conditionalCreate(48, BookingDetailsModalComponent_Conditional_48_Template, 7, 3, "button", 24);
    \u0275\u0275conditionalCreate(49, BookingDetailsModalComponent_Conditional_49_Template, 7, 3, "button", 24);
    \u0275\u0275conditionalCreate(50, BookingDetailsModalComponent_Conditional_50_Template, 7, 3, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_16_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_1_0 = ctx.booking()) == null ? null : tmp_1_0.extension_data == null ? null : tmp_1_0.extension_data.images == null ? null : tmp_1_0.extension_data.images.length) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx.booking()) == null ? null : tmp_2_0.extension_data == null ? null : tmp_2_0.extension_data.images == null ? null : tmp_2_0.extension_data.images.length) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("pt-4", !((tmp_3_0 = ctx.booking()) == null ? null : tmp_3_0.extension_data == null ? null : tmp_3_0.extension_data.images));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.booking().title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("status", ctx.booking_status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.period(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.booking().instance ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.booking().is_done ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 24, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 26, ctx.booking().date, "EEEE, dd LLLL y"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.period());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ((tmp_12_0 = ctx.level()) == null ? null : tmp_12_0.display_name) || ((tmp_12_0 = ctx.level()) == null ? null : tmp_12_0.name), ", ", ctx.booking().asset_name || ctx.booking().asset_id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ((tmp_13_0 = ctx.building()) == null ? null : tmp_13_0.display_name) || ((tmp_13_0 = ctx.building()) == null ? null : tmp_13_0.name), " ", ((tmp_13_0 = ctx.building()) == null ? null : tmp_13_0.address) ? ", " + ctx.building().address : "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.booking().booked_by_email !== ctx.booking().user_email ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.has_assets() ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = ctx.level()) == null ? null : tmp_16_0.map_id) ? 40 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.can_edit() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_checked_in() && ctx.desk_height_enabled() ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.is_in_progress() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.booking().instance && ctx.allow_series_delete() ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_in_progress() ? 50 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  TranslatePipe,
  IconComponent,
  InteractiveMapComponent,
  MatDialogModule,
  MatDialogClose,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  StatusPillComponent,
  ImageCarouselComponent,
  MatRippleModule,
  MatRipple,
  UserPipe,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var BookingDetailsModalComponent = _BookingDetailsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "booking-details-modal", template: `
        <div
            class="bg-base-100 sm:bg-base-200 h-screen w-screen space-y-2 overflow-auto pb-2 sm:relative sm:inset-auto sm:h-auto sm:max-h-[80vh] sm:w-204 sm:rounded-sm"
        >
            <div
                class="border-base-200 bg-base-100 max-h-screen flex-col items-center pb-4 sm:flex sm:max-h-[80vh] sm:border-b sm:px-16"
            >
                @if (!booking()?.extension_data?.images?.length) {
                    <div class="block h-8 w-full sm:hidden"></div>
                }
                @if (booking()?.extension_data?.images?.length) {
                    <div
                        class="bg-neutral h-64 w-full overflow-hidden sm:rounded-b"
                    >
                        <image-carousel
                            [images]="booking()?.extension_data?.images"
                            class="h-64 w-full"
                        ></image-carousel>
                    </div>
                }
                <h3
                    title
                    class="mt-2 w-full px-3 text-xl font-medium"
                    [class.pt-4]="!booking()?.extension_data?.images"
                >
                    {{ booking().title }}
                </h3>
                <div class="w-full items-center justify-between sm:flex">
                    <div class="m-2 flex items-center space-x-2">
                        <status-pill [status]="booking_status()">
                            {{ period() }}
                        </status-pill>
                        @if (booking().instance) {
                            <icon class="text-2xl" [matTooltip]="recurr_tooltip"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    @if (!booking().is_done) {
                        <div actions class="flex items-center space-x-2 px-2">
                            @if (can_checkin()) {
                                @if (
                                    !booking().checked_out_at &&
                                    !checked_out() &&
                                    !auto_checkin() &&
                                    (booking().state === 'upcoming' ||
                                        booking().state === 'started' ||
                                        booking().state === 'in_progress') &&
                                    booking().status !== 'declined'
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        class="h-10 flex-1 border-none"
                                        [class.bg-success]="
                                            booking().checked_in
                                        "
                                        [class.text-success-content]="
                                            booking().checked_in
                                        "
                                        [disabled]="checking_in()"
                                        (click)="toggleCheckedIn()"
                                    >
                                        @if (!checking_in()) {
                                            <div
                                                class="flex items-center justify-center space-x-2"
                                            >
                                                <icon>{{
                                                    booking().checked_in
                                                        ? 'done'
                                                        : 'arrow_back'
                                                }}</icon>
                                                <div class="mr-4">
                                                    {{
                                                        (booking().checked_in
                                                            ? 'COMMON.CHECKED_IN'
                                                            : 'COMMON.CHECK_IN'
                                                        ) | translate
                                                    }}
                                                </div>
                                            </div>
                                        } @else {
                                            <mat-spinner
                                                class="mx-auto"
                                                [diameter]="32"
                                            ></mat-spinner>
                                        }
                                    </button>
                                }
                            }
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                class="bg-secondary h-12 w-12 rounded-sm text-white"
                            >
                                <icon>more_horiz</icon>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div class="flex-wrap sm:flex sm:px-12">
                <div
                    class="border-base-200 sm:bg-base-100 min-w-1/3 grow-4 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <h3 class="mt-2 mb-2 px-3 text-lg font-medium">
                        {{ 'BOOKINGS.DETAILS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Date">event</icon>
                        <div>
                            {{ booking().date | date: 'EEEE, dd LLLL y' }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Time">schedule</icon>
                        <div>{{ period() }}</div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Level and Resource">map</icon>
                        <div>
                            {{ level()?.display_name || level()?.name }},
                            {{ booking().asset_name || booking().asset_id }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Location">place</icon>
                        <div>
                            {{ building()?.display_name || building()?.name }}
                            {{
                                building()?.address
                                    ? ', ' + building().address
                                    : ''
                            }}
                        </div>
                    </div>
                    @if (booking().booked_by_email !== booking().user_email) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Booked By">person</icon>
                            <div>
                                {{
                                    (booking().booked_by_email | user | async)
                                        ?.name || booking().booked_by_name
                                }}
                            </div>
                        </div>
                    }
                </div>
                @if (has_assets()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 py-2 text-lg font-medium">
                            {{ 'RESOURCE.ASSETS' | translate }} ({{
                                booking().valid_assets?.length || 0
                            }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                request of booking().valid_assets;
                                track request
                            ) {
                                <div
                                    request
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <button
                                        matRipple
                                        class="flex w-full items-center space-x-2 p-3"
                                        (click)="
                                            show_request[request.id] =
                                                !show_request[request.id]
                                        "
                                    >
                                        <div class="flex-1 text-left">
                                            <div class="text-sm">
                                                {{
                                                    'BOOKINGS.ASSETS_REQUESTED_FOR'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      request.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format,
                                                              }
                                                }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full"
                                            [class.bg-success]="
                                                request.state === 'approved'
                                            "
                                            [class.text-success-content]="
                                                request.state === 'approved'
                                            "
                                            [class.bg-warning]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.text-warning-content]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.bg-error]="
                                                request.state === 'rejected'
                                            "
                                            [class.text-error-content]="
                                                request.state === 'rejected'
                                            "
                                            [matTooltip]="
                                                request.state || 'Tentative'
                                            "
                                        >
                                            <icon>
                                                {{
                                                    request.state === 'approved'
                                                        ? 'done'
                                                        : request.state ===
                                                            'rejected'
                                                          ? 'close'
                                                          : 'schedule'
                                                }}
                                            </icon>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-2xl">
                                                {{
                                                    show_request[request.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            show_request[request.id]
                                                ? 'show'
                                                : 'hide'
                                        "
                                    >
                                        @for (
                                            item of request.items;
                                            track item
                                        ) {
                                            <div
                                                class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                            >
                                                <div
                                                    class="flex flex-1 items-center"
                                                >
                                                    <span class="text-sm">{{
                                                        item.name || 'Item'
                                                    }}</span>
                                                </div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    x{{ item.quantity }}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (level()?.map_id) {
                    <button
                        map
                        class="border-base-200 sm:bg-base-100 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] min-w-1/3 grow-3 overflow-hidden rounded-sm border p-2 sm:my-2 sm:h-48 sm:w-[16rem]"
                        (click)="viewLocation()"
                    >
                        @if (!hide_map()) {
                            <interactive-map
                                class="pointer-events-none"
                                [src]="level()?.map_id"
                                [features]="features()"
                                [options]="{
                                    disable_pan: true,
                                    disable_zoom: true,
                                }"
                            ></interactive-map>
                        }
                    </button>
                }
            </div>
            <button
                icon
                matRipple
                mat-dialog-close
                class="bg-neutral absolute top-0 left-2 text-white"
            >
                <icon>close</icon>
            </button>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            @if (can_edit()) {
                <button
                    mat-menu-item
                    mat-dialog-close
                    (click)="edit(booking())"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <icon>edit</icon>
                        <div>{{ 'BOOKINGS.ACTION_EDIT' | translate }}</div>
                    </div>
                </button>
            }
            @if (is_checked_in() && desk_height_enabled()) {
                <button mat-menu-item (click)="setDeskHeight()">
                    <div class="flex items-center space-x-2 text-base">
                        <icon className="material-symbols-rounded">
                            height
                        </icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_SET_DESK_HEIGHT' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (!is_in_progress()) {
                <button mat-menu-item (click)="remove(booking(), false)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_DELETE' | translate }}</div>
                    </div>
                </button>
            }
            @if (booking().instance && allow_series_delete()) {
                <button mat-menu-item (click)="remove(booking(), true)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_DELETE_SERIES' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (is_in_progress()) {
                <button mat-menu-item (click)="end(booking())">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_END' | translate }}</div>
                    </div>
                </button>
            }
        </mat-menu>
    `, animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [
      CommonModule,
      MatMenuModule,
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      MatDialogModule,
      MatProgressSpinnerModule,
      StatusPillComponent,
      ImageCarouselComponent,
      MatRippleModule,
      UserPipe,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingDetailsModalComponent, { className: "BookingDetailsModalComponent", filePath: "libs/bookings/src/lib/booking-details-modal.component.ts", lineNumber: 414 });
})();

// libs/bookings/src/lib/booking-card.component.ts
var _c04 = () => ["./"];
var _c13 = (a0) => ({ booking: a0 });
function BookingCardComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.day, ",\xA0");
  }
}
function BookingCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 0);
    \u0275\u0275conditionalCreate(1, BookingCardComponent_Conditional_0_Conditional_1_Template, 2, 1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.show_day() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, (tmp_2_0 = ctx_r0.booking()) == null ? null : tmp_2_0.date, ctx_r0.time_format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(6, 6, (tmp_3_0 = ctx_r0.booking()) == null ? null : tmp_3_0.date, "zzzz"), ")");
  }
}
function BookingCardComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip);
  }
}
function BookingCardComponent_Conditional_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "RESOURCE.DESK"));
  }
}
function BookingCardComponent_Conditional_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "RESOURCE.LOCKER"));
  }
}
function BookingCardComponent_Conditional_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "drive_eta");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "RESOURCE.PARKING"));
  }
}
function BookingCardComponent_Conditional_1_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "RESOURCE.VISITOR"));
  }
}
function BookingCardComponent_Conditional_1_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1, "book");
    \u0275\u0275elementEnd();
  }
}
function BookingCardComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.location);
  }
}
function BookingCardComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.ASSOCIATE"), " ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.EVENT"), " ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.booking().status !== "declined" ? "BOOKINGS.RESERVED" : "BOOKINGS.RELEASED"), " ");
  }
}
function BookingCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function BookingCardComponent_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "h4", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "status-pill", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BookingCardComponent_Conditional_1_Conditional_7_Template, 2, 1, "icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 11);
    \u0275\u0275conditionalCreate(10, BookingCardComponent_Conditional_1_Case_10_Template, 3, 3, "icon", 12)(11, BookingCardComponent_Conditional_1_Case_11_Template, 3, 3, "icon", 12)(12, BookingCardComponent_Conditional_1_Case_12_Template, 3, 3, "icon", 12)(13, BookingCardComponent_Conditional_1_Case_13_Template, 3, 3, "icon", 12)(14, BookingCardComponent_Conditional_1_Case_14_Template, 2, 0, "icon");
    \u0275\u0275elementStart(15, "div", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, BookingCardComponent_Conditional_1_Conditional_17_Template, 5, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "icon", 15);
    \u0275\u0275text(19, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, BookingCardComponent_Conditional_1_Conditional_20_Template, 3, 3, "div", 16);
    \u0275\u0275conditionalCreate(21, BookingCardComponent_Conditional_1_Conditional_21_Template, 3, 3, "div", 16);
    \u0275\u0275conditionalCreate(22, BookingCardComponent_Conditional_1_Conditional_22_Template, 3, 3, "div", 16);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c04))("queryParams", \u0275\u0275pureFunction1(15, _c13, (tmp_2_0 = ctx_r0.booking()) == null ? null : tmp_2_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.booking()) == null ? null : tmp_3_0.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r0.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.period);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.booking().instance ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_7_0 = ctx_r0.type) === "desk" ? 10 : tmp_7_0 === "locker" ? 11 : tmp_7_0 === "parking" ? 12 : tmp_7_0 === "visitor" ? 13 : 14);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.raw_description || ((tmp_8_0 = ctx_r0.booking()) == null ? null : tmp_8_0.asset_name) || ((tmp_8_0 = ctx_r0.booking()) == null ? null : tmp_8_0.asset_id), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.location ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.for_current_user && ((tmp_10_0 = ctx_r0.booking()) == null ? null : tmp_10_0.booking_type) !== "group-event" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r0.booking()) == null ? null : tmp_11_0.booking_type) === "group-event" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(23, 12, ctx_r0.is_reserved_parking_space) ? 22 : -1);
  }
}
var _BookingCardComponent = class _BookingCardComponent extends AsyncHandler {
  get for_current_user() {
    return this.booking()?.user_email.toLowerCase() === currentUser()?.email.toLowerCase();
  }
  get time_format() {
    return this._settings.time_format;
  }
  get status() {
    const booking = this.booking();
    if (booking?.is_done)
      return "neutral";
    if (booking?.status === "approved")
      return "success";
    if (booking?.status === "declined")
      return "error";
    if (booking?.status === "cancelled")
      return "error";
    if (booking?.status === "tentative")
      return "warning";
    return "warning";
  }
  get recurr_tooltip() {
    return formatRecurrence(fromBookingRecurrence(this.booking())) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP");
  }
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._parking = inject(ParkingService);
    this.booking = input(void 0);
    this.show_day = input(false);
    this.edit_fn = input((i) => null);
    this.remove_fn = input((i, s) => null);
    this.end_fn = input((i) => null);
    this.raw_description = "";
    this.is_reserved_parking_space = this._parking.assigned_space.pipe(map((space) => this.booking().booking_type === "parking" && space && this.booking().asset_id === space.id));
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => params.has("booking") && this.booking()?.id === params.get("event") ? this.viewDetails() : ""));
  }
  ngOnChanges(changes) {
    if (changes.booking) {
      this.raw_description = this.removeHtmlTags(this.booking()?.description);
    }
  }
  get type() {
    return this.booking().type;
  }
  get day() {
    const date = this.booking()?.date || Date.now();
    const is_today = isSameDay(Date.now(), date);
    return `${is_today ? i18n("COMMON.TODAY") : format(date, "EEEE")}`;
  }
  get location() {
    const level = this._org.levelWithID(this.booking()?.zones || []);
    return `${level?.display_name || level?.name || ""}`;
  }
  get period() {
    const booking = this.booking();
    if (booking?.is_all_day)
      return i18n("COMMON.ALL_DAY");
    const start = booking?.date || Date.now();
    const duration = booking?.duration || 60;
    const end = addMinutes(start, duration);
    const dur = formatDuration({
      hours: Math.floor(duration / 60),
      minutes: duration % 60
    }).replace(" hour", "hr").replace(" minute", "min");
    return `${format(start, this.time_format)} - ${format(end, this.time_format)} (${dur})`;
  }
  removeHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  viewDetails() {
    if (!this.booking())
      return;
    this.timeout("open", () => {
      this._dialog.closeAll();
      const view_component = this.booking().booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
      const booking = this.booking();
      const data = {
        booking: booking.booking_type === "group-event" ? { booking, concierge: false } : booking,
        edit_fn: this.edit_fn(),
        remove_fn: this.remove_fn(),
        end_fn: this.end_fn()
      };
      this._dialog.open(view_component, { data });
    });
  }
};
_BookingCardComponent.\u0275fac = function BookingCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingCardComponent)();
};
_BookingCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingCardComponent, selectors: [["booking-card"]], inputs: { booking: [1, "booking"], show_day: [1, "show_day"], edit_fn: [1, "edit_fn"], remove_fn: [1, "remove_fn"], end_fn: [1, "end_fn"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "mb-2", "flex", "items-center"], ["name", "view-booking-details", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "routerLink", "queryParams"], ["day", ""], [1, "px-2", "text-xs"], ["name", "view-booking-details", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "click", "routerLink", "queryParams"], [1, "border-base-300", "bg-base-100", "relative", "w-full", "rounded-xl", "border", "py-4", "shadow-sm"], [1, "px-4", "text-lg"], [1, "mx-4", "my-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "text-2xl", 3, "matTooltip"], [1, "divide-base-200-500", "flex", "flex-col", "flex-wrap", "space-y-2", "py-2", "sm:flex-row", "sm:space-y-0", "sm:divide-x"], [1, "flex", "max-w-[33%]", "items-center", "px-4"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "mx-2", "w-1/2", "flex-1", "truncate"], [1, "flex", "items-center", "px-4"], [1, "absolute", "top-1/2", "right-1", "-translate-y-1/2", "text-4xl"], [1, "bg-warning/50", "absolute", "top-2", "right-2", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "mx-2", "truncate"]], template: function BookingCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BookingCardComponent_Conditional_0_Template, 7, 9, "h4", 0);
    \u0275\u0275conditionalCreate(1, BookingCardComponent_Conditional_1_Template, 24, 17, "a", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.booking() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.booking() ? 1 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  IconComponent,
  StatusPillComponent,
  RouterModule,
  RouterLink,
  MatTooltipModule,
  MatTooltip
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=booking-card.component.css.map */"] });
var BookingCardComponent = _BookingCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingCardComponent, [{
    type: Component,
    args: [{ selector: "booking-card", template: `
        @if (booking()) {
            <h4 class="mb-2 flex items-center">
                @if (show_day()) {
                    <span day>{{ day }},&nbsp;</span>
                }
                {{ booking()?.date | date: time_format }}
                <span class="px-2 text-xs"
                    >({{ booking()?.date | date: 'zzzz' }})</span
                >
            </h4>
        }
        @if (booking()) {
            <a
                name="view-booking-details"
                class="relative w-full cursor-pointer overflow-hidden"
                [routerLink]="['./']"
                [queryParams]="{ booking: booking()?.id }"
                (click)="viewDetails()"
            >
                <div
                    class="border-base-300 bg-base-100 relative w-full rounded-xl border py-4 shadow-sm"
                >
                    <h4 class="px-4 text-lg">{{ booking()?.title }}</h4>
                    <div class="mx-4 my-2 flex items-center space-x-2">
                        <status-pill [status]="status">{{
                            period
                        }}</status-pill>
                        @if (booking().instance) {
                            <icon class="text-2xl" [matTooltip]="recurr_tooltip"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    <div
                        class="divide-base-200-500 flex flex-col flex-wrap space-y-2 py-2 sm:flex-row sm:space-y-0 sm:divide-x"
                    >
                        <div class="flex max-w-[33%] items-center px-4">
                            @switch (type) {
                                @case ('desk') {
                                    <icon
                                        [matTooltip]="
                                            'RESOURCE.DESK' | translate
                                        "
                                        matTooltipPosition="right"
                                        >desk</icon
                                    >
                                }
                                @case ('locker') {
                                    <icon
                                        [matTooltip]="
                                            'RESOURCE.LOCKER' | translate
                                        "
                                        matTooltipPosition="right"
                                        >lock</icon
                                    >
                                }
                                @case ('parking') {
                                    <icon
                                        [matTooltip]="
                                            'RESOURCE.PARKING' | translate
                                        "
                                        matTooltipPosition="right"
                                        >drive_eta</icon
                                    >
                                }
                                @case ('visitor') {
                                    <icon
                                        [matTooltip]="
                                            'RESOURCE.VISITOR' | translate
                                        "
                                        matTooltipPosition="right"
                                        >people</icon
                                    >
                                }
                                @default {
                                    <icon>book</icon>
                                }
                            }
                            <div class="mx-2 w-1/2 flex-1 truncate">
                                {{
                                    raw_description ||
                                        booking()?.asset_name ||
                                        booking()?.asset_id
                                }}
                            </div>
                        </div>
                        @if (location) {
                            <div class="flex items-center px-4">
                                <icon>place</icon>
                                <div class="mx-2 truncate">{{ location }}</div>
                            </div>
                        }
                    </div>
                    <icon
                        class="absolute top-1/2 right-1 -translate-y-1/2 text-4xl"
                    >
                        chevron_right
                    </icon>
                    @if (
                        !for_current_user &&
                        booking()?.booking_type !== 'group-event'
                    ) {
                        <div
                            class="bg-warning/50 absolute top-2 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ 'BOOKINGS.ASSOCIATE' | translate }}
                        </div>
                    }
                    @if (booking()?.booking_type === 'group-event') {
                        <div
                            class="bg-warning/50 absolute top-2 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ 'BOOKINGS.EVENT' | translate }}
                        </div>
                    }
                    @if (is_reserved_parking_space | async) {
                        <div
                            class="bg-warning/50 absolute top-2 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{
                                (booking().status !== 'declined'
                                    ? 'BOOKINGS.RESERVED'
                                    : 'BOOKINGS.RELEASED'
                                ) | translate
                            }}
                        </div>
                    }
                </div>
            </a>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      StatusPillComponent,
      RouterModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;ebed79dbf42ca259394ae075644d04aa29f5856e78e5e954783f57ff9ad7aaa1;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-card.component.ts */\n:host {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=booking-card.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingCardComponent, { className: "BookingCardComponent", filePath: "libs/bookings/src/lib/booking-card.component.ts", lineNumber: 186 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-details.component.ts
var _c05 = () => [];
var _c14 = () => ({ disable_pan: true, disable_zoom: true });
function DeskDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.desk().images);
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_32_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feat_r3, " ");
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DeskDetailsComponent_Conditional_0_Conditional_32_For_5_Template, 3, 1, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.desk().features || \u0275\u0275pureFunction0(3, _c05));
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275element(1, "interactive-map", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.desk().map_id || ctx_r1.desk().id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c14));
  }
}
function DeskDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275conditionalCreate(1, DeskDetailsComponent_Conditional_0_Conditional_1_Template, 1, 1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function DeskDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function DeskDetailsComponent_Conditional_0_Template_button_click_5_listener() {
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
    \u0275\u0275elementStart(12, "section", 9)(13, "h2", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "icon");
    \u0275\u0275text(18, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 11)(23, "icon");
    \u0275\u0275text(24, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 11)(28, "icon");
    \u0275\u0275text(29, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(32, DeskDetailsComponent_Conditional_0_Conditional_32_Template, 6, 4, "section", 12);
    \u0275\u0275conditionalCreate(33, DeskDetailsComponent_Conditional_0_Conditional_33_Template, 2, 5, "section", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 14)(35, "button", 15);
    \u0275\u0275listener("click", function DeskDetailsComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeChange.emit());
    });
    \u0275\u0275elementStart(36, "div", 16)(37, "icon", 17);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sm:h-64", (tmp_1_0 = ctx_r1.desk().images) == null ? null : tmp_1_0.length)("h-40", (tmp_2_0 = ctx_r1.desk().images) == null ? null : tmp_2_0.length)("sm:h-0", !((tmp_3_0 = ctx_r1.desk().images) == null ? null : tmp_3_0.length))("h-12", !((tmp_4_0 = ctx_r1.desk().images) == null ? null : tmp_4_0.length))("bg-transparent!", !((tmp_5_0 = ctx_r1.desk().images) == null ? null : tmp_5_0.length));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.desk().images) == null ? null : tmp_6_0.length) ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav())("bg-info!", ctx_r1.fav());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav() ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk().display_name || ctx_r1.desk().name || ctx_r1.desk().id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 27, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 29, "BOOKINGS.DESK_COUNT_LONE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk().display_name || ctx_r1.desk().name || ctx_r1.desk().id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_14_0 = ctx_r1.desk().zone) == null ? null : tmp_14_0.display_name) || ((tmp_14_0 = ctx_r1.desk().zone) == null ? null : tmp_14_0.name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_15_0 = ctx_r1.desk().features) == null ? null : tmp_15_0.length) ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_map() ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r1.active());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.active() ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 31, ctx_r1.active() ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
  }
}
function DeskDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_SELECT_MSG"), " ");
  }
}
var _DeskDetailsComponent = class _DeskDetailsComponent {
  constructor() {
    this.desk = input(void 0);
    this.fav = input(false);
    this.active = input(false);
    this.hide_map = input(false);
    this.close = output();
    this.toggleFav = output();
    this.activeChange = output();
    this.map_url = "";
    this.features = [];
  }
  ngOnChanges(changes) {
    if (changes.desk && this.desk()) {
      this.updateFeature();
    }
  }
  updateFeature() {
    this.map_url = this.desk().zone.map_id;
    const desk = this.desk();
    this.features = [
      {
        location: desk.map_id || desk.id,
        content: MapPinComponent
      }
    ];
  }
};
_DeskDetailsComponent.\u0275fac = function DeskDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskDetailsComponent)();
};
_DeskDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskDetailsComponent, selectors: [["desk-details"]], inputs: { desk: [1, "desk"], fav: [1, "fav"], active: [1, "active"], hide_map: [1, "hide_map"] }, outputs: { close: "close", toggleFav: "toggleFav", activeChange: "activeChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["image", "", 1, "bg-base-300", "relative", "w-full"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "name", "close-desk-details", 1, "bg-base-200", "text-base-content", "absolute", "top-2", "left-2", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite-details", 1, "bg-base-200", "absolute", "top-2", "right-2", 3, "click"], [3, "className"], [1, "h-[calc(100%-19.75rem)]", "flex-1", "space-y-2", "overflow-auto", "p-2"], ["actions", "", 1, "z-0", "border-b", "pb-2"], [1, "mt-4", "mb-2", "text-xl", "font-medium"], ["details", "", 1, "space-y-2", "border-b", "pb-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", 1, "space-y-2", "border-b", "pb-2"], ["map", "", 1, "border-base-200", "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded-sm", "border", "sm:h-48"], [1, "border-base-200", "border-t", "px-2", "pt-2", "pb-22", "shadow-sm", "sm:hidden"], ["btn", "", "matRipple", "", "name", "toggle-desk-details", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], ["for", "feat", 1, "w-1/2", "flex-1"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function DeskDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskDetailsComponent_Conditional_0_Template, 42, 33)(1, DeskDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.desk() ? 0 : 1);
  }
}, dependencies: [
  TranslatePipe,
  IconComponent,
  InteractiveMapComponent,
  ImageCarouselComponent,
  MatRippleModule,
  MatRipple
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n  background: white;\n}\n/*# sourceMappingURL=desk-details.component.css.map */"] });
var DeskDetailsComponent = _DeskDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskDetailsComponent, [{
    type: Component,
    args: [{ selector: "desk-details", template: `
        @if (desk()) {
            <section
                image
                class="bg-base-300 relative w-full"
                [class.sm:h-64]="desk().images?.length"
                [class.h-40]="desk().images?.length"
                [class.sm:h-0]="!desk().images?.length"
                [class.h-12]="!desk().images?.length"
                [class.bg-transparent!]="!desk().images?.length"
            >
                @if (desk().images?.length) {
                    <image-carousel
                        [images]="desk().images"
                        class="absolute inset-0"
                    ></image-carousel>
                }
                <button
                    icon
                    matRipple
                    name="close-desk-details"
                    (click)="close.emit()"
                    class="bg-base-200 text-base-content absolute top-2 left-2 sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-desk-favourite-details"
                    [class.text-info-content]="fav()"
                    [class.bg-info!]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-base-200 absolute top-2 right-2"
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
            <div
                class="h-[calc(100%-19.75rem)] flex-1 space-y-2 overflow-auto p-2"
            >
                <section actions class="z-0 border-b pb-2">
                    <h2 class="mt-4 mb-2 text-xl font-medium">
                        {{ desk().display_name || desk().name || desk().id }}
                    </h2>
                </section>
                <section details class="space-y-2 border-b pb-2">
                    <h2 class="text-xl font-medium">
                        {{ 'BOOKINGS.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
                        <p>{{ 'BOOKINGS.DESK_COUNT_LONE' | translate }}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>desk</icon>
                        <p>
                            {{
                                desk().display_name || desk().name || desk().id
                            }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <p>
                            {{ desk().zone?.display_name || desk().zone?.name }}
                        </p>
                    </div>
                </section>
                @if (desk().features?.length) {
                    <section facilities class="space-y-2 border-b pb-2">
                        <h2 class="text-xl font-medium">
                            {{ 'COMMON.FEATURES' | translate }}
                        </h2>
                        @for (feat of desk().features || []; track feat) {
                            <div class="flex flex-wrap items-center space-x-2">
                                <div for="feat" class="w-1/2 flex-1">
                                    {{ feat }}
                                </div>
                            </div>
                        }
                    </section>
                }
                @if (!hide_map()) {
                    <section
                        map
                        class="border-base-200 relative mx-auto h-64 w-full overflow-hidden rounded-sm border sm:h-48"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="map_url"
                            [focus]="desk().map_id || desk().id"
                            [features]="features"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    </section>
                }
            </div>
            <div
                class="border-base-200 border-t px-2 pt-2 pb-22 shadow-sm sm:hidden"
            >
                <button
                    btn
                    matRipple
                    name="toggle-desk-details"
                    [class.inverse]="active()"
                    class="w-full"
                    (click)="activeChange.emit()"
                >
                    <div class="flex items-center justify-center">
                        <icon class="text-2xl">{{
                            active() ? 'remove' : 'add'
                        }}</icon>
                        <p>
                            {{
                                (active()
                                    ? 'COMMON.REMOVE_FROM'
                                    : 'COMMON.ADD_TO'
                                ) | translate
                            }}
                        </p>
                    </div>
                </button>
            </div>
        } @else {
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.DESK_SELECT_MSG' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      ImageCarouselComponent,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;24e86dfb7b7e5611143724b5a35a0e0d1367979cdacd4e7b3a2cbda95970d7cb;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-details.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n  background: white;\n}\n/*# sourceMappingURL=desk-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskDetailsComponent, { className: "DeskDetailsComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-details.component.ts", lineNumber: 180 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts
var _c06 = () => ({ standalone: true });
var _c15 = () => [];
function DeskFiltersComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DeskFiltersComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function DeskFiltersComponent_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
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
function DeskFiltersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_16_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, DeskFiltersComponent_Conditional_16_For_4_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(7, _c06))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.regions));
  }
}
function DeskFiltersComponent_Conditional_18_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
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
function DeskFiltersComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 21);
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_18_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(2, DeskFiltersComponent_Conditional_18_For_3_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c06))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 3, ctx_r1.buildings));
  }
}
function DeskFiltersComponent_Conditional_20_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const lvl_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, lvl_r8.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function DeskFiltersComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20)(1, "div", 23);
    \u0275\u0275conditionalCreate(2, DeskFiltersComponent_Conditional_20_For_5_Conditional_2_Template, 5, 3, "div", 24);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function DeskFiltersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 22);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_20_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(4, DeskFiltersComponent_Conditional_20_For_5_Template, 5, 3, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(9, _c06))("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 7, ctx_r1.levels));
  }
}
function DeskFiltersComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-checkbox", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskFiltersComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 27)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 28);
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_29_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c06))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("time", (tmp_7_0 = ctx_r1.form.get("date")) == null ? null : tmp_7_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function DeskFiltersComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 15)(1, "h2", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "settings-toggle", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_30_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.options)) == null ? null : tmp_3_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c06));
  }
}
function DeskFiltersComponent_Conditional_31_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "settings-toggle", 34);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_31_For_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      const feat_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r12, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const feat_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", feat_r12)("ngModel", (((tmp_12_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_12_0.features) || \u0275\u0275pureFunction0(5, _c15)).includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(6, _c06));
  }
}
function DeskFiltersComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "h2", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DeskFiltersComponent_Conditional_31_For_5_Template, 3, 7, "div", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 3, ctx_r1.features));
  }
}
function DeskFiltersComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 35);
    \u0275\u0275listener("click", function DeskFiltersComponent_Conditional_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var _DeskFiltersComponent = class _DeskFiltersComponent {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get allow_time_changes() {
    return !!this._settings.get("app.desks.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.desks.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  constructor() {
    this._bsheet_ref = inject(MatBottomSheetRef, { optional: true });
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.hide_levels = input(void 0);
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.setRegion = (r) => this._org.region = r;
    this.can_close = !!this._bsheet_ref;
  }
};
_DeskFiltersComponent.\u0275fac = function DeskFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskFiltersComponent)();
};
_DeskFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersComponent, selectors: [["desk-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, decls: 34, vars: 36, consts: [[1, "border-base-200", "flex", "items-center", "rounded-t-md", "border-b", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-desk-filters", 1, "sm:hidden"], [1, "flex-2", "text-center", "font-medium"], [1, "flex-1"], [1, "divide-base-200", "max-h-[65vh]", "w-full", "max-w-[100vw]", "divide-y", "overflow-x-hidden", "overflow-y-auto", "p-2", "sm:max-w-[30vw]", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "min-w-[256px]", "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "timezone"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "py-2"], ["icon", "", "matRipple", "", "name", "close-desk-filters", 1, "sm:hidden", 3, "click"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["formControlName", "all_day"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["btn", "", "matRipple", "", "name", "apply-desk-filters", 1, "w-full", 3, "click"]], template: function DeskFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, DeskFiltersComponent_Conditional_2_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 5)(8, "section", 6)(9, "h2", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, DeskFiltersComponent_Conditional_16_Template, 6, 8, "mat-form-field", 10);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275conditionalCreate(18, DeskFiltersComponent_Conditional_18_Template, 5, 6, "mat-form-field", 10);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275conditionalCreate(20, DeskFiltersComponent_Conditional_20_Template, 7, 10, "mat-form-field", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11)(22, "label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a-date-field", 12);
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Template_a_date_field_ngModelChange_25_listener($event) {
      return ctx.form.patchValue({ date: $event });
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, DeskFiltersComponent_Conditional_28_Template, 4, 3, "div", 13);
    \u0275\u0275conditionalCreate(29, DeskFiltersComponent_Conditional_29_Template, 11, 17, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, DeskFiltersComponent_Conditional_30_Template, 8, 11, "section", 15);
    \u0275\u0275conditionalCreate(31, DeskFiltersComponent_Conditional_31_Template, 7, 5, "section", 16);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, DeskFiltersComponent_Conditional_33_Template, 4, 3, "div", 17);
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_17_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 21, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 23, "BOOKINGS.LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(17, 25, ctx.regions)) == null ? null : tmp_5_0.length) ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.use_region && ((tmp_6_0 = \u0275\u0275pipeBind1(19, 27, ctx.buildings)) == null ? null : tmp_6_0.length) > 1 ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_levels() ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 29, "FORM.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(35, _c06))("to", ctx.end_date)("timezone", ctx.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 31, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.allow_all_day ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_levels() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_17_0 = \u0275\u0275pipeBind1(32, 33, ctx.features)) == null ? null : tmp_17_0.length) && !ctx.hide_levels() ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 33 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  SettingsToggleComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatCheckboxModule,
  MatCheckbox,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=desk-filters.component.css.map */"] });
var DeskFiltersComponent = _DeskFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFiltersComponent, [{
    type: Component,
    args: [{ selector: "desk-filters", template: `
        <div
            class="border-base-200 flex items-center rounded-t-md border-b pb-2 sm:hidden"
        >
            <div class="flex-1 pl-2">
                @if (can_close) {
                    <button
                        icon
                        matRipple
                        name="close-desk-filters"
                        class="sm:hidden"
                        (click)="close()"
                    >
                        <icon>keyboard_arrow_left</icon>
                    </button>
                }
            </div>
            <h3 class="flex-2 text-center font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="divide-base-200 max-h-[65vh] w-full max-w-[100vw] divide-y overflow-x-hidden overflow-y-auto p-2 sm:max-w-[30vw]"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'BOOKINGS.DETAILS' | translate }}
                </h2>
                <div class="flex min-w-32 flex-1 flex-col">
                    <label for="location">
                        {{ 'BOOKINGS.LOCATION' | translate }}
                    </label>
                    @if (use_region && (regions | async)?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.REGION_ANY' | translate"
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
                            <mat-select
                                name="building"
                                [ngModel]="building"
                                (ngModelChange)="building = $event"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building?.display_name || building?.name
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
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zone_id"
                                (ngModelChange)="
                                    setOptions({ zone_id: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                            >
                                @for (lvl of levels | async; track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl.parent_id
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

                <!-- Date -->
                <div class="min-w-[256px] flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [to]="end_date"
                        [timezone]="timezone"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_END' | translate }}</label>
                            <a-duration-field
                                formControlName="duration"
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [name]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="(options | async)?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
                </section>
            }
            @if ((features | async)?.length && !hide_levels()) {
                <section class="space-y-2" features>
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features | async; track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <settings-toggle
                                class="w-full capitalize"
                                [name]="feat"
                                [ngModel]="
                                    (
                                        (options | async)?.features || []
                                    ).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></settings-toggle>
                        </div>
                    }
                </section>
            }
        </form>
        @if (can_close) {
            <div class="border-base-200 w-full border-t px-2 py-2">
                <button
                    btn
                    matRipple
                    name="apply-desk-filters"
                    class="w-full"
                    (click)="close()"
                >
                    {{ 'COMMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatCheckboxModule,
      FormsModule,
      ReactiveFormsModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=desk-filters.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersComponent, { className: "DeskFiltersComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts", lineNumber: 270 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts
var _c07 = () => [];
function DeskFiltersDisplayComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r0.start, ctx_r0.time_format), " \u2014 ", \u0275\u0275pipeBind2(2, 5, ctx_r0.end, ctx_r0.time_format), " ");
  }
}
function DeskFiltersDisplayComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskFiltersDisplayComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_For_19_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFeature(feat_r3, false));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function DeskFiltersDisplayComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Conditional_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
var _DeskFiltersDisplayComponent = class _DeskFiltersDisplayComponent extends AsyncHandler {
  get all_day() {
    return this._state.form.value.all_day;
  }
  get start() {
    return this._state.form.value.date;
  }
  get end() {
    const { date, duration, all_day } = this._state.form.value;
    if (all_day)
      return endOfDay(date);
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor() {
    super();
    this._bsheet = inject(MatBottomSheet);
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this.view = model("list");
    this.viewChange = output();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.editFilter = () => this._bsheet.open(DeskFiltersComponent);
  }
};
_DeskFiltersDisplayComponent.\u0275fac = function DeskFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskFiltersDisplayComponent)();
};
_DeskFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersDisplayComponent, selectors: [["desk-filters-display"]], inputs: { view: [1, "view"] }, outputs: { view: "viewChange", viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 25, consts: [["actions", "", 1, "flex", "flex-row", "items-center", "space-x-2", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "edit-desk-filters", 1, "w-1/2", "flex-1", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-l-none", "rounded-r", 3, "click"], ["filters", "", 1, "flex", "w-140", "max-w-full", "flex-wrap", "items-center", "p-2", "sm:max-w-140"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", ""], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-desk-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-desk-favs-filter", 1, "-mr-4", 3, "click"]], template: function DeskFiltersDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Template_button_click_1_listener() {
      return ctx.editFilter();
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Template_button_click_5_listener() {
      ctx.view.set("map");
      return ctx.viewChange.emit(ctx.view());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Template_button_click_8_listener() {
      ctx.view.set("list");
      return ctx.viewChange.emit(ctx.view());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "section", 5)(12, "div", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7);
    \u0275\u0275conditionalCreate(16, DeskFiltersDisplayComponent_Conditional_16_Template, 3, 8);
    \u0275\u0275conditionalCreate(17, DeskFiltersDisplayComponent_Conditional_17_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, DeskFiltersDisplayComponent_For_19_Template, 6, 1, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275conditionalCreate(21, DeskFiltersDisplayComponent_Conditional_21_Template, 7, 3, "div", 9);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", ctx.view() !== "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 13, "COMMON.MAP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.view() !== "list");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 15, "COMMON.LIST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 17, ctx.start, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.all_day ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.all_day ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(((tmp_8_0 = \u0275\u0275pipeBind1(20, 20, ctx.options)) == null ? null : tmp_8_0.features) || \u0275\u0275pureFunction0(24, _c07));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_9_0 = \u0275\u0275pipeBind1(22, 22, ctx.options)) == null ? null : tmp_9_0.show_fav) ? 21 : -1);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, IconComponent, TranslatePipe, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=desk-filters-display.component.css.map */"] });
var DeskFiltersDisplayComponent = _DeskFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: "desk-filters-display", template: `
        <section
            actions
            class="flex flex-row items-center space-x-2 p-2 sm:hidden"
        >
            <button
                btn
                matRipple
                name="edit-desk-filters"
                class="w-1/2 flex-1"
                (click)="editFilter()"
            >
                {{ 'COMMON.FILTERS' | translate }}
            </button>
            <div class="flex items-center">
                <button
                    btn
                    matRipple
                    name="view-desk-map"
                    class="rounded-l rounded-r-none"
                    [class.inverse]="view() !== 'map'"
                    (click)="view.set('map'); viewChange.emit(view())"
                >
                    {{ 'COMMON.MAP' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="view-desk-list"
                    class="rounded-l-none rounded-r"
                    [class.inverse]="view() !== 'list'"
                    (click)="view.set('list'); viewChange.emit(view())"
                >
                    {{ 'COMMON.LIST' | translate }}
                </button>
            </div>
        </section>
        <section
            filters
            class="flex w-140 max-w-full flex-wrap items-center p-2 sm:max-w-140"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start | date: 'mediumDate' }}</div>
            <div filter-item time>
                @if (!all_day) {
                    {{ start | date: time_format }} &mdash;
                    {{ end | date: time_format }}
                }
                @if (all_day) {
                    {{ 'COMMON.ALL_DAY' | translate }}
                }
            </div>
            @for (feat of (options | async)?.features || []; track feat) {
                <div filter-item features>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-desk-filter"
                        class="-mr-4"
                        (click)="setFeature(feat, false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if ((options | async)?.show_fav) {
                <div filter-item>
                    <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-desk-favs-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_fav: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, IconComponent, TranslatePipe, MatRippleModule], styles: ["/* angular:styles/component:css;0959a8279159e2589d106339b636cabdefc94315ba1f7ffe415616deff894a80;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=desk-filters-display.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersDisplayComponent, { className: "DeskFiltersDisplayComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts", lineNumber: 122 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-list.component.ts
var _c08 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DeskListComponent_Conditional_7_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function DeskListComponent_Conditional_7_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const desk_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", desk_r2.images[0]);
  }
}
function DeskListComponent_Conditional_7_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function DeskListComponent_Conditional_7_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function DeskListComponent_Conditional_7_Conditional_0_For_2_Template_button_click_1_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectDesk(desk_r2));
    });
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, DeskListComponent_Conditional_7_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(4, DeskListComponent_Conditional_7_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 10)(5, DeskListComponent_Conditional_7_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "icon", 15);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 17);
    \u0275\u0275listener("click", function DeskListComponent_Conditional_7_Conditional_0_For_2_Template_button_click_14_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(desk_r2));
    });
    \u0275\u0275elementStart(15, "icon", 18);
    \u0275\u0275text(16, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const desk_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info!", ctx_r2.active() === desk_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(desk_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((desk_r2.images == null ? null : desk_r2.images.length) ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", desk_r2.name || desk_r2.id || "Desk", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (desk_r2.zone == null ? null : desk_r2.zone.display_name) || (desk_r2.zone == null ? null : desk_r2.zone.name) || "<No Level>", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(desk_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(desk_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function DeskListComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, DeskListComponent_Conditional_7_Conditional_0_For_2_Template, 17, 9, "li", 5, _forTrack0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.desks));
  }
}
function DeskListComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_LIST_EMPTY"), " ");
  }
}
function DeskListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskListComponent_Conditional_7_Conditional_0_Template, 4, 2, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, DeskListComponent_Conditional_7_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.desks)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function DeskListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.DESK_LIST_LOADING"), " ");
  }
}
var _DeskListComponent = class _DeskListComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this.active = input("");
    this.selected = input("");
    this.favorites = input([]);
    this.onSelect = output();
    this.toggleFav = output();
    this.desks = combineLatest([
      this._state.options,
      this._state.available_resources
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
      const a_fav = this.isFavourite(a.id) ? 1 : 0;
      const b_fav = this.isFavourite(b.id) ? 1 : 0;
      return b_fav - a_fav;
    })));
    this.loading = this._state.loading;
  }
  isFavourite(desk_id) {
    return this.favorites().includes(desk_id);
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
};
_DeskListComponent.\u0275fac = function DeskListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskListComponent)();
};
_DeskListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskListComponent, selectors: [["desk-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 10, vars: 14, consts: [[1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["desk", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "border-info!"], ["desk", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], ["name", "select-desk", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], [1, "flex-1", "space-y-2", "pt-2", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function DeskListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DeskListComponent_Conditional_7_Template, 3, 3);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275conditionalBranchCreate(9, DeskListComponent_Conditional_9_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 7, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(12, _c08, ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.desks)) == null ? null : tmp_1_0.length) || 0)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind1(8, 10, ctx.loading)) == null ? null : tmp_2_0.length) ? 7 : 9);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  AuthenticatedImageDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=desk-list.component.css.map */"] });
var DeskListComponent = _DeskListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskListComponent, [{
    type: Component,
    args: [{ selector: "desk-list", template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: (desks | async)?.length || 0 }
            }}
        </p>
        @if (!(loading | async)?.length) {
            @if ((desks | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (desk of desks | async; track desk.id) {
                        <li
                            desk
                            class="border-base-200 bg-base-100 relative w-full overflow-hidden rounded-lg border shadow-sm"
                            [class.border-info!]="active() === desk.id"
                        >
                            <button
                                name="select-desk"
                                matRipple
                                class="flex h-full w-full p-2"
                                (click)="selectDesk(desk)"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl"
                                >
                                    @if (selected().includes(desk.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (desk.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="desk.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/desk-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1 space-y-2 pt-2 text-left">
                                    <span class="font-medium">
                                        {{ desk.name || desk.id || 'Desk' }}
                                    </span>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p class="text-xs">
                                            {{
                                                desk.zone?.display_name ||
                                                    desk.zone?.name ||
                                                    '&lt;No Level&gt;'
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                name="toggle-desk-favourite"
                                class="absolute top-1 right-1"
                                [class.text-info]="isFavourite(desk.id)"
                                (click)="toggleFav.emit(desk)"
                            >
                                <icon
                                    [className]="
                                        isFavourite(desk.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.DESK_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.DESK_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      IconComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;432ecbb57b4beca9dd2517fb245615e93f6838151ec892ff249dd34f66862b56;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-list.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=desk-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListComponent, { className: "DeskListComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-list.component.ts", lineNumber: 140 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-map.component.ts
var _c09 = () => ({ controls: true });
var _c16 = () => ({ standalone: true });
function DeskMapComponent_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
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
function DeskMapComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, DeskMapComponent_Conditional_1_For_4_Conditional_2_Template, 5, 3, "div", 7);
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
function DeskMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DeskMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DeskMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275repeaterCreate(3, DeskMapComponent_Conditional_1_For_4_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c16))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.levels));
  }
}
var _DeskMapComponent = class _DeskMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.is_displayed = input(false);
    this.active = input("");
    this.onSelect = output();
    this.desks = this._state.available_resources;
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
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
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this._state.available_resources.pipe(map((desks) => desks.map((desk) => ({
      id: desk.map_id || desk.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectDesk(desk)
    }))));
    this.features = combineLatest([
      this._state.resources,
      this._state.available_resources
    ]).pipe(map(([desks]) => {
      return this._settings.get("app.desks.hide_user") ? [] : desks.map((desk) => ({
        location: desk.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: this._state.resourceUserName(desk.id)
        },
        z_index: 20
      }));
    }));
    this.styles = combineLatest([
      this._state.resources,
      this._state.available_resources,
      this._change
    ]).pipe(map(([desks, free_desks]) => desks.reduce((styles, desk) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = this.active() === desk.id ? "active" : free_desks.find((_) => _.id === desk.id) ? "free" : this._state.resourceUserName(desk.id) ? "busy" : "not-bookable";
      styles[`#${desk.map_id || desk.id}`] = {
        fill: status === "active" ? "#512DA8" : colours[`desk-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription("levels_update", this._state.options.subscribe(({ zone_id }) => {
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level = level;
    }));
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  setLevel(level) {
    this.setOptions({ zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(",").map((_) => parseFloat(_));
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
_DeskMapComponent.\u0275fac = function DeskMapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskMapComponent)();
};
_DeskMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapComponent, selectors: [["desk-map"]], inputs: { is_displayed: [1, "is_displayed"], active: [1, "active"] }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function DeskMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, DeskMapComponent_Conditional_1_Template, 6, 8, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275twoWayListener("zoomChange", function DeskMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
      return $event;
    })("centerChange", function DeskMapComponent_Template_interactive_map_centerChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 8, ctx.levels)) == null ? null : tmp_0_0.length) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.map_url);
    \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
    \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c09));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  InteractiveMapComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  TranslatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=desk-map.component.css.map */"] });
var DeskMapComponent = _DeskMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskMapComponent, [{
    type: Component,
    args: [{ selector: "desk-map", template: `
        <div class="border-base-200 bg-base-100 w-full border-b p-2">
            @if ((levels | async)?.length) {
                <mat-form-field
                    levels
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
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
            }
        </div>
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
      TranslatePipe,
      FormsModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;3e52039fa2b2dc4b43d4f232e06fb31261aaccd73f5b7c706cba74f59e7ddeb1;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border-radius: 0;\n}\n/*# sourceMappingURL=desk-map.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapComponent, { className: "DeskMapComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-map.component.ts", lineNumber: 104 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts
var _c010 = (a0) => ({ count: a0 });
function DeskSelectModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-list", 24);
    \u0275\u0275listener("toggleFav", function DeskSelectModalComponent_Conditional_19_Template_desk_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function DeskSelectModalComponent_Conditional_19_Template_desk_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id)("selected", ctx_r1.selected_ids)("favorites", ctx_r1.favorites);
  }
}
function DeskSelectModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-map", 25);
    \u0275\u0275listener("onSelect", function DeskSelectModalComponent_Conditional_20_Template_desk_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("is_displayed", !!ctx_r1.displayed)("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id);
  }
}
function DeskSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function DeskSelectModalComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
var FAV_DESK_KEY = "favourite_desks";
var _DeskSelectModalComponent = class _DeskSelectModalComponent {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_DESK_KEY) || [];
  }
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(BookingFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this.selected = [];
    this.view = "list";
    const _data = this._data;
    this.selected = [..._data.items || []];
    this._event_form.setOptions(_data.options);
    this.view = this._settings.get("app.desks.default_select_as_map") ? "map" : "list";
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state) {
      this.displayed = null;
      setTimeout(() => this._dialog_ref.close([item]), 50);
    }
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_DESK_KEY, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_DESK_KEY, fav_list.filter((_) => _ !== item.id));
    }
  }
};
_DeskSelectModalComponent.\u0275fac = function DeskSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskSelectModalComponent)();
};
_DeskSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSelectModalComponent, selectors: [["desk-select-modal"]], decls: 45, vars: 48, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "sm:relative", "sm:h-auto", "sm:w-auto"], [1, "flex", "w-full", "items-center", "space-x-4"], ["icon", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "flex-1", "items-center", "justify-end", "sm:flex"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-l-none", "rounded-r", 3, "click"], [1, "divide-base-200", "flex", "h-[65vh]", "w-[calc(100vw-4rem)]", "items-center", "divide-x", "overflow-hidden"], [1, "hidden", "h-full", "max-w-[20rem]", "sm:flex", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col", "items-center", "sm:h-[65vh]"], [1, "border-base-200", "w-full", "border-b", 3, "viewChange", "view"], [1, "bg-base-200", "h-1/2", "flex-1", 3, "active", "selected", "favorites"], [1, "h-1/2", "w-full", "flex-1", 3, "is_displayed", "active"], [1, "bg-base-100", "absolute", "z-20", "block", "h-full", "w-full", "sm:relative", "sm:flex", "sm:h-[65vh]", "sm:max-w-[20rem]", 3, "activeChange", "toggleFav", "close", "desk", "active", "hide_map", "fav"], [1, "border-base-200", "flex", "w-full", "flex-col-reverse", "items-center", "justify-end", "border-t", "px-2", "pt-2", "pb-22", "sm:hidden"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "w-full", "sm:hidden"], ["btn", "", "matRipple", "", "name", "save-desks", 1, "w-full", "sm:mb-0", "sm:w-32", 3, "mat-dialog-close"], [1, "border-base-200", "hidden", "w-full", "items-center", "justify-between", "border-t", "p-2", "sm:flex"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "text-sm", "opacity-60"], ["btn", "", "matRipple", "", "name", "toggle-desk", 3, "click", "disabled"], [1, "mr-1"], [1, "bg-base-200", "h-1/2", "flex-1", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-1/2", "w-full", "flex-1", 3, "onSelect", "is_displayed", "active"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "w-full", "sm:hidden", 3, "click"]], template: function DeskSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2)(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
    \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_9_listener() {
      return ctx.view = "map";
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 5);
    \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_12_listener() {
      return ctx.view = "list";
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "main", 6);
    \u0275\u0275element(16, "desk-filters", 7);
    \u0275\u0275elementStart(17, "div", 8)(18, "desk-filters-display", 9);
    \u0275\u0275twoWayListener("viewChange", function DeskSelectModalComponent_Template_desk_filters_display_viewChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, DeskSelectModalComponent_Conditional_19_Template, 1, 3, "desk-list", 10)(20, DeskSelectModalComponent_Conditional_20_Template, 1, 2, "desk-map", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "desk-details", 12);
    \u0275\u0275listener("activeChange", function DeskSelectModalComponent_Template_desk_details_activeChange_21_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    })("toggleFav", function DeskSelectModalComponent_Template_desk_details_toggleFav_21_listener() {
      return ctx.toggleFavourite(ctx.displayed);
    })("close", function DeskSelectModalComponent_Template_desk_details_close_21_listener() {
      return ctx.displayed = null;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "footer", 13);
    \u0275\u0275conditionalCreate(23, DeskSelectModalComponent_Conditional_23_Template, 3, 3, "button", 14);
    \u0275\u0275elementStart(24, "button", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "footer", 16)(28, "button", 17)(29, "div", 18)(30, "icon", 19);
    \u0275\u0275text(31, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "p", 21);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 22);
    \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_38_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    });
    \u0275\u0275elementStart(39, "div", 18)(40, "icon", 19);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 23);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 31, "BOOKINGS.DESK_FIND"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", ctx.view !== "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 33, "COMMON.MAP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.view !== "list");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 35, "COMMON.LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("hide_levels", ctx.view !== "list");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("view", ctx.view);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view === "list" ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx.displayed)("inset-0", ctx.displayed);
    \u0275\u0275property("desk", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("hide_map", ctx.view === "map")("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.displayed ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("mb-2", ctx.displayed);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 37, "COMMON.VIEW_LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 39, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 41, "BOOKINGS.DESK_ADDED_COUNT", \u0275\u0275pureFunction1(46, _c010, ctx.selected.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 44, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
  }
}, dependencies: [
  DeskMapComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  DeskDetailsComponent,
  DeskListComponent,
  DeskFiltersComponent,
  DeskFiltersDisplayComponent
], encapsulation: 2 });
var DeskSelectModalComponent = _DeskSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskSelectModalComponent, [{
    type: Component,
    args: [{ selector: "desk-select-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'BOOKINGS.DESK_FIND' | translate }}</h3>
                <div class="hidden flex-1 items-center justify-end sm:flex">
                    <button
                        btn
                        matRipple
                        name="view-desk-map"
                        class="rounded-l rounded-r-none"
                        [class.inverse]="view !== 'map'"
                        (click)="view = 'map'"
                    >
                        {{ 'COMMON.MAP' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        name="view-desk-list"
                        class="rounded-l-none rounded-r"
                        [class.inverse]="view !== 'list'"
                        (click)="view = 'list'"
                    >
                        {{ 'COMMON.LIST' | translate }}
                    </button>
                </div>
            </header>
            <main
                class="divide-base-200 flex h-[65vh] w-[calc(100vw-4rem)] items-center divide-x overflow-hidden"
            >
                <desk-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view !== 'list'"
                ></desk-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <desk-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view"
                    ></desk-filters-display>
                    @if (view === 'list') {
                        <desk-list
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed = $event"
                            class="bg-base-200 h-1/2 flex-1"
                        ></desk-list>
                    } @else {
                        <desk-map
                            class="h-1/2 w-full flex-1"
                            [is_displayed]="!!displayed"
                            [active]="displayed?.id"
                            (onSelect)="displayed = $event"
                        >
                        </desk-map>
                    }
                </div>
                <desk-details
                    [desk]="displayed"
                    class="bg-base-100 absolute z-20 block h-full w-full sm:relative sm:flex sm:h-[65vh] sm:max-w-[20rem]"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id)"
                    [hide_map]="view === 'map'"
                    (activeChange)="
                        setSelected(displayed, !isSelected(displayed?.id))
                    "
                    [fav]="displayed && this.favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (close)="displayed = null"
                ></desk-details>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t px-2 pt-2 pb-22 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        name="desk-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-desks"
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:mb-0 sm:w-32"
                >
                    {{ 'COMMON.VIEW_LIST' | translate }}
                </button>
            </footer>
            <footer
                class="border-base-200 hidden w-full items-center justify-between border-t p-2 sm:flex"
            >
                <button
                    btn
                    matRipple
                    name="desk-return"
                    [mat-dialog-close]="selected"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
                <p class="text-sm opacity-60">
                    {{
                        'BOOKINGS.DESK_ADDED_COUNT'
                            | translate: { count: selected.length }
                    }}
                </p>
                <button
                    btn
                    matRipple
                    name="toggle-desk"
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.id)
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
      DeskMapComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      DeskDetailsComponent,
      DeskListComponent,
      DeskFiltersComponent,
      DeskFiltersDisplayComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSelectModalComponent, { className: "DeskSelectModalComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts", lineNumber: 192 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-details.component.ts
var _c011 = () => [];
var _c17 = () => ({ disable_pan: true, disable_zoom: true });
function NewDeskDetailsComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("images", ctx_r1.desk().images);
  }
}
function NewDeskDetailsComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275conditionalCreate(1, NewDeskDetailsComponent_Conditional_0_Conditional_0_Conditional_1_Template, 1, 1, "image-carousel", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.desk().images) == null ? null : tmp_2_0.length) ? 1 : -1);
  }
}
function NewDeskDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "section", 2);
  }
}
function NewDeskDetailsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function NewDeskDetailsComponent_Conditional_0_Conditional_33_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feat_r3, " ");
  }
}
function NewDeskDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, NewDeskDetailsComponent_Conditional_0_Conditional_33_For_5_Template, 3, 1, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.desk().features || \u0275\u0275pureFunction0(3, _c011));
  }
}
function NewDeskDetailsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275element(1, "interactive-map", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.desk().map_id || ctx_r1.desk().id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c17));
  }
}
function NewDeskDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, NewDeskDetailsComponent_Conditional_0_Conditional_0_Template, 2, 1, "section", 1)(1, NewDeskDetailsComponent_Conditional_0_Conditional_1_Template, 1, 0, "section", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function NewDeskDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function NewDeskDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "favorite");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275conditionalCreate(9, NewDeskDetailsComponent_Conditional_0_Conditional_9_Template, 1, 0, "div", 7);
    \u0275\u0275elementStart(10, "section", 8)(11, "h2", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 10)(14, "h2", 11);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "icon");
    \u0275\u0275text(19, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "icon");
    \u0275\u0275text(25, "desk");
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
    \u0275\u0275conditionalCreate(33, NewDeskDetailsComponent_Conditional_0_Conditional_33_Template, 6, 4, "section", 13);
    \u0275\u0275conditionalCreate(34, NewDeskDetailsComponent_Conditional_0_Conditional_34_Template, 2, 5, "section", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_5_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.desk().images) == null ? null : tmp_1_0.length) ? 0 : 1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav())("bg-info!", ctx_r1.fav());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav() ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_5_0 = ctx_r1.desk().images) == null ? null : tmp_5_0.length) ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk().display_name || ctx_r1.desk().name || ctx_r1.desk().id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, "BOOKINGS.DESK_COUNT_LONE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk().display_name || ctx_r1.desk().name || ctx_r1.desk().id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_10_0 = ctx_r1.desk().zone) == null ? null : tmp_10_0.display_name) || ((tmp_10_0 = ctx_r1.desk().zone) == null ? null : tmp_10_0.name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r1.desk().features) == null ? null : tmp_11_0.length) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_map() ? 34 : -1);
  }
}
function NewDeskDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_SELECT_MSG"), " ");
  }
}
var _NewDeskDetailsComponent = class _NewDeskDetailsComponent {
  constructor() {
    this.desk = input(void 0);
    this.fav = input(false);
    this.active = input(false);
    this.hide_map = input(false);
    this.close = output();
    this.toggleFav = output();
    this.activeChange = output();
    this.map_url = "";
    this.features = [];
  }
  ngOnChanges(changes) {
    if (changes.desk && this.desk()) {
      this.updateFeature();
    }
  }
  updateFeature() {
    this.map_url = this.desk().zone.map_id;
    const desk = this.desk();
    this.features = [
      {
        location: desk.map_id || desk.id,
        content: MapPinComponent
      }
    ];
  }
};
_NewDeskDetailsComponent.\u0275fac = function NewDeskDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewDeskDetailsComponent)();
};
_NewDeskDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskDetailsComponent, selectors: [["new-desk-details"]], inputs: { desk: [1, "desk"], fav: [1, "fav"], active: [1, "active"], hide_map: [1, "hide_map"] }, outputs: { close: "close", toggleFav: "toggleFav", activeChange: "activeChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "relative", "h-40", "w-full"], [1, "h-10", "w-full", "lg:hidden"], ["icon", "", "matRipple", "", "name", "close-desk-details", 1, "bg-base-200", "text-base-content", "absolute", "top-2", "left-2", "z-20", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite-details", 1, "bg-base-200", "absolute", "top-2", "right-2", "z-20", 3, "click"], [3, "className"], [1, "space-y-2", "px-2", "pt-0", "pb-2"], [1, "h-8", "w-full"], ["actions", "", 1, "z-0", "p-2"], [1, "mt-4", "mb-2", "text-2xl", "font-medium"], ["details", "", 1, "border-base-400", "relative", "space-y-2", "rounded-sm", "border", "px-3", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", 1, "border-base-400", "relative", "mt-4!", "space-y-2", "rounded-sm", "border", "px-2", "pt-1", "pb-1"], ["map", "", 1, "bg-base-200", "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded-sm", "sm:h-48"], [1, "absolute", "inset-0", 3, "images"], [1, "flex", "flex-wrap", "items-center"], ["for", "feat", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-2", "text-sm", "capitalize"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function NewDeskDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskDetailsComponent_Conditional_0_Template, 35, 18)(1, NewDeskDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.desk() ? 0 : 1);
  }
}, dependencies: [
  TranslatePipe,
  IconComponent,
  InteractiveMapComponent,
  ImageCarouselComponent,
  MatRippleModule,
  MatRipple
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=new-desk-details.component.css.map */"] });
var NewDeskDetailsComponent = _NewDeskDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskDetailsComponent, [{
    type: Component,
    args: [{ selector: "new-desk-details", template: `
        @if (desk()) {
            @if (desk().images?.length) {
                <section class="relative h-40 w-full">
                    @if (desk().images?.length) {
                        <image-carousel
                            [images]="desk().images"
                            class="absolute inset-0"
                        ></image-carousel>
                    }
                </section>
            } @else {
                <section class="h-10 w-full lg:hidden"></section>
            }
            <button
                icon
                matRipple
                name="close-desk-details"
                (click)="close.emit()"
                class="bg-base-200 text-base-content absolute top-2 left-2 z-20 lg:hidden"
            >
                <icon>arrow_back</icon>
            </button>
            <button
                icon
                matRipple
                name="toggle-desk-favourite-details"
                class="bg-base-200 absolute top-2 right-2 z-20"
                [class.text-info-content]="fav()"
                [class.bg-info!]="fav()"
                (click)="toggleFav.emit()"
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
            <div class="space-y-2 px-2 pt-0 pb-2">
                @if (!desk().images?.length) {
                    <div class="h-8 w-full"></div>
                }
                <section actions class="z-0 p-2">
                    <h2 class="mt-4 mb-2 text-2xl font-medium">
                        {{ desk().display_name || desk().name || desk().id }}
                    </h2>
                </section>
                <section
                    details
                    class="border-base-400 relative space-y-2 rounded-sm border px-3 pt-4 pb-2"
                >
                    <h2
                        class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 text-lg font-medium"
                    >
                        {{ 'BOOKINGS.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
                        <p>{{ 'BOOKINGS.DESK_COUNT_LONE' | translate }}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>desk</icon>
                        <p>
                            {{
                                desk().display_name || desk().name || desk().id
                            }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <p>
                            {{ desk().zone?.display_name || desk().zone?.name }}
                        </p>
                    </div>
                </section>
                @if (desk().features?.length) {
                    <section
                        facilities
                        class="border-base-400 relative mt-4! space-y-2 rounded-sm border px-2 pt-1 pb-1"
                    >
                        <h2
                            class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 text-lg font-medium"
                        >
                            {{ 'COMMON.FEATURES' | translate }}
                        </h2>
                        @for (feat of desk().features || []; track feat) {
                            <div class="flex flex-wrap items-center">
                                <div
                                    for="feat"
                                    class="border-base-300 m-1 rounded-full border px-4 py-2 text-sm capitalize"
                                >
                                    {{ feat }}
                                </div>
                            </div>
                        }
                    </section>
                }
                @if (!hide_map()) {
                    <section
                        map
                        class="bg-base-200 relative mx-auto h-64 w-full overflow-hidden rounded-sm sm:h-48"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="map_url"
                            [focus]="desk().map_id || desk().id"
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
                class="flex h-full w-full flex-col items-center justify-center space-y-2"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.DESK_SELECT_MSG' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      ImageCarouselComponent,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-desk-select-modal/new-desk-details.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=new-desk-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskDetailsComponent, { className: "NewDeskDetailsComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-details.component.ts", lineNumber: 164 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-filters-display.component.ts
var _c012 = () => [];
function NewDeskFiltersDisplayComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r0.start, ctx_r0.time_format), " \u2014 ", \u0275\u0275pipeBind2(2, 5, ctx_r0.end, ctx_r0.time_format), " ");
  }
}
function NewDeskFiltersDisplayComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewDeskFiltersDisplayComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function NewDeskFiltersDisplayComponent_For_8_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFeature(feat_r3, false));
    });
    \u0275\u0275elementStart(4, "icon", 6);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function NewDeskFiltersDisplayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function NewDeskFiltersDisplayComponent_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "icon", 6);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
var _NewDeskFiltersDisplayComponent = class _NewDeskFiltersDisplayComponent extends AsyncHandler {
  get all_day() {
    return this._state.form.value.all_day;
  }
  get start() {
    return this._state.form.value.date;
  }
  get end() {
    const { date, duration, all_day } = this._state.form.value;
    if (all_day)
      return endOfDay(date);
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this.view = input("list");
    this.viewChange = output();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
  }
};
_NewDeskFiltersDisplayComponent.\u0275fac = function NewDeskFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewDeskFiltersDisplayComponent)();
};
_NewDeskFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFiltersDisplayComponent, selectors: [["new-desk-filters-display"]], inputs: { view: [1, "view"] }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 12, consts: [["filters", "", 1, "border-base-300", "bg-base-100", "sticky", "-top-1", "z-20", "-mx-1", "mb-4!", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded-sm", "border", "p-1", "pr-10!", "sm:pr-1!"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", ""], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-desk-filter", 1, "-mr-4", 3, "click"], [1, "text-base"], ["icon", "", "matRipple", "", "name", "remove-desk-favs-filter", 1, "-mr-4", 3, "click"]], template: function NewDeskFiltersDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275conditionalCreate(5, NewDeskFiltersDisplayComponent_Conditional_5_Template, 3, 8);
    \u0275\u0275conditionalCreate(6, NewDeskFiltersDisplayComponent_Conditional_6_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, NewDeskFiltersDisplayComponent_For_8_Template, 6, 1, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275conditionalCreate(10, NewDeskFiltersDisplayComponent_Conditional_10_Template, 7, 3, "div", 4);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, ctx.start, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.all_day ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.all_day ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(((tmp_3_0 = \u0275\u0275pipeBind1(9, 7, ctx.options)) == null ? null : tmp_3_0.features) || \u0275\u0275pureFunction0(11, _c012));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(11, 9, ctx.options)) == null ? null : tmp_4_0.show_fav) ? 10 : -1);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, IconComponent, TranslatePipe, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  background-color: var(--base-100);\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-desk-filters-display.component.css.map */"] });
var NewDeskFiltersDisplayComponent = _NewDeskFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: "new-desk-filters-display", template: `
        <section
            filters
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start | date: 'mediumDate' }}</div>
            <div filter-item time>
                @if (!all_day) {
                    {{ start | date: time_format }} &mdash;
                    {{ end | date: time_format }}
                }
                @if (all_day) {
                    {{ 'COMMON.ALL_DAY' | translate }}
                }
            </div>
            @for (feat of (options | async)?.features || []; track feat) {
                <div filter-item features>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-desk-filter"
                        class="-mr-4"
                        (click)="setFeature(feat, false)"
                    >
                        <icon class="text-base">close</icon>
                    </button>
                </div>
            }
            @if ((options | async)?.show_fav) {
                <div filter-item>
                    <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-desk-favs-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_fav: false })"
                    >
                        <icon class="text-base">close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, IconComponent, TranslatePipe, MatRippleModule], styles: ["/* angular:styles/component:css;67385409023e7f9d0ece1c14973329370a186514fd6492d3d6b63f11e621d9e3;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-desk-select-modal/new-desk-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  background-color: var(--base-100);\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-desk-filters-display.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFiltersDisplayComponent, { className: "NewDeskFiltersDisplayComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-filters-display.component.ts", lineNumber: 84 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-filters.component.ts
var _c013 = () => ({ standalone: true });
var _c18 = () => [];
function NewDeskFiltersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.LOCATION"), " ");
  }
}
function NewDeskFiltersComponent_Conditional_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    \u0275\u0275property("value", reg_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r3.display_name || reg_r3.name, " ");
  }
}
function NewDeskFiltersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_Conditional_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, NewDeskFiltersComponent_Conditional_13_For_4_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(7, _c013))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.regions));
  }
}
function NewDeskFiltersComponent_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function NewDeskFiltersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 16);
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(2, NewDeskFiltersComponent_Conditional_15_For_3_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c013))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 3, ctx_r1.buildings));
  }
}
function NewDeskFiltersComponent_Conditional_17_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const lvl_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, lvl_r7.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function NewDeskFiltersComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15)(1, "div", 18);
    \u0275\u0275conditionalCreate(2, NewDeskFiltersComponent_Conditional_17_For_5_Conditional_2_Template, 5, 3, "div", 19);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r7.display_name || lvl_r7.name, " ");
  }
}
function NewDeskFiltersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_Conditional_17_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(4, NewDeskFiltersComponent_Conditional_17_For_5_Template, 5, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(9, _c013))("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 7, ctx_r1.levels));
  }
}
function NewDeskFiltersComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-checkbox", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewDeskFiltersComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 22)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 23);
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_Conditional_26_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c013))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("time", (tmp_7_0 = ctx_r1.form.get("date")) == null ? null : tmp_7_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewDeskFiltersComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "settings-toggle", 27);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_Conditional_27_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.options)) == null ? null : tmp_3_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c013));
  }
}
function NewDeskFiltersComponent_Conditional_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "settings-toggle", 29);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_Conditional_28_For_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      const feat_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r11, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const feat_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", feat_r11)("ngModel", (((tmp_12_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_12_0.features) || \u0275\u0275pureFunction0(5, _c18)).includes(feat_r11))("ngModelOptions", \u0275\u0275pureFunction0(6, _c013));
  }
}
function NewDeskFiltersComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, NewDeskFiltersComponent_Conditional_28_For_5_Template, 3, 7, "div", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 3, ctx_r1.features));
  }
}
var _NewDeskFiltersComponent = class _NewDeskFiltersComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.hide_levels = input(void 0);
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.setRegion = (r) => this._org.region = r;
  }
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get allow_time_changes() {
    return !!this._settings.get("app.desks.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.desks.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
};
_NewDeskFiltersComponent.\u0275fac = function NewDeskFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewDeskFiltersComponent)();
};
_NewDeskFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFiltersComponent, selectors: [["new-desk-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, decls: 30, vars: 36, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "divide-base-200", "relative", "z-0", "w-full", "divide-y", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "timezone"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["formControlName", "all_day"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"]], template: function NewDeskFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275conditionalCreate(10, NewDeskFiltersComponent_Conditional_10_Template, 3, 3, "label", 6);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "async");
    \u0275\u0275conditionalCreate(13, NewDeskFiltersComponent_Conditional_13_Template, 6, 8, "mat-form-field", 7);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalCreate(15, NewDeskFiltersComponent_Conditional_15_Template, 5, 6, "mat-form-field", 7);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275conditionalCreate(17, NewDeskFiltersComponent_Conditional_17_Template, 7, 10, "mat-form-field", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 8)(19, "label");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a-date-field", 9);
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_Template_a_date_field_ngModelChange_22_listener($event) {
      return ctx.form.patchValue({ date: $event });
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, NewDeskFiltersComponent_Conditional_25_Template, 4, 3, "div", 10);
    \u0275\u0275conditionalCreate(26, NewDeskFiltersComponent_Conditional_26_Template, 11, 17, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, NewDeskFiltersComponent_Conditional_27_Template, 8, 11, "section", 12);
    \u0275\u0275conditionalCreate(28, NewDeskFiltersComponent_Conditional_28_Template, 7, 5, "section", 13);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_16_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 17, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 19, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.hide_levels() && !(ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(11, 21, ctx.regions)) == null ? null : tmp_3_0.length)) && !(!ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(12, 23, ctx.buildings)) == null ? null : tmp_3_0.length) > 1) ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(14, 25, ctx.regions)) == null ? null : tmp_4_0.length) ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(16, 27, ctx.buildings)) == null ? null : tmp_5_0.length) > 1 ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_levels() ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 29, "FORM.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(35, _c013))("to", ctx.end_date)("timezone", ctx.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 31, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.allow_all_day ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_levels() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = \u0275\u0275pipeBind1(29, 33, ctx.features)) == null ? null : tmp_16_0.length) && !ctx.hide_levels() ? 28 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatRippleModule,
  SettingsToggleComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatCheckboxModule,
  MatCheckbox,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  BuildingPipe
], encapsulation: 2 });
var NewDeskFiltersComponent = _NewDeskFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFiltersComponent, [{
    type: Component,
    args: [{ selector: "new-desk-filters", template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <form
            class="divide-base-200 relative z-0 w-full divide-y p-2"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'BOOKINGS.DETAILS' | translate }}
                </h2>
                <div class="flex min-w-32 flex-1 flex-col">
                    @if (
                        !hide_levels() &&
                        !(use_region && (regions | async)?.length) &&
                        !(!use_region && (buildings | async)?.length > 1)
                    ) {
                        <label for="location">
                            {{ 'BOOKINGS.LOCATION' | translate }}
                        </label>
                    }
                    @if (use_region && (regions | async)?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.REGION_ANY' | translate"
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
                            <mat-select
                                name="building"
                                [ngModel]="building"
                                (ngModelChange)="building = $event"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building?.display_name || building?.name
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
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zone_id"
                                (ngModelChange)="
                                    setOptions({ zone_id: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                            >
                                @for (lvl of levels | async; track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl.parent_id
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

                <!-- Date -->
                <div class="flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [to]="end_date"
                        [timezone]="timezone"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_END' | translate }}</label>
                            <a-duration-field
                                formControlName="duration"
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [name]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="(options | async)?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
                </section>
            }
            @if ((features | async)?.length && !hide_levels()) {
                <section class="space-y-2" features>
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features | async; track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <settings-toggle
                                class="w-full capitalize"
                                [name]="feat"
                                [ngModel]="
                                    (
                                        (options | async)?.features || []
                                    ).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></settings-toggle>
                        </div>
                    }
                </section>
            }
        </form>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatCheckboxModule,
      FormsModule,
      ReactiveFormsModule,
      BuildingPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFiltersComponent, { className: "NewDeskFiltersComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-filters.component.ts", lineNumber: 237 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-list.component.ts
var _c014 = (a0) => ({ count: a0 });
function NewDeskListComponent_Conditional_8_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function NewDeskListComponent_Conditional_8_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const desk_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", desk_r2.images[0]);
  }
}
function NewDeskListComponent_Conditional_8_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
}
function NewDeskListComponent_Conditional_8_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 7)(1, "button", 8);
    \u0275\u0275listener("click", function NewDeskListComponent_Conditional_8_Conditional_0_For_2_Template_button_click_1_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectDesk(desk_r2));
    });
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275conditionalCreate(3, NewDeskListComponent_Conditional_8_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 10);
    \u0275\u0275conditionalCreate(4, NewDeskListComponent_Conditional_8_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 11)(5, NewDeskListComponent_Conditional_8_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "icon", 16);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275listener("click", function NewDeskListComponent_Conditional_8_Conditional_0_For_2_Template_button_click_14_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(desk_r2));
    });
    \u0275\u0275elementStart(15, "icon", 19);
    \u0275\u0275text(16, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const desk_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info!", ctx_r2.active() === desk_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(desk_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((desk_r2.images == null ? null : desk_r2.images.length) ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", desk_r2.name || desk_r2.id || "Desk", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (desk_r2.zone == null ? null : desk_r2.zone.display_name) || (desk_r2.zone == null ? null : desk_r2.zone.name) || "<No Level>", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(desk_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(desk_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function NewDeskListComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, NewDeskListComponent_Conditional_8_Conditional_0_For_2_Template, 17, 9, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "li", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r2.desks));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "COMMON.END_OF_LIST"), " ");
  }
}
function NewDeskListComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_LIST_EMPTY"), " ");
  }
}
function NewDeskListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskListComponent_Conditional_8_Conditional_0_Template, 7, 5, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, NewDeskListComponent_Conditional_8_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.desks)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function NewDeskListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.DESK_LIST_LOADING"), " ");
  }
}
var _NewDeskListComponent = class _NewDeskListComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this.active = input("");
    this.selected = input("");
    this.favorites = input([]);
    this.onSelect = output();
    this.toggleFav = output();
    this.desks = combineLatest([
      this._state.options,
      this._state.available_resources
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
      const a_fav = this.isFavourite(a.id) ? 1 : 0;
      const b_fav = this.isFavourite(b.id) ? 1 : 0;
      return b_fav - a_fav;
    })));
    this.loading = this._state.loading;
  }
  isFavourite(desk_id) {
    return this.favorites().includes(desk_id);
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
};
_NewDeskListComponent.\u0275fac = function NewDeskListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewDeskListComponent)();
};
_NewDeskListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskListComponent, selectors: [["new-desk-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 11, vars: 17, consts: [[1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["desk", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "border-info!"], [1, "bg-base-400", "rounded-sm", "p-2", "text-center", "text-sm", "opacity-30"], ["desk", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], ["name", "select-desk", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], [1, "flex-1", "space-y-2", "pt-2", "text-left"], [1, "w-[calc(100%-2rem)]", "truncate", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function NewDeskListComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(8, NewDeskListComponent_Conditional_8_Template, 3, 3);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275conditionalBranchCreate(10, NewDeskListComponent_Conditional_10_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(7, 9, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(15, _c014, ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.desks)) == null ? null : tmp_1_0.length) || 0), ((tmp_1_0 = \u0275\u0275pipeBind1(6, 7, ctx.desks)) == null ? null : tmp_1_0.length) || 0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind1(9, 13, ctx.loading)) == null ? null : tmp_2_0.length) ? 8 : 10);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  AuthenticatedImageDirective
], encapsulation: 2 });
var NewDeskListComponent = _NewDeskListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskListComponent, [{
    type: Component,
    args: [{ selector: "new-desk-list", template: `
        <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 px-2 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate
                        : { count: (desks | async)?.length || 0 }
                        : (desks | async)?.length || 0
            }}
        </p>
        @if (!(loading | async)?.length) {
            @if ((desks | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (desk of desks | async; track desk) {
                        <li
                            desk
                            class="border-base-200 bg-base-100 relative w-full overflow-hidden rounded-lg border shadow-sm"
                            [class.border-info!]="active() === desk.id"
                        >
                            <button
                                name="select-desk"
                                matRipple
                                class="flex h-full w-full p-2"
                                (click)="selectDesk(desk)"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl"
                                >
                                    @if (selected().includes(desk.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (desk.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="desk.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/desk-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1 space-y-2 pt-2 text-left">
                                    <div
                                        class="w-[calc(100%-2rem)] truncate font-medium"
                                    >
                                        {{ desk.name || desk.id || 'Desk' }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p class="text-xs">
                                            {{
                                                desk.zone?.display_name ||
                                                    desk.zone?.name ||
                                                    '&lt;No Level&gt;'
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                name="toggle-desk-favourite"
                                class="absolute top-1 right-1"
                                [class.text-info]="isFavourite(desk.id)"
                                (click)="toggleFav.emit(desk)"
                            >
                                <icon
                                    [className]="
                                        isFavourite(desk.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                        </li>
                    }
                    <li
                        class="bg-base-400 rounded-sm p-2 text-center text-sm opacity-30"
                    >
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </li>
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.DESK_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.DESK_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskListComponent, { className: "NewDeskListComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-list.component.ts", lineNumber: 139 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-map.component.ts
var _c015 = () => ({ controls: true });
var _c19 = () => ({ standalone: true });
function NewDeskMapComponent_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
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
function NewDeskMapComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, NewDeskMapComponent_Conditional_1_For_4_Conditional_2_Template, 5, 3, "div", 7);
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
function NewDeskMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NewDeskMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewDeskMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275repeaterCreate(3, NewDeskMapComponent_Conditional_1_For_4_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c19))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.levels));
  }
}
var _NewDeskMapComponent = class _NewDeskMapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.is_displayed = input(false);
    this.active = input("");
    this.onSelect = output();
    this.desks = this._state.available_resources;
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
    this.statuses = {};
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
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this._state.available_resources.pipe(map((desks) => desks.map((desk) => ({
      id: desk.map_id || desk.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectDesk(desk)
    }))));
    this.features = combineLatest([
      this._state.resources,
      this._state.available_resources
    ]).pipe(map(([desks]) => {
      return this._settings.get("app.desks.hide_user") ? [] : desks.map((desk) => ({
        location: desk.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: this._state.resourceUserName(desk.id),
          status: this.statuses[desk.id]
        },
        z_index: 20
      }));
    }));
    this.styles = combineLatest([
      this._state.resources,
      this._state.available_resources,
      this._change
    ]).pipe(map(([desks, free_desks]) => desks.reduce((styles, desk) => {
      const colours = this._settings.get("app.explore.colors") || {};
      if (!(desk.id in this.statuses))
        this.statuses[desk.id] = signal("not-bookable");
      const status = this.active() === desk.id ? "active" : free_desks.find((_) => _.id === desk.id) ? "free" : this._state.resourceUserName(desk.id) ? "busy" : "not-bookable";
      this.statuses[desk.id].set(status);
      styles[`#${desk.map_id || desk.id}`] = {
        fill: status === "active" ? "#512DA8" : colours[`desk-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  ngOnInit() {
    this.subscription("levels_update", this._state.options.subscribe(({ zone_id }) => {
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level = level;
    }));
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  setLevel(level) {
    this.setOptions({ zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(",").map((_) => parseFloat(_));
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
_NewDeskMapComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NewDeskMapComponent_BaseFactory;
  return function NewDeskMapComponent_Factory(__ngFactoryType__) {
    return (\u0275NewDeskMapComponent_BaseFactory || (\u0275NewDeskMapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewDeskMapComponent)))(__ngFactoryType__ || _NewDeskMapComponent);
  };
})();
_NewDeskMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskMapComponent, selectors: [["new-desk-map"]], inputs: { is_displayed: [1, "is_displayed"], active: [1, "active"] }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function NewDeskMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, NewDeskMapComponent_Conditional_1_Template, 6, 8, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275twoWayListener("zoomChange", function NewDeskMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
      return $event;
    })("centerChange", function NewDeskMapComponent_Template_interactive_map_centerChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 8, ctx.levels)) == null ? null : tmp_0_0.length) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.map_url);
    \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
    \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c015));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  InteractiveMapComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  TranslatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=new-desk-map.component.css.map */"] });
var NewDeskMapComponent = _NewDeskMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskMapComponent, [{
    type: Component,
    args: [{ selector: "new-desk-map", template: `
        <div class="border-base-200 bg-base-100 w-full border-b p-2">
            @if ((levels | async)?.length) {
                <mat-form-field
                    levels
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
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
            }
        </div>
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
      TranslatePipe,
      FormsModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;3e52039fa2b2dc4b43d4f232e06fb31261aaccd73f5b7c706cba74f59e7ddeb1;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-desk-select-modal/new-desk-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border-radius: 0;\n}\n/*# sourceMappingURL=new-desk-map.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskMapComponent, { className: "NewDeskMapComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-map.component.ts", lineNumber: 106 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-select-modal.component.ts
function NewDeskSelectModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-desk-filters-display", 26);
    \u0275\u0275twoWayListener("viewChange", function NewDeskSelectModalComponent_Conditional_21_Template_new_desk_filters_display_viewChange_0_listener($event) {
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
function NewDeskSelectModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-desk-list", 27);
    \u0275\u0275listener("toggleFav", function NewDeskSelectModalComponent_Conditional_22_Template_new_desk_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function NewDeskSelectModalComponent_Conditional_22_Template_new_desk_list_onSelect_0_listener($event) {
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
function NewDeskSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-desk-map", 28);
    \u0275\u0275listener("onSelect", function NewDeskSelectModalComponent_Conditional_23_Template_new_desk_map_onSelect_0_listener($event) {
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
function NewDeskSelectModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function NewDeskSelectModalComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set(null));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewDeskSelectModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function NewDeskSelectModalComponent_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_filters.set(!ctx_r1.show_filters()));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_filters() ? "close" : "filter_list");
  }
}
var FAV_DESK_KEY2 = "favourite_desks";
var _NewDeskSelectModalComponent = class _NewDeskSelectModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._dialog_ref = inject(MatDialogRef);
    this.selected = [];
    this.view = signal("list");
    this.displayed = signal(null);
    this.show_filters = signal(false);
  }
  get is_safari() {
    return isMobileSafari();
  }
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_DESK_KEY2) || [];
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state) {
      this.displayed.set(null);
      setTimeout(() => this._dialog_ref.close([item]), 50);
    }
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_DESK_KEY2, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_DESK_KEY2, fav_list.filter((_) => _ !== item.id));
    }
  }
};
_NewDeskSelectModalComponent.\u0275fac = function NewDeskSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewDeskSelectModalComponent)();
};
_NewDeskSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskSelectModalComponent, selectors: [["new-desk-select-modal"]], decls: 43, vars: 63, consts: [[1, "bg-base-100", "mb-18", "flex", "h-[calc(100vh-4.5rem)]", "max-h-[calc(100vh-4.5rem)]", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:m-0", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "max-h-[calc(100vh-7rem)]", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], ["list", "", 1, "border-base-300", "bg-base-200", "h-full", "w-full", "min-w-[20rem]", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "lg:block"], [3, "view"], [3, "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "is_displayed", "active"], [1, "border-base-300", "relative", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "z-20", "hidden", "border", "md:flex"], [3, "activeChange", "toggleFav", "close", "desk", "active", "hide_map", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-desk", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "onSelect", "is_displayed", "active"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "z-20", "hidden", "border", "md:flex", 3, "click"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function NewDeskSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function NewDeskSelectModalComponent_Template_button_click_6_listener() {
      return ctx.view.set("list");
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function NewDeskSelectModalComponent_Template_button_click_10_listener() {
      return ctx.view.set("map");
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "map");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 6)(15, "icon");
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "main", 7)(18, "div", 8);
    \u0275\u0275element(19, "new-desk-filters", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10);
    \u0275\u0275conditionalCreate(21, NewDeskSelectModalComponent_Conditional_21_Template, 1, 1, "new-desk-filters-display", 11);
    \u0275\u0275conditionalCreate(22, NewDeskSelectModalComponent_Conditional_22_Template, 1, 3, "new-desk-list", 12)(23, NewDeskSelectModalComponent_Conditional_23_Template, 1, 2, "new-desk-map", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275conditionalCreate(25, NewDeskSelectModalComponent_Conditional_25_Template, 3, 0, "button", 15);
    \u0275\u0275elementStart(26, "new-desk-details", 16);
    \u0275\u0275listener("activeChange", function NewDeskSelectModalComponent_Template_new_desk_details_activeChange_26_listener() {
      let tmp_0_0;
      return ctx.setSelected(ctx.displayed(), !ctx.isSelected((tmp_0_0 = ctx.displayed()) == null ? null : tmp_0_0.id));
    })("toggleFav", function NewDeskSelectModalComponent_Template_new_desk_details_toggleFav_26_listener() {
      return ctx.toggleFavourite(ctx.displayed());
    })("close", function NewDeskSelectModalComponent_Template_new_desk_details_close_26_listener() {
      return ctx.displayed.set(null);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, NewDeskSelectModalComponent_Conditional_27_Template, 3, 1, "button", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "footer", 18)(29, "button", 19)(30, "div", 20)(31, "icon", 21);
    \u0275\u0275text(32, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 22);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 23);
    \u0275\u0275listener("click", function NewDeskSelectModalComponent_Template_button_click_36_listener() {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 53, "BOOKINGS.DESK_FIND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-base-100", ctx.view() !== "list")("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 55, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-base-100", ctx.view() !== "map")("bg-secondary", ctx.view() === "map")("text-secondary-content", ctx.view() === "map");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 57, "COMMON.MAP"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("hidden", !ctx.show_filters());
    \u0275\u0275advance();
    \u0275\u0275property("hide_levels", ctx.view() !== "list");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx.view() !== "list" ? ctx.displayed() ? "calc(100vw - 44rem)" : "calc(100vw - 24rem)" : "");
    \u0275\u0275classProp("hidden", ctx.show_filters() || ctx.displayed())("sm:hidden", ctx.displayed())("md:block", !ctx.displayed())("p-2", ctx.view() === "list");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "list" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "list" ? 22 : 23);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx.show_filters() || !ctx.displayed())("sm:hidden", !ctx.displayed())("md:block", ctx.displayed())("lg:block", ctx.view() === "list");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.displayed() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("desk", ctx.displayed())("active", ctx.selected_ids.includes((tmp_25_0 = ctx.displayed()) == null ? null : tmp_25_0.id))("hide_map", ctx.view() === "map")("fav", ctx.displayed() && ctx.favorites.includes((tmp_27_0 = ctx.displayed()) == null ? null : tmp_27_0.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.displayed() ? 27 : -1);
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
  NewDeskListComponent,
  NewDeskDetailsComponent,
  NewDeskFiltersComponent,
  NewDeskMapComponent,
  NewDeskFiltersDisplayComponent
], styles: ["\n\n@media screen and (max-width: 640px) {\n  [list][_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=new-desk-select-modal.component.css.map */"] });
var NewDeskSelectModalComponent = _NewDeskSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskSelectModalComponent, [{
    type: Component,
    args: [{ selector: "new-desk-select-modal", template: `
        <div
            class="bg-base-100 mb-18 flex h-[calc(100vh-4.5rem)] max-h-[calc(100vh-4.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
            [style.height]="is_safari ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.DESK_FIND' | translate }}
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
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters()"
                >
                    <new-desk-filters
                        [hide_levels]="view() !== 'list'"
                    ></new-desk-filters>
                </div>
                <div
                    list
                    class="border-base-300 bg-base-200 h-full w-full min-w-[20rem] overflow-auto rounded-sm border sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || displayed()"
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
                        <new-desk-filters-display
                            [(view)]="view"
                        ></new-desk-filters-display>
                    }
                    @if (view() === 'list') {
                        <new-desk-list
                            [active]="displayed()?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                        ></new-desk-list>
                    } @else {
                        <new-desk-map
                            class="h-full min-h-[60vh] w-full"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id"
                            (onSelect)="displayed.set($event)"
                        >
                        </new-desk-map>
                    }
                </div>
                <div
                    class="border-base-300 relative h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem]"
                    [class.hidden]="show_filters() || !displayed()"
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
                    <new-desk-details
                        [desk]="displayed()"
                        [active]="selected_ids.includes(displayed()?.id)"
                        [hide_map]="view() === 'map'"
                        (activeChange)="
                            setSelected(
                                displayed(),
                                !isSelected(displayed()?.id)
                            )
                        "
                        [fav]="
                            displayed() &&
                            this.favorites.includes(displayed()?.id)
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></new-desk-details>
                </div>
                @if (!displayed()) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters.set(!show_filters())"
                    >
                        <icon>{{
                            show_filters() ? 'close' : 'filter_list'
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
                    name="desk-return"
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
                    name="toggle-desk"
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
      NewDeskListComponent,
      NewDeskDetailsComponent,
      NewDeskFiltersComponent,
      NewDeskMapComponent,
      NewDeskFiltersDisplayComponent
    ], styles: ["/* angular:styles/component:css;14c104e27b816f236ef6867be998c5d0dffab973e73a494beaad3760a220040a;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-desk-select-modal/new-desk-select-modal.component.ts */\n@media screen and (max-width: 640px) {\n  [list] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=new-desk-select-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskSelectModalComponent, { className: "NewDeskSelectModalComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-select-modal.component.ts", lineNumber: 231 });
})();

// libs/bookings/src/lib/desk-list-field.component.ts
var _c016 = () => [];
var _c110 = () => ({ standalone: true });
function DeskListFieldComponent_For_2_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 23);
    \u0275\u0275listener("ngModelChange", function DeskListFieldComponent_For_2_Conditional_1_For_5_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setFeatures(opt_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", (ctx_r3.selected_features() || \u0275\u0275pureFunction0(3, _c016)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c110));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3, " ");
  }
}
function DeskListFieldComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 20);
    \u0275\u0275text(2, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275repeaterCreate(4, DeskListFieldComponent_For_2_Conditional_1_For_5_Template, 2, 5, "mat-checkbox", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.features());
  }
}
function DeskListFieldComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r5.images[0]);
  }
}
function DeskListFieldComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
}
function DeskListFieldComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, DeskListFieldComponent_For_2_Conditional_1_Template, 6, 0, "div", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275conditionalCreate(3, DeskListFieldComponent_For_2_Conditional_3_Template, 1, 1, "img", 8)(4, DeskListFieldComponent_For_2_Conditional_4_Template, 1, 0, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "icon", 13);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "button", 15);
    \u0275\u0275listener("click", function DeskListFieldComponent_For_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeResources());
    });
    \u0275\u0275elementStart(15, "div", 16)(16, "icon");
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 17);
    \u0275\u0275listener("click", function DeskListFieldComponent_For_2_Template_button_click_20_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeResource(item_r5));
    });
    \u0275\u0275elementStart(21, "div", 16)(22, "icon");
    \u0275\u0275text(23, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function DeskListFieldComponent_For_2_Template_button_click_26_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFavourite(item_r5));
    });
    \u0275\u0275elementStart(27, "icon", 19);
    \u0275\u0275text(28, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r3.features()) == null ? null : tmp_10_0.length) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r5.images == null ? null : item_r5.images.length) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.name || item_r5.id || item_r5.map_id || "Desk", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (item_r5.zone == null ? null : item_r5.zone.display_name) || (item_r5.zone == null ? null : item_r5.zone.name), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 9, "COMMON.CHANGE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 11, "COMMON.REMOVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r3.favorites.includes(item_r5 == null ? null : item_r5.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r3.favorites.includes(item_r5 == null ? null : item_r5.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
var EMPTY_FAVS = [];
var _DeskListFieldComponent = class _DeskListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.features = input([]);
    this.room_size = signal(3);
    this.items = signal([]);
    this.disabled = signal(false);
    this.selected_features = signal([]);
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
  }
  get favorites() {
    return this._settings.get(FAV_DESK_KEY) || EMPTY_FAVS;
  }
  /** Add or edit selected items */
  changeResources() {
    const ref = this._dialog.open(NewDeskSelectModalComponent, {
      data: {
        items: this.items,
        options: { capacity: this.room_size() }
      }
    });
    ref.afterClosed().subscribe((items) => {
      if (!items)
        items = ref.componentInstance.selected;
      this.setValue(items);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.items().filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.items.set(new_value);
    if (this._onChange)
      this._onChange(this.items());
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.items.set(value || []);
  }
  setFeatures(opt, value) {
    const features = this.selected_features() || [];
    if (value) {
      this.selected_features.set([...features, opt]);
    } else {
      this.selected_features.set(features.filter((f) => f !== opt));
    }
  }
  toggleFavourite(space) {
    if (!space?.id)
      return;
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_DESK_KEY, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_DESK_KEY, fav_list.filter((_) => _ !== space.id));
    }
  }
};
_DeskListFieldComponent.\u0275fac = function DeskListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskListFieldComponent)();
};
_DeskListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskListFieldComponent, selectors: [["desk-list-field"]], inputs: { features: [1, "features"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DeskListFieldComponent),
    multi: true
  }
])], decls: 12, vars: 3, consts: [["list", "", 1, "space-y-2"], ["desk", "", 1, "border-base-200", "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "p-2", "shadow-sm"], ["btn", "", "matRipple", "", "name", "add-desk", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], [1, "flex", "flex-col"], [1, "bg-base-200", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "absolute", "right-0", "bottom-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-desk", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-desk", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], ["for", "title"], ["features", "", 1, "flex", "flex-wrap", "items-center", "space-x-2"], [3, "ngModel", "ngModelOptions"], [3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function DeskListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, DeskListFieldComponent_For_2_Template, 29, 13, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function DeskListFieldComponent_Template_button_click_3_listener() {
      return ctx.changeResources();
    });
    \u0275\u0275elementStart(4, "div", 3)(5, "icon");
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 4);
    \u0275\u0275element(11, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.items());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "BOOKINGS.DESK_ADD"));
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatCheckboxModule,
  MatCheckbox,
  FormsModule,
  NgControlStatus,
  NgModel,
  AuthenticatedImageDirective
], encapsulation: 2 });
var DeskListFieldComponent = _DeskListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskListFieldComponent, [{
    type: Component,
    args: [{ selector: `desk-list-field`, template: `
        <div list class="space-y-2">
            @for (item of items(); track item) {
                <div
                    desk
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    @if (features()?.length) {
                        <div class="flex flex-col">
                            <label for="title">Type</label>
                            <div
                                features
                                class="flex flex-wrap items-center space-x-2"
                            >
                                @for (opt of features(); track opt) {
                                    <mat-checkbox
                                        [ngModel]="
                                            (
                                                selected_features() || []
                                            ).includes(opt)
                                        "
                                        (ngModelChange)="
                                            setFeatures(opt, $event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    >
                                        {{ opt }}
                                    </mat-checkbox>
                                }
                            </div>
                        </div>
                    }
                    <div
                        class="bg-base-200 mr-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl"
                    >
                        @if (item.images?.length) {
                            <img
                                auth
                                [source]="item.images[0]"
                                class="min-h-full object-cover"
                            />
                        } @else {
                            <img
                                class="m-auto"
                                src="assets/icons/desk-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="space-y-2 pb-4">
                        <div class="font-medium">
                            {{ item.name || item.id || item.map_id || 'Desk' }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">place</icon>
                            <p>
                                {{ item.zone?.display_name || item.zone?.name }}
                            </p>
                        </div>
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                name="edit-desk"
                                class="clear"
                                (click)="changeResources()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>edit</icon>
                                    {{ 'COMMON.CHANGE' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                name="remove-desk"
                                class="clear"
                                (click)="removeResource(item)"
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
                        name="toggle-desk-favourite"
                        class="absolute top-1 right-1"
                        [class.text-info]="favorites.includes(item?.id)"
                        (click)="toggleFavourite(item)"
                    >
                        <icon
                            [className]="
                                favorites.includes(item?.id)
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
            name="add-desk"
            class="inverse mt-2 w-full"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'BOOKINGS.DESK_ADD' | translate }}</span>
            </div>
        </button>
        <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
            <div class="min-w-[256px] flex-1 space-y-2"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DeskListFieldComponent),
        multi: true
      }
    ], imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatCheckboxModule,
      FormsModule,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListFieldComponent, { className: "DeskListFieldComponent", filePath: "libs/bookings/src/lib/desk-list-field.component.ts", lineNumber: 160 });
})();

// libs/bookings/src/lib/desk-confirm-modal.component.ts
function DeskConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskConfirmModalComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-user-search-field", 11);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_Conditional_5_Conditional_1_Template_a_user_search_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.host, $event) || (ctx_r2.host = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.host);
  }
}
function DeskConfirmModalComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r2.date, "mediumDate"), " ");
  }
}
function DeskConfirmModalComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-date-field", 12);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_Conditional_5_Conditional_7_Template_a_date_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.date, $event) || (ctx_r2.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.date);
  }
}
function DeskConfirmModalComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label");
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_Conditional_5_Conditional_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.reason, $event) || (ctx_r2.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.reason);
  }
}
function DeskConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, DeskConfirmModalComponent_Conditional_5_Conditional_1_Template, 5, 4, "div", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DeskConfirmModalComponent_Conditional_5_Conditional_6_Template, 3, 4, "div", 6)(7, DeskConfirmModalComponent_Conditional_5_Conditional_7_Template, 1, 1, "a-date-field", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, DeskConfirmModalComponent_Conditional_5_Conditional_8_Template, 5, 1, "div", 8);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "footer", 9)(12, "button", 10);
    \u0275\u0275listener("click", function DeskConfirmModalComponent_Conditional_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirm());
    });
    \u0275\u0275text(13, "Confirm");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_set_host ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "FORM.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.can_set_date() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.hide_reason ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Your desk", ctx_r2.desks.length === 1 ? "" : "s", " will be ", ctx_r2.desk_list, " on ", (ctx_r2.level == null ? null : ctx_r2.level.display_name) || (ctx_r2.level == null ? null : ctx_r2.level.name), " ");
  }
}
function DeskConfirmModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading);
  }
}
var _DeskConfirmModalComponent = class _DeskConfirmModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.event = output();
    this.desks = this._data.desks || [];
    this.date = this._data.date;
    this.host = this._data.host;
    this.can_set_date = signal(this._data.can_set_date);
    this.reason = this._data.reason;
    this.level = this._data.level;
  }
  get desk_list() {
    return this.desks.map((_) => _.name).join(", ");
  }
  get hide_reason() {
    return !!this._settings.get("app.desks.hide_reason");
  }
  get can_set_host() {
    return !!this._settings.get("app.desks.can_book_for_others");
  }
  confirm() {
    this.loading = "Requesting desk booking...";
    this.event.emit({ reason: "done" });
  }
};
_DeskConfirmModalComponent.\u0275fac = function DeskConfirmModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskConfirmModalComponent)();
};
_DeskConfirmModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskConfirmModalComponent, selectors: [["desk-flow-confirm-modal-component"]], outputs: { event: "event" }, decls: 7, vars: 2, consts: [[1, "flex-1"], ["icon", "", "mat-dialog-close", ""], ["load", "", 1, "flex", "flex-col", "items-center", "justify-center", "p-12"], [1, "p-4"], ["host", "", 1, "flex", "flex-col"], [1, "mb-4"], ["date", ""], [3, "ngModel"], ["reason", "", 1, "mb-4", "flex", "flex-col"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "mb-4", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["appearance", "outline"], ["matInput", "", "placeholder", "Reason", 3, "ngModelChange", "ngModel"], [1, "mb-4", 3, "diameter"]], template: function DeskConfirmModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2, "Confirm Booking");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 0);
    \u0275\u0275conditionalCreate(4, DeskConfirmModalComponent_Conditional_4_Template, 3, 0, "button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DeskConfirmModalComponent_Conditional_5_Template, 14, 9)(6, DeskConfirmModalComponent_Conditional_6_Template, 4, 2, "main", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 5 : 6);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  TranslatePipe,
  IconComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  DateFieldComponent,
  UserSearchFieldComponent,
  MatDialogModule,
  MatDialogClose,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n/*# sourceMappingURL=desk-confirm-modal.component.css.map */"] });
var DeskConfirmModalComponent = _DeskConfirmModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-confirm-modal-component", template: `
        <header>
            <h2>Confirm Booking</h2>
            <div class="flex-1"></div>
            @if (!loading) {
                <button icon mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="p-4">
                @if (can_set_host) {
                    <div host class="flex flex-col">
                        <label>{{ 'FORM.HOST' | translate }}</label>
                        <a-user-search-field
                            [(ngModel)]="host"
                            class="mb-4"
                        ></a-user-search-field>
                    </div>
                }
                <div class="mb-4">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    @if (!can_set_date()) {
                        <div date>
                            {{ date | date: 'mediumDate' }}
                        </div>
                    } @else {
                        <a-date-field [(ngModel)]="date"></a-date-field>
                    }
                </div>
                @if (!hide_reason) {
                    <div reason class="mb-4 flex flex-col">
                        <label>Reason</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [(ngModel)]="reason"
                                placeholder="Reason"
                            />
                        </mat-form-field>
                    </div>
                }
                <p>
                    Your desk{{ desks.length === 1 ? '' : 's' }} will be
                    {{ desk_list }} on
                    {{ level?.display_name || level?.name }}
                </p>
            </main>
            <footer class="flex items-center justify-center p-2">
                <button btn matRipple (click)="confirm()">Confirm</button>
            </footer>
        } @else {
            <main load class="flex flex-col items-center justify-center p-12">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      DateFieldComponent,
      UserSearchFieldComponent,
      MatDialogModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;7f15cc7bc0e650ce9b57aff1009958572df1fa928df57767e4e3933e937e548b;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-confirm-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n/*# sourceMappingURL=desk-confirm-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskConfirmModalComponent, { className: "DeskConfirmModalComponent", filePath: "libs/bookings/src/lib/desk-confirm-modal.component.ts", lineNumber: 115 });
})();

// libs/bookings/src/lib/desk.service.ts
var _DesksService = class _DesksService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.can_set_date = true;
    this.error_on_host = true;
  }
  async bookDesk({ desks, host, reason, attendees, date }) {
    if (this.error_on_host && !host) {
      return notifyError("You need to select a host to book a desk.");
    } else {
      host = host || currentUser();
    }
    reason = reason || "";
    const level = this._org.levelWithID(desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]);
    let ref = this._dialog.open(DeskQuestionsModalComponent);
    let success = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().pipe(map((_) => null)).toPromise()
    ]);
    if (!success)
      return;
    ref.close();
    ref = this._dialog.open(DeskConfirmModalComponent, {
      data: {
        host,
        desks,
        date: date ? new Date(date) : /* @__PURE__ */ new Date(),
        reason,
        level,
        can_set_date: this.can_set_date
      }
    });
    success = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().pipe(map((_) => null)).toPromise()
    ]);
    if (!success)
      return;
    host = ref.componentInstance.host || host;
    date = ref.componentInstance.date || date;
    reason = ref.componentInstance.reason || reason;
    if (!host) {
      ref.close();
      return notifyError("You need to select a host to book a desk. ");
    }
    ref.componentInstance.loading = "Checking for existing desk bookings...";
    const bookings = await queryBookings({
      type: "desk",
      period_start: getUnixTime(startOfDay(date || /* @__PURE__ */ new Date())),
      period_end: getUnixTime(endOfDay(date || /* @__PURE__ */ new Date()))
    }).toPromise();
    const desk_list = bookings.filter((d) => d.user_email?.toLowerCase() === host.email?.toLowerCase());
    if (desk_list?.length) {
      ref.close();
      return notifyError("You currently already have a desk booked for the selected date.");
    }
    ref.componentInstance.loading = "Booking desk...";
    const users = [host, ...attendees || []];
    await Promise.all([
      desks.map((desk, idx) => this.makeDeskBooking(desk, host, date.valueOf() || (/* @__PURE__ */ new Date()).valueOf(), reason, users[idx]))
    ]);
    notifySuccess("Successfully booked desk");
    ref.close();
    return true;
  }
  async makeDeskBooking(desk, host, date, reason, for_user = null) {
    const location = `${desk.zone?.name}-${desk.id}`;
    const level = this._org.levelWithID(desk.zone instanceof Array ? desk.zone : [desk.zone?.id]);
    const zones = desk.zone?.id ? [desk.zone?.id, level?.parent_id] : [level?.parent_id];
    const booking_data = {
      booking_start: getUnixTime(startOfDay(date)),
      user_id: for_user?.id || host.id,
      user_name: for_user?.name || host.name,
      user_email: for_user?.email || host.email,
      booking_end: Math.floor(endOfDay(date).valueOf() / 1e3),
      asset_id: desk.id,
      asset_name: desk.name,
      title: reason,
      description: location,
      zones,
      booking_type: "desk",
      extension_data: {
        map_id: desk?.map_id || desk?.id,
        groups: desk.groups,
        for_user: for_user?.email
      }
    };
    return saveBooking(booking_data).toPromise();
  }
};
_DesksService.\u0275fac = function DesksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksService)();
};
_DesksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksService, factory: _DesksService.\u0275fac, providedIn: "root" });
var DesksService = _DesksService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/bookings/src/lib/invite-visitor-form.component.ts
var _c017 = () => ({ standalone: true });
var _c111 = (a0, a1) => ({ name: a0, count: a1 });
var _c2 = (a0, a1, a2) => ({ location: a0, date: a1, time: a2 });
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 22)(7, "mat-select", 25);
    \u0275\u0275listener("ngModelChange", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ zones: [$event] }));
    });
    \u0275\u0275repeaterCreate(8, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_For_9_Template, 2, 2, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r3.form.value.zones[0])("ngModelOptions", \u0275\u0275pureFunction0(7, _c017));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 5, ctx_r3.buildings));
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_For_12_Template_mat_option_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.setVisitor(item_r8));
    });
    \u0275\u0275elementStart(1, "div", 35)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("value", item_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r8.email, " ", item_r8.company ? "| " + item_r8.company : "", " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_For_28_Template_mat_option_click_0_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.setVisitor(item_r10));
    });
    \u0275\u0275elementStart(1, "div", 35)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275property("value", item_r10.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r10.email, " ", item_r10.company ? "| " + item_r10.company : "", " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 22)(7, "input", 30);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("focus", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.filterVisitors(ctx_r3.form.value.asset_name));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(11, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_For_12_Template, 6, 4, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "label", 31);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 22)(20, "input", 32);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("focus", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_Template_input_focus_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.filterVisitors(ctx_r3.form.value.asset_id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-autocomplete", null, 1);
    \u0275\u0275repeaterCreate(27, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_For_28_Template, 6, 4, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 10)(30, "label", 29);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 22);
    \u0275\u0275element(34, "input", 33);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const name_auto_r11 = \u0275\u0275reference(10);
    const email_auto_r12 = \u0275\u0275reference(26);
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "BOOKINGS.VISITOR_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 11, "BOOKINGS.VISITOR_NAME_PLACEHOLDER"))("matAutocomplete", name_auto_r11);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.filtered_visitors);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "BOOKINGS.VISITOR_EMAIL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 15, "BOOKINGS.VISITOR_EMAIL_PLACEHOLDER"))("matAutocomplete", email_auto_r12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 17, "FORM.EMAIL_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.filtered_visitors);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 19, "BOOKINGS.VISITOR_COMPANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 21, "BOOKINGS.VISITOR_COMPANY"));
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-list-field", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOOKINGS.VISITOR_LIST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("guests_only", true);
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 22);
    \u0275\u0275element(5, "input", 39);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "BOOKINGS.VISITOR_PASS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "BOOKINGS.VISITOR_PASS_PLACEHOLDER"));
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275conditionalCreate(1, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_Template, 11, 8, "div", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 10)(4, "label", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "a-date-field", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14)(12, "label", 15);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a-time-field", 16);
    \u0275\u0275listener("ngModelChange", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Template_a_time_field_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "label", 17);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "a-duration-field", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_25_Template, 7, 3, "div", 19);
    \u0275\u0275conditionalCreate(26, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_26_Template, 36, 23)(27, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_27_Template, 7, 5, "div", 20);
    \u0275\u0275elementStart(28, "div", 10)(29, "label", 21);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 22);
    \u0275\u0275element(33, "input", 23);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_35_Template, 7, 6, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(2, 17, ctx_r3.buildings)) == null ? null : tmp_4_0.length) > 1 ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 19, "FORM.DATE"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 21, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(29, _c017))("disabled", ctx_r3.form.value.all_day)("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 23, "FORM.TIME_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r3.form.value.date)("max", ctx_r3.max_duration)("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.can_book_for_others ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.multiple ? 26 : 27);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 25, "BOOKINGS.VISITOR_REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 27, "BOOKINGS.VISITOR_REASON_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.allow_pass_number ? 35 : -1);
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Template, 36, 30, "form", 7);
    \u0275\u0275elementStart(6, "div", 8)(7, "button", 9);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendInvite());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.VISITOR_INVITE_TITLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.form ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "BOOKINGS.VISITOR_SEND"), " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 40);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "BOOKINGS.VISITOR_SENDING"));
  }
}
function InviteVisitorFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InviteVisitorFormComponent_Conditional_0_Conditional_0_Template, 10, 7, "div", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, InviteVisitorFormComponent_Conditional_0_Conditional_2_Template, 5, 4, "div", 4);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(1, 1, ctx_r3.loading) && !ctx_r3.loading_many ? 0 : 2);
  }
}
function InviteVisitorFormComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "a", 48);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 49);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 50);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 51);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 52);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "icon", 53);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r3.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r3.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r3.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
function InviteVisitorFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 41)(2, "h2", 42);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "img", 43);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, InviteVisitorFormComponent_Conditional_1_Conditional_11_Template, 20, 21, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 45)(13, "div", 46)(14, "button", 47);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDone());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 47);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.sent = false);
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, ctx_r3.multiple ? "BOOKINGS.VISITOR_SENT_MULTIPLE" : "BOOKINGS.VISITOR_SENT_SINGLE", \u0275\u0275pureFunction2(21, _c111, (ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_name) || (ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_id), ctx_r3.last_count || 1)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 14, "BOOKINGS.VISITOR_SENT_MSG", \u0275\u0275pureFunction3(24, _c2, (ctx_r3.building == null ? null : ctx_r3.building.display_name) || (ctx_r3.building == null ? null : ctx_r3.building.name), \u0275\u0275pipeBind2(8, 8, ctx_r3.last_success == null ? null : ctx_r3.last_success.date, "mediumDate"), \u0275\u0275pipeBind2(9, 11, ctx_r3.last_success == null ? null : ctx_r3.last_success.date, ctx_r3.time_format))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.show_links ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "BOOKINGS.VISITOR_BOOK_ANOTHER"), " ");
  }
}
var _InviteVisitorFormComponent = class _InviteVisitorFormComponent extends AsyncHandler {
  get max_duration() {
    return this._settings.get("app.visitors.max_duration") || this._settings.get("app.bookings.max_duration") || 4 * 60;
  }
  get allow_pass_number() {
    return this._settings.get("app.visitors.allow_pass_number");
  }
  get multiple() {
    return this._settings.get("app.bookings.multiple_visitors");
  }
  get can_book_for_others() {
    return this._settings.get("app.bookings.can_book_for_others");
  }
  get show_links() {
    return this._settings.get("app.visitors.show_calendar_links");
  }
  get building() {
    return this._settings.get("app.use_region") ? this._org.region : this._org.building;
  }
  get form() {
    return this._service.form;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor() {
    super();
    this._service = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.date = input(void 0);
    this.done = output();
    this.outlook_link = "";
    this.google_link = "";
    this.ical_link = "";
    this.sent = false;
    this.loading = this._service.loading;
    this.loading_many = false;
    this.buildings = this._org.active_buildings;
    this.last_success = this._service.last_success;
    this.last_count = 0;
    this.visitors = [];
    this.filtered_visitors = [];
  }
  async ngOnInit() {
    this.sent = false;
    this._service.clearOldState();
    await this.initFormZone();
    this.form.get("asset_id").setValidators([Validators.required, Validators.email]);
    const visitors = this._settings.get("visitor-invitees") || [];
    for (const item of visitors) {
      const [email, name, company] = item.split("|");
      this.visitors.push({ email, name, company });
    }
    this.filterVisitors("");
    this.subscription("email", this.form.get("asset_id").valueChanges.subscribe((_) => this.filterVisitors(_)));
    this.subscription("name", this.form.get("asset_name").valueChanges.subscribe((_) => this.filterVisitors(_)));
    if (this.multiple)
      this.form.patchValue({ asset_id: "multiple@place.tech" });
    this.form.patchValue({ title: "Visit" });
  }
  ngOnChanges(changes) {
    const date = this.date();
    if (changes.date && date) {
      this.form.patchValue({ date });
    }
  }
  setVisitor(item) {
    this.form.patchValue({
      asset_id: item.email,
      asset_name: item.name,
      company: item.company,
      phone: item.phone
    });
  }
  filterVisitors(filter) {
    const s = (filter || "").toLowerCase();
    this.filtered_visitors = this.visitors.filter(({ email, name, company }) => email.toLowerCase().includes(s) || name.toLowerCase().includes(s) || company.toLowerCase().includes(s));
  }
  onDone() {
    this.done.emit();
    this.sent = false;
  }
  async sendInvite() {
    this.form.markAllAsTouched();
    if (!this.form.valid || this.multiple && !this.form.value.assets.length) {
      return notifyError(`Some fields are invalid. [${getInvalidFields(this.form).join(", ") || "visitors"}]`);
    }
    if (!this.form.value.user_email || !this.can_book_for_others) {
      this.form.patchValue({ user: currentUser() });
    }
    this.form.patchValue({
      description: this.form.value.description || this.form.value.title
    });
    const { asset_id, asset_name, company, assets } = this.form.value;
    const visitor_details = `${asset_id}|${asset_name}|${company}`;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", [
      ...old_visitors.filter((_) => !_.includes(asset_id)),
      visitor_details
    ]);
    await (this.multiple ? this._bookForMany() : this._bookForOne());
    this.last_success = this._service.last_success;
    if (this.last_success)
      this._generateLinks();
    await this.initFormZone();
    this.sent = true;
  }
  async initFormZone() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this._service.loadForm();
    this._service.setOptions({ type: "visitor" });
    if (!this.form.value.id)
      this._service.newForm("visitor");
    this.form.patchValue({
      booking_type: "visitor",
      zones: [this._org.building?.id]
    });
    if (this.multiple)
      this.form.patchValue({ asset_id: "multiple@place.tech" });
  }
  async _bookForOne() {
    const value = this.form.value;
    this.form.patchValue({
      name: value.asset_name,
      attendees: [
        new User({
          name: value.asset_name,
          email: value.asset_id,
          organisation: value.company,
          phone: value.phone
        })
      ]
    });
    await this._service.postForm().catch((e) => {
      notifyError(e);
      throw e;
    });
  }
  async _bookForMany() {
    this.loading_many = true;
    const group = `grp-${randomString(8)}`;
    const value = this.form.value;
    const assets = value.assets;
    this.last_count = assets.length;
    for (const user of assets) {
      if (!user.email)
        continue;
      this.form.patchValue(__spreadProps(__spreadValues({}, value), {
        booking_type: "visitor",
        asset_id: user.email,
        asset_name: user.name,
        user: currentUser(),
        description: group,
        name: user.name,
        assets: [],
        attendees: [
          new User({
            name: user.name,
            email: user.email,
            organisation: user.company || user.organisation,
            phone: user.phone
          })
        ]
      }));
      await this._service.postForm().catch((e) => {
        notifyError(e);
        this.loading_many = false;
        throw e;
      });
    }
    this.loading_many = false;
  }
  _generateLinks() {
    const event = __spreadProps(__spreadValues({}, this.last_success), {
      host: this.last_success.user_email,
      organiser: {
        name: this.last_success.user_name,
        email: this.last_success.user_email
      },
      attendees: this.last_success.attendees.map((_) => _.email),
      body: this.last_success.description,
      location: this._org.building.display_name || this._org.building.name
    });
    event.attendees.push(this.last_success.asset_id);
    this.outlook_link = generateMicrosoftCalendarLink(event);
    this.google_link = generateGoogleCalendarLink(event);
    this.ical_link = generateCalendarFileLink(event);
  }
};
_InviteVisitorFormComponent.\u0275fac = function InviteVisitorFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InviteVisitorFormComponent)();
};
_InviteVisitorFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteVisitorFormComponent, selectors: [["invite-visitor-form"]], inputs: { date: [1, "date"] }, outputs: { done: "done" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["name_auto", "matAutocomplete"], ["email_auto", "matAutocomplete"], ["sent", "", 1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "bg-base-100", "relative", "flex", "max-h-full", "flex-col", "overflow-auto"], ["loading", "", 1, "relative", "flex", "h-full", "min-h-72", "w-full", "flex-col", "items-center", "justify-center", "overflow-hidden", "rounded-sm"], [1, "border-base-200", "w-full", "border-b", "px-4", "py-4", "sm:px-16"], [1, "text-2xl", "font-medium"], [1, "px-4", "py-4", "sm:px-16", 3, "formGroup"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "border-t", "px-4", "py-4", "sm:px-16"], ["btn", "", "matRipple", "", "send", "", 1, "w-full", "sm:w-auto", 3, "click"], [1, "flex", "flex-col"], ["for", "date"], ["name", "date", "formControlName", "date"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-1/3", "flex-1", "flex-col"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"], [1, "flex", "w-full", "flex-col"], [1, "flex", "flex-col", 3, "formGroup"], ["for", "reason"], ["appearance", "outline"], ["name", "reason", "matInput", "", "formControlName", "title", 3, "placeholder"], ["for", "building"], ["name", "building", "placeholder", "Select building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["for", "host"], ["name", "host", "formControlName", "user", 1, "mb-4"], ["for", "visitor-name"], ["matInput", "", "name", "visitor-name", "formControlName", "asset_name", 3, "focus", "placeholder", "matAutocomplete"], ["for", "visitor-email"], ["matInput", "", "name", "visitor-email", "type", "email", "formControlName", "asset_id", 3, "focus", "placeholder", "matAutocomplete"], ["matInput", "", "name", "company", "formControlName", "company", 3, "placeholder"], [3, "click", "value"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-60"], ["formControlName", "assets", 3, "guests_only"], ["for", "pass"], ["name", "pass", "matInput", "", "formControlName", "pass_number", 3, "placeholder"], [3, "diameter"], [1, "z-0", "m-8", "h-1/2", "w-full", "max-w-lg", "flex-1", "space-y-2", "overflow-auto"], [1, "text-3xl"], ["src", "assets/icons/sent.svg", 1, "mx-auto"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "z-10", "w-full", "border-t", "p-2"], [1, "mx-auto", "flex", "w-full", "max-w-lg", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], [1, "text-xl"]], template: function InviteVisitorFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InviteVisitorFormComponent_Conditional_0_Template, 3, 3)(1, InviteVisitorFormComponent_Conditional_1_Template, 20, 28, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.sent ? 0 : 1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  UserListFieldComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  UserSearchFieldComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  MatSelectModule,
  MatSelect,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  FormsModule,
  NgModel,
  SanitizePipe,
  SafePipe
], encapsulation: 2 });
var InviteVisitorFormComponent = _InviteVisitorFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteVisitorFormComponent, [{
    type: Component,
    args: [{ selector: `invite-visitor-form`, template: `
        @if (!sent) {
            @if (!(loading | async) && !loading_many) {
                <div
                    class="bg-base-100 relative flex max-h-full flex-col overflow-auto"
                >
                    <div
                        class="border-base-200 w-full border-b px-4 py-4 sm:px-16"
                    >
                        <h2 class="text-2xl font-medium">
                            {{ 'BOOKINGS.VISITOR_INVITE_TITLE' | translate }}
                        </h2>
                    </div>
                    @if (form) {
                        <form [formGroup]="form" class="px-4 py-4 sm:px-16">
                            @if ((buildings | async)?.length > 1) {
                                <div class="flex flex-col">
                                    <label for="building">
                                        {{ 'RESOURCE.BUILDING' | translate
                                        }}<span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="form.value.zones[0]"
                                            (ngModelChange)="
                                                form.patchValue({
                                                    zones: [$event],
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            name="building"
                                            placeholder="Select building"
                                        >
                                            @for (
                                                bld of buildings | async;
                                                track bld
                                            ) {
                                                <mat-option [value]="bld.id">
                                                    {{
                                                        bld.display_name ||
                                                            bld.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label for="date">
                                    {{ 'FORM.DATE' | translate }}<span>*</span>
                                </label>
                                <a-date-field
                                    name="date"
                                    formControlName="date"
                                ></a-date-field>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="flex w-1/3 flex-1 flex-col">
                                    <label for="start-time">
                                        {{ 'FORM.TIME_START' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-time-field
                                        name="start-time"
                                        [ngModel]="form.value.date"
                                        (ngModelChange)="
                                            form.patchValue({ date: $event })
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        [disabled]="form.value.all_day"
                                        [use_24hr]="use_24hr"
                                    ></a-time-field>
                                </div>
                                <div class="flex w-1/3 flex-1 flex-col">
                                    <label for="end-time">
                                        {{ 'FORM.TIME_END' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-duration-field
                                        name="end-time"
                                        formControlName="duration"
                                        [time]="form.value.date"
                                        [max]="max_duration"
                                        [use_24hr]="use_24hr"
                                    ></a-duration-field>
                                </div>
                            </div>
                            @if (can_book_for_others) {
                                <div class="flex w-full flex-col">
                                    <label for="host">
                                        {{ 'FORM.HOST' | translate
                                        }}<span>*</span>
                                    </label>
                                    <a-user-search-field
                                        name="host"
                                        class="mb-4"
                                        formControlName="user"
                                    ></a-user-search-field>
                                </div>
                            }
                            @if (!multiple) {
                                <div class="flex flex-col">
                                    <label for="visitor-name">
                                        {{
                                            'BOOKINGS.VISITOR_NAME' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            name="visitor-name"
                                            formControlName="asset_name"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                                    | translate
                                            "
                                            (focus)="
                                                filterVisitors(
                                                    form.value.asset_name
                                                )
                                            "
                                            [matAutocomplete]="name_auto"
                                        />
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #name_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors;
                                            track item
                                        ) {
                                            <mat-option
                                                [value]="item.name"
                                                (click)="setVisitor(item)"
                                            >
                                                <div
                                                    class="flex flex-col leading-tight"
                                                >
                                                    <div>{{ item.name }}</div>
                                                    <div
                                                        class="text-xs opacity-60"
                                                    >
                                                        {{ item.email }}
                                                        {{
                                                            item.company
                                                                ? '| ' +
                                                                  item.company
                                                                : ''
                                                        }}
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                                <div class="flex flex-col">
                                    <label for="visitor-email">
                                        {{
                                            'BOOKINGS.VISITOR_EMAIL' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            name="visitor-email"
                                            type="email"
                                            formControlName="asset_id"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                                    | translate
                                            "
                                            (focus)="
                                                filterVisitors(
                                                    form.value.asset_id
                                                )
                                            "
                                            [matAutocomplete]="email_auto"
                                        />
                                        <mat-error>
                                            {{
                                                'FORM.EMAIL_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #email_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors;
                                            track item
                                        ) {
                                            <mat-option
                                                [value]="item.email"
                                                (click)="setVisitor(item)"
                                            >
                                                <div
                                                    class="flex flex-col leading-tight"
                                                >
                                                    <div>{{ item.name }}</div>
                                                    <div
                                                        class="text-xs opacity-60"
                                                    >
                                                        {{ item.email }}
                                                        {{
                                                            item.company
                                                                ? '| ' +
                                                                  item.company
                                                                : ''
                                                        }}
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                                <div class="flex flex-col">
                                    <label for="visitor-name">{{
                                        'BOOKINGS.VISITOR_COMPANY' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            name="company"
                                            formControlName="company"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_COMPANY'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                            } @else {
                                <div class="flex flex-col" [formGroup]="form">
                                    <label for="visitor-name">
                                        {{
                                            'BOOKINGS.VISITOR_LIST' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <a-user-list-field
                                        formControlName="assets"
                                        [guests_only]="true"
                                    ></a-user-list-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label for="reason">{{
                                    'BOOKINGS.VISITOR_REASON' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        name="reason"
                                        matInput
                                        formControlName="title"
                                        [placeholder]="
                                            'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            @if (allow_pass_number) {
                                <div class="flex flex-col">
                                    <label for="pass">{{
                                        'BOOKINGS.VISITOR_PASS' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            name="pass"
                                            matInput
                                            formControlName="pass_number"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                            }
                        </form>
                    }
                    <div
                        class="border-base-200 bg-base-100 sticky bottom-0 border-t px-4 py-4 sm:px-16"
                    >
                        <button
                            btn
                            matRipple
                            send
                            class="w-full sm:w-auto"
                            (click)="sendInvite()"
                        >
                            {{ 'BOOKINGS.VISITOR_SEND' | translate }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    loading
                    class="relative flex h-full min-h-72 w-full flex-col items-center justify-center overflow-hidden rounded-sm"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'BOOKINGS.VISITOR_SENDING' | translate }}</p>
                </div>
            }
        } @else {
            <div
                sent
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center text-center"
            >
                <div
                    class="z-0 m-8 h-1/2 w-full max-w-lg flex-1 space-y-2 overflow-auto"
                >
                    <h2 class="text-3xl">
                        {{
                            (multiple
                                ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                                : 'BOOKINGS.VISITOR_SENT_SINGLE'
                            )
                                | translate
                                    : {
                                          name:
                                              last_success?.asset_name ||
                                              last_success?.asset_id,
                                          count: last_count || 1,
                                      }
                        }}
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p>
                        {{
                            'BOOKINGS.VISITOR_SENT_MSG'
                                | translate
                                    : {
                                          location:
                                              building?.display_name ||
                                              building?.name,
                                          date:
                                              last_success?.date
                                              | date: 'mediumDate',
                                          time:
                                              last_success?.date
                                              | date: time_format,
                                      }
                        }}
                    </p>
                    @if (show_links) {
                        <div
                            class="relative flex flex-col items-center space-y-4 p-4"
                        >
                            <a
                                btn
                                matRipple
                                name="desk-outlook-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                                [href]="outlook_link | sanitize: 'url'"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                <img
                                    src="assets/icons/outlook.svg"
                                    class="w-6"
                                />
                                <span>{{
                                    'BOOKINGS.LINK_OUTLOOK' | translate
                                }}</span>
                            </a>
                            <a
                                btn
                                matRipple
                                name="desk-google-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                                [href]="google_link | sanitize: 'url'"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                <img src="assets/icons/gcal.svg" class="w-6" />
                                <span>{{
                                    'BOOKINGS.LINK_GOOGLE' | translate
                                }}</span>
                            </a>
                            <a
                                btn
                                matRipple
                                name="desk-ical-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                                [href]="ical_link | safe: 'url'"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                <icon class="text-xl">download</icon>
                                <span>{{
                                    'BOOKINGS.LINK_ICAL' | translate
                                }}</span>
                            </a>
                        </div>
                    }
                </div>
                <div
                    class="border-base-200 bg-base-100 z-10 w-full border-t p-2"
                >
                    <div
                        class="mx-auto flex w-full max-w-lg items-center space-x-2"
                    >
                        <button btn matRipple class="flex-1" (click)="onDone()">
                            {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="sent = false"
                        >
                            {{ 'BOOKINGS.VISITOR_BOOK_ANOTHER' | translate }}
                        </button>
                    </div>
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      UserListFieldComponent,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatAutocompleteModule,
      UserSearchFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatSelectModule,
      MatProgressSpinnerModule,
      FormsModule,
      SanitizePipe,
      SafePipe
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteVisitorFormComponent, { className: "InviteVisitorFormComponent", filePath: "libs/bookings/src/lib/invite-visitor-form.component.ts", lineNumber: 498 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts
var _c018 = (a0) => ({ count: a0 });
var _c112 = (a0, a1) => ({ count: a0, total: a1 });
function LockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function LockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", locker_bank_r2.images[0]);
  }
}
function LockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function LockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.tags[0], " ");
  }
}
function LockerBankListComponent_Conditional_7_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function LockerBankListComponent_Conditional_7_Conditional_0_For_2_Template_button_click_1_listener() {
      const locker_bank_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectLockerBank(locker_bank_r2));
    });
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, LockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(4, LockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 10)(5, LockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "icon", 15);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "level");
    \u0275\u0275pipe(15, "level");
    \u0275\u0275pipe(16, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "icon", 15);
    \u0275\u0275text(19, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(23, LockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_23_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const locker_bank_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("!border-blue-400", ctx_r2.active() === locker_bank_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(locker_bank_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((locker_bank_r2.images == null ? null : locker_bank_r2.images.length) ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.name || locker_bank_r2.id || "Locker_bank", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, locker_bank_r2.zones) ? ((tmp_16_0 = \u0275\u0275pipeBind1(15, 10, locker_bank_r2.zones)) == null ? null : tmp_16_0.display_name) || ((tmp_16_0 = \u0275\u0275pipeBind1(16, 12, locker_bank_r2.zones)) == null ? null : tmp_16_0.name) : "", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 14, "COMMON.AVAILABLE_COUNT", \u0275\u0275pureFunction2(17, _c112, locker_bank_r2.available || 0, locker_bank_r2.lockers.length || 1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((locker_bank_r2.tags == null ? null : locker_bank_r2.tags.length) ? 23 : -1);
  }
}
function LockerBankListComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, LockerBankListComponent_Conditional_7_Conditional_0_For_2_Template, 24, 20, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.locker_banks));
  }
}
function LockerBankListComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.LOCKER_LIST_EMPTY"), " ");
  }
}
function LockerBankListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockerBankListComponent_Conditional_7_Conditional_0_Template, 4, 2, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, LockerBankListComponent_Conditional_7_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.locker_banks)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function LockerBankListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.LOCKER_LIST_LOADING"), " ");
  }
}
var _LockerBankListComponent = class _LockerBankListComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.active = input("");
    this.selected = input("");
    this.favorites = input([]);
    this.onSelect = output();
    this.toggleFav = output();
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([this._org.active_building, this._org.active_region]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([this._org.active_building, this._org.active_region]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.locker_banks = combineLatest([
      this._state.options,
      this._state.available_resources,
      this.lockers_banks$,
      this.lockers$
    ]).pipe(map(([{ show_fav, show_accessible }, resources, banks]) => {
      return banks.filter((i) => (!show_fav || this.isFavourite(i.id)) && (!show_accessible || i.lockers.find((_) => _.accessible)) && resources.find((_) => _.bank_id === i.id)).map((bank) => {
        const locker_list = bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
          available: !!resources.find((lkr) => lkr.id === _.id) && (!show_accessible || _.accessible),
          map_id: bank.map_id || bank.id,
          zone: bank.zone,
          zones: bank.zones
        }));
        return __spreadProps(__spreadValues({}, bank), {
          available: locker_list.reduce((c, l) => c + (l.available ? 1 : 0), 0),
          lockers: locker_list
        });
      });
    }));
    this.loading = this._state.loading;
  }
  isFavourite(locker_bank_id) {
    return this.favorites().includes(locker_bank_id);
  }
  selectLockerBank(locker_bank) {
    this.onSelect.emit(locker_bank);
  }
};
_LockerBankListComponent.\u0275fac = function LockerBankListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerBankListComponent)();
};
_LockerBankListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBankListComponent, selectors: [["locker-bank-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 10, vars: 14, consts: [[1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2", "overflow-hidden"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["locker_bank", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "!border-blue-400"], ["locker_bank", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], ["name", "select-locker_bank", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "flex-1", "space-y-2", "pt-2", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "text-xs"], [1, "bg-base-200", "absolute", "right-2", "bottom-2", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function LockerBankListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, LockerBankListComponent_Conditional_7_Template, 3, 3);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275conditionalBranchCreate(9, LockerBankListComponent_Conditional_9_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 7, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(12, _c018, ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.locker_banks)) == null ? null : tmp_1_0.length) || 0)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind1(8, 10, ctx.loading)) == null ? null : tmp_2_0.length) ? 7 : 9);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  AuthenticatedImageDirective,
  LevelPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=locker-bank-list.component.css.map */"] });
var LockerBankListComponent = _LockerBankListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerBankListComponent, [{
    type: Component,
    args: [{ selector: "locker-bank-list", template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: (locker_banks | async)?.length || 0 }
            }}
        </p>
        @if (!(loading | async)?.length) {
            @if ((locker_banks | async)?.length) {
                <ul class="list-style-none space-y-2 overflow-hidden">
                    @for (
                        locker_bank of locker_banks | async;
                        track locker_bank
                    ) {
                        <li
                            locker_bank
                            class="border-base-200 bg-base-100 relative w-full overflow-hidden rounded-lg border shadow-sm"
                            [class.!border-blue-400]="
                                active() === locker_bank.id
                            "
                        >
                            <button
                                name="select-locker_bank"
                                matRipple
                                class="flex h-full w-full p-2"
                                (click)="selectLockerBank($any(locker_bank))"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl"
                                >
                                    @if (selected().includes(locker_bank.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (locker_bank.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="locker_bank.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/locker-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1 space-y-2 pt-2 text-left">
                                    <span class="font-medium">
                                        {{
                                            locker_bank.name ||
                                                locker_bank.id ||
                                                'Locker_bank'
                                        }}
                                    </span>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-blue-500">place</icon>
                                        <p class="text-xs">
                                            {{
                                                (locker_bank.zones | level)
                                                    ? (
                                                          locker_bank.zones
                                                          | level
                                                      )?.display_name ||
                                                      (
                                                          locker_bank.zones
                                                          | level
                                                      )?.name
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-blue-500"
                                            >people</icon
                                        >
                                        <p class="text-xs">
                                            {{
                                                'COMMON.AVAILABLE_COUNT'
                                                    | translate
                                                        : {
                                                              count:
                                                                  locker_bank.available ||
                                                                  0,
                                                              total:
                                                                  locker_bank
                                                                      .lockers
                                                                      .length ||
                                                                  1,
                                                          }
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <!-- <button
                icon
                matRipple
                name="toggle-locker_bank-favourite"
                class="absolute top-1 right-1"
                [class.text-info]="isFavourite(locker_bank.id)"
                (click)="toggleFav.emit(locker_bank)"
                >
                <icon
                        [className]="
                        isFavourite(locker_bank.id)
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        ">favorite</icon>
              </button> -->
                            @if (locker_bank.tags?.length) {
                                <div
                                    class="bg-base-200 absolute right-2 bottom-2 rounded-sm px-2 py-1 font-mono text-xs"
                                >
                                    {{ locker_bank.tags[0] }}
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
                        {{ 'BOOKINGS.LOCKER_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.LOCKER_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      LevelPipe
    ], styles: ["/* angular:styles/component:css;432ecbb57b4beca9dd2517fb245615e93f6838151ec892ff249dd34f66862b56;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=locker-bank-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBankListComponent, { className: "LockerBankListComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts", lineNumber: 189 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts
var _c019 = () => ({ standalone: true });
var _c113 = () => [];
function LockerFiltersComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function LockerFiltersComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function LockerFiltersComponent_Conditional_12_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
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
function LockerFiltersComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 18)(1, "mat-select", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_12_Conditional_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.region = $event);
    });
    \u0275\u0275repeaterCreate(3, LockerFiltersComponent_Conditional_12_Conditional_4_For_4_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(7, _c019))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.regions));
  }
}
function LockerFiltersComponent_Conditional_12_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
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
function LockerFiltersComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 18)(1, "mat-select", 21);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_12_Conditional_6_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(2, LockerFiltersComponent_Conditional_12_Conditional_6_For_3_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c019))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 3, ctx_r1.buildings));
  }
}
function LockerFiltersComponent_Conditional_12_Conditional_8_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const lvl_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = \u0275\u0275pipeBind1(2, 1, lvl_r8.parent_id)) == null ? null : tmp_13_0.display_name, " ");
  }
}
function LockerFiltersComponent_Conditional_12_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20)(1, "div", 23);
    \u0275\u0275conditionalCreate(2, LockerFiltersComponent_Conditional_12_Conditional_8_For_5_Conditional_2_Template, 5, 3, "div", 24);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function LockerFiltersComponent_Conditional_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 18)(1, "mat-select", 22);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_12_Conditional_8_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(4, LockerFiltersComponent_Conditional_12_Conditional_8_For_5_Template, 5, 3, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(9, _c019))("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 7, ctx_r1.levels));
  }
}
function LockerFiltersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LockerFiltersComponent_Conditional_12_Conditional_4_Template, 6, 8, "mat-form-field", 18);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275conditionalCreate(6, LockerFiltersComponent_Conditional_12_Conditional_6_Template, 5, 6, "mat-form-field", 18);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalCreate(8, LockerFiltersComponent_Conditional_12_Conditional_8_Template, 7, 10, "mat-form-field", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "BOOKINGS.LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region && ((tmp_2_0 = \u0275\u0275pipeBind1(5, 6, ctx_r1.regions)) == null ? null : tmp_2_0.length) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.buildings)) == null ? null : tmp_3_0.length) > 1 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_levels() ? 8 : -1);
  }
}
function LockerFiltersComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-checkbox", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function LockerFiltersComponent_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-duration-field", 29);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_23_Conditional_6_Template_a_duration_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ duration: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.duration)("ngModelOptions", \u0275\u0275pureFunction0(10, _c019))("time", (tmp_5_0 = ctx_r1.form.get("date")) == null ? null : tmp_5_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr);
  }
}
function LockerFiltersComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 27)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 28);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_23_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, LockerFiltersComponent_Conditional_23_Conditional_6_Template, 5, 11, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(8, _c019))("use_24hr", ctx_r1.use_24hr)("disabled", ctx_r1.disable_start);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_end ? 6 : -1);
  }
}
function LockerFiltersComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "settings-toggle", 30);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_24_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_accessible: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 3, "BOOKINGS.LOCKER_ACCESSIBLE_SHOW"))("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(3, 5, ctx_r1.options)) == null ? null : tmp_2_0.show_accessible)("ngModelOptions", \u0275\u0275pureFunction0(7, _c019));
  }
}
function LockerFiltersComponent_Conditional_25_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "settings-toggle", 33);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_25_For_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      const feat_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r13, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const feat_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", feat_r13)("ngModel", (((tmp_12_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_12_0.features) || \u0275\u0275pureFunction0(5, _c113)).includes(feat_r13))("ngModelOptions", \u0275\u0275pureFunction0(6, _c019));
  }
}
function LockerFiltersComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "h2", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, LockerFiltersComponent_Conditional_25_For_5_Template, 3, 7, "div", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 3, ctx_r1.features));
  }
}
function LockerFiltersComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 34);
    \u0275\u0275listener("click", function LockerFiltersComponent_Conditional_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var _LockerFiltersComponent = class _LockerFiltersComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get disable_date() {
    return this._settings.get("app.lockers.disabled_date_select");
  }
  get disable_start() {
    return this._settings.get("app.lockers.disabled_start_time");
  }
  get hide_end() {
    return this._settings.get("app.lockers.hide_end_time");
  }
  get allow_time_changes() {
    return !!this._settings.get("app.lockers.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.lockers.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.lockers.available_period") || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._bsheet_ref = inject(MatBottomSheetRef, { optional: true });
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.hide_levels = input(void 0);
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      return level_list.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.can_close = !!this._bsheet_ref;
  }
  ngOnInit() {
    this.subscription("bld", combineLatest([
      this._org.active_building,
      this.form.controls.duration.valueChanges
    ]).subscribe(() => {
      this.timeout("disable", () => {
        if (this.disable_date) {
          this.form.controls.date.disable();
        }
      }, 50);
    }));
    this.timeout("disable", () => {
      if (this.disable_date) {
        this.form.controls.date.disable();
      }
    }, 50);
  }
};
_LockerFiltersComponent.\u0275fac = function LockerFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerFiltersComponent)();
};
_LockerFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFiltersComponent, selectors: [["locker-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 27, consts: [[1, "border-base-200", "flex", "items-center", "rounded-t-md", "border-b", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-locker-filters", 1, "sm:hidden"], [1, "flex-2", "text-center", "font-medium"], [1, "flex-1"], [1, "divide-base-200", "max-h-[65vh]", "w-full", "divide-y", "overflow-x-hidden", "overflow-y-auto", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], [1, "min-w-[256px]", "flex-1"], ["name", "date", "formControlName", "date", 3, "to"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-4", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "py-2"], ["icon", "", "matRipple", "", "name", "close-locker-filters", 1, "sm:hidden", 3, "click"], ["for", "location"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["formControlName", "all_day"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "disabled"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr"], [3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["btn", "", "matRipple", "", "name", "apply-locker-filters", 1, "w-full", 3, "click"]], template: function LockerFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, LockerFiltersComponent_Conditional_2_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 5)(8, "section", 6)(9, "h2", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, LockerFiltersComponent_Conditional_12_Template, 9, 10, "div", 8);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementStart(15, "div", 9)(16, "label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a-date-field", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, LockerFiltersComponent_Conditional_22_Template, 4, 3, "div", 11);
    \u0275\u0275conditionalCreate(23, LockerFiltersComponent_Conditional_23_Template, 7, 9, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, LockerFiltersComponent_Conditional_24_Template, 4, 8, "section", 13);
    \u0275\u0275conditionalCreate(25, LockerFiltersComponent_Conditional_25_Template, 7, 5, "section", 14);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, LockerFiltersComponent_Conditional_27_Template, 4, 3, "div", 15);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_11_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_levels() && (!(ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(13, 17, ctx.regions)) == null ? null : tmp_4_0.length)) || !(!ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(14, 19, ctx.buildings)) == null ? null : tmp_4_0.length) > 1)) ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 21, "FORM.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("to", ctx.end_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 23, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.allow_all_day ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_levels() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = \u0275\u0275pipeBind1(26, 25, ctx.features)) == null ? null : tmp_11_0.length) && !ctx.hide_levels() ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 27 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  SettingsToggleComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel,
  MatCheckboxModule,
  MatCheckbox,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=locker-filters.component.css.map */"] });
var LockerFiltersComponent = _LockerFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerFiltersComponent, [{
    type: Component,
    args: [{ selector: "locker-filters", template: `
        <div
            class="border-base-200 flex items-center rounded-t-md border-b pb-2 sm:hidden"
        >
            <div class="flex-1 pl-2">
                @if (can_close) {
                    <button
                        icon
                        matRipple
                        name="close-locker-filters"
                        class="sm:hidden"
                        (click)="close()"
                    >
                        <icon>keyboard_arrow_left</icon>
                    </button>
                }
            </div>
            <h3 class="flex-2 text-center font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="divide-base-200 max-h-[65vh] w-full divide-y overflow-x-hidden overflow-y-auto p-2"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'BOOKINGS.DETAILS' | translate }}
                </h2>
                @if (
                    !hide_levels() &&
                    (!(use_region && (regions | async)?.length) ||
                        !(!use_region && (buildings | async)?.length > 1))
                ) {
                    <div class="flex min-w-32 flex-1 flex-col">
                        <label for="location">
                            {{ 'BOOKINGS.LOCATION' | translate }}
                        </label>
                        @if (use_region && (regions | async)?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="region"
                                    [ngModel]="region"
                                    (ngModelChange)="region = $event"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.REGION_ANY' | translate
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
                                <mat-select
                                    name="building"
                                    [ngModel]="building"
                                    (ngModelChange)="building = $event"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        building?.display_name || building?.name
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
                                <mat-select
                                    name="location"
                                    [ngModel]="(options | async)?.zone_id"
                                    (ngModelChange)="
                                        setOptions({ zone_id: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.LEVEL_ANY' | translate
                                    "
                                >
                                    @for (lvl of levels | async; track lvl) {
                                        <mat-option [value]="lvl.id">
                                            <div class="flex flex-col-reverse">
                                                @if (use_region) {
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
                                                        {{
                                                            (
                                                                lvl.parent_id
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
                                                        lvl.display_name ||
                                                            lvl.name
                                                    }}
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                    </div>
                }

                <!-- Date -->
                <div class="min-w-[256px] flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        formControlName="date"
                        [to]="end_date"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [disabled]="disable_start"
                            ></a-time-field>
                        </div>
                        @if (!hide_end) {
                            <div class="w-1/3 flex-1">
                                <label>{{ 'FORM.TIME_END' | translate }}</label>
                                <a-duration-field
                                    [ngModel]="form.value.duration"
                                    (ngModelChange)="
                                        form.patchValue({ duration: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [time]="form.get('date')?.value"
                                    [max]="10 * 60"
                                    [min]="60"
                                    [step]="60"
                                    [use_24hr]="use_24hr"
                                >
                                </a-duration-field>
                            </div>
                        }
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-4 pb-4">
                    <!-- <settings-toggle
              [name]="'APP.WORKPLACE.FAVOURITES_SHOW' | translate"
              [ngModel]="(options | async)?.show_fav"
              (ngModelChange)="setOptions({ show_fav: $event })"
              [ngModelOptions]="{ standalone: true }"
            ></settings-toggle> -->
                    <settings-toggle
                        [name]="'BOOKINGS.LOCKER_ACCESSIBLE_SHOW' | translate"
                        [ngModel]="(options | async)?.show_accessible"
                        (ngModelChange)="
                            setOptions({ show_accessible: $event })
                        "
                        [ngModelOptions]="{ standalone: true }"
                    ></settings-toggle>
                </section>
            }
            @if ((features | async)?.length && !hide_levels()) {
                <section class="space-y-2" features>
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features | async; track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <settings-toggle
                                class="w-full capitalize"
                                [name]="feat"
                                [ngModel]="
                                    (
                                        (options | async)?.features || []
                                    ).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></settings-toggle>
                        </div>
                    }
                </section>
            }
        </form>
        @if (can_close) {
            <div class="border-base-200 w-full border-t px-2 py-2">
                <button
                    btn
                    matRipple
                    name="apply-locker-filters"
                    class="w-full"
                    (click)="close()"
                >
                    {{ 'COMMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      FormsModule,
      MatCheckboxModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=locker-filters.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFiltersComponent, { className: "LockerFiltersComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts", lineNumber: 287 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts
var _c020 = () => [];
function LockerFiltersDisplayComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_For_20_Template_button_click_3_listener() {
      const feat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFeature(feat_r2, false));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r2);
  }
}
function LockerFiltersDisplayComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Conditional_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
function LockerFiltersDisplayComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Conditional_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_accessible: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.ACCESSIBLE_ONLY"));
  }
}
var _LockerFiltersDisplayComponent = class _LockerFiltersDisplayComponent extends AsyncHandler {
  get start() {
    return this._state.form.value.date;
  }
  get end() {
    const { date, duration, all_day } = this._state.form.value;
    if (all_day)
      return endOfDay(date);
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor() {
    super();
    this._bsheet = inject(MatBottomSheet);
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this.view = model("list");
    this.viewChange = output();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.editFilter = () => this._bsheet.open(LockerFiltersComponent);
  }
};
_LockerFiltersDisplayComponent.\u0275fac = function LockerFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerFiltersDisplayComponent)();
};
_LockerFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFiltersDisplayComponent, selectors: [["locker-filters-display"]], inputs: { view: [1, "view"] }, outputs: { view: "viewChange", viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 34, consts: [["actions", "", 1, "flex", "flex-row", "items-center", "space-x-2", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "edit-locker-filters", 1, "w-1/2", "flex-1", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-locker-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-locker-list", 1, "rounded-l-none", "rounded-r", 3, "click"], ["filters", "", 1, "flex", "w-140", "max-w-full", "flex-wrap", "items-center", "p-2", "sm:max-w-140"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", ""], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-locker-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-favs-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-accessible-filter", 1, "-mr-4", 3, "click"]], template: function LockerFiltersDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Template_button_click_1_listener() {
      return ctx.editFilter();
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Template_button_click_5_listener() {
      ctx.view.set("map");
      return ctx.viewChange.emit(ctx.view());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Template_button_click_8_listener() {
      ctx.view.set("list");
      return ctx.viewChange.emit(ctx.view());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "section", 5)(12, "div", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, LockerFiltersDisplayComponent_For_20_Template, 6, 1, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275conditionalCreate(22, LockerFiltersDisplayComponent_Conditional_22_Template, 7, 3, "div", 9);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275conditionalCreate(24, LockerFiltersDisplayComponent_Conditional_24_Template, 7, 3, "div", 9);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", ctx.view() !== "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, "COMMON.MAP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.view() !== "list");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 16, "COMMON.LIST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 18, ctx.start, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(17, 21, ctx.start, ctx.time_format), " \u2014 ", \u0275\u0275pipeBind2(18, 24, ctx.end, ctx.time_format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(((tmp_7_0 = \u0275\u0275pipeBind1(21, 27, ctx.options)) == null ? null : tmp_7_0.features) || \u0275\u0275pureFunction0(33, _c020));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_8_0 = \u0275\u0275pipeBind1(23, 29, ctx.options)) == null ? null : tmp_8_0.show_fav) ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_9_0 = \u0275\u0275pipeBind1(25, 31, ctx.options)) == null ? null : tmp_9_0.show_accessible) ? 24 : -1);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, TranslatePipe, IconComponent, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=locker-filters-display.component.css.map */"] });
var LockerFiltersDisplayComponent = _LockerFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: "locker-filters-display", template: `
        <section
            actions
            class="flex flex-row items-center space-x-2 p-2 sm:hidden"
        >
            <button
                btn
                matRipple
                name="edit-locker-filters"
                class="w-1/2 flex-1"
                (click)="editFilter()"
            >
                {{ 'COMMON.FILTERS' | translate }}
            </button>
            <div class="flex items-center">
                <button
                    btn
                    matRipple
                    name="view-locker-map"
                    class="rounded-l rounded-r-none"
                    [class.inverse]="view() !== 'map'"
                    (click)="view.set('map'); viewChange.emit(view())"
                >
                    {{ 'COMMON.MAP' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="view-locker-list"
                    class="rounded-l-none rounded-r"
                    [class.inverse]="view() !== 'list'"
                    (click)="view.set('list'); viewChange.emit(view())"
                >
                    {{ 'COMMON.LIST' | translate }}
                </button>
            </div>
        </section>
        <section
            filters
            class="flex w-140 max-w-full flex-wrap items-center p-2 sm:max-w-140"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start | date: 'mediumDate' }}</div>
            <div filter-item time>
                {{ start | date: time_format }} &mdash;
                {{ end | date: time_format }}
            </div>
            @for (feat of (options | async)?.features || []; track feat) {
                <div filter-item features>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-locker-filter"
                        class="-mr-4"
                        (click)="setFeature(feat, false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if ((options | async)?.show_fav) {
                <div filter-item>
                    <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-locker-favs-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_fav: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if ((options | async)?.show_accessible) {
                <div filter-item>
                    <span>{{ 'COMMON.ACCESSIBLE_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-locker-accessible-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_accessible: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule], styles: ["/* angular:styles/component:css;0959a8279159e2589d106339b636cabdefc94315ba1f7ffe415616deff894a80;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=locker-filters-display.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFiltersDisplayComponent, { className: "LockerFiltersDisplayComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts", lineNumber: 131 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts
var _c021 = (a0) => ({ count: a0 });
function LockerSelectModalComponent_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "locker-bank-list", 21);
    \u0275\u0275listener("toggleFav", function LockerSelectModalComponent_Conditional_12_Conditional_0_Template_locker_bank_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function LockerSelectModalComponent_Conditional_12_Conditional_0_Template_locker_bank_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bank = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id)("selected", ctx_r1.selected_ids)("favorites", ctx_r1.favorites);
  }
}
function LockerSelectModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockerSelectModalComponent_Conditional_12_Conditional_0_Template, 1, 3, "locker-bank-list", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.view === "list" ? 0 : -1);
  }
}
function LockerSelectModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "locker-grid", 23);
    \u0275\u0275listener("clicked", function LockerSelectModalComponent_Conditional_13_Template_locker_grid_clicked_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.bank.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("bank", ctx_r1.bank)("selected", ctx_r1.displayed == null ? null : ctx_r1.displayed.id);
  }
}
function LockerSelectModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LockerSelectModalComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
function LockerSelectModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function LockerSelectModalComponent_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.bank = null;
      return \u0275\u0275resetView(ctx_r1.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.RETURN"), " ");
  }
}
var FAV_LOCKER_KEY = "favourite_lockers";
var _LockerSelectModalComponent = class _LockerSelectModalComponent extends AsyncHandler {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY) || [];
  }
  constructor() {
    super();
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(BookingFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this.selected = [];
    this.view = "list";
    this.bank = null;
    const _data = this._data;
    this.selected = [..._data.items || []];
    this._event_form.setOptions(_data.options);
  }
  ngOnInit() {
    this._event_form.options.subscribe(() => {
      this.displayed = null;
      this.bank = null;
    });
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state)
      this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, fav_list.filter((_) => _ !== item.id));
    }
  }
};
_LockerSelectModalComponent.\u0275fac = function LockerSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerSelectModalComponent)();
};
_LockerSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerSelectModalComponent, selectors: [["locker-select-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 39, vars: 31, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "sm:relative", "sm:h-auto", "sm:w-auto"], [1, "flex", "w-full", "items-center", "space-x-4"], ["icon", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "divide-base-200", "flex", "h-[65vh]", "min-h-[65vh]", "w-full", "flex-1", "items-center", "divide-x", "overflow-hidden", "sm:max-h-[65vh]", "sm:max-w-[95vw]"], [1, "hidden", "h-full", "max-w-[20rem]", "sm:flex", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col", "items-center", "sm:h-[65vh]"], [1, "border-base-200", "w-full", "border-b", 3, "viewChange", "view"], [1, "bg-base-200", "flex", "h-full", "w-full", "flex-col", "overflow-auto"], [1, "border-base-200", "flex", "w-full", "flex-col-reverse", "items-center", "justify-end", "border-t", "px-2", "pt-2", "pb-22", "sm:hidden"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "inverse", "w-full", "sm:hidden"], ["btn", "", "matRipple", "", "name", "save-lockers", 1, "w-full", "sm:mb-0", "sm:w-32", 3, "mat-dialog-close"], [1, "border-base-200", "hidden", "w-full", "items-center", "justify-between", "border-t", "p-2", "sm:flex"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "text-center", "text-sm", "opacity-60"], ["btn", "", "matRipple", "", "name", "clear-bank", 1, "inverse", "mr-2", "w-32"], ["btn", "", "matRipple", "", "name", "toggle-locker", 3, "click", "disabled"], [1, "mr-1"], [1, "bg-base-200", "h-1/2", "flex-1", 3, "active", "selected", "favorites"], [1, "bg-base-200", "h-1/2", "flex-1", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "sticky", "left-0", "w-full", "px-2", "py-2", "font-medium"], [1, "h-1/2", "w-full", "flex-1", 3, "clicked", "bank", "selected"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "inverse", "w-full", "sm:hidden", 3, "click"], ["btn", "", "matRipple", "", "name", "clear-bank", 1, "inverse", "mr-2", "w-32", 3, "click"]], template: function LockerSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2)(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "main", 3);
    \u0275\u0275element(9, "locker-filters", 4);
    \u0275\u0275elementStart(10, "div", 5)(11, "locker-filters-display", 6);
    \u0275\u0275twoWayListener("viewChange", function LockerSelectModalComponent_Template_locker_filters_display_viewChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, LockerSelectModalComponent_Conditional_12_Template, 1, 1)(13, LockerSelectModalComponent_Conditional_13_Template, 4, 3, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "footer", 8);
    \u0275\u0275conditionalCreate(15, LockerSelectModalComponent_Conditional_15_Template, 3, 3, "button", 9);
    \u0275\u0275elementStart(16, "button", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "footer", 11)(20, "button", 12)(21, "div", 13)(22, "icon", 14);
    \u0275\u0275text(23, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "p", 16);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 13);
    \u0275\u0275conditionalCreate(31, LockerSelectModalComponent_Conditional_31_Template, 3, 3, "button", 17);
    \u0275\u0275elementStart(32, "button", 18);
    \u0275\u0275listener("click", function LockerSelectModalComponent_Template_button_click_32_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    });
    \u0275\u0275elementStart(33, "div", 13)(34, "icon", 14);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 19);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 18, "BOOKINGS.LOCKER_FIND"));
    \u0275\u0275advance(3);
    \u0275\u0275property("hide_levels", ctx.view !== "list");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("view", ctx.view);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.bank ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.displayed ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("mb-2", ctx.displayed);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 20, "COMMON.VIEW_LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 22, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 24, "BOOKINGS.LOCKER_ADDED_COUNT", \u0275\u0275pureFunction1(29, _c021, ctx.selected.length)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.bank ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 27, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
  }
}, dependencies: [
  LockerGridComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  LockerBankListComponent,
  LockerFiltersComponent,
  LockerFiltersDisplayComponent
], encapsulation: 2 });
var LockerSelectModalComponent = _LockerSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerSelectModalComponent, [{
    type: Component,
    args: [{ selector: "locker-select-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'BOOKINGS.LOCKER_FIND' | translate }}</h3>
                <!-- <div class="hidden flex-1 items-center justify-end sm:flex">
            <button
              btn
              matRipple
              name="view-locker-map"
              class="rounded-l rounded-r-none"
              [class.inverse]="view !== 'map'"
              (click)="view = 'map'"
              >
              {{ 'COMMON.MAP' | translate }}
            </button>
            <button
              btn
              matRipple
              name="view-locker-list"
              class="rounded-l-none rounded-r"
              [class.inverse]="view !== 'list'"
              (click)="view = 'list'"
              >
              {{ 'COMMON.LIST' | translate }}
            </button>
          </div> -->
            </header>
            <main
                class="divide-base-200 flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <locker-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view !== 'list'"
                ></locker-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <locker-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view"
                    ></locker-filters-display>
                    @if (!bank) {
                        @if (view === 'list') {
                            <locker-bank-list
                                [active]="displayed?.id"
                                [selected]="selected_ids"
                                [favorites]="favorites"
                                (toggleFav)="toggleFavourite($event)"
                                (onSelect)="bank = $any($event)"
                                class="bg-base-200 h-1/2 flex-1"
                            ></locker-bank-list>
                        }
                    } @else {
                        <div
                            class="bg-base-200 flex h-full w-full flex-col overflow-auto"
                        >
                            <div
                                class="sticky left-0 w-full px-2 py-2 font-medium"
                            >
                                {{ bank.name }}
                            </div>
                            <locker-grid
                                class="h-1/2 w-full flex-1"
                                [bank]="bank"
                                [selected]="displayed?.id"
                                (clicked)="displayed = $event"
                            >
                            </locker-grid>
                        </div>
                    }
                </div>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t px-2 pt-2 pb-22 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        name="locker-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-lockers"
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:mb-0 sm:w-32"
                >
                    {{ 'COMMON.VIEW_LIST' | translate }}
                </button>
            </footer>
            <footer
                class="border-base-200 hidden w-full items-center justify-between border-t p-2 sm:flex"
            >
                <button
                    btn
                    matRipple
                    name="locker-return"
                    [mat-dialog-close]="selected"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
                <p class="text-center text-sm opacity-60">
                    {{
                        'BOOKINGS.LOCKER_ADDED_COUNT'
                            | translate: { count: selected.length }
                    }}
                </p>
                <div class="flex items-center">
                    @if (bank) {
                        <button
                            btn
                            matRipple
                            name="clear-bank"
                            class="inverse mr-2 w-32"
                            (click)="bank = null; displayed = null"
                        >
                            {{ 'COMMON.RETURN' | translate }}
                        </button>
                    }
                    <button
                        btn
                        matRipple
                        name="toggle-locker"
                        [disabled]="!displayed"
                        [class.inverse]="isSelected(displayed?.id)"
                        (click)="
                            setSelected(displayed, !isSelected(displayed?.id))
                        "
                    >
                        <div class="flex items-center">
                            <icon class="text-xl">{{
                                isSelected(displayed?.id) ? 'remove' : 'add'
                            }}</icon>
                            <div class="mr-1">
                                {{
                                    (isSelected(displayed?.id)
                                        ? 'COMMON.REMOVE_FROM'
                                        : 'COMMON.ADD_TO'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </button>
                </div>
            </footer>
        </div>
    `, imports: [
      LockerGridComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      LockerBankListComponent,
      LockerFiltersComponent,
      LockerFiltersDisplayComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerSelectModalComponent, { className: "LockerSelectModalComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts", lineNumber: 203 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-bank-list.component.ts
var _c022 = (a0) => ({ count: a0 });
var _c114 = (a0, a1) => ({ count: a0, total: a1 });
function NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", locker_bank_r2.images[0]);
  }
}
function NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.tags[0], " ");
  }
}
function NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Template_button_click_1_listener() {
      const locker_bank_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectLockerBank(locker_bank_r2));
    });
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(4, NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 10)(5, NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "h3", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "icon", 15);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "level");
    \u0275\u0275pipe(15, "level");
    \u0275\u0275pipe(16, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 17)(18, "icon", 15);
    \u0275\u0275text(19, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(23, NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Conditional_23_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const locker_bank_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("!border-blue-400", ctx_r2.active() === locker_bank_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(locker_bank_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((locker_bank_r2.images == null ? null : locker_bank_r2.images.length) ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.name || locker_bank_r2.id || "Locker_bank", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, locker_bank_r2.zones) ? ((tmp_16_0 = \u0275\u0275pipeBind1(15, 10, locker_bank_r2.zones)) == null ? null : tmp_16_0.display_name) || ((tmp_16_0 = \u0275\u0275pipeBind1(16, 12, locker_bank_r2.zones)) == null ? null : tmp_16_0.name) : "", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 14, "COMMON.AVAILABLE_COUNT", \u0275\u0275pureFunction2(17, _c114, locker_bank_r2.available || 0, locker_bank_r2.lockers.length || 1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((locker_bank_r2.tags == null ? null : locker_bank_r2.tags.length) ? 23 : -1);
  }
}
function NewLockerBankListComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, NewLockerBankListComponent_Conditional_7_Conditional_0_For_2_Template, 24, 20, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.locker_banks));
  }
}
function NewLockerBankListComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.LOCKER_LIST_EMPTY"), " ");
  }
}
function NewLockerBankListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewLockerBankListComponent_Conditional_7_Conditional_0_Template, 4, 2, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, NewLockerBankListComponent_Conditional_7_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.locker_banks)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function NewLockerBankListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.LOCKER_LIST_LOADING"), " ");
  }
}
var _NewLockerBankListComponent = class _NewLockerBankListComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.active = input("");
    this.selected = input("");
    this.favorites = input([]);
    this.onSelect = output();
    this.toggleFav = output();
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([this._org.active_building, this._org.active_region]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([this._org.active_building, this._org.active_region]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.locker_banks = combineLatest([
      this._state.options,
      this._state.available_resources,
      this.lockers_banks$,
      this.lockers$
    ]).pipe(map(([{ show_fav, show_accessible }, resources, banks]) => {
      return banks.filter((i) => (!show_fav || this.isFavourite(i.id)) && (!show_accessible || i.lockers.find((_) => _.accessible)) && resources.find((_) => _.bank_id === i.id)).map((bank) => {
        const locker_list = bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
          available: !!resources.find((lkr) => lkr.id === _.id) && (!show_accessible || _.accessible),
          map_id: bank.map_id || bank.id,
          zone: bank.zone,
          zones: bank.zones
        }));
        return __spreadProps(__spreadValues({}, bank), {
          available: locker_list.reduce((c, l) => c + (l.available ? 1 : 0), 0),
          lockers: locker_list
        });
      });
    }));
    this.loading = this._state.loading;
  }
  isFavourite(locker_bank_id) {
    return this.favorites().includes(locker_bank_id);
  }
  selectLockerBank(locker_bank) {
    this.onSelect.emit(locker_bank);
  }
};
_NewLockerBankListComponent.\u0275fac = function NewLockerBankListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewLockerBankListComponent)();
};
_NewLockerBankListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerBankListComponent, selectors: [["new-locker-bank-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 10, vars: 14, consts: [[1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2", "overflow-hidden"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["locker_bank", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "!border-blue-400"], ["locker_bank", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], ["name", "select-locker_bank", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "flex-1pt-2", "text-left"], [1, "mb-2", "font-medium"], [1, "mb-1", "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "text-xs"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "bg-base-200", "absolute", "right-2", "bottom-2", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function NewLockerBankListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, NewLockerBankListComponent_Conditional_7_Template, 3, 3);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275conditionalBranchCreate(9, NewLockerBankListComponent_Conditional_9_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 7, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(12, _c022, ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.locker_banks)) == null ? null : tmp_1_0.length) || 0)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind1(8, 10, ctx.loading)) == null ? null : tmp_2_0.length) ? 7 : 9);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  AuthenticatedImageDirective,
  LevelPipe
], encapsulation: 2 });
var NewLockerBankListComponent = _NewLockerBankListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewLockerBankListComponent, [{
    type: Component,
    args: [{ selector: "new-locker-bank-list", template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: (locker_banks | async)?.length || 0 }
            }}
        </p>
        @if (!(loading | async)?.length) {
            @if ((locker_banks | async)?.length) {
                <ul class="list-style-none space-y-2 overflow-hidden">
                    @for (
                        locker_bank of locker_banks | async;
                        track locker_bank
                    ) {
                        <li
                            locker_bank
                            class="border-base-200 bg-base-100 relative w-full overflow-hidden rounded-lg border shadow-sm"
                            [class.!border-blue-400]="
                                active() === locker_bank.id
                            "
                        >
                            <button
                                name="select-locker_bank"
                                matRipple
                                class="flex h-full w-full p-2"
                                (click)="selectLockerBank($any(locker_bank))"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl"
                                >
                                    @if (selected().includes(locker_bank.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (locker_bank.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="locker_bank.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/locker-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1pt-2 text-left">
                                    <h3 class="mb-2 font-medium">
                                        {{
                                            locker_bank.name ||
                                                locker_bank.id ||
                                                'Locker_bank'
                                        }}
                                    </h3>
                                    <div
                                        class="mb-1 flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-blue-500">place</icon>
                                        <p class="text-xs">
                                            {{
                                                (locker_bank.zones | level)
                                                    ? (
                                                          locker_bank.zones
                                                          | level
                                                      )?.display_name ||
                                                      (
                                                          locker_bank.zones
                                                          | level
                                                      )?.name
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-blue-500"
                                            >people</icon
                                        >
                                        <p class="text-xs">
                                            {{
                                                'COMMON.AVAILABLE_COUNT'
                                                    | translate
                                                        : {
                                                              count:
                                                                  locker_bank.available ||
                                                                  0,
                                                              total:
                                                                  locker_bank
                                                                      .lockers
                                                                      .length ||
                                                                  1,
                                                          }
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <!-- <button
                icon
                matRipple
                name="toggle-locker_bank-favourite"
                class="absolute top-1 right-1"
                [class.text-info]="isFavourite(locker_bank.id)"
                (click)="toggleFav.emit(locker_bank)"
                >
                <icon
                        [className]="
                        isFavourite(locker_bank.id)
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        ">favorite</icon>
              </button> -->
                            @if (locker_bank.tags?.length) {
                                <div
                                    class="bg-base-200 absolute right-2 bottom-2 rounded-sm px-2 py-1 font-mono text-xs"
                                >
                                    {{ locker_bank.tags[0] }}
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
                        {{ 'BOOKINGS.LOCKER_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.LOCKER_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      LevelPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerBankListComponent, { className: "NewLockerBankListComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-bank-list.component.ts", lineNumber: 179 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-filters-display.component.ts
var _c023 = () => [];
function NewLockerFiltersDisplayComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function NewLockerFiltersDisplayComponent_For_9_Template_button_click_3_listener() {
      const feat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFeature(feat_r2, false));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r2);
  }
}
function NewLockerFiltersDisplayComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 6);
    \u0275\u0275listener("click", function NewLockerFiltersDisplayComponent_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
function NewLockerFiltersDisplayComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function NewLockerFiltersDisplayComponent_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_accessible: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.ACCESSIBLE_ONLY"));
  }
}
var _NewLockerFiltersDisplayComponent = class _NewLockerFiltersDisplayComponent extends AsyncHandler {
  get start() {
    return this._state.form.value.date;
  }
  get end() {
    const { date, duration, all_day } = this._state.form.value;
    if (all_day)
      return endOfDay(date);
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this.view = input("list");
    this.viewChange = output();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
  }
};
_NewLockerFiltersDisplayComponent.\u0275fac = function NewLockerFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewLockerFiltersDisplayComponent)();
};
_NewLockerFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerFiltersDisplayComponent, selectors: [["new-locker-filters-display"]], inputs: { view: [1, "view"] }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 21, consts: [["filters", "", 1, "border-base-300", "bg-base-100", "sticky", "-top-1", "z-20", "-mx-1", "mb-4!", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded-sm", "border", "p-1", "pr-10!", "sm:pr-1!"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", ""], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-locker-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-favs-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-accessible-filter", 1, "-mr-4", 3, "click"]], template: function NewLockerFiltersDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, NewLockerFiltersDisplayComponent_For_9_Template, 6, 1, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275conditionalCreate(11, NewLockerFiltersDisplayComponent_Conditional_11_Template, 7, 3, "div", 4);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275conditionalCreate(13, NewLockerFiltersDisplayComponent_Conditional_13_Template, 7, 3, "div", 4);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, ctx.start, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 8, ctx.start, ctx.time_format), " \u2014 ", \u0275\u0275pipeBind2(7, 11, ctx.end, ctx.time_format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(((tmp_2_0 = \u0275\u0275pipeBind1(10, 14, ctx.options)) == null ? null : tmp_2_0.features) || \u0275\u0275pureFunction0(20, _c023));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_3_0 = \u0275\u0275pipeBind1(12, 16, ctx.options)) == null ? null : tmp_3_0.show_fav) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(14, 18, ctx.options)) == null ? null : tmp_4_0.show_accessible) ? 13 : -1);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, TranslatePipe, IconComponent, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-locker-filters-display.component.css.map */"] });
var NewLockerFiltersDisplayComponent = _NewLockerFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewLockerFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: "new-locker-filters-display", template: `
        <section
            filters
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start | date: 'mediumDate' }}</div>
            <div filter-item time>
                {{ start | date: time_format }} &mdash;
                {{ end | date: time_format }}
            </div>
            @for (feat of (options | async)?.features || []; track feat) {
                <div filter-item features>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-locker-filter"
                        class="-mr-4"
                        (click)="setFeature(feat, false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if ((options | async)?.show_fav) {
                <div filter-item>
                    <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-locker-favs-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_fav: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if ((options | async)?.show_accessible) {
                <div filter-item>
                    <span>{{ 'COMMON.ACCESSIBLE_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-locker-accessible-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_accessible: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule], styles: ["/* angular:styles/component:css;40c2cfb0940879f4b472b0df17d108f20a06d9aef1b032e0c2528e24b3273369;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-locker-select-modal/new-locker-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-locker-filters-display.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerFiltersDisplayComponent, { className: "NewLockerFiltersDisplayComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-filters-display.component.ts", lineNumber: 92 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-filters.component.ts
var _c024 = () => ({ standalone: true });
var _c115 = () => [];
function NewLockerFiltersComponent_Conditional_9_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    \u0275\u0275property("value", reg_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r3.display_name || reg_r3.name, " ");
  }
}
function NewLockerFiltersComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_Conditional_9_Conditional_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.region = $event);
    });
    \u0275\u0275repeaterCreate(3, NewLockerFiltersComponent_Conditional_9_Conditional_4_For_4_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(7, _c024))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.regions));
  }
}
function NewLockerFiltersComponent_Conditional_9_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function NewLockerFiltersComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 17);
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_Conditional_9_Conditional_6_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(2, NewLockerFiltersComponent_Conditional_9_Conditional_6_For_3_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c024))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 3, ctx_r1.buildings));
  }
}
function NewLockerFiltersComponent_Conditional_9_Conditional_8_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const lvl_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = \u0275\u0275pipeBind1(2, 1, lvl_r7.parent_id)) == null ? null : tmp_13_0.display_name, " ");
  }
}
function NewLockerFiltersComponent_Conditional_9_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 19);
    \u0275\u0275conditionalCreate(2, NewLockerFiltersComponent_Conditional_9_Conditional_8_For_5_Conditional_2_Template, 5, 3, "div", 20);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", lvl_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r7.display_name || lvl_r7.name, " ");
  }
}
function NewLockerFiltersComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_Conditional_9_Conditional_8_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(4, NewLockerFiltersComponent_Conditional_9_Conditional_8_For_5_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(9, _c024))("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 7, ctx_r1.levels));
  }
}
function NewLockerFiltersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NewLockerFiltersComponent_Conditional_9_Conditional_4_Template, 6, 8, "mat-form-field", 14);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275conditionalCreate(6, NewLockerFiltersComponent_Conditional_9_Conditional_6_Template, 5, 6, "mat-form-field", 14);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalCreate(8, NewLockerFiltersComponent_Conditional_9_Conditional_8_Template, 7, 10, "mat-form-field", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "BOOKINGS.LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region && ((tmp_2_0 = \u0275\u0275pipeBind1(5, 6, ctx_r1.regions)) == null ? null : tmp_2_0.length) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.buildings)) == null ? null : tmp_3_0.length) > 1 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_levels() ? 8 : -1);
  }
}
function NewLockerFiltersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-checkbox", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewLockerFiltersComponent_Conditional_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-duration-field", 25);
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_Conditional_20_Conditional_6_Template_a_duration_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ duration: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.duration)("ngModelOptions", \u0275\u0275pureFunction0(10, _c024))("time", (tmp_5_0 = ctx_r1.form.get("date")) == null ? null : tmp_5_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr);
  }
}
function NewLockerFiltersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 23)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 24);
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_Conditional_20_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, NewLockerFiltersComponent_Conditional_20_Conditional_6_Template, 5, 11, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(8, _c024))("use_24hr", ctx_r1.use_24hr)("disabled", ctx_r1.disable_start);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_end ? 6 : -1);
  }
}
function NewLockerFiltersComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 10)(1, "settings-toggle", 26);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_Conditional_21_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_accessible: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 3, "BOOKINGS.LOCKER_ACCESSIBLE_SHOW"))("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(3, 5, ctx_r1.options)) == null ? null : tmp_2_0.show_accessible)("ngModelOptions", \u0275\u0275pureFunction0(7, _c024));
  }
}
function NewLockerFiltersComponent_Conditional_22_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "settings-toggle", 29);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_Conditional_22_For_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      const feat_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r12, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const feat_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", feat_r12)("ngModel", (((tmp_12_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_12_0.features) || \u0275\u0275pureFunction0(5, _c115)).includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(6, _c024));
  }
}
function NewLockerFiltersComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h2", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, NewLockerFiltersComponent_Conditional_22_For_5_Template, 3, 7, "div", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 3, ctx_r1.features));
  }
}
function NewLockerFiltersComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 30);
    \u0275\u0275listener("click", function NewLockerFiltersComponent_Conditional_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var _NewLockerFiltersComponent = class _NewLockerFiltersComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get disable_date() {
    return this._settings.get("app.lockers.disabled_date_select");
  }
  get disable_start() {
    return this._settings.get("app.lockers.disabled_start_time");
  }
  get hide_end() {
    return this._settings.get("app.lockers.hide_end_time");
  }
  get allow_time_changes() {
    return !!this._settings.get("app.lockers.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.lockers.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.lockers.available_period") || 90)).valueOf();
  }
  close() {
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.hide_levels = input(void 0);
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      return level_list.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
  }
  ngOnInit() {
    this.subscription("bld", combineLatest([
      this._org.active_building,
      this.form.controls.duration.valueChanges
    ]).subscribe(() => {
      this.timeout("disable", () => {
        if (this.disable_date) {
          this.form.controls.date.disable();
        }
      }, 50);
    }));
    this.timeout("disable", () => {
      if (this.disable_date) {
        this.form.controls.date.disable();
      }
    }, 50);
  }
};
_NewLockerFiltersComponent.\u0275fac = function NewLockerFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewLockerFiltersComponent)();
};
_NewLockerFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerFiltersComponent, selectors: [["new-locker-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 26, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "divide-base-200", "relative", "z-0", "w-full", "divide-y", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], [1, "min-w-[256px]", "flex-1"], ["name", "date", "formControlName", "date", 3, "to"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-4", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "py-2"], ["for", "location"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["formControlName", "all_day"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "disabled"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr"], [3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["btn", "", "matRipple", "", "name", "apply-locker-filters", 1, "w-full", 3, "click"]], template: function NewLockerFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, NewLockerFiltersComponent_Conditional_9_Template, 9, 10, "div", 5);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementStart(12, "div", 6)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a-date-field", 7);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, NewLockerFiltersComponent_Conditional_19_Template, 4, 3, "div", 8);
    \u0275\u0275conditionalCreate(20, NewLockerFiltersComponent_Conditional_20_Template, 7, 9, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, NewLockerFiltersComponent_Conditional_21_Template, 4, 8, "section", 10);
    \u0275\u0275conditionalCreate(22, NewLockerFiltersComponent_Conditional_22_Template, 7, 5, "section", 11);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, NewLockerFiltersComponent_Conditional_24_Template, 4, 3, "div", 12);
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_10_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 14, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_levels() && (!(ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(10, 16, ctx.regions)) == null ? null : tmp_3_0.length)) || !(!ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(11, 18, ctx.buildings)) == null ? null : tmp_3_0.length) > 1)) ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 20, "FORM.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("to", ctx.end_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 22, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.allow_all_day ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_levels() ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = \u0275\u0275pipeBind1(23, 24, ctx.features)) == null ? null : tmp_10_0.length) && !ctx.hide_levels() ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 24 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  SettingsToggleComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel,
  MatCheckboxModule,
  MatCheckbox,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=new-locker-filters.component.css.map */"] });
var NewLockerFiltersComponent = _NewLockerFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewLockerFiltersComponent, [{
    type: Component,
    args: [{ selector: "new-locker-filters", template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <form
            class="divide-base-200 relative z-0 w-full divide-y p-2"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'BOOKINGS.DETAILS' | translate }}
                </h2>
                @if (
                    !hide_levels() &&
                    (!(use_region && (regions | async)?.length) ||
                        !(!use_region && (buildings | async)?.length > 1))
                ) {
                    <div class="flex min-w-32 flex-1 flex-col">
                        <label for="location">
                            {{ 'BOOKINGS.LOCATION' | translate }}
                        </label>
                        @if (use_region && (regions | async)?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="region"
                                    [ngModel]="region"
                                    (ngModelChange)="region = $event"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.REGION_ANY' | translate
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
                                <mat-select
                                    name="building"
                                    [ngModel]="building"
                                    (ngModelChange)="building = $event"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        building?.display_name || building?.name
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
                                <mat-select
                                    name="location"
                                    [ngModel]="(options | async)?.zone_id"
                                    (ngModelChange)="
                                        setOptions({ zone_id: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.LEVEL_ANY' | translate
                                    "
                                >
                                    @for (lvl of levels | async; track lvl) {
                                        <mat-option [value]="lvl.id">
                                            <div class="flex flex-col-reverse">
                                                @if (use_region) {
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
                                                        {{
                                                            (
                                                                lvl.parent_id
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
                                                        lvl.display_name ||
                                                            lvl.name
                                                    }}
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                    </div>
                }

                <!-- Date -->
                <div class="min-w-[256px] flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        formControlName="date"
                        [to]="end_date"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [disabled]="disable_start"
                            ></a-time-field>
                        </div>
                        @if (!hide_end) {
                            <div class="w-1/3 flex-1">
                                <label>{{ 'FORM.TIME_END' | translate }}</label>
                                <a-duration-field
                                    [ngModel]="form.value.duration"
                                    (ngModelChange)="
                                        form.patchValue({ duration: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [time]="form.get('date')?.value"
                                    [max]="10 * 60"
                                    [min]="60"
                                    [step]="60"
                                    [use_24hr]="use_24hr"
                                >
                                </a-duration-field>
                            </div>
                        }
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-4 pb-4">
                    <!-- <settings-toggle
              [name]="'APP.WORKPLACE.FAVOURITES_SHOW' | translate"
              [ngModel]="(options | async)?.show_fav"
              (ngModelChange)="setOptions({ show_fav: $event })"
              [ngModelOptions]="{ standalone: true }"
            ></settings-toggle> -->
                    <settings-toggle
                        [name]="'BOOKINGS.LOCKER_ACCESSIBLE_SHOW' | translate"
                        [ngModel]="(options | async)?.show_accessible"
                        (ngModelChange)="
                            setOptions({ show_accessible: $event })
                        "
                        [ngModelOptions]="{ standalone: true }"
                    ></settings-toggle>
                </section>
            }
            @if ((features | async)?.length && !hide_levels()) {
                <section class="space-y-2" features>
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features | async; track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <settings-toggle
                                class="w-full capitalize"
                                [name]="feat"
                                [ngModel]="
                                    (
                                        (options | async)?.features || []
                                    ).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></settings-toggle>
                        </div>
                    }
                </section>
            }
        </form>
        @if (can_close) {
            <div class="border-base-200 w-full border-t px-2 py-2">
                <button
                    btn
                    matRipple
                    name="apply-locker-filters"
                    class="w-full"
                    (click)="close()"
                >
                    {{ 'COMMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      FormsModule,
      MatCheckboxModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-locker-select-modal/new-locker-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=new-locker-filters.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerFiltersComponent, { className: "NewLockerFiltersComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-filters.component.ts", lineNumber: 270 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-map.component.ts
var _c025 = () => ({ controls: true });
var _c116 = () => ({ standalone: true });
function NewLockerMapComponent_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
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
function NewLockerMapComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, NewLockerMapComponent_Conditional_1_For_4_Conditional_2_Template, 5, 3, "div", 7);
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
function NewLockerMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NewLockerMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewLockerMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275repeaterCreate(3, NewLockerMapComponent_Conditional_1_For_4_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c116))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.levels));
  }
}
var _NewLockerMapComponent = class _NewLockerMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.is_displayed = input(false);
    this.active = input("");
    this.onSelect = output();
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([this._org.active_building, this._org.active_region]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([this._org.active_building, this._org.active_region]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.locker_banks = combineLatest([
      this._state.options,
      this._state.available_resources,
      this.lockers_banks$,
      this.lockers$
    ]).pipe(map(([{ show_fav, show_accessible }, resources, banks]) => {
      return banks.filter((i) => resources.find((_) => _.bank_id === i.id) && (!show_accessible || i.lockers.find((_) => _.accessible))).map((bank) => __spreadProps(__spreadValues({}, bank), {
        available: resources.filter((_) => _.bank_id === bank.id).length,
        lockers: bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
          map_id: bank.map_id || bank.id,
          zone: bank.zone
        }))
      }));
    }));
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
    this._change = new BehaviorSubject(0);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this.locker_banks.pipe(map((banks) => banks.map((locker) => ({
      id: locker.map_id || locker.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectLocker(locker)
    }))));
    this.features = combineLatest([
      this.locker_banks,
      this._state.available_resources
    ]).pipe(map(([lockers]) => {
      return this._settings.get("app.lockers.hide_user") ? [] : lockers.map((locker) => ({
        location: locker.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: locker.map_id || locker.id,
          map_id: locker.name,
          name: locker.name || locker.map_id,
          user: this._state.resourceUserName(locker.id)
        },
        z_index: 20
      }));
    }));
    this.styles = combineLatest([
      this.locker_banks,
      this._state.available_resources,
      this._change
    ]).pipe(map(([banks, free_lockers]) => banks.reduce((styles, bank) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = this.active() === bank.id ? "active" : free_lockers.find((_) => bank.lockers.find((lkr) => lkr.id === _.id)) ? "free" : this._state.resourceUserName(bank.id) ? "busy" : "not-bookable";
      styles[`#${bank.map_id || bank.id}`] = {
        fill: status === "active" ? "#512DA8" : colours[`locker-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription("levels_update", this._state.options.subscribe(({ zone_id }) => {
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level = level;
    }));
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectLocker(locker) {
    this.onSelect.emit(locker);
  }
  setLevel(level) {
    this.setOptions({ zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(",").map((_) => parseFloat(_));
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
_NewLockerMapComponent.\u0275fac = function NewLockerMapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewLockerMapComponent)();
};
_NewLockerMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerMapComponent, selectors: [["new-locker-map"]], inputs: { is_displayed: [1, "is_displayed"], active: [1, "active"] }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function NewLockerMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, NewLockerMapComponent_Conditional_1_Template, 6, 8, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275twoWayListener("zoomChange", function NewLockerMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
      return $event;
    })("centerChange", function NewLockerMapComponent_Template_interactive_map_centerChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 8, ctx.levels)) == null ? null : tmp_0_0.length) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.map_url);
    \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
    \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c025));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  InteractiveMapComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=new-locker-map.component.css.map */"] });
var NewLockerMapComponent = _NewLockerMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewLockerMapComponent, [{
    type: Component,
    args: [{ selector: "new-locker-map", template: `
        <div class="border-base-200 bg-base-100 w-full border-b p-2">
            @if ((levels | async)?.length) {
                <mat-form-field
                    levels
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
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
            }
        </div>
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
    ], styles: ["/* angular:styles/component:css;5b4ed0a87238b487692a2c306efe479639b0f8e929cffac085c91f6d64279717;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-locker-select-modal/new-locker-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=new-locker-map.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerMapComponent, { className: "NewLockerMapComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-map.component.ts", lineNumber: 98 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-select-modal.component.ts
function NewLockerSelectModalComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-locker-filters-display", 24);
    \u0275\u0275twoWayListener("viewChange", function NewLockerSelectModalComponent_Conditional_21_Conditional_0_Template_new_locker_filters_display_viewChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.view, $event) || (ctx_r1.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("view", ctx_r1.view);
  }
}
function NewLockerSelectModalComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-locker-bank-list", 25);
    \u0275\u0275listener("toggleFav", function NewLockerSelectModalComponent_Conditional_21_Conditional_1_Template_new_locker_bank_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function NewLockerSelectModalComponent_Conditional_21_Conditional_1_Template_new_locker_bank_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bank = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id)("selected", ctx_r1.selected_ids)("favorites", ctx_r1.favorites);
  }
}
function NewLockerSelectModalComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-locker-map", 26);
    \u0275\u0275listener("onSelect", function NewLockerSelectModalComponent_Conditional_21_Conditional_2_Template_new_locker_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("is_displayed", !!ctx_r1.displayed)("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id);
  }
}
function NewLockerSelectModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewLockerSelectModalComponent_Conditional_21_Conditional_0_Template, 1, 1, "new-locker-filters-display", 21);
    \u0275\u0275conditionalCreate(1, NewLockerSelectModalComponent_Conditional_21_Conditional_1_Template, 1, 3, "new-locker-bank-list", 22)(2, NewLockerSelectModalComponent_Conditional_21_Conditional_2_Template, 1, 2, "new-locker-map", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.view === "list" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view === "list" ? 1 : 2);
  }
}
function NewLockerSelectModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 27)(2, "button", 28);
    \u0275\u0275listener("click", function NewLockerSelectModalComponent_Conditional_22_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bank = null);
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "locker-grid", 30);
    \u0275\u0275listener("clicked", function NewLockerSelectModalComponent_Conditional_22_Template_locker_grid_clicked_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.bank.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("bank", ctx_r1.bank)("selected", ctx_r1.displayed == null ? null : ctx_r1.displayed.id);
  }
}
function NewLockerSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function NewLockerSelectModalComponent_Conditional_23_Template_button_click_0_listener() {
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
var FAV_LOCKER_KEY2 = "favourite_lockers";
var _NewLockerSelectModalComponent = class _NewLockerSelectModalComponent extends AsyncHandler {
  get is_safari() {
    return isMobileSafari();
  }
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY2) || [];
  }
  constructor() {
    super();
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(BookingFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this.show_filters = false;
    this.selected = [];
    this.view = "list";
    this.bank = null;
    const _data = this._data;
    this.selected = [..._data.items || []];
    this._event_form.setOptions(_data.options);
  }
  ngOnInit() {
    this._event_form.options.subscribe(() => {
      this.displayed = null;
      this.bank = null;
    });
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state)
      this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_LOCKER_KEY2, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_LOCKER_KEY2, fav_list.filter((_) => _ !== item.id));
    }
  }
};
_NewLockerSelectModalComponent.\u0275fac = function NewLockerSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewLockerSelectModalComponent)();
};
_NewLockerSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerSelectModalComponent, selectors: [["new-locker-select-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 39, vars: 43, consts: [[1, "bg-base-100", "mb-10", "flex", "h-[calc(100vh-2.5rem)]", "max-h-[calc(100vh-2.5rem)]", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:m-0", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "max-h-[calc(100vh-7rem)]", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], [1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "md:w-160", "lg:block"], [1, "bg-base-200", "flex", "h-full", "w-full", "flex-col", "overflow-auto"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-locker", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "view"], [3, "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "is_displayed", "active"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "onSelect", "is_displayed", "active"], [1, "sticky", "left-0", "flex", "w-full", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "border", 3, "click"], [1, "px-2", "py-2", "font-medium"], [1, "h-1/2", "w-full", "flex-1", 3, "clicked", "bank", "selected"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function NewLockerSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function NewLockerSelectModalComponent_Template_button_click_6_listener() {
      return ctx.view = "list";
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function NewLockerSelectModalComponent_Template_button_click_10_listener() {
      return ctx.view = "map";
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "map");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 6)(15, "icon");
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "main", 7)(18, "div", 8);
    \u0275\u0275element(19, "new-locker-filters", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10);
    \u0275\u0275conditionalCreate(21, NewLockerSelectModalComponent_Conditional_21_Template, 3, 2)(22, NewLockerSelectModalComponent_Conditional_22_Template, 8, 3, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, NewLockerSelectModalComponent_Conditional_23_Template, 3, 1, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "footer", 13)(25, "button", 14)(26, "div", 15)(27, "icon", 16);
    \u0275\u0275text(28, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 18);
    \u0275\u0275listener("click", function NewLockerSelectModalComponent_Template_button_click_32_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    });
    \u0275\u0275elementStart(33, "div", 19)(34, "icon", 16);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 20);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.is_safari ? "calc(100vh - 80px)" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 33, "BOOKINGS.DESK_FIND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-base-100", ctx.view !== "list")("bg-secondary", ctx.view === "list")("text-secondary-content", ctx.view === "list");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 35, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-base-100", ctx.view !== "map")("bg-secondary", ctx.view === "map")("text-secondary-content", ctx.view === "map");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 37, "COMMON.MAP"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("hidden", !ctx.show_filters);
    \u0275\u0275advance();
    \u0275\u0275property("hide_levels", ctx.view !== "list");
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx.show_filters)("p-2", ctx.view === "list");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.bank ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.displayed ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 39, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 41, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
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
  NewLockerBankListComponent,
  NewLockerFiltersComponent,
  NewLockerMapComponent,
  NewLockerFiltersDisplayComponent,
  LockerGridComponent
], encapsulation: 2 });
var NewLockerSelectModalComponent = _NewLockerSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewLockerSelectModalComponent, [{
    type: Component,
    args: [{ selector: "new-locker-select-modal", template: `
        <div
            class="bg-base-100 mb-10 flex h-[calc(100vh-2.5rem)] max-h-[calc(100vh-2.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
            [style.height]="is_safari ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.DESK_FIND' | translate }}
                </h2>
                <div
                    class="divide-secondary border-secondary flex divide-x rounded-sm border"
                >
                    <button
                        icon
                        matRipple
                        class="rounded-l rounded-r-none"
                        [class.bg-base-100]="view !== 'list'"
                        [class.bg-secondary]="view === 'list'"
                        [class.text-secondary-content]="view === 'list'"
                        [matTooltip]="'COMMON.LIST' | translate"
                        (click)="view = 'list'"
                    >
                        <icon>list</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="rounded-l-none rounded-r"
                        [class.bg-base-100]="view !== 'map'"
                        [class.bg-secondary]="view === 'map'"
                        [class.text-secondary-content]="view === 'map'"
                        [matTooltip]="'COMMON.MAP' | translate"
                        (click)="view = 'map'"
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
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters"
                >
                    <new-locker-filters
                        [hide_levels]="view !== 'list'"
                    ></new-locker-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-[20rem] md:w-160 lg:block"
                    [class.hidden]="show_filters"
                    [class.p-2]="view === 'list'"
                >
                    @if (!bank) {
                        @if (view === 'list') {
                            <new-locker-filters-display
                                [(view)]="view"
                            ></new-locker-filters-display>
                        }
                        @if (view === 'list') {
                            <new-locker-bank-list
                                [active]="displayed?.id"
                                [selected]="selected_ids"
                                [favorites]="favorites"
                                (toggleFav)="toggleFavourite($event)"
                                (onSelect)="bank = $any($event)"
                            ></new-locker-bank-list>
                        } @else {
                            <new-locker-map
                                class="h-full min-h-[60vh] w-full"
                                [is_displayed]="!!displayed"
                                [active]="displayed?.id"
                                (onSelect)="displayed = $event"
                            >
                            </new-locker-map>
                        }
                    } @else {
                        <div
                            class="bg-base-200 flex h-full w-full flex-col overflow-auto"
                        >
                            <div
                                class="sticky left-0 flex w-full items-center space-x-2"
                            >
                                <button
                                    icon
                                    matRipple
                                    class="border-base-300 bg-base-100 border"
                                    (click)="bank = null"
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="px-2 py-2 font-medium">
                                    {{ bank.name }}
                                </div>
                            </div>
                            <locker-grid
                                class="h-1/2 w-full flex-1"
                                [bank]="bank"
                                [selected]="displayed?.id"
                                (clicked)="displayed = $event"
                            >
                            </locker-grid>
                        </div>
                    }
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
                    name="locker-return"
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
                    name="toggle-locker"
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.id)
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
      NewLockerBankListComponent,
      NewLockerFiltersComponent,
      NewLockerMapComponent,
      NewLockerFiltersDisplayComponent,
      LockerGridComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerSelectModalComponent, { className: "NewLockerSelectModalComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-select-modal.component.ts", lineNumber: 210 });
})();

// libs/bookings/src/lib/locker-list-field.component.ts
var _c026 = () => [];
var _c117 = () => ({ standalone: true });
function LockerListFieldComponent_For_2_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 21);
    \u0275\u0275listener("ngModelChange", function LockerListFieldComponent_For_2_Conditional_1_For_6_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setFeatures(opt_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", (ctx_r3.selected_features || \u0275\u0275pureFunction0(3, _c026)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c117));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3, " ");
  }
}
function LockerListFieldComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275repeaterCreate(5, LockerListFieldComponent_For_2_Conditional_1_For_6_Template, 2, 5, "mat-checkbox", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.features());
  }
}
function LockerListFieldComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r5.images[0]);
  }
}
function LockerListFieldComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
}
function LockerListFieldComponent_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 22);
    \u0275\u0275text(2, "accessible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "BOOKINGS.LOCKER_ACCESSIBLE"), " ");
  }
}
function LockerListFieldComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, LockerListFieldComponent_For_2_Conditional_1_Template, 7, 3, "div", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275conditionalCreate(3, LockerListFieldComponent_For_2_Conditional_3_Template, 1, 1, "img", 8)(4, LockerListFieldComponent_For_2_Conditional_4_Template, 1, 0, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "icon", 13);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "level");
    \u0275\u0275pipe(14, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, LockerListFieldComponent_For_2_Conditional_15_Template, 6, 3, "div", 12);
    \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
    \u0275\u0275listener("click", function LockerListFieldComponent_For_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeResources());
    });
    \u0275\u0275elementStart(18, "div", 16)(19, "icon");
    \u0275\u0275text(20, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 17);
    \u0275\u0275listener("click", function LockerListFieldComponent_For_2_Template_button_click_23_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeResource(item_r5));
    });
    \u0275\u0275elementStart(24, "div", 16)(25, "icon");
    \u0275\u0275text(26, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_13_0;
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r3.features()) == null ? null : tmp_10_0.length) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r5.images == null ? null : item_r5.images.length) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.name || "Locker", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_13_0 = \u0275\u0275pipeBind1(13, 7, item_r5 == null ? null : item_r5.zone == null ? null : item_r5.zone.id)) == null ? null : tmp_13_0.display_name) || ((tmp_13_0 = \u0275\u0275pipeBind1(14, 9, item_r5 == null ? null : item_r5.zone == null ? null : item_r5.zone.id)) == null ? null : tmp_13_0.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r5.accessible ? 15 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 11, "COMMON.CHANGE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 13, "COMMON.REMOVE"), " ");
  }
}
var EMPTY_FAVS2 = [];
var _LockerListFieldComponent = class _LockerListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.features = input([]);
    this.room_size = 3;
    this.items = [];
    this.disabled = false;
    this.selected_features = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY) || EMPTY_FAVS2;
  }
  /** Add or edit selected items */
  changeResources() {
    const ref = this._dialog.open(NewLockerSelectModalComponent, {
      data: {
        items: this.items,
        options: { capacity: this.room_size }
      }
    });
    ref.afterClosed().subscribe((items) => {
      if (!items)
        items = ref.componentInstance.selected;
      console.log("Items:", items);
      this.setValue(items);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.items.filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.items = new_value;
    if (this._onChange)
      this._onChange(this.items);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.items = value || [];
  }
  setFeatures(opt, value) {
    const features = this.selected_features || [];
    if (value) {
      this.selected_features = [...features, opt];
    } else {
      this.selected_features = features.filter((f) => f !== opt);
    }
  }
  toggleFavourite(space) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, fav_list.filter((_) => _ !== space.id));
    }
  }
};
_LockerListFieldComponent.\u0275fac = function LockerListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerListFieldComponent)();
};
_LockerListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerListFieldComponent, selectors: [["locker-list-field"]], inputs: { features: [1, "features"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _LockerListFieldComponent),
    multi: true
  }
])], decls: 12, vars: 3, consts: [["list", "", 1, "space-y-2"], ["locker", "", 1, "border-base-200", "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "p-2", "shadow-sm"], ["btn", "", "matRipple", "", "name", "add-locker", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], [1, "flex", "flex-col"], [1, "bg-base-200", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-base", "text-blue-500"], [1, "absolute", "right-0", "bottom-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-locker", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-locker", 1, "clear", 3, "click"], ["for", "title"], ["features", "", 1, "flex", "flex-wrap", "items-center", "space-x-2"], [3, "ngModel", "ngModelOptions"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "text-info", "text-base"]], template: function LockerListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, LockerListFieldComponent_For_2_Template, 29, 15, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function LockerListFieldComponent_Template_button_click_3_listener() {
      return ctx.changeResources();
    });
    \u0275\u0275elementStart(4, "div", 3)(5, "icon");
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 4);
    \u0275\u0275element(11, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "BOOKINGS.LOCKER_ADD"));
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  AuthenticatedImageDirective,
  MatCheckboxModule,
  MatCheckbox,
  LevelPipe,
  FormsModule,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var LockerListFieldComponent = _LockerListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerListFieldComponent, [{
    type: Component,
    args: [{ selector: `locker-list-field`, template: `
        <div list class="space-y-2">
            @for (item of items; track item) {
                <div
                    locker
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    @if (features()?.length) {
                        <div class="flex flex-col">
                            <label for="title">{{
                                'COMMON.TYPE' | translate
                            }}</label>
                            <div
                                features
                                class="flex flex-wrap items-center space-x-2"
                            >
                                @for (opt of features(); track opt) {
                                    <mat-checkbox
                                        [ngModel]="
                                            (selected_features || []).includes(
                                                opt
                                            )
                                        "
                                        (ngModelChange)="
                                            setFeatures(opt, $event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    >
                                        {{ opt }}
                                    </mat-checkbox>
                                }
                            </div>
                        </div>
                    }
                    <div
                        class="bg-base-200 mr-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl"
                    >
                        @if (item.images?.length) {
                            <img
                                auth
                                [source]="item.images[0]"
                                class="min-h-full object-cover"
                            />
                        } @else {
                            <img
                                class="m-auto"
                                src="assets/icons/locker-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="space-y-2 pb-4">
                        <div class="font-medium">
                            {{ item.name || 'Locker' }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-base text-blue-500">place</icon>
                            <p>
                                {{
                                    (item?.zone?.id | level)?.display_name ||
                                        (item?.zone?.id | level)?.name
                                }}
                            </p>
                        </div>
                        @if ($any(item).accessible) {
                            <div class="flex items-center space-x-2 text-sm">
                                <icon class="text-info text-base"
                                    >accessible</icon
                                >
                                <p>
                                    {{
                                        'BOOKINGS.LOCKER_ACCESSIBLE' | translate
                                    }}
                                </p>
                            </div>
                        }
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                name="edit-locker"
                                class="clear"
                                (click)="changeResources()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>edit</icon>
                                    {{ 'COMMON.CHANGE' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                name="remove-locker"
                                class="clear"
                                (click)="removeResource(item)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>close</icon>
                                    {{ 'COMMON.REMOVE' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
        <button
            btn
            matRipple
            name="add-locker"
            class="inverse mt-2 w-full"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'BOOKINGS.LOCKER_ADD' | translate }}</span>
            </div>
        </button>
        <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
            <div class="min-w-[256px] flex-1 space-y-2"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => LockerListFieldComponent),
        multi: true
      }
    ], imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      AuthenticatedImageDirective,
      MatCheckboxModule,
      LevelPipe,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerListFieldComponent, { className: "LockerListFieldComponent", filePath: "libs/bookings/src/lib/locker-list-field.component.ts", lineNumber: 162 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-details.component.ts
var _c027 = () => ({ disable_pan: true, disable_zoom: true });
function ParkingSpaceDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.space().images);
  }
}
function ParkingSpaceDetailsComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "interactive-map", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.space().map_id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c027));
  }
}
function ParkingSpaceDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275conditionalCreate(1, ParkingSpaceDetailsComponent_Conditional_0_Conditional_1_Template, 1, 1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function ParkingSpaceDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ParkingSpaceDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "section", 6)(10, "h2", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "hr");
    \u0275\u0275elementStart(13, "section", 8)(14, "h2", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "icon");
    \u0275\u0275text(19, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "icon");
    \u0275\u0275text(24, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "hr");
    \u0275\u0275conditionalCreate(28, ParkingSpaceDetailsComponent_Conditional_0_Conditional_28_Template, 2, 5, "section", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 12)(30, "button", 13);
    \u0275\u0275listener("click", function ParkingSpaceDetailsComponent_Conditional_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeChange.emit(!ctx_r1.active()));
    });
    \u0275\u0275elementStart(31, "div", 14)(32, "icon", 15);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sm:h-40", (tmp_1_0 = ctx_r1.space().images) == null ? null : tmp_1_0.length)("h-64", (tmp_2_0 = ctx_r1.space().images) == null ? null : tmp_2_0.length)("sm:h-0", !((tmp_3_0 = ctx_r1.space().images) == null ? null : tmp_3_0.length))("h-12", !((tmp_4_0 = ctx_r1.space().images) == null ? null : tmp_4_0.length))("bg-transparent!", !((tmp_5_0 = ctx_r1.space().images) == null ? null : tmp_5_0.length));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.space().images) == null ? null : tmp_6_0.length) ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav())("bg-info!", ctx_r1.fav());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fav() ? "favorite" : "favorite_border");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 25, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.building == null ? null : ctx_r1.building.address) || (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.map_open() ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r1.active());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.active() ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 27, ctx_r1.active() ? "BOOKINGS.SPACE_REMOVE" : "BOOKINGS.SPACE_ADD_TO"), " ");
  }
}
function ParkingSpaceDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_SELECT_MSG"), " ");
  }
}
var _ParkingSpaceDetailsComponent = class _ParkingSpaceDetailsComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this.map_open = input(false);
    this.space = input(void 0);
    this.fav = input(false);
    this.active = input(false);
    this.activeChange = output();
    this.close = output();
    this.toggleFav = output();
    this.map_url = "";
    this.features = [];
  }
  get level() {
    const space = this.space();
    return this._org.levelWithID([space?.zone.id]) || space?.zone;
  }
  get building() {
    const space = this.space();
    return this._org.buildings.find((_) => space?.zone.id === _.id || space?.zone.parent_id === _.id);
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
_ParkingSpaceDetailsComponent.\u0275fac = function ParkingSpaceDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingSpaceDetailsComponent)();
};
_ParkingSpaceDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceDetailsComponent, selectors: [["parking-space-details"]], inputs: { map_open: [1, "map_open"], space: [1, "space"], fav: [1, "fav"], active: [1, "active"] }, outputs: { activeChange: "activeChange", close: "close", toggleFav: "toggleFav" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["image", "", 1, "bg-base-200", "relative", "w-full"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "close", "", 1, "bg-base-200", "absolute", "top-2", "left-2", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "bg-base-200", "absolute", "top-2", "right-2", 3, "click"], [1, "h-1/2", "flex-1", "space-y-2", "overflow-auto", "p-2"], ["actions", "", 1, "z-0"], [1, "mt-4", "mb-2", "text-xl", "font-medium"], ["details", "", 1, "space-y-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["map", "", 1, "border-base-200", "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded-sm", "border", "sm:h-48"], [1, "border-base-200", "border-t", "p-2", "shadow-sm", "sm:hidden"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function ParkingSpaceDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingSpaceDetailsComponent_Conditional_0_Template, 37, 29)(1, ParkingSpaceDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.space() ? 0 : 1);
  }
}, dependencies: [
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  InteractiveMapComponent,
  IconComponent,
  ImageCarouselComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n}\n/*# sourceMappingURL=parking-details.component.css.map */"] });
var ParkingSpaceDetailsComponent = _ParkingSpaceDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceDetailsComponent, [{
    type: Component,
    args: [{ selector: `parking-space-details`, template: `
        @if (space()) {
            <section
                image
                class="bg-base-200 relative w-full"
                [class.sm:h-40]="space().images?.length"
                [class.h-64]="space().images?.length"
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
                    close
                    (click)="close.emit()"
                    class="bg-base-200 absolute top-2 left-2 sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-info-content]="fav()"
                    [class.bg-info!]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-base-200 absolute top-2 right-2"
                >
                    <icon>{{ fav() ? 'favorite' : 'favorite_border' }}</icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 overflow-auto p-2">
                <section actions class="z-0">
                    <h2 class="mt-4 mb-2 text-xl font-medium">
                        {{ space().display_name || space().name }}
                    </h2>
                </section>
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">
                        {{ 'BOOKINGS.DETAILS' | translate }}
                    </h2>
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
                <hr />
                @if (!map_open()) {
                    <section
                        map
                        class="border-base-200 relative mx-auto h-64 w-full overflow-hidden rounded-sm border sm:h-48"
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
            <div class="border-base-200 border-t p-2 shadow-sm sm:hidden">
                <button
                    btn
                    matRipple
                    [class.inverse]="active()"
                    class="w-full"
                    (click)="activeChange.emit(!active())"
                >
                    <div class="flex items-center justify-center">
                        <icon class="text-2xl">{{
                            active() ? 'remove' : 'add'
                        }}</icon>
                        <p>
                            {{
                                (active()
                                    ? 'BOOKINGS.SPACE_REMOVE'
                                    : 'BOOKINGS.SPACE_ADD_TO'
                                ) | translate
                            }}
                        </p>
                    </div>
                </button>
            </div>
        } @else {
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.PARKING_SELECT_MSG' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      InteractiveMapComponent,
      IconComponent,
      ImageCarouselComponent
    ], styles: ["/* angular:styles/component:css;a66e4ce37902106698f7ffd2a8b8ad629be11d1630b05efe8db8afcd7e758b2c;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/parking-select-modal/parking-details.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n}\n/*# sourceMappingURL=parking-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceDetailsComponent, { className: "ParkingSpaceDetailsComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-details.component.ts", lineNumber: 153 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts
var _c028 = () => ({ standalone: true });
var _c118 = () => [];
function ParkingSpaceFiltersComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ParkingSpaceFiltersComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceFiltersComponent_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
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
function ParkingSpaceFiltersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Conditional_16_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, ParkingSpaceFiltersComponent_Conditional_16_For_4_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(7, _c028))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.regions));
  }
}
function ParkingSpaceFiltersComponent_Conditional_18_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
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
function ParkingSpaceFiltersComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 21);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Conditional_18_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(2, ParkingSpaceFiltersComponent_Conditional_18_For_3_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c028))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 3, ctx_r1.buildings));
  }
}
function ParkingSpaceFiltersComponent_Conditional_20_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const lvl_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, lvl_r8.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function ParkingSpaceFiltersComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20)(1, "div", 23);
    \u0275\u0275conditionalCreate(2, ParkingSpaceFiltersComponent_Conditional_20_For_5_Conditional_2_Template, 5, 3, "div", 24);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function ParkingSpaceFiltersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 22);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Conditional_20_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(4, ParkingSpaceFiltersComponent_Conditional_20_For_5_Template, 5, 3, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(9, _c028))("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 7, ctx_r1.levels));
  }
}
function ParkingSpaceFiltersComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-checkbox", 26);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Conditional_28_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ all_day: $event }));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.form.value.all_day)("ngModelOptions", \u0275\u0275pureFunction0(5, _c028));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.ALL_DAY"), " ");
  }
}
function ParkingSpaceFiltersComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 27)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 28);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Conditional_29_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a-duration-field", 29);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Conditional_29_Template_a_duration_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ duration: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(18, _c028))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.duration)("ngModelOptions", \u0275\u0275pureFunction0(19, _c028))("time", (tmp_9_0 = ctx_r1.form.get("date")) == null ? null : tmp_9_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function ParkingSpaceFiltersComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 15)(1, "h2", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "settings-toggle", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Conditional_30_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.options)) == null ? null : tmp_3_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c028));
  }
}
function ParkingSpaceFiltersComponent_Conditional_31_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 26);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Conditional_31_For_5_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r13, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const feat_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feat_r13, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (((tmp_12_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_12_0.features) || \u0275\u0275pureFunction0(5, _c118)).includes(feat_r13))("ngModelOptions", \u0275\u0275pureFunction0(6, _c028));
  }
}
function ParkingSpaceFiltersComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "h2", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ParkingSpaceFiltersComponent_Conditional_31_For_5_Template, 5, 7, "div", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 3, ctx_r1.features));
  }
}
function ParkingSpaceFiltersComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 35);
    \u0275\u0275listener("click", function ParkingSpaceFiltersComponent_Conditional_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var _ParkingSpaceFiltersComponent = class _ParkingSpaceFiltersComponent {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get allow_all_day() {
    return !!this._settings.get("app.parking.allow_all_day") || !!this._settings.get("app.bookings.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  constructor() {
    this._bsheet_ref = inject(MatBottomSheetRef, { optional: true });
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.hide_levels = input(void 0);
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.setRegion = (r) => this._org.region = r;
    this.can_close = !!this._bsheet_ref;
  }
};
_ParkingSpaceFiltersComponent.\u0275fac = function ParkingSpaceFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingSpaceFiltersComponent)();
};
_ParkingSpaceFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceFiltersComponent, selectors: [["parking-space-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, decls: 34, vars: 37, consts: [[1, "border-base-200", "flex", "items-center", "rounded-t-md", "border-b", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-parking-filters", 1, "sm:hidden"], [1, "flex-2", "text-center", "font-medium"], [1, "flex-1"], [1, "divide-base-200", "max-h-[65vh]", "w-full", "max-w-[100vw]", "divide-y", "overflow-x-hidden", "overflow-y-auto", "p-2", "sm:max-w-[30vw]", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "min-w-[256px]", "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "to", "timezone"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "py-2"], ["icon", "", "matRipple", "", "name", "close-parking-filters", 1, "sm:hidden", 3, "click"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr", "timezone"], [1, "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], ["for", "feat", 1, "w-1/2", "flex-1"], ["btn", "", "matRipple", "", "name", "apply-parking-filters", 1, "w-full", 3, "click"]], template: function ParkingSpaceFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ParkingSpaceFiltersComponent_Conditional_2_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 5)(8, "section", 6)(9, "h2", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, ParkingSpaceFiltersComponent_Conditional_16_Template, 6, 8, "mat-form-field", 10);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275conditionalCreate(18, ParkingSpaceFiltersComponent_Conditional_18_Template, 5, 6, "mat-form-field", 10);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275conditionalCreate(20, ParkingSpaceFiltersComponent_Conditional_20_Template, 7, 10, "mat-form-field", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11)(22, "label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a-date-field", 12);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Template_a_date_field_ngModelChange_25_listener($event) {
      return ctx.form.patchValue({ date: $event });
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, ParkingSpaceFiltersComponent_Conditional_28_Template, 4, 6, "div", 13);
    \u0275\u0275conditionalCreate(29, ParkingSpaceFiltersComponent_Conditional_29_Template, 11, 20, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, ParkingSpaceFiltersComponent_Conditional_30_Template, 8, 11, "section", 15);
    \u0275\u0275conditionalCreate(31, ParkingSpaceFiltersComponent_Conditional_31_Template, 7, 5, "section", 16);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, ParkingSpaceFiltersComponent_Conditional_33_Template, 4, 3, "div", 17);
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_18_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 20, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 22, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 24, "BOOKINGS.LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(17, 26, ctx.regions)) == null ? null : tmp_5_0.length) ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.use_region && ((tmp_6_0 = \u0275\u0275pipeBind1(19, 28, ctx.buildings)) == null ? null : tmp_6_0.length) > 1 ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_levels() ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 30, "FORM.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(36, _c028))("disabled", ctx.form.controls.date.disabled)("to", ctx.end_date)("timezone", ctx.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 32, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.allow_all_day && !ctx.form.controls.date.disabled ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_levels() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = \u0275\u0275pipeBind1(32, 34, ctx.features)) == null ? null : tmp_18_0.length) && !ctx.hide_levels() ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 33 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  MatCheckboxModule,
  MatCheckbox,
  SettingsToggleComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormsModule,
  NgModel,
  IconComponent,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=parking-filters.component.css.map */"] });
var ParkingSpaceFiltersComponent = _ParkingSpaceFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceFiltersComponent, [{
    type: Component,
    args: [{ selector: "parking-space-filters", template: `
        <div
            class="border-base-200 flex items-center rounded-t-md border-b pb-2 sm:hidden"
        >
            <div class="flex-1 pl-2">
                @if (can_close) {
                    <button
                        icon
                        matRipple
                        name="close-parking-filters"
                        class="sm:hidden"
                        (click)="close()"
                    >
                        <icon>keyboard_arrow_left</icon>
                    </button>
                }
            </div>
            <h3 class="flex-2 text-center font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="divide-base-200 max-h-[65vh] w-full max-w-[100vw] divide-y overflow-x-hidden overflow-y-auto p-2 sm:max-w-[30vw]"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'BOOKINGS.DETAILS' | translate }}
                </h2>
                <div class="flex min-w-32 flex-1 flex-col">
                    <label for="location">
                        {{ 'BOOKINGS.LOCATION' | translate }}
                    </label>
                    @if (use_region && (regions | async)?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.REGION_ANY' | translate"
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
                            <mat-select
                                name="building"
                                [ngModel]="building"
                                (ngModelChange)="building = $event"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building?.display_name || building?.name
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
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zone_id"
                                (ngModelChange)="
                                    setOptions({ zone_id: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                            >
                                @for (lvl of levels | async; track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl.parent_id
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

                <!-- Date -->
                <div class="min-w-[256px] flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        [ngModel]="form.getRawValue().date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [disabled]="form.controls.date.disabled"
                        [to]="end_date"
                        [timezone]="timezone"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day && !form.controls.date.disabled) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox
                            [ngModel]="form.value.all_day"
                            (ngModelChange)="
                                form.patchValue({ all_day: $event })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_END' | translate }}</label>
                            <a-duration-field
                                [ngModel]="form.value.duration"
                                (ngModelChange)="
                                    form.patchValue({ duration: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [name]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="(options | async)?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
                </section>
            }
            @if ((features | async)?.length && !hide_levels()) {
                <section class="space-y-2" features>
                    <h2 class="text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features | async; track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <div for="feat" class="w-1/2 flex-1">
                                {{ feat }}
                            </div>
                            <mat-checkbox
                                [ngModel]="
                                    (
                                        (options | async)?.features || []
                                    ).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></mat-checkbox>
                        </div>
                    }
                </section>
            }
        </form>
        @if (can_close) {
            <div class="border-base-200 w-full border-t px-2 py-2">
                <button
                    btn
                    matRipple
                    name="apply-parking-filters"
                    class="w-full"
                    (click)="close()"
                >
                    {{ 'COMMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      MatCheckboxModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      FormsModule,
      IconComponent,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=parking-filters.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceFiltersComponent, { className: "ParkingSpaceFiltersComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts", lineNumber: 282 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts
function ParkingSpaceFiltersDisplayComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.location, " ");
  }
}
function ParkingSpaceFiltersDisplayComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function ParkingSpaceFiltersDisplayComponent_For_21_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeFeature(feat_r3));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
var _ParkingSpaceFiltersDisplayComponent = class _ParkingSpaceFiltersDisplayComponent extends AsyncHandler {
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
    this._bsheet = inject(MatBottomSheet);
    this._event_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.view = model("list");
    this.viewChange = output();
    this.options = this._event_form.options;
    this.location = "";
    this.editFilters = () => this._bsheet.open(ParkingSpaceFiltersComponent);
  }
  ngOnInit() {
    this.subscription("opts", this.options.subscribe(({ zone_id }) => this._updateLocation([zone_id])));
  }
  async removeFeature(feat) {
    const value = await nextValueFrom(this._event_form.options);
    this._event_form.setOptions(__spreadProps(__spreadValues({}, value), {
      features: (value.features || []).filter((_) => _ !== feat)
    }));
  }
  _updateLocation(zone_ids = []) {
    const level = this._org.levelWithID(zone_ids);
    const item = level || this._org.building;
    this.location = item?.display_name || item?.name || "";
  }
};
_ParkingSpaceFiltersDisplayComponent.\u0275fac = function ParkingSpaceFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingSpaceFiltersDisplayComponent)();
};
_ParkingSpaceFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceFiltersDisplayComponent, selectors: [["parking-space-filters-display"]], inputs: { view: [1, "view"] }, outputs: { view: "viewChange", viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 28, consts: [["actions", "", 1, "flex", "items-center", "space-x-2", "p-2", "sm:hidden"], ["matRipple", "", "filters", "", 1, "w-1/2", "flex-1", 3, "click"], [1, "flex", "items-center"], ["matRipple", "", "map", "", 1, "rounded-l", "rounded-r-none", 3, "click"], ["matRipple", "", "list", "", 1, "rounded-l-none", "rounded-r", 3, "click"], ["filters", "", 1, "flex", "w-140", "max-w-full", "flex-wrap", "items-center", "p-2", "sm:max-w-140"], ["filter-item", "", "zone", ""], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", ""], ["icon", "", "matRipple", "", 1, "-mr-4", 3, "click"]], template: function ParkingSpaceFiltersDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
    \u0275\u0275listener("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_1_listener() {
      return ctx.editFilters();
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
    \u0275\u0275listener("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_5_listener() {
      ctx.view.set("map");
      return ctx.viewChange.emit(ctx.view());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_8_listener() {
      ctx.view.set("list");
      return ctx.viewChange.emit(ctx.view());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "section", 5);
    \u0275\u0275conditionalCreate(12, ParkingSpaceFiltersDisplayComponent_Conditional_12_Template, 2, 1, "div", 6);
    \u0275\u0275elementStart(13, "div", 7);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, ParkingSpaceFiltersDisplayComponent_For_21_Template, 6, 1, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", ctx.view() !== "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 13, "COMMON.MAP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.view() !== "list");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 15, "COMMON.LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.location ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 17, ctx.start, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(18, 20, ctx.start, ctx.time_format), " \u2014 ", \u0275\u0275pipeBind2(19, 23, ctx.end, ctx.time_format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_8_0 = \u0275\u0275pipeBind1(22, 26, ctx.options)) == null ? null : tmp_8_0.features);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, IconComponent, TranslatePipe, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=parking-filters-display.component.css.map */"] });
var ParkingSpaceFiltersDisplayComponent = _ParkingSpaceFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: `parking-space-filters-display`, template: `
        <section actions class="flex items-center space-x-2 p-2 sm:hidden">
            <button
                matRipple
                filters
                class="w-1/2 flex-1"
                (click)="editFilters()"
            >
                {{ 'COMMON.FILTERS' | translate }}
            </button>
            <div class="flex items-center">
                <button
                    matRipple
                    map
                    class="rounded-l rounded-r-none"
                    [class.inverse]="view() !== 'map'"
                    (click)="view.set('map'); viewChange.emit(view())"
                >
                    {{ 'COMMON.MAP' | translate }}
                </button>
                <button
                    matRipple
                    list
                    class="rounded-l-none rounded-r"
                    [class.inverse]="view() !== 'list'"
                    (click)="view.set('list'); viewChange.emit(view())"
                >
                    {{ 'COMMON.LIST' | translate }}
                </button>
            </div>
        </section>
        <section
            filters
            class="flex w-140 max-w-full flex-wrap items-center p-2 sm:max-w-140"
        >
            @if (location) {
                <div filter-item zone>
                    {{ location }}
                </div>
            }
            <div filter-item date>
                {{ start | date: 'mediumDate' }}
            </div>
            <div filter-item time>
                {{ start | date: time_format }} &mdash;
                {{ end | date: time_format }}
            </div>
            @for (feat of (options | async)?.features; track feat) {
                <div filter-item>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        class="-mr-4"
                        (click)="removeFeature(feat)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, IconComponent, TranslatePipe, MatRippleModule], styles: ["/* angular:styles/component:css;0959a8279159e2589d106339b636cabdefc94315ba1f7ffe415616deff894a80;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=parking-filters-display.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceFiltersDisplayComponent, { className: "ParkingSpaceFiltersDisplayComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts", lineNumber: 105 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-list.component.ts
var _c029 = (a0) => ({ count: a0 });
function ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Template_button_click_1_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectSpace(space_r2));
    });
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(4, ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 10)(5, ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "icon", 15);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 16);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Template_button_click_14_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(space_r2));
    });
    \u0275\u0275elementStart(15, "icon", 17);
    \u0275\u0275text(16, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info!", ctx_r2.active() === space_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(space_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((space_r2.images == null ? null : space_r2.images.length) ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.name || "Meeting Space", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || (space_r2.level == null ? null : space_r2.level.display_name) || (space_r2.level == null ? null : space_r2.level.name) || (space_r2.zone == null ? null : space_r2.zone.display_name) || (space_r2.zone == null ? null : space_r2.zone.name), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(space_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(space_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function ParkingSpaceListComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, ParkingSpaceListComponent_Conditional_7_Conditional_0_For_2_Template, 17, 9, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.assets));
  }
}
function ParkingSpaceListComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_LIST_EMPTY"), " ");
  }
}
function ParkingSpaceListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingSpaceListComponent_Conditional_7_Conditional_0_Template, 4, 2, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, ParkingSpaceListComponent_Conditional_7_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.assets)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function ParkingSpaceListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.PARKING_LIST_LOADING"), " ");
  }
}
var _ParkingSpaceListComponent = class _ParkingSpaceListComponent {
  constructor() {
    this._form = inject(BookingFormService);
    this.active = input("");
    this.selected = input("");
    this.favorites = input([]);
    this.onSelect = output();
    this.toggleFav = output();
    this.assets = combineLatest([
      this._form.options,
      this._form.available_resources
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
      const a_fav = this.isFavourite(a.id) ? 1 : 0;
      const b_fav = this.isFavourite(b.id) ? 1 : 0;
      return b_fav - a_fav;
    })));
    this.loading = this._form.loading;
  }
  isFavourite(space_id) {
    return this.favorites().includes(space_id);
  }
  selectSpace(space) {
    this.onSelect.emit(space);
  }
};
_ParkingSpaceListComponent.\u0275fac = function ParkingSpaceListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingSpaceListComponent)();
};
_ParkingSpaceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListComponent, selectors: [["parking-space-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 10, vars: 14, consts: [[1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm", 3, "border-info!"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["matRipple", "", "select", "", 1, "flex", "h-full", "w-full", "items-center", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], [1, "space-y-2"], [1, "mr-10", "truncate", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function ParkingSpaceListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ParkingSpaceListComponent_Conditional_7_Template, 3, 3);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275conditionalBranchCreate(9, ParkingSpaceListComponent_Conditional_9_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 7, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(12, _c029, ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.assets)) == null ? null : tmp_1_0.length) || 0)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(8, 10, ctx.loading) ? 7 : 9);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  AuthenticatedImageDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=parking-list.component.css.map */"] });
var ParkingSpaceListComponent = _ParkingSpaceListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceListComponent, [{
    type: Component,
    args: [{ selector: `parking-space-list`, template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: (assets | async)?.length || 0 }
            }}
        </p>
        @if (!(loading | async)) {
            @if ((assets | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (space of assets | async; track space) {
                        <li
                            space
                            [class.border-info!]="active() === space.id"
                            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
                        >
                            <button
                                matRipple
                                select
                                class="flex h-full w-full items-center"
                                (click)="selectSpace(space)"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl"
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
                                            src="assets/icons/car-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="space-y-2">
                                    <div class="mr-10 truncate font-medium">
                                        {{ space.name || 'Meeting Space' }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p>
                                            {{
                                                space.location ||
                                                    space.level?.display_name ||
                                                    space.level?.name ||
                                                    space.zone?.display_name ||
                                                    space.zone?.name
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                fav
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
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.PARKING_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.PARKING_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;24f101a51156c4881e8f3ec7d9a4da55f6e3c3a951b1bce21fa7949a1a188821;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/parking-select-modal/parking-list.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=parking-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListComponent, { className: "ParkingSpaceListComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-list.component.ts", lineNumber: 142 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-map.component.ts
var _c030 = () => ({ controls: true });
var _c119 = () => ({ standalone: true });
function ParkingSpaceMapComponent_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
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
function ParkingSpaceMapComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, ParkingSpaceMapComponent_Conditional_1_For_4_Conditional_2_Template, 5, 3, "div", 7);
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
function ParkingSpaceMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ParkingSpaceMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ParkingSpaceMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275repeaterCreate(3, ParkingSpaceMapComponent_Conditional_1_For_4_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c119))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.levels));
  }
}
var _ParkingSpaceMapComponent = class _ParkingSpaceMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.is_displayed = input(false);
    this.active = model("");
    this.onSelect = output();
    this.parkings = this._state.available_resources;
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
    this._change = new BehaviorSubject(0);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this._state.available_resources.pipe(map((parkings) => parkings.map((parking) => ({
      id: parking.map_id || parking.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectParking(parking)
    }))));
    this.features = combineLatest([
      this._state.resources,
      this._state.available_resources
    ]).pipe(map(([space_list, available]) => {
      console.log("Parking:", space_list);
      return this._settings.get("app.parkings.hide_user") ? [] : space_list.map((space) => {
        const status = available.find((_) => _.id === space.id) ? "free" : this._state.resourceUserName(space.id) ? "busy" : "not-bookable";
        return {
          location: space.map_id,
          content: ExploreParkingInfoComponent,
          hover: true,
          data: __spreadProps(__spreadValues({}, space), {
            status
          })
        };
      });
    }));
    this.styles = combineLatest([
      this._state.resources,
      this._state.available_resources,
      this._change
    ]).pipe(map(([parkings, free_parkings]) => parkings.reduce((styles, parking) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = this.active() === parking.id ? "pending" : free_parkings.find((_) => _.id === parking.id) ? "free" : this._state.resourceUserName(parking.id) ? "busy" : "not-bookable";
      styles[`#${parking.map_id || parking.id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription("levels_update", this._state.options.subscribe(({ zone_id }) => {
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level = level;
    }));
    this.timeout("check_level", async () => {
      if (!this.level) {
        const list = await nextValueFrom(this.levels);
        this._state.setOptions({ zone_id: list[0].id });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectParking(parking) {
    this.onSelect.emit(parking);
    this.active.set(parking.id);
    this._change.next(Date.now());
  }
  setLevel(level) {
    this.setOptions({ zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(",").map((_) => parseFloat(_));
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
_ParkingSpaceMapComponent.\u0275fac = function ParkingSpaceMapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingSpaceMapComponent)();
};
_ParkingSpaceMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceMapComponent, selectors: [["parking-space-map"]], inputs: { is_displayed: [1, "is_displayed"], active: [1, "active"] }, outputs: { active: "activeChange", onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], ["levels", "", "appearance", "outline", 1, "w-full"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function ParkingSpaceMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ParkingSpaceMapComponent_Conditional_1_Template, 6, 8, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275twoWayListener("zoomChange", function ParkingSpaceMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
      return $event;
    })("centerChange", function ParkingSpaceMapComponent_Template_interactive_map_centerChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 8, ctx.levels)) == null ? null : tmp_0_0.length) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.map_url);
    \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
    \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c030));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  InteractiveMapComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=parking-map.component.css.map */"] });
var ParkingSpaceMapComponent = _ParkingSpaceMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceMapComponent, [{
    type: Component,
    args: [{ selector: "parking-space-map", template: `
        <div class="border-base-200 bg-base-100 w-full border-b p-2">
            @if ((levels | async)?.length) {
                <mat-form-field levels appearance="outline" class="w-full">
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
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
            }
        </div>
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
    ], styles: ["/* angular:styles/component:css;3e52039fa2b2dc4b43d4f232e06fb31261aaccd73f5b7c706cba74f59e7ddeb1;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/parking-select-modal/parking-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border-radius: 0;\n}\n/*# sourceMappingURL=parking-map.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceMapComponent, { className: "ParkingSpaceMapComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-map.component.ts", lineNumber: 103 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts
var _c031 = (a0) => ({ count: a0 });
function ParkingSpaceSelectModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-list", 24);
    \u0275\u0275listener("toggleFav", function ParkingSpaceSelectModalComponent_Conditional_19_Template_parking_space_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function ParkingSpaceSelectModalComponent_Conditional_19_Template_parking_space_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id)("selected", ctx_r1.selected_ids)("favorites", ctx_r1.favorites);
  }
}
function ParkingSpaceSelectModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-map", 25);
    \u0275\u0275listener("onSelect", function ParkingSpaceSelectModalComponent_Conditional_20_Template_parking_space_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("is_displayed", !!ctx_r1.displayed);
  }
}
function ParkingSpaceSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
var FAV_PARKING_KEY = "favourite_parking_spaces";
var _ParkingSpaceSelectModalComponent = class _ParkingSpaceSelectModalComponent {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_PARKING_KEY) || [];
  }
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(BookingFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this.selected = [];
    this.view = "list";
    const _data = this._data;
    this.selected = [..._data.spaces || []];
    this._event_form.setOptions(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state)
      this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_PARKING_KEY, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY, fav_list.filter((_) => _ !== item.id));
    }
  }
};
_ParkingSpaceSelectModalComponent.\u0275fac = function ParkingSpaceSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingSpaceSelectModalComponent)();
};
_ParkingSpaceSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceSelectModalComponent, selectors: [["parking-space-select-modal"]], decls: 45, vars: 48, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "sm:relative", "sm:h-auto", "sm:w-auto"], [1, "flex", "w-full", "items-center", "space-x-4"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "flex-1", "items-center", "justify-end", "sm:flex"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-l-none", "rounded-r", 3, "click"], [1, "divide-base-200", "flex", "h-[65vh]", "min-h-[65vh]", "w-full", "flex-1", "items-center", "divide-x", "overflow-hidden", "sm:max-h-[65vh]", "sm:max-w-[95vw]"], [1, "hidden", "h-full", "max-w-[20rem]", "sm:flex", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col", "items-center", "sm:h-[65vh]"], [1, "border-base-200", "w-full", "border-b", 3, "viewChange", "view"], [1, "bg-base-200", "h-1/2", "flex-1", 3, "active", "selected", "favorites"], [1, "h-1/2", "w-full", "flex-1", 3, "is_displayed"], [1, "bg-base-100", "absolute", "z-20", "block", "h-full", "w-full", "sm:relative", "sm:flex", "sm:h-[65vh]", "sm:max-w-[20rem]", 3, "activeChange", "toggleFav", "close", "space", "active", "fav", "map_open"], [1, "border-base-200", "flex", "w-full", "flex-col-reverse", "items-center", "justify-end", "border-t", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "return", "", 1, "inverse", "w-full", "sm:hidden"], ["btn", "", "matRipple", "", "save", "", 1, "w-full", "sm:mb-0", "sm:w-32", 3, "mat-dialog-close"], [1, "border-base-200", "hidden", "w-full", "items-center", "justify-between", "border-t", "p-2", "sm:flex"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "text-sm", "opacity-60"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "mr-1"], [1, "bg-base-200", "h-1/2", "flex-1", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-1/2", "w-full", "flex-1", 3, "onSelect", "is_displayed"], ["btn", "", "matRipple", "", "return", "", 1, "inverse", "w-full", "sm:hidden", 3, "click"]], template: function ParkingSpaceSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2)(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
    \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_Template_button_click_9_listener() {
      return ctx.view = "map";
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 5);
    \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_Template_button_click_12_listener() {
      return ctx.view = "list";
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "main", 6);
    \u0275\u0275element(16, "parking-space-filters", 7);
    \u0275\u0275elementStart(17, "div", 8)(18, "parking-space-filters-display", 9);
    \u0275\u0275twoWayListener("viewChange", function ParkingSpaceSelectModalComponent_Template_parking_space_filters_display_viewChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ParkingSpaceSelectModalComponent_Conditional_19_Template, 1, 3, "parking-space-list", 10)(20, ParkingSpaceSelectModalComponent_Conditional_20_Template, 1, 1, "parking-space-map", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "parking-space-details", 12);
    \u0275\u0275listener("activeChange", function ParkingSpaceSelectModalComponent_Template_parking_space_details_activeChange_21_listener($event) {
      return ctx.setSelected(ctx.displayed, $event);
    })("toggleFav", function ParkingSpaceSelectModalComponent_Template_parking_space_details_toggleFav_21_listener() {
      return ctx.toggleFavourite(ctx.displayed);
    })("close", function ParkingSpaceSelectModalComponent_Template_parking_space_details_close_21_listener() {
      return ctx.displayed = null;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "footer", 13);
    \u0275\u0275conditionalCreate(23, ParkingSpaceSelectModalComponent_Conditional_23_Template, 3, 3, "button", 14);
    \u0275\u0275elementStart(24, "button", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "footer", 16)(28, "button", 17)(29, "div", 18)(30, "icon", 19);
    \u0275\u0275text(31, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "p", 21);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 22);
    \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_Template_button_click_38_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    });
    \u0275\u0275elementStart(39, "div", 18)(40, "icon", 19);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 23);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 31, "BOOKINGS.PARKING_FIND"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", ctx.view !== "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 33, "COMMON.MAP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.view !== "list");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 35, "COMMON.LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("hide_levels", ctx.view !== "list");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("view", ctx.view);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view === "list" ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx.displayed)("inset-0", ctx.displayed);
    \u0275\u0275property("space", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id))("map_open", ctx.view === "map");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.displayed ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("mb-2", ctx.displayed);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 37, "COMMON.VIEW_LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 39, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 41, "BOOKINGS.PARKING_ADDED_COUNT", \u0275\u0275pureFunction1(46, _c031, ctx.selected.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 44, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
  }
}, dependencies: [
  ParkingSpaceMapComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  ParkingSpaceDetailsComponent,
  ParkingSpaceListComponent,
  ParkingSpaceFiltersComponent,
  ParkingSpaceFiltersDisplayComponent
], encapsulation: 2 });
var ParkingSpaceSelectModalComponent = _ParkingSpaceSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceSelectModalComponent, [{
    type: Component,
    args: [{ selector: "parking-space-select-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon matRipple mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'BOOKINGS.PARKING_FIND' | translate }}</h3>
                <div class="hidden flex-1 items-center justify-end sm:flex">
                    <button
                        btn
                        matRipple
                        name="view-desk-map"
                        class="rounded-l rounded-r-none"
                        [class.inverse]="view !== 'map'"
                        (click)="view = 'map'"
                    >
                        {{ 'COMMON.MAP' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        name="view-desk-list"
                        class="rounded-l-none rounded-r"
                        [class.inverse]="view !== 'list'"
                        (click)="view = 'list'"
                    >
                        {{ 'COMMON.LIST' | translate }}
                    </button>
                </div>
            </header>
            <main
                class="divide-base-200 flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <parking-space-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view !== 'list'"
                ></parking-space-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <parking-space-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view"
                    ></parking-space-filters-display>
                    @if (view === 'list') {
                        <parking-space-list
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed = $event"
                            class="bg-base-200 h-1/2 flex-1"
                        ></parking-space-list>
                    } @else {
                        <parking-space-map
                            class="h-1/2 w-full flex-1"
                            [is_displayed]="!!displayed"
                            (onSelect)="displayed = $event"
                        >
                        </parking-space-map>
                    }
                </div>
                <parking-space-details
                    [space]="displayed"
                    class="bg-base-100 absolute z-20 block h-full w-full sm:relative sm:flex sm:h-[65vh] sm:max-w-[20rem]"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id)"
                    (activeChange)="setSelected(displayed, $event)"
                    [fav]="displayed && this.favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (close)="displayed = null"
                    [map_open]="view === 'map'"
                ></parking-space-details>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t p-2 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        return
                        class="inverse w-full sm:hidden"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    save
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:mb-0 sm:w-32"
                >
                    {{ 'COMMON.VIEW_LIST' | translate }}
                </button>
            </footer>
            <footer
                class="border-base-200 hidden w-full items-center justify-between border-t p-2 sm:flex"
            >
                <button
                    btn
                    matRipple
                    [mat-dialog-close]="selected"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
                <p class="text-sm opacity-60">
                    {{
                        'BOOKINGS.PARKING_ADDED_COUNT'
                            | translate: { count: selected.length }
                    }}
                </p>
                <button
                    btn
                    matRipple
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.id)
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
      ParkingSpaceMapComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      ParkingSpaceDetailsComponent,
      ParkingSpaceListComponent,
      ParkingSpaceFiltersComponent,
      ParkingSpaceFiltersDisplayComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceSelectModalComponent, { className: "ParkingSpaceSelectModalComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts", lineNumber: 187 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-details.component.ts
var _c032 = () => ({ disable_pan: true, disable_zoom: true });
function NewParkingDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.space().images);
  }
}
function NewParkingDetailsComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "interactive-map", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.space().map_id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c032));
  }
}
function NewParkingDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275conditionalCreate(1, NewParkingDetailsComponent_Conditional_0_Conditional_1_Template, 1, 1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function NewParkingDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function NewParkingDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "section", 6)(10, "h2", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "hr");
    \u0275\u0275elementStart(13, "section", 8)(14, "h2", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "icon");
    \u0275\u0275text(19, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "icon");
    \u0275\u0275text(24, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "hr");
    \u0275\u0275conditionalCreate(28, NewParkingDetailsComponent_Conditional_0_Conditional_28_Template, 2, 5, "section", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sm:h-40", (tmp_1_0 = ctx_r1.space().images) == null ? null : tmp_1_0.length)("h-64", (tmp_2_0 = ctx_r1.space().images) == null ? null : tmp_2_0.length)("sm:h-0", !((tmp_3_0 = ctx_r1.space().images) == null ? null : tmp_3_0.length))("h-12", !((tmp_4_0 = ctx_r1.space().images) == null ? null : tmp_4_0.length))("bg-transparent!", !((tmp_5_0 = ctx_r1.space().images) == null ? null : tmp_5_0.length));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.space().images) == null ? null : tmp_6_0.length) ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav())("bg-info!", ctx_r1.fav());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fav() ? "favorite" : "favorite_border");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.building == null ? null : ctx_r1.building.address) || (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_map() ? 28 : -1);
  }
}
function NewParkingDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_SELECT_MSG"), " ");
  }
}
var _NewParkingDetailsComponent = class _NewParkingDetailsComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this.hide_map = input(false);
    this.space = input(void 0);
    this.fav = input(false);
    this.active = input(false);
    this.activeChange = output();
    this.close = output();
    this.toggleFav = output();
    this.map_url = "";
    this.features = [];
  }
  get level() {
    const space = this.space();
    return this._org.levelWithID([space?.zone.id]) || space?.zone;
  }
  get building() {
    const space = this.space();
    return this._org.buildings.find((_) => space?.zone.id === _.id || space?.zone.parent_id === _.id);
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
_NewParkingDetailsComponent.\u0275fac = function NewParkingDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewParkingDetailsComponent)();
};
_NewParkingDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingDetailsComponent, selectors: [["new-parking-space-details"]], inputs: { hide_map: [1, "hide_map"], space: [1, "space"], fav: [1, "fav"], active: [1, "active"] }, outputs: { activeChange: "activeChange", close: "close", toggleFav: "toggleFav" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["image", "", 1, "bg-base-200", "relative", "w-full"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "close", "", 1, "bg-base-200", "absolute", "top-2", "left-2", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "bg-base-200", "absolute", "top-2", "right-2", 3, "click"], [1, "h-1/2", "flex-1", "space-y-2", "p-2"], ["actions", "", 1, "z-0"], [1, "mt-4", "mb-2", "text-xl", "font-medium"], ["details", "", 1, "space-y-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["map", "", 1, "border-base-200", "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded-sm", "border", "sm:h-48"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function NewParkingDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewParkingDetailsComponent_Conditional_0_Template, 29, 23)(1, NewParkingDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.space() ? 0 : 1);
  }
}, dependencies: [
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  InteractiveMapComponent,
  IconComponent,
  ImageCarouselComponent
], encapsulation: 2 });
var NewParkingDetailsComponent = _NewParkingDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewParkingDetailsComponent, [{
    type: Component,
    args: [{ selector: `new-parking-space-details`, template: `
        @if (space()) {
            <section
                image
                class="bg-base-200 relative w-full"
                [class.sm:h-40]="space().images?.length"
                [class.h-64]="space().images?.length"
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
                    close
                    (click)="close.emit()"
                    class="bg-base-200 absolute top-2 left-2 sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-info-content]="fav()"
                    [class.bg-info!]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-base-200 absolute top-2 right-2"
                >
                    <icon>{{ fav() ? 'favorite' : 'favorite_border' }}</icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 p-2">
                <section actions class="z-0">
                    <h2 class="mt-4 mb-2 text-xl font-medium">
                        {{ space().display_name || space().name }}
                    </h2>
                </section>
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">
                        {{ 'BOOKINGS.DETAILS' | translate }}
                    </h2>
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
                <hr />
                @if (!hide_map()) {
                    <section
                        map
                        class="border-base-200 relative mx-auto h-64 w-full overflow-hidden rounded-sm border sm:h-48"
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
                    {{ 'BOOKINGS.PARKING_SELECT_MSG' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      InteractiveMapComponent,
      IconComponent,
      ImageCarouselComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingDetailsComponent, { className: "NewParkingDetailsComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-details.component.ts", lineNumber: 119 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-filters-display.component.ts
function NewParkingFiltersDisplayComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.location, " ");
  }
}
function NewParkingFiltersDisplayComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function NewParkingFiltersDisplayComponent_For_10_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeFeature(feat_r3));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
var _NewParkingFiltersDisplayComponent = class _NewParkingFiltersDisplayComponent extends AsyncHandler {
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
    this._event_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.view = input("list");
    this.viewChange = output();
    this.options = this._event_form.options;
    this.location = "";
  }
  ngOnInit() {
    this.subscription("opts", this.options.subscribe(({ zone_id }) => this._updateLocation([zone_id])));
  }
  async removeFeature(feat) {
    const value = await nextValueFrom(this._event_form.options);
    this._event_form.setOptions(__spreadProps(__spreadValues({}, value), {
      features: (value.features || []).filter((_) => _ !== feat)
    }));
  }
  _updateLocation(zone_ids = []) {
    const level = this._org.levelWithID(zone_ids);
    const item = level || this._org.building;
    this.location = item?.display_name || item?.name || "";
  }
};
_NewParkingFiltersDisplayComponent.\u0275fac = function NewParkingFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewParkingFiltersDisplayComponent)();
};
_NewParkingFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingFiltersDisplayComponent, selectors: [["new-parking-space-filters-display"]], inputs: { view: [1, "view"] }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 15, consts: [["filters", "", 1, "border-base-300", "bg-base-100", "sticky", "-top-1", "z-20", "-mx-1", "mb-4!", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded-sm", "border", "p-1", "pr-10!", "sm:pr-1!"], ["filter-item", "", "zone", ""], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", ""], ["icon", "", "matRipple", "", 1, "-mr-4", 3, "click"]], template: function NewParkingFiltersDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275conditionalCreate(1, NewParkingFiltersDisplayComponent_Conditional_1_Template, 2, 1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, NewParkingFiltersDisplayComponent_For_10_Template, 6, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.location ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 4, ctx.start, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 7, ctx.start, ctx.time_format), " \u2014 ", \u0275\u0275pipeBind2(8, 10, ctx.end, ctx.time_format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_3_0 = \u0275\u0275pipeBind1(11, 13, ctx.options)) == null ? null : tmp_3_0.features);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, IconComponent, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-parking-filters-display.component.css.map */"] });
var NewParkingFiltersDisplayComponent = _NewParkingFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewParkingFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: `new-parking-space-filters-display`, template: `
        <section
            filters
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            @if (location) {
                <div filter-item zone>
                    {{ location }}
                </div>
            }
            <div filter-item date>
                {{ start | date: 'mediumDate' }}
            </div>
            <div filter-item time>
                {{ start | date: time_format }} &mdash;
                {{ end | date: time_format }}
            </div>
            @for (feat of (options | async)?.features; track feat) {
                <div filter-item>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        class="-mr-4"
                        (click)="removeFeature(feat)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, IconComponent, MatRippleModule], styles: ["/* angular:styles/component:css;40c2cfb0940879f4b472b0df17d108f20a06d9aef1b032e0c2528e24b3273369;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-parking-select-modal/new-parking-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-parking-filters-display.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingFiltersDisplayComponent, { className: "NewParkingFiltersDisplayComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-filters-display.component.ts", lineNumber: 71 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-filters.component.ts
var _c033 = () => ({ standalone: true });
var _c120 = () => [];
function NewParkingFiltersComponent_Conditional_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    \u0275\u0275property("value", reg_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r3.display_name || reg_r3.name, " ");
  }
}
function NewParkingFiltersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Conditional_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, NewParkingFiltersComponent_Conditional_13_For_4_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(7, _c033))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r1.regions));
  }
}
function NewParkingFiltersComponent_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function NewParkingFiltersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 17);
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(2, NewParkingFiltersComponent_Conditional_15_For_3_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c033))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 3, ctx_r1.buildings));
  }
}
function NewParkingFiltersComponent_Conditional_17_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const lvl_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, lvl_r7.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function NewParkingFiltersComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 19);
    \u0275\u0275conditionalCreate(2, NewParkingFiltersComponent_Conditional_17_For_5_Conditional_2_Template, 5, 3, "div", 20);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r7.display_name || lvl_r7.name, " ");
  }
}
function NewParkingFiltersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Conditional_17_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(4, NewParkingFiltersComponent_Conditional_17_For_5_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(9, _c033))("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 7, ctx_r1.levels));
  }
}
function NewParkingFiltersComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-checkbox", 22);
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Conditional_25_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ all_day: $event }));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.form.value.all_day)("ngModelOptions", \u0275\u0275pureFunction0(5, _c033));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.ALL_DAY"), " ");
  }
}
function NewParkingFiltersComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 23)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 24);
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Conditional_26_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a-duration-field", 25);
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Conditional_26_Template_a_duration_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ duration: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(18, _c033))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.duration)("ngModelOptions", \u0275\u0275pureFunction0(19, _c033))("time", (tmp_9_0 = ctx_r1.form.get("date")) == null ? null : tmp_9_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewParkingFiltersComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "settings-toggle", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Conditional_27_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.options)) == null ? null : tmp_3_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c033));
  }
}
function NewParkingFiltersComponent_Conditional_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 22);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Conditional_28_For_5_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r12, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const feat_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feat_r12, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (((tmp_12_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_12_0.features) || \u0275\u0275pureFunction0(5, _c120)).includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(6, _c033));
  }
}
function NewParkingFiltersComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, NewParkingFiltersComponent_Conditional_28_For_5_Template, 5, 7, "div", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 3, ctx_r1.features));
  }
}
function NewParkingFiltersComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 31);
    \u0275\u0275listener("click", function NewParkingFiltersComponent_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var _NewParkingFiltersComponent = class _NewParkingFiltersComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.hide_levels = input(void 0);
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.setRegion = (r) => this._org.region = r;
  }
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get allow_all_day() {
    return !!this._settings.get("app.parking.allow_all_day") || !!this._settings.get("app.bookings.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 90)).valueOf();
  }
  close() {
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
};
_NewParkingFiltersComponent.\u0275fac = function NewParkingFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewParkingFiltersComponent)();
};
_NewParkingFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingFiltersComponent, selectors: [["new-parking-space-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, decls: 31, vars: 36, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "divide-base-200", "relative", "z-0", "w-full", "divide-y", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "min-w-[256px]", "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "to", "timezone"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "py-2"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr", "timezone"], [1, "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], ["for", "feat", 1, "w-1/2", "flex-1"], ["btn", "", "matRipple", "", "name", "apply-parking-filters", 1, "w-full", 3, "click"]], template: function NewParkingFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, NewParkingFiltersComponent_Conditional_13_Template, 6, 8, "mat-form-field", 7);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalCreate(15, NewParkingFiltersComponent_Conditional_15_Template, 5, 6, "mat-form-field", 7);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275conditionalCreate(17, NewParkingFiltersComponent_Conditional_17_Template, 7, 10, "mat-form-field", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 8)(19, "label");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a-date-field", 9);
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Template_a_date_field_ngModelChange_22_listener($event) {
      return ctx.form.patchValue({ date: $event });
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, NewParkingFiltersComponent_Conditional_25_Template, 4, 6, "div", 10);
    \u0275\u0275conditionalCreate(26, NewParkingFiltersComponent_Conditional_26_Template, 11, 20, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, NewParkingFiltersComponent_Conditional_27_Template, 8, 11, "section", 12);
    \u0275\u0275conditionalCreate(28, NewParkingFiltersComponent_Conditional_28_Template, 7, 5, "section", 13);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, NewParkingFiltersComponent_Conditional_30_Template, 4, 3, "div", 14);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_17_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 19, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 21, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 23, "BOOKINGS.LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(14, 25, ctx.regions)) == null ? null : tmp_4_0.length) ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(16, 27, ctx.buildings)) == null ? null : tmp_5_0.length) > 1 ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_levels() ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 29, "FORM.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(35, _c033))("disabled", ctx.form.controls.date.disabled)("to", ctx.end_date)("timezone", ctx.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 31, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.allow_all_day && !ctx.form.controls.date.disabled ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_levels() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_17_0 = \u0275\u0275pipeBind1(29, 33, ctx.features)) == null ? null : tmp_17_0.length) && !ctx.hide_levels() ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 30 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  MatCheckboxModule,
  MatCheckbox,
  SettingsToggleComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormsModule,
  NgModel,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=new-parking-filters.component.css.map */"] });
var NewParkingFiltersComponent = _NewParkingFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewParkingFiltersComponent, [{
    type: Component,
    args: [{ selector: "new-parking-space-filters", template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <form
            class="divide-base-200 relative z-0 w-full divide-y p-2"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'BOOKINGS.DETAILS' | translate }}
                </h2>
                <div class="flex min-w-32 flex-1 flex-col">
                    <label for="location">
                        {{ 'BOOKINGS.LOCATION' | translate }}
                    </label>
                    @if (use_region && (regions | async)?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.REGION_ANY' | translate"
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
                            <mat-select
                                name="building"
                                [ngModel]="building"
                                (ngModelChange)="building = $event"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building?.display_name || building?.name
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
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zone_id"
                                (ngModelChange)="
                                    setOptions({ zone_id: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                            >
                                @for (lvl of levels | async; track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl.parent_id
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

                <!-- Date -->
                <div class="min-w-[256px] flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        [ngModel]="form.getRawValue().date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [disabled]="form.controls.date.disabled"
                        [to]="end_date"
                        [timezone]="timezone"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day && !form.controls.date.disabled) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox
                            [ngModel]="form.value.all_day"
                            (ngModelChange)="
                                form.patchValue({ all_day: $event })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_END' | translate }}</label>
                            <a-duration-field
                                [ngModel]="form.value.duration"
                                (ngModelChange)="
                                    form.patchValue({ duration: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [name]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="(options | async)?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
                </section>
            }
            @if ((features | async)?.length && !hide_levels()) {
                <section class="space-y-2" features>
                    <h2 class="text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features | async; track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <div for="feat" class="w-1/2 flex-1">
                                {{ feat }}
                            </div>
                            <mat-checkbox
                                [ngModel]="
                                    (
                                        (options | async)?.features || []
                                    ).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></mat-checkbox>
                        </div>
                    }
                </section>
            }
        </form>
        @if (can_close) {
            <div class="border-base-200 w-full border-t px-2 py-2">
                <button
                    btn
                    matRipple
                    name="apply-parking-filters"
                    class="w-full"
                    (click)="close()"
                >
                    {{ 'COMMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      MatCheckboxModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      FormsModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-parking-select-modal/new-parking-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=new-parking-filters.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingFiltersComponent, { className: "NewParkingFiltersComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-filters.component.ts", lineNumber: 265 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-list.component.ts
var _c034 = (a0) => ({ count: a0 });
function NewParkingListComponent_Conditional_8_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function NewParkingListComponent_Conditional_8_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function NewParkingListComponent_Conditional_8_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function NewParkingListComponent_Conditional_8_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function NewParkingListComponent_Conditional_8_Conditional_0_For_2_Template_button_click_1_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectSpace(space_r2));
    });
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, NewParkingListComponent_Conditional_8_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(4, NewParkingListComponent_Conditional_8_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 10)(5, NewParkingListComponent_Conditional_8_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "icon", 15);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 16);
    \u0275\u0275listener("click", function NewParkingListComponent_Conditional_8_Conditional_0_For_2_Template_button_click_14_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(space_r2));
    });
    \u0275\u0275elementStart(15, "icon", 17);
    \u0275\u0275text(16, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info!", ctx_r2.active() === space_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(space_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((space_r2.images == null ? null : space_r2.images.length) ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.name || "Meeting Space", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || (space_r2.level == null ? null : space_r2.level.display_name) || (space_r2.level == null ? null : space_r2.level.name) || (space_r2.zone == null ? null : space_r2.zone.display_name) || (space_r2.zone == null ? null : space_r2.zone.name), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(space_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(space_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function NewParkingListComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, NewParkingListComponent_Conditional_8_Conditional_0_For_2_Template, 17, 9, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.assets));
  }
}
function NewParkingListComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_LIST_EMPTY"), " ");
  }
}
function NewParkingListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewParkingListComponent_Conditional_8_Conditional_0_Template, 4, 2, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, NewParkingListComponent_Conditional_8_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.assets)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function NewParkingListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.PARKING_LIST_LOADING"), " ");
  }
}
var _NewParkingListComponent = class _NewParkingListComponent {
  constructor() {
    this._form = inject(BookingFormService);
    this.active = input("");
    this.selected = input("");
    this.favorites = input([]);
    this.onSelect = output();
    this.toggleFav = output();
    this.assets = combineLatest([
      this._form.options,
      this._form.available_resources
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
      const a_fav = this.isFavourite(a.id) ? 1 : 0;
      const b_fav = this.isFavourite(b.id) ? 1 : 0;
      return b_fav - a_fav;
    })));
    this.loading = this._form.loading;
  }
  isFavourite(space_id) {
    return this.favorites().includes(space_id);
  }
  selectSpace(space) {
    this.onSelect.emit(space);
  }
};
_NewParkingListComponent.\u0275fac = function NewParkingListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewParkingListComponent)();
};
_NewParkingListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingListComponent, selectors: [["new-parking-space-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 11, vars: 17, consts: [[1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm", 3, "border-info!"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["matRipple", "", "select", "", 1, "flex", "h-full", "w-full", "items-center", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], [1, "space-y-2"], [1, "mr-10", "truncate", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function NewParkingListComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(8, NewParkingListComponent_Conditional_8_Template, 3, 3);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275conditionalBranchCreate(10, NewParkingListComponent_Conditional_10_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(7, 9, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(15, _c034, ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.assets)) == null ? null : tmp_1_0.length) || 0), ((tmp_1_0 = \u0275\u0275pipeBind1(6, 7, ctx.assets)) == null ? null : tmp_1_0.length) || 0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(9, 13, ctx.loading) ? 8 : 10);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  AuthenticatedImageDirective
], encapsulation: 2 });
var NewParkingListComponent = _NewParkingListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewParkingListComponent, [{
    type: Component,
    args: [{ selector: `new-parking-space-list`, template: `
        <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 px-2 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate
                        : { count: (assets | async)?.length || 0 }
                        : (assets | async)?.length || 0
            }}
        </p>
        @if (!(loading | async)) {
            @if ((assets | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (space of assets | async; track space) {
                        <li
                            space
                            [class.border-info!]="active() === space.id"
                            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
                        >
                            <button
                                matRipple
                                select
                                class="flex h-full w-full items-center"
                                (click)="selectSpace(space)"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl"
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
                                            src="assets/icons/car-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="space-y-2">
                                    <div class="mr-10 truncate font-medium">
                                        {{ space.name || 'Meeting Space' }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p>
                                            {{
                                                space.location ||
                                                    space.level?.display_name ||
                                                    space.level?.name ||
                                                    space.zone?.display_name ||
                                                    space.zone?.name
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                fav
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
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.PARKING_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.PARKING_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingListComponent, { className: "NewParkingListComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-list.component.ts", lineNumber: 135 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-map.component.ts
var _c035 = () => ({ controls: true });
var _c121 = () => ({ standalone: true });
function NewParkingMapComponent_Conditional_0_For_5_Conditional_2_Template(rf, ctx) {
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
function NewParkingMapComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, NewParkingMapComponent_Conditional_0_For_5_Conditional_2_Template, 5, 3, "div", 7);
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
function NewParkingMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 3)(2, "mat-select", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NewParkingMapComponent_Conditional_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewParkingMapComponent_Conditional_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275repeaterCreate(4, NewParkingMapComponent_Conditional_0_For_5_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c121))("placeholder", \u0275\u0275pipeBind1(3, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 5, ctx_r1.levels));
  }
}
var _NewParkingMapComponent = class _NewParkingMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.is_displayed = input(false);
    this.active = model("");
    this.onSelect = output();
    this.parkings = this._state.available_resources;
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
    this._change = new BehaviorSubject(0);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
      if (!this.level && viewable_levels.length) {
        this.level = viewable_levels[0];
      }
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this._state.available_resources.pipe(map((parkings) => parkings.map((parking) => ({
      id: parking.map_id || parking.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectParking(parking)
    }))));
    this.features = combineLatest([
      this._state.resources,
      this._state.available_resources
    ]).pipe(map(([space_list, available]) => {
      console.log("Parking:", space_list);
      return this._settings.get("app.parkings.hide_user") ? [] : space_list.map((space) => {
        const status = available.find((_) => _.id === space.id) ? "free" : this._state.resourceUserName(space.id) ? "busy" : "not-bookable";
        return {
          location: space.map_id,
          content: ExploreParkingInfoComponent,
          hover: true,
          data: __spreadProps(__spreadValues({}, space), {
            status
          })
        };
      });
    }));
    this.styles = combineLatest([
      this._state.resources,
      this._state.available_resources,
      this._change
    ]).pipe(map(([parkings, free_parkings]) => parkings.reduce((styles, parking) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = this.active() === parking.id ? "pending" : free_parkings.find((_) => _.id === parking.id) ? "free" : this._state.resourceUserName(parking.id) ? "busy" : "not-bookable";
      styles[`#${parking.map_id || parking.id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription("levels_update", this._state.options.subscribe(({ zone_id }) => {
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level = level;
    }));
    this.timeout("check_level", async () => {
      if (!this.level) {
        const list = await nextValueFrom(this.levels);
        if (list.length <= 0)
          return;
        this._state.setOptions({ zone_id: list[0].id });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectParking(parking) {
    this.onSelect.emit(parking);
    this.active.set(parking.id);
    this._change.next(Date.now());
  }
  setLevel(level) {
    this.setOptions({ zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(",").map((_) => parseFloat(_));
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
_NewParkingMapComponent.\u0275fac = function NewParkingMapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewParkingMapComponent)();
};
_NewParkingMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingMapComponent, selectors: [["new-parking-space-map"]], inputs: { is_displayed: [1, "is_displayed"], active: [1, "active"] }, outputs: { active: "activeChange", onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 7, vars: 17, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function NewParkingMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewParkingMapComponent_Conditional_0_Template, 7, 8, "div", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "div", 1)(3, "interactive-map", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275twoWayListener("zoomChange", function NewParkingMapComponent_Template_interactive_map_zoomChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
      return $event;
    })("centerChange", function NewParkingMapComponent_Template_interactive_map_centerChange_3_listener($event) {
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
    \u0275\u0275property("styles", \u0275\u0275pipeBind1(4, 10, ctx.styles))("features", \u0275\u0275pipeBind1(5, 12, ctx.features))("actions", \u0275\u0275pipeBind1(6, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c035));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  InteractiveMapComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=new-parking-map.component.css.map */"] });
var NewParkingMapComponent = _NewParkingMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewParkingMapComponent, [{
    type: Component,
    args: [{ selector: "new-parking-space-map", template: `
        @if ((levels | async)?.length) {
            <div class="border-base-200 bg-base-100 w-full border-b p-2">
                <mat-form-field
                    levels
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
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
    ], styles: ["/* angular:styles/component:css;5b4ed0a87238b487692a2c306efe479639b0f8e929cffac085c91f6d64279717;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/new-parking-select-modal/new-parking-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=new-parking-map.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingMapComponent, { className: "NewParkingMapComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-map.component.ts", lineNumber: 103 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-select-modal.component.ts
function NewParkingSelectModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-parking-space-filters-display", 25);
    \u0275\u0275twoWayListener("viewChange", function NewParkingSelectModalComponent_Conditional_21_Template_new_parking_space_filters_display_viewChange_0_listener($event) {
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
function NewParkingSelectModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-parking-space-list", 26);
    \u0275\u0275listener("toggleFav", function NewParkingSelectModalComponent_Conditional_22_Template_new_parking_space_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function NewParkingSelectModalComponent_Conditional_22_Template_new_parking_space_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id)("selected", ctx_r1.selected_ids)("favorites", ctx_r1.favorites);
  }
}
function NewParkingSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-parking-space-map", 27);
    \u0275\u0275listener("onSelect", function NewParkingSelectModalComponent_Conditional_23_Template_new_parking_space_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("is_displayed", !!ctx_r1.displayed)("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id);
  }
}
function NewParkingSelectModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function NewParkingSelectModalComponent_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
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
var FAV_PARKING_KEY2 = "favourite_parking_spaces";
var _NewParkingSelectModalComponent = class _NewParkingSelectModalComponent {
  get is_safari() {
    return isMobileSafari();
  }
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_PARKING_KEY2) || [];
  }
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(BookingFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this.show_filters = false;
    this.selected = [];
    this.view = "list";
    const _data = this._data;
    this.selected = [..._data.spaces || []];
    this._event_form.setOptions(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state)
      this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_PARKING_KEY2, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY2, fav_list.filter((_) => _ !== item.id));
    }
  }
};
_NewParkingSelectModalComponent.\u0275fac = function NewParkingSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewParkingSelectModalComponent)();
};
_NewParkingSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingSelectModalComponent, selectors: [["new-parking-select-modal"]], decls: 42, vars: 58, consts: [[1, "bg-base-100", "mb-10", "flex", "h-[calc(100vh-2.5rem)]", "max-h-[calc(100vh-2.5rem)]", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:m-0", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "max-h-[calc(100vh-7rem)]", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], [1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "lg:block"], [3, "view"], [3, "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "is_displayed", "active"], [1, "border-base-300", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]", "lg:block"], [3, "activeChange", "toggleFav", "close", "space", "active", "hide_map", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "parking-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-parking", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "onSelect", "is_displayed", "active"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function NewParkingSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function NewParkingSelectModalComponent_Template_button_click_6_listener() {
      return ctx.view = "list";
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function NewParkingSelectModalComponent_Template_button_click_10_listener() {
      return ctx.view = "map";
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "map");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 6)(15, "icon");
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "main", 7)(18, "div", 8);
    \u0275\u0275element(19, "new-parking-space-filters", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10);
    \u0275\u0275conditionalCreate(21, NewParkingSelectModalComponent_Conditional_21_Template, 1, 1, "new-parking-space-filters-display", 11);
    \u0275\u0275conditionalCreate(22, NewParkingSelectModalComponent_Conditional_22_Template, 1, 3, "new-parking-space-list", 12)(23, NewParkingSelectModalComponent_Conditional_23_Template, 1, 2, "new-parking-space-map", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14)(25, "new-parking-space-details", 15);
    \u0275\u0275listener("activeChange", function NewParkingSelectModalComponent_Template_new_parking_space_details_activeChange_25_listener($event) {
      return ctx.setSelected(ctx.displayed, $event);
    })("toggleFav", function NewParkingSelectModalComponent_Template_new_parking_space_details_toggleFav_25_listener() {
      return ctx.toggleFavourite(ctx.displayed);
    })("close", function NewParkingSelectModalComponent_Template_new_parking_space_details_close_25_listener() {
      return ctx.displayed = null;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, NewParkingSelectModalComponent_Conditional_26_Template, 3, 1, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "footer", 17)(28, "button", 18)(29, "div", 19)(30, "icon", 20);
    \u0275\u0275text(31, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 21);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "button", 22);
    \u0275\u0275listener("click", function NewParkingSelectModalComponent_Template_button_click_35_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    });
    \u0275\u0275elementStart(36, "div", 23)(37, "icon", 20);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 24);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.is_safari ? "calc(100vh - 80px)" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 48, "BOOKINGS.PARKING_FIND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-base-100", ctx.view !== "list")("bg-secondary", ctx.view === "list")("text-secondary-content", ctx.view === "list");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 50, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-base-100", ctx.view !== "map")("bg-secondary", ctx.view === "map")("text-secondary-content", ctx.view === "map");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 52, "COMMON.MAP"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("hidden", !ctx.show_filters);
    \u0275\u0275advance();
    \u0275\u0275property("hide_levels", ctx.view !== "list");
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx.show_filters || ctx.displayed)("sm:hidden", ctx.displayed)("md:block", !ctx.displayed)("p-2", ctx.view === "list");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view === "list" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view === "list" ? 22 : 23);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx.show_filters || !ctx.displayed)("sm:hidden", !ctx.displayed)("md:block", ctx.displayed);
    \u0275\u0275advance();
    \u0275\u0275property("space", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("hide_map", ctx.view === "map")("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.displayed ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 54, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 56, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
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
  NewParkingListComponent,
  NewParkingDetailsComponent,
  NewParkingFiltersComponent,
  NewParkingMapComponent,
  NewParkingFiltersDisplayComponent
], encapsulation: 2 });
var NewParkingSelectModalComponent = _NewParkingSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewParkingSelectModalComponent, [{
    type: Component,
    args: [{ selector: "new-parking-select-modal", template: `
        <div
            class="bg-base-100 mb-10 flex h-[calc(100vh-2.5rem)] max-h-[calc(100vh-2.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
            [style.height]="is_safari ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.PARKING_FIND' | translate }}
                </h2>
                <div
                    class="divide-secondary border-secondary flex divide-x rounded-sm border"
                >
                    <button
                        icon
                        matRipple
                        class="rounded-l rounded-r-none"
                        [class.bg-base-100]="view !== 'list'"
                        [class.bg-secondary]="view === 'list'"
                        [class.text-secondary-content]="view === 'list'"
                        [matTooltip]="'COMMON.LIST' | translate"
                        (click)="view = 'list'"
                    >
                        <icon>list</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="rounded-l-none rounded-r"
                        [class.bg-base-100]="view !== 'map'"
                        [class.bg-secondary]="view === 'map'"
                        [class.text-secondary-content]="view === 'map'"
                        [matTooltip]="'COMMON.MAP' | translate"
                        (click)="view = 'map'"
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
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters"
                >
                    <new-parking-space-filters
                        [hide_levels]="view !== 'list'"
                    ></new-parking-space-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || displayed"
                    [class.sm:hidden]="displayed"
                    [class.md:block]="!displayed"
                    [class.p-2]="view === 'list'"
                >
                    @if (view === 'list') {
                        <new-parking-space-filters-display
                            [(view)]="view"
                        ></new-parking-space-filters-display>
                    }
                    @if (view === 'list') {
                        <new-parking-space-list
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed = $event"
                        ></new-parking-space-list>
                    } @else {
                        <new-parking-space-map
                            class="h-full min-h-[60vh] w-full"
                            [is_displayed]="!!displayed"
                            [active]="displayed?.id"
                            (onSelect)="displayed = $event"
                        >
                        </new-parking-space-map>
                    }
                </div>
                <div
                    class="border-base-300 h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || !displayed"
                    [class.sm:hidden]="!displayed"
                    [class.md:block]="displayed"
                >
                    <new-parking-space-details
                        [space]="displayed"
                        [active]="selected_ids.includes(displayed?.id)"
                        [hide_map]="view === 'map'"
                        (activeChange)="setSelected(displayed, $event)"
                        [fav]="
                            displayed && this.favorites.includes(displayed?.id)
                        "
                        (toggleFav)="toggleFavourite(displayed)"
                        (close)="displayed = null"
                    ></new-parking-space-details>
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
                    name="parking-return"
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
                    name="toggle-parking"
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.id)
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
      NewParkingListComponent,
      NewParkingDetailsComponent,
      NewParkingFiltersComponent,
      NewParkingMapComponent,
      NewParkingFiltersDisplayComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingSelectModalComponent, { className: "NewParkingSelectModalComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-select-modal.component.ts", lineNumber: 201 });
})();

// libs/bookings/src/lib/parking-space-list-field.component.ts
function ParkingSpaceListFieldComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function ParkingSpaceListFieldComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
}
function ParkingSpaceListFieldComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 7);
    \u0275\u0275conditionalCreate(2, ParkingSpaceListFieldComponent_For_2_Conditional_2_Template, 1, 1, "img", 8)(3, ParkingSpaceListFieldComponent_For_2_Conditional_3_Template, 1, 0, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "icon", 13);
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "button", 15);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_For_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeResources());
    });
    \u0275\u0275elementStart(14, "div", 16)(15, "icon", 4);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 17);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_For_2_Template_button_click_20_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeResource(space_r2));
    });
    \u0275\u0275elementStart(21, "div", 16)(22, "icon", 4);
    \u0275\u0275text(23, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "button", 18);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_For_2_Template_button_click_27_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite(space_r2));
    });
    \u0275\u0275elementStart(28, "icon", 19);
    \u0275\u0275text(29, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((space_r2.images == null ? null : space_r2.images.length) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.name || "Meeting Resource", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || (space_r2.level == null ? null : space_r2.level.display_name) || (space_r2.level == null ? null : space_r2.level.name) || (space_r2.zone == null ? null : space_r2.zone.display_name) || (space_r2.zone == null ? null : space_r2.zone.name), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 8, "COMMON.CHANGE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 10, "COMMON.REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.favorites.includes(space_r2 == null ? null : space_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.favorites.includes(space_r2 == null ? null : space_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
var EMPTY_FAVS3 = [];
var _ParkingSpaceListFieldComponent = class _ParkingSpaceListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.disable_date = input(false);
    this.room_size = 3;
    this.spaces = [];
    this.disabled = false;
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  get favorites() {
    return this._settings.get("favourite_spaces") || EMPTY_FAVS3;
  }
  /** Add or edit selected spaces */
  changeResources() {
    const ref = this._dialog.open(NewParkingSelectModalComponent, {
      data: {
        spaces: this.spaces,
        options: {
          capacity: this.room_size,
          disable_date: this.disable_date()
        }
      }
    });
    ref.afterClosed().subscribe((spaces) => {
      if (!spaces)
        return;
      this.setValue(spaces);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.spaces.filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.spaces = new_value;
    if (this._onChange)
      this._onChange(this.spaces);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.spaces = value || [];
  }
  toggleFavourite(space) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_PARKING_KEY2, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY2, fav_list.filter((_) => _ !== space.id));
    }
  }
};
_ParkingSpaceListFieldComponent.\u0275fac = function ParkingSpaceListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingSpaceListFieldComponent)();
};
_ParkingSpaceListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListFieldComponent, selectors: [["parking-space-list-field"]], inputs: { disable_date: [1, "disable_date"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _ParkingSpaceListFieldComponent),
    multi: true
  }
])], decls: 12, vars: 3, consts: [["list", "", 1, "space-y-2"], ["space", "", 1, "border-base-200", "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "p-2", "shadow-sm"], ["btn", "", "matRipple", "", "add-space", "", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-2xl"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], [1, "bg-base-200", "mr-4", "flex", "h-24", "w-24", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "absolute", "right-0", "bottom-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "edit-space", "", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "remove-space", "", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"]], template: function ParkingSpaceListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ParkingSpaceListFieldComponent_For_2_Template, 30, 12, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_Template_button_click_3_listener() {
      return ctx.changeResources();
    });
    \u0275\u0275elementStart(4, "div", 3)(5, "icon", 4);
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275element(11, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.spaces);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "BOOKINGS.PARKING_ADD"));
  }
}, dependencies: [
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  AuthenticatedImageDirective
], encapsulation: 2 });
var ParkingSpaceListFieldComponent = _ParkingSpaceListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceListFieldComponent, [{
    type: Component,
    args: [{ selector: `parking-space-list-field`, template: `
        <div list class="space-y-2">
            @for (space of spaces; track space) {
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
                                class="h-full object-cover"
                                [source]="space.images[0]"
                            />
                        } @else {
                            <img
                                class="m-auto"
                                src="assets/icons/car-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="space-y-2 pb-4">
                        <div class="font-medium">
                            {{ space.name || 'Meeting Resource' }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">place</icon>
                            <p>
                                {{
                                    space.location ||
                                        space.level?.display_name ||
                                        space.level?.name ||
                                        space.zone?.display_name ||
                                        space.zone?.name
                                }}
                            </p>
                        </div>
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                edit-space
                                class="clear"
                                (click)="changeResources()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">edit</icon>
                                    <div>{{ 'COMMON.CHANGE' | translate }}</div>
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                remove-space
                                class="clear"
                                (click)="removeResource(space)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">close</icon>
                                    <div>{{ 'COMMON.REMOVE' | translate }}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <button
                        icon
                        matRipple
                        fav
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
            add-space
            class="inverse mt-2 w-full"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon class="text-2xl">search</icon>
                <span>{{ 'BOOKINGS.PARKING_ADD' | translate }}</span>
            </div>
        </button>
        <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
            <div class="min-w-[256px] flex-1 space-y-2"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ParkingSpaceListFieldComponent),
        multi: true
      }
    ], imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListFieldComponent, { className: "ParkingSpaceListFieldComponent", filePath: "libs/bookings/src/lib/parking-space-list-field.component.ts", lineNumber: 139 });
})();

export {
  DeskListFieldComponent,
  LockerListFieldComponent,
  ParkingSpaceListFieldComponent,
  VisitorInviteFormComponent,
  VisitorInviteSuccessComponent
};
//# sourceMappingURL=chunk-WSWEHDQJ.js.map
