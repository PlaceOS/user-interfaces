import {
  DesksStateService
} from "./chunk-6E62G3VT.js";
import {
  ExploreDesksService,
  ExploreZoomControlComponent,
  SharedExploreModule
} from "./chunk-J3ILEQOG.js";
import "./chunk-EHPZVR7C.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabsModule
} from "./chunk-NHEPNTM5.js";
import "./chunk-3V22R2IZ.js";
import {
  BookingFormService,
  DeskListFieldComponent,
  SharedBookingsModule
} from "./chunk-LKZSZ7A2.js";
import "./chunk-PJ4JAIG3.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AssetListFieldComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BookingRulesModalComponent,
  BuildingPipe,
  Clipboard,
  CommonModule,
  CustomTooltipComponent,
  DAYS_OF_WEEK_INDEX,
  DateFieldComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  Desk,
  DurationFieldComponent,
  ElementRef,
  EventEmitter,
  ExploreStateService,
  FormControlName,
  FormFieldsModule,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressSpinner,
  MatRadioModule,
  MatRipple,
  MatSelect,
  MatTooltip,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  PrintableComponent,
  ReactiveFormsModule,
  RecurrenceDays,
  RecurrenceFieldComponent,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SearchbarComponent,
  SettingsService,
  SidebarComponent,
  SimpleTableComponent,
  TimeFieldComponent,
  TranslatePipe,
  UIModule,
  UserListFieldComponent,
  UserSearchFieldComponent,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  combineLatest,
  csvToJson,
  downloadFile,
  endOfDay,
  first,
  generateQRCode,
  getUnixTime,
  jsonToCsv,
  loadTextFileFromInputEvent,
  map,
  notifyError,
  notifyInfo,
  notifySuccess,
  openConfirmModal,
  randomInt,
  set,
  showBooking,
  take,
  updateMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵi18n,
  ɵɵi18nEnd,
  ɵɵi18nStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction6,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5OFBRWDR.js";

// apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [];
var _c2 = (a0, a1, a2) => ({ date: a0, duration: a1, all_day: a2 });
function NewDeskFormDetailsComponent_div_0_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 33)(1, "button", 34);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: false, members: [] }));
    });
    \u0275\u0275elementStart(3, "app-icon", 35);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275i18n(6, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 37);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 34);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: true }));
    });
    \u0275\u0275elementStart(12, "app-icon", 35);
    \u0275\u0275text(13, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 36);
    \u0275\u0275i18n(15, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 37);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-secondary", !((tmp_2_0 = \u0275\u0275pipeBind1(2, 12, ctx_r1.options)) == null ? null : tmp_2_0.group));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("bg-base-200", (tmp_3_0 = \u0275\u0275pipeBind1(8, 14, ctx_r1.options)) == null ? null : tmp_3_0.group)("bg-secondary", !((tmp_4_0 = \u0275\u0275pipeBind1(9, 16, ctx_r1.options)) == null ? null : tmp_4_0.group));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-secondary", (tmp_5_0 = \u0275\u0275pipeBind1(11, 18, ctx_r1.options)) == null ? null : tmp_5_0.group);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("bg-base-200", !((tmp_6_0 = \u0275\u0275pipeBind1(17, 20, ctx_r1.options)) == null ? null : tmp_6_0.group))("bg-secondary", (tmp_7_0 = \u0275\u0275pipeBind1(18, 22, ctx_r1.options)) == null ? null : tmp_7_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 23);
    \u0275\u0275text(2, "Host");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "a-user-search-field", 39);
    \u0275\u0275elementEnd();
  }
}
function NewDeskFormDetailsComponent_div_0_mat_checkbox_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 40);
    \u0275\u0275i18n(1, 6);
    \u0275\u0275elementEnd();
  }
}
function NewDeskFormDetailsComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "label", 43);
    \u0275\u0275i18nStart(3, 7);
    \u0275\u0275element(4, "span");
    \u0275\u0275i18nEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 44);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_27_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "label", 45);
    \u0275\u0275i18nStart(8, 8);
    \u0275\u0275element(9, "span");
    \u0275\u0275i18nEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(10, _c0))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(5);
    \u0275\u0275property("time", (tmp_6_0 = ctx_r1.form.get("date")) == null ? null : tmp_6_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewDeskFormDetailsComponent_div_0_div_28_mat_checkbox_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 51);
    \u0275\u0275text(1, " Update all future events ");
    \u0275\u0275elementEnd();
  }
}
function NewDeskFormDetailsComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "label", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 49);
    \u0275\u0275twoWayListener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_28_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.recurrence, $event) || (ctx_r1.recurrence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_28_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRecurrenceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NewDeskFormDetailsComponent_div_0_div_28_mat_checkbox_7_Template, 2, 0, "mat-checkbox", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.RECURRENCE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r1.form.getRawValue().date);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.recurrence);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.value.id);
  }
}
function NewDeskFormDetailsComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "mat-checkbox", 52);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_29_Template_mat_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ secondary_resource: $event ? "locker" : "" }));
    });
    \u0275\u0275i18n(3, 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !!ctx_r1.form.value.secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
  }
}
function NewDeskFormDetailsComponent_div_0_section_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 16)(1, "h3", 53)(2, "div", 18);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275i18n(5, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55)(8, "a-user-list-field", 56);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_section_30_Template_a_user_list_field_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ members: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ((tmp_2_0 = \u0275\u0275pipeBind1(9, 2, ctx_r1.options)) == null ? null : tmp_2_0.members) || \u0275\u0275pureFunction0(4, _c1))("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
  }
}
function NewDeskFormDetailsComponent_div_0_section_32_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1, " Desks nearby to the selected desk will booked for group members ");
    \u0275\u0275elementEnd();
  }
}
function NewDeskFormDetailsComponent_div_0_section_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "h3", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275i18n(6, 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "desk-list-field", 57);
    \u0275\u0275template(8, NewDeskFormDetailsComponent_div_0_section_32_p_8_Template, 2, 0, "p", 58);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 2, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 3 : 2, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(9, 4, ctx_r1.options)) == null ? null : tmp_3_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_section_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "h3", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275i18n(6, 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "asset-list-field", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 2, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 4 : 3, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction3(4, _c2, ctx_r1.form.getRawValue().date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day));
  }
}
function NewDeskFormDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, NewDeskFormDetailsComponent_div_0_section_1_Template, 19, 24, "section", 15);
    \u0275\u0275elementStart(2, "section", 16)(3, "h3", 17)(4, "div", 18);
    \u0275\u0275text(5, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275i18n(7, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, NewDeskFormDetailsComponent_div_0_div_8_Template, 6, 0, "div", 20);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 22)(12, "label", 23);
    \u0275\u0275text(13, "Add Title");
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 24);
    \u0275\u0275element(17, "input", 25);
    \u0275\u0275elementStart(18, "mat-error");
    \u0275\u0275i18n(19, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 26)(21, "label", 27);
    \u0275\u0275i18nStart(22, 2);
    \u0275\u0275element(23, "span");
    \u0275\u0275i18nEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a-date-field", 28);
    \u0275\u0275i18n(25, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, NewDeskFormDetailsComponent_div_0_mat_checkbox_26_Template, 2, 0, "mat-checkbox", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, NewDeskFormDetailsComponent_div_0_div_27_Template, 11, 11, "div", 30)(28, NewDeskFormDetailsComponent_div_0_div_28_Template, 8, 8, "div", 31)(29, NewDeskFormDetailsComponent_div_0_div_29_Template, 4, 3, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, NewDeskFormDetailsComponent_div_0_section_30_Template, 10, 6, "section", 32);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275template(32, NewDeskFormDetailsComponent_div_0_section_32_Template, 10, 6, "section", 32)(33, NewDeskFormDetailsComponent_div_0_section_33_Template, 8, 8, "section", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allow_groups);
    \u0275\u0275advance();
    \u0275\u0275classProp("!border-none", ctx_r1.allow_groups);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.can_book_for_others && !((tmp_4_0 = \u0275\u0275pipeBind1(9, 14, ctx_r1.options)) == null ? null : tmp_4_0.group));
    \u0275\u0275advance(16);
    \u0275\u0275property("to", ctx_r1.end_date)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.value.all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_recurr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_book_lockers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_11_0 = \u0275\u0275pipeBind1(31, 16, ctx_r1.options)) == null ? null : tmp_11_0.group);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.contains("resources"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.has_assets);
  }
}
var _NewDeskFormDetailsComponent = class _NewDeskFormDetailsComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get can_book_for_others() {
    return this._settings.get("app.desks.can_book_for_others");
  }
  get can_book_lockers() {
    return this._settings.get("app.desks.can_book_lockers");
  }
  get can_recurr() {
    return this._settings.get("app.desks.allow_recurrence");
  }
  get allow_groups() {
    return this._settings.get("app.desks.allow_groups");
  }
  get has_assets() {
    return !!this._settings.get("app.desks.has_assets");
  }
  get needs_reason() {
    return this._settings.get("app.desks.needs_reason") === true;
  }
  get allow_time_changes() {
    return !!this._settings.get("app.desks.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.desks.allow_all_day");
  }
  get timezone() {
    return this._settings.get("app.desks.use_building_timezone") ? this._org.building.timezone : "";
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.find = new EventEmitter();
    this.buildings = this._org.building_list;
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.features = this._state.features;
    this.force_time = set(Date.now(), {
      hours: 6,
      minutes: 0
    }).valueOf();
    this.from_id = false;
    this.recurrence_options = ["daily", "weekly", "monthly"];
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
  }
  ngOnChanges(changes) {
    if (changes.form && this.form) {
      if (this.selected_desk?.id) {
        this.form.patchValue({ resources: [this.selected_desk] });
      }
      this.initialiseRecurrence();
    }
  }
  initialiseRecurrence() {
    const { recurrence_type, recurrence_days, recurrence_interval, recurrence_end, date } = this.form.value;
    if (!this.can_recurr)
      return;
    this.recurrence = {
      pattern: recurrence_type,
      days_of_week: new Array(7).fill(0).map((_, i) => i).filter((i) => recurrence_days & DAYS_OF_WEEK_INDEX[i]),
      interval: recurrence_interval,
      start: date,
      end: recurrence_end
    };
  }
  onRecurrenceChange(recurrence) {
    if (!recurrence.pattern) {
      this.form.patchValue({ recurrence_type: "none" });
    } else if (recurrence.pattern === "daily") {
      this.form.patchValue({
        recurrence_type: "daily",
        recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
        recurrence_interval: recurrence.interval,
        recurrence_end: getUnixTime(recurrence.end)
      });
    } else if (recurrence.pattern === "weekly") {
      this.form.patchValue({
        recurrence_type: "weekly",
        recurrence_days: recurrence.days_of_week.reduce((d, i) => d | DAYS_OF_WEEK_INDEX[i], 0),
        recurrence_interval: recurrence.interval,
        recurrence_end: getUnixTime(recurrence.end)
      });
    } else if (recurrence.pattern === "monthly" || recurrence.pattern === "month_day") {
      const date = new Date(this.form.value.date).getDate();
      let instance = Math.floor(date / 7) + (date % 7 ? 1 : 0);
      if (instance === 4 && date >= 25 || instance === 5)
        instance = -1;
      this.form.patchValue({
        recurrence_type: "monthly",
        recurrence_interval: recurrence.interval,
        recurrence_nth_of_month: instance,
        recurrence_end: getUnixTime(recurrence.end)
      });
    } else {
      this.form.patchValue({ recurrence_type: "none" });
    }
  }
};
_NewDeskFormDetailsComponent.\u0275fac = function NewDeskFormDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewDeskFormDetailsComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
};
_NewDeskFormDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFormDetailsComponent, selectors: [["new-desk-form-details"]], inputs: { form: "form" }, outputs: { find: "find" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_5028777105388019087$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_0 = goog.getMsg("Details");
    i18n_0 = MSG_EXTERNAL_5028777105388019087$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟4f8b2bb476981727ab34ed40fde1218361f92c45␟5028777105388019087:Details`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_4954033536980360307$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_1 = goog.getMsg("Booking title is required.");
    i18n_1 = MSG_EXTERNAL_4954033536980360307$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟3501a14ee1e89ea7009e8c9d1d6796a9ac9c3718␟4954033536980360307:Booking title is required.`;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_3158758063619980932$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_2 = goog.getMsg("Date{$startTagSpan}*{$closeTagSpan}", { "closeTagSpan": "\uFFFD/#23\uFFFD", "startTagSpan": "\uFFFD#23\uFFFD" }, { original_code: { "closeTagSpan": "</span>", "startTagSpan": "<span>" } });
    i18n_2 = MSG_EXTERNAL_3158758063619980932$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟04cfb5fd033651743bc4b9408bd52ba4ee894070␟3158758063619980932:Date${"\uFFFD#23\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_SPAN:`;
  }
  let i18n_3;
  if (false) {
    const MSG_EXTERNAL_6682406734296000735$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_3 = goog.getMsg(" Date and time must be in the future ");
    i18n_3 = MSG_EXTERNAL_6682406734296000735$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_3;
  } else {
    i18n_3 = $localize`:␟407bcc42df8640bf3b85c58145c8d24572bb47b6␟6682406734296000735: Date and time must be in the future `;
  }
  let i18n_4;
  if (false) {
    const MSG_EXTERNAL_3413004253239957216$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_4 = goog.getMsg("Single");
    i18n_4 = MSG_EXTERNAL_3413004253239957216$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_4;
  } else {
    i18n_4 = $localize`:␟ee6b1f617dd5320b23fbed018c38ac092db5e40a␟3413004253239957216:Single`;
  }
  let i18n_5;
  if (false) {
    const MSG_EXTERNAL_8623978917681527907$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_5 = goog.getMsg("Group");
    i18n_5 = MSG_EXTERNAL_8623978917681527907$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_5;
  } else {
    i18n_5 = $localize`:␟4c90059afafb7e160384d9f512797c95bb95c6dc␟8623978917681527907:Group`;
  }
  let i18n_6;
  if (false) {
    const MSG_EXTERNAL_8093595438228616861$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_6 = goog.getMsg(" All Day ");
    i18n_6 = MSG_EXTERNAL_8093595438228616861$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_6;
  } else {
    i18n_6 = $localize`:␟8a5018aa2d4dd0e8a98f4499d4b7b4a9255441a5␟8093595438228616861: All Day `;
  }
  let i18n_7;
  if (false) {
    const MSG_EXTERNAL_4735431816432396893$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_7 = goog.getMsg(" Start Time{$startTagSpan}*{$closeTagSpan}", { "closeTagSpan": "\uFFFD/#4\uFFFD", "startTagSpan": "\uFFFD#4\uFFFD" }, { original_code: { "closeTagSpan": "</span>", "startTagSpan": "<span>" } });
    i18n_7 = MSG_EXTERNAL_4735431816432396893$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_7;
  } else {
    i18n_7 = $localize`:␟02d39ddac5bbf95c424df03d5f0d22cc257556bd␟4735431816432396893: Start Time${"\uFFFD#4\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_SPAN:`;
  }
  let i18n_8;
  if (false) {
    const MSG_EXTERNAL_7899923133926994657$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_8 = goog.getMsg(" End Time{$startTagSpan}*{$closeTagSpan}", { "closeTagSpan": "\uFFFD/#9\uFFFD", "startTagSpan": "\uFFFD#9\uFFFD" }, { original_code: { "closeTagSpan": "</span>", "startTagSpan": "<span>" } });
    i18n_8 = MSG_EXTERNAL_7899923133926994657$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_8;
  } else {
    i18n_8 = $localize`:␟96ca8377bef76dbcd3eb3b4d39e5414763c7033b␟7899923133926994657: End Time${"\uFFFD#9\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_SPAN:`;
  }
  let i18n_9;
  if (false) {
    const MSG_EXTERNAL_8675972661523566351$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_9 = goog.getMsg(" Require locker ");
    i18n_9 = MSG_EXTERNAL_8675972661523566351$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_9;
  } else {
    i18n_9 = $localize`:␟f1701d7a0d6bfb739979f9e406793d97acd138e3␟8675972661523566351: Require locker `;
  }
  let i18n_10;
  if (false) {
    const MSG_EXTERNAL_9086691296106045671$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_10 = goog.getMsg("Group Members");
    i18n_10 = MSG_EXTERNAL_9086691296106045671$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_10;
  } else {
    i18n_10 = $localize`:␟60ae849c087ccc322073478a12b2504433fbdd61␟9086691296106045671:Group Members`;
  }
  let i18n_11;
  if (false) {
    const MSG_EXTERNAL_6078724721705612215$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_11 = goog.getMsg("Desk");
    i18n_11 = MSG_EXTERNAL_6078724721705612215$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_11;
  } else {
    i18n_11 = $localize`:␟654c7e59b2003acf985bee710bad11e8cdd461f8␟6078724721705612215:Desk`;
  }
  let i18n_12;
  if (false) {
    const MSG_EXTERNAL_8637135334686190699$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_12 = goog.getMsg("Request Asset");
    i18n_12 = MSG_EXTERNAL_8637135334686190699$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_12;
  } else {
    i18n_12 = $localize`:␟1bdfc0dfd2ac89f5d0d2af3a66e5e959d094b39c␟8637135334686190699:Request Asset`;
  }
  return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, ["class", "p-0 sm:py-4 sm:px-16 divide-y divide-base-200 space-y-2", 3, "formGroup", 4, "ngIf"], [1, "p-0", "sm:py-4", "sm:px-16", "divide-y", "divide-base-200", "space-y-2", 3, "formGroup"], ["class", "flex items-center", 4, "ngIf"], [1, "p-2"], [1, "space-x-2", "flex", "items-center", "mb-4"], [1, "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center"], [1, "text-xl"], ["class", "w-full", 4, "ngIf"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2"], [1, "flex-1", "min-w-[256px]"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "e.g. Focus Time"], [1, "flex-1", "min-w-[256px]", "relative"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "timezone"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "flex flex-col", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [1, "flex", "items-center"], ["matRipple", "", 1, "relative", "h-16", "flex", "items-center", "justify-center", "flex-1", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], [1, "absolute", "h-1", "inset-x-0", "bottom-0", "!m-0"], [1, "w-full"], ["formControlName", "user", 1, "mb-4"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], [1, "flex", "flex-col"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "date", "ngModel", "ngModelOptions"], ["formControlName", "update_master", 4, "ngIf"], ["formControlName", "update_master"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "space-x-2", "flex", "items-center"], [1, "flex-1", "w-px"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "resources"], ["class", "text-center rounded px-2 py-1 bg-warning shadow text-xs", 4, "ngIf"], [1, "text-center", "rounded", "px-2", "py-1", "bg-warning", "shadow", "text-xs"], ["formControlName", "assets", 3, "options"]];
}, template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NewDeskFormDetailsComponent_div_0_Template, 34, 18, "div", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.form);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, MatCheckbox, MatRipple, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserListFieldComponent, UserSearchFieldComponent, RecurrenceFieldComponent, IconComponent, AssetListFieldComponent, DeskListFieldComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
var NewDeskFormDetailsComponent = _NewDeskFormDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFormDetailsComponent, { className: "NewDeskFormDetailsComponent", filePath: "apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component.ts", lineNumber: 247 });
})();

