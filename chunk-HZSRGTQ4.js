import {
  EventApprovalStateService
} from "./chunk-K4YRX3PK.js";
import {
  CateringListFieldComponent,
  CateringOrderStateService
} from "./chunk-UZWZYCJZ.js";
import {
  AssetListFieldComponent
} from "./chunk-4PWTWFLT.js";
import {
  HostSelectFieldComponent,
  RecurrenceFieldComponent,
  SpaceListFieldComponent,
  UserListFieldComponent
} from "./chunk-3FN4NPVV.js";
import {
  DateFieldComponent,
  DurationFieldComponent,
  EventFormService,
  FindAvailabilityModalComponent,
  MatAutocompleteModule,
  UserSearchFieldComponent,
  declineEvent,
  queryEvents,
  startOfMonth
} from "./chunk-4MJY7RRT.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CalendarEvent,
  CommonModule,
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MatSelect,
  MatSelectModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  Observable,
  OrganisationService,
  Output,
  ReactiveFormsModule,
  RichTextInputComponent,
  SettingsService,
  TimeFieldComponent,
  TranslatePipe,
  addDays,
  addMinutes,
  catchError,
  combineLatest,
  currentUser,
  debounceTime,
  differenceInMinutes,
  distinctUntilChanged,
  endOfDay,
  endOfMonth,
  endOfWeek,
  filter,
  first,
  flatten,
  forkJoin,
  format,
  formatDuration,
  getTimezoneDifferenceInHours,
  getUnixTime,
  i18n,
  inject,
  input,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  requestSpacesForZone,
  set,
  setClassMetadata,
  shareReplay,
  startOfDay,
  startOfWeek,
  startWith,
  switchMap,
  tap,
  timePeriodsIntersect,
  wh,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-25H4I2JW.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// apps/workplace/src/app/book/meeting-flow/meeting-form-details.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.value;