// apps/concierge/src/app/desks/desk-book-modal.component.ts
function DeskBookModalComponent_main_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "new-desk-form-details", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function DeskBookModalComponent_footer_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 7)(1, "button", 8);
    \u0275\u0275listener("click", function DeskBookModalComponent_footer_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function DeskBookModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 9);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Making booking request...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
  }
}
var _DeskBookModalComponent = class _DeskBookModalComponent {
  get form() {
    return this._booking_form.form;
  }
  constructor(_booking_form, _dialog_ref, _settings) {
    this._booking_form = _booking_form;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.event = new EventEmitter();
    this.loading = new BehaviorSubject(false);
    if (!this.form.value.id) {
      this.form.patchValue({
        duration: this._settings.get("app.desks.default_duration") || 60
      });
    }
  }
  save() {
    return __async(this, null, function* () {
      this.loading.next(true);
      this.form.patchValue({ booking_type: "desk" });
      const event = yield this._booking_form.postForm().catch((_) => {
        notifyError(_);
        this.loading.next(false);
        throw _;
      });
      this.event.emit({ reason: "done", metadata: event });
      notifySuccess("Successfully created booking");
      this._dialog_ref.close();
      this.loading.next(false);
    });
  }
};
_DeskBookModalComponent.\u0275fac = function DeskBookModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskBookModalComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
};
_DeskBookModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookModalComponent, selectors: [["desk-book-modal"]], outputs: { event: "event" }, decls: 13, vars: 7, consts: [["load_state", ""], [1, "flex-1", "w-0"], ["icon", "", "mat-dialog-close", ""], ["class", "overflow-auto p-4 max-h-[65vh]", 4, "ngIf", "ngIfElse"], ["class", "flex justify-center items-center p-2 border-t border-base-200", 4, "ngIf"], [1, "overflow-auto", "p-4", "max-h-[65vh]"], [3, "form"], [1, "flex", "justify-center", "items-center", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["loading", "", 1, "h-64", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"]], template: function DeskBookModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2, "New Desk Booking");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 1);
    \u0275\u0275elementStart(4, "button", 2)(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, DeskBookModalComponent_main_7_Template, 2, 1, "main", 3);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, DeskBookModalComponent_footer_9_Template, 3, 0, "footer", 4);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275template(11, DeskBookModalComponent_ng_template_11_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(12);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(8, 3, ctx.loading))("ngIfElse", load_state_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(10, 5, ctx.loading));
  }
}, dependencies: [NgIf, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, NewDeskFormDetailsComponent, AsyncPipe] });
var DeskBookModalComponent = _DeskBookModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookModalComponent, { className: "DeskBookModalComponent", filePath: "apps/concierge/src/app/desks/desk-book-modal.component.ts", lineNumber: 46 });
})();

// apps/concierge/src/app/desks/desks-topbar.component.ts
function DesksTopbarComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1, " All Levels ");
    \u0275\u0275elementEnd();
  }
}
function DesksTopbarComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function DesksTopbarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function DesksTopbarComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newDeskBooking());
    });
    \u0275\u0275text(1, " New Booking ");
    \u0275\u0275elementEnd();
  }
}
function DesksTopbarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function DesksTopbarComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newDesk());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function DesksTopbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17)(1, "app-icon");
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 18);
    \u0275\u0275listener("change", function DesksTopbarComponent_button_10_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function DesksTopbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function DesksTopbarComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function DesksTopbarComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function DesksTopbarComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.manageRestrictions());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "lock_open");
    \u0275\u0275elementEnd()();
  }
}
var _DesksTopbarComponent = class _DesksTopbarComponent extends AsyncHandler {
  constructor(_desks, _org, _route, _router, _dialog) {
    super();
    this._desks = _desks;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this.levels = this._org.active_levels;
    this.filters = this._desks.filters;
    this.manage = false;
    this.is_map = false;
    this.setDate = (date) => this._desks.setFilters({ date });
    this.setFilters = (o) => this._desks.setFilters(o);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._desks.setFilters({ zones });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            this.updateZones(zones);
            const level = this._org.levelWithID(zones);
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          }
        }
        if (params.has("date")) {
          this.setDate(/* @__PURE__ */ new Date(+params.get("date")));
        }
        if (params.has("approve")) {
          this.approve(params.get("approve"));
        } else if (params.has("reject")) {
          this.reject(params.get("reject"));
        }
        this.manage = this._router.url?.includes("manage");
        this.is_map = this._router.url?.includes("map");
      }));
      this.subscription("router.events", this._router.events.subscribe(() => {
        this.manage = this._router.url?.includes("manage");
        this.is_map = this._router.url?.includes("map");
      }));
      this.subscription("levels", this._org.active_levels.subscribe((levels) => __async(this, null, function* () {
        const filters = yield this.filters.pipe(take(1)).toPromise();
        const zones = filters?.zones?.filter((zone) => levels.find((lvl) => lvl.id === zone) || zone === "All") || [];
        if (!zones.length && levels.length) {
          zones.push(levels[0].id);
        }
        this.updateZones(zones);
      })));
      this.manage = this._router.url?.includes("manage");
      this.is_map = this._router.url?.includes("map");
    });
  }
  newDesk() {
    const desk = new Desk({ id: `desk-${randomInt(999999)}` });
    desk.staff_name = `[NEW_DESK]`;
    this._desks.addDesks([desk]);
    notifyInfo("New desk added to local data.", void 0, () => notifyInfo("Make sure to save the new desk before using it."));
  }
  newDeskBooking() {
    this._dialog.open(DeskBookModalComponent, {});
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "desk" }
    });
  }
  loadCSVData(event) {
    return __async(this, null, function* () {
      const data = yield loadTextFileFromInputEvent(event).catch(([m, e]) => {
        notifyError(m);
        throw e;
      });
      try {
        const list = csvToJson(data) || [];
        this._desks.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
          id: _.id || `desk-${randomInt(999999)}`
        }))));
      } catch (e) {
        console.error(e);
      }
    });
  }
  downloadTemplate() {
    const desk = new Desk({
      id: "desk-123",
      name: "Test Desk",
      bookable: true,
      groups: ["test-desk-group", "desk-bookers"],
      features: ["Standing Desk", "Dual Monitor"]
    }).toJSON();
    delete desk.images;
    const data = jsonToCsv([desk]);
    downloadFile("desk-template.csv", data);
  }
  /**
   * Aprrove a desk booking
   * @param id Booking ID to approve
   */
  approve(id) {
    return __async(this, null, function* () {
      const booking = yield showBooking(id).toPromise();
      if (booking) {
        this._desks.approveDesk(booking);
      }
    });
  }
  /**
   * Reject a desk booking
   * @param id Booking ID to reject
   */
  reject(id) {
    return __async(this, null, function* () {
      const booking = yield showBooking(id).toPromise();
      if (booking) {
        this._desks.rejectDesk(booking);
      }
    });
  }
};
_DesksTopbarComponent.\u0275fac = function DesksTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksTopbarComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog));
};
_DesksTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksTopbarComponent, selectors: [["desks-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 17, consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["placeholder", "All Levels", 3, "ngModelChange", "ngModel"], ["value", "All", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "class", "mx-2 w-40", "matTooltip", "New Desk Booking", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "New Desk", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary relative text-white rounded", "matTooltip", "Upload Desks CSV", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "Download Template Desk CSV", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "Desk Restrictions", 3, "click", 4, "ngIf"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange", "model"], [3, "dateChange"], ["value", "All"], [3, "value"], ["btn", "", "matRipple", "", "matTooltip", "New Desk Booking", 1, "mx-2", "w-40", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "New Desk", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Upload Desks CSV", 1, "bg-primary", "relative", "text-white", "rounded"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Download Template Desk CSV", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Desk Restrictions", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"]], template: function DesksTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function DesksTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      return ctx.updateZones([$event]);
    });
    \u0275\u0275template(5, DesksTopbarComponent_mat_option_5_Template, 2, 0, "mat-option", 3)(6, DesksTopbarComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, DesksTopbarComponent_button_8_Template, 2, 0, "button", 5)(9, DesksTopbarComponent_button_9_Template, 3, 0, "button", 6)(10, DesksTopbarComponent_button_10_Template, 4, 0, "button", 7)(11, DesksTopbarComponent_button_11_Template, 3, 0, "button", 8)(12, DesksTopbarComponent_button_12_Template, 3, 0, "button", 9);
    \u0275\u0275element(13, "div", 10);
    \u0275\u0275elementStart(14, "searchbar", 11);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275listener("modelChange", function DesksTopbarComponent_Template_searchbar_modelChange_14_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "date-options", 12);
    \u0275\u0275listener("dateChange", function DesksTopbarComponent_Template_date_options_dateChange_16_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 9, ctx.filters).zones ? \u0275\u0275pipeBind1(4, 11, ctx.filters).zones[0] : "All");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.is_map);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 13, ctx.levels));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.manage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.manage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.manage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.manage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.manage);
    \u0275\u0275advance(2);
    \u0275\u0275property("model", (tmp_8_0 = \u0275\u0275pipeBind1(15, 15, ctx.filters)) == null ? null : tmp_8_0.search);
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=desks-topbar.component.css.map */"] });
var DesksTopbarComponent = _DesksTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksTopbarComponent, { className: "DesksTopbarComponent", filePath: "apps/concierge/src/app/desks/desks-topbar.component.ts", lineNumber: 125 });
})();