function MeetingFormDetailsComponent_Conditional_0_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-date-field", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, MeetingFormDetailsComponent_Conditional_0_Conditional_12_Conditional_9_Template, 3, 3, "mat-checkbox", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r0.end_date)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allow_all_day ? 9 : -1);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6)(2, "label", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-date-field", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, MeetingFormDetailsComponent_Conditional_0_Conditional_13_Conditional_10_Template, 3, 3, "mat-checkbox", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "label", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a-date-field", 13);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r0.end_date)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone)("range", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allow_all_day ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 18, "FORM.DATE_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("from", ctx_r0.start_date)("to", ctx_r0.end_date)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone)("range", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 20, "FORM.DATE_ERROR"), " ");
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_8_Template_a_time_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.form().patchValue({ date_end: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().value.date_end)("ngModelOptions", \u0275\u0275pureFunction0(9, _c0))("from", ((tmp_6_0 = ctx_r0.form()) == null ? null : (tmp_6_0 = tmp_6_0.getRawValue()) == null ? null : tmp_6_0.date) + 30 * 60 * 1e3)("use_24hr", ctx_r0.use_24hr)("extra_info_fn", ctx_r0.duration_info)("timezone", ctx_r0.timezone);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-duration-field", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_4_0 = ctx_r0.form()) == null ? null : (tmp_4_0 = tmp_4_0.getRawValue()) == null ? null : tmp_4_0.date)("max", ctx_r0.max_duration)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 14)(2, "label", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 16);
    \u0275\u0275listener("ngModelChange", function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form().patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_8_Template, 7, 10, "div", 14);
    \u0275\u0275conditionalCreate(9, MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_9_Template, 7, 7, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(10, _c0))("disabled", ctx_r0.form().controls.date.disabled)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allow_multiday ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.allow_multiday ? 9 : -1);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 20);
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
function MeetingFormDetailsComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "host-select-field", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.UPDATE_FUTURE"), " ");
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "recurrence-field", 23);
    \u0275\u0275conditionalCreate(7, MeetingFormDetailsComponent_Conditional_0_Conditional_17_Conditional_7_Template, 3, 3, "mat-checkbox", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "FORM.RECURRENCE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r0.form().getRawValue().date);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().value.id ? 7 : -1);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_18_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.VISIBILITY_" + option_r4.label), " ");
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 26)(7, "mat-select", 27);
    \u0275\u0275repeaterCreate(8, MeetingFormDetailsComponent_Conditional_0_Conditional_18_For_9_Template, 3, 4, "mat-option", 28, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.VISIBILITY"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.visibility_options);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 4);
    \u0275\u0275element(7, "input", 5);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, MeetingFormDetailsComponent_Conditional_0_Conditional_12_Template, 10, 10, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, MeetingFormDetailsComponent_Conditional_0_Conditional_13_Template, 20, 22, "div", 1);
    \u0275\u0275conditionalCreate(14, MeetingFormDetailsComponent_Conditional_0_Conditional_14_Template, 10, 11, "div", 7);
    \u0275\u0275conditionalCreate(15, MeetingFormDetailsComponent_Conditional_0_Conditional_15_Template, 7, 3, "div", 8)(16, MeetingFormDetailsComponent_Conditional_0_Conditional_16_Template, 7, 3, "div", 8);
    \u0275\u0275conditionalCreate(17, MeetingFormDetailsComponent_Conditional_0_Conditional_17_Template, 8, 5, "div", 8);
    \u0275\u0275conditionalCreate(18, MeetingFormDetailsComponent_Conditional_0_Conditional_18_Template, 10, 3, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "FORM.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 12, "CALENDAR_EVENT.TITLE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "FORM.TITLE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.allow_multiday ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allow_multiday ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.form().value.all_day ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.can_book_for_anyone ? 15 : ctx_r0.can_book_for_others ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allow_recurrence ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allow_visibility ? 18 : -1);
  }
}
var _MeetingFormDetailsComponent = class _MeetingFormDetailsComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this.form = input(void 0);
    this.force_time = set(Date.now(), {
      hours: 6,
      minutes: 0
    }).valueOf();
    this.duration_info = (time) => {
      const date = this.form().getRawValue().date;
      if (format(date, "yyyy-MM-dd") !== format(time, "yyyy-MM-dd"))
        return "";
      const diff = differenceInMinutes(time, date);
      return ` (${formatDuration({
        hours: Math.floor(diff / 60),
        minutes: diff % 60
      })})`;
    };
    this.visibility_options = [
      { value: "normal", label: "NORMAL" },
      { value: "personal", label: "PERSONAL" },
      { value: "public", label: "PUBLIC" },
      { value: "private", label: "PRIVATE" },
      { value: "confidential", label: "CONFIDENTIAL" }
    ];
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 480;
  }
  get can_book_for_others() {
    return this._settings.get("app.events.can_book_for_others");
  }
  get can_book_for_anyone() {
    return this._settings.get("app.events.can_book_for_anyone");
  }
  get allow_all_day() {
    return this._settings.get("app.events.allow_all_day");
  }
  get allow_visibility() {
    return this._settings.get("app.events.allow_visibility");
  }
  get allow_recurrence() {
    return this._settings.get("app.events.allow_recurrence") && this.form().value.duration <= 24 * 60;
  }
  get allow_multiday() {
    return this._settings.get("app.events.allow_multiday") || this._event_form.is_multiday;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get start_date() {
    const date = this.form().getRawValue().date;
    const date_end = this.form().getRawValue().date_end;
    const is_next_day = format(date, "yyyy-MM-dd") !== format(date_end, "yyyy-MM-dd");
    return is_next_day ? startOfDay(date).valueOf() : addMinutes(date, 30).valueOf();
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.events.allowed_future_days") || 180)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
};
_MeetingFormDetailsComponent.\u0275fac = function MeetingFormDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MeetingFormDetailsComponent)();
};
_MeetingFormDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFormDetailsComponent, selectors: [["meeting-form-details"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [[3, "formGroup"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", 3, "placeholder"], [1, "relative", "min-w-[256px]", "flex-1"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-full", "flex-col"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "use_24hr", "timezone"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-2"], ["name", "date", "formControlName", "date", 3, "to", "use_24hr", "timezone", "range"], ["name", "date", "formControlName", "date_end", 3, "from", "to", "use_24hr", "timezone", "range"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "use_24hr", "extra_info_fn", "timezone"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr", "timezone"], ["for", "host"], ["name", "host", "formControlName", "organiser"], ["for", "recurrence"], ["name", "recurrence", "type", "event", "formControlName", "recurrence", 3, "date"], ["formControlName", "update_master"], ["for", "visibility"], ["appearance", "outline"], ["formControlName", "visibility"], [3, "value"]], template: function MeetingFormDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MeetingFormDetailsComponent_Conditional_0_Template, 19, 16, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.form() ? 0 : -1);
  }
}, dependencies: [
  TranslatePipe,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatCheckboxModule,
  MatCheckbox,
  RecurrenceFieldComponent,
  HostSelectFieldComponent,
  UserSearchFieldComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  MatInputModule,
  MatInput,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel
], encapsulation: 2 });
var MeetingFormDetailsComponent = _MeetingFormDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingFormDetailsComponent, [{
    type: Component,
    args: [{ selector: "meeting-form-details", template: `
        @if (form()) {
            <div [formGroup]="form()">
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-[256px] flex-1">
                        <label for="title">{{
                            'FORM.TITLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                [placeholder]="
                                    'CALENDAR_EVENT.TITLE_PLACEHOLDER'
                                        | translate
                                "
                            />
                            <mat-error>
                                {{ 'FORM.TITLE_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                    @if (!allow_multiday) {
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute -top-2 right-2"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                </div>
                @if (allow_multiday) {
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                                [range]="1"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute -top-2 right-2"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE_END' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date_end"
                                [from]="start_date"
                                [to]="end_date"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                                [range]="2"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                        </div>
                    </div>
                }
                @if (!form().value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time">
                                {{ 'FORM.TIME_START' | translate }}
                                <span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form().getRawValue().date"
                                (ngModelChange)="
                                    form().patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form().controls.date.disabled"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        @if (allow_multiday) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="end-time"
                                    [ngModel]="form().value.date_end"
                                    (ngModelChange)="
                                        form().patchValue({ date_end: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="
                                        form()?.getRawValue()?.date +
                                        30 * 60 * 1000
                                    "
                                    [use_24hr]="use_24hr"
                                    [extra_info_fn]="duration_info"
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                        }
                        @if (!allow_multiday) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form()?.getRawValue()?.date"
                                    [max]="max_duration"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                }
                @if (can_book_for_anyone) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            name="host"
                            formControlName="organiser"
                        ></a-user-search-field>
                    </div>
                } @else if (can_book_for_others) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <host-select-field
                            name="host"
                            formControlName="organiser"
                        ></host-select-field>
                    </div>
                }
                @if (allow_recurrence) {
                    <div class="flex w-full flex-col">
                        <label for="recurrence">
                            {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                        </label>
                        <recurrence-field
                            name="recurrence"
                            type="event"
                            [date]="form().getRawValue().date"
                            formControlName="recurrence"
                        ></recurrence-field>
                        @if (form().value.id) {
                            <mat-checkbox formControlName="update_master">
                                {{ 'FORM.UPDATE_FUTURE' | translate }}
                            </mat-checkbox>
                        }
                    </div>
                }
                @if (allow_visibility) {
                    <div class="flex w-full flex-col">
                        <label for="visibility">
                            {{ 'COMMON.VISIBILITY' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select formControlName="visibility">
                                @for (
                                    option of visibility_options;
                                    track option.value
                                ) {
                                    <mat-option [value]="option.value">
                                        {{
                                            'COMMON.VISIBILITY_' + option.label
                                                | translate
                                        }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatFormFieldModule,
      MatSelectModule,
      MatCheckboxModule,
      RecurrenceFieldComponent,
      HostSelectFieldComponent,
      UserSearchFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFormDetailsComponent, { className: "MeetingFormDetailsComponent", filePath: "apps/workplace/src/app/book/meeting-flow/meeting-form-details.component.ts", lineNumber: 267 });
})();

// apps/concierge/src/app/day-view/event-book-modal.component.ts
var _c02 = (a0, a1, a2, a3) => ({ date: a0, duration: a1, all_day: a2, zone_id: a3 });
var _c1 = () => ({ standalone: true });
function EventBookModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 4)(2, "div", 5);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 7);
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function EventBookModalComponent_Conditional_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.findAvailableTime());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 16);
    \u0275\u0275listener("click", function EventBookModalComponent_Conditional_18_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide_block.attendees = !ctx_r1.hide_block.attendees);
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275element(15, "a-user-list-field", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "CALENDAR_EVENT.ATTENDEES"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "COMMON.AVAILABILITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r1.hide_block.attendees ? "Expand attendees" : "Collapse attendees");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.attendees ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.attendees ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("guests", ctx_r1.allow_externals);
  }
}
function EventBookModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.CAPACITY_WARNING"), " ");
  }
}
function EventBookModalComponent_Conditional_33_Conditional_13_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r5 = ctx.$implicit;
    \u0275\u0275property("value", code_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", code_r5, " ");
  }
}
function EventBookModalComponent_Conditional_33_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 20)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 22);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "input", 23, 0);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("ngModelChange", function EventBookModalComponent_Conditional_33_Conditional_13_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.code_filter.next($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "mat-option", 24);
    \u0275\u0275repeaterCreate(10, EventBookModalComponent_Conditional_33_Conditional_13_For_11_Template, 2, 2, "mat-option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-error");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "CALENDAR_EVENT.CATERING_CHARGE_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 8, "CALENDAR_EVENT.CATERING_CHARGE_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.code_filter.getValue())("ngModelOptions", \u0275\u0275pureFunction0(16, _c1))("placeholder", \u0275\u0275pipeBind1(8, 10, "CALENDAR_EVENT.CATERING_CHARGE_CODE_SEACH"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 12, ctx_r1.filtered_codes));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED"), " ");
  }
}
function EventBookModalComponent_Conditional_33_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 26);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "textarea", 27);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mt-2", !\u0275\u0275pipeBind1(1, 5, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "CALENDAR_EVENT.CATERING_NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 9, "CALENDAR_EVENT.CATERING_NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, "CALENDAR_EVENT.CATERING_NOTES_REQUIRED"), " ");
  }
}
function EventBookModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 4)(2, "div", 5);
    \u0275\u0275text(3, " 4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 7);
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function EventBookModalComponent_Conditional_33_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide_block.catering = !ctx_r1.hide_block.catering);
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275element(12, "catering-list-field", 19);
    \u0275\u0275conditionalCreate(13, EventBookModalComponent_Conditional_33_Conditional_13_Template, 16, 17, "mat-form-field", 20);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalCreate(15, EventBookModalComponent_Conditional_33_Conditional_15_Template, 10, 13, "mat-form-field", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "CALENDAR_EVENT.CATERING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.hide_block.catering ? "Expand catering" : "Collapse catering");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.catering ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.catering ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("options", \u0275\u0275pureFunction4(11, _c02, ctx_r1.form.value.date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, (ctx_r1.form.value == null ? null : ctx_r1.form.value.resources == null ? null : ctx_r1.form.value.resources.length) ? ctx_r1.form.value == null ? null : ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id : ""));
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(14, 9, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes) ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) ? 15 : -1);
  }
}
function EventBookModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 7);
    \u0275\u0275elementStart(9, "button", 28);
    \u0275\u0275listener("click", function EventBookModalComponent_Conditional_35_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide_block.assets = !ctx_r1.hide_block.assets);
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275element(13, "asset-list-field", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !\u0275\u0275pipeBind1(4, 6, ctx_r1.has_catering) ? "4" : "5", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "RESOURCE.ASSETS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.hide_block.assets ? "Expand assets" : "Collapse assets");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.assets ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.assets ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("options", \u0275\u0275pureFunction4(10, _c02, ctx_r1.form.getRawValue().date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, (ctx_r1.form.value == null ? null : ctx_r1.form.value.resources == null ? null : ctx_r1.form.value.resources.length) ? ctx_r1.form.value == null ? null : ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id : ""));
  }
}
function EventBookModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 30)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 31)(10, "label", 32);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "rich-text-input", 33);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !\u0275\u0275pipeBind1(4, 4, ctx_r1.has_catering) || !ctx_r1.has_assets ? !\u0275\u0275pipeBind1(5, 6, ctx_r1.has_catering) && !ctx_r1.has_assets ? "4" : "5" : "6", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "CALENDAR_EVENT.NOTES_HEADER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "CALENDAR_EVENT.NOTES_INFO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 12, "CALENDAR_EVENT.NOTES_INFO"));
  }
}
var _EventBookModalComponent = class _EventBookModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._event_form = inject(EventFormService);
    this._settings = inject(SettingsService);
    this._catering = inject(CateringOrderStateService);
    this._dialog_ref = inject(MatDialogRef);
    this._dialog = inject(MatDialog);
    this.event = new EventEmitter();
    this.loading = new BehaviorSubject(false);
    this.hide_block = {};
    this.code_filter = new BehaviorSubject("");
    this.has_catering = this._catering.available_menu.pipe(map((l) => l.length > 0));
    this.has_codes = this._catering.charge_codes.pipe(map((l) => l.length > 0), tap((has_codes) => {
      if (!has_codes) {
        this.form.get("catering_charge_code").setValidators([]);
        this.form.updateValueAndValidity();
      }
    }));
    this.filtered_codes = combineLatest([
      this.code_filter,
      this._catering.charge_codes
    ]).pipe(map(([s, l]) => l.filter((_) => _.toLowerCase().includes(s.toLowerCase()))));
  }
  get form() {
    return this._event_form.form;
  }
  get has_assets() {
    return !!this._settings.get("app.events.has_assets");
  }
  get hide_notes() {
    return !!this._settings.get("app.events.hide_notes");
  }
  get hide_attendees() {
    return !!this._settings.get("app.events.hide_attendees");
  }
  get allow_externals() {
    return this._settings.get("app.events.allow_externals");
  }
  get strict_capacity_check() {
    return this._settings.get("app.events.strict_capacity_check");
  }
  get total_capacity() {
    return this.form.value.resources?.reduce((c, i) => c + i.capacity, 0) || 0;
  }
  get allow_multiday() {
    return this._settings.get("app.events.allow_multiday") || this._event_form.is_multiday;
  }
  get attendee_count() {
    const user = currentUser();
    let count = this.form.value.attendees?.length || 0;
    if (!this.form.value.attendees.find((_) => _.email.toLowerCase() === user.email.toLowerCase())) {
      count += 1;
    }
    return count;
  }
  ngOnInit() {
    this._event_form.newForm(this._data.event);
  }
  findAvailableTime() {
    const { attendees, organiser, date, duration } = this.form.value;
    const ref = this._dialog.open(FindAvailabilityModalComponent, {
      data: {
        users: attendees,
        host: organiser || currentUser(),
        date,
        duration
      }
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.form.patchValue({
        date: ref.componentInstance.date(),
        attendees: ref.componentInstance.users(),
        duration: ref.componentInstance.duration()
      });
    });
  }
  async save() {
    this.loading.next(true);
    if (!this.form.value.host) {
      this.form.patchValue({
        host: currentUser().email
      });
    }
    const event = await this._event_form.postForm().catch((_) => {
      notifyError(_);
      this.loading.next(false);
      throw _;
    });
    this.event.emit({ reason: "done", metadata: event });
    notifySuccess(i18n("CALENDAR_EVENT.SUCCESS"));
    this._dialog_ref.close();
    this.loading.next(false);
  }
};
_EventBookModalComponent.\u0275fac = function EventBookModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventBookModalComponent)();
};
_EventBookModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventBookModalComponent, selectors: [["event-book-modal"]], outputs: { event: "event" }, decls: 37, vars: 30, consts: [["input", ""], [3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "p-2"], [1, "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "w-px", "flex-1"], ["icon", "", "name", "toggle-details-meeting", "matRipple", "", 3, "click"], [1, "overflow-hidden"], [1, "mt-4", 3, "form"], ["icon", "", "name", "toggle-spaces-meeting", "matRipple", "", 3, "click"], [1, "flex", "flex-col", "items-center", "overflow-hidden"], [1, "bg-warning", "text-warning-content", "mx-auto", "my-2", "inline-flex", "rounded-sm", "p-2", "text-xs", "shadow-sm"], ["formControlName", "resources", 1, "w-full", 3, "multiday"], ["matRipple", "", "name", "find-attendee-availability", 1, "text-info", "bg-none", "text-xs", "underline", 3, "click"], ["icon", "", "name", "toggle-attendees-meeting", "matRipple", "", 3, "click"], ["formControlName", "attendees", 1, "mt-4", 3, "guests"], ["icon", "", "name", "toggle-catering-meeting", "matRipple", "", 3, "click"], ["formControlName", "catering", 3, "options"], ["appearance", "outline", 1, "mt-2", "w-full"], ["appearance", "outline", 1, "w-full", 3, "mt-2"], ["formControlName", "catering_charge_code", 3, "placeholder"], [1, "border-base-200", "bg-base-100", "sticky", "top-0", "z-50", "w-full", "rounded-none", "border-x-0", "border-t-0", "border-b", "px-4", "py-3", "text-base", "focus:border-b", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "hidden"], [3, "value"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "catering_notes", 3, "placeholder"], ["icon", "", "name", "toggle-assets-meeting", "matRipple", "", 3, "click"], ["formControlName", "assets", 3, "options"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "w-full", "flex-col"], ["for", "notes"], ["name", "notes", "formControlName", "body", 3, "placeholder"]], template: function EventBookModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("confirm", function EventBookModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h3", 4)(7, "div", 5);
    \u0275\u0275text(8, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "div", 7);
    \u0275\u0275elementStart(13, "button", 8);
    \u0275\u0275listener("click", function EventBookModalComponent_Template_button_click_13_listener() {
      return ctx.hide_block.details = !ctx.hide_block.details;
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 9);
    \u0275\u0275element(17, "meeting-form-details", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, EventBookModalComponent_Conditional_18_Template, 16, 10, "section", 3);
    \u0275\u0275elementStart(19, "section", 3)(20, "h3", 4)(21, "div", 5);
    \u0275\u0275text(22, " 3 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 6);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "div", 7);
    \u0275\u0275elementStart(27, "button", 11);
    \u0275\u0275listener("click", function EventBookModalComponent_Template_button_click_27_listener() {
      return ctx.hide_block.resources = !ctx.hide_block.resources;
    });
    \u0275\u0275elementStart(28, "icon");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 12);
    \u0275\u0275conditionalCreate(31, EventBookModalComponent_Conditional_31_Template, 3, 3, "div", 13);
    \u0275\u0275element(32, "space-list-field", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, EventBookModalComponent_Conditional_33_Template, 16, 16, "section", 3);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275conditionalCreate(35, EventBookModalComponent_Conditional_35_Template, 14, 15, "section", 3);
    \u0275\u0275conditionalCreate(36, EventBookModalComponent_Conditional_36_Template, 15, 14, "section", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 18, ctx.form.value.id ? "APP.CONCIERGE.ROOMS_BOOK_EDIT" : "APP.CONCIERGE.ROOMS_BOOK_NEW"))("loading", \u0275\u0275pipeBind1(2, 20, ctx.loading) ? \u0275\u0275pipeBind1(3, 22, "CALENDAR_EVENT.LOADING") : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 24, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx.hide_block.details ? "Expand details" : "Collapse details");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.hide_block.details ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx.hide_block.details ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_attendees ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "RESOURCE.ROOM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx.hide_block.resources ? "Expand rooms" : "Collapse rooms");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.hide_block.resources ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx.hide_block.resources ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.strict_capacity_check && ctx.total_capacity && ctx.total_capacity <= (ctx.form.value.attendees == null ? null : ctx.form.value.attendees.length) ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("multiday", ctx.allow_multiday);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(34, 28, ctx.has_catering) ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.has_assets ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_notes ? 36 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  FullscreenModalShellComponent,
  RichTextInputComponent,
  SpaceListFieldComponent,
  AssetListFieldComponent,
  CateringListFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatError,
  MatInputModule,
  MatInput,
  TranslatePipe,
  IconComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MeetingFormDetailsComponent,
  UserListFieldComponent,
  MatAutocompleteModule,
  MatOption,
  FormsModule,
  NgModel,
  MatSelectModule,
  MatSelect
], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var EventBookModalComponent = _EventBookModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventBookModalComponent, [{
    type: Component,
    args: [{ selector: "event-book-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ROOMS_BOOK_EDIT'
                    : 'APP.CONCIERGE.ROOMS_BOOK_NEW'
                ) | translate
            "
            [loading]="
                (loading | async) ? ('CALENDAR_EVENT.LOADING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <section class="p-2">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'BOOKINGS.DETAILS' | translate }}
                        </div>
                        <div class="w-px flex-1"></div>
                        <button
                            icon
                            name="toggle-details-meeting"
                            matRipple
                            (click)="hide_block.details = !hide_block.details"
                            [attr.aria-label]="hide_block.details ? 'Expand details' : 'Collapse details'"
                        >
                            <icon>{{
                                hide_block.details
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="overflow-hidden"
                        [@show]="hide_block.details ? 'hide' : 'show'"
                    >
                        <meeting-form-details
                            class="mt-4"
                            [form]="form"
                        ></meeting-form-details>
                    </div>
                </section>
                @if (!hide_attendees) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                matRipple
                                name="find-attendee-availability"
                                class="text-info bg-none text-xs underline"
                                (click)="findAvailableTime()"
                            >
                                {{ 'COMMON.AVAILABILITY' | translate }}
                            </button>
                            <button
                                icon
                                name="toggle-attendees-meeting"
                                matRipple
                                (click)="
                                    hide_block.attendees = !hide_block.attendees
                                "
                                [attr.aria-label]="hide_block.attendees ? 'Expand attendees' : 'Collapse attendees'"
                            >
                                <icon>{{
                                    hide_block.attendees
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.attendees ? 'hide' : 'show'"
                        >
                            <a-user-list-field
                                class="mt-4"
                                formControlName="attendees"
                                [guests]="allow_externals"
                            ></a-user-list-field>
                        </div>
                    </section>
                }
                <section class="p-2">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            3
                        </div>
                        <div class="text-xl">
                            {{ 'RESOURCE.ROOM' | translate }}
                        </div>
                        <div class="w-px flex-1"></div>
                        <button
                            icon
                            name="toggle-spaces-meeting"
                            matRipple
                            (click)="
                                hide_block.resources = !hide_block.resources
                            "
                            [attr.aria-label]="hide_block.resources ? 'Expand rooms' : 'Collapse rooms'"
                        >
                            <icon>{{
                                hide_block.resources
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="flex flex-col items-center overflow-hidden"
                        [@show]="hide_block.resources ? 'hide' : 'show'"
                    >
                        @if (
                            !strict_capacity_check &&
                            total_capacity &&
                            total_capacity <= form.value.attendees?.length
                        ) {
                            <div
                                class="bg-warning text-warning-content mx-auto my-2 inline-flex rounded-sm p-2 text-xs shadow-sm"
                            >
                                {{
                                    'CALENDAR_EVENT.CAPACITY_WARNING'
                                        | translate
                                }}
                            </div>
                        }
                        <space-list-field
                            class="w-full"
                            formControlName="resources"
                            [multiday]="allow_multiday"
                        ></space-list-field>
                    </div>
                </section>
                @if (has_catering | async) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                4
                            </div>
                            <div class="text-xl">
                                {{ 'CALENDAR_EVENT.CATERING' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                name="toggle-catering-meeting"
                                matRipple
                                (click)="
                                    hide_block.catering = !hide_block.catering
                                "
                                [attr.aria-label]="hide_block.catering ? 'Expand catering' : 'Collapse catering'"
                            >
                                <icon>{{
                                    hide_block.catering
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.catering ? 'hide' : 'show'"
                        >
                            <catering-list-field
                                formControlName="catering"
                                [options]="{
                                    date: form.value.date,
                                    duration: form.value.duration,
                                    all_day: form.value.all_day,
                                    zone_id: form.value?.resources?.length
                                        ? form.value?.resources[0]?.level
                                              ?.parent_id
                                        : '',
                                }"
                            ></catering-list-field>
                            @if (
                                form.value.catering?.length && has_codes | async
                            ) {
                                <mat-form-field
                                    appearance="outline"
                                    class="mt-2 w-full"
                                >
                                    <mat-label>{{ 'CALENDAR_EVENT.CATERING_CHARGE_CODE' | translate }}</mat-label>
                                    <mat-select
                                        formControlName="catering_charge_code"
                                        [placeholder]="
                                            'CALENDAR_EVENT.CATERING_CHARGE_CODE'
                                                | translate
                                        "
                                    >
                                        <input
                                            #input
                                            class="border-base-200 bg-base-100 sticky top-0 z-50 w-full rounded-none border-x-0 border-t-0 border-b px-4 py-3 text-base focus:border-b"
                                            [ngModel]="code_filter.getValue()"
                                            (ngModelChange)="
                                                code_filter.next($event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [placeholder]="
                                                'CALENDAR_EVENT.CATERING_CHARGE_CODE_SEACH'
                                                    | translate
                                            "
                                        />
                                        <mat-option class="hidden"></mat-option>
                                        @for (
                                            code of filtered_codes | async;
                                            track code
                                        ) {
                                            <mat-option [value]="code">
                                                {{ code }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                    <mat-error>
                                        {{
                                            'CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            }
                            @if (form.value.catering?.length) {
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                    [class.mt-2]="
                                        !(
                                            form.value.catering?.length &&
                                                has_codes | async
                                        )
                                    "
                                >
                                    <mat-label>{{ 'CALENDAR_EVENT.CATERING_NOTES' | translate }}</mat-label>
                                    <textarea
                                        matInput
                                        formControlName="catering_notes"
                                        [placeholder]="
                                            'CALENDAR_EVENT.CATERING_NOTES'
                                                | translate
                                        "
                                    ></textarea>
                                    <mat-error>
                                        {{
                                            'CALENDAR_EVENT.CATERING_NOTES_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            }
                        </div>
                    </section>
                }
                @if (has_assets) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ !(has_catering | async) ? '4' : '5' }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                name="toggle-assets-meeting"
                                matRipple
                                (click)="hide_block.assets = !hide_block.assets"
                                [attr.aria-label]="hide_block.assets ? 'Expand assets' : 'Collapse assets'"
                            >
                                <icon>{{
                                    hide_block.assets
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.assets ? 'hide' : 'show'"
                        >
                            <asset-list-field
                                [options]="{
                                    date: form.getRawValue().date,
                                    duration: form.value.duration,
                                    all_day: form.value.all_day,
                                    zone_id: form.value?.resources?.length
                                        ? form.value?.resources[0]?.level
                                              ?.parent_id
                                        : '',
                                }"
                                formControlName="assets"
                            ></asset-list-field>
                        </div>
                    </section>
                }
                @if (!hide_notes) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{
                                    !(has_catering | async) || !has_assets
                                        ? !(has_catering | async) && !has_assets
                                            ? '4'
                                            : '5'
                                        : '6'
                                }}
                            </div>
                            <div class="text-xl">
                                {{ 'CALENDAR_EVENT.NOTES_HEADER' | translate }}
                            </div>
                        </h3>
                        <div class="flex w-full flex-col">
                            <label for="notes">
                                {{ 'CALENDAR_EVENT.NOTES_INFO' | translate }}
                            </label>
                            <rich-text-input
                                name="notes"
                                formControlName="body"
                                [placeholder]="
                                    'CALENDAR_EVENT.NOTES_INFO' | translate
                                "
                            ></rich-text-input>
                        </div>
                    </section>
                }
            </form>
        </fullscreen-modal-shell>
    `, animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [
      CommonModule,
      FullscreenModalShellComponent,
      RichTextInputComponent,
      SpaceListFieldComponent,
      AssetListFieldComponent,
      CateringListFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      IconComponent,
      ReactiveFormsModule,
      MeetingFormDetailsComponent,
      UserListFieldComponent,
      MatAutocompleteModule,
      FormsModule,
      MatSelectModule
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventBookModalComponent, { className: "EventBookModalComponent", filePath: "apps/concierge/src/app/day-view/event-book-modal.component.ts", lineNumber: 421 });
})();

// apps/concierge/src/app/day-view/events-state.service.ts
function periodFor(period, date, tz_offset = 0, week_start = 0) {
  const start_result = period === "month" ? startOfMonth(date) : period === "week" ? startOfWeek(date) : startOfDay(date);
  const end_result = period === "month" ? endOfMonth(date) : period === "week" ? endOfWeek(date, { weekStartsOn: week_start }) : endOfDay(date);
  const start = addMinutes(start_result, tz_offset * 60);
  const end = addMinutes(end_result, tz_offset * 60);
  return { start, end };
}
var _EventsStateService = class _EventsStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._approval_events = inject(EventApprovalStateService);
    this._poll = new BehaviorSubject(0);
    this._period = new BehaviorSubject("day");
    this._event = new BehaviorSubject(null);
    this._removed_events = new BehaviorSubject([]);
    this._added_events = new BehaviorSubject([]);
    this._filters = new BehaviorSubject({});
    this._options = new BehaviorSubject({});
    this._date = new BehaviorSubject((/* @__PURE__ */ new Date()).valueOf());
    this._zones = new BehaviorSubject([]);
    this._loading = new BehaviorSubject(false);
    this._approval_filter = new BehaviorSubject("all");
    this.date = this._date.asObservable();
    this.zones = this._zones.asObservable();
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.event = this._event.asObservable();
    this.period = this._period.asObservable();
    this.approval_filter = this._approval_filter.asObservable();
    this.spaces = combineLatest([
      this._zones,
      this._org.active_region.pipe(startWith(null), distinctUntilChanged((a, b) => a?.id === b?.id)),
      this._org.active_building.pipe(startWith(null), distinctUntilChanged((a, b) => a?.id === b?.id))
    ]).pipe(debounceTime(300), tap(() => this.unsubWith("bind:")), switchMap(([zone_ids]) => {
      this._loading.next(true);
      if (!zone_ids?.length || zone_ids[0] === this._org.region?.id) {
        zone_ids = (this._settings.get("app.use_region") ? this._org.buildingsForRegion(this._org.region).map((_) => _.id) : null) || [this._org.building?.id];
      }
      const valid_zones = (zone_ids || []).filter(Boolean);
      if (!valid_zones.length)
        return of([]);
      return forkJoin(valid_zones.map((id) => requestSpacesForZone(id)));
    }), map((l) => {
      const api_spaces = flatten(l).filter((_) => _.bookable).sort((a, b) => (a.display_name || a.name || "").localeCompare(b.display_name || b.name || ""));
      const mock_spaces = this._approval_events.mockSpaces();
      const existing = new Set(api_spaces.map((s) => s.email));
      const new_spaces = mock_spaces.filter((s) => !existing.has(s.email));
      return [...api_spaces, ...new_spaces];
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.event_list = combineLatest([
      this._period,
      this._zones,
      this._date,
      this.spaces,
      this._poll
    ]).pipe(filter(([period]) => !!period), debounceTime(300), switchMap(([period, zones, date, spaces]) => {
      if (!zones?.length)
        return of([]);
      if (zones[0] === this._org.region?.id) {
        zones = (this._settings.get("app.use_region") ? this._org.buildingsForRegion(this._org.region).map((_) => _.id) : null) || [this._org.building?.id];
      }
      this._loading.next(true);
      const { start, end } = periodFor(period, date, this.tz_offset, this._week_start);
      this._removed_events.next([]);
      this._added_events.next([]);
      const spaces_with_driver = spaces.filter((s) => s.room_booking_url);
      const spaces_without_driver = spaces.filter((s) => !s.room_booking_url);
      const observables = [];
      if (spaces_without_driver.length > 0) {
        observables.push(queryEvents({
          strict: "limit",
          zone_ids: zones.join(","),
          period_start: getUnixTime(start),
          period_end: getUnixTime(end)
        }).pipe(map((events) => events.filter((event) => event.resources.some((resource) => spaces_without_driver.some((space) => space.id === resource.id || space.email === resource.email)))), catchError(() => of([]))));
      }
      for (const space of spaces_with_driver) {
        const driver_events$ = new Observable((subscriber) => {
          const mod = wh(space.id, "Bookings");
          const binding = mod.variable("bookings");
          const unsub = binding.bindThenSubscribe((value) => {
            const events = (value || []).map((bkn) => new CalendarEvent(bkn));
            subscriber.next(events);
          });
          this.subscription(`bind:${space.id}`, unsub);
          return () => this.unsubWith(`bind:${space.id}`);
        });
        observables.push(driver_events$.pipe(catchError(() => of([]))));
      }
      const group_calendar = this._settings.get("app.group_events_calendar");
      if (group_calendar) {
        observables.push(queryEvents({
          period_start: getUnixTime(start),
          period_end: getUnixTime(end),
          calendars: group_calendar
        }).pipe(map((list) => list.filter((_) => _.extension_data?.shared_event)), catchError(() => of([]))));
      }
      if (observables.length === 0)
        return of([]);
      if (observables.length === 1)
        return observables[0];
      return combineLatest(observables).pipe(map((event_lists) => {
        const all_events = flatten(event_lists);
        const seen = /* @__PURE__ */ new Set();
        return all_events.filter((e) => {
          if (seen.has(e.id))
            return false;
          seen.add(e.id);
          return true;
        });
      }));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.filtered = combineLatest([
      this.event_list,
      this._removed_events,
      this._added_events,
      this._filters,
      this._date,
      this._period,
      this._zones,
      this._approval_events.grouped_calendar_events$
    ]).pipe(map(([events, removed, added, filters, date, period, zones, mock_events]) => {
      let event_list = [...events];
      event_list.filter((_) => !removed.find((e) => _.id === e.id || _.ical_uid === e.ical_uid));
      event_list = event_list.concat(added);
      const { start, end } = periodFor(period, date, this.tz_offset, this._week_start);
      const filtered_events = this.filterEvents(event_list, start, end, filters, zones);
      const mock_in_range = mock_events.filter((e) => timePeriodsIntersect(start.valueOf(), end.valueOf(), e.date, e.date + e.duration * 60 * 1e3));
      return [...filtered_events, ...mock_in_range];
    }), shareReplay(1));
    this.approval_filtered = combineLatest([this.filtered, this._approval_filter]).pipe(map(([events, filter_value]) => {
      switch (filter_value) {
        case "incoming":
          return events.filter((e) => e.status === "tentative" || e.status === "none");
        case "approved":
          return events.filter((e) => e.status === "approved");
        case "declined":
          return events.filter((e) => e.status === "declined");
        default:
          return events;
      }
    }), shareReplay(1));
    this.pending = of(1).pipe(switchMap(() => {
      const mod = this._org.module("approvals", "RoomBookingApproval");
      if (!mod)
        return of([]);
      const binding = mod.binding("approval_required");
      this.subscription("pending", binding.bind());
      return binding.listen().pipe(map((_) => flatten(Object.values(_ || {}))?.map((i) => new CalendarEvent(i))));
    }), shareReplay(1));
    this.setFilters = (details) => this._filters.next(details);
    this.setDate = (date) => this._date.next(date);
    this.setPeriod = (period) => this._period.next(period);
    this.setZones = (zones) => this._zones.next(zones);
    this.setEvent = (event) => this._event.next(event);
    this.setApprovalFilter = (filter_value) => this._approval_filter.next(filter_value);
  }
  /** Active filters */
  get filters() {
    return this._filters.getValue();
  }
  get time_format() {
    return this._settings.time_format;
  }
  get tz_offset() {
    const tz = this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
  }
  get _week_start() {
    return this._settings.get("app.week_start");
  }
  getDate() {
    return this._date.getValue();
  }
  getPeriod() {
    return this._period.getValue();
  }
  setUIOptions(options) {
    const old_options = this._options.getValue();
    this._options.next(__spreadValues(__spreadValues({}, old_options), options));
  }
  startPolling(period = "day", delay = 30 * 1e3) {
    this._period.next(period);
    return this.poll(delay);
  }
  poll(delay = 30 * 1e3) {
    this._poll.next(Date.now());
    this.interval("polling", () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this._poll.next(0);
    this.clearInterval("polling");
  }
  async newBooking(event) {
    const ref = this._dialog.open(EventBookModalComponent, {
      data: { event }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (details?.reason !== "done")
      return;
    this.replace(details.metadata);
  }
  async removeBooking(event) {
    const time = `${format(event.date, "dd MMM yyyy " + this.time_format)}`;
    const resource_name = event.space?.display_name || event.location;
    const details = await openConfirmModal({
      title: i18n("APP.CONCIERGE.BOOKING_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.BOOKING_REMOVE_MSG", {
        name: resource_name,
        time
      }),
      icon: { class: "material-symbols-rounded", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return false;
    details.loading(i18n("APP.CONCIERGE.BOOKING_REMOVE_LOADING"));
    await declineEvent(event.id, {
      calendar: event.calendar || event.mailbox || event.host,
      system_id: event.system?.id
    }).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.BOOKING_REMOVE_ERROR", { error: e }));
      details.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.BOOKING_REMOVE_SUCCESS"));
    this.remove(event);
    this._dialog.closeAll();
    return true;
  }
  /**
   * Update booking in the bookings list
   * @param booking
   */
  replace(booking) {
    this._removed_events.next([...this._added_events.getValue(), booking]);
    this._added_events.next([...this._added_events.getValue(), booking]);
  }
  /**
   * Remove booking in the bookings list
   * @param booking
   */
  remove(booking) {
    this._removed_events.next([
      ...this._removed_events.getValue(),
      booking
    ]);
  }
  filterEvents(events, start, end, filters, zones = []) {
    return events.filter((bkn) => {
      const intersects = timePeriodsIntersect(start.valueOf(), end.valueOf(), bkn.date, bkn.date + bkn.duration * 60 * 1e3);
      const has_space = !filters.space_emails?.length || !!bkn.resources.find((space) => filters.space_emails.includes(space.email));
      const in_zones = !filters.zone_ids?.length || !!bkn.resources.find((space) => space.zones.find((zone) => filters.zone_ids.includes(zone)));
      return intersects && has_space && in_zones;
    });
  }
};
_EventsStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EventsStateService_BaseFactory;
  return function EventsStateService_Factory(__ngFactoryType__) {
    return (\u0275EventsStateService_BaseFactory || (\u0275EventsStateService_BaseFactory = \u0275\u0275getInheritedFactory(_EventsStateService)))(__ngFactoryType__ || _EventsStateService);
  };
})();
_EventsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventsStateService, factory: _EventsStateService.\u0275fac, providedIn: "root" });
var EventsStateService = _EventsStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  EventsStateService
};
//# sourceMappingURL=chunk-HZSRGTQ4.js.map