// apps/concierge/src/app/desks/desks.component.ts
var _c02 = ["app-desks", ""];
var _c12 = () => ["/book", "desks", "events"];
var _c22 = () => ["/book", "desks", "map"];
var _c3 = () => ["/book", "desks", "manage"];
function DesksComponent_mat_progress_bar_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 7);
  }
}
var _DesksComponent = class _DesksComponent extends AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
};
_DesksComponent.\u0275fac = function DesksComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(Router));
};
_DesksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksComponent, selectors: [["", "app-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c02, decls: 15, vars: 12, consts: [[1, "flex-1", "relative", "w-1/2", "flex", "flex-col", "bg-base-100", "overflow-hidden"], [1, "w-full"], [1, "dark"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function DesksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "desks-topbar", 1);
    \u0275\u0275elementStart(3, "div", 2)(4, "nav", 3)(5, "a", 4);
    \u0275\u0275text(6, " Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 4);
    \u0275\u0275text(8, " Map View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 4);
    \u0275\u0275text(10, " Manage Desks ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275element(12, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, DesksComponent_mat_progress_bar_13_Template, 1, 0, "mat-progress-bar", 6);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c12))("active", ctx.path === "events");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c22))("active", ctx.path === "map");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c3))("active", ctx.path === "manage");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 7, ctx.loading));
  }
}, dependencies: [NgIf, MatTabNav, MatTabLink, SidebarComponent, MatProgressBar, RouterOutlet, RouterLink, DesksTopbarComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desks.component.css.map */"] });
var DesksComponent = _DesksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksComponent, { className: "DesksComponent", filePath: "apps/concierge/src/app/desks/desks.component.ts", lineNumber: 62 });
})();

// apps/concierge/src/app/desks/desk-bookings.component.ts
var _c03 = () => ["user_name", "asset_name", "user_email", "asset_id", "status", "group"];
var _c13 = (a0) => ({ key: "date", name: "Date", content: a0, size: "4rem", sortable: false });
var _c23 = (a0) => ({ key: "period", name: "Period", content: a0, size: "9rem" });
var _c32 = (a0) => ({ key: "user_name", name: "Person", content: a0 });
var _c4 = (a0) => ({ key: "group", name: "Group", content: a0 });
var _c5 = () => ({ key: "asset_name", name: "Desk" });
var _c6 = () => ({ key: "approver", name: "Approver" });
var _c7 = (a0) => ({ key: "status", name: "Status", content: a0, size: "8.5rem", sortable: false });
var _c8 = (a0) => ({ key: "checked_in", name: "Checked In", content: a0, size: "7rem", sortable: false });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function DeskBookingsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r1 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, date_r1, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, date_r1, "dd"));
  }
}
function DeskBookingsComponent_ng_template_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, " No Group ");
    \u0275\u0275elementEnd();
  }
}
function DeskBookingsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275template(2, DeskBookingsComponent_ng_template_6_span_2_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.group || (row_r2.extension_data == null ? null : row_r2.extension_data.group), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(row_r2.group || (row_r2.extension_data == null ? null : row_r2.extension_data.group)));
  }
}
function DeskBookingsComponent_ng_template_8_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext(2).row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, row_r3.date, ctx_r3.time_format), " \u2013 ", \u0275\u0275pipeBind2(3, 5, row_r3.date_end, ctx_r3.time_format), " ");
  }
}
function DeskBookingsComponent_ng_template_8_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "All Day");
    \u0275\u0275elementContainerEnd();
  }
}
function DeskBookingsComponent_ng_template_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275template(2, DeskBookingsComponent_ng_template_8_ng_container_1_ng_container_2_Template, 4, 8, "ng-container", 18)(3, DeskBookingsComponent_ng_template_8_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !row_r3.all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.all_day);
  }
}
function DeskBookingsComponent_ng_template_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r3.status === "ended" ? "Manually Ended" : "Expired", " ");
  }
}
function DeskBookingsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, DeskBookingsComponent_ng_template_8_ng_container_1_Template, 4, 2, "ng-container", 18)(2, DeskBookingsComponent_ng_template_8_ng_container_2_Template, 3, 1, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.status !== "declined" && !row_r3.deleted && row_r3.status !== "ended");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.status === "declined" || row_r3.deleted || row_r3.status === "ended");
  }
}
function DeskBookingsComponent_ng_template_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.user_email, " ");
  }
}
function DeskBookingsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DeskBookingsComponent_ng_template_10_div_3_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.user_name || row_r5.user_email || row_r5.booked_by_name || row_r5.booked_by_email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r5.user_name);
  }
}
function DeskBookingsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 25)(2, "div", 26)(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-icon", 28);
    \u0275\u0275text(6, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 6)(9, "button", 29);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_12_Template_button_click_9_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.approve(row_r7));
    });
    \u0275\u0275elementStart(10, "div", 30)(11, "app-icon", 28);
    \u0275\u0275text(12, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 31);
    \u0275\u0275text(14, "Approve Desk");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 29);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_12_Template_button_click_15_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reject(row_r7));
    });
    \u0275\u0275elementStart(16, "div", 30)(17, "app-icon", 28);
    \u0275\u0275text(18, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 31);
    \u0275\u0275text(20, "Decline Desk");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("!text-success-content", (row_r7 == null ? null : row_r7.status) === "approved")("!bg-success", (row_r7 == null ? null : row_r7.status) === "approved")("!text-error-content", (row_r7 == null ? null : row_r7.status) === "declined")("!bg-error", (row_r7 == null ? null : row_r7.status) === "declined")("!text-neutral-content", (row_r7 == null ? null : row_r7.status) === "ended")("!bg-neutral", (row_r7 == null ? null : row_r7.status) === "ended")("opacity-30", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r8)("disabled", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (row_r7 == null ? null : row_r7.status) === "ended" ? "Ended" : (row_r7 == null ? null : row_r7.status) === "approved" ? "Approved" : (row_r7 == null ? null : row_r7.status) === "declined" ? "Declined" : "Pending", " ");
  }
}
function DeskBookingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 32)(2, "div", 26)(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-icon", 28);
    \u0275\u0275text(6, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 7)(9, "button", 29);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_14_Template_button_click_9_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkin(row_r10, true));
    });
    \u0275\u0275elementStart(10, "div", 30)(11, "app-icon", 28);
    \u0275\u0275text(12, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14, "Check-in");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 29);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_14_Template_button_click_15_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkin(row_r10, false));
    });
    \u0275\u0275elementStart(16, "div", 30)(17, "app-icon", 28);
    \u0275\u0275text(18, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20, "Check-out");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    const row_r10 = ctx.row;
    const checkinMenu_r12 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("!bg-neutral", !data_r11)("!text-neutral-content", !data_r11)("!bg-success", data_r11)("!text-success-content", data_r11)("opacity-30", row_r10.status === "ended");
    \u0275\u0275property("matMenuTriggerFor", checkinMenu_r12)("disabled", row_r10.status === "ended")("matTooltip", row_r10.status === "ended" ? "Desk booking has ended" : "Check-in or check-out desk");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r11 ? "Yes" : "No", " ");
  }
}
function DeskBookingsComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function DeskBookingsComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadMore());
    });
    \u0275\u0275text(1, " Load More ");
    \u0275\u0275elementEnd();
  }
}
var _DeskBookingsComponent = class _DeskBookingsComponent {
  get columns() {
    return [
      "date",
      "period",
      "user_name",
      "group",
      "asset_name",
      "approver_name",
      "status",
      "checked_in"
    ];
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.bookings;
    this.rejectAll = () => this._state.rejectAllDesks();
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod("checkin", () => __async(this, null, function* () {
      yield this._state.checkinDesk(d, s);
      d.checked_in = s ?? true;
    }));
    this.approve = (d) => this.runMethod("approve", () => __async(this, null, function* () {
      return this._state.approveDesk(d);
    }));
    this.reject = (d) => this.runMethod("reject", () => __async(this, null, function* () {
      return this._state.rejectDesk(d);
    }));
  }
  runMethod(name, fn) {
    return __async(this, null, function* () {
      this.loading = name;
      yield fn().catch((i) => null);
      this.loading = "";
    });
  }
};
_DeskBookingsComponent.\u0275fac = function DeskBookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskBookingsComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(SettingsService));
};
_DeskBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingsComponent, selectors: [["desk-bookings"]], decls: 18, vars: 37, consts: [["date_template", ""], ["group_template", ""], ["period_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], [1, "overflow-auto", "h-full", "w-full", "pb-16"], [1, "min-w-[72rem]", "block", "text-sm", 3, "data", "filter", "filter_on", "columns", "empty_message", "sortable"], ["btn", "", "matRipple", "", "class", "absolute bottom-2 left-4 w-32 z-20", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-4", "text-[0.625rem]", "font-mono"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "p-2"], [4, "ngIf"], [1, "text-xs", "py-2", "px-4", "bg-error", "rounded-3xl", "text-white"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], ["class", "text-xs opacity-30 select-all", 4, "ngIf"], [1, "text-xs", "opacity-30", "select-all"], [1, "px-2"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[7.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-4", "pr-2", "space-x-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[4.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "w-32", "z-20", 3, "click"]], template: function DeskBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "simple-table", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, DeskBookingsComponent_ng_template_4_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, DeskBookingsComponent_ng_template_6_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, DeskBookingsComponent_ng_template_8_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(10, DeskBookingsComponent_ng_template_10_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(12, DeskBookingsComponent_ng_template_12_Template, 21, 17, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(14, DeskBookingsComponent_ng_template_14_Template, 21, 14, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, DeskBookingsComponent_button_16_Template, 2, 0, "button", 10);
    \u0275\u0275pipe(17, "async");
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_10_0;
    const date_template_r14 = \u0275\u0275reference(5);
    const group_template_r15 = \u0275\u0275reference(7);
    const period_template_r16 = \u0275\u0275reference(9);
    const user_template_r17 = \u0275\u0275reference(11);
    const status_template_r18 = \u0275\u0275reference(13);
    const option_template_r19 = \u0275\u0275reference(15);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.bookings)("filter", (tmp_7_0 = \u0275\u0275pipeBind1(2, 7, ctx.filters)) == null ? null : tmp_7_0.search)("filter_on", \u0275\u0275pureFunction0(13, _c03))("columns", \u0275\u0275pureFunction8(28, _c9, \u0275\u0275pureFunction1(14, _c13, date_template_r14), \u0275\u0275pureFunction1(16, _c23, period_template_r16), \u0275\u0275pureFunction1(18, _c32, user_template_r17), \u0275\u0275pureFunction1(20, _c4, group_template_r15), \u0275\u0275pureFunction0(22, _c5), \u0275\u0275pureFunction0(23, _c6), \u0275\u0275pureFunction1(24, _c7, status_template_r18), \u0275\u0275pureFunction1(26, _c8, option_template_r19)))("empty_message", ((tmp_10_0 = \u0275\u0275pipeBind1(3, 9, ctx.filters)) == null ? null : tmp_10_0.search) ? "No matching desk bookings" : "There are no desk booking for the currently selected date.")("sortable", true);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", !ctx.loading && \u0275\u0275pipeBind1(17, 11, ctx.has_more_pages));
  }
}, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-bookings.component.css.map */"] });
var DeskBookingsComponent = _DeskBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingsComponent, { className: "DeskBookingsComponent", filePath: "apps/concierge/src/app/desks/desk-bookings.component.ts", lineNumber: 259 });
})();

// apps/concierge/src/app/desks/desk-map-view.component.ts
var _DeskMapViewComponent = class _DeskMapViewComponent extends AsyncHandler {
  constructor(_state, _desk, _desks_state, _org) {
    super();
    this._state = _state;
    this._desk = _desk;
    this._desks_state = _desks_state;
    this._org = _org;
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.actions = this._state.map_actions;
    this.features = this._state.map_features;
    this.setHost = (u) => this._desks_state.setOptions({ host: u });
  }
  ngOnInit() {
    this._desks_state.setOptions({ use_api: true });
    this.subscription("date", this._desk.filters.subscribe((opts) => {
      const level = this._org.levelWithID(opts.zones);
      if (level)
        this._state.setLevel(level.id);
      this._desks_state.setOptions({
        date: opts.date || Date.now(),
        all_day: true,
        zones: opts.zones
      });
    }));
  }
};
_DeskMapViewComponent.\u0275fac = function DeskMapViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskMapViewComponent)(\u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(ExploreDesksService), \u0275\u0275directiveInject(OrganisationService));
};
_DeskMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapViewComponent, selectors: [["desk-map-view"]], features: [\u0275\u0275ProvidersFeature([ExploreDesksService]), \u0275\u0275InheritDefinitionFeature], decls: 13, vars: 19, consts: [["map", "", 1, "h-full", "w-full", "relative"], [3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"], [1, "absolute", "top-0", "left-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 1, "white", 3, "ngModelChange", "ngModel"], ["info", "", 1, "absolute", "bottom-0", "rounded", "p-2", "m-2", "bg-base-100", "shadow", "text-center"]], template: function DeskMapViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "interactive-map", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275element(8, "explore-zoom-controls", 2);
    \u0275\u0275elementStart(9, "div", 3)(10, "a-user-search-field", 4);
    \u0275\u0275listener("ngModelChange", function DeskMapViewComponent_Template_a_user_search_field_ngModelChange_10_listener($event) {
      return ctx.setHost($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275text(12, " Click/Tap an available desk to book it. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 7, ctx.url))("zoom", \u0275\u0275pipeBind1(3, 9, ctx.positions).zoom)("center", \u0275\u0275pipeBind1(4, 11, ctx.positions).center)("styles", \u0275\u0275pipeBind1(5, 13, ctx.styles))("features", \u0275\u0275pipeBind1(6, 15, ctx.features))("actions", \u0275\u0275pipeBind1(7, 17, ctx.actions));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", null);
  }
}, dependencies: [NgControlStatus, NgModel, UserSearchFieldComponent, InteractiveMapComponent, ExploreZoomControlComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[info][_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=desk-map-view.component.css.map */"] });
var DeskMapViewComponent = _DeskMapViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapViewComponent, { className: "DeskMapViewComponent", filePath: "apps/concierge/src/app/desks/desk-map-view.component.ts", lineNumber: 57 });
})();

// apps/concierge/src/app/desks/desks-manage.component.ts
var _c04 = (a0) => ({ key: "id", name: "Desk ID", content: a0, size: "10rem" });
var _c14 = () => ({ key: "name", name: "Desk Name" });
var _c24 = (a0) => ({ key: "groups", name: "Groups", content: a0 });
var _c33 = (a0) => ({ key: "features", name: "Features", content: a0 });
var _c42 = (a0) => ({ key: "bookable", name: "Bookable", content: a0, size: "5.5rem" });
var _c52 = (a0) => ({ key: "actions", name: " ", content: a0, size: "8.5rem", sortable: false });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function DesksManageComponent_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.map_id, " ");
  }
}
function DesksManageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_4_Template_button_click_0_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r3.map_id || row_r3.id));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DesksManageComponent_ng_template_4_div_3_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.id || row_r3.map_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.id && row_r3.map_id !== row_r3.id);
  }
}
function DesksManageComponent_ng_template_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
  }
}
function DesksManageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, DesksManageComponent_ng_template_6_span_1_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", data_r6);
  }
}
function DesksManageComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "app-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r7)("bg-success", data_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7 ? "done" : "close");
  }
}
function DesksManageComponent_ng_template_10_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "a", 23);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275element(4, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_10_ng_template_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.print());
    });
    \u0275\u0275text(8, " Print QR Code ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(3, 3, row_r9.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", row_r9.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r9.name || row_r9.id, " ");
  }
}
function DesksManageComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_10_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadQrCode(row_r9));
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_10_Template_button_click_4_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editDesk(row_r9));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_10_Template_button_click_7_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeDesk(row_r9));
    });
    \u0275\u0275elementStart(8, "app-icon", 20);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, DesksManageComponent_ng_template_10_ng_template_10_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qr_menu_r11 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("content", qr_menu_r11);
  }
}
function DesksManageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "mat-spinner", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.loading);
  }
}
function DesksManageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3, " Drop CSV file to add desks ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 32);
    \u0275\u0275listener("change", function DesksManageComponent_div_13_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var _DesksManageComponent = class _DesksManageComponent extends AsyncHandler {
  constructor(_state, _org, _dialog, _settings, _element, _clipboard) {
    super();
    this._state = _state;
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._element = _element;
    this._clipboard = _clipboard;
    this.dragging = false;
    this.filters = this._state.filters;
    this.desks = this._state.desks;
    this.editDesk = (desk) => this._state.editDesk(desk);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Desk ID copied to clipboard.");
    };
  }
  removeDesk(desk) {
    return __async(this, null, function* () {
      const resp = yield openConfirmModal({
        title: "Remove desk",
        content: `Remove desk ${desk.name}?`,
        icon: { content: "delete" }
      }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.close();
      const desks = yield this.desks.pipe(take(1)).toPromise();
      const updated_desks = desks.filter((_) => _.id !== desk.id);
      const filters = yield this.filters.pipe(take(1)).toPromise();
      const level = this._org.levelWithID(filters.zones);
      this.loading = "Removing desk...";
      yield updateMetadata(level.id, {
        name: "desks",
        description: "desks",
        details: updated_desks
      }).toPromise().catch((e) => {
        this.loading = "";
        notifyError(`Error saving desk data. Error: ${e.message || e}`);
        throw e;
      });
      notifySuccess("Successfully updated desks");
      this._state.setFilters({});
      this.loading = "";
    });
  }
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
  }
  print() {
    window.print();
  }
  loadCSVData(event) {
    return __async(this, null, function* () {
      this.loading = "Loading CSV file...";
      this.dragging = false;
      const data = yield loadTextFileFromInputEvent(event).catch(([m, e]) => {
        notifyError(m);
        throw e;
      });
      try {
        const list = csvToJson(data) || [];
        this._state.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
          id: _.id || `desk-${randomInt(999999)}`
        }))));
      } catch (e) {
        console.error(e);
      }
      this.loading = "";
    });
  }
  handleDrag(type, event) {
    this.dragging = type === "enter";
  }
};
_DesksManageComponent.\u0275fac = function DesksManageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksManageComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Clipboard));
};
_DesksManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksManageComponent, selectors: [["desks-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 29, consts: [["name_template", ""], ["item_list_template", ""], ["bool_template", ""], ["action_template", ""], ["qr_menu", ""], [1, "overflow-auto", "h-full", "w-full", "pb-4", 3, "dragenter", "dragend"], [1, "min-w-[72rem]", "w-full", "block", "text-sm", 3, "filter", "data", "columns", "sortable", "empty_message"], ["class", "absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60", 4, "ngIf"], ["class", "absolute inset-0 bg-neutral flex items-center justify-center", 4, "ngIf"], [1, "flex", "flex-col", "px-4", "py-2", "text-left", "leading-tight", 3, "click"], ["class", "text-[0.625rem] opacity-30 font-mono", 4, "ngIf"], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "flex", "flex-wrap", "p-2"], ["class", "m-1 py-1 px-2 rounded-2xl text-xs font-mono bg-info text-info-content", 4, "ngFor", "ngForOf"], [1, "m-1", "py-1", "px-2", "rounded-2xl", "text-xs", "font-mono", "bg-info", "text-info-content"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "text-white", "mx-auto"], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", "matTooltip", "Print QR Code", 3, "click", "content"], ["icon", "", "matRipple", "", "matTooltip", "Edit Desk", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Desk", 3, "click"], [1, "text-error"], [1, "bg-base-100", "py-2", "shadow", "rounded"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100", 3, "href"], [1, "w-48", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "mt-2", "font-mono", "text-sm", "bg-base-200", "rounded", "p-2", "mx-4"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-2rem)]", "mx-4", "my-2", 3, "click"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "bg-base-100", "bg-opacity-60"], ["diameter", "32"], [1, "absolute", "inset-0", "bg-neutral", "flex", "items-center", "justify-center"], [1, "bg-base-100", "p-4", "rounded", "shadow"], [1, "border-4", "border-base-200", "border-dashed", "rounded", "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function DesksManageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("dragenter", function DesksManageComponent_Template_div_dragenter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleDrag("enter", $event));
    })("dragend", function DesksManageComponent_Template_div_dragend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleDrag("end", $event));
    }, false, \u0275\u0275resolveWindow);
    \u0275\u0275element(1, "simple-table", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, DesksManageComponent_ng_template_4_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, DesksManageComponent_ng_template_6_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, DesksManageComponent_ng_template_8_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(10, DesksManageComponent_ng_template_10_Template, 12, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(12, DesksManageComponent_div_12_Template, 4, 1, "div", 7)(13, DesksManageComponent_div_13_Template, 5, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_8_0;
    const name_template_r13 = \u0275\u0275reference(5);
    const item_list_template_r14 = \u0275\u0275reference(7);
    const bool_template_r15 = \u0275\u0275reference(9);
    const action_template_r16 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("filter", (tmp_4_0 = \u0275\u0275pipeBind1(2, 7, ctx.filters)) == null ? null : tmp_4_0.search)("data", ctx.desks)("columns", \u0275\u0275pureFunction6(22, _c62, \u0275\u0275pureFunction1(11, _c04, name_template_r13), \u0275\u0275pureFunction0(13, _c14), \u0275\u0275pureFunction1(14, _c24, item_list_template_r14), \u0275\u0275pureFunction1(16, _c33, item_list_template_r14), \u0275\u0275pureFunction1(18, _c42, bool_template_r15), \u0275\u0275pureFunction1(20, _c52, action_template_r16)))("sortable", true)("empty_message", ((tmp_8_0 = \u0275\u0275pipeBind1(3, 9, ctx.filters)) == null ? null : tmp_8_0.search) ? "No matching desks" : "No desks for selected level");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.dragging);
  }
}, dependencies: [NgForOf, NgIf, MatTooltip, MatProgressSpinner, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, AsyncPipe, SafePipe] });
var DesksManageComponent = _DesksManageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksManageComponent, { className: "DesksManageComponent", filePath: "apps/concierge/src/app/desks/desks-manage.component.ts", lineNumber: 191 });
})();

// apps/concierge/src/app/desks/desk-qr-code-modal.component.ts
function DeskQrCodeModalComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const desk_r1 = ctx.$implicit;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, desk_r1.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", desk_r1.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", desk_r1.name || desk_r1.id, " ");
  }
}
var _DeskQrCodeModalComponent = class _DeskQrCodeModalComponent {
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  constructor(_settings, _state) {
    this._settings = _settings;
    this._state = _state;
    this.desks = this._state.desks.pipe(map((list) => list.map((_) => {
      this.loadQrCode(_);
      return _;
    })));
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
    return item.qr_code;
  }
  print() {
    window.print();
  }
};
_DeskQrCodeModalComponent.\u0275fac = function DeskQrCodeModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQrCodeModalComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(DesksStateService));
};
_DeskQrCodeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQrCodeModalComponent, selectors: [["desk-qr-code-modal"]], decls: 10, vars: 3, consts: [[1, "relative", "w-screen", "min-h-screen", "bg-base-100", "rounded-none"], [1, "sticky", "top-0", "flex", "items-center", "justify-between", "print:hidden", "p-4", "w-full"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "flex-wrap", "overflow-auto", "print:h-auto", "h-[calc(100vh-5rem)]"], ["target", "_blank", "ref", "noopener noreferrer", "class", "flex flex-col items-center justify-center w-[28%] landscape:w-[21%] print:landscape:h-[33.33vh] print:h-[25vh] mx-auto", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "ref", "noopener noreferrer", 1, "flex", "flex-col", "items-center", "justify-center", "w-[28%]", "landscape:w-[21%]", "print:landscape:h-[33.33vh]", "print:h-[25vh]", "mx-auto", 3, "href"], [1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100"], [1, "w-48", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "my-1", "font-mono", "text-sm", "bg-base-200", "rounded", "p-1", "mx-4"]], template: function DeskQrCodeModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function DeskQrCodeModalComponent_Template_button_click_2_listener() {
      return ctx.print();
    });
    \u0275\u0275text(3, "Print QR Codes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3)(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275template(8, DeskQrCodeModalComponent_a_8_Template, 6, 6, "a", 5);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 1, ctx.desks));
  }
}, dependencies: [NgForOf, MatDialogClose, MatRipple, IconComponent, AsyncPipe, SafePipe] });
var DeskQrCodeModalComponent = _DeskQrCodeModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQrCodeModalComponent, { className: "DeskQrCodeModalComponent", filePath: "apps/concierge/src/app/desks/desk-qr-code-modal.component.ts", lineNumber: 46 });
})();

// apps/concierge/src/app/desks/new-desks.component.ts
var _c05 = ["app-new-desks", ""];
function NewDesksComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function NewDesksComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newDeskBooking());
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2, "New Booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-icon", 15);
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
}
function NewDesksComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function NewDesksComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editDesk());
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2, "New Desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-icon", 15);
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
}
function NewDesksComponent_mat_form_field_13_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function NewDesksComponent_mat_form_field_13_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 20);
    \u0275\u0275template(2, NewDesksComponent_mat_form_field_13_mat_option_3_div_2_Template, 5, 3, "div", 21);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r5.display_name || level_r5.name, " ");
  }
}
function NewDesksComponent_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function NewDesksComponent_mat_form_field_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275template(3, NewDesksComponent_mat_form_field_13_mat_option_3_Template, 5, 3, "mat-option", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_1_0.zones);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 4, ctx_r1.levels));
  }
}
function NewDesksComponent_mat_form_field_14_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const level_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, level_r7.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function NewDesksComponent_mat_form_field_14_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 20);
    \u0275\u0275template(2, NewDesksComponent_mat_form_field_14_mat_option_4_div_2_Template, 5, 3, "div", 21);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r7.display_name || level_r7.name, " ");
  }
}
function NewDesksComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 24);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function NewDesksComponent_mat_form_field_14_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones([$event]));
    });
    \u0275\u0275template(4, NewDesksComponent_mat_form_field_14_mat_option_4_Template, 5, 3, "mat-option", 18);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length) ? (tmp_1_0 = \u0275\u0275pipeBind1(3, 4, ctx_r1.filters)) == null ? null : tmp_1_0.zones[0] : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 6, ctx_r1.levels));
  }
}
function NewDesksComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "date-options", 25);
    \u0275\u0275listener("dateChange", function NewDesksComponent_ng_container_16_Template_date_options_dateChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("click", function NewDesksComponent_ng_container_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 27);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("click", function NewDesksComponent_ng_container_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAll());
    });
    \u0275\u0275elementStart(8, "app-icon");
    \u0275\u0275text(9, "event_busy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(3, 2, ctx_r1.loading));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(7, 4, ctx_r1.loading));
  }
}
function NewDesksComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 28);
    \u0275\u0275listener("click", function NewDesksComponent_ng_container_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewQRCodes());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 29)(5, "app-icon");
    \u0275\u0275text(6, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 30);
    \u0275\u0275listener("change", function NewDesksComponent_ng_container_17_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 31);
    \u0275\u0275listener("click", function NewDesksComponent_ng_container_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(9, "app-icon");
    \u0275\u0275text(10, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function NewDesksComponent_ng_container_17_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(12, "app-icon");
    \u0275\u0275text(13, "lock_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function NewDesksComponent_mat_progress_bar_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 33);
  }
}
var _NewDesksComponent = class _NewDesksComponent extends AsyncHandler {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_state, _router, _route, _dialog, _org, _settings) {
    super();
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._org = _org;
    this._settings = _settings;
    this.loading = this._state.loading;
    this.manage = false;
    this.filters = this._state.filters;
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (o) => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.rejectAll = () => this._state.rejectAllDesks();
    this.editDesk = () => this._state.editDesk();
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
    };
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
        this._checkManage();
      }
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (!zones.length)
          return;
        const level = this._org.levelWithID(zones);
        this._state.setFilters({ zones });
        if (!level)
          return;
        this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
    this._checkManage();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  viewQRCodes() {
    this._dialog.open(DeskQrCodeModalComponent);
  }
  newDeskBooking() {
    const ref = this._dialog.open(DeskBookModalComponent, {});
    ref.afterClosed().subscribe((_) => {
      this._state.refresh();
    });
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "desk" }
    });
  }
  downloadTemplate() {
    const desk = new Desk({
      id: "desk-123",
      name: "Test Desk",
      bookable: true,
      groups: ["test-desk-group", "desk-bookers"],
      features: ["Standing Desk", "Dual Monitor"]
    }).toJSON();
    delete desk.images;
    const data = jsonToCsv([desk]);
    downloadFile("desk-template.csv", data);
  }
  loadCSVData(event) {
    return __async(this, null, function* () {
      const data = yield loadTextFileFromInputEvent(event).catch(([m, e]) => {
        notifyError(m);
        throw e;
      });
      try {
        const list = csvToJson(data) || [];
        this._state.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
          id: _.id || `desk-${randomInt(999999)}`
        }))));
      } catch (e) {
        console.error(e);
      }
    });
  }
  _checkManage() {
    this.manage = this.path.includes("manage");
    if (this.manage) {
      this.subscription("zone-changes", this._org.active_levels.subscribe((lvls) => __async(this, null, function* () {
        if (!lvls.length)
          return;
        const { zones } = yield this._state.filters.pipe(take(1)).toPromise();
        const levels_in_zones = zones?.length && zones.some((z) => lvls.find((lvl) => lvl.id === z));
        if (!levels_in_zones)
          this.updateZones([lvls[0].id]);
      })));
    } else
      this.unsub("zone-changes");
  }
};
_NewDesksComponent.\u0275fac = function NewDesksComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewDesksComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
};
_NewDesksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDesksComponent, selectors: [["", "app-new-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c05, decls: 22, vars: 13, consts: [[1, "print:hidden"], [1, "flex", "flex-1", "h-px", "print:hidden"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "w-full", "py-4", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", "class", "space-x-2 w-44", 3, "click", 4, "ngIf"], [1, "w-full", "flex", "items-center", "px-8", "space-x-2", "mb-4"], ["appearance", "outline", "class", "no-subscript w-60", 4, "ngIf"], [4, "ngIf"], [1, "flex-1", "h-1/2", "px-8", "w-full", "relative", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-44", 3, "click"], [1, "pl-2"], [1, "text-2xl"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Refresh List", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "disabled"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Reject All", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "disabled"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "View Desk QR Codes", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Upload Desks CSV", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Download Template Desk CSV", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Desk Restrictions", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["mode", "indeterminate", 1, "w-full"]], template: function NewDesksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 5);
    \u0275\u0275elementStart(8, "searchbar", 6);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("modelChange", function NewDesksComponent_Template_searchbar_modelChange_8_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, NewDesksComponent_button_10_Template, 5, 0, "button", 7)(11, NewDesksComponent_button_11_Template, 5, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275template(13, NewDesksComponent_mat_form_field_13_Template, 5, 6, "mat-form-field", 9)(14, NewDesksComponent_mat_form_field_14_Template, 6, 8, "mat-form-field", 9);
    \u0275\u0275element(15, "div", 5);
    \u0275\u0275template(16, NewDesksComponent_ng_container_16_Template, 10, 6, "ng-container", 10)(17, NewDesksComponent_ng_container_17_Template, 14, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 11);
    \u0275\u0275element(19, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, NewDesksComponent_mat_progress_bar_20_Template, 1, 0, "mat-progress-bar", 12);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx.manage ? "Desk Management" : "Desk Bookings", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("model", (tmp_1_0 = \u0275\u0275pipeBind1(9, 9, ctx.filters)) == null ? null : tmp_1_0.search);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.path !== "manage");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.path === "manage");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.manage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.manage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.path === "events");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.path === "manage");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 11, ctx.loading) && ctx.path === "events");
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatProgressBar, MatRipple, IconComponent, RouterOutlet, AsyncPipe, BuildingPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=new-desks.component.css.map */"] });
var NewDesksComponent = _NewDesksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDesksComponent, { className: "NewDesksComponent", filePath: "apps/concierge/src/app/desks/new-desks.component.ts", lineNumber: 229 });
})();

// apps/concierge/src/app/desks/desks.module.ts
var ROUTES = [
  {
    path: "new",
    component: NewDesksComponent,
    children: [
      { path: "events", component: DeskBookingsComponent },
      { path: "map", component: DeskMapViewComponent },
      { path: "manage", component: DesksManageComponent },
      { path: "**", redirectTo: "events" }
    ]
  },
  {
    path: "",
    component: DesksComponent,
    children: [
      { path: "events", component: DeskBookingsComponent },
      { path: "map", component: DeskMapViewComponent },
      { path: "manage", component: DesksManageComponent },
      { path: "**", redirectTo: "events" }
    ]
  }
];
var _DesksModule = class _DesksModule {
};
_DesksModule.\u0275fac = function DesksModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksModule)();
};
_DesksModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DesksModule });
_DesksModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  MatTabsModule,
  ReactiveFormsModule,
  UIModule,
  SharedExploreModule,
  SharedBookingsModule,
  FormFieldsModule,
  MatRadioModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  RouterModule.forChild(ROUTES)
] });
var DesksModule = _DesksModule;
export {
  DesksModule
};
//# sourceMappingURL=desks.module-H33X7QGK.js.map
